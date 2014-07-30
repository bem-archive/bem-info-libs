(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="attrs"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="tag"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){var __$t=__$ctx.mods;if(__$t){if(__$ctx.mods&&__$ctx.mods["type"]==="link"&&__$ctx.mods["disabled"]===true&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$ctx._.extend(function(){var __$r__$1;__$ctx.__$a=1;__$r__$1=applyc(__$ctx,__$ref);return __$r__$1}(),{url:__$ctx.ctx.url});if(__$r!==__$ref)return __$r}if(__$ctx.mods["focused"]===true&&__$ctx.__$a!==3){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$5;__$ctx.__$a=3;__$r__$5=applyc(__$ctx,__$ref);return __$r__$5}(),{live:false});if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;return true}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b32(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==6){__$ctx.__$a=0;return[function(){var __$r__$15;__$ctx.__$a=6;__$r__$15=applyc(__$ctx,__$ref);return __$r__$15}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){if(__$ctx.elem==="head"&&__$ctx.__$a!==8){__$ctx.__$a=0;return[function(){var __$r__$19;__$ctx.__$a=8;__$r__$19=applyc(__$ctx,__$ref);return __$r__$19}(),{elem:"meta",attrs:{name:"viewport",content:"width=device-width,"+(__$ctx.ctx.zoom?"initial-scale=1":"maximum-scale=1,initial-scale=1,user-scalable=0")}},{elem:"meta",attrs:{name:"format-detection",content:"telephone=no"}},{elem:"link",attrs:{name:"apple-mobile-web-app-capable",content:"yes"}}]}if(!__$ctx.elem&&__$ctx.__$a!==9){__$ctx.__$a=0;return[function(){var __$r__$20;__$ctx.__$a=9;__$r__$20=applyc(__$ctx,__$ref);return __$r__$20}(),__$ctx.ctx.scripts]}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="mix"){var __$t=__$ctx.block;if(__$t==="button"){if(!__$ctx.elem){__$ctx.__$a=0;return{elem:"control"}}}else if(__$t==="page"){if(!__$ctx.elem&&__$ctx.__$a!==7){__$ctx.__$a=0;var __$r=__$b39(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="button"){if(!__$ctx.elem&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=__$b41(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){if(!__$ctx.elem&&!__$ctx._defPageApplied&&__$ctx.__$a!==10){__$ctx.__$a=0;var __$r=__$b42(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b43(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==11){__$ctx.__$a=0;var __$r=__$b53(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b54(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b55(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b56(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b57(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._button=undefined;ctx._mode=undefined;ctx.ctx=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$0=__$ctx.ctx;return{src:ctx__$0.url,width:ctx__$0.width,height:ctx__$0.height,alt:ctx__$0.alt,title:ctx__$0.title}}function __$b3(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$2=__$ctx.ctx,attrs__$3={};ctx__$2.target&&(attrs__$3.target=ctx__$2.target);__$ctx.mods.disabled?attrs__$3["aria-disabled"]=true:attrs__$3.href=ctx__$2.url;return __$ctx.extend(function(){var __$r__$4;__$ctx.__$a=2;__$r__$4=applyc(__$ctx,__$ref);return __$r__$4}(),attrs__$3)}function __$b5(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$8=__$ctx.ctx,attrs__$9={type:__$ctx.mods.type||"button",name:ctx__$8.name,value:ctx__$8.val};__$ctx.mods.disabled&&(attrs__$9.disabled="disabled");return __$ctx.extend(function(){var __$r__$10;__$ctx.__$a=4;__$r__$10=applyc(__$ctx,__$ref);return __$r__$10}(),attrs__$9)}function __$b6(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$11=__$ctx.ctx;return{role:"button",tabindex:ctx__$11.tabIndex,id:ctx__$11.id,title:ctx__$11.title}}function __$b32(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$6=__$ctx.ctx,content__$7=[ctx__$6.icon];"text"in ctx__$6&&content__$7.push({elem:"text",content:ctx__$6.text});return content__$7}function __$b39(__$ctx,__$ref){__$ctx.__$a=0;var mix__$16=function(){var __$r__$17;__$ctx.__$a=7;__$r__$17=applyc(__$ctx,__$ref);return __$r__$17}(),uaMix__$18=[{block:"ua",js:true}];return mix__$16?uaMix__$18.concat(mix__$16):uaMix__$18}function __$b41(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$12;var __$l0__$13=__$ctx._button;__$ctx._button=__$ctx.ctx;var __$r__$14;__$ctx.__$a=5;__$r__$14=applyc(__$ctx,__$ref);__$r__$12=__$r__$14;__$ctx._button=__$l0__$13;return}function __$b42(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._defPageApplied=true;var ctx__$21=__$ctx.ctx;var __$r__$22;var __$l0__$23=__$ctx._mode;__$ctx._mode="";var __$l1__$24=__$ctx.ctx;__$ctx.ctx=[ctx__$21.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$21.title},{block:"ua"},ctx__$21.head,ctx__$21.styles,ctx__$21.favicon?{elem:"favicon",url:ctx__$21.favicon}:""]},ctx__$21]}];var __$r__$25;__$ctx.__$a=10;__$r__$25=applyc(__$ctx,__$ref);__$r__$22=__$r__$25;__$ctx._mode=__$l0__$23;__$ctx.ctx=__$l1__$24;__$ctx._defPageApplied=false;return}function __$b43(__$ctx,__$ref){__$ctx.__$a=0;var BEM_INTERNAL__$26=__$ctx.BEM.INTERNAL,ctx__$27=__$ctx.ctx,isBEM__$28,tag__$29,res__$30;var __$r__$31;var __$l0__$32=__$ctx._str;__$ctx._str="";var vBlock__$33=__$ctx.block;var __$r__$34;var __$l1__$35=__$ctx._mode;__$ctx._mode="tag";__$r__$34=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$35;tag__$29=__$r__$34;typeof tag__$29!=="undefined"||(tag__$29=ctx__$27.tag);typeof tag__$29!=="undefined"||(tag__$29="div");if(tag__$29){var jsParams__$36,js__$37;if(vBlock__$33&&ctx__$27.js!==false){var __$r__$38;var __$l2__$39=__$ctx._mode;__$ctx._mode="js";__$r__$38=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$39;js__$37=__$r__$38;js__$37=js__$37?__$ctx.extend(ctx__$27.js,js__$37===true?{}:js__$37):ctx__$27.js===true?{}:ctx__$27.js;js__$37&&((jsParams__$36={})[BEM_INTERNAL__$26.buildClass(vBlock__$33,ctx__$27.elem)]=js__$37)}__$ctx._str+="<"+tag__$29;var __$r__$40;var __$l3__$41=__$ctx._mode;__$ctx._mode="bem";__$r__$40=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$41;isBEM__$28=__$r__$40;typeof isBEM__$28!=="undefined"||(isBEM__$28=typeof ctx__$27.bem!=="undefined"?ctx__$27.bem:ctx__$27.block||ctx__$27.elem);var __$r__$43;var __$l4__$44=__$ctx._mode;__$ctx._mode="cls";__$r__$43=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$44;var cls__$42=__$r__$43;cls__$42||(cls__$42=ctx__$27.cls);var addJSInitClass__$45=ctx__$27.block&&jsParams__$36;if(isBEM__$28||cls__$42){__$ctx._str+=' class="';if(isBEM__$28){__$ctx._str+=BEM_INTERNAL__$26.buildClasses(vBlock__$33,ctx__$27.elem,ctx__$27.elemMods||ctx__$27.mods);var __$r__$47;var __$l5__$48=__$ctx._mode;__$ctx._mode="mix";__$r__$47=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$48;var mix__$46=__$r__$47;ctx__$27.mix&&(mix__$46=mix__$46?[].concat(mix__$46,ctx__$27.mix):ctx__$27.mix);if(mix__$46){var visited__$49={},visitedKey__$50=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$49[visitedKey__$50(vBlock__$33,__$ctx.elem)]=true;__$ctx.isArray(mix__$46)||(mix__$46=[mix__$46]);for(var i__$51=0;i__$51<mix__$46.length;i__$51++){var mixItem__$52=mix__$46[i__$51],hasItem__$53=mixItem__$52.block||mixItem__$52.elem,mixBlock__$54=mixItem__$52.block||mixItem__$52._block||__$ctx.block,mixElem__$55=mixItem__$52.elem||mixItem__$52._elem||__$ctx.elem;hasItem__$53&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$26[hasItem__$53?"buildClasses":"buildModsClasses"](mixBlock__$54,mixItem__$52.elem||mixItem__$52._elem||(mixItem__$52.block?undefined:__$ctx.elem),mixItem__$52.elemMods||mixItem__$52.mods);if(mixItem__$52.js){(jsParams__$36||(jsParams__$36={}))[BEM_INTERNAL__$26.buildClass(mixBlock__$54,mixItem__$52.elem)]=mixItem__$52.js===true?{}:mixItem__$52.js;addJSInitClass__$45||(addJSInitClass__$45=mixBlock__$54&&!mixItem__$52.elem)}if(hasItem__$53&&!visited__$49[visitedKey__$50(mixBlock__$54,mixElem__$55)]){visited__$49[visitedKey__$50(mixBlock__$54,mixElem__$55)]=true;var __$r__$57;var __$l6__$58=__$ctx._mode;__$ctx._mode="mix";var __$l7__$59=__$ctx.block;__$ctx.block=mixBlock__$54;var __$l8__$60=__$ctx.elem;__$ctx.elem=mixElem__$55;__$r__$57=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$58;__$ctx.block=__$l7__$59;__$ctx.elem=__$l8__$60;var nestedMix__$56=__$r__$57;if(nestedMix__$56){for(var j__$61=0;j__$61<nestedMix__$56.length;j__$61++){var nestedItem__$62=nestedMix__$56[j__$61];if(!nestedItem__$62.block&&!nestedItem__$62.elem||!visited__$49[visitedKey__$50(nestedItem__$62.block,nestedItem__$62.elem)]){nestedItem__$62._block=mixBlock__$54;nestedItem__$62._elem=mixElem__$55;mix__$46.splice(i__$51+1,0,nestedItem__$62)}}}}}}}cls__$42&&(__$ctx._str+=isBEM__$28?" "+cls__$42:cls__$42);__$ctx._str+=addJSInitClass__$45?' i-bem"':'"'}if(isBEM__$28&&jsParams__$36){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$36))+'"'}var __$r__$64;var __$l9__$65=__$ctx._mode;__$ctx._mode="attrs";__$r__$64=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$65;var attrs__$63=__$r__$64;attrs__$63=__$ctx.extend(attrs__$63,ctx__$27.attrs);if(attrs__$63){var name__$66,attr__$67;for(name__$66 in attrs__$63){attr__$67=attrs__$63[name__$66];if(typeof attr__$67==="undefined")continue;__$ctx._str+=" "+name__$66+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$67)?attr__$67:__$ctx.reapply(attr__$67))+'"'}}}if(__$ctx.isShortTag(tag__$29)){__$ctx._str+="/>"}else{tag__$29&&(__$ctx._str+=">");var __$r__$69;var __$l10__$70=__$ctx._mode;__$ctx._mode="content";__$r__$69=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$70;var content__$68=__$r__$69;if(content__$68||content__$68===0){isBEM__$28=vBlock__$33||__$ctx.elem;var __$r__$71;var __$l11__$72=__$ctx._mode;__$ctx._mode="";var __$l12__$73=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$74=__$ctx.position;__$ctx.position=isBEM__$28?1:__$ctx.position;var __$l14__$75=__$ctx._listLength;__$ctx._listLength=isBEM__$28?1:__$ctx._listLength;var __$l15__$76=__$ctx.ctx;__$ctx.ctx=content__$68;__$r__$71=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$72;__$ctx._notNewList=__$l12__$73;__$ctx.position=__$l13__$74;__$ctx._listLength=__$l14__$75;__$ctx.ctx=__$l15__$76}tag__$29&&(__$ctx._str+="</"+tag__$29+">")}res__$30=__$ctx._str;__$r__$31=undefined;__$ctx._str=__$l0__$32;__$ctx._buf.push(res__$30);return}function __$b53(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$77;var __$l0__$78=__$ctx._mode;__$ctx._mode="";var __$l1__$79=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$80;__$ctx.__$a=11;__$r__$80=applyc(__$ctx,__$ref);__$r__$77=__$r__$80;__$ctx._mode=__$l0__$78;__$ctx.ctx=__$l1__$79;return}function __$b54(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$81=__$ctx.ctx;if(ctx__$81&&ctx__$81!==true||ctx__$81===0){__$ctx._str+=ctx__$81+""}return}function __$b55(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b56(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$82=__$ctx.ctx,len__$83=ctx__$82.length,i__$84=0,prevPos__$85=__$ctx.position,prevNotNewList__$86=__$ctx._notNewList;if(prevNotNewList__$86){__$ctx._listLength+=len__$83-1}else{__$ctx.position=0;__$ctx._listLength=len__$83}__$ctx._notNewList=true;while(i__$84<len__$83)!function(){var __$r__$87;var __$l0__$88=__$ctx.ctx;__$ctx.ctx=ctx__$82[i__$84++];__$r__$87=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$88;return __$r__$87}();prevNotNewList__$86||(__$ctx.position=prevPos__$85);return}function __$b57(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$89=__$ctx.ctx.block,vElem__$90=__$ctx.ctx.elem,block__$91=__$ctx._currBlock||__$ctx.block;var __$r__$92;var __$l0__$93=__$ctx._mode;__$ctx._mode="default";var __$l1__$94=__$ctx.block;__$ctx.block=vBlock__$89||(vElem__$90?block__$91:undefined);var __$l2__$95=__$ctx._currBlock;__$ctx._currBlock=vBlock__$89||vElem__$90?undefined:block__$91;var __$l3__$96=__$ctx.elem;__$ctx.elem=vElem__$90;var __$l4__$97=__$ctx.mods;__$ctx.mods=vBlock__$89?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$98=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$92=undefined;__$ctx._mode=__$l0__$93;__$ctx.block=__$l1__$94;__$ctx._currBlock=__$l2__$95;__$ctx.elem=__$l3__$96;__$ctx.mods=__$l4__$97;__$ctx.elemMods=__$l5__$98;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="image"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="icon"){if(!__$ctx.elem&&__$ctx.ctx.url){__$ctx.__$a=0;return{style:"background-image:url("+__$ctx.ctx.url+")"}}}else if(__$t==="button"){if(!__$ctx.elem&&__$ctx.mods&&__$ctx.mods["type"]==="link"&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b3(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.elem==="text"&&typeof __$ctx._button.textMaxWidth==="number"){__$ctx.__$a=0;return{style:"max-width:"+__$ctx._button.textMaxWidth+"px"}}var __$t=!__$ctx.elem;if(__$t){if((!__$ctx.mods.type||__$ctx.mods.type==="submit")&&__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b5(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b6(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined;return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="image"){if(!__$ctx.elem){__$ctx.__$a=0;return"img"}}else if(__$t==="icon"){if(!__$ctx.elem){__$ctx.__$a=0;return"i"}}else if(__$t==="button"){if(!__$ctx.elem&&__$ctx.mods&&__$ctx.mods["type"]==="link"){__$ctx.__$a=0;return"a"}if(__$ctx.elem==="text"){__$ctx.__$a=0;return"span"}if(!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.tag||"button"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}if(!__$ctx.elem){__$ctx.__$a=0;return"body"}}__$ctx.__$a=0;return undefined;return __$ref};
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