(this["webpackJsonpstarter-restaurant-reservation-front-end"]=this["webpackJsonpstarter-restaurant-reservation-front-end"]||[]).push([[0],{19:function(e,t,r){},27:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(20),s=r.n(c),i=r(5),l=(r(27),r(8)),o=(r(19),r(0));var b=function(){return Object(o.jsx)("nav",{className:"navbar navbar-dark align-items-start p-0",children:Object(o.jsxs)("div",{className:"container-fluid d-flex flex-column flex-sm-row p-0",children:[Object(o.jsx)(l.b,{className:"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0",to:"/",children:Object(o.jsx)("div",{className:"sidebar-brand-text mx-3",id:"top",children:Object(o.jsx)("span",{children:"Periodic Tables"})})}),Object(o.jsx)("hr",{className:"sidebar-divider my-0"}),Object(o.jsxs)("ul",{className:"nav navbar-nav text-light flex-row flex-sm-column",id:"accordionSidebar",children:[Object(o.jsx)("li",{className:"nav-item  ",children:Object(o.jsxs)(l.b,{className:"nav-link",to:"/dashboard",children:[Object(o.jsx)("span",{className:"oi oi-dashboard"}),"\xa0Dashboard"]})}),Object(o.jsx)("li",{className:"nav-item pl-2",children:Object(o.jsxs)(l.b,{className:"nav-link",to:"/search",children:[Object(o.jsx)("span",{className:"oi oi-magnifying-glass"}),"\xa0Search"]})}),Object(o.jsx)("li",{className:"nav-item pl-2",children:Object(o.jsxs)(l.b,{className:"nav-link",to:"/reservations/new",children:[Object(o.jsx)("span",{className:"oi oi-plus"}),"\xa0New Reservation"]})}),Object(o.jsx)("li",{className:"nav-item pl-2",children:Object(o.jsxs)(l.b,{className:"nav-link",to:"/tables/new",children:[Object(o.jsx)("span",{className:"oi oi-layers"}),"\xa0New Table"]})})]})]})})},u=r(2),j=r(4),d=r(3),h=/\d\d\d\d-\d\d-\d\d/;function m(e){return"".concat(e.getFullYear().toString(10),"-").concat((e.getMonth()+1).toString(10).padStart(2,"0"),"-").concat(e.getDate().toString(10).padStart(2,"0"))}function O(e){return e.match(h)[0]}function p(){return m(new Date)}function x(e){var t=e.split("-"),r=Object(d.a)(t,3),n=r[0],a=r[1],c=r[2],s=new Date(n,a-=1,c);return s.setMonth(s.getMonth()),s.setDate(s.getDate()-1),m(s)}function v(e){var t=e.split("-"),r=Object(d.a)(t,3),n=r[0],a=r[1],c=r[2],s=new Date(n,a-=1,c);return s.setMonth(s.getMonth()),s.setDate(s.getDate()+1),m(s)}function f(e){return e.reservation_date=O(e.reservation_date),e}function N(e){return Array.isArray(e)?e.map(f):f(e)}var y="http://localhost:5001",w=new Headers;function g(e,t,r){return _.apply(this,arguments)}function _(){return(_=Object(j.a)(Object(u.a)().mark((function e(t,r,n){var a,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,r);case 3:if(204!==(a=e.sent).status){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,a.json();case 8:if(!(c=e.sent).error){e.next=11;break}return e.abrupt("return",Promise.reject({message:c.error}));case 11:return e.abrupt("return",c.data);case 14:if(e.prev=14,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=19;break}throw console.error(e.t0.stack),e.t0;case 19:return e.abrupt("return",Promise.resolve(n));case 20:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function k(){return(k=Object(j.a)(Object(u.a)().mark((function e(t,r){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(y,"/reservations")),Object.entries(t).forEach((function(e){var t=Object(d.a)(e,2),r=t[0],a=t[1];return n.searchParams.append(r,a.toString())})),e.next=4,g(n,{headers:w,signal:r},[]).then(N).then(N);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(Object(u.a)().mark((function e(t,r){var n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(y,"/reservations")),a={method:"POST",headers:w,body:JSON.stringify({data:t}),signal:r},e.next=4,g(n,a,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return H.apply(this,arguments)}function H(){return(H=Object(j.a)(Object(u.a)().mark((function e(t,r){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(y,"/reservations/").concat(t)),e.next=3,g(n,{signal:r},{}).then(N).then(N);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return F.apply(this,arguments)}function F(){return(F=Object(j.a)(Object(u.a)().mark((function e(t,r){var n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(y,"/reservations/").concat(t.reservation_id)),a={method:"PUT",headers:w,body:JSON.stringify({data:t})},e.next=4,g(n,a,t).then(N).then(N);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(Object(u.a)().mark((function e(t,r){var n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(y,"/tables")),a={method:"POST",headers:w,body:JSON.stringify({data:t}),signal:r},e.next=4,g(n,a,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return L.apply(this,arguments)}function L(){return(L=Object(j.a)(Object(u.a)().mark((function e(t){var r,n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL("".concat(y,"/tables")),n={headers:w,signal:t},e.next=4,g(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t,r){return P.apply(this,arguments)}function P(){return(P=Object(j.a)(Object(u.a)().mark((function e(t,r,n){var a,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URL("".concat(y,"/tables/").concat(t,"/seat/")),c={method:"PUT",headers:w,body:JSON.stringify({data:{reservation_id:r}}),signal:n},e.next=4,g(a,c,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return q.apply(this,arguments)}function q(){return(q=Object(j.a)(Object(u.a)().mark((function e(t,r){var n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(y,"/reservations/").concat(t,"/status")),a={method:"PUT",headers:w,body:JSON.stringify({data:{status:"cancelled"}}),signal:r},e.next=4,g(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(Object(u.a)().mark((function e(t,r){var n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(y,"/tables/").concat(t,"/seat/")),a={method:"DELETE",headers:w,body:JSON.stringify({data:t}),signal:r},e.next=4,g(n,a,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t){return I.apply(this,arguments)}function I(){return(I=Object(j.a)(Object(u.a)().mark((function e(t,r){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(y,"/reservations?mobile_number=").concat(t)),e.next=3,g(n,{signal:r}).then(N).then(N);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w.append("Content-Type","application/json");var W=function(){return new URLSearchParams(Object(i.h)().search)};var z=function(e){var t=e.error;return t&&Object(o.jsxs)("div",{className:"alert alert-danger m-2",children:["Error: ",t.message]})},G=function(e){var t=e.reservation_id,r=Object(n.useState)(null),a=Object(d.a)(r,2),c=a[0],s=a[1],i=function(){var e=Object(j.a)(Object(u.a)().mark((function e(r){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),s(null),n=new AbortController,!window.confirm("Do you want to cancel this reservation? This cannot be undone.")){e.next=14;break}return e.prev=5,e.next=8,M(t,n.signal);case 8:window.location.reload(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),"AbortError"!==e.t0.name&&s(e.t0);case 14:return e.abrupt("return",(function(){return n.abort()}));case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)(z,{error:c}),Object(o.jsx)("button",{className:"btn btn-secondary","data-reservation-id-cancel":t,onClick:i,children:"Cancel"})]})},K=function(e){var t=e.reservations,r=e.date,n=t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:e.reservation_id}),Object(o.jsx)("td",{children:e.first_name}),Object(o.jsx)("td",{children:e.last_name}),Object(o.jsx)("td",{children:e.mobile_number}),Object(o.jsx)("td",{children:e.reservation_date}),Object(o.jsx)("td",{children:e.reservation_time}),Object(o.jsx)("td",{children:e.people}),Object(o.jsx)("td",{"data-reservation-id-status":e.reservation_id,children:e.status}),Object(o.jsx)("td",{children:"booked"===e.status&&Object(o.jsx)("a",{className:"btn btn-success",href:"/reservations/".concat(e.reservation_id,"/seat"),children:"Seat"})}),"booked"===e.status||"seated"===e.status?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"btn btn-primary",href:"/reservations/".concat(e.reservation_id,"/edit"),children:"Edit"})}),Object(o.jsx)("td",{children:Object(o.jsx)(G,{reservation_id:e.reservation_id})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{}),Object(o.jsx)("td",{})]})]},e.reservation_id)}));return t.length>0?Object(o.jsx)("div",{className:"table table-striped table-responsive table-sm",children:Object(o.jsxs)("table",{className:"table table-hover",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"First Name"}),Object(o.jsx)("th",{scope:"col",children:"Last Name"}),Object(o.jsx)("th",{scope:"col",children:"Mobile Number"}),Object(o.jsx)("th",{scope:"col",children:"Date"}),Object(o.jsx)("th",{scope:"col",children:"Time"}),Object(o.jsx)("th",{scope:"col",children:"Number of people"}),Object(o.jsx)("th",{scope:"col",children:"Status"}),Object(o.jsx)("th",{scope:"col"}),Object(o.jsx)("th",{scope:"col"}),Object(o.jsx)("th",{scope:"col"})]})}),Object(o.jsx)("tbody",{children:n})]})}):Object(o.jsxs)("div",{className:"container alert alert-dark",role:"alert",style:{minWidth:"100%"},children:[" ","No reservations found for ".concat(r,".")]})},Q=r(7),V=r(22),X=["table","clickHandler","error"],Z=function(e){var t=e.table,r=e.clickHandler,n=e.error,a=Object(V.a)(e,X);return t.reservation_id&&Object(o.jsxs)("div",{children:[Object(o.jsx)(z,{error:n}),Object(o.jsx)("button",Object(Q.a)(Object(Q.a)({},a),{},{className:"btn btn-warning",type:"button",onClick:function(e){return r(e,t.table_id)},children:"Finish"}))]})},$=function(e){var t=e.tables,r=e.clickHandler,n=e.error,a=t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:e.table_name}),Object(o.jsx)("td",{children:e.capacity}),Object(o.jsx)("td",{"data-table-id-status":e.table_id,children:null===e.reservation_id?"Free":"Occupied"}),Object(o.jsx)("td",{children:Object(o.jsx)(Z,{"data-table-id-finish":e.table_id,table:e,clickHandler:r,error:n})})]},e.table_id)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:"Tables"}),Object(o.jsx)("div",{className:"table table-striped table-responsive table-sm",children:Object(o.jsxs)("table",{className:"table table-hover",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Table name"}),Object(o.jsx)("th",{scope:"col",children:"Capacity"}),Object(o.jsx)("th",{scope:"col",children:"Table status"}),Object(o.jsx)("th",{scope:"col",children:"Action"})]})}),Object(o.jsx)("tbody",{children:a})]})})]})};var ee=function(e){var t=e.date,r=Object(i.g)(),a=W(),c=Object(i.j)(),s=Object(n.useState)([]),l=Object(d.a)(s,2),b=l[0],h=l[1],m=Object(n.useState)(null),O=Object(d.a)(m,2),f=O[0],N=O[1],y=Object(n.useState)(t),w=Object(d.a)(y,2),g=w[0],_=w[1],S=Object(n.useState)(null),C=Object(d.a)(S,2),D=C[0],H=C[1],E=Object(n.useState)([]),F=Object(d.a)(E,2),A=F[0],T=F[1];function L(){var e=new AbortController;return N(null),function(e,t){return k.apply(this,arguments)}({date:g},e.signal).then(h).catch(N),R(e.signal).then(T).catch(H),function(){return e.abort()}}Object(n.useEffect)(L,[g]),Object(n.useEffect)((function(){!function(){var e=a.get("date");_(e||p())}()}),[a,c]);var U=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t,r){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),H(null),n=new AbortController,!window.confirm("Is this table ready to seat new guests? This cannot be undone.")){e.next=15;break}return e.prev=5,e.next=8,J(r,n.signal);case 8:L(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),console.error(e.t0),H(e.t0);case 15:n.abort();case 16:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t,r){return e.apply(this,arguments)}}();return Object(o.jsxs)("main",{className:"col-md-10 ms-sm-auto col-lg-10 px-md-4",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"h1",children:"Dashboard"})}),Object(o.jsx)("div",{className:"btn-toolbar mb-2 mb-md-0",children:Object(o.jsxs)("div",{className:"btn-group me-2",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){r.push("/dashboard?date=".concat(x(g))),_(x(g))},children:"Previous day"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){r.push("/dashboard?date=".concat(p())),_(p())},children:"Today"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){r.push("/dashboard?date=".concat(v(g))),_(v(g))},children:"Next day"})]})})]}),Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsxs)("h4",{className:"col text-center text-nowrap",children:["Reservations for ",g]}),Object(o.jsx)(z,{error:f}),b?Object(o.jsx)(K,{reservations:b,date:g}):"Loading..."]}),Object(o.jsx)("div",{className:"row mb-3",children:A?Object(o.jsx)($,{tables:A,error:D,clickHandler:U}):"Loading..."})]})},te=r(12),re=function(e){var t=e.reservation,r=e.submitHandler,n=e.changeHandler,a=e.cancelHandler;return Object(o.jsx)("main",{children:Object(o.jsxs)("form",{onSubmit:r,children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"first_name",children:[" ","First Name:"]}),Object(o.jsx)("input",{className:"form-control",type:"text",id:"first_name",name:"first_name",required:!0,value:t.first_name,onChange:n,placeholder:"Enter guest's first name..."})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"last_name",children:[" ","Last Name:"]}),Object(o.jsx)("input",{className:"form-control",type:"text",id:"last_name",name:"last_name",required:!0,value:t.last_name,onChange:n,placeholder:"Enter guest's last name..."})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"mobile_number",children:[" ","Phone number:"]}),Object(o.jsx)("input",{className:"form-control",type:"tel",id:"mobile_number",name:"mobile_number",required:!0,value:t.mobile_number,onChange:n,placeholder:"123-456-7890"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"reservation_date",children:[" ","Reservation date:"]}),Object(o.jsx)("input",{className:"form-control",type:"date",id:"reservation_date",name:"reservation_date",required:!0,value:t.reservation_date,onChange:n,placeholder:"YYYY-MM-DD",pattern:"\\d{4}-\\d{2}-\\d{2}"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"reservation_time",children:[" ","Reservation time:"]}),Object(o.jsx)("input",{className:"form-control",type:"time",id:"reservation_time",name:"reservation_time",required:!0,value:t.reservation_time,onChange:n,placeholder:"HH:MM",pattern:"[0-9]{2}:[0-9]{2}"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"people",children:[" ","Number of guests:"]}),Object(o.jsx)("input",{className:"form-control",type:"number",id:"people",name:"people",required:!0,value:t.people,onChange:n,placeholder:1,min:1})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:a,children:"Cancel"})]})]})})},ne=function(){var e=Object(i.g)(),t=Object(n.useState)(Object(Q.a)({},{first_name:"",last_name:"",mobile_number:"",reservation_date:"",reservation_time:"",people:""})),r=Object(d.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(null),l=Object(d.a)(s,2),b=l[0],h=l[1],m=function(){var t=Object(j.a)(Object(u.a)().mark((function t(r){var n,c;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),h(null),n=new AbortController,a.people=Number(a.people),t.prev=4,t.next=7,S(a,n.signal);case 7:c=t.sent,e.push("/dashboard?date=".concat(O(c.reservation_date))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),"AbortError"!==t.t0.name&&h(t.t0);case 14:return t.abrupt("return",(function(){return n.abort()}));case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"mb-3 pt-3",children:"Create Reservation"}),Object(o.jsx)(z,{error:b}),Object(o.jsx)(re,{reservation:a,submitHandler:m,changeHandler:function(e){var t=e.target,r=t.name,n=t.value;"mobile_number"===r&&(n=n.replace(/\D/g,"")),c((function(e){return Object(Q.a)(Object(Q.a)({},e),{},Object(te.a)({},r,n))}))},cancelHandler:function(){e.goBack()}})]})},ae=function(){var e=Object(i.i)().reservation_id,t=Object(i.g)(),r=Object(n.useState)(""),a=Object(d.a)(r,2),c=a[0],s=a[1],l=Object(n.useState)([]),b=Object(d.a)(l,2),h=b[0],m=b[1],O=Object(n.useState)(null),p=Object(d.a)(O,2),x=p[0],v=p[1];Object(n.useEffect)((function(){var e=new AbortController;return v(null),R(e.signal).then(m).catch(v),function(){return e.abort()}}),[e]);var f=function(){var r=Object(j.a)(Object(u.a)().mark((function r(n){var a,s,i;return Object(u.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),v(null),a=new AbortController,s=Number(c.table_id),i=Number(e),r.prev=5,r.next=8,U(s,i,a.signal);case 8:t.push("/"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(5),"AbortError"!==r.t0.name&&v(r.t0);case 14:return r.abrupt("return",(function(){return a.abort()}));case 15:case"end":return r.stop()}}),r,null,[[5,11]])})));return function(e){return r.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(z,{error:x})}),Object(o.jsx)("div",{className:"card mt-3",children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("form",{onSubmit:f,children:[Object(o.jsxs)("h2",{className:"card-title",children:["Seat reservation number ",e]}),Object(o.jsxs)("div",{className:"card-text mb-3",children:[Object(o.jsx)("label",{htmlFor:"table_id",className:"form-label",children:"Table number:"}),Object(o.jsxs)("select",{id:"table_id",name:"table_id",onChange:function(e){var t=e.target,r=t.name,n=t.value;s((function(e){return Object(Q.a)(Object(Q.a)({},e),{},Object(te.a)({},r,n))}))},value:c.table_id,className:"form-control",children:[Object(o.jsx)("option",{value:"",children:"Select a table"}),h.map((function(e){return Object(o.jsxs)("option",{value:e.table_id,children:[e.table_name," - ",e.capacity]},e.table_id)}))]})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary card-link",children:"Submit"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary card-link",onClick:function(){return t.goBack()},children:"Cancel"})]})})})]})},ce=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(null),s=Object(d.a)(c,2),i=s[0],l=s[1],b=Object(n.useState)([]),h=Object(d.a)(b,2),m=h[0],O=h[1],p=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var n,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(null),n=new AbortController,e.prev=3,e.next=6,Y(r,n.signal);case 6:c=e.sent,O(c),a(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),"AbortError"!==e.t0.name&&l(e.t0);case 14:return e.abrupt("return",(function(){return n.abort()}));case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"col form-group",children:[Object(o.jsxs)("div",{className:"row d-md-flex my-3",children:[Object(o.jsx)("h2",{children:"Find Reservation"}),Object(o.jsx)(z,{error:i})]}),Object(o.jsx)("form",{onSubmit:p,children:Object(o.jsxs)("div",{className:"row input-group mb-3",children:[Object(o.jsx)("input",{type:"tel",className:"form-control",name:"mobile_number",placeholder:"Enter a customer's phone number","aria-label":"mobile_number","aria-describedby":"basic-addon2",required:!0,value:r,onChange:function(e){var t=e.target.value.replace(/\D/g,"");a(t)}}),Object(o.jsx)("button",{className:"btn btn-primary",id:"basic-addon2",type:"submit",children:"Find"})]})})]}),Object(o.jsxs)("div",{className:"container-fluid col",children:[Object(o.jsx)("div",{className:"row d-md-flex mb-3",children:Object(o.jsx)("h4",{children:"Search Result"})}),m.length>0?Object(o.jsx)("div",{className:"row d-md-flex mb-3",children:Object(o.jsx)(K,{reservations:m})}):Object(o.jsx)("div",{className:"row d-md-flex mb-3 alert alert-dark text-center",role:"alert",children:"No reservations found"})]})]})},se=function(){var e=Object(i.g)(),t=Object(i.i)().reservation_id,r=Object(n.useState)(null),a=Object(d.a)(r,2),c=a[0],s=a[1],l=Object(n.useState)(!0),b=Object(d.a)(l,2),h=b[0],m=b[1],p=Object(n.useState)(null),x=Object(d.a)(p,2),v=x[0],f=x[1];Object(n.useEffect)((function(){var e=new AbortController;function r(){return(r=Object(j.a)(Object(u.a)().mark((function r(){var n;return Object(u.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,D(t,e.signal);case 3:n=r.sent,s(n),m(!1),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),"AbortError"!==r.t0.name&&(f(r.t0),m(!1));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){return e.abort()}}),[t]);var N=function(){var t=Object(j.a)(Object(u.a)().mark((function t(r){var n,a;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),f(null),t.next=5;break;case 5:return n=new AbortController,c.people=Number(c.people),t.prev=7,t.next=10,E(c,n.signal);case 10:a=t.sent,e.push("/dashboard?date=".concat(O(a.reservation_date))),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),"AbortError"!==t.t0.name&&f(t.t0);case 17:return t.abrupt("return",(function(){return n.abort()}));case 18:case"end":return t.stop()}}),t,null,[[7,14]])})));return function(e){return t.apply(this,arguments)}}();return h?"Loading...":c?Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:["Edit reservation ",c.reservation_id]}),Object(o.jsx)(z,{error:v}),Object(o.jsx)(re,{reservation:c,changeHandler:function(e){var t=e.target,r=t.name,n=t.value;s(Object(Q.a)(Object(Q.a)({},c),{},Object(te.a)({},r,n)))},submitHandler:N,cancelHandler:function(){e.goBack()}})]}):"Reservation not found."},ie=function(e){var t=e.submitHandler,r=e.cancelHandler,n=e.changeHandler,a=e.formData;return Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)("h2",{className:"mb-3 pt-3",children:"Create New Table"}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"table_name",children:[" ","Table name"]}),Object(o.jsx)("input",{className:"form-control",name:"table_name",id:"table_name",type:"text",required:!0,value:a.table_name,onChange:n,placeholder:"Table name"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{className:"form-label",htmlFor:"capacity",children:"Capacity"}),Object(o.jsx)("input",{className:"form-control",name:"capacity",id:"capacity",type:"number",required:!0,value:a.capacity,onChange:n,placeholder:"1",min:1})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:r,children:"Cancel"})]})]})},le=function(){var e=Object(i.g)(),t=Object(n.useState)(Object(Q.a)({},{table_name:"",capacity:""})),r=Object(d.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(null),l=Object(d.a)(s,2),b=l[0],h=l[1],m=function(){var t=Object(j.a)(Object(u.a)().mark((function t(r){var n;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),h(null),n=new AbortController,a.capacity=Number(a.capacity),t.prev=4,t.next=7,A(a,n.signal);case 7:e.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),h(t.t0);case 13:return t.abrupt("return",(function(){return n.abort()}));case 14:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)("main",{children:[Object(o.jsx)(z,{error:b}),Object(o.jsx)(ie,{submitHandler:m,cancelHandler:function(){e.goBack()},formData:a,changeHandler:function(e){var t=e.target,r=t.name,n=t.value;c((function(e){return Object(Q.a)(Object(Q.a)({},e),{},Object(te.a)({},r,n))}))}})]})};var oe=function(){return Object(o.jsx)("div",{className:"NotFound",children:Object(o.jsx)("h1",{children:"Not Found"})})};var be=function(){return Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{exact:!0,path:"/",children:Object(o.jsx)(i.a,{to:"/dashboard"})}),Object(o.jsx)(i.b,{exact:!0,path:"/reservations",children:Object(o.jsx)(i.a,{to:"/dashboard"})}),Object(o.jsx)(i.b,{path:"/dashboard",children:Object(o.jsx)(ee,{date:p()})}),Object(o.jsx)(i.b,{path:"/reservations/new",children:Object(o.jsx)(ne,{})}),Object(o.jsx)(i.b,{path:"/reservations/:reservation_id/edit",children:Object(o.jsx)(se,{})}),Object(o.jsx)(i.b,{path:"/reservations/:reservation_id/seat",children:Object(o.jsx)(ae,{})}),Object(o.jsx)(i.b,{path:"/tables/new",children:Object(o.jsx)(le,{})}),Object(o.jsx)(i.b,{path:"/search",children:Object(o.jsx)(ce,{})}),Object(o.jsx)(i.b,{children:Object(o.jsx)(oe,{})})]})};var ue=function(){return Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("div",{className:"row h-100",id:"navbar",children:[Object(o.jsx)("div",{className:"col-md-2 side-bar",children:Object(o.jsx)(b,{})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(be,{})})]}),Object(o.jsx)("div",{className:"row h-10",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"col justify-content-between py-3 my-4 border-top",children:Object(o.jsx)("p",{className:"row mb-0 text-muted",children:Object(o.jsx)("a",{href:"#top",children:"Back to top"})})})})})]})};var je=function(){return Object(o.jsx)(i.d,{children:Object(o.jsx)(i.b,{path:"/",children:Object(o.jsx)(ue,{})})})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(je,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5d151c5e.chunk.js.map