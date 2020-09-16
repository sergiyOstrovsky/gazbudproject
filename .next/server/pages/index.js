module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: phone, mail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phone", function() { return phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mail", function() { return mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\projects\\gazbudproject\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = () => __jsx("div", {
  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logoWrapper,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("img", {
  src: "./graphic-progression.svg",
  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logoImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}), __jsx("p", {
  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.companyName,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, "\u0423\u043A\u0440\u0433\u0430\u0437\u0431\u0443\u0434\u043F\u0440\u043E\u0435\u043A\u0442"));

const phone = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 15,
  height: 15,
  viewBox: "0 0 30 30",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx("path", {
  fill: "#008adc",
  fillRule: "nonzero",
  d: "M9.42 9.932L2.49 3c.895-.894 1.788-1.79 2.684-2.686a1.065 1.065 0 0 1 1.5-.013l5.398 5.403a1.068 1.068 0 0 1-.005 1.507l-1.183 1.18-1.1 1.1a3.03 3.03 0 0 0-.363.44zm5.702 11.289a60.782 60.782 0 0 1-3.28-3.066 61.613 61.613 0 0 1-3.065-3.285c-.8-.925-.957-2.263-.539-3.39L1.125 4.368c-1.655 1.7-1.444 5.92.37 9.625.779 1.604 1.789 3.05 2.833 4.427a39.675 39.675 0 0 0 3.389 3.868 37.798 37.798 0 0 0 3.86 3.4c1.377 1.047 2.828 2.05 4.421 2.826 3.713 1.812 7.935 2.01 9.635.354l-7.115-7.112c-1.127.418-2.468.263-3.396-.535zm14.572 2.1l-5.399-5.4a1.075 1.075 0 0 0-1.508.006h-.003l-1.186 1.184-1.094 1.099a3.318 3.318 0 0 1-.439.364l6.928 6.929c.896-.898 1.79-1.79 2.689-2.684a1.056 1.056 0 0 0 .012-1.499z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}));
const mail = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 22,
  height: 16,
  viewBox: "0 0 37 31",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx("g", {
  fill: "#008adc",
  fillRule: "nonzero",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M32.255 30.429a2.95 2.95 0 0 0 2.078-.826l-10.063-10.6-.696.527a46.492 46.492 0 0 1-1.834 1.368c-.47.327-1.094.661-1.873 1.002-.78.341-1.507.511-2.18.511h-.04c-.674 0-1.4-.17-2.18-.511-.78-.341-1.405-.675-1.874-1.002-.469-.327-1.08-.783-1.833-1.368-.21-.162-.443-.34-.695-.53L1 29.603a2.95 2.95 0 0 0 2.079.826h29.176zM2.107 11.931A11.284 11.284 0 0 1 0 10v17.143l9.333-9.931a721.695 721.695 0 0 0-7.226-5.281zM34.247 11.931A614.66 614.66 0 0 0 27 17.216l9.333 9.927V10a11.76 11.76 0 0 1-2.086 1.931zM32.785 0H3.215C2.181 0 1.388.36.833 1.078.278 1.796 0 2.694 0 3.772c0 .87.368 1.813 1.105 2.83.736 1.015 1.52 1.813 2.35 2.393a864.72 864.72 0 0 0 4.119 2.954 1331.14 1331.14 0 0 1 5.263 3.783 278.37 278.37 0 0 1 .854.632c.435.325.797.587 1.085.788.287.2.636.424 1.045.673a6.01 6.01 0 0 0 1.155.56c.362.124.696.186 1.004.186h.04a3.11 3.11 0 0 0 1.005-.186c.361-.124.746-.31 1.155-.56a21.32 21.32 0 0 0 1.045-.673c.288-.2.65-.463 1.085-.788a134.941 134.941 0 0 1 .854-.632 18946.774 18946.774 0 0 1 9.402-6.736 9.717 9.717 0 0 0 2.45-2.55c.655-.995.984-2.038.984-3.13a3.23 3.23 0 0 0-.954-2.342C34.41.324 33.656 0 32.786 0z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
})));

const marker = () => __jsx("svg", {
  version: "1.1",
  width: "15px",
  height: "15px",
  xmlSpace: "preserve",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 7
  }
}, __jsx("path", {
  fill: "#008adc",
  d: "M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,469.729 c-55.847-66.338-152.035-197.217-152.035-284.301c0-83.834,68.202-152.036,152.035-152.036s152.035,68.202,152.035,152.035 C408.034,272.515,311.861,403.37,256,469.729z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
}))), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }
}, __jsx("path", {
  fill: "#008adc",
  d: "M256,92.134c-51.442,0-93.292,41.851-93.292,93.293s41.851,93.293,93.292,93.293s93.291-41.851,93.291-93.293 S307.441,92.134,256,92.134z M256,245.328c-33.03,0-59.9-26.871-59.9-59.901s26.871-59.901,59.9-59.901s59.9,26.871,59.9,59.901 S289.029,245.328,256,245.328z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }
}))));

const activity = {
  engineeringNetworks: [{
    title: 'ОВіК',
    price: '100 грн',
    services: ['Проектування систем опалення', 'Проектуання систем вентиляції', 'Проектування систем кондиціонування']
  }, {
    title: 'ЕТР',
    price: '100 грн',
    services: ['Електропостачання (прокладання кабеля, повітряне, СІП- самонесучий ізольований провід). Силове обладнання. Системи зовнішнього та внутрішнього освітлення. Блискавкозахист, заземлення. Паспорти блискавкозахисту паспорт заземлення, паспорти на повітряні кабельні лінії та паспорти електроприміщення']
  }, {
    price: '100 грн',
    title: 'Cлабострумні Kабельні Cистеми',
    services: ['Проектування телекомунікаційних мереж (телебачення, телефонія, інет)', 'Проектування охоронних системи', 'Проектвування систем пожежогасіння та димовидалення', 'Проектування систем відеонагляду']
  }, {
    services: [],
    price: '100 грн',
    title: 'Oцінка впливу на довкілля'
  }, {
    services: [],
    price: '100 грн',
    title: 'Eнергозбереження та Pозробка Eнергопаспорта'
  }],
  ecological: [{
    services: [],
    price: '100 грн',
    title: 'Розробка документації на викиди в атмосферне повітря'
  }, {
    services: [],
    price: '100 грн',
    title: 'Оцінка впливу на довкілля'
  }, {
    services: [],
    price: '100 грн',
    title: 'Рзробка індивідуальних балансових норм водоспоживання та водовідведення'
  }, {
    services: [],
    price: '100 грн',
    title: 'Паспортизація відходів'
  }]
};

const ActivitySection = ({
  activityName,
  activityTitle
}) => __jsx("div", {
  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.activityWrapper,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 3
  }
}, __jsx("div", {
  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.activityHeader,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }
}, activityTitle), activity[activityName].map(({
  title,
  services
}, index) => __jsx("div", {
  key: index,
  style: {
    borderBottom: index + 1 === activity[activityName].length ? 'none' : '1px solid black'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 9
  }
}, __jsx("div", {
  style: {
    fontWeight: 'bold',
    padding: 10
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 11
  }
}, index + 1, ". ", title), services.length > 0 && __jsx("ul", {
  style: {
    padding: '0 20px'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 13
  }
}, services.map((item, index) => __jsx("li", {
  key: index,
  style: {
    padding: '5px 0'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 19
  }
}, item))))));

function Home() {
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, "\u0423\u043A\u0440\u0433\u0430\u0437\u0431\u0443\u0434\u043F\u0440\u043E\u0435\u043A\u0442"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contacts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold',
      marginRight: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438:"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "tel:0683377070",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactPhone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, phone()), " (068) 337-70-70"), __jsx("a", {
    href: "tel:0503786869",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactPhone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, phone()), " (050) 378-68-69"), __jsx("a", {
    href: "tel:0676790808",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactPhone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, phone()), " (067) 679-08-08"), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactPhone,
    href: "mailto:ukrgazbudproekt@ukr.net",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, mail()), " ukrgazbudproekt@ukr.net"), __jsx("p", {
    style: {
      padding: 5,
      color: '#008adc'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, marker()), " \u043C. \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0421\u0430\u0445\u0430\u0440\u043E\u0432\u0430 43, \u043E\u0444\u0456\u0441 407"))))), __jsx("section", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.frontSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.frontTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, "\u0422\u0437\u041E\u0412 \"\u0423\u043A\u0440\u0433\u0430\u0437\u0431\u0443\u0434\u043F\u0440\u043E\u0435\u043A\u0442\" - B\u0430\u0448 \u043D\u0430\u0434\u0456\u0439\u043D\u0438\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440 "), __jsx("img", {
    src: "./home.jpg",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.frontImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.companyActivityTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, "\u0414\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C K\u043E\u043C\u043F\u0430\u043D\u0456\u0457"), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.activitiesWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, __jsx(ActivitySection, {
    activityName: "engineeringNetworks",
    activityTitle: "\u041F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u0438\u0445 \u043C\u0435\u0440\u0435\u0436",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }), __jsx(ActivitySection, {
    activityName: "ecological",
    activityTitle: "\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0435\u043A\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0443",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contacts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold',
      marginRight: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438:"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "tel:0683377070",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactPhone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, phone()), " (068) 337-70-70"), __jsx("a", {
    href: "tel:0503786869",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactPhone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }, phone()), " (050) 378-68-69"), __jsx("a", {
    href: "tel:0676790808",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactPhone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }, phone()), " (067) 679-08-08"), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactPhone,
    href: "mailto:ukrgazbudproekt@ukr.net",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, mail()), " ukrgazbudproekt@ukr.net"), __jsx("p", {
    style: {
      padding: 5,
      color: '#008adc'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, marker()), " \u043C. \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0421\u0430\u0445\u0430\u0440\u043E\u0432\u0430 43, \u043E\u0444\u0456\u0441 407"))))));
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"mainWrapper": "Home_mainWrapper__37PH3",
	"header": "Home_header__3vlZW",
	"headerContent": "Home_headerContent__2os-5",
	"logoWrapper": "Home_logoWrapper__1NjlQ",
	"logoImage": "Home_logoImage__3tdvn",
	"companyName": "Home_companyName__d-fEF",
	"frontSection": "Home_frontSection__16XK2",
	"frontImage": "Home_frontImage__2dZqo",
	"frontTitle": "Home_frontTitle__zjwGm",
	"companyActivityTitle": "Home_companyActivityTitle__l49XQ",
	"activitiesWrapper": "Home_activitiesWrapper__1xPLP",
	"activityWrapper": "Home_activityWrapper__buv6z",
	"activityHeader": "Home_activityHeader__3KU3R",
	"columnTitles": "Home_columnTitles__1W4MS",
	"servicesColumnTitle": "Home_servicesColumnTitle__dtGxV",
	"columnItem": "Home_columnItem__1dddC",
	"servicesWrapper": "Home_servicesWrapper__3FhAN",
	"footer": "Home_footer__1WdhD",
	"contacts": "Home_contacts__6V8ZR",
	"contactPhone": "Home_contactPhone__yDHr_"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkxvZ28iLCJzdHlsZXMiLCJsb2dvV3JhcHBlciIsImxvZ29JbWFnZSIsImNvbXBhbnlOYW1lIiwicGhvbmUiLCJtYWlsIiwibWFya2VyIiwiYWN0aXZpdHkiLCJlbmdpbmVlcmluZ05ldHdvcmtzIiwidGl0bGUiLCJwcmljZSIsInNlcnZpY2VzIiwiZWNvbG9naWNhbCIsIkFjdGl2aXR5U2VjdGlvbiIsImFjdGl2aXR5TmFtZSIsImFjdGl2aXR5VGl0bGUiLCJhY3Rpdml0eVdyYXBwZXIiLCJhY3Rpdml0eUhlYWRlciIsIm1hcCIsImluZGV4IiwiYm9yZGVyQm90dG9tIiwibGVuZ3RoIiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJpdGVtIiwiSG9tZSIsImNvbnRhaW5lciIsImhlYWRlciIsImhlYWRlckNvbnRlbnQiLCJjb250YWN0cyIsIm1hcmdpblJpZ2h0IiwiY29udGFjdFBob25lIiwiY29sb3IiLCJmcm9udFNlY3Rpb24iLCJmcm9udFRpdGxlIiwiZnJvbnRJbWFnZSIsIm1haW5XcmFwcGVyIiwiY29tcGFueUFjdGl2aXR5VGl0bGUiLCJhY3Rpdml0aWVzV3JhcHBlciIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFDWDtBQUFLLFdBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssS0FBRyxFQUFDLDJCQUFUO0FBQXFDLFdBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsU0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBRyxXQUFTLEVBQUVGLDhEQUFNLENBQUNHLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0dBRkYsQ0FERjs7QUFPTyxNQUFNQyxLQUFLLEdBQUcsTUFDbkI7QUFBSyxPQUFLLEVBQUMsNEJBQVg7QUFBd0MsT0FBSyxFQUFFLEVBQS9DO0FBQW1ELFFBQU0sRUFBRSxFQUEzRDtBQUErRCxTQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU0sTUFBSSxFQUFDLFNBQVg7QUFBcUIsVUFBUSxFQUFDLFNBQTlCO0FBQXdDLEdBQUMsRUFBQyxpc0JBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURLO0FBTUEsTUFBTUMsSUFBSSxHQUFHLE1BQ2xCO0FBQUssT0FBSyxFQUFDLDRCQUFYO0FBQXdDLE9BQUssRUFBRSxFQUEvQztBQUFtRCxRQUFNLEVBQUUsRUFBM0Q7QUFBK0QsU0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFHLE1BQUksRUFBQyxTQUFSO0FBQWtCLFVBQVEsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTSxHQUFDLEVBQUMscW1DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLENBREs7O0FBUVAsTUFBTUMsTUFBTSxHQUFHLE1BQ2I7QUFDRSxTQUFPLEVBQUMsS0FEVjtBQUVFLE9BQUssRUFBQyxNQUZSO0FBR0UsUUFBTSxFQUFDLE1BSFQ7QUFJRSxVQUFRLEVBQUMsVUFKWDtBQUtFLFNBQU8sRUFBQyxhQUxWO0FBTUUsT0FBSyxFQUFDLDRCQU5SO0FBT0UsWUFBVSxFQUFDLDhCQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQ0UsTUFBSSxFQUFDLFNBRFA7QUFDaUIsR0FBQyxFQUFDLHlYQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERixDQVRGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTSxNQUFJLEVBQUMsU0FBWDtBQUFxQixHQUFDLEVBQUMscVFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLENBbEJGLENBREY7O0FBNkJBLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxxQkFBbUIsRUFBRSxDQUNuQjtBQUNFQyxTQUFLLEVBQUUsTUFEVDtBQUVFQyxTQUFLLEVBQUUsU0FGVDtBQUdFQyxZQUFRLEVBQUUsQ0FDUiw4QkFEUSxFQUVSLCtCQUZRLEVBR1IscUNBSFE7QUFIWixHQURtQixFQVVuQjtBQUNFRixTQUFLLEVBQUUsS0FEVDtBQUVFQyxTQUFLLEVBQUUsU0FGVDtBQUdFQyxZQUFRLEVBQUUsQ0FDUiwwU0FEUTtBQUhaLEdBVm1CLEVBaUJuQjtBQUNFRCxTQUFLLEVBQUUsU0FEVDtBQUVFRCxTQUFLLEVBQUUsK0JBRlQ7QUFHRUUsWUFBUSxFQUFFLENBQ1Isc0VBRFEsRUFFUixnQ0FGUSxFQUdSLHFEQUhRLEVBSVIsa0NBSlE7QUFIWixHQWpCbUIsRUEyQm5CO0FBQ0VBLFlBQVEsRUFBRSxFQURaO0FBRUVELFNBQUssRUFBRSxTQUZUO0FBR0VELFNBQUssRUFBRTtBQUhULEdBM0JtQixFQWdDbkI7QUFDRUUsWUFBUSxFQUFFLEVBRFo7QUFFRUQsU0FBSyxFQUFFLFNBRlQ7QUFHRUQsU0FBSyxFQUFFO0FBSFQsR0FoQ21CLENBRE47QUF1Q2ZHLFlBQVUsRUFBRSxDQUNWO0FBQ0VELFlBQVEsRUFBRSxFQURaO0FBRUVELFNBQUssRUFBRSxTQUZUO0FBR0VELFNBQUssRUFBRTtBQUhULEdBRFUsRUFNVjtBQUNFRSxZQUFRLEVBQUUsRUFEWjtBQUVFRCxTQUFLLEVBQUUsU0FGVDtBQUdFRCxTQUFLLEVBQUU7QUFIVCxHQU5VLEVBV1Y7QUFDRUUsWUFBUSxFQUFFLEVBRFo7QUFFRUQsU0FBSyxFQUFFLFNBRlQ7QUFHRUQsU0FBSyxFQUFFO0FBSFQsR0FYVSxFQWdCVjtBQUNFRSxZQUFRLEVBQUUsRUFEWjtBQUVFRCxTQUFLLEVBQUUsU0FGVDtBQUdFRCxTQUFLLEVBQUU7QUFIVCxHQWhCVTtBQXZDRyxDQUFqQjs7QUErREEsTUFBTUksZUFBZSxHQUFHLENBQUM7QUFBRUMsY0FBRjtBQUFnQkM7QUFBaEIsQ0FBRCxLQUN0QjtBQUFLLFdBQVMsRUFBRWYsOERBQU0sQ0FBQ2dCLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBRWhCLDhEQUFNLENBQUNpQixjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0dGLGFBREgsQ0FERixFQUtJUixRQUFRLENBQUNPLFlBQUQsQ0FBUixDQUF1QkksR0FBdkIsQ0FBMkIsQ0FBQztBQUFFVCxPQUFGO0FBQVNFO0FBQVQsQ0FBRCxFQUFzQlEsS0FBdEIsS0FDekI7QUFBSyxLQUFHLEVBQUVBLEtBQVY7QUFBaUIsT0FBSyxFQUFFO0FBQUVDLGdCQUFZLEVBQUVELEtBQUssR0FBRyxDQUFSLEtBQWNaLFFBQVEsQ0FBQ08sWUFBRCxDQUFSLENBQXVCTyxNQUFyQyxHQUE4QyxNQUE5QyxHQUF1RDtBQUF2RSxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxPQUFLLEVBQUU7QUFBRUMsY0FBVSxFQUFFLE1BQWQ7QUFBc0JDLFdBQU8sRUFBRTtBQUEvQixHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDQ0osS0FBSyxHQUFHLENBRFQsUUFDY1YsS0FEZCxDQURGLEVBS0lFLFFBQVEsQ0FBQ1UsTUFBVCxHQUFrQixDQUFsQixJQUNBO0FBQUksT0FBSyxFQUFFO0FBQUVFLFdBQU8sRUFBRTtBQUFYLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUVJWixRQUFRLENBQUNPLEdBQVQsQ0FBYSxDQUFDTSxJQUFELEVBQU9MLEtBQVAsS0FDWDtBQUFJLEtBQUcsRUFBRUEsS0FBVDtBQUFnQixPQUFLLEVBQUU7QUFBRUksV0FBTyxFQUFFO0FBQVgsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHQyxJQURILENBREYsQ0FGSixDQU5KLENBREYsQ0FMSixDQURGOztBQTZCZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLFNBQ0U7QUFBSyxhQUFTLEVBQUV6Qiw4REFBTSxDQUFDMEIsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQVEsYUFBUyxFQUFFMUIsOERBQU0sQ0FBQzJCLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRTNCLDhEQUFNLENBQUM0QixhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFNUIsOERBQU0sQ0FBQzZCLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFUCxnQkFBVSxFQUFFLE1BQWQ7QUFBc0JRLGlCQUFXLEVBQUU7QUFBbkMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLGdCQURQO0FBRUUsYUFBUyxFQUFFOUIsOERBQU0sQ0FBQytCLFlBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFNLFNBQUssRUFBRTtBQUFFRCxpQkFBVyxFQUFFO0FBQWYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDMUIsS0FBSyxFQUF2QyxDQUpGLHFCQURGLEVBT0U7QUFDRSxRQUFJLEVBQUMsZ0JBRFA7QUFFRSxhQUFTLEVBQUVKLDhEQUFNLENBQUMrQixZQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBTSxTQUFLLEVBQUU7QUFBRUQsaUJBQVcsRUFBRTtBQUFmLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQzFCLEtBQUssRUFBdkMsQ0FKRixxQkFQRixFQWFFO0FBQ0UsUUFBSSxFQUFDLGdCQURQO0FBRUUsYUFBUyxFQUFFSiw4REFBTSxDQUFDK0IsWUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQU0sU0FBSyxFQUFFO0FBQUVELGlCQUFXLEVBQUU7QUFBZixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0MxQixLQUFLLEVBQXZDLENBSkYscUJBYkYsRUFtQkU7QUFDRSxhQUFTLEVBQUVKLDhEQUFNLENBQUMrQixZQURwQjtBQUVFLFFBQUksRUFBQyxnQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBTSxTQUFLLEVBQUU7QUFBRUQsaUJBQVcsRUFBRTtBQUFmLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ3pCLElBQUksRUFBdEMsQ0FKRiw2QkFuQkYsRUF5QkU7QUFBRyxTQUFLLEVBQUU7QUFBRWtCLGFBQU8sRUFBRSxDQUFYO0FBQWNTLFdBQUssRUFBRTtBQUFyQixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFNBQUssRUFBRTtBQUFFRixpQkFBVyxFQUFFO0FBQWYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDeEIsTUFBTSxFQUF4QyxDQURGLG1KQXpCRixDQUpGLENBRkYsQ0FERixDQUxGLEVBNENFO0FBQVMsYUFBUyxFQUFFTiw4REFBTSxDQUFDaUMsWUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFakMsOERBQU0sQ0FBQ2tDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNE9BREYsRUFFRTtBQUFLLE9BQUcsRUFBQyxZQUFUO0FBQXNCLGFBQVMsRUFBRWxDLDhEQUFNLENBQUNtQyxVQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0E1Q0YsRUFnREU7QUFBTSxhQUFTLEVBQUVuQyw4REFBTSxDQUFDb0MsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFcEMsOERBQU0sQ0FBQ3FDLG9CQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdIQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVyQyw4REFBTSxDQUFDc0MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGVBQUQ7QUFDRSxnQkFBWSxFQUFDLHFCQURmO0FBRUUsaUJBQWEsRUFBQyxzS0FGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBSUUsTUFBQyxlQUFEO0FBQ0UsZ0JBQVksRUFBQyxZQURmO0FBRUUsaUJBQWEsRUFBQyw0S0FGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBSkYsQ0FoREYsRUE2REU7QUFBUSxhQUFTLEVBQUV0Qyw4REFBTSxDQUFDdUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFdkMsOERBQU0sQ0FBQzRCLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUU1Qiw4REFBTSxDQUFDNkIsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVQLGdCQUFVLEVBQUUsTUFBZDtBQUFzQlEsaUJBQVcsRUFBRTtBQUFuQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsZ0JBRFA7QUFFRSxhQUFTLEVBQUU5Qiw4REFBTSxDQUFDK0IsWUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQU0sU0FBSyxFQUFFO0FBQUVELGlCQUFXLEVBQUU7QUFBZixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0MxQixLQUFLLEVBQXZDLENBSkYscUJBREYsRUFPRTtBQUNFLFFBQUksRUFBQyxnQkFEUDtBQUVFLGFBQVMsRUFBRUosOERBQU0sQ0FBQytCLFlBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFNLFNBQUssRUFBRTtBQUFFRCxpQkFBVyxFQUFFO0FBQWYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDMUIsS0FBSyxFQUF2QyxDQUpGLHFCQVBGLEVBYUU7QUFDRSxRQUFJLEVBQUMsZ0JBRFA7QUFFRSxhQUFTLEVBQUVKLDhEQUFNLENBQUMrQixZQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBTSxTQUFLLEVBQUU7QUFBRUQsaUJBQVcsRUFBRTtBQUFmLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQzFCLEtBQUssRUFBdkMsQ0FKRixxQkFiRixFQW1CRTtBQUNFLGFBQVMsRUFBRUosOERBQU0sQ0FBQytCLFlBRHBCO0FBRUUsUUFBSSxFQUFDLGdDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFNLFNBQUssRUFBRTtBQUFFRCxpQkFBVyxFQUFFO0FBQWYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDekIsSUFBSSxFQUF0QyxDQUpGLDZCQW5CRixFQXlCRTtBQUFHLFNBQUssRUFBRTtBQUFFa0IsYUFBTyxFQUFFLENBQVg7QUFBY1MsV0FBSyxFQUFFO0FBQXJCLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUVGLGlCQUFXLEVBQUU7QUFBZixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0N4QixNQUFNLEVBQXhDLENBREYsbUpBekJGLENBSkYsQ0FGRixDQURGLENBN0RGLENBREY7QUF1R0QsQzs7Ozs7Ozs7Ozs7QUN6UEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IExvZ28gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb1dyYXBwZXJ9PlxuICAgIDxpbWcgc3JjPScuL2dyYXBoaWMtcHJvZ3Jlc3Npb24uc3ZnJyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvSW1hZ2V9IC8+XG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueU5hbWV9PtCj0LrRgNCz0LDQt9Cx0YPQtNC/0YDQvtC10LrRgjwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgcGhvbmUgPSAoKSA9PiAoXG4gIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD17MTV9IGhlaWdodD17MTV9IHZpZXdCb3g9JzAgMCAzMCAzMCc+XG4gICAgPHBhdGggZmlsbD0nIzAwOGFkYycgZmlsbFJ1bGU9J25vbnplcm8nIGQ9J005LjQyIDkuOTMyTDIuNDkgM2MuODk1LS44OTQgMS43ODgtMS43OSAyLjY4NC0yLjY4NmExLjA2NSAxLjA2NSAwIDAgMSAxLjUtLjAxM2w1LjM5OCA1LjQwM2ExLjA2OCAxLjA2OCAwIDAgMS0uMDA1IDEuNTA3bC0xLjE4MyAxLjE4LTEuMSAxLjFhMy4wMyAzLjAzIDAgMCAwLS4zNjMuNDR6bTUuNzAyIDExLjI4OWE2MC43ODIgNjAuNzgyIDAgMCAxLTMuMjgtMy4wNjYgNjEuNjEzIDYxLjYxMyAwIDAgMS0zLjA2NS0zLjI4NWMtLjgtLjkyNS0uOTU3LTIuMjYzLS41MzktMy4zOUwxLjEyNSA0LjM2OGMtMS42NTUgMS43LTEuNDQ0IDUuOTIuMzcgOS42MjUuNzc5IDEuNjA0IDEuNzg5IDMuMDUgMi44MzMgNC40MjdhMzkuNjc1IDM5LjY3NSAwIDAgMCAzLjM4OSAzLjg2OCAzNy43OTggMzcuNzk4IDAgMCAwIDMuODYgMy40YzEuMzc3IDEuMDQ3IDIuODI4IDIuMDUgNC40MjEgMi44MjYgMy43MTMgMS44MTIgNy45MzUgMi4wMSA5LjYzNS4zNTRsLTcuMTE1LTcuMTEyYy0xLjEyNy40MTgtMi40NjguMjYzLTMuMzk2LS41MzV6bTE0LjU3MiAyLjFsLTUuMzk5LTUuNGExLjA3NSAxLjA3NSAwIDAgMC0xLjUwOC4wMDZoLS4wMDNsLTEuMTg2IDEuMTg0LTEuMDk0IDEuMDk5YTMuMzE4IDMuMzE4IDAgMCAxLS40MzkuMzY0bDYuOTI4IDYuOTI5Yy44OTYtLjg5OCAxLjc5LTEuNzkgMi42ODktMi42ODRhMS4wNTYgMS4wNTYgMCAwIDAgLjAxMi0xLjQ5OXonIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IG1haWwgPSAoKSA9PiAoXG4gIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD17MjJ9IGhlaWdodD17MTZ9IHZpZXdCb3g9JzAgMCAzNyAzMSc+XG4gICAgPGcgZmlsbD0nIzAwOGFkYycgZmlsbFJ1bGU9J25vbnplcm8nPlxuICAgICAgPHBhdGggZD0nTTMyLjI1NSAzMC40MjlhMi45NSAyLjk1IDAgMCAwIDIuMDc4LS44MjZsLTEwLjA2My0xMC42LS42OTYuNTI3YTQ2LjQ5MiA0Ni40OTIgMCAwIDEtMS44MzQgMS4zNjhjLS40Ny4zMjctMS4wOTQuNjYxLTEuODczIDEuMDAyLS43OC4zNDEtMS41MDcuNTExLTIuMTguNTExaC0uMDRjLS42NzQgMC0xLjQtLjE3LTIuMTgtLjUxMS0uNzgtLjM0MS0xLjQwNS0uNjc1LTEuODc0LTEuMDAyLS40NjktLjMyNy0xLjA4LS43ODMtMS44MzMtMS4zNjgtLjIxLS4xNjItLjQ0My0uMzQtLjY5NS0uNTNMMSAyOS42MDNhMi45NSAyLjk1IDAgMCAwIDIuMDc5LjgyNmgyOS4xNzZ6TTIuMTA3IDExLjkzMUExMS4yODQgMTEuMjg0IDAgMCAxIDAgMTB2MTcuMTQzbDkuMzMzLTkuOTMxYTcyMS42OTUgNzIxLjY5NSAwIDAgMC03LjIyNi01LjI4MXpNMzQuMjQ3IDExLjkzMUE2MTQuNjYgNjE0LjY2IDAgMCAwIDI3IDE3LjIxNmw5LjMzMyA5LjkyN1YxMGExMS43NiAxMS43NiAwIDAgMS0yLjA4NiAxLjkzMXpNMzIuNzg1IDBIMy4yMTVDMi4xODEgMCAxLjM4OC4zNi44MzMgMS4wNzguMjc4IDEuNzk2IDAgMi42OTQgMCAzLjc3MmMwIC44Ny4zNjggMS44MTMgMS4xMDUgMi44My43MzYgMS4wMTUgMS41MiAxLjgxMyAyLjM1IDIuMzkzYTg2NC43MiA4NjQuNzIgMCAwIDAgNC4xMTkgMi45NTQgMTMzMS4xNCAxMzMxLjE0IDAgMCAxIDUuMjYzIDMuNzgzIDI3OC4zNyAyNzguMzcgMCAwIDEgLjg1NC42MzJjLjQzNS4zMjUuNzk3LjU4NyAxLjA4NS43ODguMjg3LjIuNjM2LjQyNCAxLjA0NS42NzNhNi4wMSA2LjAxIDAgMCAwIDEuMTU1LjU2Yy4zNjIuMTI0LjY5Ni4xODYgMS4wMDQuMTg2aC4wNGEzLjExIDMuMTEgMCAwIDAgMS4wMDUtLjE4NmMuMzYxLS4xMjQuNzQ2LS4zMSAxLjE1NS0uNTZhMjEuMzIgMjEuMzIgMCAwIDAgMS4wNDUtLjY3M2MuMjg4LS4yLjY1LS40NjMgMS4wODUtLjc4OGExMzQuOTQxIDEzNC45NDEgMCAwIDEgLjg1NC0uNjMyIDE4OTQ2Ljc3NCAxODk0Ni43NzQgMCAwIDEgOS40MDItNi43MzYgOS43MTcgOS43MTcgMCAwIDAgMi40NS0yLjU1Yy42NTUtLjk5NS45ODQtMi4wMzguOTg0LTMuMTNhMy4yMyAzLjIzIDAgMCAwLS45NTQtMi4zNDJDMzQuNDEuMzI0IDMzLjY1NiAwIDMyLjc4NiAweicgLz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgbWFya2VyID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgd2lkdGg9JzE1cHgnXG4gICAgaGVpZ2h0PScxNXB4J1xuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICA+XG4gICAgPGc+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPScjMDA4YWRjJyBkPVwiTTI1NiwwQzE1My43NTUsMCw3MC41NzMsODMuMTgyLDcwLjU3MywxODUuNDI2YzAsMTI2Ljg4OCwxNjUuOTM5LDMxMy4xNjcsMTczLjAwNCwzMjEuMDM1XG4gICAgICAgICAgYzYuNjM2LDcuMzkxLDE4LjIyMiw3LjM3OCwyNC44NDYsMGM3LjA2NS03Ljg2OCwxNzMuMDA0LTE5NC4xNDcsMTczLjAwNC0zMjEuMDM1QzQ0MS40MjUsODMuMTgyLDM1OC4yNDQsMCwyNTYsMHogTTI1Niw0NjkuNzI5XG4gICAgICAgICAgYy01NS44NDctNjYuMzM4LTE1Mi4wMzUtMTk3LjIxNy0xNTIuMDM1LTI4NC4zMDFjMC04My44MzQsNjguMjAyLTE1Mi4wMzYsMTUyLjAzNS0xNTIuMDM2czE1Mi4wMzUsNjguMjAyLDE1Mi4wMzUsMTUyLjAzNVxuICAgICAgICAgIEM0MDguMDM0LDI3Mi41MTUsMzExLjg2MSw0MDMuMzcsMjU2LDQ2OS43Mjl6XCIvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgICA8Zz5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBmaWxsPScjMDA4YWRjJyBkPVwiTTI1Niw5Mi4xMzRjLTUxLjQ0MiwwLTkzLjI5Miw0MS44NTEtOTMuMjkyLDkzLjI5M3M0MS44NTEsOTMuMjkzLDkzLjI5Miw5My4yOTNzOTMuMjkxLTQxLjg1MSw5My4yOTEtOTMuMjkzXG4gICAgICAgICAgUzMwNy40NDEsOTIuMTM0LDI1Niw5Mi4xMzR6IE0yNTYsMjQ1LjMyOGMtMzMuMDMsMC01OS45LTI2Ljg3MS01OS45LTU5LjkwMXMyNi44NzEtNTkuOTAxLDU5LjktNTkuOTAxczU5LjksMjYuODcxLDU5LjksNTkuOTAxXG4gICAgICAgICAgUzI4OS4wMjksMjQ1LjMyOCwyNTYsMjQ1LjMyOHpcIi8+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IGFjdGl2aXR5ID0ge1xuICBlbmdpbmVlcmluZ05ldHdvcmtzOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICfQntCS0ZbQmicsXG4gICAgICBwcmljZTogJzEwMCDQs9GA0L0nLFxuICAgICAgc2VydmljZXM6IFtcbiAgICAgICAgJ9Cf0YDQvtC10LrRgtGD0LLQsNC90L3RjyDRgdC40YHRgtC10Lwg0L7Qv9Cw0LvQtdC90L3RjycsXG4gICAgICAgICfQn9GA0L7QtdC60YLRg9Cw0L3QvdGPINGB0LjRgdGC0LXQvCDQstC10L3RgtC40LvRj9GG0ZbRlycsXG4gICAgICAgICfQn9GA0L7QtdC60YLRg9Cy0LDQvdC90Y8g0YHQuNGB0YLQtdC8INC60L7QvdC00LjRhtGW0L7QvdGD0LLQsNC90L3RjycsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfQldCi0KAnLFxuICAgICAgcHJpY2U6ICcxMDAg0LPRgNC9JyxcbiAgICAgIHNlcnZpY2VzOiBbXG4gICAgICAgICfQldC70LXQutGC0YDQvtC/0L7RgdGC0LDRh9Cw0L3QvdGPICjQv9GA0L7QutC70LDQtNCw0L3QvdGPINC60LDQsdC10LvRjywg0L/QvtCy0ZbRgtGA0Y/QvdC1LCDQodCG0J8tINGB0LDQvNC+0L3QtdGB0YPRh9C40Lkg0ZbQt9C+0LvRjNC+0LLQsNC90LjQuSDQv9GA0L7QstGW0LQpLiDQodC40LvQvtCy0LUg0L7QsdC70LDQtNC90LDQvdC90Y8uINCh0LjRgdGC0LXQvNC4INC30L7QstC90ZbRiNC90YzQvtCz0L4g0YLQsCDQstC90YPRgtGA0ZbRiNC90YzQvtCz0L4g0L7RgdCy0ZbRgtC70LXQvdC90Y8uINCR0LvQuNGB0LrQsNCy0LrQvtC30LDRhdC40YHRgiwg0LfQsNC30LXQvNC70LXQvdC90Y8uINCf0LDRgdC/0L7RgNGC0Lgg0LHQu9C40YHQutCw0LLQutC+0LfQsNGF0LjRgdGC0YMg0L/QsNGB0L/QvtGA0YIg0LfQsNC30LXQvNC70LXQvdC90Y8sINC/0LDRgdC/0L7RgNGC0Lgg0L3QsCDQv9C+0LLRltGC0YDRj9C90ZYg0LrQsNCx0LXQu9GM0L3RliDQu9GW0L3RltGXINGC0LAg0L/QsNGB0L/QvtGA0YLQuCDQtdC70LXQutGC0YDQvtC/0YDQuNC80ZbRidC10L3QvdGPJ1xuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByaWNlOiAnMTAwINCz0YDQvScsXG4gICAgICB0aXRsZTogJ0PQu9Cw0LHQvtGB0YLRgNGD0LzQvdGWIEvQsNCx0LXQu9GM0L3RliBD0LjRgdGC0LXQvNC4JyxcbiAgICAgIHNlcnZpY2VzOiBbXG4gICAgICAgICfQn9GA0L7QtdC60YLRg9Cy0LDQvdC90Y8g0YLQtdC70LXQutC+0LzRg9C90ZbQutCw0YbRltC50L3QuNGFINC80LXRgNC10LYgKNGC0LXQu9C10LHQsNGH0LXQvdC90Y8sINGC0LXQu9C10YTQvtC90ZbRjywg0ZbQvdC10YIpJyxcbiAgICAgICAgJ9Cf0YDQvtC10LrRgtGD0LLQsNC90L3RjyDQvtGF0L7RgNC+0L3QvdC40YUg0YHQuNGB0YLQtdC80LgnLFxuICAgICAgICAn0J/RgNC+0LXQutGC0LLRg9Cy0LDQvdC90Y8g0YHQuNGB0YLQtdC8INC/0L7QttC10LbQvtCz0LDRgdGW0L3QvdGPINGC0LAg0LTQuNC80L7QstC40LTQsNC70LXQvdC90Y8nLFxuICAgICAgICAn0J/RgNC+0LXQutGC0YPQstCw0L3QvdGPINGB0LjRgdGC0LXQvCDQstGW0LTQtdC+0L3QsNCz0LvRj9C00YMnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIHByaWNlOiAnMTAwINCz0YDQvScsXG4gICAgICB0aXRsZTogJ0/RhtGW0L3QutCwINCy0L/Qu9C40LLRgyDQvdCwINC00L7QstC60ZbQu9C70Y8nLFxuICAgIH0sXG4gICAge1xuICAgICAgc2VydmljZXM6IFtdLFxuICAgICAgcHJpY2U6ICcxMDAg0LPRgNC9JyxcbiAgICAgIHRpdGxlOiAnRdC90LXRgNCz0L7Qt9Cx0LXRgNC10LbQtdC90L3RjyDRgtCwIFDQvtC30YDQvtCx0LrQsCBF0L3QtdGA0LPQvtC/0LDRgdC/0L7RgNGC0LAnLFxuICAgIH0sXG4gIF0sXG4gIGVjb2xvZ2ljYWw6IFtcbiAgICB7XG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgICBwcmljZTogJzEwMCDQs9GA0L0nLFxuICAgICAgdGl0bGU6ICfQoNC+0LfRgNC+0LHQutCwINC00L7QutGD0LzQtdC90YLQsNGG0ZbRlyDQvdCwINCy0LjQutC40LTQuCDQsiDQsNGC0LzQvtGB0YTQtdGA0L3QtSDQv9C+0LLRltGC0YDRjycsXG4gICAgfSxcbiAgICB7XG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgICBwcmljZTogJzEwMCDQs9GA0L0nLFxuICAgICAgdGl0bGU6ICfQntGG0ZbQvdC60LAg0LLQv9C70LjQstGDINC90LAg0LTQvtCy0LrRltC70LvRjycsXG4gICAgfSxcbiAgICB7XG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgICBwcmljZTogJzEwMCDQs9GA0L0nLFxuICAgICAgdGl0bGU6ICfQoNC30YDQvtCx0LrQsCDRltC90LTQuNCy0ZbQtNGD0LDQu9GM0L3QuNGFINCx0LDQu9Cw0L3RgdC+0LLQuNGFINC90L7RgNC8INCy0L7QtNC+0YHQv9C+0LbQuNCy0LDQvdC90Y8g0YLQsCDQstC+0LTQvtCy0ZbQtNCy0LXQtNC10L3QvdGPJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIHByaWNlOiAnMTAwINCz0YDQvScsXG4gICAgICB0aXRsZTogJ9Cf0LDRgdC/0L7RgNGC0LjQt9Cw0YbRltGPINCy0ZbQtNGF0L7QtNGW0LInLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBBY3Rpdml0eVNlY3Rpb24gPSAoeyBhY3Rpdml0eU5hbWUsIGFjdGl2aXR5VGl0bGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5V3JhcHBlcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eUhlYWRlcn0+XG4gICAgICB7YWN0aXZpdHlUaXRsZX1cbiAgICA8L2Rpdj5cbiAgICB7XG4gICAgICBhY3Rpdml0eVthY3Rpdml0eU5hbWVdLm1hcCgoeyB0aXRsZSwgc2VydmljZXMgfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBib3JkZXJCb3R0b206IGluZGV4ICsgMSA9PT0gYWN0aXZpdHlbYWN0aXZpdHlOYW1lXS5sZW5ndGggPyAnbm9uZScgOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgcGFkZGluZzogMTAgfX0+XG4gICAgICAgICAge2luZGV4ICsgMX0uIHt0aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZXJ2aWNlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICA8dWwgc3R5bGU9e3sgcGFkZGluZzogJzAgMjBweCcgfX0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGU9e3sgcGFkZGluZzogJzVweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpXG4gICAgfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7Qo9C60YDQs9Cw0LfQsdGD0LTQv9GA0L7QtdC60YI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RzfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgINCa0L7QvdGC0LDQutGC0Lg6XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0ndGVsOjA2ODMzNzcwNzAnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdFBob25lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0+e3Bob25lKCl9PC9zcGFuPiAoMDY4KSAzMzctNzAtNzBcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9J3RlbDowNTAzNzg2ODY5J1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RQaG9uZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19PntwaG9uZSgpfTwvc3Bhbj4gKDA1MCkgMzc4LTY4LTY5XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSd0ZWw6MDY3Njc5MDgwOCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0UGhvbmV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fT57cGhvbmUoKX08L3NwYW4+ICgwNjcpIDY3OS0wOC0wOFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdFBob25lfVxuICAgICAgICAgICAgICAgIGhyZWY9J21haWx0bzp1a3JnYXpidWRwcm9la3RAdWtyLm5ldCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19PnttYWlsKCl9PC9zcGFuPiB1a3JnYXpidWRwcm9la3RAdWtyLm5ldFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmc6IDUsIGNvbG9yOiAnIzAwOGFkYycgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0+e21hcmtlcigpfTwvc3Bhbj4g0LwuINCb0YzQstGW0LIsINCy0YPQuy4g0KHQsNGF0LDRgNC+0LLQsCA0Mywg0L7RhNGW0YEgNDA3XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZnJvbnRTZWN0aW9ufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZyb250VGl0bGV9PtCi0LfQntCSIFwi0KPQutGA0LPQsNC30LHRg9C00L/RgNC+0LXQutGCXCIgLSBC0LDRiCDQvdCw0LTRltC50L3QuNC5INC/0LDRgNGC0L3QtdGAIDwvaDE+XG4gICAgICAgIDxpbWcgc3JjPScuL2hvbWUuanBnJyBjbGFzc05hbWU9e3N0eWxlcy5mcm9udEltYWdlfSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbldyYXBwZXJ9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueUFjdGl2aXR5VGl0bGV9PlxuICAgICAgICAgINCU0ZbRj9C70YzQvdGW0YHRgtGMIEvQvtC80L/QsNC90ZbRl1xuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXRpZXNXcmFwcGVyfT5cbiAgICAgICAgICA8QWN0aXZpdHlTZWN0aW9uXG4gICAgICAgICAgICBhY3Rpdml0eU5hbWU9J2VuZ2luZWVyaW5nTmV0d29ya3MnXG4gICAgICAgICAgICBhY3Rpdml0eVRpdGxlPSfQn9GA0L7QtdC60YLRg9Cy0LDQvdC90Y8g0ZbQvdC20LXQvdC10YDQvdC40YUg0LzQtdGA0LXQticgLz5cbiAgICAgICAgICA8QWN0aXZpdHlTZWN0aW9uXG4gICAgICAgICAgICBhY3Rpdml0eU5hbWU9J2Vjb2xvZ2ljYWwnXG4gICAgICAgICAgICBhY3Rpdml0eVRpdGxlPSfQn9C+0YHQu9GD0LPQuCDQtdC60L7Qu9C+0LPRltGH0L3QvtCz0L4g0YXQsNGA0LDQutGC0LXRgNGDJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250ZW50fT5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdHN9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAg0JrQvtC90YLQsNC60YLQuDpcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSd0ZWw6MDY4MzM3NzA3MCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0UGhvbmV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fT57cGhvbmUoKX08L3NwYW4+ICgwNjgpIDMzNy03MC03MFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0ndGVsOjA1MDM3ODY4NjknXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdFBob25lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0+e3Bob25lKCl9PC9zcGFuPiAoMDUwKSAzNzgtNjgtNjlcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9J3RlbDowNjc2NzkwODA4J1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RQaG9uZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19PntwaG9uZSgpfTwvc3Bhbj4gKDA2NykgNjc5LTA4LTA4XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0UGhvbmV9XG4gICAgICAgICAgICAgICAgaHJlZj0nbWFpbHRvOnVrcmdhemJ1ZHByb2VrdEB1a3IubmV0J1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0+e21haWwoKX08L3NwYW4+IHVrcmdhemJ1ZHByb2VrdEB1a3IubmV0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZzogNSwgY29sb3I6ICcjMDA4YWRjJyB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fT57bWFya2VyKCl9PC9zcGFuPiDQvC4g0JvRjNCy0ZbQsiwg0LLRg9C7LiDQodCw0YXQsNGA0L7QstCwIDQzLCDQvtGE0ZbRgSA0MDdcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5XcmFwcGVyXCI6IFwiSG9tZV9tYWluV3JhcHBlcl9fMzdQSDNcIixcblx0XCJoZWFkZXJcIjogXCJIb21lX2hlYWRlcl9fM3ZsWldcIixcblx0XCJoZWFkZXJDb250ZW50XCI6IFwiSG9tZV9oZWFkZXJDb250ZW50X18yb3MtNVwiLFxuXHRcImxvZ29XcmFwcGVyXCI6IFwiSG9tZV9sb2dvV3JhcHBlcl9fMU5qbFFcIixcblx0XCJsb2dvSW1hZ2VcIjogXCJIb21lX2xvZ29JbWFnZV9fM3Rkdm5cIixcblx0XCJjb21wYW55TmFtZVwiOiBcIkhvbWVfY29tcGFueU5hbWVfX2QtZkVGXCIsXG5cdFwiZnJvbnRTZWN0aW9uXCI6IFwiSG9tZV9mcm9udFNlY3Rpb25fXzE2WEsyXCIsXG5cdFwiZnJvbnRJbWFnZVwiOiBcIkhvbWVfZnJvbnRJbWFnZV9fMmRacW9cIixcblx0XCJmcm9udFRpdGxlXCI6IFwiSG9tZV9mcm9udFRpdGxlX196andHbVwiLFxuXHRcImNvbXBhbnlBY3Rpdml0eVRpdGxlXCI6IFwiSG9tZV9jb21wYW55QWN0aXZpdHlUaXRsZV9fbDQ5WFFcIixcblx0XCJhY3Rpdml0aWVzV3JhcHBlclwiOiBcIkhvbWVfYWN0aXZpdGllc1dyYXBwZXJfXzF4UExQXCIsXG5cdFwiYWN0aXZpdHlXcmFwcGVyXCI6IFwiSG9tZV9hY3Rpdml0eVdyYXBwZXJfX2J1djZ6XCIsXG5cdFwiYWN0aXZpdHlIZWFkZXJcIjogXCJIb21lX2FjdGl2aXR5SGVhZGVyX18zS1UzUlwiLFxuXHRcImNvbHVtblRpdGxlc1wiOiBcIkhvbWVfY29sdW1uVGl0bGVzX18xVzRNU1wiLFxuXHRcInNlcnZpY2VzQ29sdW1uVGl0bGVcIjogXCJIb21lX3NlcnZpY2VzQ29sdW1uVGl0bGVfX2R0R3hWXCIsXG5cdFwiY29sdW1uSXRlbVwiOiBcIkhvbWVfY29sdW1uSXRlbV9fMWRkZENcIixcblx0XCJzZXJ2aWNlc1dyYXBwZXJcIjogXCJIb21lX3NlcnZpY2VzV3JhcHBlcl9fM0ZoQU5cIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJjb250YWN0c1wiOiBcIkhvbWVfY29udGFjdHNfXzZWOFpSXCIsXG5cdFwiY29udGFjdFBob25lXCI6IFwiSG9tZV9jb250YWN0UGhvbmVfX3lESHJfXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==