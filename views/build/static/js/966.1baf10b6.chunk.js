"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[966],{998:(e,t,a)=>{a.d(t,{j:()=>n});var s=a(6213);const o="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(o);const r=()=>{if(navigator.geolocation){var e,t;function a(e){localStorage.setItem("COORDS",JSON.stringify(e))}function s(e){var t,s;a({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(s=e.coords)||void 0===s?void 0:s.longitude})}function o(){console.log("cant not access to location")}function r(){navigator.geolocation.getCurrentPosition(s,o)}let n=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(n)),n=JSON.parse(n),null===n&&r();return((e,t,a)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var s=Math.PI/180,o=180/Math.PI,r=6371.00877/5,n=30*s,i=60*s,l=126*s,d=38*s,c=Math.tan(.25*Math.PI+.5*i)/Math.tan(.25*Math.PI+.5*n);c=Math.log(Math.cos(n)/Math.cos(i))/Math.log(c);var h=Math.tan(.25*Math.PI+.5*n);h=Math.pow(h,c)*Math.cos(n)/c;var u=Math.tan(.25*Math.PI+.5*d);u=r*h/Math.pow(u,c);var m={};if("toXY"==e){m.lat=t,m.lng=a;var g=Math.tan(.25*Math.PI+t*s*.5);g=r*h/Math.pow(g,c);var x=a*s-l;x>Math.PI&&(x-=2*Math.PI),x<-Math.PI&&(x+=2*Math.PI),x*=c,m.x=Math.floor(g*Math.sin(x)+43+.5),m.y=Math.floor(u-g*Math.cos(x)+136+.5)}else{m.x=t,m.y=a;var f=t-43,p=u-a+136;if(g=Math.sqrt(f*f+p*p),c<0)return-g;var v=Math.pow(r*h/g,1/c);if(v=2*Math.atan(v)-.5*Math.PI,Math.abs(f)<=0)x=0;else if(Math.abs(p)<=0){if(x=.5*Math.PI,f<0)return-x}else x=Math.atan2(f,p);var y=x/c+l;m.lat=v*o,m.lng=y*o}return m})("toXY",Number(null===(e=n)||void 0===e?void 0:e.latitude),Number(null===(t=n)||void 0===t?void 0:t.longitude))}},n=async e=>{let{weatherDate:t,weatherTime:a}=e;var n=null;const i=r();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",i),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",a);try{var l,d,c,h;const e=await s.A.get("https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",{params:{serviceKey:o,numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:a,nx:i.x,ny:i.y}});return n=null===e||void 0===e||null===(l=e.data)||void 0===l||null===(d=l.response)||void 0===d||null===(c=d.body)||void 0===c||null===(h=c.items)||void 0===h?void 0:h.item,console.log("openAPI \uacf5\uacf5 api axios \uacb0\uacfc ",n),n}catch(u){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",u)}}},1327:(e,t,a)=>{a.d(t,{A:()=>v});var s=a(5043),o=a(3519),r=a(5171),n=a(579);const i=()=>(0,n.jsx)(r.A,{className:"bg-body-tertiary",children:(0,n.jsx)(o.A,{children:(0,n.jsx)(r.A.Brand,{children:(0,n.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,n.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,n.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var l=a(7527),d=a(2691),c=a(1666),h=a(4282),u=a(3637),m=a(2104),g=a(3083),x=a(4462);a(9320),a(9317);a(998);const f=e=>{const{loginState:t,isLogin:a}=(0,x.A)(),[i,f]=(0,s.useState)(!1),[p,v]=(0,s.useState)(""),[y,b]=(0,s.useState)([]),[j,A]=(0,s.useState)(""),[N,w]=(0,s.useState)(""),M=(0,s.useRef)(),C=(0,s.useRef)(),{moveToLogin:S}=(0,x.A)(),k=(0,s.useRef)(),[P,I]=(0,s.useState)(null);(0,s.useEffect)((()=>(null===P||void 0===P||P.on("roomcreate",(function(e){var t;b((t=>[...t,{msg:e,type:"welcome",id:""}])),f((()=>!0)),null===(t=k.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"})})),null===P||void 0===P||P.on("message",(function(e){var a;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:s,username:o,chatroomname:r}=e;b((e=>[...e,{msg:s,type:t===o?"me":"other",id:o}])),null===(a=k.current)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"end"}),v((()=>""))})),null===P||void 0===P||P.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),b((t=>[...t,{msg:e.message,type:"goodbye",id:""}]));const t=P.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",t)})),()=>{null===P||void 0===P||P.off("message"),null===P||void 0===P||P.off("out"),null===P||void 0===P||P.off("roomcreate")})),[P]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)(o.A,{fluid:!0,children:[(0,n.jsxs)(r.A.Brand,{children:[(0,n.jsx)(u.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,n.jsxs)(r.A.Collapse,{children:[(0,n.jsxs)(l.A,{className:"me-auto",children:[(0,n.jsx)(l.A.Link,{href:"/",children:"Home"}),a?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,n.jsx)(l.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,n.jsx)(l.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,n.jsx)(l.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,n.jsx)(l.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,n.jsx)(l.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,n.jsxs)(d.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!a)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),S();if(""===j||void 0===j)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===N||void 0===N)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const s=(0,m.io)({autoConnect:!1});s.connect(),I((()=>s));const o={username:t,chatroomname:j,chatroompassword:N};s.emit("roomcreate",o)})(e),children:[" ",(0,n.jsxs)(c.A,{size:"sm",style:{width:"600px"},children:[(0,n.jsx)(c.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,n.jsx)(d.A.Control,{type:"text",name:"chatroomname",onChange:e=>{A((()=>e.target.value))},value:j,ref:M}),(0,n.jsx)(c.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,n.jsx)(d.A.Control,{type:"text",name:"chatroompassword",ref:C,onChange:e=>{w((()=>e.target.value))},value:N}),(0,n.jsx)(h.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),i&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,n.jsxs)(g.A.Dialog,{children:[(0,n.jsxs)(g.A.Header,{children:[(0,n.jsxs)(g.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",j," "]}),"\xa0 \xa0",(0,n.jsx)(h.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),P.emit("out",{chatroomname:j,loginState:t,chatroompassword:N}),I(null),b([]),A(""),w(""),f((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,n.jsx)(g.A.Body,{children:(0,n.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,n.jsxs)("ul",{children:[y.map(((e,t)=>"welcome"===e.type||"goodbye"===e.type?(0,n.jsxs)("li",{style:{listStyle:"none"},children:[(0,n.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,n.jsx)("div",{children:e.msg}),(0,n.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},t):"me"===e.type?(0,n.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,n.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,n.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${t}_1`):(0,n.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,n.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,n.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${t}_2`))),(0,n.jsx)("li",{ref:k,style:{listStyle:"none"}})]})})}),(0,n.jsx)(d.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const a={message:p,username:t,chatroomname:j};P.emit("message",a)})(e),children:(0,n.jsxs)(g.A.Footer,{children:[(0,n.jsxs)(c.A,{className:"mb-3",children:[(0,n.jsx)(c.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,n.jsx)(d.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{v((()=>e.target.value))})(e),value:p,name:"chatcontents"})]}),(0,n.jsx)(h.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},p=e=>(0,n.jsx)(f,{isLogin:e.isLogin}),v=e=>{let{children:t}=e;const[a,o]=(0,s.useState)(new Date),{loginState:r,isLogin:l}=(0,x.A)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{isLogin:l}),t,(0,n.jsx)(i,{})]})}},2223:(e,t,a)=>{a.d(t,{A:()=>f});var s=a(8139),o=a.n(s),r=a(5043),n=(a(6440),a(3582)),i=a(2346),l=a(7852),d=a(6618),c=a(2644),h=a(5901),u=a(579);const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,active:s,disabled:r,eventKey:n,className:i,variant:m,action:g,as:x,...f}=e;a=(0,l.oU)(a,"list-group-item");const[p,v]=(0,c.M)({key:(0,h.u)(n,f.href),active:s,...f}),y=(0,d.A)((e=>{if(r)return e.preventDefault(),void e.stopPropagation();p.onClick(e)}));r&&void 0===f.tabIndex&&(f.tabIndex=-1,f["aria-disabled"]=!0);const b=x||(g?f.href?"a":"button":"div");return(0,u.jsx)(b,{ref:t,...f,...p,onClick:y,className:o()(i,a,v.isActive&&"active",r&&"disabled",m&&`${a}-${m}`,g&&`${a}-action`)})}));m.displayName="ListGroupItem";const g=m,x=r.forwardRef(((e,t)=>{const{className:a,bsPrefix:s,variant:r,horizontal:d,numbered:c,as:h="div",...m}=(0,n.Zw)(e,{activeKey:"onSelect"}),g=(0,l.oU)(s,"list-group");let x;return d&&(x=!0===d?"horizontal":`horizontal-${d}`),(0,u.jsx)(i.A,{ref:t,...m,as:h,className:o()(a,g,r&&`${g}-${r}`,x&&`${g}-${x}`,c&&`${g}-numbered`)})}));x.displayName="ListGroup";const f=Object.assign(x,{Item:g})},8628:(e,t,a)=>{a.d(t,{A:()=>R});var s=a(8139),o=a.n(s),r=a(5043),n=a(7852),i=a(579);const l=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r="div",...l}=e;return s=(0,n.oU)(s,"card-body"),(0,i.jsx)(r,{ref:t,className:o()(a,s),...l})}));l.displayName="CardBody";const d=l,c=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r="div",...l}=e;return s=(0,n.oU)(s,"card-footer"),(0,i.jsx)(r,{ref:t,className:o()(a,s),...l})}));c.displayName="CardFooter";const h=c;var u=a(1778);const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:l="div",...d}=e;const c=(0,n.oU)(a,"card-header"),h=(0,r.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,i.jsx)(u.A.Provider,{value:h,children:(0,i.jsx)(l,{ref:t,...d,className:o()(s,c)})})}));m.displayName="CardHeader";const g=m,x=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,variant:r,as:l="img",...d}=e;const c=(0,n.oU)(a,"card-img");return(0,i.jsx)(l,{ref:t,className:o()(r?`${c}-${r}`:c,s),...d})}));x.displayName="CardImg";const f=x,p=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r="div",...l}=e;return s=(0,n.oU)(s,"card-img-overlay"),(0,i.jsx)(r,{ref:t,className:o()(a,s),...l})}));p.displayName="CardImgOverlay";const v=p,y=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r="a",...l}=e;return s=(0,n.oU)(s,"card-link"),(0,i.jsx)(r,{ref:t,className:o()(a,s),...l})}));y.displayName="CardLink";const b=y;var j=a(4488);const A=(0,j.A)("h6"),N=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r=A,...l}=e;return s=(0,n.oU)(s,"card-subtitle"),(0,i.jsx)(r,{ref:t,className:o()(a,s),...l})}));N.displayName="CardSubtitle";const w=N,M=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r="p",...l}=e;return s=(0,n.oU)(s,"card-text"),(0,i.jsx)(r,{ref:t,className:o()(a,s),...l})}));M.displayName="CardText";const C=M,S=(0,j.A)("h5"),k=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r=S,...l}=e;return s=(0,n.oU)(s,"card-title"),(0,i.jsx)(r,{ref:t,className:o()(a,s),...l})}));k.displayName="CardTitle";const P=k,I=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,bg:r,text:l,border:c,body:h=!1,children:u,as:m="div",...g}=e;const x=(0,n.oU)(a,"card");return(0,i.jsx)(m,{ref:t,...g,className:o()(s,x,r&&`bg-${r}`,l&&`text-${l}`,c&&`border-${c}`),children:h?(0,i.jsx)(d,{children:u}):u})}));I.displayName="Card";const R=Object.assign(I,{Img:f,Title:P,Subtitle:w,Body:d,Link:b,Text:C,Header:g,Footer:h,ImgOverlay:v})}}]);
//# sourceMappingURL=966.1baf10b6.chunk.js.map