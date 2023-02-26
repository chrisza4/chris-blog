(self["webpackChunkgatsby_starter_blog"] = self["webpackChunkgatsby_starter_blog"] || []).push([["app"],{

/***/ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js":
/*!****************************************************************************!*\
  !*** ./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.applyTrailingSlashOption = void 0;
const applyTrailingSlashOption = (input, option = `always`) => {
  const hasHtmlSuffix = input.endsWith(`.html`);
  const hasXmlSuffix = input.endsWith(`.xml`);
  const hasPdfSuffix = input.endsWith(`.pdf`);
  if (input === `/`) return input;
  if (hasHtmlSuffix || hasXmlSuffix || hasPdfSuffix) {
    option = `never`;
  }
  if (option === `always`) {
    return input.endsWith(`/`) ? input : `${input}/`;
  }
  if (option === `never`) {
    return input.endsWith(`/`) ? input.slice(0, -1) : input;
  }
  return input;
};
exports.applyTrailingSlashOption = applyTrailingSlashOption;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;
var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");
exports.ScrollContext = _scrollHandler.ScrollHandler;
var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");
exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";
var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);
  function ScrollHandler() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;
    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;
      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };
    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };
    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));
      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };
    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;
      if (!shouldUpdateScroll) {
        return true;
      }

      // Hack to allow accessing this._stateStorage.
      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };
    return _this;
  }
  var _proto = ScrollHandler.prototype;
  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;
    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }
    this._isTicking = false;
  };
  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
      key = _this$props$location.key,
      hash = _this$props$location.hash;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /** If a hash is present in the browser url as the component mounts (i.e. the user is navigating
     * from an external website) then scroll to the hash instead of any previously stored scroll
     * position. */
    if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    } else if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
      hash = _this$props$location2.hash,
      key = _this$props$location2.key;
    var scrollPosition;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */

    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };
  return ScrollHandler;
}(React.Component);
exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";
var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}
  var _proto = SessionStorage.prototype;
  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);
    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (false) {}
      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }
      return 0;
    }
  };
  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);
    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }
      if (false) {}
    }
  };
  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };
  return SessionStorage;
}();
exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;
var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");
var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onInitialClientRender = void 0;
var _gatsbyScript = __webpack_require__(/*! gatsby-script */ "./node_modules/gatsby-script/dist/index.modern.mjs");
var _injectPartytownSnippet = __webpack_require__(/*! ./utils/inject-partytown-snippet */ "./node_modules/gatsby/dist/internal-plugins/partytown/utils/inject-partytown-snippet.js");
// Makes sure off-main-thread scripts are loaded in `gatsby develop`
const onInitialClientRender = () => {
  if (true) {
    return;
  }
  (0, _injectPartytownSnippet.injectPartytownSnippet)(_gatsbyScript.collectedScriptsByPage.get(window.location.pathname));

  // Clear scripts after we've used them to avoid leaky behavior
  _gatsbyScript.collectedScriptsByPage.delete(window.location.pathname);
};

// Client-side navigation (CSR, e.g. Gatsby Link navigations) are broken upstream in Partytown.
// We need an official API from Partytown for handling re-configuration and on-demand script loading.
// Until then, `off-main-thread` scripts load only on server-side navigation (SSR).
// See https://github.com/BuilderIO/partytown/issues/74 for more details.
exports.onInitialClientRender = onInitialClientRender;
//# sourceMappingURL=gatsby-browser.js.map

/***/ }),

/***/ "./node_modules/gatsby/dist/internal-plugins/partytown/utils/get-forwards.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/gatsby/dist/internal-plugins/partytown/utils/get-forwards.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getForwards = getForwards;
function getForwards(collectedScripts) {
  return collectedScripts === null || collectedScripts === void 0 ? void 0 : collectedScripts.flatMap(script => (script === null || script === void 0 ? void 0 : script.forward) || []);
}
//# sourceMappingURL=get-forwards.js.map

/***/ }),

/***/ "./node_modules/gatsby/dist/internal-plugins/partytown/utils/inject-partytown-snippet.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/gatsby/dist/internal-plugins/partytown/utils/inject-partytown-snippet.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.injectPartytownSnippet = injectPartytownSnippet;
var _integration = __webpack_require__(/*! @builder.io/partytown/integration */ "./node_modules/@builder.io/partytown/integration/index.cjs");
var _getForwards = __webpack_require__(/*! ./get-forwards */ "./node_modules/gatsby/dist/internal-plugins/partytown/utils/get-forwards.js");
// Adapted from https://github.com/BuilderIO/partytown/blob/main/src/react/snippet.tsx to only include CSR logic
function injectPartytownSnippet(collectedScripts) {
  if (!collectedScripts.length) {
    return;
  }
  const existingSnippet = document.querySelector(`script[data-partytown]`);
  const existingSandbox = document.querySelector(`iframe[src*="~partytown/partytown-sandbox-sw"]`);
  if (existingSnippet) {
    existingSnippet.remove();
  }
  if (existingSandbox) {
    existingSandbox.remove();
  }
  const forwards = (0, _getForwards.getForwards)(collectedScripts);
  const snippet = document.createElement(`script`);
  snippet.dataset.partytown = ``;
  snippet.innerHTML = (0, _integration.partytownSnippet)({
    forward: forwards
  });
  document.head.appendChild(snippet);
}
//# sourceMappingURL=inject-partytown-snippet.js.map

/***/ }),

/***/ "./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js":
/*!*********************************************************************!*\
  !*** ./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.components={"component---src-pages-404-js":()=>Promise.all(/*! import() | component---src-pages-404-js */[__webpack_require__.e("styles"), __webpack_require__.e("commons"), __webpack_require__.e("component---src-pages-404-js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../src/pages/404.js */ "./src/pages/404.js")),"component---src-pages-index-js":()=>Promise.all(/*! import() | component---src-pages-index-js */[__webpack_require__.e("styles"), __webpack_require__.e("commons"), __webpack_require__.e("cd7d5f864fc9e15ed8adef086269b0aeff617554"), __webpack_require__.e("component---src-pages-index-js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../src/pages/index.js */ "./src/pages/index.js")),"component---src-pages-talks-js":()=>Promise.all(/*! import() | component---src-pages-talks-js */[__webpack_require__.e("styles"), __webpack_require__.e("commons"), __webpack_require__.e("component---src-pages-talks-js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../src/pages/talks.js */ "./src/pages/talks.js")),"component---src-pages-using-typescript-tsx":()=>Promise.all(/*! import() | component---src-pages-using-typescript-tsx */[__webpack_require__.e("styles"), __webpack_require__.e("commons"), __webpack_require__.e("component---src-pages-using-typescript-tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../src/pages/using-typescript.tsx */ "./src/pages/using-typescript.tsx")),"component---src-templates-blog-post-js":()=>Promise.all(/*! import() | component---src-templates-blog-post-js */[__webpack_require__.e("styles"), __webpack_require__.e("commons"), __webpack_require__.e("cd7d5f864fc9e15ed8adef086269b0aeff617554"), __webpack_require__.e("component---src-templates-blog-post-js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../src/templates/blog-post.js */ "./src/templates/blog-post.js"))};

/***/ }),

/***/ "./.cache/api-runner-browser-plugins.js":
/*!**********************************************!*\
  !*** ./.cache/api-runner-browser-plugins.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__(/*! ../node_modules/gatsby-remark-images/gatsby-browser.js */ "./node_modules/gatsby-remark-images/gatsby-browser.js"),options:{"plugins":[],"maxWidth":630,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withWebp":false,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false}},{plugin:__webpack_require__(/*! ../node_modules/gatsby-plugin-manifest/gatsby-browser.js */ "./node_modules/gatsby-plugin-manifest/gatsby-browser.js"),options:{"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"}},{plugin:__webpack_require__(/*! ../gatsby-browser.js */ "./gatsby-browser.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js */ "./node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js"),options:{"plugins":[]}}];

/***/ }),

/***/ "./.cache/api-runner-browser.js":
/*!**************************************!*\
  !*** ./.cache/api-runner-browser.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

const plugins=__webpack_require__(/*! ./api-runner-browser-plugins */ "./.cache/api-runner-browser-plugins.js");const{getResourceURLsForPathname,loadPage,loadPageSync}=(__webpack_require__(/*! ./loader */ "./.cache/loader.js").publicLoader);exports.apiRunner=function(api,args,defaultReturn,argTransform){if(args===void 0){args={};}// Hooks for gatsby-cypress's API handler
if(false){}let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result,plugin});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!=="undefined");if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.apiRunnerAsync=(api,args,defaultReturn)=>plugins.reduce((previous,next)=>next.plugin[api]?previous.then(()=>next.plugin[api](args,next.options)):previous,Promise.resolve());

/***/ }),

/***/ "./.cache/context-utils.js":
/*!*********************************!*\
  !*** ./.cache/context-utils.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createServerOrClientContext": function() { return /* binding */ createServerOrClientContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// Ensure serverContext is not created more than once as React will throw when creating it more than once
// https://github.com/facebook/react/blob/dd2d6522754f52c70d02c51db25eb7cbd5d1c8eb/packages/react/src/ReactServerContext.js#L101
const createServerContext=function(name,defaultValue){if(defaultValue===void 0){defaultValue=null;}/* eslint-disable no-undef */if(!globalThis.__SERVER_CONTEXT){globalThis.__SERVER_CONTEXT={};}if(!globalThis.__SERVER_CONTEXT[name]){globalThis.__SERVER_CONTEXT[name]=react__WEBPACK_IMPORTED_MODULE_0__.createServerContext(name,defaultValue);}return globalThis.__SERVER_CONTEXT[name];};function createServerOrClientContext(name,defaultValue){if(react__WEBPACK_IMPORTED_MODULE_0__.createServerContext){return createServerContext(name,defaultValue);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultValue);}

/***/ }),

/***/ "./.cache/create-content-digest-browser-shim.js":
/*!******************************************************!*\
  !*** ./.cache/create-content-digest-browser-shim.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.createContentDigest=()=>"";

/***/ }),

/***/ "./.cache/emitter.js":
false,

/***/ "./.cache/ensure-resources.js":
false,

/***/ "./.cache/find-path.js":
false,

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": function() { return /* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.Link; },
/* harmony export */   "PageRenderer": function() { return /* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_1___default.a; },
/* harmony export */   "Script": function() { return /* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.Script; },
/* harmony export */   "ScriptStrategy": function() { return /* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.ScriptStrategy; },
/* harmony export */   "Slice": function() { return /* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_5__.Slice; },
/* harmony export */   "StaticQuery": function() { return /* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQuery; },
/* harmony export */   "StaticQueryContext": function() { return /* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQueryContext; },
/* harmony export */   "collectedScriptsByPage": function() { return /* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.collectedScriptsByPage; },
/* harmony export */   "graphql": function() { return /* binding */ graphql; },
/* harmony export */   "navigate": function() { return /* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.navigate; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.parsePath; },
/* harmony export */   "prefetchPathname": function() { return /* binding */ prefetchPathname; },
/* harmony export */   "scriptCache": function() { return /* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCache; },
/* harmony export */   "scriptCallbackCache": function() { return /* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCallbackCache; },
/* harmony export */   "useScrollRestoration": function() { return /* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__.useScrollRestoration; },
/* harmony export */   "useStaticQuery": function() { return /* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.useStaticQuery; },
/* harmony export */   "withAssetPrefix": function() { return /* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.withAssetPrefix; },
/* harmony export */   "withPrefix": function() { return /* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.withPrefix; }
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/dist/index.modern.mjs");
/* harmony import */ var _static_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-query */ "./.cache/static-query.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slice */ "./.cache/slice.js");
/* harmony import */ var gatsby_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-script */ "./node_modules/gatsby-script/dist/index.modern.mjs");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_0__["default"].enqueue;function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}

/***/ }),

/***/ "./.cache/head/components/fire-callback-in-effect.js":
/*!***********************************************************!*\
  !*** ./.cache/head/components/fire-callback-in-effect.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireCallbackInEffect": function() { return /* binding */ FireCallbackInEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/*
 * Calls callback in an effect and renders children
 */function FireCallbackInEffect(_ref){let{children,callback}=_ref;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{callback();});return children;}

/***/ }),

/***/ "./.cache/head/constants.js":
false,

/***/ "./.cache/head/head-export-handler-for-browser.js":
/*!********************************************************!*\
  !*** ./.cache/head/head-export-handler-for-browser.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headHandlerForBrowser": function() { return /* binding */ headHandlerForBrowser; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var _react_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../react-dom-utils */ "./.cache/react-dom-utils.js");
/* harmony import */ var _components_fire_callback_in_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fire-callback-in-effect */ "./.cache/head/components/fire-callback-in-effect.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./.cache/head/utils.js");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-runner-browser */ "./.cache/api-runner-browser.js");
const hiddenRoot=document.createElement("div");const keysOfHtmlAndBodyAttributes={html:[],body:[]};const onHeadRendered=()=>{var _document$head2;const{validHeadNodes,htmlAndBodyAttributes}=(0,_utils__WEBPACK_IMPORTED_MODULE_6__.getValidHeadNodesAndAttributes)(hiddenRoot);keysOfHtmlAndBodyAttributes.html=Object.keys(htmlAndBodyAttributes.html);keysOfHtmlAndBodyAttributes.body=Object.keys(htmlAndBodyAttributes.body);(0,_utils__WEBPACK_IMPORTED_MODULE_6__.applyHtmlAndBodyAttributes)(htmlAndBodyAttributes);/**
   * The rest of the code block below is a diffing mechanism to ensure that
   * the head elements aren't duplicted on every re-render.
   */const existingHeadElements=document.querySelectorAll("[data-gatsby-head]");if(existingHeadElements.length===0){var _document$head;(_document$head=document.head).append.apply(_document$head,(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(validHeadNodes));return;}const newHeadNodes=[];(0,_utils__WEBPACK_IMPORTED_MODULE_6__.diffNodes)({oldNodes:existingHeadElements,newNodes:validHeadNodes,onStale:node=>node.parentNode.removeChild(node),onNew:node=>newHeadNodes.push(node)});(_document$head2=document.head).append.apply(_document$head2,newHeadNodes);};if(false){}function headHandlerForBrowser(_ref){let{pageComponent,staticQueryResults,pageComponentProps}=_ref;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(pageComponent!==null&&pageComponent!==void 0&&pageComponent.Head){(0,_utils__WEBPACK_IMPORTED_MODULE_6__.headExportValidator)(pageComponent.Head);const{render}=(0,_react_dom_utils__WEBPACK_IMPORTED_MODULE_3__.reactDOMUtils)();const HeadElement=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(pageComponent.Head,(0,_utils__WEBPACK_IMPORTED_MODULE_6__.filterHeadProps)(pageComponentProps));const WrapHeadElement=(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__.apiRunner)("wrapRootElement",{element:HeadElement},HeadElement,_ref2=>{let{result}=_ref2;return{element:result};}).pop();render(/*#__PURE__*/ // just a hack to call the callback after react has done first render
// Note: In dev, we call onHeadRendered twice( in FireCallbackInEffect and after mutualution observer dectects initail render into hiddenRoot) this is for hot reloading
// In Prod we only call onHeadRendered in FireCallbackInEffect to render to head
react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_fire_callback_in_effect__WEBPACK_IMPORTED_MODULE_4__.FireCallbackInEffect,{callback:onHeadRendered},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.StaticQueryContext.Provider,{value:staticQueryResults},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_2__.LocationProvider,null,WrapHeadElement))),hiddenRoot);}return()=>{(0,_utils__WEBPACK_IMPORTED_MODULE_6__.removePrevHeadElements)();(0,_utils__WEBPACK_IMPORTED_MODULE_6__.removeHtmlAndBodyAttributes)(keysOfHtmlAndBodyAttributes);};});}

/***/ }),

/***/ "./.cache/head/utils.js":
/*!******************************!*\
  !*** ./.cache/head/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyHtmlAndBodyAttributes": function() { return /* binding */ applyHtmlAndBodyAttributes; },
/* harmony export */   "diffNodes": function() { return /* binding */ diffNodes; },
/* harmony export */   "filterHeadProps": function() { return /* binding */ filterHeadProps; },
/* harmony export */   "getValidHeadNodesAndAttributes": function() { return /* binding */ getValidHeadNodesAndAttributes; },
/* harmony export */   "headExportValidator": function() { return /* binding */ headExportValidator; },
/* harmony export */   "isElementType": function() { return /* binding */ isElementType; },
/* harmony export */   "isEqualNode": function() { return /* binding */ isEqualNode; },
/* harmony export */   "isValidNodeName": function() { return /* binding */ isValidNodeName; },
/* harmony export */   "removeHtmlAndBodyAttributes": function() { return /* binding */ removeHtmlAndBodyAttributes; },
/* harmony export */   "removePrevHeadElements": function() { return /* binding */ removePrevHeadElements; },
/* harmony export */   "warnForInvalidTag": function() { return /* binding */ warnForInvalidTag; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./.cache/head/constants.js");
/**
 * Filter the props coming from a page down to just the ones that are relevant for head.
 * This e.g. filters out properties that are undefined during SSR.
 */function filterHeadProps(input){return{location:{pathname:input.location.pathname},params:input.params,data:input.data||{},serverData:input.serverData,pageContext:input.pageContext};}/**
 * Throw error if Head export is not a valid function
 */function headExportValidator(head){if(typeof head!=="function")throw new Error("Expected \"Head\" export to be a function got \""+typeof head+"\".");}/**
 * Warn once for same messsage
 */let warnOnce=_=>{};if(false){}/**
 * Warn for invalid tags in Head which may have been directly added or introduced by `wrapRootElement`
 * @param {string} tagName
 */function warnForInvalidTag(tagName){if(false){}}function createWarningForInvalidTag(tagName){return"<"+tagName+"> is not a valid head element. Please use one of the following: "+VALID_NODE_NAMES.join(", ")+".\n\nAlso make sure that wrapRootElement in gatsby-ssr/gatsby-browser doesn't contain UI elements: https://gatsby.dev/invalid-head-elements";}/**
 * When a `nonce` is present on an element, browsers such as Chrome and Firefox strip it out of the
 * actual HTML attributes for security reasons *when the element is added to the document*. Thus,
 * given two equivalent elements that have nonces, `Element,isEqualNode()` will return false if one
 * of those elements gets added to the document. Although the `element.nonce` property will be the
 * same for both elements, the one that was added to the document will return an empty string for
 * its nonce HTML attribute value.
 *
 * This custom `isEqualNode()` function therefore removes the nonce value from the `newTag` before
 * comparing it to `oldTag`, restoring it afterwards.
 *
 * For more information, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=1211471#c12
 */function isEqualNode(oldTag,newTag){if(oldTag instanceof HTMLElement&&newTag instanceof HTMLElement){const nonce=newTag.getAttribute("nonce");// Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
// be stripped if there is no content security policy response header that includes a nonce.
if(nonce&&!oldTag.getAttribute("nonce")){const cloneTag=newTag.cloneNode(true);cloneTag.setAttribute("nonce","");cloneTag.nonce=nonce;return nonce===oldTag.nonce&&oldTag.isEqualNode(cloneTag);}}return oldTag.isEqualNode(newTag);}function diffNodes(_ref){let{oldNodes,newNodes,onStale,onNew}=_ref;for(const existingHeadElement of oldNodes){const indexInNewNodes=newNodes.findIndex(e=>isEqualNode(e,existingHeadElement));if(indexInNewNodes===-1){onStale(existingHeadElement);}else{// this node is re-created as-is, so we keep old node, and remove it from list of new nodes (as we handled it already here)
newNodes.splice(indexInNewNodes,1);}}// remaing new nodes didn't have matching old node, so need to be added
for(const newNode of newNodes){onNew(newNode);}}function getValidHeadNodesAndAttributes(rootNode,htmlAndBodyAttributes){if(htmlAndBodyAttributes===void 0){htmlAndBodyAttributes={html:{},body:{}};}const seenIds=new Map();const validHeadNodes=[];// Filter out non-element nodes before looping since we don't care about them
for(const node of rootNode.childNodes){var _node$attributes,_node$attributes$id;const nodeName=node.nodeName.toLowerCase();const id=(_node$attributes=node.attributes)===null||_node$attributes===void 0?void 0:(_node$attributes$id=_node$attributes.id)===null||_node$attributes$id===void 0?void 0:_node$attributes$id.value;if(!isElementType(node))continue;if(isValidNodeName(nodeName)){// <html> and <body> tags are treated differently, in that we don't  render them, we only  extract the attributes and apply them separetely
if(nodeName==="html"||nodeName==="body"){for(const attribute of node.attributes){htmlAndBodyAttributes[nodeName]={...htmlAndBodyAttributes[nodeName],[attribute.name]:attribute.value};}}else{let clonedNode=node.cloneNode(true);clonedNode.setAttribute("data-gatsby-head",true);// // This is hack to make script tags work
if(clonedNode.nodeName.toLowerCase()==="script"){clonedNode=massageScript(clonedNode);}// Duplicate ids are not allowed in the head, so we need to dedupe them
if(id){if(!seenIds.has(id)){validHeadNodes.push(clonedNode);seenIds.set(id,validHeadNodes.length-1);}else{var _validHeadNodes$index;const indexOfPreviouslyInsertedNode=seenIds.get(id);(_validHeadNodes$index=validHeadNodes[indexOfPreviouslyInsertedNode].parentNode)===null||_validHeadNodes$index===void 0?void 0:_validHeadNodes$index.removeChild(validHeadNodes[indexOfPreviouslyInsertedNode]);validHeadNodes[indexOfPreviouslyInsertedNode]=clonedNode;}}else{validHeadNodes.push(clonedNode);}}}else{warnForInvalidTag(nodeName);}if(node.childNodes.length){validHeadNodes.push.apply(validHeadNodes,(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(getValidHeadNodesAndAttributes(node,htmlAndBodyAttributes).validHeadNodes));}}return{validHeadNodes,htmlAndBodyAttributes};}function massageScript(node){const script=document.createElement("script");for(const attr of node.attributes){script.setAttribute(attr.name,attr.value);}script.innerHTML=node.innerHTML;return script;}function isValidNodeName(nodeName){return _constants__WEBPACK_IMPORTED_MODULE_1__.VALID_NODE_NAMES.includes(nodeName);}/*
 * For Head, we only care about element nodes(type = 1), so this util is used to skip over non-element nodes
 * For Node type, see https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
 */function isElementType(node){return node.nodeType===1;}/**
 * Removes all the head elements that were added by `Head`
 */function removePrevHeadElements(){const prevHeadNodes=document.querySelectorAll("[data-gatsby-head]");for(const node of prevHeadNodes){node.parentNode.removeChild(node);}}function applyHtmlAndBodyAttributes(htmlAndBodyAttributes){if(!htmlAndBodyAttributes)return;const{html,body}=htmlAndBodyAttributes;const htmlElement=document.querySelector("html");if(htmlElement){Object.entries(html).forEach(_ref2=>{let[attributeName,attributeValue]=_ref2;htmlElement.setAttribute(attributeName,attributeValue);});}const bodyElement=document.querySelector("body");if(bodyElement){Object.entries(body).forEach(_ref3=>{let[attributeName,attributeValue]=_ref3;bodyElement.setAttribute(attributeName,attributeValue);});}}function removeHtmlAndBodyAttributes(htmlAndBodyattributeList){if(!htmlAndBodyattributeList)return;const{html,body}=htmlAndBodyattributeList;if(html){const htmlElement=document.querySelector("html");html.forEach(attributeName=>{if(htmlElement){htmlElement.removeAttribute(attributeName);}});}if(body){const bodyElement=document.querySelector("body");body.forEach(attributeName=>{if(bodyElement){bodyElement.removeAttribute(attributeName);}});}}

/***/ }),

/***/ "./.cache/loader.js":
false,

/***/ "./.cache/navigation.js":
/*!******************************!*\
  !*** ./.cache/navigation.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteUpdates": function() { return /* binding */ RouteUpdates; },
/* harmony export */   "init": function() { return /* binding */ init; },
/* harmony export */   "maybeGetBrowserRedirect": function() { return /* reexport safe */ _redirect_utils_js__WEBPACK_IMPORTED_MODULE_2__.maybeGetBrowserRedirect; },
/* harmony export */   "shouldUpdateScroll": function() { return /* binding */ shouldUpdateScroll; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-runner-browser */ "./.cache/api-runner-browser.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _route_announcer_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-announcer-props */ "./.cache/route-announcer-props.js");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/dist/index.modern.mjs");
function maybeRedirect(pathname){const redirect=(0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_2__.maybeGetBrowserRedirect)(pathname);const{hash,search}=window.location;if(redirect!=null){window.___replace(redirect.toPath+search+hash);return true;}else{return false;}}// Catch unhandled chunk loading errors and force a restart of the app.
let nextRoute="";window.addEventListener("unhandledrejection",event=>{if(/loading chunk \d* failed./i.test(event.reason)){if(nextRoute){window.location.pathname=nextRoute;}}});const onPreRouteUpdate=(location,prevLocation)=>{if(!maybeRedirect(location.pathname)){nextRoute=location.pathname;(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__.apiRunner)("onPreRouteUpdate",{location,prevLocation});}};const onRouteUpdate=(location,prevLocation)=>{if(!maybeRedirect(location.pathname)){(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__.apiRunner)("onRouteUpdate",{location,prevLocation});if(false){}}};const navigate=function(to,options){if(options===void 0){options={};}// Support forward/backward navigation with numbers
// navigate(-2) (jumps back 2 history steps)
// navigate(2)  (jumps forward 2 history steps)
if(typeof to==="number"){_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_6__.globalHistory.navigate(to);return;}const{pathname,search,hash}=(0,gatsby_link__WEBPACK_IMPORTED_MODULE_7__.parsePath)(to);const redirect=(0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_2__.maybeGetBrowserRedirect)(pathname);// If we're redirecting, just replace the passed in pathname
// to the one we want to redirect to.
if(redirect){to=redirect.toPath+search+hash;}// If we had a service worker update, no matter the path, reload window and
// reset the pathname whitelist
if(window.___swUpdated){window.location=pathname+search+hash;return;}// Start a timer to wait for a second before transitioning and showing a
// loader in case resources aren't around yet.
const timeoutId=setTimeout(()=>{_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].emit("onDelayedLoadPageResources",{pathname});(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__.apiRunner)("onRouteUpdateDelayed",{location:window.location});},1000);_loader__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage(pathname+search).then(pageResources=>{// If no page resources, then refresh the page
// Do this, rather than simply `window.location.reload()`, so that
// pressing the back/forward buttons work - otherwise when pressing
// back, the browser will just change the URL and expect JS to handle
// the change, which won't always work since it might not be a Gatsby
// page.
if(!pageResources||pageResources.status===_loader__WEBPACK_IMPORTED_MODULE_1__.PageResourceStatus.Error){window.history.replaceState({},"",location.href);window.location=pathname;clearTimeout(timeoutId);return;}// If the loaded page has a different compilation hash to the
// window, then a rebuild has occurred on the server. Reload.
if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}window.location=pathname+search+hash;}}(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_6__.navigate)(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){let{location}=_ref;const{pathname,hash}=location;const results=(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__.apiRunner)("shouldUpdateScroll",{prevRouterProps,// `pathname` for backwards compatibility
pathname,routerProps:{location},getSavedScrollPosition:args=>[0,// FIXME this is actually a big code smell, we should fix this
// eslint-disable-next-line @babel/no-invalid-this
this._stateStorage.read(args,args.key)]});if(results.length>0){// Use the latest registered shouldUpdateScroll result, this allows users to override plugin's configuration
// @see https://github.com/gatsbyjs/gatsby/issues/12038
return results[results.length-1];}if(prevRouterProps){const{location:{pathname:oldPathname}}=prevRouterProps;if(oldPathname===pathname){// Scroll to element if it exists, if it doesn't, or no hash is provided,
// scroll to top.
return hash?decodeURI(hash.slice(1)):[0,0];}}return true;}function init(){// The "scroll-behavior" package expects the "action" to be on the location
// object so let's copy it over.
_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_6__.globalHistory.listen(args=>{args.location.action=args.action;});window.___push=to=>navigate(to,{replace:false});window.___replace=to=>navigate(to,{replace:true});window.___navigate=(to,options)=>navigate(to,options);}let RouteAnnouncer=/*#__PURE__*/function(_React$Component){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(RouteAnnouncer,_React$Component);function RouteAnnouncer(props){var _this;_this=_React$Component.call(this,props)||this;_this.announcementRef=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();return _this;}var _proto=RouteAnnouncer.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps,nextProps){requestAnimationFrame(()=>{let pageName="new page at "+this.props.location.pathname;if(document.title){pageName=document.title;}const pageHeadings=document.querySelectorAll("#gatsby-focus-wrapper h1");if(pageHeadings&&pageHeadings.length){pageName=pageHeadings[0].textContent;}const newAnnouncement="Navigated to "+pageName;if(this.announcementRef.current){const oldAnnouncement=this.announcementRef.current.innerText;if(oldAnnouncement!==newAnnouncement){this.announcementRef.current.innerText=newAnnouncement;}}});};_proto.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({},_route_announcer_props__WEBPACK_IMPORTED_MODULE_5__.RouteAnnouncerProps,{ref:this.announcementRef}));};return RouteAnnouncer;}(react__WEBPACK_IMPORTED_MODULE_0__.Component);const compareLocationProps=(prevLocation,nextLocation)=>{var _prevLocation$state,_nextLocation$state;if(prevLocation.href!==nextLocation.href){return true;}if((prevLocation===null||prevLocation===void 0?void 0:(_prevLocation$state=prevLocation.state)===null||_prevLocation$state===void 0?void 0:_prevLocation$state.key)!==(nextLocation===null||nextLocation===void 0?void 0:(_nextLocation$state=nextLocation.state)===null||_nextLocation$state===void 0?void 0:_nextLocation$state.key)){return true;}return false;};// Fire on(Pre)RouteUpdate APIs
let RouteUpdates=/*#__PURE__*/function(_React$Component2){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(RouteUpdates,_React$Component2);function RouteUpdates(props){var _this2;_this2=_React$Component2.call(this,props)||this;onPreRouteUpdate(props.location,null);return _this2;}var _proto2=RouteUpdates.prototype;_proto2.componentDidMount=function componentDidMount(){onRouteUpdate(this.props.location,null);};_proto2.shouldComponentUpdate=function shouldComponentUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;};_proto2.componentDidUpdate=function componentDidUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){onRouteUpdate(this.props.location,prevProps.location);}};_proto2.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,this.props.children,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteAnnouncer,{location:location}));};return RouteUpdates;}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (pathAndSearch=>{if(pathAndSearch===undefined){return pathAndSearch;}let[path,search=""]=pathAndSearch.split("?");if(search){search="?"+search;}if(path==="/"){return"/"+search;}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1)+search;}return path+search;});

/***/ }),

/***/ "./.cache/page-renderer.js":
false,

/***/ "./.cache/prefetch.js":
false,

/***/ "./.cache/production-app.js":
/*!**********************************!*\
  !*** ./.cache/production-app.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-runner-browser */ "./.cache/api-runner-browser.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var _static_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-query */ "./.cache/static-query.js");
/* harmony import */ var _slice_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slice/context */ "./.cache/slice/context.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation */ "./.cache/navigation.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-renderer */ "./.cache/page-renderer.js");
/* harmony import */ var $virtual_async_requires__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! $virtual/async-requires */ "./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _ensure_resources__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ensure-resources */ "./.cache/ensure-resources.js");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var $virtual_match_paths_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! $virtual/match-paths.json */ "./.cache/_this_is_virtual_fs_path_/$virtual/match-paths.json");
/* harmony import */ var _react_dom_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./react-dom-utils */ "./.cache/react-dom-utils.js");
// Generated during bootstrap
const loader=new _loader__WEBPACK_IMPORTED_MODULE_10__.ProdLoader($virtual_async_requires__WEBPACK_IMPORTED_MODULE_9__,$virtual_match_paths_json__WEBPACK_IMPORTED_MODULE_12__,window.pageData);(0,_loader__WEBPACK_IMPORTED_MODULE_10__.setLoader)(loader);loader.setApiRunner(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner);const{render,hydrate}=(0,_react_dom_utils__WEBPACK_IMPORTED_MODULE_13__.reactDOMUtils)();window.asyncRequires=$virtual_async_requires__WEBPACK_IMPORTED_MODULE_9__;window.___emitter=_emitter__WEBPACK_IMPORTED_MODULE_7__["default"];window.___loader=_loader__WEBPACK_IMPORTED_MODULE_10__.publicLoader;(0,_navigation__WEBPACK_IMPORTED_MODULE_6__.init)();const reloadStorageKey="gatsby-reload-compilation-hash-match";(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunnerAsync)("onClientEntry").then(()=>{// Let plugins register a service worker. The plugin just needs
// to return true.
if((0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("registerServiceWorker").filter(Boolean).length>0){__webpack_require__(/*! ./register-service-worker */ "./.cache/register-service-worker.js");}// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
const RouteHandler=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_2__.BaseContext.Provider,{value:{baseuri:"/",basepath:"/"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_8__["default"],props));const DataContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({});const slicesContext={renderEnvironment:"browser"};let GatsbyRoot=/*#__PURE__*/function(_React$Component){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_14__["default"])(GatsbyRoot,_React$Component);function GatsbyRoot(){return _React$Component.apply(this,arguments)||this;}var _proto=GatsbyRoot.prototype;_proto.render=function render(){const{children}=this.props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_2__.Location,null,_ref=>{let{location}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ensure_resources__WEBPACK_IMPORTED_MODULE_11__["default"],{location:location},_ref2=>{let{pageResources,location}=_ref2;const staticQueryResults=(0,_loader__WEBPACK_IMPORTED_MODULE_10__.getStaticQueryResults)();const sliceResults=(0,_loader__WEBPACK_IMPORTED_MODULE_10__.getSliceResults)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQueryContext.Provider,{value:staticQueryResults},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_slice_context__WEBPACK_IMPORTED_MODULE_5__.SlicesContext.Provider,{value:slicesContext},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_slice_context__WEBPACK_IMPORTED_MODULE_5__.SlicesResultsContext.Provider,{value:sliceResults},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_slice_context__WEBPACK_IMPORTED_MODULE_5__.SlicesMapContext.Provider,{value:pageResources.page.slicesMap},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataContext.Provider,{value:{pageResources,location}},children)))));});});};return GatsbyRoot;}(react__WEBPACK_IMPORTED_MODULE_1__.Component);let LocationHandler=/*#__PURE__*/function(_React$Component2){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_14__["default"])(LocationHandler,_React$Component2);function LocationHandler(){return _React$Component2.apply(this,arguments)||this;}var _proto2=LocationHandler.prototype;_proto2.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataContext.Consumer,null,_ref3=>{let{pageResources,location}=_ref3;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_navigation__WEBPACK_IMPORTED_MODULE_6__.RouteUpdates,{location:location},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__.ScrollContext,{location:location,shouldUpdateScroll:_navigation__WEBPACK_IMPORTED_MODULE_6__.shouldUpdateScroll},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_2__.Router,{basepath:"",location:location,id:"gatsby-focus-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteHandler,Object.assign({path:pageResources.page.path==="/404.html"||pageResources.page.path==="/500.html"?(0,_strip_prefix__WEBPACK_IMPORTED_MODULE_15__["default"])(location.pathname,""):encodeURI((pageResources.page.matchPath||pageResources.page.path).split("?")[0])},this.props,{location:location,pageResources:pageResources},pageResources.json)))));});};return LocationHandler;}(react__WEBPACK_IMPORTED_MODULE_1__.Component);const{pagePath,location:browserLoc}=window;// Explicitly call navigate if the canonical path (window.pagePath)
// is different to the browser path (window.location.pathname). SSR
// page paths might include search params, while SSG and DSG won't.
// If page path include search params we also compare query params.
// But only if NONE of the following conditions hold:
//
// - The url matches a client side route (page.matchPath)
// - it's a 404 page
// - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
if(pagePath&&""+pagePath!==browserLoc.pathname+(pagePath.includes("?")?browserLoc.search:"")&&!(loader.findMatchPath((0,_strip_prefix__WEBPACK_IMPORTED_MODULE_15__["default"])(browserLoc.pathname,""))||pagePath.match(/^\/(404|500)(\/?|.html)$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_2__.navigate)(""+pagePath+(!pagePath.includes("?")?browserLoc.search:"")+browserLoc.hash,{replace:true});}// It's possible that sessionStorage can throw an exception if access is not granted, see https://github.com/gatsbyjs/gatsby/issues/34512
const getSessionStorage=()=>{try{return sessionStorage;}catch{return null;}};_loader__WEBPACK_IMPORTED_MODULE_10__.publicLoader.loadPage(browserLoc.pathname+browserLoc.search).then(page=>{var _page$page;const sessionStorage=getSessionStorage();if(page!==null&&page!==void 0&&(_page$page=page.page)!==null&&_page$page!==void 0&&_page$page.webpackCompilationHash&&page.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}// We have not matching html + js (inlined `window.___webpackCompilationHash`)
// with our data (coming from `app-data.json` file). This can cause issues such as
// errors trying to load static queries (as list of static queries is inside `page-data`
// which might not match to currently loaded `.js` scripts).
// We are making attempt to reload if hashes don't match, but we also have to handle case
// when reload doesn't fix it (possibly broken deploy) so we don't end up in infinite reload loop
if(sessionStorage){const isReloaded=sessionStorage.getItem(reloadStorageKey)==="1";if(!isReloaded){sessionStorage.setItem(reloadStorageKey,"1");window.location.reload(true);return;}}}if(sessionStorage){sessionStorage.removeItem(reloadStorageKey);}if(!page||page.status===_loader__WEBPACK_IMPORTED_MODULE_10__.PageResourceStatus.Error){const message="page resources for "+browserLoc.pathname+" not found. Not rendering React";// if the chunk throws an error we want to capture the real error
// This should help with https://github.com/gatsbyjs/gatsby/issues/19618
if(page&&page.error){console.error(message);throw page.error;}throw new Error(message);}const SiteRoot=(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("wrapRootElement",{element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LocationHandler,null)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LocationHandler,null),_ref4=>{let{result}=_ref4;return{element:result};}).pop();const App=function App(){const onClientEntryRanRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{if(!onClientEntryRanRef.current){onClientEntryRanRef.current=true;if(performance.mark){performance.mark("onInitialClientRender");}(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("onInitialClientRender");}},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(GatsbyRoot,null,SiteRoot);};const focusEl=document.getElementById("gatsby-focus-wrapper");// Client only pages have any empty body so we just do a normal
// render to avoid React complaining about hydration mis-matches.
let defaultRenderer=render;if(focusEl&&focusEl.children.length){defaultRenderer=hydrate;}const renderer=(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("replaceHydrateFunction",undefined,defaultRenderer)[0];function runRender(){const rootElement=typeof window!=="undefined"?document.getElementById("___gatsby"):null;renderer(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(App,null),rootElement);}// https://github.com/madrobby/zepto/blob/b5ed8d607f67724788ec9ff492be297f64d47dfc/src/zepto.js#L439-L450
// TODO remove IE 10 support
const doc=document;if(doc.readyState==="complete"||doc.readyState!=="loading"&&!doc.documentElement.doScroll){setTimeout(function(){runRender();},0);}else{const handler=function(){doc.removeEventListener("DOMContentLoaded",handler,false);window.removeEventListener("load",handler,false);runRender();};doc.addEventListener("DOMContentLoaded",handler,false);window.addEventListener("load",handler,false);}return;});});

/***/ }),

/***/ "./.cache/public-page-renderer-prod.js":
false,

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(true){module.exports=preferDefault(__webpack_require__(/*! ./public-page-renderer-prod */ "./.cache/public-page-renderer-prod.js"));}else{}

/***/ }),

/***/ "./.cache/react-dom-utils.js":
/*!***********************************!*\
  !*** ./.cache/react-dom-utils.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reactDOMUtils": function() { return /* binding */ reactDOMUtils; }
/* harmony export */ });
const map=new WeakMap();function reactDOMUtils(){const reactDomClient=__webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");const render=(Component,el)=>{let root=map.get(el);if(!root){map.set(el,root=reactDomClient.createRoot(el));}root.render(Component);};const hydrate=(Component,el)=>reactDomClient.hydrateRoot(el,Component);return{render,hydrate};}

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeGetBrowserRedirect": function() { return /* binding */ maybeGetBrowserRedirect; }
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");
// Convert to a map for faster lookup in maybeRedirect()
const redirectMap=new Map();const redirectIgnoreCaseMap=new Map();_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect=>{if(redirect.ignoreCase){redirectIgnoreCaseMap.set(redirect.fromPath,redirect);}else{redirectMap.set(redirect.fromPath,redirect);}});function maybeGetBrowserRedirect(pathname){let redirect=redirectMap.get(pathname);if(!redirect){redirect=redirectIgnoreCaseMap.get(pathname.toLowerCase());}return redirect;}

/***/ }),

/***/ "./.cache/register-service-worker.js":
/*!*******************************************!*\
  !*** ./.cache/register-service-worker.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-runner-browser */ "./.cache/api-runner-browser.js");
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register(""+"/sw.js").then(function(reg){reg.addEventListener("updatefound",()=>{(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("onServiceWorkerUpdateFound",{serviceWorker:reg});// The updatefound event implies that reg.installing is set; see
// https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
const installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",()=>{switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and the fresh content will
// have been added to the cache.
// We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
window.___swUpdated=true;// We call the onServiceWorkerUpdateReady API so users can show update prompts.
(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("onServiceWorkerUpdateReady",{serviceWorker:reg});// If resources failed for the current page, reload.
if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{// At this point, everything has been precached.
// It's the perfect time to display a "Content is cached for offline use." message.
console.log("Content is now available offline!");// Post to service worker that install is complete.
// Delay to allow time for the event listener to be added --
// otherwise fetch is called too soon and resources aren't cached.
(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__.apiRunner)("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),

/***/ "./.cache/route-announcer-props.js":
/*!*****************************************!*\
  !*** ./.cache/route-announcer-props.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteAnnouncerProps": function() { return /* binding */ RouteAnnouncerProps; }
/* harmony export */ });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:"gatsby-announcer",style:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"};

/***/ }),

/***/ "./.cache/slice.js":
/*!*************************!*\
  !*** ./.cache/slice.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slice": function() { return /* binding */ Slice; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _slice_server_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice/server-slice */ "./.cache/slice/server-slice.js");
/* harmony import */ var _slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice/inline-slice */ "./.cache/slice/inline-slice.js");
/* harmony import */ var _slice_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice/context */ "./.cache/slice/context.js");
"use client";function Slice(props){if(true){// we use sliceName internally, so remap alias to sliceName
const internalProps={...props,sliceName:props.alias};delete internalProps.alias;delete internalProps.__renderedByLocation;const slicesContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_slice_context__WEBPACK_IMPORTED_MODULE_3__.SlicesContext);// validate props
const propErrors=validateSliceProps(props);if(Object.keys(propErrors).length){throw new SlicePropsError(slicesContext.renderEnvironment==="browser",internalProps.sliceName,propErrors,props.__renderedByLocation);}if(slicesContext.renderEnvironment==="server"){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slice_server_slice__WEBPACK_IMPORTED_MODULE_1__.ServerSlice,internalProps);}else if(slicesContext.renderEnvironment==="browser"){// in the browser, we'll just render the component as is
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__.InlineSlice,internalProps);}else if(slicesContext.renderEnvironment==="engines"||slicesContext.renderEnvironment==="dev-ssr"){// if we're in SSR, we'll just render the component as is
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__.InlineSlice,internalProps);}else if(slicesContext.renderEnvironment==="slices"){// we are not yet supporting nested slices
let additionalContextMessage="";// just in case generating additional contextual information fails, we still want the base message to show
// and not show another cryptic error message
try{additionalContextMessage="\n\nSlice component \""+slicesContext.sliceRoot.name+"\" ("+slicesContext.sliceRoot.componentPath+") tried to render <Slice alias=\""+props.alias+"\"/>";}catch{// don't need to handle it, we will just skip the additional context message if we fail to generate it
}throw new Error("Nested slices are not supported."+additionalContextMessage+"\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices");}else{throw new Error("Slice context \""+slicesContext.renderEnvironment+"\" is not supported.");}}else{}}let SlicePropsError=/*#__PURE__*/function(_Error){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(SlicePropsError,_Error);function SlicePropsError(inBrowser,sliceName,propErrors,renderedByLocation){var _this;const errors=Object.entries(propErrors).map(_ref=>{let[key,value]=_ref;return"not serializable \""+value+"\" type passed to \""+key+"\" prop";}).join(", ");const name="SlicePropsError";let stack="";let message="";if(inBrowser){// They're just (kinda) kidding, I promise... You can still work here <3
//   https://www.gatsbyjs.com/careers/
const fullStack=react__WEBPACK_IMPORTED_MODULE_0__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack();// remove the first line of the stack trace
const stackLines=fullStack.trim().split("\n").slice(1);stackLines[0]=stackLines[0].trim();stack="\n"+stackLines.join("\n");message="Slice \""+sliceName+"\" was passed props that are not serializable ("+errors+").";}else{// we can't really grab any extra info outside of the browser, so just print what we can
message=name+": Slice \""+sliceName+"\" was passed props that are not serializable ("+errors+").";const stackLines=new Error().stack.trim().split("\n").slice(2);stack=message+"\n"+stackLines.join("\n");}_this=_Error.call(this,message)||this;_this.name=name;if(stack){_this.stack=stack;}else{Error.captureStackTrace((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this),SlicePropsError);}if(renderedByLocation){_this.forcedLocation={...renderedByLocation,functionName:"Slice"};}return _this;}return SlicePropsError;}(/*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Error));const validateSliceProps=function(props,errors,seenObjects,path){if(errors===void 0){errors={};}if(seenObjects===void 0){seenObjects=[];}if(path===void 0){path=null;}// recursively validate all props
for(const[name,value]of Object.entries(props)){if(value===undefined||value===null||!path&&name==="children"){continue;}const propPath=path?path+"."+name:name;if(typeof value==="function"){errors[propPath]=typeof value;}else if(typeof value==="object"&&seenObjects.indexOf(value)<=0){seenObjects.push(value);validateSliceProps(value,errors,seenObjects,propPath);}}return errors;};

/***/ }),

/***/ "./.cache/slice/context.js":
/*!*********************************!*\
  !*** ./.cache/slice/context.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlicesContext": function() { return /* binding */ SlicesContext; },
/* harmony export */   "SlicesMapContext": function() { return /* binding */ SlicesMapContext; },
/* harmony export */   "SlicesPropsContext": function() { return /* binding */ SlicesPropsContext; },
/* harmony export */   "SlicesResultsContext": function() { return /* binding */ SlicesResultsContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const SlicesResultsContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});const SlicesContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});const SlicesMapContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});const SlicesPropsContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./.cache/slice/inline-slice.js":
/*!**************************************!*\
  !*** ./.cache/slice/inline-slice.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineSlice": function() { return /* binding */ InlineSlice; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./.cache/slice/context.js");
const InlineSlice=_ref=>{let{sliceName,allowEmpty,children,...sliceProps}=_ref;const slicesMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.SlicesMapContext);const slicesResultsMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.SlicesResultsContext);const concreteSliceName=slicesMap[sliceName];const slice=slicesResultsMap.get(concreteSliceName);if(!slice){if(allowEmpty){return null;}else{throw new Error("Slice \""+concreteSliceName+"\" for \""+sliceName+"\" slot not found");}}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(slice.component,Object.assign({sliceContext:slice.sliceContext,data:slice.data},sliceProps),children);};

/***/ }),

/***/ "./.cache/slice/server-slice-renderer.js":
/*!***********************************************!*\
  !*** ./.cache/slice/server-slice-renderer.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSliceRenderer": function() { return /* binding */ ServerSliceRenderer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ServerSliceRenderer=_ref=>{let{sliceId,children}=_ref;const contents=[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("slice-start",{id:sliceId+"-1"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("slice-end",{id:sliceId+"-1"})];if(children){// if children exist, we split the slice into a before and after piece
// see renderSlices in render-html
contents.push(children);contents.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("slice-start",{id:sliceId+"-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("slice-end",{id:sliceId+"-2"}));}return contents;};

/***/ }),

/***/ "./.cache/slice/server-slice.js":
/*!**************************************!*\
  !*** ./.cache/slice/server-slice.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSlice": function() { return /* binding */ ServerSlice; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var gatsby_core_utils_create_content_digest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-core-utils/create-content-digest */ "./.cache/create-content-digest-browser-shim.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./.cache/slice/context.js");
/* harmony import */ var _server_slice_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-slice-renderer */ "./.cache/slice/server-slice-renderer.js");
const getSliceId=(sliceName,sliceProps)=>{if(!Object.keys(sliceProps).length){return sliceName;}const propsString=(0,gatsby_core_utils_create_content_digest__WEBPACK_IMPORTED_MODULE_1__.createContentDigest)(sliceProps);return sliceName+"-"+propsString;};const ServerSlice=_ref=>{let{sliceName,allowEmpty,children,...sliceProps}=_ref;const slicesMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SlicesMapContext);const slicesProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SlicesPropsContext);const concreteSliceName=slicesMap[sliceName];if(!concreteSliceName){if(allowEmpty){return null;}else{throw new Error("Slice \""+concreteSliceName+"\" for \""+sliceName+"\" slot not found");}}const sliceId=getSliceId(concreteSliceName,sliceProps);// set props on context object for static-entry to return
let sliceUsage=slicesProps[sliceId];if(!sliceUsage){slicesProps[sliceId]=sliceUsage={props:sliceProps,sliceName:concreteSliceName,hasChildren:!!children};}else{if(children){sliceUsage.hasChildren=true;}}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_server_slice_renderer__WEBPACK_IMPORTED_MODULE_3__.ServerSliceRenderer,{sliceId:sliceId},children);};

/***/ }),

/***/ "./.cache/static-query.js":
/*!********************************!*\
  !*** ./.cache/static-query.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticQuery": function() { return /* binding */ StaticQuery; },
/* harmony export */   "StaticQueryContext": function() { return /* binding */ StaticQueryContext; },
/* harmony export */   "useStaticQuery": function() { return /* binding */ useStaticQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-utils */ "./.cache/context-utils.js");
const StaticQueryContext=(0,_context_utils__WEBPACK_IMPORTED_MODULE_1__.createServerOrClientContext)("StaticQuery",{});function StaticQueryDataRenderer(_ref){let{staticQueryData,data,query,render}=_ref;const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Loading (StaticQuery)"));}let warnedAboutStaticQuery=false;// TODO(v6): Remove completely
const StaticQuery=props=>{const{data,query,render,children}=props;if(false){}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StaticQueryContext.Consumer,null,staticQueryData=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{var _context$query;if(typeof react__WEBPACK_IMPORTED_MODULE_0__.useContext!=="function"&&"production"==="development"){}const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+query+"`);\n");}if((_context$query=context[query])!==null&&_context$query!==void 0&&_context$query.data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripPrefix; }
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix){if(prefix===void 0){prefix="";}if(!prefix){return str;}if(str===prefix){return"/";}if(str.startsWith(prefix+"/")){return str.slice(prefix.length);}return str;}

/***/ }),

/***/ "./gatsby-browser.js":
/*!***************************!*\
  !*** ./gatsby-browser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapRootElement": function() { return /* binding */ wrapRootElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _src_components_rootElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/rootElement */ "./src/components/rootElement.js");
// custom typefaces
// normalize CSS across browsers
// custom CSS styles
// Highlighting for code blocks
const wrapRootElement=_ref=>{let{element}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_rootElement__WEBPACK_IMPORTED_MODULE_1__["default"],null,element);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-browser.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-browser.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onRouteUpdate": function() { return /* binding */ onRouteUpdate; }
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _get_manifest_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-manifest-pathname */ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js");
/* global __MANIFEST_PLUGIN_HAS_LOCALISATION__ */// when we don't have localisation in our manifest, we tree shake everything away
const onRouteUpdate=function onRouteUpdate(_ref,pluginOptions){let{location}=_ref;if(false){}};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports["default"]=void 0;var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");/**
 * Get a manifest filename depending on localized pathname
 *
 * @param {string} pathname
 * @param {Array<{start_url: string, lang: string}>} localizedManifests
 * @param {boolean} shouldPrependPathPrefix
 * @return string
 */var _default=function(pathname,localizedManifests,shouldPrependPathPrefix){if(shouldPrependPathPrefix===void 0){shouldPrependPathPrefix=false;}const defaultFilename="manifest.webmanifest";if(!Array.isArray(localizedManifests)){return defaultFilename;}const localizedManifest=localizedManifests.find(app=>{let startUrl=app.start_url;if(shouldPrependPathPrefix){startUrl=(0,_gatsby.withPrefix)(startUrl);}return pathname.startsWith(startUrl);});if(!localizedManifest){return defaultFilename;}return"manifest_"+localizedManifest.lang+".webmanifest";};exports["default"]=_default;

/***/ }),

/***/ "./node_modules/gatsby-remark-images/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-remark-images/constants.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.DEFAULT_OPTIONS={maxWidth:650,wrapperStyle:"",backgroundColor:"white",linkImagesToOriginal:true,showCaptions:false,markdownCaptions:false,withWebp:false,withAvif:false,tracedSVG:false,loading:"lazy",decoding:"async",disableBgImageOnAlpha:false,disableBgImage:false};exports.EMPTY_ALT="GATSBY_EMPTY_ALT";exports.imageClass="gatsby-resp-image-image";exports.imageWrapperClass="gatsby-resp-image-wrapper";exports.imageBackgroundClass="gatsby-resp-image-background-image";

/***/ }),

/***/ "./node_modules/gatsby-remark-images/gatsby-browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/gatsby-remark-images/gatsby-browser.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var _require=__webpack_require__(/*! ./constants */ "./node_modules/gatsby-remark-images/constants.js"),DEFAULT_OPTIONS=_require.DEFAULT_OPTIONS,imageClass=_require.imageClass,imageBackgroundClass=_require.imageBackgroundClass,imageWrapperClass=_require.imageWrapperClass;exports.onRouteUpdate=function(apiCallbackContext,pluginOptions){var options=Object.assign({},DEFAULT_OPTIONS,pluginOptions);var imageWrappers=document.querySelectorAll("."+imageWrapperClass);// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
// for cross-browser looping through NodeList without polyfills
var _loop=function _loop(){var imageWrapper=imageWrappers[i];var backgroundElement=imageWrapper.querySelector("."+imageBackgroundClass);var imageElement=imageWrapper.querySelector("."+imageClass);var onImageLoad=function onImageLoad(){backgroundElement.style.transition="opacity 0.5s 0.5s";imageElement.style.transition="opacity 0.5s";onImageComplete();};var onImageComplete=function onImageComplete(){backgroundElement.style.opacity=0;imageElement.style.opacity=1;imageElement.style.color="inherit";imageElement.style.boxShadow="inset 0px 0px 0px 400px "+options.backgroundColor;imageElement.removeEventListener("load",onImageLoad);imageElement.removeEventListener("error",onImageComplete);};imageElement.style.opacity=0;imageElement.addEventListener("load",onImageLoad);imageElement.addEventListener("error",onImageComplete);if(imageElement.complete){onImageComplete();}};for(var i=0;i<imageWrappers.length;i++){_loop();}};

/***/ }),

/***/ "./src/components/rootElement.js":
false,

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
false,

/***/ "./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.production.min.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.production.min.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-server-dom-webpack.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k=__webpack_require__(/*! react */ "./node_modules/react/index.js"),l={stream:!0},n=new Map,p=Symbol.for("react.element"),q=Symbol.for("react.lazy"),r=Symbol.for("react.default_value"),t=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;function u(a){t[a]||(t[a]=k.createServerContext(a,r));return t[a]}function v(a,b,c){this._status=a;this._value=b;this._response=c}v.prototype.then=function(a){0===this._status?(null===this._value&&(this._value=[]),this._value.push(a)):a()};
function w(a){switch(a._status){case 3:return a._value;case 1:var b=JSON.parse(a._value,a._response._fromJSON);a._status=3;return a._value=b;case 2:b=a._value;for(var c=b.chunks,d=0;d<c.length;d++){var e=n.get(c[d]);if(null!==e)throw e;}c=__webpack_require__(b.id);b="*"===b.name?c:""===b.name?c.__esModule?c.default:c:c[b.name];a._status=3;return a._value=b;case 0:throw a;default:throw a._value;}}function x(){var a=y(this,0);return w(a)}function z(a,b){return new v(3,b,a)}
function A(a){if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}function C(a,b){if(0===a._status){var c=a._value;a._status=4;a._value=b;A(c)}}function D(a,b){a._chunks.forEach(function(a){C(a,b)})}function y(a,b){var c=a._chunks,d=c.get(b);d||(d=new v(0,null,a),c.set(b,d));return d}
function E(a,b,c){switch(c[0]){case "$":if("$"===c)return p;if("$"===c[1]||"@"===c[1])return c.substring(1);b=parseInt(c.substring(1),16);a=y(a,b);return w(a);case "@":return b=parseInt(c.substring(1),16),a=y(a,b),{$$typeof:q,_payload:a,_init:w}}return c}function F(a){D(a,Error("Connection closed."))}
function G(a,b){if(""!==b){var c=b[0],d=b.indexOf(":",1),e=parseInt(b.substring(1,d),16);d=b.substring(d+1);switch(c){case "J":b=a._chunks;(c=b.get(e))?0===c._status&&(a=c._value,c._status=1,c._value=d,A(a)):b.set(e,new v(1,d,a));break;case "M":b=a._chunks;c=b.get(e);d=JSON.parse(d,a._fromJSON);var f=a._bundlerConfig;d=f?f[d.id][d.name]:d;f=d.chunks;for(var h=0;h<f.length;h++){var g=f[h];if(void 0===n.get(g)){var B=__webpack_require__.e(g),m=n.set.bind(n,g,null),J=n.set.bind(n,g);B.then(m,J);n.set(g,
B)}}c?0===c._status&&(a=c._value,c._status=2,c._value=d,A(a)):b.set(e,new v(2,d,a));break;case "P":a._chunks.set(e,z(a,u(d).Provider));break;case "S":c=JSON.parse(d);a._chunks.set(e,z(a,Symbol.for(c)));break;case "E":b=JSON.parse(d);c=Error(b.message);c.stack=b.stack;b=a._chunks;(d=b.get(e))?C(d,c):b.set(e,new v(4,c,a));break;default:throw Error("Error parsing the data. It's probably an error code or network corruption.");}}}
function H(a){return function(b,c){return"string"===typeof c?E(a,this,c):"object"===typeof c&&null!==c?(b=c[0]===p?{$$typeof:p,type:c[1],key:c[2],ref:null,props:c[3],_owner:null}:c,b):c}}function I(a){var b=new TextDecoder,c=new Map;a={_bundlerConfig:a,_chunks:c,readRoot:x,_partialRow:"",_stringDecoder:b};a._fromJSON=H(a);return a}
function K(a,b){function c(b){var h=b.value;if(b.done)F(a);else{b=h;h=a._stringDecoder;for(var g=b.indexOf(10);-1<g;){var f=a._partialRow;var m=b.subarray(0,g);m=h.decode(m);G(a,f+m);a._partialRow="";b=b.subarray(g+1);g=b.indexOf(10)}a._partialRow+=h.decode(b,l);return e.read().then(c,d)}}function d(b){D(a,b)}var e=b.getReader();e.read().then(c,d)}exports.createFromFetch=function(a,b){var c=I(b&&b.moduleMap?b.moduleMap:null);a.then(function(a){K(c,a.body)},function(a){D(c,a)});return c};
exports.createFromReadableStream=function(a,b){b=I(b&&b.moduleMap?b.moduleMap:null);K(b,a);return b};
exports.createFromXHR=function(a,b){function c(){for(var b=a.responseText,c=f,d=b.indexOf("\n",c);-1<d;)c=e._partialRow+b.substring(c,d),G(e,c),e._partialRow="",c=d+1,d=b.indexOf("\n",c);e._partialRow+=b.substring(c);f=b.length}function d(){D(e,new TypeError("Network error"))}var e=I(b&&b.moduleMap?b.moduleMap:null),f=0;a.addEventListener("progress",c);a.addEventListener("load",function(){c();F(e)});a.addEventListener("error",d);a.addEventListener("abort",d);a.addEventListener("timeout",d);return e};


/***/ }),

/***/ "./node_modules/react-server-dom-webpack/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-server-dom-webpack/index.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-server-dom-webpack.production.min.js */ "./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/shallow-compare/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/shallow-compare/es/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/* harmony default export */ __webpack_exports__["default"] = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}
module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@builder.io/partytown/integration/index.cjs":
/*!******************************************************************!*\
  !*** ./node_modules/@builder.io/partytown/integration/index.cjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const PartytownSnippet = "/* Partytown 0.7.5 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener(\"pt0\",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.5\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(\".\")[0]]})),n=0;n<s.length;n++)(r=e.createElement(\"script\")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);";

const createSnippet = (config, snippetCode) => {
    const { forward = [], ...filteredConfig } = config || {};
    const configStr = JSON.stringify(filteredConfig, (k, v) => {
        if (typeof v === 'function') {
            v = String(v);
            if (v.startsWith(k + '(')) {
                v = 'function ' + v;
            }
        }
        return v;
    });
    return [
        `!(function(w,p,f,c){`,
        Object.keys(filteredConfig).length > 0
            ? `c=w[p]=Object.assign(w[p]||{},${configStr});`
            : `c=w[p]=w[p]||{};`,
        `c[f]=(c[f]||[])`,
        forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
        `})(window,'partytown','forward');`,
        snippetCode,
    ].join('');
};

/**
 * The `type` attribute for Partytown scripts, which does two things:
 *
 * 1. Prevents the `<script>` from executing on the main thread.
 * 2. Is used as a selector so the Partytown library can find all scripts to execute in a web worker.
 *
 * @public
 */
const SCRIPT_TYPE = `text/partytown`;

/**
 * Function that returns the Partytown snippet as a string, which can be
 * used as the innerHTML of the inlined Partytown script in the head.
 *
 * @public
 */
const partytownSnippet = (config) => createSnippet(config, PartytownSnippet);

exports.SCRIPT_TYPE = SCRIPT_TYPE;
exports.partytownSnippet = partytownSnippet;


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _construct; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeFunction; }
/* harmony export */ });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _wrapNativeSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs":
false,

/***/ "./node_modules/@tanstack/query-core/build/lib/focusManager.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/focusManager.mjs ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusManager": function() { return /* binding */ FocusManager; },
/* harmony export */   "focusManager": function() { return /* binding */ focusManager; }
/* harmony export */ });
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.mjs */ "./node_modules/@tanstack/query-core/build/lib/subscribable.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");



class FocusManager extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor() {
    super();

    this.setup = onFocus => {
      // addEventListener does not exist in React Native, but window does
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isServer && window.addEventListener) {
        const listener = () => onFocus(); // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return () => {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      }

      return;
    };
  }

  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  }

  setEventListener(setup) {
    var _this$cleanup2;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(focused => {
      if (typeof focused === 'boolean') {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }

  setFocused(focused) {
    this.focused = focused;

    if (focused) {
      this.onFocus();
    }
  }

  onFocus() {
    this.listeners.forEach(listener => {
      listener();
    });
  }

  isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  }

}
const focusManager = new FocusManager();


//# sourceMappingURL=focusManager.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextPageParam": function() { return /* binding */ getNextPageParam; },
/* harmony export */   "getPreviousPageParam": function() { return /* binding */ getPreviousPageParam; },
/* harmony export */   "hasNextPage": function() { return /* binding */ hasNextPage; },
/* harmony export */   "hasPreviousPage": function() { return /* binding */ hasPreviousPage; },
/* harmony export */   "infiniteQueryBehavior": function() { return /* binding */ infiniteQueryBehavior; }
/* harmony export */ });
function infiniteQueryBehavior() {
  return {
    onFetch: context => {
      context.fetchFn = () => {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;

        const refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        const fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        const pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        const isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
        const isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
        const oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        const oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        let newPageParams = oldPageParams;
        let cancelled = false;

        const addSignalProperty = object => {
          Object.defineProperty(object, 'signal', {
            enumerable: true,
            get: () => {
              var _context$signal;

              if ((_context$signal = context.signal) != null && _context$signal.aborted) {
                cancelled = true;
              } else {
                var _context$signal2;

                (_context$signal2 = context.signal) == null ? void 0 : _context$signal2.addEventListener('abort', () => {
                  cancelled = true;
                });
              }

              return context.signal;
            }
          });
        }; // Get query function


        const queryFn = context.options.queryFn || (() => Promise.reject('Missing queryFn'));

        const buildNewPages = (pages, param, page, previous) => {
          newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
          return previous ? [page, ...pages] : [...pages, page];
        }; // Create function to fetch a page


        const fetchPage = (pages, manual, param, previous) => {
          if (cancelled) {
            return Promise.reject('Cancelled');
          }

          if (typeof param === 'undefined' && !manual && pages.length) {
            return Promise.resolve(pages);
          }

          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            meta: context.options.meta
          };
          addSignalProperty(queryFnContext);
          const queryFnResult = queryFn(queryFnContext);
          const promise = Promise.resolve(queryFnResult).then(page => buildNewPages(pages, param, page, previous));
          return promise;
        };

        let promise; // Fetch first page?

        if (!oldPages.length) {
          promise = fetchPage([]);
        } // Fetch next page?
        else if (isFetchingNextPage) {
          const manual = typeof pageParam !== 'undefined';
          const param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } // Fetch previous page?
        else if (isFetchingPreviousPage) {
          const manual = typeof pageParam !== 'undefined';
          const param = manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param, true);
        } // Refetch pages
        else {
          newPageParams = [];
          const manual = typeof context.options.getNextPageParam === 'undefined';
          const shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true; // Fetch first page

          promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0])); // Fetch remaining pages

          for (let i = 1; i < oldPages.length; i++) {
            promise = promise.then(pages => {
              const shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;

              if (shouldFetchNextPage) {
                const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                return fetchPage(pages, manual, param);
              }

              return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
            });
          }
        }

        const finalPromise = promise.then(pages => ({
          pages,
          pageParams: newPageParams
        }));
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
/**
 * Checks if there is a next page.
 * Returns `undefined` if it cannot be determined.
 */

function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    const nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
  }

  return;
}
/**
 * Checks if there is a previous page.
 * Returns `undefined` if it cannot be determined.
 */

function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    const previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
  }

  return;
}


//# sourceMappingURL=infiniteQueryBehavior.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/logger.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/logger.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLogger": function() { return /* binding */ defaultLogger; }
/* harmony export */ });
const defaultLogger = console;


//# sourceMappingURL=logger.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/mutation.mjs":
false,

/***/ "./node_modules/@tanstack/query-core/build/lib/mutationCache.mjs":
false,

/***/ "./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotifyManager": function() { return /* binding */ createNotifyManager; },
/* harmony export */   "notifyManager": function() { return /* binding */ notifyManager; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");


function createNotifyManager() {
  let queue = [];
  let transactions = 0;

  let notifyFn = callback => {
    callback();
  };

  let batchNotifyFn = callback => {
    callback();
  };

  const batch = callback => {
    let result;
    transactions++;

    try {
      result = callback();
    } finally {
      transactions--;

      if (!transactions) {
        flush();
      }
    }

    return result;
  };

  const schedule = callback => {
    if (transactions) {
      queue.push(callback);
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(() => {
        notifyFn(callback);
      });
    }
  };
  /**
   * All calls to the wrapped function will be batched.
   */


  const batchCalls = callback => {
    return (...args) => {
      schedule(() => {
        callback(...args);
      });
    };
  };

  const flush = () => {
    const originalQueue = queue;
    queue = [];

    if (originalQueue.length) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(() => {
        batchNotifyFn(() => {
          originalQueue.forEach(callback => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */


  const setNotifyFunction = fn => {
    notifyFn = fn;
  };
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */


  const setBatchNotifyFunction = fn => {
    batchNotifyFn = fn;
  };

  return {
    batch,
    batchCalls,
    schedule,
    setNotifyFunction,
    setBatchNotifyFunction
  };
} // SINGLETON

const notifyManager = createNotifyManager();


//# sourceMappingURL=notifyManager.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/onlineManager.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/onlineManager.mjs ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineManager": function() { return /* binding */ OnlineManager; },
/* harmony export */   "onlineManager": function() { return /* binding */ onlineManager; }
/* harmony export */ });
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.mjs */ "./node_modules/@tanstack/query-core/build/lib/subscribable.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");



class OnlineManager extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor() {
    super();

    this.setup = onOnline => {
      // addEventListener does not exist in React Native, but window does
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isServer && window.addEventListener) {
        const listener = () => onOnline(); // Listen to online


        window.addEventListener('online', listener, false);
        window.addEventListener('offline', listener, false);
        return () => {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('online', listener);
          window.removeEventListener('offline', listener);
        };
      }

      return;
    };
  }

  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  }

  setEventListener(setup) {
    var _this$cleanup2;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(online => {
      if (typeof online === 'boolean') {
        this.setOnline(online);
      } else {
        this.onOnline();
      }
    });
  }

  setOnline(online) {
    this.online = online;

    if (online) {
      this.onOnline();
    }
  }

  onOnline() {
    this.listeners.forEach(listener => {
      listener();
    });
  }

  isOnline() {
    if (typeof this.online === 'boolean') {
      return this.online;
    }

    if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
      return true;
    }

    return navigator.onLine;
  }

}
const onlineManager = new OnlineManager();


//# sourceMappingURL=onlineManager.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/query.mjs":
false,

/***/ "./node_modules/@tanstack/query-core/build/lib/queryCache.mjs":
false,

/***/ "./node_modules/@tanstack/query-core/build/lib/queryClient.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/queryClient.mjs ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClient": function() { return /* binding */ QueryClient; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");
/* harmony import */ var _queryCache_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryCache.mjs */ "./node_modules/@tanstack/query-core/build/lib/queryCache.mjs");
/* harmony import */ var _mutationCache_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutationCache.mjs */ "./node_modules/@tanstack/query-core/build/lib/mutationCache.mjs");
/* harmony import */ var _focusManager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/focusManager.mjs");
/* harmony import */ var _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onlineManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/onlineManager.mjs");
/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs");
/* harmony import */ var _infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infiniteQueryBehavior.mjs */ "./node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs");
/* harmony import */ var _logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.mjs */ "./node_modules/@tanstack/query-core/build/lib/logger.mjs");









// CLASS
class QueryClient {
  constructor(config = {}) {
    this.queryCache = config.queryCache || new _queryCache_mjs__WEBPACK_IMPORTED_MODULE_0__.QueryCache();
    this.mutationCache = config.mutationCache || new _mutationCache_mjs__WEBPACK_IMPORTED_MODULE_1__.MutationCache();
    this.logger = config.logger || _logger_mjs__WEBPACK_IMPORTED_MODULE_2__.defaultLogger;
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
    this.mountCount = 0;

    if (false) {}
  }

  mount() {
    this.mountCount++;
    if (this.mountCount !== 1) return;
    this.unsubscribeFocus = _focusManager_mjs__WEBPACK_IMPORTED_MODULE_3__.focusManager.subscribe(() => {
      if (_focusManager_mjs__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused()) {
        this.resumePausedMutations();
        this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_4__.onlineManager.subscribe(() => {
      if (_onlineManager_mjs__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        this.resumePausedMutations();
        this.queryCache.onOnline();
      }
    });
  }

  unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;

    this.mountCount--;
    if (this.mountCount !== 0) return;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    this.unsubscribeFocus = undefined;
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
    this.unsubscribeOnline = undefined;
  }

  isFetching(arg1, arg2) {
    const [filters] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2);
    filters.fetchStatus = 'fetching';
    return this.queryCache.findAll(filters).length;
  }

  isMutating(filters) {
    return this.mutationCache.findAll({ ...filters,
      fetching: true
    }).length;
  }

  getQueryData(queryKey, filters) {
    var _this$queryCache$find;

    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  }

  ensureQueryData(arg1, arg2, arg3) {
    const parsedOptions = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    const cachedData = this.getQueryData(parsedOptions.queryKey);
    return cachedData ? Promise.resolve(cachedData) : this.fetchQuery(parsedOptions);
  }

  getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey,
      state
    }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }

  setQueryData(queryKey, updater, options) {
    const query = this.queryCache.find(queryKey);
    const prevData = query == null ? void 0 : query.state.data;
    const data = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.functionalUpdate)(updater, prevData);

    if (typeof data === 'undefined') {
      return undefined;
    }

    const parsedOptions = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(queryKey);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(data, { ...options,
      manual: true
    });
  }

  setQueriesData(queryKeyOrFilters, updater, options) {
    return _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey
    }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
  }

  getQueryState(queryKey, filters) {
    var _this$queryCache$find2;

    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  }

  removeQueries(arg1, arg2) {
    const [filters] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2);
    const queryCache = this.queryCache;
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => {
      queryCache.findAll(filters).forEach(query => {
        queryCache.remove(query);
      });
    });
  }

  resetQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3);
    const queryCache = this.queryCache;
    const refetchFilters = {
      type: 'active',
      ...filters
    };
    return _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => {
      queryCache.findAll(filters).forEach(query => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }

  cancelQueries(arg1, arg2, arg3) {
    const [filters, cancelOptions = {}] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3);

    if (typeof cancelOptions.revert === 'undefined') {
      cancelOptions.revert = true;
    }

    const promises = _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => this.queryCache.findAll(filters).map(query => query.cancel(cancelOptions)));
    return Promise.all(promises).then(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);
  }

  invalidateQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3);
    return _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => {
      var _ref, _filters$refetchType;

      this.queryCache.findAll(filters).forEach(query => {
        query.invalidate();
      });

      if (filters.refetchType === 'none') {
        return Promise.resolve();
      }

      const refetchFilters = { ...filters,
        type: (_ref = (_filters$refetchType = filters.refetchType) != null ? _filters$refetchType : filters.type) != null ? _ref : 'active'
      };
      return this.refetchQueries(refetchFilters, options);
    });
  }

  refetchQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3);
    const promises = _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => this.queryCache.findAll(filters).filter(query => !query.isDisabled()).map(query => {
      var _options$cancelRefetc;

      return query.fetch(undefined, { ...options,
        cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
        meta: {
          refetchPage: filters.refetchPage
        }
      });
    }));
    let promise = Promise.all(promises).then(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);

    if (!(options != null && options.throwOnError)) {
      promise = promise.catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);
    }

    return promise;
  }

  fetchQuery(arg1, arg2, arg3) {
    const parsedOptions = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

    if (typeof defaultedOptions.retry === 'undefined') {
      defaultedOptions.retry = false;
    }

    const query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }

  prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);
  }

  fetchInfiniteQuery(arg1, arg2, arg3) {
    const parsedOptions = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    parsedOptions.behavior = (0,_infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_7__.infiniteQueryBehavior)();
    return this.fetchQuery(parsedOptions);
  }

  prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);
  }

  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }

  getQueryCache() {
    return this.queryCache;
  }

  getMutationCache() {
    return this.mutationCache;
  }

  getLogger() {
    return this.logger;
  }

  getDefaultOptions() {
    return this.defaultOptions;
  }

  setDefaultOptions(options) {
    this.defaultOptions = options;
  }

  setQueryDefaults(queryKey, options) {
    const result = this.queryDefaults.find(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(queryKey) === (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.queryKey));

    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey,
        defaultOptions: options
      });
    }
  }

  getQueryDefaults(queryKey) {
    if (!queryKey) {
      return undefined;
    } // Get the first matching defaults


    const firstMatchingDefaults = this.queryDefaults.find(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(queryKey, x.queryKey)); // Additional checks and error in dev mode

    if (false) {}

    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }

  setMutationDefaults(mutationKey, options) {
    const result = this.mutationDefaults.find(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(mutationKey) === (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.mutationKey));

    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey,
        defaultOptions: options
      });
    }
  }

  getMutationDefaults(mutationKey) {
    if (!mutationKey) {
      return undefined;
    } // Get the first matching defaults


    const firstMatchingDefaults = this.mutationDefaults.find(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(mutationKey, x.mutationKey)); // Additional checks and error in dev mode

    if (false) {}

    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }

  defaultQueryOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }

    const defaultedOptions = { ...this.defaultOptions.queries,
      ...this.getQueryDefaults(options == null ? void 0 : options.queryKey),
      ...options,
      _defaulted: true
    };

    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKeyByOptions)(defaultedOptions.queryKey, defaultedOptions);
    } // dependent default values


    if (typeof defaultedOptions.refetchOnReconnect === 'undefined') {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== 'always';
    }

    if (typeof defaultedOptions.useErrorBoundary === 'undefined') {
      defaultedOptions.useErrorBoundary = !!defaultedOptions.suspense;
    }

    return defaultedOptions;
  }

  defaultMutationOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }

    return { ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(options == null ? void 0 : options.mutationKey),
      ...options,
      _defaulted: true
    };
  }

  clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  }

}


//# sourceMappingURL=queryClient.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/removable.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/removable.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Removable": function() { return /* binding */ Removable; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");


class Removable {
  destroy() {
    this.clearGcTimeout();
  }

  scheduleGc() {
    this.clearGcTimeout();

    if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidTimeout)(this.cacheTime)) {
      this.gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.cacheTime);
    }
  }

  updateCacheTime(newCacheTime) {
    // Default to 5 minutes (Infinity for server-side) if no cache time is set
    this.cacheTime = Math.max(this.cacheTime || 0, newCacheTime != null ? newCacheTime : _utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isServer ? Infinity : 5 * 60 * 1000);
  }

  clearGcTimeout() {
    if (this.gcTimeout) {
      clearTimeout(this.gcTimeout);
      this.gcTimeout = undefined;
    }
  }

}


//# sourceMappingURL=removable.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/retryer.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/retryer.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelledError": function() { return /* binding */ CancelledError; },
/* harmony export */   "canFetch": function() { return /* binding */ canFetch; },
/* harmony export */   "createRetryer": function() { return /* binding */ createRetryer; },
/* harmony export */   "isCancelledError": function() { return /* binding */ isCancelledError; }
/* harmony export */ });
/* harmony import */ var _focusManager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/focusManager.mjs");
/* harmony import */ var _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/onlineManager.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");




function defaultRetryDelay(failureCount) {
  return Math.min(1000 * 2 ** failureCount, 30000);
}

function canFetch(networkMode) {
  return (networkMode != null ? networkMode : 'online') === 'online' ? _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__.onlineManager.isOnline() : true;
}
class CancelledError {
  constructor(options) {
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }

}
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let isResolved = false;
  let continueFn;
  let promiseResolve;
  let promiseReject;
  const promise = new Promise((outerResolve, outerReject) => {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });

  const cancel = cancelOptions => {
    if (!isResolved) {
      reject(new CancelledError(cancelOptions));
      config.abort == null ? void 0 : config.abort();
    }
  };

  const cancelRetry = () => {
    isRetryCancelled = true;
  };

  const continueRetry = () => {
    isRetryCancelled = false;
  };

  const shouldPause = () => !_focusManager_mjs__WEBPACK_IMPORTED_MODULE_1__.focusManager.isFocused() || config.networkMode !== 'always' && !_onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__.onlineManager.isOnline();

  const resolve = value => {
    if (!isResolved) {
      isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };

  const reject = value => {
    if (!isResolved) {
      isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };

  const pause = () => {
    return new Promise(continueResolve => {
      continueFn = value => {
        const canContinue = isResolved || !shouldPause();

        if (canContinue) {
          continueResolve(value);
        }

        return canContinue;
      };

      config.onPause == null ? void 0 : config.onPause();
    }).then(() => {
      continueFn = undefined;

      if (!isResolved) {
        config.onContinue == null ? void 0 : config.onContinue();
      }
    });
  }; // Create loop function


  const run = () => {
    // Do nothing if already resolved
    if (isResolved) {
      return;
    }

    let promiseOrValue; // Execute query

    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }

    Promise.resolve(promiseOrValue).then(resolve).catch(error => {
      var _config$retry, _config$retryDelay;

      // Stop if the fetch is already resolved
      if (isResolved) {
        return;
      } // Do we need to retry the request?


      const retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      const retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      const delay = typeof retryDelay === 'function' ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === 'number' && failureCount < retry || typeof retry === 'function' && retry(failureCount, error);

      if (isRetryCancelled || !shouldRetry) {
        // We are done if the query does not need to be retried
        reject(error);
        return;
      }

      failureCount++; // Notify on fail

      config.onFail == null ? void 0 : config.onFail(failureCount, error); // Delay

      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sleep)(delay) // Pause if the document is not visible or when the device is offline
      .then(() => {
        if (shouldPause()) {
          return pause();
        }

        return;
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }; // Start loop


  if (canFetch(config.networkMode)) {
    run();
  } else {
    pause().then(run);
  }

  return {
    promise,
    cancel,
    continue: () => {
      const didContinue = continueFn == null ? void 0 : continueFn();
      return didContinue ? promise : Promise.resolve();
    },
    cancelRetry,
    continueRetry
  };
}


//# sourceMappingURL=retryer.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/subscribable.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/subscribable.mjs ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscribable": function() { return /* binding */ Subscribable; }
/* harmony export */ });
class Subscribable {
  constructor() {
    this.listeners = [];
    this.subscribe = this.subscribe.bind(this);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    this.onSubscribe();
    return () => {
      this.listeners = this.listeners.filter(x => x !== listener);
      this.onUnsubscribe();
    };
  }

  hasListeners() {
    return this.listeners.length > 0;
  }

  onSubscribe() {// Do nothing
  }

  onUnsubscribe() {// Do nothing
  }

}


//# sourceMappingURL=subscribable.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/utils.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/utils.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "difference": function() { return /* binding */ difference; },
/* harmony export */   "functionalUpdate": function() { return /* binding */ functionalUpdate; },
/* harmony export */   "getAbortController": function() { return /* binding */ getAbortController; },
/* harmony export */   "hashQueryKey": function() { return /* binding */ hashQueryKey; },
/* harmony export */   "hashQueryKeyByOptions": function() { return /* binding */ hashQueryKeyByOptions; },
/* harmony export */   "isError": function() { return /* binding */ isError; },
/* harmony export */   "isPlainArray": function() { return /* binding */ isPlainArray; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isQueryKey": function() { return /* binding */ isQueryKey; },
/* harmony export */   "isServer": function() { return /* binding */ isServer; },
/* harmony export */   "isValidTimeout": function() { return /* binding */ isValidTimeout; },
/* harmony export */   "matchMutation": function() { return /* binding */ matchMutation; },
/* harmony export */   "matchQuery": function() { return /* binding */ matchQuery; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "parseFilterArgs": function() { return /* binding */ parseFilterArgs; },
/* harmony export */   "parseMutationArgs": function() { return /* binding */ parseMutationArgs; },
/* harmony export */   "parseMutationFilterArgs": function() { return /* binding */ parseMutationFilterArgs; },
/* harmony export */   "parseQueryArgs": function() { return /* binding */ parseQueryArgs; },
/* harmony export */   "partialDeepEqual": function() { return /* binding */ partialDeepEqual; },
/* harmony export */   "partialMatchKey": function() { return /* binding */ partialMatchKey; },
/* harmony export */   "replaceAt": function() { return /* binding */ replaceAt; },
/* harmony export */   "replaceData": function() { return /* binding */ replaceData; },
/* harmony export */   "replaceEqualDeep": function() { return /* binding */ replaceEqualDeep; },
/* harmony export */   "scheduleMicrotask": function() { return /* binding */ scheduleMicrotask; },
/* harmony export */   "shallowEqualObjects": function() { return /* binding */ shallowEqualObjects; },
/* harmony export */   "sleep": function() { return /* binding */ sleep; },
/* harmony export */   "timeUntilStale": function() { return /* binding */ timeUntilStale; }
/* harmony export */ });
// TYPES
// UTILS
const isServer = typeof window === 'undefined' || 'Deno' in window;
function noop() {
  return undefined;
}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function difference(array1, array2) {
  return array1.filter(x => array2.indexOf(x) === -1);
}
function replaceAt(array, index, value) {
  const copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return { ...arg3,
      queryKey: arg1,
      queryFn: arg2
    };
  }

  return { ...arg2,
    queryKey: arg1
  };
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return { ...arg3,
        mutationKey: arg1,
        mutationFn: arg2
      };
    }

    return { ...arg2,
      mutationKey: arg1
    };
  }

  if (typeof arg1 === 'function') {
    return { ...arg2,
      mutationFn: arg1
    };
  }

  return { ...arg1
  };
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [{ ...arg2,
    queryKey: arg1
  }, arg3] : [arg1 || {}, arg2];
}
function parseMutationFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [{ ...arg2,
    mutationKey: arg1
  }, arg3] : [arg1 || {}, arg2];
}
function matchQuery(filters, query) {
  const {
    type = 'all',
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;

  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  if (type !== 'all') {
    const isActive = query.isActive();

    if (type === 'active' && !isActive) {
      return false;
    }

    if (type === 'inactive' && isActive) {
      return false;
    }
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetchStatus !== 'undefined' && fetchStatus !== query.state.fetchStatus) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}
function matchMutation(filters, mutation) {
  const {
    exact,
    fetching,
    predicate,
    mutationKey
  } = filters;

  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }

    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }

  if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
    return false;
  }

  if (predicate && !predicate(mutation)) {
    return false;
  }

  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
/**
 * Default query keys hash function.
 * Hashes the value into a stable hash.
 */

function hashQueryKey(queryKey) {
  return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
    result[key] = val[key];
    return result;
  }, {}) : val);
}
/**
 * Checks if key `b` partially matches with key `a`.
 */

function partialMatchKey(a, b) {
  return partialDeepEqual(a, b);
}
/**
 * Checks if `b` partially matches with `a`.
 */

function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(key => !partialDeepEqual(a[key], b[key]));
  }

  return false;
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  const array = isPlainArray(a) && isPlainArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    const aSize = array ? a.length : Object.keys(a).length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;

    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  const ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  const prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return Array.isArray(value);
}
function isError(value) {
  return value instanceof Error;
}
function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  sleep(0).then(callback);
}
function getAbortController() {
  if (typeof AbortController === 'function') {
    return new AbortController();
  }

  return;
}
function replaceData(prevData, data, options) {
  // Use prev data if an isDataEqual function is defined and returns `true`
  if (options.isDataEqual != null && options.isDataEqual(prevData, data)) {
    return prevData;
  } else if (typeof options.structuralSharing === 'function') {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    // Structurally share data between prev and new data if needed
    return replaceEqualDeep(prevData, data);
  }

  return data;
}


//# sourceMappingURL=utils.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs":
false,

/***/ "./node_modules/gatsby-link/dist/index.modern.mjs":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-link/dist/index.modern.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": function() { return /* binding */ P; },
/* harmony export */   "navigate": function() { return /* binding */ E; },
/* harmony export */   "parsePath": function() { return /* binding */ a; },
/* harmony export */   "withAssetPrefix": function() { return /* binding */ y; },
/* harmony export */   "withPrefix": function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-page-utils/apply-trailing-slash-option */ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js");
"use client"
;function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t){let e=t||"/",n="",r="";const o=e.indexOf("#");-1!==o&&(r=e.slice(o),e=e.slice(0,o));const s=e.indexOf("?");return-1!==s&&(n=e.slice(s),e=e.slice(0,s)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}const c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=t=>{if("string"==typeof t)return!(t=>c.test(t))(t)},p=()=> false?0:"";function h(t,e=(()=> false?0:"")()){var n;if(!l(t))return t;if(t.startsWith("./")||t.startsWith("../"))return t;const r=null!=(n=null!=e?e:p())?n:"/";return`${null!=r&&r.endsWith("/")?r.slice(0,-1):r}${t.startsWith("/")?t:`/${t}`}`}const f=t=>null==t?void 0:t.startsWith("/"),u=()=> true?"always":0;function _(t,e){const{pathname:n,search:r,hash:o}=a(t);return`${(0,gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__.applyTrailingSlashOption)(n,e)}${r}${o}`}const d=(t,e)=>"number"==typeof t?t:l(t)?f(t)?function(t){const e=h(t),n=u();return"always"===n||"never"===n?_(e,n):e}(t):function(t,e){if(f(t))return t;const r=u(),o=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.resolve)(t,e);return"always"===r||"never"===r?_(o,r):o}(t,e):t,m=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];function y(t){return h(t,p())}const v={activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3__.string,activeStyle:prop_types__WEBPACK_IMPORTED_MODULE_3__.object,partiallyActive:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool};function b(t){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,({location:n})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,i({},t,{_location:n})))}class w extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(t){super(t),this.defaultGetProps=({isPartiallyCurrent:t,isCurrent:e})=>(this.props.partiallyActive?t:e)?{className:[this.props.className,this.props.activeClassName].filter(Boolean).join(" "),style:i({},this.props.style,this.props.activeStyle)}:null;let e=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(e=!0),this.state={IOSupported:e},this.abortPrefetch=null,this.handleRef=this.handleRef.bind(this)}_prefetch(){let t=window.location.pathname+window.location.search;this.props._location&&this.props._location.pathname&&(t=this.props._location.pathname+this.props._location.search);const e=a(d(this.props.to,t)),n=e.pathname+e.search;if(t!==n)return ___loader.enqueue(n)}componentWillUnmount(){if(!this.io)return;const{instance:t,el:e}=this.io;this.abortPrefetch&&this.abortPrefetch.abort(),t.unobserve(e),t.disconnect()}handleRef(t){this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")?this.props.innerRef.current=t:this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(this.io=((t,e)=>{const n=new window.IntersectionObserver(n=>{n.forEach(n=>{t===n.target&&e(n.isIntersecting||n.intersectionRatio>0)})});return n.observe(t),{instance:n,el:t}})(t,t=>{t?this.abortPrefetch=this._prefetch():this.abortPrefetch&&this.abortPrefetch.abort()}))}render(){const t=this.props,{to:n,getProps:r=this.defaultGetProps,onClick:s,onMouseEnter:c,state:p,replace:h,_location:f}=t,u=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}(t,m); true||0;const _=d(n,f.pathname);return l(_)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Link,i({to:_,state:p,getProps:r,innerRef:this.handleRef,onMouseEnter:t=>{c&&c(t);const e=a(_);___loader.hovering(e.pathname+e.search)},onClick:t=>{if(s&&s(t),!(0!==t.button||this.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();let e=h;const n=encodeURI(_)===f.pathname;"boolean"!=typeof h&&n&&(e=!0),window.___navigate(_,{state:p,replace:e})}return!0}},u)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",i({href:_},u))}}w.propTypes=i({},v,{onClick:prop_types__WEBPACK_IMPORTED_MODULE_3__.func,to:prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,replace:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,state:prop_types__WEBPACK_IMPORTED_MODULE_3__.object});const P=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((t,n)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,i({innerRef:n},t))),E=(t,e)=>{window.___navigate(d(t,window.location.pathname),e)};
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ "./node_modules/gatsby-script/dist/index.modern.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-script/dist/index.modern.mjs ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Script": function() { return /* binding */ f; },
/* harmony export */   "ScriptStrategy": function() { return /* binding */ c; },
/* harmony export */   "collectedScriptsByPage": function() { return /* binding */ l; },
/* harmony export */   "scriptCache": function() { return /* binding */ u; },
/* harmony export */   "scriptCallbackCache": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
"use client"
;function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}const a=new Map,l={get:t=>a.get(t)||[],set(t,e){const n=a.get(t)||[];n.push(e),a.set(t,n)},delete(t){a.delete(t)}},s="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(t){const e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)};var c;!function(t){t.postHydrate="post-hydrate",t.idle="idle",t.offMainThread="off-main-thread"}(c||(c={}));const i=new Set(["src","strategy","dangerouslySetInnerHTML","children","onLoad","onError"]),u=new Set,d=new Map;function f(e){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(p,e))}function p(n){const{src:a,strategy:i=c.postHydrate}=n||{},{pathname:u}=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();if((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let t;switch(i){case c.postHydrate:t=y(n);break;case c.idle:s(()=>{t=y(n)});break;case c.offMainThread:{const t=b(n);l.set(u,t)}}return()=>{const{script:e,loadCallback:n,errorCallback:r}=t||{};n&&(null==e||e.removeEventListener("load",n)),r&&(null==e||e.removeEventListener("error",r)),null==e||e.remove()}},[]),i===c.offMainThread){const e=m(n),r=b(n);return"undefined"==typeof window&&l.set(u,r),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",e?o({type:"text/partytown","data-strategy":i,crossOrigin:"anonymous"},r,{dangerouslySetInnerHTML:{__html:m(n)}}):o({type:"text/partytown",src:h(a),"data-strategy":i,crossOrigin:"anonymous"},r))}return null}function y(t){const{id:e,src:n,strategy:r=c.postHydrate,onLoad:a,onError:l}=t||{},s=e||n,i=["load","error"],f={load:a,error:l};if(s){for(const t of i)if(null!=f&&f[t]){var p;const e=d.get(s)||{},{callbacks:n=[]}=(null==e?void 0:e[t])||{};var y,h;n.push(null==f?void 0:f[t]),null!=e&&null!=(p=e[t])&&p.event?null==f||null==(y=f[t])||y.call(f,null==e||null==(h=e[t])?void 0:h.event):d.set(s,o({},e,{[t]:{callbacks:n}}))}if(u.has(s))return null}const v=m(t),k=b(t),w=document.createElement("script");e&&(w.id=e),w.dataset.strategy=r;for(const[t,e]of Object.entries(k))w.setAttribute(t,e);v&&(w.textContent=v),n&&(w.src=n);const C={};if(s){for(const t of i){const e=e=>g(e,s,t);w.addEventListener(t,e),C[`${t}Callback`]=e}u.add(s)}return document.body.appendChild(w),{script:w,loadCallback:C.loadCallback,errorCallback:C.errorCallback}}function m(t){const{dangerouslySetInnerHTML:e,children:n=""}=t||{},{__html:r=""}=e||{};return r||n}function b(t){const e={};for(const[n,r]of Object.entries(t))i.has(n)||(e[n]=r);return e}function h(t){if(t)return`/__third-party-proxy?url=${encodeURIComponent(t)}`}function g(t,e,n){const r=d.get(e)||{};for(const e of(null==r||null==(o=r[n])?void 0:o.callbacks)||[]){var o;e(t)}d.set(e,{[n]:{event:t}})}
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ "./.cache/_this_is_virtual_fs_path_/$virtual/match-paths.json":
/*!********************************************************************!*\
  !*** ./.cache/_this_is_virtual_fs_path_/$virtual/match-paths.json ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = [];

/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = [];

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["styles","framework"], function() { return __webpack_exec__("./.cache/production-app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app-5b8ac203fc38a8686ec3.js.map