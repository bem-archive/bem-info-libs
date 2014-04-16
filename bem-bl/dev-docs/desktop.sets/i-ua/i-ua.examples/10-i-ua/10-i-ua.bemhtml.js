var BEMHTML = function() {
  var cache,
      exports = {},
      xjst = (function(exports) {
    !function oninit() {
        (function(global, bem_) {
            if (bem_.I18N) {
                return undefined;
            } else {
                undefined;
            }
            global.BEM = bem_;
            var i18n = bem_.I18N = function(keyset, key) {
                return key;
            };
            i18n.keyset = function() {
                return i18n;
            };
            i18n.key = function(key) {
                return key;
            };
            i18n.lang = function() {
                return undefined;
            };
        })(this, typeof BEM === "undefined" ? {} : BEM);
    }();
    !function oninit() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            wbr: 1
        };
        (function(BEM, undefined) {
            var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function(modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildClass: function(block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == "string") {
                        if (typeof modVal != "string") {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != "undefined") {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != "string") {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildModsClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + "";
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(" ");
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join("");
                },
                buildClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join("");
                }
            };
        })(BEM_);
        var buildEscape = function() {
            var ts = {
                '"': "&quot;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, f = function(t) {
                return ts[t] || t;
            };
            return function(r) {
                r = new RegExp(r, "g");
                return function(s) {
                    return ("" + s).replace(r, f);
                };
            };
        }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? "" : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._mode = "";
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
            this.block = undefined;
            this.elem = undefined;
            this.mods = undefined;
            this.elemMods = undefined;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === "[object Array]";
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === "string" || t === "number" || t === "boolean";
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function() {
            var cnt = 0, id = BEM_["__id"] = +(new Date), expando = "__" + id, get = function() {
                return "uniq" + id + ++cnt;
            };
            return function(obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
        BEMContext.prototype.attrEscape = buildEscape('["&<>]');
        BEMContext.prototype.BEM = BEM_;
        BEMContext.prototype.isFirst = function isFirst() {
            return this.position === 1;
        };
        BEMContext.prototype.isLast = function isLast() {
            return this.position === this._listLength;
        };
        BEMContext.prototype.generateId = function generateId() {
            return this.identify(this.ctx);
        };
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join("");
        };
    }();
    return exports;
    exports.apply = apply;
    function apply() {
        return applyc(this);
    }
    function applyc(__$ctx) {
        var __r8, __r9, __r10, __r11, __r12, __r13, __r14, __r15, __r16, __r17, __r18, __r19, __r20, __r21, __r22, __r23, __r24, __r25, __r26, __r27, __r28, __r29, __r30, __r31, __r47, __r48, __r49, __r50, __r51, __r52, __r53, __r54, __r55, __r56, __r57, __r58, __r59, __r60, __r61, __r65, __r66, __r75, __r76, __r77, __r78, __r79, __r80;
        if (__$ctx.block === "checkbox" && __$ctx.elem === "control" && __$ctx._mode === "attrs") {
            {
                var _$1ka = __$ctx.ctx.attrs || {};
                _$1ka.id = __$ctx._checkboxAttrs.id;
                _$1ka.type = "checkbox";
                __$ctx.mods.disabled && (_$1ka.disabled = "disabled");
                __$ctx.mods.checked == "yes" && (_$1ka.checked = "checked");
                _$1ka["aria-labelledby"] = __$ctx._labelId;
                return _$1ka;
            }
            return;
        }
        if (__$ctx.block === "checkbox" && __$ctx.elem === "control" && __$ctx._mode === "tag") {
            return "input";
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "checkbox" && __$ctx._mode === "content") {
            return [ {
                elem: "box",
                tag: "span",
                elemMods: __$ctx.mods.checked === "yes" ? {
                    checked: "yes"
                } : "",
                content: [ {
                    elem: "control",
                    attrs: __$ctx.ctx.checkboxAttrs || {}
                }, {
                    elem: "tick",
                    tag: "i"
                } ]
            }, __$ctx.ctx.content ];
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "checkbox" && __$ctx._mode === "default" && !(__$ctx["__$anflg5"] !== true) === false && !!__$ctx._checkboxAttrs === false) {
            {
                var _$1hcheckboxId = (__$ctx.ctx.checkboxAttrs || {}).id, _$1hid = _$1hcheckboxId || __$ctx.generateId();
                {
                    "";
                    var __r81 = __$ctx["__$anflg5"];
                    __$ctx["__$anflg5"] = true;
                    {
                        "";
                        var __r82 = __$ctx._checkboxAttrs;
                        __$ctx._checkboxAttrs = _$1hcheckboxId ? __$ctx.ctx.checkboxAttrs : {
                            id: "id" + _$1hid
                        };
                        var __r83 = __$ctx._labelId;
                        __$ctx._labelId = "label" + _$1hid;
                        applyc(__$ctx);
                        __$ctx._checkboxAttrs = __r82;
                        __$ctx._labelId = __r83;
                        "";
                    }
                    __$ctx["__$anflg5"] = __r81;
                    "";
                }
                undefined;
            }
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "checkbox" && __$ctx._mode === "js") {
            return true;
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "checkbox" && __$ctx._mode === "tag") {
            return "span";
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "button" && !(__$ctx["__$anflg4"] !== true) === false && __$ctx._mode === "content") {
            return {
                elem: "text",
                tag: "span",
                content: ("", __r79 = __$ctx["__$anflg4"], __$ctx["__$anflg4"] = true, __r80 = applyc(__$ctx), __$ctx["__$anflg4"] = __r79, "", __r80)
            };
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "button" && __$ctx._mode === "tag") {
            return "button";
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "b-link" && __$ctx._mode === "attrs") {
            {
                var _$1cctx = __$ctx.ctx, _$1cprops = [ "title", "target" ], _$1cp = typeof _$1cctx.url, _$1ca = {
                    href: _$1cp === "undefined" || _$1cp === "string" ? _$1cctx.url : (_$1cp = [], "", __r75 = __$ctx._buf, __$ctx._buf = _$1cp, __r76 = __$ctx._mode, __$ctx._mode = "", __r77 = __$ctx.ctx, __$ctx.ctx = _$1cctx.url, __r78 = applyc(__$ctx), __$ctx._buf = __r75, __$ctx._mode = __r76, __$ctx.ctx = __r77, "", __r78, _$1cp.join(""))
                };
                while (_$1cp = _$1cprops.pop()) {
                    _$1cctx[_$1cp] && (_$1ca[_$1cp] = _$1cctx[_$1cp]);
                }
                return _$1ca;
            }
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "b-link" && __$ctx._mode === "tag") {
            return "a";
            return;
        }
        if (__$ctx.block === "b-text" && !__$ctx.elem === false && !__$ctx.ctx.id === false && __$ctx._mode === "attrs") {
            return {
                id: __$ctx.ctx.id
            };
            return;
        }
        if (__$ctx.block === "b-text" && !__$ctx.elem === false && __$ctx._mode === "tag") {
            return __$ctx.ctx.elem;
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "js" && __$ctx._mode === "attrs" && !__$ctx.ctx.url === false) {
            return {
                src: __$ctx.ctx.url
            };
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "js" && __$ctx._mode === "tag") {
            return "script";
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "js" && __$ctx._mode === "bem") {
            return false;
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "css" && !__$ctx.ctx.url === false && __$ctx._mode === "attrs") {
            return {
                rel: "stylesheet",
                href: __$ctx.ctx.url
            };
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "css" && !__$ctx.ctx.url === false && __$ctx._mode === "tag") {
            return "link";
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "css" && __$ctx._mode === "default" && !__$ctx.ctx.hasOwnProperty("ie") === false && !!__$ctx.ctx._ieCommented === false) {
            {
                var _$13ie = __$ctx.ctx.ie;
                if (_$13ie === true) {
                    {
                        "";
                        var __r69 = __$ctx._mode;
                        __$ctx._mode = "";
                        var __r70 = __$ctx.ctx;
                        __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
                            return {
                                elem: "css",
                                url: this.ctx.url + ".ie" + v + ".css",
                                ie: "IE " + v
                            };
                        }, __$ctx);
                        applyc(__$ctx);
                        __$ctx._mode = __r69;
                        __$ctx.ctx = __r70;
                        "";
                    }
                    undefined;
                } else {
                    var _$13hideRule = !_$13ie ? [ "gt IE 9", "<!-->", "<!--" ] : _$13ie === "!IE" ? [ _$13ie, "<!-->", "<!--" ] : [ _$13ie, "", "" ];
                    {
                        "";
                        var __r71 = __$ctx._mode;
                        __$ctx._mode = "";
                        var __r72 = __$ctx.ctx, __r73 = __r72._ieCommented;
                        __r72._ieCommented = true;
                        var __r74 = __$ctx.ctx;
                        __$ctx.ctx = [ "<!--[if " + _$13hideRule[0] + "]>", _$13hideRule[1], __$ctx.ctx, _$13hideRule[2], "<![endif]-->" ];
                        applyc(__$ctx);
                        __$ctx._mode = __r71;
                        __r72._ieCommented = __r73;
                        __$ctx.ctx = __r74;
                        "";
                    }
                    undefined;
                }
            }
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "css" && __$ctx._mode === "tag") {
            return "style";
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "css" && __$ctx._mode === "bem") {
            return false;
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "b-page" && !(__$ctx["__$anflg3"] !== true) === false && __$ctx._mode === "mix") {
            {
                var _$10mix = ("", __r65 = __$ctx["__$anflg3"], __$ctx["__$anflg3"] = true, __r66 = applyc(__$ctx), __$ctx["__$anflg3"] = __r65, "", __r66) || [];
                _$10mix.push({
                    block: "i-ua",
                    mods: {
                        interaction: "yes"
                    },
                    js: true
                });
                return _$10mix;
            }
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "favicon" && __$ctx._mode === "attrs") {
            return {
                rel: "shortcut icon",
                href: __$ctx.ctx.url
            };
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "favicon" && __$ctx._mode === "tag") {
            return "link";
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "favicon" && __$ctx._mode === "bem") {
            return false;
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "meta" && __$ctx._mode === "attrs") {
            return __$ctx.ctx.attrs;
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "meta" && __$ctx._mode === "tag") {
            return "meta";
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "meta" && __$ctx._mode === "bem") {
            return false;
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "head" && __$ctx._mode === "tag") {
            return "head";
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "head" && __$ctx._mode === "bem") {
            return false;
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "root" && __$ctx._mode === "cls") {
            return "i-ua_js_no i-ua_css_standard";
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "root" && __$ctx._mode === "tag") {
            return "html";
            return;
        }
        if (__$ctx.block === "b-page" && __$ctx.elem === "root" && __$ctx._mode === "bem") {
            return false;
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "b-page" && __$ctx._mode === "mix") {
            return [ {
                elem: "body"
            } ];
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "b-page" && __$ctx._mode === "tag") {
            return "body";
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "b-page" && !(__$ctx["__$anflg2"] !== true) === false && __$ctx._mode === "default") {
            {
                var _$mctx = __$ctx.ctx, _$mdtype = ("", __r58 = __$ctx._mode, __$ctx._mode = "doctype", __r59 = applyc(__$ctx), __$ctx._mode = __r58, "", __r59), _$mxUA = ("", __r60 = __$ctx._mode, __$ctx._mode = "xUACompatible", __r61 = applyc(__$ctx), __$ctx._mode = __r60, "", __r61), _$mbuf = [ _$mdtype, {
                    elem: "root",
                    content: [ {
                        elem: "head",
                        content: [ {
                            tag: "meta",
                            attrs: {
                                charset: "utf-8"
                            }
                        }, _$mxUA, {
                            tag: "title",
                            content: _$mctx.title
                        }, _$mctx.favicon ? {
                            elem: "favicon",
                            url: _$mctx.favicon
                        } : "", _$mctx.meta, {
                            block: "i-ua"
                        }, _$mctx.head ]
                    }, _$mctx ]
                } ];
                {
                    "";
                    var __r62 = __$ctx["__$anflg2"];
                    __$ctx["__$anflg2"] = true;
                    {
                        "";
                        var __r63 = __$ctx.ctx;
                        __$ctx.ctx = _$mbuf;
                        var __r64 = __$ctx._mode;
                        __$ctx._mode = "";
                        applyc(__$ctx);
                        __$ctx.ctx = __r63;
                        __$ctx._mode = __r64;
                        "";
                    }
                    __$ctx["__$anflg2"] = __r62;
                    "";
                }
                undefined;
            }
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "b-page" && __$ctx._mode === "xUACompatible") {
            return __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            };
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "b-page" && __$ctx._mode === "doctype") {
            return __$ctx.ctx.doctype || "<!DOCTYPE html>";
            return;
        }
        if (__$ctx.block === "i-bem" && __$ctx.elem === "i18n" && __$ctx._mode === "default") {
            {
                if (!__$ctx.ctx) {
                    return "";
                } else {
                    undefined;
                }
                var _$jctx = __$ctx.ctx, _$jkeyset = _$jctx.keyset, _$jkey = _$jctx.key, _$jparams = _$jctx.params || {};
                if (!(_$jkeyset || _$jkey)) {
                    return "";
                } else {
                    undefined;
                }
                if (_$jctx.content) {
                    var _$jcnt;
                    _$jparams.content = (_$jcnt = [], "", __r54 = __$ctx._buf, __$ctx._buf = _$jcnt, __r55 = __$ctx._mode, __$ctx._mode = "", __r56 = __$ctx.ctx, __$ctx.ctx = _$jctx.content, __r57 = applyc(__$ctx), __$ctx._buf = __r54, __$ctx._mode = __r55, __$ctx.ctx = __r56, "", __r57, _$jcnt.join(""));
                } else {
                    undefined;
                }
                __$ctx._buf.push(BEM.I18N(_$jkeyset, _$jkey, _$jparams));
            }
            return;
        }
        if (__$ctx.block === "i-jquery" && __$ctx.elem === "core" && !(__$ctx["__$anflg1"] !== true) === false && __$ctx._mode === "default") {
            return "", __r49 = __$ctx["__$anflg1"], __$ctx["__$anflg1"] = true, __r53 = ("", __r50 = __$ctx.ctx, __$ctx.ctx = {
                block: "b-page",
                elem: "js",
                url: "//yastatic.net/jquery/1.8.3/jquery.min.js"
            }, __r51 = __$ctx._mode, __$ctx._mode = "", __r52 = applyc(__$ctx), __$ctx.ctx = __r50, __$ctx._mode = __r51, "", __r52), __$ctx["__$anflg1"] = __r49, "", __r53;
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "i-ua" && __$ctx._mode === "content") {
            return [ ";(function(d,e,c,r){", "e=d.documentElement;", 'c="className";', 'r="replace";', 'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");', 'if(d.compatMode!="CSS1Compat")', 'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")', "})(document);" ].join("");
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "i-ua" && __$ctx._mode === "bem") {
            return false;
            return;
        }
        if (!!__$ctx.elem === false && __$ctx.block === "i-ua" && __$ctx._mode === "tag") {
            return "script";
            return;
        }
        if (__$ctx._mode === "content") {
            return __$ctx.ctx.content;
            return;
        }
        if (__$ctx._mode === "mix") {
            return undefined;
            return;
        }
        if (__$ctx._mode === "bem") {
            return undefined;
            return;
        }
        if (__$ctx._mode === "jsAttr") {
            return undefined;
            return;
        }
        if (__$ctx._mode === "js") {
            return undefined;
            return;
        }
        if (__$ctx._mode === "cls") {
            return undefined;
            return;
        }
        if (__$ctx._mode === "attrs") {
            return undefined;
            return;
        }
        if (__$ctx._mode === "tag") {
            return undefined;
            return;
        }
        if (!__$ctx.ctx === false && !!__$ctx._.isSimple(__$ctx.ctx) === false && !__$ctx.ctx.link === false) {
            {
                function _$6follow() {
                    if (this.ctx.link === "no-follow") {
                        return undefined;
                    } else {
                        undefined;
                    }
                    var data = this._links[this.ctx.link];
                    return "", __r47 = this.ctx, this.ctx = data, __r48 = applyc(__$ctx), this.ctx = __r47, "", __r48;
                }
                if (!cache || !__$ctx._cacheLog) {
                    return _$6follow.call(__$ctx);
                } else {
                    undefined;
                }
                var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join("");
                __$ctx._cachePos = __$ctx._buf.length;
                __$ctx._cacheLog.push(_$6contents, {
                    log: __$ctx._localLog.slice(),
                    link: __$ctx.ctx.link
                });
                var _$6res = _$6follow.call(__$ctx);
                __$ctx._cachePos = __$ctx._buf.length;
                return _$6res;
            }
            return;
        }
        if (!cache === false && !__$ctx.ctx === false && !__$ctx.ctx.cache === false) {
            {
                var _$5cached;
                function _$5setProperty(obj, key, value) {
                    if (key.length === 0) {
                        return undefined;
                    } else {
                        undefined;
                    }
                    if (Array.isArray(value)) {
                        var target = obj;
                        for (var i = 0; i < value.length - 1; i++) {
                            target = target[value[i]];
                        }
                        value = target[value[i]];
                    } else {
                        undefined;
                    }
                    var host = obj, previous;
                    for (var i = 0; i < key.length - 1; i++) {
                        host = host[key[i]];
                    }
                    previous = host[key[i]];
                    host[key[i]] = value;
                    return previous;
                }
                if (_$5cached = cache.get(__$ctx.ctx.cache)) {
                    var _$5oldLinks = __$ctx._links;
                    if (__$ctx.ctx.links) {
                        __$ctx._links = __$ctx.ctx.links;
                    } else {
                        undefined;
                    }
                    for (var _$5i = 0; _$5i < _$5cached.log.length; _$5i++) {
                        if (typeof _$5cached.log[_$5i] === "string") {
                            __$ctx._buf.push(_$5cached.log[_$5i]);
                            continue;
                        } else {
                            undefined;
                        }
                        var _$5log = _$5cached.log[_$5i], _$5reverseLog;
                        _$5reverseLog = _$5log.log.map(function(entry) {
                            return {
                                key: entry[0],
                                value: _$5setProperty(this, entry[0], entry[1])
                            };
                        }, __$ctx).reverse();
                        {
                            "";
                            var __r37 = __$ctx.ctx, __r38 = __r37.cache;
                            __r37.cache = null;
                            var __r39 = __$ctx._cacheLog;
                            __$ctx._cacheLog = null;
                            var __r40 = __$ctx.ctx, __r41 = __r40.link;
                            __r40.link = _$5log.link;
                            applyc(__$ctx);
                            __r37.cache = __r38;
                            __$ctx._cacheLog = __r39;
                            __r40.link = __r41;
                            "";
                        }
                        undefined;
                        _$5reverseLog.forEach(function(entry) {
                            _$5setProperty(this, entry.key, entry.value);
                        }, __$ctx);
                    }
                    __$ctx._links = _$5oldLinks;
                    return _$5cached.res;
                } else {
                    undefined;
                }
                var _$5cacheLog = [], _$5res;
                {
                    "";
                    var __r42 = __$ctx.ctx, __r43 = __r42.cache;
                    __r42.cache = null;
                    var __r44 = __$ctx._cachePos;
                    __$ctx._cachePos = __$ctx._buf.length;
                    var __r45 = __$ctx._cacheLog;
                    __$ctx._cacheLog = _$5cacheLog;
                    var __r46 = __$ctx._localLog;
                    __$ctx._localLog = [];
                    {
                        _$5res = applyc(__$ctx);
                        var _$5tail = __$ctx._buf.slice(__$ctx._cachePos).join("");
                        if (_$5tail) {
                            _$5cacheLog.push(_$5tail);
                        } else {
                            undefined;
                        }
                    }
                    __r42.cache = __r43;
                    __$ctx._cachePos = __r44;
                    __$ctx._cacheLog = __r45;
                    __$ctx._localLog = __r46;
                    "";
                }
                cache.set(__$ctx.ctx.cache, {
                    log: _$5cacheLog,
                    res: _$5res
                });
                return _$5res;
            }
            return;
        }
        if (__$ctx._mode === "default") {
            {
                var _$4_this = __$ctx, _$4BEM_ = _$4_this.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
                _$4tag = ("", __r8 = __$ctx._mode, __$ctx._mode = "tag", __r9 = applyc(__$ctx), __$ctx._mode = __r8, "", __r9);
                typeof _$4tag != "undefined" || (_$4tag = _$4v.tag);
                typeof _$4tag != "undefined" || (_$4tag = "div");
                if (_$4tag) {
                    var _$4jsParams, _$4js;
                    if (__$ctx.block && _$4v.js !== false) {
                        _$4js = ("", __r12 = __$ctx._mode, __$ctx._mode = "js", __r13 = applyc(__$ctx), __$ctx._mode = __r12, "", __r13);
                        _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                        _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass(__$ctx.block, _$4v.elem)] = _$4js);
                    } else {
                        undefined;
                    }
                    _$4buf.push("<", _$4tag);
                    var _$4isBEM = ("", __r14 = __$ctx._mode, __$ctx._mode = "bem", __r15 = applyc(__$ctx), __$ctx._mode = __r14, "", __r15);
                    typeof _$4isBEM != "undefined" || (_$4isBEM = typeof _$4v.bem != "undefined" ? _$4v.bem : _$4v.block || _$4v.elem);
                    var _$4cls = ("", __r16 = __$ctx._mode, __$ctx._mode = "cls", __r17 = applyc(__$ctx), __$ctx._mode = __r16, "", __r17);
                    _$4cls || (_$4cls = _$4v.cls);
                    var _$4addJSInitClass = _$4v.block && _$4jsParams;
                    if (_$4isBEM || _$4cls) {
                        _$4buf.push(' class="');
                        if (_$4isBEM) {
                            _$4BEM_.INTERNAL.buildClasses(__$ctx.block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                            var _$4mix = ("", __r18 = __$ctx._mode, __$ctx._mode = "mix", __r19 = applyc(__$ctx), __$ctx._mode = __r18, "", __r19);
                            _$4v.mix && (_$4mix = _$4mix ? _$4mix.concat(_$4v.mix) : _$4v.mix);
                            if (_$4mix) {
                                var _$4visited = {};
                                function _$4visitedKey(block, elem) {
                                    return (block || "") + "__" + (elem || "");
                                }
                                _$4visited[_$4visitedKey(__$ctx.block, __$ctx.elem)] = true;
                                if (!__$ctx._.isArray(_$4mix)) {
                                    _$4mix = [ _$4mix ];
                                } else {
                                    undefined;
                                }
                                for (var _$4i = 0; _$4i < _$4mix.length; _$4i++) {
                                    var _$4mixItem = _$4mix[_$4i];
                                    if (!_$4mixItem) {
                                        continue;
                                    } else {
                                        undefined;
                                    }
                                    var _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || _$4_this.block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || _$4_this.elem;
                                    _$4hasItem && _$4buf.push(" ");
                                    _$4BEM_.INTERNAL[_$4hasItem ? "buildClasses" : "buildModsClasses"](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : _$4_this.elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                                    if (_$4mixItem.js) {
                                        (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                        _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                                    } else {
                                        undefined;
                                    }
                                    if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                        _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                        var _$4nestedMix = ("", __r20 = __$ctx.block, __$ctx.block = _$4block, __r21 = __$ctx.elem, __$ctx.elem = _$4elem, __r22 = __$ctx._mode, __$ctx._mode = "mix", __r23 = applyc(__$ctx), __$ctx.block = __r20, __$ctx.elem = __r21, __$ctx._mode = __r22, "", __r23);
                                        if (_$4nestedMix) {
                                            for (var _$4j = 0; _$4j < _$4nestedMix.length; _$4j++) {
                                                var _$4nestedItem = _$4nestedMix[_$4j];
                                                if (!_$4nestedItem.block && !_$4nestedItem.elem || !_$4visited[_$4visitedKey(_$4nestedItem.block, _$4nestedItem.elem)]) {
                                                    _$4nestedItem._block = _$4block;
                                                    _$4nestedItem._elem = _$4elem;
                                                    _$4mix.splice(_$4i + 1, 0, _$4nestedItem);
                                                } else {
                                                    undefined;
                                                }
                                            }
                                        } else {
                                            undefined;
                                        }
                                    } else {
                                        undefined;
                                    }
                                }
                            } else {
                                undefined;
                            }
                        } else {
                            undefined;
                        }
                        _$4cls && _$4buf.push(_$4isBEM ? " " : "", _$4cls);
                        _$4addJSInitClass && _$4buf.push(" i-bem");
                        _$4buf.push('"');
                    } else {
                        undefined;
                    }
                    if (_$4jsParams) {
                        var _$4jsAttr = ("", __r26 = __$ctx._mode, __$ctx._mode = "jsAttr", __r27 = applyc(__$ctx), __$ctx._mode = __r26, "", __r27);
                        _$4buf.push(" ", _$4jsAttr || "onclick", '="return ', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
                    } else {
                        undefined;
                    }
                    var _$4attrs = ("", __r28 = __$ctx._mode, __$ctx._mode = "attrs", __r29 = applyc(__$ctx), __$ctx._mode = __r28, "", __r29);
                    _$4attrs = __$ctx._.extend(_$4attrs, _$4v.attrs);
                    if (_$4attrs) {
                        var _$4name;
                        for (_$4name in _$4attrs) {
                            if (_$4attrs[_$4name] === undefined) {
                                continue;
                            } else {
                                undefined;
                            }
                            _$4buf.push(" ", _$4name, '="', __$ctx._.attrEscape(_$4attrs[_$4name]), '"');
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                if (__$ctx._.isShortTag(_$4tag)) {
                    _$4buf.push("/>");
                } else {
                    _$4tag && _$4buf.push(">");
                    var _$4content = ("", __r30 = __$ctx._mode, __$ctx._mode = "content", __r31 = applyc(__$ctx), __$ctx._mode = __r30, "", __r31);
                    if (_$4content || _$4content === 0) {
                        var _$4isBEM = __$ctx.block || __$ctx.elem;
                        {
                            "";
                            var __r32 = __$ctx._notNewList;
                            __$ctx._notNewList = false;
                            var __r33 = __$ctx.position;
                            __$ctx.position = _$4isBEM ? 1 : __$ctx.position;
                            var __r34 = __$ctx._listLength;
                            __$ctx._listLength = _$4isBEM ? 1 : __$ctx._listLength;
                            var __r35 = __$ctx.ctx;
                            __$ctx.ctx = _$4content;
                            var __r36 = __$ctx._mode;
                            __$ctx._mode = "";
                            applyc(__$ctx);
                            __$ctx._notNewList = __r32;
                            __$ctx.position = __r33;
                            __$ctx._listLength = __r34;
                            __$ctx.ctx = __r35;
                            __$ctx._mode = __r36;
                            "";
                        }
                        undefined;
                    } else {
                        undefined;
                    }
                    _$4tag && _$4buf.push("</", _$4tag, ">");
                }
            }
            return;
        }
        if (__$ctx._mode === "" && !__$ctx._.isSimple(__$ctx.ctx) === false) {
            {
                __$ctx._listLength--;
                var _$3ctx = __$ctx.ctx;
                (_$3ctx && _$3ctx !== true || _$3ctx === 0) && __$ctx._buf.push(_$3ctx);
            }
            return;
        }
        if (__$ctx._mode === "" && !!__$ctx.ctx === false) {
            __$ctx._listLength--;
            return;
        }
        if (__$ctx._mode === "" && !__$ctx._.isArray(__$ctx.ctx) === false) {
            {
                var _$1v = __$ctx.ctx, _$1l = _$1v.length, _$1i = 0, _$1prevPos = __$ctx.position, _$1prevNotNewList = __$ctx._notNewList;
                if (_$1prevNotNewList) {
                    __$ctx._listLength += _$1l - 1;
                } else {
                    __$ctx.position = 0;
                    __$ctx._listLength = _$1l;
                }
                __$ctx._notNewList = true;
                while (_$1i < _$1l) {
                    var _$1newCtx = _$1v[_$1i++];
                    {
                        "";
                        var __r7 = __$ctx.ctx;
                        __$ctx.ctx = _$1newCtx == null ? "" : _$1newCtx;
                        applyc(__$ctx);
                        __$ctx.ctx = __r7;
                        "";
                    }
                    undefined;
                }
                _$1prevNotNewList || (__$ctx.position = _$1prevPos);
            }
            return;
        }
        if (__$ctx._mode === "" && !true === false) {
            {
                var _$0vBlock = __$ctx.ctx.block, _$0vElem = __$ctx.ctx.elem, _$0block = __$ctx._currBlock || __$ctx.block;
                __$ctx.ctx || (__$ctx.ctx = {});
                {
                    "";
                    var __r0 = __$ctx._mode;
                    __$ctx._mode = "default";
                    var __r1 = __$ctx._links;
                    __$ctx._links = __$ctx.ctx.links || __$ctx._links;
                    var __r2 = __$ctx.block;
                    __$ctx.block = _$0vBlock || (_$0vElem ? _$0block : undefined);
                    var __r3 = __$ctx._currBlock;
                    __$ctx._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
                    var __r4 = __$ctx.elem;
                    __$ctx.elem = __$ctx.ctx.elem;
                    var __r5 = __$ctx.mods;
                    __$ctx.mods = (_$0vBlock ? __$ctx.ctx.mods : __$ctx.mods) || {};
                    var __r6 = __$ctx.elemMods;
                    __$ctx.elemMods = __$ctx.ctx.elemMods || {};
                    {
                        __$ctx.block || __$ctx.elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                        applyc(__$ctx);
                        undefined;
                    }
                    __$ctx._mode = __r0;
                    __$ctx._links = __r1;
                    __$ctx.block = __r2;
                    __$ctx._currBlock = __r3;
                    __$ctx.elem = __r4;
                    __$ctx.mods = __r5;
                    __$ctx.elemMods = __r6;
                    "";
                }
            }
            return;
        }
    }
    return exports;
})(typeof exports === "undefined" ? {} : exports);;
  return function(options) {
    var context = this;
    if (!options) options = {};
    cache = options.cache;
    return function() {
      if (context === this) context = undefined;
      return xjst.apply.call(
[context]
      );
    }.call(null);
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);