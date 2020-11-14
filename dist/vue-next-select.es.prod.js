import{ref as e,onMounted as l,onUpdated as t,openBlock as a,createBlock as n,renderSlot as o,createVNode as u,withKeys as i,withModifiers as s,inject as d,Fragment as r,renderList as c,toDisplayString as p,createCommentVNode as h,watch as g,computed as v,provide as m,resolveComponent as y,withCtx as f,withDirectives as b,vShow as I}from"vue";var B={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup(a,n){const o=e(null);return l((()=>{a.autofocus&&o.value.focus()})),t((()=>{a.autofocus&&o.value.focus()})),{handleInput:e=>{n.emit("input",e),n.emit("update:modelValue",e.target.value)},handleChange:e=>{n.emit("change",e),n.emit("update:modelValue",e.target.value)},handleFocus:e=>{n.emit("focus",e)},handleBlur:e=>{n.emit("blur",e)},input:o,handleEscape:e=>{o.value.blur(),n.emit("escape",e)}}}};const M={class:"vue-input"};B.render=function(e,l,t,d,r,c){return a(),n("div",M,[o(e.$slots,"prepend"),u("input",{ref:"input",modelValue:t.modelValue,placeholder:t.placeholder,disabled:t.disabled,onInput:l[1]||(l[1]=(...e)=>d.handleInput(...e)),onChange:l[2]||(l[2]=(...e)=>d.handleChange(...e)),onFocus:l[3]||(l[3]=(...e)=>d.handleFocus(...e)),onBlur:l[4]||(l[4]=(...e)=>d.handleBlur(...e)),onKeyup:l[5]||(l[5]=i(s(((...e)=>d.handleEscape(...e)),["exact"]),["esc"])),tabindex:t.tabindex,autofocus:t.autofocus},null,40,["modelValue","placeholder","disabled","tabindex","autofocus"]),o(e.$slots,"append")])},B.__file="src/components/input.vue";var w={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},collapseTags:{type:Boolean}},emits:["click"],setup:(e,l)=>({dataAttrs:d("dataAttrs"),handleClick:e=>{l.emit("click",e)}})};w.render=function(e,l,t,i,d,h){return a(),n("ul",{class:["vue-tags",{collapsed:t.collapseTags}],onMousedown:l[1]||(l[1]=s((()=>{}),["prevent"])),tabindex:"-1",onClick:l[2]||(l[2]=(...e)=>i.handleClick(...e)),"data-is-focusing":i.dataAttrs.isFocusing,"data-visible-length":i.dataAttrs.visibleLength,"data-not-selected-length":i.dataAttrs.notSelectedLength,"data-selected-length":i.dataAttrs.selectedLength,"data-total-length":i.dataAttrs.totalLength},[(a(!0),n(r,null,c(t.modelValue,(l=>(a(),n("li",{key:l.key,class:["vue-tag",{selected:l.selected}]},[o(e.$slots,"default",{option:l},(()=>[u("span",null,p(l.label),1)]))],2)))),128))],42,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},w.__file="src/components/tags.vue";var V={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},headerHeight:{required:!0,type:String}},emits:["click"],setup:(e,l)=>({dataAttrs:d("dataAttrs"),handleClick:(e,t)=>{l.emit("click",e,t)}})};V.render=function(e,l,t,i,d,g){return a(),n("ul",{class:"vue-dropdown",onMousedown:l[1]||(l[1]=s((()=>{}),["prevent"])),style:{top:t.headerHeight},"data-is-focusing":i.dataAttrs.isFocusing,"data-visible-length":i.dataAttrs.visibleLength,"data-not-selected-length":i.dataAttrs.notSelectedLength,"data-selected-length":i.dataAttrs.selectedLength,"data-total-length":i.dataAttrs.totalLength},[(a(!0),n(r,null,c(t.modelValue,(l=>(a(),n(r,{key:l.key},[l.visible&&!1===l.hidden?(a(),n("li",{key:0,onClick:e=>i.handleClick(e,l),class:["vue-dropdown-item",{selected:l.selected}]},[o(e.$slots,"default",{option:l},(()=>[u("span",null,p(l.label),1)]))],10,["onClick"])):h("v-if",!0)],64)))),128))],44,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},V.__file="src/components/dropdown.vue";const k=(e,l,{valueBy:t})=>t(e)===t(l),A=(e,l,{valueBy:t})=>-1!==e.findIndex((e=>k(e,l,{valueBy:t}))),x=(e,l,{valueBy:t})=>e.find((e=>t(e)===l)),F=(e,l,{max:t,valueBy:a})=>A(e,l,{valueBy:a})||e.length+1>t?e:e.concat(l),D=(e,l,{min:t,valueBy:a})=>!1===A(e,l,{valueBy:a})||e.length-1<t?e:e.filter((e=>!1===k(e,l,{valueBy:a})));var L={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup(t,a){const{trackBy:n,labelBy:o,valueBy:u,min:i,max:s}=(e=>({trackBy:"function"==typeof e.trackBy?e.trackBy:"string"==typeof e.trackBy?l=>e.trackBy.split(".").reduce(((e,l)=>e[l]),l):e=>e,labelBy:"function"==typeof e.labelBy?e.labelBy:"string"==typeof e.labelBy?l=>e.labelBy.split(".").reduce(((e,l)=>e[l]),l):e=>e,valueBy:"function"==typeof e.valueBy?e.valueBy:"string"==typeof e.valueBy?l=>e.valueBy.split(".").reduce(((e,l)=>e[l]),l):e=>e,min:e.multiple?e.min:Math.min(1,e.min),max:e.multiple?e.max:1}))(t),d=e(null),r=e(null),c=e(!1);g((()=>c.value),(()=>{c.value?(a.emit("opened"),t.searchable&&a.emit("search:focus"),t.searchable?r.value&&r.value._.refs.input!==document.activeElement&&r.value._.refs.input.focus():!1===t.searchable&&d.value.focus()):(r.value&&r.value._.refs.input===document.activeElement&&r.value._.refs.input.blur(),d.value&&d.value===document.activeElement&&d.value.blur(),t.searchable&&a.emit("search:blur"),a.emit("closed"))}));const p=()=>{t.disabled||(c.value=!0)},h=()=>{c.value=!1};g((()=>t.disabled),(()=>h()));const y=e(null),f=(b=y,I=()=>t.modelValue,B=e("0"),g(I,M=function(){setTimeout((function(){b.value&&(B.value=window.getComputedStyle(b.value).height)}))}),l(M),B);var b,I,B,M;const w=v((()=>t.searchable&&t.multiple&&t.taggable?"22px":"0px")),V=v((()=>parseFloat(f.value)+parseFloat(w.value)+"px")),k=e(""),L=e([]),C=()=>{if(t.multiple){if(!1===Array.isArray(t.modelValue))return!1;if(L.value.length!==t.modelValue.length)return!1;if(Object.keys(L.value).some((e=>L.value[e]!==x(t.options,t.modelValue[e],{valueBy:u}))))return!1}else{if(0===L.value.length&&null!==t.modelValue)return!1;if(1===L.value.length&&null===t.modelValue)return!1;if(L.value[0]!==x(t.options,t.modelValue,{valueBy:u}))return!1}return!0},N=()=>{if(C())return;L.value=[];const e=t.multiple?t.modelValue:null===t.modelValue?[]:[t.modelValue];for(const l of e){const e=x(t.options,l,{valueBy:u});!1!==A(t.options,e,{valueBy:u})&&(L.value=F(L.value,e,{max:1/0,valueBy:u}))}};N(),g((()=>t.modelValue),(()=>{N()}),{deep:!0});g((()=>L),(()=>{(()=>{if(C())return;const e=L.value.map((e=>u(e)));t.multiple?a.emit("update:modelValue",e):e.length?a.emit("update:modelValue",e[0]):a.emit("update:modelValue",null)})()}),{deep:!0}),g((()=>t.options),(()=>{const e=new Set(L.value.map((e=>u(e))));L.value=t.options.filter((l=>e.has(u(l))))}),{deep:!0});const S=(e,l)=>{if(!t.disabled){if(l=l.originalOption,A(L.value,l,{valueBy:u}))L.value=D(L.value,l,{min:i,valueBy:u}),a.emit("removed",l);else{if(!t.multiple){const e=L.value[0];L.value=D(L.value,L.value[0],{min:0,valueBy:u}),a.emit("removed",e)}L.value=F(L.value,l,{max:s,valueBy:u}),a.emit("selected",l)}!0===t.closeOnSelect&&(c.value=!1),!0===t.clearOnSelect&&k.value&&(r.value._.refs.input.value="",r.value._.refs.input.dispatchEvent(new Event("input")),r.value._.refs.input.dispatchEvent(new Event("change")))}},O=v((()=>{const e=new Set(L.value.map((e=>u(e)))),l=null!==t.visibleOptions?new Set(t.visibleOptions.map((e=>u(e)))):new Set(t.options.map((e=>u(e))));return t.options.map((a=>({key:n(a),label:o(a),selected:e.has(u(a)),visible:l.has(u(a)),hidden:!!t.hideSelected&&e.has(u(a)),originalOption:a})))})),T=v((()=>({isFocusing:c.value,visibleLength:O.value.filter((e=>e.visible&&!1===e.hidden)).length,notSelectedLength:t.options.length-O.value.filter((e=>e.selected)).length,selectedLength:O.value.filter((e=>e.selected)).length,totalLength:t.options.length})));return m("dataAttrs",T),{isFocusing:c,wrapper:d,input:r,focus:p,blur:h,toggle:()=>{c.value?h():p()},header:y,headerAndInputHeight:V,searchingInputValue:k,handleInputForInput:e=>{a.emit("search:input",e)},handleChangeForInput:e=>{a.emit("search:change",e)},handleFocusForInput:e=>{p()},handleBlurForInput:e=>{h()},handleClickForDropdown:(e,l)=>S(0,l),handleClickForTag:(e,l)=>S(0,l),optionsWithInfo:O,addOrRemoveOption:S,dataAttrs:T}},components:{VInput:B,VTags:w,VDropdown:V}};const C={ref:"header",class:"vue-select-header"},N={key:0,class:"vue-input"},S={class:"icon loading"},O=u("div",null,null,-1),T=u("div",null,null,-1),E=u("div",null,null,-1),z={class:"icon loading"},j=u("div",null,null,-1),_=u("div",null,null,-1),Z=u("div",null,null,-1);L.render=function(e,l,t,i,d,c){const g=y("v-tags"),v=y("v-input"),m=y("v-dropdown");return a(),n("div",{ref:"wrapper",class:["vue-select",{disabled:t.disabled}],tabindex:i.isFocusing?-1:t.tabindex,onFocus:l[8]||(l[8]=(...e)=>i.focus(...e)),onBlur:l[9]||(l[9]=()=>!t.searchable&&i.blur()),"data-is-focusing":i.dataAttrs.isFocusing,"data-visible-length":i.dataAttrs.visibleLength,"data-not-selected-length":i.dataAttrs.notSelectedLength,"data-selected-length":i.dataAttrs.selectedLength,"data-total-length":i.dataAttrs.totalLength},[u("div",C,[t.multiple&&t.taggable&&0===t.modelValue.length||!1===t.searchable&&!1===t.taggable?(a(),n("div",N,[u("input",{placeholder:t.placeholder,disabled:""},null,8,["placeholder"])])):h("v-if",!0),t.multiple&&t.taggable?(a(),n(r,{key:1},[u(g,{modelValue:i.optionsWithInfo,"collapse-tags":t.collapseTags,tabindex:"-1",onClick:i.focus},{default:f((({option:l})=>[o(e.$slots,"tag",{option:l.originalOption},(()=>[u("span",null,p(l.label),1),u("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:s((()=>i.addOrRemoveOption(e.$event,l)),["prevent","stop"])},null,8,["onClick"])]))])),_:1},8,["modelValue","collapse-tags","onClick"]),u("span",{class:["icon arrow-downward",{active:i.isFocusing}],onClick:l[1]||(l[1]=(...e)=>i.toggle(...e)),onMousedown:l[2]||(l[2]=s((()=>{}),["prevent","stop"]))},null,34)],64)):(a(),n(r,{key:2},[t.searchable?(a(),n(v,{key:0,ref:"input",modelValue:i.searchingInputValue,"onUpdate:modelValue":l[3]||(l[3]=e=>i.searchingInputValue=e),disabled:t.disabled,placeholder:t.searchPlaceholder,onInput:i.handleInputForInput,onChange:i.handleChangeForInput,onFocus:i.handleFocusForInput,onBlur:i.handleBlurForInput,onEscape:i.blur,autofocus:t.autofocus||t.taggable&&t.searchable,tabindex:t.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex"])):h("v-if",!0),b(u("span",S,[O,T,E],512),[[I,t.loading]]),b(u("span",{class:["icon arrow-downward",{active:i.isFocusing}],onClick:l[4]||(l[4]=(...e)=>i.toggle(...e)),onMousedown:l[5]||(l[5]=s((()=>{}),["prevent","stop"]))},null,34),[[I,!1===t.loading]])],64))],512),t.multiple&&t.taggable&&t.searchable?b((a(),n(v,{key:0,ref:"input",modelValue:i.searchingInputValue,"onUpdate:modelValue":l[6]||(l[6]=e=>i.searchingInputValue=e),disabled:t.disabled,placeholder:t.searchPlaceholder,onInput:i.handleInputForInput,onChange:i.handleChangeForInput,onFocus:i.handleFocusForInput,onBlur:i.handleBlurForInput,onEscape:i.blur,tabindex:t.tabindex,autofocus:t.autofocus||t.taggable&&t.searchable},{append:f((()=>[b(u("span",z,[j,_,Z],512),[[I,t.loading]])])),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","tabindex","autofocus"])),[[I,i.isFocusing]]):h("v-if",!0),b(u(m,{modelValue:i.optionsWithInfo,"onUpdate:modelValue":l[7]||(l[7]=e=>i.optionsWithInfo=e),onClick:i.handleClickForDropdown,"header-height":i.headerAndInputHeight},{default:f((({option:l})=>[o(e.$slots,"dropdown-item",{option:l.originalOption},(()=>[u("span",null,p(l.label),1)]))])),_:1},8,["modelValue","onClick","header-height"]),[[I,i.isFocusing]])],42,["tabindex","data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},L.__file="src/index.vue";export default L;
