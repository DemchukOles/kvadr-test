exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js":
/*!***************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/history.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalHistory": () => (/* binding */ globalHistory),
/* harmony export */   "navigate": () => (/* binding */ navigate),
/* harmony export */   "createHistory": () => (/* binding */ createHistory),
/* harmony export */   "createMemorySource": () => (/* binding */ createMemorySource)
/* harmony export */ });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "insertParams": () => (/* binding */ insertParams),
/* harmony export */   "validateRedirect": () => (/* binding */ validateRedirect),
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/lib/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/lib/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? (0, _invariant2.default)(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/any-base/index.js":
/*!****************************************!*\
  !*** ./node_modules/any-base/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Converter = __webpack_require__(/*! ./src/converter */ "./node_modules/any-base/src/converter.js");

/**
 * Function get source and destination alphabet and return convert function
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 *
 * @returns {function(number|Array)}
 */
function anyBase(srcAlphabet, dstAlphabet) {
    var converter = new Converter(srcAlphabet, dstAlphabet);
    /**
     * Convert function
     *
     * @param {string|Array} number
     *
     * @return {string|Array} number
     */
    return function (number) {
        return converter.convert(number);
    }
};

anyBase.BIN = '01';
anyBase.OCT = '01234567';
anyBase.DEC = '0123456789';
anyBase.HEX = '0123456789abcdef';

module.exports = anyBase;

/***/ }),

/***/ "./node_modules/any-base/src/converter.js":
/*!************************************************!*\
  !*** ./node_modules/any-base/src/converter.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


/**
 * Converter
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 * @constructor
 */
function Converter(srcAlphabet, dstAlphabet) {
    if (!srcAlphabet || !dstAlphabet || !srcAlphabet.length || !dstAlphabet.length) {
        throw new Error('Bad alphabet');
    }
    this.srcAlphabet = srcAlphabet;
    this.dstAlphabet = dstAlphabet;
}

/**
 * Convert number from source alphabet to destination alphabet
 *
 * @param {string|Array} number - number represented as a string or array of points
 *
 * @returns {string|Array}
 */
Converter.prototype.convert = function(number) {
    var i, divide, newlen,
    numberMap = {},
    fromBase = this.srcAlphabet.length,
    toBase = this.dstAlphabet.length,
    length = number.length,
    result = typeof number === 'string' ? '' : [];

    if (!this.isValid(number)) {
        throw new Error('Number "' + number + '" contains of non-alphabetic digits (' + this.srcAlphabet + ')');
    }

    if (this.srcAlphabet === this.dstAlphabet) {
        return number;
    }

    for (i = 0; i < length; i++) {
        numberMap[i] = this.srcAlphabet.indexOf(number[i]);
    }
    do {
        divide = 0;
        newlen = 0;
        for (i = 0; i < length; i++) {
            divide = divide * fromBase + numberMap[i];
            if (divide >= toBase) {
                numberMap[newlen++] = parseInt(divide / toBase, 10);
                divide = divide % toBase;
            } else if (newlen > 0) {
                numberMap[newlen++] = 0;
            }
        }
        length = newlen;
        result = this.dstAlphabet.slice(divide, divide + 1).concat(result);
    } while (newlen !== 0);

    return result;
};

/**
 * Valid number with source alphabet
 *
 * @param {number} number
 *
 * @returns {boolean}
 */
Converter.prototype.isValid = function(number) {
    var i = 0;
    for (; i < number.length; ++i) {
        if (this.srcAlphabet.indexOf(number[i]) === -1) {
            return false;
        }
    }
    return true;
};

module.exports = Converter;

/***/ }),

/***/ "./node_modules/filter-invalid-dom-props/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/filter-invalid-dom-props/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = filterInvalidDOMProps;

var _htmlAttributes = __webpack_require__(/*! html-attributes */ "./node_modules/html-attributes/lib/html-attributes.js");

var _htmlAttributes2 = _interopRequireDefault(_htmlAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventProps = {
	onCopy: true,
	onCut: true,
	onPaste: true,
	onLoad: true,
	onError: true,
	onWheel: true,
	onScroll: true,
	onCompositionEnd: true,
	onCompositionStart: true,
	onCompositionUpdate: true,
	onKeyDown: true,
	onKeyPress: true,
	onKeyUp: true,
	onFocus: true,
	onBlur: true,
	onChange: true,
	onInput: true,
	onSubmit: true,
	onClick: true,
	onContextMenu: true,
	onDoubleClick: true,
	onDrag: true,
	onDragEnd: true,
	onDragEnter: true,
	onDragExit: true,
	onDragLeave: true,
	onDragOver: true,
	onDragStart: true,
	onDrop: true,
	onMouseDown: true,
	onMouseEnter: true,
	onMouseLeave: true,
	onMouseMove: true,
	onMouseOut: true,
	onMouseOver: true,
	onMouseUp: true,
	onSelect: true,
	onTouchCancel: true,
	onTouchEnd: true,
	onTouchMove: true,
	onTouchStart: true,
	onAnimationStart: true,
	onAnimationEnd: true,
	onAnimationIteration: true,
	onTransitionEnd: true
};

function isValidDOMProp(prop) {
	return eventProps[prop] || _htmlAttributes2.default[prop] || /^(data|aria)-/.test(prop);
}

function filterInvalidDOMProps(props) {
	var domProps = {};
	for (var prop in props) {
		if (props.hasOwnProperty(prop) && isValidDOMProp(prop)) {
			domProps[prop] = props[prop];
		}
	}
	return domProps;
}

/***/ }),

/***/ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigate = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

var _utils = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;
var _excluded = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];

var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = getGlobalBasePrefix();
  }

  if (!isLocalLink(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : getGlobalPathPrefix()) !== null && _ref !== void 0 ? _ref : "/";
  return "" + (base !== null && base !== void 0 && base.endsWith("/") ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
} // These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.


var getGlobalPathPrefix = function getGlobalPathPrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var getGlobalBasePrefix = function getGlobalBasePrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var isLocalLink = function isLocalLink(path) {
  return path && !path.startsWith("http://") && !path.startsWith("https://") && !path.startsWith("//");
};

function withAssetPrefix(path) {
  return withPrefix(path, getGlobalPathPrefix());
}

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  return (0, _utils.resolve)(path, current);
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (typeof path === "number") {
    return path;
  }

  if (!isLocalLink(path)) {
    return path;
  }

  return isAbsolutePath(path) ? withPrefix(path) : absolutify(path, relativeTo);
};

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        cb(entry.isIntersecting || entry.intersectionRatio > 0);
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

function GatsbyLinkLocationWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, function (_ref2) {
    var location = _ref2.location;
    return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({}, props, {
      _location: location
    }));
  });
}

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref3) {
      var isPartiallyCurrent = _ref3.isPartiallyCurrent,
          isCurrent = _ref3.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.abortPrefetch = null;
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto._prefetch = function _prefetch() {
    var currentPath = window.location.pathname + window.location.search; // reach router should have the correct state

    if (this.props._location && this.props._location.pathname) {
      currentPath = this.props._location.pathname + this.props._location.search;
    }

    var rewrittenPath = rewriteLinkPath(this.props.to, currentPath);
    var parsed = (0, _parsePath.parsePath)(rewrittenPath);
    var newPathName = parsed.pathname + parsed.search; // Prefetch is used to speed up next navigations. When you use it on the current navigation,
    // there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete

    if (currentPath !== newPathName) {
      return ___loader.enqueue(newPathName);
    }

    return undefined;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;

    if (this.abortPrefetch) {
      this.abortPrefetch.abort();
    }

    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && Object.prototype.hasOwnProperty.call(this.props.innerRef, "current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function (inViewPort) {
        if (inViewPort) {
          _this2.abortPrefetch = _this2._prefetch();
        } else {
          if (_this2.abortPrefetch) {
            _this2.abortPrefetch.abort();
          }
        }
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        _location = _this$props._location,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);

    if ( true && !isLocalLink(to)) {
      console.warn("External link " + to + " was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links");
    }

    var prefixedTo = rewriteLinkPath(to, _location.pathname);

    if (!isLocalLink(prefixedTo)) {
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    }

    return /*#__PURE__*/_react.default.createElement(_reachRouter.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        var parsed = (0, _parsePath.parsePath)(prefixedTo);

        ___loader.hovering(parsed.pathname + parsed.search);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;

          var isCurrent = encodeURI(prefixedTo) === _location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          window.___navigate(prefixedTo, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate(rewriteLinkPath(to, window.location.pathname), options);
};

exports.navigate = navigate;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

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
      } // Hack to allow accessing this._stateStorage.


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

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
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
/***/ ((__unused_webpack_module, exports) => {

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
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }

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

      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

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

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMatchPaths": () => (/* binding */ setMatchPaths),
/* harmony export */   "findMatchPath": () => (/* binding */ findMatchPath),
/* harmony export */   "grabMatchParams": () => (/* binding */ grabMatchParams),
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "cleanPath": () => (/* binding */ cleanPath)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];

const trimPathname = rawPathname => {
  const pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname, decodeURIComponent("")) // Remove any hashfragment
  .split(`#`)[0];
  return trimmedPathname;
};

function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  } // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router


  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}
/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */


const setMatchPaths = value => {
  matchPaths = value;
};
/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */

const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);
  }

  return null;
};
/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */

const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return path.params;
  }

  return {};
}; // Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`

const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));

  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }

  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);

  if (redirect) {
    return findPath(redirect.toPath);
  }

  let foundPath = findMatchPath(trimmedPathname);

  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }

  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};
/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */

const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;

  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }

  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "withAssetPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withAssetPrefix),
/* harmony export */   "withPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withPrefix),
/* harmony export */   "graphql": () => (/* binding */ graphql),
/* harmony export */   "parsePath": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.parsePath),
/* harmony export */   "navigate": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.navigate),
/* harmony export */   "useScrollRestoration": () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__.useScrollRestoration),
/* harmony export */   "StaticQueryContext": () => (/* binding */ StaticQueryContext),
/* harmony export */   "StaticQuery": () => (/* binding */ StaticQuery),
/* harmony export */   "PageRenderer": () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a),
/* harmony export */   "useStaticQuery": () => (/* binding */ useStaticQuery),
/* harmony export */   "prefetchPathname": () => (/* binding */ prefetchPathname)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");






const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_5__["default"].enqueue;
const StaticQueryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});

function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading (StaticQuery)"));
}

const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryContext.Consumer, null, staticQueryData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};

const useStaticQuery = query => {
  var _context$query;

  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }

  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext); // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction

  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }

  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};

StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}



/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageResourceStatus": () => (/* binding */ PageResourceStatus),
/* harmony export */   "BaseLoader": () => (/* binding */ BaseLoader),
/* harmony export */   "ProdLoader": () => (/* binding */ ProdLoader),
/* harmony export */   "setLoader": () => (/* binding */ setLoader),
/* harmony export */   "publicLoader": () => (/* binding */ publicLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticQueryResults": () => (/* binding */ getStaticQueryResults)
/* harmony export */ });
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");



/**
 * Available resource loading statuses
 */

const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,

  /**
   * Resources loaded successfully
   */
  Success: `success`
};

const preferDefault = m => m && m.default || m;

const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};

const createPageDataUrl = rawPath => {
  const [path, maybeSearch] = rawPath.split(`?`);
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json${maybeSearch ? `?${maybeSearch}` : ``}`;
};

function doFetch(url, method = `GET`) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };

    req.send(null);
  });
}

const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
};

const toPageResources = (pageData, component = null) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes,
    getServerDataError: pageData.getServerDataError
  };
  return {
    component,
    json: pageData.result,
    page
  };
};

class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.isPrefetchQueueRunning = false;
    this.prefetchQueued = [];
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.setMatchPaths)(matchPaths);
  }

  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);

    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    } // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox


    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }

  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req; // Handle 200

      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }

          const maybeSearch = pagePath.split(`?`)[1];

          if (maybeSearch && !jsonPayload.path.includes(maybeSearch)) {
            jsonPayload.path += `?${maybeSearch}`;
          }

          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {// continue regardless of error
        }
      } // Handle 404


      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        } // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s


        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      } // handle 500 response (Unrecoverable)


      if (status === 500) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      } // Handle everything else, including status === 0, and 503s. Should retry


      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      } // Retried 3 times already, result is an error.


      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }

  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);

      if (true) {
        return Promise.resolve(pageData);
      }
    }

    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }

  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findMatchPath)(rawPath);
  } // TODO check all uses of this and whether they use undefined for page resources not exist


  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);

      if (true) {
        if (page.error) {
          return {
            error: page.error,
            status: page.status
          };
        }

        return Promise.resolve(page.payload);
      }
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    const inFlightPromise = Promise.all([this.loadAppData(), this.loadPageDataJson(pagePath)]).then(allData => {
      const result = allData[1];

      if (result.status === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }

      let pageData = result.payload;
      const {
        componentChunkName,
        staticQueryHashes = []
      } = pageData;
      const finalResult = {};
      const componentChunkPromise = this.loadComponent(componentChunkName).then(component => {
        finalResult.createdAt = new Date();
        let pageResources;

        if (!component || component instanceof Error) {
          finalResult.status = PageResourceStatus.Error;
          finalResult.error = component;
        } else {
          finalResult.status = PageResourceStatus.Success;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageData = Object.assign(pageData, {
            webpackCompilationHash: allData[0] ? allData[0].webpackCompilationHash : ``
          });
          pageResources = toPageResources(pageData, component);
        } // undefined if final result is an error


        return pageResources;
      });
      const staticQueryBatchPromise = Promise.all(staticQueryHashes.map(staticQueryHash => {
        // Check for cache in case this static query result has already been loaded
        if (this.staticQueryDb[staticQueryHash]) {
          const jsonPayload = this.staticQueryDb[staticQueryHash];
          return {
            staticQueryHash,
            jsonPayload
          };
        }

        return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
          const jsonPayload = JSON.parse(req.responseText);
          return {
            staticQueryHash,
            jsonPayload
          };
        }).catch(() => {
          throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
        });
      })).then(staticQueryResults => {
        const staticQueryResultsMap = {};
        staticQueryResults.forEach(({
          staticQueryHash,
          jsonPayload
        }) => {
          staticQueryResultsMap[staticQueryHash] = jsonPayload;
          this.staticQueryDb[staticQueryHash] = jsonPayload;
        });
        return staticQueryResultsMap;
      });
      return Promise.all([componentChunkPromise, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
        let payload;

        if (pageResources) {
          payload = { ...pageResources,
            staticQueryResults
          };
          finalResult.payload = payload;
          _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit(`onPostLoadPageResources`, {
            page: payload,
            pageResources: payload
          });
        }

        this.pageDb.set(pagePath, finalResult);

        if (finalResult.error) {
          return {
            error: finalResult.error,
            status: finalResult.status
          };
        }

        return payload;
      }) // when static-query fail to load we throw a better error
      .catch(err => {
        return {
          error: err,
          status: PageResourceStatus.Error
        };
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  } // returns undefined if the page does not exists in cache


  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);

      if (pageData.payload) {
        return pageData.payload;
      }

      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }

    return undefined;
  }

  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return {
        then: resolve => resolve(false),
        abort: () => {}
      };
    }

    if (this.prefetchTriggered.has(pagePath)) {
      return {
        then: resolve => resolve(true),
        abort: () => {}
      };
    }

    const defer = {
      resolve: null,
      reject: null,
      promise: null
    };
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    this.prefetchQueued.push([pagePath, defer]);
    const abortC = new AbortController();
    abortC.signal.addEventListener(`abort`, () => {
      const index = this.prefetchQueued.findIndex(([p]) => p === pagePath); // remove from the queue

      if (index !== -1) {
        this.prefetchQueued.splice(index, 1);
      }
    });

    if (!this.isPrefetchQueueRunning) {
      this.isPrefetchQueueRunning = true;
      setTimeout(() => {
        this._processNextPrefetchBatch();
      }, 3000);
    }

    return {
      then: (resolve, reject) => defer.promise.then(resolve, reject),
      abort: abortC.abort.bind(abortC)
    };
  }

  _processNextPrefetchBatch() {
    const idleCallback = window.requestIdleCallback || (cb => setTimeout(cb, 0));

    idleCallback(() => {
      const toPrefetch = this.prefetchQueued.splice(0, 4);
      const prefetches = Promise.all(toPrefetch.map(([pagePath, dPromise]) => {
        // Tell plugins with custom prefetching logic that they should start
        // prefetching this path.
        if (!this.prefetchTriggered.has(pagePath)) {
          this.apiRunner(`onPrefetchPathname`, {
            pathname: pagePath
          });
          this.prefetchTriggered.add(pagePath);
        } // If a plugin has disabled core prefetching, stop now.


        if (this.prefetchDisabled) {
          return dPromise.resolve(false);
        }

        return this.doPrefetch((0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(pagePath)).then(() => {
          if (!this.prefetchCompleted.has(pagePath)) {
            this.apiRunner(`onPostPrefetchPathname`, {
              pathname: pagePath
            });
            this.prefetchCompleted.add(pagePath);
          }

          dPromise.resolve(true);
        });
      }));

      if (this.prefetchQueued.length) {
        prefetches.then(() => {
          setTimeout(() => {
            this._processNextPrefetchBatch();
          }, 3000);
        });
      } else {
        this.isPrefetchQueueRunning = false;
      }
    });
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    return (0,_prefetch__WEBPACK_IMPORTED_MODULE_0__["default"])(pageDataUrl, {
      crossOrigin: `anonymous`,
      as: `fetch`
    }).then(() => // This was just prefetched, so will return a response from
    // the cache instead of making another request to the server
    this.loadPageDataJson(pagePath));
  }

  hovering(rawPath) {
    this.loadPage(rawPath);
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);

    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }

  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }

  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;

      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      } // Handle 200


      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }

          appData = jsonPayload;
        } catch (err) {// continue regardless of error
        }
      }

      return appData;
    });
  }

}

const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);

class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths, pageData) {
    const loadComponent = chunkName => {
      if (!asyncRequires.components[chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name ${chunkName}`);
      }

      return asyncRequires.components[chunkName]().then(preferDefault) // loader will handle the case when component is error
      .catch(err => err);
    };

    super(loadComponent, matchPaths);

    if (pageData) {
      this.pageDataDb.set((0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(pageData.path), {
        pagePath: pageData.path,
        payload: pageData,
        status: `success`
      });
    }
  }

  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }

      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_0__["default"])).then(() => pageData);
    });
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          } // if HEAD request wasn't 200, return notFound result
          // and show 404 page


          return data;
        });
      }

      return data;
    });
  }

}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathAndSearch => {
  if (pathAndSearch === undefined) {
    return pathAndSearch;
  }

  let [path, search = ``] = pathAndSearch.split(`?`);

  if (search) {
    search = `?` + search;
  }

  if (path === `/`) {
    return `/` + search;
  }

  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1) + search;
  }

  return path + search;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }

  const fakeLink = document.createElement(`link`);

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }

    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};

const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);

    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};

const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;

if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/react-lifecycles-compat.js":
/*!*******************************************!*\
  !*** ./.cache/react-lifecycles-compat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.polyfill = Component => Component;

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeGetBrowserRedirect": () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");
 // Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);

  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }

  return redirect;
}

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }

  if (str === prefix) {
    return `/`;
  }

  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }

  return str;
}

/***/ }),

/***/ "./node_modules/gatsby-background-image/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-background-image/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _BackgroundUtils = _interopRequireDefault(__webpack_require__(/*! ./lib/BackgroundUtils */ "./node_modules/gatsby-background-image/lib/BackgroundUtils.js"));

var _HelperUtils = __webpack_require__(/*! ./lib/HelperUtils */ "./node_modules/gatsby-background-image/lib/HelperUtils.js");

var _ImageUtils = __webpack_require__(/*! ./lib/ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _ImageCache = __webpack_require__(/*! ./lib/ImageCache */ "./node_modules/gatsby-background-image/lib/ImageCache.js");

var _ImageRef = __webpack_require__(/*! ./lib/ImageRef */ "./node_modules/gatsby-background-image/lib/ImageRef.js");

var _ImageHandling = __webpack_require__(/*! ./lib/ImageHandling */ "./node_modules/gatsby-background-image/lib/ImageHandling.js");

var _StyleUtils = __webpack_require__(/*! ./lib/StyleUtils */ "./node_modules/gatsby-background-image/lib/StyleUtils.js");

var _StyleCreation = __webpack_require__(/*! ./lib/StyleCreation */ "./node_modules/gatsby-background-image/lib/StyleCreation.js");

var _IntersectionObserverUtils = __webpack_require__(/*! ./lib/IntersectionObserverUtils */ "./node_modules/gatsby-background-image/lib/IntersectionObserverUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./lib/SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var BackgroundImage = function (_React$Component) {
  (0, _inheritsLoose2.default)(BackgroundImage, _React$Component);

  function BackgroundImage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.intersectionListener = function () {
      var imageInCache = (0, _ImageCache.inImageCache)(_this.props);

      if (!_this.state.isVisible && typeof _this.props.onStartLoad === "function") {
        _this.props.onStartLoad({
          wasCached: imageInCache
        });
      }

      _this.imageRef = (0, _ImageRef.activatePictureRef)(_this.imageRef, _this.props, _this.selfRef);

      _this.setState(function (state) {
        return {
          isVisible: true,
          imageState: state.imageState + 1
        };
      }, function () {
        _this.setState(function (state) {
          return {
            imgLoaded: imageInCache,
            imgCached: (0, _ImageRef.hasActivatedPictureRefs)(_this.imageRef),
            imageState: state.imageState + 1
          };
        });
      });
    };

    var convertedProps = (0, _HelperUtils.convertProps)(props);
    var isVisible = true;
    var imgLoaded = false;
    var IOSupported = false;
    var fadeIn = convertedProps.fadeIn;
    var seenBefore = (0, _ImageCache.inImageCache)(convertedProps);

    if (!seenBefore && (0, _SimpleUtils.isBrowser)() && window.IntersectionObserver) {
      isVisible = false;
      IOSupported = true;
    }

    if (!(0, _SimpleUtils.isBrowser)()) {
      isVisible = false;
    }

    if (convertedProps.critical) {
      isVisible = true;
      IOSupported = false;
    }

    var hasNoScript = !(convertedProps.critical && !fadeIn) && !(0, _SimpleUtils.isBrowser)();
    var imageState = 0;

    var _fixClassName = (0, _StyleUtils.fixClassName)(convertedProps),
        currentClassNames = _fixClassName[0];

    _this.backgroundStyles = (0, _StyleUtils.presetBackgroundStyles)((0, _BackgroundUtils.default)(convertedProps.className));
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.imageRef = (0, _ImageRef.createPictureRef)((0, _extends2.default)({}, convertedProps, {
      isVisible: isVisible
    }), _this.handleImageLoaded);
    _this.selfRef = null;
    _this.state = {
      isVisible: isVisible,
      imgLoaded: imgLoaded,
      IOSupported: IOSupported,
      fadeIn: fadeIn,
      hasNoScript: hasNoScript,
      seenBefore: seenBefore,
      imageState: imageState,
      currentClassNames: currentClassNames
    };
    return _this;
  }

  var _proto = BackgroundImage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.backgroundStyles = (0, _StyleUtils.presetBackgroundStyles)((0, _BackgroundUtils.default)(this.props.className));

    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: (0, _ImageCache.inImageCache)(this.props)
      });
    }

    if (this.props.critical || this.state.seenBefore) {
      if ((0, _ImageRef.imageReferenceCompleted)(this.imageRef, this.props)) {
        this.handleImageLoaded();
      }
    }

    var _fixClassName2 = (0, _StyleUtils.fixClassName)(this.props),
        currentClassNames = _fixClassName2[0];

    this.setState({
      currentClassNames: currentClassNames
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    if ((0, _ImageUtils.imagePropsChanged)(this.props, prevProps)) {
      var convertedProps = (0, _HelperUtils.convertProps)(this.props);
      var imageInCache = (0, _ImageCache.inImageCache)(convertedProps);

      var _fixClassName3 = (0, _StyleUtils.fixClassName)(convertedProps),
          currentClassNames = _fixClassName3[0];

      this.setState({
        isVisible: imageInCache || convertedProps.critical,
        imgLoaded: imageInCache,
        seenBefore: imageInCache,
        currentClassNames: currentClassNames
      }, function () {
        _this2.bgImage = (0, _ImageUtils.getCurrentFromData)({
          data: _this2.imageRef,
          propName: "currentSrc",
          returnArray: true
        }) || (0, _ImageUtils.getCurrentFromData)({
          data: _this2.imageRef,
          propName: "src",
          returnArray: true
        });
        _this2.imageRef = (0, _ImageRef.createPictureRef)((0, _extends2.default)({}, convertedProps, {
          isVisible: _this2.state.isVisible
        }), _this2.handleImageLoaded);
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.imageRef) {
      if (Array.isArray(this.imageRef)) {
        this.imageRef.forEach(function (currentImageRef) {
          if (!!currentImageRef && !(0, _SimpleUtils.isString)(currentImageRef)) {
            currentImageRef.onload = null;
          }
        });
      } else {
        this.imageRef.onload = null;
      }
    }

    if (this.cleanUpListeners) {
      this.cleanUpListeners();
    }
  };

  _proto.handleRef = function handleRef(ref) {
    this.selfRef = ref;

    if (this.state.IOSupported && ref) {
      this.cleanUpListeners = (0, _IntersectionObserverUtils.listenToIntersections)(ref, this.intersectionListener, this.props.rootMargin);
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    (0, _ImageCache.activateCacheForImage)(this.props);
    this.setState(function (state) {
      return {
        imgLoaded: true,
        imageState: state.imageState + 1
      };
    });

    if (this.state.seenBefore) {
      this.setState({
        fadeIn: false
      });
    }

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  _proto.render = function render() {
    var _fixOpacity = (0, _StyleUtils.fixOpacity)((0, _HelperUtils.convertProps)(this.props), this.props.preserveStackingContext),
        className = _fixOpacity.className,
        _fixOpacity$style = _fixOpacity.style,
        style = _fixOpacity$style === void 0 ? {} : _fixOpacity$style,
        fluid = _fixOpacity.fluid,
        fixed = _fixOpacity.fixed,
        backgroundColor = _fixOpacity.backgroundColor,
        durationFadeIn = _fixOpacity.durationFadeIn,
        Tag = _fixOpacity.Tag,
        children = _fixOpacity.children,
        keepStatic = _fixOpacity.keepStatic,
        props = (0, _objectWithoutPropertiesLoose2.default)(_fixOpacity, ["className", "style", "fluid", "fixed", "backgroundColor", "durationFadeIn", "Tag", "children", "keepStatic"]);

    var remainingProps = (0, _HelperUtils.stripRemainingProps)(props);
    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : typeof backgroundColor !== "undefined" ? backgroundColor : "";
    var shouldFadeIn = this.state.fadeIn === true && !this.state.imgCached || this.props.fadeIn === "soft";
    var transitionDelay = shouldFadeIn ? durationFadeIn / 2 + "ms" : "none";
    var divStyle = (0, _extends2.default)({
      position: "relative"
    }, style);
    if (!this.props.preserveStackingContext) divStyle.opacity = 0.99;
    var image = (0, _ImageUtils.getCurrentSrcData)({
      fluid: fluid,
      fixed: fixed,
      returnArray: true
    });
    var noScriptImageData = (0, _ImageUtils.getCurrentSrcData)({
      fluid: fluid,
      fixed: fixed
    }) || {};

    if (fluid || fixed) {
      if (fixed) {
        divStyle.width = style.width || image.width;
        divStyle.height = style.height || image.height;
        divStyle.display = "inline-block";

        if (style.display === "inherit") {
          delete divStyle.display;
        }
      }
    } else if (keepStatic) {
      noScriptImageData.srcSet = '';
    } else {
      return null;
    }

    var newImageSettings = (0, _ImageHandling.switchImageSettings)({
      image: image,
      bgImage: this.bgImage,
      imageRef: this.imageRef,
      state: this.state
    });
    this.bgImage = newImageSettings.nextImageArray || newImageSettings.nextImage || this.bgImage;
    var pseudoStyles = (0, _StyleCreation.createPseudoStyles)((0, _extends2.default)({
      className: this.state.currentClassNames,
      transitionDelay: transitionDelay,
      bgColor: bgColor,
      backgroundStyles: this.backgroundStyles,
      style: style,
      fadeIn: shouldFadeIn
    }, newImageSettings, {
      originalData: fluid || fixed
    }));
    var noScriptPseudoStyles = (0, _StyleCreation.createNoScriptStyles)({
      image: image,
      bgColor: bgColor,
      className: this.state.currentClassNames,
      backgroundStyles: this.backgroundStyles,
      style: style
    });
    var componentKey = "" + (fluid ? "fluid" : "") + (fixed ? "fixed" : "") + "-" + JSON.stringify(noScriptImageData.srcSet);
    var currentStyles = (0, _extends2.default)({}, this.backgroundStyles, divStyle);
    return _react.default.createElement(Tag, (0, _extends2.default)({
      className: this.state.currentClassNames,
      style: currentStyles,
      ref: this.handleRef,
      key: componentKey
    }, remainingProps), _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: pseudoStyles
      }
    }), this.state.hasNoScript && _react.default.createElement("noscript", null, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: noScriptPseudoStyles
      }
    })), children);
  };

  return BackgroundImage;
}(_react.default.Component);

BackgroundImage.defaultProps = {
  critical: false,
  fadeIn: true,
  durationFadeIn: 500,
  Tag: "div",
  preserveStackingContext: false,
  rootMargin: "200px",
  keepStatic: false
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  srcAvif: _propTypes.default.string,
  srcSetAvif: _propTypes.default.string,
  media: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  srcAvif: _propTypes.default.string,
  srcSetAvif: _propTypes.default.string,
  media: _propTypes.default.string
});

BackgroundImage.propTypes = {
  fixed: _propTypes.default.oneOfType([fixedObject, _propTypes.default.arrayOf(fixedObject), _propTypes.default.arrayOf(_propTypes.default.oneOfType([fixedObject, _propTypes.default.string]))]),
  fluid: _propTypes.default.oneOfType([fluidObject, _propTypes.default.arrayOf(fluidObject), _propTypes.default.arrayOf(_propTypes.default.oneOfType([fluidObject, _propTypes.default.string]))]),
  fadeIn: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  durationFadeIn: _propTypes.default.number,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  critical: _propTypes.default.bool,
  crossOrigin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  style: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  preserveStackingContext: _propTypes.default.bool,
  rootMargin: _propTypes.default.string,
  keepStatic: _propTypes.default.bool
};
var _default = BackgroundImage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/BackgroundUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/BackgroundUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = exports.getBackgroundStylesForSingleClass = exports.getStyleRules = exports.getStyleRulesForClassName = void 0;

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var getStyleRulesForClassName = function getStyleRulesForClassName(className) {
  var styleSheets = (0, _SimpleUtils.isBrowser)() ? window.document.styleSheets : [];

  for (var i = 0; i < styleSheets.length; i++) {
    var classes = void 0;

    try {
      classes = typeof styleSheets[i].rules !== 'undefined' ? styleSheets[i].rules : typeof styleSheets[i].cssRules !== 'undefined' ? styleSheets[i].cssRules : '';
    } catch (e) {}

    if (classes) {
      var foundClass = Array.prototype.slice.call(classes).reduce(function (foundAcc, styleRule) {
        if (styleRule.selectorText === className) {
          foundAcc.push(styleRule);
        }

        return foundAcc;
      }, []);

      if (foundClass.length) {
        return foundClass;
      }
    }
  }

  return [];
};

exports.getStyleRulesForClassName = getStyleRulesForClassName;

var getStyleRules = function getStyleRules(cssStyleRules) {
  var styles = {};

  if (cssStyleRules.length > 0 && typeof cssStyleRules[0].style !== 'undefined') {
    var constructorName = cssStyleRules[0].style.constructor.name || cssStyleRules[0].style.constructor.toString();

    switch (constructorName) {
      case 'CSS2Properties':
      case '[object MSStyleCSSProperties]':
        Object.values(cssStyleRules[0].style).forEach(function (prop) {
          styles[(0, _SimpleUtils.toCamelCase)(prop)] = cssStyleRules[0].style[prop];
        });
        break;

      case 'CSSStyleDeclaration':
        styles = cssStyleRules[0].style;
        break;

      default:
        console.error('Unknown style object prototype');
        break;
    }
  }

  return styles;
};

exports.getStyleRules = getStyleRules;

var getBackgroundStylesForSingleClass = function getBackgroundStylesForSingleClass(className) {
  if (className && (0, _SimpleUtils.isString)(className)) {
    var cssStyleRules = getStyleRulesForClassName("." + className);

    if ((cssStyleRules === null || cssStyleRules === void 0 ? void 0 : cssStyleRules.length) > 0 && typeof cssStyleRules[0].style !== 'undefined') {
      return Object.keys(getStyleRules(cssStyleRules)).filter(function (key) {
        return key.indexOf('background') === 0 && cssStyleRules[0].style[key] !== '';
      }).reduce(function (newData, key) {
        newData[(0, _SimpleUtils.toCamelCase)(key)] = cssStyleRules[0].style[key];
        return newData;
      }, {});
    }
  }

  return {};
};

exports.getBackgroundStylesForSingleClass = getBackgroundStylesForSingleClass;

var getBackgroundStyles = function getBackgroundStyles(className) {
  if ((0, _SimpleUtils.isBrowser)()) {
    var classes = (0, _SimpleUtils.stringToArray)(className);

    if (classes instanceof Array) {
      var classObjects = [];
      classes.forEach(function (item) {
        return classObjects.push(getBackgroundStylesForSingleClass(item));
      });
      return Object.assign.apply(Object, classObjects);
    }

    return getBackgroundStylesForSingleClass(className);
  }

  return {};
};

var _default = getBackgroundStyles;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ClassCache.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ClassCache.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.resetComponentClassCache = exports.activateCacheForComponentClass = exports.inComponentClassCache = void 0;
var componentClassCache = Object.create({});

var inComponentClassCache = function inComponentClassCache(className) {
  return componentClassCache[className] || false;
};

exports.inComponentClassCache = inComponentClassCache;

var activateCacheForComponentClass = function activateCacheForComponentClass(className) {
  if (className) {
    componentClassCache[className] = true;
  }
};

exports.activateCacheForComponentClass = activateCacheForComponentClass;

var resetComponentClassCache = function resetComponentClassCache() {
  for (var className in componentClassCache) {
    delete componentClassCache[className];
  }
};

exports.resetComponentClassCache = resetComponentClassCache;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/HelperUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/HelperUtils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.convertProps = exports.stripRemainingProps = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _filterInvalidDomProps = _interopRequireDefault(__webpack_require__(/*! filter-invalid-dom-props */ "./node_modules/filter-invalid-dom-props/dist/index.js"));

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var stripRemainingProps = function stripRemainingProps(props) {
  return (0, _filterInvalidDomProps.default)(props);
};

exports.stripRemainingProps = stripRemainingProps;

var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);
  var fixed = convertedProps.fixed,
      fluid = convertedProps.fluid;

  if (fluid && (0, _MediaUtils.hasArtDirectionSupport)(props, 'fluid')) {
    convertedProps.fluid = (0, _MediaUtils.groupByMedia)(convertedProps.fluid);
  }

  if (fixed && (0, _MediaUtils.hasArtDirectionSupport)(props, 'fixed')) {
    convertedProps.fixed = (0, _MediaUtils.groupByMedia)(convertedProps.fixed);
  }

  return convertedProps;
};

exports.convertProps = convertProps;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ImageCache.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ImageCache.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.resetImageCache = exports.activateCacheForMultipleImages = exports.activateCacheForImage = exports.allInImageCache = exports.inImageCache = void 0;

var _HelperUtils = __webpack_require__(/*! ./HelperUtils */ "./node_modules/gatsby-background-image/lib/HelperUtils.js");

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var imageCache = Object.create({});

var inImageCache = function inImageCache(props, index, isLoop) {
  if (index === void 0) {
    index = 0;
  }

  if (isLoop === void 0) {
    isLoop = false;
  }

  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var isImageStack = (0, _ImageUtils.hasImageArray)(convertedProps) && !(0, _MediaUtils.hasArtDirectionArray)(convertedProps);

  if (isImageStack && !isLoop) {
    return allInImageCache(props);
  }

  var src = isImageStack ? (0, _ImageUtils.getSelectedImage)(convertedProps, index) : (0, _ImageUtils.getImageSrcKey)(convertedProps);

  if ((0, _SimpleUtils.isObject)(src)) {
    var objectSrc = (0, _ImageUtils.getImageSrcKey)({
      fluid: src,
      fixed: src
    });
    return imageCache[objectSrc] || false;
  }

  return imageCache[src] || false;
};

exports.inImageCache = inImageCache;

var allInImageCache = function allInImageCache(props) {
  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var imageStack = convertedProps.fluid || convertedProps.fixed;
  return imageStack.every(function (imageData, index) {
    return inImageCache(convertedProps, index, true);
  });
};

exports.allInImageCache = allInImageCache;

var activateCacheForImage = function activateCacheForImage(props, index, isLoop) {
  if (index === void 0) {
    index = 0;
  }

  if (isLoop === void 0) {
    isLoop = false;
  }

  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var isImageStack = (0, _ImageUtils.hasImageArray)(convertedProps) && !(0, _MediaUtils.hasArtDirectionArray)(convertedProps);

  if (isImageStack && !isLoop) {
    return activateCacheForMultipleImages(props);
  }

  var src = isImageStack ? (0, _ImageUtils.getSelectedImage)(convertedProps, index) : (0, _ImageUtils.getImageSrcKey)(convertedProps);

  if (src) {
    if ((0, _SimpleUtils.isObject)(src)) {
      var objectSrc = (0, _ImageUtils.getImageSrcKey)({
        fluid: src,
        fixed: src
      });
      imageCache[objectSrc] = true;
    } else {
      imageCache[src] = true;
    }
  }
};

exports.activateCacheForImage = activateCacheForImage;

var activateCacheForMultipleImages = function activateCacheForMultipleImages(props) {
  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var imageStack = convertedProps.fluid || convertedProps.fixed;
  imageStack.forEach(function (imageData, index) {
    return activateCacheForImage(convertedProps, index, true);
  });
};

exports.activateCacheForMultipleImages = activateCacheForMultipleImages;

var resetImageCache = function resetImageCache() {
  for (var prop in imageCache) {
    delete imageCache[prop];
  }
};

exports.resetImageCache = resetImageCache;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ImageHandling.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ImageHandling.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.switchImageSettings = void 0;

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var switchImageSettings = function switchImageSettings(_ref) {
  var image = _ref.image,
      bgImage = _ref.bgImage,
      imageRef = _ref.imageRef,
      state = _ref.state;
  var currentSources = (0, _ImageUtils.getCurrentFromData)({
    data: imageRef,
    propName: "currentSrc"
  });
  var returnArray = Array.isArray(image) && !(0, _MediaUtils.hasArtDirectionArray)({
    fluid: image
  });
  var lastImage = Array.isArray(bgImage) ? (0, _SimpleUtils.filteredJoin)(bgImage) : bgImage;
  var nextImage;
  var nextImageArray;
  var finalImage = returnArray && state.seenBefore && !!currentSources;

  if (returnArray) {
    if (!currentSources) {
      nextImage = (0, _ImageUtils.getCurrentFromData)({
        data: image,
        propName: "tracedSVG",
        returnArray: returnArray
      });
      nextImage = (0, _SimpleUtils.combineArray)((0, _ImageUtils.getCurrentFromData)({
        data: image,
        propName: "base64",
        returnArray: returnArray
      }), nextImage);
    }

    nextImage = (0, _SimpleUtils.combineArray)((0, _ImageUtils.getCurrentFromData)({
      data: image,
      propName: "CSS_STRING",
      addUrl: false,
      returnArray: returnArray
    }), nextImage);

    if ((state.imgLoaded || !!currentSources) && state.isVisible) {
      if (currentSources) {
        nextImage = (0, _SimpleUtils.combineArray)((0, _ImageUtils.getCurrentFromData)({
          data: imageRef,
          propName: "currentSrc",
          returnArray: returnArray
        }), nextImage);
        finalImage = true;
      } else {
        nextImage = (0, _SimpleUtils.combineArray)((0, _ImageUtils.getCurrentFromData)({
          data: imageRef,
          propName: "src",
          returnArray: returnArray
        }), nextImage);
        finalImage = true;
      }
    }

    nextImage = (0, _SimpleUtils.combineArray)(nextImage, bgImage);
    var dummyArray = (0, _ImageUtils.createDummyImageArray)(image.length);
    nextImage = (0, _SimpleUtils.combineArray)(nextImage, dummyArray);
    nextImageArray = nextImage;
    nextImage = (0, _SimpleUtils.filteredJoin)(nextImage);
  } else {
    nextImage = "";
    nextImage = (0, _ImageUtils.getCurrentFromData)({
      data: image,
      propName: "tracedSVG"
    }) || (0, _ImageUtils.getCurrentFromData)({
      data: image,
      propName: "base64"
    });

    if (state.imgLoaded && state.isVisible) {
      nextImage = currentSources;
      finalImage = true;
    }
  }

  var afterOpacity = state.imageState % 2;

  if (!returnArray && nextImage === "" && state.imgLoaded && state.isVisible && imageRef && !imageRef.currentSrc) {
    nextImage = (0, _ImageUtils.getCurrentFromData)({
      data: imageRef,
      propName: "src",
      checkLoaded: false
    });
    finalImage = true;
  }

  if (!nextImage) nextImage = lastImage;
  var newImageSettings = {
    lastImage: lastImage,
    nextImage: nextImage,
    afterOpacity: afterOpacity,
    finalImage: finalImage
  };
  if (nextImageArray) newImageSettings.nextImageArray = nextImageArray;
  return newImageSettings;
};

exports.switchImageSettings = switchImageSettings;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ImageRef.js":
/*!**************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ImageRef.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.imageReferenceCompleted = exports.hasPictureRef = exports.hasActivatedPictureRefs = exports.activateMultiplePictureRefs = exports.activatePictureRef = exports.createMultiplePictureRefs = exports.createPictureRef = void 0;

var _HelperUtils = __webpack_require__(/*! ./HelperUtils */ "./node_modules/gatsby-background-image/lib/HelperUtils.js");

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var _ImageCache = __webpack_require__(/*! ./ImageCache */ "./node_modules/gatsby-background-image/lib/ImageCache.js");

var createPictureRef = function createPictureRef(props, onLoad, index, isLoop) {
  if (isLoop === void 0) {
    isLoop = false;
  }

  var convertedProps = (0, _HelperUtils.convertProps)(props);

  if ((0, _SimpleUtils.isBrowser)() && (typeof convertedProps.fluid !== "undefined" || typeof convertedProps.fixed !== "undefined")) {
    var isImageStack = (0, _ImageUtils.hasImageArray)(convertedProps) && !(0, _MediaUtils.hasArtDirectionArray)(convertedProps);

    if (isImageStack && !isLoop) {
      return createMultiplePictureRefs(props, onLoad);
    }

    var img = new Image();

    img.onload = function () {
      return onLoad();
    };

    if (!img.complete && typeof convertedProps.onLoad === "function") {
      img.addEventListener('load', convertedProps.onLoad);
    }

    if (typeof convertedProps.onError === "function") {
      img.addEventListener('error', convertedProps.onError);
    }

    if (convertedProps.crossOrigin) {
      img.crossOrigin = convertedProps.crossOrigin;
    }

    if ((convertedProps.critical || convertedProps.isVisible) && !isLoop) {
      return activatePictureRef(img, convertedProps, index, isLoop);
    }

    return img;
  }

  return null;
};

exports.createPictureRef = createPictureRef;

var createMultiplePictureRefs = function createMultiplePictureRefs(props, onLoad) {
  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var imageStack = convertedProps.fluid || convertedProps.fixed;
  var imageRefs = imageStack.map(function (imageData, index) {
    return createPictureRef(convertedProps, onLoad, index, true);
  });

  if (convertedProps.critical || convertedProps.isVisible) {
    return activatePictureRef(imageRefs, convertedProps);
  }

  return imageRefs;
};

exports.createMultiplePictureRefs = createMultiplePictureRefs;

var activatePictureRef = function activatePictureRef(imageRef, props, selfRef, index, isLoop) {
  if (selfRef === void 0) {
    selfRef = null;
  }

  if (index === void 0) {
    index = 0;
  }

  if (isLoop === void 0) {
    isLoop = false;
  }

  var convertedProps = (0, _HelperUtils.convertProps)(props);

  if ((0, _SimpleUtils.isBrowser)() && (typeof convertedProps.fluid !== "undefined" || typeof convertedProps.fixed !== "undefined")) {
    var isImageStack = (0, _ImageUtils.hasImageArray)(convertedProps) && !(0, _MediaUtils.hasArtDirectionArray)(convertedProps);

    if (isImageStack && !isLoop) {
      return activateMultiplePictureRefs(imageRef, props, selfRef);
    }

    var bodyClone = document.createElement('body');
    var imageData = isImageStack ? (0, _ImageUtils.getSelectedImage)(convertedProps, index) : (0, _ImageUtils.getCurrentSrcData)(convertedProps);

    if (!imageData) {
      return null;
    }

    if ((0, _SimpleUtils.isString)(imageData)) {
      return imageData;
    }

    if (selfRef) {
      imageRef.width = selfRef.offsetWidth;
      imageRef.height = selfRef.offsetHeight;
    }

    if ((0, _ImageUtils.hasPictureElement)()) {
      var pic = document.createElement('picture');

      if (selfRef) {
        pic.width = imageRef.width;
        pic.height = imageRef.height;
      }

      if ((0, _MediaUtils.hasArtDirectionArray)(convertedProps)) {
        var sources = (0, _MediaUtils.createArtDirectionSources)(convertedProps).reverse();
        sources.forEach(function (currentSource) {
          return pic.appendChild(currentSource);
        });
      }

      var sourcesAvif = (0, _MediaUtils.createSourceElementForSrcSet)(imageData, 'avif');
      sourcesAvif && pic.appendChild(sourcesAvif);
      var sourcesWebp = (0, _MediaUtils.createSourceElementForSrcSet)(imageData, 'webp');
      sourcesWebp && pic.appendChild(sourcesWebp);
      pic.appendChild(imageRef);
      bodyClone.appendChild(pic);
    }

    imageRef.sizes = imageData.sizes || "";
    imageRef.srcset = imageData.srcSet || "";
    imageRef.src = imageData.src || "";
    return imageRef;
  }

  return null;
};

exports.activatePictureRef = activatePictureRef;

var activateMultiplePictureRefs = function activateMultiplePictureRefs(imageRefs, props, selfRef) {
  return imageRefs.map(function (imageRef, index) {
    return activatePictureRef(imageRef, props, selfRef, index, true);
  });
};

exports.activateMultiplePictureRefs = activateMultiplePictureRefs;

var hasActivatedPictureRefs = function hasActivatedPictureRefs(imageRefs) {
  return Array.isArray(imageRefs) ? imageRefs.every(function (imageRef) {
    return hasPictureRef(imageRef);
  }) : hasPictureRef(imageRefs);
};

exports.hasActivatedPictureRefs = hasActivatedPictureRefs;

var hasPictureRef = function hasPictureRef(imageRef) {
  return (0, _SimpleUtils.isString)(imageRef) || !!imageRef && !!imageRef.currentSrc;
};

exports.hasPictureRef = hasPictureRef;

var imageReferenceCompleted = function imageReferenceCompleted(imageRef, props) {
  return imageRef ? Array.isArray(imageRef) ? imageRef.every(function (singleImageRef) {
    return (0, _ImageUtils.imageLoaded)(singleImageRef);
  }) || (0, _ImageCache.inImageCache)(props) : (0, _ImageUtils.imageLoaded)(imageRef) || (0, _ImageCache.inImageCache)(props) : (0, _SimpleUtils.isString)(imageRef);
};

exports.imageReferenceCompleted = imageReferenceCompleted;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ImageUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ImageUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.imageLoaded = exports.createDummyImageArray = exports.imageArrayPropsChanged = exports.imagePropsChanged = exports.hasImageUrl = exports.isBase64 = exports.getUrlString = exports.getSelectedImage = exports.getCurrentSrcData = exports.getImageSrcKey = exports.getCurrentFromData = exports.hasImageArray = exports.hasPictureElement = void 0;

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var hasPictureElement = function hasPictureElement() {
  return typeof HTMLPictureElement !== "undefined" || (0, _SimpleUtils.isBrowser)();
};

exports.hasPictureElement = hasPictureElement;

var hasImageArray = function hasImageArray(props) {
  return Boolean(props.fluid && Array.isArray(props.fluid) || props.fixed && Array.isArray(props.fixed));
};

exports.hasImageArray = hasImageArray;

var getCurrentFromData = function getCurrentFromData(_ref) {
  var data = _ref.data,
      propName = _ref.propName,
      _ref$addUrl = _ref.addUrl,
      addUrl = _ref$addUrl === void 0 ? true : _ref$addUrl,
      _ref$returnArray = _ref.returnArray,
      returnArray = _ref$returnArray === void 0 ? false : _ref$returnArray,
      _ref$checkLoaded = _ref.checkLoaded,
      checkLoaded = _ref$checkLoaded === void 0 ? true : _ref$checkLoaded;
  if (!data || !propName) return "";
  var tracedSVG = propName === "tracedSVG";

  if (Array.isArray(data) && !(0, _MediaUtils.hasArtDirectionArray)({
    fluid: data
  })) {
    var imageString = data.map(function (dataElement) {
      if (propName === "currentSrc" || propName === 'src') {
        return checkLoaded ? imageLoaded(dataElement) && dataElement[propName] || "" : dataElement[propName];
      }

      if (propName === "CSS_STRING" && (0, _SimpleUtils.isString)(dataElement)) {
        return dataElement;
      }

      return (0, _SimpleUtils.isString)(dataElement) ? dataElement : dataElement && propName in dataElement ? dataElement[propName] : "";
    });
    return getUrlString({
      imageString: imageString,
      tracedSVG: tracedSVG,
      addUrl: addUrl,
      returnArray: returnArray
    });
  }

  if ((0, _MediaUtils.hasArtDirectionArray)({
    fluid: data
  }) && (propName === "currentSrc" || propName === "src" || propName === "base64" || tracedSVG)) {
    var currentData = getCurrentSrcData({
      fluid: data
    });
    return propName in currentData ? getUrlString({
      imageString: currentData[propName],
      tracedSVG: tracedSVG,
      addUrl: addUrl
    }) : "";
  }

  if (typeof data !== 'object') {
    return '';
  }

  if ((propName === "currentSrc" || propName === 'src') && propName in data) {
    return getUrlString({
      imageString: checkLoaded ? imageLoaded(data) && data[propName] || "" : data[propName],
      addUrl: addUrl
    });
  }

  return propName in data ? getUrlString({
    imageString: data[propName],
    tracedSVG: tracedSVG,
    addUrl: addUrl
  }) : "";
};

exports.getCurrentFromData = getCurrentFromData;

var getImageSrcKey = function getImageSrcKey(_ref2) {
  var fluid = _ref2.fluid,
      fixed = _ref2.fixed;
  var data = getCurrentSrcData({
    fluid: fluid,
    fixed: fixed
  });
  return data ? data.src || null : null;
};

exports.getImageSrcKey = getImageSrcKey;

var getCurrentSrcData = function getCurrentSrcData(_ref3, index) {
  var fluid = _ref3.fluid,
      fixed = _ref3.fixed,
      returnArray = _ref3.returnArray;

  if (index === void 0) {
    index = 0;
  }

  var currentData = fluid || fixed;

  if (hasImageArray({
    fluid: fluid,
    fixed: fixed
  })) {
    if (returnArray) {
      return currentData;
    }

    if ((0, _SimpleUtils.isBrowser)() && (0, _MediaUtils.hasArtDirectionArray)({
      fluid: fluid,
      fixed: fixed
    })) {
      var mediaData = currentData.slice().reverse();
      var foundMedia = mediaData.findIndex(_MediaUtils.matchesMedia);

      if (foundMedia !== -1) {
        return mediaData[foundMedia];
      }
    }

    return currentData[index];
  }

  return currentData;
};

exports.getCurrentSrcData = getCurrentSrcData;

var getSelectedImage = function getSelectedImage(_ref4, index) {
  var fluid = _ref4.fluid,
      fixed = _ref4.fixed;

  if (index === void 0) {
    index = 0;
  }

  var currentData = fluid || fixed;

  if (hasImageArray({
    fluid: fluid,
    fixed: fixed
  })) {
    return currentData[index] || currentData[0];
  }

  return currentData;
};

exports.getSelectedImage = getSelectedImage;

var getUrlString = function getUrlString(_ref5) {
  var imageString = _ref5.imageString,
      _ref5$tracedSVG = _ref5.tracedSVG,
      tracedSVG = _ref5$tracedSVG === void 0 ? false : _ref5$tracedSVG,
      _ref5$addUrl = _ref5.addUrl,
      addUrl = _ref5$addUrl === void 0 ? true : _ref5$addUrl,
      _ref5$returnArray = _ref5.returnArray,
      returnArray = _ref5$returnArray === void 0 ? false : _ref5$returnArray,
      _ref5$hasImageUrls = _ref5.hasImageUrls,
      hasImageUrls = _ref5$hasImageUrls === void 0 ? false : _ref5$hasImageUrls;

  if (Array.isArray(imageString)) {
    var stringArray = imageString.map(function (currentString) {
      if (currentString) {
        var _base = isBase64(currentString);

        var _imageUrl = hasImageUrls || hasImageUrl(currentString);

        var currentReturnString = currentString && tracedSVG ? "\"" + currentString + "\"" : currentString && !_base && !tracedSVG && _imageUrl ? "'" + currentString + "'" : currentString;
        return addUrl && currentString ? "url(" + currentReturnString + ")" : currentReturnString;
      }

      return currentString;
    });
    return returnArray ? stringArray : (0, _SimpleUtils.filteredJoin)(stringArray);
  }

  var base64 = isBase64(imageString);
  var imageUrl = hasImageUrls || hasImageUrl(imageString);
  var returnString = imageString && tracedSVG ? "\"" + imageString + "\"" : imageString && !base64 && !tracedSVG && imageUrl ? "'" + imageString + "'" : imageString;
  return imageString ? addUrl ? "url(" + returnString + ")" : returnString : "";
};

exports.getUrlString = getUrlString;

var isBase64 = function isBase64(base64String) {
  return (0, _SimpleUtils.isString)(base64String) && base64String.indexOf("base64") !== -1;
};

exports.isBase64 = isBase64;

var hasImageUrl = function hasImageUrl(imageString) {
  return (0, _SimpleUtils.isString)(imageString) && imageString.substr(0, 4) === "http";
};

exports.hasImageUrl = hasImageUrl;

var imagePropsChanged = function imagePropsChanged(props, prevProps) {
  return props.fluid && !prevProps.fluid || props.fixed && !prevProps.fixed || imageArrayPropsChanged(props, prevProps) || props.fluid && prevProps.fluid && props.fluid.src !== prevProps.fluid.src || props.fixed && prevProps.fixed && props.fixed.src !== prevProps.fixed.src;
};

exports.imagePropsChanged = imagePropsChanged;

var imageArrayPropsChanged = function imageArrayPropsChanged(props, prevProps) {
  var isPropsFluidArray = Array.isArray(props.fluid);
  var isPrevPropsFluidArray = Array.isArray(prevProps.fluid);
  var isPropsFixedArray = Array.isArray(props.fixed);
  var isPrevPropsFixedArray = Array.isArray(prevProps.fixed);

  if (isPropsFluidArray && !isPrevPropsFluidArray || isPropsFixedArray && !isPrevPropsFixedArray || !isPropsFluidArray && isPrevPropsFluidArray || !isPropsFixedArray && isPrevPropsFixedArray) {
    return true;
  }

  if (isPropsFluidArray && isPrevPropsFluidArray) {
    if (props.fluid.length === prevProps.fluid.length) {
      return props.fluid.some(function (image, index) {
        return image.src !== prevProps.fluid[index].src;
      });
    }

    return true;
  }

  if (isPropsFixedArray && isPrevPropsFixedArray) {
    if (props.fixed.length === prevProps.fixed.length) {
      return props.fixed.some(function (image, index) {
        return image.src !== prevProps.fixed[index].src;
      });
    }

    return true;
  }
};

exports.imageArrayPropsChanged = imageArrayPropsChanged;

var createDummyImageArray = function createDummyImageArray(length) {
  var DUMMY_IMG = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  var dummyImageURI = getUrlString({
    imageString: DUMMY_IMG
  });
  return Array(length).fill(dummyImageURI);
};

exports.createDummyImageArray = createDummyImageArray;

var imageLoaded = function imageLoaded(imageRef) {
  return imageRef ? (0, _SimpleUtils.isString)(imageRef) || imageRef.complete && imageRef.naturalWidth !== 0 && imageRef.naturalHeight !== 0 : false;
};

exports.imageLoaded = imageLoaded;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/IntersectionObserverUtils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/IntersectionObserverUtils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.listenToIntersections = exports.getIO = exports.callbackIO = void 0;

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var io;
var listeners = new WeakMap();

var callbackIO = function callbackIO(entries) {
  entries.forEach(function (entry) {
    if (listeners.has(entry.target)) {
      var callback = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        io.unobserve(entry.target);
        listeners.delete(entry.target);
        callback();
      }
    }
  });
};

exports.callbackIO = callbackIO;

var getIO = function getIO(rootMargin) {
  if (typeof io === "undefined" && (0, _SimpleUtils.isBrowser)() && window.IntersectionObserver) {
    io = new window.IntersectionObserver(callbackIO, {
      rootMargin: rootMargin
    });
  }

  return io;
};

exports.getIO = getIO;

var listenToIntersections = function listenToIntersections(element, callback, rootMargin) {
  if (rootMargin === void 0) {
    rootMargin = "200px";
  }

  var observer = getIO(rootMargin);

  if (observer) {
    observer.observe(element);
    listeners.set(element, callback);
    return function () {
      observer.unobserve(element);
      listeners.delete(element);
    };
  }

  return function () {};
};

exports.listenToIntersections = listenToIntersections;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/MediaUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/MediaUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.matchesMedia = exports.hasArtDirectionArray = exports.hasArtDirectionSupport = exports.createArtDirectionSources = exports.createSourceElementForSrcSet = exports.groupByMedia = void 0;

var _sortMediaQueries = _interopRequireDefault(__webpack_require__(/*! sort-media-queries */ "./node_modules/sort-media-queries/lib/index.js"));

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var groupByMedia = function groupByMedia(imageVariants) {
  var without = [];
  var sortedVariants = (0, _sortMediaQueries.default)(imageVariants, 'media');
  sortedVariants.forEach(function (variant) {
    return !variant.media && without.push(variant);
  });

  if (without.length > 1 && "development" !== "production") {
    console.warn("We've found " + without.length + " sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");
  }

  return sortedVariants;
};

exports.groupByMedia = groupByMedia;

var createSourceElementForSrcSet = function createSourceElementForSrcSet(image, type) {
  var source = document.createElement('source');
  var srcSetName = "srcSet" + (0, _SimpleUtils.capitalize)(type);

  if (srcSetName in image) {
    source.type = "image/" + type;
    source.srcset = image[srcSetName];
  }

  if (image.sizes) {
    source.sizes = image.sizes;
  }

  if (image.media) {
    source.media = image.media;
  }

  return source.srcset ? source : null;
};

exports.createSourceElementForSrcSet = createSourceElementForSrcSet;

var createArtDirectionSources = function createArtDirectionSources(_ref) {
  var fluid = _ref.fluid,
      fixed = _ref.fixed;
  var currentSource = fluid || fixed;
  return currentSource.reduce(function (sources, image) {
    if (!image.media) {
      return sources;
    }

    var sourceWebp = createSourceElementForSrcSet(image, 'webp');
    var sourceAvif = createSourceElementForSrcSet(image, 'avif');
    sourceWebp && sources.push(sourceWebp);
    sourceAvif && sources.push(sourceAvif);
    return sources;
  }, []);
};

exports.createArtDirectionSources = createArtDirectionSources;

var hasArtDirectionSupport = function hasArtDirectionSupport(props, prop) {
  return props[prop] && Array.isArray(props[prop]) && props[prop].some(function (image) {
    return !!image && typeof image.media !== 'undefined';
  });
};

exports.hasArtDirectionSupport = hasArtDirectionSupport;

var hasArtDirectionArray = function hasArtDirectionArray(props) {
  return hasArtDirectionSupport(props, 'fluid') || hasArtDirectionSupport(props, 'fixed');
};

exports.hasArtDirectionArray = hasArtDirectionArray;

var matchesMedia = function matchesMedia(_ref2) {
  var media = _ref2.media;
  return media ? (0, _SimpleUtils.isBrowser)() && typeof window.matchMedia !== "undefined" && !!window.matchMedia(media).matches : false;
};

exports.matchesMedia = matchesMedia;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/SimpleUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/SimpleUtils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.combineArray = exports.filteredJoin = exports.hashString = exports.stringToArray = exports.capitalize = exports.toKebabCase = exports.toCamelCase = exports.isObject = exports.isString = exports.isBrowser = void 0;

var isBrowser = function isBrowser() {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
};

exports.isBrowser = isBrowser;

var isString = function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

exports.isString = isString;

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

exports.isObject = isObject;

var toCamelCase = function toCamelCase(str) {
  return isString(str) && str.indexOf('-') !== -1 && str.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g, function (letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s|\W+/g, '') || str;
};

exports.toCamelCase = toCamelCase;

var toKebabCase = function toKebabCase(str) {
  return isString(str) && str.replace(/\s|\W+/g, '').replace(/[A-Z]/g, function (match) {
    return "-" + match.toLowerCase();
  });
};

exports.toKebabCase = toKebabCase;

var capitalize = function capitalize(str) {
  return (str === null || str === void 0 ? void 0 : str.charAt(0).toUpperCase()) + str.slice(1);
};

exports.capitalize = capitalize;

var stringToArray = function stringToArray(str, delimiter) {
  if (delimiter === void 0) {
    delimiter = " ";
  }

  if (str instanceof Array) {
    return str;
  }

  if (isString(str)) {
    if (str.includes(delimiter)) {
      return str.split(delimiter);
    }

    return [str];
  }

  return false;
};

exports.stringToArray = stringToArray;

var hashString = function hashString(str) {
  return isString(str) && [].reduce.call(str, function (hash, item) {
    hash = (hash << 5) - hash + item.charCodeAt(0);
    return hash | 0;
  }, 0);
};

exports.hashString = hashString;

var filteredJoin = function filteredJoin(arrayToJoin) {
  return arrayToJoin.filter(function (item) {
    return item !== "";
  }).join();
};

exports.filteredJoin = filteredJoin;

var combineArray = function combineArray(fromArray, toArray) {
  if (!Array.isArray(fromArray)) {
    return [fromArray];
  }

  return fromArray.map(function (item, index) {
    return item || toArray && toArray[index];
  });
};

exports.combineArray = combineArray;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/StyleCreation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/StyleCreation.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.createNoScriptStyles = exports.createStyleImage = exports.createPseudoStyles = exports.createPseudoElementMediaQuery = exports.createPseudoElementWithContent = exports.createPseudoElement = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _StyleUtils = __webpack_require__(/*! ./StyleUtils */ "./node_modules/gatsby-background-image/lib/StyleUtils.js");

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var createPseudoElement = function createPseudoElement(className, appendix) {
  if (appendix === void 0) {
    appendix = ":before";
  }

  var escapedClassName = (0, _StyleUtils.escapeClassNames)(className);
  var classes = (0, _SimpleUtils.stringToArray)(escapedClassName);
  var pseudoClasses = "";

  if (Array.isArray(classes)) {
    classes = classes.filter(function (c) {
      return c !== '';
    });

    if (classes.length > 0) {
      pseudoClasses = "." + classes.join('.') + appendix;
    }
  }

  return pseudoClasses;
};

exports.createPseudoElement = createPseudoElement;

var createPseudoElementWithContent = function createPseudoElementWithContent(pseudoElementString, imageSource) {
  return "\n    " + pseudoElementString + " {\n      opacity: 1;\n      background-image: " + imageSource + ";\n    }";
};

exports.createPseudoElementWithContent = createPseudoElementWithContent;

var createPseudoElementMediaQuery = function createPseudoElementMediaQuery(pseudoElementString, media, imageSource, imageSourceWebP) {
  return "\n      @media " + media + " {\n        " + createPseudoElementWithContent(pseudoElementString, imageSource) + "\n      }\n      " + (imageSourceWebP && "@media " + media + " {\n          " + createPseudoElementWithContent(pseudoElementString, imageSourceWebP) + "\n        }") + "\n    ";
};

exports.createPseudoElementMediaQuery = createPseudoElementMediaQuery;

var createPseudoStyles = function createPseudoStyles(_ref) {
  var className = _ref.className,
      transitionDelay = _ref.transitionDelay,
      lastImage = _ref.lastImage,
      nextImage = _ref.nextImage,
      afterOpacity = _ref.afterOpacity,
      bgColor = _ref.bgColor,
      fadeIn = _ref.fadeIn,
      backgroundStyles = _ref.backgroundStyles,
      style = _ref.style,
      finalImage = _ref.finalImage,
      originalData = _ref.originalData;
  var pseudoBefore = createPseudoElement(className);
  var pseudoAfter = createPseudoElement(className, ":after");
  var currentBackgroundStyles = (0, _extends2.default)({}, backgroundStyles, style);
  return "\n          " + pseudoBefore + ",\n          " + pseudoAfter + " {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            " + (bgColor && "background-color: " + bgColor + ";") + "\n            " + (0, _StyleUtils.setTransitionStyles)(transitionDelay, fadeIn) + "\n            " + (0, _StyleUtils.kebabifyBackgroundStyles)(currentBackgroundStyles) + "\n          }\n          " + pseudoBefore + " {\n            z-index: -100;\n            " + ((!afterOpacity || finalImage) && createStyleImage(nextImage, originalData) || "") + "\n            " + (afterOpacity && lastImage && createStyleImage(lastImage, originalData) || "") + "\n            opacity: " + Number(!afterOpacity) + "; \n          }\n          " + pseudoAfter + " {\n            z-index: -101;\n            " + ((afterOpacity || finalImage) && createStyleImage(nextImage, originalData) || "") + "\n            " + (!afterOpacity && lastImage && createStyleImage(lastImage, originalData) || "") + "\n            " + (finalImage ? "opacity: " + Number(afterOpacity) + ";" : "") + "\n          }\n        ";
};

exports.createPseudoStyles = createPseudoStyles;

var createStyleImage = function createStyleImage(image, originalData) {
  var hasStackedImages = (0, _ImageUtils.hasImageArray)({
    fluid: originalData
  }) && !(0, _MediaUtils.hasArtDirectionArray)({
    fluid: originalData
  });

  if ((0, _SimpleUtils.isBrowser)() || hasStackedImages) {
    return image ? "background-image: " + image + ";" : "";
  }

  return "";
};

exports.createStyleImage = createStyleImage;

var createNoScriptStyles = function createNoScriptStyles(_ref2) {
  var className = _ref2.className,
      image = _ref2.image;

  if (image) {
    var returnArray = Array.isArray(image) && !(0, _MediaUtils.hasArtDirectionArray)({
      fluid: image
    });
    var addUrl = false;
    var allSources = (0, _ImageUtils.getCurrentFromData)({
      data: image,
      propName: "src",
      checkLoaded: false,
      addUrl: addUrl,
      returnArray: returnArray
    });
    var sourcesAsUrl = (0, _ImageUtils.getUrlString)({
      imageString: allSources,
      hasImageUrls: true,
      returnArray: returnArray
    });
    var sourcesAsUrlWithCSS = "";

    if (returnArray) {
      var cssStrings = (0, _ImageUtils.getCurrentFromData)({
        data: image,
        propName: "CSS_STRING",
        addUrl: false,
        returnArray: returnArray
      });
      sourcesAsUrlWithCSS = (0, _SimpleUtils.filteredJoin)((0, _SimpleUtils.combineArray)(sourcesAsUrl, cssStrings));
    }

    var pseudoBefore = createPseudoElement(className);

    if ((0, _MediaUtils.hasArtDirectionArray)({
      fluid: image
    })) {
      return image.map(function (currentMedia) {
        var sourceString = (0, _ImageUtils.getUrlString)({
          imageString: currentMedia.src
        });
        var webPString = (0, _ImageUtils.getUrlString)({
          imageString: currentMedia.srcWebp || ""
        });

        if (currentMedia.media) {
          return createPseudoElementMediaQuery(pseudoBefore, currentMedia.media, sourceString, webPString);
        }

        return createPseudoElementMediaQuery(pseudoBefore, 'screen', sourceString, webPString);
      }).join('');
    }

    return createPseudoElementWithContent(pseudoBefore, sourcesAsUrlWithCSS || sourcesAsUrl);
  }

  return "";
};

exports.createNoScriptStyles = createNoScriptStyles;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/StyleUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/StyleUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.presetBackgroundStyles = exports.fixOpacity = exports.setTransitionStyles = exports.kebabifyBackgroundStyles = exports.escapeClassNames = exports.fixClassName = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _shortUuid = _interopRequireDefault(__webpack_require__(/*! short-uuid */ "./node_modules/short-uuid/index.js"));

var _HelperUtils = __webpack_require__(/*! ./HelperUtils */ "./node_modules/gatsby-background-image/lib/HelperUtils.js");

var _ClassCache = __webpack_require__(/*! ./ClassCache */ "./node_modules/gatsby-background-image/lib/ClassCache.js");

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var fixClassName = function fixClassName(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["className"]);
  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var elementExists = (0, _ClassCache.inComponentClassCache)(className);
  var imageData = (0, _ImageUtils.getCurrentSrcData)(convertedProps);

  var additionalClassname = _shortUuid.default.generate();

  var randomClass = " gbi-" + (0, _SimpleUtils.hashString)(imageData && imageData.srcSet || className || "noclass") + "-" + additionalClassname;
  var additionalClass = elementExists || !className ? randomClass : "";
  var componentClassNames = ("" + (className || "") + (additionalClass || "")).trim();
  if (!elementExists) (0, _ClassCache.activateCacheForComponentClass)(className);
  return [componentClassNames];
};

exports.fixClassName = fixClassName;

var escapeClassNames = function escapeClassNames(classNames) {
  if (classNames) {
    var specialChars = (0, _SimpleUtils.isBrowser)() && window._gbiSpecialChars ? window._gbiSpecialChars : typeof __GBI_SPECIAL_CHARS__ !== "undefined" ? __GBI_SPECIAL_CHARS__ : ':/';
    var specialCharRegEx = new RegExp("[" + specialChars + "]", 'g');
    return classNames.replace(specialCharRegEx, '\\$&');
  }

  return classNames;
};

exports.escapeClassNames = escapeClassNames;

var kebabifyBackgroundStyles = function kebabifyBackgroundStyles(styles) {
  if ((0, _SimpleUtils.isString)(styles)) {
    return styles;
  }

  if (styles instanceof Object) {
    return Object.keys(styles).filter(function (key) {
      return key.indexOf('background') === 0 && styles[key] !== '';
    }).reduce(function (resultingStyles, key) {
      return "" + resultingStyles + (0, _SimpleUtils.toKebabCase)(key) + ": " + styles[key] + ";\n";
    }, "");
  }

  return "";
};

exports.kebabifyBackgroundStyles = kebabifyBackgroundStyles;

var setTransitionStyles = function setTransitionStyles(transitionDelay, fadeIn) {
  if (transitionDelay === void 0) {
    transitionDelay = "0.25s";
  }

  if (fadeIn === void 0) {
    fadeIn = true;
  }

  return fadeIn ? "transition: opacity 0.5s ease " + transitionDelay + ";" : "transition: none;";
};

exports.setTransitionStyles = setTransitionStyles;

var fixOpacity = function fixOpacity(props) {
  var styledProps = (0, _extends2.default)({}, props);

  if (!styledProps.preserveStackingContext) {
    try {
      if (styledProps.style && styledProps.style.opacity) {
        if (isNaN(styledProps.style.opacity) || styledProps.style.opacity > 0.99) {
          styledProps.style.opacity = 0.99;
        }
      }
    } catch (e) {}
  }

  return styledProps;
};

exports.fixOpacity = fixOpacity;

var presetBackgroundStyles = function presetBackgroundStyles(backgroundStyles) {
  var defaultBackgroundStyles = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  return (0, _extends2.default)({}, defaultBackgroundStyles, backgroundStyles);
};

exports.presetBackgroundStyles = presetBackgroundStyles;

/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, s.apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }

  return string;
};

const camelCase = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  options = Object.assign({
    pascalCase: false
  }, options);

  const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return '';
  }

  if (input.length === 1) {
    return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
  }

  const hasUpperCase = input !== input.toLowerCase();

  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }

  input = input.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase()).replace(/\d+(\w|$)/g, m => m.toUpperCase());
  return postProcess(input);
};

module.exports = camelCase; // TODO: Remove this for the next major release

module.exports["default"] = camelCase;

/***/ }),

/***/ "./src/components/AboutUs.js":
/*!***********************************!*\
  !*** ./src/components/AboutUs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutUs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _hooks_useAboutUsQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAboutUsQuery */ "./src/hooks/useAboutUsQuery.js");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.js");




function AboutUs() {
  const {
    AboutUsComponent
  } = (0,_hooks_useAboutUsQuery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    titleSection,
    philosophy,
    whatWeDo,
    imgDesc,
    imgMob,
    link,
    name,
    color
  } = AboutUsComponent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "container container-small mt-large padding-null"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h3"
  }, titleSection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "artBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "artBox-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "h5"
  }, philosophy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, whatWeDo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name,
    color: color,
    link: link
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "artBox-imgWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.GatsbyImage, {
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.getImage)(imgDesc),
    className: "img-desc",
    alt: "AboutUs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.GatsbyImage, {
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.getImage)(imgMob),
    className: "img-mob",
    alt: "AboutUs"
  }))));
}

/***/ }),

/***/ "./src/components/BgColorSection.js":
/*!******************************************!*\
  !*** ./src/components/BgColorSection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BgColorSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");


function BgColorSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bgColorSection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h3"
  }, "\u041A\u043B\u0456\u0454\u043D\u0442\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "logoList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/riel_logo.png",
    alt: "alt",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/545293289.json */ "./.cache/caches/gatsby-plugin-image/545293289.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/avalon_logo.png",
    alt: "alt",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2765409972.json */ "./.cache/caches/gatsby-plugin-image/2765409972.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/innovation-development_logo.png",
    alt: "alt",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3102439695.json */ "./.cache/caches/gatsby-plugin-image/3102439695.json")
  })))));
}

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var gbimage_bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gbimage-bridge */ "./node_modules/gbimage-bridge/dist/index.modern.js");
/* harmony import */ var _hooks_useHeroQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useHeroQuery */ "./src/hooks/useHeroQuery.js");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.js");





function Hero() {
  const {
    HeroComponent,
    HeroBG
  } = (0,_hooks_useHeroQuery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    aboutProject,
    name,
    color,
    link,
    ourVision,
    weUniteArch
  } = HeroComponent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gbimage_bridge__WEBPACK_IMPORTED_MODULE_1__.BgImage, {
    className: "hero-bg",
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(HeroBG)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-decorate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "scroll")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hero-preTitle"
  }, ourVision), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "h1"
  }, weUniteArch), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "hero-description"
  }, aboutProject), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name,
    color: color,
    link: link
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-description hero-movileDescr"
  }, aboutProject));
}

/***/ }),

/***/ "./src/components/ProcessList.js":
/*!***************************************!*\
  !*** ./src/components/ProcessList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProcessList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMenuQuery */ "./src/hooks/useMenuQuery.js");
/* harmony import */ var _templates_Process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/Process */ "./src/components/templates/Process.js");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.js");




function ProcessList() {
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const {
    processes,
    processListComponent
  } = (0,_hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    colorComponent,
    linkComponent,
    titleComponent,
    nameComponent
  } = processListComponent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "container container-small mt-large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h3"
  }, titleComponent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "process-list"
  }, processes.map((process, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_templates_Process__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      toggle: toggle,
      text: process.text,
      number: process.number,
      title: process.title,
      i: i,
      selected: selected
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: nameComponent,
    color: colorComponent,
    link: linkComponent
  }))));
}

/***/ }),

/***/ "./src/components/ProjectList.js":
/*!***************************************!*\
  !*** ./src/components/ProjectList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMenuQuery */ "./src/hooks/useMenuQuery.js");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.js");
/* harmony import */ var _templates_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Project */ "./src/components/templates/Project.js");




function ProjectList() {
  const {
    projects,
    projectListComponent
  } = (0,_hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    colorComponent,
    linkComponent,
    titleComponent,
    nameComponent
  } = projectListComponent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "container container-small mt-large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h3"
  }, titleComponent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "projectsBox"
  }, projects.map((project, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_templates_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
    project: project,
    key: i
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: nameComponent,
    color: colorComponent,
    link: linkComponent
  })));
}

/***/ }),

/***/ "./src/components/ServiceList.js":
/*!***************************************!*\
  !*** ./src/components/ServiceList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMenuQuery */ "./src/hooks/useMenuQuery.js");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.js");
/* harmony import */ var _templates_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Service */ "./src/components/templates/Service.js");




function ServiceList() {
  const {
    services,
    serviceListComponent
  } = (0,_hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    colorComponent,
    linkComponent,
    titleComponent,
    nameComponent
  } = serviceListComponent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "mt-large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h3"
  }, titleComponent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "servicesBox"
  }, services.map((service, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_templates_Service__WEBPACK_IMPORTED_MODULE_3__["default"], {
    service: service,
    key: i
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: nameComponent,
    color: colorComponent,
    link: linkComponent
  })));
}

/***/ }),

/***/ "./src/components/StartNewProject.js":
/*!*******************************************!*\
  !*** ./src/components/StartNewProject.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StartNewProject)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var gbimage_bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gbimage-bridge */ "./node_modules/gbimage-bridge/dist/index.modern.js");
/* harmony import */ var _hooks_useStartNewProjectQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useStartNewProjectQuery */ "./src/hooks/useStartNewProjectQuery.js");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.js");





function StartNewProject() {
  const {
    StartNewProjectBg,
    StartNewProjectComponent
  } = (0,_hooks_useStartNewProjectQuery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    startNewProject,
    link,
    name,
    color
  } = StartNewProjectComponent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gbimage_bridge__WEBPACK_IMPORTED_MODULE_1__.BgImage, {
    className: "qqq",
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(StartNewProjectBg)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bgImgSection imgOverlay d-flex mt-large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h3"
  }, startNewProject), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name,
    color: color,
    link: link
  })))));
}

/***/ }),

/***/ "./src/components/WhyUs.js":
/*!*********************************!*\
  !*** ./src/components/WhyUs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhyUs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var gbimage_bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gbimage-bridge */ "./node_modules/gbimage-bridge/dist/index.modern.js");
/* harmony import */ var _hooks_useWhyUsQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useWhyUsQuery */ "./src/hooks/useWhyUsQuery.js");




function WhyUs() {
  const {
    WhyUsBG,
    whyUsComponent
  } = (0,_hooks_useWhyUsQuery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    activity,
    exploitation,
    meters,
    objects,
    objectsHanded,
    squareMeters,
    whyWe,
    years,
    yearsOnMarket
  } = whyUsComponent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gbimage_bridge__WEBPACK_IMPORTED_MODULE_1__.BgImage, {
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.getImage)(WhyUsBG),
    className: "mt-large imgCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgOverlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container container-small "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "h2"
  }, activity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgCard-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "h2"
  }, whyWe), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgCard-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgCard-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, years), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, yearsOnMarket)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgCard-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, objects), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, objectsHanded, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", exploitation))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgCard-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgCard-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, meters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, squareMeters))))))));
}

/***/ }),

/***/ "./src/components/buttons/Button.js":
/*!******************************************!*\
  !*** ./src/components/buttons/Button.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_assets_line_light_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/assets/line-light.svg */ "./src/images/assets/line-light.svg");
/* harmony import */ var _images_assets_line_light_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_assets_line_light_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_assets_line_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/assets/line-dark.svg */ "./src/images/assets/line-dark.svg");
/* harmony import */ var _images_assets_line_dark_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_assets_line_dark_svg__WEBPACK_IMPORTED_MODULE_3__);




function Button(props) {
  const {
    name,
    color,
    link
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: link,
    className: `button btn-${color}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, name), color === "light" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_line_dark_svg__WEBPACK_IMPORTED_MODULE_3___default()), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_line_light_svg__WEBPACK_IMPORTED_MODULE_2___default()), null));
}

/***/ }),

/***/ "./src/components/layout/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _hooks_useFooterQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFooterQuery */ "./src/hooks/useFooterQuery.js");
/* harmony import */ var _images_assets_face_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/assets/face.svg */ "./src/images/assets/face.svg");
/* harmony import */ var _images_assets_face_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_assets_face_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_assets_inst_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/assets/inst.svg */ "./src/images/assets/inst.svg");
/* harmony import */ var _images_assets_inst_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_assets_inst_svg__WEBPACK_IMPORTED_MODULE_4__);






function Footer() {
  const {
    aboutUs,
    contacts,
    copyright,
    facebook,
    instagram,
    logo,
    project,
    projecting
  } = (0,_hooks_useFooterQuery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-general"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-iconList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: instagram.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_inst_svg__WEBPACK_IMPORTED_MODULE_4___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: facebook.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_face_svg__WEBPACK_IMPORTED_MODULE_3___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.GatsbyImage, {
    className: "logo",
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.getImage)(logo.path),
    alt: "footerLogo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-listBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-listBox-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: project.link
  }, project.title)), project.items.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.link
  }, item.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-title pt-25"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: aboutUs.link
  }, aboutUs.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-title footer-mobile-hidden"
  }, contacts.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-mobile-hidden"
  }, contacts.city, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", contacts.street)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-listBox-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: projecting.link
  }, projecting.title)), projecting.items.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.link
  }, item.title)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-listBox-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-title"
  }, contacts.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, contacts.city, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", contacts.street), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: contacts.link
  }, contacts.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-iconList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_inst_svg__WEBPACK_IMPORTED_MODULE_4___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_face_svg__WEBPACK_IMPORTED_MODULE_3___default()), null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\xA9", copyright.rights), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, copyright.kvadr))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-decorate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "back to top")));
}

/***/ }),

/***/ "./src/components/layout/Header.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useMenuQuery */ "./src/hooks/useMenuQuery.js");
/* harmony import */ var _images_assets_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/assets/close.svg */ "./src/images/assets/close.svg");
/* harmony import */ var _images_assets_close_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_assets_close_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./src/components/layout/Logo.js");






function Header() {
  const {
    menu,
    langList
  } = (0,_hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    0: header,
    1: setHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: menuOpen,
    1: setMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", changeBackground);
  }

  const animatedFrom = {
    opacity: 0,
    x: "100%"
  };
  const animateTo = {
    opacity: 1,
    x: 0
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: header ? "header active" : "header",
    id: "sticky"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: header
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "langList"
  }, langList.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "langList-item",
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.link
  }, item.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: menuOpen ? "burger-hidden" : "burger",
    onClick: () => setMenuOpen(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu menu-hiden"
  }, menu.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "menu-item",
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.name))))), menuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    animate: animateTo,
    initial: animatedFrom,
    transition: {
      default: {
        duration: 1
      }
    },
    className: menuOpen ? "wrapMenu open" : "wrapMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "burger burger-active",
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_close_svg__WEBPACK_IMPORTED_MODULE_3___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu"
  }, menu.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "menu-item",
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item-count"
  }, item.count), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.name))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "langList"
  }, langList.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "langList-item",
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.link
  }, item.name))))))));
}

/***/ }),

/***/ "./src/components/layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/components/layout/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/layout/Header.js");



function Layout({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/components/layout/Logo.js":
/*!***************************************!*\
  !*** ./src/components/layout/Logo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/assets/logo-light.svg */ "./src/images/assets/logo-light.svg");
/* harmony import */ var _images_assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/assets/logo.svg */ "./src/images/assets/logo.svg");
/* harmony import */ var _images_assets_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__);



function Logo({
  header
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, header ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_logo_svg__WEBPACK_IMPORTED_MODULE_2___default()), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_1___default()), null));
}

/***/ }),

/***/ "./src/components/templates/Process.js":
/*!*********************************************!*\
  !*** ./src/components/templates/Process.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Process = props => {
  const {
    number,
    title,
    text,
    i,
    toggle,
    selected
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: selected === i ? "process-item open" : "process-item",
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "process-title",
    onClick: () => toggle(i),
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "process-counter"
  }, number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex process-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "h4"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "process-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "process-text"
  }, text));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Process);

/***/ }),

/***/ "./src/components/templates/Project.js":
/*!*********************************************!*\
  !*** ./src/components/templates/Project.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/Button */ "./src/components/buttons/Button.js");



function Project({
  project,
  i
}) {
  const {
    img,
    title,
    link,
    address,
    date,
    name,
    color
  } = project;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: i,
    className: "projectsBox-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "projectsBox-imgWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    className: "projectsBox-imgWrap-img",
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.getImage)(img),
    alt: "alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "projectsBox-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    color: color,
    link: link
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "projectsBox-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "h5"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, address)));
}

/***/ }),

/***/ "./src/components/templates/Service.js":
/*!*********************************************!*\
  !*** ./src/components/templates/Service.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/Button */ "./src/components/buttons/Button.js");



function Service({
  service
}) {
  const {
    imgDesc,
    imgMob,
    title,
    link,
    number,
    name,
    color
  } = service;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "servicesBox-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "projectsBox-desctop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    className: "servicesBox-item",
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.getImage)(imgDesc),
    alt: "alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "projectsBox-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    className: "servicesBox-item",
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.getImage)(imgMob),
    alt: "alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "servicesBox-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "servicesBox-number"
  }, number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "h5"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    color: color,
    link: link
  })));
}

/***/ }),

/***/ "./src/hooks/useAboutUsQuery.js":
/*!**************************************!*\
  !*** ./src/hooks/useAboutUsQuery.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1220587818_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1220587818.json */ "./public/page-data/sq/d/1220587818.json");


const Data = () => {
  const {
    contentJson: {
      AboutUsComponent
    }
  } = _public_page_data_sq_d_1220587818_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return {
    AboutUsComponent
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/hooks/useFooterQuery.js":
/*!*************************************!*\
  !*** ./src/hooks/useFooterQuery.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_501493203_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/501493203.json */ "./public/page-data/sq/d/501493203.json");


const Data = () => {
  const {
    contentJson: {
      footer: {
        aboutUs,
        contacts,
        copyright,
        facebook,
        instagram,
        project,
        projecting,
        logo
      }
    }
  } = _public_page_data_sq_d_501493203_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return {
    aboutUs,
    contacts,
    copyright,
    facebook,
    instagram,
    logo,
    project,
    projecting
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/hooks/useHeroQuery.js":
/*!***********************************!*\
  !*** ./src/hooks/useHeroQuery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_456200000_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/456200000.json */ "./public/page-data/sq/d/456200000.json");


const Data = () => {
  const {
    HeroBG,
    contentJson: {
      HeroComponent
    }
  } = _public_page_data_sq_d_456200000_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return {
    HeroComponent,
    HeroBG
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/hooks/useMenuQuery.js":
/*!***********************************!*\
  !*** ./src/hooks/useMenuQuery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1688527345_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1688527345.json */ "./public/page-data/sq/d/1688527345.json");


const Data = () => {
  const {
    contentJson: {
      menu,
      langList,
      projects,
      processes,
      services,
      processListComponent,
      projectListComponent,
      serviceListComponent
    }
  } = _public_page_data_sq_d_1688527345_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return {
    menu,
    langList,
    projects,
    processes,
    services,
    processListComponent,
    projectListComponent,
    serviceListComponent
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/hooks/useStartNewProjectQuery.js":
/*!**********************************************!*\
  !*** ./src/hooks/useStartNewProjectQuery.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3506380384_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3506380384.json */ "./public/page-data/sq/d/3506380384.json");


const Data = () => {
  const {
    StartNewProjectBg,
    contentJson: {
      StartNewProjectComponent
    }
  } = _public_page_data_sq_d_3506380384_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return {
    StartNewProjectComponent,
    StartNewProjectBg
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/hooks/useWhyUsQuery.js":
/*!************************************!*\
  !*** ./src/hooks/useWhyUsQuery.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1857043713_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1857043713.json */ "./public/page-data/sq/d/1857043713.json");


const Data = () => {
  const {
    WhyUsBG,
    contentJson: {
      whyUsComponent
    }
  } = _public_page_data_sq_d_1857043713_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return {
    whyUsComponent,
    WhyUsBG
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectList */ "./src/components/ProjectList.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./src/components/layout/Layout.js");
/* harmony import */ var _components_ServiceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ServiceList */ "./src/components/ServiceList.js");
/* harmony import */ var _components_ProcessList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProcessList */ "./src/components/ProcessList.js");
/* harmony import */ var _components_WhyUs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WhyUs */ "./src/components/WhyUs.js");
/* harmony import */ var _components_BgColorSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BgColorSection */ "./src/components/BgColorSection.js");
/* harmony import */ var _components_AboutUs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AboutUs */ "./src/components/AboutUs.js");
/* harmony import */ var _components_StartNewProject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/StartNewProject */ "./src/components/StartNewProject.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_10__);












const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProjectList__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ServiceList__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProcessList__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_WhyUs__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BgColorSection__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AboutUs__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_StartNewProject__WEBPACK_IMPORTED_MODULE_9__["default"], null)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "LocationProvider": () => (/* binding */ LocationProvider),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "ServerLocation": () => (/* binding */ ServerLocation),
/* harmony export */   "createHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createHistory),
/* harmony export */   "createMemorySource": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createMemorySource),
/* harmony export */   "isRedirect": () => (/* binding */ isRedirect),
/* harmony export */   "navigate": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.navigate),
/* harmony export */   "redirectTo": () => (/* binding */ redirectTo),
/* harmony export */   "globalHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory),
/* harmony export */   "matchPath": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.match),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "BaseContext": () => (/* binding */ BaseContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "./.cache/react-lifecycles-compat.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js");
/* harmony import */ var _lib_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/history */ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */







////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory
};
 true ? LocationProvider.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
} : 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", {
  baseuri: "/",
  basepath: "/",
  navigate: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory.navigate
});

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.pick)(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, uri), options);
        }
      });

      var clone = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(element, props, element.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        BaseContext.Provider,
        {
          value: { baseuri: uri, basepath: basepath, navigate: props.navigate }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__.polyfill)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.startsWith)(location.pathname, encodedHref);

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.shallowCompare)(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 true ? Link.propTypes = {
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
      navigate((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
    if (!noThrow) redirectTo((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Redirect = function Redirect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 true ? Redirect.propTypes = {
  from: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, baseuri);
          var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? _extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, context.baseuri);
  var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) && element.props.children) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : 0 : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : 0 : void 0;

    !!(element.type === Redirect && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.validateRedirect)(element.props.from, element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : 0 : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/gbimage-bridge/dist/index.modern.js":
/*!**********************************************************!*\
  !*** ./node_modules/gbimage-bridge/dist/index.modern.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BgImage": () => (/* binding */ f),
/* harmony export */   "convertSingleBgImage": () => (/* binding */ o),
/* harmony export */   "convertToBgImage": () => (/* binding */ d),
/* harmony export */   "getAllExtraSrcSets": () => (/* binding */ s),
/* harmony export */   "getAspectRatio": () => (/* binding */ u),
/* harmony export */   "getBgImageType": () => (/* binding */ n),
/* harmony export */   "getPlaceholder": () => (/* binding */ a),
/* harmony export */   "getSingleImage": () => (/* binding */ i),
/* harmony export */   "getSrc": () => (/* binding */ c),
/* harmony export */   "isString": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var gatsby_background_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby-background-image */ "./node_modules/gatsby-background-image/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e}).apply(this,arguments)}const t=e=>"[object String]"===Object.prototype.toString.call(e),n=e=>"fixed"===e.layout?"fixed":"fluid",i=e=>{let r;for(r=0;r<e.length;r++)if(!t(e[r]))return e[r];return null},u=e=>e.width/e.height,a=e=>{var r,l,t,n;return e.placeholder?null!=(r=e.placeholder)&&null!=(l=r.fallback)&&l.includes("base64")?{base64:null==(t=e.placeholder)?void 0:t.fallback}:{tracedSVG:null==(n=e.placeholder)?void 0:n.fallback}:{}},c=e=>{if(e.srcSet){var r;const l=[...e.srcSet.matchAll(/(?:([^"'\s,]+)\s*(?:\s+\d+[wx])(?:,\s*)?)/gm)],t=e.sizes.replace("px",""),n=l.filter(e=>(null==e?void 0:e[0].includes("100w"))||(null==e?void 0:e[0].includes("1x"))||(null==e?void 0:e[0].includes(`${t}w`)));return(null==n||null==(r=n[0])?void 0:r[1])||""}return""},s=e=>{var r,l,t;return null!=(r=e.images)&&r.sources&&Array.isArray(null==(l=e.images)?void 0:l.sources)?null==(t=e.images)?void 0:t.sources.reduce((e,r)=>{var l;const t=(null==r||null==(l=r.type)?void 0:l.split("/")[1])||"",n=(null==t?void 0:t.charAt(0).toUpperCase())+t.slice(1),i=`srcSet${n}`,u=`src${n}`;return n&&(!(i in e)&&null!=r&&r.srcSet&&(e[i]=r.srcSet),!(u in e)&&null!=r&&r.srcSet&&(e[u]=c(r))),e},{}):{}},o=e=>{if(e&&e.layout){const r={},t=n(e),i=u(e),c=a(e),o=s(e);return r[t]=l({},e.images.fallback,o,c,"fluid"===t?{aspectRatio:i}:{},"fixed"===t?{width:e.width,height:e.height}:{}),r}return null};function d(e){if(e){if(Array.isArray(e)){const[r,u]=(e=>{const r=i(e);if(r){const i=n(r),u=e.map(e=>{if(t(e))return e;const r=o(e);return l({},r&&r[i],null!=e&&e.media?{media:e.media}:{})});return[i,u]}return[]})(e);return r?{[r]:u}:null}return o(e)}return null}const f=l=>{const{image:t,children:n}=l,i=function(e,r){if(null==e)return{};var l,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r.indexOf(l=i[t])>=0||(n[l]=e[l]);return n}(l,["image","children"]),u=t&&d(t);return u?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_background_image__WEBPACK_IMPORTED_MODULE_0__["default"],Object.assign({},u,i),n):react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,n)};
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant),
/* harmony export */   "warning": () => (/* binding */ warning)
/* harmony export */ });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/html-attributes/lib/html-attributes.js":
/*!*************************************************************!*\
  !*** ./node_modules/html-attributes/lib/html-attributes.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/*!
 * html-attributes
 * https://github.com/alexmingoia/html-attributes
 */



/**
 * @module html-attributes
 */

module.exports = {
  "abbr": "abbr",
  "accept": "accept",
  "acceptCharset": "accept-charset",
  "accessKey": "accesskey",
  "action": "action",
  "allowFullScreen": "allowfullscreen",
  "allowTransparency": "allowtransparency",
  "alt": "alt",
  "async": "async",
  "autoComplete": "autocomplete",
  "autoFocus": "autofocus",
  "autoPlay": "autoplay",
  "cellPadding": "cellpadding",
  "cellSpacing": "cellspacing",
  "challenge": "challenge",
  "charset": "charset",
  "checked": "checked",
  "cite": "cite",
  "class": "class",
  "className": "class",
  "cols": "cols",
  "colSpan": "colspan",
  "command": "command",
  "content": "content",
  "contentEditable": "contenteditable",
  "contextMenu": "contextmenu",
  "controls": "controls",
  "coords": "coords",
  "crossOrigin": "crossorigin",
  "data": "data",
  "dateTime": "datetime",
  "default": "default",
  "defer": "defer",
  "dir": "dir",
  "disabled": "disabled",
  "download": "download",
  "draggable": "draggable",
  "dropzone": "dropzone",
  "encType": "enctype",
  "for": "for",
  "form": "form",
  "formAction": "formaction",
  "formEncType": "formenctype",
  "formMethod": "formmethod",
  "formNoValidate": "formnovalidate",
  "formTarget": "formtarget",
  "frameBorder": "frameBorder",
  "headers": "headers",
  "height": "height",
  "hidden": "hidden",
  "high": "high",
  "href": "href",
  "hrefLang": "hreflang",
  "htmlFor": "for",
  "httpEquiv": "http-equiv",
  "icon": "icon",
  "id": "id",
  "inputMode": "inputmode",
  "isMap": "ismap",
  "itemId": "itemid",
  "itemProp": "itemprop",
  "itemRef": "itemref",
  "itemScope": "itemscope",
  "itemType": "itemtype",
  "kind": "kind",
  "label": "label",
  "lang": "lang",
  "list": "list",
  "loop": "loop",
  "manifest": "manifest",
  "max": "max",
  "maxLength": "maxlength",
  "media": "media",
  "mediaGroup": "mediagroup",
  "method": "method",
  "min": "min",
  "minLength": "minlength",
  "multiple": "multiple",
  "muted": "muted",
  "name": "name",
  "noValidate": "novalidate",
  "open": "open",
  "optimum": "optimum",
  "pattern": "pattern",
  "ping": "ping",
  "placeholder": "placeholder",
  "poster": "poster",
  "preload": "preload",
  "radioGroup": "radiogroup",
  "readOnly": "readonly",
  "rel": "rel",
  "required": "required",
  "role": "role",
  "rows": "rows",
  "rowSpan": "rowspan",
  "sandbox": "sandbox",
  "scope": "scope",
  "scoped": "scoped",
  "scrolling": "scrolling",
  "seamless": "seamless",
  "selected": "selected",
  "shape": "shape",
  "size": "size",
  "sizes": "sizes",
  "sortable": "sortable",
  "span": "span",
  "spellCheck": "spellcheck",
  "src": "src",
  "srcDoc": "srcdoc",
  "srcSet": "srcset",
  "start": "start",
  "step": "step",
  "style": "style",
  "tabIndex": "tabindex",
  "target": "target",
  "title": "title",
  "translate": "translate",
  "type": "type",
  "typeMustMatch": "typemustmatch",
  "useMap": "usemap",
  "value": "value",
  "width": "width",
  "wmode": "wmode",
  "wrap": "wrap"
};


/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/***/ ((module) => {

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

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

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
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js":
/*!****************************************************************!*\
  !*** ./node_modules/popmotion/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/short-uuid/index.js":
/*!******************************************!*\
  !*** ./node_modules/short-uuid/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Created by Samuel on 6/4/2016.
 * Simple wrapper functions to produce shorter UUIDs for cookies, maybe everything?
 */

const { v4: uuidv4 } = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/index.js");
const anyBase = __webpack_require__(/*! any-base */ "./node_modules/any-base/index.js");

const flickrBase58 = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
const cookieBase90 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~";

const baseOptions = {
  consistentLength: true,
};

// A default generator, instantiated only if used.
let toFlickr;

/**
 * Takes a UUID, strips the dashes, and translates.
 * @param {string} longId
 * @param {function(string)} translator
 * @param {Object} [paddingParams]
 * @returns {string}
 */
const shortenUUID = (longId, translator, paddingParams) => {
  const translated = translator(longId.toLowerCase().replace(/-/g, ''));

  if (!paddingParams || !paddingParams.consistentLength) return translated;

  return translated.padStart(
    paddingParams.shortIdLength,
    paddingParams.paddingChar,
  );
};

/**
 * Translate back to hex and turn back into UUID format, with dashes
 * @param {string} shortId
 * @param {function(string)} translator
 * @returns {string}
 */
const enlargeUUID = (shortId, translator) => {
  const uu1 = translator(shortId).padStart(32, '0');

  // Join the zero padding and the UUID and then slice it up with match
  const m = uu1.match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);

  // Accumulate the matches and join them.
  return [m[1], m[2], m[3], m[4], m[5]].join('-');
};

// Calculate length for the shortened ID
const getShortIdLength = (alphabetLength) => (
  Math.ceil(Math.log(2 ** 128) / Math.log(alphabetLength)));

module.exports = (() => {
  /**
   * @param {string} toAlphabet - Defaults to flickrBase58 if not provided
   * @param {Object} [options]
   *
   * @returns {{new: (function()),
   *  uuid: (function()),
   *  fromUUID: (function(string)),
   *  toUUID: (function(string)),
   *  alphabet: (string)}}
   */
  const makeConvertor = (toAlphabet, options) => {
    // Default to Flickr 58
    const useAlphabet = toAlphabet || flickrBase58;

    // Default to baseOptions
    const selectedOptions = { ...baseOptions, ...options };

    // Check alphabet for duplicate entries
    if ([...new Set(Array.from(useAlphabet))].length !== useAlphabet.length) {
      throw new Error('The provided Alphabet has duplicate characters resulting in unreliable results');
    }

    const shortIdLength = getShortIdLength(useAlphabet.length);

    // Padding Params
    const paddingParams = {
      shortIdLength,
      consistentLength: selectedOptions.consistentLength,
      paddingChar: useAlphabet[0],
    };

    // UUIDs are in hex, so we translate to and from.
    const fromHex = anyBase(anyBase.HEX, useAlphabet);
    const toHex = anyBase(useAlphabet, anyBase.HEX);
    const generate = () => shortenUUID(uuidv4(), fromHex, paddingParams);

    const translator = {
      new: generate,
      generate,
      uuid: uuidv4,
      fromUUID: (uuid) => shortenUUID(uuid, fromHex, paddingParams),
      toUUID: (shortUuid) => enlargeUUID(shortUuid, toHex),
      alphabet: useAlphabet,
      maxLength: shortIdLength,
    };

    Object.freeze(translator);

    return translator;
  };

  // Expose the constants for other purposes.
  makeConvertor.constants = {
    flickrBase58,
    cookieBase90,
  };

  // Expose the generic v4 UUID generator for convenience
  makeConvertor.uuid = uuidv4;

  // Provide a generic generator
  makeConvertor.generate = () => {
    if (!toFlickr) {
      // Generate on first use;
      toFlickr = makeConvertor(flickrBase58).generate;
    }
    return toFlickr();
  };

  return makeConvertor;
})();


/***/ }),

/***/ "./node_modules/sort-media-queries/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/sort-media-queries/lib/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var extend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var mqTypes = ['blank','all','minWidth','minHeight','maxWidth','maxHeight','print'];

/**
 * @param  {Array} rules
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Boolean}
 */
function itemsValid ( rules, type, prop ) {
	var flag = true;
	for ( var i = 0, rulesLength = rules.length; i < rulesLength; i++ ) {
		if ( typeof(rules[i]) !== type || ( prop && !rules[i].hasOwnProperty(prop) ) ) {
			flag = false;
			break;
		}
	}
	return flag;
}

/**
 * @param  {Array} rules
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Boolean}
 */
function allValid ( rules, type, prop ) {
	if (
		!rules || !rules.length || typeof(rules) === 'string'
	) {
		return 'none';
	}
	if (
		(type === 'object' && (!prop || typeof(prop) !== 'string')) ||
		!itemsValid(rules, type, prop)
	) {
		return 'some';
	}
	return 'all';
}

/**
 * Normalize between array with strings and array with objects
 *
 * @param  {Array} rules
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Object}
 */
function prepareRules ( rules, type, prop ) {
	var collection = [];
	var o = {};
	for ( var i = 0, rulesLength = rules.length; i < rulesLength; i++ ) {
		if ( type === 'string' ) {
			o = extend({}, {
				__media: rules[i]
			});
		} else {
			o = extend({}, rules[i]);
			o.__media = rules[i][prop];
		}
		collection.push(o);
	}
	return collection;
}

/**
 * @param  {Boolean} isMax
 *
 * @return {Function}
 */
function determineSortOrder ( isMax ) {

	/**
	 * Determine sort order based on provided arguments
	 *
	 * @param  {Object} a
	 * @param  {Object} b
	 *
	 * @return {Integer}
	 */
	return function ( a, b ) {

		var sortValA = a.sortVal;
		var sortValB = b.sortVal;
		var ruleA = a.item.__media;
		var ruleB = b.item.__media;
		isMax = typeof(isMax) !== 'undefined' ? isMax : false;

		// Consider print for sorting if sortVals are equal
		if ( sortValA === sortValB ) {
			if ( ruleA.match(/print/) ) {
				// a contains print and should be sorted after b
				return 1;
			}
			if ( ruleB.match(/print/) ) {
				// b contains print and should be sorted after a
				return -1;
			}
		}

		// Return descending sort order for max-(width|height) media queries
		if ( isMax ) {
			return sortValB - sortValA;
		}

		// Return ascending sort order
		return sortValA - sortValB;
	};
}

/**
 * @return {Object}
 */
function createCollection () {
	var mqCollection = {};
	for ( var i = 0, mqTypesLength = mqTypes.length; i < mqTypesLength; i++ ) {
		mqCollection[mqTypes[i]] = [];
	}
	return mqCollection;
}

/**
 * @param {Object} collection
 * @param {Array} rules
 *
 * @return {Object}
 */
function addRulesToCollection ( collection, rules ) {

	// Sort media queries by kind, this is needed to output them in the right order
	for ( var i = 0, rulesLength = rules.length; i < rulesLength; i++ ) {

		var item = rules[i];
		var rule = item.__media;
		var collectionType = 'blank';
		var valMatch = rule.match(/\d+/g);

		if ( rule.match(/min-width/) ) {
			collectionType = 'minWidth';
		} else if ( rule.match(/min-height/) ) {
			collectionType = 'minHeight';
		} else if ( rule.match(/max-width/) ) {
			collectionType = 'maxWidth';
		} else if ( rule.match(/max-height/) ) {
			collectionType = 'maxHeight';
		} else if ( rule.match(/print/) ) {
			collectionType = 'print';
		} else if ( rule.match(/all/) ) {
			collectionType = 'all';
		}

		collection[collectionType].push({
			item: item,
			sortVal: valMatch ? valMatch[0] : 0
		});

	}
	return collection;
}

/**
 * @param  {Object} collection
 *
 * @return {Object}
 */
function sortCollection ( collection ) {
	var sorter;
	for ( var collectionType in collection ) {
		if ( collection.hasOwnProperty(collectionType) ) {
			sorter = determineSortOrder(false);
			if ( collectionType === 'maxWidth' || collectionType === 'maxHeight' ) {
				sorter = determineSortOrder(true);
			}
			collection[collectionType].sort(sorter);
		}
	}
	return collection;
}

/**
 * @param  {Object} collection
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Array}
 */
function transformCollection ( collection, type, prop ) {
	var transformed = [];
	var collectionItem;

	function iterateCollectionItem ( collectionItem ) {
		var resultVal;
		for ( var i = 0, typeLength = collectionItem.length; i < typeLength; i++ ) {
			if ( type === 'string' ) {
				resultVal = collectionItem[i].item.__media;
			} else {
				resultVal = collectionItem[i].item;
				delete resultVal.__media;
			}
			transformed.push(resultVal);
		}
	}

	for ( var i = 0, mqTypesLength = mqTypes.length; i < mqTypesLength; i++ ) {
		iterateCollectionItem(collection[mqTypes[i]]);
	}

	return transformed;
}

/**
 * @param  {Array} rules
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Array}
 */
function sortInit ( rules, type, prop ) {

	switch ( allValid(rules, type, prop) ) {
		case 'none':
			return [];
		case 'some':
			return rules;
	}

	var collection = createCollection();
	rules = prepareRules(rules, type, prop);
	addRulesToCollection(collection, rules);
	sortCollection(collection);
	return transformCollection(collection, type, prop);
}

/**
 * @param  {Array} rules
 * @param  {String} prop
 *
 * @return {Array}
 */
module.exports = function ( rules, prop ) {
	if ( rules ) {
		if ( prop ) {
			return sortInit(rules, 'object', prop);
		}
		return sortInit(rules, 'string');
	}
	return [];
};


/***/ }),

/***/ "./src/images/assets/close.svg":
/*!*************************************!*\
  !*** ./src/images/assets/close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Close (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M31.8184 10.6055L10.6052 31.8187","stroke":"white","key":0}),React.createElement("path",{"d":"M10.6074 10.6055L31.8206 31.8187","stroke":"white","key":1})]);
}

Close.defaultProps = {"width":"43","height":"43","viewBox":"0 0 43 43","fill":"none"};

module.exports = Close;

Close.default = Close;


/***/ }),

/***/ "./src/images/assets/face.svg":
/*!************************************!*\
  !*** ./src/images/assets/face.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Face (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M15 0C6.7294 0 0 6.7294 0 15C0 23.2706 6.7294 30 15 30C23.2706 30 30 23.2706 30 15C30 6.7294 23.2706 0 15 0ZM15 2.30769C22.0234 2.30769 27.6923 7.97656 27.6923 15C27.6923 21.3838 23.0021 26.6331 16.875 27.5391V18.6689H20.4582L21.0216 15.0316H16.875V13.0394C16.875 11.5278 17.3669 10.1863 18.7815 10.1863H21.0532V7.00871C20.654 6.95564 19.8106 6.83744 18.2136 6.83744C14.8813 6.83744 12.9267 8.59821 12.9267 12.6067V15.027H9.5012V18.6689H12.9312V27.5075C6.89951 26.5203 2.30769 21.3163 2.30769 15C2.30769 7.97656 7.97656 2.30769 15 2.30769Z","fill":"#AEAEAE"}));
}

Face.defaultProps = {"width":"30","height":"30","viewBox":"0 0 30 30","fill":"none"};

module.exports = Face;

Face.default = Face;


/***/ }),

/***/ "./src/images/assets/inst.svg":
/*!************************************!*\
  !*** ./src/images/assets/inst.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Inst (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M8.70793 0C3.91226 0 0 3.91226 0 8.70793V21.3011C0 26.0877 3.91226 30 8.70793 30H21.3011C26.0877 30 30 26.0877 30 21.2921V8.70793C30 3.91226 26.0877 0 21.2921 0H8.70793ZM8.70793 2.30769H21.2921C24.8438 2.30769 27.6923 5.15625 27.6923 8.70793V21.2921C27.6923 24.8438 24.8438 27.6923 21.3011 27.6923H8.70793C5.15625 27.6923 2.30769 24.8438 2.30769 21.3011V8.70793C2.30769 5.15625 5.15625 2.30769 8.70793 2.30769ZM24.2308 4.61538C23.5907 4.61538 23.0769 5.12921 23.0769 5.76923C23.0769 6.40926 23.5907 6.92308 24.2308 6.92308C24.8708 6.92308 25.3846 6.40926 25.3846 5.76923C25.3846 5.12921 24.8708 4.61538 24.2308 4.61538ZM15 6.92308C10.5559 6.92308 6.92308 10.5559 6.92308 15C6.92308 19.4441 10.5559 23.0769 15 23.0769C19.4441 23.0769 23.0769 19.4441 23.0769 15C23.0769 10.5559 19.4441 6.92308 15 6.92308ZM15 9.23077C18.2001 9.23077 20.7692 11.7999 20.7692 15C20.7692 18.2001 18.2001 20.7692 15 20.7692C11.7999 20.7692 9.23077 18.2001 9.23077 15C9.23077 11.7999 11.7999 9.23077 15 9.23077Z","fill":"#AEAEAE"}));
}

Inst.defaultProps = {"width":"30","height":"30","viewBox":"0 0 30 30","fill":"none"};

module.exports = Inst;

Inst.default = Inst;


/***/ }),

/***/ "./src/images/assets/line-dark.svg":
/*!*****************************************!*\
  !*** ./src/images/assets/line-dark.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function LineDark (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z","fill":"black"}));
}

LineDark.defaultProps = {"width":"34","height":"8","fill":"none"};

module.exports = LineDark;

LineDark.default = LineDark;


/***/ }),

/***/ "./src/images/assets/line-light.svg":
/*!******************************************!*\
  !*** ./src/images/assets/line-light.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function LineLight (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z","fill":"white"}));
}

LineLight.defaultProps = {"width":"34","height":"8","fill":"none"};

module.exports = LineLight;

LineLight.default = LineLight;


/***/ }),

/***/ "./src/images/assets/logo-light.svg":
/*!******************************************!*\
  !*** ./src/images/assets/logo-light.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function LogoLight (props) {
    return React.createElement("svg",props,[React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M29.1643 4.74208L27.0248 4.02892L27.1752 3.57788L29.3146 4.29104L29.1643 4.74208ZM42.8831 4.0219L41.2191 4.73506L41.0318 4.29806L42.6958 3.5849L42.8831 4.0219ZM35.1825 8.01113L37.6409 7.11716L37.4784 6.67034L34.9488 7.59021L32.6558 6.67303L32.4793 7.11447L34.707 8.00557V12.1236H35.1825V8.01113ZM23.9068 11.1493L17.9638 8.29666L18.1695 7.86804L24.1125 10.7207L23.9068 11.1493ZM14.6733 11.1636L13.0093 10.6881L13.1399 10.231L14.8039 10.7064L14.6733 11.1636ZM54.8068 11.4355L56.7086 10.4846L56.9212 10.9099L55.0195 11.8608L54.8068 11.4355ZM51.3795 11.646L46.1497 12.3591L46.0854 11.888L51.3152 11.1749L51.3795 11.646ZM51.8443 13.5489L46.6145 14.0244L46.5715 13.5509L51.8013 13.0754L51.8443 13.5489ZM9.19296 16.8648L3.72541 14.963L3.8816 14.514L9.34915 16.4157L9.19296 16.8648ZM14.6551 15.9119L12.7534 15.1988L12.9203 14.7536L14.8221 15.4668L14.6551 15.9119ZM66.1835 17.5702L61.4291 19.7097L61.234 19.2761L65.9884 17.1366L66.1835 17.5702ZM35.1825 18.9998L38.0533 18.779L38.0169 18.305L34.9475 18.5411L32.5912 18.3055L32.5439 18.7785L34.707 18.9948V29.0016H3.80351V29.4771H68.9386V29.0016H35.1825V18.9998ZM28.9551 19.726L26.5779 19.2505L26.6712 18.7843L29.0484 19.2598L28.9551 19.726ZM22.5463 22.1049L18.0296 21.3917L18.1037 20.9221L22.6204 21.6353L22.5463 22.1049ZM16.1293 23.7691L8.28456 22.5805L8.35579 22.1105L16.2005 23.2991L16.1293 23.7691ZM51.6087 23.0575L46.8544 23.5329L46.807 23.0598L51.5614 22.5844L51.6087 23.0575ZM62.5592 23.0554L59.7066 23.5309L59.6285 23.0619L62.4811 22.5865L62.5592 23.0554ZM69.4717 24.0024L66.619 24.7156L66.5037 24.2544L69.3564 23.5412L69.4717 24.0024ZM0 30.1902H18.7798V46.737L13.0828 49.7093L0 43.8947V30.1902ZM0.475439 30.6657V43.5857L12.8368 49.0797V30.6657H0.475439ZM13.3123 30.6657V49.0533L18.3044 46.4488V30.6657H13.3123ZM20.4439 30.1902H41.6009V56.7216L34.9485 60.171L20.4439 53.1604V30.1902ZM20.9193 30.6657V52.8622L34.707 59.5262V30.6657H20.9193ZM35.1825 30.6657V59.5141L41.1254 56.4326V30.6657H35.1825ZM49.6833 30.1902H69.6517V43.6532L56.8137 49.7089L49.6833 46.2666V30.1902ZM50.1588 30.6657V45.9682L56.5772 49.0668V30.6657H50.1588ZM57.0526 30.6657V49.0705L69.1763 43.3518V30.6657H57.0526ZM0 45.7491L34.9444 61.5459L69.3625 45.8797H149.763V48.4946H69.467L34.9451 64.6842L0 48.4084V45.7491ZM69.4656 46.3551L34.9451 62.0679L0.475439 46.4858V48.1054L34.9444 64.1594L69.3611 48.0192H149.288V46.3551H69.4656Z","fill":"white","key":0}),React.createElement("path",{"d":"M3.80268 14.5009L0.474609 16.1649V29.2395H3.80268V23.5342L5.229 23.2965L9.0325 29.2395H12.836L8.55707 22.1079L13.0737 14.9763V10.2219L9.0325 16.5262L7.13075 19.493L3.80268 20.2061V14.5009Z","fill":"white","key":1}),React.createElement("path",{"d":"M18.0658 7.84473L14.5 9.50877V10.9351V15.4518V22.1079L15.6963 23.5342L20.6807 29.4772L27.0992 19.2553V3.56579L23.7711 5.22982V10.6974V19.493L22.2259 21.989L20.6807 24.4851L18.0658 20.9193V7.84473Z","fill":"white","key":2}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M28.7632 29.4772V19.493V4.27895V2.85263L34.9439 0L41.3623 2.85263V29.4772H37.5588V18.5421L34.9439 18.0667L32.5667 18.5421V29.4772H28.7632ZM34.9439 5.94298L32.5667 6.89386V12.8368L34.9439 12.1237L37.3211 12.5991V6.89386L34.9439 5.94298Z","fill":"white","key":3}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M42.7886 3.56579V29.4772H50.1579L55.6255 24.0096V12.5991L53.0106 8.32017L42.7886 3.56579ZM50.6334 11.6482L46.8299 10.4596V24.7228L49.4448 24.9605L51.5843 22.821V13.0746L50.6334 11.6482Z","fill":"white","key":4}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M56.8141 29.4772V10.4596L69.6509 16.1649V24.0096L66.0851 23.5342L69.4132 29.4772H66.0851L62.2816 22.821L59.9044 22.3456V29.4772H56.8141ZM66.0851 17.3535L60.8553 15.4518V19.0175L66.0851 20.4439V17.3535Z","fill":"white","key":5}),React.createElement("path",{"d":"M81.7746 26.8623V27.5754H85.5781V23.7719L71.5527 17.3535V43.5026H85.5781V35.6579H78.6843V38.0351H81.7746V39.6991H75.5939V24.0096L81.7746 26.8623Z","fill":"white","key":6}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M87.7176 43.5026V23.7719H101.743V39.6991H97.9395L101.743 43.5026H97.9395L93.8983 39.6991H91.7588V43.5026H87.7176ZM97.9395 27.5754H91.7588V35.6579H97.9395V27.5754Z","fill":"white","key":7}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M103.883 23.7719H117.908V43.5026H103.883V23.7719ZM113.867 27.5754H107.924V39.4614H113.867V27.5754Z","fill":"white","key":8}),React.createElement("path",{"d":"M119.81 23.7719H123.851V39.4614H129.794V23.7719H133.835V43.5026H119.81V23.7719Z","fill":"white","key":9}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M135.975 23.7719H150V39.4614H140.016V43.5026H135.975V23.7719ZM145.959 27.5754H140.016V35.4202H145.959V27.5754Z","fill":"white","key":10})]);
}

LogoLight.defaultProps = {"width":"150","height":"65","viewBox":"0 0 150 65","fill":"none"};

module.exports = LogoLight;

LogoLight.default = LogoLight;


/***/ }),

/***/ "./src/images/assets/logo.svg":
/*!************************************!*\
  !*** ./src/images/assets/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Logo (props) {
    return React.createElement("svg",props,[React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M29.1643 4.74208L27.0248 4.02892L27.1752 3.57788L29.3146 4.29104L29.1643 4.74208ZM42.8831 4.0219L41.2191 4.73506L41.0318 4.29806L42.6958 3.5849L42.8831 4.0219ZM35.1825 8.01113L37.6409 7.11716L37.4784 6.67034L34.9488 7.59021L32.6558 6.67303L32.4793 7.11447L34.707 8.00557V12.1236H35.1825V8.01113ZM23.9068 11.1493L17.9638 8.29666L18.1695 7.86804L24.1125 10.7207L23.9068 11.1493ZM14.6733 11.1636L13.0093 10.6881L13.1399 10.231L14.8039 10.7064L14.6733 11.1636ZM54.8068 11.4355L56.7086 10.4846L56.9212 10.9099L55.0195 11.8608L54.8068 11.4355ZM51.3795 11.646L46.1497 12.3591L46.0854 11.888L51.3152 11.1749L51.3795 11.646ZM51.8443 13.5489L46.6145 14.0244L46.5715 13.5509L51.8013 13.0754L51.8443 13.5489ZM9.19296 16.8648L3.72541 14.963L3.8816 14.514L9.34915 16.4157L9.19296 16.8648ZM14.6551 15.9119L12.7534 15.1988L12.9203 14.7536L14.8221 15.4668L14.6551 15.9119ZM66.1835 17.5702L61.4291 19.7097L61.234 19.2761L65.9884 17.1366L66.1835 17.5702ZM35.1825 18.9998L38.0533 18.779L38.0169 18.305L34.9475 18.5411L32.5912 18.3055L32.5439 18.7785L34.707 18.9948V29.0016H3.80351V29.4771H68.9386V29.0016H35.1825V18.9998ZM28.9551 19.726L26.5779 19.2505L26.6712 18.7843L29.0484 19.2598L28.9551 19.726ZM22.5463 22.1049L18.0296 21.3917L18.1037 20.9221L22.6204 21.6353L22.5463 22.1049ZM16.1293 23.7691L8.28456 22.5805L8.35579 22.1105L16.2005 23.2991L16.1293 23.7691ZM51.6087 23.0575L46.8544 23.5329L46.807 23.0598L51.5614 22.5844L51.6087 23.0575ZM62.5592 23.0554L59.7066 23.5309L59.6285 23.0619L62.4811 22.5865L62.5592 23.0554ZM69.4717 24.0024L66.619 24.7156L66.5037 24.2544L69.3564 23.5412L69.4717 24.0024ZM0 30.1902H18.7798V46.737L13.0828 49.7093L0 43.8947V30.1902ZM0.475439 30.6657V43.5857L12.8368 49.0797V30.6657H0.475439ZM13.3123 30.6657V49.0533L18.3044 46.4488V30.6657H13.3123ZM20.4439 30.1902H41.6009V56.7216L34.9485 60.171L20.4439 53.1604V30.1902ZM20.9193 30.6657V52.8622L34.707 59.5262V30.6657H20.9193ZM35.1825 30.6657V59.5141L41.1254 56.4326V30.6657H35.1825ZM49.6833 30.1902H69.6517V43.6532L56.8137 49.7089L49.6833 46.2666V30.1902ZM50.1588 30.6657V45.9682L56.5772 49.0668V30.6657H50.1588ZM57.0526 30.6657V49.0705L69.1763 43.3518V30.6657H57.0526ZM0 45.7491L34.9444 61.5459L69.3625 45.8797H149.763V48.4946H69.467L34.9451 64.6842L0 48.4084V45.7491ZM69.4656 46.3551L34.9451 62.0679L0.475439 46.4858V48.1054L34.9444 64.1594L69.3611 48.0192H149.288V46.3551H69.4656Z","fill":"black","key":0}),React.createElement("path",{"d":"M3.80268 14.5009L0.474609 16.1649V29.2395H3.80268V23.5342L5.229 23.2965L9.0325 29.2395H12.836L8.55707 22.1079L13.0737 14.9763V10.2219L9.0325 16.5262L7.13075 19.493L3.80268 20.2061V14.5009Z","fill":"black","key":1}),React.createElement("path",{"d":"M18.0658 7.84473L14.5 9.50877V10.9351V15.4518V22.1079L15.6963 23.5342L20.6807 29.4772L27.0992 19.2553V3.56579L23.7711 5.22982V10.6974V19.493L22.2259 21.989L20.6807 24.4851L18.0658 20.9193V7.84473Z","fill":"black","key":2}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M28.7632 29.4772V19.493V4.27895V2.85263L34.9439 0L41.3623 2.85263V29.4772H37.5588V18.5421L34.9439 18.0667L32.5667 18.5421V29.4772H28.7632ZM34.9439 5.94298L32.5667 6.89386V12.8368L34.9439 12.1237L37.3211 12.5991V6.89386L34.9439 5.94298Z","fill":"black","key":3}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M42.7886 3.56579V29.4772H50.1579L55.6255 24.0096V12.5991L53.0106 8.32017L42.7886 3.56579ZM50.6334 11.6482L46.8299 10.4596V24.7228L49.4448 24.9605L51.5843 22.821V13.0746L50.6334 11.6482Z","fill":"black","key":4}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M56.8141 29.4772V10.4596L69.6509 16.1649V24.0096L66.0851 23.5342L69.4132 29.4772H66.0851L62.2816 22.821L59.9044 22.3456V29.4772H56.8141ZM66.0851 17.3535L60.8553 15.4518V19.0175L66.0851 20.4439V17.3535Z","fill":"black","key":5}),React.createElement("path",{"d":"M81.7746 26.8623V27.5754H85.5781V23.7719L71.5527 17.3535V43.5026H85.5781V35.6579H78.6843V38.0351H81.7746V39.6991H75.5939V24.0096L81.7746 26.8623Z","fill":"black","key":6}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M87.7176 43.5026V23.7719H101.743V39.6991H97.9395L101.743 43.5026H97.9395L93.8983 39.6991H91.7588V43.5026H87.7176ZM97.9395 27.5754H91.7588V35.6579H97.9395V27.5754Z","fill":"black","key":7}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M103.883 23.7719H117.908V43.5026H103.883V23.7719ZM113.867 27.5754H107.924V39.4614H113.867V27.5754Z","fill":"black","key":8}),React.createElement("path",{"d":"M119.81 23.7719H123.851V39.4614H129.794V23.7719H133.835V43.5026H119.81V23.7719Z","fill":"black","key":9}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M135.975 23.7719H150V39.4614H140.016V43.5026H135.975V23.7719ZM145.959 27.5754H140.016V35.4202H145.959V27.5754Z","fill":"black","key":10})]);
}

Logo.defaultProps = {"width":"150","height":"65","viewBox":"0 0 150 65","fill":"none"};

module.exports = Logo;

Logo.default = Logo;


/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/index.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v1": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "v3": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "v4": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "v5": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "NIL": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "version": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "validate": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "stringify": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "parse": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-node/v1.js");
/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-node/v3.js");
/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-node/v5.js");
/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-node/nil.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-node/version.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-node/parse.js");










/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/md5.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/md5.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/nil.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/nil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/parse.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/parse.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/sha1.js":
/*!*************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/sha1.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v1.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v1.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v3.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v3.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-node/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-node/md5.js");


const v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v35.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v35.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DNS": () => (/* binding */ DNS),
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-node/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v5.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v5.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-node/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-node/sha1.js");


const v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/version.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/version.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");


function version(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);

/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animate.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animate.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate)
/* harmony export */ });
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");




/**
 * Animate a single value or a `MotionValue`.
 *
 * The first argument is either a `MotionValue` to animate, or an initial animation value.
 *
 * The second is either a value to animate to, or an array of keyframes to animate through.
 *
 * The third argument can be either tween or spring options, and optional lifecycle methods: `onUpdate`, `onPlay`, `onComplete`, `onRepeat` and `onStop`.
 *
 * Returns `AnimationPlaybackControls`, currently just a `stop` method.
 *
 * ```javascript
 * const x = useMotionValue(0)
 *
 * useEffect(() => {
 *   const controls = animate(x, 100, {
 *     type: "spring",
 *     stiffness: 2000,
 *     onComplete: v => {}
 *   })
 *
 *   return controls.stop
 * })
 * ```
 *
 * @public
 */
function animate(from, to, transition) {
    if (transition === void 0) { transition = {}; }
    var value = (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(from) ? from : (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.motionValue)(from);
    (0,_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_2__.startAnimation)("", value, to, transition);
    return {
        stop: function () { return value.stop(); },
        isAnimating: function () { return value.isAnimating(); },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "criticallyDampedSpring": () => (/* binding */ criticallyDampedSpring),
/* harmony export */   "getDefaultTransition": () => (/* binding */ getDefaultTransition),
/* harmony export */   "linearTween": () => (/* binding */ linearTween),
/* harmony export */   "underDampedSpring": () => (/* binding */ underDampedSpring)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");



var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var criticallyDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10,
}); };
var linearTween = function () { return ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if ((0,_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ to: to }, transitionFactory(to));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/easing.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/easing.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easingDefinitionToFunction": () => (/* binding */ easingDefinitionToFunction),
/* harmony export */   "isEasingArray": () => (/* binding */ isEasingArray)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/index.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/cubic-bezier.mjs");




var easingLookup = {
    linear: popmotion__WEBPACK_IMPORTED_MODULE_1__.linear,
    easeIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeIn,
    easeInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
    easeOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeOut,
    circIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.circIn,
    circInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.circInOut,
    circOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.circOut,
    backIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.backIn,
    backInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.backInOut,
    backOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.backOut,
    anticipate: popmotion__WEBPACK_IMPORTED_MODULE_1__.anticipate,
    bounceIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceIn,
    bounceInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceInOut,
    bounceOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceOut,
};
var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        return (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.cubicBezier)(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(easingLookup[definition] !== undefined, "Invalid easing type '".concat(definition, "'"));
        return easingLookup[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnimatable": () => (/* binding */ isAnimatable)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_0__.complex.test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnimationControls": () => (/* binding */ isAnimationControls)
/* harmony export */ });
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isKeyframesTarget": () => (/* binding */ isKeyframesTarget)
/* harmony export */ });
var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTransitionToAnimationOptions": () => (/* binding */ convertTransitionToAnimationOptions),
/* harmony export */   "getDelayFromTransition": () => (/* binding */ getDelayFromTransition),
/* harmony export */   "getPopmotionAnimationOptions": () => (/* binding */ getPopmotionAnimationOptions),
/* harmony export */   "getValueTransition": () => (/* binding */ getValueTransition),
/* harmony export */   "getZeroUnit": () => (/* binding */ getZeroUnit),
/* harmony export */   "hydrateKeyframes": () => (/* binding */ hydrateKeyframes),
/* harmony export */   "isTransitionDefined": () => (/* binding */ isTransitionDefined),
/* harmony export */   "isZero": () => (/* binding */ isZero),
/* harmony export */   "startAnimation": () => (/* binding */ startAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/animations/inertia.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/animations/index.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _easing_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/easing.mjs");
/* harmony import */ var _is_animatable_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-animatable.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs");
/* harmony import */ var _default_transitions_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _render_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/dom/value-types/animatable-none.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");











/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
    _a.when; _a.delay; _a.delayChildren; _a.staggerChildren; _a.staggerDirection; _a.repeat; _a.repeatType; _a.repeatDelay; _a.from; var transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
    var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["ease", "times", "yoyo", "flip", "loop"]);
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transition);
    if (times)
        options["offset"] = times;
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = (0,_easing_mjs__WEBPACK_IMPORTED_MODULE_3__.isEasingArray)(ease)
            ? ease.map(_easing_mjs__WEBPACK_IMPORTED_MODULE_3__.easingDefinitionToFunction)
            : (0,_easing_mjs__WEBPACK_IMPORTED_MODULE_3__.easingDefinitionToFunction)(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    /**
     * TODO: These options are officially removed from the API.
     */
    if (yoyo || loop || flip) {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
        legacyRepeatWarning = true;
        if (yoyo) {
            options.repeatType = "reverse";
        }
        else if (loop) {
            options.repeatType = "loop";
        }
        else if (flip) {
            options.repeatType = "mirror";
        }
        options.repeat = loop || yoyo || flip || transition.repeat;
    }
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a, _b;
    var valueTransition = getValueTransition(transition, key) || {};
    return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(options.to), false);
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
        (_a = transition.duration) !== null && _a !== void 0 ? _a : (transition.duration = 0.8);
    }
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transition), (0,_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_4__.getDefaultTransition)(key, options.to));
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = (0,_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_5__.isAnimatable)(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        /**
         * If we're trying to animate from "none", try and get an animatable version
         * of the target. This could be improved to work both ways.
         */
        origin = (0,_render_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_6__.getAnimatableNone)(key, target);
    }
    else if (isZero(origin) && typeof target === "string") {
        origin = getZeroUnit(target);
    }
    else if (!Array.isArray(target) &&
        isZero(target) &&
        typeof origin === "string") {
        target = getZeroUnit(origin);
    }
    var isOriginAnimatable = (0,_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_5__.isAnimatable)(key, origin);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(key, " from \"").concat(origin, "\" to \"").concat(target, "\". ").concat(origin, " is not an animatable value - to enable this animation set ").concat(origin, " to a value animatable to ").concat(target, " via the `style` property."));
    function start() {
        var options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete: onComplete,
            onUpdate: function (v) { return value.set(v); },
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? (0,popmotion__WEBPACK_IMPORTED_MODULE_7__.inertia)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), valueTransition))
            : (0,popmotion__WEBPACK_IMPORTED_MODULE_8__.animate)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function (v) {
                    var _a;
                    options.onUpdate(v);
                    (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
                }, onComplete: function () {
                    var _a;
                    options.onComplete();
                    (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
                } }));
    }
    function set() {
        var _a, _b;
        var finalTarget = (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_9__.resolveFinalValueInKeyframes)(target);
        value.set(finalTarget);
        onComplete();
        (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, finalTarget);
        (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
        return { stop: function () { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
function isZero(value) {
    return (value === 0 ||
        (typeof value === "string" &&
            parseFloat(value) === 0 &&
            value.indexOf(" ") === -1));
}
function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number"
        ? 0
        : (0,_render_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_6__.getAnimatableNone)("", potentialUnitType);
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */
function startAnimation(key, value, target, transition) {
    if (transition === void 0) { transition = {}; }
    if (_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_10__.instantAnimationState.current) {
        transition = { type: false };
    }
    return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () { return (controls = animation()); };
        if (delay) {
            delayTimer = setTimeout(start, (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(delay));
        }
        else {
            start();
        }
        return function () {
            clearTimeout(delayTimer);
            controls === null || controls === void 0 ? void 0 : controls.stop();
        };
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPresent": () => (/* binding */ isPresent),
/* harmony export */   "useIsPresent": () => (/* binding */ useIsPresent),
/* harmony export */   "usePresence": () => (/* binding */ usePresence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");




/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__.PresenceContext);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useOpaqueId when released in React
    var id = useUniqueId();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__.PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function () { return counter++; };
var useUniqueId = function () { return (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_2__.useConstant)(incrementId); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutGroupContext": () => (/* binding */ LayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @internal
 */
var LayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LazyContext.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyContext": () => (/* binding */ LazyContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


var LazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ strict: false });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionConfigContext": () => (/* binding */ MotionConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @public
 */
var MotionConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    transformPagePoint: function (p) { return p; },
    isStatic: false,
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateMotionContext": () => (/* binding */ useCreateMotionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs");




function useCreateMotionContext(props) {
    var _a = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrentTreeVariants)(props, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index_mjs__WEBPACK_IMPORTED_MODULE_2__.MotionContext)), initial = _a.initial, animate = _a.animate;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return ({ initial: initial, animate: animate }); }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionContext": () => (/* binding */ MotionContext),
/* harmony export */   "useVisualElementContext": () => (/* binding */ useVisualElementContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


var MotionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useVisualElementContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MotionContext).visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentTreeVariants": () => (/* binding */ getCurrentTreeVariants)
/* harmony export */ });
/* harmony import */ var _render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");


function getCurrentTreeVariants(props, context) {
    if ((0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.checkIfControllingVariants)(props)) {
        var initial = props.initial, animate = props.animate;
        return {
            initial: initial === false || (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.isVariantLabel)(initial)
                ? initial
                : undefined,
            animate: (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.isVariantLabel)(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresenceContext": () => (/* binding */ PresenceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @public
 */
var PresenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchLayoutGroupContext": () => (/* binding */ SwitchLayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @internal
 */
var SwitchLayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/event-info.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/event-info.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractEventInfo": () => (/* binding */ extractEventInfo),
/* harmony export */   "wrapHandler": () => (/* binding */ wrapHandler)
/* harmony export */ });
/* harmony import */ var _gestures_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gestures/utils/event-type.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs");


/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        point: (0,_gestures_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_0__.isTouchEvent)(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    var listener = function (event) {
        return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-dom-event.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDomEvent": () => (/* binding */ addDomEvent),
/* harmony export */   "useDomEvent": () => (/* binding */ useDomEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPointerEvent": () => (/* binding */ addPointerEvent),
/* harmony export */   "usePointerEvent": () => (/* binding */ usePointerEvent)
/* harmony export */ });
/* harmony import */ var _use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs");
/* harmony import */ var _event_info_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/events/utils.mjs");




var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsPointerEvents)()) {
        return name;
    }
    else if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsTouchEvents)()) {
        return touchEventNames[name];
    }
    else if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsMouseEvents)()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return (0,_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.addDomEvent)(target, getPointerEventName(eventName), (0,_event_info_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapHandler)(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return (0,_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(ref, getPointerEventName(eventName), handler && (0,_event_info_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapHandler)(handler, eventName === "pointerdown"), options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/utils.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/utils.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsMouseEvents": () => (/* binding */ supportsMouseEvents),
/* harmony export */   "supportsPointerEvents": () => (/* binding */ supportsPointerEvents),
/* harmony export */   "supportsTouchEvents": () => (/* binding */ supportsTouchEvents)
/* harmony export */ });
/* harmony import */ var _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");


// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.onmousedown === null;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/PanSession.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/PanSession.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanSession": () => (/* binding */ PanSession)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/event-type.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs");
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/distance.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.mjs");








/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.distance)(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().timestamp;
            _this.history.push((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        this.handlePointerMove = function (event, info) {
            _this.lastMoveEvent = event;
            _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
            // Because Safari doesn't trigger mouseup events when it's above a `<select>`
            if ((0,_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_3__.isMouseEvent)(event) && event.buttons === 0) {
                _this.handlePointerUp(event, info);
                return;
            }
            // Throttle mouse move event to once per frame
            framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(_this.updatePoint, true);
        };
        this.handlePointerUp = function (event, info) {
            _this.end();
            var _a = _this.handlers, onEnd = _a.onEnd, onSessionEnd = _a.onSessionEnd;
            var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
            if (_this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if ((0,_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_3__.isTouchEvent)(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = (0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_4__.extractEventInfo)(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().timestamp;
        this.history = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0,popmotion__WEBPACK_IMPORTED_MODULE_5__.pipe)((0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointermove", this.handlePointerMove), (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointerup", this.handlePointerUp), (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointercancel", this.handlePointerUp));
    }
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(this.updatePoint);
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.secondsToMilliseconds)(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualElementDragControls": () => (/* binding */ VisualElementDragControls),
/* harmony export */   "elementDragControls": () => (/* binding */ elementDragControls)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _PanSession_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PanSession.mjs */ "./node_modules/framer-motion/dist/es/gestures/PanSession.mjs");
/* harmony import */ var _utils_lock_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var _utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/constraints.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projection/utils/each-axis.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs");
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../animation/utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../projection/geometry/conversion.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../events/use-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projection/geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");



















var elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: AnyPointerEvent
var VisualElementDragControls = /** @class */ (function () {
    function VisualElementDragControls(visualElement) {
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__.createBox)();
        this.visualElement = visualElement;
    }
    VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
        /**
         * Don't start dragging if this component is exiting
         */
        if (this.visualElement.isPresent === false)
            return;
        var onSessionStart = function (event) {
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            _this.stopAnimation();
            if (snapToCursor) {
                _this.snapToCursor((0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_2__.extractEventInfo)(event, "page").point);
            }
        };
        var onStart = function (event, info) {
            var _a;
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _b = _this.getProps(), drag = _b.drag, dragPropagation = _b.dragPropagation, onDragStart = _b.onDragStart;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = (0,_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_3__.getGlobalLock)(drag);
                // If we don 't have the lock, don't start dragging
                if (!_this.openGlobalLock)
                    return;
            }
            _this.isDragging = true;
            _this.currentDirection = null;
            _this.resolveConstraints();
            if (_this.visualElement.projection) {
                _this.visualElement.projection.isAnimationBlocked = true;
                _this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */
            (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                var _a, _b;
                var current = _this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (style_value_types__WEBPACK_IMPORTED_MODULE_5__.percent.test(current)) {
                    var measuredAxis = (_b = (_a = _this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.actual[axis];
                    if (measuredAxis) {
                        var length_1 = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_6__.calcLength)(measuredAxis);
                        current = length_1 * (parseFloat(current) / 100);
                    }
                }
                _this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
            (_a = _this.visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__.AnimationType.Drag, true);
        };
        var onMove = function (event, info) {
            // latestPointerEvent = event
            var _a = _this.getProps(), dragPropagation = _a.dragPropagation, dragDirectionLock = _a.dragDirectionLock, onDirectionLock = _a.onDirectionLock, onDrag = _a.onDrag;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            _this.updateAxis("x", info.point, offset);
            _this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            _this.visualElement.syncRender();
            /**
             * This must fire after the syncRender call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
        };
        var onSessionEnd = function (event, info) {
            return _this.stop(event, info);
        };
        this.panSession = new _PanSession_mjs__WEBPACK_IMPORTED_MODULE_8__.PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onSessionEnd: onSessionEnd,
        }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    };
    VisualElementDragControls.prototype.stop = function (event, info) {
        var isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
            return;
        var velocity = info.velocity;
        this.startAnimation(velocity);
        var onDragEnd = this.getProps().onDragEnd;
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
    };
    VisualElementDragControls.prototype.cancel = function () {
        var _a, _b;
        this.isDragging = false;
        if (this.visualElement.projection) {
            this.visualElement.projection.isAnimationBlocked = false;
        }
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = undefined;
        var dragPropagation = this.getProps().dragPropagation;
        if (!dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__.AnimationType.Drag, false);
    };
    VisualElementDragControls.prototype.updateAxis = function (axis, _point, offset) {
        var drag = this.getProps().drag;
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        var axisValue = this.getAxisMotionValue(axis);
        var next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.applyConstraints)(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    };
    VisualElementDragControls.prototype.resolveConstraints = function () {
        var _this = this;
        var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
        var layout = (this.visualElement.projection || {}).layout;
        var prevConstraints = this.constraints;
        if (dragConstraints && (0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcRelativeConstraints)(layout.actual, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.resolveDragElastic)(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (prevConstraints !== this.constraints &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                if (_this.getAxisMotionValue(axis)) {
                    _this.constraints[axis] = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.rebaseAxisConstraints)(layout.actual[axis], _this.constraints[axis]);
                }
            });
        }
    };
    VisualElementDragControls.prototype.resolveRefConstraints = function () {
        var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
        if (!constraints || !(0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(constraints))
            return false;
        var constraintsElement = constraints.current;
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        var projection = this.visualElement.projection;
        // TODO
        if (!projection || !projection.layout)
            return false;
        var constraintsBox = (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_11__.measurePageBox)(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        var measuredConstraints = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcViewportConstraints)(projection.layout.actual, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            var userConstraints = onMeasureDragConstraints((0,_projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.convertBoxToBoundingBox)(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = (0,_projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.convertBoundingBoxToBox)(userConstraints);
            }
        }
        return measuredConstraints;
    };
    VisualElementDragControls.prototype.startAnimation = function (velocity) {
        var _this = this;
        var _a = this.getProps(), drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
        var constraints = this.constraints || {};
        var momentumAnimations = (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            var _a;
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
            if (dragSnapToOrigin)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var inertia = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_13__.__assign)({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness, bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return _this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    };
    VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        return (0,_animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_14__.startAnimation)(axis, axisValue, 0, transition);
    };
    VisualElementDragControls.prototype.stopAnimation = function () {
        var _this = this;
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) { return _this.getAxisMotionValue(axis).stop(); });
    };
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a, _b;
        var dragKey = "_drag" + axis.toUpperCase();
        var externalMotionValue = this.visualElement.getProps()[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
    };
    VisualElementDragControls.prototype.snapToCursor = function (point) {
        var _this = this;
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            var drag = _this.getProps().drag;
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, _this.currentDirection))
                return;
            var projection = _this.visualElement.projection;
            var axisValue = _this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                var _a = projection.layout.actual[axis], min = _a.min, max = _a.max;
                axisValue.set(point[axis] - (0,popmotion__WEBPACK_IMPORTED_MODULE_15__.mix)(min, max, 0.5));
            }
        });
    };
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    VisualElementDragControls.prototype.scalePositionWithinConstraints = function () {
        var _this = this;
        var _a;
        var _b = this.getProps(), drag = _b.drag, dragConstraints = _b.dragConstraints;
        var projection = this.visualElement.projection;
        if (!(0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        var boxProgress = { x: 0, y: 0 };
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
                var latest = axisValue.get();
                boxProgress[axis] = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcOrigin)({ min: latest, max: latest }, _this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        var transformTemplate = this.visualElement.getProps().transformTemplate;
        this.visualElement.getInstance().style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            var axisValue = _this.getAxisMotionValue(axis);
            var _a = _this.constraints[axis], min = _a.min, max = _a.max;
            axisValue.set((0,popmotion__WEBPACK_IMPORTED_MODULE_15__.mix)(min, max, boxProgress[axis]));
        });
    };
    VisualElementDragControls.prototype.addListeners = function () {
        var _this = this;
        var _a;
        elementDragControls.set(this.visualElement, this);
        var element = this.visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_16__.addPointerEvent)(element, "pointerdown", function (event) {
            var _a = _this.getProps(), drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        var measureDragConstraints = function () {
            var dragConstraints = _this.getProps().dragConstraints;
            if ((0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints)) {
                _this.constraints = _this.resolveRefConstraints();
            }
        };
        var projection = this.visualElement.projection;
        var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
            projection.updateLayout();
        }
        measureDragConstraints();
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = (0,_events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_17__.addDomEvent)(window, "resize", function () {
            _this.scalePositionWithinConstraints();
        });
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        projection.addEventListener("didUpdate", (function (_a) {
            var delta = _a.delta, hasLayoutChanged = _a.hasLayoutChanged;
            if (_this.isDragging && hasLayoutChanged) {
                (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                    var motionValue = _this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    _this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                _this.visualElement.syncRender();
            }
        }));
        return function () {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
        };
    };
    VisualElementDragControls.prototype.getProps = function () {
        var props = this.visualElement.getProps();
        var _a = props.drag, drag = _a === void 0 ? false : _a, _b = props.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e = props.dragElastic, dragElastic = _e === void 0 ? _utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.defaultElastic : _e, _f = props.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_13__.__assign)({}, props), { drag: drag, dragDirectionLock: dragDirectionLock, dragPropagation: dragPropagation, dragConstraints: dragConstraints, dragElastic: dragElastic, dragMomentum: dragMomentum });
    };
    return VisualElementDragControls;
}());
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrag": () => (/* binding */ useDrag)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _VisualElementDragControls_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisualElementDragControls.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");




/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement = props.visualElement;
    var dragControls = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.useConstant)(function () { return new _VisualElementDragControls_mjs__WEBPACK_IMPORTED_MODULE_2__.VisualElementDragControls(visualElement); });
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls, groupDragControls]);
    // Apply the event listeners to the element
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return dragControls.addListeners(); }, [dragControls]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyConstraints": () => (/* binding */ applyConstraints),
/* harmony export */   "calcOrigin": () => (/* binding */ calcOrigin),
/* harmony export */   "calcRelativeAxisConstraints": () => (/* binding */ calcRelativeAxisConstraints),
/* harmony export */   "calcRelativeConstraints": () => (/* binding */ calcRelativeConstraints),
/* harmony export */   "calcViewportAxisConstraints": () => (/* binding */ calcViewportAxisConstraints),
/* harmony export */   "calcViewportConstraints": () => (/* binding */ calcViewportConstraints),
/* harmony export */   "defaultElastic": () => (/* binding */ defaultElastic),
/* harmony export */   "rebaseAxisConstraints": () => (/* binding */ rebaseAxisConstraints),
/* harmony export */   "resolveAxisElastic": () => (/* binding */ resolveAxisElastic),
/* harmony export */   "resolveDragElastic": () => (/* binding */ resolveDragElastic),
/* harmony export */   "resolvePointElastic": () => (/* binding */ resolvePointElastic)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/progress.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/clamp.mjs");
/* harmony import */ var _projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projection/geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");




/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)([max, min], 2), min = _a[0], max = _a[1];
    }
    return { min: min, max: max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_2__.calcLength)(source);
    var targetLength = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_2__.calcLength)(target);
    if (targetLength > sourceLength) {
        origin = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.progress)(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.progress)(source.min, source.max - targetLength, target.min);
    }
    return (0,popmotion__WEBPACK_IMPORTED_MODULE_4__.clamp)(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
var defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic) {
    if (dragElastic === void 0) { dragElastic = defaultElastic; }
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    var _a;
    return typeof dragElastic === "number"
        ? dragElastic
        : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLock": () => (/* binding */ createLock),
/* harmony export */   "getGlobalLock": () => (/* binding */ getGlobalLock),
/* harmony export */   "isDragActive": () => (/* binding */ isDragActive)
/* harmony export */ });
function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFocusGesture": () => (/* binding */ useFocusGesture)
/* harmony export */ });
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/use-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs");



/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useFocusGesture(_a) {
    var whileFocus = _a.whileFocus, visualElement = _a.visualElement;
    var onFocus = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus, true);
    };
    var onBlur = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus, false);
    };
    (0,_events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(visualElement, "focus", whileFocus ? onFocus : undefined);
    (0,_events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(visualElement, "blur", whileFocus ? onBlur : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHoverGesture": () => (/* binding */ useHoverGesture)
/* harmony export */ });
/* harmony import */ var _utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/event-type.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var _drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag/utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");





function createHoverEvent(visualElement, isActive, callback) {
    return function (event, info) {
        var _a;
        if (!(0,_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_0__.isMouseEvent)(event) || (0,_drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_1__.isDragActive)())
            return;
        /**
         * Ensure we trigger animations before firing event callback
         */
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_2__.AnimationType.Hover, isActive);
        callback === null || callback === void 0 ? void 0 : callback(event, info);
    };
}
function useHoverGesture(_a) {
    var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement = _a.visualElement;
    (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerenter", onHoverStart || whileHover
        ? createHoverEvent(visualElement, true, onHoverStart)
        : undefined);
    (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerleave", onHoverEnd || whileHover
        ? createHoverEvent(visualElement, false, onHoverEnd)
        : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePanGesture": () => (/* binding */ usePanGesture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/use-unmount-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var _PanSession_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanSession.mjs */ "./node_modules/framer-motion/dist/es/gestures/PanSession.mjs");






/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement = _a.visualElement;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var transformPagePoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionConfigContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new _PanSession_mjs__WEBPACK_IMPORTED_MODULE_2__.PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerdown", hasPanEvents && onPointerDown);
    (0,_utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_4__.useUnmountEffect)(function () { return panSession.current && panSession.current.end(); });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTapGesture": () => (/* binding */ useTapGesture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_is_node_or_child_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-node-or-child.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var _utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/use-unmount-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.mjs");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag/utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");








/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement = _a.visualElement;
    var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isPressing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var cancelPointerEndListeners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    function removePointerEndListener() {
        var _a;
        (_a = cancelPointerEndListeners.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEndListeners);
        cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
        var _a;
        removePointerEndListener();
        isPressing.current = false;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Tap, false);
        return !(0,_drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_2__.isDragActive)();
    }
    function onPointerUp(event, info) {
        if (!checkPointerEnd())
            return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !(0,_utils_is_node_or_child_mjs__WEBPACK_IMPORTED_MODULE_3__.isNodeOrChild)(visualElement.getInstance(), event.target)
            ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info)
            : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
        if (!checkPointerEnd())
            return;
        onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
        var _a;
        removePointerEndListener();
        if (isPressing.current)
            return;
        isPressing.current = true;
        cancelPointerEndListeners.current = (0,popmotion__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointerup", onPointerUp), (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointercancel", onPointerCancel));
        /**
         * Ensure we trigger animations before firing event callback
         */
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Tap, true);
        onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
    }
    (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.usePointerEvent)(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined);
    (0,_utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_6__.useUnmountEffect)(removePointerEndListener);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMouseEvent": () => (/* binding */ isMouseEvent),
/* harmony export */   "isTouchEvent": () => (/* binding */ isTouchEvent)
/* harmony export */ });
function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeOrChild": () => (/* binding */ isNodeOrChild)
/* harmony export */ });
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animations.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animations.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animations": () => (/* binding */ animations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _render_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/animation-state.mjs */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/make-renderless-component.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs");









var animations = {
    animation: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_1__.makeRenderlessComponent)(function (_a) {
        var visualElement = _a.visualElement, animate = _a.animate;
        /**
         * We dynamically generate the AnimationState manager as it contains a reference
         * to the underlying animation library. We only want to load that if we load this,
         * so people can optionally code split it out using the `m` component.
         */
        visualElement.animationState || (visualElement.animationState = (0,_render_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createAnimationState)(visualElement));
        /**
         * Subscribe any provided AnimationControls to the component's VisualElement
         */
        if ((0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_3__.isAnimationControls)(animate)) {
            (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return animate.subscribe(visualElement); }, [animate]);
        }
    }),
    exit: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_1__.makeRenderlessComponent)(function (props) {
        var custom = props.custom, visualElement = props.visualElement;
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_5__.usePresence)(), 2), isPresent = _a[0], safeToRemove = _a[1];
        var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_6__.PresenceContext);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            var _a, _b;
            visualElement.isPresent = isPresent;
            var animation = (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__.AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
            !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
        }, [isPresent]);
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/definitions.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featureDefinitions": () => (/* binding */ featureDefinitions),
/* harmony export */   "loadFeatures": () => (/* binding */ loadFeatures)
/* harmony export */ });
var createDefinition = function (propNames) { return ({
    isEnabled: function (props) { return propNames.some(function (name) { return !!props[name]; }); },
}); };
var featureDefinitions = {
    measureLayout: createDefinition(["layout", "layoutId", "drag"]),
    animation: createDefinition([
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
    ]),
    inView: createDefinition([
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
    ]),
};
function loadFeatures(features) {
    for (var key in features) {
        if (features[key] === null)
            continue;
        if (key === "projectionNodeConstructor") {
            featureDefinitions.projectionNodeConstructor = features[key];
        }
        else {
            featureDefinitions[key].Component = features[key];
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/drag.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/drag.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* binding */ drag)
/* harmony export */ });
/* harmony import */ var _gestures_drag_use_drag_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/drag/use-drag.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs");
/* harmony import */ var _gestures_use_pan_gesture_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-pan-gesture.mjs */ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs");
/* harmony import */ var _utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/make-renderless-component.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs");




var drag = {
    pan: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_pan_gesture_mjs__WEBPACK_IMPORTED_MODULE_1__.usePanGesture),
    drag: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_drag_use_drag_mjs__WEBPACK_IMPORTED_MODULE_2__.useDrag),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/gestures.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/gestures.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gestureAnimations": () => (/* binding */ gestureAnimations)
/* harmony export */ });
/* harmony import */ var _gestures_use_focus_gesture_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestures/use-focus-gesture.mjs */ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs");
/* harmony import */ var _gestures_use_hover_gesture_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gestures/use-hover-gesture.mjs */ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs");
/* harmony import */ var _gestures_use_tap_gesture_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/use-tap-gesture.mjs */ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs");
/* harmony import */ var _viewport_use_viewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport/use-viewport.mjs */ "./node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs");
/* harmony import */ var _utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/make-renderless-component.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs");






var gestureAnimations = {
    inView: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_viewport_use_viewport_mjs__WEBPACK_IMPORTED_MODULE_1__.useViewport),
    tap: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_tap_gesture_mjs__WEBPACK_IMPORTED_MODULE_2__.useTapGesture),
    focus: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_focus_gesture_mjs__WEBPACK_IMPORTED_MODULE_3__.useFocusGesture),
    hover: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_hover_gesture_mjs__WEBPACK_IMPORTED_MODULE_4__.useHoverGesture),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeasureLayout": () => (/* binding */ MeasureLayout)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AnimatePresence/use-presence.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/SwitchLayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs");
/* harmony import */ var _projection_node_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projection/node/create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../projection/styles/scale-border-radius.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs");
/* harmony import */ var _projection_styles_scale_box_shadow_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../projection/styles/scale-box-shadow.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs");
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projection/styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");











var MeasureLayoutWithContext = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MeasureLayoutWithContext, _super);
    function MeasureLayoutWithContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    MeasureLayoutWithContext.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, visualElement = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
        var projection = visualElement.projection;
        (0,_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_3__.addScaleCorrector)(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
                layoutGroup.group.add(projection);
            if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
                switchLayoutGroup.register(projection);
            }
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", function () {
                _this.safeToRemove();
            });
            projection.setOptions((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, projection.options), { onExitComplete: function () { return _this.safeToRemove(); } }));
        }
        _projection_node_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_4__.globalProjectionState.hasEverUpdated = true;
    };
    MeasureLayoutWithContext.prototype.getSnapshotBeforeUpdate = function (prevProps) {
        var _this = this;
        var _a = this.props, layoutDependency = _a.layoutDependency, visualElement = _a.visualElement, drag = _a.drag, isPresent = _a.isPresent;
        var projection = visualElement.projection;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(function () {
                    var _a;
                    if (!((_a = projection.getStack()) === null || _a === void 0 ? void 0 : _a.members.length)) {
                        _this.safeToRemove();
                    }
                });
            }
        }
        return null;
    };
    MeasureLayoutWithContext.prototype.componentDidUpdate = function () {
        var projection = this.props.visualElement.projection;
        if (projection) {
            projection.root.didUpdate();
            if (!projection.currentAnimation && projection.isLead()) {
                this.safeToRemove();
            }
        }
    };
    MeasureLayoutWithContext.prototype.componentWillUnmount = function () {
        var _a = this.props, visualElement = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
        var projection = visualElement.projection;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    };
    MeasureLayoutWithContext.prototype.safeToRemove = function () {
        var safeToRemove = this.props.safeToRemove;
        safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
    };
    MeasureLayoutWithContext.prototype.render = function () {
        return null;
    };
    return MeasureLayoutWithContext;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component));
function MeasureLayout(props) {
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,_components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_5__.usePresence)(), 2), isPresent = _a[0], safeToRemove = _a[1];
    var layoutGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_6__.LayoutGroupContext);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(MeasureLayoutWithContext, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, { layoutGroup: layoutGroup, switchLayoutGroup: (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_7__.SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove })));
}
var defaultScaleCorrectors = {
    borderRadius: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius), { applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ] }),
    borderTopLeftRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius,
    borderTopRightRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius,
    borderBottomLeftRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius,
    borderBottomRightRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius,
    boxShadow: _projection_styles_scale_box_shadow_mjs__WEBPACK_IMPORTED_MODULE_9__.correctBoxShadow,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/index.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/index.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layoutFeatures": () => (/* binding */ layoutFeatures)
/* harmony export */ });
/* harmony import */ var _MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeasureLayout.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs");


var layoutFeatures = {
    measureLayout: _MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_0__.MeasureLayout,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/use-features.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/use-features.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFeatures": () => (/* binding */ useFeatures)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _definitions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/LazyContext.mjs */ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs");







var featureNames = Object.keys(_definitions_mjs__WEBPACK_IMPORTED_MODULE_2__.featureDefinitions);
var numFeatures = featureNames.length;
/**
 * Load features via renderless components based on the provided MotionProps.
 */
function useFeatures(props, visualElement, preloadedFeatures) {
    var features = [];
    var lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_3__.LazyContext);
    if (!visualElement)
        return null;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if ( true &&
        preloadedFeatures &&
        lazyContext.strict) {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (var i = 0; i < numFeatures; i++) {
        var name_1 = featureNames[i];
        var _a = _definitions_mjs__WEBPACK_IMPORTED_MODULE_2__.featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
        /**
         * It might be possible in the future to use this moment to
         * dynamically request functionality. In initial tests this
         * was producing a lot of duplication amongst bundles.
         */
        if (isEnabled(props) && Component) {
            features.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ key: name_1 }, props, { visualElement: visualElement })));
        }
    }
    return features;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/use-projection.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/use-projection.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProjection": () => (/* binding */ useProjection)
/* harmony export */ });
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/SwitchLayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs");




function useProjection(projectionId, _a, visualElement, ProjectionNodeConstructor) {
    var _b;
    var layoutId = _a.layoutId, layout = _a.layout, drag = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
    var initialPromotionConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_1__.SwitchLayoutGroupContext);
    if (!ProjectionNodeConstructor ||
        !visualElement ||
        (visualElement === null || visualElement === void 0 ? void 0 : visualElement.projection)) {
        return;
    }
    visualElement.projection = new ProjectionNodeConstructor(projectionId, visualElement.getLatestValues(), (_b = visualElement.parent) === null || _b === void 0 ? void 0 : _b.projection);
    visualElement.projection.setOptions({
        layoutId: layoutId,
        layout: layout,
        alwaysMeasureLayout: Boolean(drag) || (dragConstraints && (0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_2__.isRefObject)(dragConstraints)),
        visualElement: visualElement,
        scheduleRender: function () { return visualElement.scheduleRender(); },
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig: initialPromotionConfig,
        layoutScroll: layoutScroll,
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeIntersection": () => (/* binding */ observeIntersection)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");


/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
var observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
var observers = new WeakMap();
var fireObserverCallback = function (entry) {
    var _a;
    (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
};
var fireAllObserverCallbacks = function (entries) {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
    var root = _a.root, options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["root"]);
    var lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    var rootObservers = observers.get(lookupRoot);
    var key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ root: root }, options));
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    var rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return function () {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useViewport": () => (/* binding */ useViewport)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _observers_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.mjs */ "./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs");





function useViewport(_a) {
    var visualElement = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport = _b === void 0 ? {} : _b;
    var state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        hasEnteredView: false,
        isInView: false,
    });
    var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
    if (viewport.once && state.current.hasEnteredView)
        shouldObserve = false;
    var useObserver = typeof IntersectionObserver === "undefined"
        ? useMissingIntersectionObserver
        : useIntersectionObserver;
    useObserver(shouldObserve, state.current, visualElement, viewport);
}
var thresholdNames = {
    some: 0,
    all: 1,
};
function useIntersectionObserver(shouldObserve, state, visualElement, _a) {
    var root = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once = _a.once;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!shouldObserve)
            return;
        var options = {
            root: root === null || root === void 0 ? void 0 : root.current,
            rootMargin: rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        var intersectionCallback = function (entry) {
            var _a;
            var isIntersecting = entry.isIntersecting;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (state.isInView === isIntersecting)
                return;
            state.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && state.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                state.hasEnteredView = true;
            }
            (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__.AnimationType.InView, isIntersecting);
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            var props = visualElement.getProps();
            var callback = isIntersecting
                ? props.onViewportEnter
                : props.onViewportLeave;
            callback === null || callback === void 0 ? void 0 : callback(entry);
        };
        return (0,_observers_mjs__WEBPACK_IMPORTED_MODULE_2__.observeIntersection)(visualElement.getInstance(), options, intersectionCallback);
    }, [shouldObserve, root, rootMargin, amount]);
}
/**
 * If IntersectionObserver is missing, we activate inView and fire onViewportEnter
 * on mount. This way, the page will be in the state the author expects users
 * to see it in for everyone.
 */
function useMissingIntersectionObserver(shouldObserve, state, visualElement) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!shouldObserve)
            return;
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_3__.warnOnce)(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
        }
        /**
         * Fire this in an rAF because, at this point, the animation state
         * won't have flushed for the first time and there's certain logic in
         * there that behaves differently on the initial animation.
         *
         * This hook should be quite rarely called so setting this in an rAF
         * is preferred to changing the behaviour of the animation state.
         */
        requestAnimationFrame(function () {
            var _a;
            state.hasEnteredView = true;
            var onViewportEnter = visualElement.getProps().onViewportEnter;
            onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
            (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__.AnimationType.InView, true);
        });
    }, [shouldObserve]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMotionComponent": () => (/* binding */ createMotionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _features_use_features_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/use-features.mjs */ "./node_modules/framer-motion/dist/es/motion/features/use-features.mjs");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_use_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/use-visual-element.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs");
/* harmony import */ var _utils_use_motion_ref_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/use-motion-ref.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs");
/* harmony import */ var _context_MotionContext_create_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/MotionContext/create.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs");
/* harmony import */ var _features_definitions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");
/* harmony import */ var _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _projection_node_id_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projection/node/id.mjs */ "./node_modules/framer-motion/dist/es/projection/node/id.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _features_use_projection_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/use-projection.mjs */ "./node_modules/framer-motion/dist/es/motion/features/use-projection.mjs");
/* harmony import */ var _utils_VisualElementHandler_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/VisualElementHandler.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs");
















/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && (0,_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_1__.loadFeatures)(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        var layoutId = useLayoutId(props);
        props = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props), { layoutId: layoutId });
        /**
         * If we're rendering in a static environment, we only visually update the component
         * as a result of a React-rerender rather than interactions or animations. This
         * means we don't need to load additional memory structures like VisualElement,
         * or any gesture/animation features.
         */
        var config = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__.MotionConfigContext);
        var features = null;
        var context = (0,_context_MotionContext_create_mjs__WEBPACK_IMPORTED_MODULE_4__.useCreateMotionContext)(props);
        /**
         * Create a unique projection ID for this component. If a new component is added
         * during a layout animation we'll use this to query the DOM and hydrate its ref early, allowing
         * us to measure it as soon as any layout effect flushes pending layout animations.
         *
         * Performance note: It'd be better not to have to search the DOM for these elements.
         * For newly-entering components it could be enough to only correct treeScale, in which
         * case we could mount in a scale-correction mode. This wouldn't be enough for
         * shared element transitions however. Perhaps for those we could revert to a root node
         * that gets forceRendered and layout animations are triggered on its layout effect.
         */
        var projectionId = (0,_projection_node_id_mjs__WEBPACK_IMPORTED_MODULE_5__.useProjectionId)();
        /**
         *
         */
        var visualState = useVisualState(props, config.isStatic);
        if (!config.isStatic && _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_6__.isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = (0,_utils_use_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__.useVisualElement)(Component, visualState, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, config), props), createVisualElement);
            (0,_features_use_projection_mjs__WEBPACK_IMPORTED_MODULE_8__.useProjection)(projectionId, props, context.visualElement, projectionNodeConstructor ||
                _features_definitions_mjs__WEBPACK_IMPORTED_MODULE_1__.featureDefinitions.projectionNodeConstructor);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */
            features = (0,_features_use_features_mjs__WEBPACK_IMPORTED_MODULE_9__.useFeatures)(props, context.visualElement, preloadedFeatures);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_VisualElementHandler_mjs__WEBPACK_IMPORTED_MODULE_10__.VisualElementHandler, { visualElement: context.visualElement, props: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, config), props) },
            features,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_11__.MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, (0,_utils_use_motion_ref_mjs__WEBPACK_IMPORTED_MODULE_12__.useMotionRef)(visualState, context.visualElement, externalRef), visualState, config.isStatic))));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(MotionComponent);
}
function useLayoutId(_a) {
    var _b;
    var layoutId = _a.layoutId;
    var layoutGroupId = (_b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_13__.LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualElementHandler": () => (/* binding */ VisualElementHandler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");



var VisualElementHandler = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(VisualElementHandler, _super);
    function VisualElementHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Update visual element props as soon as we know this update is going to be commited.
     */
    VisualElementHandler.prototype.getSnapshotBeforeUpdate = function () {
        this.updateProps();
        return null;
    };
    VisualElementHandler.prototype.componentDidUpdate = function () { };
    VisualElementHandler.prototype.updateProps = function () {
        var _a = this.props, visualElement = _a.visualElement, props = _a.props;
        if (visualElement)
            visualElement.setProps(props);
    };
    VisualElementHandler.prototype.render = function () {
        return this.props.children;
    };
    return VisualElementHandler;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isForcedMotionValue": () => (/* binding */ isForcedMotionValue)
/* harmony export */ });
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");



function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return ((0,_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.isTransformProp)(key) ||
        (0,_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.isTransformOriginProp)(key) ||
        ((layout || layoutId !== undefined) &&
            (!!_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__.scaleCorrectors[key] || key === "opacity")));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeRenderlessComponent": () => (/* binding */ makeRenderlessComponent)
/* harmony export */ });
var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMotionRef": () => (/* binding */ useMotionRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (instance) {
        var _a;
        instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if ((0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_1__.isRefObject)(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVisualElement": () => (/* binding */ useVisualElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
/* harmony import */ var _context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/LazyContext.mjs */ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs");






function useVisualElement(Component, visualState, props, createVisualElement) {
    var lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_1__.LazyContext);
    var parent = (0,_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_2__.useVisualElementContext)();
    var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__.PresenceContext);
    var visualElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    if (!createVisualElement)
        createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState: visualState,
            parent: parent,
            props: props,
            presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
            blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
        });
    }
    var visualElement = visualElementRef.current;
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(function () {
        visualElement === null || visualElement === void 0 ? void 0 : visualElement.syncRender();
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var _a;
        (_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(function () { return function () { return visualElement === null || visualElement === void 0 ? void 0 : visualElement.notifyUnmount(); }; }, []);
    return visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUseVisualState": () => (/* binding */ makeUseVisualState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/utils/variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");









function makeState(_a, props, context, presenceContext) {
    var scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
    var state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = function (instance) { return onMount(props, instance, state); };
    }
    return state;
}
var makeUseVisualState = function (config) {
    return function (props, isStatic) {
        var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionContext);
        var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_2__.PresenceContext);
        return isStatic
            ? makeState(config, props, context, presenceContext)
            : (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__.useConstant)(function () {
                return makeState(config, props, context, presenceContext);
            });
    };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
    var motionValues = scrapeMotionValues(props);
    for (var key in motionValues) {
        values[key] = (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.resolveMotionValue)(motionValues[key]);
    }
    var initial = props.initial, animate = props.animate;
    var isControllingVariants = (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.checkIfControllingVariants)(props);
    var isVariantNode = (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.checkIfVariantNode)(props);
    if (context &&
        isVariantNode &&
        !isControllingVariants &&
        props.inherit !== false) {
        initial !== null && initial !== void 0 ? initial : (initial = context.initial);
        animate !== null && animate !== void 0 ? animate : (animate = context.animate);
    }
    var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
    var variantToSet = initialAnimationIsBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !(0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_6__.isAnimationControls)(variantToSet)) {
        var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach(function (definition) {
            var resolved = (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.resolveVariantFromProps)(props, definition);
            if (!resolved)
                return;
            var transitionEnd = resolved.transitionEnd; resolved.transition; var target = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(resolved, ["transitionEnd", "transition"]);
            for (var key in target) {
                var valueTarget = target[key];
                if (Array.isArray(valueTarget)) {
                    /**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */
                    var index = initialAnimationIsBlocked
                        ? valueTarget.length - 1
                        : 0;
                    valueTarget = valueTarget[index];
                }
                if (valueTarget !== null) {
                    values[key] = valueTarget;
                }
            }
            for (var key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidMotionProp": () => (/* binding */ isValidMotionProp)
/* harmony export */ });
/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "layoutDependency",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "dragSnapToOrigin",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
    "whileInView",
    "onViewportEnter",
    "onViewportLeave",
    "viewport",
    "layoutScroll",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixValues": () => (/* binding */ mixValues)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/index.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/progress.mjs");


var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    var _a, _b, _c, _d;
    if (shouldCrossfadeOpacity) {
        target.opacity = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(0, 
        // (follow?.opacity as number) ?? 0,
        // TODO Reinstate this if only child
        (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress));
        target.opacityExit = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress);
    }
    /**
     * Mix border radius
     */
    for (var i = 0; i < numBorders; i++) {
        var borderLabel = "border".concat(borders[i], "Radius");
        var followRadius = getRadius(follow, borderLabel);
        var leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        /**
         * Currently we're only crossfading between numerical border radius.
         * It would be possible to crossfade between percentages for a little
         * extra bundle size.
         */
        if (typeof followRadius === "number" &&
            typeof leadRadius === "number") {
            var radius = Math.max((0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(followRadius, leadRadius, progress), 0);
            target[borderLabel] = radius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    var _a;
    return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
var easeCrossfadeIn = compress(0, 0.5, popmotion__WEBPACK_IMPORTED_MODULE_1__.circOut);
var easeCrossfadeOut = compress(0.5, 0.95, popmotion__WEBPACK_IMPORTED_MODULE_1__.linear);
function compress(min, max, easing) {
    return function (p) {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing((0,popmotion__WEBPACK_IMPORTED_MODULE_2__.progress)(min, max, p));
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertBoundingBoxToBox": () => (/* binding */ convertBoundingBoxToBox),
/* harmony export */   "convertBoxToBoundingBox": () => (/* binding */ convertBoxToBoundingBox),
/* harmony export */   "transformBoxPoints": () => (/* binding */ transformBoxPoints)
/* harmony export */ });
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    var topLeft = transformPoint({ x: point.left, y: point.top });
    var bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyAxisInto": () => (/* binding */ copyAxisInto),
/* harmony export */   "copyBoxInto": () => (/* binding */ copyBoxInto)
/* harmony export */ });
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyAxisDelta": () => (/* binding */ applyAxisDelta),
/* harmony export */   "applyBoxDelta": () => (/* binding */ applyBoxDelta),
/* harmony export */   "applyPointDelta": () => (/* binding */ applyPointDelta),
/* harmony export */   "applyTreeDeltas": () => (/* binding */ applyTreeDeltas),
/* harmony export */   "scalePoint": () => (/* binding */ scalePoint),
/* harmony export */   "transformAxis": () => (/* binding */ transformAxis),
/* harmony export */   "transformBox": () => (/* binding */ transformBox),
/* harmony export */   "translateAxis": () => (/* binding */ translateAxis)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs");




/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
    var _a, _b;
    if (isSharedTransition === void 0) { isSharedTransition = false; }
    var treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    var node;
    var delta;
    for (var i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
            continue;
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.hasTransform)(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, transforms, _a) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    var originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform, xKeys);
    transformAxis(box.y, transform, yKeys);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcAxisDelta": () => (/* binding */ calcAxisDelta),
/* harmony export */   "calcBoxDelta": () => (/* binding */ calcBoxDelta),
/* harmony export */   "calcLength": () => (/* binding */ calcLength),
/* harmony export */   "calcRelativeAxis": () => (/* binding */ calcRelativeAxis),
/* harmony export */   "calcRelativeAxisPosition": () => (/* binding */ calcRelativeAxisPosition),
/* harmony export */   "calcRelativeBox": () => (/* binding */ calcRelativeBox),
/* harmony export */   "calcRelativePosition": () => (/* binding */ calcRelativePosition),
/* harmony export */   "isNear": () => (/* binding */ isNear)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/distance.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");


function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    if (target === void 0) { target = 0; }
    if (maxDistance === void 0) { maxDistance = 0.01; }
    return (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.distance)(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin) {
    if (origin === void 0) { origin = 0.5; }
    delta.origin = origin;
    delta.originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale))
        delta.scale = 1;
    delta.translate =
        (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate) || isNaN(delta.translate))
        delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
    calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAxisDelta": () => (/* binding */ removeAxisDelta),
/* harmony export */   "removeAxisTransforms": () => (/* binding */ removeAxisTransforms),
/* harmony export */   "removeBoxTransforms": () => (/* binding */ removeBoxTransforms),
/* harmony export */   "removePointDelta": () => (/* binding */ removePointDelta)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");





/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = (0,_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__.scalePoint)(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = (0,_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__.scalePoint)(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale, originAxis, sourceAxis) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    if (origin === void 0) { origin = 0.5; }
    if (originAxis === void 0) { originAxis = axis; }
    if (sourceAxis === void 0) { sourceAxis = axis; }
    if (style_value_types__WEBPACK_IMPORTED_MODULE_1__.percent.test(translate)) {
        translate = parseFloat(translate);
        var relativeProgress = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    var originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
    removeAxisTransforms(box.y, transforms, yKeys, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/models.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAxis": () => (/* binding */ createAxis),
/* harmony export */   "createAxisDelta": () => (/* binding */ createAxisDelta),
/* harmony export */   "createBox": () => (/* binding */ createBox),
/* harmony export */   "createDelta": () => (/* binding */ createDelta)
/* harmony export */ });
var createAxisDelta = function () { return ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
}); };
var createDelta = function () { return ({
    x: createAxisDelta(),
    y: createAxisDelta(),
}); };
var createAxis = function () { return ({ min: 0, max: 0 }); };
var createBox = function () { return ({
    x: createAxis(),
    y: createAxis(),
}); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boxEquals": () => (/* binding */ boxEquals),
/* harmony export */   "isDeltaZero": () => (/* binding */ isDeltaZero)
/* harmony export */ });
function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
    return (a.x.min === b.x.min &&
        a.x.max === b.x.max &&
        a.y.min === b.y.min &&
        a.y.max === b.y.max);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentProjectionNode": () => (/* binding */ DocumentProjectionNode)
/* harmony export */ });
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");


var DocumentProjectionNode = (0,_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__.createProjectionNode)({
    attachResizeListener: function (ref, notify) {
        ref.addEventListener("resize", notify, { passive: true });
        return function () { return ref.removeEventListener("resize", notify); };
    },
    measureScroll: function () { return ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }); },
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLProjectionNode": () => (/* binding */ HTMLProjectionNode),
/* harmony export */   "rootProjectionNode": () => (/* binding */ rootProjectionNode)
/* harmony export */ });
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _DocumentProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs");



var rootProjectionNode = {
    current: undefined,
};
var HTMLProjectionNode = (0,_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__.createProjectionNode)({
    measureScroll: function (instance) { return ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }); },
    defaultParent: function () {
        if (!rootProjectionNode.current) {
            var documentNode = new _DocumentProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_1__.DocumentProjectionNode(0, {});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: function (instance, value) {
        instance.style.transform = value !== null && value !== void 0 ? value : "none";
    },
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectionNode": () => (/* binding */ createProjectionNode),
/* harmony export */   "globalProjectionState": () => (/* binding */ globalProjectionState),
/* harmony export */   "mixAxis": () => (/* binding */ mixAxis),
/* harmony export */   "mixAxisDelta": () => (/* binding */ mixAxisDelta),
/* harmony export */   "mixBox": () => (/* binding */ mixBox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var _animation_animate_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../animation/animate.mjs */ "./node_modules/framer-motion/dist/es/animation/animate.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _animation_mix_values_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../animation/mix-values.mjs */ "./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs");
/* harmony import */ var _geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/copy.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");
/* harmony import */ var _geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");
/* harmony import */ var _geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/delta-remove.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs");
/* harmony import */ var _geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry/utils.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs");
/* harmony import */ var _shared_stack_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/stack.mjs */ "./node_modules/framer-motion/dist/es/projection/shared/stack.mjs");
/* harmony import */ var _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _styles_transform_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/transform.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/transform.mjs");
/* harmony import */ var _utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/each-axis.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs");
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _render_utils_flat_tree_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/flat-tree.mjs */ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs");
/* harmony import */ var _value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs");






















/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
var animationTarget = 1000;
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
var globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};
function createProjectionNode(_a) {
    var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, resetTransform = _a.resetTransform;
    return /** @class */ (function () {
        function ProjectionNode(id, latestValues, parent) {
            var _this = this;
            if (latestValues === void 0) { latestValues = {}; }
            if (parent === void 0) { parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent(); }
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to actually
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            // Note: Currently only running on root node
            this.potentialNodes = new Map();
            this.checkUpdateFailed = function () {
                if (_this.isUpdating) {
                    _this.isUpdating = false;
                    _this.clearAllSnapshots();
                }
            };
            this.updateProjection = function () {
                _this.nodes.forEach(resolveTargetDelta);
                _this.nodes.forEach(calcProjection);
            };
            this.hasProjected = false;
            this.isVisible = true;
            /**
             * Animation
             */
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.id = id;
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(parent.path), false), [parent], false) : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            id && this.root.registerPotentialNode(id, this);
            for (var i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new _render_utils_flat_tree_mjs__WEBPACK_IMPORTED_MODULE_2__.FlatTree();
        }
        ProjectionNode.prototype.addEventListener = function (name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_3__.SubscriptionManager());
            }
            return this.eventHandlers.get(name).add(handler);
        };
        ProjectionNode.prototype.notifyListeners = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args), false));
        };
        ProjectionNode.prototype.hasListeners = function (name) {
            return this.eventHandlers.has(name);
        };
        ProjectionNode.prototype.registerPotentialNode = function (id, node) {
            this.potentialNodes.set(id, node);
        };
        /**
         * Lifecycles
         */
        ProjectionNode.prototype.mount = function (instance, isLayoutDirty) {
            var _this = this;
            var _a;
            if (isLayoutDirty === void 0) { isLayoutDirty = false; }
            if (this.instance)
                return;
            this.isSVG =
                instance instanceof SVGElement && instance.tagName !== "svg";
            this.instance = instance;
            var _b = this.options, layoutId = _b.layoutId, layout = _b.layout, visualElement = _b.visualElement;
            if (visualElement && !visualElement.getInstance()) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.children.add(this);
            this.id && this.root.potentialNodes.delete(this.id);
            if (isLayoutDirty && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                var unblockTimeout_1;
                var resizeUnblockUpdate_1 = function () {
                    return (_this.root.updateBlockedByResize = false);
                };
                attachResizeListener(instance, function () {
                    _this.root.updateBlockedByResize = true;
                    clearTimeout(unblockTimeout_1);
                    unblockTimeout_1 = setTimeout(resizeUnblockUpdate_1, 250);
                    if (globalProjectionState.hasAnimatedSinceResize) {
                        globalProjectionState.hasAnimatedSinceResize = false;
                        _this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", function (_a) {
                    var _b, _c, _d, _e, _f;
                    var delta = _a.delta, hasLayoutChanged = _a.hasLayoutChanged, hasRelativeTargetChanged = _a.hasRelativeTargetChanged, newLayout = _a.layout;
                    if (_this.isTreeAnimationBlocked()) {
                        _this.target = undefined;
                        _this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    var layoutTransition = (_c = (_b = _this.options.transition) !== null && _b !== void 0 ? _b : visualElement.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
                    var onLayoutAnimationComplete = visualElement.getProps().onLayoutAnimationComplete;
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    var targetChanged = !_this.targetLayout ||
                        !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.boxEquals)(_this.targetLayout, newLayout) ||
                        hasRelativeTargetChanged;
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                    if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (targetChanged || !_this.currentAnimation))) {
                        if (_this.resumeFrom) {
                            _this.resumingFrom = _this.resumeFrom;
                            _this.resumingFrom.resumingFrom = undefined;
                        }
                        _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                        _this.startAnimation((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (0,_animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_5__.getValueTransition)(layoutTransition, "layout")), { onComplete: onLayoutAnimationComplete }));
                    }
                    else {
                        _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
                    }
                    _this.targetLayout = newLayout;
                });
            }
        };
        ProjectionNode.prototype.unmount = function () {
            var _a, _b;
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.remove(this);
            (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
            this.instance = undefined;
            framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.preRender(this.updateProjection);
        };
        // only on the root
        ProjectionNode.prototype.blockUpdate = function () {
            this.updateManuallyBlocked = true;
        };
        ProjectionNode.prototype.unblockUpdate = function () {
            this.updateManuallyBlocked = false;
        };
        ProjectionNode.prototype.isUpdateBlocked = function () {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        };
        ProjectionNode.prototype.isTreeAnimationBlocked = function () {
            var _a;
            return (this.isAnimationBlocked ||
                ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimationBlocked()) ||
                false);
        };
        // Note: currently only running on root node
        ProjectionNode.prototype.startUpdate = function () {
            var _a;
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach(resetRotation);
        };
        ProjectionNode.prototype.willUpdate = function (shouldNotifyListeners) {
            var _a, _b, _c;
            if (shouldNotifyListeners === void 0) { shouldNotifyListeners = true; }
            if (this.root.isUpdateBlocked()) {
                (_b = (_a = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
                return;
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (var i = 0; i < this.path.length; i++) {
                var node = this.path[i];
                node.shouldResetTransform = true;
                /**
                 * TODO: Check we haven't updated the scroll
                 * since the last didUpdate
                 */
                node.updateScroll();
            }
            var _d = this.options, layoutId = _d.layoutId, layout = _d.layout;
            if (layoutId === undefined && !layout)
                return;
            var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
            this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        };
        // Note: Currently only running on root node
        ProjectionNode.prototype.didUpdate = function () {
            var updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating)
                return;
            this.isUpdating = false;
            /**
             * Search for and mount newly-added projection elements.
             *
             * TODO: Every time a new component is rendered we could search up the tree for
             * the closest mounted node and query from there rather than document.
             */
            if (this.potentialNodes.size) {
                this.potentialNodes.forEach(mountNodeEarly);
                this.potentialNodes.clear();
            }
            /**
             * Write
             */
            this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */
            // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */
            // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            // Flush any scheduled updates
            framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.update();
            framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.preRender();
            framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.render();
        };
        ProjectionNode.prototype.clearAllSnapshots = function () {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        };
        ProjectionNode.prototype.scheduleUpdateProjection = function () {
            framesync__WEBPACK_IMPORTED_MODULE_0__["default"].preRender(this.updateProjection, false, true);
        };
        ProjectionNode.prototype.scheduleCheckAfterUnmount = function () {
            var _this = this;
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(function () {
                if (_this.isLayoutDirty) {
                    _this.root.didUpdate();
                }
                else {
                    _this.root.checkUpdateFailed();
                }
            });
        };
        /**
         * Update measurements
         */
        ProjectionNode.prototype.updateSnapshot = function () {
            if (this.snapshot || !this.instance)
                return;
            var measured = this.measure();
            var layout = this.removeTransform(this.removeElementScroll(measured));
            roundBox(layout);
            this.snapshot = {
                measured: measured,
                layout: layout,
                latestValues: {},
            };
        };
        ProjectionNode.prototype.updateLayout = function () {
            var _a;
            if (!this.instance)
                return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (var i = 0; i < this.path.length; i++) {
                    var node = this.path[i];
                    node.updateScroll();
                }
            }
            var measured = this.measure();
            roundBox(measured);
            var prevLayout = this.layout;
            this.layout = {
                measured: measured,
                actual: this.removeElementScroll(measured),
            };
            this.layoutCorrected = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure");
            (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
        };
        ProjectionNode.prototype.updateScroll = function () {
            if (this.options.layoutScroll && this.instance) {
                this.scroll = measureScroll(this.instance);
            }
        };
        ProjectionNode.prototype.resetTransform = function () {
            var _a;
            if (!resetTransform)
                return;
            var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
            var hasProjection = this.projectionDelta && !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.isDeltaZero)(this.projectionDelta);
            var transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
            var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
            var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                (hasProjection ||
                    (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        };
        ProjectionNode.prototype.measure = function () {
            var visualElement = this.options.visualElement;
            if (!visualElement)
                return (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            var box = visualElement.measureViewportBox();
            // Remove viewport scroll to give page-relative coordinates
            var scroll = this.root.scroll;
            if (scroll) {
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(box.x, scroll.x);
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(box.y, scroll.y);
            }
            return box;
        };
        ProjectionNode.prototype.removeElementScroll = function (box) {
            var boxWithoutScroll = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(boxWithoutScroll, box);
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (var i = 0; i < this.path.length; i++) {
                var node = this.path[i];
                var scroll_1 = node.scroll, options = node.options;
                if (node !== this.root && scroll_1 && options.layoutScroll) {
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(boxWithoutScroll.x, scroll_1.x);
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(boxWithoutScroll.y, scroll_1.y);
                }
            }
            return boxWithoutScroll;
        };
        ProjectionNode.prototype.applyTransform = function (box, transformOnly) {
            if (transformOnly === void 0) { transformOnly = false; }
            var withTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(withTransforms, box);
            for (var i = 0; i < this.path.length; i++) {
                var node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.transformBox)(withTransforms, {
                        x: -node.scroll.x,
                        y: -node.scroll.y,
                    });
                }
                if (!(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(node.latestValues))
                    continue;
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.transformBox)(withTransforms, node.latestValues);
            }
            if ((0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.latestValues)) {
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.transformBox)(withTransforms, this.latestValues);
            }
            return withTransforms;
        };
        ProjectionNode.prototype.removeTransform = function (box) {
            var _a;
            var boxWithoutTransform = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(boxWithoutTransform, box);
            for (var i = 0; i < this.path.length; i++) {
                var node = this.path[i];
                if (!node.instance)
                    continue;
                if (!(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(node.latestValues))
                    continue;
                (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasScale)(node.latestValues) && node.updateSnapshot();
                var sourceBox = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                var nodeBox = node.measure();
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(sourceBox, nodeBox);
                (0,_geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_10__.removeBoxTransforms)(boxWithoutTransform, node.latestValues, (_a = node.snapshot) === null || _a === void 0 ? void 0 : _a.layout, sourceBox);
            }
            if ((0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.latestValues)) {
                (0,_geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_10__.removeBoxTransforms)(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        };
        /**
         *
         */
        ProjectionNode.prototype.setTargetDelta = function (delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
        };
        ProjectionNode.prototype.setOptions = function (options) {
            var _a;
            this.options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.options), options), { crossfade: (_a = options.crossfade) !== null && _a !== void 0 ? _a : true });
        };
        ProjectionNode.prototype.clearMeasurements = function () {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        };
        /**
         * Frame calculations
         */
        ProjectionNode.prototype.resolveTargetDelta = function () {
            var _a;
            var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            // TODO If this is unsuccessful this currently happens every frame
            if (!this.targetDelta && !this.relativeTarget) {
                // TODO: This is a semi-repetition of further down this function, make DRY
                this.relativeParent = this.getClosestProjectingParent();
                if (this.relativeParent && this.relativeParent.layout) {
                    this.relativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    this.relativeTargetOrigin = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                this.targetWithTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                ((_a = this.relativeParent) === null || _a === void 0 ? void 0 : _a.target)) {
                (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.actual);
                }
                else {
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.target, this.layout.actual);
                }
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.applyBoxDelta)(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.target, this.layout.actual);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                this.relativeParent = this.getClosestProjectingParent();
                if (this.relativeParent &&
                    Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !this.relativeParent.options.layoutScroll &&
                    this.relativeParent.target) {
                    this.relativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    this.relativeTargetOrigin = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(this.relativeTargetOrigin, this.target, this.relativeParent.target);
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                }
            }
        };
        ProjectionNode.prototype.getClosestProjectingParent = function () {
            if (!this.parent || (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.parent.latestValues))
                return undefined;
            if ((this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        };
        ProjectionNode.prototype.calcProjection = function () {
            var _a;
            var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean(((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            var lead = this.getLead();
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.layoutCorrected, this.layout.actual);
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
            var target = lead.target;
            if (!target)
                return;
            if (!this.projectionDelta) {
                this.projectionDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
                this.projectionDeltaWithTransform = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
            }
            var prevTreeScaleX = this.treeScale.x;
            var prevTreeScaleY = this.treeScale.y;
            var prevProjectionTransform = this.projectionTransform;
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            this.projectionTransform = (0,_styles_transform_mjs__WEBPACK_IMPORTED_MODULE_12__.buildProjectionTransform)(this.projectionDelta, this.treeScale);
            if (this.projectionTransform !== prevProjectionTransform ||
                this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY) {
                this.hasProjected = true;
                this.scheduleRender();
            }
        };
        ProjectionNode.prototype.hide = function () {
            this.isVisible = false;
            // TODO: Schedule render
        };
        ProjectionNode.prototype.show = function () {
            this.isVisible = true;
            // TODO: Schedule render
        };
        ProjectionNode.prototype.scheduleRender = function (notifyAll) {
            var _a, _b, _c;
            if (notifyAll === void 0) { notifyAll = true; }
            (_b = (_a = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a);
            notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        };
        ProjectionNode.prototype.setAnimationOrigin = function (delta, hasOnlyRelativeTargetChanged) {
            var _this = this;
            var _a;
            if (hasOnlyRelativeTargetChanged === void 0) { hasOnlyRelativeTargetChanged = false; }
            var snapshot = this.snapshot;
            var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
            var mixedValues = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.latestValues);
            var targetDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
            this.relativeTarget = this.relativeTargetOrigin = undefined;
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            var relativeLayout = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
            var isOnlyMember = (((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.members.length) || 0) <= 1;
            var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.mixTargetDelta = function (latest) {
                var _a;
                var progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                _this.setTargetDelta(targetDelta);
                if (_this.relativeTarget &&
                    _this.relativeTargetOrigin &&
                    _this.layout &&
                    ((_a = _this.relativeParent) === null || _a === void 0 ? void 0 : _a.layout)) {
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
                    mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress);
                }
                if (isSharedLayoutAnimation) {
                    _this.animationValues = mixedValues;
                    (0,_animation_mix_values_mjs__WEBPACK_IMPORTED_MODULE_13__.mixValues)(mixedValues, snapshotLatestValues, _this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                _this.root.scheduleUpdateProjection();
                _this.scheduleRender();
            };
            this.mixTargetDelta(0);
        };
        ProjectionNode.prototype.startAnimation = function (options) {
            var _this = this;
            var _a, _b;
            (_a = this.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
            if (this.resumingFrom) {
                (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
            }
            if (this.pendingAnimation) {
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(function () {
                globalProjectionState.hasAnimatedSinceResize = true;
                _this.currentAnimation = (0,_animation_animate_mjs__WEBPACK_IMPORTED_MODULE_14__.animate)(0, animationTarget, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { onUpdate: function (latest) {
                        var _a;
                        _this.mixTargetDelta(latest);
                        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, latest);
                    }, onComplete: function () {
                        var _a;
                        (_a = options.onComplete) === null || _a === void 0 ? void 0 : _a.call(options);
                        _this.completeAnimation();
                    } }));
                if (_this.resumingFrom) {
                    _this.resumingFrom.currentAnimation = _this.currentAnimation;
                }
                _this.pendingAnimation = undefined;
            });
        };
        ProjectionNode.prototype.completeAnimation = function () {
            var _a;
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
        };
        ProjectionNode.prototype.finishAnimation = function () {
            var _a;
            if (this.currentAnimation) {
                (_a = this.mixTargetDelta) === null || _a === void 0 ? void 0 : _a.call(this, animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        };
        ProjectionNode.prototype.applyTransformsToTarget = function () {
            var _a = this.getLead(), targetWithTransforms = _a.targetWithTransforms, target = _a.target, layout = _a.layout, latestValues = _a.latestValues;
            if (!targetWithTransforms || !target || !layout)
                return;
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.transformBox)(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its actual layout
             * into the desired bounding box.
             */
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        };
        ProjectionNode.prototype.registerSharedNode = function (layoutId, node) {
            var _a, _b, _c;
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new _shared_stack_mjs__WEBPACK_IMPORTED_MODULE_15__.NodeStack());
            }
            var stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            node.promote({
                transition: (_a = node.options.initialPromotionConfig) === null || _a === void 0 ? void 0 : _a.transition,
                preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node),
            });
        };
        ProjectionNode.prototype.isLead = function () {
            var stack = this.getStack();
            return stack ? stack.lead === this : true;
        };
        ProjectionNode.prototype.getLead = function () {
            var _a;
            var layoutId = this.options.layoutId;
            return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
        };
        ProjectionNode.prototype.getPrevLead = function () {
            var _a;
            var layoutId = this.options.layoutId;
            return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
        };
        ProjectionNode.prototype.getStack = function () {
            var layoutId = this.options.layoutId;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        };
        ProjectionNode.prototype.promote = function (_a) {
            var _b = _a === void 0 ? {} : _a, needsReset = _b.needsReset, transition = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
            var stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition: transition });
        };
        ProjectionNode.prototype.relegate = function () {
            var stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        };
        ProjectionNode.prototype.resetRotation = function () {
            var visualElement = this.options.visualElement;
            if (!visualElement)
                return;
            // If there's no detected rotation values, we can early return without a forced render.
            var hasRotate = false;
            // Keep a record of all the values we've reset
            var resetValues = {};
            // Check the rotate value of all axes and reset to 0
            for (var i = 0; i < _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_16__.transformAxes.length; i++) {
                var axis = _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_16__.transformAxes[i];
                var key = "rotate" + axis;
                // If this rotation doesn't exist as a motion value, then we don't
                // need to reset it
                if (!visualElement.getStaticValue(key)) {
                    continue;
                }
                hasRotate = true;
                // Record the rotation and then temporarily set it to 0
                resetValues[key] = visualElement.getStaticValue(key);
                visualElement.setStaticValue(key, 0);
            }
            // If there's no rotation values, we don't need to do any more.
            if (!hasRotate)
                return;
            // Force a render of this element to apply the transform with all rotations
            // set to 0.
            visualElement === null || visualElement === void 0 ? void 0 : visualElement.syncRender();
            // Put back all the values we reset
            for (var key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        };
        ProjectionNode.prototype.getProjectionStyles = function (styleProp) {
            var _a, _b, _c, _d, _e, _f;
            if (styleProp === void 0) { styleProp = {}; }
            // TODO: Return lifecycle-persistent object
            var styles = {};
            if (!this.instance || this.isSVG)
                return styles;
            if (!this.isVisible) {
                return { visibility: "hidden" };
            }
            else {
                styles.visibility = "";
            }
            var transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents =
                    (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_17__.resolveMotionValue)(styleProp.pointerEvents) || "";
                styles.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return styles;
            }
            var lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                var emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
                    emptyStyles.pointerEvents =
                        (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_17__.resolveMotionValue)(styleProp.pointerEvents) || "";
                }
                if (this.hasProjected && !(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.latestValues)) {
                    emptyStyles.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            var valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = (0,_styles_transform_mjs__WEBPACK_IMPORTED_MODULE_12__.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                styles.transform = transformTemplate(valuesToRender, styles.transform);
            }
            var _g = this.projectionDelta, x = _g.x, y = _g.y;
            styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                styles.opacity =
                    lead === this
                        ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its actual
                 * opacity and other components to hidden.
                 */
                styles.opacity =
                    lead === this
                        ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : ""
                        : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
            }
            /**
             * Apply scale correction
             */
            for (var key in _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_18__.scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                var _h = _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_18__.scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
                var corrected = correct(valuesToRender[key], lead);
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        styles[applyTo[i]] = corrected;
                    }
                }
                else {
                    styles[key] = corrected;
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                styles.pointerEvents =
                    lead === this
                        ? (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_17__.resolveMotionValue)(styleProp.pointerEvents) || ""
                        : "none";
            }
            return styles;
        };
        ProjectionNode.prototype.clearSnapshot = function () {
            this.resumeFrom = this.snapshot = undefined;
        };
        // Only run on root
        ProjectionNode.prototype.resetTree = function () {
            this.root.nodes.forEach(function (node) { var _a; return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop(); });
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        };
        return ProjectionNode;
    }());
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a, _b, _c, _d;
    var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        var _e = node.layout, layout_1 = _e.actual, measuredLayout = _e.measured;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (node.options.animationType === "size") {
            (0,_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_19__.eachAxis)(function (axis) {
                var axisSnapshot = snapshot.isShared
                    ? snapshot.measured[axis]
                    : snapshot.layout[axis];
                var length = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcLength)(axisSnapshot);
                axisSnapshot.min = layout_1[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (node.options.animationType === "position") {
            (0,_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_19__.eachAxis)(function (axis) {
                var axisSnapshot = snapshot.isShared
                    ? snapshot.measured[axis]
                    : snapshot.layout[axis];
                var length = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcLength)(layout_1[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        var layoutDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
        (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(layoutDelta, layout_1, snapshot.layout);
        var visualDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
        if (snapshot.isShared) {
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
        }
        else {
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(visualDelta, layout_1, snapshot.layout);
        }
        var hasLayoutChanged = !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.isDeltaZero)(layoutDelta);
        var hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            node.relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (node.relativeParent && !node.relativeParent.resumeFrom) {
                var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
                if (parentSnapshot && parentLayout) {
                    var relativeSnapshot = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
                    var relativeLayout = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(relativeLayout, layout_1, parentLayout.actual);
                    if (!(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.boxEquals)(relativeSnapshot, relativeLayout)) {
                        hasRelativeTargetChanged = true;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout: layout_1,
            snapshot: snapshot,
            delta: visualDelta,
            layoutDelta: layoutDelta,
            hasLayoutChanged: hasLayoutChanged,
            hasRelativeTargetChanged: hasRelativeTargetChanged,
        });
    }
    else if (node.isLead()) {
        (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function resetTransformStyle(node) {
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetRotation(node) {
    node.resetRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = (0,popmotion__WEBPACK_IMPORTED_MODULE_20__.mix)(delta.translate, 0, p);
    output.scale = (0,popmotion__WEBPACK_IMPORTED_MODULE_20__.mix)(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0,popmotion__WEBPACK_IMPORTED_MODULE_20__.mix)(from.min, to.min, p);
    output.max = (0,popmotion__WEBPACK_IMPORTED_MODULE_20__.mix)(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
function mountNodeEarly(node, id) {
    /**
     * Rather than searching the DOM from document we can search the
     * path for the deepest mounted ancestor and search from there
     */
    var searchNode = node.root;
    for (var i = node.path.length - 1; i >= 0; i--) {
        if (Boolean(node.path[i].instance)) {
            searchNode = node.path[i];
            break;
        }
    }
    var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
    var element = searchElement.querySelector("[data-projection-id=\"".concat(id, "\"]"));
    if (element)
        node.mount(element, true);
}
function roundAxis(axis) {
    axis.min = Math.round(axis.min);
    axis.max = Math.round(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/id.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/id.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProjectionId": () => (/* binding */ useProjectionId)
/* harmony export */ });
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");



var id = 1;
function useProjectionId() {
    return (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_0__.useConstant)(function () {
        if (_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_1__.globalProjectionState.hasEverUpdated) {
            return id++;
        }
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/shared/stack.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/shared/stack.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeStack": () => (/* binding */ NodeStack)
/* harmony export */ });
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");


var NodeStack = /** @class */ (function () {
    function NodeStack() {
        this.members = [];
    }
    NodeStack.prototype.add = function (node) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.members, node);
        node.scheduleRender();
    };
    NodeStack.prototype.remove = function (node) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.members, node);
        if (node === this.prevLead) {
            this.prevLead = undefined;
        }
        if (node === this.lead) {
            var prevLead = this.members[this.members.length - 1];
            if (prevLead) {
                this.promote(prevLead);
            }
        }
    };
    NodeStack.prototype.relegate = function (node) {
        var indexOfNode = this.members.findIndex(function (member) { return node === member; });
        if (indexOfNode === 0)
            return false;
        /**
         * Find the next projection node that is present
         */
        var prevLead;
        for (var i = indexOfNode; i >= 0; i--) {
            var member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        }
        else {
            return false;
        }
    };
    NodeStack.prototype.promote = function (node, preserveFollowOpacity) {
        var _a;
        var prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) {
                node.resumeFrom.preserveOpacity = true;
            }
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues =
                    prevLead.animationValues || prevLead.latestValues;
                node.snapshot.isShared = true;
            }
            if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
                node.isLayoutDirty = true;
            }
            var crossfade = node.options.crossfade;
            if (crossfade === false) {
                prevLead.hide();
            }
            /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */
        }
    };
    NodeStack.prototype.exitAnimationComplete = function () {
        this.members.forEach(function (node) {
            var _a, _b, _c, _d, _e;
            (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
        });
    };
    NodeStack.prototype.scheduleRender = function () {
        this.members.forEach(function (node) {
            node.instance && node.scheduleRender(false);
        });
    };
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    NodeStack.prototype.removeLeadSnapshot = function () {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    };
    return NodeStack;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctBorderRadius": () => (/* binding */ correctBorderRadius),
/* harmony export */   "pixelsToPercent": () => (/* binding */ pixelsToPercent)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");


function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
var correctBorderRadius = {
    correct: function (latest, node) {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        var x = pixelsToPercent(latest, node.target.x);
        var y = pixelsToPercent(latest, node.target.y);
        return "".concat(x, "% ").concat(y, "%");
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctBoxShadow": () => (/* binding */ correctBoxShadow)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _render_dom_utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/css-variables-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs");




var varToken = "_$css";
var correctBoxShadow = {
    correct: function (latest, _a) {
        var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
        var original = latest;
        /**
         * We need to first strip and store CSS variables from the string.
         */
        var containsCSSVariables = latest.includes("var(");
        var cssVariables = [];
        if (containsCSSVariables) {
            latest = latest.replace(_render_dom_utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.cssVariableRegex, function (match) {
                cssVariables.push(match);
                return varToken;
            });
        }
        var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_1__.complex.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        var template = style_value_types__WEBPACK_IMPORTED_MODULE_1__.complex.createTransformer(latest);
        var offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        var xScale = projectionDelta.x.scale * treeScale.x;
        var yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        var averageScale = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        var output = template(shadow);
        if (containsCSSVariables) {
            var i_1 = 0;
            output = output.replace(varToken, function () {
                var cssVariable = cssVariables[i_1];
                i_1++;
                return cssVariable;
            });
        }
        return output;
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScaleCorrector": () => (/* binding */ addScaleCorrector),
/* harmony export */   "scaleCorrectors": () => (/* binding */ scaleCorrectors)
/* harmony export */ });
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/transform.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/transform.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildProjectionTransform": () => (/* binding */ buildProjectionTransform),
/* harmony export */   "identityProjection": () => (/* binding */ identityProjection)
/* harmony export */ });
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = delta.x.translate / treeScale.x;
    var yTranslate = delta.y.translate / treeScale.y;
    var transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
    if (latestTransform) {
        var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
        if (rotate)
            transform += "rotate(".concat(rotate, "deg) ");
        if (rotateX)
            transform += "rotateX(".concat(rotateX, "deg) ");
        if (rotateY)
            transform += "rotateY(".concat(rotateY, "deg) ");
    }
    transform += "scale(".concat(delta.x.scale, ", ").concat(delta.y.scale, ")");
    return transform === identityProjection ? "none" : transform;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eachAxis": () => (/* binding */ eachAxis)
/* harmony export */ });
function eachAxis(callback) {
    return [callback("x"), callback("y")];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasScale": () => (/* binding */ hasScale),
/* harmony export */   "hasTransform": () => (/* binding */ hasTransform)
/* harmony export */ });
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale(_a) {
    var scale = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        hasTranslate(values.x) ||
        hasTranslate(values.y) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY);
}
function hasTranslate(value) {
    return value && value !== "0%";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/measure.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "measurePageBox": () => (/* binding */ measurePageBox),
/* harmony export */   "measureViewportBox": () => (/* binding */ measureViewportBox)
/* harmony export */ });
/* harmony import */ var _geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/conversion.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");



function measureViewportBox(instance, transformPoint) {
    return (0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.convertBoundingBoxToBox)((0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    var viewportBox = measureViewportBox(element, transformPagePoint);
    var scroll = rootProjectionNode.scroll;
    if (scroll) {
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.x, scroll.x);
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.y, scroll.y);
    }
    return viewportBox;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomVisualElement": () => (/* binding */ createDomVisualElement)
/* harmony export */ });
/* harmony import */ var _html_visual_element_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/html/visual-element.mjs");
/* harmony import */ var _svg_visual_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/svg/visual-element.mjs");
/* harmony import */ var _utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");




var createDomVisualElement = function (Component, options) {
    return (0,_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? (0,_svg_visual_element_mjs__WEBPACK_IMPORTED_MODULE_1__.svgVisualElement)(options, { enableHardwareAcceleration: false })
        : (0,_html_visual_element_mjs__WEBPACK_IMPORTED_MODULE_2__.htmlVisualElement)(options, { enableHardwareAcceleration: true });
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMotionProxy": () => (/* binding */ createMotionProxy)
/* harmony export */ });
/* harmony import */ var _motion_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/index.mjs */ "./node_modules/framer-motion/dist/es/motion/index.mjs");


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
        if (customMotionComponentConfig === void 0) { customMotionComponentConfig = {}; }
        return (0,_motion_index_mjs__WEBPACK_IMPORTED_MODULE_0__.createMotionComponent)(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
        return custom;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    var componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: function (_target, key) {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomMotionComponent": () => (/* binding */ createDomMotionComponent),
/* harmony export */   "motion": () => (/* binding */ motion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _motion_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../motion/index.mjs */ "./node_modules/framer-motion/dist/es/motion/index.mjs");
/* harmony import */ var _motion_proxy_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motion-proxy.mjs */ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs");
/* harmony import */ var _utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/create-config.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs");
/* harmony import */ var _motion_features_gestures_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/features/gestures.mjs */ "./node_modules/framer-motion/dist/es/motion/features/gestures.mjs");
/* harmony import */ var _motion_features_animations_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/animations.mjs */ "./node_modules/framer-motion/dist/es/motion/features/animations.mjs");
/* harmony import */ var _motion_features_drag_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../motion/features/drag.mjs */ "./node_modules/framer-motion/dist/es/motion/features/drag.mjs");
/* harmony import */ var _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs");
/* harmony import */ var _motion_features_layout_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../motion/features/layout/index.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout/index.mjs");
/* harmony import */ var _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projection/node/HTMLProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs");











var featureBundle = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _motion_features_animations_mjs__WEBPACK_IMPORTED_MODULE_1__.animations), _motion_features_gestures_mjs__WEBPACK_IMPORTED_MODULE_2__.gestureAnimations), _motion_features_drag_mjs__WEBPACK_IMPORTED_MODULE_3__.drag), _motion_features_layout_index_mjs__WEBPACK_IMPORTED_MODULE_4__.layoutFeatures);
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/ (0,_motion_proxy_mjs__WEBPACK_IMPORTED_MODULE_5__.createMotionProxy)(function (Component, config) {
    return (0,_utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_6__.createDomMotionConfig)(Component, config, featureBundle, _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__.createDomVisualElement, _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_8__.HTMLProjectionNode);
});
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return (0,_motion_index_mjs__WEBPACK_IMPORTED_MODULE_9__.createMotionComponent)((0,_utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_6__.createDomMotionConfig)(key, { forwardMotionProps: false }, featureBundle, _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__.createDomVisualElement, _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_8__.HTMLProjectionNode));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/use-render.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/use-render.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUseRender": () => (/* binding */ createUseRender)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs");
/* harmony import */ var _utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/filter-props.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs");
/* harmony import */ var _utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");
/* harmony import */ var _svg_use_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/svg/use-props.mjs");







function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) { forwardMotionProps = false; }
    var useRender = function (Component, props, projectionId, ref, _a, isStatic) {
        var latestValues = _a.latestValues;
        var useVisualProps = (0,_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__.isSVGComponent)(Component)
            ? _svg_use_props_mjs__WEBPACK_IMPORTED_MODULE_2__.useSVGProps
            : _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__.useHTMLProps;
        var visualProps = useVisualProps(props, latestValues, isStatic);
        var filteredProps = (0,_utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_4__.filterProps)(props, typeof Component === "string", forwardMotionProps);
        var elementProps = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, filteredProps), visualProps), { ref: ref });
        if (projectionId) {
            elementProps["data-projection-id"] = projectionId;
        }
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, elementProps);
    };
    return useRender;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelToDash": () => (/* binding */ camelToDash)
/* harmony export */ });
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomMotionConfig": () => (/* binding */ createDomMotionConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");
/* harmony import */ var _use_render_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../use-render.mjs */ "./node_modules/framer-motion/dist/es/render/dom/use-render.mjs");
/* harmony import */ var _svg_config_motion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/config-motion.mjs */ "./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs");
/* harmony import */ var _html_config_motion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/config-motion.mjs */ "./node_modules/framer-motion/dist/es/render/html/config-motion.mjs");






function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
    var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
    var baseConfig = (0,_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? _svg_config_motion_mjs__WEBPACK_IMPORTED_MODULE_1__.svgMotionConfig
        : _html_config_motion_mjs__WEBPACK_IMPORTED_MODULE_2__.htmlMotionConfig;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, baseConfig), { preloadedFeatures: preloadedFeatures, useRender: (0,_use_render_mjs__WEBPACK_IMPORTED_MODULE_4__.createUseRender)(forwardMotionProps), createVisualElement: createVisualElement, projectionNodeConstructor: projectionNodeConstructor, Component: Component });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssVariableRegex": () => (/* binding */ cssVariableRegex),
/* harmony export */   "parseCSSVariable": () => (/* binding */ parseCSSVariable),
/* harmony export */   "resolveCSSVariables": () => (/* binding */ resolveCSSVariables)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");



function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"".concat(current, "\". This may indicate a circular fallback dependency."));
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved.trim();
    }
    else if (isCSSVariable(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
    var _b;
    var target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, []);
    var element = visualElement.getInstance();
    if (!(element instanceof Element))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd)
            (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
    }
    return { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterProps": () => (/* binding */ filterProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/valid-prop.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs");


var shouldForward = function (key) { return !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = require("@emotion/is-prop-valid").default;
    shouldForward = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
        if (shouldForward(key) ||
            (forwardMotionProps === true && (0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            (!isDom && !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] && key.startsWith("onDrag"))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCSSVariable": () => (/* binding */ isCSSVariable)
/* harmony export */ });
/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSVGComponent": () => (/* binding */ isSVGComponent)
/* harmony export */ });
/* harmony import */ var _svg_lowercase_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/lowercase-elements.mjs */ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs");


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    _svg_lowercase_elements_mjs__WEBPACK_IMPORTED_MODULE_0__.lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDomVariant": () => (/* binding */ parseDomVariant)
/* harmony export */ });
/* harmony import */ var _css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs");
/* harmony import */ var _unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
    var resolved = (0,_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveCSSVariables)(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return (0,_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.unitConversion)(visualElement, target, origin, transitionEnd);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingBoxDimension": () => (/* binding */ BoundingBoxDimension),
/* harmony export */   "positionalValues": () => (/* binding */ positionalValues),
/* harmony export */   "unitConversion": () => (/* binding */ unitConversion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value-types/dimensions.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");







var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_1__.number || v === style_value_types__WEBPACK_IMPORTED_MODULE_2__.px;
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) {
    return function (_bbox, _a) {
        var transform = _a.transform;
        if (transform === "none" || !transform)
            return 0;
        var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
        if (matrix3d) {
            return getPosFromMatrix(matrix3d[1], pos3);
        }
        else {
            var matrix = transform.match(/^matrix\((.+)\)$/);
            if (matrix) {
                return getPosFromMatrix(matrix[1], pos2);
            }
            else {
                return 0;
            }
        }
    };
};
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.transformProps.filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.syncRender();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a, _b) {
        var x = _a.x;
        var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
        return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: function (_a, _b) {
        var y = _a.y;
        var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
        return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, visualElement, changedKeys) {
    var originBbox = visualElement.measureViewportBox();
    var element = visualElement.getInstance();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display;
    var origin = {};
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    /**
     * Record origins before we render and update styles
     */
    changedKeys.forEach(function (key) {
        origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.syncRender();
    var targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, origin[key]);
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
    if (origin === void 0) { origin = {}; }
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, target);
    transitionEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        var from = origin[key];
        var fromType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(from);
        var to = target[key];
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if ((0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_6__.isKeyframesTarget)(to)) {
            var numKeyframes = to.length;
            var fromIndex = to[0] === null ? 1 : 0;
            from = to[fromIndex];
            fromType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(from);
            for (var i = fromIndex; i < numKeyframes; i++) {
                if (!toType) {
                    toType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to[i]);
                    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)((0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_2__.px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues =
                        removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(_a, 2), key = _b[0], value = _b[1];
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.syncRender();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnimatableNone": () => (/* binding */ getAnimatableNone)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/filter.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");



function getAnimatableNone(key, value) {
    var _a;
    var defaultValueType = (0,_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueType)(key);
    if (defaultValueType !== style_value_types__WEBPACK_IMPORTED_MODULE_1__.filter)
        defaultValueType = style_value_types__WEBPACK_IMPORTED_MODULE_2__.complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultValueTypes": () => (/* binding */ defaultValueTypes),
/* harmony export */   "getDefaultValueType": () => (/* binding */ getDefaultValueType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/filter.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");




/**
 * A map of default value types for common values
 */
var defaultValueTypes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _number_mjs__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes), { 
    // Color props
    color: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, fill: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, stroke: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, 
    // Border props
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, filter: style_value_types__WEBPACK_IMPORTED_MODULE_3__.filter, WebkitFilter: style_value_types__WEBPACK_IMPORTED_MODULE_3__.filter });
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function (key) { return defaultValueTypes[key]; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dimensionValueTypes": () => (/* binding */ dimensionValueTypes),
/* harmony export */   "findDimensionValueType": () => (/* binding */ findDimensionValueType)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs");
/* harmony import */ var _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs");




/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__.number, style_value_types__WEBPACK_IMPORTED_MODULE_1__.px, style_value_types__WEBPACK_IMPORTED_MODULE_1__.percent, style_value_types__WEBPACK_IMPORTED_MODULE_1__.degrees, style_value_types__WEBPACK_IMPORTED_MODULE_1__.vw, style_value_types__WEBPACK_IMPORTED_MODULE_1__.vh, _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function (v) {
    return dimensionValueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findValueType": () => (/* binding */ findValueType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _dimensions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimensions.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs");





/**
 * A list of all ValueTypes
 */
var valueTypes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_dimensions_mjs__WEBPACK_IMPORTED_MODULE_1__.dimensionValueTypes), false), [style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, style_value_types__WEBPACK_IMPORTED_MODULE_3__.complex], false);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function (v) { return valueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_4__.testValueType)(v)); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValueAsType": () => (/* binding */ getValueAsType)
/* harmony export */ });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberValueTypes": () => (/* binding */ numberValueTypes)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs");



var numberValueTypes = {
    // Border props
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Positioning props
    width: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    height: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    size: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    top: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    right: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    left: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Spacing props
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Transform props
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    x: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    y: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    z: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Misc
    zIndex: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
    // SVG
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    numOctaves: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testValueType": () => (/* binding */ testValueType)
/* harmony export */ });
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) { return function (type) { return type.test(v); }; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auto": () => (/* binding */ auto)
/* harmony export */ });
/**
 * ValueType for "auto"
 */
var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "int": () => (/* binding */ int)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");



var int = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__.number), { transform: Math.round });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/config-motion.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/config-motion.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlMotionConfig": () => (/* binding */ htmlMotionConfig)
/* harmony export */ });
/* harmony import */ var _motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");




var htmlMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createHtmlRenderState,
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/use-props.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyRawValuesOnly": () => (/* binding */ copyRawValuesOnly),
/* harmony export */   "useHTMLProps": () => (/* binding */ useHTMLProps),
/* harmony export */   "useStyle": () => (/* binding */ useStyle)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");







function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
        if (!(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(source[key]) && !(0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.isForcedMotionValue)(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = (0,_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_3__.createHtmlRenderState)();
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_4__.buildHTMLStyles)(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        var vars = state.vars, style = state.style;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, vars), style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
        style = props.transformValues(style);
    }
    return style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag) && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : "pan-".concat(props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHTMLStyles": () => (/* binding */ buildHTMLStyles)
/* harmony export */ });
/* harmony import */ var _build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");






function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    var _a;
    var style = state.style, vars = state.vars, transform = state.transform, transformKeys = state.transformKeys, transformOrigin = state.transformOrigin;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (var key in latestValues) {
        var value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_0__.isCSSVariable)(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes[key];
        var valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__.getValueAsType)(value, valueType);
        if ((0,_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.isTransformProp)(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
                transformIsNone = false;
        }
        else if ((0,_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.isTransformOriginProp)(key)) {
            transformOrigin[key] = valueAsType;
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
        }
        else {
            style[key] = valueAsType;
        }
    }
    if (hasTransform) {
        style.transform = (0,_build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.buildTransform)(state, options, transformIsNone, transformTemplate);
    }
    else if (transformTemplate) {
        style.transform = transformTemplate({}, "");
    }
    if (hasTransformOrigin) {
        style.transformOrigin = (0,_build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.buildTransformOrigin)(transformOrigin);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTransform": () => (/* binding */ buildTransform),
/* harmony export */   "buildTransformOrigin": () => (/* binding */ buildTransformOrigin)
/* harmony export */ });
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");


var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform = _a.transform, transformKeys = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.sortTransformProps);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += "".concat(translateAlias[key] || key, "(").concat(transform[key], ") ");
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return "".concat(originX, " ").concat(originY, " ").concat(originZ);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtmlRenderState": () => (/* binding */ createHtmlRenderState)
/* harmony export */ });
var createHtmlRenderState = function () { return ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
}); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/render.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHTML": () => (/* binding */ renderHTML)
/* harmony export */ });
function renderHTML(element, _a, styleProp, projection) {
    var style = _a.style, vars = _a.vars;
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (var key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeMotionValuesFromProps": () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



function scrapeMotionValuesFromProps(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(style[key]) || (0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isForcedMotionValue)(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTransformOriginProp": () => (/* binding */ isTransformOriginProp),
/* harmony export */   "isTransformProp": () => (/* binding */ isTransformProp),
/* harmony export */   "sortTransformProps": () => (/* binding */ sortTransformProps),
/* harmony export */   "transformAxes": () => (/* binding */ transformAxes),
/* harmony export */   "transformProps": () => (/* binding */ transformProps)
/* harmony export */ });
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["translate", "scale", "rotate", "skew"];
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
    return transformAxes.forEach(function (axesKey) {
        return transformProps.push(operationKey + axesKey);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/visual-element.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/visual-element.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComputedStyle": () => (/* binding */ getComputedStyle),
/* harmony export */   "htmlConfig": () => (/* binding */ htmlConfig),
/* harmony export */   "htmlVisualElement": () => (/* binding */ htmlVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../index.mjs */ "./node_modules/framer-motion/dist/es/render/index.mjs");
/* harmony import */ var _utils_setters_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setters.mjs */ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _dom_utils_parse_dom_variant_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/parse-dom-variant.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs");
/* harmony import */ var _utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs");












function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
var htmlConfig = {
    treeType: "dom",
    readValueFromInstance: function (domElement, key) {
        if ((0,_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.isTransformProp)(key)) {
            var defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            var computedStyle = getComputedStyle(domElement);
            return (((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__.isCSSVariable)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0);
        }
    },
    sortNodePosition: function (a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    },
    getBaseTarget: function (props, key) {
        var _a;
        return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox: function (element, _a) {
        var transformPagePoint = _a.transformPagePoint;
        return (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_3__.measureViewportBox)(element, transformPagePoint);
    },
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    resetTransform: function (element, domElement, props) {
        var transformTemplate = props.transformTemplate;
        domElement.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform on the next frame
        element.scheduleRender();
    },
    restoreTransform: function (instance, mutableState) {
        instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState: function (key, _a) {
        var vars = _a.vars, style = _a.style;
        delete vars[key];
        delete style[key];
    },
    /**
     * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
     * can be animated by Motion.
     */
    makeTargetAnimatable: function (element, _a, _b, isMounted) {
        var transformValues = _b.transformValues;
        if (isMounted === void 0) { isMounted = true; }
        var transition = _a.transition, transitionEnd = _a.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["transition", "transitionEnd"]);
        var origin = (0,_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_5__.getOrigin)(target, transition || {}, element);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            (0,_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_5__.checkTargetForNewValues)(element, target, origin);
            var parsed = (0,_dom_utils_parse_dom_variant_mjs__WEBPACK_IMPORTED_MODULE_6__.parseDomVariant)(element, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ transition: transition, transitionEnd: transitionEnd }, target);
    },
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps,
    build: function (element, renderState, latestValues, options, props) {
        if (element.isVisible !== undefined) {
            renderState.style.visibility = element.isVisible
                ? "visible"
                : "hidden";
        }
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_8__.buildHTMLStyles)(renderState, latestValues, options, props.transformTemplate);
    },
    render: _utils_render_mjs__WEBPACK_IMPORTED_MODULE_9__.renderHTML,
};
var htmlVisualElement = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_10__.visualElement)(htmlConfig);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visualElement": () => (/* binding */ visualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/animation-state.mjs */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs");
/* harmony import */ var _utils_lifecycles_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/lifecycles.mjs */ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs");
/* harmony import */ var _utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs");
/* harmony import */ var _utils_variants_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");









var visualElement = function (_a) {
    var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
    return function (_a, options) {
        var parent = _a.parent, props = _a.props, presenceId = _a.presenceId, blockInitialAnimation = _a.blockInitialAnimation, visualState = _a.visualState;
        if (options === void 0) { options = {}; }
        var isMounted = false;
        var latestValues = visualState.latestValues, renderState = visualState.renderState;
        /**
         * The instance of the render-specific node that will be hydrated by the
         * exposed React ref. So for example, this visual element can host a
         * HTMLElement, plain object, or Three.js object. The functions provided
         * in VisualElementConfig allow us to interface with this instance.
         */
        var instance;
        /**
         * Manages the subscriptions for a visual element's lifecycle, for instance
         * onRender
         */
        var lifecycles = (0,_utils_lifecycles_mjs__WEBPACK_IMPORTED_MODULE_1__.createLifecycles)();
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        var values = new Map();
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        var valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        var prevMotionValues = {};
        /**
         * When values are removed from all animation props we need to search
         * for a fallback value to animate to. These values are tracked in baseTarget.
         */
        var baseTarget = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, latestValues);
        // Internal methods ========================
        /**
         * On mount, this will be hydrated with a callback to disconnect
         * this visual element from its parent on unmount.
         */
        var removeFromVariantTree;
        /**
         * Render the element with the latest styles outside of the React
         * render lifecycle
         */
        function render() {
            if (!instance || !isMounted)
                return;
            triggerBuild();
            renderInstance(instance, renderState, props.style, element.projection);
        }
        function triggerBuild() {
            build(element, renderState, latestValues, options, props);
        }
        function update() {
            lifecycles.notifyUpdate(latestValues);
        }
        /**
         *
         */
        function bindToMotionValue(key, value) {
            var removeOnChange = value.onChange(function (latestValue) {
                latestValues[key] = latestValue;
                props.onUpdate && framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(update, false, true);
            });
            var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
            valueSubscriptions.set(key, function () {
                removeOnChange();
                removeOnRenderRequest();
            });
        }
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        var initialMotionValues = scrapeMotionValuesFromProps(props);
        for (var key in initialMotionValues) {
            var value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__.isMotionValue)(value)) {
                value.set(latestValues[key], false);
            }
        }
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        var isControllingVariants = (0,_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_4__.checkIfControllingVariants)(props);
        var isVariantNode = (0,_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_4__.checkIfVariantNode)(props);
        var element = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ treeType: treeType, 
            /**
             * This is a mirror of the internal instance prop, which keeps
             * VisualElement type-compatible with React's RefObject.
             */
            current: null, 
            /**
             * The depth of this visual element within the visual element tree.
             */
            depth: parent ? parent.depth + 1 : 0, parent: parent, children: new Set(), 
            /**
             *
             */
            presenceId: presenceId, 
            /**
             * If this component is part of the variant tree, it should track
             * any children that are also part of the tree. This is essentially
             * a shadow tree to simplify logic around how to stagger over children.
             */
            variantChildren: isVariantNode ? new Set() : undefined, 
            /**
             * Whether this instance is visible. This can be changed imperatively
             * by the projection tree, is analogous to CSS's visibility in that
             * hidden elements should take up layout, and needs enacting by the configured
             * render function.
             */
            isVisible: undefined, 
            /**
             * Normally, if a component is controlled by a parent's variants, it can
             * rely on that ancestor to trigger animations further down the tree.
             * However, if a component is created after its parent is mounted, the parent
             * won't trigger that mount animation so the child needs to.
             *
             * TODO: This might be better replaced with a method isParentMounted
             */
            manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()), 
            /**
             * This can be set by AnimatePresence to force components that mount
             * at the same time as it to mount as if they have initial={false} set.
             */
            blockInitialAnimation: blockInitialAnimation, 
            /**
             * Determine whether this component has mounted yet. This is mostly used
             * by variant children to determine whether they need to trigger their
             * own animations on mount.
             */
            isMounted: function () { return Boolean(instance); }, mount: function (newInstance) {
                isMounted = true;
                instance = element.current = newInstance;
                if (element.projection) {
                    element.projection.mount(newInstance);
                }
                if (isVariantNode && parent && !isControllingVariants) {
                    removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
                }
                parent === null || parent === void 0 ? void 0 : parent.children.add(element);
                element.setProps(props);
            }, 
            /**
             *
             */
            unmount: function () {
                var _a;
                (_a = element.projection) === null || _a === void 0 ? void 0 : _a.unmount();
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(update);
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.render(render);
                valueSubscriptions.forEach(function (remove) { return remove(); });
                removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
                parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
                lifecycles.clearAllListeners();
                instance = undefined;
                isMounted = false;
            }, 
            /**
             * Add a child visual element to our set of children.
             */
            addVariantChild: function (child) {
                var _a;
                var closestVariantNode = element.getClosestVariantNode();
                if (closestVariantNode) {
                    (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
                    return function () {
                        return closestVariantNode.variantChildren.delete(child);
                    };
                }
            }, sortNodePosition: function (other) {
                /**
                 * If these nodes aren't even of the same type we can't compare their depth.
                 */
                if (!sortNodePosition || treeType !== other.treeType)
                    return 0;
                return sortNodePosition(element.getInstance(), other.getInstance());
            }, 
            /**
             * Returns the closest variant node in the tree starting from
             * this visual element.
             */
            getClosestVariantNode: function () {
                return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
            }, 
            /**
             * Expose the latest layoutId prop.
             */
            getLayoutId: function () { return props.layoutId; }, 
            /**
             * Returns the current instance.
             */
            getInstance: function () { return instance; }, 
            /**
             * Get/set the latest static values.
             */
            getStaticValue: function (key) { return latestValues[key]; }, setStaticValue: function (key, value) { return (latestValues[key] = value); }, 
            /**
             * Returns the latest motion value state. Currently only used to take
             * a snapshot of the visual element - perhaps this can return the whole
             * visual state
             */
            getLatestValues: function () { return latestValues; }, 
            /**
             * Set the visiblity of the visual element. If it's changed, schedule
             * a render to reflect these changes.
             */
            setVisibility: function (visibility) {
                if (element.isVisible === visibility)
                    return;
                element.isVisible = visibility;
                element.scheduleRender();
            }, 
            /**
             * Make a target animatable by Popmotion. For instance, if we're
             * trying to animate width from 100px to 100vw we need to measure 100vw
             * in pixels to determine what we really need to animate to. This is also
             * pluggable to support Framer's custom value types like Color,
             * and CSS variables.
             */
            makeTargetAnimatable: function (target, canMutate) {
                if (canMutate === void 0) { canMutate = true; }
                return makeTargetAnimatable(element, target, props, canMutate);
            }, 
            /**
             * Measure the current viewport box with or without transforms.
             * Only measures axis-aligned boxes, rotate and skew must be manually
             * removed with a re-render to work.
             */
            measureViewportBox: function () {
                return measureViewportBox(instance, props);
            }, 
            // Motion values ========================
            /**
             * Add a motion value and bind it to this visual element.
             */
            addValue: function (key, value) {
                // Remove existing value if it exists
                if (element.hasValue(key))
                    element.removeValue(key);
                values.set(key, value);
                latestValues[key] = value.get();
                bindToMotionValue(key, value);
            }, 
            /**
             * Remove a motion value and unbind any active subscriptions.
             */
            removeValue: function (key) {
                var _a;
                values.delete(key);
                (_a = valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
                valueSubscriptions.delete(key);
                delete latestValues[key];
                removeValueFromRenderState(key, renderState);
            }, 
            /**
             * Check whether we have a motion value for this key
             */
            hasValue: function (key) { return values.has(key); }, 
            /**
             * Get a motion value for this key. If called with a default
             * value, we'll create one if none exists.
             */
            getValue: function (key, defaultValue) {
                var value = values.get(key);
                if (value === undefined && defaultValue !== undefined) {
                    value = (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_5__.motionValue)(defaultValue);
                    element.addValue(key, value);
                }
                return value;
            }, 
            /**
             * Iterate over our motion values.
             */
            forEachValue: function (callback) { return values.forEach(callback); }, 
            /**
             * If we're trying to animate to a previously unencountered value,
             * we need to check for it in our state and as a last resort read it
             * directly from the instance (which might have performance implications).
             */
            readValue: function (key) {
                var _a;
                return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options);
            }, 
            /**
             * Set the base target to later animate back to. This is currently
             * only hydrated on creation and when we first read a value.
             */
            setBaseTarget: function (key, value) {
                baseTarget[key] = value;
            }, 
            /**
             * Find the base target for a value thats been removed from all animation
             * props.
             */
            getBaseTarget: function (key) {
                if (getBaseTarget) {
                    var target = getBaseTarget(props, key);
                    if (target !== undefined && !(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__.isMotionValue)(target))
                        return target;
                }
                return baseTarget[key];
            } }, lifecycles), { 
            /**
             * Build the renderer state based on the latest visual state.
             */
            build: function () {
                triggerBuild();
                return renderState;
            }, 
            /**
             * Schedule a render on the next animation frame.
             */
            scheduleRender: function () {
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].render(render, false, true);
            }, 
            /**
             * Synchronously fire render. It's prefered that we batch renders but
             * in many circumstances, like layout measurement, we need to run this
             * synchronously. However in those instances other measures should be taken
             * to batch reads/writes.
             */
            syncRender: render, 
            /**
             * Update the provided props. Ensure any newly-added motion values are
             * added to our map, old ones removed, and listeners updated.
             */
            setProps: function (newProps) {
                props = newProps;
                lifecycles.updatePropListeners(newProps);
                prevMotionValues = (0,_utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__.updateMotionValuesFromProps)(element, scrapeMotionValuesFromProps(props), prevMotionValues);
            }, getProps: function () { return props; }, 
            // Variants ==============================
            /**
             * Returns the variant definition with a given name.
             */
            getVariant: function (name) { var _a; return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name]; }, 
            /**
             * Returns the defined default transition on this component.
             */
            getDefaultTransition: function () { return props.transition; }, getTransformPagePoint: function () {
                return props.transformPagePoint;
            }, 
            /**
             * Used by child variant nodes to get the closest ancestor variant props.
             */
            getVariantContext: function (startAtParent) {
                if (startAtParent === void 0) { startAtParent = false; }
                if (startAtParent)
                    return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
                if (!isControllingVariants) {
                    var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
                    if (props.initial !== undefined) {
                        context_1.initial = props.initial;
                    }
                    return context_1;
                }
                var context = {};
                for (var i = 0; i < numVariantProps; i++) {
                    var name_1 = variantProps[i];
                    var prop = props[name_1];
                    if ((0,_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_4__.isVariantLabel)(prop) || prop === false) {
                        context[name_1] = prop;
                    }
                }
                return context;
            } });
        return element;
    };
};
var variantProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(["initial"], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_7__.variantPriorityOrder), false);
var numVariantProps = variantProps.length;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgMotionConfig": () => (/* binding */ svgMotionConfig)
/* harmony export */ });
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");






var svgMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createSvgRenderState,
        onMount: function (props, instance, _a) {
            var renderState = _a.renderState, latestValues = _a.latestValues;
            try {
                renderState.dimensions =
                    typeof instance.getBBox ===
                        "function"
                        ? instance.getBBox()
                        : instance.getBoundingClientRect();
            }
            catch (e) {
                // Most likely trying to measure an unrendered element under Firefox
                renderState.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
            }
            (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_3__.buildSVGAttrs)(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
            // TODO: Replace with direct assignment
            (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_4__.renderSVG)(instance, renderState);
        },
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lowercaseSVGElements": () => (/* binding */ lowercaseSVGElements)
/* harmony export */ });
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view",
];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/use-props.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/use-props.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSVGProps": () => (/* binding */ useSVGProps)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs");






function useSVGProps(props, visualState) {
    var visualProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = (0,_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__.createSvgRenderState)();
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_2__.buildSVGAttrs)(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state.attrs), { style: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state.style) });
    }, [visualState]);
    if (props.style) {
        var rawStyles = {};
        (0,_html_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__.copyRawValuesOnly)(rawStyles, props.style, props);
        visualProps.style = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, rawStyles), visualProps.style);
    }
    return visualProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSVGAttrs": () => (/* binding */ buildSVGAttrs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _transform_origin_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform-origin.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs");
/* harmony import */ var _path_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs");





/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, _a, options, transformTemplate) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    (0,_html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_1__.buildHTMLStyles)(state, latest, options, transformTemplate);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = (0,_transform_origin_mjs__WEBPACK_IMPORTED_MODULE_2__.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        (0,_path_mjs__WEBPACK_IMPORTED_MODULE_3__.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCaseAttributes": () => (/* binding */ camelCaseAttributes)
/* harmony export */ });
/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
]);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSvgRenderState": () => (/* binding */ createSvgRenderState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");



var createSvgRenderState = function () { return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, (0,_html_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__.createHtmlRenderState)()), { attrs: {} })); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSVGPath": () => (/* binding */ buildSVGPath)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");


var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(-offset);
    // Build the dash array
    var pathLength = style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(length);
    var pathSpacing = style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(spacing);
    attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSVG": () => (/* binding */ renderSVG)
/* harmony export */ });
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");




function renderSVG(element, renderState) {
    (0,_html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(element, renderState);
    for (var key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__.camelToDash)(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeMotionValuesFromProps": () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");



function scrapeMotionValuesFromProps(props) {
    var newValues = (0,_html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__.scrapeMotionValuesFromProps)(props);
    for (var key in props) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(props[key])) {
            var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcSVGTransformOrigin": () => (/* binding */ calcSVGTransformOrigin)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return "".concat(pxOriginX, " ").concat(pxOriginY);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/visual-element.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/visual-element.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgVisualElement": () => (/* binding */ svgVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.mjs */ "./node_modules/framer-motion/dist/es/render/index.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _html_visual_element_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/html/visual-element.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/camel-case-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");











var svgVisualElement = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_0__.visualElement)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _html_visual_element_mjs__WEBPACK_IMPORTED_MODULE_2__.htmlConfig), { getBaseTarget: function (props, key) {
        return props[key];
    }, readValueFromInstance: function (domElement, key) {
        var _a;
        if ((0,_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.isTransformProp)(key)) {
            return ((_a = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_4__.getDefaultValueType)(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
        }
        key = !_utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_5__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_6__.camelToDash)(key) : key;
        return domElement.getAttribute(key);
    }, scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps, build: function (_element, renderState, latestValues, options, props) {
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_8__.buildSVGAttrs)(renderState, latestValues, options, props.transformTemplate);
    }, render: _utils_render_mjs__WEBPACK_IMPORTED_MODULE_9__.renderSVG }));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkVariantsDidChange": () => (/* binding */ checkVariantsDidChange),
/* harmony export */   "createAnimationState": () => (/* binding */ createAnimationState),
/* harmony export */   "variantPriorityOrder": () => (/* binding */ variantPriorityOrder)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");
/* harmony import */ var _utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/shallow-compare.mjs */ "./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs");
/* harmony import */ var _animation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.mjs */ "./node_modules/framer-motion/dist/es/render/utils/animation.mjs");
/* harmony import */ var _types_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _variants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");








var variantPriorityOrder = [
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Animate,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.InView,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Hover,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Tap,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Drag,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Exit,
];
var reversePriorityOrder = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(variantPriorityOrder), false).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return function (animations) {
        return Promise.all(animations.map(function (_a) {
            var animation = _a.animation, options = _a.options;
            return (0,_animation_mjs__WEBPACK_IMPORTED_MODULE_2__.animateVisualElement)(visualElement, animation, options);
        }));
    };
}
function createAnimationState(visualElement) {
    var animate = animateList(visualElement);
    var state = createState();
    var allAnimatedKeys = {};
    var isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    var buildResolvedTypeValues = function (acc, definition) {
        var resolved = (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveVariant)(visualElement, definition);
        if (resolved) {
            resolved.transition; var transitionEnd = resolved.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(resolved, ["transition", "transitionEnd"]);
            acc = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, acc), target), transitionEnd);
        }
        return acc;
    };
    function isAnimated(key) {
        return allAnimatedKeys[key] !== undefined;
    }
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        var _a;
        var props = visualElement.getProps();
        var context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        var animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        var removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        var encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        var removedVariantIndex = Infinity;
        var _loop_1 = function (i) {
            var type = reversePriorityOrder[i];
            var typeState = state[type];
            var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
            var propIsVariant = (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantLabel)(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            var activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys);
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                (0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_4__.isAnimationControls)(prop) ||
                typeof prop === "boolean") {
                return "continue";
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            var shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            var definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
            var allKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevResolvedValues), resolvedValues);
            var markToAnimate = function (key) {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (var key in allKeys) {
                var next = resolvedValues[key];
                var prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if ((0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(next) && (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(prev)) {
                        if (!(0,_utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev) || variantDidChange) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys), resolvedValues);
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push.apply(animations, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(definitionList.map(function (animation) { return ({
                    animation: animation,
                    options: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ type: type }, options),
                }); })), false));
            }
        };
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (var i = 0; i < numAnimationTypes; i++) {
            _loop_1(i);
        }
        allAnimatedKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys);
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            var fallbackAnimation_1 = {};
            removedKeys.forEach(function (key) {
                var fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation_1[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation_1 });
        }
        var shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            props.initial === false &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        return animateChanges(options, type);
    }
    return {
        isAnimated: isAnimated,
        animateChanges: animateChanges,
        setActive: setActive,
        setAnimateFunction: setAnimateFunction,
        getState: function () { return state; },
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if ((0,_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantLabels)(next)) {
        return !(0,_utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev);
    }
    return false;
}
function createTypeState(isActive) {
    if (isActive === void 0) { isActive = false; }
    return {
        isActive: isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    var _a;
    return _a = {},
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Animate] = createTypeState(true),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.InView] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Hover] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Tap] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Drag] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Exit] = createTypeState(),
        _a;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateVisualElement": () => (/* binding */ animateVisualElement),
/* harmony export */   "sortByTreeOrder": () => (/* binding */ sortByTreeOrder),
/* harmony export */   "stopAnimation": () => (/* binding */ stopAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _setters_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setters.mjs */ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");





/**
 * @internal
 */
function animateVisualElement(visualElement, definition, options) {
    if (options === void 0) { options = {}; }
    visualElement.notifyAnimationStart(definition);
    var animation;
    if (Array.isArray(definition)) {
        var animations = definition.map(function (variant) {
            return animateVariant(visualElement, variant, options);
        });
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        var resolvedDefinition = typeof definition === "function"
            ? (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, definition, options.custom)
            : definition;
        animation = animateTarget(visualElement, resolvedDefinition, options);
    }
    return animation.then(function () {
        return visualElement.notifyAnimationComplete(definition);
    });
}
function animateVariant(visualElement, variant, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var resolved = (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, variant, options.custom);
    var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getAnimation = resolved
        ? function () { return animateTarget(visualElement, resolved, options); }
        : function () { return Promise.resolve(); };
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size)
        ? function (forwardDelay) {
            if (forwardDelay === void 0) { forwardDelay = 0; }
            var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : function () { return Promise.resolve(); };
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    var when = transition.when;
    if (when) {
        var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation], 2), first = _c[0], last = _c[1];
        return first().then(last);
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
/**
 * @internal
 */
function animateTarget(visualElement, definition, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
    var _e = visualElement.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_e, ["transition", "transitionEnd"]);
    if (transitionOverride)
        transition = transitionOverride;
    var animations = [];
    var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
    for (var key in target) {
        var value = visualElement.getValue(key);
        var valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        var animation = (0,_animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_2__.startAnimation)(key, value, valueTarget, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delay: delay }, transition));
        animations.push(animation);
    }
    return Promise.all(animations).then(function () {
        transitionEnd && (0,_setters_mjs__WEBPACK_IMPORTED_MODULE_3__.setTarget)(visualElement, transitionEnd);
    });
}
function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
    if (delayChildren === void 0) { delayChildren = 0; }
    if (staggerChildren === void 0) { staggerChildren = 0; }
    if (staggerDirection === void 0) { staggerDirection = 1; }
    var animations = [];
    var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1
        ? function (i) {
            if (i === void 0) { i = 0; }
            return i * staggerChildren;
        }
        : function (i) {
            if (i === void 0) { i = 0; }
            return maxStaggerDuration - i * staggerChildren;
        };
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach(function (child, i) {
        animations.push(animateVariant(child, variant, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function () { return child.notifyAnimationComplete(variant); }));
    });
    return Promise.all(animations);
}
function stopAnimation(visualElement) {
    visualElement.forEachValue(function (value) { return value.stop(); });
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation(_a, key) {
    var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareByDepth": () => (/* binding */ compareByDepth)
/* harmony export */ });
var compareByDepth = function (a, b) {
    return a.depth - b.depth;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatTree": () => (/* binding */ FlatTree)
/* harmony export */ });
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");
/* harmony import */ var _compare_by_depth_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-by-depth.mjs */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs");



var FlatTree = /** @class */ (function () {
    function FlatTree() {
        this.children = [];
        this.isDirty = false;
    }
    FlatTree.prototype.add = function (child) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.remove = function (child) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.forEach = function (callback) {
        this.isDirty && this.children.sort(_compare_by_depth_mjs__WEBPACK_IMPORTED_MODULE_1__.compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    };
    return FlatTree;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLifecycles": () => (/* binding */ createLifecycles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");



var names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "SetAxisTarget",
    "Unmount",
];
function createLifecycles() {
    var managers = names.map(function () { return new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_0__.SubscriptionManager(); });
    var propSubscriptions = {};
    var lifecycles = {
        clearAllListeners: function () { return managers.forEach(function (manager) { return manager.clear(); }); },
        updatePropListeners: function (props) {
            names.forEach(function (name) {
                var _a;
                var on = "on" + name;
                var propListener = props[on];
                // Unsubscribe existing subscription
                (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
                // Add new subscription
                if (propListener) {
                    propSubscriptions[name] = lifecycles[on](propListener);
                }
            });
        },
    };
    managers.forEach(function (manager, i) {
        lifecycles["on" + names[i]] = function (handler) { return manager.add(handler); };
        lifecycles["notify" + names[i]] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            manager.notify.apply(manager, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args), false));
        };
    });
    return lifecycles;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateMotionValuesFromProps": () => (/* binding */ updateMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



function updateMotionValuesFromProps(element, next, prev) {
    var _a;
    for (var key in next) {
        var nextValue = next[key];
        var prevValue = prev[key];
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
        }
        else if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevValue)) {
            /**
             * If we're swapping to a new motion value, create a new motion value
             * from that
             */
            element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.motionValue)(nextValue));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                var existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.motionValue)((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
            }
        }
    }
    // Handle removed values
    for (var key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/setters.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTargetForNewValues": () => (/* binding */ checkTargetForNewValues),
/* harmony export */   "getOrigin": () => (/* binding */ getOrigin),
/* harmony export */   "getOriginFromTransition": () => (/* binding */ getOriginFromTransition),
/* harmony export */   "setTarget": () => (/* binding */ setTarget),
/* harmony export */   "setValues": () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/is-numerical-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/is-zero-value-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs");
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom/value-types/animatable-none.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/value-types/find.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs");
/* harmony import */ var _variants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");










/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
    }
}
function setTarget(visualElement, definition) {
    var resolved = (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition);
    var _a = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b; _a.transition; var target = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["transitionEnd", "transition"]);
    target = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, target), transitionEnd);
    for (var key in target) {
        var value = (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function setVariants(visualElement, variantLabels) {
    var reversedLabels = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(variantLabels), false).reverse();
    reversedLabels.forEach(function (key) {
        var _a;
        var variant = visualElement.getVariant(key);
        variant && setTarget(visualElement, variant);
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            setVariants(child, variantLabels);
        });
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b, _c;
    var _d;
    var newValueKeys = Object.keys(target).filter(function (key) { return !visualElement.hasValue(key); });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (var i = 0; i < numNewValues; i++) {
        var key = newValueKeys[i];
        var targetValue = target[key];
        var value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" &&
            ((0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_4__.isNumericalString)(value) || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_5__.isZeroValueString)(value))) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!(0,_dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_6__.findValueType)(value) && style_value_types__WEBPACK_IMPORTED_MODULE_7__.complex.test(targetValue)) {
            value = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_8__.getAnimatableNone)(key, targetValue);
        }
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
        (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : (_d[key] = value);
        visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
        origin[key] =
            (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/types.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/types.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationType": () => (/* binding */ AnimationType)
/* harmony export */ });
var AnimationType;
(function (AnimationType) {
    AnimationType["Animate"] = "animate";
    AnimationType["Hover"] = "whileHover";
    AnimationType["Tap"] = "whileTap";
    AnimationType["Drag"] = "whileDrag";
    AnimationType["Focus"] = "whileFocus";
    AnimationType["InView"] = "whileInView";
    AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/variants.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfControllingVariants": () => (/* binding */ checkIfControllingVariants),
/* harmony export */   "checkIfVariantNode": () => (/* binding */ checkIfVariantNode),
/* harmony export */   "isVariantLabel": () => (/* binding */ isVariantLabel),
/* harmony export */   "isVariantLabels": () => (/* binding */ isVariantLabels),
/* harmony export */   "resolveVariant": () => (/* binding */ resolveVariant),
/* harmony export */   "resolveVariantFromProps": () => (/* binding */ resolveVariantFromProps)
/* harmony export */ });
/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
    return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) { currentValues = {}; }
    if (currentVelocity === void 0) { currentVelocity = {}; }
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
}
function resolveVariant(visualElement, definition, custom) {
    var props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}
function checkIfControllingVariants(props) {
    var _a;
    return (typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" ||
        isVariantLabel(props.initial) ||
        isVariantLabel(props.animate) ||
        isVariantLabel(props.whileHover) ||
        isVariantLabel(props.whileDrag) ||
        isVariantLabel(props.whileTap) ||
        isVariantLabel(props.whileFocus) ||
        isVariantLabel(props.exit));
}
function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/array.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/array.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUniqueItem": () => (/* binding */ addUniqueItem),
/* harmony export */   "moveItem": () => (/* binding */ moveItem),
/* harmony export */   "removeItem": () => (/* binding */ removeItem)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");


function addUniqueItem(arr, item) {
    arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
    var index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}
// Adapted from array-move
function moveItem(_a, fromIndex, toIndex) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_a), arr = _b.slice(0);
    var startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        var endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(arr.splice(fromIndex, 1), 1), item = _c[0];
        arr.splice(endIndex, 0, item);
    }
    return arr;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-browser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser)
/* harmony export */ });
var isBrowser = typeof window !== "undefined";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumericalString": () => (/* binding */ isNumericalString)
/* harmony export */ });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRefObject": () => (/* binding */ isRefObject)
/* harmony export */ });
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isZeroValueString": () => (/* binding */ isZeroValueString)
/* harmony export */ });
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
var isZeroValueString = function (v) { return /^0[^.\s]+$/.test(v); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/resolve-value.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCustomValue": () => (/* binding */ isCustomValue),
/* harmony export */   "resolveFinalValueInKeyframes": () => (/* binding */ resolveFinalValueInKeyframes)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");


var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionManager": () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");


var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
        this.subscriptions = [];
    }
    SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.subscriptions, handler);
        return function () { return (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(_this.subscriptions, handler); };
    };
    SubscriptionManager.prototype.notify = function (a, b, c) {
        var numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (var i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                var handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    };
    SubscriptionManager.prototype.getSize = function () {
        return this.subscriptions.length;
    };
    SubscriptionManager.prototype.clear = function () {
        this.subscriptions.length = 0;
    };
    return SubscriptionManager;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/time-conversion.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secondsToMilliseconds": () => (/* binding */ secondsToMilliseconds)
/* harmony export */ });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-constant.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConstant": () => (/* binding */ useConstant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instantAnimationState": () => (/* binding */ instantAnimationState)
/* harmony export */ });
var instantAnimationState = {
    current: false,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");



var useIsomorphicLayoutEffect = _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUnmountEffect": () => (/* binding */ useUnmountEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function useUnmountEffect(callback) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return function () { return callback(); }; }, []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/warn-once.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce)
/* harmony export */ });
var warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
        return;
    console.warn(message);
    if (element)
        console.warn(element);
    warned.add(message);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionValue": () => (/* binding */ MotionValue),
/* harmony export */   "motionValue": () => (/* binding */ motionValue)
/* harmony export */ });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");




var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init) {
        var _this = this;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Functions to notify when the velocity updates.
         *
         * @internal
         */
        this.velocityUpdateSubscribers = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = v;
            // Update timestamp
            var _a = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(_this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (_this.prev !== _this.current) {
                _this.updateSubscribers.notify(_this.current);
            }
            // Update velocity subscribers
            if (_this.velocityUpdateSubscribers.getSize()) {
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
            // Update render subscribers
            if (render) {
                _this.renderSubscribers.notify(_this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
    };
    MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * @public
     */
    MotionValue.prototype.getPrevious = function () {
        return this.prev;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.velocityPerSecond)(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.hasAnimated = true;
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init) {
    return new MotionValue(init);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMotionValue": () => (/* binding */ isMotionValue)
/* harmony export */ });
var isMotionValue = function (value) {
    return value !== null && typeof value === "object" && value.getVelocity;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveMotionValue": () => (/* binding */ resolveMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function resolveMotionValue(value) {
    var unwrappedValue = (0,_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value.get() : value;
    return (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isCustomValue)(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}




/***/ }),

/***/ "./node_modules/framesync/dist/es/create-render-step.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framesync/dist/es/create-render-step.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRenderStep": () => (/* binding */ createRenderStep)
/* harmony export */ });
function createRenderStep(runNextFrame) {
    let toRun = [];
    let toRunNextFrame = [];
    let numToRun = 0;
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = new WeakSet();
    const step = {
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        cancel: (callback) => {
            const index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        process: (frameData) => {
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}




/***/ }),

/***/ "./node_modules/framesync/dist/es/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/framesync/dist/es/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cancelSync": () => (/* binding */ cancelSync),
/* harmony export */   "flushSync": () => (/* binding */ flushSync),
/* harmony export */   "getFrameData": () => (/* binding */ getFrameData)
/* harmony export */ });
/* harmony import */ var _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-next-frame.mjs */ "./node_modules/framesync/dist/es/on-next-frame.mjs");
/* harmony import */ var _create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-render-step.mjs */ "./node_modules/framesync/dist/es/create-render-step.mjs");



const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
    delta: 0,
    timestamp: 0,
};
const stepsOrder = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = (0,_create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__.createRenderStep)(() => (runNextFrame = true));
    return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
            startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
const flushSync = stepsOrder.reduce((acc, key) => {
    acc[key] = () => steps[key].process(frame);
    return acc;
}, {});
const processStep = (stepId) => steps[stepId].process(frame);
const processFrame = (timestamp) => {
    runNextFrame = false;
    frame.delta = useDefaultElapsed
        ? _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultTimestep
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);
    }
};
const startLoop = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);
};
const getFrameData = () => frame;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sync);



/***/ }),

/***/ "./node_modules/framesync/dist/es/on-next-frame.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/framesync/dist/es/on-next-frame.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTimestep": () => (/* binding */ defaultTimestep),
/* harmony export */   "onNextFrame": () => (/* binding */ onNextFrame)
/* harmony export */ });
const defaultTimestep = (1 / 60) * 1000;
const getCurrentTime = typeof performance !== "undefined"
    ? () => performance.now()
    : () => Date.now();
const onNextFrame = typeof window !== "undefined"
    ? (callback) => window.requestAnimationFrame(callback)
    : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/decay.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/decay.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decay": () => (/* binding */ decay)
/* harmony export */ });
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget, }) {
    const state = { done: false, value: from };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal)
        amplitude = target - from;
    return {
        next: (t) => {
            const delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: () => { },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/keyframes.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/keyframes.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertOffsetToTimes": () => (/* binding */ convertOffsetToTimes),
/* harmony export */   "defaultEasing": () => (/* binding */ defaultEasing),
/* harmony export */   "defaultOffset": () => (/* binding */ defaultOffset),
/* harmony export */   "keyframes": () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/interpolate.mjs */ "./node_modules/popmotion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/index.mjs */ "./node_modules/popmotion/dist/es/easing/index.mjs");



function defaultEasing(values, easing) {
    return values.map(() => easing || _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
    const numValues = values.length;
    return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}
function keyframes({ from = 0, to = 1, ease, offset, duration = 300, }) {
    const state = { done: false, value: from };
    const values = Array.isArray(to) ? to : [from, to];
    const times = convertOffsetToTimes(offset && offset.length === values.length
        ? offset
        : defaultOffset(values), duration);
    function createInterpolator() {
        return (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_1__.interpolate)(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        });
    }
    let interpolator = createInterpolator();
    return {
        next: (t) => {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: () => {
            values.reverse();
            interpolator = createInterpolator();
        },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/spring.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/spring.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spring": () => (/* binding */ spring)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_find_spring_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/find-spring.mjs */ "./node_modules/popmotion/dist/es/animations/utils/find-spring.mjs");



const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = Object.assign({ velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = (0,_utils_find_spring_mjs__WEBPACK_IMPORTED_MODULE_0__.findSpring)(options);
        springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0.0, mass: 1.0 });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring(_a) {
    var { from = 0.0, to = 1.0, restSpeed = 2, restDelta } = _a, options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["from", "to", "restSpeed", "restDelta"]);
    const state = { done: false, value: from };
    let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration, } = getSpringOptions(options);
    let resolveSpring = zero;
    let resolveVelocity = zero;
    function createSpring() {
        const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        const initialDelta = to - from;
        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        restDelta !== null && restDelta !== void 0 ? restDelta : (restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4);
        if (dampingRatio < 1) {
            const angularFreq = (0,_utils_find_spring_mjs__WEBPACK_IMPORTED_MODULE_0__.calcAngularFreq)(undampedAngularFreq, dampingRatio);
            resolveSpring = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (to -
                    envelope *
                        (((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) /
                            angularFreq) *
                            Math.sin(angularFreq * t) +
                            initialDelta * Math.cos(angularFreq * t)));
            };
            resolveVelocity = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (dampingRatio *
                    undampedAngularFreq *
                    envelope *
                    ((Math.sin(angularFreq * t) *
                        (initialVelocity +
                            dampingRatio *
                                undampedAngularFreq *
                                initialDelta)) /
                        angularFreq +
                        initialDelta * Math.cos(angularFreq * t)) -
                    envelope *
                        (Math.cos(angularFreq * t) *
                            (initialVelocity +
                                dampingRatio *
                                    undampedAngularFreq *
                                    initialDelta) -
                            angularFreq *
                                initialDelta *
                                Math.sin(angularFreq * t)));
            };
        }
        else if (dampingRatio === 1) {
            resolveSpring = (t) => to -
                Math.exp(-undampedAngularFreq * t) *
                    (initialDelta +
                        (initialVelocity + undampedAngularFreq * initialDelta) *
                            t);
        }
        else {
            const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                const freqForT = Math.min(dampedAngularFreq * t, 300);
                return (to -
                    (envelope *
                        ((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) *
                            Math.sinh(freqForT) +
                            dampedAngularFreq *
                                initialDelta *
                                Math.cosh(freqForT))) /
                        dampedAngularFreq);
            };
        }
    }
    createSpring();
    return {
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                const currentVelocity = resolveVelocity(t) * 1000;
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: () => {
            velocity = -velocity;
            [from, to] = [to, from];
            createSpring();
        },
    };
}
spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";
const zero = (_t) => 0;




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_detect_animation_from_options_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/detect-animation-from-options.mjs */ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/interpolate.mjs */ "./node_modules/popmotion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_elapsed_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/elapsed.mjs */ "./node_modules/popmotion/dist/es/animations/utils/elapsed.mjs");






const framesync = (update) => {
    const passTimestamp = ({ delta }) => update(delta);
    return {
        start: () => framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(passTimestamp, true),
        stop: () => framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(passTimestamp),
    };
};
function animate(_a) {
    var _b, _c;
    var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let { to } = options;
    let driverControls;
    let repeatCount = 0;
    let computedDuration = options.duration;
    let latest;
    let isComplete = false;
    let isForwardPlayback = true;
    let interpolateFromNumber;
    const animator = (0,_utils_detect_animation_from_options_mjs__WEBPACK_IMPORTED_MODULE_2__.detectAnimationFromOptions)(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__.interpolate)([0, 100], [from, to], {
            clamp: false,
        });
        from = 0;
        to = 100;
    }
    const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = (0,_utils_elapsed_mjs__WEBPACK_IMPORTED_MODULE_4__.reverseElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        }
        else {
            elapsed = (0,_utils_elapsed_mjs__WEBPACK_IMPORTED_MODULE_4__.loopElapsed)(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror")
                animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback)
            delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            const state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber)
                latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0)
                computedDuration !== null && computedDuration !== void 0 ? computedDuration : (computedDuration = elapsed);
            if (repeatCount < repeatMax) {
                (0,_utils_elapsed_mjs__WEBPACK_IMPORTED_MODULE_4__.hasRepeatDelayElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            }
            else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: () => {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/inertia.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/inertia.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inertia": () => (/* binding */ inertia)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/popmotion/dist/es/animations/index.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/velocity-per-second.mjs */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.mjs");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");




function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop, }) {
    let currentAnimation;
    function isOutOfBounds(v) {
        return (min !== undefined && v < min) || (max !== undefined && v > max);
    }
    function boundaryNearest(v) {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.animate)(Object.assign(Object.assign({}, options), { driver, onUpdate: (v) => {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            }, onComplete,
            onStop }));
    }
    function startSpring(options) {
        startAnimation(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({ from, velocity, to: boundaryNearest(from) });
    }
    else {
        let target = power * velocity + from;
        if (typeof modifyTarget !== "undefined")
            target = modifyTarget(target);
        const boundary = boundaryNearest(target);
        const heading = boundary === min ? -1 : 1;
        let prev;
        let current;
        const checkBoundary = (v) => {
            prev = current;
            current = v;
            velocity = (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_2__.velocityPerSecond)(v - prev, (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().delta);
            if ((heading === 1 && v > boundary) ||
                (heading === -1 && v < boundary)) {
                startSpring({ from: v, to: boundary, velocity });
            }
        };
        startAnimation({
            type: "decay",
            from,
            velocity,
            timeConstant,
            power,
            restDelta,
            modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined,
        });
    }
    return {
        stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop(),
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectAnimationFromOptions": () => (/* binding */ detectAnimationFromOptions)
/* harmony export */ });
/* harmony import */ var _generators_spring_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/spring.mjs */ "./node_modules/popmotion/dist/es/animations/generators/spring.mjs");
/* harmony import */ var _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/keyframes.mjs */ "./node_modules/popmotion/dist/es/animations/generators/keyframes.mjs");
/* harmony import */ var _generators_decay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/decay.mjs */ "./node_modules/popmotion/dist/es/animations/generators/decay.mjs");




const types = { keyframes: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.keyframes, spring: _generators_spring_mjs__WEBPACK_IMPORTED_MODULE_1__.spring, decay: _generators_decay_mjs__WEBPACK_IMPORTED_MODULE_2__.decay };
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.keyframes;
    }
    else if (types[config.type]) {
        return types[config.type];
    }
    const keys = new Set(Object.keys(config));
    if (keys.has("ease") ||
        (keys.has("duration") && !keys.has("dampingRatio"))) {
        return _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.keyframes;
    }
    else if (keys.has("dampingRatio") ||
        keys.has("stiffness") ||
        keys.has("mass") ||
        keys.has("damping") ||
        keys.has("restSpeed") ||
        keys.has("restDelta")) {
        return _generators_spring_mjs__WEBPACK_IMPORTED_MODULE_1__.spring;
    }
    return _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.keyframes;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/elapsed.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/elapsed.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasRepeatDelayElapsed": () => (/* binding */ hasRepeatDelayElapsed),
/* harmony export */   "loopElapsed": () => (/* binding */ loopElapsed),
/* harmony export */   "reverseElapsed": () => (/* binding */ reverseElapsed)
/* harmony export */ });
function loopElapsed(elapsed, duration, delay = 0) {
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
    return isForwardPlayback
        ? loopElapsed(duration + -elapsed, duration, delay)
        : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/find-spring.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/find-spring.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcAngularFreq": () => (/* binding */ calcAngularFreq),
/* harmony export */   "findSpring": () => (/* binding */ findSpring),
/* harmony export */   "maxDamping": () => (/* binding */ maxDamping),
/* harmony export */   "maxDuration": () => (/* binding */ maxDuration),
/* harmony export */   "minDamping": () => (/* binding */ minDamping),
/* harmony export */   "minDuration": () => (/* binding */ minDuration)
/* harmony export */ });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clamp.mjs */ "./node_modules/popmotion/dist/es/utils/clamp.mjs");



const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    dampingRatio = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__.clamp)(minDamping, maxDamping, dampingRatio);
    duration = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__.clamp)(minDuration, maxDuration, duration / 1000);
    if (dampingRatio < 1) {
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = duration * 1000;
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/cubic-bezier.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/cubic-bezier.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubicBezier": () => (/* binding */ cubicBezier)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/popmotion/dist/es/easing/index.mjs");


const a = (a1, a2) => 1.0 - 3.0 * a2 + 3.0 * a1;
const b = (a1, a2) => 3.0 * a2 - 6.0 * a1;
const c = (a1) => 3.0 * a1;
const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
const getSlope = (t, a1, a2) => 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
const newtonIterations = 8;
const newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (let i = 0; i < newtonIterations; ++i) {
        const currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
        return _index_mjs__WEBPACK_IMPORTED_MODULE_0__.linear;
    const sampleValues = new Float32Array(kSplineTableSize);
    for (let i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        let intervalStart = 0.0;
        let currentSample = 1;
        const lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        const dist = (aX - sampleValues[currentSample]) /
            (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        const guessForT = intervalStart + dist * kSampleStepSize;
        const initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anticipate": () => (/* binding */ anticipate),
/* harmony export */   "backIn": () => (/* binding */ backIn),
/* harmony export */   "backInOut": () => (/* binding */ backInOut),
/* harmony export */   "backOut": () => (/* binding */ backOut),
/* harmony export */   "bounceIn": () => (/* binding */ bounceIn),
/* harmony export */   "bounceInOut": () => (/* binding */ bounceInOut),
/* harmony export */   "bounceOut": () => (/* binding */ bounceOut),
/* harmony export */   "circIn": () => (/* binding */ circIn),
/* harmony export */   "circInOut": () => (/* binding */ circInOut),
/* harmony export */   "circOut": () => (/* binding */ circOut),
/* harmony export */   "easeIn": () => (/* binding */ easeIn),
/* harmony export */   "easeInOut": () => (/* binding */ easeInOut),
/* harmony export */   "easeOut": () => (/* binding */ easeOut),
/* harmony export */   "linear": () => (/* binding */ linear)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/popmotion/dist/es/easing/utils.mjs");


const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
const BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
const BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
const linear = p => p;
const easeIn = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.createExpoIn)(2);
const easeOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(easeIn);
const easeInOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(easeIn);
const circIn = p => 1 - Math.sin(Math.acos(p));
const circOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(circIn);
const circInOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(circOut);
const backIn = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.createBackIn)(DEFAULT_OVERSHOOT_STRENGTH);
const backOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(backIn);
const backInOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(backIn);
const anticipate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.createAnticipate)(DEFAULT_OVERSHOOT_STRENGTH);
const ca = 4356.0 / 361.0;
const cb = 35442.0 / 1805.0;
const cc = 16061.0 / 1805.0;
const bounceOut = (p) => {
    if (p === 1 || p === 0)
        return p;
    const p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD
        ? 7.5625 * p2
        : p < BOUNCE_SECOND_THRESHOLD
            ? 9.075 * p2 - 9.9 * p + 3.4
            : p < BOUNCE_THIRD_THRESHOLD
                ? ca * p2 - cb * p + cc
                : 10.8 * p * p - 20.52 * p + 10.72;
};
const bounceIn = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(bounceOut);
const bounceInOut = (p) => p < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0))
    : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/utils.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/utils.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnticipate": () => (/* binding */ createAnticipate),
/* harmony export */   "createBackIn": () => (/* binding */ createBackIn),
/* harmony export */   "createExpoIn": () => (/* binding */ createExpoIn),
/* harmony export */   "mirrorEasing": () => (/* binding */ mirrorEasing),
/* harmony export */   "reverseEasing": () => (/* binding */ reverseEasing)
/* harmony export */ });
const reverseEasing = easing => p => 1 - easing(1 - p);
const mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
const createExpoIn = (power) => p => Math.pow(p, power);
const createBackIn = (power) => p => p * p * ((power + 1) * p - power);
const createAnticipate = (power) => {
    const backEasing = createBackIn(power);
    return p => (p *= 2) < 1
        ? 0.5 * backEasing(p)
        : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/clamp.mjs":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/clamp.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/distance.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/distance.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distance": () => (/* binding */ distance)
/* harmony export */ });
/* harmony import */ var _is_point_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-point.mjs */ "./node_modules/popmotion/dist/es/utils/is-point.mjs");
/* harmony import */ var _is_point_3d_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-point-3d.mjs */ "./node_modules/popmotion/dist/es/utils/is-point-3d.mjs");
/* harmony import */ var _inc_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inc.mjs */ "./node_modules/popmotion/dist/es/utils/inc.mjs");




const distance1D = (a, b) => Math.abs(a - b);
function distance(a, b) {
    if ((0,_inc_mjs__WEBPACK_IMPORTED_MODULE_0__.isNum)(a) && (0,_inc_mjs__WEBPACK_IMPORTED_MODULE_0__.isNum)(b)) {
        return distance1D(a, b);
    }
    else if ((0,_is_point_mjs__WEBPACK_IMPORTED_MODULE_1__.isPoint)(a) && (0,_is_point_mjs__WEBPACK_IMPORTED_MODULE_1__.isPoint)(b)) {
        const xDelta = distance1D(a.x, b.x);
        const yDelta = distance1D(a.y, b.y);
        const zDelta = (0,_is_point_3d_mjs__WEBPACK_IMPORTED_MODULE_2__.isPoint3D)(a) && (0,_is_point_3d_mjs__WEBPACK_IMPORTED_MODULE_2__.isPoint3D)(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hslaToRgba": () => (/* binding */ hslaToRgba)
/* harmony export */ });
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/inc.mjs":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/inc.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNum": () => (/* binding */ isNum),
/* harmony export */   "zeroPoint": () => (/* binding */ zeroPoint)
/* harmony export */ });
const zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
const isNum = (v) => typeof v === 'number';




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/interpolate.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/interpolate.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolate": () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var _progress_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.mjs */ "./node_modules/popmotion/dist/es/utils/progress.mjs");
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var _mix_color_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix-color.mjs */ "./node_modules/popmotion/dist/es/utils/mix-color.mjs");
/* harmony import */ var _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix-complex.mjs */ "./node_modules/popmotion/dist/es/utils/mix-complex.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var _clamp_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clamp.mjs */ "./node_modules/popmotion/dist/es/utils/clamp.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/popmotion/dist/es/utils/pipe.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");









const mixNumber = (from, to) => (p) => (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_2__.color.test(v)) {
            return _mix_color_mjs__WEBPACK_IMPORTED_MODULE_3__.mixColor;
        }
        else {
            return _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_4__.mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_4__.mixArray;
    }
    else if (typeof v === 'object') {
        return _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_4__.mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_5__.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate([from, to], [mixer]) {
    return (v) => mixer((0,_progress_mjs__WEBPACK_IMPORTED_MODULE_6__.progress)(from, to, v));
}
function slowInterpolate(input, mixers) {
    const inputLength = input.length;
    const lastInputIndex = inputLength - 1;
    return (v) => {
        let mixerIndex = 0;
        let foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            let i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        const progressInRange = (0,_progress_mjs__WEBPACK_IMPORTED_MODULE_6__.progress)(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(inputLength === output.length, 'Both input and output ranges must be the same length');
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return isClamp
        ? (v) => interpolator((0,_clamp_mjs__WEBPACK_IMPORTED_MODULE_7__.clamp)(input[0], input[inputLength - 1], v))
        : interpolator;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point-3d.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point-3d.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPoint3D": () => (/* binding */ isPoint3D)
/* harmony export */ });
/* harmony import */ var _is_point_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-point.mjs */ "./node_modules/popmotion/dist/es/utils/is-point.mjs");


const isPoint3D = (point) => (0,_is_point_mjs__WEBPACK_IMPORTED_MODULE_0__.isPoint)(point) && point.hasOwnProperty('z');




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPoint": () => (/* binding */ isPoint)
/* harmony export */ });
const isPoint = (point) => point.hasOwnProperty('x') && point.hasOwnProperty('y');




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-color.mjs":
/*!************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-color.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixColor": () => (/* binding */ mixColor),
/* harmony export */   "mixLinearColor": () => (/* binding */ mixLinearColor)
/* harmony export */ });
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/hex.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/rgba.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/hsla.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsla-to-rgba.mjs */ "./node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs");





const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
const colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_1__.hex, style_value_types__WEBPACK_IMPORTED_MODULE_2__.rgba, style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
const notAnimatable = (color) => `'${color}' is not an animatable color. Use the equivalent color code instead.`;
const mixColor = (from, to) => {
    let fromColorType = getColorType(from);
    let toColorType = getColorType(to);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!fromColorType, notAnimatable(from));
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!toColorType, notAnimatable(to));
    let fromColor = fromColorType.parse(from);
    let toColor = toColorType.parse(to);
    if (fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla) {
        fromColor = (0,_hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__.hslaToRgba)(fromColor);
        fromColorType = style_value_types__WEBPACK_IMPORTED_MODULE_2__.rgba;
    }
    if (toColorType === style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla) {
        toColor = (0,_hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__.hslaToRgba)(toColor);
        toColorType = style_value_types__WEBPACK_IMPORTED_MODULE_2__.rgba;
    }
    const blended = Object.assign({}, fromColor);
    return (v) => {
        for (const key in blended) {
            if (key !== "alpha") {
                blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_5__.mix)(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-complex.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-complex.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixArray": () => (/* binding */ mixArray),
/* harmony export */   "mixComplex": () => (/* binding */ mixComplex),
/* harmony export */   "mixObject": () => (/* binding */ mixObject)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var _mix_color_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix-color.mjs */ "./node_modules/popmotion/dist/es/utils/mix-color.mjs");
/* harmony import */ var _inc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inc.mjs */ "./node_modules/popmotion/dist/es/utils/inc.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/popmotion/dist/es/utils/pipe.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");







function getMixer(origin, target) {
    if ((0,_inc_mjs__WEBPACK_IMPORTED_MODULE_1__.isNum)(origin)) {
        return (v) => (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_2__.mix)(origin, target, v);
    }
    else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__.color.test(origin)) {
        return (0,_mix_color_mjs__WEBPACK_IMPORTED_MODULE_4__.mixColor)(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
const mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
const mixObject = (origin, target) => {
    const output = Object.assign(Object.assign({}, origin), target);
    const blendValue = {};
    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    const parsed = style_value_types__WEBPACK_IMPORTED_MODULE_5__.complex.parse(value);
    const numValues = parsed.length;
    let numNumbers = 0;
    let numRGB = 0;
    let numHSL = 0;
    for (let i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed, numNumbers, numRGB, numHSL };
}
const mixComplex = (origin, target) => {
    const template = style_value_types__WEBPACK_IMPORTED_MODULE_5__.complex.createTransformer(target);
    const originStats = analyse(origin);
    const targetStats = analyse(target);
    const canInterpolate = originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
        return (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__.pipe)(mixArray(originStats.parsed, targetStats.parsed), template);
    }
    else {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (p) => `${p > 0 ? target : origin}`;
    }
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix.mjs":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mix": () => (/* binding */ mix)
/* harmony export */ });
const mix = (from, to, progress) => -progress * from + progress * to + from;




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/pipe.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/pipe.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/progress.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/progress.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "progress": () => (/* binding */ progress)
/* harmony export */ });
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/velocity-per-second.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/velocity-per-second.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "velocityPerSecond": () => (/* binding */ velocityPerSecond)
/* harmony export */ });
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hex.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hex.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hex": () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/style-value-types/dist/es/color/rgba.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/style-value-types/dist/es/color/utils.mjs");



function parseHex(v) {
    let r = '';
    let g = '';
    let b = '';
    let a = '';
    if (v.length > 5) {
        r = v.substr(1, 2);
        g = v.substr(3, 2);
        b = v.substr(5, 2);
        a = v.substr(7, 2);
    }
    else {
        r = v.substr(1, 1);
        g = v.substr(2, 1);
        b = v.substr(3, 1);
        a = v.substr(4, 1);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)('#'),
    parse: parseHex,
    transform: _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform,
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hsla.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hsla.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hsla": () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.mjs */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/style-value-types/dist/es/color/utils.mjs");





const hsla = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)('hsl', 'hue'),
    parse: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.splitColor)('hue', 'saturation', 'lightness'),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ('hsla(' +
            Math.round(hue) +
            ', ' +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(saturation)) +
            ', ' +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(lightness)) +
            ', ' +
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha.transform(alpha$1)) +
            ')');
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/index.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/index.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "color": () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");
/* harmony import */ var _hex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.mjs */ "./node_modules/style-value-types/dist/es/color/hex.mjs");
/* harmony import */ var _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.mjs */ "./node_modules/style-value-types/dist/es/color/hsla.mjs");
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/style-value-types/dist/es/color/rgba.mjs");





const color = {
    test: (v) => _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v) || _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.test(v) || _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v),
    parse: (v) => {
        if (_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v)) {
            return _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.parse(v);
        }
        else if (_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v)) {
            return _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.parse(v);
        }
        else {
            return _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.parse(v);
        }
    },
    transform: (v) => {
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.isString)(v)
            ? v
            : v.hasOwnProperty('red')
                ? _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.transform(v)
                : _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.transform(v);
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/rgba.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/rgba.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgbUnit": () => (/* binding */ rgbUnit),
/* harmony export */   "rgba": () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/style-value-types/dist/es/color/utils.mjs");




const clampRgbUnit = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 255);
const rgbUnit = Object.assign(Object.assign({}, _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.number), { transform: (v) => Math.round(clampRgbUnit(v)) });
const rgba = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.isColorString)('rgb', 'red'),
    parse: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.splitColor)('red', 'green', 'blue'),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => 'rgba(' +
        rgbUnit.transform(red) +
        ', ' +
        rgbUnit.transform(green) +
        ', ' +
        rgbUnit.transform(blue) +
        ', ' +
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha.transform(alpha$1)) +
        ')',
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/utils.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/utils.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isColorString": () => (/* binding */ isColorString),
/* harmony export */   "splitColor": () => (/* binding */ splitColor)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");


const isColorString = (type, testProp) => (v) => {
    return Boolean(((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && _utils_mjs__WEBPACK_IMPORTED_MODULE_0__.singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v))
        return v;
    const [a, b, c, alpha] = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/filter.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/filter.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");



const maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function applyDefaultFilter(v) {
    let [name, value] = v.slice(0, -1).split('(');
    if (name === 'drop-shadow')
        return v;
    const [number] = value.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, '');
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + '(' + defaultValue + unit + ')';
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = Object.assign(Object.assign({}, _index_mjs__WEBPACK_IMPORTED_MODULE_1__.complex), { getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(' ') : v;
    } });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "complex": () => (/* binding */ complex)
/* harmony export */ });
/* harmony import */ var _color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color/index.mjs */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");




const colorToken = '${c}';
const numberToken = '${n}';
function test(v) {
    var _a, _b, _c, _d;
    return (isNaN(v) &&
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) &&
        ((_b = (_a = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0);
}
function analyse(v) {
    if (typeof v === 'number')
        v = `${v}`;
    const values = [];
    let numColors = 0;
    const colors = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.colorRegex);
    if (colors) {
        numColors = colors.length;
        v = v.replace(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.colorRegex, colorToken);
        values.push(...colors.map(_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color.parse));
    }
    const numbers = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex);
    if (numbers) {
        v = v.replace(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex, numberToken);
        values.push(...numbers.map(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_2__.number.parse));
    }
    return { values, numColors, tokenised: v };
}
function parse(v) {
    return analyse(v).values;
}
function createTransformer(v) {
    const { values, numColors, tokenised } = analyse(v);
    const numValues = values.length;
    return (v) => {
        let output = tokenised;
        for (let i = 0; i < numValues; i++) {
            output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? _color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color.transform(v[i]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.sanitize)(v[i]));
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === 'number' ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parse(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = { test, parse, createTransformer, getAnimatableNone };




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "number": () => (/* binding */ number),
/* harmony export */   "scale": () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");


const number = {
    test: (v) => typeof v === 'number',
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = Object.assign(Object.assign({}, number), { transform: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1) });
const scale = Object.assign(Object.assign({}, number), { default: 1 });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/units.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/units.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "percent": () => (/* binding */ percent),
/* harmony export */   "progressPercentage": () => (/* binding */ progressPercentage),
/* harmony export */   "px": () => (/* binding */ px),
/* harmony export */   "vh": () => (/* binding */ vh),
/* harmony export */   "vw": () => (/* binding */ vw)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");


const createUnitType = (unit) => ({
    test: (v) => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && v.endsWith(unit) && v.split(' ').length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = createUnitType('deg');
const percent = createUnitType('%');
const px = createUnitType('px');
const vh = createUnitType('vh');
const vw = createUnitType('vw');
const progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/utils.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/utils.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "colorRegex": () => (/* binding */ colorRegex),
/* harmony export */   "floatRegex": () => (/* binding */ floatRegex),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "sanitize": () => (/* binding */ sanitize),
/* harmony export */   "singleColorRegex": () => (/* binding */ singleColorRegex)
/* harmony export */ });
const clamp = (min, max) => (v) => Math.max(Math.min(v, max), min);
const sanitize = (v) => (v % 1 ? Number(v.toFixed(5)) : v);
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString(v) {
    return typeof v === 'string';
}




/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2765409972.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2765409972.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6e43b5502a7599cef7322dab4b825c6c/1e8ec/avalon_logo.png","srcSet":"/static/6e43b5502a7599cef7322dab4b825c6c/1e8ec/avalon_logo.png 184w","sizes":"(min-width: 184px) 184px, 100vw"},"sources":[{"srcSet":"/static/6e43b5502a7599cef7322dab4b825c6c/0a95e/avalon_logo.webp 184w","type":"image/webp","sizes":"(min-width: 184px) 184px, 100vw"}]},"width":184,"height":58}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3102439695.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3102439695.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/54711e8b0e8301952cb28ea2b66056a9/4d339/innovation-development_logo.png","srcSet":"/static/54711e8b0e8301952cb28ea2b66056a9/4d339/innovation-development_logo.png 207w","sizes":"(min-width: 207px) 207px, 100vw"},"sources":[{"srcSet":"/static/54711e8b0e8301952cb28ea2b66056a9/3a52f/innovation-development_logo.webp 207w","type":"image/webp","sizes":"(min-width: 207px) 207px, 100vw"}]},"width":207,"height":212}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/545293289.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/545293289.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/201952a9098945c8d5e6c7b3e594a5dd/dc5c1/riel_logo.png","srcSet":"/static/201952a9098945c8d5e6c7b3e594a5dd/dc5c1/riel_logo.png 149w","sizes":"(min-width: 149px) 149px, 100vw"},"sources":[{"srcSet":"/static/201952a9098945c8d5e6c7b3e594a5dd/d7b48/riel_logo.webp 149w","type":"image/webp","sizes":"(min-width: 149px) 149px, 100vw"}]},"width":149,"height":97}');

/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ }),

/***/ "./public/page-data/sq/d/1220587818.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1220587818.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"contentJson":{"AboutUsComponent":{"titleSection":"про нас","philosophy":"філософія","whatWeDo":"Ми реалізуємо своє бачення архітектури в найширшому значенні цього слова, починаючи від функцій, форми, внутрішнього змісту, і закінчуючи його впливом на людину і на навколишній простір.","link":"/","name":"Більше","color":"dark","imgDesc":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/351cf0c4dd65262d1064b2335a0ce0c7/ee770/aboutUs.jpg","srcSet":"/static/351cf0c4dd65262d1064b2335a0ce0c7/bca58/aboutUs.jpg 574w,\\n/static/351cf0c4dd65262d1064b2335a0ce0c7/ee770/aboutUs.jpg 747w","sizes":"(min-width: 747px) 747px, 100vw"},"sources":[{"srcSet":"/static/351cf0c4dd65262d1064b2335a0ce0c7/1c6da/aboutUs.webp 574w,\\n/static/351cf0c4dd65262d1064b2335a0ce0c7/2fda1/aboutUs.webp 747w","type":"image/webp","sizes":"(min-width: 747px) 747px, 100vw"}]},"width":747,"height":502}}},"imgMob":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","backgroundColor":"#181818","images":{"fallback":{"src":"/static/bc239babefde9599717d0969cf7554f2/7ed1e/aboutUs-sm.jpg","srcSet":"/static/bc239babefde9599717d0969cf7554f2/7ed1e/aboutUs-sm.jpg 381w","sizes":"100vw"},"sources":[{"srcSet":"/static/bc239babefde9599717d0969cf7554f2/4e959/aboutUs-sm.webp 381w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.1811023622047243}}}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/1688527345.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1688527345.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"contentJson":{"menu":[{"name":"Головна","count":"[01]","link":"/"},{"name":"Проєкти","count":"[02]","link":"/"},{"name":"Послуги","count":"[03]","link":"/"},{"name":"Про нас","count":"[04]","link":"/"},{"name":"Контакти","count":"[05]","link":"/"}],"langList":[{"link":"/","name":"UA"},{"link":"/","name":"EN"}],"serviceListComponent":{"colorComponent":"dark","linkComponent":"/","nameComponent":"Всі проєкти","titleComponent":"послуги"},"services":[{"color":"light","link":"/","name":"Більше","number":"[01]","title":"архітектурне проєктування","imgDesc":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/78fcff6f8d3cd89f4f968447d1d40501/bcb99/services1.jpg","srcSet":"/static/78fcff6f8d3cd89f4f968447d1d40501/bcb99/services1.jpg 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/78fcff6f8d3cd89f4f968447d1d40501/0f66e/services1.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":748}}},"imgMob":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9cf2dca420f910f27d26109614e4a1b3/69d3f/services1-sm.jpg","srcSet":"/static/9cf2dca420f910f27d26109614e4a1b3/cad7b/services1-sm.jpg 574w,\\n/static/9cf2dca420f910f27d26109614e4a1b3/69d3f/services1-sm.jpg 768w","sizes":"(min-width: 768px) 768px, 100vw"},"sources":[{"srcSet":"/static/9cf2dca420f910f27d26109614e4a1b3/d09d1/services1-sm.webp 574w,\\n/static/9cf2dca420f910f27d26109614e4a1b3/65b39/services1-sm.webp 768w","type":"image/webp","sizes":"(min-width: 768px) 768px, 100vw"}]},"width":768,"height":300}}}},{"color":"light","link":"/","name":"Більше","number":"[02]","title":"архітектурна візуалізація","imgDesc":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#988888","images":{"fallback":{"src":"/static/0183bd9371573004e5da110a29e6d9ac/bcb99/services2.jpg","srcSet":"/static/0183bd9371573004e5da110a29e6d9ac/bcb99/services2.jpg 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/0183bd9371573004e5da110a29e6d9ac/0f66e/services2.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":748}}},"imgMob":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/5e792bff4382675f808cabc7a4f4ddde/69d3f/services2-sm.jpg","srcSet":"/static/5e792bff4382675f808cabc7a4f4ddde/cad7b/services2-sm.jpg 574w,\\n/static/5e792bff4382675f808cabc7a4f4ddde/69d3f/services2-sm.jpg 768w","sizes":"(min-width: 768px) 768px, 100vw"},"sources":[{"srcSet":"/static/5e792bff4382675f808cabc7a4f4ddde/d09d1/services2-sm.webp 574w,\\n/static/5e792bff4382675f808cabc7a4f4ddde/65b39/services2-sm.webp 768w","type":"image/webp","sizes":"(min-width: 768px) 768px, 100vw"}]},"width":768,"height":300}}}},{"color":"light","link":"/","name":"Більше","number":"[03]","title":"графічне оформлення ","imgDesc":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/b6da5cee6b07a29b3dd1de25f9f904e0/bcb99/services3.jpg","srcSet":"/static/b6da5cee6b07a29b3dd1de25f9f904e0/bcb99/services3.jpg 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/b6da5cee6b07a29b3dd1de25f9f904e0/0f66e/services3.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":748}}},"imgMob":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/a65a9abc095dd1ab536bb92887677c77/69d3f/services3-sm.jpg","srcSet":"/static/a65a9abc095dd1ab536bb92887677c77/cad7b/services3-sm.jpg 574w,\\n/static/a65a9abc095dd1ab536bb92887677c77/69d3f/services3-sm.jpg 768w","sizes":"(min-width: 768px) 768px, 100vw"},"sources":[{"srcSet":"/static/a65a9abc095dd1ab536bb92887677c77/d09d1/services3-sm.webp 574w,\\n/static/a65a9abc095dd1ab536bb92887677c77/65b39/services3-sm.webp 768w","type":"image/webp","sizes":"(min-width: 768px) 768px, 100vw"}]},"width":768,"height":300}}}},{"color":"light","link":"/","name":"Більше","number":"[04]","title":"Консультації","imgDesc":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/07f6944c4c9da9bdc65745f421244580/bcb99/services4.jpg","srcSet":"/static/07f6944c4c9da9bdc65745f421244580/bcb99/services4.jpg 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/07f6944c4c9da9bdc65745f421244580/0f66e/services4.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":748}}},"imgMob":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/f038efbe6103e1125ac14d3178125e39/69d3f/services4-sm.jpg","srcSet":"/static/f038efbe6103e1125ac14d3178125e39/cad7b/services4-sm.jpg 574w,\\n/static/f038efbe6103e1125ac14d3178125e39/69d3f/services4-sm.jpg 768w","sizes":"(min-width: 768px) 768px, 100vw"},"sources":[{"srcSet":"/static/f038efbe6103e1125ac14d3178125e39/d09d1/services4-sm.webp 574w,\\n/static/f038efbe6103e1125ac14d3178125e39/65b39/services4-sm.webp 768w","type":"image/webp","sizes":"(min-width: 768px) 768px, 100vw"}]},"width":768,"height":300}}}}],"processListComponent":{"colorComponent":"dark","linkComponent":"/","titleComponent":"процес","nameComponent":"Більше"},"processes":[{"number":"[01]","text":"Ознайомлення з умовами середовища для проектування та наявними юридичними документами щодо оренди та власності. Визначення обгрунтованих побажань Замовника до планувальних, архітектурних, інженерних і технологічних рішень об`єкта будівництва, його основних параметрів та організації його будівництва, відномідно до діючий державних будівельних норм.","title":"Аналіз вихідних даних/формування зп"},{"number":"[02]","text":"Розробка архітектурних пропозицій щодо розміщення об`єкта/ів будівництва на земельній ділянці, обгрунтування місця, опрацювання можливих варіантів технологічних та інженерних характеристик об`єкта, планувальні схеми, пропозиція рішень фасадів.","title":"Клаузура/ескіз-ідея"},{"number":"[03]","text":"Передпроектні пропозиції, ескізи об’єктів архітектури затверджуються замовником щодо відповідності наданих проектних рішень укладеному завданню на проектування згідно побажань Замовника.","title":"Затвердження ідеї"},{"number":"[04]","text":"Текстові та графічні матеріали з проектними пропозиціями визначення попередніх містобудівних, архітектурних, художніх та функціональних рішень об\'єкта, техніко-економічних показників.","title":"Містобудівний розрахунок"},{"number":"[05]","text":"Проводиться посадка будівлі на ділянку із урахуванням навколишньої забудови: протипожежних та побутових розривів, розташування інженерних мереж, орієнтації будівлі по сторонах світу. Розробляються схематичні планувальні рішення, визначаються основні функціональні зони та зовнішній вигляд майбутньої будівлі. Визначення класу наслідків (СС1; СС2; СС3).","title":"ескіз-проект"}],"projectListComponent":{"colorComponent":"dark","linkComponent":"/","titleComponent":"проєкт","nameComponent":"Всі проєкти"},"projects":[{"date":"2018 – 2019","address":"Львів, вул. Зелена, 37","link":"/","title":"Avalon 37","name":"Більше","color":"light","img":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9cb436eff69c1458cfd51f8c329b5246/a6fad/projects1.jpg","srcSet":"/static/9cb436eff69c1458cfd51f8c329b5246/c64d4/projects1.jpg 574w,\\n/static/9cb436eff69c1458cfd51f8c329b5246/a6fad/projects1.jpg 593w","sizes":"(min-width: 593px) 593px, 100vw"},"sources":[{"srcSet":"/static/9cb436eff69c1458cfd51f8c329b5246/cd765/projects1.webp 574w,\\n/static/9cb436eff69c1458cfd51f8c329b5246/ec4ac/projects1.webp 593w","type":"image/webp","sizes":"(min-width: 593px) 593px, 100vw"}]},"width":593,"height":536}}}},{"date":"2018 – 2022","address":"Львів, Залізнична, 7","link":"/","title":"Шенген","name":"Більше","color":"light","img":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#b8c8d8","images":{"fallback":{"src":"/static/a8a4294eafe43d1094324911a7513e55/a6fad/projects3.jpg","srcSet":"/static/a8a4294eafe43d1094324911a7513e55/c64d4/projects3.jpg 574w,\\n/static/a8a4294eafe43d1094324911a7513e55/a6fad/projects3.jpg 593w","sizes":"(min-width: 593px) 593px, 100vw"},"sources":[{"srcSet":"/static/a8a4294eafe43d1094324911a7513e55/cd765/projects3.webp 574w,\\n/static/a8a4294eafe43d1094324911a7513e55/ec4ac/projects3.webp 593w","type":"image/webp","sizes":"(min-width: 593px) 593px, 100vw"}]},"width":593,"height":536}}}},{"date":"2018 – 2021","address":"Львів, Зелена, 204","link":"/","title":"Avalon zelena street","name":"Більше","color":"light","img":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#98b8d8","images":{"fallback":{"src":"/static/104ca93d3b1684eb60fc0c5a16eb4ffa/a6fad/projects2.jpg","srcSet":"/static/104ca93d3b1684eb60fc0c5a16eb4ffa/c64d4/projects2.jpg 574w,\\n/static/104ca93d3b1684eb60fc0c5a16eb4ffa/a6fad/projects2.jpg 593w","sizes":"(min-width: 593px) 593px, 100vw"},"sources":[{"srcSet":"/static/104ca93d3b1684eb60fc0c5a16eb4ffa/cd765/projects2.webp 574w,\\n/static/104ca93d3b1684eb60fc0c5a16eb4ffa/ec4ac/projects2.webp 593w","type":"image/webp","sizes":"(min-width: 593px) 593px, 100vw"}]},"width":593,"height":536}}}},{"date":"2018 – 2020","address":"Львів, пр.Чорновола, 16-А","link":"/","title":"Центр розвитку дітей7","name":"Більше","color":"light","img":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#e8e8f8","images":{"fallback":{"src":"/static/68b4d5c254468d78aa47180f2f6b7bf9/a6fad/projects4.jpg","srcSet":"/static/68b4d5c254468d78aa47180f2f6b7bf9/c64d4/projects4.jpg 574w,\\n/static/68b4d5c254468d78aa47180f2f6b7bf9/a6fad/projects4.jpg 593w","sizes":"(min-width: 593px) 593px, 100vw"},"sources":[{"srcSet":"/static/68b4d5c254468d78aa47180f2f6b7bf9/cd765/projects4.webp 574w,\\n/static/68b4d5c254468d78aa47180f2f6b7bf9/ec4ac/projects4.webp 593w","type":"image/webp","sizes":"(min-width: 593px) 593px, 100vw"}]},"width":593,"height":536}}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/1857043713.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1857043713.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"contentJson":{"whyUsComponent":{"activity":"Разом з нашими клієнтами та партнерами ми формуємо міста нашого майбутнього","exploitation":"в експлуатацію","meters":"167 k","objects":"15","objectsHanded":"об’єктів здано","squareMeters":"метрів квадратних","whyWe":"чому ми?","years":"4 +","yearsOnMarket":"роки на ринку"}},"WhyUsBG":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAcICf/EABYBAQEBAAAAAAAAAAAAAAAAAAQCA//aAAwDAQACEAMQAAAB1cjeJ1znFajCGm//xAAZEAACAwEAAAAAAAAAAAAAAAAFBgIDBAf/2gAIAQEAAQUCWGUY2qrd0GeQjkZzFGfldFG5ZKU1SOkFlbjr/8QAIBEAAQMCBwAAAAAAAAAAAAAAAQIDEQAhEhMxUnGh4v/aAAgBAwEBPwF91ZaSJuFYZSAJ1BPMibG1ZJ39eq//xAAiEQEAAAUCBwAAAAAAAAAAAAABAgMRITFRYQAEBRITMkH/2gAIAQIBAT8B5WZFD3NVpKhiboK0cDb7rnQow9Rm0Pcxbyu23H//xAAmEAACAgIBBAEEAwAAAAAAAAABAgMEERIhAAUTIgYUMTIzQVJx/9oACAEBAAY/AqnydGjrVLMEgmS6UhInh9ZovYhdd8GMgtkOmOen7RQpQUJZRAIrokeeVXNJpbkLRvA1bxDO0V5Xgf7HxckiOKG1BPEoIjeSFLDY2OV8u3uEbZeckY1J467gl2GK4kPcZfClqNLCxYNvHiWUOI8eKLGuP1p/RcUi0UZL/QxuSineP8NG49k1JXU8akjGD1Kq/H+xqqnhR2mgAMkscAQYGSSf9JP89f/EABkQAQEAAwEAAAAAAAAAAAAAAAERACExQf/aAAgBAQABPyFAt7d07ZA8DV0f7bdryefqbuBBRcYRjKCFvXLNr+6j2xokYZ4KSNbvRqen/agx4oQowBoL4FY2nP/aAAwDAQACAAMAAAAQv+//xAAbEQEBAQACAwAAAAAAAAAAAAABESExQVGxwf/aAAgBAwEBPxB4gEpGDBFEAQ6FxCRGEMvOPj143//EABkRAQEBAAMAAAAAAAAAAAAAAAERIQBBYf/aAAgBAgEBPxAJG1NCUAUARlQynDFgQAEAkAyASHQHt//EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8QRV6+LvicRffIl9IYaZgTRmv1/OcqbwsvKdxrKgqBCBRfMKZWKpD+n5vI6dUaslTgBJMgUsf/2Q=="},"images":{"fallback":{"src":"/static/bc664c511f00628b3492faac410e67f4/aef87/whyus.jpg","srcSet":"/static/bc664c511f00628b3492faac410e67f4/cc777/whyus.jpg 574w,\\n/static/bc664c511f00628b3492faac410e67f4/1af6d/whyus.jpg 1000w,\\n/static/bc664c511f00628b3492faac410e67f4/3a520/whyus.jpg 1200w,\\n/static/bc664c511f00628b3492faac410e67f4/36ef9/whyus.jpg 1440w,\\n/static/bc664c511f00628b3492faac410e67f4/aef87/whyus.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/bc664c511f00628b3492faac410e67f4/89534/whyus.webp 574w,\\n/static/bc664c511f00628b3492faac410e67f4/14cba/whyus.webp 1000w,\\n/static/bc664c511f00628b3492faac410e67f4/51143/whyus.webp 1200w,\\n/static/bc664c511f00628b3492faac410e67f4/25e50/whyus.webp 1440w,\\n/static/bc664c511f00628b3492faac410e67f4/ff501/whyus.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":950},"id":"b3661d2f-a45c-5da0-8145-f60cfa68b0a2"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3506380384.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3506380384.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"contentJson":{"StartNewProjectComponent":{"startNewProject":"збираєтесь започаткувати проєкт?","link":"/","name":"Зв\'язатися","color":"light"}},"StartNewProjectBg":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAcJ/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAB13h40sPCgf/EABgQAAMBAQAAAAAAAAAAAAAAAAMEBQEG/9oACAEBAAEFAuzf2WtdnlMjnPWGA//EAB8RAQACAQMFAAAAAAAAAAAAAAECAwAEESEiMkFRcf/aAAgBAwEBPwGzqlaPIQNjx2rhpqJAtZugvMvX3P/EABwRAAIBBQEAAAAAAAAAAAAAAAECMQADBCFB0f/aAAgBAgEBPwG3pEYaJaeyvabKyFYqLhAER5X/xAAjEAACAgEDAwUAAAAAAAAAAAACAwEEEQUSEwAxMhUhIiRB/9oACAEBAAY/AkMSoDNh8a+TMrU42AIPJcY5eKJLaG4fefKP2bxanqYWkqGFmuxELnfdapstrmDK7TaYk0iJfxyKlcaliPVaz6/X+wnkw3RYMxw1q8SSNRqrLwzmEB37df/EABkQAQEBAAMAAAAAAAAAAAAAAAExACFBUf/aAAgBAQABPyEL/u+S0CSiq0MNSdZAH+APHM+nA8KFIjaojf/aAAwDAQACAAMAAAAQAA//xAAZEQEBAAMBAAAAAAAAAAAAAAABEQAhMUH/2gAIAQMBAT8Q0WJEKFqnFoItSamMeLEKoVgQr4AZ/8QAGREBAQADAQAAAAAAAAAAAAAAAREAITFR/9oACAECAQE/ELWKlKihno0oyU7YYyO4I4EhVLw6uf/EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8QKhWtwty0iqFo4sW0h6KCyHEcWqSVV1FOoiAv/9k="},"images":{"fallback":{"src":"/static/e3cc2e8c087e7950d9ad9c694c991074/165a9/lastbg.jpg","srcSet":"/static/e3cc2e8c087e7950d9ad9c694c991074/da1d1/lastbg.jpg 574w,\\n/static/e3cc2e8c087e7950d9ad9c694c991074/e797e/lastbg.jpg 1000w,\\n/static/e3cc2e8c087e7950d9ad9c694c991074/4e278/lastbg.jpg 1200w,\\n/static/e3cc2e8c087e7950d9ad9c694c991074/7c30a/lastbg.jpg 1440w,\\n/static/e3cc2e8c087e7950d9ad9c694c991074/165a9/lastbg.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/e3cc2e8c087e7950d9ad9c694c991074/247c3/lastbg.webp 574w,\\n/static/e3cc2e8c087e7950d9ad9c694c991074/78afd/lastbg.webp 1000w,\\n/static/e3cc2e8c087e7950d9ad9c694c991074/f5cdd/lastbg.webp 1200w,\\n/static/e3cc2e8c087e7950d9ad9c694c991074/0c0df/lastbg.webp 1440w,\\n/static/e3cc2e8c087e7950d9ad9c694c991074/db5f1/lastbg.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":450},"id":"869528b8-1d7a-5be1-880b-d90bd49fef28"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/456200000.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/456200000.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"contentJson":{"HeroComponent":{"aboutProject":"Kожен наш проект розробляється за умови пошуку правильних орієнтирів та глибокого проникнення в екологічні процеси і, відповідно до цього, створюється гармонійний взаємозв’язок архітектури і її природного оточення.","name":"Зв’язатися","color":"light","link":"/","ourVision":"наше бачення","weUniteArch":"єднаємо архітектуру з природою"}},"HeroBG":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAcICf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/9oADAMBAAIQAxAAAAFS0mldYaA5XLbDO//EABsQAAICAwEAAAAAAAAAAAAAAAMEBQYBAgcT/9oACAEBAAEFAs15pcVRgk2EzRbGm/ImWBW6EAHC5Rj9f//EAB4RAAIBAwUAAAAAAAAAAAAAAAECEQADMRJBkcHw/9oACAEDAQE/AUVVFtwIyvGkbRmZ7oWxmT6K/8QAIBEAAgIBAwUAAAAAAAAAAAAAARECAwAxQWEEEiMyof/aAAgBAgEBPwGPUW3WXVTke2XkIZ30AbSQGqI2wzD9B844z//EACcQAAMAAQIFAgcAAAAAAAAAAAECAwQRIQAFEhMUMlEiMTRCYXHC/9oACAEBAAY/AoPjcqOVy/KKPjZ2OVy4VbonHx73iKJKxoXMoBpk9QVy7gA+RGXSO7SVZbGkMmLFKwqvqm6nfooEcA7qp1A0Sei6fIHT+TxynEle08TKKrk4s6umPkKG2W8VInUD2orDgARkB5mZt210+sp+OKfAnrb7R7/rj//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExQZH/2gAIAQEAAT8hyhHzhuHIN1hxthZuQ2YglTcHNUpBNvnSA2+zzOHXDFw1xCEIawpAEAg5gTNv1whhAQBgVoMf/9oADAMBAAIAAwAAABAPH//EABkRAQEBAQEBAAAAAAAAAAAAAAERIQAxQf/aAAgBAwEBPxADaUSGUioCJQlHK5QKyC7Na8M+Hf/EABgRAQEBAQEAAAAAAAAAAAAAAAERMSFB/9oACAECAQE/EEfJUBUoGo0EDL0GgAGFr0atd1bvcn//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMVH/2gAIAQEAAT8QY0iXZsuQUr7SeScYvRsygKIQ/wBGcGPakB4CKlB8shR8TtyAiB0oFgQIABACBOuNfGCBAAAHACBw3//Z"},"images":{"fallback":{"src":"/static/fa12298aa01eb5ccc1193d234ecb7b66/aef87/main.jpg","srcSet":"/static/fa12298aa01eb5ccc1193d234ecb7b66/cc777/main.jpg 574w,\\n/static/fa12298aa01eb5ccc1193d234ecb7b66/1af6d/main.jpg 1000w,\\n/static/fa12298aa01eb5ccc1193d234ecb7b66/3a520/main.jpg 1200w,\\n/static/fa12298aa01eb5ccc1193d234ecb7b66/36ef9/main.jpg 1440w,\\n/static/fa12298aa01eb5ccc1193d234ecb7b66/aef87/main.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/fa12298aa01eb5ccc1193d234ecb7b66/89534/main.webp 574w,\\n/static/fa12298aa01eb5ccc1193d234ecb7b66/14cba/main.webp 1000w,\\n/static/fa12298aa01eb5ccc1193d234ecb7b66/51143/main.webp 1200w,\\n/static/fa12298aa01eb5ccc1193d234ecb7b66/25e50/main.webp 1440w,\\n/static/fa12298aa01eb5ccc1193d234ecb7b66/ff501/main.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":950},"id":"131db1cf-f070-5bdd-a101-02b2b31e682f"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/501493203.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/501493203.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"contentJson":{"footer":{"aboutUs":{"link":"/","title":"про нас"},"contacts":{"city":"79028, м.Львів,","link":"tel:+380984038786","street":"вул.Пасічна, 154/2","phone":"+38 (098) 403 87 86","title":"контакти"},"logo":{"link":"/","path":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a5b02b84d1ef2855f72957c3d3f450a7/6acfd/Logo-footer.png","srcSet":"/static/a5b02b84d1ef2855f72957c3d3f450a7/6acfd/Logo-footer.png 198w","sizes":"(min-width: 198px) 198px, 100vw"},"sources":[{"srcSet":"/static/a5b02b84d1ef2855f72957c3d3f450a7/da99b/Logo-footer.webp 198w","type":"image/webp","sizes":"(min-width: 198px) 198px, 100vw"}]},"width":198,"height":86}}}},"copyright":{"rights":"all rights reserved","kvadr":"2021 KVADR GROUP"},"facebook":{"link":"/"},"instagram":{"link":"/"},"project":{"items":[{"link":"/","title":"Реалізовані об’єкти"},{"link":"/","title":"Концептуальні рішення"},{"link":"/","title":"Конкурсні проекти"}],"link":"/","title":"проєкти"},"projecting":{"items":[{"link":"/","title":"Послуги"},{"link":"/","title":"Візуалізація"},{"link":"/","title":"Графічне оформлення"},{"link":"/","title":"Консультації"},{"link":"/","title":"Авторський супровід"},{"link":"/","title":"Дизайн інтер’єрів"},{"link":"/","title":"Ландшафтний дизайн"}],"link":"/","title":"проєктування"}}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map