webpackHotUpdate_N_E("pages/index",{

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/Users/14h/Documents/void/typh.us/components/canvas.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n // https://jsart.co/150/drawing-mandala-with-js-canvas/\n// https://gist.github.com/kodi/d927e20e2462805b35042de25fd52cff\n\nvar useWindowSize = function useWindowSize() {\n  _s();\n\n  // Initialize state with undefined width/height so server and client renders match\n  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    width: undefined,\n    height: undefined\n  }),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // only execute all the code below in client side\n    if (true) {\n      // Handler to call on window resize\n      var handleResize = function handleResize() {\n        // Set window width/height to state\n        setWindowSize({\n          width: window.innerWidth,\n          height: window.innerHeight\n        });\n      }; // Add event listener\n\n\n      window.addEventListener(\"resize\", handleResize); // Call handler right away so state gets updated with initial window size\n\n      handleResize(); // Remove event listener on cleanup\n\n      return function () {\n        return window.removeEventListener(\"resize\", handleResize);\n      };\n    }\n  }, []); // Empty array ensures that effect is only run on mount\n\n  return windowSize;\n};\n\n_s(useWindowSize, \"Lx6dFCJt7Ze4WyzsCH5RzM+GN9Y=\");\n\nvar Canvas = function Canvas(props) {\n  _s2();\n\n  var _windowSize$width, _windowSize$height;\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var windowSize = useWindowSize();\n\n  var draw = function draw(ctx, frameCount) {\n    var width = ctx.canvas.width;\n    var height = ctx.canvas.height;\n    var center = {\n      x: width / 2,\n      y: height / 2\n    };\n    var radius = width / 2 + 180;\n    var lineColorTransparent = '#000000';\n    var slices = 70;\n\n    var _angle = 360 / slices;\n\n    var _start = 0;\n\n    var getPointOnCircle = function getPointOnCircle(deg, center, radius) {\n      var rad = (deg + frameCount) * Math.PI / 90;\n      return {\n        x: center.x + radius * Math.cos(rad),\n        y: center.y + radius * Math.sin(rad)\n      };\n    };\n\n    var lineStroke = function lineStroke(start, end, width, color) {\n      ctx.lineWidth = width;\n      ctx.beginPath();\n      ctx.strokeStyle = color;\n      ctx.moveTo(start.x, start.y);\n      ctx.lineTo(end.x, end.y);\n      ctx.bezierCurveTo(end.x, end.y, Math.random() * 10 * end.y, Math.random() * 10 * end.x, Math.random() * 10 * end.y, Math.random() * 100 * end.x);\n      ctx.stroke();\n    };\n\n    ctx.strokeStyle = lineColorTransparent;\n    ctx.beginPath();\n\n    for (var i = 0; i < slices; i++) {\n      lineStroke(center, getPointOnCircle(_start, center, radius), 1, lineColorTransparent);\n      _start += _angle;\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var canvas = canvasRef.current;\n    var context = canvas.getContext('2d');\n    var frameCount = 0;\n    var animationFrameId; //Our draw came here\n\n    var render = function render() {\n      if (frameCount > 450) {\n        return;\n      }\n\n      frameCount++;\n      draw(context, frameCount);\n      animationFrameId = window.requestAnimationFrame(render);\n    };\n\n    render();\n    return function () {\n      window.cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw]);\n  return __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: canvasRef,\n    width: \"\".concat((_windowSize$width = windowSize === null || windowSize === void 0 ? void 0 : windowSize.width) !== null && _windowSize$width !== void 0 ? _windowSize$width : 1920, \"px\"),\n    height: \"\".concat((_windowSize$height = windowSize === null || windowSize === void 0 ? void 0 : windowSize.height) !== null && _windowSize$height !== void 0 ? _windowSize$height : 1440, \"px\")\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 12\n    }\n  }));\n};\n\n_s2(Canvas, \"dGRSo9fEFYv4dTGHma1e4dcwMnA=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = Canvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYW52YXMuanM/ZWRhYyJdLCJuYW1lcyI6WyJ1c2VXaW5kb3dTaXplIiwidXNlU3RhdGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDYW52YXMiLCJwcm9wcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsImRyYXciLCJjdHgiLCJmcmFtZUNvdW50IiwiY2FudmFzIiwiY2VudGVyIiwieCIsInkiLCJyYWRpdXMiLCJsaW5lQ29sb3JUcmFuc3BhcmVudCIsInNsaWNlcyIsIl9hbmdsZSIsIl9zdGFydCIsImdldFBvaW50T25DaXJjbGUiLCJkZWciLCJyYWQiLCJNYXRoIiwiUEkiLCJjb3MiLCJzaW4iLCJsaW5lU3Ryb2tlIiwic3RhcnQiLCJlbmQiLCJjb2xvciIsImxpbmVXaWR0aCIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwiYmV6aWVyQ3VydmVUbyIsInJhbmRvbSIsInN0cm9rZSIsImkiLCJjdXJyZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QjtBQUNBO0FBRndCLGtCQUdZQyxzREFBUSxDQUFDO0FBQ3pDQyxTQUFLLEVBQUVDLFNBRGtDO0FBRXpDQyxVQUFNLEVBQUVEO0FBRmlDLEdBQUQsQ0FIcEI7QUFBQSxNQUdqQkUsVUFIaUI7QUFBQSxNQUdMQyxhQUhLOztBQVF4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFDQSxjQUFtQztBQUMvQjtBQUQrQixVQUV0QkMsWUFGc0IsR0FFL0IsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQjtBQUNBRixxQkFBYSxDQUFDO0FBQ1ZKLGVBQUssRUFBRU8sTUFBTSxDQUFDQyxVQURKO0FBRVZOLGdCQUFNLEVBQUVLLE1BQU0sQ0FBQ0U7QUFGTCxTQUFELENBQWI7QUFJSCxPQVI4QixFQVUvQjs7O0FBQ0FGLFlBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLFlBQWxDLEVBWCtCLENBYS9COztBQUNBQSxrQkFBWSxHQWRtQixDQWdCL0I7O0FBQ0EsYUFBTztBQUFBLGVBQU1DLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLFlBQXJDLENBQU47QUFBQSxPQUFQO0FBQ0g7QUFDSixHQXJCUSxFQXFCTixFQXJCTSxDQUFULENBUndCLENBNkJoQjs7QUFDUixTQUFPSCxVQUFQO0FBQ0gsQ0EvQkQ7O0dBQU1MLGE7O0FBaUNDLElBQU1jLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBOztBQUUzQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQU1aLFVBQVUsR0FBR0wsYUFBYSxFQUFoQzs7QUFFQSxNQUFNa0IsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxVQUFOLEVBQXFCO0FBQzlCLFFBQU1sQixLQUFLLEdBQUdpQixHQUFHLENBQUNFLE1BQUosQ0FBV25CLEtBQXpCO0FBQ0EsUUFBTUUsTUFBTSxHQUFHZSxHQUFHLENBQUNFLE1BQUosQ0FBV2pCLE1BQTFCO0FBQ0EsUUFBTWtCLE1BQU0sR0FBRztBQUNYQyxPQUFDLEVBQUVyQixLQUFLLEdBQUcsQ0FEQTtBQUVYc0IsT0FBQyxFQUFFcEIsTUFBTSxHQUFHO0FBRkQsS0FBZjtBQUlBLFFBQU1xQixNQUFNLEdBQUl2QixLQUFLLEdBQUcsQ0FBVCxHQUFjLEdBQTdCO0FBQ0EsUUFBTXdCLG9CQUFvQixHQUFHLFNBQTdCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsUUFBSUMsTUFBTSxHQUFHLE1BQU1ELE1BQW5COztBQUNBLFFBQUlFLE1BQU0sR0FBRyxDQUFiOztBQUVBLFFBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsR0FBVixFQUFlVCxNQUFmLEVBQXVCRyxNQUF2QixFQUErQjtBQUNwRCxVQUFNTyxHQUFHLEdBQUksQ0FBQ0QsR0FBRyxHQUFHWCxVQUFQLElBQXFCYSxJQUFJLENBQUNDLEVBQTFCLEdBQTZCLEVBQTFDO0FBRUEsYUFBTztBQUNIWCxTQUFDLEVBQUVELE1BQU0sQ0FBQ0MsQ0FBUCxHQUFXRSxNQUFNLEdBQUdRLElBQUksQ0FBQ0UsR0FBTCxDQUFTSCxHQUFULENBRHBCO0FBRUhSLFNBQUMsRUFBRUYsTUFBTSxDQUFDRSxDQUFQLEdBQVdDLE1BQU0sR0FBR1EsSUFBSSxDQUFDRyxHQUFMLENBQVNKLEdBQVQ7QUFGcEIsT0FBUDtBQUlILEtBUEQ7O0FBU0EsUUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWFyQyxLQUFiLEVBQW9Cc0MsS0FBcEIsRUFBOEI7QUFDN0NyQixTQUFHLENBQUNzQixTQUFKLEdBQWdCdkMsS0FBaEI7QUFDQWlCLFNBQUcsQ0FBQ3VCLFNBQUo7QUFDQXZCLFNBQUcsQ0FBQ3dCLFdBQUosR0FBa0JILEtBQWxCO0FBQ0FyQixTQUFHLENBQUN5QixNQUFKLENBQVdOLEtBQUssQ0FBQ2YsQ0FBakIsRUFBb0JlLEtBQUssQ0FBQ2QsQ0FBMUI7QUFDQUwsU0FBRyxDQUFDMEIsTUFBSixDQUFXTixHQUFHLENBQUNoQixDQUFmLEVBQWtCZ0IsR0FBRyxDQUFDZixDQUF0QjtBQUNBTCxTQUFHLENBQUMyQixhQUFKLENBQWtCUCxHQUFHLENBQUNoQixDQUF0QixFQUF5QmdCLEdBQUcsQ0FBQ2YsQ0FBN0IsRUFBaUNTLElBQUksQ0FBQ2MsTUFBTCxLQUFnQixFQUFoQixHQUFxQlIsR0FBRyxDQUFDZixDQUExRCxFQUErRFMsSUFBSSxDQUFDYyxNQUFMLEtBQWdCLEVBQWhCLEdBQXFCUixHQUFHLENBQUNoQixDQUF4RixFQUE2RlUsSUFBSSxDQUFDYyxNQUFMLEtBQWdCLEVBQWhCLEdBQXFCUixHQUFHLENBQUNmLENBQXRILEVBQTJIUyxJQUFJLENBQUNjLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0JSLEdBQUcsQ0FBQ2hCLENBQXJKO0FBQ0FKLFNBQUcsQ0FBQzZCLE1BQUo7QUFFSCxLQVREOztBQVdBN0IsT0FBRyxDQUFDd0IsV0FBSixHQUFrQmpCLG9CQUFsQjtBQUNBUCxPQUFHLENBQUN1QixTQUFKOztBQUVBLFNBQUksSUFBSU8sQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHdEIsTUFBbkIsRUFBMkJzQixDQUFDLEVBQTVCLEVBQWlDO0FBQzdCWixnQkFBVSxDQUNOZixNQURNLEVBRU5RLGdCQUFnQixDQUFDRCxNQUFELEVBQVNQLE1BQVQsRUFBaUJHLE1BQWpCLENBRlYsRUFHTixDQUhNLEVBSU5DLG9CQUpNLENBQVY7QUFPQUcsWUFBTSxJQUFJRCxNQUFWO0FBQ0g7QUFFSixHQS9DRDs7QUFpREFyQix5REFBUyxDQUFDLFlBQU07QUFFWixRQUFNYyxNQUFNLEdBQUdMLFNBQVMsQ0FBQ2tDLE9BQXpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHOUIsTUFBTSxDQUFDK0IsVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNBLFFBQUloQyxVQUFVLEdBQUcsQ0FBakI7QUFDQSxRQUFJaUMsZ0JBQUosQ0FMWSxDQU9aOztBQUNBLFFBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsVUFBSWxDLFVBQVUsR0FBRyxHQUFqQixFQUFzQjtBQUNsQjtBQUNIOztBQUNEQSxnQkFBVTtBQUNWRixVQUFJLENBQUNpQyxPQUFELEVBQVUvQixVQUFWLENBQUo7QUFDQWlDLHNCQUFnQixHQUFHNUMsTUFBTSxDQUFDOEMscUJBQVAsQ0FBNkJELE1BQTdCLENBQW5CO0FBQ0gsS0FQRDs7QUFRQUEsVUFBTTtBQUVOLFdBQU8sWUFBTTtBQUNUN0MsWUFBTSxDQUFDK0Msb0JBQVAsQ0FBNEJILGdCQUE1QjtBQUNILEtBRkQ7QUFHSCxHQXJCUSxFQXFCTixDQUFDbkMsSUFBRCxDQXJCTSxDQUFUO0FBdUJBLFNBQU87QUFDSCxPQUFHLEVBQUVGLFNBREY7QUFFSCxTQUFLLGlDQUFLWCxVQUFMLGFBQUtBLFVBQUwsdUJBQUtBLFVBQVUsQ0FBRUgsS0FBakIsaUVBQTBCLElBQTFCLE9BRkY7QUFHSCxVQUFNLGtDQUFLRyxVQUFMLGFBQUtBLFVBQUwsdUJBQUtBLFVBQVUsQ0FBRUQsTUFBakIsbUVBQTJCLElBQTNCO0FBSEgsS0FJQ1csS0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFNSCxDQW5GTTs7SUFBTUQsTTtVQUdVZCxhOzs7S0FIVmMsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2FudmFzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuLy8gaHR0cHM6Ly9qc2FydC5jby8xNTAvZHJhd2luZy1tYW5kYWxhLXdpdGgtanMtY2FudmFzL1xuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20va29kaS9kOTI3ZTIwZTI0NjI4MDViMzUwNDJkZTI1ZmQ1MmNmZlxuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICAgIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcbiAgICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXG4gICAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xuICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgICAgICAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXG4gICAgICAgICAgICAgICAgc2V0V2luZG93U2l6ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxuICAgICAgICAgICAgaGFuZGxlUmVzaXplKCk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxuICAgIHJldHVybiB3aW5kb3dTaXplO1xufTtcblxuZXhwb3J0IGNvbnN0IENhbnZhcyA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB3aW5kb3dTaXplID0gdXNlV2luZG93U2l6ZSgpO1xuXG4gICAgY29uc3QgZHJhdyA9IChjdHgsIGZyYW1lQ291bnQpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodDtcbiAgICAgICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgICAgICAgeDogd2lkdGggLyAyLFxuICAgICAgICAgICAgeTogaGVpZ2h0IC8gMixcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gKHdpZHRoIC8gMikgKyAxODA7XG4gICAgICAgIGNvbnN0IGxpbmVDb2xvclRyYW5zcGFyZW50ID0gJyMwMDAwMDAnXG4gICAgICAgIGNvbnN0IHNsaWNlcyA9IDcwIDtcbiAgICAgICAgbGV0IF9hbmdsZSA9IDM2MCAvIHNsaWNlcztcbiAgICAgICAgbGV0IF9zdGFydCA9IDA7XG5cbiAgICAgICAgY29uc3QgZ2V0UG9pbnRPbkNpcmNsZSA9IGZ1bmN0aW9uIChkZWcsIGNlbnRlciwgcmFkaXVzKSB7XG4gICAgICAgICAgICBjb25zdCByYWQgPSAoKGRlZyArIGZyYW1lQ291bnQpICogTWF0aC5QSS85MCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogY2VudGVyLnggKyByYWRpdXMgKiBNYXRoLmNvcyhyYWQpLFxuICAgICAgICAgICAgICAgIHk6IGNlbnRlci55ICsgcmFkaXVzICogTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lU3Ryb2tlID0gKHN0YXJ0LCBlbmQsIHdpZHRoLCBjb2xvcikgPT4ge1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhlbmQueCwgZW5kLnkpO1xuICAgICAgICAgICAgY3R4LmJlemllckN1cnZlVG8oZW5kLngsIGVuZC55LCAoTWF0aC5yYW5kb20oKSAqIDEwICogZW5kLnkpLCAoTWF0aC5yYW5kb20oKSAqIDEwICogZW5kLngpLCAoTWF0aC5yYW5kb20oKSAqIDEwICogZW5kLnkpLCAoTWF0aC5yYW5kb20oKSAqIDEwMCAqIGVuZC54KSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpbmVDb2xvclRyYW5zcGFyZW50O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNsaWNlczsgaSsrICkge1xuICAgICAgICAgICAgbGluZVN0cm9rZShcbiAgICAgICAgICAgICAgICBjZW50ZXIsXG4gICAgICAgICAgICAgICAgZ2V0UG9pbnRPbkNpcmNsZShfc3RhcnQsIGNlbnRlciwgcmFkaXVzKSxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIGxpbmVDb2xvclRyYW5zcGFyZW50LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgX3N0YXJ0ICs9IF9hbmdsZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBsZXQgZnJhbWVDb3VudCA9IDA7XG4gICAgICAgIGxldCBhbmltYXRpb25GcmFtZUlkO1xuXG4gICAgICAgIC8vT3VyIGRyYXcgY2FtZSBoZXJlXG4gICAgICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChmcmFtZUNvdW50ID4gNDUwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWVDb3VudCsrO1xuICAgICAgICAgICAgZHJhdyhjb250ZXh0LCBmcmFtZUNvdW50KTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICAgICAgfTtcbiAgICB9LCBbZHJhd10pO1xuXG4gICAgcmV0dXJuIDxjYW52YXNcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgIHdpZHRoPXtgJHt3aW5kb3dTaXplPy53aWR0aCA/PyAxOTIwfXB4YH1cbiAgICAgICAgaGVpZ2h0PXtgJHt3aW5kb3dTaXplPy5oZWlnaHQgPz8gMTQ0MH1weGB9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAvPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/canvas.js\n");

/***/ })

})