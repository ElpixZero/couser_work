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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/scripts.js":
/*!******************************!*\
  !*** ./public/js/scripts.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./public/js/view.js\");\n\n\nwindow.onload = function () {\n  var form = document.querySelector('.ege-points_form');\n  var sidebar = document.querySelector('.sidebar');\n  var reEnterButton = document.querySelector('.re-enter');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var tempFormData = new FormData(form);\n    var formData = {\n      subjectsId: '',\n      totalPoints: 0\n    };\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = tempFormData.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var key = _step.value;\n\n        if (tempFormData.get(key)) {\n          var element = document.querySelector(\"input[name=\".concat(key, \"]\")).getAttribute('data-id');\n          formData.subjectsId += element;\n          formData.totalPoints += Number(tempFormData.get(key));\n        }\n\n        ;\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    fetch('/test', {\n      method: 'POST',\n      body: JSON.stringify(formData),\n      headers: new Headers({\n        'Content-Type': 'application/json'\n      })\n    }).then(function (response) {\n      if (response.status !== 200) {\n        console.log('Looks like there was a problem. Status Code: ' + response.status);\n        return;\n      }\n\n      return response.json();\n    }).then(function (data) {\n      document.querySelector('.universities').innerHTML = _view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render('universities', {\n        list: data\n      });\n    })[\"catch\"](function (err) {\n      console.log('Fetch Error :-S', err);\n    });\n    sidebar.style.display = 'none';\n    reEnterButton.style.display = 'block';\n  });\n  reEnterButton.addEventListener('click', function () {\n    reEnterButton.classList.add('reEnter-animation');\n    sidebar.style.display = 'block';\n    document.documentElement.scrollTop = 0;\n    sidebar.classList.add('sidebar-animation');\n  });\n  reEnterButton.addEventListener('animationend', function () {\n    console.log(sidebar.offsetLeft);\n    reEnterButton.style.display = 'none';\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvc2NyaXB0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9zY3JpcHRzLmpzP2Q4MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3LmpzJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVnZS1wb2ludHNfZm9ybScpO1xyXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gIGNvbnN0IHJlRW50ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmUtZW50ZXInKTtcclxuXHJcblxyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0ge1xyXG4gICAgICBzdWJqZWN0c0lkOiAnJyxcclxuICAgICAgdG90YWxQb2ludHM6IDBcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQga2V5IG9mIHRlbXBGb3JtRGF0YS5rZXlzKCkpIHtcclxuICAgICAgaWYgKHRlbXBGb3JtRGF0YS5nZXQoa2V5KSkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT0ke2tleX1dYCkuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgZm9ybURhdGEuc3ViamVjdHNJZCArPSBlbGVtZW50O1xyXG4gICAgICAgIGZvcm1EYXRhLnRvdGFsUG9pbnRzICs9IE51bWJlcih0ZW1wRm9ybURhdGEuZ2V0KGtleSkpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmZXRjaCgnL3Rlc3QnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0pXHJcbiAgICB9KSAgXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7ICBcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHsgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xvb2tzIGxpa2UgdGhlcmUgd2FzIGEgcHJvYmxlbS4gU3RhdHVzIENvZGU6ICcgKyAgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyk7ICBcclxuICAgICAgICAgIHJldHVybjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0gIFxyXG4gICAgKVxyXG4gICAgLnRoZW4oIGRhdGEgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdmVyc2l0aWVzJykuaW5uZXJIVE1MID0gVmlldy5yZW5kZXIoJ3VuaXZlcnNpdGllcycsIHtcclxuICAgICAgICBsaXN0OiBkYXRhXHJcbiAgICAgIH0pOyAgICBcclxuICAgICAgfSkgXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7ICBcclxuICAgICAgY29uc29sZS5sb2coJ0ZldGNoIEVycm9yIDotUycsIGVycik7ICBcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxyXG4gICAgcmVFbnRlckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9KVxyXG4gIFxyXG4gIHJlRW50ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHJlRW50ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVFbnRlci1hbmltYXRpb24nKTtcclxuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItYW5pbWF0aW9uJyk7XHJcbiAgfSlcclxuXHJcbiAgcmVFbnRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKHNpZGViYXIub2Zmc2V0TGVmdCk7XHJcbiAgICByZUVudGVyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/js/scripts.js\n");

/***/ }),

/***/ "./public/js/view.js":
/*!***************************!*\
  !*** ./public/js/view.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render(templateName, data) {\n    templateName = templateName + 'Template';\n    var templateElement = document.getElementById(templateName);\n    var templateSource = templateElement.innerHTML;\n    var renderFn = Handlebars.compile(templateSource);\n    return renderFn(data);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvdmlldy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy92aWV3LmpzPzE5MjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHJlbmRlcih0ZW1wbGF0ZU5hbWUsIGRhdGEpIHtcclxuICAgIHRlbXBsYXRlTmFtZSA9IHRlbXBsYXRlTmFtZSArICdUZW1wbGF0ZSc7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVOYW1lKTtcclxuICAgIGNvbnN0IHRlbXBsYXRlU291cmNlID0gdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTDtcclxuICAgIGNvbnN0IHJlbmRlckZuID0gSGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlU291cmNlKTtcclxuXHJcbiAgICByZXR1cm4gcmVuZGVyRm4oZGF0YSk7XHJcbiAgfSxcclxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/js/view.js\n");

/***/ })

/******/ });