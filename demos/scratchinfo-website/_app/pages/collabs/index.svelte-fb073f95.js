import{S as G,i as K,s as O,e as h,t as T,j as y,c as d,a as C,g as $,d as t,l as S,b as c,f,G as b,R as q,H as w,T as z,I as A,U as F}from"../../chunks/vendor-df32a748.js";function J(r){let i,_,o,n,m,v,s,a,I,p,P,k,x,E,u,U,j,B;return{c(){i=h("h1"),_=T("Scratchinfo Collabs"),o=y(),n=h("p"),m=T("Search for a studio collab:"),v=y(),s=h("div"),a=h("input"),I=y(),p=h("button"),P=T("search"),k=y(),x=h("br"),E=y(),u=h("a"),U=T("Create a Collab"),this.h()},l(l){i=d(l,"H1",{class:!0});var e=C(i);_=$(e,"Scratchinfo Collabs"),e.forEach(t),o=S(l),n=d(l,"P",{});var H=C(n);m=$(H,"Search for a studio collab:"),H.forEach(t),v=S(l),s=d(l,"DIV",{class:!0});var N=C(s);a=d(N,"INPUT",{placeholder:!0,type:!0,id:!0,class:!0}),I=S(N),p=d(N,"BUTTON",{class:!0});var R=C(p);P=$(R,"search"),R.forEach(t),N.forEach(t),k=S(l),x=d(l,"BR",{}),E=S(l),u=d(l,"A",{class:!0,href:!0});var V=C(u);U=$(V,"Create a Collab"),V.forEach(t),this.h()},h(){c(i,"class","text-3xl font-bold mb-2"),c(a,"placeholder","Search a collab"),c(a,"type","text"),c(a,"id","collab"),c(a,"class","h-12 rounded-l pl-2 text-gray-900"),c(p,"class","btn-primary m-0 rounded-l-none h-12"),c(s,"class","flex"),c(u,"class","btn-primary"),c(u,"href","/collabs/create")},m(l,e){f(l,i,e),b(i,_),f(l,o,e),f(l,n,e),b(n,m),f(l,v,e),f(l,s,e),b(s,a),q(a,r[0]),b(s,I),b(s,p),b(p,P),f(l,k,e),f(l,x,e),f(l,E,e),f(l,u,e),b(u,U),j||(B=[w(a,"keypress",r[1]),w(a,"input",r[2]),w(p,"click",z(r[3]))],j=!0)},p(l,[e]){e&1&&a.value!==l[0]&&q(a,l[0])},i:A,o:A,d(l){l&&t(i),l&&t(o),l&&t(n),l&&t(v),l&&t(s),l&&t(k),l&&t(x),l&&t(E),l&&t(u),j=!1,F(B)}}}function D(r){r.length>0&&!isNaN(r)&&(window.location.href="/collabs/"+r)}function L(r,i,_){let o="";function n(s){s.charCode===13&&D(o)}function m(){o=this.value,_(0,o)}return[o,n,m,()=>D(o)]}class Q extends G{constructor(i){super();K(this,i,L,J,O,{})}}export{Q as default};
