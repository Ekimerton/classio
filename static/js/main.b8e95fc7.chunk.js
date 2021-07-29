(this.webpackJsonpclassio=this.webpackJsonpclassio||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(25),s=n.n(r),i=(n(148),n(72)),l=n.n(i),o=n(85),u=n(61),d=n(29),j=(n(149),n(150),n(192)),h=n(188),b=n(190),m=n(49),f=n(142),O=n(196),p=n(187),g=n(194),x=n(102),v=n(186),y=n(75),w=n(44),k=n(193),_=n(191),T=n(198),S=n(199),C=n(111),M=n(59),F=n(86),I=n.n(F),N=n(37),A=n.n(N),L=n(189),E=n(197),z=n(6),H=L.a.Meta,W=j.a.Text;function B(e){var t=Object(a.useState)(!0),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),u=i[0],j=i[1],h=Object(a.useState)(0),b=Object(d.a)(h,2),m=b[0],O=b[1],p=Object(z.jsx)("div",{style:{maxWidth:200},children:Object(z.jsx)(W,{children:"Some classes are async, and might not have set timeslots."})}),g=e.code,x=e.onDelete,v=e.onAdd,y=e.semester;return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://classio-api.herokuapp.com/course/".concat(g),{params:{semester:y}});case 3:t=e.sent,j(t.data.course_info.name),n=A.a.flatMap(t.data.course_info.sections,"timeslots"),O(n.length),v(t.data.course_info),r(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),f.b.error("Unable to fetch class info. (try refreshing)"),r(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();r(!0),e()}),[g,y]),Object(z.jsx)(L.a,{size:"small",bordered:!1,title:g,loading:c,className:"App-class-card",style:{marginRight:10,height:120},extra:Object(z.jsx)("a",{onClick:function(){return x(e.code)},children:"X"}),children:Object(z.jsx)(H,{title:u,description:Object(z.jsxs)("div",{children:[Object(z.jsx)(W,{children:"Found ".concat(m," timeslot(s)")}),0===m&&Object(z.jsx)(E.a,{content:p,title:"Why are there no timeslots?",children:Object(z.jsx)("a",{children:" ? "})})]})})})}var D=n(195),P=n(143),R=j.a.Title;function U(e){var t=e.timeslots;return Object(z.jsx)(L.a,{style:{width:"100%"},bodyStyle:{padding:0},size:"small",children:Object(z.jsxs)(y.a,{justify:"center",style:{margin:0,paddingTop:10,justifyContent:"center"},children:[Object(z.jsxs)(w.a,{flex:1,className:"Timetable-column",children:[Object(z.jsx)(R,{level:5,children:"Monday"}),t.Mo.map((function(e,t){return Object(z.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)},t)}))]}),Object(z.jsxs)(w.a,{flex:1,className:"Timetable-column",children:[Object(z.jsx)(R,{level:5,children:"Tuesday"}),t.Tu.map((function(e,t){return Object(z.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)},t)}))]}),Object(z.jsxs)(w.a,{flex:1,className:"Timetable-column",children:[Object(z.jsx)(R,{level:5,children:"Wednesday"}),t.We.map((function(e,t){return Object(z.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)},t)}))]}),Object(z.jsxs)(w.a,{flex:1,className:"Timetable-column",children:[Object(z.jsx)(R,{level:5,children:"Thursday"}),t.Th.map((function(e,t){return Object(z.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)},t)}))]}),Object(z.jsxs)(w.a,{flex:1,className:"Timetable-column",children:[Object(z.jsx)(R,{level:5,children:"Friday"}),t.Fr.map((function(e,t){return Object(z.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)},t)}))]})]})})}var G=D.a.Panel;function q(e){var t=e.timetable,n=t.timetable,a=t.scores,c=t.classes;return Object(z.jsx)(D.a,{children:Object(z.jsxs)(G,{header:Object(z.jsxs)("div",{children:[Object(z.jsx)(P.a,{color:{Early:"gold","Mid-Day":"green",Late:"geekblue"}[a.type],style:{margin:5},children:a.type}),Object(z.jsxs)(P.a,{color:"blue",style:{margin:5},children:["Score: ",a.total.toFixed(1),"/10"]}),Object(z.jsxs)(P.a,{color:"blue",style:{margin:5},children:["Time wasted: ",a.offTime,"h"]}),Object(z.jsxs)(P.a,{color:"blue",style:{margin:5},children:["Lunches: ",a.lunch,"/5"]}),Object(z.jsxs)(P.a,{color:"blue",style:{margin:5},children:["Dinners: ",a.dinner,"/5"]})]}),style:{padding:0,margin:0,justifyContent:"flex-start",alignItems:"flex-start",backgroundColor:"#ffffff"},showArrow:!1,children:[Object(z.jsx)(U,{timeslots:n}),c.map((function(e,t){return Object(z.jsxs)(P.a,{style:{marginTop:15},color:"default",children:[e.courseCode," - ",e.kind,": ",e.code]},t)}))]},"1")})}var J=j.a.Paragraph,Y=j.a.Title,Z=j.a.Link;function K(){return Object(z.jsxs)("div",{children:[Object(z.jsx)(Y,{style:{textAlign:"center"},children:"classio"}),Object(z.jsxs)(J,{style:{textAlign:"center",marginTop:-10},children:["Found a bug? Have a suggestion?",Object(z.jsx)(Z,{href:"https://docs.google.com/forms/d/1FNYSnC7lkeZQt-3fw_PotWnGe5q40A5vKZaJDMRs5b4/edit",target:"_blank",children:" Let me know!"})]}),Object(z.jsx)(J,{children:"classio is an app that helps with course selection. Once you enter which classes you are taking, it automatically creates all possible timetables, eliminates any with conflicts, and ranks them for convenience."}),Object(z.jsxs)(J,{children:["All of the course information used within this project comes from my ",Object(z.jsx)(Z,{href:"https://classio-api.herokuapp.com",target:"_blank",children:"open-source api"}),". If you have a keen eye for code or are looking to get into coding, I would recommend giving it a shot in your next project!"]}),Object(z.jsx)(v.a,{}),Object(z.jsxs)(J,{ellipsis:{rows:2,expandable:!0,symbol:"more"},children:["Thanks for using my app! I created classio in 2019 because I was frustrated with the overly-tedious course selection process. Since then, I've gotten a lot of requests to update it for future semesters. I had originally planned to update classio for 2020. However, the original was mostly spaghetti code that was slow and very hard to read. Plus, most courses in 2020 ended up being online, which meant their timeslots were fungible. For 2021, as we slowly go back to physical learning, I hope classio can be of use to you. Good luck in the upcoming semester!",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"Best wishes,",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"Ekim",Object(z.jsx)(Z,{href:"https://www.linkedin.com/in/ekim-karabey/",target:"_blank",children:" (LinkedIn)"}),Object(z.jsx)(Z,{href:"https://github.com/Ekimerton",target:"_blank",children:" (Github)"})]})]})}var Q=n(28),V=n.n(Q),X=n(76),$=function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var a,c=Object(d.a)(n[t],2),r=c[0],s=c[1],i=[],l=s[0],o=Object(X.a)(s.slice(1));try{for(o.s();!(a=o.n()).done;){var u=a.value;j=u.timeslots,h=l.timeslots,A()(j).differenceWith(h,A.a.isEqual).isEmpty()?l.code+=", "+u.code:(i.push(l),l=u)}}catch(b){o.e(b)}finally{o.f()}i.push(l),e[r]=i}var j,h;return e},ee=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return n===t.length?a.push(c):t[n].forEach((function(r){return e(t,n+1,a,[].concat(Object(u.a)(c),[r]))})),a},te=["Mo","Tu","We","Th","Fr"],ne=function(e){if(0===e.length||1===e.length)return!0;for(var t=1;t<e.length;t++){var n=e[t-1];if(e[t].start_time<n.end_time)return!1}return!0},ae=function(e){for(var t={Early:0,"Mid-Day":0,Late:0},n=0,a=Object.values(e);n<a.length;n++){var c,r=a[n],s=Object(X.a)(r);try{for(s.s();!(c=s.n()).done;){var i=c.value;i.start_time<"10:30"?t.Early++:i.start_time<"3:30"?t["Mid-Day"]++:t.Late++}}catch(l){s.e(l)}finally{s.f()}}return Object.entries(t).reduce((function(e,t){return e[1]>t[1]?e:t}))[0]},ce=function(e){if(0===e.length||1===e.length)return 0;for(var t=0,n=1;n<e.length;n++){var a=e[n-1],c=e[n],r=V()(a.end_time,V.a.HTML5_FMT.TIME),s=V()(c.start_time,V.a.HTML5_FMT.TIME);t+=V.a.duration(s.diff(r)).asHours()}return t},re=function(e,t){if(0===e.length)return!0;if(1===e.length)return!(t.end_time>e[0].start_time&&e[0].end_time>t.start_time);for(var n,a=0,c=e.length-1;;){if(e[n=Math.floor((c+a)/2)].end_time===t.start_time){n++;break}if(e[n].end_time>t.start_time){if(a>(c=n-1))break}else if((a=n+1)>c){n++;break}}return n===e.length||t.end_time<=e[n].start_time},se=j.a.Paragraph,ie=j.a.Title,le=h.a.RangePicker,oe=b.a.Step,ue=m.a.Option;function de(e){return"Meals - ".concat(10-e," : Time - ").concat(e)}var je=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],j=s[1],h=Object(a.useState)("2021 Fall"),F=Object(d.a)(h,2),N=F[0],L=F[1],E=Object(a.useState)([]),H=Object(d.a)(E,2),W=H[0],D=H[1],P=Object(a.useState)([]),R=Object(d.a)(P,2),U=R[0],G=R[1],J=Object(a.useState)(!1),Y=Object(d.a)(J,2),Z=Y[0],Q=Y[1],je=Object(a.useState)(-1),he=Object(d.a)(je,2),be=he[0],me=he[1],fe=Object(a.useState)([]),Oe=Object(d.a)(fe,2),pe=Oe[0],ge=Oe[1],xe=Object(a.useState)(!1),ve=Object(d.a)(xe,2),ye=ve[0],we=ve[1],ke=Object(a.useState)([V()("11:30","HH:mm"),V()("12:30","HH:mm")]),_e=Object(d.a)(ke,2),Te=_e[0],Se=_e[1],Ce=Object(a.useState)([V()("18:30","HH:mm"),V()("19:30","HH:mm")]),Me=Object(d.a)(Ce,2),Fe=Me[0],Ie=Me[1],Ne=Object(a.useState)(6),Ae=Object(d.a)(Ne,2),Le=Ae[0],Ee=Ae[1],ze=Le>=5?"":"icon-wrapper-active",He=Le>=5?"icon-wrapper-active":"",We=function(e){var t=Object(u.a)(U);t.unshift(e),G(t)};Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://classio-api.herokuapp.com/course",{params:{semester:N}});case 3:t=e.sent,n=t.data.course_codes,a=[],n.forEach((function(e){a.push({value:e})})),c(a),Q(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),f.b.error("Unable to fetch classes. (try refreshing)"),Q(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Q(!0),e()}),[N]);var Be=function(e){var t=Object(u.a)(W),n=Object(u.a)(U),a=t.indexOf(e);t.splice(a,1),n.splice(a,1),D(t),G(n)};return Object(z.jsx)("div",{className:"App",children:Object(z.jsx)("header",{className:"App-header",children:Object(z.jsxs)("div",{style:{maxWidth:"100%",width:800,padding:10},children:[Object(z.jsx)(O.a,{style:{borderRadius:10,padding:20,margin:5},message:"Update!",description:"Bundling timeslots has increased performance significantly! A big thanks to u/queensuthrowaway12.",type:"info",showIcon:!0,closable:!0}),Object(z.jsx)("div",{className:"App-section",style:{fontSize:14},children:Object(z.jsx)(K,{})}),Object(z.jsxs)("div",{className:"App-section",children:[Object(z.jsxs)("div",{style:{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginBottom:20,display:"flex"},children:[Object(z.jsxs)(m.a,{defaultValue:"2021 Fall",size:"large",style:{flex:.3,marginRight:10},onChange:function(e){return function(e){me(-1),L(e),j(""),D([]),G([]),ge([])}(e)},children:[Object(z.jsx)(ue,{value:"2022 Winter",children:"Winter 2022"}),Object(z.jsx)(ue,{value:"2021 Fall",children:"Fall 2021"}),Object(z.jsx)(ue,{value:"2021 Winter",children:"Winter 2021"}),Object(z.jsx)(ue,{value:"2020 Fall",children:"Fall 2020"})]}),Object(z.jsx)(p.a,{allowClear:!0,disabled:Z,value:i,options:n,loading:Z,style:{flex:1},onSelect:function(e){!function(e){if(W.includes(e))f.b.warning("You can't select the same class twice!");else{var t=Object(u.a)(W);t.unshift(e),D(t),j("")}}(e)},onSearch:function(){},onChange:j,filterOption:function(e,t){return-1!==t.value.toUpperCase().indexOf(e.toUpperCase())},children:Object(z.jsx)(g.a,{size:"large",placeholder:Z?"Loading courses...":"Enter course code",disabled:Z})}),Object(z.jsx)(x.a,{style:{marginLeft:10},type:"primary",size:"large",icon:Object(z.jsx)(T.a,{}),onClick:function(){return we(!ye)}})]}),Object(z.jsxs)(se,{children:["Selected ",Object(z.jsx)("b",{children:U.length})," course(s)"]}),Object(z.jsx)("div",{className:"App-horizontal-scroll",children:W.map((function(e){return Object(z.jsx)(B,{onDelete:Be,code:e,onAdd:We,semester:N},e)}))}),ye&&Object(z.jsxs)("div",{style:{marginBottom:20},children:[Object(z.jsx)(v.a,{plain:!0,children:"Advanced Options"}),Object(z.jsxs)(y.a,{gutter:[10,10],children:[Object(z.jsxs)(w.a,{flex:1,children:[Object(z.jsx)(ie,{level:5,children:"Lunch Time"}),Object(z.jsx)(le,{format:"hh:mm",minuteStep:15,allowClear:!1,size:"large",picker:"time",showNow:!0,value:Te,style:{width:"100%"},onChange:function(e){Se(e)}})]}),Object(z.jsxs)(w.a,{flex:1,children:[Object(z.jsx)(ie,{level:5,children:"Dinner Time"}),Object(z.jsx)(le,{minuteStep:15,allowClear:!1,format:"hh:mm",size:"large",picker:"time",style:{width:"100%"},value:Fe,showNow:!0,onChange:function(e){Ie(e)}})]})]}),Object(z.jsxs)("div",{style:{marginTop:10},children:[Object(z.jsx)(ie,{level:5,children:"Score Importance"}),Object(z.jsxs)("div",{className:"icon-wrapper",children:[Object(z.jsx)(S.a,{className:ze}),Object(z.jsx)(k.a,{onChange:function(e){return Ee(e)},value:Le,min:0,max:10,tipFormatter:de}),Object(z.jsx)(C.a,{className:He})]})]})]}),Object(z.jsx)(x.a,{style:{marginTop:0},type:"primary",block:!0,size:"large",disabled:0===U.length,onClick:function(){ge([]),me(0);var e=function(e){var t,n=[],a=Object(X.a)(e);try{for(a.s();!(t=a.n()).done;){var c=t.value,r=A.a.filter(c.sections,(function(e){return e.timeslots.length>0})),s=A.a.groupBy(r,(function(e){return e.kind})),i=$(s),l=Object.values(i);n=n.concat(l)}}catch(o){a.e(o)}finally{a.f()}return n}(U);me(1);var t=function(e){var t,n=[],a=Object(X.a)(e);try{for(a.s();!(t=a.n()).done;){var c,r=t.value,s=A.a.flatMap(r,(function(e){return{courseCode:e.course_code,kind:e.kind,code:e.code}})),i=A.a.flatMap(r,(function(e){return e.timeslots})),l=A.a.groupBy(i,(function(e){return e.day})),o=!0,u=Object(X.a)(te);try{for(u.s();!(c=u.n()).done;){var d=c.value;if(l[d]=A.a.sortBy(l[d],"start_time"),!(o=o&&ne(l[d])))break}}catch(j){u.e(j)}finally{u.f()}o&&n.push({classes:s,days:l})}}catch(j){a.e(j)}finally{a.f()}return n}(ee(e));me(2);var n=function(e,t,n,a){var c={start_time:t[0].format("hh:mm"),end_time:t[1].format("hh:mm")},r={start_time:n[0].format("hh:mm"),end_time:n[1].format("hh:mm")},s=(10-a)/10*2,i=a/10*2;return e.map((function(e){for(var t={total:0,lunch:0,dinner:0,offTime:0,type:"late"},n=0,a=Object.values(e.days);n<a.length;n++){var l=a[n];t.offTime+=ce(l),t.lunch+=re(l,c)?1:0,t.dinner+=re(l,r)?1:0}return t.type=ae(e.days),t.total=10-(5-t.lunch)*s-(5-t.dinner)*s-Math.round(t.offTime*i),{classes:e.classes,timetable:e.days,scores:t}}))}(t,Te,Fe,Le),a=A.a.sortBy(n,(function(e){return e.scores.total})).reverse();0===a.length?f.b.error("Unable to generate timetables due to a time conflict!"):f.b.success("Finished generating ".concat(a.length," timetable(s)!")),ge(a),me(3)},children:"Generate Timetables"})]}),Object(z.jsxs)("div",{className:"App-section",style:{textAlign:"center"},children:[Object(z.jsxs)(b.a,{size:"small",current:be,children:[Object(z.jsx)(oe,{title:"Parsing",icon:0===be&&Object(z.jsx)(M.a,{})}),Object(z.jsx)(oe,{title:"Generating",icon:1===be&&Object(z.jsx)(M.a,{})}),Object(z.jsx)(oe,{title:"Scoring",icon:2===be&&Object(z.jsx)(M.a,{})})]}),Object(z.jsxs)(v.a,{plain:!0,children:["Showing ",pe.length," option(s)"]}),Object(z.jsx)(_.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:10},style:{padding:0},dataSource:pe,renderItem:function(e){return Object(z.jsx)(_.b.Item,{style:{paddingLeft:0,paddingRight:0},children:Object(z.jsx)(q,{timetable:e})},Math.floor(1e4*Math.random()))}}),","]})]})})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,200)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(je,{})}),document.getElementById("root")),he()}},[[181,1,2]]]);
//# sourceMappingURL=main.b8e95fc7.chunk.js.map