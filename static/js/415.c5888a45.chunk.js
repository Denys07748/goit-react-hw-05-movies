"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4672:function(n,t,r){r.d(t,{Z:function(){return h}});var e,a,c,o=r(7689),u=r(1087),i=r(168),s=r(4926),p=s.Z.ul(e||(e=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  padding: 10px 0;\n  list-style: none;\n"]))),f=s.Z.li(a||(a=(0,i.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n\n  & img {\n    width: 197px;\n  }\n"]))),d=s.Z.h5(c||(c=(0,i.Z)(["\n  padding: 4px;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: black;\n"]))),l=r(184),h=function(n){var t=n.movies,r=n.isFromHome,e=(0,o.TH)();return(0,l.jsx)(p,{children:t.map((function(n){var t=n.id,a=n.title,c=n.backdrop_path,o="".concat(r?"movies/":"").concat(t);return(0,l.jsx)(f,{children:(0,l.jsxs)(u.rU,{to:o,state:{from:e},children:[(0,l.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w200/".concat(c):"https://via.placeholder.com/200x120",alt:a}),(0,l.jsx)(d,{children:a})]})},t)}))})}},5415:function(n,t,r){r.r(t);var e=r(5861),a=r(9439),c=r(7757),o=r.n(c),u=r(6795),i=r(4672),s=r(2791),p=r(1181),f=r(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1],d=(0,s.useState)(""),l=(0,a.Z)(d,2),h=l[0],m=l[1];(0,s.useEffect)((function(){v()}),[]);var v=function(){var n=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Df();case 3:if(0!==(t=n.sent).results.length){n.next=6;break}return n.abrupt("return",u.Am.error("Sorry, there are no images matching your search query. Please try again."));case 6:c(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),m(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(i.Z,{movies:r,isFromHome:!0}),h&&u.Am.error("Oops, an error occurred while loading the page. Please try reloading the page")]})}},1181:function(n,t,r){r.d(t,{Df:function(){return s},Pg:function(){return f},R4:function(){return d},Wf:function(){return p}});var e=r(5861),a=r(7757),c=r.n(a),o=r(1243),u="https://api.themoviedb.org/3/",i="f2fae09050301062329c7f99a1fba61d",s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/").concat(r,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.c5888a45.chunk.js.map