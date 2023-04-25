"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{6633:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,i,o=t(7689),c=t(1087),u=t(168),p=t(4926),s=p.Z.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  padding: 10px 0;\n  list-style: none;\n"]))),d=p.Z.li(a||(a=(0,u.Z)(["\n  border: 1px solid grey;\n  border-radius: 4px;\n  background-color: #dfeeee;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.2), 0 8px 10px rgba(0,0,0,0.2);\n\n  :hover {\n    scale: 1.05;\n  }\n\n  > a {\n    text-decoration: none;\n  }\n\n  & img {\n    width: 197px;\n    height: 120px;\n    background-size: cover;\n  }\n"]))),l=p.Z.h5(i||(i=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: black;\n"]))),f=t.p+"static/media/default_img_2.35ea032b9180f9fe07e2.jpg",x=t(184),h=function(n){var e=n.movies,t=(0,o.TH)();return(0,x.jsx)(s,{children:e.map((function(n){var e=n.id,r=n.original_title,a=n.title,i=n.backdrop_path;return(0,x.jsx)(d,{children:(0,x.jsxs)(c.rU,{to:"/movies/".concat(e),state:{from:t},children:[(0,x.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w200/".concat(i):f,alt:r||a}),(0,x.jsx)(l,{children:r||a})]})},e)}))})}},7712:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i=t(5861),o=t(9439),c=t(7757),u=t.n(c),p=t(6795),s=t(2791),d=t(6633),l=t(5705),f=t(6727),x=t(168),h=t(4926),g=h.Z.header(r||(r=(0,x.Z)(["\n    top: 0;\n    left: 0;\n    position: sticky;\n    z-index: 1100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 64px;\n    padding-right: 24px;\n    padding-left: 24px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    color: #fff;\n    background-color: #54c7a4;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=(0,h.Z)(l.l0)(a||(a=(0,x.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n    button {\n        display: inline-block;\n        width: 48px;\n        height: 48px;\n        border: 0;\n        background-size: 40%;\n        background-repeat: no-repeat;\n        background-position: center;\n        opacity: 0.6;\n        transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n        cursor: pointer;\n        outline: none;\n        :hover {\n            opacity: 1;\n        }\n        svg {\n            width: 20px;\n            height: 20px;\n            fill: #217ba5;\n        }\n    }\n    input {\n        display: inline-block;\n        width: 95%;\n        height: 90%;\n        font: inherit;\n        font-size: 20px;\n        border: none;\n        outline: none;\n        padding-left: 4px;\n        padding-right: 4px;\n        margin-left: 10px;\n        ::placeholder {\n            font: inherit;\n            font-size: 18px;\n        }\n    }\n"]))),b=t(6355),v=t(184),y=f.Ry().shape({value:f.Z_().required()}),k=function(n){var e=n.onSubmit;return(0,v.jsx)(g,{children:(0,v.jsx)(l.J9,{initialValues:{value:""},validationSchema:y,onSubmit:function(n,t){var r=t.resetForm,a=n.value.trim();e(a),r()},children:(0,v.jsxs)(m,{autoComplete:"off",autoFocus:!0,children:[(0,v.jsx)("button",{type:"submit","aria-label":"Search",children:(0,v.jsx)(b.U41,{})}),(0,v.jsx)(l.gN,{type:"text",name:"value",placeholder:"Search movies"})]})})})},Z=t(9649),w=t(1181),j=t(1087),_=function(){var n,e=(0,s.useState)(null),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,s.useState)(""),l=(0,o.Z)(c,2),f=l[0],x=l[1],h=(0,j.lr)(),g=(0,o.Z)(h,2),m=g[0],b=g[1],y=(0,s.useState)(!1),_=(0,o.Z)(y,2),S=_[0],z=_[1],q=null!==(n=m.get("query"))&&void 0!==n?n:"";(0,s.useEffect)((function(){""!==q&&A(q)}),[q]);var A=function(){var n=(0,i.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return z(!0),n.prev=1,n.next=4,w.Wf(e);case 4:if(0!==(t=n.sent).results.length){n.next=7;break}return n.abrupt("return",p.Am.error("Sorry, there are no movies matching your search query. Please try again."));case 7:a(t.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),x(n.t0);case 13:return n.prev=13,z(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(e){return n.apply(this,arguments)}}();return(0,v.jsxs)("main",{children:[(0,v.jsx)(k,{onSubmit:function(n){(""===n&&p.Am.warn("The input field cannot be empty."),q!==n)&&b(""!==n?{query:n}:{})}}),r&&(0,v.jsx)(d.Z,{movies:r}),S&&(0,v.jsx)(Z.Z,{}),f&&p.Am.error("Oops, an error occurred while loading the page. Please try reloading the page")]})}},1181:function(n,e,t){t.d(e,{Df:function(){return p},Pg:function(){return d},R4:function(){return l},Wf:function(){return s}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="https://api.themoviedb.org/3/",u="f2fae09050301062329c7f99a1fba61d",p=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"search/movie?api_key=").concat(u,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(e,"/").concat(t,"?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=342.43b6fe53.chunk.js.map