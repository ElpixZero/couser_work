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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/frontend/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/frontend/entry.js":
/*!*******************************!*\
  !*** ./app/frontend/entry.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/view.js */ \"./app/frontend/js/view.js\");\n\n\nwindow.onload = function () {\n  var form = document.querySelector('.ege-form');\n  var sidebar = document.querySelector('.sidebar');\n  var reEnterButton = document.querySelector('.re-enter');\n  var overlay = document.querySelector('.overlay');\n  var resultsDiv = document.querySelector('.universities');\n  var continueButton = document.querySelector('.overlay__continue');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    resultsDiv.innerHTML = '';\n    var tempFormData = new FormData(form);\n    var formData = {\n      subjectsId: '',\n      totalPoints: 0\n    };\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = tempFormData.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var key = _step.value;\n\n        if (tempFormData.get(key)) {\n          var element = document.querySelector(\"input[name=\".concat(key, \"]\")).getAttribute('data-id');\n          formData.subjectsId += element;\n          formData.totalPoints += Number(tempFormData.get(key));\n        }\n\n        ;\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    console.log(JSON.stringify(formData));\n    fetch('/test', {\n      method: 'POST',\n      body: JSON.stringify(formData),\n      headers: new Headers({\n        'Content-Type': 'application/json'\n      })\n    }).then(function (response) {\n      if (response.status !== 200) {\n        console.log('Looks like there was a problem. Status Code: ' + response.status);\n        return;\n      }\n\n      return response.json();\n    }).then(function (data) {\n      console.log(data);\n\n      if (data.error) {\n        resultsDiv.innerHTML = _js_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render('errorRequest', {\n          data: data\n        });\n      } else {\n        resultsDiv.innerHTML = _js_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render('universities', {\n          list: data\n        });\n      }\n    })[\"catch\"](function (err) {\n      console.log('Fetch Error :-S', err);\n    });\n    reEnterButton.classList.add('reEnter-animation-show');\n    sidebar.style.display = 'none';\n  });\n  continueButton.addEventListener('click', function () {\n    overlay.style.display = 'none';\n  });\n  reEnterButton.addEventListener('click', function () {\n    reEnterButton.classList.remove('reEnter-animation-show');\n    reEnterButton.classList.add('reEnter-animation-hide');\n    sidebar.style.display = 'block';\n    document.documentElement.scrollTop = 0;\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvZnJvbnRlbmQvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZnJvbnRlbmQvZW50cnkuanM/N2VkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tICcuL2pzL3ZpZXcuanMnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWdlLWZvcm0nKTtcclxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICBjb25zdCByZUVudGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlLWVudGVyJyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbiAgY29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml2ZXJzaXRpZXMnKTtcclxuICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5X19jb250aW51ZScpO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgdGVtcEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IHtcclxuICAgICAgc3ViamVjdHNJZDogJycsXHJcbiAgICAgIHRvdGFsUG9pbnRzOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAobGV0IGtleSBvZiB0ZW1wRm9ybURhdGEua2V5cygpKSB7XHJcbiAgICAgIGlmICh0ZW1wRm9ybURhdGEuZ2V0KGtleSkpIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9JHtrZXl9XWApLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIGZvcm1EYXRhLnN1YmplY3RzSWQgKz0gZWxlbWVudDtcclxuICAgICAgICBmb3JtRGF0YS50b3RhbFBvaW50cyArPSBOdW1iZXIodGVtcEZvcm1EYXRhLmdldChrZXkpKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmb3JtRGF0YSkpO1xyXG4gICAgXHJcbiAgICBmZXRjaCgnL3Rlc3QnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0pXHJcbiAgICB9KSAgXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7ICBcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHsgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xvb2tzIGxpa2UgdGhlcmUgd2FzIGEgcHJvYmxlbS4gU3RhdHVzIENvZGU6ICcgKyAgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyk7ICBcclxuICAgICAgICAgIHJldHVybjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0gIFxyXG4gICAgKVxyXG4gICAgLnRoZW4oIGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgcmVzdWx0c0Rpdi5pbm5lckhUTUwgPSBWaWV3LnJlbmRlcignZXJyb3JSZXF1ZXN0Jywge1xyXG4gICAgICAgICAgZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHRzRGl2LmlubmVySFRNTCA9IFZpZXcucmVuZGVyKCd1bml2ZXJzaXRpZXMnLCB7XHJcbiAgICAgICAgICBsaXN0OiBkYXRhXHJcbiAgICAgICAgfSk7IFxyXG4gICAgICB9ICAgXHJcbiAgICB9KSBcclxuICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHsgIFxyXG4gICAgICBjb25zb2xlLmxvZygnRmV0Y2ggRXJyb3IgOi1TJywgZXJyKTsgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJlRW50ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVFbnRlci1hbmltYXRpb24tc2hvdycpO1xyXG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxyXG4gIH0pXHJcblxyXG5cclxuICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcclxuICB9KVxyXG4gIFxyXG4gIHJlRW50ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHJlRW50ZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncmVFbnRlci1hbmltYXRpb24tc2hvdycpO1xyXG4gICAgcmVFbnRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZUVudGVyLWFuaW1hdGlvbi1oaWRlJyk7XHJcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAgIFxyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbiAgfSlcclxufVxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/frontend/entry.js\n");

/***/ }),

/***/ "./app/frontend/js/view.js":
/*!*********************************!*\
  !*** ./app/frontend/js/view.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render(templateName, data) {\n    templateName = templateName + 'Template';\n    var templateElement = document.getElementById(templateName);\n    var templateSource = templateElement.innerHTML;\n    var renderFn = Handlebars.compile(templateSource);\n    return renderFn(data);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvZnJvbnRlbmQvanMvdmlldy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9mcm9udGVuZC9qcy92aWV3LmpzPzVjZDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHJlbmRlcih0ZW1wbGF0ZU5hbWUsIGRhdGEpIHtcclxuICAgIHRlbXBsYXRlTmFtZSA9IHRlbXBsYXRlTmFtZSArICdUZW1wbGF0ZSc7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVOYW1lKTtcclxuICAgIGNvbnN0IHRlbXBsYXRlU291cmNlID0gdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTDtcclxuICAgIGNvbnN0IHJlbmRlckZuID0gSGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlU291cmNlKTtcclxuXHJcbiAgICByZXR1cm4gcmVuZGVyRm4oZGF0YSk7XHJcbiAgfSxcclxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/frontend/js/view.js\n");

/***/ })

/******/ });