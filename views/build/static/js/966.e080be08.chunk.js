"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[966],{998:(e,t,a)=>{a.d(t,{j:()=>n});var o=a(6213);const s="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(s);const r=()=>{if(navigator.geolocation){var e,t;function a(e){localStorage.setItem("COORDS",JSON.stringify(e))}function o(e){var t,o;a({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(o=e.coords)||void 0===o?void 0:o.longitude})}function s(){console.log("cant not access to location")}function r(){navigator.geolocation.getCurrentPosition(o,s)}let n=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(n)),n=JSON.parse(n),null===n&&r();return((e,t,a)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var o=Math.PI/180,s=180/Math.PI,r=6371.00877/5,n=30*o,i=60*o,l=126*o,c=38*o,d=Math.tan(.25*Math.PI+.5*i)/Math.tan(.25*Math.PI+.5*n);d=Math.log(Math.cos(n)/Math.cos(i))/Math.log(d);var h=Math.tan(.25*Math.PI+.5*n);h=Math.pow(h,d)*Math.cos(n)/d;var m=Math.tan(.25*Math.PI+.5*c);m=r*h/Math.pow(m,d);var u={};if("toXY"==e){u.lat=t,u.lng=a;var x=Math.tan(.25*Math.PI+t*o*.5);x=r*h/Math.pow(x,d);var g=a*o-l;g>Math.PI&&(g-=2*Math.PI),g<-Math.PI&&(g+=2*Math.PI),g*=d,u.x=Math.floor(x*Math.sin(g)+43+.5),u.y=Math.floor(m-x*Math.cos(g)+136+.5)}else{u.x=t,u.y=a;var f=t-43,p=m-a+136;if(x=Math.sqrt(f*f+p*p),d<0)return-x;var v=Math.pow(r*h/x,1/d);if(v=2*Math.atan(v)-.5*Math.PI,Math.abs(f)<=0)g=0;else if(Math.abs(p)<=0){if(g=.5*Math.PI,f<0)return-g}else g=Math.atan2(f,p);var y=g/d+l;u.lat=v*s,u.lng=y*s}return u})("toXY",Number(null===(e=n)||void 0===e?void 0:e.latitude),Number(null===(t=n)||void 0===t?void 0:t.longitude))}},n=async e=>{let{weatherDate:t,weatherTime:a}=e;const n=r();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",n),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",a);try{const e={serviceKey:s,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:a,nx:n.x,ny:n.y};console.log("openApi.js axios.post(/api/openapi) \ubcf4\ub0b4\uae30\uc804 \uc694\uccad\ubcf8\ubb38 \ub0b4\uc6a9\ud655\uc778 -> ",e);const r=await o.A.post("/api/main/openapi",{url:"http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",params:e}).then((e=>{console.log("openApi.js axios.post(/api/openapi) \uacb0\uacfc -> ",e)})).catch((e=>{console.log("openApi.js axios.post(/api/openapi) \uc5d0\ub7ec\ubc1c\uc0dd -> ",e)}));return console.log("openAPI \uacf5\uacf5 api axios \uacb0\uacfc result",r),null===r||void 0===r?void 0:r.data}catch(i){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",i)}}},1327:(e,t,a)=>{a.d(t,{A:()=>v});var o=a(5043),s=a(3519),r=a(5171),n=a(579);const i=()=>(0,n.jsx)(r.A,{className:"bg-body-tertiary",children:(0,n.jsx)(s.A,{children:(0,n.jsx)(r.A.Brand,{children:(0,n.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,n.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,n.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var l=a(7527),c=a(2691),d=a(1666),h=a(4282),m=a(3637),u=a(2104),x=a(3083),g=a(4462);a(9320),a(9317);a(998);const f=e=>{const{loginState:t,isLogin:a}=(0,g.A)(),[i,f]=(0,o.useState)(!1),[p,v]=(0,o.useState)(""),[y,b]=(0,o.useState)([]),[j,A]=(0,o.useState)(""),[N,w]=(0,o.useState)(""),M=(0,o.useRef)(),C=(0,o.useRef)(),{moveToLogin:S}=(0,g.A)(),k=(0,o.useRef)(),[P,I]=(0,o.useState)(null);(0,o.useEffect)((()=>(null===P||void 0===P||P.on("roomcreate",(function(e){var t;b((t=>[...t,{msg:e,type:"welcome",id:""}])),f((()=>!0)),null===(t=k.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===P||void 0===P||P.on("message",(function(e){var a;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:o,username:s,chatroomname:r}=e;b((e=>[...e,{msg:o,type:t===s?"me":"other",id:s}])),null===(a=k.current)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"end"}),v((()=>""))})),null===P||void 0===P||P.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),b((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=P.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===P||void 0===P||P.off("message"),null===P||void 0===P||P.off("out"),null===P||void 0===P||P.off("roomcreate")})),[P]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)(s.A,{fluid:!0,children:[(0,n.jsxs)(r.A.Brand,{children:[(0,n.jsx)(m.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,n.jsxs)(r.A.Collapse,{children:[(0,n.jsxs)(l.A,{className:"me-auto",children:[(0,n.jsx)(l.A.Link,{href:"/",children:"Home"}),a?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,n.jsx)(l.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,n.jsx)(l.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,n.jsx)(l.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,n.jsx)(l.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,n.jsx)(l.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,n.jsxs)(c.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!a)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),S();if(""===j||void 0===j)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===N||void 0===N)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const o=(0,u.io)({autoConnect:!1});o.connect(),I((()=>o));const s={username:t,chatroomname:j,chatroompassword:N};o.emit("roomcreate",s)})(e),children:[" ",(0,n.jsxs)(d.A,{size:"sm",style:{width:"600px"},children:[(0,n.jsx)(d.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,n.jsx)(c.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:j,ref:M}),(0,n.jsx)(d.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,n.jsx)(c.A.Control,{type:"text",name:"chatroompassword",ref:C,onChange:e=>{w((()=>e.target.value))},value:N}),(0,n.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),i&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,n.jsxs)(x.A.Dialog,{children:[(0,n.jsxs)(x.A.Header,{children:[(0,n.jsxs)(x.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",j," "]}),"\xa0 \xa0",(0,n.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),P.emit("out",{chatroomname:j,loginState:t,chatroompassword:N}),I(null),b([]),A(""),w(""),f((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,n.jsx)(x.A.Body,{children:(0,n.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,n.jsxs)("ul",{children:[y.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,n.jsxs)("li",{style:{listStyle:"none"},children:[(0,n.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,n.jsx)("div",{children:e.msg}),(0,n.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,n.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,n.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,n.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,n.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,n.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,n.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,n.jsx)("li",{ref:k,style:{listStyle:"none"}})]})})}),(0,n.jsx)(c.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const a={message:p,username:t,chatroomname:j};P.emit("message",a)})(e),children:(0,n.jsxs)(x.A.Footer,{children:[(0,n.jsxs)(d.A,{className:"mb-3",children:[(0,n.jsx)(d.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,n.jsx)(c.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{v((()=>e.target.value))})(e),value:p,name:"chatcontents"})]}),(0,n.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},p=e=>(0,n.jsx)(f,{isLogin:e.isLogin}),v=e=>{let{children:t}=e;const[a,s]=(0,o.useState)(new Date),{loginState:r,isLogin:l}=(0,g.A)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{isLogin:l}),t,(0,n.jsx)(i,{})]})}},2223:(e,t,a)=>{a.d(t,{A:()=>f});var o=a(8139),s=a.n(o),r=a(5043),n=(a(6440),a(3582)),i=a(2346),l=a(7852),c=a(6618),d=a(2644),h=a(5901),m=a(579);const u=r.forwardRef(((e,t)=>{let{bsPrefix:a,active:o,disabled:r,eventKey:n,className:i,variant:u,action:x,as:g,...f}=e;a=(0,l.oU)(a,"list-group-item");const[p,v]=(0,d.M)({key:(0,h.u)(n,f.href),active:o,...f}),y=(0,c.A)((e=>{if(r)return e.preventDefault(),void e.stopPropagation();p.onClick(e)}));r&&void 0===f.tabIndex&&(f.tabIndex=-1,f["aria-disabled"]=!0);const b=g||(x?f.href?"a":"button":"div");return(0,m.jsx)(b,{ref:t,...f,...p,onClick:y,className:s()(i,a,v.isActive&&"active",r&&"disabled",u&&`${a}-${u}`,x&&`${a}-action`)})}));u.displayName="ListGroupItem";const x=u,g=r.forwardRef(((e,t)=>{const{className:a,bsPrefix:o,variant:r,horizontal:c,numbered:d,as:h="div",...u}=(0,n.Zw)(e,{activeKey:"onSelect"}),x=(0,l.oU)(o,"list-group");let g;return c&&(g=!0===c?"horizontal":`horizontal-${c}`),(0,m.jsx)(i.A,{ref:t,...u,as:h,className:s()(a,x,r&&`${x}-${r}`,g&&`${x}-${g}`,d&&`${x}-numbered`)})}));g.displayName="ListGroup";const f=Object.assign(g,{Item:x})},8628:(e,t,a)=>{a.d(t,{A:()=>R});var o=a(8139),s=a.n(o),r=a(5043),n=a(7852),i=a(579);const l=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:o,as:r="div",...l}=e;return o=(0,n.oU)(o,"card-body"),(0,i.jsx)(r,{ref:t,className:s()(a,o),...l})}));l.displayName="CardBody";const c=l,d=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:o,as:r="div",...l}=e;return o=(0,n.oU)(o,"card-footer"),(0,i.jsx)(r,{ref:t,className:s()(a,o),...l})}));d.displayName="CardFooter";const h=d;var m=a(1778);const u=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:o,as:l="div",...c}=e;const d=(0,n.oU)(a,"card-header"),h=(0,r.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,i.jsx)(m.A.Provider,{value:h,children:(0,i.jsx)(l,{ref:t,...c,className:s()(o,d)})})}));u.displayName="CardHeader";const x=u,g=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:o,variant:r,as:l="img",...c}=e;const d=(0,n.oU)(a,"card-img");return(0,i.jsx)(l,{ref:t,className:s()(r?`${d}-${r}`:d,o),...c})}));g.displayName="CardImg";const f=g,p=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:o,as:r="div",...l}=e;return o=(0,n.oU)(o,"card-img-overlay"),(0,i.jsx)(r,{ref:t,className:s()(a,o),...l})}));p.displayName="CardImgOverlay";const v=p,y=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:o,as:r="a",...l}=e;return o=(0,n.oU)(o,"card-link"),(0,i.jsx)(r,{ref:t,className:s()(a,o),...l})}));y.displayName="CardLink";const b=y;var j=a(4488);const A=(0,j.A)("h6"),N=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:o,as:r=A,...l}=e;return o=(0,n.oU)(o,"card-subtitle"),(0,i.jsx)(r,{ref:t,className:s()(a,o),...l})}));N.displayName="CardSubtitle";const w=N,M=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:o,as:r="p",...l}=e;return o=(0,n.oU)(o,"card-text"),(0,i.jsx)(r,{ref:t,className:s()(a,o),...l})}));M.displayName="CardText";const C=M,S=(0,j.A)("h5"),k=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:o,as:r=S,...l}=e;return o=(0,n.oU)(o,"card-title"),(0,i.jsx)(r,{ref:t,className:s()(a,o),...l})}));k.displayName="CardTitle";const P=k,I=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:o,bg:r,text:l,border:d,body:h=!1,children:m,as:u="div",...x}=e;const g=(0,n.oU)(a,"card");return(0,i.jsx)(u,{ref:t,...x,className:s()(o,g,r&&`bg-${r}`,l&&`text-${l}`,d&&`border-${d}`),children:h?(0,i.jsx)(c,{children:m}):m})}));I.displayName="Card";const R=Object.assign(I,{Img:f,Title:P,Subtitle:w,Body:c,Link:b,Text:C,Header:x,Footer:h,ImgOverlay:v})}}]);
//# sourceMappingURL=966.e080be08.chunk.js.map