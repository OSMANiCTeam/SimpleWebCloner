import{S as I,i as N,s as R,e as m,t as w,j as y,c as _,a as S,g as k,d as r,l as T,b as c,f as u,G as j,R as P,H as x,T as W,I as C,U as Y}from"../chunks/vendor-df32a748.js";function q(i){let a,f,l,n,p,h,t,d,o,b,v,U;return{c(){a=m("h1"),f=w("Welcome to Scratchinfo!"),l=y(),n=m("p"),p=w(`This is a small project. You can use the search bar down below to search for a Scratch user, and
  it will return some information.`),h=y(),t=m("input"),d=y(),o=m("button"),b=w("search"),this.h()},l(e){a=_(e,"H1",{class:!0});var s=S(a);f=k(s,"Welcome to Scratchinfo!"),s.forEach(r),l=T(e),n=_(e,"P",{});var $=S(n);p=k($,`This is a small project. You can use the search bar down below to search for a Scratch user, and
  it will return some information.`),$.forEach(r),h=T(e),t=_(e,"INPUT",{placeholder:!0,type:!0,class:!0,id:!0}),d=T(e),o=_(e,"BUTTON",{class:!0});var E=S(o);b=k(E,"search"),E.forEach(r),this.h()},h(){c(a,"class","text-3xl font-bold mb-2"),c(t,"placeholder","Search a User"),c(t,"type","text"),c(t,"class","p-2 text-black rounded pl-3"),c(t,"id","user"),c(o,"class","btn-primary")},m(e,s){u(e,a,s),j(a,f),u(e,l,s),u(e,n,s),j(n,p),u(e,h,s),u(e,t,s),P(t,i[0]),u(e,d,s),u(e,o,s),j(o,b),v||(U=[x(t,"keypress",i[1]),x(t,"input",i[2]),x(o,"click",W(i[3]))],v=!0)},p(e,[s]){s&1&&t.value!==e[0]&&P(t,e[0])},i:C,o:C,d(e){e&&r(a),e&&r(l),e&&r(n),e&&r(h),e&&r(t),e&&r(d),e&&r(o),v=!1,Y(U)}}}function H(i){i.length>0&&(window.location.href="/users/"+i)}function B(i,a,f){let l="";function n(t){t.charCode===13&&H(l)}function p(){l=this.value,f(0,l)}return[l,n,p,()=>H(l)]}class K extends I{constructor(a){super();N(this,a,B,q,R,{})}}export{K as default};
