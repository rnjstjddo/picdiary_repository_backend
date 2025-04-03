"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[169],{169:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var a=o(1327),n=o(5043),r=o(4282),s=o(2691),i=o(1675),l=o(3637),c=o(4224),d=o(7102),h=o(4462),u=(o(8056),o(579));const g={content:"",picture:"",dateobject:"",updatedAt:"",id:""},m=()=>{const[e,t]=(0,n.useState)({...g}),{id:o}=(0,i.g)(),{postDiaryC:a,moveToDiaryRead:m,moveToDiaryCreate:x,patchDiaryC:p,moveToDiaryModify:y,deleteDiaryC:j,moveToDiaryList:f}=(0,c.A)(),{moveToLogin:v,effectException:b,exceptionHandle:A}=(0,h.A)(),[C,M]=(0,n.useState)(!0),[S,w]=(0,n.useState)(!1),[D,k]=(0,n.useState)(""),[R,L]=(0,n.useState)(!1),I=((0,i.Zp)(),(0,n.useRef)()),T=(0,n.useCallback)((o=>{console.log(o.target.value,o.target.name),console.log("e.target.file \uac12\ud655\uc778 -> ",o.target.file),o.target.file&&(console.log("e.target.file if\ubb38 \ub4e4\uc5b4\uc634"),M(!1),w(!0)),e[o.target.name]=o.target.value,t({...e})}),[e,M]);(0,n.useEffect)((()=>{console.log("DiaryReadComponent.js useEffect() \uc9c4\uc785 id=> ",o);(async()=>{await(0,d.Sn)(o).then((e=>{console.log("DiaryReadComponent.js useEffect \ub0b4 getDiary axios \ud638\ucd9c\ud6c4 then() => ",e.data),t({...e.data})})).catch((e=>{console.log("DiaryReadComponent.js useEffect \ub0b4 getDiary axios \ud638\ucd9c\ud6c4 catch() \uc9c4\uc785 ",e),b(e)}))})()}),[R]);return(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("h4",{children:"\ub2e4\uc774\uc5b4\ub9ac\uc218\uc815"}),(0,u.jsx)("hr",{}),(0,u.jsx)("br",{}),(0,u.jsxs)(s.A,{onSubmit:o=>{o.preventDefault(),e[o.target.content.name]=o.target.content.value,t({...e});const{picture:a}=o.target;p({diaryParam:e,picture:a}).then((t=>{console.log("DiaryModifyComponent.js axios patchDiaryC then() \uc9c4\uc785 -> ",t),"success"===t.payload.result&&(alert(e.dateobject+" \uc77c\uc790 \ub2e4\uc774\uc5b4\ub9ac \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4.!"),t.payload.image&&(URL.revokeObjectURL(D),k(""),w(!1),M(!0)),m(e.id)),t.payload.error&&(console.log("result.payload.error -> ",t.payload.error),alert(e.dateobject+" \uc77c\uc790 \ub2e4\uc774\uc5b4\ub9ac \uc218\uc815 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),y(e.id))})).catch((t=>{console.log("DiaryCreateComponent.js axios postDiary catch()",t),alert(e.dateobject+"\uc77c\uc790 \ub2e4\uc774\uc5b4\ub9ac \uc218\uc815 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),y(e.id)}))},children:[(0,u.jsxs)(s.A.Group,{className:"mb-3",children:[(0,u.jsx)(s.A.Label,{children:"\ub2e4\uc774\uc5b4\ub9ac\uc77c\uc790"}),(0,u.jsx)(s.A.Control,{type:"text",name:"dateobject",value:e.dateobject,disabled:!0}),(0,u.jsx)(s.A.Text,{className:"text-muted"})]}),(0,u.jsxs)(s.A.Group,{className:"mb-3",children:[(0,u.jsx)(s.A.Label,{children:"\uc77c\uae30\ub0b4\uc6a9"}),(0,u.jsx)(s.A.Control,{as:"textarea",rows:3,name:"content",value:e.content,onChange:T,required:!0})]}),(0,u.jsxs)(s.A.Group,{controlId:"formFile",className:"mb-3",children:[(0,u.jsx)(s.A.Label,{children:"\uc0ac\uc9c4\ubcc0\uacbd (\uc0c8\ub85c\uc6b4 \uc0ac\uc9c4\uc744 \uc120\ud0dd\ud558\uba74 \uae30\uc874 \uc0ac\uc9c4\uc740 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \ubcc0\uacbd\uc2dc\uc5d0\ub9cc \ud30c\uc77c\uc120\ud0dd\uc744 \ud074\ub9ad\ud574\uc8fc\uc138\uc694!)"}),(0,u.jsx)(s.A.Control,{type:"file",name:"picture",onChange:e=>{if(console.log("DiaryReadComponent.js handleImageChange()\uc9c4\uc785"),!e.target.files)return;const t=e.target.files[0];if(console.log("DiaryReadComponent.js handleImageChange()\uc9c4\uc785 e.target.files[0] -> ",t),console.log("DiaryReadComponent.js handleImageChange()\uc9c4\uc785 e.target -> ",e.target),null!==t.name){let e=window.URL.createObjectURL(t);k(e)}M(!1),w(!0)},ref:I}),w&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("br",{}),(0,u.jsx)(l.A,{src:D,rounded:!0})]}),(0,u.jsx)("br",{}),C&&e.picture?(0,u.jsxs)(u.Fragment,{children:[" ",(0,u.jsx)(l.A,{src:`https://picdiary-bucket.s3.ap-northeast-2.amazonaws.com/${e.picture}`,rounded:!0})]}):(0,u.jsx)(u.Fragment,{})]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)(r.A,{variant:"outline-primary",type:"submit",children:"\uc704\uc640 \uac19\uc774 \ub2e4\uc774\uc5b4\ub9ac \uc218\uc815"}),"\xa0\xa0",(0,u.jsx)(r.A,{variant:"outline-danger",type:"button",onClick:()=>{j(e.id).then((t=>{console.log("DiaryModifyComponent.js deleteOnClick() then() => ",t),"success"===t.payload.result&&(alert(e.dateobject+"\uc77c\uc790\uc758 \ub2e4\uc774\uc5b4\ub9ac\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),URL.revokeObjectURL(D),f()),"error"===t.payload.error&&(alert(e.dateobject+"\uc77c\uc790\uc758 \ub2e4\uc774\uc5b4\ub9ac \uc0ad\uc81c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),y(e.id))})).catch((t=>{console.log("DiaryModifyComponent.js deleteOnClick() catch() => ",t),alert(e.dateobject+"\uc77c\uc790\uc758 \ub2e4\uc774\uc5b4\ub9ac \uc0ad\uc81c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),y(e.id)}))},children:"\uc0ad\uc81c\ud558\uae30"}),"\xa0\xa0",(0,u.jsx)(r.A,{variant:"outline-secondary",type:"button",onClick:()=>(L((e=>!e)),console.log(D),D&&(k(""),URL.revokeObjectURL(D),w(!1)),console.log(e.picture),e.picture&&M(!0),void(I.current.value="")),children:"\uae30\uc874 \ub2e4\uc774\uc5b4\ub9ac\uae00 \ub418\ub3cc\ub9ac\uae30"}),"\xa0\xa0",(0,u.jsx)(i.N_,{to:"../list",children:(0,u.jsx)(r.A,{variant:"outline-success",type:"button",children:"\ub2e4\uc774\uc5b4\ub9ac\ub2ec\ub825\uc774\ub3d9"})}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]})]})},x=()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.A,{children:(0,u.jsx)(m,{})})})},998:(e,t,o)=>{o.d(t,{j:()=>s});var a=o(6213);const n="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(n);const r=()=>{if(navigator.geolocation){var e,t;function o(e){localStorage.setItem("COORDS",JSON.stringify(e))}function a(e){var t,a;o({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(a=e.coords)||void 0===a?void 0:a.longitude})}function n(){console.log("cant not access to location")}function r(){navigator.geolocation.getCurrentPosition(a,n)}let s=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(s)),s=JSON.parse(s),null===s&&r();return((e,t,o)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var a=Math.PI/180,n=180/Math.PI,r=6371.00877/5,s=30*a,i=60*a,l=126*a,c=38*a,d=Math.tan(.25*Math.PI+.5*i)/Math.tan(.25*Math.PI+.5*s);d=Math.log(Math.cos(s)/Math.cos(i))/Math.log(d);var h=Math.tan(.25*Math.PI+.5*s);h=Math.pow(h,d)*Math.cos(s)/d;var u=Math.tan(.25*Math.PI+.5*c);u=r*h/Math.pow(u,d);var g={};if("toXY"==e){g.lat=t,g.lng=o;var m=Math.tan(.25*Math.PI+t*a*.5);m=r*h/Math.pow(m,d);var x=o*a-l;x>Math.PI&&(x-=2*Math.PI),x<-Math.PI&&(x+=2*Math.PI),x*=d,g.x=Math.floor(m*Math.sin(x)+43+.5),g.y=Math.floor(u-m*Math.cos(x)+136+.5)}else{g.x=t,g.y=o;var p=t-43,y=u-o+136;if(m=Math.sqrt(p*p+y*y),d<0)return-m;var j=Math.pow(r*h/m,1/d);if(j=2*Math.atan(j)-.5*Math.PI,Math.abs(p)<=0)x=0;else if(Math.abs(y)<=0){if(x=.5*Math.PI,p<0)return-x}else x=Math.atan2(p,y);var f=x/d+l;g.lat=j*n,g.lng=f*n}return g})("toXY",Number(null===(e=s)||void 0===e?void 0:e.latitude),Number(null===(t=s)||void 0===t?void 0:t.longitude))}},s=async e=>{let{weatherDate:t,weatherTime:o}=e;var s=null;const i=r();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",i),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",o);try{var l,c,d,h;const e=await a.A.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",{params:{serviceKey:n,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:o,nx:i.x,ny:i.y}});return s=null===e||void 0===e||null===(l=e.data)||void 0===l||null===(c=l.response)||void 0===c||null===(d=c.body)||void 0===d||null===(h=d.items)||void 0===h?void 0:h.item,console.log("openAPI axios \uacb0\uacfc ",s),s}catch(u){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",u)}}},1327:(e,t,o)=>{o.d(t,{A:()=>j});var a=o(5043),n=o(3519),r=o(5171),s=o(579);const i=()=>(0,s.jsx)(r.A,{className:"bg-body-tertiary",children:(0,s.jsx)(n.A,{children:(0,s.jsx)(r.A.Brand,{children:(0,s.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,s.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,s.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var l=o(7527),c=o(2691),d=o(1666),h=o(4282),u=o(3637),g=o(2104),m=o(3083),x=o(4462);o(9320),o(9317);o(998);const p=e=>{const{loginState:t,isLogin:o}=(0,x.A)(),[i,p]=(0,a.useState)(!1),[y,j]=(0,a.useState)(""),[f,v]=(0,a.useState)([]),[b,A]=(0,a.useState)(""),[C,M]=(0,a.useState)(""),S=(0,a.useRef)(),w=(0,a.useRef)(),{moveToLogin:D}=(0,x.A)(),k=(0,a.useRef)(),[R,L]=(0,a.useState)(null);(0,a.useEffect)((()=>(null===R||void 0===R||R.on("roomcreate",(function(e){var t;v((t=>[...t,{msg:e,type:"welcome",id:""}])),p((()=>!0)),null===(t=k.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===R||void 0===R||R.on("message",(function(e){var o;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:a,username:n,chatroomname:r}=e;v((e=>[...e,{msg:a,type:t===n?"me":"other",id:n}])),null===(o=k.current)||void 0===o||o.scrollIntoView({behavior:"smooth",block:"end"}),j((()=>""))})),null===R||void 0===R||R.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),v((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=R.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===R||void 0===R||R.off("message"),null===R||void 0===R||R.off("out"),null===R||void 0===R||R.off("roomcreate")})),[R]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsxs)(n.A,{fluid:!0,children:[(0,s.jsxs)(r.A.Brand,{children:[(0,s.jsx)(u.A,{src:"/img/how.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,s.jsxs)(r.A.Collapse,{children:[(0,s.jsxs)(l.A,{className:"me-auto",children:[(0,s.jsx)(l.A.Link,{href:"/",children:"Home"}),o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,s.jsx)(l.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,s.jsx)(l.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,s.jsx)(l.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,s.jsx)(l.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,s.jsx)(l.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,s.jsxs)(c.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!o)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),D();if(""===b||void 0===b)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===C||void 0===C)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const a=(0,g.io)("http://localhost:8001",{autoConnect:!1});a.connect(),L((()=>a));const n={username:t,chatroomname:b,chatroompassword:C};a.emit("roomcreate",n)})(e),children:[" ",(0,s.jsxs)(d.A,{size:"sm",style:{width:"600px"},children:[(0,s.jsx)(d.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,s.jsx)(c.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:b,ref:S}),(0,s.jsx)(d.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,s.jsx)(c.A.Control,{type:"text",name:"chatroompassword",ref:w,onChange:e=>{M((()=>e.target.value))},value:C}),(0,s.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),i&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,s.jsxs)(m.A.Dialog,{children:[(0,s.jsxs)(m.A.Header,{children:[(0,s.jsxs)(m.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",b," "]}),"\xa0 \xa0",(0,s.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),R.emit("out",{chatroomname:b,loginState:t,chatroompassword:C}),L(null),v([]),A(""),M(""),p((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,s.jsx)(m.A.Body,{children:(0,s.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,s.jsxs)("ul",{children:[f.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,s.jsxs)("li",{style:{listStyle:"none"},children:[(0,s.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,s.jsx)("div",{children:e.msg}),(0,s.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,s.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,s.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,s.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,s.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,s.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,s.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,s.jsx)("li",{ref:k,style:{listStyle:"none"}})]})})}),(0,s.jsx)(c.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const o={message:y,username:t,chatroomname:b};R.emit("message",o)})(e),children:(0,s.jsxs)(m.A.Footer,{children:[(0,s.jsxs)(d.A,{className:"mb-3",children:[(0,s.jsx)(d.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,s.jsx)(c.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{j((()=>e.target.value))})(e),value:y,name:"chatcontents"})]}),(0,s.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},y=e=>(0,s.jsx)(p,{isLogin:e.isLogin}),j=e=>{let{children:t}=e;const[o,n]=(0,a.useState)(new Date),{loginState:r,isLogin:l}=(0,x.A)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{isLogin:l}),t,(0,s.jsx)(i,{})]})}},4224:(e,t,o)=>{o.d(t,{A:()=>s});var a=o(3003),n=o(6563),r=o(1675);const s=()=>{const e=(0,a.d4)((e=>e.diarySlice)),t=(0,a.wA)(),o=(0,r.Zp)();return{diaryState:e,postDiaryC:e=>{let{diaryParam:o,picture:a}=e;return t((0,n.As)({diaryParam:o,picture:a}))},deleteDiaryC:e=>t((0,n.hX)(e)),patchDiaryC:e=>{let{diaryParam:o,picture:a}=e;return t((0,n.Sq)({diaryParam:o,picture:a}))},moveToDiaryRead:e=>{o({pathname:`../read/${e}`})},moveToDiaryModify:e=>{o({pathname:`../modify/${e}`})},moveToDiaryCreate:e=>{o({pathname:`../create/${e}`})},getDiaryListC:async()=>{await t((0,n.WF)())},moveToDiaryList:()=>{o({pathname:"../"})}}}}}]);
//# sourceMappingURL=169.6dd6413a.chunk.js.map