import{d as B,e as C,m as e,o as l,c as h,a as r,p as c,q as i,H as y,n as g,u as L,_ as k}from"./index-ewHlBYqK.js";import{c as n}from"./GlobalColors-De6SZ3hD.js";import{h as R}from"./Animation-C_Bdmup7.js";const S={class:"btn-content__wrap"},V=B({__name:"VButton",props:{color:{},btnSize:{},btnState:{},round:{type:Boolean},label:{type:Boolean},outline:{type:Boolean},btnText:{type:Boolean},iconLeft:{},iconRight:{},isIcon:{type:Boolean},splitLeft:{type:Boolean},splitRight:{type:Boolean}},setup(u){L(o=>({"5020e90d":p.value,"3a589c1d":b.value,"70288d36":d.value,d20b7a76:f.value,ec31b674:m.value}));const t=u,s=C("buttons"),p=e(()=>n[t.color][700]),b=e(()=>n[t.color][600]),d=e(()=>n[t.color][400]),f=e(()=>n[t.color][500]),m=e(()=>n[t.color][300]),v=o=>{s.value&&R(o,s.value)};return(o,a)=>(l(),h("button",{class:g(["btn",`btn-${o.color}`,o.btnSize,o.btnState,o.round&&"round",o.label&&"label",o.outline&&"outline",o.btnText&&"btn-text",o.isIcon&&"is-btn__icon",o.splitLeft&&"split-left",o.splitRight&&"split-right"]),onClick:v,ref:"buttons"},[a[0]||(a[0]=r("div",{class:"wave-container"},null,-1)),r("span",S,[(l(),c(i(o.iconLeft),{class:"btn-icon--left"})),y(o.$slots,"default",{},void 0),(l(),c(i(o.iconRight),{class:"btn-icon--right"}))])],2))}}),T=k(V,[["__scopeId","data-v-41cfc540"]]);export{T as V};
