var gr=Object.defineProperty,Er=Object.defineProperties;var yr=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var br=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable;var Oe=(r,e,t)=>e in r?gr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,P=(r,e)=>{for(var t in e||(e={}))br.call(e,t)&&Oe(r,t,e[t]);if(Se)for(var t of Se(e))vr.call(e,t)&&Oe(r,t,e[t]);return r},z=(r,e)=>Er(r,yr(e));const Sr=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}};Sr();var fe={exports:{}},qe=function(e,t){return function(){for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];return e.apply(t,a)}},Or=qe,de=Object.prototype.toString,pe=function(r){return function(e){var t=de.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function I(r){return r=r.toLowerCase(),function(t){return pe(t)===r}}function me(r){return Array.isArray(r)}function K(r){return typeof r=="undefined"}function wr(r){return r!==null&&!K(r)&&r.constructor!==null&&!K(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Ge=I("ArrayBuffer");function Cr(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Ge(r.buffer),e}function Ar(r){return typeof r=="string"}function Tr(r){return typeof r=="number"}function Je(r){return r!==null&&typeof r=="object"}function k(r){if(pe(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Rr=I("Date"),xr=I("File"),Fr=I("Blob"),Pr=I("FileList");function he(r){return de.call(r)==="[object Function]"}function Dr(r){return Je(r)&&he(r.pipe)}function Nr(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||de.call(r)===e||he(r.toString)&&r.toString()===e)}var Lr=I("URLSearchParams");function Br(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ir(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ge(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),me(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.call(null,r[a],a,r)}function oe(){var r={};function e(a,s){k(r[s])&&k(a)?r[s]=oe(r[s],a):k(a)?r[s]=oe({},a):me(a)?r[s]=a.slice():r[s]=a}for(var t=0,n=arguments.length;t<n;t++)ge(arguments[t],e);return r}function Mr(r,e,t){return ge(e,function(a,s){t&&typeof a=="function"?r[s]=Or(a,t):r[s]=a}),r}function _r(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Ur(r,e,t,n){r.prototype=Object.create(e.prototype,n),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function jr(r,e,t){var n,a,s,o={};e=e||{};do{for(n=Object.getOwnPropertyNames(r),a=n.length;a-- >0;)s=n[a],o[s]||(e[s]=r[s],o[s]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function $r(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var n=r.indexOf(e,t);return n!==-1&&n===t}function Hr(r){if(!r)return null;var e=r.length;if(K(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var qr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),w={isArray:me,isArrayBuffer:Ge,isBuffer:wr,isFormData:Nr,isArrayBufferView:Cr,isString:Ar,isNumber:Tr,isObject:Je,isPlainObject:k,isUndefined:K,isDate:Rr,isFile:xr,isBlob:Fr,isFunction:he,isStream:Dr,isURLSearchParams:Lr,isStandardBrowserEnv:Ir,forEach:ge,merge:oe,extend:Mr,trim:Br,stripBOM:_r,inherits:Ur,toFlatObject:jr,kindOf:pe,kindOfTest:I,endsWith:$r,toArray:Hr,isTypedArray:qr,isFileList:Pr},M=w;function we(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ve=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(M.isURLSearchParams(t))a=t.toString();else{var s=[];M.forEach(t,function(m,E){m===null||typeof m=="undefined"||(M.isArray(m)?E=E+"[]":m=[m],M.forEach(m,function(g){M.isDate(g)?g=g.toISOString():M.isObject(g)&&(g=JSON.stringify(g)),s.push(we(E)+"="+we(g))}))}),a=s.join("&")}if(a){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e},Gr=w;function Y(){this.handlers=[]}Y.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};Y.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Y.prototype.forEach=function(e){Gr.forEach(this.handlers,function(n){n!==null&&e(n)})};var Jr=Y,Vr=w,zr=function(e,t){Vr.forEach(e,function(a,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[s])})},ze=w;function j(r,e,t,n,a){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),a&&(this.response=a)}ze.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var We=j.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){ke[r]={value:r}});Object.defineProperties(j,ke);Object.defineProperty(We,"isAxiosError",{value:!0});j.from=function(r,e,t,n,a,s){var o=Object.create(We);return ze.toFlatObject(r,o,function(m){return m!==Error.prototype}),j.call(o,r.message,e,t,n,a),o.name=r.name,s&&Object.assign(o,s),o};var q=j,Xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},F=w;function Wr(r,e){e=e||new FormData;var t=[];function n(s){return s===null?"":F.isDate(s)?s.toISOString():F.isArrayBuffer(s)||F.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function a(s,o){if(F.isPlainObject(s)||F.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+o);t.push(s),F.forEach(s,function(m,E){if(!F.isUndefined(m)){var l=o?o+"."+E:E,g;if(m&&!o&&typeof m=="object"){if(F.endsWith(E,"{}"))m=JSON.stringify(m);else if(F.endsWith(E,"[]")&&(g=F.toArray(m))){g.forEach(function(b){!F.isUndefined(b)&&e.append(l,n(b))});return}}a(m,l)}}),t.pop()}else e.append(o,n(s))}return a(r),e}var Ke=Wr,ne=q,kr=function(e,t,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},W=w,Xr=W.isStandardBrowserEnv()?function(){return{write:function(t,n,a,s,o,d){var m=[];m.push(t+"="+encodeURIComponent(n)),W.isNumber(a)&&m.push("expires="+new Date(a).toGMTString()),W.isString(s)&&m.push("path="+s),W.isString(o)&&m.push("domain="+o),d===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Kr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Qr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Yr=Kr,Zr=Qr,Qe=function(e,t){return e&&!Yr(t)?Zr(e,t):t},ae=w,et=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],rt=function(e){var t={},n,a,s;return e&&ae.forEach(e.split(`
`),function(d){if(s=d.indexOf(":"),n=ae.trim(d.substr(0,s)).toLowerCase(),a=ae.trim(d.substr(s+1)),n){if(t[n]&&et.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([a]):t[n]=t[n]?t[n]+", "+a:a}}),t},Ce=w,tt=Ce.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function a(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=a(window.location.href),function(o){var d=Ce.isString(o)?a(o):o;return d.protocol===n.protocol&&d.host===n.host}}():function(){return function(){return!0}}(),le=q,nt=w;function Ye(r){le.call(this,r==null?"canceled":r,le.ERR_CANCELED),this.name="CanceledError"}nt.inherits(Ye,le,{__CANCEL__:!0});var Z=Ye,at=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},G=w,st=kr,it=Xr,ot=Ve,lt=Qe,ct=rt,ut=tt,ft=Xe,D=q,dt=Z,pt=at,Ae=function(e){return new Promise(function(n,a){var s=e.data,o=e.headers,d=e.responseType,m;function E(){e.cancelToken&&e.cancelToken.unsubscribe(m),e.signal&&e.signal.removeEventListener("abort",m)}G.isFormData(s)&&G.isStandardBrowserEnv()&&delete o["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(g+":"+b)}var y=lt(e.baseURL,e.url);l.open(e.method.toUpperCase(),ot(y,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function C(){if(!!l){var A="getAllResponseHeaders"in l?ct(l.getAllResponseHeaders()):null,i=!d||d==="text"||d==="json"?l.responseText:l.response,c={data:i,status:l.status,statusText:l.statusText,headers:A,config:e,request:l};st(function(u){n(u),E()},function(u){a(u),E()},c),l=null}}if("onloadend"in l?l.onloadend=C:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(C)},l.onabort=function(){!l||(a(new D("Request aborted",D.ECONNABORTED,e,l)),l=null)},l.onerror=function(){a(new D("Network Error",D.ERR_NETWORK,e,l,l)),l=null},l.ontimeout=function(){var i=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",c=e.transitional||ft;e.timeoutErrorMessage&&(i=e.timeoutErrorMessage),a(new D(i,c.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,e,l)),l=null},G.isStandardBrowserEnv()){var N=(e.withCredentials||ut(y))&&e.xsrfCookieName?it.read(e.xsrfCookieName):void 0;N&&(o[e.xsrfHeaderName]=N)}"setRequestHeader"in l&&G.forEach(o,function(i,c){typeof s=="undefined"&&c.toLowerCase()==="content-type"?delete o[c]:l.setRequestHeader(c,i)}),G.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),d&&d!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(m=function(A){!l||(a(!A||A&&A.type?new dt:A),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(m),e.signal&&(e.signal.aborted?m():e.signal.addEventListener("abort",m))),s||(s=null);var L=pt(y);if(L&&["http","https","file"].indexOf(L)===-1){a(new D("Unsupported protocol "+L+":",D.ERR_BAD_REQUEST,e));return}l.send(s)})},mt=null,O=w,Te=zr,Re=q,ht=Xe,gt=Ke,Et={"Content-Type":"application/x-www-form-urlencoded"};function xe(r,e){!O.isUndefined(r)&&O.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function yt(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Ae),r}function bt(r,e,t){if(O.isString(r))try{return(e||JSON.parse)(r),O.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var ee={transitional:ht,adapter:yt(),transformRequest:[function(e,t){if(Te(t,"Accept"),Te(t,"Content-Type"),O.isFormData(e)||O.isArrayBuffer(e)||O.isBuffer(e)||O.isStream(e)||O.isFile(e)||O.isBlob(e))return e;if(O.isArrayBufferView(e))return e.buffer;if(O.isURLSearchParams(e))return xe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n=O.isObject(e),a=t&&t["Content-Type"],s;if((s=O.isFileList(e))||n&&a==="multipart/form-data"){var o=this.env&&this.env.FormData;return gt(s?{"files[]":e}:e,o&&new o)}else if(n||a==="application/json")return xe(t,"application/json"),bt(e);return e}],transformResponse:[function(e){var t=this.transitional||ee.transitional,n=t&&t.silentJSONParsing,a=t&&t.forcedJSONParsing,s=!n&&this.responseType==="json";if(s||a&&O.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?Re.from(o,Re.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mt},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};O.forEach(["delete","get","head"],function(e){ee.headers[e]={}});O.forEach(["post","put","patch"],function(e){ee.headers[e]=O.merge(Et)});var Ee=ee,vt=w,St=Ee,Ot=function(e,t,n){var a=this||St;return vt.forEach(n,function(o){e=o.call(a,e,t)}),e},Ze=function(e){return!!(e&&e.__CANCEL__)},Fe=w,se=Ot,wt=Ze,Ct=Ee,At=Z;function ie(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new At}var Tt=function(e){ie(e),e.headers=e.headers||{},e.data=se.call(e,e.data,e.headers,e.transformRequest),e.headers=Fe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Fe.forEach(["delete","get","head","post","put","patch","common"],function(a){delete e.headers[a]});var t=e.adapter||Ct.adapter;return t(e).then(function(a){return ie(e),a.data=se.call(e,a.data,a.headers,e.transformResponse),a},function(a){return wt(a)||(ie(e),a&&a.response&&(a.response.data=se.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)})},x=w,er=function(e,t){t=t||{};var n={};function a(l,g){return x.isPlainObject(l)&&x.isPlainObject(g)?x.merge(l,g):x.isPlainObject(g)?x.merge({},g):x.isArray(g)?g.slice():g}function s(l){if(x.isUndefined(t[l])){if(!x.isUndefined(e[l]))return a(void 0,e[l])}else return a(e[l],t[l])}function o(l){if(!x.isUndefined(t[l]))return a(void 0,t[l])}function d(l){if(x.isUndefined(t[l])){if(!x.isUndefined(e[l]))return a(void 0,e[l])}else return a(void 0,t[l])}function m(l){if(l in t)return a(e[l],t[l]);if(l in e)return a(void 0,e[l])}var E={url:o,method:o,data:o,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:m};return x.forEach(Object.keys(e).concat(Object.keys(t)),function(g){var b=E[g]||s,y=b(g);x.isUndefined(y)&&b!==m||(n[g]=y)}),n},rr={version:"0.27.2"},Rt=rr.version,B=q,ye={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ye[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var Pe={};ye.transitional=function(e,t,n){function a(s,o){return"[Axios v"+Rt+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return function(s,o,d){if(e===!1)throw new B(a(o," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!Pe[o]&&(Pe[o]=!0,console.warn(a(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,d):!0}};function xt(r,e,t){if(typeof r!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(r),a=n.length;a-- >0;){var s=n[a],o=e[s];if(o){var d=r[s],m=d===void 0||o(d,s,r);if(m!==!0)throw new B("option "+s+" must be "+m,B.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new B("Unknown option "+s,B.ERR_BAD_OPTION)}}var Ft={assertOptions:xt,validators:ye},tr=w,Pt=Ve,De=Jr,Ne=Tt,re=er,Dt=Qe,nr=Ft,_=nr.validators;function $(r){this.defaults=r,this.interceptors={request:new De,response:new De}}$.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=re(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;n!==void 0&&nr.assertOptions(n,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1);var a=[],s=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(t)===!1||(s=s&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});var o=[];this.interceptors.response.forEach(function(y){o.push(y.fulfilled,y.rejected)});var d;if(!s){var m=[Ne,void 0];for(Array.prototype.unshift.apply(m,a),m=m.concat(o),d=Promise.resolve(t);m.length;)d=d.then(m.shift(),m.shift());return d}for(var E=t;a.length;){var l=a.shift(),g=a.shift();try{E=l(E)}catch(b){g(b);break}}try{d=Ne(E)}catch(b){return Promise.reject(b)}for(;o.length;)d=d.then(o.shift(),o.shift());return d};$.prototype.getUri=function(e){e=re(this.defaults,e);var t=Dt(e.baseURL,e.url);return Pt(t,e.params,e.paramsSerializer)};tr.forEach(["delete","get","head","options"],function(e){$.prototype[e]=function(t,n){return this.request(re(n||{},{method:e,url:t,data:(n||{}).data}))}});tr.forEach(["post","put","patch"],function(e){function t(n){return function(s,o,d){return this.request(re(d||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}$.prototype[e]=t(),$.prototype[e+"Form"]=t(!0)});var Nt=$,Lt=Z;function H(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(a){e=a});var t=this;this.promise.then(function(n){if(!!t._listeners){var a,s=t._listeners.length;for(a=0;a<s;a++)t._listeners[a](n);t._listeners=null}}),this.promise.then=function(n){var a,s=new Promise(function(o){t.subscribe(o),a=o}).then(n);return s.cancel=function(){t.unsubscribe(a)},s},r(function(a){t.reason||(t.reason=new Lt(a),e(t.reason))})}H.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};H.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};H.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};H.source=function(){var e,t=new H(function(a){e=a});return{token:t,cancel:e}};var Bt=H,It=function(e){return function(n){return e.apply(null,n)}},Mt=w,_t=function(e){return Mt.isObject(e)&&e.isAxiosError===!0},Le=w,Ut=qe,X=Nt,jt=er,$t=Ee;function ar(r){var e=new X(r),t=Ut(X.prototype.request,e);return Le.extend(t,X.prototype,e),Le.extend(t,e),t.create=function(a){return ar(jt(r,a))},t}var T=ar($t);T.Axios=X;T.CanceledError=Z;T.CancelToken=Bt;T.isCancel=Ze;T.VERSION=rr.version;T.toFormData=Ke;T.AxiosError=q;T.Cancel=T.CanceledError;T.all=function(e){return Promise.all(e)};T.spread=It;T.isAxiosError=_t;fe.exports=T;fe.exports.default=T;var Ht=fe.exports,sr={},qt=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),ir="%[a-f0-9]{2}",Be=new RegExp(ir,"gi"),Ie=new RegExp("("+ir+")+","gi");function ce(r,e){try{return decodeURIComponent(r.join(""))}catch{}if(r.length===1)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],ce(t),ce(n))}function Gt(r){try{return decodeURIComponent(r)}catch{for(var e=r.match(Be),t=1;t<e.length;t++)r=ce(e,t).join(""),e=r.match(Be);return r}}function Jt(r){for(var e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=Ie.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch{var n=Gt(t[0]);n!==t[0]&&(e[t[0]]=n)}t=Ie.exec(r)}e["%C2"]="\uFFFD";for(var a=Object.keys(e),s=0;s<a.length;s++){var o=a[s];r=r.replace(new RegExp(o,"g"),e[o])}return r}var Vt=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch{return Jt(r)}},zt=(r,e)=>{if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[r];const t=r.indexOf(e);return t===-1?[r]:[r.slice(0,t),r.slice(t+e.length)]},Wt=function(r,e){for(var t={},n=Object.keys(r),a=Array.isArray(e),s=0;s<n.length;s++){var o=n[s],d=r[o];(a?e.indexOf(o)!==-1:e(o,d,r))&&(t[o]=d)}return t};(function(r){const e=qt,t=Vt,n=zt,a=Wt,s=i=>i==null,o=Symbol("encodeFragmentIdentifier");function d(i){switch(i.arrayFormat){case"index":return c=>(f,u)=>{const p=f.length;return u===void 0||i.skipNull&&u===null||i.skipEmptyString&&u===""?f:u===null?[...f,[l(c,i),"[",p,"]"].join("")]:[...f,[l(c,i),"[",l(p,i),"]=",l(u,i)].join("")]};case"bracket":return c=>(f,u)=>u===void 0||i.skipNull&&u===null||i.skipEmptyString&&u===""?f:u===null?[...f,[l(c,i),"[]"].join("")]:[...f,[l(c,i),"[]=",l(u,i)].join("")];case"colon-list-separator":return c=>(f,u)=>u===void 0||i.skipNull&&u===null||i.skipEmptyString&&u===""?f:u===null?[...f,[l(c,i),":list="].join("")]:[...f,[l(c,i),":list=",l(u,i)].join("")];case"comma":case"separator":case"bracket-separator":{const c=i.arrayFormat==="bracket-separator"?"[]=":"=";return f=>(u,p)=>p===void 0||i.skipNull&&p===null||i.skipEmptyString&&p===""?u:(p=p===null?"":p,u.length===0?[[l(f,i),c,l(p,i)].join("")]:[[u,l(p,i)].join(i.arrayFormatSeparator)])}default:return c=>(f,u)=>u===void 0||i.skipNull&&u===null||i.skipEmptyString&&u===""?f:u===null?[...f,l(c,i)]:[...f,[l(c,i),"=",l(u,i)].join("")]}}function m(i){let c;switch(i.arrayFormat){case"index":return(f,u,p)=>{if(c=/\[(\d*)\]$/.exec(f),f=f.replace(/\[\d*\]$/,""),!c){p[f]=u;return}p[f]===void 0&&(p[f]={}),p[f][c[1]]=u};case"bracket":return(f,u,p)=>{if(c=/(\[\])$/.exec(f),f=f.replace(/\[\]$/,""),!c){p[f]=u;return}if(p[f]===void 0){p[f]=[u];return}p[f]=[].concat(p[f],u)};case"colon-list-separator":return(f,u,p)=>{if(c=/(:list)$/.exec(f),f=f.replace(/:list$/,""),!c){p[f]=u;return}if(p[f]===void 0){p[f]=[u];return}p[f]=[].concat(p[f],u)};case"comma":case"separator":return(f,u,p)=>{const v=typeof u=="string"&&u.includes(i.arrayFormatSeparator),h=typeof u=="string"&&!v&&g(u,i).includes(i.arrayFormatSeparator);u=h?g(u,i):u;const R=v||h?u.split(i.arrayFormatSeparator).map(hr=>g(hr,i)):u===null?u:g(u,i);p[f]=R};case"bracket-separator":return(f,u,p)=>{const v=/(\[\])$/.test(f);if(f=f.replace(/\[\]$/,""),!v){p[f]=u&&g(u,i);return}const h=u===null?[]:u.split(i.arrayFormatSeparator).map(R=>g(R,i));if(p[f]===void 0){p[f]=h;return}p[f]=[].concat(p[f],h)};default:return(f,u,p)=>{if(p[f]===void 0){p[f]=u;return}p[f]=[].concat(p[f],u)}}}function E(i){if(typeof i!="string"||i.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function l(i,c){return c.encode?c.strict?e(i):encodeURIComponent(i):i}function g(i,c){return c.decode?t(i):i}function b(i){return Array.isArray(i)?i.sort():typeof i=="object"?b(Object.keys(i)).sort((c,f)=>Number(c)-Number(f)).map(c=>i[c]):i}function y(i){const c=i.indexOf("#");return c!==-1&&(i=i.slice(0,c)),i}function C(i){let c="";const f=i.indexOf("#");return f!==-1&&(c=i.slice(f)),c}function N(i){i=y(i);const c=i.indexOf("?");return c===-1?"":i.slice(c+1)}function L(i,c){return c.parseNumbers&&!Number.isNaN(Number(i))&&typeof i=="string"&&i.trim()!==""?i=Number(i):c.parseBooleans&&i!==null&&(i.toLowerCase()==="true"||i.toLowerCase()==="false")&&(i=i.toLowerCase()==="true"),i}function A(i,c){c=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},c),E(c.arrayFormatSeparator);const f=m(c),u=Object.create(null);if(typeof i!="string"||(i=i.trim().replace(/^[?#&]/,""),!i))return u;for(const p of i.split("&")){if(p==="")continue;let[v,h]=n(c.decode?p.replace(/\+/g," "):p,"=");h=h===void 0?null:["comma","separator","bracket-separator"].includes(c.arrayFormat)?h:g(h,c),f(g(v,c),h,u)}for(const p of Object.keys(u)){const v=u[p];if(typeof v=="object"&&v!==null)for(const h of Object.keys(v))v[h]=L(v[h],c);else u[p]=L(v,c)}return c.sort===!1?u:(c.sort===!0?Object.keys(u).sort():Object.keys(u).sort(c.sort)).reduce((p,v)=>{const h=u[v];return Boolean(h)&&typeof h=="object"&&!Array.isArray(h)?p[v]=b(h):p[v]=h,p},Object.create(null))}r.extract=N,r.parse=A,r.stringify=(i,c)=>{if(!i)return"";c=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},c),E(c.arrayFormatSeparator);const f=h=>c.skipNull&&s(i[h])||c.skipEmptyString&&i[h]==="",u=d(c),p={};for(const h of Object.keys(i))f(h)||(p[h]=i[h]);const v=Object.keys(p);return c.sort!==!1&&v.sort(c.sort),v.map(h=>{const R=i[h];return R===void 0?"":R===null?l(h,c):Array.isArray(R)?R.length===0&&c.arrayFormat==="bracket-separator"?l(h,c)+"[]":R.reduce(u(h),[]).join("&"):l(h,c)+"="+l(R,c)}).filter(h=>h.length>0).join("&")},r.parseUrl=(i,c)=>{c=Object.assign({decode:!0},c);const[f,u]=n(i,"#");return Object.assign({url:f.split("?")[0]||"",query:A(N(i),c)},c&&c.parseFragmentIdentifier&&u?{fragmentIdentifier:g(u,c)}:{})},r.stringifyUrl=(i,c)=>{c=Object.assign({encode:!0,strict:!0,[o]:!0},c);const f=y(i.url).split("?")[0]||"",u=r.extract(i.url),p=r.parse(u,{sort:!1}),v=Object.assign(p,i.query);let h=r.stringify(v,c);h&&(h=`?${h}`);let R=C(i.url);return i.fragmentIdentifier&&(R=`#${c[o]?l(i.fragmentIdentifier,c):i.fragmentIdentifier}`),`${f}${h}${R}`},r.pick=(i,c,f)=>{f=Object.assign({parseFragmentIdentifier:!0,[o]:!1},f);const{url:u,query:p,fragmentIdentifier:v}=r.parseUrl(i,f);return r.stringifyUrl({url:u,query:a(p,c),fragmentIdentifier:v},f)},r.exclude=(i,c,f)=>{const u=Array.isArray(c)?p=>!c.includes(p):(p,v)=>!c(p,v);return r.pick(i,u,f)}})(sr);let Me,_e;const kt=["legendLabel","seriesAxis","chartTypes","decimalTooltips"];function Xt(){_e=Object.assign({},S.graphicParameters);const r=new Map(Object.entries(P({},U)));let e=new Map(Object.entries(_e));return te(e,r),lr(e)}function or(r){return Object.entries(r).reduce((e,[t,n])=>(n!==!1&&(n==null||n=="")||(e[t]=n),e),{})}function Kt(){let r=`<pre>
<span class='c'>&lt;!-- c\xF3digo HTML donde ubicar un div con una tarjeta --&gt;</span>
<span class='p'>&lt;</span><span class='nt'>div</span> <span class='na'>id</span><span class='o'>=</span><span class='s'>'tmi'</span><span class='p'>&gt;&lt;/</span> <span class='nt'>div</span><span class='p'>&gt;</span>

<span class='c'>&lt;!-- JS que genera la tarjeta en el div --&gt;</span>
<span class='p'>&lt;</span><span class='nt'>script</span><span class='p'>&gt;</span>
    <span class='nb'>window</span><span class='p'>.</span><span class='nx'>onload</span> <span class='o'>=</span> <span class='kd'>function</span><span class='p'>()</span> <span class='p'>{</span>
        <span class='nx'>TSComponents</span><span class='p'>.</span><span class='nx'>Card</span><span class='p'>.</span><span class='nx'>render</span><span class='p'>(</span><span class='s1'>'tmi'</span><span class='p'>,</span> <span class='p'>{</span>
            `+Yt()+`<span class='p'>})</span>
    <span class='p'>}</span>
<span class='p'>&lt;/</span><span class='nt'>script</span><span class='p'>&gt;</span>
</pre>`;ve(r)}function Qt(){let r=`<pre>
<span class='c'>&lt;!-- c\xF3digo HTML donde ubicar un div con un Graphic --&gt;</span>
<span class='p'>&lt;</span><span class='nt'>div</span> <span class='na'>id</span><span class='o'>=</span><span class='s'>'tmi'</span><span class='p'>&gt;&lt;/</span><span class='nt'>div</span><span class='p'>&gt;</span>

<span class='c'>&lt;!-- JS que genera el Graph en el div --&gt;</span>
<span class='p'>&lt;</span><span class='nt'>script</span><span class='p'>&gt;</span>
    <span class='nb'>window</span><span class='p'>.</span><span class='nx'>onload</span> <span class='o'>=</span> <span class='kd'>function</span><span class='p'>()</span> <span class='p'>{</span>
        <span class='nx'>TSComponents</span><span class='p'>.</span><span class='nx'>Graphic</span><span class='p'>.</span><span class='nx'>render</span><span class='p'>(</span><span class='s1'>'tmi'</span><span class='p'>,</span> <span class='p'>{</span>
            `+Xt()+`<span class='p'>})</span>
    <span class='p'>}</span>
<span class='p'>&lt;/</span><span class='nt'>script</span><span class='p'>&gt;</span>
</pre>`;be(r)}function be(r){let e=document.getElementById("codeTagGraph");e&&(e.innerHTML=r)}function ve(r){let e=document.getElementById("codeTagCard");e&&(e.innerHTML=r)}function Yt(){Me=Object.assign({},S.cardParameters);const r=new Map(Object.entries(z(P({},Q),{numbersAbbreviate:!0})));let e=new Map(Object.entries(Me));return te(e,r),lr(e)}function te(r,e){r.forEach((t,n,a)=>{e.get(n)==t&&a.delete(n)})}function lr(r){let e="";return console.log(r),r.forEach((t,n)=>{let a=t!=!0&&t!=!1?"'":" ",s=a;if(kt.includes(n.toString())&&(t=JSON.stringify(t),s="",a=""),n.toString().includes("colors")){let d=t.map((m,E)=>E%2?'"'+m+'"':m);a="[",s="]",t=d}e+="<span class='nx'>"+n+"</span><span class='o'>:</span><span class='s1'>"+a+t.toString()+s+`,</span>
            `}),e}function Zt(r){let e=new Map;e.set("line","L\xEDnea").set("area","\xC1rea").set("column","Columna"),cr(r,"chartTypesBySeries",e,"Tipo de gr\xE1fico para la serie:")}function en(r){let e=new Map;e.set("right","Derecha").set("left","Izquierda"),cr(r,"seriesAxisBySeries",e,"Ubicaci\xF3n del eje para la serie:")}function cr(r,e,t,n){let a=document.getElementById(e),s=(E,l)=>'<option value="'+E+'">'+l+"</option>",o=s("","");t.forEach((E,l)=>o+=s(l,E));let d=E=>"<label for='"+e+"'>"+n+E+' </label><br><select name="'+e+E+'" class="format form-control">'+o+"</select>",m="";r.forEach(E=>{m+=d(E)}),a&&(a.innerHTML=m)}function rn(r){ur(r,"decimalTooltipsBySeries","number","Cantidad de decimales en tooltip para la serie:")}function tn(r){ur(r,"legendLabelBySeries","text","Texto en leyenda para la serie:")}function ur(r,e,t,n){let a=document.getElementById(e),s=d=>"<label for='"+e+"'>"+n+" "+d+' </label><br><input type="'+t+'" class="form-control" name="'+e+d+'" >',o="";r.forEach(d=>{o+=s(d)}),a&&(a.innerHTML=o)}function Ue(r){let e=document.getElementById("card-error-container");e&&(e.textContent=r)}function je(r){let e=document.getElementById("graph-error-container");e&&(e.textContent=r)}function $e(){let r=document.getElementById("card_example");r&&(r.innerHTML="")}function He(){let r=document.getElementById("graph_example");r&&(r.innerHTML="")}function nn(r){S&&S.seriesIdGraph&&JSON.stringify(S.seriesIdGraph)===JSON.stringify(r)||(tn(r),Zt(r),en(r),rn(r))}const an=Intl.DateTimeFormat;let sn=new an("fr-ca");const on=window,fr=on.TSComponents,ln="https://apis.datos.gob.ar/series/api/series/",dr=`// presione 'Generar HTML' para mostrar aqu\xED el codigo HTML utilzado
  para renderizar la vista previa de la Card.`,cn=`// presione 'Generar HTML' para mostrar aqu\xED el codigo HTML utilzado
 para renderizar la vista previa del Graph.`;let S,Q={apiBaseUrl:"http://apis.datos.gob.ar/series/api",collapse:"",color:"#0072bb",decimals:2,decimalsBillion:2,decimalsMillion:2,explicitSign:!1,hasChart:"small",hasColorBar:!1,hasFrame:!1,isPercentage:!1,links:"full",locale:"AR",numbersAbbreviate:!0,serieId:"",source:"",title:"",units:""},ue=new Map().set(0,"#0072bb").set(1,"#2e7d33").set(2,"#c62828").set(3,"#f9a822").set(4,"#6a1b99").set(5,"#ec407a").set(6,"#c2185b").set(7,"#039be5").set(8,"#6ea100"),U={aggregationSelector:!1,backgroundColor:"#ffffff",chartOptions:void 0,chartType:"line",chartTypeSelector:!1,chartTypes:{},colors:Array.from(ue).flatMap(r=>r),datePickerEnabled:!1,decimalLeftAxis:void 0,decimalRightAxis:void 0,decimalTooltip:void 0,decimalTooltips:{},decimalsBillion:2,decimalsMillion:2,displayUnits:!1,endDate:"",exportable:!1,frequencySelector:!1,graphicUrl:"",legendField:"title",legendLabel:void 0,locale:"AR",navigator:!1,numbersAbbreviate:!0,seriesAxis:void 0,source:"",startDate:"",title:"",unitsSelector:!1,zoom:!1},J=1,V=1;function un(){console.log("entre en reload components: estos son los cardParameters agraficar"),console.log(S.cardParameters);let r=document.getElementById("card_example_"+J.toString());J=J+1,r&&(r.outerHTML='<div id="card_example_'+J.toString()+'"></div>'),fr.Card.render("card_example_"+J.toString(),S.cardParameters)}function fn(){console.log("entre en reload components: estos son los graphParam agraficar");let r=Object.assign({},S.graphicParameters);const e=new Map(Object.entries(P({},U)));let t=new Map(Object.entries(r));te(t,e),r=Object.fromEntries(t),console.log(r);let n=document.getElementById("graph_example_"+V.toString());V=V+1,n&&(n.outerHTML='<div id="graph_example_'+V.toString()+'"></div>'),fr.Graphic.render("graph_example_"+V.toString(),r)}function pr(){S.cardErrorMap=[]}function dn(){var s,o;const r=document.getElementById("form-card"),e=new FormData(r);var t={};e.forEach((d,m)=>{t[m]=d,d.toString().includes("Disabled")?t[m]=!1:d.toString().includes("Enabled")&&(t[m]=!0)});let n=z(P(P({},Q),t),{apiBaseUrl:t.apiBaseUrl?t.apiBaseUrl:Q.apiBaseUrl});S.cardParameters=or(n);let a=new Array;a.push((s=S.cardParameters)==null?void 0:s.serieId),mr(a,(o=S.cardParameters)==null?void 0:o.collapse).then(()=>{$e(),un(),Ue(""),ve(dr),pr()}).catch(d=>{S.cardErrorMap=d.response.data.errors;let m="";S.cardErrorMap.forEach(E=>{m+=`
`+E.error}),Ue(m),$e()})}function pn(){var g;const r=document.getElementById("form-graph"),e=new FormData(r);let t=new Map(ue);var n={};let a={};e.forEach((b,y)=>{if(b.toString().includes("Disabled"))n[y]=!1;else if(b.toString().includes("Enabled"))n[y]=!0;else if(y.toString().includes("colorPalette")){let C=parseInt(y.substring(y.length-1,y.length));t.set(C,b.toString())}else if(y.toString().includes("chartTypes")&&b!=U.chartType)a[y.toString().split("chartTypes")[1]]=b;else if(y.toString().includes("BySeries")&&b){let[C,N]=y.split("BySeries");n[C]||(n[C]={[N]:{}});let L=n[C];L[N]=C.includes("decimal")?parseInt(b.toString()):b}else if(y.toString().includes("Date")&&b){let C=sn.format(Date.parse(b.toString()));n[y]=C}else!n[y]&&b&&b!=U[y]&&(n[y]=b)}),te(t,ue),n.colors=Array.from(t).flatMap(b=>b);let s=P(P({},U),n);S.graphicParameters=or(s);let o=sr.parseUrl((g=S.graphicParameters)!=null&&g.graphicUrl?S.graphicParameters.graphicUrl:""),m=o==null?void 0:o.query,E=Array.from(m.ids?m.ids.split(","):""),l=Array.from(E);mr(E,"").then(()=>{He(),nn(E),fn(),je(""),be(`// presione 'Generar HTML' para mostrar aqu\xED el codigo HTML utilzado
 para renderizar la vista previa del Graph.`),pr(),S.seriesIdGraph=l}).catch(b=>{b.response?S.graphErrorMap=b.response.data.errors:S.graphErrorMap.push(b.message);let y="";S.graphErrorMap.forEach(C=>{y+=`
`+C.error}),je(y),He()})}function mn(){if(!S){S={cardParameters:Q,graphicParameters:U,cardErrorMap:new Array,graphErrorMap:new Array,seriesIdGraph:new Array};const r=document.getElementById("previewButtonCard");r==null||r.addEventListener("click",dn);const e=document.getElementById("generateCardHTML");e==null||e.addEventListener("click",Kt);const t=document.getElementById("previewButtonGraph");t==null||t.addEventListener("click",pn);const n=document.getElementById("generateGraphHTML");n==null||n.addEventListener("click",Qt),be(cn),ve(dr)}}function mr(r,e){let t={ids:r.join(",")},n=z(P({},t),{collapse:e,collapse_aggregation:"sum"}),s={params:e?n:t};return console.log(s),Ht.get(ln,s)}window.onload=mn;