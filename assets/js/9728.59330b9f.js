"use strict";
exports.id = 9728;
exports.ids = [9728];
exports.modules = {

/***/ 69728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_polls_toggle": () => (/* binding */ DytePollsToggle)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46503);
/* harmony import */ var _sidebar_a276be40_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64734);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24555);







const dytePollsToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .unread-count{right:var(--dyte-space-4, 16px);top:auto}";

const DytePollsToggle = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onPollsUpdate = ({ newPoll }) => {
      if (newPoll === true)
        this.unreadPollsCount += 1;
    };
    this.updateCanView = () => {
      this.canViewPolls = (0,_sidebar_a276be40_js__WEBPACK_IMPORTED_MODULE_4__.d)(this.meeting);
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.pollsActive = false;
    this.unreadPollsCount = 0;
    this.canViewPolls = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.statesChanged(this.states);
    (0,_store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.o)('sidebar', () => this.statesChanged());
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.meeting.polls) === null || _a === void 0 ? void 0 : _a.removeListener('pollsUpdate', this.onPollsUpdate);
    (_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.stage) === null || _c === void 0 ? void 0 : _c.removeListener('stageStatusUpdate', this.updateCanView);
  }
  meetingChanged(meeting) {
    var _a;
    if (meeting && meeting.polls) {
      this.unreadPollsCount = meeting.polls.items.length;
      this.meeting.polls.addListener('pollsUpdate', this.onPollsUpdate);
      this.canViewPolls = (0,_sidebar_a276be40_js__WEBPACK_IMPORTED_MODULE_4__.d)(meeting);
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _a === void 0 ? void 0 : _a.on('stageStatusUpdate', this.updateCanView);
    }
  }
  statesChanged(s) {
    const states = s || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states != null) {
      this.pollsActive = states.activeSidebar === true && states.sidebar === 'polls';
    }
  }
  togglePollsTab() {
    const states = this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s;
    this.unreadPollsCount = 0;
    this.pollsActive = !((states === null || states === void 0 ? void 0 : states.activeSidebar) && (states === null || states === void 0 ? void 0 : states.sidebar) === 'polls');
    this.stateUpdate.emit({
      activeSidebar: this.pollsActive,
      sidebar: this.pollsActive ? 'polls' : 'none',
      activeMoreMenu: false,
      activeAI: false,
    });
    _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSidebar = this.pollsActive;
    _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.sidebar = this.pollsActive ? 'polls' : 'none';
    _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
  }
  render() {
    if (!this.canViewPolls)
      return;
    const text = this.t('polls');
    // TODO(callmetarush): Just showing polls for all V2 users irrespective of themes
    // untill we get ui theme for V2.
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: text }, this.unreadPollsCount !== 0 && !this.pollsActive && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.unreadPollsCount <= 100 ? this.unreadPollsCount : '99+'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: { active: this.pollsActive }, onClick: () => this.togglePollsTab(), icon: this.iconPack.poll, label: text, variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DytePollsToggle.style = dytePollsToggleCss;




/***/ }),

/***/ 64734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ canViewParticipants),
/* harmony export */   "b": () => (/* binding */ canViewPlugins),
/* harmony export */   "c": () => (/* binding */ canViewChat),
/* harmony export */   "d": () => (/* binding */ canViewPolls)
/* harmony export */ });
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24555);


const canViewChat = (meeting) => {
  if (meeting && !meeting.chat)
    return false;
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.chat)
    return false;
  const { chatPublic, chatPrivate } = meeting.self.permissions;
  return (chatPublic.canSend ||
    chatPublic.text ||
    chatPublic.files ||
    chatPrivate.canSend ||
    chatPrivate.canReceive ||
    chatPrivate.files ||
    chatPrivate.text);
};
const canViewPolls = (meeting) => {
  if (meeting && !meeting.polls)
    return false;
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.polls)
    return false;
  const { polls } = meeting.self.permissions;
  return polls.canCreate || polls.canView || polls.canVote;
};
const canViewParticipants = (meeting) => {
  var _a, _b;
  if ((0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_0__.s)(meeting) && !((_a = meeting.self.permissions) === null || _a === void 0 ? void 0 : _a.acceptPresentRequests))
    return false;
  if (meeting && !meeting.participants)
    return false;
  if (meeting.meta.viewType === 'LIVESTREAM') {
    return meeting.self.permissions.acceptPresentRequests || ((_b = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _b === void 0 ? void 0 : _b.status) === 'ON_STAGE';
  }
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.participants)
    return false;
  return true;
};
const canViewPlugins = (meeting) => {
  if ((0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_0__.a)(meeting))
    return false;
  if (meeting && !meeting.plugins)
    return false;
  if (meeting.meta.viewType === 'LIVESTREAM')
    return meeting.stage.status === 'ON_STAGE';
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.plugins)
    return false;
  const { plugins } = meeting.self.permissions;
  return plugins.canClose || plugins.canStart;
};




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