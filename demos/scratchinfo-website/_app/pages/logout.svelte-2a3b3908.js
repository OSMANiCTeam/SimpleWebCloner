import{S as A,i as T,s as q,e as m,t as d,j as w,c as _,a as v,g as L,d as e,l as x,b as $,f as u,G as E,H as B,Z as C,I as k,u as F}from"../chunks/vendor-df32a748.js";function G(n){let s,r,l,f,p,i,h,c,a,y,b,H;return{c(){s=m("h1"),r=d("Log out"),l=w(),f=m("hr"),p=w(),i=m("p"),h=d("Are you sure that you want to log out?"),c=w(),a=m("button"),y=d("Log out"),this.h()},l(t){s=_(t,"H1",{class:!0});var o=v(s);r=L(o,"Log out"),o.forEach(e),l=x(t),f=_(t,"HR",{}),p=x(t),i=_(t,"P",{});var S=v(i);h=L(S,"Are you sure that you want to log out?"),S.forEach(e),c=x(t),a=_(t,"BUTTON",{type:!0,class:!0});var j=v(a);y=L(j,"Log out"),j.forEach(e),this.h()},h(){$(s,"class","text-3xl font-bold mb-2"),$(a,"type","button"),$(a,"class","btn-primary")},m(t,o){u(t,s,o),E(s,r),u(t,l,o),u(t,f,o),u(t,p,o),u(t,i,o),E(i,h),u(t,c,o),u(t,a,o),E(a,y),b||(H=B(a,"click",function(){C(n[0]())&&n[0]().apply(this,arguments)}),b=!0)},p(t,[o]){n=t},i:k,o:k,d(t){t&&e(s),t&&e(l),t&&e(f),t&&e(p),t&&e(i),t&&e(c),t&&e(a),b=!1,H()}}}function I(n,s,r){let l=function(){};return F(()=>{r(0,l=function(){window.localStorage.clear(),window.location.href="/"})}),[l]}class N extends A{constructor(s){super();T(this,s,I,G,q,{})}}export{N as default};