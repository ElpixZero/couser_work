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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/view.js */ \"./app/frontend/js/view.js\");\n\n\nwindow.onload = function () {\n  var form = document.querySelector('.ege-form');\n  var sidebar = document.querySelector('.sidebar');\n  var reEnterButton = document.querySelector('.re-enter');\n  var overlay = document.querySelector('.overlay');\n  var resultsDiv = document.querySelector('.universities');\n  var continueButton = document.querySelector('.overlay__continue');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var tempFormData = new FormData(form);\n    var formData = {\n      subjectsId: '',\n      totalPoints: 0\n    };\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = tempFormData.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var key = _step.value;\n\n        if (tempFormData.get(key)) {\n          var element = document.querySelector(\"input[name=\".concat(key, \"]\")).getAttribute('data-id');\n          formData.subjectsId += element;\n          formData.totalPoints += Number(tempFormData.get(key));\n        }\n\n        ;\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    console.log(JSON.stringify(formData));\n    fetch('/test', {\n      method: 'POST',\n      body: JSON.stringify(formData),\n      headers: new Headers({\n        'Content-Type': 'application/json'\n      })\n    }).then(function (response) {\n      if (response.status !== 200) {\n        console.log('Looks like there was a problem. Status Code: ' + response.status);\n        return;\n      }\n\n      return response.json();\n    }).then(function (data) {\n      console.log(data);\n\n      if (data.error) {\n        resultsDiv.innerHTML = _js_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render('errorRequest', {\n          data: data\n        });\n      } else {\n        resultsDiv.innerHTML = _js_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render('universities', {\n          list: data\n        });\n      }\n    })[\"catch\"](function (err) {\n      console.log('Fetch Error :-S', err);\n    });\n    console.log(reEnterButton);\n    reEnterButton.classList.add('reEnter-animation-show'); // reEnterButton.style.display = 'block';\n  });\n  continueButton.addEventListener('click', function () {\n    overlay.style.display = 'none';\n  });\n  reEnterButton.addEventListener('click', function () {\n    reEnterButton.classList.remove('reEnter-animation-show');\n    reEnterButton.classList.add('reEnter-animation-hide');\n    overlay.style.display = 'block';\n    resultsDiv.innerHTML = '';\n    document.documentElement.scrollTop = 0;\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvZnJvbnRlbmQvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZnJvbnRlbmQvZW50cnkuanM/N2VkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tICcuL2pzL3ZpZXcuanMnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWdlLWZvcm0nKTtcclxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICBjb25zdCByZUVudGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlLWVudGVyJyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbiAgY29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml2ZXJzaXRpZXMnKTtcclxuICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5X19jb250aW51ZScpO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0ge1xyXG4gICAgICBzdWJqZWN0c0lkOiAnJyxcclxuICAgICAgdG90YWxQb2ludHM6IDBcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQga2V5IG9mIHRlbXBGb3JtRGF0YS5rZXlzKCkpIHtcclxuICAgICAgaWYgKHRlbXBGb3JtRGF0YS5nZXQoa2V5KSkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT0ke2tleX1dYCkuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgZm9ybURhdGEuc3ViamVjdHNJZCArPSBlbGVtZW50O1xyXG4gICAgICAgIGZvcm1EYXRhLnRvdGFsUG9pbnRzICs9IE51bWJlcih0ZW1wRm9ybURhdGEuZ2V0KGtleSkpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSk7XHJcbiAgICBcclxuICAgIGZldGNoKCcvdGVzdCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcclxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSlcclxuICAgIH0pICBcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHsgIFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkgeyAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTG9va3MgbGlrZSB0aGVyZSB3YXMgYSBwcm9ibGVtLiBTdGF0dXMgQ29kZTogJyArICBcclxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKTsgIFxyXG4gICAgICAgICAgcmV0dXJuOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSAgXHJcbiAgICApXHJcbiAgICAudGhlbiggZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICByZXN1bHRzRGl2LmlubmVySFRNTCA9IFZpZXcucmVuZGVyKCdlcnJvclJlcXVlc3QnLCB7XHJcbiAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gVmlldy5yZW5kZXIoJ3VuaXZlcnNpdGllcycsIHtcclxuICAgICAgICAgIGxpc3Q6IGRhdGFcclxuICAgICAgICB9KTsgXHJcbiAgICAgIH0gICBcclxuICAgIH0pIFxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycikgeyAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdGZXRjaCBFcnJvciA6LVMnLCBlcnIpOyAgXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocmVFbnRlckJ1dHRvbik7XHJcbiAgICByZUVudGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlRW50ZXItYW5pbWF0aW9uLXNob3cnKTsgICBcclxuICAgIC8vIHJlRW50ZXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSlcclxuXHJcblxyXG4gIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSk7XHJcbiAgXHJcbiAgcmVFbnRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmVFbnRlckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZUVudGVyLWFuaW1hdGlvbi1zaG93Jyk7XHJcbiAgICByZUVudGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlRW50ZXItYW5pbWF0aW9uLWhpZGUnKTtcclxuXHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgcmVzdWx0c0Rpdi5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG4gIH0pXHJcbn1cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/frontend/entry.js\n");

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