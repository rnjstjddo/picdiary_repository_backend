"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[926],{998:(e,t,o)=>{o.d(t,{j:()=>i});var a=o(6213);const n="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(n);const s=()=>{if(navigator.geolocation){var e,t;function o(e){localStorage.setItem("COORDS",JSON.stringify(e))}function a(e){var t,a;o({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(a=e.coords)||void 0===a?void 0:a.longitude})}function n(){console.log("cant not access to location")}function s(){navigator.geolocation.getCurrentPosition(a,n)}let i=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(i)),i=JSON.parse(i),null===i&&s();return((e,t,o)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var a=Math.PI/180,n=180/Math.PI,s=6371.00877/5,i=30*a,l=60*a,r=126*a,c=38*a,d=Math.tan(.25*Math.PI+.5*l)/Math.tan(.25*Math.PI+.5*i);d=Math.log(Math.cos(i)/Math.cos(l))/Math.log(d);var h=Math.tan(.25*Math.PI+.5*i);h=Math.pow(h,d)*Math.cos(i)/d;var g=Math.tan(.25*Math.PI+.5*c);g=s*h/Math.pow(g,d);var u={};if("toXY"==e){u.lat=t,u.lng=o;var m=Math.tan(.25*Math.PI+t*a*.5);m=s*h/Math.pow(m,d);var x=o*a-r;x>Math.PI&&(x-=2*Math.PI),x<-Math.PI&&(x+=2*Math.PI),x*=d,u.x=Math.floor(m*Math.sin(x)+43+.5),u.y=Math.floor(g-m*Math.cos(x)+136+.5)}else{u.x=t,u.y=o;var p=t-43,j=g-o+136;if(m=Math.sqrt(p*p+j*j),d<0)return-m;var v=Math.pow(s*h/m,1/d);if(v=2*Math.atan(v)-.5*Math.PI,Math.abs(p)<=0)x=0;else if(Math.abs(j)<=0){if(x=.5*Math.PI,p<0)return-x}else x=Math.atan2(p,j);var f=x/d+r;u.lat=v*n,u.lng=f*n}return u})("toXY",Number(null===(e=i)||void 0===e?void 0:e.latitude),Number(null===(t=i)||void 0===t?void 0:t.longitude))}},i=async e=>{let{weatherDate:t,weatherTime:o}=e;var i=null;const l=s();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",l),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",o);try{var r,c,d,h;const e=await a.A.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",{params:{serviceKey:n,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:o,nx:l.x,ny:l.y}});return i=null===e||void 0===e||null===(r=e.data)||void 0===r||null===(c=r.response)||void 0===c||null===(d=c.body)||void 0===d||null===(h=d.items)||void 0===h?void 0:h.item,console.log("openAPI axios \uacb0\uacfc ",i),i}catch(g){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",g)}}},1327:(e,t,o)=>{o.d(t,{A:()=>v});var a=o(5043),n=o(3519),s=o(5171),i=o(579);const l=()=>(0,i.jsx)(s.A,{className:"bg-body-tertiary",children:(0,i.jsx)(n.A,{children:(0,i.jsx)(s.A.Brand,{children:(0,i.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,i.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,i.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var r=o(7527),c=o(2691),d=o(1666),h=o(4282),g=o(3637),u=o(2104),m=o(3083),x=o(4462);o(9320),o(9317);o(998);const p=e=>{const{loginState:t,isLogin:o}=(0,x.A)(),[l,p]=(0,a.useState)(!1),[j,v]=(0,a.useState)(""),[f,y]=(0,a.useState)([]),[b,A]=(0,a.useState)(""),[C,w]=(0,a.useState)(""),M=(0,a.useRef)(),S=(0,a.useRef)(),{moveToLogin:k}=(0,x.A)(),D=(0,a.useRef)(),[I,R]=(0,a.useState)(null);(0,a.useEffect)((()=>(null===I||void 0===I||I.on("roomcreate",(function(e){var t;y((t=>[...t,{msg:e,type:"welcome",id:""}])),p((()=>!0)),null===(t=D.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===I||void 0===I||I.on("message",(function(e){var o;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:a,username:n,chatroomname:s}=e;y((e=>[...e,{msg:a,type:t===n?"me":"other",id:n}])),null===(o=D.current)||void 0===o||o.scrollIntoView({behavior:"smooth",block:"end"}),v((()=>""))})),null===I||void 0===I||I.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),y((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=I.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===I||void 0===I||I.off("message"),null===I||void 0===I||I.off("out"),null===I||void 0===I||I.off("roomcreate")})),[I]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)(n.A,{fluid:!0,children:[(0,i.jsxs)(s.A.Brand,{children:[(0,i.jsx)(g.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,i.jsxs)(s.A.Collapse,{children:[(0,i.jsxs)(r.A,{className:"me-auto",children:[(0,i.jsx)(r.A.Link,{href:"/",children:"Home"}),o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,i.jsx)(r.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,i.jsx)(r.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,i.jsx)(r.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,i.jsx)(r.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,i.jsx)(r.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,i.jsxs)(c.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!o)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),k();if(""===b||void 0===b)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===C||void 0===C)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const a=(0,u.io)("https://picdiary2025.store",{transports:["websocket"],path:"/ws",autoConnect:!1});a.connect(),R((()=>a));const n={username:t,chatroomname:b,chatroompassword:C};a.emit("roomcreate",n)})(e),children:[" ",(0,i.jsxs)(d.A,{size:"sm",style:{width:"600px"},children:[(0,i.jsx)(d.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,i.jsx)(c.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:b,ref:M}),(0,i.jsx)(d.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,i.jsx)(c.A.Control,{type:"text",name:"chatroompassword",ref:S,onChange:e=>{w((()=>e.target.value))},value:C}),(0,i.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),l&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,i.jsxs)(m.A.Dialog,{children:[(0,i.jsxs)(m.A.Header,{children:[(0,i.jsxs)(m.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",b," "]}),"\xa0 \xa0",(0,i.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),I.emit("out",{chatroomname:b,loginState:t,chatroompassword:C}),R(null),y([]),A(""),w(""),p((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,i.jsx)(m.A.Body,{children:(0,i.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,i.jsxs)("ul",{children:[f.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,i.jsxs)("li",{style:{listStyle:"none"},children:[(0,i.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,i.jsx)("div",{children:e.msg}),(0,i.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,i.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,i.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,i.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,i.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,i.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,i.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,i.jsx)("li",{ref:D,style:{listStyle:"none"}})]})})}),(0,i.jsx)(c.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const o={message:j,username:t,chatroomname:b};I.emit("message",o)})(e),children:(0,i.jsxs)(m.A.Footer,{children:[(0,i.jsxs)(d.A,{className:"mb-3",children:[(0,i.jsx)(d.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,i.jsx)(c.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{v((()=>e.target.value))})(e),value:j,name:"chatcontents"})]}),(0,i.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},j=e=>(0,i.jsx)(p,{isLogin:e.isLogin}),v=e=>{let{children:t}=e;const[o,n]=(0,a.useState)(new Date),{loginState:s,isLogin:r}=(0,x.A)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{isLogin:r}),t,(0,i.jsx)(l,{})]})}},4905:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(3003),n=o(5950),s=o(1675);const i=()=>{const e=(0,a.d4)((e=>e.dietSlice)),t=(0,a.wA)(),o=(0,s.Zp)();return{dietState:e,postDietC:e=>{let{dietParam:o,finalObjectArray:a}=e;return t((0,n.lP)({dietParam:o,finalObjectArray:a}))},deleteDietC:e=>{let{choose:o,dateobject:a}=e;return t((0,n.CW)({choose:o,dateobject:a}))},moveToDietReadAll:e=>{o({pathname:`../readall/${e}`})},patchDietC:e=>t((0,n.v7)(e)),moveToDietRead:e=>{let{dateobject:t,choose:a}=e;o({pathname:`../read/${a}/${t}`,replace:"true"})},moveToDietModify:e=>{let{choose:t,dateobject:a}=e;o({pathname:`../modify/${a}/${t}`})},moveToDietCreate:e=>{o({pathname:`../create/${e}`})},getDietListC:async()=>{await t((0,n.Z7)())},moveToDietList:()=>{o({pathname:"../",replace:"true"})}}}},5670:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(5043),n=o(1675);const s=(e,t)=>e?parseInt(e):t,i=()=>{const e=(0,n.Zp)(),[t,o]=(0,a.useState)(!1),[i]=(0,n.ok)(),l=i.get("page")?parseInt(i.get("page")):1,r=i.get("size")?parseInt(i.get("size")):10,c=(0,n.PI)({page:l,size:r}).toString();return{moveToList:e=>{let a="";if(e){const t=s(e.page,1),o=s(e.size,10);a=(0,n.PI)({page:t,size:o}).toString()}else a=c;o(!t)},page:l,size:r,moveToModify:t=>{e({pathname:`../modify/${t}`,search:c})},refresh:t,moveToRead:t=>{e({pathname:`../read/${t}`,search:c})},moveToLogin:()=>{e({pathname:"/login"})},moveToCreate:()=>{e({pathname:"../create"})}}}},9926:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var a=o(5043),n=o(4905),s=o(4462),i=o(1675),l=o(4282),r=o(2691),c=o(8449),d=o(5670),h=o(579);const g=e=>{switch(e){case 1:default:return"\uc544\uce68";case 2:return"\uc810\uc2ec";case 3:return"\uc800\ub141";case 4:return"\uac04\uc2dd"}},u=()=>{const[e,t]=(0,a.useState)([]),[o,u]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),{choose:p,dateobject:j}=(0,i.g)(),{isLogin:v}=(0,s.A)(),{moveToLogin:f}=(0,d.A)(),{postDietC:y,moveToDietRead:b,moveToDietCreate:A,deleteDietC:C,moveToDietList:w}=(0,n.A)();(0,a.useEffect)((()=>{if(console.log("useEffect isLogin -> ",v),!v)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),f();(async()=>{await(0,c.aE)({choose:p,dateobject:j}).then((o=>{console.log("DietReadComponent.js useEffect \ub0b4 getDietEach axios \ud638\ucd9c\ud6c4 then() => ",o),t((()=>o)),x((()=>o[0].DietId)),u((()=>o[0].choose)),console.log("DietReadComponent.js useEffect \ub0b4 getDietEach axios \ud638\ucd9c\ud6c4 dietParam => ",e)})).catch((e=>{console.log("DietReadComponent.js useEffect \ub0b4 getDietEach axios \ud638\ucd9c\ud6c4 catch() => ",e)}))})()}),[]);return(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("h4",{children:"\uc2dd\ub2e8\uc870\ud68c"}),(0,h.jsx)("hr",{}),(0,h.jsx)("br",{}),e&&0!==e.length&&(0,h.jsx)(a.Fragment,{children:(0,h.jsxs)(r.A,{children:[(0,h.jsxs)(r.A.Group,{className:"mb-3",children:[(0,h.jsx)(r.A.Label,{children:"\uc2dd\ub2e8\uc77c\uc790"}),(0,h.jsx)(r.A.Control,{type:"text",name:"dateobject",value:j,disabled:!0}),(0,h.jsx)(r.A.Text,{className:"text-muted"})]}),(0,h.jsxs)(r.A.Group,{className:"mb-3",children:[(0,h.jsx)(r.A.Label,{children:"\uc2dc\uac04"}),(0,h.jsx)(r.A.Control,{type:"text",name:"content",value:g(p),disabled:!0})]}),(0,h.jsxs)(r.A.Group,{className:"mb-3",children:[(0,h.jsx)(r.A.Label,{children:"\uc2dd\ub2e8\ub0b4\uc6a9 / \uc591(\ub2e8\uc704 g/ml)"}),e.map(((e,t)=>(0,h.jsx)(r.A.Control,{type:"text",name:"content",value:`${e.content}${e.quantity}`,disabled:!0},e.id)))]}),(0,h.jsx)("br",{}),(0,h.jsx)(i.N_,{to:`../modify/${j}/${o}`,children:(0,h.jsx)(l.A,{variant:"outline-primary",children:"\uc2dd\ub2e8 \uc218\uc815\uc774\ub3d9"})}),"\xa0",(0,h.jsx)(l.A,{variant:"outline-danger",type:"button",onClick:()=>(console.log("DietReadComponent.js deleteOnClick() \uc9c4\uc785 "),void(window.confirm("\ud574\ub2f9 \uc2dd\ub2e8\uc744 \uc0ad\uc81c\ud558\uc2ed\ub2c8\uae4c?")&&(0,c.Co)({choose:p,dateobject:j}).then((e=>{console.log("DietReadComponent.js deleteOnClick() then() => ",e),"success"===e.result&&(alert(j+"\uc77c\uc790\uc758 \uc2dd\ub2e8\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),w()),"error"===e.error&&(alert(j+"\uc77c\uc790\uc758 \uc2dd\ub2e8 \uc0ad\uc81c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),b({dateobject:j,choose:p}))})).catch((e=>{console.log("DietReadComponent.js deleteOnClick() catch() => ",e),alert(j+"\uc77c\uc790\uc758 \uc2dd\ub2e8 \uc0ad\uc81c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),b({dateobject:j,choose:p})})))),children:"\uc0ad\uc81c\ud558\uae30"}),"\xa0",(0,h.jsx)(i.N_,{to:"../",children:(0,h.jsx)(l.A,{variant:"outline-secondary",children:"\uc2dd\ub2e8 \ub2ec\ub825\uc774\ub3d9"})})]})}),(0,h.jsx)("br",{})]})};var m=o(1327);const x=()=>(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(m.A,{children:(0,h.jsx)(u,{})})})}}]);
//# sourceMappingURL=926.9cb8e0cb.chunk.js.map