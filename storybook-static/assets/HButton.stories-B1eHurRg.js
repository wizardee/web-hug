import{_}from"./HButton-BRipMl6w.js";import"./iframe-kUl2Eh6x.js";import"./HFlexInliner-EGzLcBua.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N={title:"Components/HButton",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{theme:{control:"select",options:["primary","secondary","error","warning","link"]},type:{control:"select",options:["filled","outlined","transparent"]},size:{control:"select",options:["xsm","sm","md","lg","xlg"]},round:{control:"select",options:["circle","square","roundedSquare","roundedTop","roundedBottom","roundedLeft","roundedRight"]},componentPseudoState:{control:"select",options:["default","hover","active","focused","selected"]},text:{control:"text"},preIconName:{control:"text"},postIconName:{control:"text"},isDisabled:{control:"boolean"},noPadding:{control:"boolean"}}},e={args:{theme:"primary",type:"filled",size:"md",round:"roundedSquare",text:"Button",isDisabled:!1}},t={args:{theme:"secondary",type:"filled",size:"md",round:"roundedSquare",text:"Secondary Button"}},r={args:{theme:"primary",type:"outlined",size:"md",round:"roundedSquare",text:"Outlined Button"}},n={args:{theme:"primary",type:"filled",size:"md",round:"roundedSquare",text:"Icon Button",preIconName:"icons_blank",postIconName:"icons_arrow_arrowhead_right"}},o={args:{},render:()=>({components:{HButton:_},template:`
      <div class="flex gap-4 items-center">
        <HButton theme="primary" size="xsm" text="XSmall" />
        <HButton theme="primary" size="sm" text="Small" />
        <HButton theme="primary" size="md" text="Medium" />
        <HButton theme="primary" size="lg" text="Large" />
        <HButton theme="primary" size="xlg" text="XLarge" />
      </div>
    `})},a={args:{theme:"primary",type:"filled",size:"md",round:"roundedSquare",text:"Disabled Button",isDisabled:!0}};var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    type: 'filled',
    size: 'md',
    round: 'roundedSquare',
    text: 'Button',
    isDisabled: false
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    type: 'filled',
    size: 'md',
    round: 'roundedSquare',
    text: 'Secondary Button'
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,p,y;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    type: 'outlined',
    size: 'md',
    round: 'roundedSquare',
    text: 'Outlined Button'
  }
}`,...(y=(p=r.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,x,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    type: 'filled',
    size: 'md',
    round: 'roundedSquare',
    text: 'Icon Button',
    preIconName: 'icons_blank',
    postIconName: 'icons_arrow_arrowhead_right'
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,B,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      HButton
    },
    template: \`
      <div class="flex gap-4 items-center">
        <HButton theme="primary" size="xsm" text="XSmall" />
        <HButton theme="primary" size="sm" text="Small" />
        <HButton theme="primary" size="md" text="Medium" />
        <HButton theme="primary" size="lg" text="Large" />
        <HButton theme="primary" size="xlg" text="XLarge" />
      </div>
    \`
  })
}`,...(z=(B=o.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var f,b,H;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    type: 'filled',
    size: 'md',
    round: 'roundedSquare',
    text: 'Disabled Button',
    isDisabled: true
  }
}`,...(H=(b=a.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};const w=["Primary","Secondary","Outlined","WithIcons","Sizes","Disabled"];export{a as Disabled,r as Outlined,e as Primary,t as Secondary,o as Sizes,n as WithIcons,w as __namedExportsOrder,N as default};
