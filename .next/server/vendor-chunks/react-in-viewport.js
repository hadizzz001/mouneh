"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-in-viewport";
exports.ids = ["vendor-chunks/react-in-viewport"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-in-viewport/dist/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-in-viewport/dist/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.useInViewport = exports.handleViewport = exports[\"default\"] = exports.customProps = void 0;\nvar _handleViewport = _interopRequireDefault(__webpack_require__(/*! ./lib/handleViewport */ \"(ssr)/./node_modules/react-in-viewport/dist/es/lib/handleViewport.js\"));\nexports.handleViewport = _handleViewport.default;\nvar _useInViewport = _interopRequireDefault(__webpack_require__(/*! ./lib/useInViewport */ \"(ssr)/./node_modules/react-in-viewport/dist/es/lib/useInViewport.js\"));\nexports.useInViewport = _useInViewport.default;\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\nvar customProps = ['inViewport', 'enterCount', 'leaveCount'];\nexports.customProps = customProps;\nvar _default = _handleViewport.default;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW4tdmlld3BvcnQvZGlzdC9lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixrQkFBa0I7QUFDbEIscUJBQXFCLEdBQUcsc0JBQXNCLEdBQUcsa0JBQWUsR0FBRyxtQkFBbUI7QUFDdEYsNkNBQTZDLG1CQUFPLENBQUMsa0dBQXNCO0FBQzNFLHNCQUFzQjtBQUN0Qiw0Q0FBNEMsbUJBQU8sQ0FBQyxnR0FBcUI7QUFDekUscUJBQXFCO0FBQ3JCLHVDQUF1Qyx1Q0FBdUM7QUFDOUU7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdW5laC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbi12aWV3cG9ydC9kaXN0L2VzL2luZGV4LmpzP2RmNDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnVzZUluVmlld3BvcnQgPSBleHBvcnRzLmhhbmRsZVZpZXdwb3J0ID0gZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5jdXN0b21Qcm9wcyA9IHZvaWQgMDtcbnZhciBfaGFuZGxlVmlld3BvcnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9oYW5kbGVWaWV3cG9ydFwiKSk7XG5leHBvcnRzLmhhbmRsZVZpZXdwb3J0ID0gX2hhbmRsZVZpZXdwb3J0LmRlZmF1bHQ7XG52YXIgX3VzZUluVmlld3BvcnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi91c2VJblZpZXdwb3J0XCIpKTtcbmV4cG9ydHMudXNlSW5WaWV3cG9ydCA9IF91c2VJblZpZXdwb3J0LmRlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxudmFyIGN1c3RvbVByb3BzID0gWydpblZpZXdwb3J0JywgJ2VudGVyQ291bnQnLCAnbGVhdmVDb3VudCddO1xuZXhwb3J0cy5jdXN0b21Qcm9wcyA9IGN1c3RvbVByb3BzO1xudmFyIF9kZWZhdWx0ID0gX2hhbmRsZVZpZXdwb3J0LmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-in-viewport/dist/es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-in-viewport/dist/es/lib/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-in-viewport/dist/es/lib/constants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.noop = exports.defaultProps = exports.defaultOptions = exports.defaultConfig = void 0;\nvar defaultOptions = {};\nexports.defaultOptions = defaultOptions;\nvar defaultConfig = {\n  disconnectOnLeave: false\n};\nexports.defaultConfig = defaultConfig;\nvar noop = () => {};\nexports.noop = noop;\nvar defaultProps = {\n  onEnterViewport: noop,\n  onLeaveViewport: noop\n};\nexports.defaultProps = defaultProps;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW4tdmlld3BvcnQvZGlzdC9lcy9saWIvY29uc3RhbnRzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGtCQUFrQjtBQUNsQixZQUFZLEdBQUcsb0JBQW9CLEdBQUcsc0JBQXNCLEdBQUcscUJBQXFCO0FBQ3BGO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdW5laC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbi12aWV3cG9ydC9kaXN0L2VzL2xpYi9jb25zdGFudHMuanM/ZDQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubm9vcCA9IGV4cG9ydHMuZGVmYXVsdFByb3BzID0gZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuZGVmYXVsdENvbmZpZyA9IHZvaWQgMDtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGRpc2Nvbm5lY3RPbkxlYXZlOiBmYWxzZVxufTtcbmV4cG9ydHMuZGVmYXVsdENvbmZpZyA9IGRlZmF1bHRDb25maWc7XG52YXIgbm9vcCA9ICgpID0+IHt9O1xuZXhwb3J0cy5ub29wID0gbm9vcDtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIG9uRW50ZXJWaWV3cG9ydDogbm9vcCxcbiAgb25MZWF2ZVZpZXdwb3J0OiBub29wXG59O1xuZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-in-viewport/dist/es/lib/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-in-viewport/dist/es/lib/handleViewport.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-in-viewport/dist/es/lib/handleViewport.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports[\"default\"] = void 0;\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nvar _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ \"(ssr)/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\"));\nvar _useInViewport = _interopRequireDefault(__webpack_require__(/*! ./useInViewport */ \"(ssr)/./node_modules/react-in-viewport/dist/es/lib/useInViewport.js\"));\nvar _constants = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/react-in-viewport/dist/es/lib/constants.js\");\nvar _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\nvar _excluded = [\"onEnterViewport\", \"onLeaveViewport\"];\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nvar isFunctionalComponent = Component => {\n  return typeof Component === 'function' && !(Component.prototype && Component.prototype.render);\n};\nvar isReactComponent = Component => {\n  return Component.prototype && Component.prototype.isReactComponent;\n};\nfunction handleViewport(TargetComponent, options, config) {\n  if (options === void 0) {\n    options = _constants.defaultOptions;\n  }\n  if (config === void 0) {\n    config = _constants.defaultConfig;\n  }\n  var ForwardedRefComponent = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {\n    var refProps = _extends({\n      forwardedRef: ref\n    }, isReactComponent(TargetComponent) && !isFunctionalComponent(TargetComponent) ? {\n      ref\n    } : {});\n    return /*#__PURE__*/(0, _jsxRuntime.jsx)(TargetComponent, _extends({}, props, refProps));\n  });\n  function InViewport(_ref) {\n    var {\n        onEnterViewport = _constants.noop,\n        onLeaveViewport = _constants.noop\n      } = _ref,\n      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);\n    var node = (0, _react.useRef)();\n    var {\n      inViewport,\n      enterCount,\n      leaveCount\n    } = (0, _useInViewport.default)(node, options, config, {\n      onEnterViewport,\n      onLeaveViewport\n    });\n    var props = _extends({}, restProps, {\n      inViewport,\n      enterCount,\n      leaveCount\n    });\n    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ForwardedRefComponent, _extends({}, props, {\n      ref: node\n    }));\n  }\n  var name = TargetComponent.displayName || TargetComponent.name || 'Component';\n  InViewport.displayName = \"handleViewport(\" + name + \")\";\n  return (0, _hoistNonReactStatics.default)(InViewport, ForwardedRefComponent);\n}\nvar _default = handleViewport;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW4tdmlld3BvcnQvZGlzdC9lcy9saWIvaGFuZGxlVmlld3BvcnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsa0JBQWtCO0FBQ2xCLGtCQUFlO0FBQ2YsYUFBYSxtQkFBTyxDQUFDLHdHQUFPO0FBQzVCLG1EQUFtRCxtQkFBTyxDQUFDLGlIQUF5QjtBQUNwRiw0Q0FBNEMsbUJBQU8sQ0FBQyw0RkFBaUI7QUFDckUsaUJBQWlCLG1CQUFPLENBQUMsb0ZBQWE7QUFDdEMsa0JBQWtCLG1CQUFPLENBQUMsZ0lBQW1CO0FBQzdDO0FBQ0EsdUNBQXVDLHVDQUF1QztBQUM5RSwyREFBMkQsK0JBQStCLGlCQUFpQixzQ0FBc0MsWUFBWSxZQUFZLHVCQUF1QixPQUFPLHFCQUFxQiwwQ0FBMEMsNkJBQTZCO0FBQ25TLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDMVM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxNQUFNLElBQUk7QUFDVix5RUFBeUU7QUFDekUsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0VBQStFO0FBQy9FO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW91bmVoLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWluLXZpZXdwb3J0L2Rpc3QvZXMvbGliL2hhbmRsZVZpZXdwb3J0LmpzPzJjYTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCIpKTtcbnZhciBfdXNlSW5WaWV3cG9ydCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXNlSW5WaWV3cG9ydFwiKSk7XG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZXhjbHVkZWQgPSBbXCJvbkVudGVyVmlld3BvcnRcIiwgXCJvbkxlYXZlVmlld3BvcnRcIl07XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG52YXIgaXNGdW5jdGlvbmFsQ29tcG9uZW50ID0gQ29tcG9uZW50ID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgIShDb21wb25lbnQucHJvdG90eXBlICYmIENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKTtcbn07XG52YXIgaXNSZWFjdENvbXBvbmVudCA9IENvbXBvbmVudCA9PiB7XG4gIHJldHVybiBDb21wb25lbnQucHJvdG90eXBlICYmIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn07XG5mdW5jdGlvbiBoYW5kbGVWaWV3cG9ydChUYXJnZXRDb21wb25lbnQsIG9wdGlvbnMsIGNvbmZpZykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IF9jb25zdGFudHMuZGVmYXVsdE9wdGlvbnM7XG4gIH1cbiAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgY29uZmlnID0gX2NvbnN0YW50cy5kZWZhdWx0Q29uZmlnO1xuICB9XG4gIHZhciBGb3J3YXJkZWRSZWZDb21wb25lbnQgPSAvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5mb3J3YXJkUmVmKSgocHJvcHMsIHJlZikgPT4ge1xuICAgIHZhciByZWZQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgIGZvcndhcmRlZFJlZjogcmVmXG4gICAgfSwgaXNSZWFjdENvbXBvbmVudChUYXJnZXRDb21wb25lbnQpICYmICFpc0Z1bmN0aW9uYWxDb21wb25lbnQoVGFyZ2V0Q29tcG9uZW50KSA/IHtcbiAgICAgIHJlZlxuICAgIH0gOiB7fSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShUYXJnZXRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgcmVmUHJvcHMpKTtcbiAgfSk7XG4gIGZ1bmN0aW9uIEluVmlld3BvcnQoX3JlZikge1xuICAgIHZhciB7XG4gICAgICAgIG9uRW50ZXJWaWV3cG9ydCA9IF9jb25zdGFudHMubm9vcCxcbiAgICAgICAgb25MZWF2ZVZpZXdwb3J0ID0gX2NvbnN0YW50cy5ub29wXG4gICAgICB9ID0gX3JlZixcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCk7XG4gICAgdmFyIG5vZGUgPSAoMCwgX3JlYWN0LnVzZVJlZikoKTtcbiAgICB2YXIge1xuICAgICAgaW5WaWV3cG9ydCxcbiAgICAgIGVudGVyQ291bnQsXG4gICAgICBsZWF2ZUNvdW50XG4gICAgfSA9ICgwLCBfdXNlSW5WaWV3cG9ydC5kZWZhdWx0KShub2RlLCBvcHRpb25zLCBjb25maWcsIHtcbiAgICAgIG9uRW50ZXJWaWV3cG9ydCxcbiAgICAgIG9uTGVhdmVWaWV3cG9ydFxuICAgIH0pO1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICAgIGluVmlld3BvcnQsXG4gICAgICBlbnRlckNvdW50LFxuICAgICAgbGVhdmVDb3VudFxuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoRm9yd2FyZGVkUmVmQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHJlZjogbm9kZVxuICAgIH0pKTtcbiAgfVxuICB2YXIgbmFtZSA9IFRhcmdldENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBUYXJnZXRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgSW5WaWV3cG9ydC5kaXNwbGF5TmFtZSA9IFwiaGFuZGxlVmlld3BvcnQoXCIgKyBuYW1lICsgXCIpXCI7XG4gIHJldHVybiAoMCwgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzLmRlZmF1bHQpKEluVmlld3BvcnQsIEZvcndhcmRlZFJlZkNvbXBvbmVudCk7XG59XG52YXIgX2RlZmF1bHQgPSBoYW5kbGVWaWV3cG9ydDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-in-viewport/dist/es/lib/handleViewport.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-in-viewport/dist/es/lib/useInViewport.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-in-viewport/dist/es/lib/useInViewport.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports[\"default\"] = void 0;\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nvar _reactDom = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\nvar _constants = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/react-in-viewport/dist/es/lib/constants.js\");\nvar useInViewport = function useInViewport(target, options, config, props) {\n  if (options === void 0) {\n    options = _constants.defaultOptions;\n  }\n  if (config === void 0) {\n    config = _constants.defaultConfig;\n  }\n  if (props === void 0) {\n    props = _constants.defaultProps;\n  }\n  var {\n    onEnterViewport,\n    onLeaveViewport\n  } = props;\n  var [, forceUpdate] = (0, _react.useState)();\n  var observer = (0, _react.useRef)();\n  var inViewportRef = (0, _react.useRef)(false);\n  var intersected = (0, _react.useRef)(false);\n  var enterCountRef = (0, _react.useRef)(0);\n  var leaveCountRef = (0, _react.useRef)(0);\n  function startObserver(_ref) {\n    var {\n      observerRef\n    } = _ref;\n    var targetRef = target.current;\n    if (targetRef) {\n      var node = (0, _reactDom.findDOMNode)(targetRef);\n      if (node) {\n        observerRef == null ? void 0 : observerRef.observe(node);\n      }\n    }\n  }\n  function stopObserver(_ref2) {\n    var {\n      observerRef\n    } = _ref2;\n    var targetRef = target.current;\n    if (targetRef) {\n      var node = (0, _reactDom.findDOMNode)(targetRef);\n      if (node) {\n        observerRef == null ? void 0 : observerRef.unobserve(node);\n      }\n    }\n    observerRef == null ? void 0 : observerRef.disconnect();\n    observer.current = null;\n  }\n  function handleIntersection(entries) {\n    var entry = entries[0] || {};\n    var {\n      isIntersecting,\n      intersectionRatio\n    } = entry;\n    var isInViewport = typeof isIntersecting !== 'undefined' ? isIntersecting : intersectionRatio > 0;\n\n    // enter\n    if (!intersected.current && isInViewport) {\n      intersected.current = true;\n      onEnterViewport == null ? void 0 : onEnterViewport();\n      enterCountRef.current += 1;\n      inViewportRef.current = isInViewport;\n      forceUpdate(isInViewport);\n      return;\n    }\n\n    // leave\n    if (intersected.current && !isInViewport) {\n      intersected.current = false;\n      onLeaveViewport == null ? void 0 : onLeaveViewport();\n      if (config.disconnectOnLeave && observer.current) {\n        // disconnect obsever on leave\n        observer.current.disconnect();\n      }\n      leaveCountRef.current += 1;\n      inViewportRef.current = isInViewport;\n      forceUpdate(isInViewport);\n    }\n  }\n  function initIntersectionObserver(_ref3) {\n    var {\n      observerRef\n    } = _ref3;\n    if (!observerRef) {\n      observer.current = new IntersectionObserver(handleIntersection, options);\n      return observer.current;\n    }\n    return observerRef;\n  }\n  (0, _react.useEffect)(() => {\n    var observerRef = observer.current;\n    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API\n    observerRef = initIntersectionObserver({\n      observerRef\n    });\n    startObserver({\n      observerRef\n    });\n    return () => {\n      stopObserver({\n        observerRef\n      });\n    };\n  }, [target.current, options, config, onEnterViewport, onLeaveViewport]);\n  return {\n    inViewport: inViewportRef.current,\n    enterCount: enterCountRef.current,\n    leaveCount: leaveCountRef.current\n  };\n};\nvar _default = useInViewport;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW4tdmlld3BvcnQvZGlzdC9lcy9saWIvdXNlSW5WaWV3cG9ydC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixrQkFBa0I7QUFDbEIsa0JBQWU7QUFDZixhQUFhLG1CQUFPLENBQUMsd0dBQU87QUFDNUIsZ0JBQWdCLG1CQUFPLENBQUMsZ0hBQVc7QUFDbkMsaUJBQWlCLG1CQUFPLENBQUMsb0ZBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3VuZWgvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW4tdmlld3BvcnQvZGlzdC9lcy9saWIvdXNlSW5WaWV3cG9ydC5qcz8zZGJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG52YXIgdXNlSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIHVzZUluVmlld3BvcnQodGFyZ2V0LCBvcHRpb25zLCBjb25maWcsIHByb3BzKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0gX2NvbnN0YW50cy5kZWZhdWx0T3B0aW9ucztcbiAgfVxuICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICBjb25maWcgPSBfY29uc3RhbnRzLmRlZmF1bHRDb25maWc7XG4gIH1cbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IF9jb25zdGFudHMuZGVmYXVsdFByb3BzO1xuICB9XG4gIHZhciB7XG4gICAgb25FbnRlclZpZXdwb3J0LFxuICAgIG9uTGVhdmVWaWV3cG9ydFxuICB9ID0gcHJvcHM7XG4gIHZhciBbLCBmb3JjZVVwZGF0ZV0gPSAoMCwgX3JlYWN0LnVzZVN0YXRlKSgpO1xuICB2YXIgb2JzZXJ2ZXIgPSAoMCwgX3JlYWN0LnVzZVJlZikoKTtcbiAgdmFyIGluVmlld3BvcnRSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoZmFsc2UpO1xuICB2YXIgaW50ZXJzZWN0ZWQgPSAoMCwgX3JlYWN0LnVzZVJlZikoZmFsc2UpO1xuICB2YXIgZW50ZXJDb3VudFJlZiA9ICgwLCBfcmVhY3QudXNlUmVmKSgwKTtcbiAgdmFyIGxlYXZlQ291bnRSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoMCk7XG4gIGZ1bmN0aW9uIHN0YXJ0T2JzZXJ2ZXIoX3JlZikge1xuICAgIHZhciB7XG4gICAgICBvYnNlcnZlclJlZlxuICAgIH0gPSBfcmVmO1xuICAgIHZhciB0YXJnZXRSZWYgPSB0YXJnZXQuY3VycmVudDtcbiAgICBpZiAodGFyZ2V0UmVmKSB7XG4gICAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRhcmdldFJlZik7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBvYnNlcnZlclJlZiA9PSBudWxsID8gdm9pZCAwIDogb2JzZXJ2ZXJSZWYub2JzZXJ2ZShub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc3RvcE9ic2VydmVyKF9yZWYyKSB7XG4gICAgdmFyIHtcbiAgICAgIG9ic2VydmVyUmVmXG4gICAgfSA9IF9yZWYyO1xuICAgIHZhciB0YXJnZXRSZWYgPSB0YXJnZXQuY3VycmVudDtcbiAgICBpZiAodGFyZ2V0UmVmKSB7XG4gICAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRhcmdldFJlZik7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBvYnNlcnZlclJlZiA9PSBudWxsID8gdm9pZCAwIDogb2JzZXJ2ZXJSZWYudW5vYnNlcnZlKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBvYnNlcnZlclJlZiA9PSBudWxsID8gdm9pZCAwIDogb2JzZXJ2ZXJSZWYuZGlzY29ubmVjdCgpO1xuICAgIG9ic2VydmVyLmN1cnJlbnQgPSBudWxsO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUludGVyc2VjdGlvbihlbnRyaWVzKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1swXSB8fCB7fTtcbiAgICB2YXIge1xuICAgICAgaXNJbnRlcnNlY3RpbmcsXG4gICAgICBpbnRlcnNlY3Rpb25SYXRpb1xuICAgIH0gPSBlbnRyeTtcbiAgICB2YXIgaXNJblZpZXdwb3J0ID0gdHlwZW9mIGlzSW50ZXJzZWN0aW5nICE9PSAndW5kZWZpbmVkJyA/IGlzSW50ZXJzZWN0aW5nIDogaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuXG4gICAgLy8gZW50ZXJcbiAgICBpZiAoIWludGVyc2VjdGVkLmN1cnJlbnQgJiYgaXNJblZpZXdwb3J0KSB7XG4gICAgICBpbnRlcnNlY3RlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIG9uRW50ZXJWaWV3cG9ydCA9PSBudWxsID8gdm9pZCAwIDogb25FbnRlclZpZXdwb3J0KCk7XG4gICAgICBlbnRlckNvdW50UmVmLmN1cnJlbnQgKz0gMTtcbiAgICAgIGluVmlld3BvcnRSZWYuY3VycmVudCA9IGlzSW5WaWV3cG9ydDtcbiAgICAgIGZvcmNlVXBkYXRlKGlzSW5WaWV3cG9ydCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gbGVhdmVcbiAgICBpZiAoaW50ZXJzZWN0ZWQuY3VycmVudCAmJiAhaXNJblZpZXdwb3J0KSB7XG4gICAgICBpbnRlcnNlY3RlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBvbkxlYXZlVmlld3BvcnQgPT0gbnVsbCA/IHZvaWQgMCA6IG9uTGVhdmVWaWV3cG9ydCgpO1xuICAgICAgaWYgKGNvbmZpZy5kaXNjb25uZWN0T25MZWF2ZSAmJiBvYnNlcnZlci5jdXJyZW50KSB7XG4gICAgICAgIC8vIGRpc2Nvbm5lY3Qgb2JzZXZlciBvbiBsZWF2ZVxuICAgICAgICBvYnNlcnZlci5jdXJyZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICAgIGxlYXZlQ291bnRSZWYuY3VycmVudCArPSAxO1xuICAgICAgaW5WaWV3cG9ydFJlZi5jdXJyZW50ID0gaXNJblZpZXdwb3J0O1xuICAgICAgZm9yY2VVcGRhdGUoaXNJblZpZXdwb3J0KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaW5pdEludGVyc2VjdGlvbk9ic2VydmVyKF9yZWYzKSB7XG4gICAgdmFyIHtcbiAgICAgIG9ic2VydmVyUmVmXG4gICAgfSA9IF9yZWYzO1xuICAgIGlmICghb2JzZXJ2ZXJSZWYpIHtcbiAgICAgIG9ic2VydmVyLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlSW50ZXJzZWN0aW9uLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBvYnNlcnZlci5jdXJyZW50O1xuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2ZXJSZWY7XG4gIH1cbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKCgpID0+IHtcbiAgICB2YXIgb2JzZXJ2ZXJSZWYgPSBvYnNlcnZlci5jdXJyZW50O1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnRlcnNlY3Rpb25fT2JzZXJ2ZXJfQVBJXG4gICAgb2JzZXJ2ZXJSZWYgPSBpbml0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIoe1xuICAgICAgb2JzZXJ2ZXJSZWZcbiAgICB9KTtcbiAgICBzdGFydE9ic2VydmVyKHtcbiAgICAgIG9ic2VydmVyUmVmXG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN0b3BPYnNlcnZlcih7XG4gICAgICAgIG9ic2VydmVyUmVmXG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbdGFyZ2V0LmN1cnJlbnQsIG9wdGlvbnMsIGNvbmZpZywgb25FbnRlclZpZXdwb3J0LCBvbkxlYXZlVmlld3BvcnRdKTtcbiAgcmV0dXJuIHtcbiAgICBpblZpZXdwb3J0OiBpblZpZXdwb3J0UmVmLmN1cnJlbnQsXG4gICAgZW50ZXJDb3VudDogZW50ZXJDb3VudFJlZi5jdXJyZW50LFxuICAgIGxlYXZlQ291bnQ6IGxlYXZlQ291bnRSZWYuY3VycmVudFxuICB9O1xufTtcbnZhciBfZGVmYXVsdCA9IHVzZUluVmlld3BvcnQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-in-viewport/dist/es/lib/useInViewport.js\n");

/***/ })

};
;