/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WeaponItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Katana extends _WeaponItem_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor() {
    super()

    this.name = 'Katana'
    this.description = 'A blade full of mystery perfect for melee.'
    this.isLocked = false
    this.dropRatio = 20
    this.itemStats = {
      physicalDamages: 100,
      specialDamages: 0,
      attackSpeed: 1.5,
      rangeWidth: 200,
      rangeHeight: 150,
      elementType: 'Normal'
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Katana);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class WeaponItem extends _Item_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(name) {
    super()

    this.name = name
    this.type = 'Weapon'
    this.itemStats = {
      physicalDamages: 1,
      specialDamages: 1,
      attackSpeed: 1,
      rangeWidth: 100,
      rangeHeight: 100,
      elementType: 'Normal'
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeaponItem);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Item {
  type = ''
  name = ''
  level = 1
  dropRatio = 0
  description = ''
  isLocked = true
  price = 0
  itemStats = {}

  levelUp(propertiesToUpgrade, multiplier, staticValue) {
    propertiesToUpgrade.forEach(property => {
      this.itemStats[property] = !!multiplier[property]
        ? this.itemStats[property] * multiplier[property]
        : staticValue[property]
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);



class Player {
  context = null
  _canvas = null

  id = uniqid__WEBPACK_IMPORTED_MODULE_1___default()('user-')
  name = ''
  sprite = null
  score = 0
  weapons = []

  constructor(name, context, _canvas) {
    this.name = name
    this.context = context
    this._canvas = _canvas

    this.setSprite()
  }

  setSprite() {
    this.sprite = new _Sprite_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, this._canvas)
  }

  changePosition(newPosition) {
    this.sprite.setPosition(newPosition)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Sprite extends Image {
  positions = {
    ArrowUp: 'assets/img/avatar_face.png',
    ArrowRight: 'assets/img/avatar_right_walking.png',
    ArrowLeft: 'assets/img/avatar_left_walking.png',
  }
  context = null
  _canvas = null

  constructor(context, _canvas) {
    super()

    this.context = context
    this._canvas = _canvas
  }

  setPosition(newPosition) {
    if (!['ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(newPosition)) return
    this.src = this.positions[newPosition]
    this.draw()
  }

  draw() {
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    this.context.drawImage(this, 0, 0)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);


/***/ }),
/* 6 */
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCharacterAssets": () => (/* binding */ loadCharacterAssets)
/* harmony export */ });
/** Character assets  */

const characterAssetsPaths = [
  'assets/img/avatar_face.png',
  'assets/img/avatar_right_stop.png',
  'assets/img/avatar_right_walking.png',
  'assets/img/avatar_left_stop.png',
  'assets/img/avatar_left_walking.png'
]

const characterLoadedAssets = []

const loadCharacterAssets = () => {
  characterAssetsPaths.forEach((asset, index) => {
    characterLoadedAssets[index] = new Image()
    characterLoadedAssets[index].src = asset
  })
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_armory_weapons_Katana_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_player_Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _classes_player_Sprite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _utils_assetsLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);





const _appCanvas = document.querySelector('.app')
const context = _appCanvas.getContext('2d')

;(0,_utils_assetsLoader_js__WEBPACK_IMPORTED_MODULE_3__.loadCharacterAssets)()

window.onload = () => {
  const currentPlayer = new _classes_player_Player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Simtax', context, _appCanvas)
  currentPlayer.changePosition('ArrowUp')
  document.querySelector('html').addEventListener('keydown', ({ key }) => {
    currentPlayer.changePosition(key)
  })
}

})();

/******/ })()
;