import{o,c as u,a as l,b as ee,d as m,u as ne,e as K,r as h,f as L,g as z,F as V,h as H,i as v,w as $,j as s,t as y,n as f,_ as w,k as T,l as P,m as te,p as g,q as B,s as R,v as S,x as se,y as j,z as N,A as oe,B as le,C as ie,D as U,E as _,R as M,G as ae}from"./index-D35EtBNy.js";import{C as q}from"./close-CHdzIRhF.js";import{A as G}from"./arrow-BvCRaQHD.js";import{V as F,P as J}from"./VDropdown-CxKpVQeO.js";import{h as W}from"./Animation-mvY5unf6.js";const re={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function ce(n,e){return o(),u("svg",re,e[0]||(e[0]=[l("path",{d:"M6 19h12V9.157l-6-5.454-6 5.454zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M7.5 13h2a2.5 2.5 0 0 0 5 0h2a4.5 4.5 0 1 1-9 0"},null,-1)]))}const de={render:ce},ue={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function pe(n,e){return o(),u("svg",ue,e[0]||(e[0]=[l("path",{d:"M8 7a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10zm0-2h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},null,-1)]))}const he={render:pe},ve={xmlns:"http://www.w3.org/2000/svg",width:"30",height:"24",fill:"none",viewBox:"0 0 250 196"};function _e(n,e){return o(),u("svg",ve,e[0]||(e[0]=[ee('<path fill="currentColor" fill-rule="evenodd" d="m12.3 1.255 44.355 27.388a8.07 8.07 0 0 1 3.829 6.866V160.63a8.07 8.07 0 0 1-3.924 6.923l-44.354 26.554A8.063 8.063 0 0 1 0 187.184V8.12a8.066 8.066 0 0 1 12.3-6.865" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="m0 65.266 60.484 34.697v34.016z" clip-rule="evenodd" opacity=".078"></path><path fill="#000" fill-rule="evenodd" d="m0 65.266 60.484 33.813v20.78z" clip-rule="evenodd" opacity=".078"></path><path fill="currentColor" fill-rule="evenodd" d="M237.71 1.224 193.355 28.52a8.07 8.07 0 0 0-3.839 6.872V160.63a8.07 8.07 0 0 0 3.924 6.924l44.354 26.553A8.064 8.064 0 0 0 250 187.185V8.096a8.067 8.067 0 0 0-12.29-6.872" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M250 65.266 189.516 99.89v35.116z" clip-rule="evenodd" opacity=".078"></path><path fill="#000" fill-rule="evenodd" d="M250 65.266 189.516 99.05v21.836z" clip-rule="evenodd" opacity=".078"></path><path fill="currentColor" fill-rule="evenodd" d="M12.279 1.19 125 70.307v66.562L0 65.247V8.067A8.066 8.066 0 0 1 12.279 1.19" clip-rule="evenodd"></path><path fill="#fff" fill-opacity=".15" fill-rule="evenodd" d="M12.279 1.19 125 70.307v66.562L0 65.247V8.067A8.066 8.066 0 0 1 12.279 1.19" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M237.721 1.19 125 70.307v66.562l125-71.623V8.067a8.067 8.067 0 0 0-12.279-6.879" clip-rule="evenodd"></path><path fill="#fff" fill-opacity=".3" fill-rule="evenodd" d="M237.721 1.19 125 70.307v66.562l125-71.623V8.067a8.067 8.067 0 0 0-12.279-6.879" clip-rule="evenodd"></path>',10)]))}const me={render:_e},fe={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 24 24"};function ge(n,e){return o(),u("svg",fe,e[0]||(e[0]=[l("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16"},null,-1)]))}const we={render:ge},ke=m({__name:"VSidebarSelectUl",props:{hasActive:{type:Boolean},select:{},isOpen:{type:Boolean},isValid:{type:Boolean}},emits:["calcHeight"],setup(n,{emit:e}){ne(c=>({"7ef2070d":i.value}));const t=e,r=K("ulRef"),p=h(null),i=h(0),d=c=>{p.value=p.value===c?null:c},a=c=>c.length>20?c.slice(0,20)+"...":c;return L(()=>{r.value&&(i.value=r.value.scrollHeight,t("calcHeight",r.value.scrollHeight))}),(c,k)=>{const Z=z("RouterLink");return o(),u("ul",{class:f(["aside-menu__item-grop",{activeUl:c.isOpen&&c.isValid}]),ref_key:"ulRef",ref:r},[(o(!0),u(V,null,H(c.select,b=>(o(),u("li",{key:b.id},[v(Z,{"active-class":"active-link",to:b.link,class:"aside-menu__item",onClick:Sn=>d(b.id)},{default:$(()=>[v(s(we)),l("span",null,y(a(b.content)),1)]),_:2},1032,["to","onClick"])]))),128))],2)}}}),Ce=w(ke,[["__scopeId","data-v-0fdceceb"]]),A=T("checking",()=>{const n=h(!1),e=h(!1),t=h(567),r=h(767),p=h(1199);return{checking:n,openMenu:e,responseSl:t,responseSx:r,responseSw:p}}),Se={key:0},$e=m({__name:"VSidebarLi",props:{groupItem:{},isOpen:{type:Boolean},id:{},isOpenSidebar:{type:Boolean}},setup(n){const e=n,t=h(0),r=A(),{t:p}=P(),i=a=>{t.value=a+4},d=te(()=>r.checking||e.isOpenSidebar||r.openMenu);return(a,c)=>{const k=z("RouterLink");return o(),u("li",{class:f({active:a.isOpen,"aside-menu__item":a.groupItem.select}),style:j({"margin-bottom":(a.isOpen&&d.value?t.value:0)+"px"})},[a.groupItem.select?(o(),u("span",Se,[l("span",null,[(o(),g(B(a.groupItem.icon),{class:"icon-class"}))]),l("span",{class:f(["aside-menu__item--icon",{open:d.value}])},[R(y(s(p)(`i18nGlobal.${a.groupItem.content}`))+" ",1),a.groupItem.select?(o(),g(s(G),{key:0,class:"icon"})):S("",!0)],2)])):(o(),g(k,{key:1,to:a.groupItem.link,"active-class":"active-link",class:f({"aside-menu__item--link":!a.groupItem.select})},{default:$(()=>[l("span",null,[l("span",null,[(o(),g(B(a.groupItem.icon),{class:"icon-class"}))]),l("span",{class:f(["aside-menu__item--link_icon",{open:d.value}])},[R(y(s(p)(`i18nGlobal.${a.groupItem.content}`))+" ",1),a.groupItem.select?(o(),g(s(G),{key:0,class:"icon"})):S("",!0)],2)])]),_:1},8,["to","class"])),v(Ce,{select:a.groupItem.select,"is-open":a.isOpen,"is-valid":d.value,onCalcHeight:i,onClick:c[0]||(c[0]=se(()=>{},["stop"]))},null,8,["select","is-open","is-valid"])],6)}}}),ye=w($e,[["__scopeId","data-v-818d361d"]]),Le={key:0,class:"aside-menu__title"},Me=m({__name:"VSidebarUl",props:{li:{},isOpenSidebar:{type:Boolean}},setup(n){const e=h(null),t=A(),r=i=>{e.value=e.value===i?null:i},p=i=>e.value===i;return(i,d)=>(o(!0),u(V,null,H(i.li,a=>(o(),u("ul",{class:"aside-menu",key:a.id},[a.title?(o(),u("span",Le,[l("span",{class:f({open:s(t).checking||i.isOpenSidebar||s(t).openMenu})},y(a.title),3)])):S("",!0),(o(!0),u(V,null,H(a.group,c=>(o(),g(ye,{"group-item":c,key:c.id,id:c.id,"is-open-sidebar":i.isOpenSidebar,"is-open":p(c.id),onClick:k=>r(c.id)},null,8,["group-item","id","is-open-sidebar","is-open","onClick"]))),128))]))),128))}}),Ae=w(Me,[["__scopeId","data-v-41ac9333"]]),be={class:"aside-head"},Ve={class:"aside-head__logo"},Re={class:"aside-title"},Ie={class:"aside-body"},xe=m({__name:"VSidebar",props:{title:{},li:{}},setup(n){const e=A(),t=h(!1),r=h(!1),p=()=>{window.innerWidth>e.responseSw?e.openMenu=!1:(e.checking=!1,r.value=!1)};return L(()=>{window.addEventListener("resize",p)}),N(()=>{window.removeEventListener("resize",p)}),(i,d)=>{const a=z("RouterLink");return o(),u("aside",{class:f(["aside",{"aside-active":s(e).checking,"open-menu":s(e).openMenu}]),onMouseenter:d[3]||(d[3]=c=>t.value=!0),onMouseleave:d[4]||(d[4]=c=>t.value=!1)},[l("div",be,[v(a,{to:"#"},{default:$(()=>[l("span",Ve,[v(s(me)),l("h2",Re,y(i.title),1)])]),_:1}),s(e).openMenu?(o(),u("span",{key:1,class:"aside-head__close",onClick:d[2]||(d[2]=c=>s(e).openMenu=!s(e).openMenu)},[v(s(q))])):oe((o(),u("input",{key:0,type:"checkbox",class:"aside-head__input",onChange:d[0]||(d[0]=c=>s(e).checking=!s(e).checking),"onUpdate:modelValue":d[1]||(d[1]=c=>r.value=c)},null,544)),[[le,r.value]])]),l("div",Ie,[v(Ae,{"is-open-sidebar":t.value,li:i.li},null,8,["is-open-sidebar","li"])])],34)}}}),ze=w(xe,[["__scopeId","data-v-9cb4cacf"]]),He={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function Be(n,e){return o(),u("svg",He,e[0]||(e[0]=[l("path",{d:"M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031zm4.5 3h5a2.5 2.5 0 0 1-5 0"},null,-1)]))}const Oe={render:Be},De={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function Ee(n,e){return o(),u("svg",De,e[0]||(e[0]=[l("path",{d:"m12 .5 4.226 6.183 7.186 2.109-4.575 5.93.216 7.486L12 19.69l-7.054 2.518.216-7.486-4.575-5.93 7.187-2.109zm0 3.544L9.022 8.402 3.957 9.887l3.225 4.179-.153 5.274 4.97-1.774 4.97 1.774-.151-5.274 3.224-4.179-5.065-1.485zM10 12a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0z"},null,-1)]))}const Te={render:Ee},Ne={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function Ue(n,e){return o(),u("svg",Ne,e[0]||(e[0]=[l("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"},null,-1)]))}const I={render:Ue},Ge={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function Ke(n,e){return o(),u("svg",Ge,e[0]||(e[0]=[l("path",{d:"m18.5 10 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10zM10 2v2h6v2h-1.968a18.2 18.2 0 0 1-3.62 6.301 15 15 0 0 0 2.335 1.707l-.75 1.878A17 17 0 0 1 9 13.725a16.7 16.7 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18 18 0 0 1 4.767 8h2.24A16 16 0 0 0 9 10.877a16.2 16.2 0 0 0 2.91-4.876L2 6V4h6V2zm7.5 10.885L16.253 16h2.492z"},null,-1)]))}const Q={render:Ke},Pe="/AdminPanel/assets/profile-CxOKCzdw.png",je=m({__name:"VHeaderInput",props:{isActive:{type:Boolean},isScrolling:{type:Boolean}},emits:["changeActive"],setup(n,{emit:e}){const t=e,r=K("inputSearch"),p=h(null),i=h(!1),d=()=>{t("changeActive",!1)},a=c=>{var k;i.value&&!((k=p.value)!=null&&k.contains(c.target))?t("changeActive",!1):i.value=!0};return L(()=>{r.value&&r.value.focus(),document.addEventListener("click",a)}),N(()=>{document.removeEventListener("click",a)}),(c,k)=>(o(),u("label",{ref_key:"refLabel",ref:p,class:"header-search__wrap",style:j({display:c.isActive?"block":"none"})},[l("input",{type:"text",class:f([{"header-observer":c.isScrolling},"header-search__input"]),placeholder:"Search...",ref_key:"inputSearch",ref:r},null,2),v(s(q),{onClick:d,class:"header-search__close"})],4))}}),qe={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function Fe(n,e){return o(),u("svg",qe,e[0]||(e[0]=[l("path",{d:"M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"},null,-1)]))}const Je={render:Fe},We={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function Qe(n,e){return o(),u("svg",We,e[0]||(e[0]=[l("path",{d:"m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7 3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"},null,-1)]))}const Ye={render:Qe},Xe={key:0,class:"header-search__wrapper"},Ze=m({__name:"VHeaderSearch",emits:["toggle-search"],setup(n,{emit:e}){const t=h(!1),r=A(),p=e,i=()=>{p("toggle-search")};return(d,a)=>t.value?S("",!0):(o(),u("div",Xe,[l("span",{class:"header-search__menu",onClick:a[0]||(a[0]=c=>s(r).openMenu=!s(r).openMenu)},[v(s(Je))]),l("span",{onClick:i,class:"header-search"},[v(s(Ye)),a[1]||(a[1]=l("span",{class:"header-search__text"},"Search (Ctrl+/)",-1))])]))}}),en=w(Ze,[["__scopeId","data-v-007e44ae"]]),nn={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 24 24"};function tn(n,e){return o(),u("svg",nn,e[0]||(e[0]=[l("path",{d:"M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.96 7.96 0 0 0 10 6m-6 6a8 8 0 0 0 8 8 8 8 0 0 0 6.957-4.045Q18.482 16 18 16C12.477 16 8 11.523 8 6q0-.481.045-.957A8 8 0 0 0 4 12m14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455m5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455"},null,-1)]))}const O={render:tn};var C=(n=>(n.DARK="dark",n.LIGHT="light",n))(C||{}),D=(n=>(n.EN="english",n.RU="русский",n.en="en",n.ru="ru",n))(D||{}),x=(n=>(n.EN="en",n.RU="ru",n))(x||{}),E=(n=>(n.USERINTERFACE="UserInterface",n.DASHBOARDS="Dashboards",n))(E||{});const Y=(n,e)=>{localStorage.setItem(n,JSON.stringify(e))},X=n=>{const e=localStorage.getItem(n);return e?JSON.parse(e):null},sn=T("theme",()=>{const n=h(X("theme")||""),e=t=>{n.value=t,t===C.LIGHT?document.body.classList.remove(C.DARK):document.body.classList.add(C.DARK),Y("theme",t)};return L(()=>{n.value?e(n.value):e(C.DARK)}),{theme:n,setTheme:e}}),on=["onClick"],ln={class:"header-icon__sub"},an=m({__name:"VHeaderTheme",setup(n){const e=sn(),t=h(null),r=p=>{t.value&&W(p,t.value)};return(p,i)=>(o(),u("div",null,[v(F,{position:s(J).BOTTOM_RIGHT},{dropdown:$(({toggle:d})=>[l("span",{onClick:d,ref_key:"icon",ref:t},[(o(),g(B(s(e).theme==="dark"?s(O):s(I)),{onClick:r}))],8,on)]),menu:$(()=>[l("ul",ln,[l("li",{onClick:i[0]||(i[0]=d=>s(e).setTheme(s(C).LIGHT))},[v(s(I)),i[2]||(i[2]=R(" Light "))]),l("li",{onClick:i[1]||(i[1]=d=>s(e).setTheme(s(C).DARK))},[v(s(O)),i[3]||(i[3]=R(" Dark "))])])]),_:1},8,["position"])]))}}),rn=w(an,[["__scopeId","data-v-09866b4a"]]),cn=T("lang",()=>{const n=h(X("lang")||""),{locale:e}=P(),t=r=>{n.value=r,e.value=r,Y("lang",r)};return L(()=>{n.value?t(n.value):t(x.EN)}),{lang:n,setLang:t}}),dn=["onClick"],un={class:"header-icon__sub"},pn=m({__name:"VHeaderTranslate",setup(n){const e=h(null),t=cn(),r=p=>{e.value&&W(p,e.value)};return(p,i)=>(o(),u("div",null,[v(F,{position:s(J).BOTTOM_RIGHT},{dropdown:$(({toggle:d})=>[l("span",{onClick:d,ref_key:"icon",ref:e},[v(s(Q),{onClick:r})],8,dn)]),menu:$(()=>[l("ul",un,[l("li",{onClick:i[0]||(i[0]=d=>s(t).setLang(s(x).EN))},y(s(D).EN),1),l("li",{onClick:i[1]||(i[1]=d=>s(t).setLang(s(x).RU))},y(s(D).RU),1)])]),_:1},8,["position"])]))}}),hn=w(pn,[["__scopeId","data-v-8af16f89"]]),vn={class:"container"},_n={key:2,class:"header-icons"},mn={class:"header-icons__list"},fn=m({__name:"VHeader",setup(n){ie("header");const e=h(!1),t=h(!1),r=h(null),p=a=>{e.value=a},i=()=>{t.value=window.scrollY>0},d=()=>{e.value=!e.value};return L(()=>{window.addEventListener("scroll",i)}),N(()=>{window.removeEventListener("scroll",i)}),(a,c)=>(o(),u("header",{class:f(["header",{"header-observer":t.value}]),ref:"myHeader"},[l("div",vn,[e.value?(o(),g(je,{key:0,"is-active":e.value,"is-scrolling":t.value,onChangeActive:p},null,8,["is-active","is-scrolling"])):S("",!0),e.value?S("",!0):(o(),g(en,{key:1,onToggleSearch:d})),e.value?S("",!0):(o(),u("div",_n,[l("ul",mn,[l("li",{class:"header-icon",ref_key:"activeUl",ref:r},[v(hn)],512),l("li",{class:"header-icon",ref_key:"activeUl",ref:r},[v(rn)],512),c[0]||(c[0]=l("img",{src:Pe,alt:"profile",class:"header-icons__list--profile"},null,-1))])]))])],2))}}),gn=w(fn,[["__scopeId","data-v-97fe11bf"]]),wn={class:"container"},kn=m({__name:"MainPage",setup(n){const e=A();return(t,r)=>{const p=z("RouterView");return o(),u("main",{class:f(["main",{"main-check":!s(e).checking}])},[l("div",wn,[v(gn),v(p)])],2)}}}),Cn=w(kn,[["__scopeId","data-v-e063bd35"]]),bn=m({__name:"HomePage",setup(n){const e=U([{id:_(),icon:Q,group:[{id:_(),content:"English"},{id:_(),content:"French"},{id:_(),content:"Arabic"},{id:_(),content:"Russian"}]},{id:_(),icon:I,group:[{id:_(),icon:I,content:"Light"},{id:_(),icon:O,content:"Dark"}]},{id:_(),icon:Te,group:[]},{id:_(),icon:Oe,group:[]}]);ae("header",e);const t=U([{id:_(),group:[{id:_(),content:E.DASHBOARDS,icon:de,select:[{id:_(),content:"CRM",link:M.CRM}]}]},{id:_(),title:"Components",group:[{id:_(),content:E.USERINTERFACE,icon:he,select:[{id:_(),content:"Alerts",link:M.ALERTS},{id:_(),content:"Buttons",link:M.BUTTONS},{id:_(),content:"Dropdowns",link:M.DROPDOWN},{id:_(),content:"Accordion",link:M.ACCORDION}]}]}]);return(r,p)=>(o(),u(V,null,[v(ze,{title:"Materio",li:t.value},null,8,["li"]),v(Cn)],64))}});export{bn as default};
