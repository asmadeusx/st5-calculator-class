// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/script.js":[function(require,module,exports) {
'use strict'; //#region Создание верстки
// Получаем головной элемент

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var app = document.querySelector('.app');
var headerText = "\u041F\u0440\u043E\u0441\u0442\u0435\u0439\u0448\u0438\u0439 \u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440";
var footerText = "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0435\u0441\u044F \u0437\u0434\u0435\u0441\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u0438\u0445 \u0430\u0432\u0442\u043E\u0440\u0430\u043C<br />\n                    \u0421\u043E\u0437\u0434\u0430\u043D\u043E \u0432 \u0443\u0447\u0435\u0431\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u0445 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E HTML, CSS(SASS) \u0438 JS<br />\n                    \u0410\u0432\u0442\u043E\u0440 : Asmadeus<br />\n                    2021 \u0433.";
var iconArr = ['<i class="fas fa-plus"></i>', // 0 - Плюс
'<i class="fas fa-minus"></i>', // 1 - Минус
'<i class="fas fa-times"></i>', // 2 - Умножение
'<i class="fas fa-divide"></i>', // 3 - Деление
'<i class="fas fa-equals"></i>' // 4 - Равно
];
var operSelectors = ['plus', // 0 - Плюс
'minus', // 1 - Минус
'multiply', // 2 - Умножение
'divide', // 3 - Деление
'result' // 4 - Равно
];
var btnArr = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '<i class="fas fa-trash"></i>'];

function createElement(element, selector, parent, inHTML) {
  var elem = document.createElement(element);
  elem.classList.add(selector);
  elem.innerHTML = inHTML;
  parent.append(elem);
}

function crtNumBtn(parent, sel, inText) {
  var div = document.createElement('button');
  div.classList.add('num__btn', sel);
  div.innerHTML = inText;
  parent.append(div);
}

function crtOperBtn(parent, inText, operSelectors) {
  var div = document.createElement('button');
  div.classList.add('oper__btn', operSelectors);
  div.innerHTML = inText;
  parent.append(div);
} // Создаем Заголовок


createElement('header', 'header', app, headerText); // Создаем "Корпус Калькулятора"

createElement('div', 'calc', app, ''); // Создаем Дисплей на Корпусе

createElement('div', 'calc__display', app.children[1], ''); // Создаем Кнопочный блок на Корпусе

createElement('div', 'calc__buttons', app.children[1], ''); // Создаем циклом Кнопки в цифровом блоке

createElement('div', 'btns__num', app.children[1].children[1], '');

for (var i = 0; i < 12; i++) {
  var div = app.children[1].children[1].children[0];
  crtNumBtn(div, 'num__btn', btnArr[i]);
} // Создаем циклом Кнопки Управления


createElement('div', 'btns__oper', app.children[1].children[1], '');

for (var _i = 0; _i < 5; _i++) {
  var _div = app.children[1].children[1].children[1];
  crtOperBtn(_div, iconArr[_i], operSelectors[_i]);
} // Создаем Подвал


createElement('footer', 'footer', app, footerText); //#endregion
//#region Обработчики и функционал
//#region Получение элементов со страницы
// Кнопки Мат. Операций

var calcOperMinus = document.querySelector('.minus');
var calcOperMultiply = document.querySelector('.multiply');
var calcOperDivide = document.querySelector('.divide');
var calcOperResult = document.querySelector('.result'); // Список всех кнопок в виде псевдомассвиа

var calcNums = document.querySelectorAll('.num__btn');
var calcOpers = document.querySelectorAll('.oper__btn'); // Дисплей

var display = document.querySelector('.calc__display'); // Добавления селектора CLN кнопке очищения
//#endregion

calcNums[11].classList.add('CLN');

function cleanDisplay() {
  display.innerHTML = '';
}

function numToDisplay(item) {
  display.innerHTML += item.innerHTML;
}

function strip(number) {
  return parseFloat(number).toPrecision(4);
}

function calculate() {
  var _display$innerHTML$sp = display.innerHTML.split(/([+-/*])/gm),
      _display$innerHTML$sp2 = _slicedToArray(_display$innerHTML$sp, 3),
      first = _display$innerHTML$sp2[0],
      symbol = _display$innerHTML$sp2[1],
      last = _display$innerHTML$sp2[2];

  var mathResult;

  if (symbol == '+') {
    mathResult = Number(first) + Number(last);
  }

  if (symbol == '-') {
    mathResult = Number(first) - Number(last);
  }

  if (symbol == '*') {
    mathResult = Number(first) * Number(last);
  }

  if (symbol == '/') {
    if (last == '0') {
      mathResult = 'Делить на 0 нельзя!';
    } else if (Number(first) % Number(last) != 0) {
      mathResult = strip(Number(first) / Number(last));
    } else {
      mathResult = Number(first) / Number(last);
    }
  }

  display.innerHTML = mathResult;
}

function addELtoNums() {
  calcNums.forEach(function (item) {
    if (!item.classList.contains('CLN')) {
      item.addEventListener('click', function () {
        numToDisplay(item);
      });
    }
  });
  calcNums[11].addEventListener('click', cleanDisplay);
}

function addELtoOpers() {
  calcOpers.forEach(function (item) {
    if (!item.classList.contains('Result')) {
      item.addEventListener('click', function () {
        if (item.classList.contains('plus')) {
          display.innerHTML += '+';
        }

        if (item.classList.contains('minus')) {
          display.innerHTML += '-';
        }

        if (item.classList.contains('multiply')) {
          display.innerHTML += '*';
        }

        if (item.classList.contains('divide')) {
          display.innerHTML += '/';
        }
      });
    }
  });
  calcOpers[4].addEventListener('click', calculate);
}

function removeELtoNums() {
  calcNums.forEach(function (item) {
    if (!item.classList.contains('CLN')) {
      item.removeEventListener('click', function () {
        numToDisplay(item);
      });
    }
  });
}

function removeELtoOpers() {
  calcOpers.forEach(function (item) {
    if (!item.classList.contains('Result')) {
      item.removeEventListener('click', function () {
        if (item.classList.contains('plus')) {
          display.innerHTML += '+';
        }

        if (item.classList.contains('minus')) {
          display.innerHTML += '-';
        }

        if (item.classList.contains('multiply')) {
          display.innerHTML += '*';
        }

        if (item.classList.contains('divide')) {
          display.innerHTML += '/';
        }
      });
    }
  });
  calcOpers[4].removeEventListener('click', calculate);
}

addELtoNums();
addELtoOpers(); //#endregion
},{}],"C:/Users/Asmadeus/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50586" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Asmadeus/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map