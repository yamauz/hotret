import { BrowserWindow, app, App } from "electron";
import installExtension, {
  REACT_DEVELOPER_TOOLS
} from "electron-devtools-installer";
import webpackServer from "./webpack/webpack-server";

const isDev = process.env["NODE_ENV"] === "development";

class ElectronTest {
  mainWindow: BrowserWindow | null = null;
  app: App;

  constructor(app: App) {
    this.app = app;
    this.app.on("window-all-closed", this.onWindowAllClosed.bind(this));
    this.app.on("ready", this.create.bind(this));
    this.app.on("activate", this.onActivated.bind(this));
  }

  onWindowAllClosed(): void {
    this.app.quit();
    return;
  }

  create(): void {
    this.mainWindow = new BrowserWindow({
      width: 800,
      height: 800,
      minWidth: 500,
      minHeight: 200,
      acceptFirstMouse: true,
      titleBarStyle: "hidden"
    });

    if (isDev) {
      // Load index.html via webpack dev server.
      webpackServer();
      this.mainWindow.loadURL("http://localhost:3000/index.html");

      // Open the DevTools.
      this.mainWindow.webContents.openDevTools();
    } else {
      // Load index.html from the file system.
      this.mainWindow.loadFile("dist/index.html");
    }

    // this.mainWindow.loadURL(
    //   isDev
    //     ? "http://localhost:3000"
    //     : `file://${path.join(__dirname, "dist/index.html")}`
    // );

    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });
    return;
  }

  onReady(): void {
    if (isDev) {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name: string) => {
          console.log(`Added Extension:  ${name}`);
          this.create();
        })
        .catch((err: string) => console.log("An error occurred: ", err));
    } else {
      this.create();
    }
    return;
  }

  onActivated(): void {
    if (this.mainWindow === null) {
      this.create();
    }
    return;
  }
}

const MyApp: ElectronTest = new ElectronTest(app);
