"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[304],{998:(e,t,o)=>{o.d(t,{j:()=>i});var n=o(6213);const s="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(s);const l=()=>{if(navigator.geolocation){var e,t;function o(e){localStorage.setItem("COORDS",JSON.stringify(e))}function n(e){var t,n;o({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(n=e.coords)||void 0===n?void 0:n.longitude})}function s(){console.log("cant not access to location")}function l(){navigator.geolocation.getCurrentPosition(n,s)}let i=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(i)),i=JSON.parse(i),null===i&&l();return((e,t,o)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var n=Math.PI/180,s=180/Math.PI,l=6371.00877/5,i=30*n,a=60*n,r=126*n,c=38*n,d=Math.tan(.25*Math.PI+.5*a)/Math.tan(.25*Math.PI+.5*i);d=Math.log(Math.cos(i)/Math.cos(a))/Math.log(d);var h=Math.tan(.25*Math.PI+.5*i);h=Math.pow(h,d)*Math.cos(i)/d;var g=Math.tan(.25*Math.PI+.5*c);g=l*h/Math.pow(g,d);var x={};if("toXY"==e){x.lat=t,x.lng=o;var u=Math.tan(.25*Math.PI+t*n*.5);u=l*h/Math.pow(u,d);var m=o*n-r;m>Math.PI&&(m-=2*Math.PI),m<-Math.PI&&(m+=2*Math.PI),m*=d,x.x=Math.floor(u*Math.sin(m)+43+.5),x.y=Math.floor(g-u*Math.cos(m)+136+.5)}else{x.x=t,x.y=o;var p=t-43,v=g-o+136;if(u=Math.sqrt(p*p+v*v),d<0)return-u;var j=Math.pow(l*h/u,1/d);if(j=2*Math.atan(j)-.5*Math.PI,Math.abs(p)<=0)m=0;else if(Math.abs(v)<=0){if(m=.5*Math.PI,p<0)return-m}else m=Math.atan2(p,v);var f=m/d+r;x.lat=j*s,x.lng=f*s}return x})("toXY",Number(null===(e=i)||void 0===e?void 0:e.latitude),Number(null===(t=i)||void 0===t?void 0:t.longitude))}},i=async e=>{let{weatherDate:t,weatherTime:o}=e;var i=null;const a=l();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",a),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",o);try{var r,c,d,h;const e=await n.A.get("https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",{params:{serviceKey:s,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:o,nx:a.x,ny:a.y}});return i=null===e||void 0===e||null===(r=e.data)||void 0===r||null===(c=r.response)||void 0===c||null===(d=c.body)||void 0===d||null===(h=d.items)||void 0===h?void 0:h.item,console.log("openAPI \uacf5\uacf5 api axios \uacb0\uacfc ",i),i}catch(g){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",g)}}},1327:(e,t,o)=>{o.d(t,{A:()=>j});var n=o(5043),s=o(3519),l=o(5171),i=o(579);const a=()=>(0,i.jsx)(l.A,{className:"bg-body-tertiary",children:(0,i.jsx)(s.A,{children:(0,i.jsx)(l.A.Brand,{children:(0,i.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,i.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,i.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var r=o(7527),c=o(2691),d=o(1666),h=o(4282),g=o(3637),x=o(2104),u=o(3083),m=o(4462);o(9320),o(9317);o(998);const p=e=>{const{loginState:t,isLogin:o}=(0,m.A)(),[a,p]=(0,n.useState)(!1),[v,j]=(0,n.useState)(""),[f,y]=(0,n.useState)([]),[b,A]=(0,n.useState)(""),[M,w]=(0,n.useState)(""),S=(0,n.useRef)(),k=(0,n.useRef)(),{moveToLogin:C}=(0,m.A)(),I=(0,n.useRef)(),[R,N]=(0,n.useState)(null);(0,n.useEffect)((()=>(null===R||void 0===R||R.on("roomcreate",(function(e){var t;y((t=>[...t,{msg:e,type:"welcome",id:""}])),p((()=>!0)),null===(t=I.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===R||void 0===R||R.on("message",(function(e){var o;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:n,username:s,chatroomname:l}=e;y((e=>[...e,{msg:n,type:t===s?"me":"other",id:s}])),null===(o=I.current)||void 0===o||o.scrollIntoView({behavior:"smooth",block:"end"}),j((()=>""))})),null===R||void 0===R||R.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),y((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=R.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===R||void 0===R||R.off("message"),null===R||void 0===R||R.off("out"),null===R||void 0===R||R.off("roomcreate")})),[R]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)(s.A,{fluid:!0,children:[(0,i.jsxs)(l.A.Brand,{children:[(0,i.jsx)(g.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,i.jsxs)(l.A.Collapse,{children:[(0,i.jsxs)(r.A,{className:"me-auto",children:[(0,i.jsx)(r.A.Link,{href:"/",children:"Home"}),o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,i.jsx)(r.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,i.jsx)(r.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,i.jsx)(r.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,i.jsx)(r.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,i.jsx)(r.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,i.jsxs)(c.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!o)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),C();if(""===b||void 0===b)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===M||void 0===M)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const n=(0,x.io)({autoConnect:!1});n.connect(),N((()=>n));const s={username:t,chatroomname:b,chatroompassword:M};n.emit("roomcreate",s)})(e),children:[" ",(0,i.jsxs)(d.A,{size:"sm",style:{width:"600px"},children:[(0,i.jsx)(d.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,i.jsx)(c.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:b,ref:S}),(0,i.jsx)(d.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,i.jsx)(c.A.Control,{type:"text",name:"chatroompassword",ref:k,onChange:e=>{w((()=>e.target.value))},value:M}),(0,i.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),a&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,i.jsxs)(u.A.Dialog,{children:[(0,i.jsxs)(u.A.Header,{children:[(0,i.jsxs)(u.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",b," "]}),"\xa0 \xa0",(0,i.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),R.emit("out",{chatroomname:b,loginState:t,chatroompassword:M}),N(null),y([]),A(""),w(""),p((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,i.jsx)(u.A.Body,{children:(0,i.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,i.jsxs)("ul",{children:[f.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,i.jsxs)("li",{style:{listStyle:"none"},children:[(0,i.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,i.jsx)("div",{children:e.msg}),(0,i.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,i.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,i.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,i.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,i.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,i.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,i.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,i.jsx)("li",{ref:I,style:{listStyle:"none"}})]})})}),(0,i.jsx)(c.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const o={message:v,username:t,chatroomname:b};R.emit("message",o)})(e),children:(0,i.jsxs)(u.A.Footer,{children:[(0,i.jsxs)(d.A,{className:"mb-3",children:[(0,i.jsx)(d.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,i.jsx)(c.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{j((()=>e.target.value))})(e),value:v,name:"chatcontents"})]}),(0,i.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},v=e=>(0,i.jsx)(p,{isLogin:e.isLogin}),j=e=>{let{children:t}=e;const[o,s]=(0,n.useState)(new Date),{loginState:l,isLogin:r}=(0,m.A)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{isLogin:r}),t,(0,i.jsx)(a,{})]})}},4304:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var n=o(1327),s=o(3637),l=o(4282),i=o(1675),a=o(579);const r=()=>(0,a.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("h3",{style:{color:"crimson"},children:[(0,a.jsx)(s.A,{src:"/img/smile.png",style:{width:"30px",height:"30px"},rounded:!0}),"\ud574\ub2f9 \ud398\uc774\uc9c0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uac70\ub098 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4!"]}),(0,a.jsx)("br",{}),(0,a.jsx)(l.A,{variant:"outline-primary",children:(0,a.jsx)(i.N_,{to:"/",style:{textDecoration:"none"},children:"\uba54\uc778\uc73c\ub85c"})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.A,{children:(0,a.jsx)(r,{})})})}}]);
//# sourceMappingURL=304.6989db6d.chunk.js.map