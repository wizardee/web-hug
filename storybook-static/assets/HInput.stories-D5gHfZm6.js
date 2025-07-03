import{d as Ce,m as y,x as Ne,h as b,f as B,w as x,o as H,j as q,e as A,r as z,v as R,u as Y,g as qe,c as Ae,y as ze,F as Re,p as Ve,z as Ee,q as K,s as Oe,a as Q,A as Te,B as $e}from"./iframe-kUl2Eh6x.js";import{g as P,o as De,d as N,f as X,a as ee,_ as Fe,w as _e}from"./HFlexInliner-EGzLcBua.js";import"./_commonjsHelpers-Cpj98o6Y.js";const He=Ce({__name:"HBaseField",props:{labelWrapperProps:{},boxInlinerBaseProps:{},preIconWrapperProps:{},postIconWrapperProps:{},messageWrapperCoreProps:{},messages:{},labelPosition:{default:"left"},hasMessage:{type:Boolean,default:!1},placeholder:{},readonly:{type:Boolean,default:!1},label:{},validationOption:{},preIconName:{},postIconName:{},hasAsterisk:{type:Boolean,default:!1},size:{},type:{},containerZIndex:{},contentPosition:{},isLoading:{type:Boolean},isDisabled:{type:Boolean,default:!1},tooltipOption:{},componentPseudoState:{},className:{},styles:{}},emits:["onChangeState","onChangeExpand","onClickInside"],setup(t,{expose:e,emit:s}){const a=t;e({setClickInside:c});const n=s,o=y(!1),i=y(null),m=P("error","foreground","normal","default");De(i,()=>c(!1)),Ne(()=>o.value,l=>{n("onChangeExpand",l)});const f=b(()=>a.isDisabled||a.readonly),d=b(()=>{const{labelPosition:l,hasMessage:r,label:p}=a,S=l==="left"?"grid grid-rows-[minmax(min-content,max-content)] grid-cols-[auto_minmax(0,1fr)]":"grid grid-rows-[auto] grid-cols-[1fr]",k="gap-row-2",M=p?"gap-col-2":"gap-col-0",w=l==="top"?k:r?[k,M].join(" "):M;return[S,w].join(" ")}),g=b(()=>(l,r)=>{const{labelPosition:p}=a;return p==="left"?`grid-row-start-${l} grid-row-end-auto grid-col-start-${r} grid-col-end-auto`:"w-full"}),h=b(()=>{const{isDisabled:l,componentPseudoState:r}=a;return{componentPseudoState:r,isDisabled:l,className:"w-full relative"}}),u=b(()=>l=>{const{messageWrapperCoreProps:r}=a;if(!r)return{text:l};const{className:p="",styles:S={}}=r,k=`flex ${p}`;return{text:l,className:k,styles:S}});function c(l){o.value=l}function v(){f.value||n("onClickInside")}return(l,r)=>(H(),B(N,{"class-name":l.className,styles:l.styles},{default:x(()=>[q(N,{"class-name":d.value},{default:x(()=>[q(N,{"class-name":"flex gap-1"},{default:x(()=>[q(X,R({"class-name":g.value(1,1)},l.labelWrapperProps),null,16,["class-name"]),l.hasAsterisk?(H(),B(N,{key:0,"class-name":"h-typo-caption-1",styles:{color:Y(m)}},{default:x(()=>r[1]||(r[1]=[qe("* 필수")])),_:1,__:[1]},8,["styles"])):A("",!0),l.$slots["post-label"]?z(l.$slots,"post-label",{key:1}):A("",!0)]),_:3}),q(ee,{"class-name":g.value(1,2)},{"main-slot":x(()=>[q(Fe,R({ref_key:"boxRef",ref:i},h.value,{onOnChangeState:r[0]||(r[0]=p=>n("onChangeState",p))}),{default:x(()=>[q(ee,{"class-name":a.boxInlinerBaseProps.className??" w-full","post-icon-wrapper-props":l.postIconWrapperProps,"pre-icon-wrapper-props":l.preIconWrapperProps,styles:a.boxInlinerBaseProps.styles,onClick:v},{"pre-most":x(()=>[z(l.$slots,"pre-most")]),"main-slot":x(()=>[z(l.$slots,"main-slot")]),_:3},8,["class-name","post-icon-wrapper-props","pre-icon-wrapper-props","styles"]),z(l.$slots,"field-additional")]),_:3},16)]),_:3},8,["class-name"]),l.labelPosition==="left"&&l.hasMessage?(H(),B(N,{key:0,"class-name":g.value(2,1)},null,8,["class-name"])):A("",!0),l.hasMessage?(H(),B(N,{key:1,"class-name":g.value(2,2)},{default:x(()=>[q(N,{"class-name":"w-inherit h-inherit flex flex-col gap-0.5"},{default:x(()=>[(H(!0),Ae(Re,null,ze(l.messages,p=>(H(),B(X,R({key:p},{ref_for:!0},u.value(p)),null,16))),128))]),_:1})]),_:1},8,["class-name"])):A("",!0)]),_:3},8,["class-name"])]),_:3},8,["class-name","styles"]))}});He.__docgenInfo={exportName:"default",displayName:"HBaseField",description:"",tags:{},expose:[{name:"setClickInside"}],props:[{name:"contentPosition",required:!1,type:{name:"PositionY"}},{name:"containerZIndex",required:!1,type:{name:"number"}},{name:"type",required:!0,type:{name:"HFieldType"}},{name:"size",required:!0,type:{name:"HFieldSize"}},{name:"hasAsterisk",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"postIconName",required:!1,type:{name:"IconName"}},{name:"preIconName",required:!1,type:{name:"IconName"}},{name:"validationOption",required:!1,type:{name:"HFieldValidationOption"}},{name:"label",required:!1,type:{name:"string"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hasMessage",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"labelPosition",required:!1,type:{name:"Extract",elements:[{name:"Position"},{name:"union",elements:[{name:'"top"'},{name:'"left"'}]}]},defaultValue:{func:!1,value:"'left'"}},{name:"isLoading",required:!1,type:{name:"boolean"}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tooltipOption",required:!1,type:{name:"TooltipOption"}},{name:"componentPseudoState",required:!1,type:{name:"SemanticPseudo",elements:[{name:"S"}]}},{name:"className",required:!1,type:{name:"string"}},{name:"styles",required:!1,type:{name:"Partial",elements:[{name:"CSSStyleDeclaration"}]}},{name:"labelWrapperProps",required:!0,type:{name:"HTextWrapperProps"}},{name:"boxInlinerBaseProps",required:!0,type:{name:"HBaseProps"}},{name:"preIconWrapperProps",required:!1,type:{name:"HIconWrapperProps"}},{name:"postIconWrapperProps",required:!1,type:{name:"HIconWrapperProps"}},{name:"messageWrapperCoreProps",required:!1,type:{name:"HTextWrapperCoreProps"}},{name:"messages",required:!1,type:{name:"Array",elements:[{name:"string"}]}}],events:[{name:"onChangeState"},{name:"onChangeExpand"},{name:"onClickInside"}],slots:[{name:"post-label"},{name:"pre-most"},{name:"main-slot"},{name:"field-additional"}],sourceFiles:["/home/herit/projects/ai/claude-code/h-design-system/src/components/field/HBaseField.vue"]};var Le=Object.defineProperty,je=(t,e,s)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,V=(t,e,s)=>je(t,typeof e!="symbol"?e+"":e,s);const ae={"#":{pattern:/[0-9]/},"@":{pattern:/[a-zA-Z]/},"*":{pattern:/[a-zA-Z0-9]/}},se=(t,e,s)=>t.replaceAll(e,"").replace(s,".").replace("..",".").replace(/[^.\d]/g,""),te=(t,e,s)=>{var a;return new Intl.NumberFormat(((a=s.number)==null?void 0:a.locale)??"en",{minimumFractionDigits:t,maximumFractionDigits:e,roundingMode:"trunc"})},Ze=(t,e=!0,s)=>{var a,n,o,i;const m=((a=s.number)==null?void 0:a.unsigned)!==!0&&t.startsWith("-")?"-":"",f=((n=s.number)==null?void 0:n.fraction)??0;let d=te(0,f,s);const g=d.formatToParts(1000.12),h=((o=g.find(r=>r.type==="group"))==null?void 0:o.value)??" ",u=((i=g.find(r=>r.type==="decimal"))==null?void 0:i.value)??".",c=se(t,h,u);if(Number.isNaN(parseFloat(c)))return m;const v=c.split(".");if(v[1]!=null&&v[1].length>=1){const r=v[1].length<=f?v[1].length:f;d=te(r,f,s)}let l=d.format(parseFloat(c));return e?f>0&&c.endsWith(".")&&!c.slice(0,-1).includes(".")&&(l+=u):l=se(l,h,u),m+l};class Ue{constructor(e={}){V(this,"opts",{}),V(this,"memo",new Map);const s={...e};if(s.tokens!=null){s.tokens=s.tokensReplace?{...s.tokens}:{...ae,...s.tokens};for(const a of Object.values(s.tokens))typeof a.pattern=="string"&&(a.pattern=new RegExp(a.pattern))}else s.tokens=ae;Array.isArray(s.mask)&&(s.mask.length>1?s.mask=[...s.mask].sort((a,n)=>a.length-n.length):s.mask=s.mask[0]??""),s.mask===""&&(s.mask=null),this.opts=s}masked(e){return this.process(String(e),this.findMask(String(e)))}unmasked(e){return this.process(String(e),this.findMask(String(e)),!1)}isEager(){return this.opts.eager===!0}isReversed(){return this.opts.reversed===!0}completed(e){const s=this.findMask(String(e));if(this.opts.mask==null||s==null)return!1;const a=this.process(String(e),s).length;return typeof this.opts.mask=="string"?a>=this.opts.mask.length:a>=s.length}findMask(e){const s=this.opts.mask;if(s==null)return null;if(typeof s=="string")return s;if(typeof s=="function")return s(e);const a=this.process(e,s.slice(-1).pop()??"",!1);return s.find(n=>this.process(e,n,!1).length>=a.length)??""}escapeMask(e){const s=[],a=[];return e.split("").forEach((n,o)=>{n==="!"&&e[o-1]!=="!"?a.push(o-a.length):s.push(n)}),{mask:s.join(""),escaped:a}}process(e,s,a=!0){if(this.opts.number!=null)return Ze(e,a,this.opts);if(s==null)return e;const n=`v=${e},mr=${s},m=${a?1:0}`;if(this.memo.has(n))return this.memo.get(n);const{mask:o,escaped:i}=this.escapeMask(s),m=[],f=this.opts.tokens!=null?this.opts.tokens:{},d=this.isReversed()?-1:1,g=this.isReversed()?"unshift":"push",h=this.isReversed()?0:o.length-1,u=this.isReversed()?()=>r>-1&&p>-1:()=>r<o.length&&p<e.length,c=k=>!this.isReversed()&&k<=h||this.isReversed()&&k>=h;let v,l=-1,r=this.isReversed()?o.length-1:0,p=this.isReversed()?e.length-1:0,S=!1;for(;u();){const k=o.charAt(r),M=f[k],w=(M==null?void 0:M.transform)!=null?M.transform(e.charAt(p)):e.charAt(p);if(!i.includes(r)&&M!=null?(w.match(M.pattern)!=null?(m[g](w),M.repeated?(l===-1?l=r:r===h&&r!==l&&(r=l-d),h===l&&(r-=d)):M.multiple&&(S=!0,r-=d),r+=d):M.multiple?S&&(r+=d,p-=d,S=!1):w===v?v=void 0:M.optional&&(r+=d,p-=d),p+=d):(a&&!this.isEager()&&m[g](k),w===k&&!this.isEager()?p+=d:v=k,this.isEager()||(r+=d)),this.isEager())for(;c(r)&&(f[o.charAt(r)]==null||i.includes(r));){if(a){if(m[g](o.charAt(r)),e.charAt(p)===o.charAt(r)){r+=d,p+=d;continue}}else o.charAt(r)===e.charAt(p)&&(p+=d);r+=d}}return this.memo.set(n,m.join("")),this.memo.get(n)}}const We=t=>JSON.parse(t.replaceAll("'",'"')),Ge=(t,e={})=>{const s={...e};t.dataset.maska!=null&&t.dataset.maska!==""&&(s.mask=Je(t.dataset.maska)),t.dataset.maskaEager!=null&&(s.eager=T(t.dataset.maskaEager)),t.dataset.maskaReversed!=null&&(s.reversed=T(t.dataset.maskaReversed)),t.dataset.maskaTokensReplace!=null&&(s.tokensReplace=T(t.dataset.maskaTokensReplace)),t.dataset.maskaTokens!=null&&(s.tokens=Ye(t.dataset.maskaTokens));const a={};return t.dataset.maskaNumberLocale!=null&&(a.locale=t.dataset.maskaNumberLocale),t.dataset.maskaNumberFraction!=null&&(a.fraction=parseInt(t.dataset.maskaNumberFraction)),t.dataset.maskaNumberUnsigned!=null&&(a.unsigned=T(t.dataset.maskaNumberUnsigned)),(t.dataset.maskaNumber!=null||Object.values(a).length>0)&&(s.number=a),s},T=t=>t!==""?!!JSON.parse(t):!0,Je=t=>t.startsWith("[")&&t.endsWith("]")?We(t):t,Ye=t=>{if(t.startsWith("{")&&t.endsWith("}"))return We(t);const e={};return t.split("|").forEach(s=>{const a=s.split(":");e[a[0]]={pattern:new RegExp(a[1]),optional:a[2]==="optional",multiple:a[2]==="multiple",repeated:a[2]==="repeated"}}),e};class Ke{constructor(e,s={}){V(this,"items",new Map),V(this,"eventAbortController"),V(this,"onInput",a=>{if(a instanceof CustomEvent&&a.type==="input"&&!a.isTrusted&&!a.bubbles)return;const n=a.target,o=this.items.get(n);if(o===void 0)return;const i="inputType"in a&&a.inputType.startsWith("delete"),m=o.isEager(),f=i&&m&&o.unmasked(n.value)===""?"":n.value;this.fixCursor(n,i,()=>this.setValue(n,f))}),this.options=s,this.eventAbortController=new AbortController,this.init(this.getInputs(e))}update(e={}){this.options={...e},this.init(Array.from(this.items.keys()))}updateValue(e){var s;e.value!==""&&e.value!==((s=this.processInput(e))==null?void 0:s.masked)&&this.setValue(e,e.value)}destroy(){this.eventAbortController.abort(),this.items.clear()}init(e){const s=this.getOptions(this.options);for(const a of e){if(!this.items.has(a)){const{signal:o}=this.eventAbortController;a.addEventListener("input",this.onInput,{capture:!0,signal:o})}const n=new Ue(Ge(a,s));this.items.set(a,n),queueMicrotask(()=>this.updateValue(a)),a.selectionStart===null&&n.isEager()&&console.warn("Maska: input of `%s` type is not supported",a.type)}}getInputs(e){return typeof e=="string"?Array.from(document.querySelectorAll(e)):"length"in e?Array.from(e):[e]}getOptions(e){const{onMaska:s,preProcess:a,postProcess:n,...o}=e;return o}fixCursor(e,s,a){var n,o;const i=e.selectionStart,m=e.value;if(a(),i===null||i===m.length&&!s)return;const f=e.value,d=m.slice(0,i),g=f.slice(0,i),h=(n=this.processInput(e,d))==null?void 0:n.unmasked,u=(o=this.processInput(e,g))==null?void 0:o.unmasked;if(h===void 0||u===void 0)return;let c=i;d!==g&&(c+=s?f.length-m.length:h.length-u.length),e.setSelectionRange(c,c)}setValue(e,s){const a=this.processInput(e,s);a!==void 0&&(e.value=a.masked,this.options.onMaska!=null&&(Array.isArray(this.options.onMaska)?this.options.onMaska.forEach(n=>n(a)):this.options.onMaska(a)),e.dispatchEvent(new CustomEvent("maska",{detail:a})),e.dispatchEvent(new CustomEvent("input",{detail:a.masked})))}processInput(e,s){const a=this.items.get(e);if(a===void 0)return;let n=s??e.value;this.options.preProcess!=null&&(n=this.options.preProcess(n));let o=a.masked(n);return this.options.postProcess!=null&&(o=this.options.postProcess(o)),{masked:o,unmasked:a.unmasked(n),completed:a.completed(n)}}}const J=new WeakMap,Qe=(t,e)=>{if(t.arg==null||t.instance==null)return;const s="setup"in t.instance.$.type;t.arg in t.instance?t.instance[t.arg]=e:s&&console.warn("Maska: please expose `%s` using defineExpose",t.arg)},Xe=(t,e)=>{var s;const a=t instanceof HTMLInputElement?t:t.querySelector("input");if(a==null||(a==null?void 0:a.type)==="file")return;let n={};if(e.value!=null&&(n=typeof e.value=="string"?{mask:e.value}:{...e.value}),e.arg!=null){const o=i=>{const m=e.modifiers.unmasked?i.unmasked:e.modifiers.completed?i.completed:i.masked;Qe(e,m)};n.onMaska=n.onMaska==null?o:Array.isArray(n.onMaska)?[...n.onMaska,o]:[n.onMaska,o]}J.has(a)?(s=J.get(a))==null||s.update(n):J.set(a,new Ke(a,n))};function ea({target:t,debounce:e,deep:s=!1}){const a=y(t.value),n=y(t.value),o=i=>a.value=i;return Ve(()=>a.value=t.value),_e(a,i=>{n.value=i},{debounce:e,deep:s}),[n,o]}const aa=(t,e)=>e.map(s=>{const a=s.safeParse(t);return a.success?a.data:null}).filter(Boolean),sa=(t,e)=>{if(!t)return{state:void 0,messages:[]};const{validator:s,warningSchemaList:a=[],validationStateList:n=[]}=t,o=aa(e,a),i=s.safeParse(e),{success:m,error:f}=i,d=h=>n.indexOf(h)!==-1,g=h=>d(h)?h:void 0;return m?o.length!==0?{state:g("warning"),messages:d("warning")?o:[]}:{state:g("success"),messages:d("success")?["올바른 입력"]:[]}:{state:g("error"),messages:d("error")?f.issues.map(h=>h.message):[]}};function ta(t,e){const s=y(t.isDisabled?"disabled":t.readonly?"readonly":"default"),a=y(void 0),n=y([]);function o(){const{validationOption:i,hasMessage:m}=t;if(!i)return;const f=e.value,d=sa(i,f);a.value=d.state,n.value=m?d.messages:[]}return{fieldState:s,validState:a,messages:n,validate:o}}const na={xlg:"2.5rem",lg:"2.25rem",md:"2rem"},ne={error:"error",success:"info",warning:"warning"},oe={xlg:"h-typo-body-2-normal h-font-regular",lg:"h-typo-body-2-normal h-font-regular",md:"h-typo-label-1-normal h-font-regular"};function oa(t,e,s,a,n=!1){const o=Ee(a)?a:y(a),i=b(()=>{const{size:u,label:c}=o.value,v=`${oe[u]} items-center flex`,l=t.value==="disabled"?"disabled":"default",r=P("secondary","foreground","normal",l);return{className:v,styles:{color:r},text:c??""}}),m=b(()=>{const u=t.value,c=e.value,{size:v,type:l}=o.value,r=na[v],p=u==="readonly",S=c?P("secondary","foreground","normal","default"):P("secondary","foreground",p?"normal":"inverse",p?"default":u),k=l==="outlined"?"1px":"0",M=c?P(ne[c],"stroke","normal","default"):P("secondary","stroke","normal",p?"default":u),w=`${k} solid ${M}`,U=oe[v],G=l==="filled"?P("secondary","background","strong",u==="disabled"?"disabled":u):"transparent",E="0.5rem";return{className:`rounded-1 ${U}`,styles:{height:r,color:S,border:w,backgroundColor:G,paddingLeft:E,paddingRight:n?0:E,gap:"0.5rem"}}}),f=b(()=>{const u="1.25rem",c=e.value,v=t.value==="disabled"?"disabled":"default",l=c?P("secondary","foreground","normal","default"):P("secondary","foreground","strong",v);return{width:u,height:u,color:l}}),d=b(()=>{const{preIconName:u}=o.value;return u?{...f.value,iconName:u}:void 0}),g=b(()=>{const{postIconName:u}=o.value;return u?{...f.value,iconName:u}:void 0}),h=b(()=>{const u=e.value,c="h-typo-label-1-normal h-font-regular",v=u?P(ne[u],"foreground","normal","default"):"";return{className:c,styles:{color:v}}});return b(()=>({...o.value,labelWrapperProps:i.value,boxInlinerBaseProps:m.value,preIconWrapperProps:d.value,postIconWrapperProps:g.value,messageWrapperCoreProps:h.value,messages:s.value}))}const la=["placeholder","readonly","type","value"],ra="0 0.25rem 0.25rem 0",Be=Ce({__name:"HInput",props:K({mask:{},isPassword:{type:Boolean,default:!1},debounce:{default:200},hasButton:{type:Boolean,default:!1},labelPosition:{default:"left"},hasMessage:{type:Boolean,default:!1},placeholder:{default:"입력하세요"},readonly:{type:Boolean,default:!1},label:{},validationOption:{},preIconName:{},postIconName:{},hasAsterisk:{type:Boolean},size:{},type:{},containerZIndex:{},contentPosition:{},isLoading:{type:Boolean},isDisabled:{type:Boolean,default:!1},tooltipOption:{},componentPseudoState:{},className:{},styles:{}},{inputModel:{},inputModelModifiers:{}}),emits:K(["onClickSearch"],["update:inputModel"]),setup(t,{expose:e,emit:s}){const a=t,n=y(null),o=s;e({getUpdatedValidState:E});const i=Oe(t,"inputModel"),m=b(()=>a.isDisabled||a.readonly),f=b(()=>a.isDisabled),d=b(()=>`flex-1 flex h-full items-center ${m.value?"cursor-not-allowed":"cursor-text"}`),{fieldState:g,validState:h,messages:u,validate:c}=ta(a,i),[v,l]=ea({target:i,debounce:a.debounce}),r=b(()=>a.mask?{mask:a.mask,eager:!0}:{}),p=I=>l(I.target.value);Ne(v,I=>i.value=I);const S=b(()=>a),k=oa(g,h,u,S,a.hasButton),M=P("secondary","background","strong","default"),w=b(()=>{const I=P(f.value?"disabled":"secondary","foreground","normal","default"),O=`1px solid ${P("secondary","stroke","strong",g.value)}`;return{className:"w-10 h-full flex items-center justify-center h-typo-label-1-normal h-font-semiBold",styles:{color:I,backgroundColor:M,borderLeft:O,borderRadius:ra}}});function U(I){I||c()}function G(){n.value.setClickInside(!0)}function E(){return c(),h.value}return(I,C)=>(H(),B(He,R({ref_key:"fieldRef",ref:n},Y(k),{onOnChangeExpand:U,onOnClickInside:G,onOnChangeState:C[2]||(C[2]=O=>g.value=O)}),{"post-label":x(()=>[z(I.$slots,"post-label",{},void 0,!0)]),"main-slot":x(()=>[q(N,{"class-name":d.value},{default:x(()=>[Q("form",{onSubmit:C[0]||(C[0]=Te(()=>{},["prevent"])),novalidate:""},[$e(Q("input",{placeholder:I.placeholder,tabindex:"1",readonly:m.value,type:I.isPassword?"password":"text",value:i.value,autocomplete:"off",onInput:p},null,40,la),[[Y(Xe),r.value]])],32)]),_:1},8,["class-name"]),I.hasButton?(H(),B(N,R({key:0},w.value,{onClick:C[1]||(C[1]=O=>o("onClickSearch"))}),{default:x(()=>C[3]||(C[3]=[qe(" 검색 ")])),_:1,__:[3]},16)):A("",!0)]),_:3},16))}}),ia=(t,e)=>{const s=t.__vccOpts||t;for(const[a,n]of e)s[a]=n;return s},W=ia(Be,[["__scopeId","data-v-af13b52b"]]);Be.__docgenInfo={exportName:"default",displayName:"HInput",description:"",tags:{},expose:[{name:"getUpdatedValidState"}],props:[{name:"contentPosition",required:!1,type:{name:"PositionY"}},{name:"containerZIndex",required:!1,type:{name:"number"}},{name:"type",required:!0,type:{name:"HFieldType"}},{name:"size",required:!0,type:{name:"HFieldSize"}},{name:"hasAsterisk",required:!1,type:{name:"boolean"}},{name:"postIconName",required:!1,type:{name:"IconName"}},{name:"preIconName",required:!1,type:{name:"IconName"}},{name:"validationOption",required:!1,type:{name:"HFieldValidationOption"}},{name:"label",required:!1,type:{name:"string"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'입력하세요'"}},{name:"hasMessage",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"labelPosition",required:!1,type:{name:"Extract",elements:[{name:"Position"},{name:"union",elements:[{name:'"top"'},{name:'"left"'}]}]},defaultValue:{func:!1,value:"'left'"}},{name:"isLoading",required:!1,type:{name:"boolean"}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tooltipOption",required:!1,type:{name:"TooltipOption"}},{name:"componentPseudoState",required:!1,type:{name:"SemanticPseudo",elements:[{name:"S"}]}},{name:"className",required:!1,type:{name:"string"}},{name:"styles",required:!1,type:{name:"Partial",elements:[{name:"CSSStyleDeclaration"}]}},{name:"mask",required:!1,type:{name:"MaskType"}},{name:"isPassword",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"debounce",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"hasButton",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"onClickSearch"}],slots:[{name:"post-label"}],sourceFiles:["/home/herit/projects/ai/claude-code/h-design-system/src/components/input/HInput.vue"]};const ca={title:"Components/HInput",component:W,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelPosition:{control:"select",options:["left","top"]},size:{control:"select",options:["sm","md","lg"]},label:{control:"text"},placeholder:{control:"text"},mask:{control:"text"},isDisabled:{control:"boolean"},readonly:{control:"boolean"},isPassword:{control:"boolean"},hasButton:{control:"boolean"},hasMessage:{control:"boolean"},debounce:{control:"number"}}},$={args:{label:"Input Label",placeholder:"입력하세요",size:"md",labelPosition:"left"},render:t=>({components:{HInput:W},setup(){const e=y("");return{args:t,inputModel:e}},template:`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
        <p style="margin-top: 8px; font-size: 12px; color: #666;">
          입력된 값: {{ inputModel }}
        </p>
      </div>
    `})},D={args:{label:"이메일",placeholder:"example@email.com",size:"md",hasMessage:!0,validationRules:[{type:"required",message:"이메일을 입력해주세요."},{type:"email",message:"올바른 이메일 형식이 아닙니다."}]},render:t=>({components:{HInput:W},setup(){const e=y("");return{args:t,inputModel:e}},template:`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
      </div>
    `})},F={args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",isPassword:!0,size:"md"},render:t=>({components:{HInput:W},setup(){const e=y("");return{args:t,inputModel:e}},template:`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
      </div>
    `})},_={args:{label:"전화번호",placeholder:"010-0000-0000",mask:"###-####-####",size:"md"},render:t=>({components:{HInput:W},setup(){const e=y("");return{args:t,inputModel:e}},template:`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
        <p style="margin-top: 8px; font-size: 12px; color: #666;">
          입력된 값: {{ inputModel }}
        </p>
      </div>
    `})},L={args:{label:"검색",placeholder:"검색어를 입력하세요",hasButton:!0,size:"md"},render:t=>({components:{HInput:W},setup(){const e=y("");return{args:t,inputModel:e,onClickSearch:()=>{alert(`검색: ${e.value}`)}}},template:`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" @on-click-search="onClickSearch" />
      </div>
    `})},j={args:{},render:()=>({components:{HInput:W},setup(){const t=y(""),e=y(""),s=y("");return{smallModel:t,mediumModel:e,largeModel:s}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <HInput label="Small" size="sm" v-model:input-model="smallModel" placeholder="Small input" />
        <HInput label="Medium" size="md" v-model:input-model="mediumModel" placeholder="Medium input" />
        <HInput label="Large" size="lg" v-model:input-model="largeModel" placeholder="Large input" />
      </div>
    `})},Z={args:{},render:()=>({components:{HInput:W},setup(){const t=y(""),e=y("Disabled input"),s=y("Readonly input");return{normalModel:t,disabledModel:e,readonlyModel:s}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <HInput label="Normal" v-model:input-model="normalModel" placeholder="Normal input" />
        <HInput label="Disabled" v-model:input-model="disabledModel" :isDisabled="true" />
        <HInput label="Readonly" v-model:input-model="readonlyModel" :readonly="true" />
      </div>
    `})};var le,re,ie;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Input Label',
    placeholder: '입력하세요',
    size: 'md',
    labelPosition: 'left'
  },
  render: args => ({
    components: {
      HInput
    },
    setup() {
      const inputModel = ref('');
      return {
        args,
        inputModel
      };
    },
    template: \`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
        <p style="margin-top: 8px; font-size: 12px; color: #666;">
          입력된 값: {{ inputModel }}
        </p>
      </div>
    \`
  })
}`,...(ie=(re=$.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var de,ue,pe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: '이메일',
    placeholder: 'example@email.com',
    size: 'md',
    hasMessage: true,
    validationRules: [{
      type: 'required',
      message: '이메일을 입력해주세요.'
    }, {
      type: 'email',
      message: '올바른 이메일 형식이 아닙니다.'
    }]
  },
  render: args => ({
    components: {
      HInput
    },
    setup() {
      const inputModel = ref('');
      return {
        args,
        inputModel
      };
    },
    template: \`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
      </div>
    \`
  })
}`,...(pe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ce,me,fe;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    isPassword: true,
    size: 'md'
  },
  render: args => ({
    components: {
      HInput
    },
    setup() {
      const inputModel = ref('');
      return {
        args,
        inputModel
      };
    },
    template: \`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
      </div>
    \`
  })
}`,...(fe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,he,ve;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: '전화번호',
    placeholder: '010-0000-0000',
    mask: '###-####-####',
    size: 'md'
  },
  render: args => ({
    components: {
      HInput
    },
    setup() {
      const inputModel = ref('');
      return {
        args,
        inputModel
      };
    },
    template: \`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
        <p style="margin-top: 8px; font-size: 12px; color: #666;">
          입력된 값: {{ inputModel }}
        </p>
      </div>
    \`
  })
}`,...(ve=(he=_.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ye,be,ke;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: '검색',
    placeholder: '검색어를 입력하세요',
    hasButton: true,
    size: 'md'
  },
  render: args => ({
    components: {
      HInput
    },
    setup() {
      const inputModel = ref('');
      const onClickSearch = () => {
        alert(\`검색: \${inputModel.value}\`);
      };
      return {
        args,
        inputModel,
        onClickSearch
      };
    },
    template: \`
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" @on-click-search="onClickSearch" />
      </div>
    \`
  })
}`,...(ke=(be=L.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var Me,Ie,xe;j.parameters={...j.parameters,docs:{...(Me=j.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      HInput
    },
    setup() {
      const smallModel = ref('');
      const mediumModel = ref('');
      const largeModel = ref('');
      return {
        smallModel,
        mediumModel,
        largeModel
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <HInput label="Small" size="sm" v-model:input-model="smallModel" placeholder="Small input" />
        <HInput label="Medium" size="md" v-model:input-model="mediumModel" placeholder="Medium input" />
        <HInput label="Large" size="lg" v-model:input-model="largeModel" placeholder="Large input" />
      </div>
    \`
  })
}`,...(xe=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var Pe,Se,we;Z.parameters={...Z.parameters,docs:{...(Pe=Z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      HInput
    },
    setup() {
      const normalModel = ref('');
      const disabledModel = ref('Disabled input');
      const readonlyModel = ref('Readonly input');
      return {
        normalModel,
        disabledModel,
        readonlyModel
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <HInput label="Normal" v-model:input-model="normalModel" placeholder="Normal input" />
        <HInput label="Disabled" v-model:input-model="disabledModel" :isDisabled="true" />
        <HInput label="Readonly" v-model:input-model="readonlyModel" :readonly="true" />
      </div>
    \`
  })
}`,...(we=(Se=Z.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const ma=["Default","WithValidation","Password","WithMask","WithSearchButton","Sizes","States"];export{$ as Default,F as Password,j as Sizes,Z as States,_ as WithMask,L as WithSearchButton,D as WithValidation,ma as __namedExportsOrder,ca as default};
