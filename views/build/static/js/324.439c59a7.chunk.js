"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[324],{324:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var o=a(1327),n=a(5043),s=a(4282),r=a(2691),i=a(4224),l=a(1675),c=a(4462),d=(a(5670),a(3637)),h=a(7102),u=a(579);const g={content:"",picture:"",dateobject:"",email:""},m=()=>{const[e,t]=(0,n.useState)({...g}),[a,o]=(0,n.useState)(""),m=(0,n.useCallback)((a=>{console.log(a.target.value,a.target.name),e[a.target.name]=a.target.value,t({...e})}),[e]),[x,p]=(0,n.useState)(!1),{postDiaryC:y,moveToDiaryRead:v,moveToDiaryCreate:j}=(0,i.A)();let{loginState:f}=(0,c.A)();var{dateobject:b}=(0,l.g)();return(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("h4",{children:"\uc0ac\uc9c4\uc77c\uae30\uc7a5\uc791\uc131"}),(0,u.jsx)("hr",{}),(0,u.jsx)("br",{}),(0,u.jsxs)(r.A,{onSubmit:n=>{n.preventDefault(),e.email=f,e.dateobject=b,t({...e});const{picture:s}=n.target;(0,h.yd)({diaryParam:e,picture:s}).then((e=>{console.log("DiaryCreateComponent.js axios postDiary then() \uc9c4\uc785 -> ",e),"success"===e.result&&(alert(b+" \uc77c\uc790 \ub2e4\uc774\uc5b4\ub9ac \ub4f1\ub85d\ud588\uc2b5\ub2c8\ub2e4.!"),e.image&&(URL.revokeObjectURL(a),o("")),v(e.payload.id)),e.error&&(console.log("result.payload.error -> ",e.payload.error),alert(b+" \uc77c\uc790 \ub2e4\uc774\uc5b4\ub9ac \ub4f1\ub85d \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),j(b))})).catch((e=>{console.log("DiaryCreateComponent.js axios postDiary catch()",e),alert(b+"\uc77c\uc790 \ub2e4\uc774\uc5b4\ub9ac \ub4f1\ub85d \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),j(b)}))},children:[(0,u.jsxs)(r.A.Group,{className:"mb-3",children:[(0,u.jsx)(r.A.Label,{children:"\ub2e4\uc774\uc5b4\ub9ac\uc77c\uc790"}),(0,u.jsx)(r.A.Control,{type:"text",name:"dateobject",value:b,disabled:!0}),(0,u.jsx)(r.A.Text,{className:"text-muted"})]}),(0,u.jsxs)(r.A.Group,{className:"mb-3",children:[(0,u.jsx)(r.A.Label,{children:"\uc77c\uae30\ub0b4\uc6a9"}),(0,u.jsx)(r.A.Control,{as:"textarea",rows:3,name:"content",value:e.content,onChange:m,required:!0})]}),(0,u.jsxs)(r.A.Group,{controlId:"formFile",className:"mb-3",children:[(0,u.jsx)(r.A.Label,{children:"\uc0ac\uc9c4\ub4f1\ub85d"}),(0,u.jsx)(r.A.Control,{type:"file",name:"picture",onChange:e=>{if(console.log("DiaryCreateComponent.js handleImageChange()\uc9c4\uc785"),!e.target.files)return;const t=e.target.files[0];if(t){let e=window.URL.createObjectURL(t);o(e)}p(!0)}}),x&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("br",{}),(0,u.jsx)(d.A,{src:a,rounded:!0})]})]}),(0,u.jsx)(s.A,{variant:"outline-primary",type:"submit",children:"\ub2e4\uc774\uc5b4\ub9ac \ub4f1\ub85d"}),"\xa0",(0,u.jsx)(l.N_,{to:"../list",children:(0,u.jsx)(s.A,{variant:"outline-secondary",type:"button",children:"\ub2e4\uc774\uc5b4\ub9ac\ub2ec\ub825\uc774\ub3d9"})}),"\xa0",(0,u.jsx)(l.N_,{to:"/",children:(0,u.jsx)(s.A,{variant:"outline-success",type:"button",children:"\uba54\uc778\uc73c\ub85c"})})]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]})},x=()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.A,{children:(0,u.jsx)(m,{})})})},998:(e,t,a)=>{a.d(t,{j:()=>r});var o=a(6213);const n="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(n);const s=()=>{if(navigator.geolocation){var e,t;function a(e){localStorage.setItem("COORDS",JSON.stringify(e))}function o(e){var t,o;a({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(o=e.coords)||void 0===o?void 0:o.longitude})}function n(){console.log("cant not access to location")}function s(){navigator.geolocation.getCurrentPosition(o,n)}let r=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(r)),r=JSON.parse(r),null===r&&s();return((e,t,a)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var o=Math.PI/180,n=180/Math.PI,s=6371.00877/5,r=30*o,i=60*o,l=126*o,c=38*o,d=Math.tan(.25*Math.PI+.5*i)/Math.tan(.25*Math.PI+.5*r);d=Math.log(Math.cos(r)/Math.cos(i))/Math.log(d);var h=Math.tan(.25*Math.PI+.5*r);h=Math.pow(h,d)*Math.cos(r)/d;var u=Math.tan(.25*Math.PI+.5*c);u=s*h/Math.pow(u,d);var g={};if("toXY"==e){g.lat=t,g.lng=a;var m=Math.tan(.25*Math.PI+t*o*.5);m=s*h/Math.pow(m,d);var x=a*o-l;x>Math.PI&&(x-=2*Math.PI),x<-Math.PI&&(x+=2*Math.PI),x*=d,g.x=Math.floor(m*Math.sin(x)+43+.5),g.y=Math.floor(u-m*Math.cos(x)+136+.5)}else{g.x=t,g.y=a;var p=t-43,y=u-a+136;if(m=Math.sqrt(p*p+y*y),d<0)return-m;var v=Math.pow(s*h/m,1/d);if(v=2*Math.atan(v)-.5*Math.PI,Math.abs(p)<=0)x=0;else if(Math.abs(y)<=0){if(x=.5*Math.PI,p<0)return-x}else x=Math.atan2(p,y);var j=x/d+l;g.lat=v*n,g.lng=j*n}return g})("toXY",Number(null===(e=r)||void 0===e?void 0:e.latitude),Number(null===(t=r)||void 0===t?void 0:t.longitude))}},r=async e=>{let{weatherDate:t,weatherTime:a}=e;var r=null;const i=s();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",i),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",a);try{var l,c,d,h;const e=await o.A.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",{params:{serviceKey:n,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:a,nx:i.x,ny:i.y}});return r=null===e||void 0===e||null===(l=e.data)||void 0===l||null===(c=l.response)||void 0===c||null===(d=c.body)||void 0===d||null===(h=d.items)||void 0===h?void 0:h.item,console.log("openAPI axios \uacb0\uacfc ",r),r}catch(u){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",u)}}},1327:(e,t,a)=>{a.d(t,{A:()=>v});var o=a(5043),n=a(3519),s=a(5171),r=a(579);const i=()=>(0,r.jsx)(s.A,{className:"bg-body-tertiary",children:(0,r.jsx)(n.A,{children:(0,r.jsx)(s.A.Brand,{children:(0,r.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,r.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,r.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var l=a(7527),c=a(2691),d=a(1666),h=a(4282),u=a(3637),g=a(2104),m=a(3083),x=a(4462);a(9320),a(9317);a(998);const p=e=>{const{loginState:t,isLogin:a}=(0,x.A)(),[i,p]=(0,o.useState)(!1),[y,v]=(0,o.useState)(""),[j,f]=(0,o.useState)([]),[b,A]=(0,o.useState)(""),[C,S]=(0,o.useState)(""),M=(0,o.useRef)(),w=(0,o.useRef)(),{moveToLogin:k}=(0,x.A)(),I=(0,o.useRef)(),[D,L]=(0,o.useState)(null);(0,o.useEffect)((()=>(null===D||void 0===D||D.on("roomcreate",(function(e){var t;f((t=>[...t,{msg:e,type:"welcome",id:""}])),p((()=>!0)),null===(t=I.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===D||void 0===D||D.on("message",(function(e){var a;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:o,username:n,chatroomname:s}=e;f((e=>[...e,{msg:o,type:t===n?"me":"other",id:n}])),null===(a=I.current)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"end"}),v((()=>""))})),null===D||void 0===D||D.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),f((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=D.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===D||void 0===D||D.off("message"),null===D||void 0===D||D.off("out"),null===D||void 0===D||D.off("roomcreate")})),[D]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)(n.A,{fluid:!0,children:[(0,r.jsxs)(s.A.Brand,{children:[(0,r.jsx)(u.A,{src:"/img/how.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,r.jsxs)(s.A.Collapse,{children:[(0,r.jsxs)(l.A,{className:"me-auto",children:[(0,r.jsx)(l.A.Link,{href:"/",children:"Home"}),a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,r.jsx)(l.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,r.jsx)(l.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,r.jsx)(l.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,r.jsx)(l.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,r.jsx)(l.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,r.jsxs)(c.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!a)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),k();if(""===b||void 0===b)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===C||void 0===C)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const o=(0,g.io)("http://localhost:8001",{autoConnect:!1});o.connect(),L((()=>o));const n={username:t,chatroomname:b,chatroompassword:C};o.emit("roomcreate",n)})(e),children:[" ",(0,r.jsxs)(d.A,{size:"sm",style:{width:"600px"},children:[(0,r.jsx)(d.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,r.jsx)(c.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:b,ref:M}),(0,r.jsx)(d.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,r.jsx)(c.A.Control,{type:"text",name:"chatroompassword",ref:w,onChange:e=>{S((()=>e.target.value))},value:C}),(0,r.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),i&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,r.jsxs)(m.A.Dialog,{children:[(0,r.jsxs)(m.A.Header,{children:[(0,r.jsxs)(m.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",b," "]}),"\xa0 \xa0",(0,r.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),D.emit("out",{chatroomname:b,loginState:t,chatroompassword:C}),L(null),f([]),A(""),S(""),p((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,r.jsx)(m.A.Body,{children:(0,r.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,r.jsxs)("ul",{children:[j.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,r.jsxs)("li",{style:{listStyle:"none"},children:[(0,r.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,r.jsx)("div",{children:e.msg}),(0,r.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,r.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,r.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,r.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,r.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,r.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,r.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,r.jsx)("li",{ref:I,style:{listStyle:"none"}})]})})}),(0,r.jsx)(c.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const a={message:y,username:t,chatroomname:b};D.emit("message",a)})(e),children:(0,r.jsxs)(m.A.Footer,{children:[(0,r.jsxs)(d.A,{className:"mb-3",children:[(0,r.jsx)(d.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,r.jsx)(c.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{v((()=>e.target.value))})(e),value:y,name:"chatcontents"})]}),(0,r.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},y=e=>(0,r.jsx)(p,{isLogin:e.isLogin}),v=e=>{let{children:t}=e;const[a,n]=(0,o.useState)(new Date),{loginState:s,isLogin:l}=(0,x.A)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{isLogin:l}),t,(0,r.jsx)(i,{})]})}},4224:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(3003),n=a(6563),s=a(1675);const r=()=>{const e=(0,o.d4)((e=>e.diarySlice)),t=(0,o.wA)(),a=(0,s.Zp)();return{diaryState:e,postDiaryC:e=>{let{diaryParam:a,picture:o}=e;return t((0,n.As)({diaryParam:a,picture:o}))},deleteDiaryC:e=>t((0,n.hX)(e)),patchDiaryC:e=>{let{diaryParam:a,picture:o}=e;return t((0,n.Sq)({diaryParam:a,picture:o}))},moveToDiaryRead:e=>{a({pathname:`../read/${e}`})},moveToDiaryModify:e=>{a({pathname:`../modify/${e}`})},moveToDiaryCreate:e=>{a({pathname:`../create/${e}`})},getDiaryListC:async()=>{await t((0,n.WF)())},moveToDiaryList:()=>{a({pathname:"../"})}}}},5670:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(5043),n=a(1675);const s=(e,t)=>e?parseInt(e):t,r=()=>{const e=(0,n.Zp)(),[t,a]=(0,o.useState)(!1),[r]=(0,n.ok)(),i=r.get("page")?parseInt(r.get("page")):1,l=r.get("size")?parseInt(r.get("size")):10,c=(0,n.PI)({page:i,size:l}).toString();return{moveToList:e=>{let o="";if(e){const t=s(e.page,1),a=s(e.size,10);o=(0,n.PI)({page:t,size:a}).toString()}else o=c;a(!t)},page:i,size:l,moveToModify:t=>{e({pathname:`../modify/${t}`,search:c})},refresh:t,moveToRead:t=>{e({pathname:`../read/${t}`,search:c})},moveToLogin:()=>{e({pathname:"/login"})},moveToCreate:()=>{e({pathname:"../create"})}}}}}]);
//# sourceMappingURL=324.439c59a7.chunk.js.map