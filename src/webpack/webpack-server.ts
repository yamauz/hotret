// Based on: https://webpack.js.org/guides/development/#using-webpack-dev-middleware
// import * as express from "express";
import * as Express from "express";
import * as webpack from "webpack";
import * as webpackMerge from "webpack-merge";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as configProd from "./webpack.config.prod.js";
import * as configDev from "./webpack.config.dev.js";

const webpackServer = (): void => {
  // const app = express();
  const app = Express();
  const config = webpackMerge(configProd, configDev);
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        // Older versions of electron produce garbled output because of formatting in Windows.
        // (Newer versions seem to strip formatting from the get go)
        // https://github.com/electron/electron/issues/11488
        //colors: !(process.platform === "win32")
      }
    })
  );
  app.use(require("webpack-hot-middleware")(compiler));
  app.listen(3000, function() {
    console.log("Example app listening on port 3000!\n");
  });
};

export default webpackServer;
