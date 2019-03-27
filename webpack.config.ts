import * as webpack from "webpack";
const MODE = "development";

const mainConfig: webpack.Configuration = {
  mode: MODE,
  entry: "./src/main.ts",
  output: {
    filename: "main.bundle.js"
  }
};

const rendererConfig: webpack.Configuration = {
  mode: MODE,
  entry: "./src/renderer.tsx",
  output: {
    filename: "renderer.bundle.js"
  }
};

export default [mainConfig, rendererConfig];
