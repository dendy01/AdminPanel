import{d as m,r as l,H as w,f as _,y as O,c as p,G as r,s as g,z as h,I as B,a as E,n as L,o as f,J as R,_ as y}from"./index-DXQkDGaK.js";var t=(n=>(n.TOP_LEFT="top-left",n.TOP_RIGHT="top-right",n.BOTTOM_LEFT="bottom-left",n.BOTTOM_RIGHT="bottom-right",n))(t||{});const H={key:0,class:"dropdown-btn__split"},b=m({__name:"VDropdown",props:{split:{type:Boolean},position:{default:t.TOP_LEFT},left:{type:Boolean},right:{type:Boolean}},setup(n){const T=n,s=l(!1),i=l(null),d=l(null),o=l(T.position),c=e=>{i.value&&!i.value.contains(e.target)&&(s.value=!1)},u=async()=>{s.value=!s.value,s.value&&(await R(),a())},a=()=>{if(d.value){const e=d.value.getBoundingClientRect(),v=window.innerHeight;e.top<0&&o.value&&(o.value===t.TOP_LEFT&&(o.value=t.BOTTOM_LEFT),o.value===t.TOP_RIGHT&&(o.value=t.BOTTOM_RIGHT)),v-e.bottom<0&&o.value&&(o.value===t.BOTTOM_LEFT&&(o.value=t.TOP_LEFT),o.value===t.BOTTOM_RIGHT&&(o.value=t.TOP_RIGHT))}};return w(s,e=>{e?window.addEventListener("scroll",a,!0):window.removeEventListener("scroll",a,!0)}),_(()=>{document.body.addEventListener("click",c)}),O(()=>{document.body.removeEventListener("click",c),window.removeEventListener("scroll",a,!0)}),(e,v)=>(f(),p("div",{class:"dropdown-wrapper",ref_key:"dropdownRef",ref:i},[e.split?(f(),p("div",H,[r(e.$slots,"dropdownLeft",{},void 0),r(e.$slots,"dropdownRight",{toggle:u},void 0)])):g("",!0),r(e.$slots,"dropdown",{toggle:u},void 0),h(E("div",{ref_key:"menuRef",ref:d,class:L(["dropdown-menu",[o.value,e.left&&"left",e.right&&"right"]])},[r(e.$slots,"menu",{},void 0)],2),[[B,s.value]])],512))}}),F=y(b,[["__scopeId","data-v-92371669"]]);export{t as P,F as V};
