import{r as s}from"./index-C3Vc4dD2.js";var a=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.SUCCESS="success",e.DANGER="danger",e.WARNING="warning",e.INFO="info",e.DARK="dark",e))(a||{});const d=["700","600","500","400","300"],R=()=>{const e=s({}),t=document.querySelector(":root"),r=t?getComputedStyle(t):null;return Object.values(a).forEach(n=>{e.value[n]=d.reduce((u,c)=>(u[c]=r==null?void 0:r.getPropertyValue(`--color-${n}-${c}`),u),{})}),e.value};export{a as G,R as g};
