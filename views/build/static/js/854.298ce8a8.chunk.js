"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[854],{998:(e,t,o)=>{o.d(t,{j:()=>a});var n=o(6213);const l="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(l);const s=()=>{if(navigator.geolocation){var e,t;function o(e){localStorage.setItem("COORDS",JSON.stringify(e))}function n(e){var t,n;o({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(n=e.coords)||void 0===n?void 0:n.longitude})}function l(){console.log("cant not access to location")}function s(){navigator.geolocation.getCurrentPosition(n,l)}let a=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(a)),a=JSON.parse(a),null===a&&s();return((e,t,o)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var n=Math.PI/180,l=180/Math.PI,s=6371.00877/5,a=30*n,i=60*n,r=126*n,c=38*n,d=Math.tan(.25*Math.PI+.5*i)/Math.tan(.25*Math.PI+.5*a);d=Math.log(Math.cos(a)/Math.cos(i))/Math.log(d);var h=Math.tan(.25*Math.PI+.5*a);h=Math.pow(h,d)*Math.cos(a)/d;var g=Math.tan(.25*Math.PI+.5*c);g=s*h/Math.pow(g,d);var u={};if("toXY"==e){u.lat=t,u.lng=o;var x=Math.tan(.25*Math.PI+t*n*.5);x=s*h/Math.pow(x,d);var m=o*n-r;m>Math.PI&&(m-=2*Math.PI),m<-Math.PI&&(m+=2*Math.PI),m*=d,u.x=Math.floor(x*Math.sin(m)+43+.5),u.y=Math.floor(g-x*Math.cos(m)+136+.5)}else{u.x=t,u.y=o;var p=t-43,j=g-o+136;if(x=Math.sqrt(p*p+j*j),d<0)return-x;var v=Math.pow(s*h/x,1/d);if(v=2*Math.atan(v)-.5*Math.PI,Math.abs(p)<=0)m=0;else if(Math.abs(j)<=0){if(m=.5*Math.PI,p<0)return-m}else m=Math.atan2(p,j);var f=m/d+r;u.lat=v*l,u.lng=f*l}return u})("toXY",Number(null===(e=a)||void 0===e?void 0:e.latitude),Number(null===(t=a)||void 0===t?void 0:t.longitude))}},a=async e=>{let{weatherDate:t,weatherTime:o}=e;var a=null;const i=s();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",i),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",o);try{var r,c,d,h;const e=await n.A.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",{params:{serviceKey:l,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:o,nx:i.x,ny:i.y}});return a=null===e||void 0===e||null===(r=e.data)||void 0===r||null===(c=r.response)||void 0===c||null===(d=c.body)||void 0===d||null===(h=d.items)||void 0===h?void 0:h.item,console.log("openAPI axios \uacb0\uacfc ",a),a}catch(g){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",g)}}},1327:(e,t,o)=>{o.d(t,{A:()=>v});var n=o(5043),l=o(3519),s=o(5171),a=o(579);const i=()=>(0,a.jsx)(s.A,{className:"bg-body-tertiary",children:(0,a.jsx)(l.A,{children:(0,a.jsx)(s.A.Brand,{children:(0,a.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,a.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,a.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var r=o(7527),c=o(2691),d=o(1666),h=o(4282),g=o(3637),u=o(2104),x=o(3083),m=o(4462);o(9320),o(9317);o(998);const p=e=>{const{loginState:t,isLogin:o}=(0,m.A)(),[i,p]=(0,n.useState)(!1),[j,v]=(0,n.useState)(""),[f,y]=(0,n.useState)([]),[b,A]=(0,n.useState)(""),[M,w]=(0,n.useState)(""),S=(0,n.useRef)(),C=(0,n.useRef)(),{moveToLogin:k}=(0,m.A)(),L=(0,n.useRef)(),[I,N]=(0,n.useState)(null);(0,n.useEffect)((()=>(null===I||void 0===I||I.on("roomcreate",(function(e){var t;y((t=>[...t,{msg:e,type:"welcome",id:""}])),p((()=>!0)),null===(t=L.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===I||void 0===I||I.on("message",(function(e){var o;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:n,username:l,chatroomname:s}=e;y((e=>[...e,{msg:n,type:t===l?"me":"other",id:l}])),null===(o=L.current)||void 0===o||o.scrollIntoView({behavior:"smooth",block:"end"}),v((()=>""))})),null===I||void 0===I||I.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),y((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=I.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===I||void 0===I||I.off("message"),null===I||void 0===I||I.off("out"),null===I||void 0===I||I.off("roomcreate")})),[I]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsxs)(l.A,{fluid:!0,children:[(0,a.jsxs)(s.A.Brand,{children:[(0,a.jsx)(g.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,a.jsxs)(s.A.Collapse,{children:[(0,a.jsxs)(r.A,{className:"me-auto",children:[(0,a.jsx)(r.A.Link,{href:"/",children:"Home"}),o?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,a.jsx)(r.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,a.jsx)(r.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,a.jsx)(r.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,a.jsx)(r.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,a.jsx)(r.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,a.jsxs)(c.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!o)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),k();if(""===b||void 0===b)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===M||void 0===M)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const n=(0,u.io)({autoConnect:!1});n.connect(),N((()=>n));const l={username:t,chatroomname:b,chatroompassword:M};n.emit("roomcreate",l)})(e),children:[" ",(0,a.jsxs)(d.A,{size:"sm",style:{width:"600px"},children:[(0,a.jsx)(d.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,a.jsx)(c.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:b,ref:S}),(0,a.jsx)(d.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,a.jsx)(c.A.Control,{type:"text",name:"chatroompassword",ref:C,onChange:e=>{w((()=>e.target.value))},value:M}),(0,a.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),i&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,a.jsxs)(x.A.Dialog,{children:[(0,a.jsxs)(x.A.Header,{children:[(0,a.jsxs)(x.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",b," "]}),"\xa0 \xa0",(0,a.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),I.emit("out",{chatroomname:b,loginState:t,chatroompassword:M}),N(null),y([]),A(""),w(""),p((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,a.jsx)(x.A.Body,{children:(0,a.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,a.jsxs)("ul",{children:[f.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,a.jsxs)("li",{style:{listStyle:"none"},children:[(0,a.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,a.jsx)("div",{children:e.msg}),(0,a.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,a.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,a.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,a.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,a.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,a.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,a.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,a.jsx)("li",{ref:L,style:{listStyle:"none"}})]})})}),(0,a.jsx)(c.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const o={message:j,username:t,chatroomname:b};I.emit("message",o)})(e),children:(0,a.jsxs)(x.A.Footer,{children:[(0,a.jsxs)(d.A,{className:"mb-3",children:[(0,a.jsx)(d.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,a.jsx)(c.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{v((()=>e.target.value))})(e),value:j,name:"chatcontents"})]}),(0,a.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},j=e=>(0,a.jsx)(p,{isLogin:e.isLogin}),v=e=>{let{children:t}=e;const[o,l]=(0,n.useState)(new Date),{loginState:s,isLogin:r}=(0,m.A)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{isLogin:r}),t,(0,a.jsx)(i,{})]})}},7854:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var n=o(1327),l=o(5043),s=o(4282),a=o(2691),i=(o(8797),o(4462)),r=o(579);const c={email:"",pw:""},d=()=>{const[e,t]=(0,l.useState)({...c}),{moveToPath:o,doLogin:n,forSession:d}=(0,i.A)(),h=(0,l.useCallback)((o=>{e[o.target.name]=o.target.value,t({...e})}),[e]);return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{children:"\ub85c\uadf8\uc778"}),(0,r.jsx)("hr",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(a.A,{onSubmit:t=>{console.log("LoginComponent.js handleSubmitLogin() \uc9c4\uc785"),t.preventDefault(),n(e).then((e=>{console.log("LoginComponent.js handleClickLogin() loginPostAsync \uacb0\uacfc ",e),e.error?(alert("\uc77c\uce58\ud558\ub294 \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4 \ud68c\uc6d0\uac00\uc785\uc744 \ud574\uc8fc\uc138\uc694!"),console.log("data.error => ",e.error),o("/login")):o("/")})).catch((e=>{console.log("LoginComponent.js thunk\ud568\uc218 \uc2e4\ud589\uacb0\uacfc catch() \uc9c4\uc785 ",e),alert("\uc77c\uce58\ud558\ub294 \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4 \ud68c\uc6d0\uac00\uc785\uc744 \ud574\uc8fc\uc138\uc694!"),o("/login")}))},children:[(0,r.jsxs)(a.A.Group,{className:"mb-3",children:[(0,r.jsx)(a.A.Label,{children:"\uc774\uba54\uc77c\uc8fc\uc18c"}),(0,r.jsx)(a.A.Control,{type:"email",name:"email",value:e.email,onChange:h}),(0,r.jsx)(a.A.Text,{className:"text-muted"})]}),(0,r.jsxs)(a.A.Group,{className:"mb-3",children:[(0,r.jsx)(a.A.Label,{children:"\ud328\uc2a4\uc6cc\ub4dc"}),(0,r.jsx)(a.A.Control,{type:"password",name:"pw",value:e.pw,onChange:h})]}),(0,r.jsx)(s.A,{variant:"primary",type:"submit",children:"\ub85c\uadf8\uc778"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})},h=()=>(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)(n.A,{children:(0,r.jsx)(d,{})})]})},8797:(e,t,o)=>{o(9317);o(579)}}]);
//# sourceMappingURL=854.298ce8a8.chunk.js.map