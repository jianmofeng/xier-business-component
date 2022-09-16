import { defineComponent, createVNode, ref, reactive, inject, computed, getCurrentInstance, cloneVNode, watch, onMounted, onUnmounted, openBlock, createElementBlock, normalizeClass, renderSlot, normalizeStyle, createElementVNode, resolveComponent, createBlock, createCommentVNode, toRef, onUpdated, onBeforeUnmount, toRefs, provide, onDeactivated, Fragment, Teleport, mergeProps, Transition, withDirectives, vShow, nextTick, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, withModifiers, TransitionGroup, renderList, watchEffect, isVNode, unref } from "vue";
const __uno = "";
const props = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "blue"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const SButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    var _a;
    console.log(`html`, (_a = document.querySelector(`#app`)) == null ? void 0 : _a.innerHTML);
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
          py-${size[props2.size].y}
          px-${size[props2.size].x}
          ${props2.round ? "rounded-full" : "rounded-lg"}
          bg-${props2.color}-${props2.plain ? "100" : "500"}
          hover:bg-${props2.color}-400
          border-${props2.color}-${props2.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props2.plain ? props2.color + "-500" : "white-500"}
          text-${size[props2.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const opt = Object.prototype.toString;
function isArray(obj) {
  return opt.call(obj) === "[object Array]";
}
function isNull(obj) {
  return opt.call(obj) === "[object Null]";
}
function isObject(obj) {
  return opt.call(obj) === "[object Object]";
}
function isString(obj) {
  return opt.call(obj) === "[object String]";
}
function isNumber(obj) {
  return opt.call(obj) === "[object Number]" && obj === obj;
}
function isUndefined(obj) {
  return obj === void 0;
}
function isFunction(obj) {
  return typeof obj === "function";
}
const isComponentInstance = (value) => {
  return (value == null ? void 0 : value.$) !== void 0;
};
const configProviderInjectionKey = Symbol("ArcoConfigProvider");
const calendarLang = {
  formatYear: "YYYY \u5E74",
  formatMonth: "YYYY \u5E74 MM \u6708",
  today: "\u4ECA\u5929",
  view: {
    month: "\u6708",
    year: "\u5E74",
    week: "\u5468",
    day: "\u65E5"
  },
  month: {
    long: {
      January: "\u4E00\u6708",
      February: "\u4E8C\u6708",
      March: "\u4E09\u6708",
      April: "\u56DB\u6708",
      May: "\u4E94\u6708",
      June: "\u516D\u6708",
      July: "\u4E03\u6708",
      August: "\u516B\u6708",
      September: "\u4E5D\u6708",
      October: "\u5341\u6708",
      November: "\u5341\u4E00\u6708",
      December: "\u5341\u4E8C\u6708"
    },
    short: {
      January: "\u4E00\u6708",
      February: "\u4E8C\u6708",
      March: "\u4E09\u6708",
      April: "\u56DB\u6708",
      May: "\u4E94\u6708",
      June: "\u516D\u6708",
      July: "\u4E03\u6708",
      August: "\u516B\u6708",
      September: "\u4E5D\u6708",
      October: "\u5341\u6708",
      November: "\u5341\u4E00\u6708",
      December: "\u5341\u4E8C\u6708"
    }
  },
  week: {
    long: {
      self: "\u5468",
      monday: "\u5468\u4E00",
      tuesday: "\u5468\u4E8C",
      wednesday: "\u5468\u4E09",
      thursday: "\u5468\u56DB",
      friday: "\u5468\u4E94",
      saturday: "\u5468\u516D",
      sunday: "\u5468\u65E5"
    },
    short: {
      self: "\u5468",
      monday: "\u4E00",
      tuesday: "\u4E8C",
      wednesday: "\u4E09",
      thursday: "\u56DB",
      friday: "\u4E94",
      saturday: "\u516D",
      sunday: "\u65E5"
    }
  }
};
const lang = {
  locale: "zh-CN",
  empty: {
    description: "\u6682\u65E0\u6570\u636E"
  },
  drawer: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  popconfirm: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  modal: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  pagination: {
    goto: "\u524D\u5F80",
    page: "\u9875",
    countPerPage: "\u6761/\u9875",
    total: "\u5171 {0} \u6761"
  },
  table: {
    okText: "\u786E\u5B9A",
    resetText: "\u91CD\u7F6E"
  },
  upload: {
    start: "\u5F00\u59CB",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    retry: "\u70B9\u51FB\u91CD\u8BD5",
    buttonText: "\u70B9\u51FB\u4E0A\u4F20",
    preview: "\u9884\u89C8",
    drag: "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u4E0A\u4F20",
    dragHover: "\u91CA\u653E\u6587\u4EF6\u5E76\u5F00\u59CB\u4E0A\u4F20",
    error: "\u4E0A\u4F20\u5931\u8D25"
  },
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: "\u8BF7\u9009\u62E9\u65E5\u671F",
      week: "\u8BF7\u9009\u62E9\u5468",
      month: "\u8BF7\u9009\u62E9\u6708\u4EFD",
      year: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
      quarter: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
      time: "\u8BF7\u9009\u62E9\u65F6\u95F4"
    },
    rangePlaceholder: {
      date: ["\u5F00\u59CB\u65E5\u671F", "\u7ED3\u675F\u65E5\u671F"],
      week: ["\u5F00\u59CB\u5468", "\u7ED3\u675F\u5468"],
      month: ["\u5F00\u59CB\u6708\u4EFD", "\u7ED3\u675F\u6708\u4EFD"],
      year: ["\u5F00\u59CB\u5E74\u4EFD", "\u7ED3\u675F\u5E74\u4EFD"],
      quarter: ["\u5F00\u59CB\u5B63\u5EA6", "\u7ED3\u675F\u5B63\u5EA6"],
      time: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"]
    },
    selectTime: "\u9009\u62E9\u65F6\u95F4",
    today: "\u4ECA\u5929",
    now: "\u6B64\u523B",
    ok: "\u786E\u5B9A"
  },
  image: {
    loading: "\u52A0\u8F7D\u4E2D"
  },
  imagePreview: {
    fullScreen: "\u5168\u5C4F",
    rotateRight: "\u5411\u53F3\u65CB\u8F6C",
    rotateLeft: "\u5411\u5DE6\u65CB\u8F6C",
    zoomIn: "\u653E\u5927",
    zoomOut: "\u7F29\u5C0F",
    originalSize: "\u539F\u59CB\u5C3A\u5BF8"
  },
  typography: {
    copied: "\u5DF2\u590D\u5236",
    copy: "\u590D\u5236",
    expand: "\u5C55\u5F00",
    collapse: "\u6298\u53E0",
    edit: "\u7F16\u8F91"
  }
};
const LOCALE = ref("zh-CN");
const I18N_MESSAGES = reactive({
  "zh-CN": lang
});
const useI18n = () => {
  const configProvider = inject(configProviderInjectionKey, void 0);
  const i18nMessage = computed(() => {
    var _a;
    return (_a = configProvider == null ? void 0 : configProvider.locale) != null ? _a : I18N_MESSAGES[LOCALE.value];
  });
  const locale = computed(() => i18nMessage.value.locale);
  const transform = (key, ...args) => {
    const keyArray = key.split(".");
    let temp = i18nMessage.value;
    for (const keyItem of keyArray) {
      if (!temp[keyItem]) {
        return key;
      }
      temp = temp[keyItem];
    }
    if (isString(temp)) {
      if (args.length > 0) {
        return temp.replace(/{(\d+)}/g, (sub, index2) => {
          var _a;
          return (_a = args[index2]) != null ? _a : sub;
        });
      }
      return temp;
    }
    return temp;
  };
  return {
    locale,
    t: transform
  };
};
var __defProp$9 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
const COMPONENT_PREFIX = "A";
const CLASS_PREFIX = "arco";
const GLOBAL_CONFIG_NAME = "$arco";
const getComponentPrefix = (options) => {
  var _a;
  return (_a = options == null ? void 0 : options.componentPrefix) != null ? _a : COMPONENT_PREFIX;
};
const setGlobalConfig = (app, options) => {
  var _a;
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = __spreadProps$4(__spreadValues$9({}, (_a = app.config.globalProperties[GLOBAL_CONFIG_NAME]) != null ? _a : {}), {
      classPrefix: options.classPrefix
    });
  }
};
const getPrefixCls = (componentName) => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  const configProvider = inject(configProviderInjectionKey, void 0);
  const prefix = (_c = (_b = configProvider == null ? void 0 : configProvider.prefixCls) != null ? _b : (_a = instance == null ? void 0 : instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]) == null ? void 0 : _a.classPrefix) != null ? _c : CLASS_PREFIX;
  if (componentName) {
    return `${prefix}-${componentName}`;
  }
  return prefix;
};
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry2, index2) {
      if (entry2[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key) {
      var index2 = getIndex(this.__entries__, key);
      var entry2 = this.__entries__[index2];
      return entry2 && entry2[1];
    };
    class_1.prototype.set = function(key, value) {
      var index2 = getIndex(this.__entries__, key);
      if (~index2) {
        this.__entries__[index2][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    class_1.prototype.delete = function(key) {
      var entries = this.__entries__;
      var index2 = getIndex(entries, key);
      if (~index2) {
        entries.splice(index2, 1);
      }
    };
    class_1.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry2 = _a[_i];
        callback.call(ctx, entry2[1], entry2[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index2 = observers2.indexOf(observer);
    if (~index2) {
      observers2.splice(index2, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target2, props2) {
  for (var _i = 0, _a = Object.keys(props2); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target2, key, {
      value: props2[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target2;
};
var getWindowOf = function(target2) {
  var ownerGlobal = target2 && target2.ownerDocument && target2.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target2) {
  var bbox = target2.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target2) {
  var clientWidth = target2.clientWidth, clientHeight = target2.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target2).getComputedStyle(target2);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target2)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target2) {
      return target2 instanceof getWindowOf(target2).SVGGraphicsElement;
    };
  }
  return function(target2) {
    return target2 instanceof getWindowOf(target2).SVGElement && typeof target2.getBBox === "function";
  };
}();
function isDocumentElement(target2) {
  return target2 === getWindowOf(target2).document.documentElement;
}
function getContentRect(target2) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target2)) {
    return getSVGContentRect(target2);
  }
  return getHTMLElementContentRect(target2);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = function() {
  function ResizeObservation2(target2) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target2;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target2, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, { target: target2, contentRect });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target2) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target2 instanceof getWindowOf(target2).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target2)) {
      return;
    }
    observations.set(target2, new ResizeObservation(target2));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target2) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target2 instanceof getWindowOf(target2).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target2)) {
      return;
    }
    observations.delete(target2);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    var entries = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver$2 = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver$2.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver$2;
}();
var ShapeFlags;
(function(ShapeFlags2) {
  ShapeFlags2[ShapeFlags2["ELEMENT"] = 1] = "ELEMENT";
  ShapeFlags2[ShapeFlags2["FUNCTIONAL_COMPONENT"] = 2] = "FUNCTIONAL_COMPONENT";
  ShapeFlags2[ShapeFlags2["STATEFUL_COMPONENT"] = 4] = "STATEFUL_COMPONENT";
  ShapeFlags2[ShapeFlags2["COMPONENT"] = 6] = "COMPONENT";
  ShapeFlags2[ShapeFlags2["TEXT_CHILDREN"] = 8] = "TEXT_CHILDREN";
  ShapeFlags2[ShapeFlags2["ARRAY_CHILDREN"] = 16] = "ARRAY_CHILDREN";
  ShapeFlags2[ShapeFlags2["SLOTS_CHILDREN"] = 32] = "SLOTS_CHILDREN";
  ShapeFlags2[ShapeFlags2["TELEPORT"] = 64] = "TELEPORT";
  ShapeFlags2[ShapeFlags2["SUSPENSE"] = 128] = "SUSPENSE";
  ShapeFlags2[ShapeFlags2["COMPONENT_SHOULD_KEEP_ALIVE"] = 256] = "COMPONENT_SHOULD_KEEP_ALIVE";
  ShapeFlags2[ShapeFlags2["COMPONENT_KEPT_ALIVE"] = 512] = "COMPONENT_KEPT_ALIVE";
})(ShapeFlags || (ShapeFlags = {}));
var PatchFlags;
(function(PatchFlags2) {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["DEV_ROOT_FRAGMENT"] = 2048] = "DEV_ROOT_FRAGMENT";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
})(PatchFlags || (PatchFlags = {}));
const isElement = (vn) => {
  return Boolean(vn && vn.shapeFlag & 1);
};
const isComponent = (vn, type) => {
  return Boolean(vn && vn.shapeFlag & 6);
};
const isArrayChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 16);
};
const isSlotsChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 32);
};
const getFirstComponent = (children) => {
  var _a, _b;
  if (!children) {
    return void 0;
  }
  for (const child of children) {
    if (isElement(child) || isComponent(child)) {
      return child;
    }
    if (isArrayChildren(child, child.children)) {
      const result = getFirstComponent(child.children);
      if (result)
        return result;
    } else if (isSlotsChildren(child, child.children)) {
      const children2 = (_b = (_a = child.children).default) == null ? void 0 : _b.call(_a);
      if (children2) {
        const result = getFirstComponent(children2);
        if (result)
          return result;
      }
    } else if (isArray(child)) {
      const result = getFirstComponent(child);
      if (result)
        return result;
    }
  }
  return void 0;
};
const isEmptyChildren = (children) => {
  if (!children) {
    return true;
  }
  for (const item of children) {
    if (item.children) {
      return false;
    }
  }
  return true;
};
const mergeFirstChild = (children, extraProps) => {
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isElement(child) || isComponent(child)) {
        const props2 = isFunction(extraProps) ? extraProps(child) : extraProps;
        children[i] = cloneVNode(child, props2, true);
        return true;
      }
      const _children = getChildrenArray(child);
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps);
        if (result)
          return true;
      }
    }
  }
  return false;
};
const getChildrenArray = (vn) => {
  if (isArrayChildren(vn, vn.children)) {
    return vn.children;
  }
  if (isArray(vn)) {
    return vn;
  }
  return void 0;
};
const getFirstElementFromVNode = (vn) => {
  var _a, _b;
  if (isElement(vn)) {
    return vn.el;
  }
  if (isComponent(vn)) {
    if (((_a = vn.el) == null ? void 0 : _a.nodeType) === 1) {
      return vn.el;
    }
    if ((_b = vn.component) == null ? void 0 : _b.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree);
      if (ele)
        return ele;
    }
  } else {
    const children = getChildrenArray(vn);
    return getFirstElementFromChildren(children);
  }
  return void 0;
};
const getFirstElementFromChildren = (children) => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);
      if (element)
        return element;
    }
  }
  return void 0;
};
var ResizeObserver$1 = defineComponent({
  name: "ResizeObserver",
  emits: [
    "resize"
  ],
  setup(props2, {
    emit,
    slots
  }) {
    let resizeObserver;
    const componentRef = ref();
    const element = computed(() => isComponentInstance(componentRef.value) ? componentRef.value.$el : componentRef.value);
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index((entries) => {
        const entry2 = entries[0];
        emit("resize", entry2);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(element, (_element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (_element)
        createResizeObserver(_element);
    });
    onMounted(() => {
      if (element.value) {
        createResizeObserver(element.value);
      }
    });
    onUnmounted(() => {
      destroyResizeObserver();
    });
    return () => {
      var _a, _b;
      const firstChild = getFirstComponent((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : []);
      if (firstChild) {
        return cloneVNode(firstChild, {
          ref: componentRef
        }, true);
      }
      return null;
    };
  }
});
const target$1 = typeof window === "undefined" ? global : window;
const raf = target$1.requestAnimationFrame;
const caf = target$1.cancelAnimationFrame;
function throttleByRaf(cb) {
  let timer = 0;
  const throttle2 = (...args) => {
    if (timer) {
      caf(timer);
    }
    timer = raf(() => {
      cb(...args);
      timer = 0;
    });
  };
  throttle2.cancel = () => {
    caf(timer);
    timer = 0;
  };
  return throttle2;
}
const NOOP = () => {
  return void 0;
};
const isServerRendering = (() => {
  try {
    return !(typeof window !== "undefined" && document !== void 0);
  } catch (e) {
    return true;
  }
})();
const on = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, event, handler, options = false) => {
    element.addEventListener(event, handler, options);
  };
})();
const off = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, type, handler, options = false) => {
    element.removeEventListener(type, handler, options);
  };
})();
const querySelector = (selectors, container) => {
  var _a;
  if (isServerRendering) {
    return NOOP();
  }
  return (_a = (container != null ? container : document).querySelector(selectors)) != null ? _a : void 0;
};
const getElement = (target2, container) => {
  if (isString(target2)) {
    const selector = target2[0] === "#" ? `[id='${target2.slice(1)}']` : target2;
    return querySelector(selector, container);
  }
  return target2;
};
const getRelativeRect = (target2, relative) => {
  const targetRect = target2.getBoundingClientRect();
  const relativeRect = relative.getBoundingClientRect();
  return {
    top: targetRect.top - relativeRect.top,
    bottom: relativeRect.bottom - targetRect.bottom,
    left: targetRect.left - relativeRect.left,
    right: relativeRect.right - targetRect.right,
    width: targetRect.width,
    height: targetRect.height
  };
};
var _export_sfc = (sfc, props2) => {
  for (const [key, val] of props2) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$g = defineComponent({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const prefixCls = getPrefixCls("icon-hover");
    return {
      prefixCls
    };
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([
      _ctx.prefixCls,
      {
        [`${_ctx.prefix}-icon-hover`]: _ctx.prefix,
        [`${_ctx.prefixCls}-size-${_ctx.size}`]: _ctx.size !== "medium",
        [`${_ctx.prefixCls}-disabled`]: _ctx.disabled
      }
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var IconHover = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f]]);
const _sfc_main$f = defineComponent({
  name: "IconClose",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-close`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$9 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", { d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142" }, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$8, 14, _hoisted_1$9);
}
var _IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e]]);
const IconClose = Object.assign(_IconClose, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconClose.name, _IconClose);
  }
});
const _sfc_main$e = defineComponent({
  name: "IconCheckCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-check-circle-fill`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$8 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$7, 14, _hoisted_1$8);
}
var _IconCheckCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d]]);
const IconCheckCircleFill = Object.assign(_IconCheckCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCheckCircleFill.name, _IconCheckCircleFill);
  }
});
const _sfc_main$d = defineComponent({
  name: "IconExclamationCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-exclamation-circle-fill`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$7 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$6, 14, _hoisted_1$7);
}
var _IconExclamationCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c]]);
const IconExclamationCircleFill = Object.assign(_IconExclamationCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExclamationCircleFill.name, _IconExclamationCircleFill);
  }
});
const _sfc_main$c = defineComponent({
  name: "IconCloseCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-close-circle-fill`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$6 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$5, 14, _hoisted_1$6);
}
var _IconCloseCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b]]);
const IconCloseCircleFill = Object.assign(_IconCloseCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCloseCircleFill.name, _IconCloseCircleFill);
  }
});
const INPUT_EVENTS = [
  "onFocus",
  "onFocusin",
  "onFocusout",
  "onBlur",
  "onChange",
  "onBeforeinput",
  "onInput",
  "onReset",
  "onSubmit",
  "onInvalid",
  "onKeydown",
  "onKeypress",
  "onKeyup",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionstart",
  "onCompositionupdate",
  "onCompositionend",
  "onSelect",
  "autocomplete",
  "autofocus",
  "maxlength",
  "minlength",
  "name",
  "pattern",
  "readonly",
  "required"
];
const _sfc_main$b = defineComponent({
  name: "IconLoading",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-loading`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$5 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$4, 14, _hoisted_1$5);
}
var _IconLoading = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a]]);
const IconLoading = Object.assign(_IconLoading, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLoading.name, _IconLoading);
  }
});
const _sfc_main$a = defineComponent({
  name: "FeedbackIcon",
  components: {
    IconLoading,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill
  },
  props: {
    type: {
      type: String
    }
  },
  setup(props2) {
    const prefixCls = getPrefixCls("feedback-icon");
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-status-${props2.type}`
    ]);
    return {
      cls
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.type === "validating" ? (openBlock(), createBlock(_component_icon_loading, { key: 0 })) : _ctx.type === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, { key: 1 })) : _ctx.type === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 2 })) : _ctx.type === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, { key: 3 })) : createCommentVNode("v-if", true)
  ], 2);
}
var FeedbackIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9]]);
const Enter = {
  key: "Enter",
  code: "Enter"
};
const Backspace = {
  key: "Backspace",
  code: "Backspace"
};
var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
const omit = (object, path) => {
  const result = __spreadValues$8({}, object);
  for (const item of path) {
    if (item in result) {
      delete result[item];
    }
  }
  return result;
};
function pick(obj, keys) {
  const clone = {};
  keys.forEach((key) => {
    const k = key;
    if (key in obj) {
      clone[k] = obj[k];
    }
  });
  return clone;
}
const formItemInjectionKey = Symbol("ArcoFormItemContext");
const useFormItem = ({
  size,
  disabled,
  error,
  uninject
} = {}) => {
  const formItemCtx = !uninject ? inject(formItemInjectionKey, {}) : {};
  const mergedSize = computed(() => {
    var _a;
    return (_a = size == null ? void 0 : size.value) != null ? _a : formItemCtx.size;
  });
  const mergedDisabled = computed(() => (disabled == null ? void 0 : disabled.value) || formItemCtx.disabled);
  const mergedError = computed(() => (error == null ? void 0 : error.value) || formItemCtx.error);
  const feedback = toRef(formItemCtx, "feedback");
  const eventHandlers = toRef(formItemCtx, "eventHandlers");
  return {
    formItemCtx,
    mergedSize,
    mergedDisabled,
    mergedError,
    feedback,
    eventHandlers
  };
};
const useSize$1 = (size, { defaultValue = "medium" } = {}) => {
  const configProviderCtx = inject(configProviderInjectionKey, void 0);
  const mergedSize = computed(() => {
    var _a, _b;
    return (_b = (_a = size == null ? void 0 : size.value) != null ? _a : configProviderCtx == null ? void 0 : configProviderCtx.size) != null ? _b : defaultValue;
  });
  return {
    mergedSize
  };
};
const _sfc_main$9 = defineComponent({
  name: "IconSearch",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-search`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$4 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$3, 14, _hoisted_1$4);
}
var _IconSearch = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8]]);
const IconSearch = Object.assign(_IconSearch, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconSearch.name, _IconSearch);
  }
});
var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
const getViewPortSize = () => {
  return {
    width: document.documentElement.clientWidth || window.innerWidth,
    height: document.documentElement.clientHeight || window.innerHeight
  };
};
const getElementScrollRect = (element, containerRect) => {
  var _a, _b;
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    scrollTop: rect.top - containerRect.top,
    scrollBottom: rect.bottom - containerRect.top,
    scrollLeft: rect.left - containerRect.left,
    scrollRight: rect.right - containerRect.left,
    width: (_a = element.offsetWidth) != null ? _a : element.clientWidth,
    height: (_b = element.offsetHeight) != null ? _b : element.clientHeight
  };
};
const getBoundaryPosition = (position) => {
  switch (position) {
    case "top":
    case "tl":
    case "tr":
      return "top";
    case "bottom":
    case "bl":
    case "br":
      return "bottom";
    case "left":
    case "lt":
    case "lb":
      return "left";
    case "right":
    case "rt":
    case "rb":
      return "right";
    default:
      return "top";
  }
};
const changePosition = (position, direction) => {
  switch (direction) {
    case "top":
      switch (position) {
        case "bottom":
          return "top";
        case "bl":
          return "tl";
        case "br":
          return "tr";
        default:
          return position;
      }
    case "bottom":
      switch (position) {
        case "top":
          return "bottom";
        case "tl":
          return "bl";
        case "tr":
          return "br";
        default:
          return position;
      }
    case "left":
      switch (position) {
        case "right":
          return "left";
        case "rt":
          return "lt";
        case "rb":
          return "lb";
        default:
          return position;
      }
    case "right":
      switch (position) {
        case "left":
          return "right";
        case "lt":
          return "rt";
        case "lb":
          return "rb";
        default:
          return position;
      }
    default:
      return position;
  }
};
const getFitPosition = (position, popupPosition, {
  containerRect,
  triggerRect,
  popupRect,
  offset,
  translate
}) => {
  const direction = getBoundaryPosition(position);
  const viewPortSize = getViewPortSize();
  const viewPortBoundary = {
    top: containerRect.top + popupPosition.top,
    bottom: viewPortSize.height - (containerRect.top + popupPosition.top + popupRect.height),
    left: containerRect.left + popupPosition.left,
    right: viewPortSize.width - (containerRect.left + popupPosition.left + popupRect.width)
  };
  let finalPosition = position;
  if (direction === "top" && viewPortBoundary.top < 0) {
    if (triggerRect.top > popupRect.height) {
      popupPosition.top = -containerRect.top;
    } else {
      const fitPosition = getPopupOffset("bottom", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.height - (containerRect.top + fitPosition.top + popupRect.height) > 0) {
        finalPosition = changePosition(position, "bottom");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "bottom" && viewPortBoundary.bottom < 0) {
    if (viewPortSize.height - triggerRect.bottom > popupRect.height) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    } else {
      const fitPosition = getPopupOffset("top", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.top + fitPosition.top > 0) {
        finalPosition = changePosition(position, "top");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "left" && viewPortBoundary.left < 0) {
    if (triggerRect.left > popupRect.width) {
      popupPosition.left = -containerRect.left;
    } else {
      const fitPosition = getPopupOffset("right", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.width - (containerRect.left + fitPosition.left + popupRect.width) > 0) {
        finalPosition = changePosition(position, "right");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "right" && viewPortBoundary.right < 0) {
    if (viewPortSize.width - triggerRect.right > popupRect.width) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    } else {
      const fitPosition = getPopupOffset("left", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.left + fitPosition.left > 0) {
        finalPosition = changePosition(position, "left");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "top" || direction === "bottom") {
    if (viewPortBoundary.left < 0) {
      popupPosition.left = -containerRect.left;
    } else if (viewPortBoundary.right < 0) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    }
  }
  if (direction === "left" || direction === "right") {
    if (viewPortBoundary.top < 0) {
      popupPosition.top = -containerRect.top;
    } else if (viewPortBoundary.bottom < 0) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    }
  }
  return {
    popupPosition,
    position: finalPosition
  };
};
const getPopupOffset = (position, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0]
} = {}) => {
  var _a;
  const _translate = (_a = isArray(translate) ? translate : translate[position]) != null ? _a : [0, 0];
  switch (position) {
    case "top":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tr":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "bottom":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "bl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "br":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "left":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "lt":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "lb":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    case "right":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "rt":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "rb":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
};
const getTransformOrigin = (position) => {
  let originX = "0";
  if (["top", "bottom"].includes(position)) {
    originX = "50%";
  } else if (["left", "lt", "lb", "tr", "br"].includes(position)) {
    originX = "100%";
  }
  let originY = "0";
  if (["left", "right"].includes(position)) {
    originY = "50%";
  } else if (["top", "tl", "tr", "lt", "rt"].includes(position)) {
    originY = "100%";
  }
  return `${originX} ${originY}`;
};
const getPopupStyle = (position, containerRect, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0],
  customStyle = {},
  autoFitPosition = false
} = {}) => {
  let finalPosition = position;
  let popupPosition = getPopupOffset(position, triggerRect, popupRect, {
    offset,
    translate
  });
  if (autoFitPosition) {
    const result = getFitPosition(position, popupPosition, {
      containerRect,
      popupRect,
      triggerRect,
      offset,
      translate
    });
    popupPosition = result.popupPosition;
    finalPosition = result.position;
  }
  const style = __spreadValues$7({
    left: `${popupPosition.left}px`,
    top: `${popupPosition.top}px`
  }, customStyle);
  return {
    style,
    position: finalPosition
  };
};
const getArrowStyle = (position, triggerRect, popupRect, {
  customStyle = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(position)) {
    let offsetLeft = Math.abs(triggerRect.scrollLeft + triggerRect.width / 2 - popupRect.scrollLeft);
    if (offsetLeft > popupRect.width - 8) {
      if (triggerRect.width > popupRect.width) {
        offsetLeft = popupRect.width / 2;
      } else {
        offsetLeft = popupRect.width - 8;
      }
    }
    if (["top", "tl", "tr"].includes(position)) {
      return __spreadValues$7({
        left: `${offsetLeft}px`,
        bottom: "0",
        transform: "translate(-50%,50%) rotate(45deg)"
      }, customStyle);
    }
    return __spreadValues$7({
      left: `${offsetLeft}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  let offsetTop = Math.abs(triggerRect.scrollTop + triggerRect.height / 2 - popupRect.scrollTop);
  if (offsetTop > popupRect.height - 8) {
    if (triggerRect.height > popupRect.height) {
      offsetTop = popupRect.height / 2;
    } else {
      offsetTop = popupRect.height - 8;
    }
  }
  if (["left", "lt", "lb"].includes(position)) {
    return __spreadValues$7({
      top: `${offsetTop}px`,
      right: "0",
      transform: "translate(50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  return __spreadValues$7({
    top: `${offsetTop}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, customStyle);
};
const isScrollElement = (element) => {
  return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
};
const getScrollElements = (container) => {
  var _a;
  const scrollElements = [];
  let element = container;
  while (element && element !== document.documentElement) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }
    element = (_a = element.parentElement) != null ? _a : void 0;
  }
  return scrollElements;
};
const useFirstElement = () => {
  const children = {};
  const firstElement = ref();
  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value);
    if (element !== firstElement.value) {
      firstElement.value = element;
    }
  };
  onMounted(() => getFirstElement());
  onUpdated(() => getFirstElement());
  return {
    children,
    firstElement
  };
};
var ResizeObserver = defineComponent({
  name: "ResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: [
    "resize"
  ],
  setup(props2, { emit, slots }) {
    const { children, firstElement } = useFirstElement();
    let resizeObserver;
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index((entries) => {
        const entry2 = entries[0];
        emit("resize", entry2);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(firstElement, (element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (element) {
        createResizeObserver(element);
      }
    });
    onBeforeUnmount(() => {
      if (resizeObserver)
        destroyResizeObserver();
    });
    return () => {
      var _a;
      children.value = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return children.value;
    };
  }
});
function usePickSlots(slots, slotName) {
  const slot = ref(slots[slotName]);
  onUpdated(() => {
    const newSlot = slots[slotName];
    if (slot.value !== newSlot) {
      slot.value = newSlot;
    }
  });
  return slot;
}
const triggerInjectionKey = Symbol("ArcoTrigger");
const POPUP_BASE_Z_INDEX = 1e3;
const MESSAGE_BASE_Z_INDEX = 5e3;
const Z_INDEX_STEP = 1;
class PopupManager {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    };
    this.getNextZIndex = (type) => {
      if (type === "message") {
        return MESSAGE_BASE_Z_INDEX + this.popupStack.message.size * Z_INDEX_STEP;
      }
      return POPUP_BASE_Z_INDEX + this.popupStack.popup.size * Z_INDEX_STEP;
    };
    this.add = (id, type) => {
      this.popupStack[type].add(id);
      if (type === "dialog") {
        this.popupStack.popup.add(id);
      }
      return this.getNextZIndex(type);
    };
    this.delete = (id, type) => {
      this.popupStack[type].delete(id);
      if (type === "dialog") {
        this.popupStack.popup.delete(id);
      }
    };
    this.isLastDialog = (id) => {
      if (this.popupStack.dialog.size > 1) {
        const array = Array.from(this.popupStack.dialog);
        return id === array[array.length - 1];
      }
      return true;
    };
  }
}
const popupManager = new PopupManager();
function usePopupManager(type, {
  visible,
  runOnMounted
} = {}) {
  var _a, _b;
  const id = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.uid) != null ? _b : Date.now();
  const zIndex = ref(0);
  const open = () => {
    zIndex.value = popupManager.add(id, type);
  };
  const close = () => {
    popupManager.delete(id, type);
  };
  const isLastDialog = () => {
    if (type === "dialog") {
      return popupManager.isLastDialog(id);
    }
    return false;
  };
  watch(() => visible == null ? void 0 : visible.value, (visible2) => {
    if (visible2) {
      open();
    } else {
      close();
    }
  }, {
    immediate: true
  });
  if (runOnMounted) {
    onMounted(() => {
      open();
    });
    onBeforeUnmount(() => {
      close();
    });
  }
  return {
    id,
    zIndex,
    open,
    close,
    isLastDialog
  };
}
const useResizeObserver = ({
  elementRef,
  onResize
}) => {
  let resizeObserver;
  const createResizeObserver = () => {
    if (!elementRef.value)
      return;
    resizeObserver = new index((entries) => {
      const entry2 = entries[0];
      isFunction(onResize) && onResize(entry2);
    });
    resizeObserver.observe(elementRef.value);
  };
  const destroyResizeObserver = () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  };
  return {
    createResizeObserver,
    destroyResizeObserver
  };
};
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, {
    slots
  }) {
    const mounted = ref(false);
    onMounted(() => mounted.value = true);
    return () => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      return null;
    };
  }
});
const useTeleportContainer = ({
  popupContainer,
  visible,
  defaultContainer = "body",
  documentContainer
}) => {
  const teleportContainer = ref(popupContainer.value);
  const containerRef = ref();
  const getContainer = () => {
    const element = getElement(popupContainer.value);
    const _teleportContainer = element ? popupContainer.value : defaultContainer;
    const _containerElement = element != null ? element : documentContainer ? document.documentElement : getElement(defaultContainer);
    if (_teleportContainer !== teleportContainer.value) {
      teleportContainer.value = _teleportContainer;
    }
    if (_containerElement !== containerRef.value) {
      containerRef.value = _containerElement;
    }
  };
  onMounted(() => getContainer());
  watch(visible, (visible2) => {
    if (teleportContainer.value !== popupContainer.value && visible2) {
      getContainer();
    }
  });
  return {
    teleportContainer,
    containerRef
  };
};
var __defProp$6 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
const TRIGGER_EVENTS = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var _Trigger = defineComponent({
  name: "Trigger",
  inheritAttrs: false,
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "bottom"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popupOffset: {
      type: Number,
      default: 0
    },
    popupTranslate: {
      type: [Array, Object]
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    alignPoint: {
      type: Boolean,
      default: false
    },
    popupHoverStay: {
      type: Boolean,
      default: true
    },
    blurToClose: {
      type: Boolean,
      default: true
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    clickOutsideToClose: {
      type: Boolean,
      default: true
    },
    unmountOnClose: {
      type: Boolean,
      default: true
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    animationName: {
      type: String,
      default: "fade-in"
    },
    duration: {
      type: [Number, Object]
    },
    mouseEnterDelay: {
      type: Number,
      default: 100
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    },
    focusDelay: {
      type: Number,
      default: 0
    },
    autoFitPopupWidth: {
      type: Boolean,
      default: false
    },
    autoFitPopupMinWidth: {
      type: Boolean,
      default: false
    },
    autoFixPosition: {
      type: Boolean,
      default: true
    },
    popupContainer: {
      type: [String, Object]
    },
    updateAtScroll: {
      type: Boolean,
      default: false
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: false
    },
    hideEmpty: {
      type: Boolean,
      default: false
    },
    openedClass: {
      type: [String, Array, Object]
    },
    autoFitPosition: {
      type: Boolean,
      default: true
    },
    renderToBody: {
      type: Boolean,
      default: true
    },
    preventFocus: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true,
    "show": () => true,
    "hide": () => true,
    "resize": () => true
  },
  setup(props2, {
    emit,
    slots,
    attrs
  }) {
    const {
      popupContainer
    } = toRefs(props2);
    const prefixCls = getPrefixCls("trigger");
    const popupAttrs = computed(() => omit(attrs, TRIGGER_EVENTS));
    const configCtx = inject(configProviderInjectionKey, void 0);
    const triggerMethods = computed(() => [].concat(props2.trigger));
    const childrenRefs = /* @__PURE__ */ new Set();
    const triggerCtx = inject(triggerInjectionKey, void 0);
    const {
      children,
      firstElement
    } = useFirstElement();
    const popupRef = ref();
    const popupVisible = ref(props2.defaultPopupVisible);
    const popupPosition = ref(props2.position);
    const popupStyle = ref({});
    const transformStyle = ref({});
    const arrowStyle = ref({});
    const arrowRef = ref();
    const mousePosition = ref({
      top: 0,
      left: 0
    });
    const computedVisible = computed(() => {
      var _a;
      return (_a = props2.popupVisible) != null ? _a : popupVisible.value;
    });
    const {
      teleportContainer,
      containerRef
    } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
      documentContainer: true
    });
    const {
      zIndex
    } = usePopupManager("popup", {
      visible: computedVisible
    });
    let delayTimer = 0;
    let outsideListener = false;
    const cleanDelayTimer = () => {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = 0;
      }
    };
    const updateMousePosition = (e) => {
      if (props2.alignPoint) {
        const {
          pageX,
          pageY
        } = e;
        mousePosition.value = {
          top: pageY,
          left: pageX
        };
      }
    };
    const updatePopupStyle = () => {
      if (!firstElement.value || !popupRef.value || !containerRef.value) {
        return;
      }
      const containerRect = containerRef.value.getBoundingClientRect();
      const triggerRect = props2.alignPoint ? {
        top: mousePosition.value.top,
        bottom: mousePosition.value.top,
        left: mousePosition.value.left,
        right: mousePosition.value.left,
        scrollTop: mousePosition.value.top,
        scrollBottom: mousePosition.value.top,
        scrollLeft: mousePosition.value.left,
        scrollRight: mousePosition.value.left,
        width: 0,
        height: 0
      } : getElementScrollRect(firstElement.value, containerRect);
      const popupRect = getElementScrollRect(popupRef.value, containerRect);
      const {
        style,
        position
      } = getPopupStyle(props2.position, containerRect, triggerRect, popupRect, {
        offset: props2.popupOffset,
        translate: props2.popupTranslate,
        customStyle: props2.popupStyle,
        autoFitPosition: props2.autoFitPosition
      });
      if (props2.autoFitTransformOrigin) {
        transformStyle.value = {
          transformOrigin: getTransformOrigin(position)
        };
      }
      if (props2.autoFitPopupMinWidth) {
        style.minWidth = `${triggerRect.width}px`;
      } else if (props2.autoFitPopupWidth) {
        style.width = `${triggerRect.width}px`;
      }
      if (popupPosition.value !== position) {
        popupPosition.value = position;
      }
      popupStyle.value = style;
      if (props2.showArrow) {
        arrowStyle.value = getArrowStyle(position, triggerRect, popupRect, {
          customStyle: props2.arrowStyle
        });
      }
    };
    const changeVisible = (visible, delay) => {
      if (visible === computedVisible.value && delayTimer === 0) {
        return;
      }
      const update = () => {
        popupVisible.value = visible;
        emit("update:popupVisible", visible);
        emit("popupVisibleChange", visible);
        if (visible) {
          nextTick(() => {
            updatePopupStyle();
          });
        }
      };
      if (delay) {
        cleanDelayTimer();
        if (visible !== computedVisible.value) {
          delayTimer = window.setTimeout(update, delay);
        }
      } else {
        update();
      }
    };
    const handleClick = (e) => {
      var _a;
      (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, e);
      if (props2.disabled || computedVisible.value && !props2.clickToClose) {
        return;
      }
      if (triggerMethods.value.includes("click")) {
        updateMousePosition(e);
        changeVisible(!computedVisible.value);
      } else if (triggerMethods.value.includes("contextMenu") && computedVisible.value) {
        changeVisible(false);
      }
    };
    const handleMouseEnter = (e) => {
      var _a;
      (_a = attrs.onMouseenter) == null ? void 0 : _a.call(attrs, e);
      if (props2.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      updateMousePosition(e);
      changeVisible(true, props2.mouseEnterDelay);
    };
    const handleMouseEnterWithContext = (e) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseenter(e);
      handleMouseEnter(e);
    };
    const handleMouseLeave = (e) => {
      var _a;
      (_a = attrs.onMouseleave) == null ? void 0 : _a.call(attrs, e);
      if (props2.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      changeVisible(false, props2.mouseLeaveDelay);
    };
    const handleMouseLeaveWithContext = (e) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseleave(e);
      handleMouseLeave(e);
    };
    const handleFocusin = (e) => {
      var _a;
      (_a = attrs.onFocusin) == null ? void 0 : _a.call(attrs, e);
      if (props2.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      changeVisible(true, props2.focusDelay);
    };
    const handleFocusout = (e) => {
      var _a;
      (_a = attrs.onFocusout) == null ? void 0 : _a.call(attrs, e);
      if (props2.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      if (!props2.blurToClose) {
        return;
      }
      changeVisible(false);
    };
    const handleContextmenu = (e) => {
      var _a;
      (_a = attrs.onContextmenu) == null ? void 0 : _a.call(attrs, e);
      if (props2.disabled || !triggerMethods.value.includes("contextMenu") || computedVisible.value && !props2.clickToClose) {
        return;
      }
      updateMousePosition(e);
      changeVisible(!computedVisible.value);
      e.preventDefault();
    };
    const addChildRef = (ref2) => {
      childrenRefs.add(ref2);
      triggerCtx == null ? void 0 : triggerCtx.addChildRef(ref2);
    };
    const removeChildRef = (ref2) => {
      childrenRefs.delete(ref2);
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(ref2);
    };
    provide(triggerInjectionKey, reactive({
      onMouseenter: handleMouseEnterWithContext,
      onMouseleave: handleMouseLeaveWithContext,
      addChildRef,
      removeChildRef
    }));
    const removeOutsideListener = () => {
      off(document.documentElement, "mousedown", handleOutsideClick);
      outsideListener = false;
    };
    const contentSlot = usePickSlots(slots, "content");
    const hidePopup = computed(() => {
      var _a;
      return props2.hideEmpty && isEmptyChildren((_a = contentSlot.value) == null ? void 0 : _a.call(contentSlot));
    });
    const handleOutsideClick = (e) => {
      var _a, _b, _c;
      if (((_a = firstElement.value) == null ? void 0 : _a.contains(e.target)) || ((_b = popupRef.value) == null ? void 0 : _b.contains(e.target))) {
        return;
      }
      for (const item of childrenRefs) {
        if ((_c = item.value) == null ? void 0 : _c.contains(e.target)) {
          return;
        }
      }
      removeOutsideListener();
      changeVisible(false);
    };
    const handleScroll = throttleByRaf(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    const handleResize = () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    };
    const onTargetResize = () => {
      handleResize();
      emit("resize");
    };
    const handlePopupMouseDown = (e) => {
      if (props2.preventFocus) {
        e.preventDefault();
      }
    };
    triggerCtx == null ? void 0 : triggerCtx.addChildRef(popupRef);
    const triggerCls = computed(() => {
      return computedVisible.value ? props2.openedClass : void 0;
    });
    let scrollElements;
    watch(computedVisible, (value) => {
      if (props2.clickOutsideToClose) {
        if (!value && outsideListener) {
          removeOutsideListener();
        } else if (value && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
      }
      if (props2.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
        if (value) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        } else if (scrollElements) {
          for (const item of scrollElements) {
            item.removeEventListener("scroll", handleScroll);
          }
          scrollElements = void 0;
        }
      }
      if (value) {
        mounted.value = true;
      }
    });
    watch(() => [props2.autoFitPopupWidth, props2.autoFitPopupMinWidth], () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    const {
      createResizeObserver,
      destroyResizeObserver
    } = useResizeObserver({
      elementRef: containerRef,
      onResize: handleResize
    });
    onMounted(() => {
      createResizeObserver();
      if (computedVisible.value) {
        updatePopupStyle();
        if (props2.clickOutsideToClose && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
        if (props2.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        }
      }
    });
    onUpdated(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    onDeactivated(() => {
      changeVisible(false);
    });
    onBeforeUnmount(() => {
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(popupRef);
      destroyResizeObserver();
      if (outsideListener) {
        removeOutsideListener();
      }
      if (scrollElements) {
        for (const item of scrollElements) {
          item.removeEventListener("scroll", handleScroll);
        }
        scrollElements = void 0;
      }
    });
    const mounted = ref(computedVisible.value);
    const isAnimation = ref(false);
    const onAnimationStart = () => {
      isAnimation.value = true;
    };
    const handleShow = () => {
      isAnimation.value = false;
      if (computedVisible.value) {
        emit("show");
      }
    };
    const handleHide = () => {
      isAnimation.value = false;
      if (!computedVisible.value) {
        mounted.value = false;
        emit("hide");
      }
    };
    return () => {
      var _a, _b;
      children.value = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      mergeFirstChild(children.value, {
        class: triggerCls.value,
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onFocusin: handleFocusin,
        onFocusout: handleFocusout,
        onContextmenu: handleContextmenu
      });
      return createVNode(Fragment, null, [props2.autoFixPosition ? createVNode(ResizeObserver, {
        "onResize": onTargetResize
      }, {
        default: () => [children.value]
      }) : children.value, createVNode(ClientOnly, null, {
        default: () => [createVNode(Teleport, {
          "to": teleportContainer.value,
          "disabled": !props2.renderToBody
        }, {
          default: () => [(!props2.unmountOnClose || computedVisible.value || mounted.value) && !hidePopup.value && createVNode(ResizeObserver, {
            "onResize": handleResize
          }, {
            default: () => [createVNode("div", mergeProps({
              "ref": popupRef,
              "class": [`${prefixCls}-popup`, `${prefixCls}-position-${popupPosition.value}`],
              "style": __spreadProps$3(__spreadValues$6({}, popupStyle.value), {
                zIndex: zIndex.value,
                pointerEvents: isAnimation.value ? "none" : "auto"
              }),
              "trigger-placement": popupPosition.value,
              "onMouseenter": handleMouseEnterWithContext,
              "onMouseleave": handleMouseLeaveWithContext,
              "onMousedown": handlePopupMouseDown
            }, popupAttrs.value), [createVNode(Transition, {
              "name": props2.animationName,
              "duration": props2.duration,
              "appear": true,
              "onBeforeEnter": onAnimationStart,
              "onAfterEnter": handleShow,
              "onBeforeLeave": onAnimationStart,
              "onAfterLeave": handleHide
            }, {
              default: () => {
                var _a2;
                return [withDirectives(createVNode("div", {
                  "class": `${prefixCls}-popup-wrapper`,
                  "style": transformStyle.value
                }, [createVNode("div", {
                  "class": [`${prefixCls}-content`, props2.contentClass],
                  "style": props2.contentStyle
                }, [(_a2 = slots.content) == null ? void 0 : _a2.call(slots)]), props2.showArrow && createVNode("div", {
                  "ref": arrowRef,
                  "class": [`${prefixCls}-arrow`, props2.arrowClass],
                  "style": arrowStyle.value
                }, null)]), [[vShow, computedVisible.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Trigger = Object.assign(_Trigger, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Trigger.name, _Trigger);
  }
});
const _sfc_main$8 = defineComponent({
  name: "IconEmpty",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-empty`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$3 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", { d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$2, 14, _hoisted_1$3);
}
var _IconEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7]]);
const IconEmpty = Object.assign(_IconEmpty, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEmpty.name, _IconEmpty);
  }
});
var _Empty = defineComponent({
  name: "Empty",
  props: {
    description: String,
    imgSrc: String
  },
  setup(props2, {
    slots
  }) {
    const prefixCls = getPrefixCls("empty");
    const {
      t
    } = useI18n();
    const configCtx = inject(configProviderInjectionKey, void 0);
    return () => {
      var _a, _b, _c, _d;
      if (configCtx == null ? void 0 : configCtx.slots.empty) {
        return configCtx.slots.empty();
      }
      return createVNode("div", {
        "class": prefixCls
      }, [createVNode("div", {
        "class": `${prefixCls}-image`
      }, [(_b = (_a = slots.image) == null ? void 0 : _a.call(slots)) != null ? _b : props2.imgSrc ? createVNode("img", {
        "src": props2.imgSrc,
        "alt": props2.description || "empty"
      }, null) : createVNode(IconEmpty, null, null)]), createVNode("div", {
        "class": `${prefixCls}-description`
      }, [(_d = (_c = slots.default) == null ? void 0 : _c.call(slots)) != null ? _d : props2.description || t("empty.description")])]);
    };
  }
});
const Empty = Object.assign(_Empty, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Empty.name, _Empty);
  }
});
const DOT_NUMBER = 5;
var DotLoading = defineComponent({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(props2) {
    const prefixCls = getPrefixCls("dot-loading");
    return () => {
      const style = props2.size ? {
        width: `${props2.size}px`,
        height: `${props2.size}px`
      } : {};
      return createVNode("div", {
        "class": prefixCls,
        "style": {
          width: props2.size ? `${props2.size * 7}px` : void 0,
          height: props2.size ? `${props2.size}px` : void 0
        }
      }, [Array(DOT_NUMBER).fill(1).map((_, index2) => createVNode("div", {
        "class": `${prefixCls}-item`,
        "key": index2,
        "style": style
      }, null))]);
    };
  }
});
var _Spin = defineComponent({
  name: "Spin",
  props: {
    size: {
      type: Number
    },
    loading: Boolean,
    dot: Boolean,
    tip: String
  },
  setup(props2, {
    slots
  }) {
    const prefixCls = getPrefixCls("spin");
    const configCtx = inject(configProviderInjectionKey, void 0);
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-loading`]: props2.loading,
      [`${prefixCls}-with-tip`]: props2.tip && !slots.default
    }]);
    const renderIcon = () => {
      if (slots.icon) {
        const iconVNode = getFirstComponent(slots.icon());
        if (iconVNode) {
          return cloneVNode(iconVNode, {
            spin: true
          });
        }
      }
      if (slots.element) {
        return slots.element();
      }
      if (props2.dot) {
        return createVNode(DotLoading, {
          "size": props2.size
        }, null);
      }
      if (configCtx == null ? void 0 : configCtx.slots.loading) {
        return configCtx.slots.loading();
      }
      return createVNode(IconLoading, {
        "spin": true
      }, null);
    };
    const renderSpinIcon = () => {
      const style = props2.size ? {
        fontSize: `${props2.size}px`
      } : void 0;
      return createVNode(Fragment, null, [createVNode("div", {
        "class": `${prefixCls}-icon`,
        "style": style
      }, [renderIcon()]), props2.tip && createVNode("div", {
        "class": `${prefixCls}-tip`
      }, [props2.tip])]);
    };
    return () => createVNode("div", {
      "class": cls.value
    }, [slots.default ? createVNode(Fragment, null, [slots.default(), props2.loading && createVNode("div", {
      "class": `${prefixCls}-mask`
    }, [createVNode("div", {
      "class": `${prefixCls}-mask-icon`
    }, [renderSpinIcon()])])]) : renderSpinIcon()]);
  }
});
const Spin = Object.assign(_Spin, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Spin.name, _Spin);
  }
});
const _sfc_main$7 = defineComponent({
  name: "SelectDropdown",
  components: {
    Empty,
    Spin
  },
  props: {
    loading: Boolean,
    empty: Boolean,
    virtualList: Boolean,
    bottomOffset: {
      type: Number,
      default: 0
    },
    onScroll: {
      type: [Function, Array]
    },
    onReachBottom: {
      type: [Function, Array]
    }
  },
  emits: ["scroll", "reachBottom"],
  setup(props2, { emit, slots }) {
    const prefixCls = getPrefixCls("select-dropdown");
    const wrapperRef = ref();
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target;
      const bottom = scrollHeight - (scrollTop + offsetHeight);
      if (bottom <= props2.bottomOffset) {
        emit("reachBottom", e);
      }
      emit("scroll", e);
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-has-footer`]: Boolean(slots.footer)
      }
    ]);
    return {
      prefixCls,
      cls,
      wrapperRef,
      handleScroll
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_spin = resolveComponent("spin");
  const _component_empty = resolveComponent("empty");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.loading ? (openBlock(), createBlock(_component_spin, {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-loading`)
    }, null, 8, ["class"])) : _ctx.empty ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-empty`)
    }, [
      renderSlot(_ctx.$slots, "empty", {}, () => [
        createVNode(_component_empty)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.virtualList && !_ctx.loading && !_ctx.empty ? renderSlot(_ctx.$slots, "virtual-list", { key: 2 }) : createCommentVNode("v-if", true),
    !_ctx.virtualList ? withDirectives((openBlock(), createElementBlock("div", {
      key: 3,
      ref: "wrapperRef",
      class: normalizeClass(`${_ctx.prefixCls}-list-wrapper`),
      onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
    }, [
      createElementVNode("ul", {
        class: normalizeClass(`${_ctx.prefixCls}-list`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ], 34)), [
      [vShow, !_ctx.loading && !_ctx.empty]
    ]) : createCommentVNode("v-if", true),
    _ctx.$slots.footer && !_ctx.empty ? (openBlock(), createElementBlock("div", {
      key: 4,
      class: normalizeClass(`${_ctx.prefixCls}-footer`)
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var SelectDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
var IconCheck = defineComponent({
  name: "IconCheck",
  render() {
    return createVNode("svg", {
      "aria-hidden": "true",
      "focusable": "false",
      "viewBox": "0 0 1024 1024",
      "width": "200",
      "height": "200",
      "fill": "currentColor"
    }, [createVNode("path", {
      "d": "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840"
    }, null)]);
  }
});
const checkboxGroupKey = Symbol("ArcoCheckboxGroup");
var _Checkbox = defineComponent({
  name: "Checkbox",
  components: {
    IconCheck,
    IconHover
  },
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    uninjectGroupContext: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props2, {
    emit,
    slots
  }) {
    const {
      disabled
    } = toRefs(props2);
    const prefixCls = getPrefixCls("checkbox");
    const checkboxRef = ref();
    const checkboxGroupCtx = !props2.uninjectGroupContext ? inject(checkboxGroupKey, void 0) : void 0;
    const isGroup = (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.name) === "ArcoCheckboxGroup";
    const {
      mergedDisabled: _mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const _checked = ref(props2.defaultChecked);
    const computedValue = computed(() => {
      var _a;
      return isGroup ? checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.computedValue : (_a = props2.modelValue) != null ? _a : _checked.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return isArray(computedValue.value) ? computedValue.value.includes((_a = props2.value) != null ? _a : true) : computedValue.value;
    });
    const mergedDisabled = computed(() => (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.disabled) || (_mergedDisabled == null ? void 0 : _mergedDisabled.value) || !computedChecked.value && (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.isMaxed));
    const handleClick = (ev) => {
      ev.stopPropagation();
    };
    const handleChange = (e) => {
      var _a, _b, _c, _d;
      const {
        checked
      } = e.target;
      let newValue = checked;
      if (isArray(computedValue.value)) {
        const set = new Set(computedValue.value);
        if (checked) {
          set.add((_a = props2.value) != null ? _a : true);
        } else {
          set.delete((_b = props2.value) != null ? _b : true);
        }
        newValue = Array.from(set);
      }
      _checked.value = checked;
      if (isGroup && isArray(newValue)) {
        checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.handleChange(newValue, e);
      } else {
        emit("update:modelValue", newValue);
        emit("change", newValue, e);
        (_d = (_c = eventHandlers.value) == null ? void 0 : _c.onChange) == null ? void 0 : _d.call(_c, e);
      }
      nextTick(() => {
        if (checkboxRef.value && checkboxRef.value.checked !== computedChecked.value) {
          checkboxRef.value.checked = computedChecked.value;
        }
      });
    };
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-checked`]: computedChecked.value,
      [`${prefixCls}-indeterminate`]: props2.indeterminate,
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const handleFocus = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    watch(computedValue, (value) => {
      var _a;
      let checked;
      if (isArray(value)) {
        checked = value.includes((_a = props2.value) != null ? _a : true);
      } else {
        checked = value;
      }
      if (_checked.value !== checked) {
        _checked.value = checked;
      }
      if (checkboxRef.value && checkboxRef.value.checked !== checked) {
        checkboxRef.value.checked = checked;
      }
    });
    return () => {
      var _a, _b, _c, _d;
      return createVNode("label", {
        "aria-disabled": mergedDisabled.value,
        "class": cls.value
      }, [createVNode("input", {
        "ref": checkboxRef,
        "type": "checkbox",
        "checked": computedChecked.value,
        "value": props2.value,
        "class": `${prefixCls}-target`,
        "disabled": mergedDisabled.value,
        "onClick": handleClick,
        "onChange": handleChange,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, null), (_d = (_c = (_b = slots.checkbox) != null ? _b : (_a = checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.slots) == null ? void 0 : _a.checkbox) == null ? void 0 : _c({
        checked: computedChecked.value,
        disabled: mergedDisabled.value
      })) != null ? _d : createVNode(IconHover, {
        "class": `${prefixCls}-icon-hover`,
        "disabled": mergedDisabled.value || computedChecked.value
      }, {
        default: () => [createVNode("div", {
          "class": `${prefixCls}-icon`
        }, [computedChecked.value && createVNode(IconCheck, {
          "class": `${prefixCls}-icon-check`
        }, null)])]
      }), slots.default && createVNode("span", {
        "class": `${prefixCls}-label`
      }, [slots.default()])]);
    };
  }
});
var CheckboxGroup = defineComponent({
  name: "CheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: void 0
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number
    },
    options: {
      type: Array
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props2, {
    emit,
    slots
  }) {
    const {
      disabled
    } = toRefs(props2);
    const prefixCls = getPrefixCls("checkbox-group");
    const {
      mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const _value = ref(props2.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props2.modelValue) != null ? _a : _value.value;
    });
    const isMaxed = computed(() => props2.max === void 0 ? false : computedValue.value.length >= props2.max);
    const options = computed(() => {
      var _a;
      return ((_a = props2.options) != null ? _a : []).map((option) => {
        if (isString(option) || isNumber(option)) {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    const handleChange = (value, e) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, e);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, e);
    };
    provide(checkboxGroupKey, reactive({
      name: "ArcoCheckboxGroup",
      computedValue,
      disabled: mergedDisabled,
      isMaxed,
      slots,
      handleChange
    }));
    const cls = computed(() => [prefixCls, `${prefixCls}-direction-${props2.direction}`]);
    watch(() => props2.modelValue, (curValue) => {
      if (curValue) {
        _value.value = [...curValue];
      }
    });
    const renderOptions = () => {
      return options.value.map((option) => {
        const checked = computedValue.value.includes(option.value);
        return createVNode(_Checkbox, {
          "key": option.value,
          "value": option.value,
          "disabled": option.disabled || !checked && isMaxed.value,
          "indeterminate": option.indeterminate,
          "modelValue": checked
        }, {
          default: () => [slots.label ? slots.label({
            data: option
          }) : isFunction(option.label) ? option.label() : option.label]
        });
      });
    };
    return () => {
      var _a;
      return createVNode("span", {
        "class": cls.value
      }, [options.value.length > 0 ? renderOptions() : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const Checkbox = Object.assign(_Checkbox, {
  Group: CheckboxGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Checkbox.name, _Checkbox);
    app.component(componentPrefix + CheckboxGroup.name, CheckboxGroup);
  }
});
const selectInjectionKey = Symbol("ArcoSelectContext");
var __defProp$5 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
const isGroupOption = (option) => {
  return isObject(option) && "isGroup" in option;
};
const isGroupOptionInfo = (option) => {
  return isObject(option) && "isGroup" in option;
};
const getValueString = (value, valueKey = "value") => String(isObject(value) ? value[valueKey] : value);
const getKeyFromValue = (value, valueKey = "value") => {
  if (isObject(value)) {
    return `__arco__option__object__${value[valueKey]}`;
  }
  if (value || isNumber(value)) {
    return `__arco__option__${typeof value}-${value}`;
  }
  return "";
};
const createOptionInfo = (option, {
  valueKey,
  fieldNames,
  origin,
  index: index2 = -1
}) => {
  var _a;
  if (isObject(option)) {
    const value = option[fieldNames.value];
    return {
      raw: option,
      index: index2,
      key: getKeyFromValue(value, valueKey),
      origin,
      value,
      label: (_a = option[fieldNames.label]) != null ? _a : getValueString(value, valueKey),
      render: option[fieldNames.render],
      disabled: Boolean(option[fieldNames.disabled]),
      tagProps: option[fieldNames.tagProps]
    };
  }
  const raw = {
    value: option,
    label: String(option),
    disabled: false
  };
  return __spreadValues$5({
    raw,
    index: index2,
    key: getKeyFromValue(option, valueKey),
    origin
  }, raw);
};
const getOptionInfos = (options, {
  valueKey,
  fieldNames,
  origin,
  optionInfoMap
}) => {
  var _a;
  const infos = [];
  for (const item of options) {
    if (isGroupOption(item)) {
      const options2 = getOptionInfos((_a = item.options) != null ? _a : [], {
        valueKey,
        fieldNames,
        origin,
        optionInfoMap
      });
      if (options2.length > 0) {
        infos.push(__spreadProps$2(__spreadValues$5({}, item), {
          key: `__arco__group__${item.label}`,
          options: options2
        }));
      }
    } else {
      const optionInfo = createOptionInfo(item, {
        valueKey,
        fieldNames,
        origin
      });
      infos.push(optionInfo);
      if (!optionInfoMap.get(optionInfo.key)) {
        optionInfoMap.set(optionInfo.key, optionInfo);
      }
    }
  }
  return infos;
};
const getValidOptions = (optionInfos, {
  inputValue,
  filterOption
}) => {
  const travel = (optionInfos2) => {
    var _a;
    const options = [];
    for (const item of optionInfos2) {
      if (isGroupOptionInfo(item)) {
        const _options = travel((_a = item.options) != null ? _a : []);
        if (_options.length > 0) {
          options.push(__spreadProps$2(__spreadValues$5({}, item), { options: _options }));
        }
      } else if (isValidOption(item, { inputValue, filterOption })) {
        options.push(item);
      }
    }
    return options;
  };
  return travel(optionInfos);
};
const isValidOption = (optionInfo, {
  inputValue,
  filterOption
}) => {
  if (isFunction(filterOption)) {
    return !inputValue || filterOption(inputValue, optionInfo.raw);
  }
  if (filterOption) {
    return optionInfo.label.toLowerCase().includes((inputValue != null ? inputValue : "").toLowerCase());
  }
  return true;
};
const isEqualObject = (obj, other) => {
  if (!obj || !other) {
    return false;
  }
  if (obj.length !== other.length) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    const result = isEqual(obj[key], other[key]);
    if (!result)
      return false;
  }
  return true;
};
const isEqualArray = (arr, other) => {
  if (!arr || !other) {
    return false;
  }
  const { length } = arr;
  if (length !== other.length) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    const result = isEqual(arr[i], other[i]);
    if (!result)
      return false;
  }
  return true;
};
const isEqual = (a, b) => {
  const type = Object.prototype.toString.call(a);
  if (type !== Object.prototype.toString.call(b)) {
    return false;
  }
  if (type === "[object Object]") {
    return isEqualObject(a, b);
  }
  if (type === "[object Array]") {
    return isEqualArray(a, b);
  }
  if (type === "[object Function]") {
    if (a === b) {
      return true;
    }
    return a.toString() === b.toString();
  }
  return a === b;
};
const _sfc_main$6 = defineComponent({
  name: "Option",
  components: {
    Checkbox
  },
  props: {
    value: [String, Number, Object],
    label: String,
    disabled: Boolean,
    tagProps: {
      type: Object
    },
    extra: {
      type: Object
    },
    index: {
      type: Number
    },
    internal: Boolean
  },
  setup(props2) {
    const { disabled, tagProps: _tagProps, index: index2 } = toRefs(props2);
    const prefixCls = getPrefixCls("select-option");
    const selectCtx = inject(selectInjectionKey, void 0);
    const instance = getCurrentInstance();
    const itemRef = ref();
    const tagProps = ref(_tagProps.value);
    watch(_tagProps, (cur, pre) => {
      if (!isEqual(cur, pre)) {
        tagProps.value = cur;
      }
    });
    const textContent = ref("");
    const value = computed(() => {
      var _a, _b;
      return (_b = (_a = props2.value) != null ? _a : props2.label) != null ? _b : textContent.value;
    });
    const label = computed(() => {
      var _a;
      return (_a = props2.label) != null ? _a : textContent.value;
    });
    const key = computed(() => getKeyFromValue(value.value, selectCtx == null ? void 0 : selectCtx.valueKey));
    const component = computed(() => {
      var _a;
      return (_a = selectCtx == null ? void 0 : selectCtx.component) != null ? _a : "li";
    });
    const setTextContent = () => {
      var _a;
      if (!props2.label && itemRef.value) {
        const text = (_a = itemRef.value.textContent) != null ? _a : "";
        if (textContent.value !== text) {
          textContent.value = text;
        }
      }
    };
    onMounted(() => setTextContent());
    onUpdated(() => setTextContent());
    const isSelected = computed(() => {
      var _a;
      return (_a = selectCtx == null ? void 0 : selectCtx.valueKeys.includes(key.value)) != null ? _a : false;
    });
    const isActive = computed(() => (selectCtx == null ? void 0 : selectCtx.activeKey) === key.value);
    let isValid = ref(true);
    if (!props2.internal) {
      const optionInfo = reactive({
        raw: {
          value,
          label,
          disabled,
          tagProps
        },
        ref: itemRef,
        index: index2,
        key,
        origin: "slot",
        value,
        label,
        disabled,
        tagProps
      });
      isValid = computed(() => isValidOption(optionInfo, {
        inputValue: selectCtx == null ? void 0 : selectCtx.inputValue,
        filterOption: selectCtx == null ? void 0 : selectCtx.filterOption
      }));
      if (instance) {
        selectCtx == null ? void 0 : selectCtx.addSlotOptionInfo(instance.uid, optionInfo);
      }
      onBeforeUnmount(() => {
        if (instance) {
          selectCtx == null ? void 0 : selectCtx.removeSlotOptionInfo(instance.uid);
        }
      });
    }
    const handleClick = (ev) => {
      if (!props2.disabled) {
        selectCtx == null ? void 0 : selectCtx.onSelect(key.value, ev);
      }
    };
    const handleMouseEnter = () => {
      if (!props2.disabled) {
        selectCtx == null ? void 0 : selectCtx.setActiveKey(key.value);
      }
    };
    const handleMouseLeave = () => {
      if (!props2.disabled) {
        selectCtx == null ? void 0 : selectCtx.setActiveKey();
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props2.disabled,
        [`${prefixCls}-active`]: isActive.value,
        [`${prefixCls}-multiple`]: selectCtx == null ? void 0 : selectCtx.multiple
      }
    ]);
    return {
      prefixCls,
      cls,
      selectCtx,
      itemRef,
      component,
      isSelected,
      isValid,
      handleClick,
      handleMouseEnter,
      handleMouseLeave
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkbox = resolveComponent("checkbox");
  return withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.component), {
    ref: "itemRef",
    class: normalizeClass([_ctx.cls, { [`${_ctx.prefixCls}-has-suffix`]: Boolean(_ctx.$slots.suffix) }]),
    onClick: _ctx.handleClick,
    onMouseenter: _ctx.handleMouseEnter,
    onMouseleave: _ctx.handleMouseLeave
  }, {
    default: withCtx(() => [
      _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-icon`)
      }, [
        renderSlot(_ctx.$slots, "icon")
      ], 2)) : createCommentVNode("v-if", true),
      _ctx.selectCtx && _ctx.selectCtx.multiple ? (openBlock(), createBlock(_component_checkbox, {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-checkbox`),
        "model-value": _ctx.isSelected,
        disabled: _ctx.disabled,
        "uninject-group-context": ""
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "model-value", "disabled"])) : (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(`${_ctx.prefixCls}-content`)
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ], 2)),
      _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", {
        key: 3,
        class: normalizeClass(`${_ctx.prefixCls}-suffix`)
      }, [
        renderSlot(_ctx.$slots, "suffix")
      ], 2)) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [
    [vShow, _ctx.isValid]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
var __defProp$4 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const DEFAULT_FIELD_NAMES$2 = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
const useOptions = ({
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  valueKey,
  fieldNames
}) => {
  const mergedFieldNames = computed(() => __spreadValues$4(__spreadValues$4({}, DEFAULT_FIELD_NAMES$2), fieldNames == null ? void 0 : fieldNames.value));
  const slotOptionInfoMap = reactive(/* @__PURE__ */ new Map());
  const sortedSlotOptionInfos = ref([]);
  watch(slotOptionInfoMap, (slotOptionInfoMap2) => {
    sortedSlotOptionInfos.value = Array.from(slotOptionInfoMap2.values()).sort((a, b) => {
      if (isNumber(a.index) && isNumber(b.index)) {
        return a.index - b.index;
      }
      return 0;
    });
  }, { deep: true });
  const propOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = /* @__PURE__ */ new Map();
    const optionInfos = getOptionInfos((_a = options == null ? void 0 : options.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "options",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const extraOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = /* @__PURE__ */ new Map();
    const optionInfos = getOptionInfos((_a = extraOptions == null ? void 0 : extraOptions.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "extraOptions",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const optionInfoMap = reactive(/* @__PURE__ */ new Map());
  watch([
    slotOptionInfoMap,
    options != null ? options : ref([]),
    extraOptions != null ? extraOptions : ref([]),
    valueKey != null ? valueKey : ref("value")
  ], () => {
    optionInfoMap.clear();
    sortedSlotOptionInfos.value.forEach((info, index2) => {
      optionInfoMap.set(info.key, __spreadProps$1(__spreadValues$4({}, info), { index: index2 }));
    });
    propOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
    extraOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
  }, { immediate: true, deep: true });
  const validOptions = computed(() => {
    var _a;
    const options2 = getValidOptions(propOptionData.value.optionInfos, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
    if ((_a = showExtraOptions == null ? void 0 : showExtraOptions.value) != null ? _a : true) {
      options2.push(...getValidOptions(extraOptionData.value.optionInfos, {
        inputValue: inputValue == null ? void 0 : inputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      }));
    }
    return options2;
  });
  const validOptionInfos = computed(() => Array.from(optionInfoMap.values()).filter((optionInfo) => {
    if (optionInfo.origin === "extraOptions" && (showExtraOptions == null ? void 0 : showExtraOptions.value) === false) {
      return false;
    }
    return isValidOption(optionInfo, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
  }));
  const enabledOptionKeys = computed(() => validOptionInfos.value.filter((optionInfo) => !optionInfo.disabled).map((info) => info.key));
  const getNextSlotOptionIndex = () => slotOptionInfoMap.size;
  const addSlotOptionInfo = (id, optionInfo) => {
    slotOptionInfoMap.set(id, optionInfo);
  };
  const removeSlotOptionInfo = (id) => {
    slotOptionInfoMap.delete(id);
  };
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  };
};
const KEYBOARD_KEY = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
};
const stringifyCodeKey = (k) => {
  return JSON.stringify({
    key: k.key,
    ctrl: Boolean(k.ctrl),
    shift: Boolean(k.shift),
    alt: Boolean(k.alt),
    meta: Boolean(k.meta)
  });
};
const getKeyDownHandler = (codeKeyMap) => {
  const map = {};
  codeKeyMap.forEach((callback, codeKey) => {
    const _codeKey = isString(codeKey) ? { key: codeKey } : codeKey;
    map[stringifyCodeKey(_codeKey)] = callback;
  });
  return (event) => {
    const key = stringifyCodeKey({
      key: event.key,
      ctrl: event.ctrlKey,
      shift: event.shiftKey,
      alt: event.altKey,
      meta: event.metaKey
    });
    const callback = map[key];
    if (callback) {
      event.stopPropagation();
      callback(event);
    }
  };
};
const useSelect = ({
  multiple,
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  component,
  valueKey,
  fieldNames,
  loading,
  popupVisible,
  valueKeys,
  dropdownRef,
  optionRefs,
  virtualListRef,
  onSelect,
  onPopupVisibleChange
}) => {
  const {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  } = useOptions({
    options,
    extraOptions,
    inputValue,
    filterOption,
    showExtraOptions,
    valueKey,
    fieldNames
  });
  const activeKey = ref();
  watch(enabledOptionKeys, (enabledKeys) => {
    if (!activeKey.value || !enabledKeys.includes(activeKey.value)) {
      activeKey.value = enabledKeys[0];
    }
  });
  const setActiveKey = (key) => {
    activeKey.value = key;
  };
  const getNextActiveKey = (direction) => {
    const _length = enabledOptionKeys.value.length;
    if (_length === 0) {
      return void 0;
    }
    if (!activeKey.value) {
      if (direction === "down") {
        return enabledOptionKeys.value[0];
      }
      return enabledOptionKeys.value[_length - 1];
    }
    const activeIndex = enabledOptionKeys.value.indexOf(activeKey.value);
    const nextIndex = (_length + activeIndex + (direction === "up" ? -1 : 1)) % _length;
    return enabledOptionKeys.value[nextIndex];
  };
  const scrollIntoView = (key) => {
    var _a, _b, _c;
    if (virtualListRef == null ? void 0 : virtualListRef.value) {
      virtualListRef.value.scrollTo({ key });
    }
    const optionInfo = optionInfoMap.get(key);
    const wrapperEle = (_b = (_a = dropdownRef == null ? void 0 : dropdownRef.value) == null ? void 0 : _a.$refs) == null ? void 0 : _b.wrapperRef;
    const optionEle = (_c = optionRefs == null ? void 0 : optionRefs.value[key]) != null ? _c : optionInfo == null ? void 0 : optionInfo.ref;
    if (!wrapperEle || !optionEle) {
      return;
    }
    if (wrapperEle.scrollHeight === wrapperEle.offsetHeight) {
      return;
    }
    const optionRect = getRelativeRect(optionEle, wrapperEle);
    const wrapperScrollTop = wrapperEle.scrollTop;
    if (optionRect.top < 0) {
      wrapperEle.scrollTo(0, wrapperScrollTop + optionRect.top);
    } else if (optionRect.bottom < 0) {
      wrapperEle.scrollTo(0, wrapperScrollTop - optionRect.bottom);
    }
  };
  watch(popupVisible, (visible) => {
    if (visible) {
      const current = valueKeys.value[valueKeys.value.length - 1];
      const _activeKey = enabledOptionKeys.value.includes(current) ? current : enabledOptionKeys.value[0];
      if (_activeKey !== activeKey.value) {
        activeKey.value = _activeKey;
      }
      nextTick(() => {
        if (activeKey.value) {
          scrollIntoView(activeKey.value);
        }
      });
    }
  });
  const handleKeyDown = getKeyDownHandler(/* @__PURE__ */ new Map([
    [
      KEYBOARD_KEY.ENTER,
      (e) => {
        if (!(loading == null ? void 0 : loading.value)) {
          if (popupVisible.value) {
            if (activeKey.value) {
              onSelect(activeKey.value, e);
            }
          } else {
            onPopupVisibleChange(true);
          }
        }
        e.preventDefault();
      }
    ],
    [
      KEYBOARD_KEY.ESC,
      (e) => {
        onPopupVisibleChange(false);
        e.preventDefault();
      }
    ],
    [
      KEYBOARD_KEY.ARROW_DOWN,
      (e) => {
        const next = getNextActiveKey("down");
        if (next) {
          activeKey.value = next;
          scrollIntoView(next);
        }
        e.preventDefault();
      }
    ],
    [
      KEYBOARD_KEY.ARROW_UP,
      (e) => {
        const next = getNextActiveKey("up");
        if (next) {
          activeKey.value = next;
          scrollIntoView(next);
        }
        e.preventDefault();
      }
    ]
  ]));
  provide(selectInjectionKey, reactive({
    multiple,
    valueKey,
    inputValue,
    filterOption,
    component,
    valueKeys,
    activeKey,
    setActiveKey,
    onSelect,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  }));
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    activeKey,
    setActiveKey,
    addSlotOptionInfo,
    removeSlotOptionInfo,
    getNextActiveKey,
    scrollIntoView,
    handleKeyDown
  };
};
const _sfc_main$5 = defineComponent({
  name: "IconDown",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-down`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$2 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M39.6 17.443 24.043 33 8.487 17.443" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$1, 14, _hoisted_1$2);
}
var _IconDown = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
const IconDown = Object.assign(_IconDown, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconDown.name, _IconDown);
  }
});
const useTrigger = ({
  popupVisible,
  defaultPopupVisible,
  emit
}) => {
  var _a;
  const _popupVisible = ref((_a = defaultPopupVisible == null ? void 0 : defaultPopupVisible.value) != null ? _a : false);
  const computedPopupVisible = computed(() => {
    var _a2;
    return (_a2 = popupVisible == null ? void 0 : popupVisible.value) != null ? _a2 : _popupVisible.value;
  });
  const handlePopupVisibleChange = (visible) => {
    if (visible !== computedPopupVisible.value) {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    }
  };
  watch(computedPopupVisible, (visible) => {
    if (_popupVisible.value !== visible) {
      _popupVisible.value = visible;
    }
  });
  return {
    computedPopupVisible,
    handlePopupVisibleChange
  };
};
const useInput = ({
  defaultValue,
  modelValue,
  emit,
  eventName = "input",
  updateEventName = "update:modelValue",
  eventHandlers
}) => {
  var _a;
  const inputRef = ref();
  const _value = ref((_a = defaultValue == null ? void 0 : defaultValue.value) != null ? _a : "");
  const _focused = ref(false);
  const isComposition = ref(false);
  const compositionValue = ref("");
  let initialValue;
  const computedValue = computed(() => {
    var _a2;
    return (_a2 = modelValue == null ? void 0 : modelValue.value) != null ? _a2 : _value.value;
  });
  const updateValue = (value, ev) => {
    _value.value = value;
    emit(updateEventName, value);
    emit(eventName, value, ev);
  };
  const handleInput = (ev) => {
    const { value } = ev.target;
    if (!isComposition.value) {
      updateValue(value, ev);
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
        }
      });
    }
  };
  const handleChange = (ev) => {
    if (eventName === "input" && computedValue.value !== initialValue) {
      initialValue = computedValue.value;
      emit("change", computedValue.value, ev);
    }
  };
  const handleComposition = (ev) => {
    var _a2;
    const { value } = ev.target;
    if (ev.type === "compositionend") {
      isComposition.value = false;
      compositionValue.value = "";
      updateValue(value, ev);
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
        }
      });
    } else {
      isComposition.value = true;
      compositionValue.value = computedValue.value + ((_a2 = ev.data) != null ? _a2 : "");
    }
  };
  const handleFocus = (ev) => {
    var _a2, _b;
    _focused.value = true;
    initialValue = computedValue.value;
    emit("focus", ev);
    (_b = (_a2 = eventHandlers == null ? void 0 : eventHandlers.value) == null ? void 0 : _a2.onFocus) == null ? void 0 : _b.call(_a2, ev);
  };
  const handleBlur = (ev) => {
    var _a2, _b;
    _focused.value = false;
    emit("blur", ev);
    (_b = (_a2 = eventHandlers == null ? void 0 : eventHandlers.value) == null ? void 0 : _a2.onBlur) == null ? void 0 : _b.call(_a2, ev);
    handleChange(ev);
  };
  const handleKeyDown = (ev) => {
    const keyCode = ev.key || ev.code;
    if (!isComposition.value && keyCode === Enter.key) {
      emit("pressEnter", ev);
      handleChange(ev);
    }
  };
  const handleMousedown = (ev) => {
    if (inputRef.value && ev.target !== inputRef.value) {
      ev.preventDefault();
      inputRef.value.focus();
    }
  };
  watch(computedValue, (value) => {
    if (inputRef.value && value !== inputRef.value.value) {
      inputRef.value.value = value;
    }
  });
  return {
    inputRef,
    _value,
    _focused,
    isComposition,
    compositionValue,
    computedValue,
    handleInput,
    handleComposition,
    handleFocus,
    handleBlur,
    handleKeyDown,
    handleMousedown
  };
};
var InputLabel = defineComponent({
  name: "InputLabel",
  inheritAttrs: false,
  props: {
    modelValue: Object,
    inputValue: {
      type: String,
      default: ""
    },
    enabledInput: Boolean,
    formatLabel: Function,
    placeholder: String,
    retainInputValue: Boolean,
    disabled: Boolean,
    baseCls: String,
    size: String,
    error: Boolean,
    focused: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: ["update:inputValue", "inputValueChange", "focus", "blur"],
  setup(props2, {
    attrs,
    emit,
    slots
  }) {
    var _a;
    const {
      size,
      disabled,
      error,
      inputValue,
      uninjectFormItemContext
    } = toRefs(props2);
    const prefixCls = (_a = props2.baseCls) != null ? _a : getPrefixCls("input-label");
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext == null ? void 0 : uninjectFormItemContext.value
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const {
      inputRef,
      _focused,
      computedValue: computedInputValue,
      handleInput,
      handleComposition,
      handleFocus,
      handleBlur,
      handleMousedown
    } = useInput({
      modelValue: inputValue,
      emit,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers
    });
    const mergedFocused = computed(() => {
      var _a2;
      return (_a2 = props2.focused) != null ? _a2 : _focused.value;
    });
    const showInput = computed(() => props2.enabledInput && _focused.value || !props2.modelValue);
    const mergedPlaceholder = computed(() => {
      if (props2.enabledInput && props2.modelValue) {
        return props2.modelValue.label;
      }
      return props2.placeholder;
    });
    const renderLabel = () => {
      var _a2, _b, _c, _d, _e;
      if (props2.modelValue) {
        return (_e = (_c = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
          data: props2.modelValue
        })) != null ? _c : (_b = props2.formatLabel) == null ? void 0 : _b.call(props2, props2.modelValue)) != null ? _e : (_d = props2.modelValue) == null ? void 0 : _d.label;
      }
      return null;
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-search`]: props2.enabledInput,
      [`${prefixCls}-focus`]: mergedFocused.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-error`]: mergedError.value
    }]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const render = () => createVNode("span", mergeProps(wrapperAttrs.value, {
      "class": cls.value,
      "onMousedown": handleMousedown
    }), [slots.prefix && createVNode("span", {
      "class": `${prefixCls}-prefix`
    }, [slots.prefix()]), createVNode("input", mergeProps(inputAttrs.value, {
      "ref": inputRef,
      "class": [`${prefixCls}-input`, {
        [`${prefixCls}-input-hidden`]: !showInput.value
      }],
      "value": computedInputValue.value,
      "readonly": !props2.enabledInput,
      "placeholder": mergedPlaceholder.value,
      "disabled": mergedDisabled.value,
      "onInput": handleInput,
      "onFocus": handleFocus,
      "onBlur": handleBlur,
      "onCompositionstart": handleComposition,
      "onCompositionupdate": handleComposition,
      "onCompositionend": handleComposition
    }), null), createVNode("span", {
      "class": [`${prefixCls}-value`, {
        [`${prefixCls}-value-hidden`]: showInput.value
      }]
    }, [renderLabel()]), slots.suffix && createVNode("span", {
      "class": `${prefixCls}-suffix`
    }, [slots.suffix()])]);
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const getValueData = (value, fieldNames) => {
  const result = [];
  for (const item of value) {
    if (isObject(item)) {
      result.push({
        raw: item,
        value: item[fieldNames.value],
        label: item[fieldNames.label],
        closable: item[fieldNames.closable],
        tagProps: item[fieldNames.tagProps]
      });
    } else if (value || isNumber(value)) {
      const raw = {
        value: item,
        label: String(item),
        closable: true
      };
      result.push(__spreadValues$3({
        raw
      }, raw));
    }
  }
  return result;
};
const TAG_COLORS = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray"
];
const _sfc_main$4 = defineComponent({
  name: "Tag",
  components: {
    IconHover,
    IconClose,
    IconLoading
  },
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:visible": (visible) => true,
    "update:checked": (checked) => true,
    "close": (ev) => true,
    "check": (checked, ev) => true
  },
  setup(props2, { emit }) {
    const { size } = toRefs(props2);
    const prefixCls = getPrefixCls("tag");
    const isBuiltInColor = computed(() => props2.color && TAG_COLORS.includes(props2.color));
    const isCustomColor = computed(() => props2.color && !TAG_COLORS.includes(props2.color));
    const _visible = ref(props2.defaultVisible);
    const _checked = ref(props2.defaultChecked);
    const computedVisible = computed(() => {
      var _a;
      return (_a = props2.visible) != null ? _a : _visible.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return props2.checkable ? (_a = props2.checked) != null ? _a : _checked.value : true;
    });
    const { mergedSize: _mergedSize } = useSize$1(size);
    const mergedSize = computed(() => {
      if (_mergedSize.value === "mini") {
        return "small";
      }
      return _mergedSize.value;
    });
    const handleClose = (ev) => {
      _visible.value = false;
      emit("update:visible", false);
      emit("close", ev);
    };
    const handleClick = (ev) => {
      if (props2.checkable) {
        const newChecked = !computedChecked.value;
        _checked.value = newChecked;
        emit("update:checked", newChecked);
        emit("check", newChecked, ev);
      }
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-loading`]: props2.loading,
        [`${prefixCls}-hide`]: !computedVisible.value,
        [`${prefixCls}-${props2.color}`]: isBuiltInColor.value,
        [`${prefixCls}-bordered`]: props2.bordered,
        [`${prefixCls}-checkable`]: props2.checkable,
        [`${prefixCls}-checked`]: computedChecked.value,
        [`${prefixCls}-custom-color`]: isCustomColor.value
      }
    ]);
    const style = computed(() => {
      if (isCustomColor.value) {
        return {
          backgroundColor: props2.color
        };
      }
      return void 0;
    });
    return {
      prefixCls,
      cls,
      style,
      computedVisible,
      computedChecked,
      handleClick,
      handleClose
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_hover = resolveComponent("icon-hover");
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.computedVisible ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.style),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      renderSlot(_ctx.$slots, "icon")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.closable ? (openBlock(), createBlock(_component_icon_hover, {
      key: 1,
      role: "button",
      "aria-label": "Close",
      prefix: _ctx.prefixCls,
      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
      onClick: withModifiers(_ctx.handleClose, ["stop"])
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "close-icon", {}, () => [
          createVNode(_component_icon_close)
        ])
      ]),
      _: 3
    }, 8, ["prefix", "class", "onClick"])) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass(`${_ctx.prefixCls}-loading-icon`)
    }, [
      createVNode(_component_icon_loading)
    ], 2)) : createCommentVNode("v-if", true)
  ], 6)) : createCommentVNode("v-if", true);
}
var _Tag = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
const Tag = Object.assign(_Tag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tag.name, _Tag);
  }
});
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_FIELD_NAMES$1 = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var _InputTag = defineComponent({
  name: "InputTag",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    inputValue: String,
    defaultInputValue: {
      type: String,
      default: ""
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: [Boolean, Object],
      default: false
    },
    formatTag: {
      type: Function
    },
    uniqueValue: {
      type: Boolean,
      default: false
    },
    fieldNames: {
      type: Object
    },
    baseCls: String,
    focused: Boolean,
    disabledInput: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: {
    "update:modelValue": (value) => true,
    "update:inputValue": (inputValue) => true,
    "change": (value, ev) => true,
    "inputValueChange": (inputValue, ev) => true,
    "pressEnter": (inputValue, ev) => true,
    "remove": (removed, ev) => true,
    "clear": (ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true
  },
  setup(props2, {
    emit,
    slots,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      uninjectFormItemContext,
      modelValue
    } = toRefs(props2);
    const prefixCls = props2.baseCls || getPrefixCls("input-tag");
    const inputRef = ref();
    const mirrorRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      feedback,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext == null ? void 0 : uninjectFormItemContext.value
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const mergedFieldNames = computed(() => __spreadValues$2(__spreadValues$2({}, DEFAULT_FIELD_NAMES$1), props2.fieldNames));
    const _focused = ref(false);
    const _value = ref(props2.defaultValue);
    const _inputValue = ref(props2.defaultInputValue);
    const isComposition = ref(false);
    const compositionValue = ref("");
    const retainInputValue = computed(() => {
      if (isObject(props2.retainInputValue)) {
        return __spreadValues$2({
          create: false,
          blur: false
        }, props2.retainInputValue);
      }
      return {
        create: props2.retainInputValue,
        blur: props2.retainInputValue
      };
    });
    const inputStyle = reactive({
      width: "12px"
    });
    const mergedFocused = computed(() => props2.focused || _focused.value);
    const updateInputValue = (value, ev) => {
      _inputValue.value = value;
      emit("update:inputValue", value);
      emit("inputValueChange", value, ev);
    };
    const handleComposition = (ev) => {
      var _a;
      const {
        value
      } = ev.target;
      if (ev.type === "compositionend") {
        isComposition.value = false;
        compositionValue.value = "";
        updateInputValue(value, ev);
        nextTick(() => {
          if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
            inputRef.value.value = computedInputValue.value;
          }
        });
      } else {
        isComposition.value = true;
        compositionValue.value = computedInputValue.value + ((_a = ev.data) != null ? _a : "");
      }
    };
    const computedValue = computed(() => {
      var _a;
      return (_a = props2.modelValue) != null ? _a : _value.value;
    });
    const computedInputValue = computed(() => {
      var _a;
      return (_a = props2.inputValue) != null ? _a : _inputValue.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = [];
      }
    });
    const handleMousedown = (e) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };
    const handleInput = (ev) => {
      const {
        value
      } = ev.target;
      if (!isComposition.value) {
        updateInputValue(value, ev);
        nextTick(() => {
          if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
            inputRef.value.value = computedInputValue.value;
          }
        });
      }
    };
    const valueData = computed(() => getValueData(computedValue.value, mergedFieldNames.value));
    const tags = computed(() => {
      if (props2.maxTagCount > 0) {
        const invisibleTags = valueData.value.length - props2.maxTagCount;
        if (invisibleTags > 0) {
          const result = valueData.value.slice(0, props2.maxTagCount);
          const raw = {
            value: "__arco__more",
            label: `+${invisibleTags}...`,
            closable: false
          };
          result.push(__spreadValues$2({
            raw
          }, raw));
          return result;
        }
      }
      return valueData.value;
    });
    const updateValue = (value, ev) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, ev);
    };
    const handleRemove = (value, index2, e) => {
      var _a;
      const newValue = (_a = computedValue.value) == null ? void 0 : _a.filter((_, i) => i !== index2);
      updateValue(newValue, e);
      emit("remove", value, e);
    };
    const handleClear = (e) => {
      const newValue = [];
      updateValue(newValue, e);
      emit("clear", e);
    };
    const showClearBtn = computed(() => !mergedDisabled.value && !props2.readonly && props2.allowClear && Boolean(computedValue.value.length));
    const handlePressEnter = (e) => {
      var _a;
      if (computedInputValue.value) {
        e.preventDefault();
        if (props2.uniqueValue && ((_a = computedValue.value) == null ? void 0 : _a.includes(computedInputValue.value))) {
          emit("pressEnter", computedInputValue.value, e);
          return;
        }
        const newValue = computedValue.value.concat(computedInputValue.value);
        updateValue(newValue, e);
        emit("pressEnter", computedInputValue.value, e);
        if (!retainInputValue.value.create) {
          updateInputValue("", e);
        }
      }
    };
    const handleFocus = (ev) => {
      var _a, _b;
      _focused.value = true;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      _focused.value = false;
      if (!retainInputValue.value.blur && computedInputValue.value) {
        updateInputValue("", ev);
      }
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleKeyDown = (e) => {
      const keyCode = e.key || e.code;
      if (!isComposition.value && computedInputValue.value && keyCode === Enter.key) {
        handlePressEnter(e);
      }
      if (!isComposition.value && tags.value.length > 0 && !computedInputValue.value && keyCode === Backspace.key) {
        const lastIndex = valueData.value.length - 1;
        handleRemove(valueData.value[lastIndex].value, lastIndex, e);
      }
    };
    const setInputWidth = (width) => {
      if (width > 12) {
        inputStyle.width = `${width}px`;
      } else {
        inputStyle.width = "12px";
      }
    };
    onMounted(() => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth);
      }
    });
    const handleResize = () => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth);
      }
    };
    watch(computedInputValue, (value) => {
      if (inputRef.value && !isComposition.value && value !== inputRef.value.value) {
        inputRef.value.value = value;
      }
    });
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-disabled-input`]: props2.disabledInput,
      [`${prefixCls}-error`]: mergedError.value,
      [`${prefixCls}-focus`]: mergedFocused.value,
      [`${prefixCls}-readonly`]: props2.readonly,
      [`${prefixCls}-has-tag`]: tags.value.length > 0,
      [`${prefixCls}-has-prefix`]: Boolean(slots.prefix),
      [`${prefixCls}-has-suffix`]: Boolean(slots.suffix) || showClearBtn.value || feedback.value,
      [`${prefixCls}-has-placeholder`]: !computedValue.value.length
    }]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const render = () => {
      var _a;
      return createVNode("span", mergeProps({
        "class": cls.value,
        "onMousedown": handleMousedown
      }, wrapperAttrs.value), [createVNode(ResizeObserver$1, {
        "onResize": handleResize
      }, {
        default: () => [createVNode("span", {
          "ref": mirrorRef,
          "class": `${prefixCls}-mirror`
        }, [tags.value.length > 0 ? compositionValue.value || computedInputValue.value : compositionValue.value || computedInputValue.value || props2.placeholder])]
      }), slots.prefix && createVNode("span", {
        "class": `${prefixCls}-prefix`
      }, [slots.prefix()]), createVNode(TransitionGroup, {
        "tag": "span",
        "name": "input-tag-zoom",
        "class": `${prefixCls}-inner`
      }, {
        default: () => [tags.value.map((item, index2) => createVNode(Tag, mergeProps({
          "key": `tag-${item.value}`,
          "class": `${prefixCls}-tag`,
          "closable": !mergedDisabled.value && !props2.readonly && item.closable,
          "visible": true
        }, item.tagProps, {
          "onClose": (ev) => handleRemove(item.value, index2, ev)
        }), {
          default: () => {
            var _a2, _b, _c, _d;
            return [(_d = (_c = (_a2 = slots.tag) == null ? void 0 : _a2.call(slots, {
              data: item.raw
            })) != null ? _c : (_b = props2.formatTag) == null ? void 0 : _b.call(props2, item.raw)) != null ? _d : item.label];
          }
        })), createVNode("input", mergeProps(inputAttrs.value, {
          "ref": inputRef,
          "key": "input-tag-input",
          "class": `${prefixCls}-input`,
          "style": inputStyle,
          "placeholder": tags.value.length === 0 ? props2.placeholder : void 0,
          "disabled": mergedDisabled.value,
          "readonly": props2.readonly || props2.disabledInput,
          "onInput": handleInput,
          "onKeydown": handleKeyDown,
          "onFocus": handleFocus,
          "onBlur": handleBlur,
          "onCompositionstart": handleComposition,
          "onCompositionupdate": handleComposition,
          "onCompositionend": handleComposition
        }), null)]
      }), showClearBtn.value && createVNode(IconHover, {
        "class": `${prefixCls}-clear-btn`,
        "onClick": handleClear,
        "onMousedown": (e) => e.stopPropagation()
      }, {
        default: () => [createVNode(IconClose, null, null)]
      }), (slots.suffix || Boolean(feedback.value)) && createVNode("span", {
        "class": `${prefixCls}-suffix`
      }, [(_a = slots.suffix) == null ? void 0 : _a.call(slots), Boolean(feedback.value) && createVNode(FeedbackIcon, {
        "type": feedback.value
      }, null)])]);
    };
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const InputTag = Object.assign(_InputTag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _InputTag.name, _InputTag);
  }
});
const _sfc_main$3 = defineComponent({
  name: "IconExpand",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  setup(props2) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-expand`, { [`${prefixCls}-spin`]: props2.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props2.size) {
        styles.fontSize = isNumber(props2.size) ? `${props2.size}px` : props2.size;
      }
      if (props2.rotate) {
        styles.transform = `rotate(${props2.rotate}deg)`;
      }
      return styles;
    });
    return {
      cls,
      innerStyle
    };
  }
});
const _hoisted_1$1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M7 26v14c0 .552.444 1 .996 1H22m19-19V8c0-.552-.444-1-.996-1H26" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3, 14, _hoisted_1$1);
}
var _IconExpand = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
const IconExpand = Object.assign(_IconExpand, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExpand.name, _IconExpand);
  }
});
var SelectView = defineComponent({
  name: "SelectView",
  props: {
    modelValue: {
      type: Array,
      required: true
    },
    inputValue: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    opened: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: Boolean,
      default: (props2) => isArray(props2.modelValue)
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["remove", "clear", "focus", "blur"],
  setup(props2, {
    emit,
    slots
  }) {
    const {
      size,
      disabled,
      error
    } = toRefs(props2);
    const prefixCls = getPrefixCls("select-view");
    const {
      feedback,
      eventHandlers,
      mergedDisabled,
      mergedSize: _mergedSize,
      mergedError
    } = useFormItem({
      size,
      disabled,
      error
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const {
      opened
    } = toRefs(props2);
    const componentRef = ref();
    const inputRef = computed(() => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.inputRef;
    });
    const isEmptyValue = computed(() => props2.modelValue.length === 0);
    const enabledInput = computed(() => props2.allowSearch || props2.allowCreate);
    const showClearBtn = computed(() => props2.allowClear && !props2.disabled && !isEmptyValue.value);
    const handleFocus = (ev) => {
      var _a, _b;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleRemove = (tag) => {
      emit("remove", tag);
    };
    const handleClear = (ev) => {
      emit("clear", ev);
    };
    const renderIcon = () => {
      var _a, _b, _c, _d;
      if (props2.loading) {
        return (_b = (_a = slots["loading-icon"]) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(IconLoading, null, null);
      }
      if (props2.allowSearch && props2.opened) {
        return (_d = (_c = slots["search-icon"]) == null ? void 0 : _c.call(slots)) != null ? _d : createVNode(IconSearch, null, null);
      }
      if (slots["arrow-icon"]) {
        return slots["arrow-icon"]();
      }
      if (props2.multiple || enabledInput.value) {
        return createVNode(IconExpand, {
          "style": {
            transform: "rotate(-45deg)"
          }
        }, null);
      }
      return createVNode(IconDown, {
        "class": `${prefixCls}-arrow-icon`
      }, null);
    };
    const renderSuffix = () => createVNode(Fragment, null, [showClearBtn.value && createVNode(IconHover, {
      "class": `${prefixCls}-clear-btn`,
      "onClick": handleClear,
      "onMousedown": (ev) => ev.stopPropagation()
    }, {
      default: () => [createVNode(IconClose, null, null)]
    }), createVNode("span", {
      "class": `${prefixCls}-icon`
    }, [renderIcon()]), Boolean(feedback.value) && createVNode(FeedbackIcon, {
      "type": feedback.value
    }, null)]);
    watch(opened, (opened2) => {
      if (!opened2 && inputRef.value && inputRef.value.isSameNode(document.activeElement)) {
        inputRef.value.blur();
      }
    });
    const cls = computed(() => [`${prefixCls}-${props2.multiple ? "multiple" : "single"}`, {
      [`${prefixCls}-opened`]: props2.opened,
      [`${prefixCls}-borderless`]: !props2.bordered
    }]);
    const render = () => {
      if (props2.multiple) {
        return createVNode(InputTag, {
          "ref": componentRef,
          "baseCls": prefixCls,
          "class": cls.value,
          "modelValue": props2.modelValue,
          "inputValue": props2.inputValue,
          "focused": props2.opened,
          "placeholder": props2.placeholder,
          "disabled": mergedDisabled.value,
          "size": mergedSize.value,
          "error": mergedError.value,
          "maxTagCount": props2.maxTagCount,
          "disabledInput": !props2.allowSearch && !props2.allowCreate,
          "retainInputValue": true,
          "uninjectFormItemContext": true,
          "onRemove": handleRemove,
          "onFocus": handleFocus,
          "onBlur": handleBlur
        }, {
          prefix: slots.prefix,
          suffix: renderSuffix,
          tag: slots.label
        });
      }
      return createVNode(InputLabel, {
        "ref": componentRef,
        "baseCls": prefixCls,
        "class": cls.value,
        "modelValue": props2.modelValue[0],
        "inputValue": props2.inputValue,
        "focused": props2.opened,
        "placeholder": props2.placeholder,
        "disabled": mergedDisabled.value,
        "size": mergedSize.value,
        "error": mergedError.value,
        "enabledInput": enabledInput.value,
        "uninjectFormItemContext": true,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, {
        default: slots.label,
        prefix: slots.prefix,
        suffix: renderSuffix
      });
    };
    return {
      inputRef,
      handleFocus,
      handleBlur,
      render
    };
  },
  methods: {
    focus() {
      if (this.inputRef) {
        this.inputRef.focus();
      }
    },
    blur() {
      if (this.inputRef) {
        this.inputRef.blur();
      }
    }
  },
  render() {
    return this.render();
  }
});
const target = typeof window === "undefined" ? global : window;
function debounce(callback, delay) {
  let timer = 0;
  return (...args) => {
    if (timer) {
      target.clearTimeout(timer);
    }
    timer = target.setTimeout(() => {
      timer = 0;
      callback(...args);
    }, delay);
  };
}
const _sfc_main$2 = defineComponent({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    const prefixCls = getPrefixCls("select-group");
    return {
      prefixCls
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("li", {
      class: normalizeClass(`${_ctx.prefixCls}-title`)
    }, [
      renderSlot(_ctx.$slots, "label", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ], 64);
}
var Optgroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const useSize = ({
  dataKeys,
  contentRef,
  fixedSize,
  estimatedSize,
  buffer
}) => {
  const firstRangeAverageSize = ref(0);
  const sizeMap = /* @__PURE__ */ new Map();
  const total = computed(() => dataKeys.value.length);
  const start = ref(0);
  const end = computed(() => {
    const _end = start.value + buffer.value * 3;
    if (_end > total.value)
      return total.value;
    return _end;
  });
  const maxStart = computed(() => {
    const max = total.value - buffer.value * 3;
    if (max < 0)
      return 0;
    return max;
  });
  const setStart = (index2) => {
    if (index2 < 0) {
      start.value = 0;
    } else if (index2 > maxStart.value) {
      start.value = maxStart.value;
    } else {
      start.value = index2;
    }
  };
  const isFixed = ref(fixedSize.value);
  const _estimatedSize = computed(() => {
    if (estimatedSize.value !== 30) {
      return estimatedSize.value;
    }
    return firstRangeAverageSize.value || estimatedSize.value;
  });
  const setItemSize = (key, size) => {
    sizeMap.set(key, size);
  };
  const getItemSize = (index2) => {
    var _a;
    if (isFixed.value) {
      return _estimatedSize.value;
    }
    const _key = dataKeys.value[index2];
    return (_a = sizeMap.get(_key)) != null ? _a : _estimatedSize.value;
  };
  const hasItemSize = (key) => {
    return sizeMap.has(key);
  };
  onMounted(() => {
    const firstRangeTotalSize = Array.from(sizeMap.values()).reduce((pre, value) => pre + value, 0);
    if (firstRangeTotalSize > 0) {
      firstRangeAverageSize.value = firstRangeTotalSize / sizeMap.size;
    }
  });
  const getScrollOffset = (index2) => {
    if (isFixed.value) {
      return _estimatedSize.value * index2;
    }
    return getOffset(0, index2);
  };
  const getOffset = (start2, end2) => {
    let offset = 0;
    for (let i = start2; i < end2; i++) {
      offset += getItemSize(i);
    }
    return offset;
  };
  const frontPadding = computed(() => {
    if (isFixed.value) {
      return _estimatedSize.value * start.value;
    }
    return getOffset(0, start.value);
  });
  const getOffsetIndex = (scrollOffset) => {
    const isForward = scrollOffset >= frontPadding.value;
    let offset = Math.abs(scrollOffset - frontPadding.value);
    const _start = isForward ? start.value : start.value - 1;
    let offsetIndex = 0;
    while (offset > 0) {
      offset -= getItemSize(_start + offsetIndex);
      isForward ? offsetIndex++ : offsetIndex--;
    }
    return offsetIndex;
  };
  const getStartByScroll = (scrollOffset) => {
    const offsetIndex = getOffsetIndex(scrollOffset);
    const _start = start.value + offsetIndex - buffer.value;
    if (_start < 0)
      return 0;
    if (_start > maxStart.value)
      return maxStart.value;
    return _start;
  };
  const behindPadding = computed(() => {
    if (isFixed.value) {
      return _estimatedSize.value * (total.value - end.value);
    }
    return getOffset(end.value, total.value);
  });
  return {
    frontPadding,
    behindPadding,
    start,
    end,
    getStartByScroll,
    setItemSize,
    hasItemSize,
    setStart,
    getScrollOffset
  };
};
var VirtualListItem = defineComponent({
  name: "VirtualListItem",
  props: {
    hasItemSize: {
      type: Function,
      required: true
    },
    setItemSize: {
      type: Function,
      required: true
    }
  },
  setup(props2, {
    slots
  }) {
    var _a;
    const key = (_a = getCurrentInstance()) == null ? void 0 : _a.vnode.key;
    const itemRef = ref();
    const setItemSize = () => {
      var _a2, _b;
      const ele = (_b = (_a2 = itemRef.value) == null ? void 0 : _a2.$el) != null ? _b : itemRef.value;
      if (!props2.hasItemSize(key) && (ele == null ? void 0 : ele.offsetHeight)) {
        props2.setItemSize(key, ele.offsetHeight);
      }
    };
    onMounted(() => setItemSize());
    return () => {
      var _a2;
      const child = getFirstComponent((_a2 = slots.default) == null ? void 0 : _a2.call(slots));
      if (child) {
        return cloneVNode(child, {
          ref: itemRef
        }, true);
      }
      return null;
    };
  }
});
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
const _sfc_main$1 = defineComponent({
  name: "VirtualList",
  components: { VirtualListItem },
  props: {
    height: {
      type: [Number, String],
      default: 200
    },
    data: {
      type: Array,
      default: () => []
    },
    threshold: {
      type: Number,
      default: 0
    },
    itemKey: {
      type: String,
      default: "key"
    },
    fixedSize: {
      type: Boolean,
      default: false
    },
    estimatedSize: {
      type: Number,
      default: 30
    },
    buffer: {
      type: Number,
      default: 10
    },
    component: {
      type: [String, Object],
      default: "div"
    },
    listAttrs: {
      type: Object
    },
    contentAttrs: {
      type: Object
    },
    paddingPosition: {
      type: String,
      default: "content"
    }
  },
  emits: {
    scroll: (ev) => true,
    reachBottom: (ev) => true
  },
  setup(props2, { emit }) {
    const { data, itemKey, fixedSize, estimatedSize, buffer, height } = toRefs(props2);
    const prefixCls = getPrefixCls("virtual-list");
    const mergedComponent = computed(() => {
      if (isObject(props2.component)) {
        return __spreadValues$1({
          container: "div",
          list: "div",
          content: "div"
        }, props2.component);
      }
      return {
        container: props2.component,
        list: "div",
        content: "div"
      };
    });
    const containerRef = ref();
    const contentRef = ref();
    const style = computed(() => {
      return {
        height: isNumber(height.value) ? `${height.value}px` : height.value,
        overflow: "auto"
      };
    });
    const dataKeys = computed(() => data.value.map((item, index2) => {
      var _a;
      return (_a = item[itemKey.value]) != null ? _a : index2;
    }));
    const {
      frontPadding,
      behindPadding,
      start,
      end,
      getStartByScroll,
      setItemSize,
      hasItemSize,
      setStart,
      getScrollOffset
    } = useSize({
      dataKeys,
      contentRef,
      fixedSize,
      estimatedSize,
      buffer
    });
    const currentList = computed(() => {
      if (props2.threshold && data.value.length <= props2.threshold) {
        return data.value;
      }
      return data.value.slice(start.value, end.value);
    });
    const onScroll = (ev) => {
      const { scrollTop, scrollHeight, offsetHeight } = ev.target;
      const _start = getStartByScroll(scrollTop);
      if (_start !== start.value) {
        setStart(_start);
      }
      emit("scroll", ev);
      const bottom = Math.floor(scrollHeight - (scrollTop + offsetHeight));
      if (bottom <= 0) {
        emit("reachBottom", ev);
      }
    };
    const scrollTo = (options) => {
      var _a, _b;
      if (containerRef.value) {
        if (isNumber(options)) {
          containerRef.value.scrollTop = options;
        } else {
          const _index = (_b = options.index) != null ? _b : dataKeys.value.indexOf((_a = options.key) != null ? _a : "");
          setStart(_index - buffer.value);
          containerRef.value.scrollTop = getScrollOffset(_index);
          nextTick(() => {
            if (containerRef.value) {
              const _scrollTop = getScrollOffset(_index);
              if (_scrollTop !== containerRef.value.scrollTop) {
                containerRef.value.scrollTop = _scrollTop;
              }
            }
          });
        }
      }
    };
    return {
      prefixCls,
      containerRef,
      contentRef,
      frontPadding,
      currentList,
      behindPadding,
      onScroll,
      setItemSize,
      hasItemSize,
      start,
      scrollTo,
      style,
      mergedComponent
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VirtualListItem = resolveComponent("VirtualListItem");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.container), {
    ref: "containerRef",
    class: normalizeClass(_ctx.prefixCls),
    style: normalizeStyle(_ctx.style),
    onScroll: _ctx.onScroll
  }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.list), mergeProps(_ctx.listAttrs, {
        style: _ctx.paddingPosition === "list" ? {
          paddingTop: `${_ctx.frontPadding}px`,
          paddingBottom: `${_ctx.behindPadding}px`
        } : {}
      }), {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.content), mergeProps({ ref: "contentRef" }, _ctx.contentAttrs, {
            style: _ctx.paddingPosition === "content" ? {
              paddingTop: `${_ctx.frontPadding}px`,
              paddingBottom: `${_ctx.behindPadding}px`
            } : {}
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentList, (item, index2) => {
                var _a;
                return openBlock(), createBlock(_component_VirtualListItem, {
                  key: (_a = item[_ctx.itemKey]) != null ? _a : index2,
                  "has-item-size": _ctx.hasItemSize,
                  "set-item-size": _ctx.setItemSize
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "item", {
                      item,
                      index: _ctx.start + index2
                    })
                  ]),
                  _: 2
                }, 1032, ["has-item-size", "set-item-size"]);
              }), 128))
            ]),
            _: 3
          }, 16, ["style"]))
        ]),
        _: 3
      }, 16, ["style"]))
    ]),
    _: 3
  }, 8, ["class", "style", "onScroll"]);
}
var VirtualList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const DEFAULT_FIELD_NAMES = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var _Select = defineComponent({
  name: "Select",
  components: {
    Trigger,
    SelectView
  },
  inheritAttrs: false,
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number, Object, Array]
    },
    defaultValue: {
      type: [String, Number, Object, Array],
      default: (props2) => isUndefined(props2.multiple) ? "" : []
    },
    inputValue: {
      type: String
    },
    defaultInputValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    placeholder: String,
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: [Boolean, Object],
      default: (props2) => Boolean(props2.multiple)
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    popupContainer: {
      type: [String, Object]
    },
    bordered: {
      type: Boolean,
      default: true
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    unmountOnClose: {
      type: Boolean,
      default: false
    },
    filterOption: {
      type: [Boolean, Function],
      default: true
    },
    options: {
      type: Array,
      default: () => []
    },
    virtualListProps: {
      type: Object
    },
    triggerProps: {
      type: Object
    },
    formatLabel: {
      type: Function
    },
    fallbackOption: {
      type: [Boolean, Function],
      default: true
    },
    showExtraOptions: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    searchDelay: {
      type: Number,
      default: 500
    },
    limit: {
      type: Number,
      default: 0
    },
    fieldNames: {
      type: Object
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "update:inputValue": (inputValue) => true,
    "update:popupVisible": (visible) => true,
    "change": (value) => true,
    "inputValueChange": (inputValue) => true,
    "popupVisibleChange": (visible) => true,
    "clear": (ev) => true,
    "remove": (removed) => true,
    "search": (inputValue) => true,
    "dropdownScroll": (ev) => true,
    "dropdownReachBottom": (ev) => true,
    "exceedLimit": (value, ev) => true
  },
  setup(props2, {
    slots,
    emit,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      options,
      filterOption,
      valueKey,
      multiple,
      popupVisible,
      showExtraOptions,
      modelValue,
      fieldNames,
      loading
    } = toRefs(props2);
    const prefixCls = getPrefixCls("select");
    const {
      mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error
    });
    const component = computed(() => props2.virtualListProps ? "div" : "li");
    const retainInputValue = computed(() => isObject(props2.allowSearch) && Boolean(props2.allowSearch.retainInputValue));
    computed(() => {
      if (isFunction(props2.formatLabel)) {
        return (data) => {
          const optionInfo = optionInfoMap.get(data.value);
          return props2.formatLabel(optionInfo);
        };
      }
      return void 0;
    });
    const dropdownRef = ref();
    const optionRefs = ref({});
    const virtualListRef = ref();
    const {
      computedPopupVisible,
      handlePopupVisibleChange
    } = useTrigger({
      popupVisible,
      emit
    });
    const _value = ref(props2.defaultValue);
    const computedValueObjects = computed(() => {
      var _a;
      const mergedValue = (_a = props2.modelValue) != null ? _a : _value.value;
      const valueArray = isArray(mergedValue) ? mergedValue : mergedValue || isNumber(mergedValue) ? [mergedValue] : [];
      return valueArray.map((value) => ({
        value,
        key: getKeyFromValue(value, props2.valueKey)
      }));
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = multiple.value ? [] : "";
      }
    });
    const computedValueKeys = computed(() => computedValueObjects.value.map((obj) => obj.key));
    const mergedFieldNames = computed(() => __spreadValues(__spreadValues({}, DEFAULT_FIELD_NAMES), fieldNames == null ? void 0 : fieldNames.value));
    const getFallBackOption = (value) => {
      if (isFunction(props2.fallbackOption)) {
        return props2.fallbackOption(value);
      }
      return {
        [mergedFieldNames.value.value]: value,
        [mergedFieldNames.value.label]: String(isObject(value) ? value[valueKey == null ? void 0 : valueKey.value] : value)
      };
    };
    const getExtraValueData = () => {
      const valueArray = [];
      const keyArray = [];
      if (props2.allowCreate || props2.fallbackOption) {
        for (const item of computedValueObjects.value) {
          if (!keyArray.includes(item.key)) {
            const optionInfo = optionInfoMap.get(item.key);
            if (!optionInfo || optionInfo.origin === "extraOptions") {
              valueArray.push(item);
              keyArray.push(item.key);
            }
          }
        }
      }
      if (props2.allowCreate && computedInputValue.value) {
        const key = getKeyFromValue(computedInputValue.value);
        if (!keyArray.includes(key)) {
          const optionInfo = optionInfoMap.get(key);
          if (!optionInfo || optionInfo.origin === "extraOptions") {
            valueArray.push({
              value: computedInputValue.value,
              key
            });
          }
        }
      }
      return valueArray;
    };
    const extraValueObjects = ref([]);
    const extraOptions = computed(() => extraValueObjects.value.map((obj) => getFallBackOption(obj.value)));
    nextTick(() => {
      watchEffect(() => {
        var _a;
        const valueData = getExtraValueData();
        if (valueData.length !== extraValueObjects.value.length) {
          extraValueObjects.value = valueData;
        } else if (valueData.length > 0) {
          for (let i = 0; i < valueData.length; i++) {
            if (valueData[i].key !== ((_a = extraValueObjects.value[i]) == null ? void 0 : _a.key)) {
              extraValueObjects.value = valueData;
              break;
            }
          }
        }
      });
    });
    const _inputValue = ref("");
    const computedInputValue = computed(() => {
      var _a;
      return (_a = props2.inputValue) != null ? _a : _inputValue.value;
    });
    watch(computedPopupVisible, (visible) => {
      if (!visible && !retainInputValue.value && computedInputValue.value) {
        updateInputValue("");
      }
    });
    const getValueFromValueKeys = (valueKeys) => {
      var _a, _b;
      if (!props2.multiple) {
        return (_b = (_a = optionInfoMap.get(valueKeys[0])) == null ? void 0 : _a.value) != null ? _b : "";
      }
      return valueKeys.map((key) => {
        var _a2, _b2;
        return (_b2 = (_a2 = optionInfoMap.get(key)) == null ? void 0 : _a2.value) != null ? _b2 : "";
      });
    };
    const updateValue = (valueKeys) => {
      var _a, _b;
      const value = getValueFromValueKeys(valueKeys);
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a);
    };
    const updateInputValue = (inputValue) => {
      _inputValue.value = inputValue;
      emit("update:inputValue", inputValue);
      emit("inputValueChange", inputValue);
    };
    const handleSelect = (key, ev) => {
      if (props2.multiple) {
        if (!computedValueKeys.value.includes(key)) {
          if (enabledOptionKeys.value.includes(key)) {
            if (props2.limit > 0 && computedValueKeys.value.length >= props2.limit) {
              const info = optionInfoMap.get(key);
              emit("exceedLimit", info == null ? void 0 : info.value, ev);
            } else {
              const valueKeys = computedValueKeys.value.concat(key);
              updateValue(valueKeys);
            }
          }
        } else {
          const valueKeys = computedValueKeys.value.filter((_key) => _key !== key);
          updateValue(valueKeys);
        }
        if (!retainInputValue.value) {
          updateInputValue("");
        }
      } else {
        if (key !== computedValueKeys.value[0]) {
          updateValue([key]);
        }
        if (retainInputValue.value) {
          const optionInfo = optionInfoMap.get(key);
          if (optionInfo) {
            updateInputValue(optionInfo.label);
          }
        }
        handlePopupVisibleChange(false);
      }
    };
    const handleSearch = debounce((value) => {
      emit("search", value);
    }, props2.searchDelay);
    const handleInputValueChange = (inputValue) => {
      if (inputValue !== computedInputValue.value) {
        if (!computedPopupVisible.value) {
          handlePopupVisibleChange(true);
        }
        updateInputValue(inputValue);
        if (props2.allowSearch) {
          handleSearch(inputValue);
        }
      }
    };
    const handleRemove = (key) => {
      const optionInfo = optionInfoMap.get(key);
      const newKeys = computedValueKeys.value.filter((_key) => _key !== key);
      updateValue(newKeys);
      emit("remove", optionInfo == null ? void 0 : optionInfo.value);
    };
    const handleClear = (e) => {
      e == null ? void 0 : e.stopPropagation();
      const newKeys = computedValueKeys.value.filter((key) => {
        var _a;
        return (_a = optionInfoMap.get(key)) == null ? void 0 : _a.disabled;
      });
      updateValue(newKeys);
      updateInputValue("");
      emit("clear", e);
    };
    const handleDropdownScroll = (e) => {
      emit("dropdownScroll", e);
    };
    const handleDropdownReachBottom = (e) => {
      emit("dropdownReachBottom", e);
    };
    const {
      validOptions,
      optionInfoMap,
      validOptionInfos,
      enabledOptionKeys,
      handleKeyDown
    } = useSelect({
      multiple,
      options,
      extraOptions,
      inputValue: computedInputValue,
      filterOption,
      showExtraOptions,
      component,
      valueKey,
      fieldNames,
      loading,
      popupVisible: computedPopupVisible,
      valueKeys: computedValueKeys,
      dropdownRef,
      optionRefs,
      virtualListRef,
      onSelect: handleSelect,
      onPopupVisibleChange: handlePopupVisibleChange
    });
    const selectViewValue = computed(() => {
      var _a;
      const result = [];
      for (const item of computedValueObjects.value) {
        const optionInfo = optionInfoMap.get(item.key);
        if (optionInfo) {
          result.push(__spreadProps(__spreadValues({}, optionInfo), {
            value: item.key,
            label: (_a = optionInfo == null ? void 0 : optionInfo.label) != null ? _a : String(isObject(item.value) ? item.value[valueKey == null ? void 0 : valueKey.value] : item.value),
            closable: !(optionInfo == null ? void 0 : optionInfo.disabled),
            tagProps: optionInfo == null ? void 0 : optionInfo.tagProps
          }));
        }
      }
      return result;
    });
    const getOptionContentFunc = (optionInfo) => {
      if (isFunction(slots.option)) {
        const optionSlot = slots.option;
        return () => optionSlot({
          data: optionInfo.raw
        });
      }
      if (isFunction(optionInfo.render)) {
        return optionInfo.render;
      }
      return () => optionInfo.label;
    };
    const renderOption = (optionInfo) => {
      if (isGroupOptionInfo(optionInfo)) {
        let _slot;
        return createVNode(Optgroup, {
          "key": optionInfo.key,
          "label": optionInfo.label
        }, _isSlot(_slot = optionInfo.options.map((child) => renderOption(child))) ? _slot : {
          default: () => [_slot]
        });
      }
      if (!isValidOption(optionInfo, {
        inputValue: computedInputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      })) {
        return null;
      }
      return createVNode(Option, {
        "ref": (ref2) => {
          if (ref2 == null ? void 0 : ref2.$el) {
            optionRefs.value[optionInfo.key] = ref2.$el;
          }
        },
        "key": optionInfo.key,
        "value": optionInfo.value,
        "label": optionInfo.label,
        "disabled": optionInfo.disabled,
        "internal": true
      }, {
        default: getOptionContentFunc(optionInfo)
      });
    };
    const renderDropDown = () => {
      return createVNode(SelectDropdown, {
        "ref": dropdownRef,
        "loading": props2.loading,
        "empty": validOptionInfos.value.length === 0,
        "virtualList": Boolean(props2.virtualListProps),
        "onScroll": handleDropdownScroll,
        "onReachBottom": handleDropdownReachBottom
      }, {
        "default": () => {
          var _a, _b;
          return [...(_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [], ...validOptions.value.map(renderOption)];
        },
        "virtual-list": () => createVNode(VirtualList, mergeProps(props2.virtualListProps, {
          "ref": virtualListRef,
          "data": validOptions.value
        }), {
          item: ({
            item
          }) => renderOption(item)
        }),
        "empty": slots.empty,
        "footer": slots.footer
      });
    };
    const renderLabel = ({
      data
    }) => {
      var _a, _b, _c;
      if (slots.label || isFunction(props2.formatLabel)) {
        const optionInfo = optionInfoMap.get(data.value);
        if (optionInfo == null ? void 0 : optionInfo.raw) {
          return (_c = (_a = slots.label) == null ? void 0 : _a.call(slots, {
            data: optionInfo.raw
          })) != null ? _c : (_b = props2.formatLabel) == null ? void 0 : _b.call(props2, optionInfo.raw);
        }
      }
      return data.label;
    };
    return () => createVNode(Trigger, mergeProps({
      "trigger": "click",
      "position": "bl",
      "popupOffset": 4,
      "animationName": "slide-dynamic-origin",
      "hideEmpty": true,
      "preventFocus": true,
      "autoFitPopupWidth": true,
      "autoFitTransformOrigin": true,
      "disabled": mergedDisabled.value,
      "popupVisible": computedPopupVisible.value,
      "unmountOnClose": props2.unmountOnClose,
      "clickToClose": !(props2.allowSearch || props2.allowCreate),
      "popupContainer": props2.popupContainer,
      "onPopupVisibleChange": handlePopupVisibleChange
    }, props2.triggerProps), {
      default: () => {
        var _a, _b;
        return [(_b = (_a = slots.trigger) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(SelectView, mergeProps({
          "class": prefixCls,
          "modelValue": selectViewValue.value,
          "inputValue": computedInputValue.value,
          "multiple": props2.multiple,
          "disabled": mergedDisabled.value,
          "error": mergedError.value,
          "loading": props2.loading,
          "allowClear": props2.allowClear,
          "allowCreate": props2.allowCreate,
          "allowSearch": Boolean(props2.allowSearch),
          "opened": computedPopupVisible.value,
          "maxTagCount": props2.maxTagCount,
          "placeholder": props2.placeholder,
          "bordered": props2.bordered,
          "size": mergedSize.value,
          "onInputValueChange": handleInputValueChange,
          "onRemove": handleRemove,
          "onClear": handleClear,
          "onKeydown": handleKeyDown
        }, attrs), {
          "label": renderLabel,
          "prefix": slots.prefix,
          "arrow-icon": slots["arrow-icon"],
          "loading-icon": slots["loading-icon"],
          "search-icon": slots["search-icon"]
        })];
      },
      content: renderDropDown
    });
  }
});
const Select = Object.assign(_Select, {
  Option,
  OptGroup: Optgroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Select.name, _Select);
    app.component(componentPrefix + Option.name, Option);
    app.component(componentPrefix + Optgroup.name, Optgroup);
  }
});
const _hoisted_1 = { style: { "width": "100%" } };
const __default__ = defineComponent({
  name: "ApiSelect"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    valueType: { default: "string" },
    api: null,
    multiple: { type: Boolean, default: false },
    allowSearch: { type: Boolean, default: false },
    modelValue: null,
    labelField: { default: "label" },
    valueField: { default: "value" },
    resultField: null,
    isSearch: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props2 = __props;
    const value = ref("");
    const options = ref([]);
    const getOptions = (params) => {
      const fun = params ? props2.api(params) : props2.api();
      fun.then((res) => {
        let list = res;
        if (props2.resultField) {
          list = res[props2.resultField];
        }
        if (list == null ? void 0 : list.length) {
          options.value = list.map((t) => {
            return {
              ...t,
              value: t[props2.valueField],
              label: `${t[props2.labelField]}`
            };
          });
        } else {
          options.value = [];
        }
      }).finally(() => {
        loading.value = false;
      });
    };
    const getValue = (newVal) => {
      if (props2.valueType === "object") {
        if (!newVal && !props2.multiple)
          return void 0;
        if (!newVal && props2.multiple)
          return [];
        if (Object.prototype.toString.call(newVal) !== "[object Object]" && !props2.multiple) {
          return {};
        }
        if (Object.prototype.toString.call(newVal) !== "[object Array]" && props2.multiple) {
          return [];
        }
        if (!props2.multiple) {
          return newVal == null ? void 0 : newVal.value;
        }
        return newVal.map((t) => t.value);
      }
      return newVal;
    };
    const getObjectResult = (item) => {
      return options.value.find((t) => t.value === item);
    };
    const getResult = () => {
      if (!value.value)
        return value.value;
      if (props2.valueType !== "object")
        return value.value;
      if (!props2.multiple)
        return getObjectResult(value.value);
      return value.value.map(getObjectResult);
    };
    watch(
      () => props2.modelValue,
      (newVal) => {
        value.value = getValue(newVal);
        const result = getResult();
        emit("change", result);
      },
      { immediate: true }
    );
    const onChange = () => {
      const result = getResult();
      emit("update:modelValue", result);
      emit("change", result);
    };
    const loading = ref(false);
    const onSearch = async (value2) => {
      if (value2) {
        loading.value = true;
        await getOptions(value2);
      } else {
        options.value = [];
      }
    };
    onMounted(() => {
      if (props2.isSearch) {
        return;
      }
      getOptions();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1, [
        createVNode(unref(Select), mergeProps(_ctx.$attrs, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          multiple: __props.multiple,
          "allow-search": __props.allowSearch || __props.isSearch,
          loading: loading.value,
          onChange,
          onSearch
        }), {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (item) => {
              return openBlock(), createBlock(unref(Option), {
                key: item.value,
                value: item.value
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]);
            }), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "multiple", "allow-search", "loading"])
      ]);
    };
  }
});
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
    app.component(_sfc_main.name, _sfc_main);
  }
};
export {
  _sfc_main as ApiSelect,
  SButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.mjs.map
