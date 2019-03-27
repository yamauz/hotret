import * as webpack from "webpack";
import * as path from "path";
const MODE = "development";
const SRC_DIR = path.resolve(__dirname, "src");
const defaultInclude = [SRC_DIR];

const mainConfig: webpack.Configuration = {
  mode: MODE,
  target: "electron-main",
  entry: "./src/main.ts",
  output: {
    filename: "main.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: [{ loader: "ts-loader" }],
        include: defaultInclude
      }
    ]
  }
};

const rendererConfig: webpack.Configuration = {
  mode: MODE,
  target: "electron-renderer",
  entry: "./src/renderer.tsx",
  output: {
    filename: "renderer.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: [{ loader: "ts-loader" }],
        include: defaultInclude
      }
    ]
  }
};

export default [mainConfig, rendererConfig];
