"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[184],{998:(e,o,t)=>{t.d(o,{j:()=>l});var n=t(6213);const a="G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";console.log(a);const s=()=>{if(navigator.geolocation){var e,o;function t(e){localStorage.setItem("COORDS",JSON.stringify(e))}function n(e){var o,n;t({latitude:null===(o=e.coords)||void 0===o?void 0:o.latitude,longitude:null===(n=e.coords)||void 0===n?void 0:n.longitude})}function a(){console.log("cant not access to location")}function s(){navigator.geolocation.getCurrentPosition(n,a)}let l=localStorage.getItem("COORDS");console.log("loadCoords \ub85c\uceec\uc800\uc7a5\uc18c\uc5d0\uc11c \uc800\uc7a5\ub41c \uc704\ub3c4\uacbd\ub3c4 \uac00\uc838\uc624\uae30 : ",JSON.stringify(l)),l=JSON.parse(l),null===l&&s();return((e,o,t)=>{console.log(" dfs_xy_conv \ud568\uc218\uc9c4\uc785");var n=Math.PI/180,a=180/Math.PI,s=6371.00877/5,l=30*n,c=60*n,i=126*n,r=38*n,h=Math.tan(.25*Math.PI+.5*c)/Math.tan(.25*Math.PI+.5*l);h=Math.log(Math.cos(l)/Math.cos(c))/Math.log(h);var d=Math.tan(.25*Math.PI+.5*l);d=Math.pow(d,h)*Math.cos(l)/h;var u=Math.tan(.25*Math.PI+.5*r);u=s*d/Math.pow(u,h);var m={};if("toXY"==e){m.lat=o,m.lng=t;var g=Math.tan(.25*Math.PI+o*n*.5);g=s*d/Math.pow(g,h);var x=t*n-i;x>Math.PI&&(x-=2*Math.PI),x<-Math.PI&&(x+=2*Math.PI),x*=h,m.x=Math.floor(g*Math.sin(x)+43+.5),m.y=Math.floor(u-g*Math.cos(x)+136+.5)}else{m.x=o,m.y=t;var y=o-43,p=u-t+136;if(g=Math.sqrt(y*y+p*p),h<0)return-g;var j=Math.pow(s*d/g,1/h);if(j=2*Math.atan(j)-.5*Math.PI,Math.abs(y)<=0)x=0;else if(Math.abs(p)<=0){if(x=.5*Math.PI,y<0)return-x}else x=Math.atan2(y,p);var f=x/h+i;m.lat=j*a,m.lng=f*a}return m})("toXY",Number(null===(e=l)||void 0===e?void 0:e.latitude),Number(null===(o=l)||void 0===o?void 0:o.longitude))}},l=async e=>{let{weatherDate:o,weatherTime:t}=e;const l=s();console.log("weatherapi() \ub0b4 \uc704\uacbd\ub3c4\ub97c xy\ubcc0\uacbd\ud6c4 : ",l),console.log("weatherapi() \ub0b4 weatherDate \ud655\uc778 ->  ",o),console.log("weatherapi() \ub0b4 weatherTime \ud655\uc778 ->  : ",t);try{var c,i,r,h;const e={serviceKey:a,numOfRows:10,pageNo:1,dataType:"JSON",base_date:o,base_time:t,nx:l.x,ny:l.y},s=await n.A.post("/api/main/openapi",{url:"https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst",params:e}).then((e=>{console.log("openApi.js axios.post(/api/openapi) \uacb0\uacfc -> ",e)})).catch((e=>{console.log("openApi.js axios.post(/api/openapi) \uc5d0\ub7ec\ubc1c\uc0dd -> ",e)}));return console.log("openAPI \uacf5\uacf5 api axios \uacb0\uacfc result",s),null===s||void 0===s||null===(c=s.data)||void 0===c||null===(i=c.response)||void 0===i||null===(r=i.body)||void 0===r||null===(h=r.items)||void 0===h?void 0:h.item}catch(d){console.log("openAPI axios \uc5d0\ub7ec\ubc1c\uc0dd",d)}}},1184:(e,o,t)=>{t.r(o),t.d(o,{default:()=>b});var n=t(1327),a=t(5043),s=t(1675),l=t(4462),c=t(1666),i=t(4282),r=t(2691),h=t(3637),d=t(6203),u=t(9223),m=t(579);const g=e=>{if(console.log("MoneyModifyComponent.js chooseReturn() \uc9c4\uc785 \ub9e4\uac1c\ubcc0\uc218 => ",e,"typeof -> ",typeof e),!e)return;const o=e.split("");console.log("MoneyModifyComponent.js chooseReturn() \uc9c4\uc785 \ubc30\uc5f4\ubcc0\uacbd => ",o);let t="";for(let n of o)switch(n){case"1":return"\uc2dd\ube44";case"2":return"\uad50\uc721\ube44";case"3":return"\uacf5\uacfc\uae08";case"4":return"\uc758\ub958\ube44";case"5":return"\uc0dd\ud544\ud488";case"6":return"\ucc28\ub7c9\uad50\ud1b5\ube44";case"7":return"\uc758\ub8cc\ubcf4\ud5d8";case"8":return"\uc8fc\uac70\ube44";case"9":return"\ub3c4\uc11c\ubb38\ud654\uc624\ub77d";case"10":return"\ud22c\uc790";case"11":return"\uae30\ud0c0";default:return null}console.log(t)},x=e=>{if(e)switch(console.log("chooseSectorIncomeReturn \ub9e4\uac1c\ubcc0\uc218 -> ",e),e){case"21":return"\uae09\uc5ec";case"22":return"\ud22c\uc790";case"23":return"\uadf8\uc678";default:return""}},y={content:"",amount:"",choose:"",choosesector:""},p={id:0,expense:0,income:0,dateobject:""},j=e=>Number(e).toLocaleString("ko-KR"),f=()=>{const[e,o]=(0,a.useState)(p),[t,n]=(0,a.useState)(!1),f=(0,a.useRef)(null),[b,v]=(0,a.useState)({...y}),[C,A]=(0,a.useState)(!1),[M,k]=(0,a.useState)(!1),{exceptionHandle:S}=(0,l.A)(),[w,R]=(0,a.useState)(!0),[N,O]=(0,a.useState)(!1),[I,P]=(0,a.useState)(!1),T=(0,a.useRef)(),{postMoneyC:L,moveToMoneyRead:E,patchMoneyC:F,moveToMoneyCreate:D,moveToMoneyList:$}=(0,d.A)();let{loginState:B}=(0,l.A)();const[_,z]=(0,a.useState)(""),[G,H]=(0,a.useState)([]),[J,K]=(0,a.useState)([]),[V,W]=(0,a.useState)([]),[Y,Z]=(0,a.useState)([]),[X,q]=(0,a.useState)([]),[Q,U]=(0,a.useState)(""),{dateobject:ee,choose:oe}=(0,s.g)();console.log("MoneyModifyComponent.js dateobject=> ",ee),console.log("MoneyModifyComponent.js choose=> ",oe),(0,a.useLayoutEffect)((()=>{""!==oe&&void 0!==oe&&null!==oe&&(console.log("useLayoutEffect() if \uc9c4\uc785"),U(oe))}),[]);const te=(0,a.useCallback)((t=>{console.log(t.target.value,t.target.name);const n=new RegExp(/^[0-9]+$/);if(console.log("handleChange moneyParam id\uc0b4\uc544\uc788\ub294\uc9c0\ud655\uc778 => ",e),"amount"===t.target.name){let e=Number(t.target.value);const o=n.test(e);if(console.log("\uacb0\uacfc ",o),!n.test(e)||"NaN"===e)return alert("\uae08\uc561\uc740 \uc22b\uc790\ub9cc \uc785\ub825\uac00\ub2a5\ud569\ub2c8\ub2e4."),void(f.current.value=0)}e[t.target.name]=t.target.value,o((o=>({...o,moneyParam:e})))}),[e]),ne=((0,a.useRef)(""),(0,a.useCallback)((e=>{console.log(e.target.value,e.target.name);const o=new RegExp(/^[0-9]+$/);if("amount"===e.target.name){let t=Number(e.target.value.replaceAll(",",""));const n=o.test(t);if(console.log("regex\uacb0\uacfc ",n),!o.test(t)||"NaN"===t)return alert("\uae08\uc561\uc740 \uc22b\uc790\ub9cc \uc785\ub825\uac00\ub2a5\ud569\ub2c8\ub2e4."),void(f.current.value=0);b.amount=t.toLocaleString("ko-KR")}else b[e.target.name]=e.target.value;v((e=>({...e,moneyDetailParam:b})))}),[b]));(0,s.Zp)();(0,a.useEffect)((()=>((async()=>{""!==Q&&await(0,u.u3)({dateobject:ee,bigchoose:Q}).then((t=>{if(console.log("MoneyModifyComponent.js useEffect() axios \uacb0\uacfc then() -> ",t),console.log("MoneyModifyComponent.js useEffect() axios \uacb0\uacfc then() -> ",t.result),null!==t.result||""!==t.result){if("1"===Q){let n=t.result.Moneydetails,a=t.result.id;e.id=a,o(e),n.forEach((e=>{console.log("bigchoose 1\uc77c\uacbd\uc6b0 moneydetails forEach \uc9c4\uc785 => ",e);let o={content:e.content,choose:e.choose,choosesector:e.choosesector,amount:j(e.amount)};K((e=>[...e,o]))}))}if("2"===Q){let n=t.result.Moneydetails,a=t.result.id;console.log("MoneyModifyComponent.js useEffect() axios \uacb0\uacfc then() id\ub9cc \uac12\uac00\uc838\uc624\uae30-> ",a),e.id=a,o(e),n.forEach((e=>{console.log("bigchoose 2\uc77c\uacbd\uc6b0 moneydetails forEach \uc9c4\uc785 => ",e);let o={content:e.content,choose:e.choose,choosesector:e.choosesector,amount:j(e.amount)};H((e=>[...e,o]))}))}}})).catch((e=>{console.log("MoneyModifyComponent.js useEffect() axios \uacb0\uacfc catch() -> ",e),S(e)}))})(),()=>{H([]),K([])})),[Q]);const ae=e=>{console.log("handleDetailRemoveOnClick() dataset =>",e.target.dataset.finalcontent,"e.target.dataset.finalamount -> ",e.target.dataset.finalamount,"e.target.dataset.finalchoose -> ",e.target.dataset.finalchoose,"e.target.dataset.finalchoosesector -> ",e.target.dataset.finalchoosesector),console.log("\uc785\ub825\uac12 \ud0c0\uc785  e.target.dataset.finalamount => ",typeof e.target.dataset.finalamount);const o=e.target.dataset.finalcontent,t=e.target.dataset.finalamount,n=e.target.dataset.finalchoose,a=e.target.dataset.finalchoosesector;if("2"===n){console.log("finalchoose \uc9c0\ucd9c\uc77c\uacbd\uc6b0\uc9c4\uc785");if(0===G.findIndex((e=>e.content===o&&e.amount===t&&e.choosesector===a))&&1===G.length)H([]);else{const e=G.filter((e=>!(e.content===o&&e.amount===t&&e.choosesector===a)));H(e)}}if("1"===n){console.log("finalchoose \uc218\uc785\uc77c\uacbd\uc6b0\uc9c4\uc785");if(0===J.findIndex((e=>e.content===o&&e.amount===t&&e.choosesector===a))&&1===J.length)K([]);else{const e=J.filter((e=>!(e.content===o&&e.amount===t&&e.choosesector===a)));K(e)}}};return(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("h4",{children:"\uac00\uacc4\ubd80\uc218\uc815"}),(0,m.jsx)("hr",{}),(0,m.jsx)("br",{}),(0,m.jsxs)(r.A,{onSubmit:t=>{if(t.preventDefault(),13!==t.keyCode){if(window.confirm("\uc704\uc640 \uac19\uc774 \uc218\uc815\ud558\uc2ed\ub2c8\uae4c?")){R(!1),console.log("handleSubmitMoney moneyParam \ub123\uae30\uc804 \uba3c\uc800 \ud655\uc778-> ",e);let t=0,n=0;0!==G.length&&(G.forEach((e=>{console.log("amount\uc9c0\ucd9c => ",e.amount),n+=Number(e.amount.replaceAll(",",""))})),e.dateobject=ee,e.expense=n,o(e),(0,u.HW)({moneyParam:e,finalIncomeObjectArray:J,finalExpenseObjectArray:G,bigchoose:Q,dateobject:ee}).then((e=>{console.log("MoneyModifyComponent.js axios \uc9c0\ucd9c postMoneyC then() \uc9c4\uc785 -> ",e),"success"===e.result&&(alert(ee+"\uc77c\uc790 \uc9c0\ucd9c \uac00\uacc4\ubd80 \uc218\uc815\uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4"),E(ee)),"postMoneyAsync/rejected"===e.type&&(alert(ee+" \uc77c\uc790 \uc9c0\ucd9c \uac00\uacc4\ubd80\uc218\uc815\uc744 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),E(ee))})).catch((e=>{console.log("MoneyModifyComponent.js axios patchMoneyC catch()",e),alert(ee+"\uc77c\uc790 \uc9c0\ucd9c \uac00\uacc4\ubd80\uc218\uc815\uc744 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),E(ee)}))),0!==J.length&&(J.forEach((e=>{console.log("amount\uc218\uc785 => ",e.amount),t+=Number(e.amount.replaceAll(",",""))})),e.dateobject=ee,e.income=t,o((o=>({...o,moneyParam:e}))),console.log("MoneyModifyComponent.js handleSubmitMoney -> ",e),(0,u.HW)({moneyParam:e,finalIncomeObjectArray:J,finalExpenseObjectArray:G,dateobject:ee,bigchoose:Q}).then((e=>{console.log("MoneyModifyComponent.js axios postMoneyC \uc218\uc785 then() \uc9c4\uc785 -> ",e),"success"===e.result&&(alert(ee+"\uc77c\uc790 \uc218\uc785\uac00\uacc4\ubd80 \uc218\uc815\uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4"),E(ee)),"postMoneyAsync/rejected"===e.type&&(alert(ee+" \uc77c\uc790 \uc218\uc785 \uac00\uacc4\ubd80\uc218\uc815\uc744 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),E(ee))})).catch((e=>{console.log("MoneyModifyComponent.js axios patchMoneyC catch()",e),alert(ee+"\uc77c\uc790 \uc218\uc785 \uac00\uacc4\ubd80\uc218\uc815\uc744 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),E(ee)})))}}else t.preventDefault()},children:[(0,m.jsxs)(r.A.Group,{className:"mb-3",children:[(0,m.jsx)(r.A.Label,{children:"\uac00\uacc4\ubd80\uc77c\uc790"}),(0,m.jsx)(r.A.Control,{type:"text",name:"dateobject",value:ee,disabled:!0}),(0,m.jsx)(r.A.Text,{className:"text-muted"})]}),(0,m.jsx)("br",{}),(0,m.jsxs)(r.A.Group,{className:"mb-3",children:[(0,m.jsx)(r.A.Label,{children:"\uc218\uc785/\uc9c0\ucd9c\uc120\ud0dd"}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.A,{src:"/img/money.png",style:{width:"50px",height:"50px"},rounded:!0}),"\xa0",(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc218\uc785",name:"choose",type:"radio",disable:"true",checked:!0,onChange:te}),(0,m.jsx)(h.A,{src:"/img/receipt.jpg",style:{width:"50px",height:"50px"},rounded:!0}),"\xa0",(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc9c0\ucd9c",name:"choose",type:"radio",disabled:!0})]})},"inline-radio")]}),(0,m.jsx)("br",{}),(0,m.jsxs)(r.A.Group,{className:"mb-3",children:[(0,m.jsx)(r.A.Label,{children:"\ud56d\ubaa9\uc120\ud0dd"}),(0,m.jsxs)("div",{className:"mb-3",children:[Y&&Y.map((e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc2dd\ube44",name:"choosesector",type:"radio",value:1,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uad50\uc721\ube44",name:"choosesector",type:"radio",value:2,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uacf5\uacfc\uae08",name:"choosesector",type:"radio",value:3,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc758\ub958\ube44",name:"choosesector",type:"radio",value:4,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc0dd\ud544\ud488",name:"choosesector",type:"radio",value:5,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\ucc28\ub7c9\uad50\ud1b5\ube44",name:"choosesector",type:"radio",value:6,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc758\ub8cc\ubcf4\ud5d8",name:"choosesector",type:"radio",value:7,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc8fc\uac70\ube44",name:"choosesector",type:"radio",value:8,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\ub3c4\uc11c\ubb38\ud654\uc624\ub77d",name:"choosesector",type:"radio",value:9,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\ud22c\uc790",name:"choosesector",type:"radio",value:10,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uae30\ud0c0",name:"choosesector",type:"radio",value:11,onChange:te})]})))," ","2"===Q&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc2dd\ube44",name:"choosesector",type:"radio",value:1,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uad50\uc721\ube44",name:"choosesector",type:"radio",value:2,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uacf5\uacfc\uae08",name:"choosesector",type:"radio",value:3,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc758\ub958\ube44",name:"choosesector",type:"radio",value:4,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc0dd\ud544\ud488",name:"choosesector",type:"radio",value:5,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\ucc28\ub7c9\uad50\ud1b5\ube44",name:"choosesector",type:"radio",value:6,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc758\ub8cc\ubcf4\ud5d8",name:"choosesector",type:"radio",value:7,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uc8fc\uac70\ube44",name:"choosesector",type:"radio",value:8,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\ub3c4\uc11c\ubb38\ud654\uc624\ub77d",name:"choosesector",type:"radio",value:9,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\ud22c\uc790",name:"choosesector",type:"radio",value:10,onChange:te,ref:T}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uae30\ud0c0",name:"choosesector",type:"radio",value:11,onChange:te,ref:T})]}),"1"===Q&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.A.Check,{inline:!0,label:"\uae09\uc5ec",name:"choosesector",type:"radio",value:21,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\ud22c\uc790",name:"choosesector",type:"radio",value:22,onChange:te}),(0,m.jsx)(r.A.Check,{inline:!0,label:"\uadf8\uc678",name:"choosesector",type:"radio",value:23,onChange:te})]}),X&&X.map((e=>(0,m.jsxs)(m.Fragment,{children:["21"===e?(0,m.jsx)(r.A.Check,{inline:!0,label:"\uae09\uc5ec",name:"choosesector",type:"radio",value:21,onChange:te,disabled:"true"}):(0,m.jsx)(r.A.Check,{inline:!0,label:"\uae09\uc5ec",name:"choosesector",type:"radio",value:21,onChange:te}),"22"===e?(0,m.jsx)(r.A.Check,{inline:!0,label:"\ud22c\uc790",name:"choosesector",type:"radio",value:22,onChange:te,disabled:"true"}):(0,m.jsx)(r.A.Check,{inline:!0,label:"\ud22c\uc790",name:"choosesector",type:"radio",value:22,onChange:te}),"23"===e?(0,m.jsx)(r.A.Check,{inline:!0,label:"\uadf8\uc678",name:"choosesector",type:"radio",value:23,onChange:te,disabled:"true"}):(0,m.jsx)(r.A.Check,{inline:!0,label:"\uadf8\uc678",name:"choosesector",type:"radio",value:23,onChange:te})]})))]},"inline-radio")]}),(0,m.jsx)("br",{}),0!==G.length&&(0,m.jsxs)(m.Fragment,{children:["\uc9c0\ucd9c",G.map(((e,o)=>(0,m.jsx)(a.Fragment,{children:(0,m.jsxs)(c.A,{className:"mb-3",children:[(0,m.jsx)(c.A.Text,{children:"\ud56d\ubaa9\xa0\xa0"}),(0,m.jsx)(r.A.Control,{type:"text",readOnly:!0,value:g(e.choosesector)}),(0,m.jsx)(c.A.Text,{children:"\ub0b4\uc6a9\xa0\xa0"}),(0,m.jsx)(r.A.Control,{type:"text",readOnly:!0,value:`${e.content} ${e.amount}`,style:{textAlign:"right"}}),(0,m.jsx)(i.A,{variant:"outline-danger",type:"button","data-finalcontent":e.content,"data-finalamount":e.amount,"data-finalchoose":e.choose,"data-finalchoosesector":e.choosesector,onClick:e=>ae(e),children:"\uc0ad\uc81c"})]})},o)))]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),0!==J.length&&(0,m.jsxs)(m.Fragment,{children:["\uc218\uc785",J.map(((e,o)=>(0,m.jsx)(a.Fragment,{children:(0,m.jsxs)(c.A,{className:"mb-3",children:[(0,m.jsx)(c.A.Text,{children:"\ud56d\ubaa9\xa0\xa0"}),(0,m.jsx)(r.A.Control,{type:"text",readOnly:!0,value:x(e.choosesector)}),(0,m.jsx)(c.A.Text,{children:"\ub0b4\uc6a9\xa0\xa0"}),(0,m.jsx)(r.A.Control,{type:"text",readOnly:!0,value:`${e.content} ${e.amount}`,style:{textAlign:"right"}}),(0,m.jsx)(i.A,{variant:"outline-danger",type:"button","data-finalcontent":e.content,"data-finalamount":e.amount,"data-finalchoose":e.choose,"data-finalchoosesector":e.choosesector,onClick:e=>ae(e),children:"\uc0ad\uc81c"})]})},o)))]}),w&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsxs)(c.A,{className:"mb-3",children:[(0,m.jsx)(c.A.Text,{children:"\ub0b4\uc6a9\xa0\xa0"}),(0,m.jsx)(r.A.Control,{type:"text",name:"content",value:b.content,onChange:ne}),(0,m.jsx)(c.A.Text,{children:"\uae08\uc561(\ub2e8\uc704 \uc6d0)\xa0\xa0"}),(0,m.jsx)(r.A.Control,{type:"text",name:"amount",value:b.amount,onChange:ne,ref:f}),(0,m.jsx)(i.A,{variant:"outline-warning",type:"button",onClick:()=>{""!==b.content&&0!==b.amount?(console.log("handleDetailOnclick sameResult-> bigchoose ",Q),console.log("handleDetailOnclick sameResult-> ",e.choosesector),null!==e.choosesector&&""!==e.choosesector&&void 0!==e.choosesector?("2"===Q&&H((o=>[...o,{choose:Q,choosesector:e.choosesector,content:b.content,amount:b.amount}])),"1"===Q&&K((o=>[...o,{choose:Q,choosesector:e.choosesector,content:b.content,amount:b.amount}])),v({...y})):alert("\ud56d\ubaa9\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694")):alert("\ub0b4\uc6a9\uc744 \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694!")},children:"\ucd94\uac00"})]}),(0,m.jsx)("br",{})]}),(0,m.jsx)(i.A,{variant:"outline-primary",type:"submit",children:"\uac00\uacc4\ubd80 \uc218\uc815\uc644\ub8cc"}),"\xa0",(0,m.jsx)(i.A,{variant:"outline-danger",type:"button",onClick:e=>(console.log("MoneyModifyComponent.js handleRemoveOnClick \uc9c4\uc785 "),void(window.confirm("\uc0ad\uc81c\ud558\uc2dc\uba74 \ubcf5\uad6c\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4 \uadf8\ub798\ub3c4 \uc0ad\uc81c\ud558\uc2ed\ub2c8\uae4c?")&&(0,u.Ov)({dateobject:ee,bigchoose:Q}).then((e=>{console.log("MoneyModifyComponent.js handleRemoveOnClick then -> ",e),e.result&&(alert(ee+" \uc77c\uc790\uc758 \uac00\uacc4\ubd80\ub97c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4."),$())})).catch((e=>{console.log("MoneyModifyComponent.js handleRemoveOnClick then -> ",e),E(ee)})))),children:"\uc0ad\uc81c\ud558\uae30"}),"\xa0",(0,m.jsx)(s.N_,{to:"../",children:(0,m.jsx)(i.A,{variant:"outline-secondary",children:"\uac00\uacc4\ubd80 \ub2ec\ub825\uc774\ub3d9"})}),"\xa0",(0,m.jsx)(s.N_,{to:"/",children:(0,m.jsx)(i.A,{variant:"outline-success",children:"\uba54\uc778\uc73c\ub85c"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]})]})},b=()=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(n.A,{children:(0,m.jsx)(f,{})})})},1327:(e,o,t)=>{t.d(o,{A:()=>j});var n=t(5043),a=t(3519),s=t(5171),l=t(579);const c=()=>(0,l.jsx)(s.A,{className:"bg-body-tertiary",children:(0,l.jsx)(a.A,{children:(0,l.jsx)(s.A.Brand,{children:(0,l.jsxs)("span",{style:{fontSize:"15px",textAlign:"right"},children:[(0,l.jsx)("img",{alt:"",src:"/img/thumbs-up.png",width:"30",height:"30",className:"d-inline-block align-top"})," ",'"\ubbf8\ub798\ub294 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc774 \ubb34\uc5c7\uc744 \ud558\ub290\ub0d0\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4." - \ub9c8\ud558\ud2b8\ub9c8 \uac04\ub514 ',(0,l.jsx)("br",{}),"The future depends on what we do in the present. -Mahatma Gandhi"]})})})});var i=t(7527),r=t(2691),h=t(1666),d=t(4282),u=t(3637),m=t(2104),g=t(3083),x=t(4462);t(9320),t(9317);t(998);const y=e=>{const{loginState:o,isLogin:t}=(0,x.A)(),[c,y]=(0,n.useState)(!1),[p,j]=(0,n.useState)(""),[f,b]=(0,n.useState)([]),[v,C]=(0,n.useState)(""),[A,M]=(0,n.useState)(""),k=(0,n.useRef)(),S=(0,n.useRef)(),{moveToLogin:w}=(0,x.A)(),R=(0,n.useRef)(),[N,O]=(0,n.useState)(null);(0,n.useEffect)((()=>(null===N||void 0===N||N.on("roomcreate",(function(e){var o;b((o=>[...o,{msg:e,type:"welcome",id:""}])),y((()=>!0)),null===(o=R.current)||void 0===o||o.scrollIntoView({behavior:"smooth",block:"end"})})),null===N||void 0===N||N.on("message",(function(e){var t;console.log("handleSubmitChat() \uc9c4\uc785 message \ucf5c\ubc31\ud568\uc218 \uc9c4\uc785 msg-> ",e);const{message:n,username:a,chatroomname:s}=e;b((e=>[...e,{msg:n,type:o===a?"me":"other",id:a}])),null===(t=R.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end"}),j((()=>""))})),null===N||void 0===N||N.on("out",(function(e){console.log("out \uc774\ubca4\ud2b8 \ub9ac\uc561\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc11c goodbyeCallback() \uc9c4\uc785 msg => ",e),b((o=>[...o,{msg:e.message,type:"goodbye",id:""}]));const o=N.id;console.log("goodbyeCallback() \uc18c\ucf13 id\ud655\uc778 ",o)})),()=>{null===N||void 0===N||N.off("message"),null===N||void 0===N||N.off("out"),null===N||void 0===N||N.off("roomcreate")})),[N]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{className:"bg-body-tertiary",expand:"lg",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,l.jsxs)(a.A,{fluid:!0,children:[(0,l.jsxs)(s.A.Brand,{children:[(0,l.jsx)(u.A,{src:"/img/sunglass.png",style:{height:"50px",width:"50px"}}),"\ud558\ub8e8\uad00\ub9ac"]}),(0,l.jsxs)(s.A.Collapse,{children:[(0,l.jsxs)(i.A,{className:"me-auto",children:[(0,l.jsx)(i.A.Link,{href:"/",children:"Home"}),t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A.Link,{href:"/diary",children:"\uc0ac\uc9c4\uc77c\uae30"}),(0,l.jsx)(i.A.Link,{href:"/diet",children:"\uc2dd\ub2e8\uad00\ub9ac"}),(0,l.jsx)(i.A.Link,{href:"/exercise",children:"\uc6b4\ub3d9\uad00\ub9ac"}),(0,l.jsx)(i.A.Link,{href:"/money",children:"\uae08\uc804\uad00\ub9ac"}),(0,l.jsx)(i.A.Link,{href:"/logout",children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A.Link,{href:"/login",children:"\ub85c\uadf8\uc778"}),(0,l.jsx)(i.A.Link,{href:"/join",children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,l.jsxs)(r.A,{onSubmit:e=>(e=>{if(console.log("chatStartClick \uc774\ubca4\ud2b8\ud578\ub4e4\ub7ec\ud568\uc218 \uc9c4\uc785 "),e.preventDefault(),!t)return alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),w();if(""===v||void 0===v)return void alert("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!");if(""===A||void 0===A)return void alert("\ubc29 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!");const n=(0,m.io)({autoConnect:!1});n.connect(),O((()=>n));const a={username:o,chatroomname:v,chatroompassword:A};n.emit("roomcreate",a)})(e),children:[" ",(0,l.jsxs)(h.A,{size:"sm",style:{width:"600px"},children:[(0,l.jsx)(h.A.Text,{children:"\ucc44\ud305\ubc29\uba85"}),(0,l.jsx)(r.A.Control,{type:"text",name:"chatroomname",onChange:e=>{C((()=>e.target.value))},value:v,ref:k}),(0,l.jsx)(h.A.Text,{children:"\ubc29\ube44\ubc00\ubc88\ud638"}),(0,l.jsx)(r.A.Control,{type:"text",name:"chatroompassword",ref:S,onChange:e=>{M((()=>e.target.value))},value:A}),(0,l.jsx)(d.A,{variant:"outline-secondary",type:"submit",children:"\ucc44\ud305\ud558\uae30"})]})]})]})]})}),c&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"modal show",style:{display:"block"},children:(0,l.jsxs)(g.A.Dialog,{children:[(0,l.jsxs)(g.A.Header,{children:[(0,l.jsxs)(g.A.Title,{children:[" \ucc44\ud305\ubc29\uba85 : ",v," "]}),"\xa0 \xa0",(0,l.jsx)(d.A,{variant:"outline-secondary",style:{textAlign:"left"},onClick:()=>(console.log("chatCloseModal() \uc9c4\uc785"),void(window.confirm("\ucc44\ud305\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log("chatCloseModal onClick \ub0b4 out \uc18c\ucf13\uc774\ubca4\ud2b8 \uc804\ub2ec\uc804 "),N.emit("out",{chatroomname:v,loginState:o,chatroompassword:A}),O(null),b([]),C(""),M(""),y((()=>!1))))),type:"button",children:"\ucc44\ud305\ucc3d\ub2eb\uae30"})]}),(0,l.jsx)(g.A.Body,{children:(0,l.jsx)("div",{style:{overflow:"scroll",height:"500px"},children:(0,l.jsxs)("ul",{children:[f.map(((e,o)=>"welcome"===e.type||"goodbye"===e.type?(0,l.jsxs)("li",{style:{listStyle:"none"},children:[(0,l.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}}),(0,l.jsx)("div",{children:e.msg}),(0,l.jsx)("div",{style:{height:"0.5px",flex:"1 1 auto",padding:"0 10px",backgroundColor:"#cecece"}})]},o):"me"===e.type?(0,l.jsxs)("li",{style:{textAlign:"left",listStyle:"none"},children:[(0,l.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,l.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#cecece"},children:e.msg})]},`${o}_1`):(0,l.jsxs)("li",{style:{textAlign:"right",listStyle:"none"},children:[(0,l.jsx)("div",{style:{marginTop:"5px",fontSize:"13px",fontWeight:"bold"},children:e.id}),(0,l.jsx)("div",{style:{padding:"5px",display:"inline-block",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"#000",color:"#fff"},children:e.msg})]},`${o}_2`))),(0,l.jsx)("li",{ref:R,style:{listStyle:"none"}})]})})}),(0,l.jsx)(r.A,{onSubmit:e=>(e=>{e.preventDefault(),console.log("handleSubmitChat() \uc9c4\uc785 ");const t={message:p,username:o,chatroomname:v};N.emit("message",t)})(e),children:(0,l.jsxs)(g.A.Footer,{children:[(0,l.jsxs)(h.A,{className:"mb-3",children:[(0,l.jsx)(h.A.Text,{id:"inputGroup-sizing-default",children:"\ucc44\ud305\ub0b4\uc6a9"}),(0,l.jsx)(r.A.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:e=>(e=>{j((()=>e.target.value))})(e),value:p,name:"chatcontents"})]}),(0,l.jsx)(d.A,{variant:"outline-primary",type:"submit",style:{textAlign:"right"},children:"\uba54\uc2dc\uc9c0\ubcf4\ub0b4\uae30"})]})})]})})})]})},p=e=>(0,l.jsx)(y,{isLogin:e.isLogin}),j=e=>{let{children:o}=e;const[t,a]=(0,n.useState)(new Date),{loginState:s,isLogin:i}=(0,x.A)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{isLogin:i}),o,(0,l.jsx)(c,{})]})}},6203:(e,o,t)=>{t.d(o,{A:()=>l});var n=t(3003),a=t(6362),s=t(1675);const l=()=>{const e=(0,n.d4)((e=>e.MoneySlice)),o=(0,n.wA)(),t=(0,s.Zp)();return{moneyState:e,postMoneyC:e=>{let{moneyParam:t,finalExpenseObjectArray:n,finalIncomeObjectArray:s,dateobject:l}=e;return o((0,a.DS)({moneyParam:t,finalExpenseObjectArray:n,finalIncomeObjectArray:s,dateobject:l}))},deleteMoneyC:e=>o((0,a.YG)(e)),patchMoneyC:e=>{let{moneyParam:t,finalExpenseObjectArray:n,finalIncomeObjectArray:s,dateobject:l,bigchoose:c}=e;return o((0,a.Fe)({moneyParam:t,finalExpenseObjectArray:n,finalIncomeObjectArray:s,dateobject:l,bigchoose:c}))},moveToMoneyRead:e=>{t({pathname:`../read/${e}`})},moveToMoneyModify:e=>{t({pathname:`../modify/${e}`})},moveToMoneyCreate:e=>{t({pathname:`../create/${e}`})},getMoneyListC:async()=>{await o((0,a.PO)())},moveToMoneyList:()=>{t({pathname:"../"})}}}}}]);
//# sourceMappingURL=184.3933ee16.chunk.js.map