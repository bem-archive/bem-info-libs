(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="attrs"){var __$t=__$ctx.block;if(__$t==="image"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="icon"){if(!__$ctx.elem&&__$ctx.ctx.url){__$ctx.__$a=0;return{style:"background-image:url("+__$ctx.ctx.url+")"}}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined}else if(__$t==="tag"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==1){__$ctx.__$a=0;return[function(){var __$r__$1;__$ctx.__$a=1;__$r__$1=applyc(__$ctx,__$ref);return __$r__$1}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){if(__$ctx.elem==="head"&&__$ctx.__$a!==3){__$ctx.__$a=0;return[__$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}},function(){var __$r__$14;__$ctx.__$a=3;__$r__$14=applyc(__$ctx,__$ref);return __$r__$14}()]}if(!__$ctx.elem&&__$ctx.__$a!==4){__$ctx.__$a=0;return[function(){var __$r__$15;__$ctx.__$a=4;__$r__$15=applyc(__$ctx,__$ref);return __$r__$15}(),__$ctx.ctx.scripts]}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="js"){__$ctx.__$a=0;return undefined}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="css"){var __$t=!__$ctx.ctx._ieCommented;if(__$t){var __$t=__$ctx.ctx.hasOwnProperty("ie");if(__$t){if(__$ctx.ctx.ie===true&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b33(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b34(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}if(!__$ctx.elem&&!__$ctx._defPageApplied&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=__$b35(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b36(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="mix"){__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$b39(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b40(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b41(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b42(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b43(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._mode=undefined;ctx.ctx=undefined;ctx._ieCommented=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$0=__$ctx.ctx;return{src:ctx__$0.url,width:ctx__$0.width,height:ctx__$0.height,alt:ctx__$0.alt,title:ctx__$0.title}}function __$b33(__$ctx,__$ref){__$ctx.__$a=0;var url__$2=__$ctx.ctx.url;var __$r__$3;var __$l0__$4=__$ctx._mode;__$ctx._mode="";var __$l1__$5=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:url__$2+".ie"+v+".css",ie:"IE "+v}});var __$r__$6;__$ctx.__$a=2;__$r__$6=applyc(__$ctx,__$ref);__$r__$3=__$r__$6;__$ctx._mode=__$l0__$4;__$ctx.ctx=__$l1__$5;return}function __$b34(__$ctx,__$ref){__$ctx.__$a=0;var ie__$7=__$ctx.ctx.ie,hideRule__$8=!ie__$7?["gt IE 9","<!-->","<!--"]:ie__$7==="!IE"?[ie__$7,"<!-->","<!--"]:[ie__$7,"",""];var __$r__$9;var __$l0__$10=__$ctx._mode;__$ctx._mode="";var __$l3__$11=__$ctx.ctx;var __$l1__$12=__$l3__$11._ieCommented;__$l3__$11._ieCommented=true;var __$l2__$13=__$ctx.ctx;__$ctx.ctx=["<!--[if "+hideRule__$8[0]+"]>"+hideRule__$8[1],__$ctx.ctx,hideRule__$8[2]+"<![endif]-->"];__$r__$9=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$10;__$l3__$11._ieCommented=__$l1__$12;__$ctx.ctx=__$l2__$13;return}function __$b35(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._defPageApplied=true;var ctx__$16=__$ctx.ctx;var __$r__$17;var __$l0__$18=__$ctx._mode;__$ctx._mode="";var __$l1__$19=__$ctx.ctx;__$ctx.ctx=[ctx__$16.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$16.title},{block:"ua"},ctx__$16.head,ctx__$16.styles,ctx__$16.favicon?{elem:"favicon",url:ctx__$16.favicon}:""]},ctx__$16]}];var __$r__$20;__$ctx.__$a=5;__$r__$20=applyc(__$ctx,__$ref);__$r__$17=__$r__$20;__$ctx._mode=__$l0__$18;__$ctx.ctx=__$l1__$19;__$ctx._defPageApplied=false;return}function __$b36(__$ctx,__$ref){__$ctx.__$a=0;var BEM_INTERNAL__$21=__$ctx.BEM.INTERNAL,ctx__$22=__$ctx.ctx,isBEM__$23,tag__$24,res__$25;var __$r__$26;var __$l0__$27=__$ctx._str;__$ctx._str="";var vBlock__$28=__$ctx.block;var __$r__$29;var __$l1__$30=__$ctx._mode;__$ctx._mode="tag";__$r__$29=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$30;tag__$24=__$r__$29;typeof tag__$24!=="undefined"||(tag__$24=ctx__$22.tag);typeof tag__$24!=="undefined"||(tag__$24="div");if(tag__$24){var jsParams__$31,js__$32;if(vBlock__$28&&ctx__$22.js!==false){var __$r__$33;var __$l2__$34=__$ctx._mode;__$ctx._mode="js";__$r__$33=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$34;js__$32=__$r__$33;js__$32=js__$32?__$ctx.extend(ctx__$22.js,js__$32===true?{}:js__$32):ctx__$22.js===true?{}:ctx__$22.js;js__$32&&((jsParams__$31={})[BEM_INTERNAL__$21.buildClass(vBlock__$28,ctx__$22.elem)]=js__$32)}__$ctx._str+="<"+tag__$24;var __$r__$35;var __$l3__$36=__$ctx._mode;__$ctx._mode="bem";__$r__$35=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$36;isBEM__$23=__$r__$35;typeof isBEM__$23!=="undefined"||(isBEM__$23=typeof ctx__$22.bem!=="undefined"?ctx__$22.bem:ctx__$22.block||ctx__$22.elem);var __$r__$38;var __$l4__$39=__$ctx._mode;__$ctx._mode="cls";__$r__$38=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$39;var cls__$37=__$r__$38;cls__$37||(cls__$37=ctx__$22.cls);var addJSInitClass__$40=ctx__$22.block&&jsParams__$31;if(isBEM__$23||cls__$37){__$ctx._str+=' class="';if(isBEM__$23){__$ctx._str+=BEM_INTERNAL__$21.buildClasses(vBlock__$28,ctx__$22.elem,ctx__$22.elemMods||ctx__$22.mods);var __$r__$42;var __$l5__$43=__$ctx._mode;__$ctx._mode="mix";__$r__$42=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$43;var mix__$41=__$r__$42;ctx__$22.mix&&(mix__$41=mix__$41?[].concat(mix__$41,ctx__$22.mix):ctx__$22.mix);if(mix__$41){var visited__$44={},visitedKey__$45=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$44[visitedKey__$45(vBlock__$28,__$ctx.elem)]=true;__$ctx.isArray(mix__$41)||(mix__$41=[mix__$41]);for(var i__$46=0;i__$46<mix__$41.length;i__$46++){var mixItem__$47=mix__$41[i__$46],hasItem__$48=mixItem__$47.block||mixItem__$47.elem,mixBlock__$49=mixItem__$47.block||mixItem__$47._block||__$ctx.block,mixElem__$50=mixItem__$47.elem||mixItem__$47._elem||__$ctx.elem;hasItem__$48&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$21[hasItem__$48?"buildClasses":"buildModsClasses"](mixBlock__$49,mixItem__$47.elem||mixItem__$47._elem||(mixItem__$47.block?undefined:__$ctx.elem),mixItem__$47.elemMods||mixItem__$47.mods);if(mixItem__$47.js){(jsParams__$31||(jsParams__$31={}))[BEM_INTERNAL__$21.buildClass(mixBlock__$49,mixItem__$47.elem)]=mixItem__$47.js===true?{}:mixItem__$47.js;addJSInitClass__$40||(addJSInitClass__$40=mixBlock__$49&&!mixItem__$47.elem)}if(hasItem__$48&&!visited__$44[visitedKey__$45(mixBlock__$49,mixElem__$50)]){visited__$44[visitedKey__$45(mixBlock__$49,mixElem__$50)]=true;var __$r__$52;var __$l6__$53=__$ctx._mode;__$ctx._mode="mix";var __$l7__$54=__$ctx.block;__$ctx.block=mixBlock__$49;var __$l8__$55=__$ctx.elem;__$ctx.elem=mixElem__$50;__$r__$52=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$53;__$ctx.block=__$l7__$54;__$ctx.elem=__$l8__$55;var nestedMix__$51=__$r__$52;if(nestedMix__$51){for(var j__$56=0;j__$56<nestedMix__$51.length;j__$56++){var nestedItem__$57=nestedMix__$51[j__$56];if(!nestedItem__$57.block&&!nestedItem__$57.elem||!visited__$44[visitedKey__$45(nestedItem__$57.block,nestedItem__$57.elem)]){nestedItem__$57._block=mixBlock__$49;nestedItem__$57._elem=mixElem__$50;mix__$41.splice(i__$46+1,0,nestedItem__$57)}}}}}}}cls__$37&&(__$ctx._str+=isBEM__$23?" "+cls__$37:cls__$37);__$ctx._str+=addJSInitClass__$40?' i-bem"':'"'}if(isBEM__$23&&jsParams__$31){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$31))+'"'}var __$r__$59;var __$l9__$60=__$ctx._mode;__$ctx._mode="attrs";__$r__$59=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$60;var attrs__$58=__$r__$59;attrs__$58=__$ctx.extend(attrs__$58,ctx__$22.attrs);if(attrs__$58){var name__$61,attr__$62;for(name__$61 in attrs__$58){attr__$62=attrs__$58[name__$61];if(typeof attr__$62==="undefined")continue;__$ctx._str+=" "+name__$61+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$62)?attr__$62:__$ctx.reapply(attr__$62))+'"'}}}if(__$ctx.isShortTag(tag__$24)){__$ctx._str+="/>"}else{tag__$24&&(__$ctx._str+=">");var __$r__$64;var __$l10__$65=__$ctx._mode;__$ctx._mode="content";__$r__$64=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$65;var content__$63=__$r__$64;if(content__$63||content__$63===0){isBEM__$23=vBlock__$28||__$ctx.elem;var __$r__$66;var __$l11__$67=__$ctx._mode;__$ctx._mode="";var __$l12__$68=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$69=__$ctx.position;__$ctx.position=isBEM__$23?1:__$ctx.position;var __$l14__$70=__$ctx._listLength;__$ctx._listLength=isBEM__$23?1:__$ctx._listLength;var __$l15__$71=__$ctx.ctx;__$ctx.ctx=content__$63;__$r__$66=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$67;__$ctx._notNewList=__$l12__$68;__$ctx.position=__$l13__$69;__$ctx._listLength=__$l14__$70;__$ctx.ctx=__$l15__$71}tag__$24&&(__$ctx._str+="</"+tag__$24+">")}res__$25=__$ctx._str;__$r__$26=undefined;__$ctx._str=__$l0__$27;__$ctx._buf.push(res__$25);return}function __$b39(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$72;var __$l0__$73=__$ctx._mode;__$ctx._mode="";var __$l1__$74=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$75;__$ctx.__$a=6;__$r__$75=applyc(__$ctx,__$ref);__$r__$72=__$r__$75;__$ctx._mode=__$l0__$73;__$ctx.ctx=__$l1__$74;return}function __$b40(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$76=__$ctx.ctx;if(ctx__$76&&ctx__$76!==true||ctx__$76===0){__$ctx._str+=ctx__$76+""}return}function __$b41(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b42(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$77=__$ctx.ctx,len__$78=ctx__$77.length,i__$79=0,prevPos__$80=__$ctx.position,prevNotNewList__$81=__$ctx._notNewList;if(prevNotNewList__$81){__$ctx._listLength+=len__$78-1}else{__$ctx.position=0;__$ctx._listLength=len__$78}__$ctx._notNewList=true;while(i__$79<len__$78)!function(){var __$r__$82;var __$l0__$83=__$ctx.ctx;__$ctx.ctx=ctx__$77[i__$79++];__$r__$82=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$83;return __$r__$82}();prevNotNewList__$81||(__$ctx.position=prevPos__$80);return}function __$b43(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$84=__$ctx.ctx.block,vElem__$85=__$ctx.ctx.elem,block__$86=__$ctx._currBlock||__$ctx.block;var __$r__$87;var __$l0__$88=__$ctx._mode;__$ctx._mode="default";var __$l1__$89=__$ctx.block;__$ctx.block=vBlock__$84||(vElem__$85?block__$86:undefined);var __$l2__$90=__$ctx._currBlock;__$ctx._currBlock=vBlock__$84||vElem__$85?undefined:block__$86;var __$l3__$91=__$ctx.elem;__$ctx.elem=vElem__$85;var __$l4__$92=__$ctx.mods;__$ctx.mods=vBlock__$84?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$93=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$87=undefined;__$ctx._mode=__$l0__$88;__$ctx.block=__$l1__$89;__$ctx._currBlock=__$l2__$90;__$ctx.elem=__$l3__$91;__$ctx.mods=__$l4__$92;__$ctx.elemMods=__$l5__$93;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="image"){if(!__$ctx.elem){__$ctx.__$a=0;return"img"}}else if(__$t==="icon"){if(!__$ctx.elem){__$ctx.__$a=0;return"i"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}if(!__$ctx.elem){__$ctx.__$a=0;return"body"}}__$ctx.__$a=0;return undefined;return __$ref};
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