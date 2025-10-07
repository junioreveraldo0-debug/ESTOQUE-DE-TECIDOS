/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Everaldo\\\\Downloads\\\\estoque-srj-v18\\\\pages\\\\_app.js\",\n            lineNumber: 3,\n            columnNumber: 61\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Everaldo\\\\Downloads\\\\estoque-srj-v18\\\\pages\\\\_app.js\",\n        lineNumber: 3,\n        columnNumber: 47\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDYztBQUM1QyxTQUFTQyxNQUFNLEVBQUNDLFNBQVMsRUFBQ0MsU0FBUyxFQUFDO0lBQUcscUJBQU8sOERBQUNILHFEQUFZQTtrQkFBQyw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUFtQjtBQUN2RyxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzdG9xdWUtc3JqLXYxNC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL3V0aWxzL2F1dGgnXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LHBhZ2VQcm9wc30peyByZXR1cm4gPEF1dGhQcm92aWRlcj48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz48L0F1dGhQcm92aWRlcj4gfVxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const raw =  false ? 0 : null;\n        if (raw) setUser(JSON.parse(raw));\n    }, []);\n    const login = async (username, password)=>{\n        const res = await fetch(\"/api/auth/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username,\n                password\n            })\n        });\n        if (res.ok) {\n            const j = await res.json();\n            localStorage.setItem(\"estoque_srj_user\", JSON.stringify({\n                username,\n                token: j.token\n            }));\n            setUser({\n                username,\n                token: j.token\n            });\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/dashboard\");\n            return true;\n        }\n        const err = await res.json().catch(()=>({\n                error: \"Login failed\"\n            }));\n        throw new Error(err.error || \"Login failed\");\n    };\n    const logout = ()=>{\n        if (false) {}\n        setUser(null);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Everaldo\\\\Downloads\\\\estoque-srj-v18\\\\utils\\\\auth.js\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\nfunction getToken() {\n    if (true) return null;\n    const raw = localStorage.getItem(\"estoque_srj_user\");\n    if (!raw) return null;\n    try {\n        const j = JSON.parse(raw);\n        return j.token;\n    } catch (e) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDc0U7QUFDdEM7QUFDaEMsTUFBTUssNEJBQWNMLG9EQUFhQTtBQUMxQixTQUFTTSxhQUFhLEVBQUNDLFFBQVEsRUFBQztJQUNyQyxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBQ04sK0NBQVFBLENBQUM7SUFDOUJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsTUFBTSxNQUFnQixHQUFhQyxDQUFxQixHQUFxQjtRQUNuRixJQUFHRCxLQUFLRCxRQUFRSSxLQUFLQyxLQUFLLENBQUNKO0lBQzdCLEdBQUUsRUFBRTtJQUNKLE1BQU1LLFFBQVEsT0FBT0MsVUFBU0M7UUFDNUIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLG1CQUFrQjtZQUFDQyxRQUFPO1lBQU9DLFNBQVE7Z0JBQUMsZ0JBQWU7WUFBa0I7WUFBRUMsTUFBS1QsS0FBS1UsU0FBUyxDQUFDO2dCQUFDUDtnQkFBU0M7WUFBUTtRQUFFO1FBQzdJLElBQUdDLElBQUlNLEVBQUUsRUFBQztZQUFFLE1BQU1DLElBQUksTUFBTVAsSUFBSVEsSUFBSTtZQUFJZixhQUFhZ0IsT0FBTyxDQUFDLG9CQUFvQmQsS0FBS1UsU0FBUyxDQUFDO2dCQUFDUDtnQkFBVVksT0FBT0gsRUFBRUcsS0FBSztZQUFBO1lBQUtuQixRQUFRO2dCQUFDTztnQkFBVVksT0FBT0gsRUFBRUcsS0FBSztZQUFBO1lBQUl4Qix1REFBVyxDQUFDO1lBQWUsT0FBTztRQUFLO1FBQzFNLE1BQU0wQixNQUFNLE1BQU1aLElBQUlRLElBQUksR0FBR0ssS0FBSyxDQUFDLElBQUs7Z0JBQUNDLE9BQU07WUFBYztRQUFLLE1BQU0sSUFBSUMsTUFBTUgsSUFBSUUsS0FBSyxJQUFFO0lBQy9GO0lBQ0EsTUFBTUUsU0FBUztRQUFNLElBQUcsS0FBZ0IsRUFBYXZCLEVBQXdCO1FBQXFCRixRQUFRO1FBQU9MLHVEQUFXLENBQUM7SUFBSztJQUNsSSxxQkFBTyw4REFBQ0MsWUFBWStCLFFBQVE7UUFBQ0MsT0FBTztZQUFDN0I7WUFBS087WUFBTW1CO1FBQU07a0JBQUkzQjs7Ozs7O0FBQzVEO0FBQ08sU0FBUytCO0lBQVcsT0FBT3JDLGlEQUFVQSxDQUFDSTtBQUFhO0FBQ25ELFNBQVNrQztJQUFZLElBQUcsSUFBZ0IsRUFBYSxPQUFPO0lBQU0sTUFBTTdCLE1BQU1DLGFBQWFDLE9BQU8sQ0FBQztJQUFxQixJQUFHLENBQUNGLEtBQUssT0FBTztJQUFNLElBQUc7UUFBRSxNQUFNZSxJQUFFWixLQUFLQyxLQUFLLENBQUNKO1FBQU0sT0FBT2UsRUFBRUcsS0FBSztJQUFDLEVBQUMsT0FBTVksR0FBRTtRQUFDLE9BQU87SUFBSTtBQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXN0b3F1ZS1zcmotdjE0Ly4vdXRpbHMvYXV0aC5qcz9lYjYyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pe1xuICBjb25zdCBbdXNlcixzZXRVc2VyXT11c2VTdGF0ZShudWxsKVxuICB1c2VFZmZlY3QoKCk9PnsgXG4gICAgY29uc3QgcmF3ID0gdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXN0b3F1ZV9zcmpfdXNlcicpOiBudWxsOyBcbiAgICBpZihyYXcpIHNldFVzZXIoSlNPTi5wYXJzZShyYXcpKSBcbiAgfSxbXSlcbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUscGFzc3dvcmQpPT57XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvYXV0aC9sb2dpbicse21ldGhvZDonUE9TVCcsaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSxib2R5OkpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSxwYXNzd29yZH0pfSlcbiAgICBpZihyZXMub2speyBjb25zdCBqID0gYXdhaXQgcmVzLmpzb24oKTsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VzdG9xdWVfc3JqX3VzZXInLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWUsIHRva2VuOiBqLnRva2VufSkpOyBzZXRVc2VyKHt1c2VybmFtZSwgdG9rZW46IGoudG9rZW59KTsgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTsgcmV0dXJuIHRydWUgfVxuICAgIGNvbnN0IGVyciA9IGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCk9Pih7ZXJyb3I6J0xvZ2luIGZhaWxlZCd9KSk7IHRocm93IG5ldyBFcnJvcihlcnIuZXJyb3J8fCdMb2dpbiBmYWlsZWQnKVxuICB9XG4gIGNvbnN0IGxvZ291dCA9ICgpPT57IGlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJykgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VzdG9xdWVfc3JqX3VzZXInKTsgc2V0VXNlcihudWxsKTsgUm91dGVyLnB1c2goJy8nKSB9XG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t1c2VyLGxvZ2luLGxvZ291dH19PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKXsgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpIH1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpeyBpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpIHJldHVybiBudWxsOyBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXN0b3F1ZV9zcmpfdXNlcicpOyBpZighcmF3KSByZXR1cm4gbnVsbDsgdHJ5eyBjb25zdCBqPUpTT04ucGFyc2UocmF3KTsgcmV0dXJuIGoudG9rZW4gfWNhdGNoKGUpe3JldHVybiBudWxsfSB9XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInJhdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5Iiwib2siLCJqIiwianNvbiIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJjYXRjaCIsImVycm9yIiwiRXJyb3IiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiLCJnZXRUb2tlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();