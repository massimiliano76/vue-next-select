this.VueNextSelect=function(e){"use strict";var t={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup(t,l){const a=e.ref(null);return e.onMounted((()=>{t.autofocus&&a.value.focus()})),e.onUpdated((()=>{t.autofocus&&a.value.focus()})),{handleInput:e=>{l.emit("input",e),l.emit("update:modelValue",e.target.value)},handleChange:e=>{l.emit("change",e),l.emit("update:modelValue",e.target.value)},handleFocus:e=>{l.emit("focus",e)},handleBlur:e=>{l.emit("blur",e)},input:a,handleEscape:e=>{a.value.blur(),l.emit("escape",e)}}}};const l={class:"vue-input"};t.render=function(t,a,n,o,i,u){return e.openBlock(),e.createBlock("div",l,[e.renderSlot(t.$slots,"prepend"),e.createVNode("input",{ref:"input",modelValue:n.modelValue,placeholder:n.placeholder,disabled:n.disabled,onInput:a[1]||(a[1]=(...e)=>o.handleInput(...e)),onChange:a[2]||(a[2]=(...e)=>o.handleChange(...e)),onFocus:a[3]||(a[3]=(...e)=>o.handleFocus(...e)),onBlur:a[4]||(a[4]=(...e)=>o.handleBlur(...e)),onKeyup:a[5]||(a[5]=e.withKeys(e.withModifiers(((...e)=>o.handleEscape(...e)),["exact"]),["esc"])),tabindex:n.tabindex,autofocus:n.autofocus},null,40,["modelValue","placeholder","disabled","tabindex","autofocus"]),e.renderSlot(t.$slots,"append")])},t.__file="src/components/input.vue";var a={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},collapseTags:{type:Boolean}},emits:["click"],setup:(t,l)=>({dataAttrs:e.inject("dataAttrs"),handleClick:e=>{l.emit("click",e)}})};a.render=function(t,l,a,n,o,i){return e.openBlock(),e.createBlock("ul",{class:["vue-tags",{collapsed:a.collapseTags}],onMousedown:l[1]||(l[1]=e.withModifiers((()=>{}),["prevent"])),tabindex:"-1",onClick:l[2]||(l[2]=(...e)=>n.handleClick(...e)),"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.modelValue,(l=>(e.openBlock(),e.createBlock("li",{key:l.key,class:["vue-tag",{selected:l.selected}]},[e.renderSlot(t.$slots,"default",{option:l},(()=>[e.createVNode("span",null,e.toDisplayString(l.label),1)]))],2)))),128))],42,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},a.__file="src/components/tags.vue";var n={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},headerHeight:{required:!0,type:String}},emits:["click"],setup:(t,l)=>({dataAttrs:e.inject("dataAttrs"),handleClick:(e,t)=>{l.emit("click",e,t)}})};n.render=function(t,l,a,n,o,i){return e.openBlock(),e.createBlock("ul",{class:"vue-dropdown",onMousedown:l[1]||(l[1]=e.withModifiers((()=>{}),["prevent"])),style:{top:a.headerHeight},"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.modelValue,(l=>(e.openBlock(),e.createBlock(e.Fragment,{key:l.key},[l.visible&&!1===l.hidden?(e.openBlock(),e.createBlock("li",{key:0,onClick:e=>n.handleClick(e,l),class:["vue-dropdown-item",{selected:l.selected}]},[e.renderSlot(t.$slots,"default",{option:l},(()=>[e.createVNode("span",null,e.toDisplayString(l.label),1)]))],10,["onClick"])):e.createCommentVNode("v-if",!0)],64)))),128))],44,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},n.__file="src/components/dropdown.vue";const o=(e,t,{valueBy:l})=>l(e)===l(t),i=(e,t,{valueBy:l})=>-1!==e.findIndex((e=>o(e,t,{valueBy:l}))),u=(e,t,{valueBy:l})=>e.find((e=>l(e)===t)),d=(e,t,{max:l,valueBy:a})=>i(e,t,{valueBy:a})||e.length+1>l?e:e.concat(t),s=(e,t,{min:l,valueBy:a})=>!1===i(e,t,{valueBy:a})||e.length-1<l?e:e.filter((e=>!1===o(e,t,{valueBy:a})));var r={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup(t,l){const{trackBy:a,labelBy:n,valueBy:o,min:r,max:c}=(e=>({trackBy:"function"==typeof e.trackBy?e.trackBy:"string"==typeof e.trackBy?t=>e.trackBy.split(".").reduce(((e,t)=>e[t]),t):e=>e,labelBy:"function"==typeof e.labelBy?e.labelBy:"string"==typeof e.labelBy?t=>e.labelBy.split(".").reduce(((e,t)=>e[t]),t):e=>e,valueBy:"function"==typeof e.valueBy?e.valueBy:"string"==typeof e.valueBy?t=>e.valueBy.split(".").reduce(((e,t)=>e[t]),t):e=>e,min:e.multiple?e.min:Math.min(1,e.min),max:e.multiple?e.max:1}))(t),p=e.ref(null),h=e.ref(null),g=e.ref(!1);e.watch((()=>g.value),(()=>{g.value?(l.emit("opened"),t.searchable&&l.emit("search:focus"),t.searchable?h.value&&h.value._.refs.input!==document.activeElement&&h.value._.refs.input.focus():!1===t.searchable&&p.value.focus()):(h.value&&h.value._.refs.input===document.activeElement&&h.value._.refs.input.blur(),p.value&&p.value===document.activeElement&&p.value.blur(),t.searchable&&l.emit("search:blur"),l.emit("closed"))}));const v=()=>{t.disabled||(g.value=!0)},m=()=>{g.value=!1};e.watch((()=>t.disabled),(()=>m()));const y=e.ref(null),f=(b=y,B=()=>t.modelValue,w=e.ref("0"),I=function(){setTimeout((function(){b.value&&(w.value=window.getComputedStyle(b.value).height)}))},e.watch(B,I),e.onMounted(I),w);var b,B,w,I;const V=e.computed((()=>t.searchable&&t.multiple&&t.taggable?"22px":"0px")),k=e.computed((()=>parseFloat(f.value)+parseFloat(V.value)+"px")),M=e.ref(""),N=e.ref([]),S=()=>{if(t.multiple){if(!1===Array.isArray(t.modelValue))return!1;if(N.value.length!==t.modelValue.length)return!1;if(Object.keys(N.value).some((e=>N.value[e]!==u(t.options,t.modelValue[e],{valueBy:o}))))return!1}else{if(0===N.value.length&&null!==t.modelValue)return!1;if(1===N.value.length&&null===t.modelValue)return!1;if(N.value[0]!==u(t.options,t.modelValue,{valueBy:o}))return!1}return!0},A=()=>{if(S())return;N.value=[];const e=t.multiple?t.modelValue:null===t.modelValue?[]:[t.modelValue];for(const l of e){const e=u(t.options,l,{valueBy:o});!1!==i(t.options,e,{valueBy:o})&&(N.value=d(N.value,e,{max:1/0,valueBy:o}))}};A(),e.watch((()=>t.modelValue),(()=>{A()}),{deep:!0});e.watch((()=>N),(()=>{(()=>{if(S())return;const e=N.value.map((e=>o(e)));t.multiple?l.emit("update:modelValue",e):e.length?l.emit("update:modelValue",e[0]):l.emit("update:modelValue",null)})()}),{deep:!0}),e.watch((()=>t.options),(()=>{const e=new Set(N.value.map((e=>o(e))));N.value=t.options.filter((t=>e.has(o(t))))}),{deep:!0});const D=(e,a)=>{if(!t.disabled){if(a=a.originalOption,i(N.value,a,{valueBy:o}))N.value=s(N.value,a,{min:r,valueBy:o}),l.emit("removed",a);else{if(!t.multiple){const e=N.value[0];N.value=s(N.value,N.value[0],{min:0,valueBy:o}),l.emit("removed",e)}N.value=d(N.value,a,{max:c,valueBy:o}),l.emit("selected",a)}!0===t.closeOnSelect&&(g.value=!1),!0===t.clearOnSelect&&M.value&&(h.value._.refs.input.value="",h.value._.refs.input.dispatchEvent(new Event("input")),h.value._.refs.input.dispatchEvent(new Event("change")))}},x=e.computed((()=>{const e=new Set(N.value.map((e=>o(e)))),l=null!==t.visibleOptions?new Set(t.visibleOptions.map((e=>o(e)))):new Set(t.options.map((e=>o(e))));return t.options.map((i=>({key:a(i),label:n(i),selected:e.has(o(i)),visible:l.has(o(i)),hidden:!!t.hideSelected&&e.has(o(i)),originalOption:i})))})),C=e.computed((()=>({isFocusing:g.value,visibleLength:x.value.filter((e=>e.visible&&!1===e.hidden)).length,notSelectedLength:t.options.length-x.value.filter((e=>e.selected)).length,selectedLength:x.value.filter((e=>e.selected)).length,totalLength:t.options.length})));return e.provide("dataAttrs",C),{isFocusing:g,wrapper:p,input:h,focus:v,blur:m,toggle:()=>{g.value?m():v()},header:y,headerAndInputHeight:k,searchingInputValue:M,handleInputForInput:e=>{l.emit("search:input",e)},handleChangeForInput:e=>{l.emit("search:change",e)},handleFocusForInput:e=>{v()},handleBlurForInput:e=>{m()},handleClickForDropdown:(e,t)=>D(0,t),handleClickForTag:(e,t)=>D(0,t),optionsWithInfo:x,addOrRemoveOption:D,dataAttrs:C}},components:{VInput:t,VTags:a,VDropdown:n}};const c={ref:"header",class:"vue-select-header"},p={key:0,class:"vue-input"},h={class:"icon loading"},g=e.createVNode("div",null,null,-1),v=e.createVNode("div",null,null,-1),m=e.createVNode("div",null,null,-1),y={class:"icon loading"},f=e.createVNode("div",null,null,-1),b=e.createVNode("div",null,null,-1),B=e.createVNode("div",null,null,-1);return r.render=function(t,l,a,n,o,i){const u=e.resolveComponent("v-tags"),d=e.resolveComponent("v-input"),s=e.resolveComponent("v-dropdown");return e.openBlock(),e.createBlock("div",{ref:"wrapper",class:["vue-select",{disabled:a.disabled}],tabindex:n.isFocusing?-1:a.tabindex,onFocus:l[8]||(l[8]=(...e)=>n.focus(...e)),onBlur:l[9]||(l[9]=()=>!a.searchable&&n.blur()),"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[e.createVNode("div",c,[a.multiple&&a.taggable&&0===a.modelValue.length||!1===a.searchable&&!1===a.taggable?(e.openBlock(),e.createBlock("div",p,[e.createVNode("input",{placeholder:a.placeholder,disabled:""},null,8,["placeholder"])])):e.createCommentVNode("v-if",!0),a.multiple&&a.taggable?(e.openBlock(),e.createBlock(e.Fragment,{key:1},[e.createVNode(u,{modelValue:n.optionsWithInfo,"collapse-tags":a.collapseTags,tabindex:"-1",onClick:n.focus},{default:e.withCtx((({option:l})=>[e.renderSlot(t.$slots,"tag",{option:l.originalOption},(()=>[e.createVNode("span",null,e.toDisplayString(l.label),1),e.createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:e.withModifiers((()=>n.addOrRemoveOption(t.$event,l)),["prevent","stop"])},null,8,["onClick"])]))])),_:1},8,["modelValue","collapse-tags","onClick"]),e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:l[1]||(l[1]=(...e)=>n.toggle(...e)),onMousedown:l[2]||(l[2]=e.withModifiers((()=>{}),["prevent","stop"]))},null,34)],64)):(e.openBlock(),e.createBlock(e.Fragment,{key:2},[a.searchable?(e.openBlock(),e.createBlock(d,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":l[3]||(l[3]=e=>n.searchingInputValue=e),disabled:a.disabled,placeholder:a.searchPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,autofocus:a.autofocus||a.taggable&&a.searchable,tabindex:a.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex"])):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode("span",h,[g,v,m],512),[[e.vShow,a.loading]]),e.withDirectives(e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:l[4]||(l[4]=(...e)=>n.toggle(...e)),onMousedown:l[5]||(l[5]=e.withModifiers((()=>{}),["prevent","stop"]))},null,34),[[e.vShow,!1===a.loading]])],64))],512),a.multiple&&a.taggable&&a.searchable?e.withDirectives((e.openBlock(),e.createBlock(d,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":l[6]||(l[6]=e=>n.searchingInputValue=e),disabled:a.disabled,placeholder:a.searchPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,tabindex:a.tabindex,autofocus:a.autofocus||a.taggable&&a.searchable},{append:e.withCtx((()=>[e.withDirectives(e.createVNode("span",y,[f,b,B],512),[[e.vShow,a.loading]])])),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","tabindex","autofocus"])),[[e.vShow,n.isFocusing]]):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode(s,{modelValue:n.optionsWithInfo,"onUpdate:modelValue":l[7]||(l[7]=e=>n.optionsWithInfo=e),onClick:n.handleClickForDropdown,"header-height":n.headerAndInputHeight},{default:e.withCtx((({option:l})=>[e.renderSlot(t.$slots,"dropdown-item",{option:l.originalOption},(()=>[e.createVNode("span",null,e.toDisplayString(l.label),1)]))])),_:1},8,["modelValue","onClick","header-height"]),[[e.vShow,n.isFocusing]])],42,["tabindex","data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},r.__file="src/index.vue",r}(Vue);
