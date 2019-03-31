/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nvar electron_devtools_installer_1 = __webpack_require__(/*! electron-devtools-installer */ \"electron-devtools-installer\");\r\nvar webpack_server_1 = __webpack_require__(/*! ./webpack/webpack-server */ \"./src/webpack/webpack-server.ts\");\r\nvar isDev = \"development\" === \"development\";\r\nvar ElectronTest = /** @class */ (function () {\r\n    function ElectronTest(app) {\r\n        this.mainWindow = null;\r\n        this.app = app;\r\n        this.app.on(\"window-all-closed\", this.onWindowAllClosed.bind(this));\r\n        this.app.on(\"ready\", this.create.bind(this));\r\n        this.app.on(\"activate\", this.onActivated.bind(this));\r\n    }\r\n    ElectronTest.prototype.onWindowAllClosed = function () {\r\n        this.app.quit();\r\n        return;\r\n    };\r\n    ElectronTest.prototype.create = function () {\r\n        var _this = this;\r\n        this.mainWindow = new electron_1.BrowserWindow({\r\n            width: 800,\r\n            height: 800,\r\n            minWidth: 500,\r\n            minHeight: 200,\r\n            acceptFirstMouse: true,\r\n            titleBarStyle: \"hidden\"\r\n        });\r\n        if (isDev) {\r\n            // Load index.html via webpack dev server.\r\n            webpack_server_1.default();\r\n            this.mainWindow.loadURL(\"http://localhost:3000/index.html\");\r\n            // Open the DevTools.\r\n            this.mainWindow.webContents.openDevTools();\r\n        }\r\n        else {\r\n            // Load index.html from the file system.\r\n            this.mainWindow.loadFile(\"dist/index.html\");\r\n        }\r\n        // this.mainWindow.loadURL(\r\n        //   isDev\r\n        //     ? \"http://localhost:3000\"\r\n        //     : `file://${path.join(__dirname, \"dist/index.html\")}`\r\n        // );\r\n        this.mainWindow.on(\"closed\", function () {\r\n            _this.mainWindow = null;\r\n        });\r\n        return;\r\n    };\r\n    ElectronTest.prototype.onReady = function () {\r\n        var _this = this;\r\n        if (isDev) {\r\n            electron_devtools_installer_1.default(electron_devtools_installer_1.REACT_DEVELOPER_TOOLS)\r\n                .then(function (name) {\r\n                console.log(\"Added Extension:  \" + name);\r\n                _this.create();\r\n            })\r\n                .catch(function (err) { return console.log(\"An error occurred: \", err); });\r\n        }\r\n        else {\r\n            this.create();\r\n        }\r\n        return;\r\n    };\r\n    ElectronTest.prototype.onActivated = function () {\r\n        if (this.mainWindow === null) {\r\n            this.create();\r\n        }\r\n        return;\r\n    };\r\n    return ElectronTest;\r\n}());\r\nvar MyApp = new ElectronTest(electron_1.app);\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/webpack/webpack-server.ts":
/*!***************************************!*\
  !*** ./src/webpack/webpack-server.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// Based on: https://webpack.js.org/guides/development/#using-webpack-dev-middleware\r\n// import * as express from \"express\";\r\nvar Express = __webpack_require__(/*! express */ \"express\");\r\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\r\nvar webpackMerge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\r\nvar webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\r\nvar configProd = __webpack_require__(/*! ./webpack.config.prod.js */ \"./src/webpack/webpack.config.prod.js\");\r\nvar configDev = __webpack_require__(/*! ./webpack.config.dev.js */ \"./src/webpack/webpack.config.dev.js\");\r\nvar webpackServer = function () {\r\n    // const app = express();\r\n    var app = Express();\r\n    var config = webpackMerge(configProd, configDev);\r\n    var compiler = webpack(config);\r\n    app.use(webpackDevMiddleware(compiler, {\r\n        publicPath: config.output.publicPath,\r\n        stats: {\r\n        // Older versions of electron produce garbled output because of formatting in Windows.\r\n        // (Newer versions seem to strip formatting from the get go)\r\n        // https://github.com/electron/electron/issues/11488\r\n        //colors: !(process.platform === \"win32\")\r\n        }\r\n    }));\r\n    app.use(__webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\")(compiler));\r\n    app.listen(3000, function () {\r\n        console.log(\"Example app listening on port 3000!\\n\");\r\n    });\r\n};\r\nexports.default = webpackServer;\r\n\n\n//# sourceURL=webpack:///./src/webpack/webpack-server.ts?");

/***/ }),

/***/ "./src/webpack/webpack.config.dev.js":
/*!*******************************************!*\
  !*** ./src/webpack/webpack.config.dev.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"renderer\");\r\n\n\n//# sourceURL=webpack:///./src/webpack/webpack.config.dev.js?");

/***/ }),

/***/ "./src/webpack/webpack.config.prod.js":
/*!********************************************!*\
  !*** ./src/webpack/webpack.config.prod.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"renderer\");\r\n\n\n//# sourceURL=webpack:///./src/webpack/webpack.config.prod.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "electron-devtools-installer":
/*!**********************************************!*\
  !*** external "electron-devtools-installer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron-devtools-installer\");\n\n//# sourceURL=webpack:///external_%22electron-devtools-installer%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack:///external_%22webpack-merge%22?");

/***/ })

/******/ });