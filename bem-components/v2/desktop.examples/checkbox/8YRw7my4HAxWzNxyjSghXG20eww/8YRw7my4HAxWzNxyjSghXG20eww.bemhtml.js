(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "attrs") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b27(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["type"] === "button") {
                    var __$r = __$b28(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b29(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 8) === 0) {
                    return [ function __$lb__$25() {
                        var __$r__$26;
                        var __$l0__$27 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 8;
                        __$r__$26 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$27;
                        return __$r__$26;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 32) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$44() {
                    var __$r__$45;
                    var __$l0__$46 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$45 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$46;
                    return __$r__$45;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                return [ function __$lb__$47() {
                    var __$r__$48;
                    var __$l0__$49 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$48 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$49;
                    return __$r__$48;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$4() {
                        var __$r__$5;
                        var __$l0__$6 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$5 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$6;
                        return __$r__$5;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "checkbox") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        if ($$block === "button" && !$$elem) {
            return {
                elem: "control"
            };
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b41(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 16) === 0) {
                            var __$r = __$b42(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b43(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b44(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b45(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 256) === 0) {
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b59(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
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
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
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
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_button"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b1(__$ctx, __$ref) {
    var attrs__$0 = {
        "aria-hidden": "true"
    }, url__$1 = __$ctx.ctx.url;
    if (url__$1) attrs__$0.style = "background-image:url(" + url__$1 + ")";
    return attrs__$0;
}

function __$b3(__$ctx, __$ref) {
    var ctx__$9 = __$ctx.ctx, attrs__$10 = {
        type: $$mods.type || "button",
        name: ctx__$9.name,
        value: ctx__$9.val
    };
    $$mods.disabled && (attrs__$10.disabled = "disabled");
    return __$ctx.extend(function __$lb__$11() {
        var __$r__$12;
        var __$l0__$13 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$12 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$13;
        return __$r__$12;
    }(), attrs__$10);
}

function __$b4(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$14.tabIndex,
        id: ctx__$14.id,
        title: ctx__$14.title
    };
}

function __$b5(__$ctx, __$ref) {
    var attrs__$21 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$22 = __$ctx.ctx;
    attrs__$21.name = ctx__$22.name;
    attrs__$21.value = ctx__$22.val;
    ctx__$22.checked && (attrs__$21.checked = "checked");
    ctx__$22.disabled && (attrs__$21.disabled = "disabled");
    return attrs__$21;
}

function __$b27(__$ctx, __$ref) {
    var ctx__$7 = __$ctx.ctx, content__$8 = [ ctx__$7.icon ];
    "text" in ctx__$7 && content__$8.push({
        elem: "text",
        content: ctx__$7.text
    });
    return content__$8;
}

function __$b28(__$ctx, __$ref) {
    var ctx__$2 = __$ctx.ctx, mods__$3 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$3.checked,
            disabled: mods__$3.disabled,
            theme: mods__$3.theme,
            size: mods__$3.size
        },
        title: ctx__$2.title,
        content: [ ctx__$2.icon, typeof ctx__$2.text !== "undefined" ? {
            elem: "text",
            content: ctx__$2.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$3.checked,
        disabled: mods__$3.disabled,
        name: ctx__$2.name,
        val: ctx__$2.val
    } ];
}

function __$b29(__$ctx, __$ref) {
    var ctx__$23 = __$ctx.ctx, mods__$24 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$24.checked,
            disabled: mods__$24.disabled,
            name: ctx__$23.name,
            val: ctx__$23.val
        }
    }, ctx__$23.text ];
}

function __$b41(__$ctx, __$ref) {
    var __$r__$16;
    var __$l0__$17 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$19;
    var __$l1__$20 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$19 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$20;
    __$r__$16 = __$r__$19;
    __$ctx._button = __$l0__$17;
    return;
}

function __$b42(__$ctx, __$ref) {
    var url__$28 = __$ctx.ctx.url;
    var __$r__$30;
    var __$l0__$31 = $$mode;
    $$mode = "";
    var __$l1__$32 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$28 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$34;
    var __$l2__$35 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$34 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$35;
    __$r__$30 = __$r__$34;
    $$mode = __$l0__$31;
    __$ctx.ctx = __$l1__$32;
    return;
}

function __$b43(__$ctx, __$ref) {
    var ie__$36 = __$ctx.ctx.ie, hideRule__$37 = !ie__$36 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$36 === "!IE" ? [ ie__$36, "<!-->", "<!--" ] : [ ie__$36, "", "" ];
    var __$r__$39;
    var __$l0__$40 = $$mode;
    $$mode = "";
    var __$l3__$41 = __$ctx.ctx;
    var __$l1__$42 = __$l3__$41._ieCommented;
    __$l3__$41._ieCommented = true;
    var __$l2__$43 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$37[0] + "]>" + hideRule__$37[1], __$ctx.ctx, hideRule__$37[2] + "<![endif]-->" ];
    __$r__$39 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$40;
    __$l3__$41._ieCommented = __$l1__$42;
    __$ctx.ctx = __$l2__$43;
    return;
}

function __$b44(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$50 = __$ctx.ctx;
    var __$r__$52;
    var __$l0__$53 = $$mode;
    $$mode = "";
    var __$l1__$54 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$50.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$50.title
            }, {
                block: "ua"
            }, ctx__$50.head, ctx__$50.styles, ctx__$50.favicon ? {
                elem: "favicon",
                url: ctx__$50.favicon
            } : "" ]
        }, ctx__$50 ]
    } ];
    var __$r__$56;
    var __$l2__$57 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$56 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$57;
    __$r__$52 = __$r__$56;
    $$mode = __$l0__$53;
    __$ctx.ctx = __$l1__$54;
    __$ctx._defPageApplied = false;
    return;
}

function __$b45(__$ctx, __$ref) {
    var BEM_INTERNAL__$58 = __$ctx.BEM.INTERNAL, ctx__$59 = __$ctx.ctx, isBEM__$60, tag__$61, res__$62;
    var __$r__$64;
    var __$l0__$65 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$66 = $$block;
    var __$r__$68;
    var __$l1__$69 = $$mode;
    $$mode = "tag";
    __$r__$68 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$69;
    tag__$61 = __$r__$68;
    typeof tag__$61 !== "undefined" || (tag__$61 = ctx__$59.tag);
    typeof tag__$61 !== "undefined" || (tag__$61 = "div");
    if (tag__$61) {
        var jsParams__$70, js__$71;
        if (vBlock__$66 && ctx__$59.js !== false) {
            var __$r__$72;
            var __$l2__$73 = $$mode;
            $$mode = "js";
            __$r__$72 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$73;
            js__$71 = __$r__$72;
            js__$71 = js__$71 ? __$ctx.extend(ctx__$59.js, js__$71 === true ? {} : js__$71) : ctx__$59.js === true ? {} : ctx__$59.js;
            js__$71 && ((jsParams__$70 = {})[BEM_INTERNAL__$58.buildClass(vBlock__$66, ctx__$59.elem)] = js__$71);
        }
        __$ctx._str += "<" + tag__$61;
        var __$r__$74;
        var __$l3__$75 = $$mode;
        $$mode = "bem";
        __$r__$74 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$75;
        isBEM__$60 = __$r__$74;
        typeof isBEM__$60 !== "undefined" || (isBEM__$60 = typeof ctx__$59.bem !== "undefined" ? ctx__$59.bem : ctx__$59.block || ctx__$59.elem);
        var __$r__$77;
        var __$l4__$78 = $$mode;
        $$mode = "cls";
        __$r__$77 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$78;
        var cls__$76 = __$r__$77;
        cls__$76 || (cls__$76 = ctx__$59.cls);
        var addJSInitClass__$79 = ctx__$59.block && jsParams__$70 && !ctx__$59.elem;
        if (isBEM__$60 || cls__$76) {
            __$ctx._str += ' class="';
            if (isBEM__$60) {
                __$ctx._str += BEM_INTERNAL__$58.buildClasses(vBlock__$66, ctx__$59.elem, ctx__$59.elemMods || ctx__$59.mods);
                var __$r__$81;
                var __$l5__$82 = $$mode;
                $$mode = "mix";
                __$r__$81 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$82;
                var mix__$80 = __$r__$81;
                ctx__$59.mix && (mix__$80 = mix__$80 ? [].concat(mix__$80, ctx__$59.mix) : ctx__$59.mix);
                if (mix__$80) {
                    var visited__$83 = {}, visitedKey__$84 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$83[visitedKey__$84(vBlock__$66, $$elem)] = true;
                    __$ctx.isArray(mix__$80) || (mix__$80 = [ mix__$80 ]);
                    for (var i__$85 = 0; i__$85 < mix__$80.length; i__$85++) {
                        var mixItem__$86 = mix__$80[i__$85], hasItem__$87 = mixItem__$86.block || mixItem__$86.elem, mixBlock__$88 = mixItem__$86.block || mixItem__$86._block || $$block, mixElem__$89 = mixItem__$86.elem || mixItem__$86._elem || $$elem;
                        hasItem__$87 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$58[hasItem__$87 ? "buildClasses" : "buildModsClasses"](mixBlock__$88, mixItem__$86.elem || mixItem__$86._elem || (mixItem__$86.block ? undefined : $$elem), mixItem__$86.elemMods || mixItem__$86.mods);
                        if (mixItem__$86.js) {
                            (jsParams__$70 || (jsParams__$70 = {}))[BEM_INTERNAL__$58.buildClass(mixBlock__$88, mixItem__$86.elem)] = mixItem__$86.js === true ? {} : mixItem__$86.js;
                            addJSInitClass__$79 || (addJSInitClass__$79 = mixBlock__$88 && !mixItem__$86.elem);
                        }
                        if (hasItem__$87 && !visited__$83[visitedKey__$84(mixBlock__$88, mixElem__$89)]) {
                            visited__$83[visitedKey__$84(mixBlock__$88, mixElem__$89)] = true;
                            var __$r__$91;
                            var __$l6__$92 = $$mode;
                            $$mode = "mix";
                            var __$l7__$93 = $$block;
                            $$block = mixBlock__$88;
                            var __$l8__$94 = $$elem;
                            $$elem = mixElem__$89;
                            __$r__$91 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$92;
                            $$block = __$l7__$93;
                            $$elem = __$l8__$94;
                            var nestedMix__$90 = __$r__$91;
                            if (nestedMix__$90) {
                                for (var j__$95 = 0; j__$95 < nestedMix__$90.length; j__$95++) {
                                    var nestedItem__$96 = nestedMix__$90[j__$95];
                                    if (!nestedItem__$96.block && !nestedItem__$96.elem || !visited__$83[visitedKey__$84(nestedItem__$96.block, nestedItem__$96.elem)]) {
                                        nestedItem__$96._block = mixBlock__$88;
                                        nestedItem__$96._elem = mixElem__$89;
                                        mix__$80.splice(i__$85 + 1, 0, nestedItem__$96);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$76 && (__$ctx._str += isBEM__$60 ? " " + cls__$76 : cls__$76);
            __$ctx._str += addJSInitClass__$79 ? ' i-bem"' : '"';
        }
        if (isBEM__$60 && jsParams__$70) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$70)) + '"';
        }
        var __$r__$98;
        var __$l9__$99 = $$mode;
        $$mode = "attrs";
        __$r__$98 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$99;
        var attrs__$97 = __$r__$98;
        attrs__$97 = __$ctx.extend(attrs__$97, ctx__$59.attrs);
        if (attrs__$97) {
            var name__$100, attr__$101;
            for (name__$100 in attrs__$97) {
                attr__$101 = attrs__$97[name__$100];
                if (typeof attr__$101 === "undefined") continue;
                __$ctx._str += " " + name__$100 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$101) ? attr__$101 : __$ctx.reapply(attr__$101)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$61)) {
        __$ctx._str += "/>";
    } else {
        tag__$61 && (__$ctx._str += ">");
        var __$r__$103;
        var __$l10__$104 = $$mode;
        $$mode = "content";
        __$r__$103 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$104;
        var content__$102 = __$r__$103;
        if (content__$102 || content__$102 === 0) {
            isBEM__$60 = vBlock__$66 || $$elem;
            var __$r__$105;
            var __$l11__$106 = $$mode;
            $$mode = "";
            var __$l12__$107 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$108 = __$ctx.position;
            __$ctx.position = isBEM__$60 ? 1 : __$ctx.position;
            var __$l14__$109 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$60 ? 1 : __$ctx._listLength;
            var __$l15__$110 = __$ctx.ctx;
            __$ctx.ctx = content__$102;
            __$r__$105 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$106;
            __$ctx._notNewList = __$l12__$107;
            __$ctx.position = __$l13__$108;
            __$ctx._listLength = __$l14__$109;
            __$ctx.ctx = __$l15__$110;
        }
        tag__$61 && (__$ctx._str += "</" + tag__$61 + ">");
    }
    res__$62 = __$ctx._str;
    __$r__$64 = undefined;
    __$ctx._str = __$l0__$65;
    __$ctx._buf.push(res__$62);
    return;
}

function __$b55(__$ctx, __$ref) {
    var __$r__$112;
    var __$l0__$113 = $$mode;
    $$mode = "";
    var __$l1__$114 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$116;
    var __$l2__$117 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$116 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$117;
    __$r__$112 = __$r__$116;
    $$mode = __$l0__$113;
    __$ctx.ctx = __$l1__$114;
    return;
}

function __$b56(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$118 = __$ctx.ctx;
    if (ctx__$118 && ctx__$118 !== true || ctx__$118 === 0) {
        __$ctx._str += ctx__$118 + "";
    }
    return;
}

function __$b57(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b58(__$ctx, __$ref) {
    var ctx__$119 = __$ctx.ctx, len__$120 = ctx__$119.length, i__$121 = 0, prevPos__$122 = __$ctx.position, prevNotNewList__$123 = __$ctx._notNewList;
    if (prevNotNewList__$123) {
        __$ctx._listLength += len__$120 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$120;
    }
    __$ctx._notNewList = true;
    while (i__$121 < len__$120) (function __$lb__$124() {
        var __$r__$125;
        var __$l0__$126 = __$ctx.ctx;
        __$ctx.ctx = ctx__$119[i__$121++];
        __$r__$125 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$126;
        return __$r__$125;
    })();
    prevNotNewList__$123 || (__$ctx.position = prevPos__$122);
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$127 = __$ctx.ctx.block, vElem__$128 = __$ctx.ctx.elem, block__$129 = __$ctx._currBlock || $$block;
    var __$r__$131;
    var __$l0__$132 = $$mode;
    $$mode = "default";
    var __$l1__$133 = $$block;
    $$block = vBlock__$127 || (vElem__$128 ? block__$129 : undefined);
    var __$l2__$134 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$127 || vElem__$128 ? undefined : block__$129;
    var __$l3__$135 = $$elem;
    $$elem = vElem__$128;
    var __$l4__$136 = $$mods;
    $$mods = vBlock__$127 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$137 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$131 = undefined;
    $$mode = __$l0__$132;
    $$block = __$l1__$133;
    __$ctx._currBlock = __$l2__$134;
    $$elem = __$l3__$135;
    $$mods = __$l4__$136;
    $$elemMods = __$l5__$137;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            var __$r = __$b1(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
            return {
                style: "max-width:" + __$ctx._button.textMaxWidth + "px"
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b4(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        if ($$elem === "control") {
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            if (__$ctx.ctx.url) {
                return {
                    src: __$ctx.ctx.url
                };
            }
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return {
                    rel: "stylesheet",
                    href: __$ctx.ctx.url
                };
            }
        } else if (__$t === "favicon") {
            return {
                rel: "shortcut icon",
                href: __$ctx.ctx.url
            };
        }
    }
    return undefined;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "checkbox") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        } else if (__$t === "head") {
            return "head";
        } else if (__$t === "favicon") {
            return "link";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        }
        if (!$$elem) {
            return "body";
        }
    }
    return undefined;
    return __$ref;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);