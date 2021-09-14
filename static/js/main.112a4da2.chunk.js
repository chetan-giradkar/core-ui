(this["webpackJsonpcore-ui"]=this["webpackJsonpcore-ui"]||[]).push([[0],{31:function(n,e,c){},39:function(n,e,c){"use strict";c.r(e);var t,i,r,a,o,s,d,j,l=c(1),b=c.n(l),x=c(20),u=c.n(x),h=(c(31),c(15)),p=c(8),O=c(25),m=c(11),f=c(9),g=f.a.nav(t||(t=Object(p.a)(["\n  background: #000;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n"]))),v=Object(f.a)(m.b)(i||(i=Object(p.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #15cdfc;\n  }\n"]))),y=Object(f.a)(m.b)(r||(r=Object(p.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 36px;\n  margin: 20px auto;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #15cdfc;\n  }\n"]))),S=Object(f.a)(O.a)(a||(a=Object(p.a)(["\n  height: 40px;\n  width: 40px;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: App-logo-spin infinite 1s linear;\n  }\n\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),k=f.a.div(o||(o=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  @media screen and (max-width: 820px) {\n    display: none;\n  }\n"]))),N=f.a.div(s||(s=Object(p.a)(["\n  display: none;\n  position: fixed;\n  width: 100vw;\n  height: fit-content;\n  background-color: rgba(0,0,0,0.6);\n  @media screen and (max-width: 820px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-right: -24px;\n  }\n"]))),w=f.a.nav(d||(d=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n\n  @media screen and (max-width: 820px) {\n    display: none;\n  }\n"]))),A=Object(f.a)(m.b)(j||(j=Object(p.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  margin-left: 24px;\n"]))),C=c(2);var B=function(){var n=Object(l.useState)(!1),e=Object(h.a)(n,2),c=e[0],t=e[1];return Object(C.jsxs)(g,{children:[Object(C.jsx)(v,{to:"/core-ui",children:Object(C.jsxs)("span",{style:{display:"inline-flex"},children:[Object(C.jsx)(S,{})," ",Object(C.jsx)("h3",{style:{margin:"10px 20px"},children:"Company"})]})}),Object(C.jsxs)(N,{id:"nav-mobile",className:c?"navm-open":"navm-close",children:[Object(C.jsx)(y,{onClick:function(){t(!1)},to:"/core-ui/accordion",activeStyle:!0,children:"Accordion"}),Object(C.jsx)(y,{onClick:function(){t(!1)},to:"/core-ui/anchormenu",activeStyle:!0,children:"AnchorMenu"}),Object(C.jsx)(y,{onClick:function(){t(!1)},to:"/core-ui/sidebar",activeStyle:!0,children:"SideBar"}),Object(C.jsx)(y,{onClick:function(){t(!1)},to:"/core-ui/tabs",activeStyle:!0,children:"Tabs"}),Object(C.jsx)(y,{onClick:function(){t(!1)},to:"/core-ui/sign-in",activeStyle:!0,children:"Sign In"})]}),Object(C.jsx)("span",{className:"navicon",onClick:function(){return t(!c)},children:Object(C.jsxs)("div",{id:"nav-icon",className:c?"open":"",children:[Object(C.jsx)("span",{}),Object(C.jsx)("span",{}),Object(C.jsx)("span",{})]})}),Object(C.jsxs)(k,{children:[Object(C.jsx)(v,{to:"/core-ui/accordion",activeStyle:!0,children:"Accordion"}),Object(C.jsx)(v,{to:"/core-ui/anchormenu",activeStyle:!0,children:"AnchorMenu"}),Object(C.jsx)(v,{to:"/core-ui/sidebar",activeStyle:!0,children:"SideBar"}),Object(C.jsx)(v,{to:"/core-ui/tabs",activeStyle:!0,children:"Tabs"})]}),Object(C.jsx)(w,{children:Object(C.jsx)(A,{className:"button1",to:"/core-ui/sign-in",children:"Sign In"})})]})},M=c(3),I=c(26),T=function(n){var e=n.title,c=n.children,t=Object(l.useState)(!1),i=Object(h.a)(t,2),r=i[0],a=i[1];return Object(C.jsxs)("div",{className:"pages accordion",children:[Object(C.jsxs)("div",{className:"accordion-header",onClick:function(){return a(!r)},children:[Object(C.jsx)("h4",{children:e}),Object(C.jsx)(I.a,{className:r?"accordion-chevron chevron-open":"accordion-chevron chevron-close"})]}),Object(C.jsx)("div",{className:r?"accordion-main accordion-open":"accordion-main accordion-close",children:c})]})},z=function(){return Object(C.jsx)("div",{className:"pages sidebar",children:"SideBar"})},J=function(){return Object(C.jsx)("div",{className:"pages anchor-menu",children:"AnchorMenu"})},E=function(){return Object(C.jsx)("div",{className:"pages tabs",children:"Tabs"})},H=function(){return Object(C.jsx)("div",{className:"pages login",children:"Login"})},L=function(){return Object(C.jsx)("div",{className:"pages home",children:"Home"})};var q=function(){return Object(C.jsxs)(m.a,{children:[Object(C.jsx)(B,{}),Object(C.jsxs)(M.c,{children:[Object(C.jsx)(M.a,{path:"/core-ui",exact:!0,render:function(){return Object(C.jsx)(L,{})}}),Object(C.jsx)(M.a,{path:"/core-ui/accordion",render:function(){return Object(C.jsx)(T,{title:"title123",children:"Accordion123"})}}),Object(C.jsx)(M.a,{path:"/core-ui/anchormenu",render:function(){return Object(C.jsx)(J,{})}}),Object(C.jsx)(M.a,{path:"/core-ui/sidebar",render:function(){return Object(C.jsx)(z,{})}}),Object(C.jsx)(M.a,{path:"/core-ui/tabs",render:function(){return Object(C.jsx)(E,{})}}),Object(C.jsx)(M.a,{path:"/core-ui/sign-in",render:function(){return Object(C.jsx)(H,{})}})]})]})};u.a.render(Object(C.jsx)(b.a.StrictMode,{children:Object(C.jsx)(q,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.112a4da2.chunk.js.map