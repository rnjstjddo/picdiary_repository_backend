"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[642],{998:(e,t,o)=>{o.d(t,{j:()=>s});var a=o(6213);const n="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(n);const i=()=>{if(navigator.geolocation){var e,t;function o(e){localStorage.setItem("COORDS",JSON.stringify(e))}function a(e){var t,a;o({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(a=e.coords)||void 0===a?void 0:a.longitude})}function n(){console.log("cant not access to location")}function i(){navigator.geolocation.getCurrentPosition(a,n)}let s=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(s)),s=JSON.parse(s),null===s&&i();return((e,t,o)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var a=Math.PI/180,n=180/Math.PI,i=6371.00877/5,s=30*a,r=60*a,l=126*a,c=38*a,d=Math.tan(.25*Math.PI+.5*r)/Math.tan(.25*Math.PI+.5*s);d=Math.log(Math.cos(s)/Math.cos(r))/Math.log(d);var h=Math.tan(.25*Math.PI+.5*s);h=Math.pow(h,d)*Math.cos(s)/d;var u=Math.tan(.25*Math.PI+.5*c);u=i*h/Math.pow(u,d);var x={};if("toXY"==e){x.lat=t,x.lng=o;var m=Math.tan(.25*Math.PI+t*a*.5);m=i*h/Math.pow(m,d);var g=o*a-l;g>Math.PI&&(g-=2*Math.PI),g<-Math.PI&&(g+=2*Math.PI),g*=d,x.x=Math.floor(m*Math.sin(g)+43+.5),x.y=Math.floor(u-m*Math.cos(g)+136+.5)}else{x.x=t,x.y=o;var p=t-43,j=u-o+136;if(m=Math.sqrt(p*p+j*j),d<0)return-m;var y=Math.pow(i*h/m,1/d);if(y=2*Math.atan(y)-.5*Math.PI,Math.abs(p)<=0)g=0;else if(Math.abs(j)<=0){if(g=.5*Math.PI,p<0)return-g}else g=Math.atan2(p,j);var v=g/d+l;x.lat=y*n,x.lng=v*n}return x})("toXY",Number(null===(e=s)||void 0===e?void 0:e.latitude),Number(null===(t=s)||void 0===t?void 0:t.longitude))}},s=async e=>{let{weatherDate:t,weatherTime:o}=e;var s=null;const r=i();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",r),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",o);try{var l,c,d,h;const e=await a.A.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",{params:{serviceKey:n,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:o,nx:r.x,ny:r.y}});return s=null===e||void 0===e||null===(l=e.data)||void 0===l||null===(c=l.response)||void 0===c||null===(d=c.body)||void 0===d||null===(h=d.items)||void 0===h?void 0:h.item,console.log("openAPI axios \uacb0\uacfc ",s),s}catch(u){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",u)}}},1327:(e,t,o)=>{o.d(t,{A:()=>y});var a=o(5043),n=o(3519),i=o(5171),s=o(579);const r=()=>(0,s.jsx)(i.A,{className:"bg-body-tertiary",children:(0,s.jsx)(n.A,{children:(0,s.jsx)(i.A.Brand,{children:(0,s.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,s.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,s.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var l=o(7527),c=o(2691),d=o(1666),h=o(4282),u=o(3637),x=o(2104),m=o(3083),g=o(4462);o(9320),o(9317);o(998);const p=e=>{const{loginState:t,isLogin:o}=(0,g.A)(),[r,p]=(0,a.useState)(!1),[j,y]=(0,a.useState)(""),[v,f]=(0,a.useState)([]),[b,A]=(0,a.useState)(""),[C,w]=(0,a.useState)(""),M=(0,a.useRef)(),S=(0,a.useRef)(),{moveToLogin:k}=(0,g.A)(),D=(0,a.useRef)(),[R,I]=(0,a.useState)(null);(0,a.useEffect)((()=>(null===R||void 0===R||R.on("roomcreate",(function(e){var t;f((t=>[...t,{msg:e,type:"welcome",id:""}])),p((()=>!0)),null===(t=D.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===R||void 0===R||R.on("message",(function(e){var o;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:a,username:n,chatroomname:i}=e;f((e=>[...e,{msg:a,type:t===n?"me":"other",id:n}])),null===(o=D.current)||void 0===o||o.scrollIntoView({behavior:"smooth",block:"end"}),y((()=>""))})),null===R||void 0===R||R.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),f((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=R.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===R||void 0===R||R.off("message"),null===R||void 0===R||R.off("out"),null===R||void 0===R||R.off("roomcreate")})),[R]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsxs)(n.A,{fluid:!0,children:[(0,s.jsxs)(i.A.Brand,{children:[(0,s.jsx)(u.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,s.jsxs)(i.A.Collapse,{children:[(0,s.jsxs)(l.A,{className:"me-auto",children:[(0,s.jsx)(l.A.Link,{href:"/",children:"Home"}),o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,s.jsx)(l.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,s.jsx)(l.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,s.jsx)(l.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,s.jsx)(l.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,s.jsx)(l.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,s.jsxs)(c.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!o)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),k();if(""===b||void 0===b)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===C||void 0===C)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const a=(0,x.io)("/",{autoConnect:!1});a.connect(),I((()=>a));const n={username:t,chatroomname:b,chatroompassword:C};a.emit("roomcreate",n)})(e),children:[" ",(0,s.jsxs)(d.A,{size:"sm",style:{width:"600px"},children:[(0,s.jsx)(d.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,s.jsx)(c.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:b,ref:M}),(0,s.jsx)(d.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,s.jsx)(c.A.Control,{type:"text",name:"chatroompassword",ref:S,onChange:e=>{w((()=>e.target.value))},value:C}),(0,s.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),r&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,s.jsxs)(m.A.Dialog,{children:[(0,s.jsxs)(m.A.Header,{children:[(0,s.jsxs)(m.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",b," "]}),"\xa0 \xa0",(0,s.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),R.emit("out",{chatroomname:b,loginState:t,chatroompassword:C}),I(null),f([]),A(""),w(""),p((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,s.jsx)(m.A.Body,{children:(0,s.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,s.jsxs)("ul",{children:[v.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,s.jsxs)("li",{style:{listStyle:"none"},children:[(0,s.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,s.jsx)("div",{children:e.msg}),(0,s.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,s.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,s.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,s.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,s.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,s.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,s.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,s.jsx)("li",{ref:D,style:{listStyle:"none"}})]})})}),(0,s.jsx)(c.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const o={message:j,username:t,chatroomname:b};R.emit("message",o)})(e),children:(0,s.jsxs)(m.A.Footer,{children:[(0,s.jsxs)(d.A,{className:"mb-3",children:[(0,s.jsx)(d.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,s.jsx)(c.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{y((()=>e.target.value))})(e),value:j,name:"chatcontents"})]}),(0,s.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},j=e=>(0,s.jsx)(p,{isLogin:e.isLogin}),y=e=>{let{children:t}=e;const[o,n]=(0,a.useState)(new Date),{loginState:i,isLogin:l}=(0,g.A)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{isLogin:l}),t,(0,s.jsx)(r,{})]})}},4224:(e,t,o)=>{o.d(t,{A:()=>s});var a=o(3003),n=o(6563),i=o(1675);const s=()=>{const e=(0,a.d4)((e=>e.diarySlice)),t=(0,a.wA)(),o=(0,i.Zp)();return{diaryState:e,postDiaryC:e=>{let{diaryParam:o,picture:a}=e;return t((0,n.As)({diaryParam:o,picture:a}))},deleteDiaryC:e=>t((0,n.hX)(e)),patchDiaryC:e=>{let{diaryParam:o,picture:a}=e;return t((0,n.Sq)({diaryParam:o,picture:a}))},moveToDiaryRead:e=>{o({pathname:`../read/${e}`})},moveToDiaryModify:e=>{o({pathname:`../modify/${e}`})},moveToDiaryCreate:e=>{o({pathname:`../create/${e}`})},getDiaryListC:async()=>{await t((0,n.WF)())},moveToDiaryList:()=>{o({pathname:"../"})}}}},9642:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var a=o(1327),n=o(5043),i=o(4224),s=(o(4462),o(1675)),r=o(3637),l=o(4282),c=o(2691),d=o(7102),h=o(579);const u={content:"",picture:"",dateobject:"",updatedAt:"",id:""},x=()=>{const[e,t]=(0,n.useState)({...u}),{id:o}=(0,s.g)(),{postDiaryC:a,moveToDiaryRead:x,moveToDiaryCreate:m,deleteDiaryC:g,moveToDiaryList:p}=(0,i.A)();(0,n.useEffect)((()=>{console.log("DiaryReadComponent.js useEffect() \uc9c4\uc785 id=> ",o);(async()=>{await(0,d.Sn)(o).then((e=>{t({...e.data})})).catch((e=>{console.log("DiaryReadComponent.js useEffect \ub0b4 getDiary axios \ud638\ucd9c\ud6c4 catch() => ",e)}))})()}),[]);return(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("h4",{children:"\ub2e4\uc774\uc5b4\ub9ac\uc870\ud68c"}),(0,h.jsx)("hr",{}),(0,h.jsx)("br",{}),(0,h.jsxs)(c.A,{children:[(0,h.jsxs)(c.A.Group,{className:"mb-3",children:[(0,h.jsx)(c.A.Label,{children:"\ub2e4\uc774\uc5b4\ub9ac\uc77c\uc790"}),(0,h.jsx)(c.A.Control,{type:"text",name:"dateobject",value:e.dateobject,disabled:!0}),(0,h.jsx)(c.A.Text,{className:"text-muted"})]}),(0,h.jsxs)(c.A.Group,{className:"mb-3",children:[(0,h.jsx)(c.A.Label,{children:"\uc77c\uae30\ub0b4\uc6a9"}),(0,h.jsx)(c.A.Control,{as:"textarea",rows:3,name:"content",value:e.content,disabled:!0})]}),(0,h.jsxs)(c.A.Group,{controlId:"formFile",className:"mb-3",children:[(0,h.jsx)(c.A.Label,{children:"\uc0ac\uc9c4"}),(0,h.jsx)("br",{}),e.picture?(0,h.jsx)(r.A,{src:`https://picdiary-bucket.s3.ap-northeast-2.amazonaws.com/${e.path}`,rounded:!0}):(0,h.jsx)(h.Fragment,{children:"\uc5c5\ub85c\ub4dc\ud558\uc9c0 \uc54a\uc74c\ud83d\ude05"})]}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)(s.N_,{to:`../modify/${e.id}`,children:(0,h.jsx)(l.A,{variant:"outline-primary",children:"\ub2e4\uc774\uc5b4\ub9ac \uc218\uc815\uc774\ub3d9"})}),"\xa0\xa0",(0,h.jsx)(l.A,{variant:"outline-danger",type:"button",onClick:()=>{window.confirm("\ud574\ub2f9 \ub2e4\uc774\uc5b4\ub9ac\ub97c \uc0ad\uc81c\ud558\uc2ed\ub2c8\uae4c?")&&g(e.id).then((t=>{console.log("DiaryReadComponent.js deleteOnClick() then() => ",t),"success"===t.payload.result&&(alert(e.dateobject+"\uc77c\uc790\uc758 \ub2e4\uc774\uc5b4\ub9ac\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),p()),"error"===t.payload.error&&(alert(e.dateobject+"\uc77c\uc790\uc758 \ub2e4\uc774\uc5b4\ub9ac \uc0ad\uc81c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),x(e.id))})).catch((t=>{console.log("DiaryReadComponent.js deleteOnClick() catch() => ",t),alert(e.dateobject+"\uc77c\uc790\uc758 \ub2e4\uc774\uc5b4\ub9ac \uc0ad\uc81c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),x(e.id)}))},children:"\uc0ad\uc81c\ud558\uae30"}),"\xa0\xa0",(0,h.jsx)(s.N_,{to:"../",children:(0,h.jsx)(l.A,{variant:"outline-secondary",children:"\ub2e4\uc774\uc5b4\ub9ac \ub2ec\ub825\uc774\ub3d9"})}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{})]})]})},m=()=>(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(a.A,{children:(0,h.jsx)(x,{})})})}}]);
//# sourceMappingURL=642.bd433dfd.chunk.js.map