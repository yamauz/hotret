import * as webpack from "webpack";
import * as path from "path";
import * as nodeExternals from "webpack-node-externals";
const MODE = "development";
const SRC_DIR = path.resolve(__dirname, "src");
const defaultInclude = [SRC_DIR];

const mainConfig: webpack.Configuration = {
  mode: MODE,
  // target: "electron-main",
  target: "node",
  entry: "./src/main.ts",
  output: {
    filename: "main.bundle.js"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        use: [{ loader: "ts-loader" }]
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
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
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
        include: defaultInclude
      }
    ]
  }
};

export default [mainConfig, rendererConfig];
