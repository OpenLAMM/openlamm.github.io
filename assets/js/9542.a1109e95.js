"use strict";
exports.id = 9542;
exports.ids = [9542];
exports.modules = {

/***/ 29542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_permissions_message": () => (/* binding */ DytePermissionsMessage)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46503);





const dytePermissionsMessageCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:block;width:560px;padding:var(--dyte-space-6, 24px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.actions{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.text-icon{display:inline-block;vertical-align:middle}h2{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-4, 16px)}h2 .text-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-4, 16px)}.need-help-link{display:inline-block;text-underline-offset:2px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-400, 53 110 253) / var(--tw-text-opacity))}.need-help-link:hover{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-text-opacity))}a dyte-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) .actions{flex-direction:column;align-items:flex-start;justify-content:center}:host([size='sm']) .action{width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.actions{margin-top:var(--dyte-space-6, 24px)}.actions dyte-button{flex:1 1 0%}";

const DytePermissionsMessage = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.continue = () => {
      this.stateUpdate.emit({
        activePermissionsMessage: { enabled: false },
      });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = { enabled: false };
    };
    this.reload = () => {
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    };
    this.meeting = undefined;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.states = undefined;
    this.device = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.device = meeting.self.device;
    }
  }
  getLink(media) {
    let kind;
    switch (media) {
      case 'audio':
        kind = 'microphone';
        break;
      case 'video':
        kind = 'camera';
        break;
      default:
        kind = 'screenshare';
        break;
    }
    const GOOGLE_SEARCH_BASE = 'https://www.google.com/search?q=';
    let query = `Allow+${kind}+access`;
    if (this.device != null) {
      const { browserName, isMobile } = this.device;
      query += '+' + browserName;
      if (isMobile) {
        query += '+mobile';
      }
    }
    return GOOGLE_SEARCH_BASE + query;
  }
  isDeniedBySystem() {
    var _a;
    const permissionsMessage = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.mediaPermissions;
    if (permissionsMessage == null)
      return false;
    if (Object.values(permissionsMessage).includes('SYSTEM_DENIED')) {
      return true;
    }
    return false;
  }
  getTitle() {
    var _a, _b, _c;
    const isDeniedBySystem = this.isDeniedBySystem();
    const media = (_c = (_b = (_a = this.states) === null || _a === void 0 ? void 0 : _a.activePermissionsMessage) === null || _b === void 0 ? void 0 : _b.kind) !== null && _c !== void 0 ? _c : 'audio';
    if (isDeniedBySystem) {
      return this.t(`perm_sys_denied.${media}`);
    }
    return this.t(`perm_denied.${media}`);
  }
  getMessage() {
    var _a, _b, _c, _d;
    const { browserName, osName } = this.meeting.self.device;
    const isDeniedBySystem = this.isDeniedBySystem();
    const browser = (_a = browserName.toLowerCase()) !== null && _a !== void 0 ? _a : 'others';
    const os = osName !== null && osName !== void 0 ? osName : 'others';
    const media = (_d = (_c = (_b = this.states) === null || _b === void 0 ? void 0 : _b.activePermissionsMessage) === null || _c === void 0 ? void 0 : _c.kind) !== null && _d !== void 0 ? _d : 'audio';
    if (isDeniedBySystem) {
      return this.t(`perm_sys_denied.${media}.${os}.message`);
    }
    return this.t(`perm_denied.${media}.${browser}.message`);
  }
  render() {
    var _a, _b, _c;
    const isDeniedBySystem = this.isDeniedBySystem();
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "text-icon", icon: this.iconPack.warning, iconPack: this.iconPack, t: this.t }), this.getTitle()), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.getMessage()), !isDeniedBySystem && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "need-help-link", href: this.getLink((_c = (_b = (_a = this.states) === null || _a === void 0 ? void 0 : _a.activePermissionsMessage) === null || _b === void 0 ? void 0 : _b.kind) !== null && _c !== void 0 ? _c : 'audio'), target: "_blank", rel: "noreferrer external noreferrer noopener" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "text-icon", icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), this.t('cta.help'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "lg", kind: "wide", variant: "secondary", onClick: this.continue, iconPack: this.iconPack, t: this.t }, this.t('cta.continue')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "lg", kind: "wide", onClick: this.reload, iconPack: this.iconPack, t: this.t }, this.t('cta.reload'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DytePermissionsMessage.style = dytePermissionsMessageCss;




/***/ }),

/***/ 46503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ onChange),
/* harmony export */   "s": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




/***/ })

};
;