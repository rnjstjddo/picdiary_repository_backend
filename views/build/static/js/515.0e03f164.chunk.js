"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[515],{998:(e,t,o)=>{o.d(t,{j:()=>l});var n=o(6213);const s="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(s);const a=()=>{if(navigator.geolocation){var e,t;function o(e){localStorage.setItem("COORDS",JSON.stringify(e))}function n(e){var t,n;o({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(n=e.coords)||void 0===n?void 0:n.longitude})}function s(){console.log("cant not access to location")}function a(){navigator.geolocation.getCurrentPosition(n,s)}let l=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(l)),l=JSON.parse(l),null===l&&a();return((e,t,o)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var n=Math.PI/180,s=180/Math.PI,a=6371.00877/5,l=30*n,i=60*n,r=126*n,c=38*n,d=Math.tan(.25*Math.PI+.5*i)/Math.tan(.25*Math.PI+.5*l);d=Math.log(Math.cos(l)/Math.cos(i))/Math.log(d);var h=Math.tan(.25*Math.PI+.5*l);h=Math.pow(h,d)*Math.cos(l)/d;var u=Math.tan(.25*Math.PI+.5*c);u=a*h/Math.pow(u,d);var g={};if("toXY"==e){g.lat=t,g.lng=o;var x=Math.tan(.25*Math.PI+t*n*.5);x=a*h/Math.pow(x,d);var m=o*n-r;m>Math.PI&&(m-=2*Math.PI),m<-Math.PI&&(m+=2*Math.PI),m*=d,g.x=Math.floor(x*Math.sin(m)+43+.5),g.y=Math.floor(u-x*Math.cos(m)+136+.5)}else{g.x=t,g.y=o;var p=t-43,j=u-o+136;if(x=Math.sqrt(p*p+j*j),d<0)return-x;var v=Math.pow(a*h/x,1/d);if(v=2*Math.atan(v)-.5*Math.PI,Math.abs(p)<=0)m=0;else if(Math.abs(j)<=0){if(m=.5*Math.PI,p<0)return-m}else m=Math.atan2(p,j);var f=m/d+r;g.lat=v*s,g.lng=f*s}return g})("toXY",Number(null===(e=l)||void 0===e?void 0:e.latitude),Number(null===(t=l)||void 0===t?void 0:t.longitude))}},l=async e=>{let{weatherDate:t,weatherTime:o}=e;const l=a();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",l),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",o);try{var i,r,c,d;const e={serviceKey:s,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:o,nx:l.x,ny:l.y},a=await n.A.post("/api/main/openapi",{url:"https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",params:e}).then((e=>{console.log("openApi.js axios.post(/api/openapi) \uacb0\uacfc -> ",e)})).catch((e=>{console.log("openApi.js axios.post(/api/openapi) \uc5d0\ub7ec\ubc1c\uc0dd -> ",e)}));return console.log("openAPI \uacf5\uacf5 api axios \uacb0\uacfc result",a),null===a||void 0===a||null===(i=a.data)||void 0===i||null===(r=i.response)||void 0===r||null===(c=r.body)||void 0===c||null===(d=c.items)||void 0===d?void 0:d.item}catch(h){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",h)}}},1327:(e,t,o)=>{o.d(t,{A:()=>v});var n=o(5043),s=o(3519),a=o(5171),l=o(579);const i=()=>(0,l.jsx)(a.A,{className:"bg-body-tertiary",children:(0,l.jsx)(s.A,{children:(0,l.jsx)(a.A.Brand,{children:(0,l.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,l.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,l.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var r=o(7527),c=o(2691),d=o(1666),h=o(4282),u=o(3637),g=o(2104),x=o(3083),m=o(4462);o(9320),o(9317);o(998);const p=e=>{const{loginState:t,isLogin:o}=(0,m.A)(),[i,p]=(0,n.useState)(!1),[j,v]=(0,n.useState)(""),[f,y]=(0,n.useState)([]),[b,A]=(0,n.useState)(""),[w,C]=(0,n.useState)(""),M=(0,n.useRef)(),S=(0,n.useRef)(),{moveToLogin:k}=(0,m.A)(),I=(0,n.useRef)(),[N,L]=(0,n.useState)(null);(0,n.useEffect)((()=>(null===N||void 0===N||N.on("roomcreate",(function(e){var t;y((t=>[...t,{msg:e,type:"welcome",id:""}])),p((()=>!0)),null===(t=I.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===N||void 0===N||N.on("message",(function(e){var o;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:n,username:s,chatroomname:a}=e;y((e=>[...e,{msg:n,type:t===s?"me":"other",id:s}])),null===(o=I.current)||void 0===o||o.scrollIntoView({behavior:"smooth",block:"end"}),v((()=>""))})),null===N||void 0===N||N.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),y((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=N.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===N||void 0===N||N.off("message"),null===N||void 0===N||N.off("out"),null===N||void 0===N||N.off("roomcreate")})),[N]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,l.jsxs)(s.A,{fluid:!0,children:[(0,l.jsxs)(a.A.Brand,{children:[(0,l.jsx)(u.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,l.jsxs)(a.A.Collapse,{children:[(0,l.jsxs)(r.A,{className:"me-auto",children:[(0,l.jsx)(r.A.Link,{href:"/",children:"Home"}),o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,l.jsx)(r.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,l.jsx)(r.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,l.jsx)(r.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,l.jsx)(r.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,l.jsx)(r.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,l.jsxs)(c.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!o)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),k();if(""===b||void 0===b)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===w||void 0===w)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const n=(0,g.io)({autoConnect:!1});n.connect(),L((()=>n));const s={username:t,chatroomname:b,chatroompassword:w};n.emit("roomcreate",s)})(e),children:[" ",(0,l.jsxs)(d.A,{size:"sm",style:{width:"600px"},children:[(0,l.jsx)(d.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,l.jsx)(c.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:b,ref:M}),(0,l.jsx)(d.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,l.jsx)(c.A.Control,{type:"text",name:"chatroompassword",ref:S,onChange:e=>{C((()=>e.target.value))},value:w}),(0,l.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),i&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,l.jsxs)(x.A.Dialog,{children:[(0,l.jsxs)(x.A.Header,{children:[(0,l.jsxs)(x.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",b," "]}),"\xa0 \xa0",(0,l.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),N.emit("out",{chatroomname:b,loginState:t,chatroompassword:w}),L(null),y([]),A(""),C(""),p((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,l.jsx)(x.A.Body,{children:(0,l.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,l.jsxs)("ul",{children:[f.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,l.jsxs)("li",{style:{listStyle:"none"},children:[(0,l.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,l.jsx)("div",{children:e.msg}),(0,l.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,l.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,l.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,l.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,l.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,l.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,l.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,l.jsx)("li",{ref:I,style:{listStyle:"none"}})]})})}),(0,l.jsx)(c.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const o={message:j,username:t,chatroomname:b};N.emit("message",o)})(e),children:(0,l.jsxs)(x.A.Footer,{children:[(0,l.jsxs)(d.A,{className:"mb-3",children:[(0,l.jsx)(d.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,l.jsx)(c.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{v((()=>e.target.value))})(e),value:j,name:"chatcontents"})]}),(0,l.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},j=e=>(0,l.jsx)(p,{isLogin:e.isLogin}),v=e=>{let{children:t}=e;const[o,s]=(0,n.useState)(new Date),{loginState:a,isLogin:r}=(0,m.A)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j,{isLogin:r}),t,(0,l.jsx)(i,{})]})}},2515:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var n=o(1327),s=o(5043),a=o(4462),l=(o(8797),o(4282)),i=o(2691),r=o(1675),c=o(579);const d={email:"",pw:"",nick:"",pwConfirm:""},h=()=>{const[e,t]=(0,s.useState)({...d}),{moveToPath:o,doJoin:n}=((0,r.Zp)(),(0,a.A)()),h=(0,s.useCallback)((o=>{console.log(o.target.value,o.target.name),e[o.target.name]=o.target.value,t({...e})}),[e]);return(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("h4",{children:"\ud68c\uc6d0\uac00\uc785"}),(0,c.jsx)("hr",{}),(0,c.jsx)("br",{}),(0,c.jsxs)(i.A,{onSubmit:t=>{if(t.preventDefault(),console.log("handleSubmitJoin\uc9c4\uc785!!"),console.log(t),e.pw!==e.pwConfirm)return void alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4 \ud655\uc778\ud574\uc8fc\uc138\uc694!");e.email,e.pw,e.nick;n(e).then((e=>{console.log("JoinComponent.js handleSubmitJoin() joinPostAsync \uacb0\uacfc ",e),e.error?alert("\uc774\ubbf8 \uac00\uc785\ub41c \ud68c\uc6d0\uc785\ub2c8\ub2e4. \ub2e4\ub978 \uc774\uba54\uc77c\uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694!"):(alert("\ud68c\uc6d0\uac00\uc785\uc131\uacf5"),o("/"))})).catch((e=>{console.log("JoinComponent.js handleSubmitJoin() joinPostAsync \uacb0\uacfc err",e)}))},children:[(0,c.jsxs)(i.A.Group,{className:"mb-3",children:[(0,c.jsx)(i.A.Label,{children:"\uc774\uba54\uc77c\uc8fc\uc18c"}),(0,c.jsx)(i.A.Control,{type:"email",name:"email",value:e.email,onChange:h}),(0,c.jsx)(i.A.Text,{className:"text-muted"})]}),(0,c.jsxs)(i.A.Group,{className:"mb-3",children:[(0,c.jsx)(i.A.Label,{children:"\ub2c9\ub124\uc784"}),(0,c.jsx)(i.A.Control,{type:"text",name:"nick",value:e.nick,onChange:h}),(0,c.jsx)(i.A.Text,{className:"text-muted"})]}),(0,c.jsxs)(i.A.Group,{className:"mb-3",children:[(0,c.jsx)(i.A.Label,{children:"\ud328\uc2a4\uc6cc\ub4dc"}),(0,c.jsx)(i.A.Control,{type:"password",name:"pw",value:e.pw,onChange:h})]}),(0,c.jsxs)(i.A.Group,{className:"mb-3",children:[(0,c.jsx)(i.A.Label,{children:"\ud328\uc2a4\uc6cc\ub4dc \uc7ac\ud655\uc778"}),(0,c.jsx)(i.A.Control,{type:"password",name:"pwConfirm",value:e.pwConfirm,onChange:h})]}),(0,c.jsx)(l.A,{variant:"primary",type:"submit",children:"\uac00\uc785\ud558\uae30"})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]})},u=()=>(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)(n.A,{children:(0,c.jsx)(h,{})})]})},8797:(e,t,o)=>{o(9317);o(579)}}]);
//# sourceMappingURL=515.0e03f164.chunk.js.map