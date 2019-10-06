(this["webpackJsonps3-uploader"]=this["webpackJsonps3-uploader"]||[]).push([[0],{10:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i}));var r=function(t){return e.from(JSON.stringify(t)).toString("base64")},a=function(e,t,n){return e.split(t).join(n)};function c(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?function(e){return new Date(e).toISOString().replace(/[:-]|\.\d{3}/g,"")}(e).substring(0,8):new Date(e).toISOString().substring(0,10)}var i=function(){var e=new URLSearchParams(window.location.search),t=e.keys(),n={},r=!0,a=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var o=i.value;n[o]=e.get(o)}}catch(l){a=!0,c=l}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}).call(this,n(5).Buffer)},103:function(e,t,n){},110:function(e,t){},112:function(e,t){},147:function(e,t){},148:function(e,t){},190:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(89),i=n.n(c),u=(n(103),n(27)),o=n(16),l=n(12),s=n.n(l),f=n(20),p=n(9),d=n(6),m=n(90),b=n(95);function v(){var e=Object(p.a)(["\n  padding: 20px;\n  background-color: ",";\n  cursor: pointer;\n"]);return v=function(){return e},e}var g=d.default.div(v(),(function(e){return e.isActive?"#BAE9AE":"#ece9e9"})),y=function(e){var t=e.setFiles,n=Object(r.useCallback)((function(e){return t(e.map((function(e){return e.uploaded=!1,e})))}),[t]),c=Object(b.a)({onDrop:n}),i=c.getRootProps,u=c.getInputProps,o=c.isDragActive;return a.a.createElement(g,Object.assign({isActive:o},i()),a.a.createElement("input",u()),o?a.a.createElement("span",null,"Drop the files here ..."):a.a.createElement("span",null,"Click or Drag and drop files here"))};function h(){var e=Object(p.a)(["\n  padding: 5px 0;\n  list-style: none;\n"]);return h=function(){return e},e}var x=d.default.li(h()),O=function(e){return e.loading?a.a.createElement("p",null,"Loading..."):a.a.createElement(r.Fragment,null)},j=function(e){var t=e.files,n=e.loading;return 0===t.length?a.a.createElement(O,{loading:n}):a.a.createElement(r.Fragment,null,a.a.createElement(O,{loading:n}),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement(x,{key:e.path},e.path,e.uploaded?"\u2013 Uploaded":"")}))))},k=n(10),E=n(94),w=n.n(E);function S(e,t,n){return w.a.createHmac("sha256",e).update(t,"utf8").digest(n)}var D=function(e){var t=e.region,n=e.accessKey,r=e.expiryDate;return"".concat(n,"/").concat(Object(k.c)(r,"-",""),"/").concat(t,"/s3/aws4_request")},A=function(e){var t=e.bucket,n=e.credentials,r=e.expiryDate,a=e.prefix,c=e.designatedId,i=void 0===c?null:c,u=[{bucket:t},["starts-with","$key",a],["starts-with","$content-type",""],["starts-with","$acl",""],{"x-amz-server-side-encryption":"AES256"},{"x-amz-credential":n},{"x-amz-algorithm":"AWS4-HMAC-SHA256"},{"x-amz-date":"".concat(Object(k.c)(r,/[-.:]/,""),"T060000Z")}];null!==i&&u.push({"x-amz-meta-uuid":i});var o={expiration:"".concat(r,"T12:00:00.000Z"),conditions:u};return k.a(o)},K=function(e){var t=e.region,n=e.policy,r=e.secretKey,a=e.expiryDate;return function(e){var t=e.secretKey,n=e.time,r=e.region,a=e.service,c=e.stringToSign,i=S("AWS4"+t,Object(k.d)(n)),u=S(i,r),o=S(u,a),l=S(o,"aws4_request");return S(l,c,"hex")}({secretKey:r,time:new Date(a),stringToSign:n,service:"s3",region:t})},z=function(){var e=Object(f.a)(s.a.mark((function e(t){var n,r,a,c,i,u,o,l,f,p,d,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(m in n=t.key,r=t.fileObj,a=t.bucket,c=t.policy,i=t.credentials,u=t.signature,o=t.expiryDate,l=t.acl,f="https://".concat(a,".s3.amazonaws.com"),p={acl:l,key:n,"Content-Type":r.type,"x-amz-server-side-encryption":"AES256","x-amz-credential":i,"x-amz-algorithm":"AWS4-HMAC-SHA256","x-amz-date":"".concat(Object(k.c)(o,"-",""),"T060000Z"),Policy:c,"x-amz-signature":u,file:r},d=new FormData,p)d.append(m,p[m]);return e.abrupt("return",fetch("".concat(f),{method:"POST","Content-Type":"multipart/form-data",body:d}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(s.a.mark((function e(t){var n,r,a,c,i,u,o,l,f,p,d,m,b,v,g,y;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.fileObj,r=t.destination,a=t.keys,c=r.region,i=r.isPublic,u=r.bucket,o=r.prefix,l=a.accessKey,f=a.secretKey,p=i?"public-read":"private",d=new Date,(m=new Date).setDate(d.getDate()+1),b=Object(k.d)(m,!1),v=D({region:c,accessKey:l,expiryDate:b}),g=A({bucket:u,credentials:v,expiryDate:b,prefix:o}),y=K({region:c,policy:g,secretKey:f,expiryDate:b}),e.next=13,z({key:"".concat(o).concat(n.path),fileObj:n,bucket:u,policy:g,acl:p,credentials:v,signature:y,expiryDate:b});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function P(){var e=Object(p.a)(["\n  margin-bottom: 30px;\n"]);return P=function(){return e},e}var T=function(e){return"".concat(e.bucket,"/").concat(e.prefix)},F=d.default.select(P()),I=function(e){var t=e.destinations,n=e.selectDestination;return a.a.createElement(F,{onChange:function(e){return n(e.target.value)}},t.map((function(e){return a.a.createElement("option",{key:T(e),value:T(e)},T(e))})))};function B(){var e=Object(p.a)(["\n  margin-bottom: 3px;\n  display: block;\n"]);return B=function(){return e},e}function H(){var e=Object(p.a)(["\n  display: block;\n  margin-bottom: 10px;\n"]);return H=function(){return e},e}var W=d.default.div(H()),N=d.default.label(B()),$=function(e){var t=e.label,n=e.placeholder,r=e.currentValue,c=e.setKey;return a.a.createElement(W,null,a.a.createElement(N,{htmlFor:""},t),a.a.createElement("input",{type:"text",value:r,placeholder:n,onChange:function(e){return c(e.target.value)}}))},J=function(e){var t=e.destination;return t?a.a.createElement("p",null,a.a.createElement("span",null,"Uploading to: "),a.a.createElement("strong",null,t.bucket,"/",t.prefix)):a.a.createElement("p",null,"No destination chosen")};function U(){var e=Object(p.a)(["\n  margin: 10px 0;\n  padding: 20px;\n  background-color: #ece9e9;\n"]);return U=function(){return e},e}function V(){var e=Object(p.a)(["\n  margin: 0 auto;\n  max-width: 800px;\n  padding: 5px;\n"]);return V=function(){return e},e}var Z=d.default.div(V()),q=d.default.div(U()),L=function(){var e=Object(f.a)(s.a.mark((function e(t){var n,r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.fileObj,r=t.destination,a=t.accessKey,c=t.secretKey,n.uploaded){e.next=5;break}return e.next=4,C({fileObj:n,destination:r,keys:{accessKey:a,secretKey:c}});case 4:n.uploaded=!0;case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.split(","),n=Object(o.a)(t,4),r=n[0],a=n[1],c=n[2],i=n[3];return r?{bucket:r,prefix:a||"",isPublic:"true"===c,region:i||"eu-central-1"}:null};var R=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),l=Object(o.a)(i,2),p=l[0],d=l[1],b=Object(r.useState)([]),v=Object(o.a)(b,2),g=v[0],h=v[1],x=Object(r.useState)(g.length>0?g[0]:null,[g]),O=Object(o.a)(x,2),E=O[0],w=O[1],S=Object(r.useState)(""),D=Object(o.a)(S,2),A=D[0],K=D[1],z=Object(r.useState)(""),C=Object(o.a)(z,2),P=C[0],T=C[1];Object(r.useEffect)((function(){var e=Object(k.b)();e["access-key"]&&K(e["access-key"]),e["secret-key"]&&T(e["secret-key"]);var t=e.buckets&&e.buckets.split(";");if(t&&t.length>0){var n=t.map(M).filter((function(e){return!!e}));h(n),w(n[0]),console.log(n)}}),[]);var F=function(){var e=Object(f.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,c([].concat(Object(u.a)(r),Object(u.a)(t))),d(!0),e.next=5,Promise.all(t.map((function(e){return L({fileObj:e,destination:E,accessKey:A,secretKey:P})})));case 5:t=e.sent,c([].concat(Object(u.a)(r),Object(u.a)(t))),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(r.Fragment,null,a.a.createElement(m.Normalize,null),a.a.createElement(Z,{className:"App"},a.a.createElement("h1",null,"Storage uploader"),a.a.createElement(q,null,a.a.createElement($,{label:"Access key",placeholder:"AKIA...",currentValue:A,setKey:K}),a.a.createElement($,{label:"Secret key",placeholder:"de01B...",currentValue:P,setKey:T})),a.a.createElement(J,{destination:E}),a.a.createElement(I,{destinations:g,selectDestination:function(e){var t=g.find((function(t){return e==="".concat(t.bucket,"/").concat(t.prefix)}));w(t)}}),a.a.createElement(y,{setFiles:F}),a.a.createElement(j,{files:n,loading:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,n){e.exports=n(190)}},[[98,1,2]]]);
//# sourceMappingURL=main.4cca4260.chunk.js.map