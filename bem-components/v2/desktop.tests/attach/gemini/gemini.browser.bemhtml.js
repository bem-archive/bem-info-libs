(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="content"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="attach"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["focused"]===true&&__$ctx.__$a!==7){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$23;__$ctx.__$a=7;__$r__$23=applyc(__$ctx,__$ref);return __$r__$23}(),{live:false});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="attrs"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="tag"){var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){var __$r=__$g3(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="mix"){if(__$ctx.block==="button"&&!__$ctx.elem){__$ctx.__$a=0;return{elem:"control"}}__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==11){__$ctx.__$a=0;var __$r=__$b62(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b63(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b64(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b65(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b66(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply},function(){!function(global,bem_){if(bem_.I18N){return}global.BEM=bem_;var i18n=global.BEM.I18N=function(keyset,key){return key};i18n.keyset=function(){return i18n};i18n.key=function(key){return key};i18n.lang=function(){return}}(this,typeof BEM==="undefined"?{}:BEM)}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._mode=undefined;ctx.ctx=undefined;ctx._ieCommented=undefined;ctx._button=undefined;ctx._attach=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b6(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$33=__$ctx.ctx,button__$34=ctx__$33.button;__$ctx.isSimple(button__$34)&&(button__$34={block:"button",tag:"span",text:button__$34});var attachMods__$35=__$ctx.mods,buttonMods__$36=button__$34.mods||(button__$34.mods={});buttonMods__$36["size"]||(buttonMods__$36["size"]=attachMods__$35["size"]);buttonMods__$36["theme"]||(buttonMods__$36["theme"]=attachMods__$35["theme"]);buttonMods__$36["disabled"]||(buttonMods__$36["disabled"]=attachMods__$35["disabled"]);return[button__$34,{elem:"no-file",content:__$ctx.ctx.noFileText}]}function __$b9(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$24=__$ctx.ctx,content__$25=[ctx__$24.icon];"text"in ctx__$24&&content__$25.push({elem:"text",content:ctx__$24.text});return content__$25}function __$b18(__$ctx,__$ref){__$ctx.__$a=0;var attrs__$20={type:"file"},attach__$21=__$ctx._attach;if(attach__$21){attrs__$20.name=attach__$21.name;attach__$21.mods&&attach__$21.mods.disabled&&(attrs__$20.disabled="disabled");attach__$21.tabIndex&&(attrs__$20.tabindex=attach__$21.tabIndex)}return attrs__$20}function __$b20(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$26=__$ctx.ctx,attrs__$27={type:__$ctx.mods.type||"button",name:ctx__$26.name,value:ctx__$26.val};__$ctx.mods.disabled&&(attrs__$27.disabled="disabled");return __$ctx.extend(function(){var __$r__$28;__$ctx.__$a=8;__$r__$28=applyc(__$ctx,__$ref);return __$r__$28}(),attrs__$27)}function __$b21(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$29=__$ctx.ctx;return{role:"button",tabindex:ctx__$29.tabIndex,id:ctx__$29.id,title:ctx__$29.title}}function __$b52(__$ctx,__$ref){__$ctx.__$a=0;var url__$1=__$ctx.ctx.url;var __$r__$2;var __$l0__$3=__$ctx._mode;__$ctx._mode="";var __$l1__$4=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:url__$1+".ie"+v+".css",ie:"IE "+v}});var __$r__$5;__$ctx.__$a=2;__$r__$5=applyc(__$ctx,__$ref);__$r__$2=__$r__$5;__$ctx._mode=__$l0__$3;__$ctx.ctx=__$l1__$4;return}function __$b53(__$ctx,__$ref){__$ctx.__$a=0;var ie__$6=__$ctx.ctx.ie,hideRule__$7=!ie__$6?["gt IE 9","<!-->","<!--"]:ie__$6==="!IE"?[ie__$6,"<!-->","<!--"]:[ie__$6,"",""];var __$r__$8;var __$l0__$9=__$ctx._mode;__$ctx._mode="";var __$l3__$10=__$ctx.ctx;var __$l1__$11=__$l3__$10._ieCommented;__$l3__$10._ieCommented=true;var __$l2__$12=__$ctx.ctx;__$ctx.ctx=["<!--[if "+hideRule__$7[0]+"]>"+hideRule__$7[1],__$ctx.ctx,hideRule__$7[2]+"<![endif]-->"];__$r__$8=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$9;__$l3__$10._ieCommented=__$l1__$11;__$ctx.ctx=__$l2__$12;return}function __$b54(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._defPageApplied=true;var ctx__$15=__$ctx.ctx;var __$r__$16;var __$l0__$17=__$ctx._mode;__$ctx._mode="";var __$l1__$18=__$ctx.ctx;__$ctx.ctx=[ctx__$15.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$15.title},{block:"ua"},ctx__$15.head,ctx__$15.styles,ctx__$15.favicon?{elem:"favicon",url:ctx__$15.favicon}:""]},ctx__$15]}];var __$r__$19;__$ctx.__$a=5;__$r__$19=applyc(__$ctx,__$ref);__$r__$16=__$r__$19;__$ctx._mode=__$l0__$17;__$ctx.ctx=__$l1__$18;__$ctx._defPageApplied=false;return}function __$b55(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$37;var __$l0__$38=__$ctx._attach;__$ctx._attach=__$ctx.ctx;var __$r__$39;__$ctx.__$a=10;__$r__$39=applyc(__$ctx,__$ref);__$r__$37=__$r__$39;__$ctx._attach=__$l0__$38;return}function __$b56(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$30;var __$l0__$31=__$ctx._button;__$ctx._button=__$ctx.ctx;var __$r__$32;__$ctx.__$a=9;__$r__$32=applyc(__$ctx,__$ref);__$r__$30=__$r__$32;__$ctx._button=__$l0__$31;return}function __$b57(__$ctx,__$ref){__$ctx.__$a=0;if(!__$ctx.ctx)return"";var ctx__$40=__$ctx.ctx,keyset__$41=ctx__$40.keyset,key__$42=ctx__$40.key,params__$43=ctx__$40.params||{};if(!(keyset__$41||key__$42))return"";if(typeof ctx__$40.content==="undefined"||ctx__$40.content!==null){params__$43.content=exports.apply(ctx__$40.content)}__$ctx._buf.push(BEM.I18N(keyset__$41,key__$42,params__$43));return}function __$b58(__$ctx,__$ref){__$ctx.__$a=0;var BEM_INTERNAL__$44=__$ctx.BEM.INTERNAL,ctx__$45=__$ctx.ctx,isBEM__$46,tag__$47,res__$48;var __$r__$49;var __$l0__$50=__$ctx._str;__$ctx._str="";var vBlock__$51=__$ctx.block;var __$r__$52;var __$l1__$53=__$ctx._mode;__$ctx._mode="tag";__$r__$52=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$53;tag__$47=__$r__$52;typeof tag__$47!=="undefined"||(tag__$47=ctx__$45.tag);typeof tag__$47!=="undefined"||(tag__$47="div");if(tag__$47){var jsParams__$54,js__$55;if(vBlock__$51&&ctx__$45.js!==false){var __$r__$56;var __$l2__$57=__$ctx._mode;__$ctx._mode="js";__$r__$56=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$57;js__$55=__$r__$56;js__$55=js__$55?__$ctx.extend(ctx__$45.js,js__$55===true?{}:js__$55):ctx__$45.js===true?{}:ctx__$45.js;js__$55&&((jsParams__$54={})[BEM_INTERNAL__$44.buildClass(vBlock__$51,ctx__$45.elem)]=js__$55)}__$ctx._str+="<"+tag__$47;var __$r__$58;var __$l3__$59=__$ctx._mode;__$ctx._mode="bem";__$r__$58=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$59;isBEM__$46=__$r__$58;typeof isBEM__$46!=="undefined"||(isBEM__$46=typeof ctx__$45.bem!=="undefined"?ctx__$45.bem:ctx__$45.block||ctx__$45.elem);var __$r__$61;var __$l4__$62=__$ctx._mode;__$ctx._mode="cls";__$r__$61=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$62;var cls__$60=__$r__$61;cls__$60||(cls__$60=ctx__$45.cls);var addJSInitClass__$63=ctx__$45.block&&jsParams__$54;if(isBEM__$46||cls__$60){__$ctx._str+=' class="';if(isBEM__$46){__$ctx._str+=BEM_INTERNAL__$44.buildClasses(vBlock__$51,ctx__$45.elem,ctx__$45.elemMods||ctx__$45.mods);var __$r__$65;var __$l5__$66=__$ctx._mode;__$ctx._mode="mix";__$r__$65=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$66;var mix__$64=__$r__$65;ctx__$45.mix&&(mix__$64=mix__$64?[].concat(mix__$64,ctx__$45.mix):ctx__$45.mix);if(mix__$64){var visited__$67={},visitedKey__$68=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$67[visitedKey__$68(vBlock__$51,__$ctx.elem)]=true;__$ctx.isArray(mix__$64)||(mix__$64=[mix__$64]);for(var i__$69=0;i__$69<mix__$64.length;i__$69++){var mixItem__$70=mix__$64[i__$69],hasItem__$71=mixItem__$70.block||mixItem__$70.elem,mixBlock__$72=mixItem__$70.block||mixItem__$70._block||__$ctx.block,mixElem__$73=mixItem__$70.elem||mixItem__$70._elem||__$ctx.elem;hasItem__$71&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$44[hasItem__$71?"buildClasses":"buildModsClasses"](mixBlock__$72,mixItem__$70.elem||mixItem__$70._elem||(mixItem__$70.block?undefined:__$ctx.elem),mixItem__$70.elemMods||mixItem__$70.mods);if(mixItem__$70.js){(jsParams__$54||(jsParams__$54={}))[BEM_INTERNAL__$44.buildClass(mixBlock__$72,mixItem__$70.elem)]=mixItem__$70.js===true?{}:mixItem__$70.js;addJSInitClass__$63||(addJSInitClass__$63=mixBlock__$72&&!mixItem__$70.elem)}if(hasItem__$71&&!visited__$67[visitedKey__$68(mixBlock__$72,mixElem__$73)]){visited__$67[visitedKey__$68(mixBlock__$72,mixElem__$73)]=true;var __$r__$75;var __$l6__$76=__$ctx._mode;__$ctx._mode="mix";var __$l7__$77=__$ctx.block;__$ctx.block=mixBlock__$72;var __$l8__$78=__$ctx.elem;__$ctx.elem=mixElem__$73;__$r__$75=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$76;__$ctx.block=__$l7__$77;__$ctx.elem=__$l8__$78;var nestedMix__$74=__$r__$75;if(nestedMix__$74){for(var j__$79=0;j__$79<nestedMix__$74.length;j__$79++){var nestedItem__$80=nestedMix__$74[j__$79];if(!nestedItem__$80.block&&!nestedItem__$80.elem||!visited__$67[visitedKey__$68(nestedItem__$80.block,nestedItem__$80.elem)]){nestedItem__$80._block=mixBlock__$72;nestedItem__$80._elem=mixElem__$73;mix__$64.splice(i__$69+1,0,nestedItem__$80)}}}}}}}cls__$60&&(__$ctx._str+=isBEM__$46?" "+cls__$60:cls__$60);__$ctx._str+=addJSInitClass__$63?' i-bem"':'"'}if(isBEM__$46&&jsParams__$54){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$54))+'"'}var __$r__$82;var __$l9__$83=__$ctx._mode;__$ctx._mode="attrs";__$r__$82=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$83;var attrs__$81=__$r__$82;attrs__$81=__$ctx.extend(attrs__$81,ctx__$45.attrs);if(attrs__$81){var name__$84,attr__$85;for(name__$84 in attrs__$81){attr__$85=attrs__$81[name__$84];if(typeof attr__$85==="undefined")continue;__$ctx._str+=" "+name__$84+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$85)?attr__$85:__$ctx.reapply(attr__$85))+'"'}}}if(__$ctx.isShortTag(tag__$47)){__$ctx._str+="/>"}else{tag__$47&&(__$ctx._str+=">");var __$r__$87;var __$l10__$88=__$ctx._mode;__$ctx._mode="content";__$r__$87=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$88;var content__$86=__$r__$87;if(content__$86||content__$86===0){isBEM__$46=vBlock__$51||__$ctx.elem;var __$r__$89;var __$l11__$90=__$ctx._mode;__$ctx._mode="";var __$l12__$91=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$92=__$ctx.position;__$ctx.position=isBEM__$46?1:__$ctx.position;var __$l14__$93=__$ctx._listLength;__$ctx._listLength=isBEM__$46?1:__$ctx._listLength;var __$l15__$94=__$ctx.ctx;__$ctx.ctx=content__$86;__$r__$89=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$90;__$ctx._notNewList=__$l12__$91;__$ctx.position=__$l13__$92;__$ctx._listLength=__$l14__$93;__$ctx.ctx=__$l15__$94}tag__$47&&(__$ctx._str+="</"+tag__$47+">")}res__$48=__$ctx._str;__$r__$49=undefined;__$ctx._str=__$l0__$50;__$ctx._buf.push(res__$48);return}function __$b62(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$95;var __$l0__$96=__$ctx._mode;__$ctx._mode="";var __$l1__$97=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$98;__$ctx.__$a=11;__$r__$98=applyc(__$ctx,__$ref);__$r__$95=__$r__$98;__$ctx._mode=__$l0__$96;__$ctx.ctx=__$l1__$97;return}function __$b63(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$99=__$ctx.ctx;if(ctx__$99&&ctx__$99!==true||ctx__$99===0){__$ctx._str+=ctx__$99+""}return}function __$b64(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b65(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$100=__$ctx.ctx,len__$101=ctx__$100.length,i__$102=0,prevPos__$103=__$ctx.position,prevNotNewList__$104=__$ctx._notNewList;if(prevNotNewList__$104){__$ctx._listLength+=len__$101-1}else{__$ctx.position=0;__$ctx._listLength=len__$101}__$ctx._notNewList=true;while(i__$102<len__$101)!function(){var __$r__$105;var __$l0__$106=__$ctx.ctx;__$ctx.ctx=ctx__$100[i__$102++];__$r__$105=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$106;return __$r__$105}();prevNotNewList__$104||(__$ctx.position=prevPos__$103);return}function __$b66(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$107=__$ctx.ctx.block,vElem__$108=__$ctx.ctx.elem,block__$109=__$ctx._currBlock||__$ctx.block;var __$r__$110;var __$l0__$111=__$ctx._mode;__$ctx._mode="default";var __$l1__$112=__$ctx.block;__$ctx.block=vBlock__$107||(vElem__$108?block__$109:undefined);var __$l2__$113=__$ctx._currBlock;__$ctx._currBlock=vBlock__$107||vElem__$108?undefined:block__$109;var __$l3__$114=__$ctx.elem;__$ctx.elem=vElem__$108;var __$l4__$115=__$ctx.mods;__$ctx.mods=vBlock__$107?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$116=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$110=undefined;__$ctx._mode=__$l0__$111;__$ctx.block=__$l1__$112;__$ctx._currBlock=__$l2__$113;__$ctx.elem=__$l3__$114;__$ctx.mods=__$l4__$115;__$ctx.elemMods=__$l5__$116;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==1){__$ctx.__$a=0;return[function(){var __$r__$0;__$ctx.__$a=1;__$r__$0=applyc(__$ctx,__$ref);return __$r__$0}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){if(__$ctx.elem==="head"&&__$ctx.__$a!==3){__$ctx.__$a=0;return[__$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}},function(){var __$r__$13;__$ctx.__$a=3;__$r__$13=applyc(__$ctx,__$ref);return __$r__$13}()]}if(!__$ctx.elem&&__$ctx.__$a!==4){__$ctx.__$a=0;return[function(){var __$r__$14;__$ctx.__$a=4;__$r__$14=applyc(__$ctx,__$ref);return __$r__$14}(),__$ctx.ctx.scripts]}}else if(__$t==="attach"){var __$t=!__$ctx.elem;if(__$t){if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b6(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx._attach&&__$ctx.__$a!==6){__$ctx.__$a=0;return[{block:"attach",elem:"control"},function(){var __$r__$22;__$ctx.__$a=6;__$r__$22=applyc(__$ctx,__$ref);return __$r__$22}()]}if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b9(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;return __$ctx.ctx.content;return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}else if(__$t==="attach"){if(__$ctx.elem==="control"){__$ctx.__$a=0;var __$r=__$b18(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="button"){if(__$ctx.elem==="text"&&typeof __$ctx._button.textMaxWidth==="number"){__$ctx.__$a=0;return{style:"max-width:"+__$ctx._button.textMaxWidth+"px"}}var __$t=!__$ctx.elem;if(__$t){if((!__$ctx.mods.type||__$ctx.mods.type==="submit")&&__$ctx.__$a!==8){__$ctx.__$a=0;var __$r=__$b20(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b21(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="icon"){if(!__$ctx.elem&&__$ctx.ctx.url){__$ctx.__$a=0;return{style:"background-image:url("+__$ctx.ctx.url+")"}}}__$ctx.__$a=0;return undefined;return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}if(!__$ctx.elem){__$ctx.__$a=0;return"body"}}else if(__$t==="attach"){var __$t=__$ctx.elem;if(__$t==="clear"){__$ctx.__$a=0;return"i"}else if(__$t==="text"){__$ctx.__$a=0;return"span"}else if(__$t==="file"){__$ctx.__$a=0;return"span"}else if(__$t==="no-file"){__$ctx.__$a=0;return"span"}else if(__$t==="control"){__$ctx.__$a=0;return"input"}if(!__$ctx.elem){__$ctx.__$a=0;return"span"}}else if(__$t==="button"){if(!__$ctx.elem&&__$ctx._attach){__$ctx.__$a=0;return"span"}if(__$ctx.elem==="text"){__$ctx.__$a=0;return"span"}if(!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.tag||"button"}}else if(__$t==="icon"){if(!__$ctx.elem){__$ctx.__$a=0;return"i"}}__$ctx.__$a=0;return undefined;return __$ref}function __$g3(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="css"){var __$t=!__$ctx.ctx._ieCommented;if(__$t){var __$t=__$ctx.ctx.hasOwnProperty("ie");if(__$t){if(__$ctx.ctx.ie===true&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b52(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b53(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}if(!__$ctx.elem&&!__$ctx._defPageApplied&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=__$b54(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="attach"){if(!__$ctx.elem&&__$ctx.__$a!==10){__$ctx.__$a=0;var __$r=__$b55(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="button"){if(!__$ctx.elem&&__$ctx.__$a!==9){__$ctx.__$a=0;var __$r=__$b56(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="i-bem"){if(__$ctx.elem==="i18n"){__$ctx.__$a=0;var __$r=__$b57(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b58(__$ctx,__$ref);if(__$r!==__$ref)return __$r;return __$ref};
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