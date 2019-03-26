import * as path from "path";
import * as webpack from "webpack";
const SRC_DIR = path.resolve(__dirname, "src");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const defaultInclude = [SRC_DIR];

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    path: OUTPUT_DIR,
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

export default config;
