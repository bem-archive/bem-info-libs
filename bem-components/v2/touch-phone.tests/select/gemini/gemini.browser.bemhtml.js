(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="content"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="js"){var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="default"){var __$r=__$g3(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="attrs"){var __$r=__$g4(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="tag"){var __$r=__$g5(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="mix"){var __$t=__$ctx.block;if(__$t==="button"){if(!__$ctx.elem){__$ctx.__$a=0;return{elem:"control"}}}else if(__$t==="menu"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}}else if(__$t==="page"){if(!__$ctx.elem&&__$ctx.__$a!==20){__$ctx.__$a=0;var __$r=__$b68(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;return undefined}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==24){__$ctx.__$a=0;var __$r=__$b79(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b80(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b81(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b82(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b83(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._checkedOption=undefined;ctx._menuMods=undefined;ctx._mode=undefined;ctx.ctx=undefined;ctx._button=undefined;ctx._select=undefined;ctx._checkedOptions=undefined;ctx._firstOption=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;var res__$0=__$ctx._checkedOptions.map(function(option){return{elem:"control",val:option.val}});res__$0.push(function(){var __$r__$1;__$ctx.__$a=1;__$r__$1=applyc(__$ctx,__$ref);return __$r__$1}());return res__$0}function __$b2(__$ctx,__$ref){__$ctx.__$a=0;var checkedOptions__$2=__$ctx._checkedOptions;return[{elem:"text",content:checkedOptions__$2.length===1?checkedOptions__$2[0].text:checkedOptions__$2.reduce(function(res,option){return res+(res?", ":"")+(option.checkedText||option.text)},"")||__$ctx._select.text}]}function __$b10(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$28=__$ctx.ctx,content__$29=[ctx__$28.icon];"text"in ctx__$28&&content__$29.push({elem:"text",content:ctx__$28.text});return content__$29}function __$b20(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$46=__$ctx.ctx;return{name:ctx__$46.name,optionsMaxHeight:ctx__$46.optionsMaxHeight}}function __$b29(__$ctx,__$ref){__$ctx.__$a=0;var checkedOptions__$5=__$ctx._checkedOptions,firstOption__$6=__$ctx._firstOption;if(!checkedOptions__$5.length){firstOption__$6.checked=true;checkedOptions__$5.push(firstOption__$6)}var __$r__$7;var __$l0__$8=__$ctx._checkedOption;__$ctx._checkedOption=checkedOptions__$5[0];var __$r__$9;__$ctx.__$a=4;__$r__$9=applyc(__$ctx,__$ref);__$r__$7=__$r__$9;__$ctx._checkedOption=__$l0__$8;return}function __$b30(__$ctx,__$ref){__$ctx.__$a=0;var mods__$37=__$ctx.mods;var __$r__$38;var __$l0__$39=__$ctx._mode;__$ctx._mode="";var __$l1__$40=__$ctx.ctx;__$ctx.ctx={block:"button",mix:{block:__$ctx.block,elem:__$ctx.elem},mods:{size:mods__$37.size,theme:mods__$37.theme,focused:mods__$37.focused,disabled:mods__$37.disabled,checked:mods__$37.mode!=="radio"&&!!__$ctx._checkedOptions.length},id:__$ctx._select.id,textMaxWidth:__$ctx._select.textMaxWidth,content:[function(){var __$r__$41;var __$l3__$42=__$ctx._mode;__$ctx._mode="content";__$r__$41=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$42;return __$r__$41}(),{block:"icon",mix:{block:"select",elem:"tick"}}]};var __$r__$43;__$ctx.__$a=16;__$r__$43=applyc(__$ctx,__$ref);__$r__$38=__$r__$43;__$ctx._mode=__$l0__$39;__$ctx.ctx=__$l1__$40;return}function __$b31(__$ctx,__$ref){__$ctx.__$a=0;var mods__$20=__$ctx.mods,optionToMenuItem__$21=function(option){var res__$22={block:"menu-item",mods:{checked:option.checked,disabled:option.disabled},val:option.val,js:{checkedText:option.checkedText},content:option.text};if(option.icon){res__$22.js.text=option.text;res__$22.content=[option.icon,res__$22.content]}return res__$22};var __$r__$23;var __$l0__$24=__$ctx._mode;__$ctx._mode="";var __$l1__$25=__$ctx.ctx;__$ctx.ctx={block:"menu",mix:{block:__$ctx.block,elem:__$ctx.elem},mods:{size:mods__$20.size,theme:mods__$20.theme,disabled:mods__$20.disabled,mode:mods__$20.mode},attrs:{tabindex:undefined},content:__$ctx._select.options.map(function(optionOrGroup){return optionOrGroup.group?{elem:"group",mods:{"has-title":!!optionOrGroup.title},title:optionOrGroup.title,content:optionOrGroup.group.map(optionToMenuItem__$21)}:optionToMenuItem__$21(optionOrGroup)})};var __$r__$26;__$ctx.__$a=12;__$r__$26=applyc(__$ctx,__$ref);__$r__$23=__$r__$26;__$ctx._mode=__$l0__$24;__$ctx.ctx=__$l1__$25;return}function __$b32(__$ctx,__$ref){__$ctx.__$a=0;if(!__$ctx.mods.mode)throw Error("Can't build select without mode modifier");var options__$47=__$ctx.ctx.options,i__$48=0,j__$49,optionOrGroup__$50,option__$51,firstOption__$52,checkedOptions__$53=[];while(optionOrGroup__$50=options__$47[i__$48++]){if(optionOrGroup__$50.group){j__$49=0;while(option__$51=optionOrGroup__$50.group[j__$49++]){i__$48===1&&j__$49===1&&(firstOption__$52=option__$51);option__$51.checked&&checkedOptions__$53.push(option__$51)}}else{i__$48===1&&(firstOption__$52=optionOrGroup__$50);optionOrGroup__$50.checked&&checkedOptions__$53.push(optionOrGroup__$50)}}var __$r__$54;var __$l0__$55=__$ctx._select;__$ctx._select=__$ctx.ctx;var __$l1__$56=__$ctx._checkedOptions;__$ctx._checkedOptions=checkedOptions__$53;var __$l2__$57=__$ctx._firstOption;__$ctx._firstOption=firstOption__$52;var __$r__$58;__$ctx.__$a=18;__$r__$58=applyc(__$ctx,__$ref);__$r__$54=__$r__$58;__$ctx._select=__$l0__$55;__$ctx._checkedOptions=__$l1__$56;__$ctx._firstOption=__$l2__$57;return}function __$b33(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$34;var __$l0__$35=__$ctx._button;__$ctx._button=__$ctx.ctx;var __$r__$36;__$ctx.__$a=15;__$r__$36=applyc(__$ctx,__$ref);__$r__$34=__$r__$36;__$ctx._button=__$l0__$35;return}function __$b34(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$17;var __$l0__$18=__$ctx._menuMods;__$ctx._menuMods={theme:__$ctx.mods.theme,disabled:__$ctx.mods.disabled};var __$r__$19;__$ctx.__$a=11;__$r__$19=applyc(__$ctx,__$ref);__$r__$17=__$r__$19;__$ctx._menuMods=__$l0__$18;delete __$ctx._menuTheme;return}function __$b35(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.mods.theme=__$ctx._menuMods.theme;__$ctx.mods.disabled=__$ctx.mods.disabled||__$ctx._menuMods.disabled;var __$r__$15;__$ctx.__$a=10;__$r__$15=applyc(__$ctx,__$ref);return}function __$b36(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._defPageApplied=true;var ctx__$65=__$ctx.ctx;var __$r__$66;var __$l0__$67=__$ctx._mode;__$ctx._mode="";var __$l1__$68=__$ctx.ctx;__$ctx.ctx=[ctx__$65.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$65.title},{block:"ua"},ctx__$65.head,ctx__$65.styles,ctx__$65.favicon?{elem:"favicon",url:ctx__$65.favicon}:""]},ctx__$65]}];var __$r__$69;__$ctx.__$a=23;__$r__$69=applyc(__$ctx,__$ref);__$r__$66=__$r__$69;__$ctx._mode=__$l0__$67;__$ctx.ctx=__$l1__$68;__$ctx._defPageApplied=false;return}function __$b37(__$ctx,__$ref){__$ctx.__$a=0;var BEM_INTERNAL__$70=__$ctx.BEM.INTERNAL,ctx__$71=__$ctx.ctx,isBEM__$72,tag__$73,res__$74;var __$r__$75;var __$l0__$76=__$ctx._str;__$ctx._str="";var vBlock__$77=__$ctx.block;var __$r__$78;var __$l1__$79=__$ctx._mode;__$ctx._mode="tag";__$r__$78=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$79;tag__$73=__$r__$78;typeof tag__$73!=="undefined"||(tag__$73=ctx__$71.tag);typeof tag__$73!=="undefined"||(tag__$73="div");if(tag__$73){var jsParams__$80,js__$81;if(vBlock__$77&&ctx__$71.js!==false){var __$r__$82;var __$l2__$83=__$ctx._mode;__$ctx._mode="js";__$r__$82=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$83;js__$81=__$r__$82;js__$81=js__$81?__$ctx.extend(ctx__$71.js,js__$81===true?{}:js__$81):ctx__$71.js===true?{}:ctx__$71.js;js__$81&&((jsParams__$80={})[BEM_INTERNAL__$70.buildClass(vBlock__$77,ctx__$71.elem)]=js__$81)}__$ctx._str+="<"+tag__$73;var __$r__$84;var __$l3__$85=__$ctx._mode;__$ctx._mode="bem";__$r__$84=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$85;isBEM__$72=__$r__$84;typeof isBEM__$72!=="undefined"||(isBEM__$72=typeof ctx__$71.bem!=="undefined"?ctx__$71.bem:ctx__$71.block||ctx__$71.elem);var __$r__$87;var __$l4__$88=__$ctx._mode;__$ctx._mode="cls";__$r__$87=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$88;var cls__$86=__$r__$87;cls__$86||(cls__$86=ctx__$71.cls);var addJSInitClass__$89=ctx__$71.block&&jsParams__$80;if(isBEM__$72||cls__$86){__$ctx._str+=' class="';if(isBEM__$72){__$ctx._str+=BEM_INTERNAL__$70.buildClasses(vBlock__$77,ctx__$71.elem,ctx__$71.elemMods||ctx__$71.mods);var __$r__$91;var __$l5__$92=__$ctx._mode;__$ctx._mode="mix";__$r__$91=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$92;var mix__$90=__$r__$91;ctx__$71.mix&&(mix__$90=mix__$90?[].concat(mix__$90,ctx__$71.mix):ctx__$71.mix);if(mix__$90){var visited__$93={},visitedKey__$94=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$93[visitedKey__$94(vBlock__$77,__$ctx.elem)]=true;__$ctx.isArray(mix__$90)||(mix__$90=[mix__$90]);for(var i__$95=0;i__$95<mix__$90.length;i__$95++){var mixItem__$96=mix__$90[i__$95],hasItem__$97=mixItem__$96.block||mixItem__$96.elem,mixBlock__$98=mixItem__$96.block||mixItem__$96._block||__$ctx.block,mixElem__$99=mixItem__$96.elem||mixItem__$96._elem||__$ctx.elem;hasItem__$97&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$70[hasItem__$97?"buildClasses":"buildModsClasses"](mixBlock__$98,mixItem__$96.elem||mixItem__$96._elem||(mixItem__$96.block?undefined:__$ctx.elem),mixItem__$96.elemMods||mixItem__$96.mods);if(mixItem__$96.js){(jsParams__$80||(jsParams__$80={}))[BEM_INTERNAL__$70.buildClass(mixBlock__$98,mixItem__$96.elem)]=mixItem__$96.js===true?{}:mixItem__$96.js;addJSInitClass__$89||(addJSInitClass__$89=mixBlock__$98&&!mixItem__$96.elem)}if(hasItem__$97&&!visited__$93[visitedKey__$94(mixBlock__$98,mixElem__$99)]){visited__$93[visitedKey__$94(mixBlock__$98,mixElem__$99)]=true;var __$r__$101;var __$l6__$102=__$ctx._mode;__$ctx._mode="mix";var __$l7__$103=__$ctx.block;__$ctx.block=mixBlock__$98;var __$l8__$104=__$ctx.elem;__$ctx.elem=mixElem__$99;__$r__$101=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$102;__$ctx.block=__$l7__$103;__$ctx.elem=__$l8__$104;var nestedMix__$100=__$r__$101;if(nestedMix__$100){for(var j__$105=0;j__$105<nestedMix__$100.length;j__$105++){var nestedItem__$106=nestedMix__$100[j__$105];if(!nestedItem__$106.block&&!nestedItem__$106.elem||!visited__$93[visitedKey__$94(nestedItem__$106.block,nestedItem__$106.elem)]){nestedItem__$106._block=mixBlock__$98;nestedItem__$106._elem=mixElem__$99;mix__$90.splice(i__$95+1,0,nestedItem__$106)}}}}}}}cls__$86&&(__$ctx._str+=isBEM__$72?" "+cls__$86:cls__$86);__$ctx._str+=addJSInitClass__$89?' i-bem"':'"'}if(isBEM__$72&&jsParams__$80){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$80))+'"'}var __$r__$108;var __$l9__$109=__$ctx._mode;__$ctx._mode="attrs";__$r__$108=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$109;var attrs__$107=__$r__$108;attrs__$107=__$ctx.extend(attrs__$107,ctx__$71.attrs);if(attrs__$107){var name__$110,attr__$111;for(name__$110 in attrs__$107){attr__$111=attrs__$107[name__$110];if(typeof attr__$111==="undefined")continue;__$ctx._str+=" "+name__$110+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$111)?attr__$111:__$ctx.reapply(attr__$111))+'"'}}}if(__$ctx.isShortTag(tag__$73)){__$ctx._str+="/>"}else{tag__$73&&(__$ctx._str+=">");var __$r__$113;var __$l10__$114=__$ctx._mode;__$ctx._mode="content";__$r__$113=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$114;var content__$112=__$r__$113;if(content__$112||content__$112===0){isBEM__$72=vBlock__$77||__$ctx.elem;var __$r__$115;var __$l11__$116=__$ctx._mode;__$ctx._mode="";var __$l12__$117=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$118=__$ctx.position;__$ctx.position=isBEM__$72?1:__$ctx.position;var __$l14__$119=__$ctx._listLength;__$ctx._listLength=isBEM__$72?1:__$ctx._listLength;var __$l15__$120=__$ctx.ctx;__$ctx.ctx=content__$112;__$r__$115=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$116;__$ctx._notNewList=__$l12__$117;__$ctx.position=__$l13__$118;__$ctx._listLength=__$l14__$119;__$ctx.ctx=__$l15__$120}tag__$73&&(__$ctx._str+="</"+tag__$73+">")}res__$74=__$ctx._str;__$r__$75=undefined;__$ctx._str=__$l0__$76;__$ctx._buf.push(res__$74);return}function __$b38(__$ctx,__$ref){__$ctx.__$a=0;var val__$44=__$ctx.ctx.val;return{type:"hidden",name:__$ctx._select.name,value:__$ctx.isSimple(val__$44)?val__$44:JSON.stringify(val__$44),disabled:__$ctx.mods.disabled?"disabled":undefined}}function __$b40(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$30=__$ctx.ctx,attrs__$31={type:__$ctx.mods.type||"button",name:ctx__$30.name,value:ctx__$30.val};__$ctx.mods.disabled&&(attrs__$31.disabled="disabled");return __$ctx.extend(function(){var __$r__$32;__$ctx.__$a=14;__$r__$32=applyc(__$ctx,__$ref);return __$r__$32}(),attrs__$31)}function __$b41(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$33=__$ctx.ctx;return{role:"button",tabindex:ctx__$33.tabIndex,id:ctx__$33.id,title:ctx__$33.title}}function __$b46(__$ctx,__$ref){__$ctx.__$a=0;var attrs__$16={role:"menu"};__$ctx.mods.disabled||(attrs__$16.tabindex=0);return attrs__$16}function __$b68(__$ctx,__$ref){__$ctx.__$a=0;var mix__$60=function(){var __$r__$61;__$ctx.__$a=20;__$r__$61=applyc(__$ctx,__$ref);return __$r__$61}(),uaMix__$62=[{block:"ua",js:true}];return mix__$60?uaMix__$62.concat(mix__$60):uaMix__$62}function __$b79(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$121;var __$l0__$122=__$ctx._mode;__$ctx._mode="";var __$l1__$123=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$124;__$ctx.__$a=24;__$r__$124=applyc(__$ctx,__$ref);__$r__$121=__$r__$124;__$ctx._mode=__$l0__$122;__$ctx.ctx=__$l1__$123;return}function __$b80(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$125=__$ctx.ctx;if(ctx__$125&&ctx__$125!==true||ctx__$125===0){__$ctx._str+=ctx__$125+""}return}function __$b81(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b82(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$126=__$ctx.ctx,len__$127=ctx__$126.length,i__$128=0,prevPos__$129=__$ctx.position,prevNotNewList__$130=__$ctx._notNewList;if(prevNotNewList__$130){__$ctx._listLength+=len__$127-1}else{__$ctx.position=0;__$ctx._listLength=len__$127}__$ctx._notNewList=true;while(i__$128<len__$127)!function(){var __$r__$131;var __$l0__$132=__$ctx.ctx;__$ctx.ctx=ctx__$126[i__$128++];__$r__$131=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$132;return __$r__$131}();prevNotNewList__$130||(__$ctx.position=prevPos__$129);return}function __$b83(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$133=__$ctx.ctx.block,vElem__$134=__$ctx.ctx.elem,block__$135=__$ctx._currBlock||__$ctx.block;var __$r__$136;var __$l0__$137=__$ctx._mode;__$ctx._mode="default";var __$l1__$138=__$ctx.block;__$ctx.block=vBlock__$133||(vElem__$134?block__$135:undefined);var __$l2__$139=__$ctx._currBlock;__$ctx._currBlock=vBlock__$133||vElem__$134?undefined:block__$135;var __$l3__$140=__$ctx.elem;__$ctx.elem=vElem__$134;var __$l4__$141=__$ctx.mods;__$ctx.mods=vBlock__$133?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$142=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$136=undefined;__$ctx._mode=__$l0__$137;__$ctx.block=__$l1__$138;__$ctx._currBlock=__$l2__$139;__$ctx.elem=__$l3__$140;__$ctx.mods=__$l4__$141;__$ctx.elemMods=__$l5__$142;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.elem;if(__$t==="button"){var __$t=__$ctx.mods;if(__$t){var __$t=__$ctx.mods["mode"];if(__$t==="check"){__$ctx.__$a=0;var __$r=__$b2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="radio"){__$ctx.__$a=0;return[{elem:"text",content:__$ctx._checkedOption.text}]}}}var __$t=!__$ctx.elem;if(__$t){var __$t=__$ctx.mods;if(__$t){var __$t=__$ctx.mods["mode"];if(__$t==="radio"){if(__$ctx.__$a!==3){__$ctx.__$a=0;return[{elem:"control",val:__$ctx._checkedOption.val},function(){var __$r__$4;__$ctx.__$a=3;__$r__$4=applyc(__$ctx,__$ref);return __$r__$4}()]}}else if(__$t==="radio-check"){if(__$ctx._checkedOptions[0]&&__$ctx.__$a!==5){__$ctx.__$a=0;return[{elem:"control",val:__$ctx._checkedOptions[0].val},function(){var __$r__$10;__$ctx.__$a=5;__$r__$10=applyc(__$ctx,__$ref);return __$r__$10}()]}}}}if(__$ctx.elem==="button"&&__$ctx.mods&&__$ctx.mods["mode"]==="radio-check"){__$ctx.__$a=0;return[{elem:"text",content:(__$ctx._checkedOptions[0]||__$ctx._select).text}]}var __$t=!__$ctx.elem;if(__$t){__$ctx.__$a=0;return[{elem:"button"},{block:"popup",mods:{theme:__$ctx.mods.theme,autoclosable:true},cls:__$ctx.ctx.cls+"-popup",js:{directions:["bottom-left","bottom-right","top-left","top-right"]},content:{block:__$ctx.block,mods:__$ctx.mods,elem:"menu"}}];__$ctx.__$a=0;return[{elem:"button"},{block:"popup",mods:{theme:__$ctx.mods.theme,autoclosable:true},js:{directions:["bottom-left","bottom-right","top-left","top-right"]},content:{block:__$ctx.block,mods:__$ctx.mods,elem:"menu"}}]}return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="select"){if(!__$ctx.elem&&__$ctx.mods&&__$ctx.mods["mode"]==="check"&&__$ctx._checkedOptions[0]&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b10(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="menu"){if(__$ctx.elem==="group"&&typeof __$ctx.ctx.title!=="undefined"&&__$ctx.__$a!==7){__$ctx.__$a=0;return[{elem:"group-title",content:__$ctx.ctx.title},function(){var __$r__$12;__$ctx.__$a=7;__$r__$12=applyc(__$ctx,__$ref);return __$r__$12}()]}}else if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==19){__$ctx.__$a=0;return[function(){var __$r__$59;__$ctx.__$a=19;__$r__$59=applyc(__$ctx,__$ref);return __$r__$59}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){if(__$ctx.elem==="head"&&__$ctx.__$a!==21){__$ctx.__$a=0;return[function(){var __$r__$63;__$ctx.__$a=21;__$r__$63=applyc(__$ctx,__$ref);return __$r__$63}(),{elem:"meta",attrs:{name:"viewport",content:"width=device-width,"+(__$ctx.ctx.zoom?"initial-scale=1":"maximum-scale=1,initial-scale=1,user-scalable=0")}},{elem:"meta",attrs:{name:"format-detection",content:"telephone=no"}},{elem:"link",attrs:{name:"apple-mobile-web-app-capable",content:"yes"}}]}if(!__$ctx.elem&&__$ctx.__$a!==22){__$ctx.__$a=0;return[function(){var __$r__$64;__$ctx.__$a=22;__$r__$64=applyc(__$ctx,__$ref);return __$r__$64}(),__$ctx.ctx.scripts]}}__$ctx.__$a=0;return __$ctx.ctx.content;return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="select"){var __$t=!__$ctx.elem;if(__$t){var __$t=__$ctx.mods;if(__$t){var __$t=__$ctx.mods["mode"];if(__$t==="check"){if(__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$3;__$ctx.__$a=2;__$r__$3=applyc(__$ctx,__$ref);return __$r__$3}(),{text:__$ctx.ctx.text});if(__$r!==__$ref)return __$r}}else if(__$t==="radio-check"){if(__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$11;__$ctx.__$a=6;__$r__$11=applyc(__$ctx,__$ref);return __$r__$11}(),{text:__$ctx.ctx.text});if(__$r!==__$ref)return __$r}}if(__$ctx.mods["focused"]===true&&__$ctx.__$a!==17){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$45;__$ctx.__$a=17;__$r__$45=applyc(__$ctx,__$ref);return __$r__$45}(),{live:false});if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b20(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["focused"]===true&&__$ctx.__$a!==13){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$27;__$ctx.__$a=13;__$r__$27=applyc(__$ctx,__$ref);return __$r__$27}(),{live:false});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return true}}else if(__$t==="popup"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="menu"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["focused"]===true&&__$ctx.__$a!==9){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$14;__$ctx.__$a=9;__$r__$14=applyc(__$ctx,__$ref);return __$r__$14}(),{live:false});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return true}}else if(__$t==="menu-item"){if(!__$ctx.elem){__$ctx.__$a=0;return{val:__$ctx.ctx.val}}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined;return __$ref}function __$g3(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="select"){if(!__$ctx.elem&&__$ctx.mods&&__$ctx.mods["mode"]==="radio"&&__$ctx._checkedOptions&&__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b29(__$ctx,__$ref);if(__$r!==__$ref)return __$r}var __$t=__$ctx.elem;if(__$t==="button"){if(__$ctx.__$a!==16){__$ctx.__$a=0;var __$r=__$b30(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="menu"){if(__$ctx.__$a!==12){__$ctx.__$a=0;var __$r=__$b31(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}if(!__$ctx.elem&&!__$ctx._select&&__$ctx.__$a!==18){__$ctx.__$a=0;var __$r=__$b32(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="button"){if(!__$ctx.elem&&__$ctx.__$a!==15){__$ctx.__$a=0;var __$r=__$b33(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="menu"){if(!__$ctx.elem&&__$ctx.__$a!==11){__$ctx.__$a=0;var __$r=__$b34(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="menu-item"){if(!__$ctx.elem&&__$ctx._menuMods&&__$ctx.__$a!==10){__$ctx.__$a=0;var __$r=__$b35(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){if(!__$ctx.elem&&!__$ctx._defPageApplied&&__$ctx.__$a!==23){__$ctx.__$a=0;var __$r=__$b36(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b37(__$ctx,__$ref);if(__$r!==__$ref)return __$r;return __$ref}function __$g4(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="select"){if(__$ctx.elem==="control"){__$ctx.__$a=0;var __$r=__$b38(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="button"){if(__$ctx.elem==="text"&&typeof __$ctx._button.textMaxWidth==="number"){__$ctx.__$a=0;return{style:"max-width:"+__$ctx._button.textMaxWidth+"px"}}var __$t=!__$ctx.elem;if(__$t){if((!__$ctx.mods.type||__$ctx.mods.type==="submit")&&__$ctx.__$a!==14){__$ctx.__$a=0;var __$r=__$b40(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b41(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="icon"){if(!__$ctx.elem&&__$ctx.ctx.url){__$ctx.__$a=0;return{style:"background-image:url("+__$ctx.ctx.url+")"}}}else if(__$t==="menu"){var __$t=__$ctx.elem;if(__$t==="group-title"){__$ctx.__$a=0;return{role:"presentation"}}else if(__$t==="group"){if(typeof __$ctx.ctx.title!=="undefined"&&__$ctx.__$a!==8){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$13;__$ctx.__$a=8;__$r__$13=applyc(__$ctx,__$ref);return __$r__$13}(),{"aria-label":__$ctx.ctx.title});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return{role:"group"}}if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b46(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="menu-item"){if(!__$ctx.elem){__$ctx.__$a=0;return{role:"menuitem"}}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined;return __$ref}function __$g5(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="select"){if(__$ctx.elem==="control"){__$ctx.__$a=0;return"input"}}else if(__$t==="button"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return"span"}if(!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.tag||"button"}}else if(__$t==="icon"){if(!__$ctx.elem){__$ctx.__$a=0;return"i"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}if(!__$ctx.elem){__$ctx.__$a=0;return"body"}}__$ctx.__$a=0;return undefined;return __$ref};
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