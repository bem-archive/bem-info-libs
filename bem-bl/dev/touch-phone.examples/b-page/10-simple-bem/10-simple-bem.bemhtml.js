var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
function __$wrapThis(ctx) {
ctx._mode = $$mode;
ctx.block = $$block;
ctx.elem = $$elem;
ctx.elemMods = $$elemMods;
ctx.mods = $$mods;
return ctx;
};
function __$wrapApply(applyc, ctx) {
var __t$_mode = $$mode;
$$mode = ctx._mode;
var __t$block = $$block;
$$block = ctx.block;
var __t$elem = $$elem;
$$elem = ctx.elem;
var __t$elemMods = $$elemMods;
$$elemMods = ctx.elemMods;
var __t$mods = $$mods;
$$mods = ctx.mods;
var r = applyc(ctx);
$$mode = __t$_mode;
$$block = __t$block;
$$elem = __t$elem;
$$elemMods = __t$elemMods;
$$mods = __t$mods;
return r;
};
  var cache,
      exports = {},
      xjst = (function (exports) {
    !function oninit() {
        (function (global, bem_) {
            if (bem_.I18N) {
                return undefined;
            } else {
                undefined;
            }
            global.BEM = bem_;
            var i18n = bem_.I18N = function (keyset, key) {
                    return key;
                };
            i18n.keyset = function () {
                return i18n;
            };
            i18n.key = function (key) {
                return key;
            };
            i18n.lang = function () {
                return undefined;
            };
        }(this, typeof BEM === 'undefined' ? {} : BEM));
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
        (function (BEM, undefined) {
            var MOD_DELIM = '_', ELEM_DELIM = '__', NAME_PATTERN = '[a-zA-Z0-9-]+';
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
                buildModPostfix: function (modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildClass: function (block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == 'string') {
                        if (typeof modVal != 'string') {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != 'undefined') {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != 'string') {
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
                    return buffer ? res : res.join('');
                },
                buildModsClasses: function (block, elem, mods, buffer) {
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
                            modVal = mods[modName] + '';
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(' ');
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join('');
                },
                buildClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join('');
                }
            };
        }(BEM_));
        var buildEscape = function () {
                var ts = {
                        '"': '&quot;',
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;'
                    }, f = function (t) {
                        return ts[t] || t;
                    };
                return function (r) {
                    r = new RegExp(r, 'g');
                    return function (s) {
                        return ('' + s).replace(r, f);
                    };
                };
            }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? '' : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === '[object Array]';
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === 'string' || t === 'number' || t === 'boolean';
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
        BEMContext.prototype.identify = function () {
            var cnt = 0, id = BEM_['__id'] = +new Date(), expando = '__' + id, get = function () {
                    return 'uniq' + id + ++cnt;
                };
            return function (obj, onlyGet) {
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
        BEMContext.prototype.xmlEscape = buildEscape('[&<>]');
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
            return ctx._buf.join('');
        };
    }();
    return exports;
    exports.apply = apply;
    function apply() {
        return applyc(this);
    }
    function applyc(__$ctx) {
        var __this = __$ctx;
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r13, __r14, __r15, __r16, __r17, __r18, __r19, __r20, __r21, __r22, __r23, __r24, __r25;
        if ($$block === 'b-page' && $$elem === 'js' && $$mode === 'attrs') {
            return __$ctx.ctx.url ? { src: __$ctx.ctx.url } : {};
            return;
        }
        if ($$block === 'b-page' && $$elem === 'js' && $$mode === 'tag') {
            return 'script';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'js' && $$mode === 'bem') {
            return false;
            return;
        }
        if ($$block === 'b-page' && $$elem === 'css' && !__$ctx.ctx.url === false && $$mode === 'attrs') {
            return {
                rel: 'stylesheet',
                href: __$ctx.ctx.url
            };
            return;
        }
        if ($$block === 'b-page' && $$elem === 'css' && !__$ctx.ctx.url === false && $$mode === 'tag') {
            return 'link';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'css' && !__$ctx.ctx.url === false && !__$ctx.ctx.ie === false && !!__$ctx._IE === false && $$mode === 'default') {
            {
                '';
                var __r0 = $$mode;
                $$mode = '';
                var __r1 = __$ctx._IE;
                __$ctx._IE = true;
                var __r2 = __$ctx.ctx;
                __$ctx.ctx = [
                    '<!--[if gte IE 9]>',
                    __$ctx.ctx,
                    '<![endif]-->'
                ];
                applyc(__$ctx);
                $$mode = __r0;
                __$ctx._IE = __r1;
                __$ctx.ctx = __r2;
                '';
            }
            return;
        }
        if ($$block === 'b-page' && $$elem === 'css' && !__$ctx.ctx.url === false && !!__$ctx.ctx.ie === false && !!__$ctx._notIE === false && $$mode === 'default') {
            {
                '';
                var __r0 = $$mode;
                $$mode = '';
                var __r1 = __$ctx._notIE;
                __$ctx._notIE = true;
                var __r2 = __$ctx.ctx;
                __$ctx.ctx = [__$ctx.ctx];
                applyc(__$ctx);
                $$mode = __r0;
                __$ctx._notIE = __r1;
                __$ctx.ctx = __r2;
                '';
            }
            return;
        }
        if ($$block === 'b-page' && $$elem === 'css' && $$mode === 'tag') {
            return 'style';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'css' && $$mode === 'bem') {
            return false;
            return;
        }
        if ($$block === 'b-page' && $$elem === 'meta' && $$mode === 'attrs') {
            return __$ctx.ctx.attrs;
            return;
        }
        if ($$block === 'b-page' && $$elem === 'meta' && $$mode === 'tag') {
            return 'meta';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'meta' && $$mode === 'bem') {
            return false;
            return;
        }
        if ($$block === 'b-page' && $$elem === 'icon' && $$mode === 'default') {
            {
                '';
                var __r0 = $$mode;
                $$mode = '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = [
                    __$ctx.ctx.src16 && {
                        elem: 'link',
                        attrs: {
                            rel: 'shortcut icon',
                            href: __$ctx.ctx.src16
                        }
                    },
                    __$ctx.ctx.src152 && {
                        elem: 'link',
                        attrs: {
                            rel: 'apple-touch-icon-precomposed',
                            sizes: '152x152',
                            href: __$ctx.ctx.src152
                        }
                    },
                    __$ctx.ctx.src144 && {
                        elem: 'link',
                        attrs: {
                            rel: 'apple-touch-icon-precomposed',
                            sizes: '144x144',
                            href: __$ctx.ctx.src144
                        }
                    },
                    __$ctx.ctx.src120 && {
                        elem: 'link',
                        attrs: {
                            rel: 'apple-touch-icon-precomposed',
                            sizes: '120x120',
                            href: __$ctx.ctx.src120
                        }
                    },
                    __$ctx.ctx.src114 && {
                        elem: 'link',
                        attrs: {
                            rel: 'apple-touch-icon-precomposed',
                            sizes: '114x114',
                            href: __$ctx.ctx.src114
                        }
                    },
                    __$ctx.ctx.src76 && {
                        elem: 'link',
                        attrs: {
                            rel: 'apple-touch-icon-precomposed',
                            sizes: '76x76',
                            href: __$ctx.ctx.src76
                        }
                    },
                    __$ctx.ctx.src72 && {
                        elem: 'link',
                        attrs: {
                            rel: 'apple-touch-icon-precomposed',
                            sizes: '72x72',
                            href: __$ctx.ctx.src72
                        }
                    },
                    __$ctx.ctx.src57 && {
                        elem: 'link',
                        attrs: {
                            rel: 'apple-touch-icon-precomposed',
                            href: __$ctx.ctx.src57
                        }
                    }
                ];
                applyc(__$ctx);
                $$mode = __r0;
                __$ctx.ctx = __r1;
                '';
            }
            return;
        }
        if ($$block === 'b-page' && $$elem === 'link' && $$mode === 'tag') {
            return 'link';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'link' && $$mode === 'bem') {
            return false;
            return;
        }
        if ($$block === 'b-page' && $$elem === 'body' && $$mode === 'tag') {
            return 'body';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'head' && $$mode === 'tag') {
            return 'head';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'head' && $$mode === 'bem') {
            return false;
            return;
        }
        if ($$block === 'b-page' && $$elem === 'root' && $$mode === 'cls') {
            return 'i-ua_js_no i-ua_css_standard';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'root' && $$mode === 'tag') {
            return 'html';
            return;
        }
        if ($$block === 'b-page' && $$elem === 'root' && $$mode === 'bem') {
            return false;
            return;
        }
        if (!!$$elem === false && $$block === 'b-page' && $$mode === 'default') {
            {
                __$ctx._buf.push('<!DOCTYPE html>');
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx.ctx;
                    __$ctx.ctx = {
                        elem: 'root',
                        content: [
                            {
                                elem: 'head',
                                content: [
                                    {
                                        elem: 'meta',
                                        attrs: { charset: 'utf-8' }
                                    },
                                    {
                                        tag: 'title',
                                        content: __$ctx.ctx.title
                                    },
                                    {
                                        elem: 'meta',
                                        attrs: {
                                            name: 'viewport',
                                            content: __$ctx.ctx.zoom ? 'width=device-width,initial-scale=1' : 'width=device-width,maximum-scale=1,initial-scale=1,user-scalable=0'
                                        }
                                    },
                                    {
                                        elem: 'meta',
                                        attrs: {
                                            name: 'format-detection',
                                            content: 'telephone=no'
                                        }
                                    },
                                    {
                                        elem: 'link',
                                        attrs: {
                                            name: 'apple-mobile-web-app-capable',
                                            content: 'yes'
                                        }
                                    },
                                    { block: 'i-ua' },
                                    __$ctx.ctx.head
                                ]
                            },
                            {
                                elem: 'body',
                                mix: [
                                    __$ctx.ctx,
                                    {
                                        block: 'i-ua',
                                        js: true
                                    }
                                ].concat(__$ctx.ctx.mix || []),
                                content: __$ctx.ctx.content
                            }
                        ]
                    };
                    applyc(__$ctx);
                    $$mode = __r0;
                    __$ctx.ctx = __r1;
                    '';
                }
            }
            return;
        }
        if (!!$$elem === false && $$block === 'i-ua' && $$mode === 'content') {
            return [
                ';(function(d,e,c,r){',
                'e=d.documentElement;',
                'c="className";',
                'r="replace";',
                'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");',
                'if(d.compatMode!="CSS1Compat")',
                'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',
                '})(document);'
            ].join('');
            return;
        }
        if (!!$$elem === false && $$block === 'i-ua' && $$mode === 'bem') {
            return false;
            return;
        }
        if (!!$$elem === false && $$block === 'i-ua' && $$mode === 'tag') {
            return 'script';
            return;
        }
        if ($$block === 'i-jquery' && $$elem === 'core' && !(__$ctx['__$anflg1'] !== true) === false && $$mode === 'default') {
            return '', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
                block: 'b-page',
                elem: 'js',
                url: '//yastatic.net/jquery/1.8.3/jquery.min.js'
            }, __r2 = $$mode, $$mode = '', __r3 = applyc(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg1'] = __r0, '', __r4;
            return;
        }
        if ($$block === 'i-bem' && $$elem === 'i18n' && $$mode === 'default') {
            {
                if (!__$ctx.ctx) {
                    return '';
                } else {
                    undefined;
                }
                var _$fctx = __$ctx.ctx, _$fkeyset = _$fctx.keyset, _$fkey = _$fctx.key, _$fparams = _$fctx.params || {};
                if (!(_$fkeyset || _$fkey)) {
                    return '';
                } else {
                    undefined;
                }
                if (_$fctx.content) {
                    var _$fcnt;
                    _$fparams.content = (_$fcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$fcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$fctx.content, __r3 = applyc(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$fcnt.join(''));
                } else {
                    undefined;
                }
                __$ctx._buf.push(BEM.I18N(_$fkeyset, _$fkey, _$fparams));
            }
            return;
        }
        if ($$mode === 'content') {
            return __$ctx.ctx.content;
            return;
        }
        if ($$mode === 'mix') {
            return undefined;
            return;
        }
        if ($$mode === 'bem') {
            return undefined;
            return;
        }
        if ($$mode === 'jsAttr') {
            return undefined;
            return;
        }
        if ($$mode === 'js') {
            return undefined;
            return;
        }
        if ($$mode === 'cls') {
            return undefined;
            return;
        }
        if ($$mode === 'attrs') {
            return undefined;
            return;
        }
        if ($$mode === 'tag') {
            return undefined;
            return;
        }
        if (!__$ctx.ctx === false && !!__$ctx._.isSimple(__$ctx.ctx) === false && !__$ctx.ctx.link === false) {
            {
                function _$6follow() {
                    if (this.ctx.link === 'no-follow') {
                        return undefined;
                    } else {
                        undefined;
                    }
                    var data = this._links[this.ctx.link];
                    return '', __r0 = this.ctx, this.ctx = data, __r1 = __$wrapApply(applyc, this), this.ctx = __r0, '', __r1;
                }
                if (!cache || !__$ctx._cacheLog) {
                    return _$6follow.call(__$wrapThis(__$ctx));
                } else {
                    undefined;
                }
                var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
                __$ctx._cachePos = __$ctx._buf.length;
                __$ctx._cacheLog.push(_$6contents, {
                    log: __$ctx._localLog.slice(),
                    link: __$ctx.ctx.link
                });
                var _$6res = _$6follow.call(__$wrapThis(__$ctx));
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
                        if (typeof _$5cached.log[_$5i] === 'string') {
                            __$ctx._buf.push(_$5cached.log[_$5i]);
                            continue;
                        } else {
                            undefined;
                        }
                        var _$5log = _$5cached.log[_$5i], _$5reverseLog;
                        _$5reverseLog = _$5log.log.map(function (entry) {
                            return {
                                key: entry[0],
                                value: _$5setProperty(this, entry[0], entry[1])
                            };
                        }, __$wrapThis(__$ctx)).reverse();
                        {
                            '';
                            var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                            __r0.cache = null;
                            var __r2 = __$ctx._cacheLog;
                            __$ctx._cacheLog = null;
                            var __r3 = __$ctx.ctx, __r4 = __r3.link;
                            __r3.link = _$5log.link;
                            applyc(__$ctx);
                            __r0.cache = __r1;
                            __$ctx._cacheLog = __r2;
                            __r3.link = __r4;
                            '';
                        }
                        undefined;
                        _$5reverseLog.forEach(function (entry) {
                            _$5setProperty(this, entry.key, entry.value);
                        }, __$wrapThis(__$ctx));
                    }
                    __$ctx._links = _$5oldLinks;
                    return _$5cached.res;
                } else {
                    undefined;
                }
                var _$5cacheLog = [], _$5res;
                {
                    '';
                    var __r5 = __$ctx.ctx, __r6 = __r5.cache;
                    __r5.cache = null;
                    var __r7 = __$ctx._cachePos;
                    __$ctx._cachePos = __$ctx._buf.length;
                    var __r8 = __$ctx._cacheLog;
                    __$ctx._cacheLog = _$5cacheLog;
                    var __r9 = __$ctx._localLog;
                    __$ctx._localLog = [];
                    {
                        _$5res = applyc(__$ctx);
                        var _$5tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                        if (_$5tail) {
                            _$5cacheLog.push(_$5tail);
                        } else {
                            undefined;
                        }
                    }
                    __r5.cache = __r6;
                    __$ctx._cachePos = __r7;
                    __$ctx._cacheLog = __r8;
                    __$ctx._localLog = __r9;
                    '';
                }
                cache.set(__$ctx.ctx.cache, {
                    log: _$5cacheLog,
                    res: _$5res
                });
                return _$5res;
            }
            return;
        }
        if ($$mode === 'default') {
            {
                var _$4BEM_ = __$ctx.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
                _$4tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = applyc(__$ctx), $$mode = __r0, '', __r1);
                typeof _$4tag != 'undefined' || (_$4tag = _$4v.tag);
                typeof _$4tag != 'undefined' || (_$4tag = 'div');
                if (_$4tag) {
                    var _$4jsParams, _$4js;
                    if ($$block && _$4v.js !== false) {
                        _$4js = ('', __r4 = $$mode, $$mode = 'js', __r5 = applyc(__$ctx), $$mode = __r4, '', __r5);
                        _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                        _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass($$block, _$4v.elem)] = _$4js);
                    } else {
                        undefined;
                    }
                    _$4buf.push('<', _$4tag);
                    var _$4isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = applyc(__$ctx), $$mode = __r6, '', __r7);
                    typeof _$4isBEM != 'undefined' || (_$4isBEM = typeof _$4v.bem != 'undefined' ? _$4v.bem : _$4v.block || _$4v.elem);
                    var _$4cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = applyc(__$ctx), $$mode = __r8, '', __r9);
                    _$4cls || (_$4cls = _$4v.cls);
                    var _$4addJSInitClass = _$4v.block && _$4jsParams && !_$4v.elem;
                    if (_$4isBEM || _$4cls) {
                        _$4buf.push(' class="');
                        if (_$4isBEM) {
                            _$4BEM_.INTERNAL.buildClasses($$block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                            var _$4mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = applyc(__$ctx), $$mode = __r10, '', __r11);
                            _$4v.mix && (_$4mix = _$4mix ? [].concat(_$4mix, _$4v.mix) : _$4v.mix);
                            if (_$4mix) {
                                var _$4visited = {};
                                function _$4visitedKey(block, elem) {
                                    return (block || '') + '__' + (elem || '');
                                }
                                _$4visited[_$4visitedKey($$block, $$elem)] = true;
                                if (!__$ctx._.isArray(_$4mix)) {
                                    _$4mix = [_$4mix];
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
                                    var _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || $$block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || $$elem, _$4mods = _$4mixItem.mods || $$mods, _$4elemMods = _$4mixItem.elemMods || {};
                                    _$4hasItem && _$4buf.push(' ');
                                    _$4BEM_.INTERNAL[_$4hasItem ? 'buildClasses' : 'buildModsClasses'](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : $$elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                                    if (_$4mixItem.js) {
                                        (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                        _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                                    } else {
                                        undefined;
                                    }
                                    if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                        _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                        var _$4nestedMix = ('', __r12 = $$block, $$block = _$4block, __r13 = $$elem, $$elem = _$4elem, __r14 = $$mods, $$mods = _$4mods, __r15 = $$elemMods, $$elemMods = _$4elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = applyc(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
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
                        _$4cls && _$4buf.push(_$4isBEM ? ' ' : '', _$4cls);
                        _$4addJSInitClass && _$4buf.push(' i-bem');
                        _$4buf.push('"');
                    } else {
                        undefined;
                    }
                    if (_$4jsParams) {
                        var _$4jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = applyc(__$ctx), $$mode = __r20, '', __r21);
                        _$4buf.push(' ', _$4jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
                    } else {
                        undefined;
                    }
                    var _$4attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = applyc(__$ctx), $$mode = __r22, '', __r23);
                    _$4attrs = __$ctx._.extend(_$4attrs, _$4v.attrs);
                    if (_$4attrs) {
                        var _$4name;
                        for (_$4name in _$4attrs) {
                            if (_$4attrs[_$4name] === undefined) {
                                continue;
                            } else {
                                undefined;
                            }
                            _$4buf.push(' ', _$4name, '="', __$ctx._.attrEscape(_$4attrs[_$4name]), '"');
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                if (__$ctx._.isShortTag(_$4tag)) {
                    _$4buf.push('/>');
                } else {
                    _$4tag && _$4buf.push('>');
                    var _$4content = ('', __r24 = $$mode, $$mode = 'content', __r25 = applyc(__$ctx), $$mode = __r24, '', __r25);
                    if (_$4content || _$4content === 0) {
                        var _$4isBEM = $$block || $$elem;
                        {
                            '';
                            var __r26 = __$ctx._notNewList;
                            __$ctx._notNewList = false;
                            var __r27 = __$ctx.position;
                            __$ctx.position = _$4isBEM ? 1 : __$ctx.position;
                            var __r28 = __$ctx._listLength;
                            __$ctx._listLength = _$4isBEM ? 1 : __$ctx._listLength;
                            var __r29 = __$ctx.ctx;
                            __$ctx.ctx = _$4content;
                            var __r30 = $$mode;
                            $$mode = '';
                            applyc(__$ctx);
                            __$ctx._notNewList = __r26;
                            __$ctx.position = __r27;
                            __$ctx._listLength = __r28;
                            __$ctx.ctx = __r29;
                            $$mode = __r30;
                            '';
                        }
                        undefined;
                    } else {
                        undefined;
                    }
                    _$4tag && _$4buf.push('</', _$4tag, '>');
                }
            }
            return;
        }
        if ($$mode === '' && !__$ctx._.isSimple(__$ctx.ctx) === false) {
            {
                __$ctx._listLength--;
                var _$3ctx = __$ctx.ctx;
                (_$3ctx && _$3ctx !== true || _$3ctx === 0) && __$ctx._buf.push(_$3ctx);
            }
            return;
        }
        if ($$mode === '' && !!__$ctx.ctx === false) {
            __$ctx._listLength--;
            return;
        }
        if ($$mode === '' && !__$ctx._.isArray(__$ctx.ctx) === false) {
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
                        '';
                        var __r0 = __$ctx.ctx;
                        __$ctx.ctx = _$1newCtx == null ? '' : _$1newCtx;
                        applyc(__$ctx);
                        __$ctx.ctx = __r0;
                        '';
                    }
                    undefined;
                }
                _$1prevNotNewList || (__$ctx.position = _$1prevPos);
            }
            return;
        }
        if ($$mode === '' && !true === false) {
            {
                var _$0vBlock = __$ctx.ctx.block, _$0vElem = __$ctx.ctx.elem, _$0block = __$ctx._currBlock || $$block;
                __$ctx.ctx || (__$ctx.ctx = {});
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = 'default';
                    var __r1 = __$ctx._links;
                    __$ctx._links = __$ctx.ctx.links || __$ctx._links;
                    var __r2 = $$block;
                    $$block = _$0vBlock || (_$0vElem ? _$0block : undefined);
                    var __r3 = __$ctx._currBlock;
                    __$ctx._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
                    var __r4 = $$elem;
                    $$elem = __$ctx.ctx.elem;
                    var __r5 = $$mods;
                    $$mods = _$0vBlock ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
                    var __r6 = $$elemMods;
                    $$elemMods = __$ctx.ctx.elemMods || {};
                    {
                        $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                        applyc(__$ctx);
                        undefined;
                    }
                    $$mode = __r0;
                    __$ctx._links = __r1;
                    $$block = __r2;
                    __$ctx._currBlock = __r3;
                    $$elem = __r4;
                    $$mods = __r5;
                    $$elemMods = __r6;
                    '';
                }
            }
            return;
        }
    }
    return exports;
}(typeof exports === 'undefined' ? {} : exports));;
  return function(options) {
    var context = this;
    if (!options) options = {};
    cache = options.cache;
    return function() {
      if (context === this) {
        context = undefined;
$$mode = ''
$$block = ''
$$elem = ''
$$elemMods = ''
$$mods = ''
      } else {
$$mode = '';
$$block = '';
$$elem = '';
$$elemMods = '';
$$mods = '';
      }
      return xjst.apply.call(
[context]
      );
    }.call(null);
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);