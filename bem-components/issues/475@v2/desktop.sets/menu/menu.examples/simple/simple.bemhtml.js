(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="default"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="attrs"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="tag"){var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="content"){var __$r=__$g3(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="mix"){var __$t=__$ctx.block;if(__$t==="menu"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}}else if(__$t==="button"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}}__$ctx.__$a=0;return undefined}else if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="menu"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["focused"]===true&&__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$24;__$ctx.__$a=6;__$r__$24=applyc(__$ctx,__$ref);return __$r__$24}(),{live:false});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return true}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="menu-item"){if(!__$ctx.elem){__$ctx.__$a=0;return{val:__$ctx.ctx.val}}}else if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["focused"]===true&&__$ctx.__$a!==3){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$12;__$ctx.__$a=3;__$r__$12=applyc(__$ctx,__$ref);return __$r__$12}(),{live:false});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==15){__$ctx.__$a=0;var __$r=__$b67(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b68(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b69(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b70(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b71(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply},function(){!function(global,bem_){if(bem_.I18N){return}global.BEM=bem_;var i18n=global.BEM.I18N=function(keyset,key){return key};i18n.keyset=function(){return i18n};i18n.key=function(key){return key};i18n.lang=function(){return}}(this,typeof BEM==="undefined"?{}:BEM)}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._menuItemDisabled=undefined;ctx._button=undefined;ctx._menuTheme=undefined;ctx._mode=undefined;ctx.ctx=undefined;ctx._ieCommented=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;if(!__$ctx.ctx)return"";var ctx__$0=__$ctx.ctx,keyset__$1=ctx__$0.keyset,key__$2=ctx__$0.key,params__$3=ctx__$0.params||{};if(!(keyset__$1||key__$2))return"";if(ctx__$0.content!=null){params__$3.content=exports.apply(ctx__$0.content)}__$ctx._buf.push(BEM.I18N(keyset__$1,key__$2,params__$3));return}function __$b2(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$27;var __$l0__$28=__$ctx._menuTheme;__$ctx._menuTheme=__$ctx.mods.theme;var __$r__$29;__$ctx.__$a=8;__$r__$29=applyc(__$ctx,__$ref);__$r__$27=__$r__$29;__$ctx._menuTheme=__$l0__$28;delete __$ctx._menuTheme;return}function __$b3(__$ctx,__$ref){__$ctx.__$a=0;delete __$ctx._menuItemDisabled;__$ctx.mods.disabled=true;applyc(__$ctx,__$ref);return}function __$b4(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$10;var __$l0__$11=__$ctx._menuItemDisabled;__$ctx._menuItemDisabled=true;__$r__$10=applyc(__$ctx,__$ref);__$ctx._menuItemDisabled=__$l0__$11;return}function __$b5(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.mods.theme=__$ctx._menuTheme;var __$r__$25;__$ctx.__$a=7;__$r__$25=applyc(__$ctx,__$ref);return}function __$b6(__$ctx,__$ref){__$ctx.__$a=0;var mods__$20=__$ctx.mods;var __$r__$21;var __$l0__$22=__$ctx._button;__$ctx._button=__$ctx.ctx;var __$r__$23;__$ctx.__$a=5;__$r__$23=applyc(__$ctx,__$ref);__$r__$21=__$r__$23;__$ctx._button=__$l0__$22;return}function __$b7(__$ctx,__$ref){__$ctx.__$a=0;var url__$31=__$ctx.ctx.url;var __$r__$32;var __$l0__$33=__$ctx._mode;__$ctx._mode="";var __$l1__$34=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:url__$31+".ie"+v+".css",ie:"IE "+v}});var __$r__$35;__$ctx.__$a=10;__$r__$35=applyc(__$ctx,__$ref);__$r__$32=__$r__$35;__$ctx._mode=__$l0__$33;__$ctx.ctx=__$l1__$34;return}function __$b8(__$ctx,__$ref){__$ctx.__$a=0;var ie__$36=__$ctx.ctx.ie,hideRule__$37=!ie__$36?["gt IE 9","<!-->","<!--"]:ie__$36==="!IE"?[ie__$36,"<!-->","<!--"]:[ie__$36,"",""];var __$r__$38;var __$l0__$39=__$ctx._mode;__$ctx._mode="";var __$l3__$40=__$ctx.ctx;var __$l1__$41=__$l3__$40._ieCommented;__$l3__$40._ieCommented=true;var __$l2__$42=__$ctx.ctx;__$ctx.ctx=["<!--[if "+hideRule__$37[0]+"]>"+hideRule__$37[1],__$ctx.ctx,hideRule__$37[2]+"<![endif]-->"];__$r__$38=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$39;__$l3__$40._ieCommented=__$l1__$41;__$ctx.ctx=__$l2__$42;return}function __$b9(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx.elem=null;var __$r__$44;__$ctx.__$a=12;__$r__$44=applyc(__$ctx,__$ref);return}function __$b10(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$46=__$ctx.ctx;var __$r__$47;var __$l0__$48=__$ctx._mode;__$ctx._mode="";var __$l1__$49=__$ctx.ctx;__$ctx.ctx=[ctx__$46.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$46.title},{block:"ua"},ctx__$46.head,ctx__$46.styles,ctx__$46.favicon?{elem:"favicon",url:ctx__$46.favicon}:""]},__$ctx.extend(ctx__$46,{elem:"body"})]}];var __$r__$50;__$ctx.__$a=14;__$r__$50=applyc(__$ctx,__$ref);__$r__$47=__$r__$50;__$ctx._mode=__$l0__$48;__$ctx.ctx=__$l1__$49;return}function __$b11(__$ctx,__$ref){__$ctx.__$a=0;var _this__$51=__$ctx,BEM_INTERNAL__$52=_this__$51.BEM.INTERNAL,ctx__$53=__$ctx.ctx,isBEM__$54,tag__$55,res__$56;var __$r__$57;var __$l0__$58=__$ctx._str;__$ctx._str="";var vBlock__$59=__$ctx.block;var __$r__$60;var __$l1__$61=__$ctx._mode;__$ctx._mode="tag";__$r__$60=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$61;tag__$55=__$r__$60;typeof tag__$55!=="undefined"||(tag__$55=ctx__$53.tag);typeof tag__$55!=="undefined"||(tag__$55="div");if(tag__$55){var jsParams__$62,js__$63;if(vBlock__$59&&ctx__$53.js!==false){var __$r__$64;var __$l2__$65=__$ctx._mode;__$ctx._mode="js";__$r__$64=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$65;js__$63=__$r__$64;js__$63=js__$63?__$ctx.extend(ctx__$53.js,js__$63===true?{}:js__$63):ctx__$53.js===true?{}:ctx__$53.js;js__$63&&((jsParams__$62={})[BEM_INTERNAL__$52.buildClass(vBlock__$59,ctx__$53.elem)]=js__$63)}__$ctx._str+="<"+tag__$55;var __$r__$66;var __$l3__$67=__$ctx._mode;__$ctx._mode="bem";__$r__$66=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$67;isBEM__$54=__$r__$66;typeof isBEM__$54!=="undefined"||(isBEM__$54=typeof ctx__$53.bem!=="undefined"?ctx__$53.bem:ctx__$53.block||ctx__$53.elem);var __$r__$69;var __$l4__$70=__$ctx._mode;__$ctx._mode="cls";__$r__$69=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$70;var cls__$68=__$r__$69;cls__$68||(cls__$68=ctx__$53.cls);var addJSInitClass__$71=ctx__$53.block&&jsParams__$62;if(isBEM__$54||cls__$68){__$ctx._str+=' class="';if(isBEM__$54){__$ctx._str+=BEM_INTERNAL__$52.buildClasses(vBlock__$59,ctx__$53.elem,ctx__$53.elemMods||ctx__$53.mods);var __$r__$73;var __$l5__$74=__$ctx._mode;__$ctx._mode="mix";__$r__$73=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$74;var mix__$72=__$r__$73;ctx__$53.mix&&(mix__$72=mix__$72?mix__$72.concat(ctx__$53.mix):ctx__$53.mix);if(mix__$72){var visited__$75={},visitedKey__$76=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$75[visitedKey__$76(vBlock__$59,__$ctx.elem)]=true;__$ctx.isArray(mix__$72)||(mix__$72=[mix__$72]);for(var i__$77=0;i__$77<mix__$72.length;i__$77++){var mixItem__$78=mix__$72[i__$77],hasItem__$79=mixItem__$78.block||mixItem__$78.elem,mixBlock__$80=mixItem__$78.block||mixItem__$78._block||_this__$51.block,mixElem__$81=mixItem__$78.elem||mixItem__$78._elem||_this__$51.elem;hasItem__$79&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$52[hasItem__$79?"buildClasses":"buildModsClasses"](mixBlock__$80,mixItem__$78.elem||mixItem__$78._elem||(mixItem__$78.block?undefined:_this__$51.elem),mixItem__$78.elemMods||mixItem__$78.mods);if(mixItem__$78.js){(jsParams__$62||(jsParams__$62={}))[BEM_INTERNAL__$52.buildClass(mixBlock__$80,mixItem__$78.elem)]=mixItem__$78.js===true?{}:mixItem__$78.js;addJSInitClass__$71||(addJSInitClass__$71=mixBlock__$80&&!mixItem__$78.elem)}if(hasItem__$79&&!visited__$75[visitedKey__$76(mixBlock__$80,mixElem__$81)]){visited__$75[visitedKey__$76(mixBlock__$80,mixElem__$81)]=true;var __$r__$83;var __$l6__$84=__$ctx._mode;__$ctx._mode="mix";var __$l7__$85=__$ctx.block;__$ctx.block=mixBlock__$80;var __$l8__$86=__$ctx.elem;__$ctx.elem=mixElem__$81;__$r__$83=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$84;__$ctx.block=__$l7__$85;__$ctx.elem=__$l8__$86;var nestedMix__$82=__$r__$83;if(nestedMix__$82){for(var j__$87=0;j__$87<nestedMix__$82.length;j__$87++){var nestedItem__$88=nestedMix__$82[j__$87];if(!nestedItem__$88.block&&!nestedItem__$88.elem||!visited__$75[visitedKey__$76(nestedItem__$88.block,nestedItem__$88.elem)]){nestedItem__$88._block=mixBlock__$80;nestedItem__$88._elem=mixElem__$81;mix__$72.splice(i__$77+1,0,nestedItem__$88)}}}}}}}cls__$68&&(__$ctx._str+=isBEM__$54?" "+cls__$68:cls__$68);__$ctx._str+=addJSInitClass__$71?' i-bem"':'"'}if(isBEM__$54&&jsParams__$62){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$62))+'"'}var __$r__$90;var __$l9__$91=__$ctx._mode;__$ctx._mode="attrs";__$r__$90=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$91;var attrs__$89=__$r__$90;attrs__$89=__$ctx.extend(attrs__$89,ctx__$53.attrs);if(attrs__$89){var name__$92,attr__$93;for(name__$92 in attrs__$89){attr__$93=attrs__$89[name__$92];if(typeof attr__$93==="undefined")continue;__$ctx._str+=" "+name__$92+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$93)?attr__$93:__$ctx.reapply(attr__$93))+'"'}}}if(__$ctx.isShortTag(tag__$55)){__$ctx._str+="/>"}else{tag__$55&&(__$ctx._str+=">");var __$r__$95;var __$l10__$96=__$ctx._mode;__$ctx._mode="content";__$r__$95=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$96;var content__$94=__$r__$95;if(content__$94||content__$94===0){isBEM__$54=vBlock__$59||__$ctx.elem;var __$r__$97;var __$l11__$98=__$ctx._mode;__$ctx._mode="";var __$l12__$99=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$100=__$ctx.position;__$ctx.position=isBEM__$54?1:__$ctx.position;var __$l14__$101=__$ctx._listLength;__$ctx._listLength=isBEM__$54?1:__$ctx._listLength;var __$l15__$102=__$ctx.ctx;__$ctx.ctx=content__$94;__$r__$97=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$98;__$ctx._notNewList=__$l12__$99;__$ctx.position=__$l13__$100;__$ctx._listLength=__$l14__$101;__$ctx.ctx=__$l15__$102}tag__$55&&(__$ctx._str+="</"+tag__$55+">")}res__$56=__$ctx._str;__$r__$57=undefined;__$ctx._str=__$l0__$58;__$ctx._buf.push(res__$56);return}function __$b16(__$ctx,__$ref){__$ctx.__$a=0;var attrs__$26={role:"menu"};__$ctx.mods.disabled||(attrs__$26.tabindex=0);return attrs__$26}function __$b17(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$6=__$ctx.ctx,attrs__$7={tabindex:ctx__$6.tabIndex},url__$8=ctx__$6.url,typeOfUrl__$9=typeof url__$8;typeOfUrl__$9!=="undefined"&&(attrs__$7.href=typeOfUrl__$9==="string"?url__$8:__$ctx.reapply(url__$8));typeof attrs__$7.href==="undefined"&&typeof attrs__$7.tabindex==="undefined"&&(attrs__$7.tabindex=0);ctx__$6.title&&(attrs__$7.title=ctx__$6.title);ctx__$6.target&&(attrs__$7.target=ctx__$6.target);return attrs__$7}function __$b19(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$15=__$ctx.ctx,attrs__$16={};ctx__$15.tag||(attrs__$16.type=ctx__$15.type||"button");ctx__$15.name&&(attrs__$16.name=ctx__$15.name);ctx__$15.val&&(attrs__$16.value=ctx__$15.val);__$ctx.mods.disabled&&(attrs__$16.disabled="disabled");return __$ctx._.extend(function(){var __$r__$17;__$ctx.__$a=4;__$r__$17=applyc(__$ctx,__$ref);return __$r__$17}(),attrs__$16)}function __$b20(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$18=__$ctx.ctx,attrs__$19={role:"button"};ctx__$18.tabIndex&&(attrs__$19.tabindex=ctx__$18.tabIndex);return attrs__$19}function __$b41(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$13=__$ctx.ctx,content__$14=[__$ctx.ctx.icon];ctx__$13.text&&content__$14.push({elem:"text",content:ctx__$13.text});return content__$14}function __$b67(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$103;var __$l0__$104=__$ctx._mode;__$ctx._mode="";var __$l1__$105=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$106;__$ctx.__$a=15;__$r__$106=applyc(__$ctx,__$ref);__$r__$103=__$r__$106;__$ctx._mode=__$l0__$104;__$ctx.ctx=__$l1__$105;return}function __$b68(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$107=__$ctx.ctx;if(ctx__$107&&ctx__$107!==true||ctx__$107===0){__$ctx._str+=ctx__$107+""}return}function __$b69(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b70(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$108=__$ctx.ctx,len__$109=ctx__$108.length,i__$110=0,prevPos__$111=__$ctx.position,prevNotNewList__$112=__$ctx._notNewList;if(prevNotNewList__$112){__$ctx._listLength+=len__$109-1}else{__$ctx.position=0;__$ctx._listLength=len__$109}__$ctx._notNewList=true;while(i__$110<len__$109)!function(){var __$r__$113;var __$l0__$114=__$ctx.ctx;__$ctx.ctx=ctx__$108[i__$110++];__$r__$113=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$114;return __$r__$113}();prevNotNewList__$112||(__$ctx.position=prevPos__$111);return}function __$b71(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$115=__$ctx.ctx.block,vElem__$116=__$ctx.ctx.elem,block__$117=__$ctx._currBlock||__$ctx.block;var __$r__$118;var __$l0__$119=__$ctx._mode;__$ctx._mode="default";var __$l1__$120=__$ctx.block;__$ctx.block=vBlock__$115||(vElem__$116?block__$117:undefined);var __$l2__$121=__$ctx._currBlock;__$ctx._currBlock=vBlock__$115||vElem__$116?undefined:block__$117;var __$l3__$122=__$ctx.elem;__$ctx.elem=vElem__$116;var __$l4__$123=__$ctx.mods;__$ctx.mods=vBlock__$115?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$124=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$118=undefined;__$ctx._mode=__$l0__$119;__$ctx.block=__$l1__$120;__$ctx._currBlock=__$l2__$121;__$ctx.elem=__$l3__$122;__$ctx.mods=__$l4__$123;__$ctx.elemMods=__$l5__$124;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="i-bem"){if(__$ctx.elem==="i18n"){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="menu"){if(!__$ctx.elem&&__$ctx.__$a!==8){__$ctx.__$a=0;var __$r=__$b2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="link"){if(!__$ctx.elem&&__$ctx._menuItemDisabled){__$ctx.__$a=0;var __$r=__$b3(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="menu-item"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods&&!__$ctx._menuItemDisabled&&__$ctx.mods["disabled"]===true&&__$ctx.mods["type"]==="link"){__$ctx.__$a=0;var __$r=__$b4(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx._menuTheme&&__$ctx.__$a!==7){__$ctx.__$a=0;var __$r=__$b5(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}else if(__$t==="button"){if(!__$ctx.elem&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=__$b6(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="css"){var __$t=!__$ctx.ctx._ieCommented;if(__$t){var __$t=__$ctx.ctx.hasOwnProperty("ie");if(__$t){if(__$ctx.ctx.ie===true&&__$ctx.__$a!==10){__$ctx.__$a=0;var __$r=__$b7(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b8(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}else if(__$t==="body"){if(__$ctx.__$a!==12){__$ctx.__$a=0;var __$r=__$b9(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}if(!__$ctx.elem&&__$ctx.__$a!==14){__$ctx.__$a=0;var __$r=__$b10(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b11(__$ctx,__$ref);if(__$r!==__$ref)return __$r;return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="icon"){if(!__$ctx.elem&&__$ctx.ctx.url){__$ctx.__$a=0;return{style:"background-image:url("+__$ctx.ctx.url+")"}}}else if(__$t==="menu"){var __$t=__$ctx.elem;if(__$t==="group-title"){__$ctx.__$a=0;return{role:"presentation"}}else if(__$t==="group"){if(typeof __$ctx.ctx.title!=="undefined"&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$5;__$ctx.__$a=2;__$r__$5=applyc(__$ctx,__$ref);return __$r__$5}(),{"aria-label":__$ctx.ctx.title});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return{role:"group"}}if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b16(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b17(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="menu-item"){if(!__$ctx.elem){__$ctx.__$a=0;return{role:"menuitem"}}}else if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(!__$ctx.mods.type&&__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b19(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b20(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined;return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="icon"){if(!__$ctx.elem){__$ctx.__$a=0;return"i"}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;return"a"}}else if(__$t==="button"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return"span"}if(!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.tag||"button"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="body"){__$ctx.__$a=0;return"body"}}__$ctx.__$a=0;return undefined;return __$ref}function __$g3(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="menu"){if(__$ctx.elem==="group"&&typeof __$ctx.ctx.title!=="undefined"&&__$ctx.__$a!==1){__$ctx.__$a=0;return[{elem:"group-title",content:__$ctx.ctx.title},function(){var __$r__$4;__$ctx.__$a=1;__$r__$4=applyc(__$ctx,__$ref);return __$r__$4}()]}}else if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b41(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==9){__$ctx.__$a=0;return[function(){var __$r__$30;__$ctx.__$a=9;__$r__$30=applyc(__$ctx,__$ref);return __$r__$30}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="head"){if(__$ctx.__$a!==11){__$ctx.__$a=0;return[__$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}},function(){var __$r__$43;__$ctx.__$a=11;__$r__$43=applyc(__$ctx,__$ref);return __$r__$43}()]}}else if(__$t==="body"){if(__$ctx.__$a!==13){__$ctx.__$a=0;return[function(){var __$r__$45;__$ctx.__$a=13;__$r__$45=applyc(__$ctx,__$ref);return __$r__$45}(),__$ctx.ctx.scripts]}}}__$ctx.__$a=0;return __$ctx.ctx.content;return __$ref};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
                   function(provide) { provide(__bem_xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst);
})(this);