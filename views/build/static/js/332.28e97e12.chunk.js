"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[332],{5332:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var n=s(1327),o=s(3519),l=s(8628),r=s(2223),i=s(4462),a=s(5043),c=s(6213);const h=()=>{if(navigator.geolocation){var e,t;function s(e){localStorage.setItem("COORDS",JSON.stringify(e))}function n(e){var t,n;s({latitude:null===(t=e.coords)||void 0===t?void 0:t.latitude,longitude:null===(n=e.coords)||void 0===n?void 0:n.longitude})}function o(){console.log("cant not access to location")}function l(){navigator.geolocation.getCurrentPosition(n,o)}let r=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(r)),r=JSON.parse(r),null===r&&l();return((e,t,s)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var n=Math.PI/180,o=180/Math.PI,l=6371.00877/5,r=30*n,i=60*n,a=126*n,c=38*n,h=Math.tan(.25*Math.PI+.5*i)/Math.tan(.25*Math.PI+.5*r);h=Math.log(Math.cos(r)/Math.cos(i))/Math.log(h);var d=Math.tan(.25*Math.PI+.5*r);d=Math.pow(d,h)*Math.cos(r)/h;var x=Math.tan(.25*Math.PI+.5*c);x=l*d/Math.pow(x,h);var g={};if("toXY"==e){g.lat=t,g.lng=s;var u=Math.tan(.25*Math.PI+t*n*.5);u=l*d/Math.pow(u,h);var m=s*n-a;m>Math.PI&&(m-=2*Math.PI),m<-Math.PI&&(m+=2*Math.PI),m*=h,g.x=Math.floor(u*Math.sin(m)+43+.5),g.y=Math.floor(x-u*Math.cos(m)+136+.5)}else{g.x=t,g.y=s;var j=t-43,y=x-s+136;if(u=Math.sqrt(j*j+y*y),h<0)return-u;var p=Math.pow(l*d/u,1/h);if(p=2*Math.atan(p)-.5*Math.PI,Math.abs(j)<=0)m=0;else if(Math.abs(y)<=0){if(m=.5*Math.PI,j<0)return-m}else m=Math.atan2(j,y);var A=m/h+a;g.lat=p*o,g.lng=A*o}return g})("toXY",Number(null===(e=r)||void 0===e?void 0:e.latitude),Number(null===(t=r)||void 0===t?void 0:t.longitude))}};var d=s(2691),x=s(3637),g=s(4282),u=s(9320);s(9317);var m=s(1675),j=s(5670),y=s(579);const p=e=>{if(e)switch(e){case"1":return"\ub2ec\ub9ac\uae30";case"2":return"\uc6e8\uc774\ud2b8";case"3":return"\uad6c\uae30\uc885\ubaa9or\ubcf5\uc2f1";case"4":return"\ub4f1\uc0b0";case"5":return"\ud544\ub77c\ud14c\uc2a4\uc694\uac00";case"6":return"\uadf8\uc678";default:return null}},A=()=>{const{loginState:e,isLogin:t}=(0,i.A)();console.log(t);const{exceptionHandle:s}=(0,i.A)();console.log(e);const[n,A]=(0,a.useState)(!1),[f,v]=(0,a.useState)([]),[b,w]=(0,a.useState)(""),[D,M]=(0,a.useState)(""),[S,I]=(0,a.useState)(""),[$,k]=(0,a.useState)(""),[F,N]=(0,a.useState)(3),[z,E]=(0,a.useState)(2025),[V,L]=(0,a.useState)([]),[T,_]=(0,a.useState)([]),[P,C]=(0,a.useState)([]),[R,B]=(0,a.useState)(""),[O,K]=(0,a.useState)(""),{moveToLogin:Y}=(0,j.A)(),[H,J]=(0,a.useState)([]),[q,Z]=(0,a.useState)([]),[X,G]=(0,a.useState)([]),[Q,U]=(0,a.useState)([]),[W,ee]=(0,a.useState)([]),[te,se]=(0,a.useState)([]),[ne,oe]=(0,a.useState)({}),[le,re]=(0,a.useState)(!1);(0,a.useLayoutEffect)((()=>{if(console.log("MainComponent.js useLayoutEffect \uae30\uc874\ub370\uc774\ud130 \ucd08\uae30\ud654 \uc9c4\uc785"),!t)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4!"),Y()}),[]),(0,a.useLayoutEffect)((()=>{console.log("MainComponent.js  useLayoutEffect \ub0a0\uc9dc\uad6c\ud574\uc11c state \ub370\uc774\ud130\ub123\uae30 \uc9c4\uc785");let e=new Date,t=e.getHours()<10?"0"+e.getHours():e.getHours(),s=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();s=s<30?"00":"30",M((()=>t+s)),k((()=>`${t}\uc2dc ${s}\ubd84`)),w((()=>`${e.getFullYear()}\ub144 ${e.getMonth()+1}\uc6d4 ${e.getDate()}\uc77c`));let n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,o=e.getDate()<10?"0"+e.getDate():e.getDate();I((()=>`${e.getFullYear()}${n}${o}`)),B((()=>`${e.getFullYear()}-${n}-${o}`)),N(e.getMonth()+1),E(e.getFullYear())}),[]),(0,a.useEffect)((()=>{const e=new Date;K((()=>e.getDate()))}),[]),(0,a.useEffect)((()=>{console.log("MainComponent.js useEffect() \uc704\uce58\uae30\ubc18 \ub0a0\uc528 axios \uc694\uccad \uc9c4\uc785");const e=async()=>{const e=await(async e=>{let{weatherDate:t,weatherTime:s}=e;const n=h();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",n),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",t),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",s);try{const e={serviceKey:"G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==",numOfRows:10,pageNo:1,dataType:"JSON",base_date:t,base_time:s,nx:n.x,ny:n.y};console.log("openApi.js axios.post(/api/main/openapi) \ubcf4\ub0b4\uae30\uc804 \uc694\uccad\ubcf8\ubb38 \ub0b4\uc6a9\ud655\uc778 -> ",e),await c.A.post("/api/main/openapi",{url:"http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",params:e}).then((e=>(console.log("openApi.js axios.post(/api/main/openapi) \uacb0\uacfc result-> ",e),console.log("openApi.js axios.post(/api/main/openapi) \uacb0\uacfc result.result-> ",e.result),e.result)))}catch(o){console.log("openApi.js axios.post(/api/main/openapi) \uc5d0\ub7ec\ubc1c\uc0dd",o)}})({weatherDate:S,weatherTime:D});if(console.log("MainComponent.js useEffect() \uc704\uce58\uae30\ubc18 \ub0a0\uc528 axios \uc694\uccad \ud6c4 \uacb0\uacfc -> ",e),Array.isArray(e)&&0!==e.length){let t=[];null===e||void 0===e||e.forEach((e=>{let s={};"T1H"===e.category&&(s.category="\uc628\ub3c4",s.obsrValue=e.obsrValue+"(\ub3c4)"),"REH"===e.category&&(s.category="\uc2b5\ub3c4",s.obsrValue=e.obsrValue+"(%)"),"WSD"===e.category&&(s.category="\ud48d\uc18d",s.obsrValue=e.obsrValue+"(m/s)"),"PTY"===e.category&&e.obsrValue>1&&(s.category="\ube44/\ub208",s.obsrValue=(e=>{switch(e){case"1":return"\ube44";case"2":return"\ube44/\ub208";case"3":return"\ub208";case"4":return"\ube57\ubc29\uc6b8";case"5":return"\ube57\ubc29\uc6b8&\ub208\ub0a0\ub9bc";case"6":return"\ub208\ub0a0\ub9bc"}})(e.obsrValue)),"RN1"===e.category&&t.PTY&&(s.category="\uac15\uc218\ub7c9",s.obsrValue=e.obsrValue+"(\uc2dc\uac04\ub2f9mm)"),console.log("newO \uac1d\uccb4 => ",s),0!==Object.keys(s).length&&t.push(s)})),v((()=>t)),A(!0),console.log("weatherapiEI setState \ud6c4 \ucd9c\ub825 weatherResult => ",f)}else re(!0)};""!==S&&""!==D&&e()}),[S]),(0,a.useEffect)((()=>{console.log("useLayoutEffect() \uc11c\ubc84axios\uc694\uccad\uc73c\ub85c \ub370\uc774\ud130 \uac00\uc838\uc624\uae30\uc9c4\uc785=>");return""!==R&&(async()=>{await(async e=>(console.log("mainApi.js getTodayManagement() \uc9c4\uc785 \ub9e4\uac1c\ubcc0\uc218\ud655\uc778 ->",e),(await u.A.get(`/api/main/${e}`)).data))(R).then((e=>{if(console.log("useEffect()\uc9c4\uc785 axios \uacb0\uacfc -> ",e),""===e.message)console.log("\uc11c\ubc84\uc5d0\uc11c res.locals \ub2f4\uae34 jwtemail \uc5c6\uc5b4\uc11c \uadf8\ub0e5 \ubcf4\uc784");else{var t;if(console.log("useEffect()\uc9c4\uc785 axios \uacb0\uacfc \uc874\uc7ac\ud560\uacbd\uc6b0 \uc9c4\uc785"),_((()=>e.diary)),0!==e.diet.length)console.log("result.diet \ub123\uae30 \uc9c4\uc785"),null===(t=e.diet)||void 0===t||t.forEach((e=>{console.log("result.diet \ub123\uae30 \uc9c4\uc785 result.diet forEach \uc9c4\uc785 => ",e),e.Dietdetails.forEach((e=>{console.log("result.diet \ub123\uae30 \uc9c4\uc785 result.diet.Dietdetails forEach \uc9c4\uc785 => ",e),"1"===e.choose?(console.log("result.diet \ub123\uae30 \uc9c4\uc785 result.diet.Dietdetails choose 1 \uc9c4\uc785"),J((t=>[...t,e]))):"2"===e.choose?(console.log("result.diet \ub123\uae30 \uc9c4\uc785 result.diet.Dietdetails choose 2 \uc9c4\uc785"),Z((t=>[...t,e]))):"3"===e.choose?(console.log("result.diet \ub123\uae30 \uc9c4\uc785 result.diet.Dietdetails choose 3 \uc9c4\uc785"),G((t=>[...t,e]))):(console.log("result.diet \ub123\uae30 \uc9c4\uc785 result.diet.Dietdetails choose 4 \uc9c4\uc785"),U((t=>[...t,e])))}))}));if(console.log("diet dietMorning-> ",H),console.log("diet dietLunch-> ",q),console.log("diet dietEvening-> ",X),console.log("diet dietSnack-> ",Q),0!==e.money.length){var s;console.log("money \ub123\uae30 \uc9c4\uc785"),null===(s=e.money)||void 0===s||s.forEach((e=>{console.log("result.money \ub123\uae30 \uc9c4\uc785 result.money forEach \uc9c4\uc785 => ",e),e.Moneydetails.forEach((e=>{console.log("result.money \ub123\uae30 \uc9c4\uc785 result.money.Moneydetails forEach \uc9c4\uc785 => ",e),"1"===e.choose?(console.log("result.money \ub123\uae30 \uc9c4\uc785 result.money.Moneydetails choose 1 \uc9c4\uc785"),e.amount=Number(e.amount).toLocaleString("ko-KR"),ee((t=>[...t,e]))):"2"===e.choose&&(console.log("result.money \ub123\uae30 \uc9c4\uc785 result.money.Moneydetails choose 2 \uc9c4\uc785"),e.amount=Number(e.amount).toLocaleString("ko-KR"),se((t=>[...t,e])))}))})),console.log("money moneyIncome-> ",W),console.log("money moneyExpense-> ",te);let t={};0!==e.money.length&&0!==e.sum.length&&(console.log("sum \ub123\uae30 \uc9c4\uc785"),t.sumincome=Number(e.money[0].income).toLocaleString("ko-KR"),t.sumexpense=Number(e.money[0].expense).toLocaleString("ko-KR"),t.monthsumincome=Number(e.sum[0].sumincome).toLocaleString("ko-KR"),t.monthsumexpense=Number(e.sum[0].sumexpense).toLocaleString("ko-KR"),oe((()=>t)))}0!==e.exercise.length&&(console.log("exercise \ub123\uae30 \uc9c4\uc785"),e.exercise.forEach((e=>{let t={};t.content=e.content,t.choose=e.choose,t.whenchoose=e.whenchoose,t.minute=e.minute,C((e=>[...e,t]))})))}})).catch((e=>{console.log("useEffect()\uc9c4\uc785 axios \uc5d0\ub7ec-> ",e)}))})(),()=>{G([]),J([]),U([]),Z([]),se([]),ee([]),C([]),_([]),C([])}}),[R]),(0,a.useEffect)((()=>{console.log("useEffect()\uc9c4\uc785 \uc77c\uc790\ubc84\ud2bc \ucd9c\ub825");return(async()=>{let e=[],t=new Date(z,F-1,1).getDate(),s=new Date(z,F,0).getDate();console.log("getDate() firstDay => ",t),console.log("getDate() lastDay=> ",s);for(let n=t;n<=s;n++)e.push(n);L((()=>e))})(),()=>{L([])}}),[]);const ie=e=>{console.log("handleDateManagement()\uc9c4\uc785 \uc120\ud0dd\ud55c \uc77c\uc790 -> ",e),K((()=>e));let t=F<10?"0"+F:F,s=e<10?"0"+e:e;B((()=>`${z}-${t}-${s}`))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o.A,{children:[(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),t&&e?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("span",{style:{fontSize:"25px"},children:[" ",e," \ub2d8\uc758 \ud558\ub8e8\uad00\ub9ac"]}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{style:{fontSize:"25px"},children:"\ud558\ub8e8\uad00\ub9ac"}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{})]}),(0,y.jsx)("br",{}),"\xa0\xa0"," ",(0,y.jsx)(x.A,{src:"/img/calendar.png",style:{width:"30px",height:"30px"},rounded:!0}),"\xa0\uc624\ub298\uc740 \xa0",b," \xa0\xa0",le&&(0,y.jsxs)("span",{style:{color:"crimson",fontStyle:"italic"},children:["*\uc624\ub298\uc758 \ub0a0\uc528\uc815\ubcf4\ub97c \ubcf4\uc2dc\ub824\uba74 \ud31d\uc5c5\ucc3d\uc758 \uc704\uce58\ud655\uc778\uc744 \ud5c8\uc6a9\ud574\uc8fc\uc138\uc694!"," "]}),n&&0!==f.length&&(null===f||void 0===f?void 0:f.map(((e,t)=>(0,y.jsxs)(y.Fragment,{children:["\ube44/\ub208"===e.category&&"7"===e.obsrValue&&"3"===e.obsrValue&&(0,y.jsxs)("span",{children:[(0,y.jsx)(x.A,{src:"/img/cloudsnow.png",style:{width:"30px",height:"30px"},rounded:!0}),e.category," ",e.obsrValue]},`${t}_1`),"\ube44/\ub208"===e.category&&"1"===e.obsrValue&&"2"===e.obsrValue&&"5"===e.obsrValue&&"6"===e.obsrValue&&(0,y.jsxs)("span",{children:[(0,y.jsx)(x.A,{src:"/img/rain.png",style:{width:"30px",height:"30px"},rounded:!0}),e.category," ",e.obsrValue,"\xa0\xa0"]},`${t}_2`),"\ube44/\ub208"===!e.category&&(0,y.jsxs)("span",{children:[(0,y.jsx)(x.A,{src:"/img/sun.png",style:{width:"30px",height:"30px"},rounded:!0}),e.category," ",e.obsrValue,"\xa0\xa0"]},`${t}_3`),"\uc628\ub3c4"===e.category&&(0,y.jsxs)("span",{children:[(0,y.jsx)(x.A,{src:"/img/ther.png",style:{width:"30px",height:"30px"},rounded:!0}),e.category," ",e.obsrValue,"\xa0\xa0"]},`${t}_4`)," ","\uc2b5\ub3c4"===e.category&&(0,y.jsxs)("span",{children:[(0,y.jsx)(x.A,{src:"/img/humidity.png",style:{width:"30px",height:"30px"},rounded:!0}),e.category," ",e.obsrValue," \xa0\xa0"]},`${t}_5`)," ","\ud48d\uc18d"===e.category&&(0,y.jsxs)("span",{children:[(0,y.jsx)(x.A,{src:"/img/wind.png",style:{width:"30px",height:"30px"},rounded:!0}),"\xa0",e.category," ",e.obsrValue,"\xa0\xa0"]},`${t}_6`)]})))),n&&`(${$} \uae30\uc900)`]}),(0,y.jsx)("hr",{}),(0,y.jsx)("br",{}),(0,y.jsxs)(o.A,{children:[(0,y.jsxs)(d.A.Select,{style:{width:"200px",display:"inline-block"},value:z,onChange:e=>(e=>{E((()=>Number(e.target.value))),(async()=>{let e=[],t=new Date(z,F-1,1).getDate(),s=new Date(z,F,0).getDate();console.log("getDate() firstDay => ",t),console.log("getDate() lastDay=> ",s);for(let n=t;n<=s;n++)e.push(n);L((()=>e))})()})(e),children:[(0,y.jsx)("option",{value:"2025",children:"2025"}),(0,y.jsx)("option",{value:"2026",children:"2026"})]}),(0,y.jsxs)(d.A.Select,{style:{width:"200px",display:"inline-block"},value:F,onChange:e=>(e=>{N((()=>Number(e.target.value))),(async()=>{let e=[],t=new Date(z,F-1,1).getDate(),s=new Date(z,F,0).getDate();console.log("getDate() firstDay => ",t),console.log("getDate() lastDay=> ",s);for(let n=t;n<=s;n++)e.push(n);L((()=>e))})()})(e),children:[(0,y.jsx)("option",{value:"1",children:"1"}),(0,y.jsx)("option",{value:"2",children:"2"}),(0,y.jsx)("option",{value:"3",children:"3"}),(0,y.jsx)("option",{value:"4",children:"4"}),(0,y.jsx)("option",{value:"5",children:"5"}),(0,y.jsx)("option",{value:"6",children:"6"}),(0,y.jsx)("option",{value:"7",children:"7"}),(0,y.jsx)("option",{value:"8",children:"8"}),(0,y.jsx)("option",{value:"9",children:"9"}),(0,y.jsx)("option",{value:"10",children:"10"}),(0,y.jsx)("option",{value:"11",children:"11"}),(0,y.jsx)("option",{value:"12",children:"12"})]}),"\xa0\xa0",(0,y.jsx)("span",{style:{color:"red",fontStyle:"italic"},children:"*\ub0a0\uc9dc\ud074\ub9ad\uc2dc \uc791\uc131\ud55c \ud558\ub8e8\uad00\ub9ac\ub97c \ud55c\ub208\uc5d0 \ubcfc\uc218\uc788\uc2b5\ub2c8\ub2e4!"}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),Array.isArray(V)&&0!==V.length&&V.map(((e,t)=>e===O?(0,y.jsxs)("span",{style:{fontSize:"20px"},children:[(0,y.jsx)(g.A,{size:"sm",variant:"secondary",onClick:()=>ie(e),children:e}),"\xa0"]},t):(0,y.jsxs)("span",{style:{fontSize:"20px"},children:[(0,y.jsx)(g.A,{size:"sm",variant:"outline-secondary",onClick:()=>ie(e),children:e}),"\xa0"]},`${t}_1`))),(0,y.jsx)("br",{}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(o.A,{style:{textAlign:"center"},children:[Array.isArray(T)&&0===T.length?(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(l.A,{style:{width:"18rem",display:"inline-block"},children:[(0,y.jsx)(l.A.Body,{children:(0,y.jsx)(l.A.Title,{children:"\uc0ac\uc9c4\ub2e4\uc774\uc5b4\ub9ac"})}),(0,y.jsx)(r.A,{className:"list-group-flush",children:(0,y.jsxs)(r.A.Item,{children:["\uc624\ub298 \ub2e4\uc774\uc5b4\ub9ac\ub97c \uc544\uc9c1 \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uc5b4\uc694! ",(0,y.jsx)("br",{}),(0,y.jsx)(m.N_,{style:{textDecoration:"none"},to:`../diary/create/${R}`,children:(0,y.jsxs)(g.A,{size:"sm",variant:"outline-primary",children:["\ub2e4\uc774\uc5b4\ub9ac\uc791\uc131"," "]})})]})})]})}):0!==T.length&&T.map(((e,t)=>(0,y.jsxs)(l.A,{style:{width:"18rem",display:"inline-block"},children:[e.picture?(0,y.jsx)(l.A.Img,{variant:"top",src:`https://picdiary-bucket.s3.ap-northeast-2.amazonaws.com/${e.path}`,style:{display:"block",margin:"0 auto",width:"200px",height:"200px",objectFit:"contain"}}):(0,y.jsx)(a.Fragment,{children:"\uc5c5\ub85c\ub4dc\ud558\uc9c0 \uc54a\uc74c\ud83d\ude05"},t),(0,y.jsx)(l.A.Body,{children:(0,y.jsx)(l.A.Title,{children:"\uc0ac\uc9c4\ub2e4\uc774\uc5b4\ub9ac"})}),(0,y.jsx)(r.A,{className:"list-group-flush",children:(0,y.jsx)(r.A.Item,{children:e.content})}),(0,y.jsxs)(l.A.Body,{children:[(0,y.jsx)(l.A.Link,{style:{textDecoration:"none"},href:`../diary/modify/${e.id}`,children:(0,y.jsx)(g.A,{variant:"outline-warning",size:"sm",children:"\uc218\uc815/\uc0ad\uc81c"})}),(0,y.jsx)(l.A.Link,{href:"../diary/list",style:{textDecoration:"none"},children:(0,y.jsx)(g.A,{variant:"outline-primary",size:"sm",children:"\ub2e4\uc774\uc5b4\ub9ac\ub2ec\ub825\uc774\ub3d9"})})]})]},t))),"\xa0 \xa0",Array.isArray(H)&&0===H.length&&Array.isArray(X)&&0===X.length&&Array.isArray(q)&&0===q.length&&Array.isArray(Q)&&0===Q.length?(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(l.A,{style:{width:"18rem",display:"inline-block"},children:[(0,y.jsx)(l.A.Body,{children:(0,y.jsx)(l.A.Title,{children:"\uc2dd\ub2e8"})})," ",(0,y.jsx)(r.A,{className:"list-group-flush",children:(0,y.jsxs)(r.A.Item,{children:["\uc624\ub298 \uc2dd\ub2e8\uc744 \uc544\uc9c1 \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uc5b4\uc694! ",(0,y.jsx)("br",{}),(0,y.jsx)(g.A,{size:"sm",variant:"outline-primary",children:(0,y.jsx)(m.N_,{style:{textDecoration:"none"},to:`../diet/create/${R}`,children:"\uc2dd\ub2e8\uc791\uc131"})})]})})]})}):(0,y.jsxs)(l.A,{style:{width:"18rem",display:"inline-block"},children:[(0,y.jsxs)(l.A.Body,{children:[(0,y.jsx)(l.A.Title,{children:"\uc2dd\ub2e8"}),(0,y.jsx)(l.A.Text,{children:"(g/ml\uc0dd\ub7b5)"})]}),(0,y.jsxs)(r.A,{className:"list-group-flush",children:[(0,y.jsx)(r.A.Item,{style:{textAlign:"left"},children:"\uc544\uce68"}),(0,y.jsx)(r.A.Item,{style:{textAlign:"right"},children:0!==H.length?H.map(((e,t)=>(0,y.jsxs)(a.Fragment,{children:[e.content,e.quantity,(0,y.jsx)("br",{})]},t))):(0,y.jsx)(a.Fragment,{children:(0,y.jsx)(m.N_,{style:{textDecoration:"none"},href:`../diet/create/${R}`,children:(0,y.jsx)(g.A,{variant:"outline-success",size:"sm",children:"\uc544\uce68\uc791\uc131"})})})}),(0,y.jsx)(r.A.Item,{style:{textAlign:"left"},children:"\uc810\uc2ec"}),(0,y.jsx)(r.A.Item,{style:{textAlign:"right"},children:0!==q.length?q.map(((e,t)=>(0,y.jsxs)(a.Fragment,{children:[e.content,e.quantity,(0,y.jsx)("br",{})]},t))):(0,y.jsx)(a.Fragment,{children:(0,y.jsx)(m.N_,{style:{textDecoration:"none"},href:`../diet/create/${R}`,children:(0,y.jsx)(g.A,{variant:"outline-success",size:"sm",children:"\uc810\uc2ec\uc791\uc131"})})})}),(0,y.jsx)(r.A.Item,{style:{textAlign:"left"},children:"\uc800\ub141"}),(0,y.jsx)(r.A.Item,{style:{textAlign:"right"},children:0!==X.length?X.map(((e,t)=>(0,y.jsxs)(a.Fragment,{children:[e.content," ",e.quantity,(0,y.jsx)("br",{})]},t))):(0,y.jsx)(a.Fragment,{children:(0,y.jsx)(m.N_,{style:{textDecoration:"none"},href:`../diet/create/${R}`,children:(0,y.jsx)(g.A,{variant:"outline-success",size:"sm",children:"\uc800\ub141\uc791\uc131"})})})}),(0,y.jsx)(r.A.Item,{style:{textAlign:"left"},children:"\uac04\uc2dd"}),(0,y.jsx)(r.A.Item,{style:{textAlign:"right"},children:0!==Q.length?Q.map(((e,t)=>(0,y.jsxs)(a.Fragment,{children:[e.content," ",e.quantity,(0,y.jsx)("br",{})]},t))):(0,y.jsx)(a.Fragment,{children:(0,y.jsx)(m.N_,{style:{textDecoration:"none"},href:`../diet/create/${R}`,children:(0,y.jsx)(g.A,{variant:"outline-success",size:"sm",children:"\uac04\uc2dd\uc791\uc131"})})})})]}),(0,y.jsxs)(l.A.Body,{children:[(0,y.jsx)(l.A.Link,{style:{textDecoration:"none"},href:`../diet/readall/${R}`,children:(0,y.jsx)(g.A,{variant:"outline-warning",size:"sm",children:"\uc218\uc815/\uc0ad\uc81c"})}),(0,y.jsx)(l.A.Link,{style:{textDecoration:"none"},href:"../diet/list",children:(0,y.jsx)(g.A,{variant:"outline-primary",size:"sm",children:"\uc2dd\ub2e8\ub2ec\ub825\uc774\ub3d9"})})]})]}),"\xa0 \xa0",Array.isArray(W)&&0===W.length&&Array.isArray(te)&&0===te.length?(0,y.jsxs)(l.A,{style:{width:"18rem",display:"inline-block"},children:[(0,y.jsx)(l.A.Body,{children:(0,y.jsx)(l.A.Title,{children:"\uac00\uacc4\ubd80"})}),(0,y.jsx)(r.A,{className:"list-group-flush",children:(0,y.jsxs)(r.A.Item,{children:["\uc624\ub298 \uac00\uacc4\ubd80\ub97c \uc544\uc9c1 \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uc5b4\uc694! ",(0,y.jsx)("br",{}),(0,y.jsxs)(g.A,{size:"sm",variant:"outline-primary",children:[(0,y.jsx)(m.N_,{style:{textDecoration:"none"},to:`../money/create/${R}`,children:"\uac00\uacc4\ubd80\uc791\uc131"})," "]})]})})]}):(0,y.jsxs)(l.A,{style:{width:"18rem",display:"inline-block"},children:[(0,y.jsxs)(l.A.Body,{children:[(0,y.jsx)(l.A.Title,{children:"\uac00\uacc4\ubd80"}),(0,y.jsx)(l.A.Text,{children:"(\ub2e8\uc704:\uc6d0)"})]}),(0,y.jsxs)(r.A,{className:"list-group-flush",children:[0!==W.length?(0,y.jsxs)(r.A.Item,{style:{textAlign:"left"},children:[O,"\uc77c \xa0\ucd1d\uc218\uc785\xa0",ne.sumincome,(0,y.jsx)("br",{}),(0,y.jsx)(l.A.Link,{style:{textDecoration:"none"},href:`../money/modify/${R}/1`,children:(0,y.jsx)(g.A,{variant:"outline-warning",size:"sm",children:"\uc218\uc785\uc218\uc815/\uc0ad\uc81c"})})]}):(0,y.jsx)(y.Fragment,{}),(0,y.jsx)(r.A.Item,{style:{textAlign:"right"},children:0!==W.length?W.map(((e,t)=>(0,y.jsxs)(a.Fragment,{children:[e.content,"\xa0",e.amount,(0,y.jsx)("br",{})]},t))):(0,y.jsx)(a.Fragment,{children:(0,y.jsx)(m.N_,{style:{textDecoration:"none"},href:"../money/create?choose=1",children:(0,y.jsx)(g.A,{variant:"outline-success",size:"sm",style:{textAlign:"left"},children:"\uc218\uc785\uc791\uc131"})})})}),0!==te.length?(0,y.jsxs)(r.A.Item,{style:{textAlign:"left"},children:[O,"\uc77c \xa0\ucd1d\uc9c0\ucd9c\xa0",ne.sumexpense,(0,y.jsx)("br",{}),(0,y.jsx)(l.A.Link,{style:{textDecoration:"none"},href:`../money/modify/${R}/2`,children:(0,y.jsx)(g.A,{variant:"outline-warning",size:"sm",children:"\uc9c0\ucd9c\uc218\uc815/\uc0ad\uc81c"})})]}):(0,y.jsx)(y.Fragment,{}),(0,y.jsx)(r.A.Item,{style:{textAlign:"right"},children:0!==te.length?te.map(((e,t)=>(0,y.jsxs)(a.Fragment,{children:[e.content,"\xa0",e.amount,(0,y.jsx)("br",{})]},t))):(0,y.jsx)(a.Fragment,{children:(0,y.jsx)(m.N_,{style:{textDecoration:"none"},href:"../money/create?choose=2",children:(0,y.jsx)(g.A,{variant:"outline-success",size:"sm",style:{textAlign:"left"},children:"\uc9c0\ucd9c\uc791\uc131"})})})}),(0,y.jsxs)(r.A.Item,{style:{textAlign:"left"},children:[F,"\uc6d4\uc218\uc785\ud569\uacc4\xa0",ne.monthsumincome]}),(0,y.jsxs)(r.A.Item,{style:{textAlign:"left"},children:[F,"\uc6d4\uc9c0\ucd9c\ud569\uacc4\xa0",ne.monthsumexpense]})]}),(0,y.jsx)(l.A.Body,{children:(0,y.jsx)(l.A.Link,{style:{textDecoration:"none"},href:"../money/list",children:(0,y.jsx)(g.A,{variant:"outline-primary",size:"sm",children:"\uac00\uacc4\ubd80\ub2ec\ub825\uc774\ub3d9"})})})]}),"\xa0 \xa0",Array.isArray(P)&&0!==P.length?(0,y.jsxs)(l.A,{style:{width:"18rem",display:"inline-block"},children:[(0,y.jsx)(l.A.Body,{children:(0,y.jsx)(l.A.Title,{children:"\uc6b4\ub3d9"})}),(0,y.jsxs)(r.A,{className:"list-group-flush",children:[P.map(((e,t)=>"1"===e.whenchoose?(0,y.jsxs)(a.Fragment,{children:[(0,y.jsx)(r.A.Item,{children:"\uc544\uce68"}),(0,y.jsxs)(r.A.Item,{children:[p(e.choose),"/",e.minute,"(\ubd84)",(0,y.jsx)("br",{}),e.content]})]},t):(0,y.jsx)(y.Fragment,{}))),P.map(((e,t)=>"2"===e.whenchoose?(0,y.jsxs)(a.Fragment,{children:[(0,y.jsx)(r.A.Item,{children:"\uc810\uc2ec"}),(0,y.jsxs)(r.A.Item,{children:[p(e.choose),"/",e.minute,"(\ubd84)",(0,y.jsx)("br",{}),e.content]})]},t):(0,y.jsx)(y.Fragment,{}))),P.map(((e,t)=>"3"===e.whenchoose?(0,y.jsxs)(a.Fragment,{children:[(0,y.jsx)(r.A.Item,{children:"\uc800\ub141"}),(0,y.jsxs)(r.A.Item,{children:[p(e.choose),"/",e.minute,"(\ubd84)",(0,y.jsx)("br",{}),e.content]})]},t):(0,y.jsx)(y.Fragment,{})))]}),(0,y.jsxs)(l.A.Body,{children:[(0,y.jsx)(l.A.Link,{style:{textDecoration:"none"},href:`../exercise/${R}`,children:(0,y.jsx)(g.A,{variant:"outline-warning",size:"sm",children:"\uc218\uc815/\uc0ad\uc81c"})}),(0,y.jsx)(l.A.Link,{style:{textDecoration:"none"},href:"../exercise/list",children:(0,y.jsx)(g.A,{variant:"outline-primary",size:"sm",children:"\uc6b4\ub3d9\ub2ec\ub825\uc774\ub3d9"})})]})]}):(0,y.jsxs)(l.A,{style:{width:"18rem",display:"inline-block"},children:[(0,y.jsx)(l.A.Body,{children:(0,y.jsx)(l.A.Title,{children:"\uc6b4\ub3d9"})}),(0,y.jsx)(r.A,{className:"list-group-flush",children:(0,y.jsxs)(r.A.Item,{children:["\uc624\ub298 \uc6b4\ub3d9\uc744 \uc544\uc9c1 \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uc5b4\uc694! ",(0,y.jsx)("br",{}),(0,y.jsx)(m.N_,{style:{textDecoration:"none"},to:`../exercise/create/${R}`,children:(0,y.jsxs)(g.A,{size:"sm",variant:"outline-primary",children:["\uc6b4\ub3d9\uc791\uc131"," "]})})]})})]}),(0,y.jsx)("br",{})]}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{})]})},f=()=>(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(n.A,{children:(0,y.jsx)(A,{})})})},5670:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(5043),o=s(1675);const l=(e,t)=>e?parseInt(e):t,r=()=>{const e=(0,o.Zp)(),[t,s]=(0,n.useState)(!1),[r]=(0,o.ok)(),i=r.get("page")?parseInt(r.get("page")):1,a=r.get("size")?parseInt(r.get("size")):10,c=(0,o.PI)({page:i,size:a}).toString();return{moveToList:e=>{let n="";if(e){const t=l(e.page,1),s=l(e.size,10);n=(0,o.PI)({page:t,size:s}).toString()}else n=c;s(!t)},page:i,size:a,moveToModify:t=>{e({pathname:`../modify/${t}`,search:c})},refresh:t,moveToRead:t=>{e({pathname:`../read/${t}`,search:c})},moveToLogin:()=>{e({pathname:"/login"})},moveToCreate:()=>{e({pathname:"../create"})}}}}}]);
//# sourceMappingURL=332.28e97e12.chunk.js.map