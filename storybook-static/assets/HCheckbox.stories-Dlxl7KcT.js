import{d as J,q as U,s as K,h as n,f as Q,w as H,o as X,j as S,m as c,v as ee}from"./iframe-kUl2Eh6x.js";import{_ as oe,d as ae,e as te,a as se,g as i}from"./HFlexInliner-EGzLcBua.js";import"./_commonjsHelpers-Cpj98o6Y.js";function ne(a,e){const t=e.findIndex(l=>l===a);return e.splice(t,1),e}function Y(a,e){return Array.isArray(a)?a.includes(e)?"checked":"unchecked":a==null?"intermediate":a?"checked":"unchecked"}const Z=J({__name:"HBaseCheckbox",props:U({isCircle:{type:Boolean,default:!1},textWrapperCoreProps:{},flexInlinerClassName:{},boxBaseProps:{},checkedIconName:{default:"icons_checkmark_checkmark"},uncheckedIconName:{default:""},intermediateIconName:{default:"icons_minus_minus"},isLoading:{type:Boolean},isDisabled:{type:Boolean,default:!0},tooltipOption:{},componentPseudoState:{},className:{},styles:{},label:{},value:{}},{checkboxModel:{type:[null,Boolean,Array]},checkboxModelModifiers:{}}),emits:["update:checkboxModel"],setup(a){const e=a,t=K(a,"checkboxModel"),l=n(()=>Y(t.value,e.value)),m=()=>{if(Array.isArray(t.value)){const o=e.value,s=t.value.indexOf(o)!==-1,u=JSON.parse(JSON.stringify(t.value));t.value=s?ne(o,u):[...u,o]}else t.value=!t.value},g=n(()=>{const{label:o,textWrapperCoreProps:s}=e;return o?{...s,text:o}:void 0}),y=n(()=>{const{checkedIconName:o,uncheckedIconName:s,intermediateIconName:u}=e,M=l.value;return M==="checked"?o:M==="intermediate"?u:s}),C=n(()=>{var o;return[((o=e.boxBaseProps)==null?void 0:o.className)??"","flex items-center justify-center",e.isCircle?"rounded-50%":"rounded-1"].join(" ")}),d=n(()=>{var o;return((o=e.boxBaseProps)==null?void 0:o.styles)??{}});return(o,s)=>(X(),Q(oe,{"class-name":o.className,"is-disabled":o.isDisabled,styles:o.styles,onOnClick:m},{default:H(()=>[S(se,{"class-name":o.flexInlinerClassName,"text-wrapper-props":g.value},{"pre-most":H(()=>[S(ae,{"class-name":C.value,styles:d.value},{default:H(()=>[S(te,{"class-name":"w-full h-full","icon-name":y.value,height:"100%",width:"100%"},null,8,["icon-name"])]),_:1},8,["class-name","styles"])]),_:1},8,["class-name","text-wrapper-props"])]),_:1},8,["class-name","is-disabled","styles"]))}});Z.__docgenInfo={exportName:"default",displayName:"HBaseCheckbox",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"styles",required:!1,type:{name:"Partial",elements:[{name:"CSSStyleDeclaration"}]}},{name:"className",required:!1,type:{name:"string"}},{name:"componentPseudoState",required:!1,type:{name:"SemanticPseudo",elements:[{name:"S"}]}},{name:"tooltipOption",required:!1,type:{name:"TooltipOption"}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isLoading",required:!1,type:{name:"boolean"}},{name:"isCircle",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"textWrapperCoreProps",required:!1,type:{name:"HTextWrapperCoreProps"}},{name:"flexInlinerClassName",required:!1,type:{name:"string"}},{name:"boxBaseProps",required:!1,type:{name:"HBaseProps"}},{name:"checkedIconName",required:!1,type:{name:"IconName"},defaultValue:{func:!1,value:"'icons_checkmark_checkmark'"}},{name:"uncheckedIconName",required:!1,type:{name:"IconName"},defaultValue:{func:!1,value:"'' as IconName"}},{name:"intermediateIconName",required:!1,type:{name:"IconName"},defaultValue:{func:!1,value:"'icons_minus_minus'"}}],sourceFiles:["/home/herit/projects/ai/claude-code/h-design-system/src/components/checkbox/HBaseCheckbox.vue"]};const r=J({__name:"HCheckbox",props:U({isCircle:{type:Boolean,default:!1},isLoading:{type:Boolean},isDisabled:{type:Boolean,default:!1},tooltipOption:{},componentPseudoState:{},className:{},styles:{},label:{},value:{}},{checkboxModel:{type:[null,Boolean,Array]},checkboxModelModifiers:{}}),emits:["update:checkboxModel"],setup(a){const e=a,t=K(a,"checkboxModel"),l=c(e.isDisabled?"disabled":"default"),m=n(()=>Y(t.value,e.value)),g=n(()=>{const d="h-typo-label-1-normal flex-1 h-font-regular",o=i("secondary","foreground","normal",l.value);return{className:d,styles:{color:o}}}),y=n(()=>{const d=m.value==="unchecked"?"transparent":i("primary","background","normal",l.value),o=l.value==="disabled"?i("disabled","foreground","global","default"):i("white","global","global","default"),s=m.value!=="unchecked"?"none":`2px solid ${i("secondary","stroke","strong",l.value)}`;return{className:"w-4 h-4 pa-0.25",styles:{backgroundColor:d,color:o,border:s}}}),C=n(()=>({...e,textWrapperCoreProps:g.value,flexInlinerClassName:"gap-2 border-1 pa-1",boxBaseProps:y.value}));return(d,o)=>(X(),Q(Z,ee({"checkbox-model":t.value,"onUpdate:checkboxModel":o[0]||(o[0]=s=>t.value=s)},C.value,{onOnChangeState:o[1]||(o[1]=s=>l.value=s)}),null,16,["checkbox-model"]))}});r.__docgenInfo={exportName:"default",displayName:"HCheckbox",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"styles",required:!1,type:{name:"Partial",elements:[{name:"CSSStyleDeclaration"}]}},{name:"className",required:!1,type:{name:"string"}},{name:"componentPseudoState",required:!1,type:{name:"SemanticPseudo",elements:[{name:"S"}]}},{name:"tooltipOption",required:!1,type:{name:"TooltipOption"}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isLoading",required:!1,type:{name:"boolean"}},{name:"isCircle",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/herit/projects/ai/claude-code/h-design-system/src/components/checkbox/HCheckbox.vue"]};const de={title:"Components/HCheckbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"text"},isDisabled:{control:"boolean"},isCircle:{control:"boolean"}}},p={args:{value:"default-checkbox"},render:a=>({components:{HCheckbox:r},setup(){const e=c([]);return{args:a,checkboxModel:e}},template:`
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
        <p style="margin-top: 16px; font-size: 12px; color: #666;">
          선택된 값: {{ checkboxModel }}
        </p>
      </div>
    `})},b={args:{value:"terms-agreement"},render:a=>({components:{HCheckbox:r},setup(){const e=c([]);return{args:a,checkboxModel:e}},template:`
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    `})},x={args:{value:"circle-checkbox",isCircle:!0},render:a=>({components:{HCheckbox:r},setup(){const e=c([]);return{args:a,checkboxModel:e}},template:`
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    `})},h={args:{value:"disabled-checkbox",isDisabled:!0},render:a=>({components:{HCheckbox:r},setup(){const e=c(["disabled-checkbox"]);return{args:a,checkboxModel:e}},template:`
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    `})},v={args:{},render:()=>({components:{HCheckbox:r},setup(){return{hobbies:c([])}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">취미 선택</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <HCheckbox text="독서" value="reading" v-model:checkbox-model="hobbies" />
          <HCheckbox text="영화 감상" value="movies" v-model:checkbox-model="hobbies" />
          <HCheckbox text="운동" value="exercise" v-model:checkbox-model="hobbies" />
          <HCheckbox text="요리" value="cooking" v-model:checkbox-model="hobbies" />
          <HCheckbox text="게임" value="gaming" v-model:checkbox-model="hobbies" />
        </div>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>선택된 취미:</strong> {{ hobbies.join(', ') || '없음' }}
        </div>
      </div>
    `})},k={args:{},render:()=>({components:{HCheckbox:r},setup(){return{selectedItems:c(["item2"])}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">다양한 상태</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <HCheckbox text="기본 체크박스" value="item1" v-model:checkbox-model="selectedItems" />
          <HCheckbox text="미리 선택된 체크박스" value="item2" v-model:checkbox-model="selectedItems" />
          <HCheckbox text="원형 체크박스" value="item3" v-model:checkbox-model="selectedItems" :isCircle="true" />
          <HCheckbox text="비활성화된 체크박스 (체크 안됨)" value="item4" v-model:checkbox-model="selectedItems" :isDisabled="true" />
          <HCheckbox text="비활성화된 체크박스 (체크됨)" value="item5" v-model:checkbox-model="['item5']" :isDisabled="true" />
        </div>
      </div>
    `})},f={args:{},render:()=>({components:{HCheckbox:r},setup(){const a=c([]),e=n(()=>a.value.includes("required"));return{agreements:a,isValid:e,handleSubmit:()=>{e.value?alert("폼이 제출되었습니다!"):alert("필수 약관에 동의해주세요.")}}},template:`
      <div style="width: 320px;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">회원가입 약관 동의</h3>
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <HCheckbox 
            text="(필수) 이용약관에 동의합니다" 
            value="required" 
            v-model:checkbox-model="agreements" 
          />
          <HCheckbox 
            text="(선택) 마케팅 정보 수신에 동의합니다" 
            value="marketing" 
            v-model:checkbox-model="agreements" 
          />
          <HCheckbox 
            text="(선택) 이벤트 알림 수신에 동의합니다" 
            value="events" 
            v-model:checkbox-model="agreements" 
          />
          
          <button 
            @click="handleSubmit"
            :disabled="!isValid"
            :style="{
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: isValid ? '#4f46e5' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isValid ? 'pointer' : 'not-allowed'
            }"
          >
            회원가입
          </button>
        </div>
        
        <div style="margin-top: 12px; font-size: 12px; color: #666;">
          동의 현황: {{ agreements.join(', ') || '없음' }}
        </div>
      </div>
    `})};var N,I,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 'default-checkbox'
  },
  render: args => ({
    components: {
      HCheckbox
    },
    setup() {
      const checkboxModel = ref([]);
      return {
        args,
        checkboxModel
      };
    },
    template: \`
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
        <p style="margin-top: 16px; font-size: 12px; color: #666;">
          선택된 값: {{ checkboxModel }}
        </p>
      </div>
    \`
  })
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var _,P,w;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 'terms-agreement'
  },
  render: args => ({
    components: {
      HCheckbox
    },
    setup() {
      const checkboxModel = ref([]);
      return {
        args,
        checkboxModel
      };
    },
    template: \`
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    \`
  })
}`,...(w=(P=b.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var B,D,V;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 'circle-checkbox',
    isCircle: true
  },
  render: args => ({
    components: {
      HCheckbox
    },
    setup() {
      const checkboxModel = ref([]);
      return {
        args,
        checkboxModel
      };
    },
    template: \`
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    \`
  })
}`,...(V=(D=x.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var O,z,j;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 'disabled-checkbox',
    isDisabled: true
  },
  render: args => ({
    components: {
      HCheckbox
    },
    setup() {
      const checkboxModel = ref(['disabled-checkbox']); // 선택된 상태로 시작
      return {
        args,
        checkboxModel
      };
    },
    template: \`
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    \`
  })
}`,...(j=(z=h.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var W,A,T;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      HCheckbox
    },
    setup() {
      const hobbies = ref([]);
      return {
        hobbies
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">취미 선택</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <HCheckbox text="독서" value="reading" v-model:checkbox-model="hobbies" />
          <HCheckbox text="영화 감상" value="movies" v-model:checkbox-model="hobbies" />
          <HCheckbox text="운동" value="exercise" v-model:checkbox-model="hobbies" />
          <HCheckbox text="요리" value="cooking" v-model:checkbox-model="hobbies" />
          <HCheckbox text="게임" value="gaming" v-model:checkbox-model="hobbies" />
        </div>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>선택된 취미:</strong> {{ hobbies.join(', ') || '없음' }}
        </div>
      </div>
    \`
  })
}`,...(T=(A=v.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var $,E,F;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      HCheckbox
    },
    setup() {
      const selectedItems = ref(['item2']);
      return {
        selectedItems
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">다양한 상태</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <HCheckbox text="기본 체크박스" value="item1" v-model:checkbox-model="selectedItems" />
          <HCheckbox text="미리 선택된 체크박스" value="item2" v-model:checkbox-model="selectedItems" />
          <HCheckbox text="원형 체크박스" value="item3" v-model:checkbox-model="selectedItems" :isCircle="true" />
          <HCheckbox text="비활성화된 체크박스 (체크 안됨)" value="item4" v-model:checkbox-model="selectedItems" :isDisabled="true" />
          <HCheckbox text="비활성화된 체크박스 (체크됨)" value="item5" v-model:checkbox-model="['item5']" :isDisabled="true" />
        </div>
      </div>
    \`
  })
}`,...(F=(E=k.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,R,G;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      HCheckbox
    },
    setup() {
      const agreements = ref([]);
      const isValid = computed(() => agreements.value.includes('required'));
      const handleSubmit = () => {
        if (isValid.value) {
          alert('폼이 제출되었습니다!');
        } else {
          alert('필수 약관에 동의해주세요.');
        }
      };
      return {
        agreements,
        isValid,
        handleSubmit
      };
    },
    template: \`
      <div style="width: 320px;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">회원가입 약관 동의</h3>
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <HCheckbox 
            text="(필수) 이용약관에 동의합니다" 
            value="required" 
            v-model:checkbox-model="agreements" 
          />
          <HCheckbox 
            text="(선택) 마케팅 정보 수신에 동의합니다" 
            value="marketing" 
            v-model:checkbox-model="agreements" 
          />
          <HCheckbox 
            text="(선택) 이벤트 알림 수신에 동의합니다" 
            value="events" 
            v-model:checkbox-model="agreements" 
          />
          
          <button 
            @click="handleSubmit"
            :disabled="!isValid"
            :style="{
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: isValid ? '#4f46e5' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isValid ? 'pointer' : 'not-allowed'
            }"
          >
            회원가입
          </button>
        </div>
        
        <div style="margin-top: 12px; font-size: 12px; color: #666;">
          동의 현황: {{ agreements.join(', ') || '없음' }}
        </div>
      </div>
    \`
  })
}`,...(G=(R=f.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};const ie=["Default","WithText","CircleStyle","Disabled","CheckboxGroup","MixedStates","FormExample"];export{v as CheckboxGroup,x as CircleStyle,p as Default,h as Disabled,f as FormExample,k as MixedStates,b as WithText,ie as __namedExportsOrder,de as default};
