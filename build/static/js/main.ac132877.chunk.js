(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{61:function(e,t){},68:function(e,t,i){},69:function(e,t,i){},96:function(e,t,i){"use strict";i.r(t);var n,c,r,s,a,o,l,d=i(0),u=i.n(d),j=i(17),b=i.n(j),h=(i(68),i(69),i(20)),p=i(21),m=i(15),x=i(63),O=p.a.nav(n||(n=Object(h.a)(["\n    background : #000;\n    height: 90px;\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem calc((100vw - 1000px) / 2) ;\n    z-index: 100; \n"]))),f=Object(p.a)(m.c)(c||(c=Object(h.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n\n    &.active {\n        color: #15cdfc;\n\n    }\n"]))),g=Object(p.a)(x.a)(r||(r=Object(h.a)(["\n    display: none;\n    color: #fff;\n\n    @media screen and (max-width: 768px) {\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 75%);\n        font-size: 1.8rem;\n        cursor: pointer;\n    }\n"]))),v=p.a.div(s||(s=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: -24px;\n\n    @media screen and (max-width: 768px) {\n        display:none;\n    }\n"]))),E=p.a.nav(a||(a=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: 24px;\n\n    @media screen and (max-width: 768px){\n        display: none;\n    }\n"]))),y=(Object(p.a)(m.c)(o||(o=Object(h.a)(["\n    border-radius: 4px;\n    background: #256ce1;\n    padding: 10px 22px;\n    color: #fff;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover{\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n        color: #010606;\n    }\n"]))),i(1)),F=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(O,{children:[Object(y.jsx)(f,{to:"/",children:Object(y.jsx)("img",{src:"data:image/png;base64,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",width:"120",height:"120",alt:"logo"})}),Object(y.jsx)(g,{}),Object(y.jsxs)(v,{children:[Object(y.jsx)(f,{to:"/home",activeStyle:!0,children:"HOME"}),Object(y.jsx)(f,{to:"/mountainfinder",activeStyle:!0,children:"MOUNTAIN FINDER"}),Object(y.jsx)(f,{to:"/about",activeStyle:!0,children:"ABOUT US"}),Object(y.jsx)(f,{to:"/contact",activeStyle:!0,children:"CONTACT US"})]}),Object(y.jsx)(E,{})]})})},A=i(7),w=(i.p,"03242"),R="nC8qTyVabyAPlnldpR89nTs4OmvWmdyJmGeaHoklFH71ul1StpMre3CNxOhpCOyy",C="https://www.zipcodeapi.com/rest/".concat(R,"/distance.json/").concat(l,"/").concat(w,"/mile"),S=function(e){l=document.getElementById("zipcode").value,C="https://www.zipcodeapi.com/rest/".concat(R,"/distance.json/").concat(l,"/").concat(w,"/mile"),fetch(C).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},D=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{class:"aboutme",children:Object(y.jsx)("p",{children:"Please enter your zipcode or search up a resort you want to search for."})}),Object(y.jsx)("div",{class:"background",children:Object(y.jsxs)("div",{class:"searchbar",children:[Object(y.jsx)("input",{type:"text",id:"zipcode",class:"searchbar",placeholder:"Please enter your zipcode or a Resort name"}),Object(y.jsx)(m.b,{to:"/compare",children:Object(y.jsx)("button",{onClick:S,class:"searchbutton",children:"SUBMIT "})})]})})]})},L=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:" About us "}),Object(y.jsx)("div",{class:"aboutme",children:Object(y.jsx)("p",{children:"Be One with the Snow is a web-based application that targets skiers and snowboarders across the United States to find, organize, plan, and experience mountains and ski resorts much easier. Consumers do not have to visit various websites to research information they need. Simply, they need to reach our application and enter their zip-code, and we will have every information ready for them."})})]})},B=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:" Contact Us "}),Object(y.jsx)("div",{class:"form-group",children:Object(y.jsxs)("form",{children:[Object(y.jsx)("label",{for:"name",children:" First and Last Name: "}),Object(y.jsx)("input",{type:"text",id:"name",placeholder:"First and Last name"})," ",Object(y.jsx)("br",{}),Object(y.jsx)("label",{for:"message",children:" Message: "}),Object(y.jsx)("textarea",{name:"message",id:"message",cols:"30",rows:"10",children:" "}),Object(y.jsx)("label",{for:"email",children:" Your Email: "}),Object(y.jsx)("input",{type:"text",id:"email",placeholder:"Please enter your email address"})," ",Object(y.jsx)("br",{}),Object(y.jsx)("button",{type:"submit",class:"searchbutton",children:"SUBMIT "})]})}),Object(y.jsx)("div",{id:"status",class:"success",children:" Success your email has been sent! "})]})},P=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:" Mountain Finder "}),Object(y.jsx)("div",{class:"aboutme",children:Object(y.jsx)("p",{children:"**FUTURE PAGE IF TIME PERMITS**"})})]})},I=(i(26),i(101)),V=i(102),z=i(104),Q=i(107),k=i(103),J=i(24),H=i.n(J),q=i(32),T=i(62),U=i(58),M=i.n(U),N=function(){var e=Object(q.a)(H.a.mark((function e(){var t,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=25d0569851c0869a01a553ee05c7ffff&units=imperial");case 3:return t=e.sent,i=t.data,e.abrupt("return",i);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],W=new Date,Z=Y[W.getDay()],K=Y[(W.getDay()+1)%7],X=Y[(W.getDay()+2)%7],G=function(){var e=Object(d.useState)(null),t=Object(T.a)(e,2),i=t[0],n=t[1],c=function(){var e=Object(q.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){c()}),[]),console.log(i),Object(y.jsxs)("div",{children:[Object(y.jsx)("h6",{children:"Weather Forcast"}),null!==i?Object(y.jsx)(I.a,{children:Object(y.jsxs)(V.a,{class:"flex-nowrap",children:[Object(y.jsxs)("div",{class:"weatherBox",children:[Z,Object(y.jsx)("br",{}),i.list[0].main.temp,Object(y.jsx)("br",{}),Object(y.jsx)("img",{src:"https://openweathermap.org/img/wn/"+i.list[0].weather[0].icon+"@2x.png"}),Object(y.jsx)("br",{}),i.list[0].weather[0].description]}),Object(y.jsxs)("div",{class:"weatherBox",children:[K," ",Object(y.jsx)("br",{}),i.list[9].main.temp," ",Object(y.jsx)("br",{}),Object(y.jsx)("img",{src:"https://openweathermap.org/img/wn/"+i.list[8].weather[0].icon+"@2x.png"}),Object(y.jsx)("br",{}),i.list[9].weather[0].description]}),Object(y.jsxs)("div",{class:"weatherBox",children:[X," ",Object(y.jsx)("br",{}),i.list[16].main.temp," ",Object(y.jsx)("br",{}),Object(y.jsx)("img",{src:"https://openweathermap.org/img/wn/"+i.list[16].weather[0].icon+"@2x.png"}),Object(y.jsx)("br",{}),i.list[16].weather[0].description]})]})}):null]})},$=i.p+"static/media/TrailMap.9a75d3f0.jpg",_=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(V.a,{children:Object(y.jsx)("h4",{children:"* RESORT NAME PLACE HOLDER*"})}),Object(y.jsx)(V.a,{children:Object(y.jsx)("a",{href:"https://www.patspeak.com/",children:" https://www.patspeak.com/ "})}),Object(y.jsx)(V.a,{children:Object(y.jsx)("img",{src:$,alt:"resortImg",style:{width:"100%"}})})]})},ee=function(){var e=Object(y.jsxs)("div",{children:[Object(y.jsx)("h6",{children:"Description"}),Object(y.jsxs)("p",{children:["***DESCRIPTION PLACE HOLDER*** ",Object(y.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]})]}),t=Object(y.jsxs)("div",{children:[Object(y.jsx)("h6",{children:"Description"}),Object(y.jsxs)("p",{children:["***MOUNTAIN PLACE HOLDER*** ",Object(y.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]})]}),i=G(),n=Object(y.jsxs)("div",{children:[Object(y.jsx)("h6",{children:"Snow Report"}),Object(y.jsxs)("p",{children:["***DESCRIPTION PLACE HOLDER*** ",Object(y.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]})]});return Object(y.jsx)("div",{class:"tabBox",children:Object(y.jsxs)(Q.a,{defaultActiveKey:"Description",id:"uncontrolled-tab-example",children:[Object(y.jsx)(k.a,{eventKey:"Description",title:"Description",children:e}),Object(y.jsx)(k.a,{eventKey:"Mountain",title:"Mountain",children:t}),Object(y.jsx)(k.a,{eventKey:"Weather",title:"Weather",children:i}),Object(y.jsx)(k.a,{eventKey:"Snow",title:"Snow",children:n})]})})},te=function(){var e=Object(y.jsxs)("div",{children:[Object(y.jsx)("h6",{children:"Activities"}),Object(y.jsxs)("p",{children:["***ACTIVITIES PLACE HOLDER*** ",Object(y.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]})]}),t=Object(y.jsx)("div",{children:Object(y.jsxs)("p",{children:["***EVENTS PLACE HOLDER***",Object(y.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]})}),i=Object(y.jsx)("div",{children:Object(y.jsxs)("p",{children:["***REVIEW PLACE HOLDER***",Object(y.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]})}),n=Object(y.jsx)("div",{children:Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:" ***EQUIPMENT RENTAL*** "})," ",Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:" Skis, Boots & Poles Purchase: Price: "})," ",Object(y.jsx)("br",{}),"Adult (18-64) : $40/day ",Object(y.jsx)("br",{}),"Junior (6-17)/Senior (65+): $36/day ",Object(y.jsx)("br",{}),"Child (5 & Under): $32/day ",Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:" Premium Skis, Boots & Poles Purchase: Price: "})," ",Object(y.jsx)("br",{}),"Adult (18-64) $50/day Junior (6-17)/Senior (65+) $46/day ",Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:" Twin Tip Skis, Boots & Poles Purchase: Price: "})," ",Object(y.jsx)("br",{}),"Adult (18-64) $50/day Junior (6-17)/Senior (65+) $46/day ",Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:" Snowboards & Boots Purchase: Price: "})," ",Object(y.jsx)("br",{}),"Adult (18-64) $40/day Junior (6-17)/Senior (65+) $36/day Child (5 & Under) $32/day ",Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:" Helmets Purchase: Price: "})," ",Object(y.jsx)("br",{}),"Helmets (All ages) $12/day ",Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:" Snowshoes  Purchase: Price: "})," ",Object(y.jsx)("br",{}),"Snowshoes (All ages) $19/day"]})});return Object(y.jsx)("div",{class:"tabBox",children:Object(y.jsxs)(Q.a,{defaultActiveKey:"Activities",id:"uncontrolled-tab-example",children:[Object(y.jsx)(k.a,{eventKey:"Activities",title:"Activities",children:e}),Object(y.jsx)(k.a,{eventKey:"Events",title:"Events",children:t}),Object(y.jsx)(k.a,{eventKey:"Reviews",title:"Reviews",children:i}),Object(y.jsx)(k.a,{eventKey:"Prices",title:"Prices",children:n})]})})},ie=function(){return Object(y.jsx)("div",{class:"box",children:Object(y.jsx)(I.a,{fluid:!0,children:Object(y.jsxs)(V.a,{children:[Object(y.jsx)(z.a,{xs:12,md:6,lg:4,children:Object(y.jsx)(_,{})}),Object(y.jsxs)(z.a,{xs:12,md:6,lg:8,children:[Object(y.jsx)(ee,{}),Object(y.jsx)(te,{})]})]})})})},ne=function(){return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{class:"backgrounderror",children:[Object(y.jsx)("h1",{children:"404 page not found"}),Object(y.jsx)("p",{children:"We are sorry but the page you are looking for does not exist."})]})})},ce=i(106),re=i(105),se=[{name:"Pats Peak",distance:"42 mi",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"$100",rating:"5"},{name:"Wachusetts",distance:"30 mi",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"$60",rating:"4.5"},{name:"Nashoba",distance:"22 mi",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"$50",rating:"4.1"}].map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)(m.b,{to:"/resort",children:Object(y.jsx)("b",{children:e.name})})}),Object(y.jsx)("td",{children:e.distance}),Object(y.jsx)("td",{children:e.description}),Object(y.jsx)("td",{children:e.rating}),Object(y.jsx)("td",{children:e.price}),Object(y.jsx)("td",{children:Object(y.jsx)("input",{type:"checkbox"})})]},e.name)})),ae=function(){return Object(y.jsx)("div",{class:"sortBy",children:Object(y.jsxs)(ce.a,{children:[Object(y.jsx)("label",{class:"lblSortBy",children:"SortBy: "}),Object(y.jsx)(ce.a.Toggle,{variant:"light",id:"dropdown-basic",children:"Select"}),Object(y.jsxs)(ce.a.Menu,{children:[Object(y.jsx)(ce.a.Item,{href:"#",children:"Distance"}),Object(y.jsx)(ce.a.Item,{href:"#",children:"Price"}),Object(y.jsx)(ce.a.Item,{href:"#",children:"Review"})]}),Object(y.jsxs)("div",{class:"float-right",children:[Object(y.jsx)("label",{class:"lblCompare",children:"Select Three Resorts: "}),Object(y.jsx)("button",{class:"btnCompare btn btn-light",children:"Compare"})]})]})})},oe=function(){return Object(y.jsxs)(re.a,{striped:!0,bordered:!0,hover:!0,children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Name"}),Object(y.jsx)("th",{children:"Distance"}),Object(y.jsx)("th",{children:"Description"}),Object(y.jsx)("th",{children:"Review"}),Object(y.jsx)("th",{children:"Price"}),Object(y.jsx)("th",{children:"Select"})]})}),Object(y.jsx)("tbody",{children:se})]})},le=function(){return Object(y.jsx)("div",{class:"box",children:Object(y.jsxs)(I.a,{fluid:!0,children:[Object(y.jsx)(V.a,{children:Object(y.jsx)(ae,{})}),Object(y.jsx)(oe,{})]})})},de=i(61),ue=i.n(de);var je=function(){return Object(y.jsx)("div",{class:"content",children:Object(y.jsxs)(m.a,{children:[Object(y.jsx)(F,{}),Object(y.jsxs)(A.c,{children:[Object(y.jsx)(A.a,{path:"/",exact:!0,component:D}),Object(y.jsx)(A.a,{path:"/home",component:D}),Object(y.jsx)(A.a,{path:"/about",component:L}),Object(y.jsx)(A.a,{path:"/contact",component:B}),Object(y.jsx)(A.a,{path:"/mountainfinder",component:P}),Object(y.jsx)(A.a,{path:"/resort",component:ie}),Object(y.jsx)(A.a,{path:"/compare",component:le}),Object(y.jsx)(A.a,{path:"/testzipcode",component:ue.a}),Object(y.jsx)(A.a,{path:"*",component:ne})]})]})})},be=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,108)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),r(e),s(e)}))},he=function(){var e=(new Date).getFullYear();return Object(y.jsx)("footer",{children:Object(y.jsxs)(I.a,{children:["Copyright \xa9 ",e]})})};b.a.render(Object(y.jsxs)(u.a.StrictMode,{children:[Object(y.jsx)(je,{}),Object(y.jsx)(he,{})]}),document.getElementById("root")),be()}},[[96,1,2]]]);
//# sourceMappingURL=main.ac132877.chunk.js.map