import{d as m,e as v,m as e,o as l,c as B,p as a,q as r,H as h,n as C,u as y,_ as g}from"./index-CHoB0K0E.js";import{c as n}from"./GlobalColors-C6GuWmSr.js";import{h as L}from"./Animation-mvY5unf6.js";const k=m({__name:"VButton",props:{color:{},btnSize:{},btnState:{},round:{type:Boolean},label:{type:Boolean},outline:{type:Boolean},btnText:{type:Boolean},iconLeft:{},iconRight:{},isIcon:{type:Boolean},splitLeft:{type:Boolean},splitRight:{type:Boolean}},setup(i){y(o=>({"5ef6d0f4":c.value,"3b6ae6d4":u.value,"6fdda9de":p.value,d18e9428:b.value,"3f997926":d.value}));const t=i,s=v("buttons"),c=e(()=>n[t.color][700]),u=e(()=>n[t.color][600]),p=e(()=>n[t.color][400]),b=e(()=>n[t.color][500]),d=e(()=>n[t.color][300]),f=o=>{s.value&&L(o,s.value)};return(o,R)=>(l(),B("button",{class:C(["btn",`btn-${o.color}`,o.btnSize,o.btnState,o.round&&"round",o.label&&"label",o.outline&&"outline",o.btnText&&"btn-text",o.isIcon&&"is-btn__icon",o.splitLeft&&"split-left",o.splitRight&&"split-right"]),onClick:f,ref:"buttons"},[(l(),a(r(o.iconLeft),{class:"btn-icon--left"})),h(o.$slots,"default",{},void 0),(l(),a(r(o.iconRight),{class:"btn-icon--right"}))],2))}}),H=g(k,[["__scopeId","data-v-d3157160"]]);export{H as V};
