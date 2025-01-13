import{G as p}from"./GlobalColors-CR0cK86m.js";import{V as g}from"./VButton-p2xgCymE.js";import{d as h,r as V,e as D,x,o as s,c as d,l as u,w as y,p as B,t as _,q as k,a as t,n as I,v as M,_ as m,F as f,g as b,i as r,h as a}from"./index-B41dmbNY.js";const R={key:0,class:"dropdown-btn__split"},L=h({__name:"VDropdown",props:{color:{},text:{},label:{type:Boolean},outline:{type:Boolean},split:{type:Boolean},iconLeft:{},iconRight:{},hover:{type:Boolean},round:{type:Boolean},isIcon:{type:Boolean},dropdownLeft:{type:Boolean},dropdownRight:{type:Boolean},dropdownTop:{type:Boolean},dropdownBottom:{type:Boolean}},setup(c){const n=V(!1),e=V(null),l=o=>{e.value&&(e.value.contains(o.target)||(n.value=!1))};return D(()=>{document.body.addEventListener("click",l)}),x(()=>{document.body.removeEventListener("click",l)}),(o,i)=>(s(),d("div",{class:"dropdown-wrapper",ref_key:"dropdown",ref:e},[o.split?(s(),d("div",R,[o.split?(s(),u(g,{key:0,color:o.color,label:o.label,outline:o.outline,"split-right":""},{default:y(()=>[B(_(o.text),1)]),_:1},8,["color","label","outline"])):k("",!0),o.split?(s(),u(g,{key:1,color:o.color,outline:o.outline,"is-icon":"","split-left":"","icon-right":o.iconRight,onClick:i[0]||(i[0]=$=>n.value=!n.value),class:"split-button-dropdown"},null,8,["color","outline","icon-right"])):k("",!0)])):o.hover?(s(),u(g,{key:1,color:o.color,"icon-right":o.iconRight,label:o.label,outline:o.outline,onMouseenter:i[1]||(i[1]=$=>n.value=!0),onMouseleave:i[2]||(i[2]=$=>n.value=!1)},{default:y(()=>[B(_(o.text),1)]),_:1},8,["color","icon-right","label","outline"])):(s(),u(g,{key:2,color:o.color,"icon-left":o.iconLeft,"icon-right":o.iconRight,label:o.label,outline:o.outline,round:o.round,"is-icon":o.isIcon,onClick:i[3]||(i[3]=$=>n.value=!n.value)},{default:y(()=>[B(_(o.text),1)]),_:1},8,["color","icon-left","icon-right","label","outline","round","is-icon"])),t("ul",{class:I(["dropdown-menu",{"dropdown-left":o.dropdownLeft,"dropdown-right":o.dropdownRight,"dropdown-top":o.dropdownTop,"dropdown-bottom":o.dropdownBottom}]),style:M({display:n.value?"block":"none"})},i[4]||(i[4]=[t("li",null,"Hello world",-1)]),6)],512))}}),w=m(L,[["__scopeId","data-v-b333c6d8"]]),C={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function S(c,n){return s(),d("svg",C,n[0]||(n[0]=[t("path",{d:"m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222z"},null,-1)]))}const v={render:S},H={class:"dropdown"},z={class:"slogan"},A={class:"dropdown-content btn-content"},E=h({__name:"VBasicDropdown",props:{text:{}},setup(c){return(n,e)=>(s(),d("div",H,[t("small",z,_(n.text),1),t("div",A,[(s(!0),d(f,null,b(r(p),l=>(s(),u(w,{key:`${l}_${Math.random}`,color:l,text:l,"icon-right":r(v),"dropdown-bottom":""},null,8,["color","text","icon-right"]))),128))])]))}}),O=m(E,[["__scopeId","data-v-bcb72c27"]]),N={class:"dropdown"},P={class:"slogan"},Y={class:"dropdown-content btn-content"},T=h({__name:"VLabelDropdown",props:{text:{}},setup(c){return(n,e)=>(s(),d("div",N,[t("small",P,_(n.text),1),t("div",Y,[(s(!0),d(f,null,b(r(p),l=>(s(),u(w,{key:`${l}_${Math.random}`,color:l,text:l,"icon-right":r(v),label:"","dropdown-bottom":""},null,8,["color","text","icon-right"]))),128))])]))}}),F=m(T,[["__scopeId","data-v-cc5d5382"]]),G={class:"dropdown"},W={class:"slogan"},q={class:"dropdown-content btn-content"},U=h({__name:"VOutlineDropdown",props:{text:{}},setup(c){return(n,e)=>(s(),d("div",G,[t("small",W,_(n.text),1),t("div",q,[(s(!0),d(f,null,b(r(p),l=>(s(),u(w,{key:`${l}_${Math.random}`,color:l,text:l,"icon-right":r(v),outline:""},null,8,["color","text","icon-right"]))),128))])]))}}),j=m(U,[["__scopeId","data-v-c51ab7a2"]]),J={class:"dropdown"},K={class:"slogan"},Q={class:"dropdown-content btn-content"},X=h({__name:"VSplitDropdown",props:{text:{}},setup(c){return(n,e)=>(s(),d("div",J,[t("small",K,_(n.text),1),t("div",Q,[(s(!0),d(f,null,b(r(p),l=>(s(),u(w,{key:`${l}_${Math.random}`,color:l,text:l,"icon-right":r(v),split:"","dropdown-bottom":""},null,8,["color","text","icon-right"]))),128))])]))}}),Z=m(X,[["__scopeId","data-v-b665497f"]]),oo={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function to(c,n){return s(),d("svg",oo,n[0]||(n[0]=[t("path",{d:"M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"},null,-1)]))}const no={render:to},eo={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function so(c,n){return s(),d("svg",eo,n[0]||(n[0]=[t("path",{d:"M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5"},null,-1)]))}const lo={render:so},ro={class:"dropdown"},io={class:"dropdown-container"},co={class:"dropdown-content btn-content"},ao={class:"dropdown-container"},po={class:"dropdown-content btn-content"},uo={class:"dropdown-container"},wo={class:"dropdown-content btn-content"},_o={class:"dropdown-container"},ho={class:"dropdown-content btn-content"},mo=h({__name:"VElemsDropdown",setup(c){return(n,e)=>(s(),d("div",ro,[t("div",io,[e[0]||(e[0]=t("small",{class:"slogan"},"Hidden arrow",-1)),t("div",co,[a(w,{color:r(p).PRIMARY,text:"Hidden arrow"},null,8,["color"])])]),t("div",ao,[e[1]||(e[1]=t("small",{class:"slogan"},"On Hover",-1)),t("div",po,[a(w,{color:r(p).PRIMARY,text:"Hover","icon-right":r(v),hover:"","dropdown-bottom":""},null,8,["color","icon-right"])])]),t("div",uo,[e[2]||(e[2]=t("small",{class:"slogan"},"With Icon",-1)),t("div",wo,[a(w,{color:r(p).PRIMARY,text:"With Icon","icon-left":r(no),"icon-right":r(v),"dropdown-bottom":""},null,8,["color","icon-left","icon-right"])])]),t("div",_o,[e[3]||(e[3]=t("small",{class:"slogan"},"Icon Dropdown",-1)),t("div",ho,[a(w,{color:r(p).PRIMARY,"icon-right":r(lo),round:"","is-icon":"","dropdown-right":"","dropdown-bottom":""},null,8,["color","icon-right"])])])]))}}),vo=m(mo,[["__scopeId","data-v-b2fe66d2"]]),go={class:"dropdown-wrapper"},fo=h({__name:"VDropdowns",setup(c){return(n,e)=>(s(),d("div",go,[e[0]||(e[0]=t("h5",{class:"title"}," Dropdowns ",-1)),a(O,{text:"Basic"}),e[1]||(e[1]=t("hr",{class:"line"},null,-1)),a(F,{text:"Label"}),e[2]||(e[2]=t("hr",{class:"line"},null,-1)),a(j,{text:"Outline"}),e[3]||(e[3]=t("hr",{class:"line"},null,-1)),a(Z,{text:"Split"}),e[4]||(e[4]=t("hr",{class:"line"},null,-1)),a(vo)]))}}),Bo=m(fo,[["__scopeId","data-v-caf2dc9f"]]);export{Bo as default};
