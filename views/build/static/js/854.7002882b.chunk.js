"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[854],{1327:(e,n,s)=>{s.d(n,{A:()=>b});var t=s(5043),o=s(3519),l=s(5171),i=s(579);const r=()=>(0,i.jsx)(l.A,{className:"bg-body-tertiary",children:(0,i.jsx)(o.A,{children:(0,i.jsx)(l.A.Brand,{children:(0,i.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,i.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,i.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var a=s(7527),d=s(2691),c=s(1666),h=s(4282),x=s(3637),g=s(2104),m=s(3083),u=s(4462);s(9320),s(9317);const j=e=>{const{loginState:n,isLogin:s}=(0,u.A)(),[r,j]=(0,t.useState)(!1),[p,b]=(0,t.useState)(""),[f,y]=(0,t.useState)([]),[A,v]=(0,t.useState)(""),[C,k]=(0,t.useState)(""),S=(0,t.useRef)(),w=(0,t.useRef)(),{moveToLogin:L}=(0,u.A)(),R=(0,t.useRef)(),[T,N]=(0,t.useState)(null);(0,t.useEffect)((()=>(null===T||void 0===T||T.on("roomcreate",(function(e){var n;y((n=>[...n,{msg:e,type:"welcome",id:""}])),j((()=>!0)),null===(n=R.current)||void 0===n||n.scrollIntoView({behavior:"smooth",block:"end"})})),null===T||void 0===T||T.on("message",(function(e){var s;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:t,username:o,chatroomname:l}=e;y((e=>[...e,{msg:t,type:n===o?"me":"other",id:o}])),null===(s=R.current)||void 0===s||s.scrollIntoView({behavior:"smooth",block:"end"}),b((()=>""))})),null===T||void 0===T||T.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),y((n=>[...n,{msg:e.message,type:"goodbye",id:""}]));const n=T.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",n)})),()=>{null===T||void 0===T||T.off("message"),null===T||void 0===T||T.off("out"),null===T||void 0===T||T.off("roomcreate")})),[T]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)(o.A,{fluid:!0,children:[(0,i.jsxs)(l.A.Brand,{children:[(0,i.jsx)(x.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,i.jsxs)(l.A.Collapse,{children:[(0,i.jsxs)(a.A,{className:"me-auto",children:[(0,i.jsx)(a.A.Link,{href:"/",children:"Home"}),s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,i.jsx)(a.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,i.jsx)(a.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,i.jsx)(a.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,i.jsx)(a.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,i.jsx)(a.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,i.jsxs)(d.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!s)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),L();if(""===A||void 0===A)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===C||void 0===C)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const t=(0,g.io)({autoConnect:!1});t.connect(),N((()=>t));const o={username:n,chatroomname:A,chatroompassword:C};t.emit("roomcreate",o)})(e),children:[" ",(0,i.jsxs)(c.A,{size:"sm",style:{width:"600px"},children:[(0,i.jsx)(c.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,i.jsx)(d.A.Control,{type:"text",name:"chatroomname",onChange:e=>{v((()=>e.target.value))},value:A,ref:S}),(0,i.jsx)(c.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,i.jsx)(d.A.Control,{type:"text",name:"chatroompassword",ref:w,onChange:e=>{k((()=>e.target.value))},value:C}),(0,i.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),r&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,i.jsxs)(m.A.Dialog,{children:[(0,i.jsxs)(m.A.Header,{children:[(0,i.jsxs)(m.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",A," "]}),"\xa0 \xa0",(0,i.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),T.emit("out",{chatroomname:A,loginState:n,chatroompassword:C}),N(null),y([]),v(""),k(""),j((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,i.jsx)(m.A.Body,{children:(0,i.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,i.jsxs)("ul",{children:[f.map(((e,n)=>"welcome"===e.type||"goodbye"===e.type?(0,i.jsxs)("li",{style:{listStyle:"none"},children:[(0,i.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,i.jsx)("div",{children:e.msg}),(0,i.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},n):"me"===e.type?(0,i.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,i.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,i.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${n}_1`):(0,i.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,i.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,i.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${n}_2`))),(0,i.jsx)("li",{ref:R,style:{listStyle:"none"}})]})})}),(0,i.jsx)(d.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const s={message:p,username:n,chatroomname:A};T.emit("message",s)})(e),children:(0,i.jsxs)(m.A.Footer,{children:[(0,i.jsxs)(c.A,{className:"mb-3",children:[(0,i.jsx)(c.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,i.jsx)(d.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{b((()=>e.target.value))})(e),value:p,name:"chatcontents"})]}),(0,i.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},p=e=>(0,i.jsx)(j,{isLogin:e.isLogin}),b=e=>{let{children:n}=e;const[s,o]=(0,t.useState)(new Date),{loginState:l,isLogin:a}=(0,u.A)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{isLogin:a}),n,(0,i.jsx)(r,{})]})}},7854:(e,n,s)=>{s.r(n),s.d(n,{default:()=>h});var t=s(1327),o=s(5043),l=s(4282),i=s(2691),r=(s(8797),s(4462)),a=s(579);const d={email:"",pw:""},c=()=>{const[e,n]=(0,o.useState)({...d}),{moveToPath:s,doLogin:t,forSession:c}=(0,r.A)(),h=(0,o.useCallback)((s=>{e[s.target.name]=s.target.value,n({...e})}),[e]);return(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("h4",{children:"\ub85c\uadf8\uc778"}),(0,a.jsx)("hr",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(i.A,{onSubmit:n=>{console.log("LoginComponent.js handleSubmitLogin() \uc9c4\uc785"),n.preventDefault(),t(e).then((e=>{console.log("LoginComponent.js handleClickLogin() loginPostAsync \uacb0\uacfc ",e),e.error?(alert("\uc77c\uce58\ud558\ub294 \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4 \ud68c\uc6d0\uac00\uc785\uc744 \ud574\uc8fc\uc138\uc694!"),console.log("data.error => ",e.error),s("/login")):s("/")})).catch((e=>{console.log("LoginComponent.js thunk\ud568\uc218 \uc2e4\ud589\uacb0\uacfc catch() \uc9c4\uc785 ",e),alert("\uc77c\uce58\ud558\ub294 \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4 \ud68c\uc6d0\uac00\uc785\uc744 \ud574\uc8fc\uc138\uc694!"),s("/login")}))},children:[(0,a.jsxs)(i.A.Group,{className:"mb-3",children:[(0,a.jsx)(i.A.Label,{children:"\uc774\uba54\uc77c\uc8fc\uc18c"}),(0,a.jsx)(i.A.Control,{type:"email",name:"email",value:e.email,onChange:h}),(0,a.jsx)(i.A.Text,{className:"text-muted"})]}),(0,a.jsxs)(i.A.Group,{className:"mb-3",children:[(0,a.jsx)(i.A.Label,{children:"\ud328\uc2a4\uc6cc\ub4dc"}),(0,a.jsx)(i.A.Control,{type:"password",name:"pw",value:e.pw,onChange:h})]}),(0,a.jsx)(l.A,{variant:"primary",type:"submit",children:"\ub85c\uadf8\uc778"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})},h=()=>(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsx)(t.A,{children:(0,a.jsx)(c,{})})]})},8797:(e,n,s)=>{s(9317);s(579)}}]);
//# sourceMappingURL=854.7002882b.chunk.js.map