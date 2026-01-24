(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function sA(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var xd={exports:{}},yl={};var rx;function rA(){if(rx)return yl;rx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return yl.Fragment=t,yl.jsx=n,yl.jsxs=n,yl}var ox;function oA(){return ox||(ox=1,xd.exports=rA()),xd.exports}var ve=oA(),yd={exports:{}},ce={};var lx;function lA(){if(lx)return ce;lx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function x(O,et,gt){this.props=O,this.context=et,this.refs=M,this.updater=gt||E}x.prototype.isReactComponent={},x.prototype.setState=function(O,et){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,et,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function R(O,et,gt){this.props=O,this.context=et,this.refs=M,this.updater=gt||E}var L=R.prototype=new D;L.constructor=R,b(L,x.prototype),L.isPureReactComponent=!0;var P=Array.isArray;function z(){}var I={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function A(O,et,gt){var Tt=gt.ref;return{$$typeof:i,type:O,key:et,ref:Tt!==void 0?Tt:null,props:gt}}function U(O,et){return A(O.type,et,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function at(O){var et={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return et[gt]})}var q=/\/+/g;function it(O,et){return typeof O=="object"&&O!==null&&O.key!=null?at(""+O.key):et.toString(36)}function Y(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(z,z):(O.status="pending",O.then(function(et){O.status==="pending"&&(O.status="fulfilled",O.value=et)},function(et){O.status==="pending"&&(O.status="rejected",O.reason=et)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,et,gt,Tt,It){var J=typeof O;(J==="undefined"||J==="boolean")&&(O=null);var ct=!1;if(O===null)ct=!0;else switch(J){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(O.$$typeof){case i:case t:ct=!0;break;case g:return ct=O._init,N(ct(O._payload),et,gt,Tt,It)}}if(ct)return It=It(O),ct=Tt===""?"."+it(O,0):Tt,P(It)?(gt="",ct!=null&&(gt=ct.replace(q,"$&/")+"/"),N(It,et,gt,"",function(Ot){return Ot})):It!=null&&(H(It)&&(It=U(It,gt+(It.key==null||O&&O.key===It.key?"":(""+It.key).replace(q,"$&/")+"/")+ct)),et.push(It)),1;ct=0;var St=Tt===""?".":Tt+":";if(P(O))for(var Dt=0;Dt<O.length;Dt++)Tt=O[Dt],J=St+it(Tt,Dt),ct+=N(Tt,et,gt,J,It);else if(Dt=y(O),typeof Dt=="function")for(O=Dt.call(O),Dt=0;!(Tt=O.next()).done;)Tt=Tt.value,J=St+it(Tt,Dt++),ct+=N(Tt,et,gt,J,It);else if(J==="object"){if(typeof O.then=="function")return N(Y(O),et,gt,Tt,It);throw et=String(O),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ct}function B(O,et,gt){if(O==null)return O;var Tt=[],It=0;return N(O,Tt,"","",function(J){return et.call(gt,J,It++)}),Tt}function K(O){if(O._status===-1){var et=O._result;et=et(),et.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=et)}if(O._status===1)return O._result.default;throw O._result}var dt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},mt={map:B,forEach:function(O,et,gt){B(O,function(){et.apply(this,arguments)},gt)},count:function(O){var et=0;return B(O,function(){et++}),et},toArray:function(O){return B(O,function(et){return et})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ce.Activity=v,ce.Children=mt,ce.Component=x,ce.Fragment=n,ce.Profiler=o,ce.PureComponent=R,ce.StrictMode=s,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},ce.cache=function(O){return function(){return O.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(O,et,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Tt=b({},O.props),It=O.key;if(et!=null)for(J in et.key!==void 0&&(It=""+et.key),et)!k.call(et,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&et.ref===void 0||(Tt[J]=et[J]);var J=arguments.length-2;if(J===1)Tt.children=gt;else if(1<J){for(var ct=Array(J),St=0;St<J;St++)ct[St]=arguments[St+2];Tt.children=ct}return A(O.type,It,Tt)},ce.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ce.createElement=function(O,et,gt){var Tt,It={},J=null;if(et!=null)for(Tt in et.key!==void 0&&(J=""+et.key),et)k.call(et,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(It[Tt]=et[Tt]);var ct=arguments.length-2;if(ct===1)It.children=gt;else if(1<ct){for(var St=Array(ct),Dt=0;Dt<ct;Dt++)St[Dt]=arguments[Dt+2];It.children=St}if(O&&O.defaultProps)for(Tt in ct=O.defaultProps,ct)It[Tt]===void 0&&(It[Tt]=ct[Tt]);return A(O,J,It)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(O){return{$$typeof:f,render:O}},ce.isValidElement=H,ce.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:K}},ce.memo=function(O,et){return{$$typeof:d,type:O,compare:et===void 0?null:et}},ce.startTransition=function(O){var et=I.T,gt={};I.T=gt;try{var Tt=O(),It=I.S;It!==null&&It(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(z,dt)}catch(J){dt(J)}finally{et!==null&&gt.types!==null&&(et.types=gt.types),I.T=et}},ce.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ce.use=function(O){return I.H.use(O)},ce.useActionState=function(O,et,gt){return I.H.useActionState(O,et,gt)},ce.useCallback=function(O,et){return I.H.useCallback(O,et)},ce.useContext=function(O){return I.H.useContext(O)},ce.useDebugValue=function(){},ce.useDeferredValue=function(O,et){return I.H.useDeferredValue(O,et)},ce.useEffect=function(O,et){return I.H.useEffect(O,et)},ce.useEffectEvent=function(O){return I.H.useEffectEvent(O)},ce.useId=function(){return I.H.useId()},ce.useImperativeHandle=function(O,et,gt){return I.H.useImperativeHandle(O,et,gt)},ce.useInsertionEffect=function(O,et){return I.H.useInsertionEffect(O,et)},ce.useLayoutEffect=function(O,et){return I.H.useLayoutEffect(O,et)},ce.useMemo=function(O,et){return I.H.useMemo(O,et)},ce.useOptimistic=function(O,et){return I.H.useOptimistic(O,et)},ce.useReducer=function(O,et,gt){return I.H.useReducer(O,et,gt)},ce.useRef=function(O){return I.H.useRef(O)},ce.useState=function(O){return I.H.useState(O)},ce.useSyncExternalStore=function(O,et,gt){return I.H.useSyncExternalStore(O,et,gt)},ce.useTransition=function(){return I.H.useTransition()},ce.version="19.2.3",ce}var cx;function Vm(){return cx||(cx=1,yd.exports=lA()),yd.exports}var Nt=Vm();const NS=sA(Nt);var Sd={exports:{}},Sl={},Md={exports:{}},Ed={};var ux;function cA(){return ux||(ux=1,(function(i){function t(N,B){var K=N.length;N.push(B);t:for(;0<K;){var dt=K-1>>>1,mt=N[dt];if(0<o(mt,B))N[dt]=B,N[K]=mt,K=dt;else break t}}function n(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var B=N[0],K=N.pop();if(K!==B){N[0]=K;t:for(var dt=0,mt=N.length,O=mt>>>1;dt<O;){var et=2*(dt+1)-1,gt=N[et],Tt=et+1,It=N[Tt];if(0>o(gt,K))Tt<mt&&0>o(It,gt)?(N[dt]=It,N[Tt]=K,dt=Tt):(N[dt]=gt,N[et]=K,dt=et);else if(Tt<mt&&0>o(It,K))N[dt]=It,N[Tt]=K,dt=Tt;else break t}}return B}function o(N,B){var K=N.sortIndex-B.sortIndex;return K!==0?K:N.id-B.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var p=[],d=[],g=1,v=null,_=3,y=!1,E=!1,b=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var B=n(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=N)s(d),B.sortIndex=B.expirationTime,t(p,B);else break;B=n(d)}}function P(N){if(b=!1,L(N),!E)if(n(p)!==null)E=!0,z||(z=!0,at());else{var B=n(d);B!==null&&Y(P,B.startTime-N)}}var z=!1,I=-1,k=5,A=-1;function U(){return M?!0:!(i.unstable_now()-A<k)}function H(){if(M=!1,z){var N=i.unstable_now();A=N;var B=!0;try{t:{E=!1,b&&(b=!1,D(I),I=-1),y=!0;var K=_;try{e:{for(L(N),v=n(p);v!==null&&!(v.expirationTime>N&&U());){var dt=v.callback;if(typeof dt=="function"){v.callback=null,_=v.priorityLevel;var mt=dt(v.expirationTime<=N);if(N=i.unstable_now(),typeof mt=="function"){v.callback=mt,L(N),B=!0;break e}v===n(p)&&s(p),L(N)}else s(p);v=n(p)}if(v!==null)B=!0;else{var O=n(d);O!==null&&Y(P,O.startTime-N),B=!1}}break t}finally{v=null,_=K,y=!1}B=void 0}}finally{B?at():z=!1}}}var at;if(typeof R=="function")at=function(){R(H)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,it=q.port2;q.port1.onmessage=H,at=function(){it.postMessage(null)}}else at=function(){x(H,0)};function Y(N,B){I=x(function(){N(i.unstable_now())},B)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(N){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var K=_;_=B;try{return N()}finally{_=K}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=_;_=N;try{return B()}finally{_=K}},i.unstable_scheduleCallback=function(N,B,K){var dt=i.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?dt+K:dt):K=dt,N){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=K+mt,N={id:g++,callback:B,priorityLevel:N,startTime:K,expirationTime:mt,sortIndex:-1},K>dt?(N.sortIndex=K,t(d,N),n(p)===null&&N===n(d)&&(b?(D(I),I=-1):b=!0,Y(P,K-dt))):(N.sortIndex=mt,t(p,N),E||y||(E=!0,z||(z=!0,at()))),N},i.unstable_shouldYield=U,i.unstable_wrapCallback=function(N){var B=_;return function(){var K=_;_=B;try{return N.apply(this,arguments)}finally{_=K}}}})(Ed)),Ed}var fx;function uA(){return fx||(fx=1,Md.exports=cA()),Md.exports}var Td={exports:{}},Xn={};var hx;function fA(){if(hx)return Xn;hx=1;var i=Vm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},Xn.flushSync=function(p){var d=u.T,g=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=d,s.p=g,s.d.f()}},Xn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(p,d))},Xn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Xn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Xn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(p)},Xn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Xn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=f(d.as,d.crossOrigin);s.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(p)},Xn.requestFormReset=function(p){s.d.r(p)},Xn.unstable_batchedUpdates=function(p,d){return p(d)},Xn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Xn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Xn.version="19.2.3",Xn}var dx;function hA(){if(dx)return Td.exports;dx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Td.exports=fA(),Td.exports}var px;function dA(){if(px)return Sl;px=1;var i=uA(),t=Vm(),n=hA();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function d(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),a;m=m.sibling}throw Error(s(188))}if(r.return!==l.return)r=h,l=m;else{for(var S=!1,C=h.child;C;){if(C===r){S=!0,r=h,l=m;break}if(C===l){S=!0,l=h,r=m;break}C=C.sibling}if(!S){for(C=m.child;C;){if(C===r){S=!0,r=m,l=h;break}if(C===l){S=!0,l=m,r=h;break}C=C.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),R=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var q=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case z:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case R:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case L:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return a=e.displayName||null,a!==null?a:it(e.type)||"Memo";case k:a=e._payload,e=e._init;try{return it(e(a))}catch{}}return null}var Y=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},dt=[],mt=-1;function O(e){return{current:e}}function et(e){0>mt||(e.current=dt[mt],dt[mt]=null,mt--)}function gt(e,a){mt++,dt[mt]=e.current,e.current=a}var Tt=O(null),It=O(null),J=O(null),ct=O(null);function St(e,a){switch(gt(J,a),gt(It,e),gt(Tt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?w_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=w_(a),e=D_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(Tt),gt(Tt,e)}function Dt(){et(Tt),et(It),et(J)}function Ot(e){e.memoizedState!==null&&gt(ct,e);var a=Tt.current,r=D_(a,e.type);a!==r&&(gt(It,e),gt(Tt,r))}function fe(e){It.current===e&&(et(Tt),et(It)),ct.current===e&&(et(ct),gl._currentValue=K)}var ze,oe;function le(e){if(ze===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);ze=a&&a[1]||"",oe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+e+oe}var ye=!1;function Vt(e,a){if(!e||ye)return"";ye=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ut){var rt=ut}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ut){rt=ut}e.call(_t.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],C=m[1];if(S&&C){var V=S.split(`
`),nt=C.split(`
`);for(h=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(l===V.length||h===nt.length)for(l=V.length-1,h=nt.length-1;1<=l&&0<=h&&V[l]!==nt[h];)h--;for(;1<=l&&0<=h;l--,h--)if(V[l]!==nt[h]){if(l!==1||h!==1)do if(l--,h--,0>h||V[l]!==nt[h]){var ht=`
`+V[l].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=l&&0<=h);break}}}finally{ye=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?le(r):""}function se(e,a){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==a&&a!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return Vt(e.type,!1);case 11:return Vt(e.type.render,!1);case 1:return Vt(e.type,!0);case 31:return le("Activity");default:return""}}function G(e){try{var a="",r=null;do a+=se(e,r),r=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var be=Object.prototype.hasOwnProperty,_e=i.unstable_scheduleCallback,Ue=i.unstable_cancelCallback,Kt=i.unstable_shouldYield,F=i.unstable_requestPaint,T=i.unstable_now,j=i.unstable_getCurrentPriorityLevel,pt=i.unstable_ImmediatePriority,yt=i.unstable_UserBlockingPriority,ft=i.unstable_NormalPriority,Qt=i.unstable_LowPriority,Ct=i.unstable_IdlePriority,qt=i.log,ie=i.unstable_setDisableYieldValue,Et=null,bt=null;function Ht(e){if(typeof qt=="function"&&ie(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,e)}catch{}}var Bt=Math.clz32?Math.clz32:W,wt=Math.log,de=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(wt(e)/de|0)|0}var Lt=256,At=262144,zt=4194304;function Mt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?h=Mt(l):(S&=C,S!==0?h=Mt(S):r||(r=C&~e,r!==0&&(h=Mt(r))))):(C=l&~m,C!==0?h=Mt(C):S!==0?h=Mt(S):r||(r=l&~e,r!==0&&(h=Mt(r)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,r=a&-a,m>=r||m===32&&(r&4194048)!==0)?a:h}function Rt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function ae(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ge(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function we(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function kn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oi(e,a,r,l,h,m){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,nt=e.hiddenUpdates;for(r=S&~r;0<r;){var ht=31-Bt(r),_t=1<<ht;C[ht]=0,V[ht]=-1;var rt=nt[ht];if(rt!==null)for(nt[ht]=null,ht=0;ht<rt.length;ht++){var ut=rt[ht];ut!==null&&(ut.lane&=-536870913)}r&=~_t}l!==0&&ac(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(S&~a))}function ac(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Bt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Co(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-Bt(r),h=1<<l;h&a|e[l]&a&&(e[l]|=a),r&=~h}}function dr(e,a){var r=a&-a;return r=(r&42)!==0?1:wo(r),(r&(e.suspendedLanes|a))!==0?0:r}function wo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Do(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:$_(e.type))}function Qi(e,a){var r=B.p;try{return B.p=e,a()}finally{B.p=r}}var xi=Math.random().toString(36).slice(2),pn="__reactFiber$"+xi,Un="__reactProps$"+xi,Fi="__reactContainer$"+xi,mr="__reactEvents$"+xi,gr="__reactListeners$"+xi,sc="__reactHandles$"+xi,Uo="__reactResources$"+xi,Us="__reactMarker$"+xi;function Lo(e){delete e[pn],delete e[Un],delete e[mr],delete e[gr],delete e[sc]}function Xa(e){var a=e[pn];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Fi]||r[pn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=I_(e);e!==null;){if(r=e[pn])return r;e=I_(e)}return a}e=r,r=e.parentNode}return null}function Wa(e){if(e=e[pn]||e[Fi]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Ls(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function qa(e){var a=e[Uo];return a||(a=e[Uo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function w(e){e[Us]=!0}var Z=new Set,ot={};function st(e,a){$(e,a),$(e+"Capture",a)}function $(e,a){for(ot[e]=a,e=0;e<a.length;e++)Z.add(a[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Pt={};function kt(e){return be.call(Pt,e)?!0:be.call(Gt,e)?!1:Ut.test(e)?Pt[e]=!0:(Gt[e]=!0,!1)}function Yt(e,a,r){if(kt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function te(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function jt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fe(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function en(e,a,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return h.call(this)},set:function(S){r=""+S,m.call(this,S)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Je(e){if(!e._valueTracker){var a=Fe(e)?"checked":"value";e._valueTracker=en(e,a,""+e[a])}}function Ve(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=Fe(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ie=/[\n"\\]/g;function re(e){return e.replace(Ie,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ln(e,a,r,l,h,m,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),a!=null?S==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ee(a)):e.value!==""+ee(a)&&(e.value=""+ee(a)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),a!=null?Nn(e,S,ee(a)):r!=null?Nn(e,S,ee(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ee(C):e.removeAttribute("name")}function ha(e,a,r,l,h,m,S,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){Je(e);return}r=r!=null?""+ee(r):"",a=a!=null?""+ee(a):r,C||a===e.value||(e.value=a),e.defaultValue=a}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Je(e)}function Nn(e,a,r){a==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function yi(e,a,r,l){if(e=e.options,a){a={};for(var h=0;h<r.length;h++)a["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=a.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ee(r),a=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}a!==null||e[h].disabled||(a=e[h])}a!==null&&(a.selected=!0)}}function ke(e,a,r){if(a!=null&&(a=""+ee(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+ee(r):""}function Pn(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(Y(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=ee(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Je(e)}function Mn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var On=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fn(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||On.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function vr(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in a)l=a[h],a.hasOwnProperty(h)&&r[h]!==l&&Fn(e,h,l)}else for(var m in a)a.hasOwnProperty(m)&&Fn(e,m,a[m])}function Ii(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rc(e){return nT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var gf=null;function vf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,xr=null;function Cg(e){var a=Wa(e);if(a&&(e=a.stateNode)){var r=e[Un]||null;t:switch(e=a.stateNode,a.type){case"input":if(Ln(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+re(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var h=l[Un]||null;if(!h)throw Error(s(90));Ln(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&Ve(l)}break t;case"textarea":ke(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&yi(e,!!r.multiple,a,!1)}}}var _f=!1;function wg(e,a,r){if(_f)return e(a,r);_f=!0;try{var l=e(a);return l}finally{if(_f=!1,(_r!==null||xr!==null)&&(Yc(),_r&&(a=_r,e=xr,xr=_r=null,Cg(a),e)))for(a=0;a<e.length;a++)Cg(e[a])}}function No(e,a){var r=e.stateNode;if(r===null)return null;var l=r[Un]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=!1;if(pa)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){xf=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{xf=!1}var Ya=null,yf=null,oc=null;function Dg(){if(oc)return oc;var e,a=yf,r=a.length,l,h="value"in Ya?Ya.value:Ya.textContent,m=h.length;for(e=0;e<r&&a[e]===h[e];e++);var S=r-e;for(l=1;l<=S&&a[r-l]===h[m-l];l++);return oc=h.slice(e,1<l?1-l:void 0)}function lc(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function cc(){return!0}function Ug(){return!1}function $n(e){function a(r,l,h,m,S){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?cc:Ug,this.isPropagationStopped=Ug,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),a}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=$n(Ns),Oo=v({},Ns,{view:0,detail:0}),iT=$n(Oo),Sf,Mf,Fo,fc=v({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fo&&(Fo&&e.type==="mousemove"?(Sf=e.screenX-Fo.screenX,Mf=e.screenY-Fo.screenY):Mf=Sf=0,Fo=e),Sf)},movementY:function(e){return"movementY"in e?e.movementY:Mf}}),Lg=$n(fc),aT=v({},fc,{dataTransfer:0}),sT=$n(aT),rT=v({},Oo,{relatedTarget:0}),Ef=$n(rT),oT=v({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),lT=$n(oT),cT=v({},Ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uT=$n(cT),fT=v({},Ns,{data:0}),Ng=$n(fT),hT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mT(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=pT[e])?!!a[e]:!1}function Tf(){return mT}var gT=v({},Oo,{key:function(e){if(e.key){var a=hT[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=lc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(e){return e.type==="keypress"?lc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vT=$n(gT),_T=v({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pg=$n(_T),xT=v({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),yT=$n(xT),ST=v({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),MT=$n(ST),ET=v({},fc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),TT=$n(ET),bT=v({},Ns,{newState:0,oldState:0}),AT=$n(bT),RT=[9,13,27,32],bf=pa&&"CompositionEvent"in window,Io=null;pa&&"documentMode"in document&&(Io=document.documentMode);var CT=pa&&"TextEvent"in window&&!Io,Og=pa&&(!bf||Io&&8<Io&&11>=Io),Fg=" ",Ig=!1;function Bg(e,a){switch(e){case"keyup":return RT.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function wT(e,a){switch(e){case"compositionend":return zg(a);case"keypress":return a.which!==32?null:(Ig=!0,Fg);case"textInput":return e=a.data,e===Fg&&Ig?null:e;default:return null}}function DT(e,a){if(yr)return e==="compositionend"||!bf&&Bg(e,a)?(e=Dg(),oc=yf=Ya=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Og&&a.locale!=="ko"?null:a.data;default:return null}}var UT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!UT[e.type]:a==="textarea"}function Hg(e,a,r,l){_r?xr?xr.push(l):xr=[l]:_r=l,a=tu(a,"onChange"),0<a.length&&(r=new uc("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var Bo=null,zo=null;function LT(e){E_(e,0)}function hc(e){var a=Ls(e);if(Ve(a))return e}function Gg(e,a){if(e==="change")return a}var kg=!1;if(pa){var Af;if(pa){var Rf="oninput"in document;if(!Rf){var Xg=document.createElement("div");Xg.setAttribute("oninput","return;"),Rf=typeof Xg.oninput=="function"}Af=Rf}else Af=!1;kg=Af&&(!document.documentMode||9<document.documentMode)}function Wg(){Bo&&(Bo.detachEvent("onpropertychange",qg),zo=Bo=null)}function qg(e){if(e.propertyName==="value"&&hc(zo)){var a=[];Hg(a,zo,e,vf(e)),wg(LT,a)}}function NT(e,a,r){e==="focusin"?(Wg(),Bo=a,zo=r,Bo.attachEvent("onpropertychange",qg)):e==="focusout"&&Wg()}function PT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hc(zo)}function OT(e,a){if(e==="click")return hc(a)}function FT(e,a){if(e==="input"||e==="change")return hc(a)}function IT(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var li=typeof Object.is=="function"?Object.is:IT;function Vo(e,a){if(li(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!be.call(a,h)||!li(e[h],a[h]))return!1}return!0}function Yg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jg(e,a){var r=Yg(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Yg(r)}}function Kg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Kg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Zg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Jt(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Jt(e.document)}return a}function Cf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var BT=pa&&"documentMode"in document&&11>=document.documentMode,Sr=null,wf=null,Ho=null,Df=!1;function Qg(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Df||Sr==null||Sr!==Jt(l)||(l=Sr,"selectionStart"in l&&Cf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ho&&Vo(Ho,l)||(Ho=l,l=tu(wf,"onSelect"),0<l.length&&(a=new uc("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=Sr)))}function Ps(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var Mr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Uf={},Jg={};pa&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Os(e){if(Uf[e])return Uf[e];if(!Mr[e])return e;var a=Mr[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in Jg)return Uf[e]=a[r];return e}var $g=Os("animationend"),t0=Os("animationiteration"),e0=Os("animationstart"),zT=Os("transitionrun"),VT=Os("transitionstart"),HT=Os("transitioncancel"),n0=Os("transitionend"),i0=new Map,Lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lf.push("scrollEnd");function Bi(e,a){i0.set(e,a),st(a,[e])}var dc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],Er=0,Nf=0;function pc(){for(var e=Er,a=Nf=Er=0;a<e;){var r=Si[a];Si[a++]=null;var l=Si[a];Si[a++]=null;var h=Si[a];Si[a++]=null;var m=Si[a];if(Si[a++]=null,l!==null&&h!==null){var S=l.pending;S===null?h.next=h:(h.next=S.next,S.next=h),l.pending=h}m!==0&&a0(r,h,m)}}function mc(e,a,r,l){Si[Er++]=e,Si[Er++]=a,Si[Er++]=r,Si[Er++]=l,Nf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Pf(e,a,r,l){return mc(e,a,r,l),gc(e)}function Fs(e,a){return mc(e,null,null,a),gc(e)}function a0(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&a!==null&&(h=31-Bt(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[a]:l.push(a),a.lane=r|536870912),m):null}function gc(e){if(50<cl)throw cl=0,kh=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Tr={};function GT(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,a,r,l){return new GT(e,a,r,l)}function Of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,a){var r=e.alternate;return r===null?(r=ci(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function s0(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function vc(e,a,r,l,h,m){var S=0;if(l=e,typeof e=="function")Of(e)&&(S=1);else if(typeof e=="string")S=Yb(e,r,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ci(31,r,a,h),e.elementType=A,e.lanes=m,e;case b:return Is(r.children,h,m,a);case M:S=8,h|=24;break;case x:return e=ci(12,r,a,h|2),e.elementType=x,e.lanes=m,e;case P:return e=ci(13,r,a,h),e.elementType=P,e.lanes=m,e;case z:return e=ci(19,r,a,h),e.elementType=z,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:S=10;break t;case D:S=9;break t;case L:S=11;break t;case I:S=14;break t;case k:S=16,l=null;break t}S=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=ci(S,r,a,h),a.elementType=e,a.type=l,a.lanes=m,a}function Is(e,a,r,l){return e=ci(7,e,l,a),e.lanes=r,e}function Ff(e,a,r){return e=ci(6,e,null,a),e.lanes=r,e}function r0(e){var a=ci(18,null,null,0);return a.stateNode=e,a}function If(e,a,r){return a=ci(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var o0=new WeakMap;function Mi(e,a){if(typeof e=="object"&&e!==null){var r=o0.get(e);return r!==void 0?r:(a={value:e,source:a,stack:G(a)},o0.set(e,a),a)}return{value:e,source:a,stack:G(a)}}var br=[],Ar=0,_c=null,Go=0,Ei=[],Ti=0,ja=null,Ji=1,$i="";function ga(e,a){br[Ar++]=Go,br[Ar++]=_c,_c=e,Go=a}function l0(e,a,r){Ei[Ti++]=Ji,Ei[Ti++]=$i,Ei[Ti++]=ja,ja=e;var l=Ji;e=$i;var h=32-Bt(l)-1;l&=~(1<<h),r+=1;var m=32-Bt(a)+h;if(30<m){var S=h-h%5;m=(l&(1<<S)-1).toString(32),l>>=S,h-=S,Ji=1<<32-Bt(a)+h|r<<h|l,$i=m+e}else Ji=1<<m|r<<h|l,$i=e}function Bf(e){e.return!==null&&(ga(e,1),l0(e,1,0))}function zf(e){for(;e===_c;)_c=br[--Ar],br[Ar]=null,Go=br[--Ar],br[Ar]=null;for(;e===ja;)ja=Ei[--Ti],Ei[Ti]=null,$i=Ei[--Ti],Ei[Ti]=null,Ji=Ei[--Ti],Ei[Ti]=null}function c0(e,a){Ei[Ti++]=Ji,Ei[Ti++]=$i,Ei[Ti++]=ja,Ji=a.id,$i=a.overflow,ja=e}var In=null,$e=null,Ae=!1,Ka=null,bi=!1,Vf=Error(s(519));function Za(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ko(Mi(a,e)),Vf}function u0(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[pn]=e,a[Un]=l,r){case"dialog":Me("cancel",a),Me("close",a);break;case"iframe":case"object":case"embed":Me("load",a);break;case"video":case"audio":for(r=0;r<fl.length;r++)Me(fl[r],a);break;case"source":Me("error",a);break;case"img":case"image":case"link":Me("error",a),Me("load",a);break;case"details":Me("toggle",a);break;case"input":Me("invalid",a),ha(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",a);break;case"textarea":Me("invalid",a),Pn(a,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||R_(a.textContent,r)?(l.popover!=null&&(Me("beforetoggle",a),Me("toggle",a)),l.onScroll!=null&&Me("scroll",a),l.onScrollEnd!=null&&Me("scrollend",a),l.onClick!=null&&(a.onclick=da),a=!0):a=!1,a||Za(e,!0)}function f0(e){for(In=e.return;In;)switch(In.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:In=In.return}}function Rr(e){if(e!==In)return!1;if(!Ae)return f0(e),Ae=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||ad(e.type,e.memoizedProps)),r=!r),r&&$e&&Za(e),f0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=F_(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=F_(e)}else a===27?(a=$e,us(e.type)?(e=cd,cd=null,$e=e):$e=a):$e=In?Ri(e.stateNode.nextSibling):null;return!0}function Bs(){$e=In=null,Ae=!1}function Hf(){var e=Ka;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Ka=null),e}function ko(e){Ka===null?Ka=[e]:Ka.push(e)}var Gf=O(null),zs=null,va=null;function Qa(e,a,r){gt(Gf,a._currentValue),a._currentValue=r}function _a(e){e._currentValue=Gf.current,et(Gf)}function kf(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function Xf(e,a,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var S=h.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=h;for(var V=0;V<a.length;V++)if(C.context===a[V]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),kf(m.return,r,e),l||(S=null);break t}m=C.next}}else if(h.tag===18){if(S=h.return,S===null)throw Error(s(341));S.lanes|=r,m=S.alternate,m!==null&&(m.lanes|=r),kf(S,r,e),S=null}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===e){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}}function Cr(e,a,r,l){e=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var S=h.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var C=h.type;li(h.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(h===ct.current){if(S=h.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}h=h.return}e!==null&&Xf(a,e,r,l),a.flags|=262144}function xc(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vs(e){zs=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bn(e){return h0(zs,e)}function yc(e,a){return zs===null&&Vs(e),h0(e,a)}function h0(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},va===null){if(e===null)throw Error(s(308));va=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else va=va.next=a;return r}var kT=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},XT=i.unstable_scheduleCallback,WT=i.unstable_NormalPriority,mn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wf(){return{controller:new kT,data:new Map,refCount:0}}function Xo(e){e.refCount--,e.refCount===0&&XT(WT,function(){e.controller.abort()})}var Wo=null,qf=0,wr=0,Dr=null;function qT(e,a){if(Wo===null){var r=Wo=[];qf=0,wr=Kh(),Dr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return qf++,a.then(d0,d0),a}function d0(){if(--qf===0&&Wo!==null){Dr!==null&&(Dr.status="fulfilled");var e=Wo;Wo=null,wr=0,Dr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function YT(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var h=0;h<r.length;h++)(0,r[h])(a)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var p0=N.S;N.S=function(e,a){Qv=T(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&qT(e,a),p0!==null&&p0(e,a)};var Hs=O(null);function Yf(){var e=Hs.current;return e!==null?e:Ze.pooledCache}function Sc(e,a){a===null?gt(Hs,Hs.current):gt(Hs,a.pool)}function m0(){var e=Yf();return e===null?null:{parent:mn._currentValue,pool:e}}var Ur=Error(s(460)),jf=Error(s(474)),Mc=Error(s(542)),Ec={then:function(){}};function g0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function v0(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(da,da),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,x0(e),e;default:if(typeof a.status=="string")a.then(da,da);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=l}},function(l){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,x0(e),e}throw ks=a,Ur}}function Gs(e){try{var a=e._init;return a(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ks=r,Ur):r}}var ks=null;function _0(){if(ks===null)throw Error(s(459));var e=ks;return ks=null,e}function x0(e){if(e===Ur||e===Mc)throw Error(s(483))}var Lr=null,qo=0;function Tc(e){var a=qo;return qo+=1,Lr===null&&(Lr=[]),v0(Lr,e,a)}function Yo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function bc(e,a){throw a.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function y0(e){function a(Q,X){if(e){var tt=Q.deletions;tt===null?(Q.deletions=[X],Q.flags|=16):tt.push(X)}}function r(Q,X){if(!e)return null;for(;X!==null;)a(Q,X),X=X.sibling;return null}function l(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function h(Q,X){return Q=ma(Q,X),Q.index=0,Q.sibling=null,Q}function m(Q,X,tt){return Q.index=tt,e?(tt=Q.alternate,tt!==null?(tt=tt.index,tt<X?(Q.flags|=67108866,X):tt):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,X,tt,vt){return X===null||X.tag!==6?(X=Ff(tt,Q.mode,vt),X.return=Q,X):(X=h(X,tt),X.return=Q,X)}function V(Q,X,tt,vt){var $t=tt.type;return $t===b?ht(Q,X,tt.props.children,vt,tt.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===k&&Gs($t)===X.type)?(X=h(X,tt.props),Yo(X,tt),X.return=Q,X):(X=vc(tt.type,tt.key,tt.props,null,Q.mode,vt),Yo(X,tt),X.return=Q,X)}function nt(Q,X,tt,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=If(tt,Q.mode,vt),X.return=Q,X):(X=h(X,tt.children||[]),X.return=Q,X)}function ht(Q,X,tt,vt,$t){return X===null||X.tag!==7?(X=Is(tt,Q.mode,vt,$t),X.return=Q,X):(X=h(X,tt),X.return=Q,X)}function _t(Q,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ff(""+X,Q.mode,tt),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return tt=vc(X.type,X.key,X.props,null,Q.mode,tt),Yo(tt,X),tt.return=Q,tt;case E:return X=If(X,Q.mode,tt),X.return=Q,X;case k:return X=Gs(X),_t(Q,X,tt)}if(Y(X)||at(X))return X=Is(X,Q.mode,tt,null),X.return=Q,X;if(typeof X.then=="function")return _t(Q,Tc(X),tt);if(X.$$typeof===R)return _t(Q,yc(Q,X),tt);bc(Q,X)}return null}function rt(Q,X,tt,vt){var $t=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:C(Q,X,""+tt,vt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===$t?V(Q,X,tt,vt):null;case E:return tt.key===$t?nt(Q,X,tt,vt):null;case k:return tt=Gs(tt),rt(Q,X,tt,vt)}if(Y(tt)||at(tt))return $t!==null?null:ht(Q,X,tt,vt,null);if(typeof tt.then=="function")return rt(Q,X,Tc(tt),vt);if(tt.$$typeof===R)return rt(Q,X,yc(Q,tt),vt);bc(Q,tt)}return null}function ut(Q,X,tt,vt,$t){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(tt)||null,C(X,Q,""+vt,$t);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return Q=Q.get(vt.key===null?tt:vt.key)||null,V(X,Q,vt,$t);case E:return Q=Q.get(vt.key===null?tt:vt.key)||null,nt(X,Q,vt,$t);case k:return vt=Gs(vt),ut(Q,X,tt,vt,$t)}if(Y(vt)||at(vt))return Q=Q.get(tt)||null,ht(X,Q,vt,$t,null);if(typeof vt.then=="function")return ut(Q,X,tt,Tc(vt),$t);if(vt.$$typeof===R)return ut(Q,X,tt,yc(X,vt),$t);bc(X,vt)}return null}function Xt(Q,X,tt,vt){for(var $t=null,Le=null,Zt=X,pe=X=0,Te=null;Zt!==null&&pe<tt.length;pe++){Zt.index>pe?(Te=Zt,Zt=null):Te=Zt.sibling;var Ne=rt(Q,Zt,tt[pe],vt);if(Ne===null){Zt===null&&(Zt=Te);break}e&&Zt&&Ne.alternate===null&&a(Q,Zt),X=m(Ne,X,pe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne,Zt=Te}if(pe===tt.length)return r(Q,Zt),Ae&&ga(Q,pe),$t;if(Zt===null){for(;pe<tt.length;pe++)Zt=_t(Q,tt[pe],vt),Zt!==null&&(X=m(Zt,X,pe),Le===null?$t=Zt:Le.sibling=Zt,Le=Zt);return Ae&&ga(Q,pe),$t}for(Zt=l(Zt);pe<tt.length;pe++)Te=ut(Zt,Q,pe,tt[pe],vt),Te!==null&&(e&&Te.alternate!==null&&Zt.delete(Te.key===null?pe:Te.key),X=m(Te,X,pe),Le===null?$t=Te:Le.sibling=Te,Le=Te);return e&&Zt.forEach(function(ms){return a(Q,ms)}),Ae&&ga(Q,pe),$t}function ne(Q,X,tt,vt){if(tt==null)throw Error(s(151));for(var $t=null,Le=null,Zt=X,pe=X=0,Te=null,Ne=tt.next();Zt!==null&&!Ne.done;pe++,Ne=tt.next()){Zt.index>pe?(Te=Zt,Zt=null):Te=Zt.sibling;var ms=rt(Q,Zt,Ne.value,vt);if(ms===null){Zt===null&&(Zt=Te);break}e&&Zt&&ms.alternate===null&&a(Q,Zt),X=m(ms,X,pe),Le===null?$t=ms:Le.sibling=ms,Le=ms,Zt=Te}if(Ne.done)return r(Q,Zt),Ae&&ga(Q,pe),$t;if(Zt===null){for(;!Ne.done;pe++,Ne=tt.next())Ne=_t(Q,Ne.value,vt),Ne!==null&&(X=m(Ne,X,pe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne);return Ae&&ga(Q,pe),$t}for(Zt=l(Zt);!Ne.done;pe++,Ne=tt.next())Ne=ut(Zt,Q,pe,Ne.value,vt),Ne!==null&&(e&&Ne.alternate!==null&&Zt.delete(Ne.key===null?pe:Ne.key),X=m(Ne,X,pe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne);return e&&Zt.forEach(function(aA){return a(Q,aA)}),Ae&&ga(Q,pe),$t}function Ke(Q,X,tt,vt){if(typeof tt=="object"&&tt!==null&&tt.type===b&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var $t=tt.key;X!==null;){if(X.key===$t){if($t=tt.type,$t===b){if(X.tag===7){r(Q,X.sibling),vt=h(X,tt.props.children),vt.return=Q,Q=vt;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===k&&Gs($t)===X.type){r(Q,X.sibling),vt=h(X,tt.props),Yo(vt,tt),vt.return=Q,Q=vt;break t}r(Q,X);break}else a(Q,X);X=X.sibling}tt.type===b?(vt=Is(tt.props.children,Q.mode,vt,tt.key),vt.return=Q,Q=vt):(vt=vc(tt.type,tt.key,tt.props,null,Q.mode,vt),Yo(vt,tt),vt.return=Q,Q=vt)}return S(Q);case E:t:{for($t=tt.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){r(Q,X.sibling),vt=h(X,tt.children||[]),vt.return=Q,Q=vt;break t}else{r(Q,X);break}else a(Q,X);X=X.sibling}vt=If(tt,Q.mode,vt),vt.return=Q,Q=vt}return S(Q);case k:return tt=Gs(tt),Ke(Q,X,tt,vt)}if(Y(tt))return Xt(Q,X,tt,vt);if(at(tt)){if($t=at(tt),typeof $t!="function")throw Error(s(150));return tt=$t.call(tt),ne(Q,X,tt,vt)}if(typeof tt.then=="function")return Ke(Q,X,Tc(tt),vt);if(tt.$$typeof===R)return Ke(Q,X,yc(Q,tt),vt);bc(Q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(r(Q,X.sibling),vt=h(X,tt),vt.return=Q,Q=vt):(r(Q,X),vt=Ff(tt,Q.mode,vt),vt.return=Q,Q=vt),S(Q)):r(Q,X)}return function(Q,X,tt,vt){try{qo=0;var $t=Ke(Q,X,tt,vt);return Lr=null,$t}catch(Zt){if(Zt===Ur||Zt===Mc)throw Zt;var Le=ci(29,Zt,null,Q.mode);return Le.lanes=vt,Le.return=Q,Le}}}var Xs=y0(!0),S0=y0(!1),Ja=!1;function Kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zf(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ts(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var h=l.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),l.pending=a,a=gc(e),a0(e,null,r),a}return mc(e,l,a,r),gc(e)}function jo(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,Co(e,r)}}function Qf(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=S:m=m.next=S,r=r.next}while(r!==null);m===null?h=m=a:m=m.next=a}else h=m=a;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var Jf=!1;function Ko(){if(Jf){var e=Dr;if(e!==null)throw e}}function Zo(e,a,r,l){Jf=!1;var h=e.updateQueue;Ja=!1;var m=h.firstBaseUpdate,S=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var V=C,nt=V.next;V.next=null,S===null?m=nt:S.next=nt,S=V;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,C=ht.lastBaseUpdate,C!==S&&(C===null?ht.firstBaseUpdate=nt:C.next=nt,ht.lastBaseUpdate=V))}if(m!==null){var _t=h.baseState;S=0,ht=nt=V=null,C=m;do{var rt=C.lane&-536870913,ut=rt!==C.lane;if(ut?(Ee&rt)===rt:(l&rt)===rt){rt!==0&&rt===wr&&(Jf=!0),ht!==null&&(ht=ht.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Xt=e,ne=C;rt=a;var Ke=r;switch(ne.tag){case 1:if(Xt=ne.payload,typeof Xt=="function"){_t=Xt.call(Ke,_t,rt);break t}_t=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ne.payload,rt=typeof Xt=="function"?Xt.call(Ke,_t,rt):Xt,rt==null)break t;_t=v({},_t,rt);break t;case 2:Ja=!0}}rt=C.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ht===null?(nt=ht=ut,V=_t):ht=ht.next=ut,S|=rt;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;ut=C,C=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);ht===null&&(V=_t),h.baseState=V,h.firstBaseUpdate=nt,h.lastBaseUpdate=ht,m===null&&(h.shared.lanes=0),ss|=S,e.lanes=S,e.memoizedState=_t}}function M0(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function E0(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)M0(r[e],a)}var Nr=O(null),Ac=O(0);function T0(e,a){e=Ra,gt(Ac,e),gt(Nr,a),Ra=e|a.baseLanes}function $f(){gt(Ac,Ra),gt(Nr,Nr.current)}function th(){Ra=Ac.current,et(Nr),et(Ac)}var ui=O(null),Ai=null;function es(e){var a=e.alternate;gt(cn,cn.current&1),gt(ui,e),Ai===null&&(a===null||Nr.current!==null||a.memoizedState!==null)&&(Ai=e)}function eh(e){gt(cn,cn.current),gt(ui,e),Ai===null&&(Ai=e)}function b0(e){e.tag===22?(gt(cn,cn.current),gt(ui,e),Ai===null&&(Ai=e)):ns()}function ns(){gt(cn,cn.current),gt(ui,ui.current)}function fi(e){et(ui),Ai===e&&(Ai=null),et(cn)}var cn=O(0);function Rc(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||od(r)||ld(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var xa=0,he=null,Ye=null,gn=null,Cc=!1,Pr=!1,Ws=!1,wc=0,Qo=0,Or=null,jT=0;function sn(){throw Error(s(321))}function nh(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!li(e[r],a[r]))return!1;return!0}function ih(e,a,r,l,h,m){return xa=m,he=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=e===null||e.memoizedState===null?lv:_h,Ws=!1,m=r(l,h),Ws=!1,Pr&&(m=R0(a,r,l,h)),A0(e),m}function A0(e){N.H=tl;var a=Ye!==null&&Ye.next!==null;if(xa=0,gn=Ye=he=null,Cc=!1,Qo=0,Or=null,a)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&xc(e)&&(vn=!0))}function R0(e,a,r,l){he=e;var h=0;do{if(Pr&&(Or=null),Qo=0,Pr=!1,25<=h)throw Error(s(301));if(h+=1,gn=Ye=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}N.H=cv,m=a(r,l)}while(Pr);return m}function KT(){var e=N.H,a=e.useState()[0];return a=typeof a.then=="function"?Jo(a):a,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(he.flags|=1024),a}function ah(){var e=wc!==0;return wc=0,e}function sh(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function rh(e){if(Cc){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Cc=!1}xa=0,gn=Ye=he=null,Pr=!1,Qo=wc=0,Or=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?he.memoizedState=gn=e:gn=gn.next=e,gn}function un(){if(Ye===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var a=gn===null?he.memoizedState:gn.next;if(a!==null)gn=a,Ye=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},gn===null?he.memoizedState=gn=e:gn=gn.next=e}return gn}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(e){var a=Qo;return Qo+=1,Or===null&&(Or=[]),e=v0(Or,e,a),a=he,(gn===null?a.memoizedState:gn.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?lv:_h),e}function Uc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jo(e);if(e.$$typeof===R)return Bn(e)}throw Error(s(438,String(e)))}function oh(e){var a=null,r=he.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=he.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Dc(),he.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=U;return a.index++,r}function ya(e,a){return typeof a=="function"?a(e):a}function Lc(e){var a=un();return lh(a,Ye,e)}function lh(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var S=h.next;h.next=m.next,m.next=S}a.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{a=h.next;var C=S=null,V=null,nt=a,ht=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(Ee&_t)===_t:(xa&_t)===_t){var rt=nt.revertLane;if(rt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===wr&&(ht=!0);else if((xa&rt)===rt){nt=nt.next,rt===wr&&(ht=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(C=V=_t,S=m):V=V.next=_t,he.lanes|=rt,ss|=rt;_t=nt.action,Ws&&r(m,_t),m=nt.hasEagerState?nt.eagerState:r(m,_t)}else rt={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(C=V=rt,S=m):V=V.next=rt,he.lanes|=_t,ss|=_t;nt=nt.next}while(nt!==null&&nt!==a);if(V===null?S=m:V.next=C,!li(m,e.memoizedState)&&(vn=!0,ht&&(r=Dr,r!==null)))throw r;e.memoizedState=m,e.baseState=S,e.baseQueue=V,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ch(e){var a=un(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=a.memoizedState;if(h!==null){r.pending=null;var S=h=h.next;do m=e(m,S.action),S=S.next;while(S!==h);li(m,a.memoizedState)||(vn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),r.lastRenderedState=m}return[m,l]}function C0(e,a,r){var l=he,h=un(),m=Ae;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=a();var S=!li((Ye||h).memoizedState,r);if(S&&(h.memoizedState=r,vn=!0),h=h.queue,hh(U0.bind(null,l,h,e),[e]),h.getSnapshot!==a||S||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,Fr(9,{destroy:void 0},D0.bind(null,l,h,r,a),null),Ze===null)throw Error(s(349));m||(xa&127)!==0||w0(l,a,r)}return r}function w0(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=he.updateQueue,a===null?(a=Dc(),he.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function D0(e,a,r,l){a.value=r,a.getSnapshot=l,L0(a)&&N0(e)}function U0(e,a,r){return r(function(){L0(a)&&N0(e)})}function L0(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!li(e,r)}catch{return!0}}function N0(e){var a=Fs(e,2);a!==null&&ai(a,e,2)}function uh(e){var a=Kn();if(typeof e=="function"){var r=e;if(e=r(),Ws){Ht(!0);try{r()}finally{Ht(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},a}function P0(e,a,r,l){return e.baseState=r,lh(e,Ye,typeof l=="function"?l:ya)}function ZT(e,a,r,l,h){if(Oc(e))throw Error(s(485));if(e=a.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};N.T!==null?r(!0):m.isTransition=!1,l(m),r=a.pending,r===null?(m.next=a.pending=m,O0(a,m)):(m.next=r.next,a.pending=r.next=m)}}function O0(e,a){var r=a.action,l=a.payload,h=e.state;if(a.isTransition){var m=N.T,S={};N.T=S;try{var C=r(h,l),V=N.S;V!==null&&V(S,C),F0(e,a,C)}catch(nt){fh(e,a,nt)}finally{m!==null&&S.types!==null&&(m.types=S.types),N.T=m}}else try{m=r(h,l),F0(e,a,m)}catch(nt){fh(e,a,nt)}}function F0(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){I0(e,a,l)},function(l){return fh(e,a,l)}):I0(e,a,r)}function I0(e,a,r){a.status="fulfilled",a.value=r,B0(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,O0(e,r)))}function fh(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,B0(a),a=a.next;while(a!==l)}e.action=null}function B0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function z0(e,a){return a}function V0(e,a){if(Ae){var r=Ze.formState;if(r!==null){t:{var l=he;if(Ae){if($e){e:{for(var h=$e,m=bi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ri(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){$e=Ri(h.nextSibling),l=h.data==="F!";break t}}Za(l)}l=!1}l&&(a=r[0])}}return r=Kn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z0,lastRenderedState:a},r.queue=l,r=sv.bind(null,he,l),l.dispatch=r,l=uh(!1),m=vh.bind(null,he,!1,l.queue),l=Kn(),h={state:a,dispatch:null,action:e,pending:null},l.queue=h,r=ZT.bind(null,he,h,m,r),h.dispatch=r,l.memoizedState=e,[a,r,!1]}function H0(e){var a=un();return G0(a,Ye,e)}function G0(e,a,r){if(a=lh(e,a,z0)[0],e=Lc(ya)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Jo(a)}catch(S){throw S===Ur?Mc:S}else l=a;a=un();var h=a.queue,m=h.dispatch;return r!==a.memoizedState&&(he.flags|=2048,Fr(9,{destroy:void 0},QT.bind(null,h,r),null)),[l,m,e]}function QT(e,a){e.action=a}function k0(e){var a=un(),r=Ye;if(r!==null)return G0(a,r,e);un(),a=a.memoizedState,r=un();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function Fr(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=he.updateQueue,a===null&&(a=Dc(),he.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function X0(){return un().memoizedState}function Nc(e,a,r,l){var h=Kn();he.flags|=e,h.memoizedState=Fr(1|a,{destroy:void 0},r,l===void 0?null:l)}function Pc(e,a,r,l){var h=un();l=l===void 0?null:l;var m=h.memoizedState.inst;Ye!==null&&l!==null&&nh(l,Ye.memoizedState.deps)?h.memoizedState=Fr(a,m,r,l):(he.flags|=e,h.memoizedState=Fr(1|a,m,r,l))}function W0(e,a){Nc(8390656,8,e,a)}function hh(e,a){Pc(2048,8,e,a)}function JT(e){he.flags|=4;var a=he.updateQueue;if(a===null)a=Dc(),he.updateQueue=a,a.events=[e];else{var r=a.events;r===null?a.events=[e]:r.push(e)}}function q0(e){var a=un().memoizedState;return JT({ref:a,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function Y0(e,a){return Pc(4,2,e,a)}function j0(e,a){return Pc(4,4,e,a)}function K0(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Z0(e,a,r){r=r!=null?r.concat([e]):null,Pc(4,4,K0.bind(null,a,e),r)}function dh(){}function Q0(e,a){var r=un();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&nh(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function J0(e,a){var r=un();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&nh(a,l[1]))return l[0];if(l=e(),Ws){Ht(!0);try{e()}finally{Ht(!1)}}return r.memoizedState=[l,a],l}function ph(e,a,r){return r===void 0||(xa&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=a:(e.memoizedState=r,e=$v(),he.lanes|=e,ss|=e,r)}function $0(e,a,r,l){return li(r,a)?r:Nr.current!==null?(e=ph(e,r,l),li(e,a)||(vn=!0),e):(xa&42)===0||(xa&1073741824)!==0&&(Ee&261930)===0?(vn=!0,e.memoizedState=r):(e=$v(),he.lanes|=e,ss|=e,a)}function tv(e,a,r,l,h){var m=B.p;B.p=m!==0&&8>m?m:8;var S=N.T,C={};N.T=C,vh(e,!1,a,r);try{var V=h(),nt=N.S;if(nt!==null&&nt(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ht=YT(V,l);$o(e,a,ht,pi(e))}else $o(e,a,l,pi(e))}catch(_t){$o(e,a,{then:function(){},status:"rejected",reason:_t},pi())}finally{B.p=m,S!==null&&C.types!==null&&(S.types=C.types),N.T=S}}function $T(){}function mh(e,a,r,l){if(e.tag!==5)throw Error(s(476));var h=ev(e).queue;tv(e,h,a,K,r===null?$T:function(){return nv(e),r(l)})}function ev(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:K},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function nv(e){var a=ev(e);a.next===null&&(a=e.alternate.memoizedState),$o(e,a.next.queue,{},pi())}function gh(){return Bn(gl)}function iv(){return un().memoizedState}function av(){return un().memoizedState}function tb(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=pi();e=$a(r);var l=ts(a,e,r);l!==null&&(ai(l,a,r),jo(l,a,r)),a={cache:Wf()},e.payload=a;return}a=a.return}}function eb(e,a,r){var l=pi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Oc(e)?rv(a,r):(r=Pf(e,a,r,l),r!==null&&(ai(r,e,l),ov(r,a,l)))}function sv(e,a,r){var l=pi();$o(e,a,r,l)}function $o(e,a,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Oc(e))rv(a,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var S=a.lastRenderedState,C=m(S,r);if(h.hasEagerState=!0,h.eagerState=C,li(C,S))return mc(e,a,h,0),Ze===null&&pc(),!1}catch{}if(r=Pf(e,a,h,l),r!==null)return ai(r,e,l),ov(r,a,l),!0}return!1}function vh(e,a,r,l){if(l={lane:2,revertLane:Kh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Oc(e)){if(a)throw Error(s(479))}else a=Pf(e,r,l,2),a!==null&&ai(a,e,2)}function Oc(e){var a=e.alternate;return e===he||a!==null&&a===he}function rv(e,a){Pr=Cc=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function ov(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,Co(e,r)}}var tl={readContext:Bn,use:Uc,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};tl.useEffectEvent=sn;var lv={readContext:Bn,use:Uc,useCallback:function(e,a){return Kn().memoizedState=[e,a===void 0?null:a],e},useContext:Bn,useEffect:W0,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,Nc(4194308,4,K0.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Nc(4194308,4,e,a)},useInsertionEffect:function(e,a){Nc(4,2,e,a)},useMemo:function(e,a){var r=Kn();a=a===void 0?null:a;var l=e();if(Ws){Ht(!0);try{e()}finally{Ht(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=Kn();if(r!==void 0){var h=r(a);if(Ws){Ht(!0);try{r(a)}finally{Ht(!1)}}}else h=a;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=eb.bind(null,he,e),[l.memoizedState,e]},useRef:function(e){var a=Kn();return e={current:e},a.memoizedState=e},useState:function(e){e=uh(e);var a=e.queue,r=sv.bind(null,he,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:dh,useDeferredValue:function(e,a){var r=Kn();return ph(r,e,a)},useTransition:function(){var e=uh(!1);return e=tv.bind(null,he,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=he,h=Kn();if(Ae){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),Ze===null)throw Error(s(349));(Ee&127)!==0||w0(l,a,r)}h.memoizedState=r;var m={value:r,getSnapshot:a};return h.queue=m,W0(U0.bind(null,l,m,e),[e]),l.flags|=2048,Fr(9,{destroy:void 0},D0.bind(null,l,m,r,a),null),r},useId:function(){var e=Kn(),a=Ze.identifierPrefix;if(Ae){var r=$i,l=Ji;r=(l&~(1<<32-Bt(l)-1)).toString(32)+r,a="_"+a+"R_"+r,r=wc++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=jT++,a="_"+a+"r_"+r.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:gh,useFormState:V0,useActionState:V0,useOptimistic:function(e){var a=Kn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=vh.bind(null,he,!0,r),r.dispatch=a,[e,a]},useMemoCache:oh,useCacheRefresh:function(){return Kn().memoizedState=tb.bind(null,he)},useEffectEvent:function(e){var a=Kn(),r={impl:e};return a.memoizedState=r,function(){if((Be&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},_h={readContext:Bn,use:Uc,useCallback:Q0,useContext:Bn,useEffect:hh,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:j0,useMemo:J0,useReducer:Lc,useRef:X0,useState:function(){return Lc(ya)},useDebugValue:dh,useDeferredValue:function(e,a){var r=un();return $0(r,Ye.memoizedState,e,a)},useTransition:function(){var e=Lc(ya)[0],a=un().memoizedState;return[typeof e=="boolean"?e:Jo(e),a]},useSyncExternalStore:C0,useId:iv,useHostTransitionStatus:gh,useFormState:H0,useActionState:H0,useOptimistic:function(e,a){var r=un();return P0(r,Ye,e,a)},useMemoCache:oh,useCacheRefresh:av};_h.useEffectEvent=q0;var cv={readContext:Bn,use:Uc,useCallback:Q0,useContext:Bn,useEffect:hh,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:j0,useMemo:J0,useReducer:ch,useRef:X0,useState:function(){return ch(ya)},useDebugValue:dh,useDeferredValue:function(e,a){var r=un();return Ye===null?ph(r,e,a):$0(r,Ye.memoizedState,e,a)},useTransition:function(){var e=ch(ya)[0],a=un().memoizedState;return[typeof e=="boolean"?e:Jo(e),a]},useSyncExternalStore:C0,useId:iv,useHostTransitionStatus:gh,useFormState:k0,useActionState:k0,useOptimistic:function(e,a){var r=un();return Ye!==null?P0(r,Ye,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:oh,useCacheRefresh:av};cv.useEffectEvent=q0;function xh(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:v({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var yh={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=pi(),h=$a(l);h.payload=a,r!=null&&(h.callback=r),a=ts(e,h,l),a!==null&&(ai(a,e,l),jo(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=pi(),h=$a(l);h.tag=1,h.payload=a,r!=null&&(h.callback=r),a=ts(e,h,l),a!==null&&(ai(a,e,l),jo(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=pi(),l=$a(r);l.tag=2,a!=null&&(l.callback=a),a=ts(e,l,r),a!==null&&(ai(a,e,r),jo(a,e,r))}};function uv(e,a,r,l,h,m,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,S):a.prototype&&a.prototype.isPureReactComponent?!Vo(r,l)||!Vo(h,m):!0}function fv(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&yh.enqueueReplaceState(a,a.state,null)}function qs(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=v({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function hv(e){dc(e)}function dv(e){console.error(e)}function pv(e){dc(e)}function Fc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function mv(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Sh(e,a,r){return r=$a(r),r.tag=3,r.payload={element:null},r.callback=function(){Fc(e,a)},r}function gv(e){return e=$a(e),e.tag=3,e}function vv(e,a,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){mv(a,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){mv(a,r,l),typeof h!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function nb(e,a,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Cr(a,r,h,!0),r=ui.current,r!==null){switch(r.tag){case 31:case 13:return Ai===null?jc():r.alternate===null&&rn===0&&(rn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Ec?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),qh(e,l,h)),!1;case 22:return r.flags|=65536,l===Ec?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),qh(e,l,h)),!1}throw Error(s(435,r.tag))}return qh(e,l,h),jc(),!1}if(Ae)return a=ui.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,l!==Vf&&(e=Error(s(422),{cause:l}),ko(Mi(e,r)))):(l!==Vf&&(a=Error(s(423),{cause:l}),ko(Mi(a,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Mi(l,r),h=Sh(e.stateNode,l,h),Qf(e,h),rn!==4&&(rn=2)),!1;var m=Error(s(520),{cause:l});if(m=Mi(m,r),ll===null?ll=[m]:ll.push(m),rn!==4&&(rn=2),a===null)return!0;l=Mi(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Sh(r.stateNode,l,e),Qf(r,e),!1;case 1:if(a=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rs===null||!rs.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=gv(h),vv(h,e,r,l),Qf(r,h),!1}r=r.return}while(r!==null);return!1}var Mh=Error(s(461)),vn=!1;function zn(e,a,r,l){a.child=e===null?S0(a,null,r,l):Xs(a,e.child,r,l)}function _v(e,a,r,l,h){r=r.render;var m=a.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return Vs(a),l=ih(e,a,r,S,m,h),C=ah(),e!==null&&!vn?(sh(e,a,h),Sa(e,a,h)):(Ae&&C&&Bf(a),a.flags|=1,zn(e,a,l,h),a.child)}function xv(e,a,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!Of(m)&&m.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=m,yv(e,a,m,l,h)):(e=vc(r.type,null,l,a,a.mode,h),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!Dh(e,h)){var S=m.memoizedProps;if(r=r.compare,r=r!==null?r:Vo,r(S,l)&&e.ref===a.ref)return Sa(e,a,h)}return a.flags|=1,e=ma(m,l),e.ref=a.ref,e.return=a,a.child=e}function yv(e,a,r,l,h){if(e!==null){var m=e.memoizedProps;if(Vo(m,l)&&e.ref===a.ref)if(vn=!1,a.pendingProps=l=m,Dh(e,h))(e.flags&131072)!==0&&(vn=!0);else return a.lanes=e.lanes,Sa(e,a,h)}return Eh(e,a,r,l,h)}function Sv(e,a,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=a.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,a.child=null;return Mv(e,a,m,r,l)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sc(a,m!==null?m.cachePool:null),m!==null?T0(a,m):$f(),b0(a);else return l=a.lanes=536870912,Mv(e,a,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Sc(a,m.cachePool),T0(a,m),ns(),a.memoizedState=null):(e!==null&&Sc(a,null),$f(),ns());return zn(e,a,h,r),a.child}function el(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Mv(e,a,r,l,h){var m=Yf();return m=m===null?null:{parent:mn._currentValue,pool:m},a.memoizedState={baseLanes:r,cachePool:m},e!==null&&Sc(a,null),$f(),b0(a),e!==null&&Cr(e,a,l,!0),a.childLanes=h,null}function Ic(e,a){return a=zc({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Ev(e,a,r){return Xs(a,e.child,null,r),e=Ic(a,a.pendingProps),e.flags|=2,fi(a),a.memoizedState=null,e}function ib(e,a,r){var l=a.pendingProps,h=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ae){if(l.mode==="hidden")return e=Ic(a,l),a.lanes=536870912,el(null,e);if(eh(a),(e=$e)?(e=O_(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},r=r0(e),r.return=a,a.child=r,In=a,$e=null)):e=null,e===null)throw Za(a);return a.lanes=536870912,null}return Ic(a,l)}var m=e.memoizedState;if(m!==null){var S=m.dehydrated;if(eh(a),h)if(a.flags&256)a.flags&=-257,a=Ev(e,a,r);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(vn||Cr(e,a,r,!1),h=(r&e.childLanes)!==0,vn||h){if(l=Ze,l!==null&&(S=dr(l,r),S!==0&&S!==m.retryLane))throw m.retryLane=S,Fs(e,S),ai(l,e,S),Mh;jc(),a=Ev(e,a,r)}else e=m.treeContext,$e=Ri(S.nextSibling),In=a,Ae=!0,Ka=null,bi=!1,e!==null&&c0(a,e),a=Ic(a,l),a.flags|=4096;return a}return e=ma(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Bc(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function Eh(e,a,r,l,h){return Vs(a),r=ih(e,a,r,l,void 0,h),l=ah(),e!==null&&!vn?(sh(e,a,h),Sa(e,a,h)):(Ae&&l&&Bf(a),a.flags|=1,zn(e,a,r,h),a.child)}function Tv(e,a,r,l,h,m){return Vs(a),a.updateQueue=null,r=R0(a,l,r,h),A0(e),l=ah(),e!==null&&!vn?(sh(e,a,m),Sa(e,a,m)):(Ae&&l&&Bf(a),a.flags|=1,zn(e,a,r,m),a.child)}function bv(e,a,r,l,h){if(Vs(a),a.stateNode===null){var m=Tr,S=r.contextType;typeof S=="object"&&S!==null&&(m=Bn(S)),m=new r(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=yh,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},Kf(a),S=r.contextType,m.context=typeof S=="object"&&S!==null?Bn(S):Tr,m.state=a.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(xh(a,r,S,l),m.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&yh.enqueueReplaceState(m,m.state,null),Zo(a,l,m,h),Ko(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var C=a.memoizedProps,V=qs(r,C);m.props=V;var nt=m.context,ht=r.contextType;S=Tr,typeof ht=="object"&&ht!==null&&(S=Bn(ht));var _t=r.getDerivedStateFromProps;ht=typeof _t=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=a.pendingProps!==C,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||nt!==S)&&fv(a,m,l,S),Ja=!1;var rt=a.memoizedState;m.state=rt,Zo(a,l,m,h),Ko(),nt=a.memoizedState,C||rt!==nt||Ja?(typeof _t=="function"&&(xh(a,r,_t,l),nt=a.memoizedState),(V=Ja||uv(a,r,V,l,rt,nt,S))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=nt),m.props=l,m.state=nt,m.context=S,l=V):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,Zf(e,a),S=a.memoizedProps,ht=qs(r,S),m.props=ht,_t=a.pendingProps,rt=m.context,nt=r.contextType,V=Tr,typeof nt=="object"&&nt!==null&&(V=Bn(nt)),C=r.getDerivedStateFromProps,(nt=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==_t||rt!==V)&&fv(a,m,l,V),Ja=!1,rt=a.memoizedState,m.state=rt,Zo(a,l,m,h),Ko();var ut=a.memoizedState;S!==_t||rt!==ut||Ja||e!==null&&e.dependencies!==null&&xc(e.dependencies)?(typeof C=="function"&&(xh(a,r,C,l),ut=a.memoizedState),(ht=Ja||uv(a,r,ht,l,rt,ut,V)||e!==null&&e.dependencies!==null&&xc(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ut,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ut,V)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=ut),m.props=l,m.state=ut,m.context=V,l=ht):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,Bc(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=Xs(a,e.child,null,h),a.child=Xs(a,null,r,h)):zn(e,a,r,h),a.memoizedState=m.state,e=a.child):e=Sa(e,a,h),e}function Av(e,a,r,l){return Bs(),a.flags|=256,zn(e,a,r,l),a.child}var Th={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bh(e){return{baseLanes:e,cachePool:m0()}}function Ah(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=di),e}function Rv(e,a,r){var l=a.pendingProps,h=!1,m=(a.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),S&&(h=!0,a.flags&=-129),S=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ae){if(h?es(a):ns(),(e=$e)?(e=O_(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},r=r0(e),r.return=a,a.child=r,In=a,$e=null)):e=null,e===null)throw Za(a);return ld(e)?a.lanes=32:a.lanes=536870912,null}var C=l.children;return l=l.fallback,h?(ns(),h=a.mode,C=zc({mode:"hidden",children:C},h),l=Is(l,h,r,null),C.return=a,l.return=a,C.sibling=l,a.child=C,l=a.child,l.memoizedState=bh(r),l.childLanes=Ah(e,S,r),a.memoizedState=Th,el(null,l)):(es(a),Rh(a,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(m)a.flags&256?(es(a),a.flags&=-257,a=Ch(e,a,r)):a.memoizedState!==null?(ns(),a.child=e.child,a.flags|=128,a=null):(ns(),C=l.fallback,h=a.mode,l=zc({mode:"visible",children:l.children},h),C=Is(C,h,r,null),C.flags|=2,l.return=a,C.return=a,l.sibling=C,a.child=l,Xs(a,e.child,null,r),l=a.child,l.memoizedState=bh(r),l.childLanes=Ah(e,S,r),a.memoizedState=Th,a=el(null,l));else if(es(a),ld(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var nt=S.dgst;S=nt,l=Error(s(419)),l.stack="",l.digest=S,ko({value:l,source:null,stack:null}),a=Ch(e,a,r)}else if(vn||Cr(e,a,r,!1),S=(r&e.childLanes)!==0,vn||S){if(S=Ze,S!==null&&(l=dr(S,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,Fs(e,l),ai(S,e,l),Mh;od(C)||jc(),a=Ch(e,a,r)}else od(C)?(a.flags|=192,a.child=e.child,a=null):(e=V.treeContext,$e=Ri(C.nextSibling),In=a,Ae=!0,Ka=null,bi=!1,e!==null&&c0(a,e),a=Rh(a,l.children),a.flags|=4096);return a}return h?(ns(),C=l.fallback,h=a.mode,V=e.child,nt=V.sibling,l=ma(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,nt!==null?C=ma(nt,C):(C=Is(C,h,r,null),C.flags|=2),C.return=a,l.return=a,l.sibling=C,a.child=l,el(null,l),l=a.child,C=e.child.memoizedState,C===null?C=bh(r):(h=C.cachePool,h!==null?(V=mn._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=m0(),C={baseLanes:C.baseLanes|r,cachePool:h}),l.memoizedState=C,l.childLanes=Ah(e,S,r),a.memoizedState=Th,el(e.child,l)):(es(a),r=e.child,e=r.sibling,r=ma(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(S=a.deletions,S===null?(a.deletions=[e],a.flags|=16):S.push(e)),a.child=r,a.memoizedState=null,r)}function Rh(e,a){return a=zc({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function zc(e,a){return e=ci(22,e,null,a),e.lanes=0,e}function Ch(e,a,r){return Xs(a,e.child,null,r),e=Rh(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Cv(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),kf(e.return,a,r)}function wh(e,a,r,l,h,m){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(S.isBackwards=a,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=h,S.treeForkCount=m)}function wv(e,a,r){var l=a.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var S=cn.current,C=(S&2)!==0;if(C?(S=S&1|2,a.flags|=128):S&=1,gt(cn,S),zn(e,a,l,r),l=Ae?Go:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cv(e,r,a);else if(e.tag===19)Cv(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=a.child,h=null;r!==null;)e=r.alternate,e!==null&&Rc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=a.child,a.child=null):(h=r.sibling,r.sibling=null),wh(a,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=a.child,a.child=null;h!==null;){if(e=h.alternate,e!==null&&Rc(e)===null){a.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}wh(a,!0,r,null,m,l);break;case"together":wh(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Sa(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),ss|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Cr(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=ma(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=ma(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function Dh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&xc(e)))}function ab(e,a,r){switch(a.tag){case 3:St(a,a.stateNode.containerInfo),Qa(a,mn,e.memoizedState.cache),Bs();break;case 27:case 5:Ot(a);break;case 4:St(a,a.stateNode.containerInfo);break;case 10:Qa(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,eh(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(es(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Rv(e,a,r):(es(a),e=Sa(e,a,r),e!==null?e.sibling:null);es(a);break;case 19:var h=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Cr(e,a,r,!1),l=(r&a.childLanes)!==0),h){if(l)return wv(e,a,r);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),gt(cn,cn.current),l)break;return null;case 22:return a.lanes=0,Sv(e,a,r,a.pendingProps);case 24:Qa(a,mn,e.memoizedState.cache)}return Sa(e,a,r)}function Dv(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)vn=!0;else{if(!Dh(e,r)&&(a.flags&128)===0)return vn=!1,ab(e,a,r);vn=(e.flags&131072)!==0}else vn=!1,Ae&&(a.flags&1048576)!==0&&l0(a,Go,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(e=Gs(a.elementType),a.type=e,typeof e=="function")Of(e)?(l=qs(e,l),a.tag=1,a=bv(null,a,e,l,r)):(a.tag=0,a=Eh(null,a,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===L){a.tag=11,a=_v(null,a,e,l,r);break t}else if(h===I){a.tag=14,a=xv(null,a,e,l,r);break t}}throw a=it(e)||e,Error(s(306,a,""))}}return a;case 0:return Eh(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,h=qs(l,a.pendingProps),bv(e,a,l,h,r);case 3:t:{if(St(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var m=a.memoizedState;h=m.element,Zf(e,a),Zo(a,l,null,r);var S=a.memoizedState;if(l=S.cache,Qa(a,mn,l),l!==m.cache&&Xf(a,[mn],r,!0),Ko(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=Av(e,a,l,r);break t}else if(l!==h){h=Mi(Error(s(424)),a),ko(h),a=Av(e,a,l,r);break t}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,$e=Ri(e.firstChild),In=a,Ae=!0,Ka=null,bi=!0,r=S0(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bs(),l===h){a=Sa(e,a,r);break t}zn(e,a,l,r)}a=a.child}return a;case 26:return Bc(e,a),e===null?(r=H_(a.type,null,a.pendingProps,null))?a.memoizedState=r:Ae||(r=a.type,e=a.pendingProps,l=eu(J.current).createElement(r),l[pn]=a,l[Un]=e,Vn(l,r,e),w(l),a.stateNode=l):a.memoizedState=H_(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ot(a),e===null&&Ae&&(l=a.stateNode=B_(a.type,a.pendingProps,J.current),In=a,bi=!0,h=$e,us(a.type)?(cd=h,$e=Ri(l.firstChild)):$e=h),zn(e,a,a.pendingProps.children,r),Bc(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ae&&((h=l=$e)&&(l=Pb(l,a.type,a.pendingProps,bi),l!==null?(a.stateNode=l,In=a,$e=Ri(l.firstChild),bi=!1,h=!0):h=!1),h||Za(a)),Ot(a),h=a.type,m=a.pendingProps,S=e!==null?e.memoizedProps:null,l=m.children,ad(h,m)?l=null:S!==null&&ad(h,S)&&(a.flags|=32),a.memoizedState!==null&&(h=ih(e,a,KT,null,null,r),gl._currentValue=h),Bc(e,a),zn(e,a,l,r),a.child;case 6:return e===null&&Ae&&((e=r=$e)&&(r=Ob(r,a.pendingProps,bi),r!==null?(a.stateNode=r,In=a,$e=null,e=!0):e=!1),e||Za(a)),null;case 13:return Rv(e,a,r);case 4:return St(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Xs(a,null,l,r):zn(e,a,l,r),a.child;case 11:return _v(e,a,a.type,a.pendingProps,r);case 7:return zn(e,a,a.pendingProps,r),a.child;case 8:return zn(e,a,a.pendingProps.children,r),a.child;case 12:return zn(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,Qa(a,a.type,l.value),zn(e,a,l.children,r),a.child;case 9:return h=a.type._context,l=a.pendingProps.children,Vs(a),h=Bn(h),l=l(h),a.flags|=1,zn(e,a,l,r),a.child;case 14:return xv(e,a,a.type,a.pendingProps,r);case 15:return yv(e,a,a.type,a.pendingProps,r);case 19:return wv(e,a,r);case 31:return ib(e,a,r);case 22:return Sv(e,a,r,a.pendingProps);case 24:return Vs(a),l=Bn(mn),e===null?(h=Yf(),h===null&&(h=Ze,m=Wf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),a.memoizedState={parent:l,cache:h},Kf(a),Qa(a,mn,h)):((e.lanes&r)!==0&&(Zf(e,a),Zo(a,null,null,r),Ko()),h=e.memoizedState,m=a.memoizedState,h.parent!==l?(h={parent:l,cache:l},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),Qa(a,mn,l)):(l=m.cache,Qa(a,mn,l),l!==h.cache&&Xf(a,[mn],r,!0))),zn(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function Ma(e){e.flags|=4}function Uh(e,a,r,l,h){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(i_())e.flags|=8192;else throw ks=Ec,jf}else e.flags&=-16777217}function Uv(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!q_(a))if(i_())e.flags|=8192;else throw ks=Ec,jf}function Vc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Ge():536870912,e.lanes|=a,Vr|=a)}function nl(e,a){if(!Ae)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function tn(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function sb(e,a,r){var l=a.pendingProps;switch(zf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(a),null;case 1:return tn(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),_a(mn),Dt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(a)?Ma(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Hf())),tn(a),null;case 26:var h=a.type,m=a.memoizedState;return e===null?(Ma(a),m!==null?(tn(a),Uv(a,m)):(tn(a),Uh(a,h,null,l,r))):m?m!==e.memoizedState?(Ma(a),tn(a),Uv(a,m)):(tn(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ma(a),tn(a),Uh(a,h,e,l,r)),null;case 27:if(fe(a),r=J.current,h=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ma(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return tn(a),null}e=Tt.current,Rr(a)?u0(a):(e=B_(h,l,r),a.stateNode=e,Ma(a))}return tn(a),null;case 5:if(fe(a),h=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ma(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return tn(a),null}if(m=Tt.current,Rr(a))u0(a);else{var S=eu(J.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(h,{is:l.is}):S.createElement(h)}}m[pn]=a,m[Un]=l;t:for(S=a.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===a)break t;for(;S.sibling===null;){if(S.return===null||S.return===a)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}a.stateNode=m;t:switch(Vn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ma(a)}}return tn(a),Uh(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,r),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Ma(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=J.current,Rr(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,h=In,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[pn]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||R_(e.nodeValue,r)),e||Za(a,!0)}else e=eu(e).createTextNode(l),e[pn]=a,a.stateNode=e}return tn(a),null;case 31:if(r=a.memoizedState,e===null||e.memoizedState!==null){if(l=Rr(a),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[pn]=a}else Bs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;tn(a),e=!1}else r=Hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return a.flags&256?(fi(a),a):(fi(a),null);if((a.flags&128)!==0)throw Error(s(558))}return tn(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Rr(a),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[pn]=a}else Bs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;tn(a),h=!1}else h=Hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(fi(a),a):(fi(a),null)}return fi(a),(a.flags&128)!==0?(a.lanes=r,a):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=a.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(a.child.flags|=8192),Vc(a,a.updateQueue),tn(a),null);case 4:return Dt(),e===null&&$h(a.stateNode.containerInfo),tn(a),null;case 10:return _a(a.type),tn(a),null;case 19:if(et(cn),l=a.memoizedState,l===null)return tn(a),null;if(h=(a.flags&128)!==0,m=l.rendering,m===null)if(h)nl(l,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=Rc(e),m!==null){for(a.flags|=128,nl(l,!1),e=m.updateQueue,a.updateQueue=e,Vc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)s0(r,e),r=r.sibling;return gt(cn,cn.current&1|2),Ae&&ga(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&T()>Wc&&(a.flags|=128,h=!0,nl(l,!1),a.lanes=4194304)}else{if(!h)if(e=Rc(m),e!==null){if(a.flags|=128,h=!0,e=e.updateQueue,a.updateQueue=e,Vc(a,e),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ae)return tn(a),null}else 2*T()-l.renderingStartTime>Wc&&r!==536870912&&(a.flags|=128,h=!0,nl(l,!1),a.lanes=4194304);l.isBackwards?(m.sibling=a.child,a.child=m):(e=l.last,e!==null?e.sibling=m:a.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=T(),e.sibling=null,r=cn.current,gt(cn,h?r&1|2:r&1),Ae&&ga(a,l.treeForkCount),e):(tn(a),null);case 22:case 23:return fi(a),th(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(tn(a),a.subtreeFlags&6&&(a.flags|=8192)):tn(a),r=a.updateQueue,r!==null&&Vc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&et(Hs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),_a(mn),tn(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function rb(e,a){switch(zf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return _a(mn),Dt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return fe(a),null;case 31:if(a.memoizedState!==null){if(fi(a),a.alternate===null)throw Error(s(340));Bs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(fi(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Bs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return et(cn),null;case 4:return Dt(),null;case 10:return _a(a.type),null;case 22:case 23:return fi(a),th(),e!==null&&et(Hs),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return _a(mn),null;case 25:return null;default:return null}}function Lv(e,a){switch(zf(a),a.tag){case 3:_a(mn),Dt();break;case 26:case 27:case 5:fe(a);break;case 4:Dt();break;case 31:a.memoizedState!==null&&fi(a);break;case 13:fi(a);break;case 19:et(cn);break;case 10:_a(a.type);break;case 22:case 23:fi(a),th(),e!==null&&et(Hs);break;case 24:_a(mn)}}function il(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,S=r.inst;l=m(),S.destroy=l}r=r.next}while(r!==h)}}catch(C){We(a,a.return,C)}}function is(e,a,r){try{var l=a.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,h=a;var V=r,nt=C;try{nt()}catch(ht){We(h,V,ht)}}}l=l.next}while(l!==m)}}catch(ht){We(a,a.return,ht)}}function Nv(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{E0(a,r)}catch(l){We(e,e.return,l)}}}function Pv(e,a,r){r.props=qs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){We(e,a,l)}}function al(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){We(e,a,h)}}function ta(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){We(e,a,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){We(e,a,h)}else r.current=null}function Ov(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){We(e,e.return,h)}}function Lh(e,a,r){try{var l=e.stateNode;Cb(l,e.type,r,a),l[Un]=a}catch(h){We(e,e.return,h)}}function Fv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&us(e.type)||e.tag===4}function Nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&us(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ph(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=da));else if(l!==4&&(l===27&&us(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(Ph(e,a,r),e=e.sibling;e!==null;)Ph(e,a,r),e=e.sibling}function Hc(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&us(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Hc(e,a,r),e=e.sibling;e!==null;)Hc(e,a,r),e=e.sibling}function Iv(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);Vn(a,l,r),a[pn]=e,a[Un]=r}catch(m){We(e,e.return,m)}}var Ea=!1,_n=!1,Oh=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function ob(e,a){if(e=e.containerInfo,nd=lu,e=Zg(e),Cf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var S=0,C=-1,V=-1,nt=0,ht=0,_t=e,rt=null;e:for(;;){for(var ut;_t!==r||h!==0&&_t.nodeType!==3||(C=S+h),_t!==m||l!==0&&_t.nodeType!==3||(V=S+l),_t.nodeType===3&&(S+=_t.nodeValue.length),(ut=_t.firstChild)!==null;)rt=_t,_t=ut;for(;;){if(_t===e)break e;if(rt===r&&++nt===h&&(C=S),rt===m&&++ht===l&&(V=S),(ut=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=ut}r=C===-1||V===-1?null:{start:C,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(id={focusedElem:e,selectionRange:r},lu=!1,Rn=a;Rn!==null;)if(a=Rn,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Rn=e;else for(;Rn!==null;){switch(a=Rn,m=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=a,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Xt=qs(r.type,h);e=l.getSnapshotBeforeUpdate(Xt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ne){We(r,r.return,ne)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)rd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Rn=e;break}Rn=a.return}}function zv(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ba(e,r),l&4&&il(5,r);break;case 1:if(ba(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(S){We(r,r.return,S)}else{var h=qs(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(h,a,e.__reactInternalSnapshotBeforeUpdate)}catch(S){We(r,r.return,S)}}l&64&&Nv(r),l&512&&al(r,r.return);break;case 3:if(ba(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{E0(e,a)}catch(S){We(r,r.return,S)}}break;case 27:a===null&&l&4&&Iv(r);case 26:case 5:ba(e,r),a===null&&l&4&&Ov(r),l&512&&al(r,r.return);break;case 12:ba(e,r);break;case 31:ba(e,r),l&4&&Gv(e,r);break;case 13:ba(e,r),l&4&&kv(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=gb.bind(null,r),Fb(e,r))));break;case 22:if(l=r.memoizedState!==null||Ea,!l){a=a!==null&&a.memoizedState!==null||_n,h=Ea;var m=_n;Ea=l,(_n=a)&&!m?Aa(e,r,(r.subtreeFlags&8772)!==0):ba(e,r),Ea=h,_n=m}break;case 30:break;default:ba(e,r)}}function Vv(e){var a=e.alternate;a!==null&&(e.alternate=null,Vv(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Lo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,ti=!1;function Ta(e,a,r){for(r=r.child;r!==null;)Hv(e,a,r),r=r.sibling}function Hv(e,a,r){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 26:_n||ta(r,a),Ta(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:_n||ta(r,a);var l=nn,h=ti;us(r.type)&&(nn=r.stateNode,ti=!1),Ta(e,a,r),dl(r.stateNode),nn=l,ti=h;break;case 5:_n||ta(r,a);case 6:if(l=nn,h=ti,nn=null,Ta(e,a,r),nn=l,ti=h,nn!==null)if(ti)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(r.stateNode)}catch(m){We(r,a,m)}else try{nn.removeChild(r.stateNode)}catch(m){We(r,a,m)}break;case 18:nn!==null&&(ti?(e=nn,N_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),jr(e)):N_(nn,r.stateNode));break;case 4:l=nn,h=ti,nn=r.stateNode.containerInfo,ti=!0,Ta(e,a,r),nn=l,ti=h;break;case 0:case 11:case 14:case 15:is(2,r,a),_n||is(4,r,a),Ta(e,a,r);break;case 1:_n||(ta(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Pv(r,a,l)),Ta(e,a,r);break;case 21:Ta(e,a,r);break;case 22:_n=(l=_n)||r.memoizedState!==null,Ta(e,a,r),_n=l;break;default:Ta(e,a,r)}}function Gv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jr(e)}catch(r){We(a,a.return,r)}}}function kv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jr(e)}catch(r){We(a,a.return,r)}}function lb(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Bv),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Bv),a;default:throw Error(s(435,e.tag))}}function Gc(e,a){var r=lb(e);a.forEach(function(l){if(!r.has(l)){r.add(l);var h=vb.bind(null,e,l);l.then(h,h)}})}function ei(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,S=a,C=S;t:for(;C!==null;){switch(C.tag){case 27:if(us(C.type)){nn=C.stateNode,ti=!1;break t}break;case 5:nn=C.stateNode,ti=!1;break t;case 3:case 4:nn=C.stateNode.containerInfo,ti=!0;break t}C=C.return}if(nn===null)throw Error(s(160));Hv(m,S,h),nn=null,ti=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Xv(a,e),a=a.sibling}var zi=null;function Xv(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(a,e),ni(e),l&4&&(is(3,e,e.return),il(3,e),is(5,e,e.return));break;case 1:ei(a,e),ni(e),l&512&&(_n||r===null||ta(r,r.return)),l&64&&Ea&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=zi;if(ei(a,e),ni(e),l&512&&(_n||r===null||ta(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Us]||m[pn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Vn(m,l,r),m[pn]=e,w(m),l=m;break t;case"link":var S=X_("link","href",h).get(l+(r.href||""));if(S){for(var C=0;C<S.length;C++)if(m=S[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(C,1);break e}}m=h.createElement(l),Vn(m,l,r),h.head.appendChild(m);break;case"meta":if(S=X_("meta","content",h).get(l+(r.content||""))){for(C=0;C<S.length;C++)if(m=S[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(C,1);break e}}m=h.createElement(l),Vn(m,l,r),h.head.appendChild(m);break;default:throw Error(s(468,l))}m[pn]=e,w(m),l=m}e.stateNode=l}else W_(h,e.type,e.stateNode);else e.stateNode=k_(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?W_(h,e.type,e.stateNode):k_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Lh(e,e.memoizedProps,r.memoizedProps)}break;case 27:ei(a,e),ni(e),l&512&&(_n||r===null||ta(r,r.return)),r!==null&&l&4&&Lh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ei(a,e),ni(e),l&512&&(_n||r===null||ta(r,r.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(Xt){We(e,e.return,Xt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Lh(e,h,r!==null?r.memoizedProps:h)),l&1024&&(Oh=!0);break;case 6:if(ei(a,e),ni(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Xt){We(e,e.return,Xt)}}break;case 3:if(au=null,h=zi,zi=nu(a.containerInfo),ei(a,e),zi=h,ni(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{jr(a.containerInfo)}catch(Xt){We(e,e.return,Xt)}Oh&&(Oh=!1,Wv(e));break;case 4:l=zi,zi=nu(e.stateNode.containerInfo),ei(a,e),ni(e),zi=l;break;case 12:ei(a,e),ni(e);break;case 31:ei(a,e),ni(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Gc(e,l)));break;case 13:ei(a,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Xc=T()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Gc(e,l)));break;case 22:h=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,nt=Ea,ht=_n;if(Ea=nt||h,_n=ht||V,ei(a,e),_n=ht,Ea=nt,ni(e),l&8192)t:for(a=e.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(r===null||V||Ea||_n||Ys(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){V=r=a;try{if(m=V.stateNode,h)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=V.stateNode;var _t=V.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;C.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Xt){We(V,V.return,Xt)}}}else if(a.tag===6){if(r===null){V=a;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(Xt){We(V,V.return,Xt)}}}else if(a.tag===18){if(r===null){V=a;try{var ut=V.stateNode;h?P_(ut,!0):P_(V.stateNode,!1)}catch(Xt){We(V,V.return,Xt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Gc(e,r))));break;case 19:ei(a,e),ni(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Gc(e,l)));break;case 30:break;case 21:break;default:ei(a,e),ni(e)}}function ni(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(Fv(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var h=r.stateNode,m=Nh(e);Hc(e,m,h);break;case 5:var S=r.stateNode;r.flags&32&&(Mn(S,""),r.flags&=-33);var C=Nh(e);Hc(e,C,S);break;case 3:case 4:var V=r.stateNode.containerInfo,nt=Nh(e);Ph(e,nt,V);break;default:throw Error(s(161))}}catch(ht){We(e,e.return,ht)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Wv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Wv(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ba(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)zv(e,a.alternate,a),a=a.sibling}function Ys(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:is(4,a,a.return),Ys(a);break;case 1:ta(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Pv(a,a.return,r),Ys(a);break;case 27:dl(a.stateNode);case 26:case 5:ta(a,a.return),Ys(a);break;case 22:a.memoizedState===null&&Ys(a);break;case 30:Ys(a);break;default:Ys(a)}e=e.sibling}}function Aa(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,h=e,m=a,S=m.flags;switch(m.tag){case 0:case 11:case 15:Aa(h,m,r),il(4,m);break;case 1:if(Aa(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){We(l,l.return,nt)}if(l=m,h=l.updateQueue,h!==null){var C=l.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)M0(V[h],C)}catch(nt){We(l,l.return,nt)}}r&&S&64&&Nv(m),al(m,m.return);break;case 27:Iv(m);case 26:case 5:Aa(h,m,r),r&&l===null&&S&4&&Ov(m),al(m,m.return);break;case 12:Aa(h,m,r);break;case 31:Aa(h,m,r),r&&S&4&&Gv(h,m);break;case 13:Aa(h,m,r),r&&S&4&&kv(h,m);break;case 22:m.memoizedState===null&&Aa(h,m,r),al(m,m.return);break;case 30:break;default:Aa(h,m,r)}a=a.sibling}}function Fh(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Xo(r))}function Ih(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Xo(e))}function Vi(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)qv(e,a,r,l),a=a.sibling}function qv(e,a,r,l){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(e,a,r,l),h&2048&&il(9,a);break;case 1:Vi(e,a,r,l);break;case 3:Vi(e,a,r,l),h&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Xo(e)));break;case 12:if(h&2048){Vi(e,a,r,l),e=a.stateNode;try{var m=a.memoizedProps,S=m.id,C=m.onPostCommit;typeof C=="function"&&C(S,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){We(a,a.return,V)}}else Vi(e,a,r,l);break;case 31:Vi(e,a,r,l);break;case 13:Vi(e,a,r,l);break;case 23:break;case 22:m=a.stateNode,S=a.alternate,a.memoizedState!==null?m._visibility&2?Vi(e,a,r,l):sl(e,a):m._visibility&2?Vi(e,a,r,l):(m._visibility|=2,Ir(e,a,r,l,(a.subtreeFlags&10256)!==0||!1)),h&2048&&Fh(S,a);break;case 24:Vi(e,a,r,l),h&2048&&Ih(a.alternate,a);break;default:Vi(e,a,r,l)}}function Ir(e,a,r,l,h){for(h=h&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=e,S=a,C=r,V=l,nt=S.flags;switch(S.tag){case 0:case 11:case 15:Ir(m,S,C,V,h),il(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?Ir(m,S,C,V,h):sl(m,S):(ht._visibility|=2,Ir(m,S,C,V,h)),h&&nt&2048&&Fh(S.alternate,S);break;case 24:Ir(m,S,C,V,h),h&&nt&2048&&Ih(S.alternate,S);break;default:Ir(m,S,C,V,h)}a=a.sibling}}function sl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,h=l.flags;switch(l.tag){case 22:sl(r,l),h&2048&&Fh(l.alternate,l);break;case 24:sl(r,l),h&2048&&Ih(l.alternate,l);break;default:sl(r,l)}a=a.sibling}}var rl=8192;function Br(e,a,r){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)Yv(e,a,r),e=e.sibling}function Yv(e,a,r){switch(e.tag){case 26:Br(e,a,r),e.flags&rl&&e.memoizedState!==null&&jb(r,zi,e.memoizedState,e.memoizedProps);break;case 5:Br(e,a,r);break;case 3:case 4:var l=zi;zi=nu(e.stateNode.containerInfo),Br(e,a,r),zi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,Br(e,a,r),rl=l):Br(e,a,r));break;default:Br(e,a,r)}}function jv(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ol(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Rn=l,Zv(l,e)}jv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kv(e),e=e.sibling}function Kv(e){switch(e.tag){case 0:case 11:case 15:ol(e),e.flags&2048&&is(9,e,e.return);break;case 3:ol(e);break;case 12:ol(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,kc(e)):ol(e);break;default:ol(e)}}function kc(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Rn=l,Zv(l,e)}jv(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:is(8,a,a.return),kc(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,kc(a));break;default:kc(a)}e=e.sibling}}function Zv(e,a){for(;Rn!==null;){var r=Rn;switch(r.tag){case 0:case 11:case 15:is(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Rn=l;else t:for(r=e;Rn!==null;){l=Rn;var h=l.sibling,m=l.return;if(Vv(l),l===r){Rn=null;break t}if(h!==null){h.return=m,Rn=h;break t}Rn=m}}}var cb={getCacheForType:function(e){var a=Bn(mn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r},cacheSignal:function(){return Bn(mn).controller.signal}},ub=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,Se=null,Ee=0,Xe=0,hi=null,as=!1,zr=!1,Bh=!1,Ra=0,rn=0,ss=0,js=0,zh=0,di=0,Vr=0,ll=null,ii=null,Vh=!1,Xc=0,Qv=0,Wc=1/0,qc=null,rs=null,En=0,os=null,Hr=null,Ca=0,Hh=0,Gh=null,Jv=null,cl=0,kh=null;function pi(){return(Be&2)!==0&&Ee!==0?Ee&-Ee:N.T!==null?Kh():Do()}function $v(){if(di===0)if((Ee&536870912)===0||Ae){var e=At;At<<=1,(At&3932160)===0&&(At=262144),di=e}else di=536870912;return e=ui.current,e!==null&&(e.flags|=32),di}function ai(e,a,r){(e===Ze&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Gr(e,0),ls(e,Ee,di,!1)),kn(e,r),((Be&2)===0||e!==Ze)&&(e===Ze&&((Be&2)===0&&(js|=r),rn===4&&ls(e,Ee,di,!1)),ea(e))}function t_(e,a,r){if((Be&6)!==0)throw Error(s(327));var l=!r&&(a&127)===0&&(a&e.expiredLanes)===0||Rt(e,a),h=l?db(e,a):Wh(e,a,!0),m=l;do{if(h===0){zr&&!l&&ls(e,a,0,!1);break}else{if(r=e.current.alternate,m&&!fb(r)){h=Wh(e,a,!1),m=!1;continue}if(h===2){if(m=a,e.errorRecoveryDisabledLanes&m)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){a=S;t:{var C=e;h=ll;var V=C.current.memoizedState.isDehydrated;if(V&&(Gr(C,S).flags|=256),S=Wh(C,S,!1),S!==2){if(Bh&&!V){C.errorRecoveryDisabledLanes|=m,js|=m,h=4;break t}m=ii,ii=h,m!==null&&(ii===null?ii=m:ii.push.apply(ii,m))}h=S}if(m=!1,h!==2)continue}}if(h===1){Gr(e,0),ls(e,a,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:ls(l,a,di,!as);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(h=Xc+300-T(),10<h)){if(ls(l,a,di,!as),xt(l,0,!0)!==0)break t;Ca=a,l.timeoutHandle=U_(e_.bind(null,l,r,ii,qc,Vh,a,di,js,Vr,as,m,"Throttled",-0,0),h);break t}e_(l,r,ii,qc,Vh,a,di,js,Vr,as,m,null,-0,0)}}break}while(!0);ea(e)}function e_(e,a,r,l,h,m,S,C,V,nt,ht,_t,rt,ut){if(e.timeoutHandle=-1,_t=a.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},Yv(a,m,_t);var Xt=(m&62914560)===m?Xc-T():(m&4194048)===m?Qv-T():0;if(Xt=Kb(_t,Xt),Xt!==null){Ca=m,e.cancelPendingCommit=Xt(c_.bind(null,e,a,m,r,l,h,S,C,V,ht,_t,null,rt,ut)),ls(e,m,S,!nt);return}}c_(e,a,m,r,l,h,S,C,V)}function fb(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!li(m(),h))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ls(e,a,r,l){a&=~zh,a&=~js,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var h=a;0<h;){var m=31-Bt(h),S=1<<m;l[m]=-1,h&=~S}r!==0&&ac(e,r,a)}function Yc(){return(Be&6)===0?(ul(0),!1):!0}function Xh(){if(Se!==null){if(Xe===0)var e=Se.return;else e=Se,va=zs=null,rh(e),Lr=null,qo=0,e=Se;for(;e!==null;)Lv(e.alternate,e),e=e.return;Se=null}}function Gr(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Ub(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ca=0,Xh(),Ze=e,Se=r=ma(e.current,null),Ee=a,Xe=0,hi=null,as=!1,zr=Rt(e,a),Bh=!1,Vr=di=zh=js=ss=rn=0,ii=ll=null,Vh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var h=31-Bt(l),m=1<<h;a|=e[h],l&=~m}return Ra=a,pc(),r}function n_(e,a){he=null,N.H=tl,a===Ur||a===Mc?(a=_0(),Xe=3):a===jf?(a=_0(),Xe=4):Xe=a===Mh?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,hi=a,Se===null&&(rn=1,Fc(e,Mi(a,e.current)))}function i_(){var e=ui.current;return e===null?!0:(Ee&4194048)===Ee?Ai===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===Ai:!1}function a_(){var e=N.H;return N.H=tl,e===null?tl:e}function s_(){var e=N.A;return N.A=cb,e}function jc(){rn=4,as||(Ee&4194048)!==Ee&&ui.current!==null||(zr=!0),(ss&134217727)===0&&(js&134217727)===0||Ze===null||ls(Ze,Ee,di,!1)}function Wh(e,a,r){var l=Be;Be|=2;var h=a_(),m=s_();(Ze!==e||Ee!==a)&&(qc=null,Gr(e,a)),a=!1;var S=rn;t:do try{if(Xe!==0&&Se!==null){var C=Se,V=hi;switch(Xe){case 8:Xh(),S=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(a=!0);var nt=Xe;if(Xe=0,hi=null,kr(e,C,V,nt),r&&zr){S=0;break t}break;default:nt=Xe,Xe=0,hi=null,kr(e,C,V,nt)}}hb(),S=rn;break}catch(ht){n_(e,ht)}while(!0);return a&&e.shellSuspendCounter++,va=zs=null,Be=l,N.H=h,N.A=m,Se===null&&(Ze=null,Ee=0,pc()),S}function hb(){for(;Se!==null;)r_(Se)}function db(e,a){var r=Be;Be|=2;var l=a_(),h=s_();Ze!==e||Ee!==a?(qc=null,Wc=T()+500,Gr(e,a)):zr=Rt(e,a);t:do try{if(Xe!==0&&Se!==null){a=Se;var m=hi;e:switch(Xe){case 1:Xe=0,hi=null,kr(e,a,m,1);break;case 2:case 9:if(g0(m)){Xe=0,hi=null,o_(a);break}a=function(){Xe!==2&&Xe!==9||Ze!==e||(Xe=7),ea(e)},m.then(a,a);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:g0(m)?(Xe=0,hi=null,o_(a)):(Xe=0,hi=null,kr(e,a,m,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var C=Se;if(S?q_(S):C.stateNode.complete){Xe=0,hi=null;var V=C.sibling;if(V!==null)Se=V;else{var nt=C.return;nt!==null?(Se=nt,Kc(nt)):Se=null}break e}}Xe=0,hi=null,kr(e,a,m,5);break;case 6:Xe=0,hi=null,kr(e,a,m,6);break;case 8:Xh(),rn=6;break t;default:throw Error(s(462))}}pb();break}catch(ht){n_(e,ht)}while(!0);return va=zs=null,N.H=l,N.A=h,Be=r,Se!==null?0:(Ze=null,Ee=0,pc(),rn)}function pb(){for(;Se!==null&&!Kt();)r_(Se)}function r_(e){var a=Dv(e.alternate,e,Ra);e.memoizedProps=e.pendingProps,a===null?Kc(e):Se=a}function o_(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Tv(r,a,a.pendingProps,a.type,void 0,Ee);break;case 11:a=Tv(r,a,a.pendingProps,a.type.render,a.ref,Ee);break;case 5:rh(a);default:Lv(r,a),a=Se=s0(a,Ra),a=Dv(r,a,Ra)}e.memoizedProps=e.pendingProps,a===null?Kc(e):Se=a}function kr(e,a,r,l){va=zs=null,rh(a),Lr=null,qo=0;var h=a.return;try{if(nb(e,h,a,r,Ee)){rn=1,Fc(e,Mi(r,e.current)),Se=null;return}}catch(m){if(h!==null)throw Se=h,m;rn=1,Fc(e,Mi(r,e.current)),Se=null;return}a.flags&32768?(Ae||l===1?e=!0:zr||(Ee&536870912)!==0?e=!1:(as=e=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),l_(a,e)):Kc(a)}function Kc(e){var a=e;do{if((a.flags&32768)!==0){l_(a,as);return}e=a.return;var r=sb(a.alternate,a,Ra);if(r!==null){Se=r;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=e}while(a!==null);rn===0&&(rn=5)}function l_(e,a){do{var r=rb(e.alternate,e);if(r!==null){r.flags&=32767,Se=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){Se=e;return}Se=e=r}while(e!==null);rn=6,Se=null}function c_(e,a,r,l,h,m,S,C,V){e.cancelPendingCommit=null;do Zc();while(En!==0);if((Be&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(m=a.lanes|a.childLanes,m|=Nf,Oi(e,r,m,S,C,V),e===Ze&&(Se=Ze=null,Ee=0),Hr=a,os=e,Ca=r,Hh=m,Gh=h,Jv=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_b(ft,function(){return p_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,h=B.p,B.p=2,S=Be,Be|=4;try{ob(e,a,r)}finally{Be=S,B.p=h,N.T=l}}En=1,u_(),f_(),h_()}}function u_(){if(En===1){En=0;var e=os,a=Hr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=N.T,N.T=null;var l=B.p;B.p=2;var h=Be;Be|=4;try{Xv(a,e);var m=id,S=Zg(e.containerInfo),C=m.focusedElem,V=m.selectionRange;if(S!==C&&C&&C.ownerDocument&&Kg(C.ownerDocument.documentElement,C)){if(V!==null&&Cf(C)){var nt=V.start,ht=V.end;if(ht===void 0&&(ht=nt),"selectionStart"in C)C.selectionStart=nt,C.selectionEnd=Math.min(ht,C.value.length);else{var _t=C.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),Xt=C.textContent.length,ne=Math.min(V.start,Xt),Ke=V.end===void 0?ne:Math.min(V.end,Xt);!ut.extend&&ne>Ke&&(S=Ke,Ke=ne,ne=S);var Q=jg(C,ne),X=jg(C,Ke);if(Q&&X&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var tt=_t.createRange();tt.setStart(Q.node,Q.offset),ut.removeAllRanges(),ne>Ke?(ut.addRange(tt),ut.extend(X.node,X.offset)):(tt.setEnd(X.node,X.offset),ut.addRange(tt))}}}}for(_t=[],ut=C;ut=ut.parentNode;)ut.nodeType===1&&_t.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<_t.length;C++){var vt=_t[C];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}lu=!!nd,id=nd=null}finally{Be=h,B.p=l,N.T=r}}e.current=a,En=2}}function f_(){if(En===2){En=0;var e=os,a=Hr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=N.T,N.T=null;var l=B.p;B.p=2;var h=Be;Be|=4;try{zv(e,a.alternate,a)}finally{Be=h,B.p=l,N.T=r}}En=3}}function h_(){if(En===4||En===3){En=0,F();var e=os,a=Hr,r=Ca,l=Jv;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?En=5:(En=0,Hr=os=null,d_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(rs=null),pr(r),a=a.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=N.T,h=B.p,B.p=2,N.T=null;try{for(var m=e.onRecoverableError,S=0;S<l.length;S++){var C=l[S];m(C.value,{componentStack:C.stack})}}finally{N.T=a,B.p=h}}(Ca&3)!==0&&Zc(),ea(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===kh?cl++:(cl=0,kh=e):cl=0,ul(0)}}function d_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Xo(a)))}function Zc(){return u_(),f_(),h_(),p_()}function p_(){if(En!==5)return!1;var e=os,a=Hh;Hh=0;var r=pr(Ca),l=N.T,h=B.p;try{B.p=32>r?32:r,N.T=null,r=Gh,Gh=null;var m=os,S=Ca;if(En=0,Hr=os=null,Ca=0,(Be&6)!==0)throw Error(s(331));var C=Be;if(Be|=4,Kv(m.current),qv(m,m.current,S,r),Be=C,ul(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,m)}catch{}return!0}finally{B.p=h,N.T=l,d_(e,a)}}function m_(e,a,r){a=Mi(r,a),a=Sh(e.stateNode,a,2),e=ts(e,a,2),e!==null&&(kn(e,2),ea(e))}function We(e,a,r){if(e.tag===3)m_(e,e,r);else for(;a!==null;){if(a.tag===3){m_(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rs===null||!rs.has(l))){e=Mi(r,e),r=gv(2),l=ts(a,r,2),l!==null&&(vv(r,l,a,e),kn(l,2),ea(l));break}}a=a.return}}function qh(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new ub;var h=new Set;l.set(a,h)}else h=l.get(a),h===void 0&&(h=new Set,l.set(a,h));h.has(r)||(Bh=!0,h.add(r),e=mb.bind(null,e,a,r),a.then(e,e))}function mb(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ze===e&&(Ee&r)===r&&(rn===4||rn===3&&(Ee&62914560)===Ee&&300>T()-Xc?(Be&2)===0&&Gr(e,0):zh|=r,Vr===Ee&&(Vr=0)),ea(e)}function g_(e,a){a===0&&(a=Ge()),e=Fs(e,a),e!==null&&(kn(e,a),ea(e))}function gb(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),g_(e,r)}function vb(e,a){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),g_(e,r)}function _b(e,a){return _e(e,a)}var Qc=null,Xr=null,Yh=!1,Jc=!1,jh=!1,cs=0;function ea(e){e!==Xr&&e.next===null&&(Xr===null?Qc=Xr=e:Xr=Xr.next=e),Jc=!0,Yh||(Yh=!0,yb())}function ul(e,a){if(!jh&&Jc){jh=!0;do for(var r=!1,l=Qc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var S=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-Bt(42|e)+1)-1,m&=h&~(S&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,y_(l,m))}else m=Ee,m=xt(l,l===Ze?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Rt(l,m)||(r=!0,y_(l,m));l=l.next}while(r);jh=!1}}function xb(){v_()}function v_(){Jc=Yh=!1;var e=0;cs!==0&&Db()&&(e=cs);for(var a=T(),r=null,l=Qc;l!==null;){var h=l.next,m=__(l,a);m===0?(l.next=null,r===null?Qc=h:r.next=h,h===null&&(Xr=r)):(r=l,(e!==0||(m&3)!==0)&&(Jc=!0)),l=h}En!==0&&En!==5||ul(e),cs!==0&&(cs=0)}function __(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var S=31-Bt(m),C=1<<S,V=h[S];V===-1?((C&r)===0||(C&l)!==0)&&(h[S]=ae(C,a)):V<=a&&(e.expiredLanes|=C),m&=~C}if(a=Ze,r=Ee,r=xt(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ue(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Rt(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&Ue(l),pr(r)){case 2:case 8:r=yt;break;case 32:r=ft;break;case 268435456:r=Ct;break;default:r=ft}return l=x_.bind(null,e),r=_e(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&Ue(l),e.callbackPriority=2,e.callbackNode=null,2}function x_(e,a){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Zc()&&e.callbackNode!==r)return null;var l=Ee;return l=xt(e,e===Ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(t_(e,l,a),__(e,T()),e.callbackNode!=null&&e.callbackNode===r?x_.bind(null,e):null)}function y_(e,a){if(Zc())return null;t_(e,a,!0)}function yb(){Lb(function(){(Be&6)!==0?_e(pt,xb):v_()})}function Kh(){if(cs===0){var e=wr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),cs=e}return cs}function S_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rc(""+e)}function M_(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function Sb(e,a,r,l,h){if(a==="submit"&&r&&r.stateNode===h){var m=S_((h[Un]||null).action),S=l.submitter;S&&(a=(a=S[Un]||null)?S_(a.formAction):S.getAttribute("formAction"),a!==null&&(m=a,S=null));var C=new uc("action","action",null,l,h);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(cs!==0){var V=S?M_(h,S):new FormData(h);mh(r,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(C.preventDefault(),V=S?M_(h,S):new FormData(h),mh(r,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var Zh=0;Zh<Lf.length;Zh++){var Qh=Lf[Zh],Mb=Qh.toLowerCase(),Eb=Qh[0].toUpperCase()+Qh.slice(1);Bi(Mb,"on"+Eb)}Bi($g,"onAnimationEnd"),Bi(t0,"onAnimationIteration"),Bi(e0,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(zT,"onTransitionRun"),Bi(VT,"onTransitionStart"),Bi(HT,"onTransitionCancel"),Bi(n0,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function E_(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var S=l.length-1;0<=S;S--){var C=l[S],V=C.instance,nt=C.currentTarget;if(C=C.listener,V!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=nt;try{m(h)}catch(ht){dc(ht)}h.currentTarget=null,m=V}else for(S=0;S<l.length;S++){if(C=l[S],V=C.instance,nt=C.currentTarget,C=C.listener,V!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=nt;try{m(h)}catch(ht){dc(ht)}h.currentTarget=null,m=V}}}}function Me(e,a){var r=a[mr];r===void 0&&(r=a[mr]=new Set);var l=e+"__bubble";r.has(l)||(T_(a,e,2,!1),r.add(l))}function Jh(e,a,r){var l=0;a&&(l|=4),T_(r,e,l,a)}var $c="_reactListening"+Math.random().toString(36).slice(2);function $h(e){if(!e[$c]){e[$c]=!0,Z.forEach(function(r){r!=="selectionchange"&&(Tb.has(r)||Jh(r,!1,e),Jh(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[$c]||(a[$c]=!0,Jh("selectionchange",!1,a))}}function T_(e,a,r,l){switch($_(a)){case 2:var h=Jb;break;case 8:h=$b;break;default:h=pd}r=h.bind(null,a,r,e),h=void 0,!xf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(a,r,{capture:!0,passive:h}):e.addEventListener(a,r,!0):h!==void 0?e.addEventListener(a,r,{passive:h}):e.addEventListener(a,r,!1)}function td(e,a,r,l,h){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===h)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===h)return;S=S.return}for(;C!==null;){if(S=Xa(C),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=m=S;continue t}C=C.parentNode}}l=l.return}wg(function(){var nt=m,ht=vf(r),_t=[];t:{var rt=i0.get(e);if(rt!==void 0){var ut=uc,Xt=e;switch(e){case"keypress":if(lc(r)===0)break t;case"keydown":case"keyup":ut=vT;break;case"focusin":Xt="focus",ut=Ef;break;case"focusout":Xt="blur",ut=Ef;break;case"beforeblur":case"afterblur":ut=Ef;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=sT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=yT;break;case $g:case t0:case e0:ut=lT;break;case n0:ut=MT;break;case"scroll":case"scrollend":ut=iT;break;case"wheel":ut=TT;break;case"copy":case"cut":case"paste":ut=uT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Pg;break;case"toggle":case"beforetoggle":ut=AT}var ne=(a&4)!==0,Ke=!ne&&(e==="scroll"||e==="scrollend"),Q=ne?rt!==null?rt+"Capture":null:rt;ne=[];for(var X=nt,tt;X!==null;){var vt=X;if(tt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||tt===null||Q===null||(vt=No(X,Q),vt!=null&&ne.push(hl(X,vt,tt))),Ke)break;X=X.return}0<ne.length&&(rt=new ut(rt,Xt,null,r,ht),_t.push({event:rt,listeners:ne}))}}if((a&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&r!==gf&&(Xt=r.relatedTarget||r.fromElement)&&(Xa(Xt)||Xt[Fi]))break t;if((ut||rt)&&(rt=ht.window===ht?ht:(rt=ht.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(Xt=r.relatedTarget||r.toElement,ut=nt,Xt=Xt?Xa(Xt):null,Xt!==null&&(Ke=c(Xt),ne=Xt.tag,Xt!==Ke||ne!==5&&ne!==27&&ne!==6)&&(Xt=null)):(ut=null,Xt=nt),ut!==Xt)){if(ne=Lg,vt="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Pg,vt="onPointerLeave",Q="onPointerEnter",X="pointer"),Ke=ut==null?rt:Ls(ut),tt=Xt==null?rt:Ls(Xt),rt=new ne(vt,X+"leave",ut,r,ht),rt.target=Ke,rt.relatedTarget=tt,vt=null,Xa(ht)===nt&&(ne=new ne(Q,X+"enter",Xt,r,ht),ne.target=tt,ne.relatedTarget=Ke,vt=ne),Ke=vt,ut&&Xt)e:{for(ne=bb,Q=ut,X=Xt,tt=0,vt=Q;vt;vt=ne(vt))tt++;vt=0;for(var $t=X;$t;$t=ne($t))vt++;for(;0<tt-vt;)Q=ne(Q),tt--;for(;0<vt-tt;)X=ne(X),vt--;for(;tt--;){if(Q===X||X!==null&&Q===X.alternate){ne=Q;break e}Q=ne(Q),X=ne(X)}ne=null}else ne=null;ut!==null&&b_(_t,rt,ut,ne,!1),Xt!==null&&Ke!==null&&b_(_t,Ke,Xt,ne,!0)}}t:{if(rt=nt?Ls(nt):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Le=Gg;else if(Vg(rt))if(kg)Le=FT;else{Le=PT;var Zt=NT}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ii(nt.elementType)&&(Le=Gg):Le=OT;if(Le&&(Le=Le(e,nt))){Hg(_t,Le,r,ht);break t}Zt&&Zt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Nn(rt,"number",rt.value)}switch(Zt=nt?Ls(nt):window,e){case"focusin":(Vg(Zt)||Zt.contentEditable==="true")&&(Sr=Zt,wf=nt,Ho=null);break;case"focusout":Ho=wf=Sr=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,Qg(_t,r,ht);break;case"selectionchange":if(BT)break;case"keydown":case"keyup":Qg(_t,r,ht)}var pe;if(bf)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else yr?Bg(e,r)&&(Te="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Te="onCompositionStart");Te&&(Og&&r.locale!=="ko"&&(yr||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&yr&&(pe=Dg()):(Ya=ht,yf="value"in Ya?Ya.value:Ya.textContent,yr=!0)),Zt=tu(nt,Te),0<Zt.length&&(Te=new Ng(Te,e,null,r,ht),_t.push({event:Te,listeners:Zt}),pe?Te.data=pe:(pe=zg(r),pe!==null&&(Te.data=pe)))),(pe=CT?wT(e,r):DT(e,r))&&(Te=tu(nt,"onBeforeInput"),0<Te.length&&(Zt=new Ng("onBeforeInput","beforeinput",null,r,ht),_t.push({event:Zt,listeners:Te}),Zt.data=pe)),Sb(_t,e,nt,r,ht)}E_(_t,a)})}function hl(e,a,r){return{instance:e,listener:a,currentTarget:r}}function tu(e,a){for(var r=a+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=No(e,r),h!=null&&l.unshift(hl(e,h,m)),h=No(e,a),h!=null&&l.push(hl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function bb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b_(e,a,r,l,h){for(var m=a._reactName,S=[];r!==null&&r!==l;){var C=r,V=C.alternate,nt=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||nt===null||(V=nt,h?(nt=No(r,m),nt!=null&&S.unshift(hl(r,nt,V))):h||(nt=No(r,m),nt!=null&&S.push(hl(r,nt,V)))),r=r.return}S.length!==0&&e.push({event:a,listeners:S})}var Ab=/\r\n?/g,Rb=/\u0000|\uFFFD/g;function A_(e){return(typeof e=="string"?e:""+e).replace(Ab,`
`).replace(Rb,"")}function R_(e,a){return a=A_(a),A_(e)===a}function je(e,a,r,l,h,m){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Mn(e,""+l);break;case"className":te(e,"class",l);break;case"tabIndex":te(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,r,l);break;case"style":vr(e,l,m);break;case"data":if(a!=="object"){te(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=rc(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(a!=="input"&&je(e,a,"name",h.name,h,null),je(e,a,"formEncType",h.formEncType,h,null),je(e,a,"formMethod",h.formMethod,h,null),je(e,a,"formTarget",h.formTarget,h,null)):(je(e,a,"encType",h.encType,h,null),je(e,a,"method",h.method,h,null),je(e,a,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=rc(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=da);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=rc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Yt(e,"popover",l);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Yt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=eT.get(r)||r,Yt(e,r,l))}}function ed(e,a,r,l,h,m){switch(r){case"style":vr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),a=r.slice(2,h?r.length-7:void 0),m=e[Un]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(a,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Yt(e,r,l)}}}function Vn(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var S=r[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:je(e,a,m,S,r,null)}}h&&je(e,a,"srcSet",r.srcSet,r,null),l&&je(e,a,"src",r.src,r,null);return;case"input":Me("invalid",e);var C=m=S=h=null,V=null,nt=null;for(l in r)if(r.hasOwnProperty(l)){var ht=r[l];if(ht!=null)switch(l){case"name":h=ht;break;case"type":S=ht;break;case"checked":V=ht;break;case"defaultChecked":nt=ht;break;case"value":m=ht;break;case"defaultValue":C=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,a));break;default:je(e,a,l,ht,r,null)}}ha(e,m,C,V,nt,S,h,!1);return;case"select":Me("invalid",e),l=S=m=null;for(h in r)if(r.hasOwnProperty(h)&&(C=r[h],C!=null))switch(h){case"value":m=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:je(e,a,h,C,r,null)}a=m,r=S,e.multiple=!!l,a!=null?yi(e,!!l,a,!1):r!=null&&yi(e,!!l,r,!0);return;case"textarea":Me("invalid",e),m=h=l=null;for(S in r)if(r.hasOwnProperty(S)&&(C=r[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":h=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:je(e,a,S,C,r,null)}Pn(e,l,h,m);return;case"option":for(V in r)r.hasOwnProperty(V)&&(l=r[V],l!=null)&&(V==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":je(e,a,V,l,r,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<fl.length;l++)Me(fl[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(l=r[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:je(e,a,nt,l,r,null)}return;default:if(Ii(a)){for(ht in r)r.hasOwnProperty(ht)&&(l=r[ht],l!==void 0&&ed(e,a,ht,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&je(e,a,C,l,r,null))}function Cb(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,S=null,C=null,V=null,nt=null,ht=null;for(ut in r){var _t=r[ut];if(r.hasOwnProperty(ut)&&_t!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=_t;default:l.hasOwnProperty(ut)||je(e,a,ut,null,l,_t)}}for(var rt in l){var ut=l[rt];if(_t=r[rt],l.hasOwnProperty(rt)&&(ut!=null||_t!=null))switch(rt){case"type":m=ut;break;case"name":h=ut;break;case"checked":nt=ut;break;case"defaultChecked":ht=ut;break;case"value":S=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,a));break;default:ut!==_t&&je(e,a,rt,ut,l,_t)}}Ln(e,S,C,V,nt,ht,m,h);return;case"select":ut=S=C=rt=null;for(m in r)if(V=r[m],r.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":ut=V;default:l.hasOwnProperty(m)||je(e,a,m,null,l,V)}for(h in l)if(m=l[h],V=r[h],l.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":rt=m;break;case"defaultValue":C=m;break;case"multiple":S=m;default:m!==V&&je(e,a,h,m,l,V)}a=C,r=S,l=ut,rt!=null?yi(e,!!r,rt,!1):!!l!=!!r&&(a!=null?yi(e,!!r,a,!0):yi(e,!!r,r?[]:"",!1));return;case"textarea":ut=rt=null;for(C in r)if(h=r[C],r.hasOwnProperty(C)&&h!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:je(e,a,C,null,l,h)}for(S in l)if(h=l[S],m=r[S],l.hasOwnProperty(S)&&(h!=null||m!=null))switch(S){case"value":rt=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==m&&je(e,a,S,h,l,m)}ke(e,rt,ut);return;case"option":for(var Xt in r)rt=r[Xt],r.hasOwnProperty(Xt)&&rt!=null&&!l.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:je(e,a,Xt,null,l,rt));for(V in l)rt=l[V],ut=r[V],l.hasOwnProperty(V)&&rt!==ut&&(rt!=null||ut!=null)&&(V==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":je(e,a,V,rt,l,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in r)rt=r[ne],r.hasOwnProperty(ne)&&rt!=null&&!l.hasOwnProperty(ne)&&je(e,a,ne,null,l,rt);for(nt in l)if(rt=l[nt],ut=r[nt],l.hasOwnProperty(nt)&&rt!==ut&&(rt!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,a));break;default:je(e,a,nt,rt,l,ut)}return;default:if(Ii(a)){for(var Ke in r)rt=r[Ke],r.hasOwnProperty(Ke)&&rt!==void 0&&!l.hasOwnProperty(Ke)&&ed(e,a,Ke,void 0,l,rt);for(ht in l)rt=l[ht],ut=r[ht],!l.hasOwnProperty(ht)||rt===ut||rt===void 0&&ut===void 0||ed(e,a,ht,rt,l,ut);return}}for(var Q in r)rt=r[Q],r.hasOwnProperty(Q)&&rt!=null&&!l.hasOwnProperty(Q)&&je(e,a,Q,null,l,rt);for(_t in l)rt=l[_t],ut=r[_t],!l.hasOwnProperty(_t)||rt===ut||rt==null&&ut==null||je(e,a,_t,rt,l,ut)}function C_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,S=h.initiatorType,C=h.duration;if(m&&C&&C_(S)){for(S=0,C=h.responseEnd,l+=1;l<r.length;l++){var V=r[l],nt=V.startTime;if(nt>C)break;var ht=V.transferSize,_t=V.initiatorType;ht&&C_(_t)&&(V=V.responseEnd,S+=ht*(V<C?1:(C-nt)/(V-nt)))}if(--l,a+=8*(m+S)/(h.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nd=null,id=null;function eu(e){return e.nodeType===9?e:e.ownerDocument}function w_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ad(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var sd=null;function Db(){var e=window.event;return e&&e.type==="popstate"?e===sd?!1:(sd=e,!0):(sd=null,!1)}var U_=typeof setTimeout=="function"?setTimeout:void 0,Ub=typeof clearTimeout=="function"?clearTimeout:void 0,L_=typeof Promise=="function"?Promise:void 0,Lb=typeof queueMicrotask=="function"?queueMicrotask:typeof L_<"u"?function(e){return L_.resolve(null).then(e).catch(Nb)}:U_;function Nb(e){setTimeout(function(){throw e})}function us(e){return e==="head"}function N_(e,a){var r=a,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),jr(a);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")dl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,dl(r);for(var m=r.firstChild;m;){var S=m.nextSibling,C=m.nodeName;m[Us]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=S}}else r==="body"&&dl(e.ownerDocument.body);r=h}while(r);jr(a)}function P_(e,a){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function rd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":rd(r),Lo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Pb(e,a,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Us])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function Ob(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ri(e.nextSibling),e===null))return null;return e}function O_(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function od(e){return e.data==="$?"||e.data==="$~"}function ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fb(e,a){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||r.readyState!=="loading")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ri(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var cd=null;function F_(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(a===0)return Ri(e.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}e=e.nextSibling}return null}function I_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return e;a--}else r!=="/$"&&r!=="/&"||a++}e=e.previousSibling}return null}function B_(e,a,r){switch(a=eu(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function dl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Lo(e)}var Ci=new Map,z_=new Set;function nu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=B.d;B.d={f:Ib,r:Bb,D:zb,C:Vb,L:Hb,m:Gb,X:Xb,S:kb,M:Wb};function Ib(){var e=wa.f(),a=Yc();return e||a}function Bb(e){var a=Wa(e);a!==null&&a.tag===5&&a.type==="form"?nv(a):wa.r(e)}var Wr=typeof document>"u"?null:document;function V_(e,a,r){var l=Wr;if(l&&typeof a=="string"&&a){var h=re(a);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),z_.has(h)||(z_.add(h),e={rel:e,crossOrigin:r,href:a},l.querySelector(h)===null&&(a=l.createElement("link"),Vn(a,"link",e),w(a),l.head.appendChild(a)))}}function zb(e){wa.D(e),V_("dns-prefetch",e,null)}function Vb(e,a){wa.C(e,a),V_("preconnect",e,a)}function Hb(e,a,r){wa.L(e,a,r);var l=Wr;if(l&&e&&a){var h='link[rel="preload"][as="'+re(a)+'"]';a==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+re(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+re(r.imageSizes)+'"]')):h+='[href="'+re(e)+'"]';var m=h;switch(a){case"style":m=qr(e);break;case"script":m=Yr(e)}Ci.has(m)||(e=v({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),Ci.set(m,e),l.querySelector(h)!==null||a==="style"&&l.querySelector(pl(m))||a==="script"&&l.querySelector(ml(m))||(a=l.createElement("link"),Vn(a,"link",e),w(a),l.head.appendChild(a)))}}function Gb(e,a){wa.m(e,a);var r=Wr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+re(l)+'"][href="'+re(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Yr(e)}if(!Ci.has(m)&&(e=v({rel:"modulepreload",href:e},a),Ci.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ml(m)))return}l=r.createElement("link"),Vn(l,"link",e),w(l),r.head.appendChild(l)}}}function kb(e,a,r){wa.S(e,a,r);var l=Wr;if(l&&e){var h=qa(l).hoistableStyles,m=qr(e);a=a||"default";var S=h.get(m);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(pl(m)))C.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":a},r),(r=Ci.get(m))&&ud(e,r);var V=S=l.createElement("link");w(V),Vn(V,"link",e),V._p=new Promise(function(nt,ht){V.onload=nt,V.onerror=ht}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,iu(S,a,l)}S={type:"stylesheet",instance:S,count:1,state:C},h.set(m,S)}}}function Xb(e,a){wa.X(e,a);var r=Wr;if(r&&e){var l=qa(r).hoistableScripts,h=Yr(e),m=l.get(h);m||(m=r.querySelector(ml(h)),m||(e=v({src:e,async:!0},a),(a=Ci.get(h))&&fd(e,a),m=r.createElement("script"),w(m),Vn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function Wb(e,a){wa.M(e,a);var r=Wr;if(r&&e){var l=qa(r).hoistableScripts,h=Yr(e),m=l.get(h);m||(m=r.querySelector(ml(h)),m||(e=v({src:e,async:!0,type:"module"},a),(a=Ci.get(h))&&fd(e,a),m=r.createElement("script"),w(m),Vn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function H_(e,a,r,l){var h=(h=J.current)?nu(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=qr(r.href),r=qa(h).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=qr(r.href);var m=qa(h).hoistableStyles,S=m.get(e);if(S||(h=h.ownerDocument||h,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,S),(m=h.querySelector(pl(e)))&&!m._p&&(S.instance=m,S.state.loading=5),Ci.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ci.set(e,r),m||qb(h,e,r,S.state))),a&&l===null)throw Error(s(528,""));return S}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Yr(r),r=qa(h).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function qr(e){return'href="'+re(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function G_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function qb(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Vn(a,"link",r),w(a),e.head.appendChild(a))}function Yr(e){return'[src="'+re(e)+'"]'}function ml(e){return"script[async]"+e}function k_(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+re(r.href)+'"]');if(l)return a.instance=l,w(l),l;var h=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),w(l),Vn(l,"style",h),iu(l,r.precedence,e),a.instance=l;case"stylesheet":h=qr(r.href);var m=e.querySelector(pl(h));if(m)return a.state.loading|=4,a.instance=m,w(m),m;l=G_(r),(h=Ci.get(h))&&ud(l,h),m=(e.ownerDocument||e).createElement("link"),w(m);var S=m;return S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),Vn(m,"link",l),a.state.loading|=4,iu(m,r.precedence,e),a.instance=m;case"script":return m=Yr(r.src),(h=e.querySelector(ml(m)))?(a.instance=h,w(h),h):(l=r,(h=Ci.get(m))&&(l=v({},r),fd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),w(h),Vn(h,"link",l),e.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,iu(l,r.precedence,e));return a.instance}function iu(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===a)m=C;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function ud(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function fd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var au=null;function X_(e,a,r){if(au===null){var l=new Map,h=au=new Map;h.set(r,l)}else h=au,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Us]||m[pn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(a)||"";S=e+S;var C=l.get(S);C?C.push(m):l.set(S,[m])}}return l}function W_(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function Yb(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function q_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jb(e,a,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=qr(l.href),m=a.querySelector(pl(h));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=su.bind(e),a.then(e,e)),r.state.loading|=4,r.instance=m,w(m);return}m=a.ownerDocument||a,l=G_(l),(h=Ci.get(h))&&ud(l,h),m=m.createElement("link"),w(m);var S=m;S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),Vn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=su.bind(e),a.addEventListener("load",r),a.addEventListener("error",r))}}var hd=0;function Kb(e,a){return e.stylesheets&&e.count===0&&ou(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+a);0<e.imgBytes&&hd===0&&(hd=62500*wb());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>hd?50:800)+a);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ru=null;function ou(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ru=new Map,a.forEach(Zb,e),ru=null,su.call(e))}function Zb(e,a){if(!(a.state.loading&4)){var r=ru.get(e);if(r)var l=r.get(null);else{r=new Map,ru.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var S=h[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}h=a.instance,S=h.getAttribute("data-precedence"),m=r.get(S)||l,m===l&&r.set(null,h),r.set(S,h),this.count++,l=su.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),a.state.loading|=4}}var gl={$$typeof:R,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Qb(e,a,r,l,h,m,S,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Y_(e,a,r,l,h,m,S,C,V,nt,ht,_t){return e=new Qb(e,a,r,S,V,nt,ht,_t,C),a=1,m===!0&&(a|=24),m=ci(3,null,null,a),e.current=m,m.stateNode=e,a=Wf(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:a},Kf(m),e}function j_(e){return e?(e=Tr,e):Tr}function K_(e,a,r,l,h,m){h=j_(h),l.context===null?l.context=h:l.pendingContext=h,l=$a(a),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=ts(e,l,a),r!==null&&(ai(r,e,a),jo(r,e,a))}function Z_(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function dd(e,a){Z_(e,a),(e=e.alternate)&&Z_(e,a)}function Q_(e){if(e.tag===13||e.tag===31){var a=Fs(e,67108864);a!==null&&ai(a,e,67108864),dd(e,67108864)}}function J_(e){if(e.tag===13||e.tag===31){var a=pi();a=wo(a);var r=Fs(e,a);r!==null&&ai(r,e,a),dd(e,a)}}var lu=!0;function Jb(e,a,r,l){var h=N.T;N.T=null;var m=B.p;try{B.p=2,pd(e,a,r,l)}finally{B.p=m,N.T=h}}function $b(e,a,r,l){var h=N.T;N.T=null;var m=B.p;try{B.p=8,pd(e,a,r,l)}finally{B.p=m,N.T=h}}function pd(e,a,r,l){if(lu){var h=md(l);if(h===null)td(e,a,l,cu,r),tx(e,l);else if(eA(h,e,a,r,l))l.stopPropagation();else if(tx(e,l),a&4&&-1<tA.indexOf(e)){for(;h!==null;){var m=Wa(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Mt(m.pendingLanes);if(S!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var V=1<<31-Bt(S);C.entanglements[1]|=V,S&=~V}ea(m),(Be&6)===0&&(Wc=T()+500,ul(0))}}break;case 31:case 13:C=Fs(m,2),C!==null&&ai(C,m,2),Yc(),dd(m,2)}if(m=md(l),m===null&&td(e,a,l,cu,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else td(e,a,l,null,r)}}function md(e){return e=vf(e),gd(e)}var cu=null;function gd(e){if(cu=null,e=Xa(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=u(a),e!==null)return e;e=null}else if(r===31){if(e=f(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return cu=e,null}function $_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case pt:return 2;case yt:return 8;case ft:case Qt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var vd=!1,fs=null,hs=null,ds=null,vl=new Map,_l=new Map,ps=[],tA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(e,a){switch(e){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":vl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(a.pointerId)}}function xl(e,a,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},a!==null&&(a=Wa(a),a!==null&&Q_(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),e)}function eA(e,a,r,l,h){switch(a){case"focusin":return fs=xl(fs,e,a,r,l,h),!0;case"dragenter":return hs=xl(hs,e,a,r,l,h),!0;case"mouseover":return ds=xl(ds,e,a,r,l,h),!0;case"pointerover":var m=h.pointerId;return vl.set(m,xl(vl.get(m)||null,e,a,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,_l.set(m,xl(_l.get(m)||null,e,a,r,l,h)),!0}return!1}function ex(e){var a=Xa(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=u(r),a!==null){e.blockedOn=a,Qi(e.priority,function(){J_(r)});return}}else if(a===31){if(a=f(r),a!==null){e.blockedOn=a,Qi(e.priority,function(){J_(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=md(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);gf=l,r.target.dispatchEvent(l),gf=null}else return a=Wa(r),a!==null&&Q_(a),e.blockedOn=r,!1;a.shift()}return!0}function nx(e,a,r){uu(e)&&r.delete(a)}function nA(){vd=!1,fs!==null&&uu(fs)&&(fs=null),hs!==null&&uu(hs)&&(hs=null),ds!==null&&uu(ds)&&(ds=null),vl.forEach(nx),_l.forEach(nx)}function fu(e,a){e.blockedOn===a&&(e.blockedOn=null,vd||(vd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,nA)))}var hu=null;function ix(e){hu!==e&&(hu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){hu===e&&(hu=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],h=e[a+2];if(typeof l!="function"){if(gd(l||r)===null)continue;break}var m=Wa(r);m!==null&&(e.splice(a,3),a-=3,mh(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function jr(e){function a(V){return fu(V,e)}fs!==null&&fu(fs,e),hs!==null&&fu(hs,e),ds!==null&&fu(ds,e),vl.forEach(a),_l.forEach(a);for(var r=0;r<ps.length;r++){var l=ps[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ps.length&&(r=ps[0],r.blockedOn===null);)ex(r),r.blockedOn===null&&ps.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],S=h[Un]||null;if(typeof m=="function")S||ix(r);else if(S){var C=null;if(m&&m.hasAttribute("formAction")){if(h=m,S=m[Un]||null)C=S.formAction;else if(gd(h)!==null)continue}else C=S.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),ix(r)}}}function ax(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return h=S})},focusReset:"manual",scroll:"manual"})}function a(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),h!==null&&(h(),h=null)}}}function _d(e){this._internalRoot=e}du.prototype.render=_d.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=pi();K_(r,l,e,a,null,null)},du.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;K_(e.current,2,null,e,null,null),Yc(),a[Fi]=null}};function du(e){this._internalRoot=e}du.prototype.unstable_scheduleHydration=function(e){if(e){var a=Do();e={blockedOn:null,target:e,priority:a};for(var r=0;r<ps.length&&a!==0&&a<ps[r].priority;r++);ps.splice(r,0,e),r===0&&ex(e)}};var sx=t.version;if(sx!=="19.2.3")throw Error(s(527,sx,"19.2.3"));B.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var iA={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Et=pu.inject(iA),bt=pu}catch{}}return Sl.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",h=hv,m=dv,S=pv;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError)),a=Y_(e,1,!1,null,null,r,l,null,h,m,S,ax),e[Fi]=a.current,$h(e),new _d(a)},Sl.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,h="",m=hv,S=dv,C=pv,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),a=Y_(e,1,!0,a,r??null,l,h,V,m,S,C,ax),a.context=j_(null),r=a.current,l=pi(),l=wo(l),h=$a(l),h.callback=null,ts(r,h,l),r=l,a.current.lanes=r,kn(a,r),ea(a),e[Fi]=a.current,$h(e),new du(a)},Sl.version="19.2.3",Sl}var mx;function pA(){if(mx)return Sd.exports;mx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Sd.exports=dA(),Sd.exports}var mA=pA();const PS=Nt.createContext({});function Hm(i){const t=Nt.useRef(null);return t.current===null&&(t.current=i()),t.current}const OS=typeof window<"u",FS=OS?Nt.useLayoutEffect:Nt.useEffect,Gm=Nt.createContext(null);function km(i,t){i.indexOf(t)===-1&&i.push(t)}function Xm(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const ca=(i,t,n)=>n>t?t:n<i?i:n;let Wm=()=>{};const za={},IS=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function BS(i){return typeof i=="object"&&i!==null}const zS=i=>/^0[^.\s]+$/u.test(i);function qm(i){let t;return()=>(t===void 0&&(t=i()),t)}const Ni=i=>i,gA=(i,t)=>n=>t(i(n)),jl=(...i)=>i.reduce(gA),Hl=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class Ym{constructor(){this.subscriptions=[]}add(t){return km(this.subscriptions,t),()=>Xm(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Fa=i=>i*1e3,Li=i=>i/1e3;function VS(i,t){return t?i*(1e3/t):0}const HS=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,vA=1e-7,_A=12;function xA(i,t,n,s,o){let c,u,f=0;do u=t+(n-t)/2,c=HS(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>vA&&++f<_A);return u}function Kl(i,t,n,s){if(i===t&&n===s)return Ni;const o=c=>xA(c,0,1,i,n);return c=>c===0||c===1?c:HS(o(c),t,s)}const GS=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,kS=i=>t=>1-i(1-t),XS=Kl(.33,1.53,.69,.99),jm=kS(XS),WS=GS(jm),qS=i=>(i*=2)<1?.5*jm(i):.5*(2-Math.pow(2,-10*(i-1))),Km=i=>1-Math.sin(Math.acos(i)),YS=kS(Km),jS=GS(Km),yA=Kl(.42,0,1,1),SA=Kl(0,0,.58,1),KS=Kl(.42,0,.58,1),MA=i=>Array.isArray(i)&&typeof i[0]!="number",ZS=i=>Array.isArray(i)&&typeof i[0]=="number",EA={linear:Ni,easeIn:yA,easeInOut:KS,easeOut:SA,circIn:Km,circInOut:jS,circOut:YS,backIn:jm,backInOut:WS,backOut:XS,anticipate:qS},TA=i=>typeof i=="string",gx=i=>{if(ZS(i)){Wm(i.length===4);const[t,n,s,o]=i;return Kl(t,n,s,o)}else if(TA(i))return EA[i];return i},mu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function bA(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(d.schedule(g),i()),g(f)}const d={schedule:(g,v=!1,_=!1)=>{const E=_&&o?n:s;return v&&u.add(g),E.has(g)||E.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(f=g,o){c=!0;return}o=!0,[n,s]=[s,n],n.forEach(p),n.clear(),o=!1,c&&(c=!1,d.process(g))}};return d}const AA=40;function QS(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=mu.reduce((R,L)=>(R[L]=bA(c),R),{}),{setup:f,read:p,resolveKeyframes:d,preUpdate:g,update:v,preRender:_,render:y,postRender:E}=u,b=()=>{const R=za.useManualTiming?o.timestamp:performance.now();n=!1,za.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(R-o.timestamp,AA),1)),o.timestamp=R,o.isProcessing=!0,f.process(o),p.process(o),d.process(o),g.process(o),v.process(o),_.process(o),y.process(o),E.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(b))},M=()=>{n=!0,s=!0,o.isProcessing||i(b)};return{schedule:mu.reduce((R,L)=>{const P=u[L];return R[L]=(z,I=!1,k=!1)=>(n||M(),P.schedule(z,I,k)),R},{}),cancel:R=>{for(let L=0;L<mu.length;L++)u[mu[L]].cancel(R)},state:o,steps:u}}const{schedule:Qe,cancel:ua,state:Hn,steps:bd}=QS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ni,!0);let zu;function RA(){zu=void 0}const Qn={now:()=>(zu===void 0&&Qn.set(Hn.isProcessing||za.useManualTiming?Hn.timestamp:performance.now()),zu),set:i=>{zu=i,queueMicrotask(RA)}},JS=i=>t=>typeof t=="string"&&t.startsWith(i),$S=JS("--"),CA=JS("var(--"),Zm=i=>CA(i)?wA.test(i.split("/*")[0].trim()):!1,wA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function vx(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const Eo={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Gl={...Eo,transform:i=>ca(0,1,i)},gu={...Eo,default:1},Fl=i=>Math.round(i*1e5)/1e5,Qm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function DA(i){return i==null}const UA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Jm=(i,t)=>n=>!!(typeof n=="string"&&UA.test(n)&&n.startsWith(i)||t&&!DA(n)&&Object.prototype.hasOwnProperty.call(n,t)),tM=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,f]=s.match(Qm);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},LA=i=>ca(0,255,i),Ad={...Eo,transform:i=>Math.round(LA(i))},rr={test:Jm("rgb","red"),parse:tM("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+Ad.transform(i)+", "+Ad.transform(t)+", "+Ad.transform(n)+", "+Fl(Gl.transform(s))+")"};function NA(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const Sp={test:Jm("#"),parse:NA,transform:rr.transform},Zl=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),Ms=Zl("deg"),oa=Zl("%"),Wt=Zl("px"),PA=Zl("vh"),OA=Zl("vw"),_x={...oa,parse:i=>oa.parse(i)/100,transform:i=>oa.transform(i*100)},co={test:Jm("hsl","hue"),parse:tM("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+oa.transform(Fl(t))+", "+oa.transform(Fl(n))+", "+Fl(Gl.transform(s))+")"},yn={test:i=>rr.test(i)||Sp.test(i)||co.test(i),parse:i=>rr.test(i)?rr.parse(i):co.test(i)?co.parse(i):Sp.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?rr.transform(i):co.transform(i),getAnimatableNone:i=>{const t=yn.parse(i);return t.alpha=0,yn.transform(t)}},FA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function IA(i){return isNaN(i)&&typeof i=="string"&&(i.match(Qm)?.length||0)+(i.match(FA)?.length||0)>0}const eM="number",nM="color",BA="var",zA="var(",xx="${}",VA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function kl(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const f=t.replace(VA,p=>(yn.test(p)?(s.color.push(c),o.push(nM),n.push(yn.parse(p))):p.startsWith(zA)?(s.var.push(c),o.push(BA),n.push(p)):(s.number.push(c),o.push(eM),n.push(parseFloat(p))),++c,xx)).split(xx);return{values:n,split:f,indexes:s,types:o}}function iM(i){return kl(i).values}function aM(i){const{split:t,types:n}=kl(i),s=t.length;return o=>{let c="";for(let u=0;u<s;u++)if(c+=t[u],o[u]!==void 0){const f=n[u];f===eM?c+=Fl(o[u]):f===nM?c+=yn.transform(o[u]):c+=o[u]}return c}}const HA=i=>typeof i=="number"?0:yn.test(i)?yn.getAnimatableNone(i):i;function GA(i){const t=iM(i);return aM(i)(t.map(HA))}const As={test:IA,parse:iM,createTransformer:aM,getAnimatableNone:GA};function Rd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function kA({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const f=n<.5?n*(1+t):n+t-n*t,p=2*n-f;o=Rd(p,f,i+1/3),c=Rd(p,f,i),u=Rd(p,f,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function Ku(i,t){return n=>n>0?t:i}const an=(i,t,n)=>i+(t-i)*n,Cd=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},XA=[Sp,rr,co],WA=i=>XA.find(t=>t.test(i));function yx(i){const t=WA(i);if(!t)return!1;let n=t.parse(i);return t===co&&(n=kA(n)),n}const Sx=(i,t)=>{const n=yx(i),s=yx(t);if(!n||!s)return Ku(i,t);const o={...n};return c=>(o.red=Cd(n.red,s.red,c),o.green=Cd(n.green,s.green,c),o.blue=Cd(n.blue,s.blue,c),o.alpha=an(n.alpha,s.alpha,c),rr.transform(o))},Mp=new Set(["none","hidden"]);function qA(i,t){return Mp.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function YA(i,t){return n=>an(i,t,n)}function $m(i){return typeof i=="number"?YA:typeof i=="string"?Zm(i)?Ku:yn.test(i)?Sx:ZA:Array.isArray(i)?sM:typeof i=="object"?yn.test(i)?Sx:jA:Ku}function sM(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>$m(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function jA(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=$m(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function KA(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],f=i.values[u]??0;n[o]=f,s[c]++}return n}const ZA=(i,t)=>{const n=As.createTransformer(t),s=kl(i),o=kl(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?Mp.has(i)&&!o.values.length||Mp.has(t)&&!s.values.length?qA(i,t):jl(sM(KA(s,o),o.values),n):Ku(i,t)};function rM(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?an(i,t,n):$m(i)(i,t)}const QA=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>Qe.update(t,n),stop:()=>ua(t),now:()=>Hn.isProcessing?Hn.timestamp:Qn.now()}},oM=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Zu=2e4;function tg(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<Zu;)t+=n,s=i.next(t);return t>=Zu?1/0:t}function JA(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(tg(s),Zu);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Li(o)}}const $A=5;function lM(i,t,n){const s=Math.max(t-$A,0);return VS(n-i(s),t-s)}const on={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wd=.001;function t1({duration:i=on.duration,bounce:t=on.bounce,velocity:n=on.velocity,mass:s=on.mass}){let o,c,u=1-t;u=ca(on.minDamping,on.maxDamping,u),i=ca(on.minDuration,on.maxDuration,Li(i)),u<1?(o=d=>{const g=d*u,v=g*i,_=g-n,y=Ep(d,u),E=Math.exp(-v);return wd-_/y*E},c=d=>{const v=d*u*i,_=v*n+n,y=Math.pow(u,2)*Math.pow(d,2)*i,E=Math.exp(-v),b=Ep(Math.pow(d,2),u);return(-o(d)+wd>0?-1:1)*((_-y)*E)/b}):(o=d=>{const g=Math.exp(-d*i),v=(d-n)*i+1;return-wd+g*v},c=d=>{const g=Math.exp(-d*i),v=(n-d)*(i*i);return g*v});const f=5/i,p=n1(o,c,f);if(i=Fa(i),isNaN(p))return{stiffness:on.stiffness,damping:on.damping,duration:i};{const d=Math.pow(p,2)*s;return{stiffness:d,damping:u*2*Math.sqrt(s*d),duration:i}}}const e1=12;function n1(i,t,n){let s=n;for(let o=1;o<e1;o++)s=s-i(s)/t(s);return s}function Ep(i,t){return i*Math.sqrt(1-t*t)}const i1=["duration","bounce"],a1=["stiffness","damping","mass"];function Mx(i,t){return t.some(n=>i[n]!==void 0)}function s1(i){let t={velocity:on.velocity,stiffness:on.stiffness,damping:on.damping,mass:on.mass,isResolvedFromDuration:!1,...i};if(!Mx(i,a1)&&Mx(i,i1))if(i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*ca(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:on.mass,stiffness:o,damping:c}}else{const n=t1(i);t={...t,...n,mass:on.mass},t.isResolvedFromDuration=!0}return t}function Qu(i=on.visualDuration,t=on.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],f={done:!1,value:c},{stiffness:p,damping:d,mass:g,duration:v,velocity:_,isResolvedFromDuration:y}=s1({...n,velocity:-Li(n.velocity||0)}),E=_||0,b=d/(2*Math.sqrt(p*g)),M=u-c,x=Li(Math.sqrt(p/g)),D=Math.abs(M)<5;s||(s=D?on.restSpeed.granular:on.restSpeed.default),o||(o=D?on.restDelta.granular:on.restDelta.default);let R;if(b<1){const P=Ep(x,b);R=z=>{const I=Math.exp(-b*x*z);return u-I*((E+b*x*M)/P*Math.sin(P*z)+M*Math.cos(P*z))}}else if(b===1)R=P=>u-Math.exp(-x*P)*(M+(E+x*M)*P);else{const P=x*Math.sqrt(b*b-1);R=z=>{const I=Math.exp(-b*x*z),k=Math.min(P*z,300);return u-I*((E+b*x*M)*Math.sinh(k)+P*M*Math.cosh(k))/P}}const L={calculatedDuration:y&&v||null,next:P=>{const z=R(P);if(y)f.done=P>=v;else{let I=P===0?E:0;b<1&&(I=P===0?Fa(E):lM(R,P,z));const k=Math.abs(I)<=s,A=Math.abs(u-z)<=o;f.done=k&&A}return f.value=f.done?u:z,f},toString:()=>{const P=Math.min(tg(L),Zu),z=oM(I=>L.next(P*I).value,P,30);return P+"ms "+z},toTransition:()=>{}};return L}Qu.applyToOptions=i=>{const t=JA(i,100,Qu);return i.ease=t.ease,i.duration=Fa(t.duration),i.type="keyframes",i};function Tp({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:p,restDelta:d=.5,restSpeed:g}){const v=i[0],_={done:!1,value:v},y=k=>f!==void 0&&k<f||p!==void 0&&k>p,E=k=>f===void 0?p:p===void 0||Math.abs(f-k)<Math.abs(p-k)?f:p;let b=n*t;const M=v+b,x=u===void 0?M:u(M);x!==M&&(b=x-v);const D=k=>-b*Math.exp(-k/s),R=k=>x+D(k),L=k=>{const A=D(k),U=R(k);_.done=Math.abs(A)<=d,_.value=_.done?x:U};let P,z;const I=k=>{y(_.value)&&(P=k,z=Qu({keyframes:[_.value,E(_.value)],velocity:lM(R,k,_.value),damping:o,stiffness:c,restDelta:d,restSpeed:g}))};return I(0),{calculatedDuration:null,next:k=>{let A=!1;return!z&&P===void 0&&(A=!0,L(k),I(k)),P!==void 0&&k>=P?z.next(k-P):(!A&&L(k),_)}}}function r1(i,t,n){const s=[],o=n||za.mix||rM,c=i.length-1;for(let u=0;u<c;u++){let f=o(i[u],i[u+1]);if(t){const p=Array.isArray(t)?t[u]||Ni:t;f=jl(p,f)}s.push(f)}return s}function cM(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(Wm(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const f=r1(t,s,o),p=f.length,d=g=>{if(u&&g<i[0])return t[0];let v=0;if(p>1)for(;v<i.length-2&&!(g<i[v+1]);v++);const _=Hl(i[v],i[v+1],g);return f[v](_)};return n?g=>d(ca(i[0],i[c-1],g)):d}function o1(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Hl(0,t,s);i.push(an(n,1,o))}}function l1(i){const t=[0];return o1(t,i.length-1),t}function c1(i,t){return i.map(n=>n*t)}function u1(i,t){return i.map(()=>t||KS).splice(0,i.length-1)}function Il({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=MA(s)?s.map(gx):gx(s),c={done:!1,value:t[0]},u=c1(n&&n.length===t.length?n:l1(t),i),f=cM(u,t,{ease:Array.isArray(o)?o:u1(t,o)});return{calculatedDuration:i,next:p=>(c.value=f(p),c.done=p>=i,c)}}const f1=i=>i!==null;function eg(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(f1),f=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!f||s===void 0?c[f]:s}const h1={decay:Tp,inertia:Tp,tween:Il,keyframes:Il,spring:Qu};function uM(i){typeof i.type=="string"&&(i.type=h1[i.type])}class ng{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const d1=i=>i/100;class ig extends ng{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==Qn.now()&&this.tick(Qn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;uM(t);const{type:n=Il,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:f}=t;const p=n||Il;p!==Il&&typeof f[0]!="number"&&(this.mixKeyframes=jl(d1,rM(f[0],f[1])),f=[0,100]);const d=p({...t,keyframes:f});c==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...f].reverse(),velocity:-u})),d.calculatedDuration===null&&(d.calculatedDuration=tg(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:g,repeat:v,repeatType:_,repeatDelay:y,type:E,onUpdate:b,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-d*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?x<0:x>o;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let R=this.currentTime,L=s;if(v){const k=Math.min(this.currentTime,o)/f;let A=Math.floor(k),U=k%1;!U&&k>=1&&(U=1),U===1&&A--,A=Math.min(A,v+1),A%2&&(_==="reverse"?(U=1-U,y&&(U-=y/f)):_==="mirror"&&(L=u)),R=ca(0,1,U)*f}const P=D?{done:!1,value:g[0]}:L.next(R);c&&(P.value=c(P.value));let{done:z}=P;!D&&p!==null&&(z=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&z);return I&&E!==Tp&&(P.value=eg(g,this.options,M,this.speed)),b&&b(P.value),I&&this.finish(),P}then(t,n){return this.finished.then(t,n)}get duration(){return Li(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Li(t)}get time(){return Li(this.currentTime)}set time(t){t=Fa(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Qn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Li(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=QA,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Qn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function p1(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const or=i=>i*180/Math.PI,bp=i=>{const t=or(Math.atan2(i[1],i[0]));return Ap(t)},m1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:bp,rotateZ:bp,skewX:i=>or(Math.atan(i[1])),skewY:i=>or(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Ap=i=>(i=i%360,i<0&&(i+=360),i),Ex=bp,Tx=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),bx=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),g1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Tx,scaleY:bx,scale:i=>(Tx(i)+bx(i))/2,rotateX:i=>Ap(or(Math.atan2(i[6],i[5]))),rotateY:i=>Ap(or(Math.atan2(-i[2],i[0]))),rotateZ:Ex,rotate:Ex,skewX:i=>or(Math.atan(i[4])),skewY:i=>or(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Rp(i){return i.includes("scale")?1:0}function Cp(i,t){if(!i||i==="none")return Rp(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=g1,o=n;else{const f=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=m1,o=f}if(!o)return Rp(t);const c=s[t],u=o[1].split(",").map(_1);return typeof c=="function"?c(u):u[c]}const v1=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return Cp(n,t)};function _1(i){return parseFloat(i.trim())}const To=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],bo=new Set(To),Ax=i=>i===Eo||i===Wt,x1=new Set(["x","y","z"]),y1=To.filter(i=>!x1.has(i));function S1(i){const t=[];return y1.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const Es={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>Cp(t,"x"),y:(i,{transform:t})=>Cp(t,"y")};Es.translateX=Es.x;Es.translateY=Es.y;const cr=new Set;let wp=!1,Dp=!1,Up=!1;function fM(){if(Dp){const i=Array.from(cr).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=S1(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{s.getValue(c)?.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Dp=!1,wp=!1,cr.forEach(i=>i.complete(Up)),cr.clear()}function hM(){cr.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Dp=!0)})}function M1(){Up=!0,hM(),fM(),Up=!1}class ag{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(cr.add(this),wp||(wp=!0,Qe.read(hM),Qe.resolveKeyframes(fM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o?.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const f=s.readValue(n,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}p1(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),cr.delete(this)}cancel(){this.state==="scheduled"&&(cr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const E1=i=>i.startsWith("--");function T1(i,t,n){E1(t)?i.style.setProperty(t,n):i.style[t]=n}const b1=qm(()=>window.ScrollTimeline!==void 0),A1={};function R1(i,t){const n=qm(i);return()=>A1[t]??n()}const dM=R1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ll=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,Rx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ll([0,.65,.55,1]),circOut:Ll([.55,0,1,.45]),backIn:Ll([.31,.01,.66,-.59]),backOut:Ll([.33,1.53,.69,.99])};function pM(i,t){if(i)return typeof i=="function"?dM()?oM(i,t):"ease-out":ZS(i)?Ll(i):Array.isArray(i)?i.map(n=>pM(n,t)||Rx.easeOut):Rx[i]}function C1(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:p}={},d=void 0){const g={[t]:n};p&&(g.offset=p);const v=pM(f,o);Array.isArray(v)&&(g.easing=v);const _={delay:s,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return d&&(_.pseudoElement=d),i.animate(g,_)}function mM(i){return typeof i=="function"&&"applyToOptions"in i}function w1({type:i,...t}){return mM(i)&&dM()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class D1 extends ng{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:p}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,Wm(typeof t.type!="string");const d=w1(t);this.animation=C1(n,s,o,d,c),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=eg(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(g):T1(n,s,g),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Li(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Li(t)}get time(){return Li(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Fa(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&b1()?(this.animation.timeline=t,Ni):n(this)}}const gM={anticipate:qS,backInOut:WS,circInOut:jS};function U1(i){return i in gM}function L1(i){typeof i.ease=="string"&&U1(i.ease)&&(i.ease=gM[i.ease])}const Dd=10;class N1 extends D1{constructor(t){L1(t),uM(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const f=new ig({...u,autoplay:!1}),p=Math.max(Dd,Qn.now()-this.startTime),d=ca(0,Dd,p-Dd);n.setWithVelocity(f.sample(Math.max(0,p-d)).value,f.sample(p).value,d),f.stop()}}const Cx=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(As.test(i)||i==="0")&&!i.startsWith("url("));function P1(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function O1(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=Cx(o,t),f=Cx(c,t);return!u||!f?!1:P1(i)||(n==="spring"||mM(n))&&s}function Lp(i){i.duration=0,i.type="keyframes"}const F1=new Set(["opacity","clipPath","filter","transform"]),I1=qm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function B1(i){const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u}=i;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:d}=t.owner.getProps();return I1()&&n&&F1.has(n)&&(n!=="transform"||!d)&&!p&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const z1=40;class V1 extends ng{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:p,motionValue:d,element:g,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Qn.now();const _={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:p,motionValue:d,element:g,...v},y=g?.KeyframeResolver||ag;this.keyframeResolver=new y(f,(E,b,M)=>this.onKeyframesResolved(E,b,_,!M),p,d,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:p,isHandoff:d,onUpdate:g}=s;this.resolvedAt=Qn.now(),O1(t,c,u,f)||((za.instantAnimations||!p)&&g?.(eg(t,s,n)),t[0]=t[t.length-1],Lp(s),s.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>z1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},y=!d&&B1(_),E=_.motionValue?.owner?.current,b=y?new N1({..._,element:E}):new ig(_);b.finished.then(()=>{this.notifyFinished()}).catch(Ni),this.pendingTimeline&&(this.stopTimeline=b.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=b}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),M1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function vM(i,t,n,s=0,o=1){const c=Array.from(i).sort((d,g)=>d.sortNodePosition(g)).indexOf(t),u=i.size,f=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:f-c*s}const H1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function G1(i){const t=H1.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function _M(i,t,n=1){const[s,o]=G1(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return IS(u)?parseFloat(u):u}return Zm(o)?_M(o,t,n+1):o}const k1={type:"spring",stiffness:500,damping:25,restSpeed:10},X1=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),W1={type:"keyframes",duration:.8},q1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Y1=(i,{keyframes:t})=>t.length>2?W1:bo.has(i)?i.startsWith("scale")?X1(t[1]):k1:q1,j1=i=>i!==null;function K1(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(j1),c=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[c]}function sg(i,t){return i?.[t]??i?.default??i}function Z1({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:f,from:p,elapsed:d,...g}){return!!Object.keys(g).length}const rg=(i,t,n,s={},o,c)=>u=>{const f=sg(s,i)||{},p=f.delay||s.delay||0;let{elapsed:d=0}=s;d=d-Fa(p);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-d,onUpdate:_=>{t.set(_),f.onUpdate&&f.onUpdate(_)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:i,motionValue:t,element:c?void 0:o};Z1(f)||Object.assign(g,Y1(i,g)),g.duration&&(g.duration=Fa(g.duration)),g.repeatDelay&&(g.repeatDelay=Fa(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Lp(g),g.delay===0&&(v=!0)),(za.instantAnimations||za.skipAnimations)&&(v=!0,Lp(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,v&&!c&&t.get()!==void 0){const _=K1(g.keyframes,f);if(_!==void 0){Qe.update(()=>{g.onUpdate(_),g.onComplete()});return}}return f.isSync?new ig(g):new V1(g)};function wx(i){const t=[{},{}];return i?.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function og(i,t,n,s){if(typeof t=="function"){const[o,c]=wx(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=wx(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function po(i,t,n){const s=i.getProps();return og(s,t,n!==void 0?n:s.custom,i)}const xM=new Set(["width","height","top","left","right","bottom",...To]),Dx=30,Q1=i=>!isNaN(parseFloat(i)),Bl={current:void 0};class J1{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=Qn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Qn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Q1(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ym);const s=this.events[t].add(n);return t==="change"?()=>{s(),Qe.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Bl.current&&Bl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Qn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Dx)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Dx);return VS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fr(i,t){return new J1(i,t)}const Np=i=>Array.isArray(i);function $1(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,fr(n))}function tR(i){return Np(i)?i[i.length-1]||0:i}function eR(i,t){const n=po(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const f=tR(c[u]);$1(i,u,f)}}const jn=i=>!!(i&&i.getVelocity);function nR(i){return!!(jn(i)&&i.add)}function Pp(i,t){const n=i.getValue("willChange");if(nR(n))return n.add(t);if(!n&&za.WillChange){const s=new za.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function lg(i){return i.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const iR="framerAppearId",yM="data-"+lg(iR);function SM(i){return i.props[yM]}function aR({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function MM(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c=i.getDefaultTransition(),transitionEnd:u,...f}=t;s&&(c=s);const p=[],d=o&&i.animationState&&i.animationState.getState()[o];for(const g in f){const v=i.getValue(g,i.latestValues[g]??null),_=f[g];if(_===void 0||d&&aR(d,g))continue;const y={delay:n,...sg(c||{},g)},E=v.get();if(E!==void 0&&!v.isAnimating&&!Array.isArray(_)&&_===E&&!y.velocity)continue;let b=!1;if(window.MotionHandoffAnimation){const x=SM(i);if(x){const D=window.MotionHandoffAnimation(x,g,Qe);D!==null&&(y.startTime=D,b=!0)}}Pp(i,g),v.start(rg(g,v,_,i.shouldReduceMotion&&xM.has(g)?{type:!1}:y,i,b));const M=v.animation;M&&p.push(M)}return u&&Promise.all(p).then(()=>{Qe.update(()=>{u&&eR(i,u)})}),p}function Op(i,t,n={}){const s=po(i,t,n.type==="exit"?i.presenceContext?.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(MM(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:d=0,staggerChildren:g,staggerDirection:v}=o;return sR(i,t,p,d,g,v,n)}:()=>Promise.resolve(),{when:f}=o;if(f){const[p,d]=f==="beforeChildren"?[c,u]:[u,c];return p().then(()=>d())}else return Promise.all([c(),u(n.delay)])}function sR(i,t,n=0,s=0,o=0,c=1,u){const f=[];for(const p of i.variantChildren)p.notify("AnimationStart",t),f.push(Op(p,t,{...u,delay:n+(typeof s=="function"?0:s)+vM(i.variantChildren,p,s,o,c)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(f)}function rR(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>Op(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=Op(i,t,n);else{const o=typeof t=="function"?po(i,t,n.custom):t;s=Promise.all(MM(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}const oR={test:i=>i==="auto",parse:i=>i},EM=i=>t=>t.test(i),TM=[Eo,Wt,oa,Ms,OA,PA,oR],Ux=i=>TM.find(EM(i));function lR(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||zS(i):!0}const cR=new Set(["brightness","contrast","saturate","opacity"]);function uR(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(Qm)||[];if(!s)return i;const o=n.replace(s,"");let c=cR.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const fR=/\b([a-z-]*)\(.*?\)/gu,Fp={...As,getAnimatableNone:i=>{const t=i.match(fR);return t?t.map(uR).join(" "):i}},Lx={...Eo,transform:Math.round},hR={rotate:Ms,rotateX:Ms,rotateY:Ms,rotateZ:Ms,scale:gu,scaleX:gu,scaleY:gu,scaleZ:gu,skew:Ms,skewX:Ms,skewY:Ms,distance:Wt,translateX:Wt,translateY:Wt,translateZ:Wt,x:Wt,y:Wt,z:Wt,perspective:Wt,transformPerspective:Wt,opacity:Gl,originX:_x,originY:_x,originZ:Wt},cg={borderWidth:Wt,borderTopWidth:Wt,borderRightWidth:Wt,borderBottomWidth:Wt,borderLeftWidth:Wt,borderRadius:Wt,borderTopLeftRadius:Wt,borderTopRightRadius:Wt,borderBottomRightRadius:Wt,borderBottomLeftRadius:Wt,width:Wt,maxWidth:Wt,height:Wt,maxHeight:Wt,top:Wt,right:Wt,bottom:Wt,left:Wt,inset:Wt,insetBlock:Wt,insetBlockStart:Wt,insetBlockEnd:Wt,insetInline:Wt,insetInlineStart:Wt,insetInlineEnd:Wt,padding:Wt,paddingTop:Wt,paddingRight:Wt,paddingBottom:Wt,paddingLeft:Wt,paddingBlock:Wt,paddingBlockStart:Wt,paddingBlockEnd:Wt,paddingInline:Wt,paddingInlineStart:Wt,paddingInlineEnd:Wt,margin:Wt,marginTop:Wt,marginRight:Wt,marginBottom:Wt,marginLeft:Wt,marginBlock:Wt,marginBlockStart:Wt,marginBlockEnd:Wt,marginInline:Wt,marginInlineStart:Wt,marginInlineEnd:Wt,fontSize:Wt,backgroundPositionX:Wt,backgroundPositionY:Wt,...hR,zIndex:Lx,fillOpacity:Gl,strokeOpacity:Gl,numOctaves:Lx},dR={...cg,color:yn,backgroundColor:yn,outlineColor:yn,fill:yn,stroke:yn,borderColor:yn,borderTopColor:yn,borderRightColor:yn,borderBottomColor:yn,borderLeftColor:yn,filter:Fp,WebkitFilter:Fp},bM=i=>dR[i];function AM(i,t){let n=bM(i);return n!==Fp&&(n=As),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const pR=new Set(["auto","none","0"]);function mR(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!pR.has(c)&&kl(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=AM(n,o)}class gR extends ag{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let v=t[g];if(typeof v=="string"&&(v=v.trim(),Zm(v))){const _=_M(v,n.current);_!==void 0&&(t[g]=_),g===t.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!xM.has(s)||t.length!==2)return;const[o,c]=t,u=Ux(o),f=Ux(c),p=vx(o),d=vx(c);if(p!==d&&Es[s]){this.needsMeasurement=!0;return}if(u!==f)if(Ax(u)&&Ax(f))for(let g=0;g<t.length;g++){const v=t[g];typeof v=="string"&&(t[g]=parseFloat(v))}else Es[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||lR(t[o]))&&s.push(o);s.length&&mR(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Es[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=Es[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,p])=>{t.getValue(f).set(p)}),this.resolveNoneKeyframes()}}function vR(i,t,n){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const o=n?.[i]??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i).filter(s=>s!=null)}const RM=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function _R(i){return BS(i)&&"offsetHeight"in i}const{schedule:ug}=QS(queueMicrotask,!1),Wi={x:!1,y:!1};function CM(){return Wi.x||Wi.y}function xR(i){return i==="x"||i==="y"?Wi[i]?null:(Wi[i]=!0,()=>{Wi[i]=!1}):Wi.x||Wi.y?null:(Wi.x=Wi.y=!0,()=>{Wi.x=Wi.y=!1})}function wM(i,t){const n=vR(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function Nx(i){return!(i.pointerType==="touch"||CM())}function yR(i,t,n={}){const[s,o,c]=wM(i,n),u=f=>{if(!Nx(f))return;const{target:p}=f,d=t(p,f);if(typeof d!="function"||!p)return;const g=v=>{Nx(v)&&(d(v),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return s.forEach(f=>{f.addEventListener("pointerenter",u,o)}),c}const DM=(i,t)=>t?i===t?!0:DM(i,t.parentElement):!1,fg=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,SR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function UM(i){return SR.has(i.tagName)||i.isContentEditable===!0}const Vu=new WeakSet;function Px(i){return t=>{t.key==="Enter"&&i(t)}}function Ud(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const MR=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=Px(()=>{if(Vu.has(n))return;Ud(n,"down");const o=Px(()=>{Ud(n,"up")}),c=()=>Ud(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function Ox(i){return fg(i)&&!CM()}function ER(i,t,n={}){const[s,o,c]=wM(i,n),u=f=>{const p=f.currentTarget;if(!Ox(f))return;Vu.add(p);const d=t(p,f),g=(y,E)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),Vu.has(p)&&Vu.delete(p),Ox(y)&&typeof d=="function"&&d(y,{success:E})},v=y=>{g(y,p===window||p===document||n.useGlobalTarget||DM(p,y.target))},_=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",_,o)};return s.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),_R(f)&&(f.addEventListener("focus",d=>MR(d,o)),!UM(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function LM(i){return BS(i)&&"ownerSVGElement"in i}function TR(i){return LM(i)&&i.tagName==="svg"}function bR(...i){const t=!Array.isArray(i[0]),n=t?0:-1,s=i[0+n],o=i[1+n],c=i[2+n],u=i[3+n],f=cM(o,c,u);return t?f(s):f}const AR=[...TM,yn,As],RR=i=>AR.find(EM(i)),Fx=()=>({translate:0,scale:1,origin:0,originPoint:0}),uo=()=>({x:Fx(),y:Fx()}),Ix=()=>({min:0,max:0}),Tn=()=>({x:Ix(),y:Ix()}),Ip={current:null},NM={current:!1},CR=typeof window<"u";function wR(){if(NM.current=!0,!!CR)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ip.current=i.matches;i.addEventListener("change",t),t()}else Ip.current=!1}const DR=new WeakMap;function of(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Xl(i){return typeof i=="string"||Array.isArray(i)}const hg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],dg=["initial",...hg];function lf(i){return of(i.animate)||dg.some(t=>Xl(i[t]))}function PM(i){return!!(lf(i)||i.variants)}function UR(i,t,n){for(const s in t){const o=t[s],c=n[s];if(jn(o))i.addValue(s,o);else if(jn(c))i.addValue(s,fr(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,fr(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const Bx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ju={};function OM(i){Ju=i}function LR(){return Ju}class NR{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,blockInitialAnimation:c,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ag,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Qn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Qe.render(this.render,!1,!0))};const{latestValues:p,renderState:d}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!c,this.isControllingVariants=lf(n),this.isVariantNode=PM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const _ in v){const y=v[_];p[_]!==void 0&&jn(y)&&y.set(p[_])}}mount(t){this.current=t,DR.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(NM.current||wR(),this.shouldReduceMotion=Ip.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ua(this.notifyUpdate),ua(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=bo.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Qe.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ju){const n=Ju[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Tn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Bx.length;s++){const o=Bx[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=UR(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=fr(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(IS(s)||zS(s))?s=parseFloat(s):!RR(s)&&As.test(n)&&(s=AM(t,n)),this.setBaseTarget(t,jn(s)?s.get():s)),jn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const c=og(this.props,n,this.presenceContext?.custom);c&&(s=c[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!jn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ym),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){ug.render(this.render)}}class FM extends NR{constructor(){super(...arguments),this.KeyframeResolver=gR}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const s=t.style;return s?s[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;jn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Cs{constructor(t){this.isMounted=!1,this.node=t}update(){}}function IM({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function PR({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function OR(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Ld(i){return i===void 0||i===1}function Bp({scale:i,scaleX:t,scaleY:n}){return!Ld(i)||!Ld(t)||!Ld(n)}function nr(i){return Bp(i)||BM(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function BM(i){return zx(i.x)||zx(i.y)}function zx(i){return i&&i!=="0%"}function $u(i,t,n){const s=i-n,o=t*s;return n+o}function Vx(i,t,n,s,o){return o!==void 0&&(i=$u(i,o,s)),$u(i,n,s)+t}function zp(i,t=0,n=1,s,o){i.min=Vx(i.min,t,n,s,o),i.max=Vx(i.max,t,n,s,o)}function zM(i,{x:t,y:n}){zp(i.x,t.translate,t.scale,t.originPoint),zp(i.y,n.translate,n.scale,n.originPoint)}const Hx=.999999999999,Gx=1.0000000000001;function FR(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let f=0;f<o;f++){c=n[f],u=c.projectionDelta;const{visualElement:p}=c.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&ho(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,zM(i,u)),s&&nr(c.latestValues)&&ho(i,c.latestValues))}t.x<Gx&&t.x>Hx&&(t.x=1),t.y<Gx&&t.y>Hx&&(t.y=1)}function fo(i,t){i.min=i.min+t,i.max=i.max+t}function kx(i,t,n,s,o=.5){const c=an(i.min,i.max,o);zp(i,t,n,c,s)}function ho(i,t){kx(i.x,t.x,t.scaleX,t.scale,t.originX),kx(i.y,t.y,t.scaleY,t.scale,t.originY)}function VM(i,t){return IM(OR(i.getBoundingClientRect(),t))}function IR(i,t,n){const s=VM(i,n),{scroll:o}=t;return o&&(fo(s.x,o.offset.x),fo(s.y,o.offset.y)),s}const BR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},zR=To.length;function VR(i,t,n){let s="",o=!0;for(let c=0;c<zR;c++){const u=To[c],f=i[u];if(f===void 0)continue;let p=!0;if(typeof f=="number")p=f===(u.startsWith("scale")?1:0);else{const d=parseFloat(f);p=u.startsWith("scale")?d===1:d===0}if(!p||n){const d=RM(f,cg[u]);if(!p){o=!1;const g=BR[u]||u;s+=`${g}(${d}) `}n&&(t[u]=d)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function pg(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,f=!1;for(const p in t){const d=t[p];if(bo.has(p)){u=!0;continue}else if($S(p)){o[p]=d;continue}else{const g=RM(d,cg[p]);p.startsWith("origin")?(f=!0,c[p]=g):s[p]=g}}if(t.transform||(u||n?s.transform=VR(t,i.transform,n):s.transform&&(s.transform="none")),f){const{originX:p="50%",originY:d="50%",originZ:g=0}=c;s.transformOrigin=`${p} ${d} ${g}`}}function HM(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o?.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function Xx(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const Ml={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(Wt.test(i))i=parseFloat(i);else return i;const n=Xx(i,t.target.x),s=Xx(i,t.target.y);return`${n}% ${s}%`}},HR={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=As.parse(i);if(o.length>5)return s;const c=As.createTransformer(i),u=typeof o[0]!="number"?1:0,f=n.x.scale*t.x,p=n.y.scale*t.y;o[0+u]/=f,o[1+u]/=p;const d=an(f,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=d),typeof o[3+u]=="number"&&(o[3+u]/=d),c(o)}},Vp={borderRadius:{...Ml,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ml,borderTopRightRadius:Ml,borderBottomLeftRadius:Ml,borderBottomRightRadius:Ml,boxShadow:HR};function GM(i,{layout:t,layoutId:n}){return bo.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!Vp[i]||i==="opacity")}function mg(i,t,n){const s=i.style,o=t?.style,c={};if(!s)return c;for(const u in s)(jn(s[u])||o&&jn(o[u])||GM(u,i)||n?.getValue(u)?.liveStyle!==void 0)&&(c[u]=s[u]);return c}function GR(i){return window.getComputedStyle(i)}class kR extends FM{constructor(){super(...arguments),this.type="html",this.renderInstance=HM}readValueFromInstance(t,n){if(bo.has(n))return this.projection?.isProjecting?Rp(n):v1(t,n);{const s=GR(t),o=($S(n)?s.getPropertyValue(n):s[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return VM(t,n)}build(t,n,s){pg(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return mg(t,n,s)}}const XR={offset:"stroke-dashoffset",array:"stroke-dasharray"},WR={offset:"strokeDashoffset",array:"strokeDasharray"};function qR(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?XR:WR;i[c.offset]=`${-s}`,i[c.array]=`${t} ${n}`}const YR=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function kM(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...f},p,d,g){if(pg(i,f,d),p){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:v,style:_}=i;v.transform&&(_.transform=v.transform,delete v.transform),(_.transform||v.transformOrigin)&&(_.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),_.transform&&(_.transformBox=g?.transformBox??"fill-box",delete v.transformBox);for(const y of YR)v[y]!==void 0&&(_[y]=v[y],delete v[y]);t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),s!==void 0&&(v.scale=s),o!==void 0&&qR(v,o,c,u,!1)}const XM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),WM=i=>typeof i=="string"&&i.toLowerCase()==="svg";function jR(i,t,n,s){HM(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(XM.has(o)?o:lg(o),t.attrs[o])}function qM(i,t,n){const s=mg(i,t,n);for(const o in i)if(jn(i[o])||jn(t[o])){const c=To.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}class KR extends FM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Tn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(bo.has(n)){const s=bM(n);return s&&s.default||0}return n=XM.has(n)?n:lg(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return qM(t,n,s)}build(t,n,s){kM(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){jR(t,n,s,o)}mount(t){this.isSVGTag=WM(t.tagName),super.mount(t)}}const ZR=dg.length;function YM(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?YM(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<ZR;n++){const s=dg[n],o=i.props[s];(Xl(o)||o===!1)&&(t[s]=o)}return t}function jM(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const QR=[...hg].reverse(),JR=hg.length;function $R(i){return t=>Promise.all(t.map(({animation:n,options:s})=>rR(i,n,s)))}function tC(i){let t=$R(i),n=Wx(),s=!0;const o=p=>(d,g)=>{const v=po(i,g,p==="exit"?i.presenceContext?.custom:void 0);if(v){const{transition:_,transitionEnd:y,...E}=v;d={...d,...E,...y}}return d};function c(p){t=p(i)}function u(p){const{props:d}=i,g=YM(i.parent)||{},v=[],_=new Set;let y={},E=1/0;for(let M=0;M<JR;M++){const x=QR[M],D=n[x],R=d[x]!==void 0?d[x]:g[x],L=Xl(R),P=x===p?D.isActive:null;P===!1&&(E=M);let z=R===g[x]&&R!==d[x]&&L;if(z&&s&&i.manuallyAnimateOnMount&&(z=!1),D.protectedKeys={...y},!D.isActive&&P===null||!R&&!D.prevProp||of(R)||typeof R=="boolean")continue;const I=eC(D.prevProp,R);let k=I||x===p&&D.isActive&&!z&&L||M>E&&L,A=!1;const U=Array.isArray(R)?R:[R];let H=U.reduce(o(x),{});P===!1&&(H={});const{prevResolvedValues:at={}}=D,q={...at,...H},it=B=>{k=!0,_.has(B)&&(A=!0,_.delete(B)),D.needsAnimating[B]=!0;const K=i.getValue(B);K&&(K.liveStyle=!1)};for(const B in q){const K=H[B],dt=at[B];if(y.hasOwnProperty(B))continue;let mt=!1;Np(K)&&Np(dt)?mt=!jM(K,dt):mt=K!==dt,mt?K!=null?it(B):_.add(B):K!==void 0&&_.has(B)?it(B):D.protectedKeys[B]=!0}D.prevProp=R,D.prevResolvedValues=H,D.isActive&&(y={...y,...H}),s&&i.blockInitialAnimation&&(k=!1);const Y=z&&I;k&&(!Y||A)&&v.push(...U.map(B=>{const K={type:x};if(typeof B=="string"&&s&&!Y&&i.manuallyAnimateOnMount&&i.parent){const{parent:dt}=i,mt=po(dt,B);if(dt.enteringChildren&&mt){const{delayChildren:O}=mt.transition||{};K.delay=vM(dt.enteringChildren,i,O)}}return{animation:B,options:K}}))}if(_.size){const M={};if(typeof d.initial!="boolean"){const x=po(i,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(M.transition=x.transition)}_.forEach(x=>{const D=i.getBaseTarget(x),R=i.getValue(x);R&&(R.liveStyle=!0),M[x]=D??null}),v.push({animation:M})}let b=!!v.length;return s&&(d.initial===!1||d.initial===d.animate)&&!i.manuallyAnimateOnMount&&(b=!1),s=!1,b?t(v):Promise.resolve()}function f(p,d){if(n[p].isActive===d)return Promise.resolve();i.variantChildren?.forEach(v=>v.animationState?.setActive(p,d)),n[p].isActive=d;const g=u(p);for(const v in n)n[v].protectedKeys={};return g}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>n,reset:()=>{n=Wx()}}}function eC(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!jM(t,i):!1}function Ks(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wx(){return{animate:Ks(!0),whileInView:Ks(),whileHover:Ks(),whileTap:Ks(),whileDrag:Ks(),whileFocus:Ks(),exit:Ks()}}function qx(i,t){i.min=t.min,i.max=t.max}function Hi(i,t){qx(i.x,t.x),qx(i.y,t.y)}function Yx(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}const KM=1e-4,nC=1-KM,iC=1+KM,ZM=.01,aC=0-ZM,sC=0+ZM;function Jn(i){return i.max-i.min}function rC(i,t,n){return Math.abs(i-t)<=n}function jx(i,t,n,s=.5){i.origin=s,i.originPoint=an(t.min,t.max,i.origin),i.scale=Jn(n)/Jn(t),i.translate=an(n.min,n.max,i.origin)-i.originPoint,(i.scale>=nC&&i.scale<=iC||isNaN(i.scale))&&(i.scale=1),(i.translate>=aC&&i.translate<=sC||isNaN(i.translate))&&(i.translate=0)}function zl(i,t,n,s){jx(i.x,t.x,n.x,s?s.originX:void 0),jx(i.y,t.y,n.y,s?s.originY:void 0)}function Kx(i,t,n){i.min=n.min+t.min,i.max=i.min+Jn(t)}function oC(i,t,n){Kx(i.x,t.x,n.x),Kx(i.y,t.y,n.y)}function Zx(i,t,n){i.min=t.min-n.min,i.max=i.min+Jn(t)}function tf(i,t,n){Zx(i.x,t.x,n.x),Zx(i.y,t.y,n.y)}function Qx(i,t,n,s,o){return i-=t,i=$u(i,1/n,s),o!==void 0&&(i=$u(i,1/o,s)),i}function lC(i,t=0,n=1,s=.5,o,c=i,u=i){if(oa.test(t)&&(t=parseFloat(t),t=an(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=an(c.min,c.max,s);i===c&&(f-=t),i.min=Qx(i.min,t,n,f,o),i.max=Qx(i.max,t,n,f,o)}function Jx(i,t,[n,s,o],c,u){lC(i,t[n],t[s],t[o],t.scale,c,u)}const cC=["x","scaleX","originX"],uC=["y","scaleY","originY"];function $x(i,t,n,s){Jx(i.x,t,cC,n?n.x:void 0,s?s.x:void 0),Jx(i.y,t,uC,n?n.y:void 0,s?s.y:void 0)}function ty(i){return i.translate===0&&i.scale===1}function QM(i){return ty(i.x)&&ty(i.y)}function ey(i,t){return i.min===t.min&&i.max===t.max}function fC(i,t){return ey(i.x,t.x)&&ey(i.y,t.y)}function ny(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function JM(i,t){return ny(i.x,t.x)&&ny(i.y,t.y)}function iy(i){return Jn(i.x)/Jn(i.y)}function ay(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}function Di(i){return[i("x"),i("y")]}function hC(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=n?.z||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:g,rotateX:v,rotateY:_,skewX:y,skewY:E}=n;d&&(s=`perspective(${d}px) ${s}`),g&&(s+=`rotate(${g}deg) `),v&&(s+=`rotateX(${v}deg) `),_&&(s+=`rotateY(${_}deg) `),y&&(s+=`skewX(${y}deg) `),E&&(s+=`skewY(${E}deg) `)}const f=i.x.scale*t.x,p=i.y.scale*t.y;return(f!==1||p!==1)&&(s+=`scale(${f}, ${p})`),s||"none"}const $M=["TopLeft","TopRight","BottomLeft","BottomRight"],dC=$M.length,sy=i=>typeof i=="string"?parseFloat(i):i,ry=i=>typeof i=="number"||Wt.test(i);function pC(i,t,n,s,o,c){o?(i.opacity=an(0,n.opacity??1,mC(s)),i.opacityExit=an(t.opacity??1,0,gC(s))):c&&(i.opacity=an(t.opacity??1,n.opacity??1,s));for(let u=0;u<dC;u++){const f=`border${$M[u]}Radius`;let p=oy(t,f),d=oy(n,f);if(p===void 0&&d===void 0)continue;p||(p=0),d||(d=0),p===0||d===0||ry(p)===ry(d)?(i[f]=Math.max(an(sy(p),sy(d),s),0),(oa.test(d)||oa.test(p))&&(i[f]+="%")):i[f]=d}(t.rotate||n.rotate)&&(i.rotate=an(t.rotate||0,n.rotate||0,s))}function oy(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const mC=tE(0,.5,YS),gC=tE(.5,.95,Ni);function tE(i,t,n){return s=>s<i?0:s>t?1:n(Hl(i,t,s))}function vC(i,t,n){const s=jn(i)?i:fr(i);return s.start(rg("",s,t,n)),s.animation}function Wl(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}const _C=(i,t)=>i.depth-t.depth;class xC{constructor(){this.children=[],this.isDirty=!1}add(t){km(this.children,t),this.isDirty=!0}remove(t){Xm(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(_C),this.isDirty=!1,this.children.forEach(t)}}function yC(i,t){const n=Qn.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(ua(s),i(c-t))};return Qe.setup(s,!0),()=>ua(s)}function Hu(i){return jn(i)?i.get():i}class SC{constructor(){this.members=[]}add(t){km(this.members,t),t.scheduleRender()}remove(t){if(Xm(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender();const o=s.options.layoutDependency,c=t.options.layoutDependency;o!==void 0&&c!==void 0&&o===c||(t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0));const{crossfade:f}=t.options;f===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Gu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Nd=["","X","Y","Z"],MC=1e3;let EC=0;function Pd(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function eE(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=SM(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",Qe,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&eE(s)}function nE({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},f=t?.()){this.id=EC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(AC),this.nodes.forEach(DC),this.nodes.forEach(UC),this.nodes.forEach(RC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new xC)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Ym),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=LM(u)&&!TR(u),this.instance=u;const{layoutId:f,layout:p,visualElement:d}=this.options;if(d&&!d.current&&d.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),i){let g,v=0;const _=()=>this.root.updateBlockedByResize=!1;Qe.read(()=>{v=window.innerWidth}),i(u,()=>{const y=window.innerWidth;y!==v&&(v=y,this.root.updateBlockedByResize=!0,g&&g(),g=yC(_,250),Gu.hasAnimatedSinceResize&&(Gu.hasAnimatedSinceResize=!1,this.nodes.forEach(uy)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&d&&(f||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:_,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||d.getDefaultTransition()||FC,{onLayoutAnimationStart:b,onLayoutAnimationComplete:M}=d.getProps(),x=!this.targetLayout||!JM(this.targetLayout,y),D=!v&&_;if(this.options.layoutRoot||this.resumeFrom||D||v&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...sg(E,"layout"),onPlay:b,onComplete:M};(d.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(g,D)}else v||uy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ua(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(LC),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&eE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ly);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(cy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(wC),this.nodes.forEach(TC),this.nodes.forEach(bC)):this.nodes.forEach(cy),this.clearAllSnapshots();const f=Qn.now();Hn.delta=ca(0,1e3/60,f-Hn.timestamp),Hn.timestamp=f,Hn.isProcessing=!0,bd.update.process(Hn),bd.preRender.process(Hn),bd.render.process(Hn),Hn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ug.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(CC),this.sharedNodes.forEach(NC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Jn(this.snapshot.measuredBox.x)&&!Jn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Tn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!QM(this.projectionDelta),p=this.getTransformTemplate(),d=p?p(this.latestValues,""):void 0,g=d!==this.prevTransformTemplateValue;u&&this.instance&&(f||nr(this.latestValues)||g)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),IC(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Tn();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(BC))){const{scroll:d}=this.root;d&&(fo(f.x,d.offset.x),fo(f.y,d.offset.y))}return f}removeElementScroll(u){const f=Tn();if(Hi(f,u),this.scroll?.wasRoot)return f;for(let p=0;p<this.path.length;p++){const d=this.path[p],{scroll:g,options:v}=d;d!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&Hi(f,u),fo(f.x,g.offset.x),fo(f.y,g.offset.y))}return f}applyTransform(u,f=!1){const p=Tn();Hi(p,u);for(let d=0;d<this.path.length;d++){const g=this.path[d];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&ho(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),nr(g.latestValues)&&ho(p,g.latestValues)}return nr(this.latestValues)&&ho(p,this.latestValues),p}removeTransform(u){const f=Tn();Hi(f,u);for(let p=0;p<this.path.length;p++){const d=this.path[p];if(!d.instance||!nr(d.latestValues))continue;Bp(d.latestValues)&&d.updateSnapshot();const g=Tn(),v=d.measurePageBox();Hi(g,v),$x(f,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,g)}return nr(this.latestValues)&&$x(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Hn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!this.layout||!(g||v))return;this.resolvedRelativeTargetAt=Hn.timestamp;const _=this.getClosestProjectingParent();_&&this.linkedParentVersion!==_.layoutVersion&&!_.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(_&&_.layout?this.createRelativeTarget(_,this.layout.layoutBox,_.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Tn(),this.targetWithTransforms=Tn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Hi(this.target,this.layout.layoutBox),zM(this.target,this.targetDelta)):Hi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?this.createRelativeTarget(_,this.target,_.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Bp(this.parent.latestValues)||BM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,p){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Tn(),this.relativeTargetOrigin=Tn(),tf(this.relativeTargetOrigin,f,p),Hi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Hn.timestamp&&(p=!1),p)return;const{layout:d,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||g))return;Hi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;FR(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Tn());const{target:y}=u;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Yx(this.prevProjectionDelta.x,this.projectionDelta.x),Yx(this.prevProjectionDelta.y,this.projectionDelta.y)),zl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!ay(this.projectionDelta.x,this.prevProjectionDelta.x)||!ay(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=uo(),this.projectionDelta=uo(),this.projectionDeltaWithTransform=uo()}setAnimationOrigin(u,f=!1){const p=this.snapshot,d=p?p.latestValues:{},g={...this.latestValues},v=uo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const _=Tn(),y=p?p.source:void 0,E=this.layout?this.layout.source:void 0,b=y!==E,M=this.getStack(),x=!M||M.members.length<=1,D=!!(b&&!x&&this.options.crossfade===!0&&!this.path.some(OC));this.animationProgress=0;let R;this.mixTargetDelta=L=>{const P=L/1e3;fy(v.x,u.x,P),fy(v.y,u.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(tf(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),PC(this.relativeTarget,this.relativeTargetOrigin,_,P),R&&fC(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Tn()),Hi(R,this.relativeTarget)),b&&(this.animationValues=g,pC(g,d,this.latestValues,P,D,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ua(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qe.update(()=>{Gu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fr(0)),this.currentAnimation=vC(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(MC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:d,latestValues:g}=u;if(!(!f||!p||!d)){if(this!==u&&this.layout&&d&&iE(this.options.animationType,this.layout.layoutBox,d.layoutBox)){p=this.target||Tn();const v=Jn(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+v;const _=Jn(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+_}Hi(f,p),ho(f,g),zl(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new SC),this.sharedNodes.get(u).add(f);const d=f.options.initialPromotionConfig;f.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const d=this.getStack();d&&d.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const d={};p.z&&Pd("z",u,d,this.animationValues);for(let g=0;g<Nd.length;g++)Pd(`rotate${Nd[g]}`,u,d,this.animationValues),Pd(`skew${Nd[g]}`,u,d,this.animationValues);u.render();for(const g in d)u.setStaticValue(g,d[g]),this.animationValues&&(this.animationValues[g]=d[g]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Hu(f?.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Hu(f?.pointerEvents)||""),this.hasProjected&&!nr(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=d.animationValues||d.latestValues;this.applyTransformsToTarget();let v=hC(this.projectionDeltaWithTransform,this.treeScale,g);p&&(v=p(g,v)),u.transform=v;const{x:_,y}=this.projectionDelta;u.transformOrigin=`${_.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in Vp){if(g[E]===void 0)continue;const{correct:b,applyTo:M,isCSSVariable:x}=Vp[E],D=v==="none"?g[E]:b(g[E],d);if(M){const R=M.length;for(let L=0;L<R;L++)u[M[L]]=D}else x?this.options.visualElement.renderState.vars[E]=D:u[E]=D}this.options.layoutId&&(u.pointerEvents=d===this?Hu(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(ly),this.root.sharedNodes.clear()}}}function TC(i){i.updateLayout()}function bC(i){const t=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=i.layout,{animationType:o}=i.options,c=t.source!==i.layout.source;o==="size"?Di(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],_=Jn(v);v.min=n[g].min,v.max=v.min+_}):iE(o,t.layoutBox,n)&&Di(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],_=Jn(n[g]);v.max=v.min+_,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[g].max=i.relativeTarget[g].min+_)});const u=uo();zl(u,n,t.layoutBox);const f=uo();c?zl(f,i.applyTransform(s,!0),t.measuredBox):zl(f,n,t.layoutBox);const p=!QM(u);let d=!1;if(!i.resumeFrom){const g=i.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:_}=g;if(v&&_){const y=Tn();tf(y,t.layoutBox,v.layoutBox);const E=Tn();tf(E,n,_.layoutBox),JM(y,E)||(d=!0),g.options.layoutRoot&&(i.relativeTarget=E,i.relativeTargetOrigin=y,i.relativeParent=g)}}}i.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:f,layoutDelta:u,hasLayoutChanged:p,hasRelativeLayoutChanged:d})}else if(i.isLead()){const{onExitComplete:n}=i.options;n&&n()}i.options.transition=void 0}function AC(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function RC(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function CC(i){i.clearSnapshot()}function ly(i){i.clearMeasurements()}function cy(i){i.isLayoutDirty=!1}function wC(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function uy(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function DC(i){i.resolveTargetDelta()}function UC(i){i.calcProjection()}function LC(i){i.resetSkewAndRotation()}function NC(i){i.removeLeadSnapshot()}function fy(i,t,n){i.translate=an(t.translate,0,n),i.scale=an(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function hy(i,t,n,s){i.min=an(t.min,n.min,s),i.max=an(t.max,n.max,s)}function PC(i,t,n,s){hy(i.x,t.x,n.x,s),hy(i.y,t.y,n.y,s)}function OC(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const FC={duration:.45,ease:[.4,0,.1,1]},dy=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),py=dy("applewebkit/")&&!dy("chrome/")?Math.round:Ni;function my(i){i.min=py(i.min),i.max=py(i.max)}function IC(i){my(i.x),my(i.y)}function iE(i,t,n){return i==="position"||i==="preserve-aspect"&&!rC(iy(t),iy(n),.2)}function BC(i){return i!==i.root&&i.scroll?.wasRoot}const zC=nE({attachResizeListener:(i,t)=>Wl(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Od={current:void 0},aE=nE({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Od.current){const i=new zC({});i.mount(window),i.setOptions({layoutScroll:!0}),Od.current=i}return Od.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),cf=Nt.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function VC(i=!0){const t=Nt.useContext(Gm);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=Nt.useId();Nt.useEffect(()=>{if(i)return o(c)},[i]);const u=Nt.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const sE=Nt.createContext({strict:!1}),gy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let vy=!1;function HC(){if(vy)return;const i={};for(const t in gy)i[t]={isEnabled:n=>gy[t].some(s=>!!n[s])};OM(i),vy=!0}function rE(){return HC(),LR()}function GC(i){const t=rE();for(const n in i)t[n]={...t[n],...i[n]};OM(t)}const kC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ef(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||kC.has(i)}let oE=i=>!ef(i);function XC(i){typeof i=="function"&&(oE=t=>t.startsWith("on")?!ef(t):i(t))}try{XC(require("@emotion/is-prop-valid").default)}catch{}function WC(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(oE(o)||n===!0&&ef(o)||!t&&!ef(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const uf=Nt.createContext({});function qC(i,t){if(lf(i)){const{initial:n,animate:s}=i;return{initial:n===!1||Xl(n)?n:void 0,animate:Xl(s)?s:void 0}}return i.inherit!==!1?t:{}}function YC(i){const{initial:t,animate:n}=qC(i,Nt.useContext(uf));return Nt.useMemo(()=>({initial:t,animate:n}),[_y(t),_y(n)])}function _y(i){return Array.isArray(i)?i.join(" "):i}const gg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function lE(i,t,n){for(const s in t)!jn(t[s])&&!GM(s,n)&&(i[s]=t[s])}function jC({transformTemplate:i},t){return Nt.useMemo(()=>{const n=gg();return pg(n,t,i),Object.assign({},n.vars,n.style)},[t])}function KC(i,t){const n=i.style||{},s={};return lE(s,n,i),Object.assign(s,jC(i,t)),s}function ZC(i,t){const n={},s=KC(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const cE=()=>({...gg(),attrs:{}});function QC(i,t,n,s){const o=Nt.useMemo(()=>{const c=cE();return kM(c,t,WM(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};lE(c,i.style,i),o.style={...c,...o.style}}return o}const JC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function vg(i){return typeof i!="string"||i.includes("-")?!1:!!(JC.indexOf(i)>-1||/[A-Z]/u.test(i))}function $C(i,t,n,{latestValues:s},o,c=!1,u){const p=(u??vg(i)?QC:ZC)(t,s,o,i),d=WC(t,typeof i=="string",c),g=i!==Nt.Fragment?{...d,...p,ref:n}:{},{children:v}=t,_=Nt.useMemo(()=>jn(v)?v.get():v,[v]);return Nt.createElement(i,{...g,children:_})}function t3({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:e3(n,s,o,i),renderState:t()}}function e3(i,t,n,s){const o={},c=s(i,{});for(const _ in c)o[_]=Hu(c[_]);let{initial:u,animate:f}=i;const p=lf(i),d=PM(i);t&&d&&!p&&i.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const v=g?f:u;if(v&&typeof v!="boolean"&&!of(v)){const _=Array.isArray(v)?v:[v];for(let y=0;y<_.length;y++){const E=og(i,_[y]);if(E){const{transitionEnd:b,transition:M,...x}=E;for(const D in x){let R=x[D];if(Array.isArray(R)){const L=g?R.length-1:0;R=R[L]}R!==null&&(o[D]=R)}for(const D in b)o[D]=b[D]}}}return o}const uE=i=>(t,n)=>{const s=Nt.useContext(uf),o=Nt.useContext(Gm),c=()=>t3(i,t,s,o);return n?c():Hm(c)},n3=uE({scrapeMotionValuesFromProps:mg,createRenderState:gg}),i3=uE({scrapeMotionValuesFromProps:qM,createRenderState:cE}),a3=Symbol.for("motionComponentSymbol");function s3(i,t,n){const s=Nt.useRef(n);Nt.useInsertionEffect(()=>{s.current=n});const o=Nt.useRef(null);return Nt.useCallback(c=>{c&&i.onMount?.(c),t&&(c?t.mount(c):t.unmount());const u=s.current;if(typeof u=="function")if(c){const f=u(c);typeof f=="function"&&(o.current=f)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c)},[t])}const fE=Nt.createContext({});function Nl(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function r3(i,t,n,s,o,c){const{visualElement:u}=Nt.useContext(uf),f=Nt.useContext(sE),p=Nt.useContext(Gm),d=Nt.useContext(cf).reducedMotion,g=Nt.useRef(null),v=Nt.useRef(!1);s=s||f.renderer,!g.current&&s&&(g.current=s(i,{visualState:t,parent:u,props:n,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:d,isSVG:c}),v.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const _=g.current,y=Nt.useContext(fE);_&&!_.projection&&o&&(_.type==="html"||_.type==="svg")&&o3(g.current,n,o,y);const E=Nt.useRef(!1);Nt.useInsertionEffect(()=>{_&&E.current&&_.update(n,p)});const b=n[yM],M=Nt.useRef(!!b&&!window.MotionHandoffIsComplete?.(b)&&window.MotionHasOptimisedAnimation?.(b));return FS(()=>{v.current=!0,_&&(E.current=!0,window.MotionIsMounted=!0,_.updateFeatures(),_.scheduleRenderMicrotask(),M.current&&_.animationState&&_.animationState.animateChanges())}),Nt.useEffect(()=>{_&&(!M.current&&_.animationState&&_.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(b)}),M.current=!1),_.enteringChildren=void 0)}),_}function o3(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:d,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:hE(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||f&&Nl(f),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:p,layoutRoot:d})}function hE(i){if(i)return i.options.allowProjection!==!1?i.projection:hE(i.parent)}function Fd(i,{forwardMotionProps:t=!1,type:n}={},s,o){s&&GC(s);const c=n?n==="svg":vg(i),u=c?i3:n3;function f(d,g){let v;const _={...Nt.useContext(cf),...d,layoutId:l3(d)},{isStatic:y}=_,E=YC(d),b=u(d,y);if(!y&&OS){c3();const M=u3(_);v=M.MeasureLayout,E.visualElement=r3(i,b,_,o,M.ProjectionNode,c)}return ve.jsxs(uf.Provider,{value:E,children:[v&&E.visualElement?ve.jsx(v,{visualElement:E.visualElement,..._}):null,$C(i,d,s3(b,E.visualElement,g),b,y,t,c)]})}f.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const p=Nt.forwardRef(f);return p[a3]=i,p}function l3({layoutId:i}){const t=Nt.useContext(PS).id;return t&&i!==void 0?t+"-"+i:i}function c3(i,t){Nt.useContext(sE).strict}function u3(i){const t=rE(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n?.isEnabled(i)||s?.isEnabled(i)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function f3(i,t){if(typeof Proxy>"u")return Fd;const n=new Map,s=(c,u)=>Fd(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,Fd(u,void 0,i,t)),n.get(u))})}const h3=(i,t)=>t.isSVG??vg(i)?new KR(t):new kR(t,{allowProjection:i!==Nt.Fragment});class d3 extends Cs{constructor(t){super(t),t.animationState||(t.animationState=tC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();of(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let p3=0;class m3 extends Cs{constructor(){super(...arguments),this.id=p3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const g3={animation:{Feature:d3},exit:{Feature:m3}};function Ql(i){return{point:{x:i.pageX,y:i.pageY}}}const v3=i=>t=>fg(t)&&i(t,Ql(t));function Vl(i,t,n,s){return Wl(i,t,v3(n),s)}const dE=({current:i})=>i?i.ownerDocument.defaultView:null,xy=(i,t)=>Math.abs(i-t);function _3(i,t){const n=xy(i.x,t.x),s=xy(i.y,t.y);return Math.sqrt(n**2+s**2)}const yy=new Set(["auto","scroll"]);class pE{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Bd(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,b=_3(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!b)return;const{point:M}=y,{timestamp:x}=Hn;this.history.push({...M,timestamp:x});const{onStart:D,onMove:R}=this.handlers;E||(D&&D(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,y)},this.handlePointerMove=(y,E)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Id(E,this.transformPagePoint),Qe.update(this.updatePoint,!0)},this.handlePointerUp=(y,E)=>{this.end();const{onEnd:b,onSessionEnd:M,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=Bd(y.type==="pointercancel"?this.lastMoveEventInfo:Id(E,this.transformPagePoint),this.history);this.startEvent&&b&&b(y,D),M&&M(y,D)},!fg(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const p=Ql(t),d=Id(p,this.transformPagePoint),{point:g}=d,{timestamp:v}=Hn;this.history=[{...g,timestamp:v}];const{onSessionStart:_}=n;_&&_(t,Bd(d,this.history)),this.removeListeners=jl(Vl(this.contextWindow,"pointermove",this.handlePointerMove),Vl(this.contextWindow,"pointerup",this.handlePointerUp),Vl(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(yy.has(s.overflowX)||yy.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},c={x:o.x-n.x,y:o.y-n.y};c.x===0&&c.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(t,o),Qe.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ua(this.updatePoint)}}function Id(i,t){return t?{point:t(i.point)}:i}function Sy(i,t){return{x:i.x-t.x,y:i.y-t.y}}function Bd({point:i},t){return{point:i,delta:Sy(i,mE(t)),offset:Sy(i,x3(t)),velocity:y3(t,.1)}}function x3(i){return i[0]}function mE(i){return i[i.length-1]}function y3(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=mE(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>Fa(t)));)n--;if(!s)return{x:0,y:0};const c=Li(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function S3(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?an(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?an(n,i,s.max):Math.min(i,n)),i}function My(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function M3(i,{top:t,left:n,bottom:s,right:o}){return{x:My(i.x,n,o),y:My(i.y,t,s)}}function Ey(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function E3(i,t){return{x:Ey(i.x,t.x),y:Ey(i.y,t.y)}}function T3(i,t){let n=.5;const s=Jn(i),o=Jn(t);return o>s?n=Hl(t.min,t.max-s,i.min):s>o&&(n=Hl(i.min,i.max-o,t.min)),ca(0,1,n)}function b3(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const Hp=.35;function A3(i=Hp){return i===!1?i=0:i===!0&&(i=Hp),{x:Ty(i,"left","right"),y:Ty(i,"top","bottom")}}function Ty(i,t,n){return{min:by(i,t),max:by(i,n)}}function by(i,t){return typeof i=="number"?i:i[t]||0}const R3=new WeakMap;class C3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Tn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{n?(this.stopAnimation(),this.snapToCursor(Ql(v).point)):this.pauseAnimation()},u=(v,_)=>{this.stopAnimation();const{drag:y,dragPropagation:E,onDragStart:b}=this.getProps();if(y&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=xR(y),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=_,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Di(x=>{let D=this.getAxisMotionValue(x).get()||0;if(oa.test(D)){const{projection:R}=this.visualElement;if(R&&R.layout){const L=R.layout.layoutBox[x];L&&(D=Jn(L)*(parseFloat(D)/100))}}this.originPoint[x]=D}),b&&Qe.postRender(()=>b(v,_)),Pp(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},f=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_;const{dragPropagation:y,dragDirectionLock:E,onDirectionLock:b,onDrag:M}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:x}=_;if(E&&this.currentDirection===null){this.currentDirection=w3(x),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",_.point,x),this.updateAxis("y",_.point,x),this.visualElement.render(),M&&M(v,_)},p=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_,this.stop(v,_),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>Di(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new pE(t,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:dE(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Qe.postRender(()=>f(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!vu(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=S3(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;t&&Nl(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=M3(s.layoutBox,t):this.constraints=!1,this.elastic=A3(n),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Di(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=b3(s.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Nl(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=IR(s,o.root,this.visualElement.getTransformPagePoint());let u=E3(o.layout.layoutBox,c);if(n){const f=n(PR(u));this.hasMutatedConstraints=!!f,f&&(u=IM(f))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},d=Di(g=>{if(!vu(g,n,this.currentDirection))return;let v=p&&p[g]||{};u&&(v={min:0,max:0});const _=o?200:1e6,y=o?40:1e7,E={type:"inertia",velocity:s?t[g]:0,bounceStiffness:_,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(g,E)});return Promise.all(d).then(f)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return Pp(this.visualElement,t),s.start(rg(t,s,0,n,this.visualElement,!1))}stopAnimation(){Di(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Di(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){Di(n=>{const{drag:s}=this.getProps();if(!vu(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[n],p=c.get()||0;c.set(t[n]-an(u,f,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!Nl(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Di(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();o[u]=T3({min:p,max:p},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Di(u=>{if(!vu(u,t,null))return;const f=this.getAxisMotionValue(u),{min:p,max:d}=this.constraints[u];f.set(an(p,d,o[u]))})}addListeners(){if(!this.visualElement.current)return;R3.set(this.visualElement,this);const t=this.visualElement.current,n=Vl(t,"pointerdown",p=>{const{drag:d,dragListener:g=!0}=this.getProps(),v=p.target,_=v!==t&&UM(v);d&&g&&!_&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();Nl(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,c=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Qe.read(s);const u=Wl(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:d})=>{this.isDragging&&d&&(Di(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=p[g].translate,v.set(v.get()+p[g].translate))}),this.visualElement.render())}));return()=>{u(),n(),c(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=Hp,dragMomentum:f=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function vu(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function w3(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class D3 extends Cs{constructor(t){super(t),this.removeGroupControls=Ni,this.removeListeners=Ni,this.controls=new C3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ni}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ay=i=>(t,n)=>{i&&Qe.postRender(()=>i(t,n))};class U3 extends Cs{constructor(){super(...arguments),this.removePointerDownListener=Ni}onPointerDown(t){this.session=new pE(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:dE(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:Ay(t),onStart:Ay(n),onMove:s,onEnd:(c,u)=>{delete this.session,o&&Qe.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Vl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let zd=!1;class L3 extends Nt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),zd&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Gu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,t.layoutDependency!==n&&u.setOptions({...u.options,layoutDependency:n}),zd=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||Qe.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ug.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;zd=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function gE(i){const[t,n]=VC(),s=Nt.useContext(PS);return ve.jsx(L3,{...i,layoutGroup:s,switchLayoutGroup:Nt.useContext(fE),isPresent:t,safeToRemove:n})}const N3={pan:{Feature:U3},drag:{Feature:D3,ProjectionNode:aE,MeasureLayout:gE}};function Ry(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&Qe.postRender(()=>c(t,Ql(t)))}class P3 extends Cs{mount(){const{current:t}=this.node;t&&(this.unmount=yR(t,(n,s)=>(Ry(this.node,s,"Start"),o=>Ry(this.node,o,"End"))))}unmount(){}}class O3 extends Cs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=jl(Wl(this.node.current,"focus",()=>this.onFocus()),Wl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Cy(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&Qe.postRender(()=>c(t,Ql(t)))}class F3 extends Cs{mount(){const{current:t}=this.node;t&&(this.unmount=ER(t,(n,s)=>(Cy(this.node,s,"Start"),(o,{success:c})=>Cy(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Gp=new WeakMap,Vd=new WeakMap,I3=i=>{const t=Gp.get(i.target);t&&t(i)},B3=i=>{i.forEach(I3)};function z3({root:i,...t}){const n=i||document;Vd.has(n)||Vd.set(n,{});const s=Vd.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(B3,{root:i,...t})),s[o]}function V3(i,t,n){const s=z3(t);return Gp.set(i,n),s.observe(i),()=>{Gp.delete(i),s.unobserve(i)}}const H3={some:0,all:1};class G3 extends Cs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:H3[o]},f=p=>{const{isIntersecting:d}=p;if(this.isInView===d||(this.isInView=d,c&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),_=d?g:v;_&&_(p)};return V3(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(k3(t,n))&&this.startObserver()}unmount(){}}function k3({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const X3={inView:{Feature:G3},tap:{Feature:F3},focus:{Feature:O3},hover:{Feature:P3}},W3={layout:{ProjectionNode:aE,MeasureLayout:gE}},q3={...g3,...X3,...N3,...W3},Y3=f3(q3,h3);function vE(i){const t=Hm(()=>fr(i)),{isStatic:n}=Nt.useContext(cf);if(n){const[,s]=Nt.useState(i);Nt.useEffect(()=>t.on("change",s),[])}return t}function _E(i,t){const n=vE(t()),s=()=>n.set(t());return s(),FS(()=>{const o=()=>Qe.preRender(s,!1,!0),c=i.map(u=>u.on("change",o));return()=>{c.forEach(u=>u()),ua(s)}}),n}function j3(i){Bl.current=[],i();const t=_E(Bl.current,i);return Bl.current=void 0,t}function K3(i,t,n,s){if(typeof i=="function")return j3(i);const c=typeof t=="function"?t:bR(t,n,s);return Array.isArray(i)?wy(i,c):wy([i],([u])=>c(u))}function wy(i,t){const n=Hm(()=>[]);return _E(i,()=>{n.length=0;const s=i.length;for(let o=0;o<s;o++)n[o]=i[o].get();return t(n)})}function Z3(i){const t=Nt.useRef(0),{isStatic:n}=Nt.useContext(cf);Nt.useEffect(()=>{if(n)return;const s=({timestamp:o,delta:c})=>{t.current||(t.current=o),i(o-t.current,c)};return Qe.update(s,!0),()=>ua(s)},[i])}const Dy=({text:i,disabled:t=!1,speed:n=2,className:s="",color:o="#b5b5b5",shineColor:c="#ffffff",spread:u=120,yoyo:f=!1,pauseOnHover:p=!1,direction:d="left",delay:g=0})=>{const[v,_]=Nt.useState(!1),y=vE(0),E=Nt.useRef(0),b=Nt.useRef(null),M=Nt.useRef(d==="left"?1:-1),x=n*1e3,D=g*1e3;Z3(I=>{if(t||v){b.current=null;return}if(b.current===null){b.current=I;return}const k=I-b.current;if(b.current=I,E.current+=k,f){const A=x+D,U=A*2,H=E.current%U;if(H<x){const at=H/x*100;y.set(M.current===1?at:100-at)}else if(H<A)y.set(M.current===1?100:0);else if(H<A+x){const q=100-(H-A)/x*100;y.set(M.current===1?q:100-q)}else y.set(M.current===1?0:100)}else{const A=x+D,U=E.current%A;if(U<x){const H=U/x*100;y.set(M.current===1?H:100-H)}else y.set(M.current===1?100:0)}}),Nt.useEffect(()=>{M.current=d==="left"?1:-1,E.current=0,y.set(0)},[d]);const R=K3(y,I=>`${150-I*2}% center`),L=Nt.useCallback(()=>{p&&_(!0)},[p]),P=Nt.useCallback(()=>{p&&_(!1)},[p]),z={backgroundImage:`linear-gradient(${u}deg, ${o} 0%, ${o} 35%, ${c} 50%, ${o} 65%, ${o} 100%)`,backgroundSize:"200% auto",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"};return ve.jsx(Y3.span,{className:`shiny-text ${s}`,style:{...z,backgroundPosition:R},onMouseEnter:L,onMouseLeave:P,children:i})},Q3="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",El={INITIAL_DURATION:1200,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20,ENTER_TRANSITION_MS:180},Tl=(i,t=0,n=100)=>Math.min(Math.max(i,t),n),kp=(i,t=3)=>parseFloat(i.toFixed(t)),Uy=(i,t,n,s,o)=>kp(s+(o-s)*(i-t)/(n-t)),J3=({avatarUrl:i="<Placeholder for avatar URL>",iconUrl:t="<Placeholder for icon URL>",grainUrl:n="<Placeholder for grain URL>",innerGradient:s,behindGlowEnabled:o=!0,behindGlowColor:c,behindGlowSize:u,className:f="",enableTilt:p=!0,enableMobileTilt:d=!1,mobileTiltSensitivity:g=5,name:v="Javi A. Torres",title:_="Software Engineer"})=>{const[y,E]=NS.useState(!1),b=Nt.useRef(null),M=Nt.useRef(null),x=Nt.useRef(null),D=Nt.useRef(null),R=Nt.useMemo(()=>{if(!p)return null;let q=null,it=!1,Y=0,N=0,B=0,K=0,dt=0;const mt=.14,O=.6;let et=0;const gt=(J,ct)=>{const St=M.current,Dt=b.current;if(!St||!Dt)return;const Ot=St.clientWidth||1,fe=St.clientHeight||1,ze=Tl(100/Ot*J),oe=Tl(100/fe*ct),le=ze-50,ye=oe-50,Vt={"--pointer-x":`${ze}%`,"--pointer-y":`${oe}%`,"--background-x":`${Uy(ze,0,100,35,65)}%`,"--background-y":`${Uy(oe,0,100,35,65)}%`,"--pointer-from-center":`${Tl(Math.hypot(oe-50,ze-50)/50,0,1)}`,"--pointer-from-top":`${oe/100}`,"--pointer-from-left":`${ze/100}`,"--rotate-x":`${kp(-(le/5))}deg`,"--rotate-y":`${kp(ye/4)}deg`};for(const[se,G]of Object.entries(Vt))Dt.style.setProperty(se,G)},Tt=J=>{if(!it)return;Y===0&&(Y=J);const ct=(J-Y)/1e3;Y=J;const St=J<et?O:mt,Dt=1-Math.exp(-ct/St);N+=(K-N)*Dt,B+=(dt-B)*Dt,gt(N,B),Math.abs(K-N)>.05||Math.abs(dt-B)>.05||document.hasFocus()?q=requestAnimationFrame(Tt):(it=!1,Y=0,q&&(cancelAnimationFrame(q),q=null))},It=()=>{it||(it=!0,Y=0,q=requestAnimationFrame(Tt))};return{setImmediate(J,ct){N=J,B=ct,gt(N,B)},setTarget(J,ct){K=J,dt=ct,It()},toCenter(){const J=M.current;J&&this.setTarget(J.clientWidth/2,J.clientHeight/2)},beginInitial(J){et=performance.now()+J,It()},getCurrent(){return{x:N,y:B,tx:K,ty:dt}},cancel(){q&&cancelAnimationFrame(q),q=null,it=!1,Y=0}}},[p]),L=(q,it)=>{const Y=it.getBoundingClientRect();return{x:q.clientX-Y.left,y:q.clientY-Y.top}},P=Nt.useCallback(q=>{const it=M.current;if(!it||!R)return;const{x:Y,y:N}=L(q,it);R.setTarget(Y,N)},[R]),z=Nt.useCallback(q=>{const it=M.current;if(!it||!R)return;it.classList.add("active"),it.classList.add("entering"),x.current&&window.clearTimeout(x.current),x.current=window.setTimeout(()=>{it.classList.remove("entering")},El.ENTER_TRANSITION_MS);const{x:Y,y:N}=L(q,it);R.setTarget(Y,N)},[R]),I=Nt.useCallback(()=>{const q=M.current;if(!q||!R)return;R.toCenter();const it=()=>{const{x:Y,y:N,tx:B,ty:K}=R.getCurrent();Math.hypot(B-Y,K-N)<.6?(q.classList.remove("active"),D.current=null):D.current=requestAnimationFrame(it)};D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(it)},[R]),k=Nt.useCallback(q=>{const it=M.current;if(!it||!R)return;const{beta:Y,gamma:N}=q;if(Y==null||N==null)return;const B=it.clientWidth/2,K=it.clientHeight/2,dt=Tl(B+N*g,0,it.clientWidth),mt=Tl(K+(Y-El.DEVICE_BETA_OFFSET)*g,0,it.clientHeight);R.setTarget(dt,mt)},[R,g]);Nt.useEffect(()=>{if(!p||!R)return;const q=M.current;if(!q)return;const it=P,Y=z,N=I,B=k;q.addEventListener("pointerenter",Y),q.addEventListener("pointermove",it),q.addEventListener("pointerleave",N);const K=()=>{if(!d||location.protocol!=="https:")return;const O=window.DeviceMotionEvent;O&&typeof O.requestPermission=="function"?O.requestPermission().then(et=>{et==="granted"&&window.addEventListener("deviceorientation",B)}).catch(console.error):window.addEventListener("deviceorientation",B)};q.addEventListener("click",K);const dt=(q.clientWidth||0)-El.INITIAL_X_OFFSET,mt=El.INITIAL_Y_OFFSET;return R.setImmediate(dt,mt),R.toCenter(),R.beginInitial(El.INITIAL_DURATION),()=>{q.removeEventListener("pointerenter",Y),q.removeEventListener("pointermove",it),q.removeEventListener("pointerleave",N),q.removeEventListener("click",K),window.removeEventListener("deviceorientation",B),x.current&&window.clearTimeout(x.current),D.current&&cancelAnimationFrame(D.current),R.cancel(),q.classList.remove("entering")}},[p,d,R,P,z,I,k]);const A=Nt.useMemo(()=>({"--icon":t?`url(${t})`:"none","--grain":n?`url(${n})`:"none","--inner-gradient":s??Q3,"--behind-glow-color":c??"rgba(125, 190, 255, 0.67)","--behind-glow-size":u??"50%"}),[t,n,s,c,u]),U=q=>{q.preventDefault(),E(!0)},H=()=>{window.location.href="tel:+918848953850",E(!1)},at=()=>{window.open("https://wa.me/918848953850","_blank"),E(!1)};return ve.jsxs("div",{ref:b,className:`pc-card-wrapper ${f}`.trim(),style:A,children:[o&&ve.jsx("div",{className:"pc-behind"}),ve.jsx("div",{ref:M,className:"pc-card-shell",children:ve.jsx("section",{className:"pc-card",children:ve.jsxs("div",{className:"pc-inside",children:[ve.jsx("div",{className:"pc-shine"}),ve.jsx("div",{className:"pc-glare"}),ve.jsxs("div",{className:"pc-split-layout",children:[ve.jsxs("div",{className:"pc-col-left",children:[ve.jsx("div",{className:"pc-logo-container",children:ve.jsx("img",{src:i,alt:"AstriOrb Logo",className:"pc-brand-logo"})}),ve.jsx(Dy,{text:"AstriOrb",disabled:!1,speed:3,className:"pc-company-name",color:"#e2e2e2",shineColor:"#ffffff"}),ve.jsx(Dy,{text:"Where Ideas Orbit Into Reality",disabled:!1,speed:3,className:"pc-company-tagline",color:"rgba(255, 255, 255, 0.6)",shineColor:"#ffffff"})]}),ve.jsx("div",{className:"pc-separator"}),ve.jsxs("div",{className:"pc-col-right",children:[ve.jsxs("div",{className:"pc-person-info",children:[ve.jsx("h1",{className:"pc-person-name",children:v}),ve.jsx("p",{className:"pc-person-role",children:_})]}),ve.jsxs("div",{className:"pc-contact-info",children:[ve.jsx("button",{className:"pc-contact-item pc-contact-btn",onClick:U,type:"button",children:"+91 8848953850"}),ve.jsx("a",{href:"mailto:astriorbofficial@gmail.com",className:"pc-contact-item",children:"astriorbofficial@gmail.com"}),ve.jsx("a",{href:"https://astriorb.com",target:"_blank",rel:"noreferrer",className:"pc-contact-item",children:"astriorb.com"})]})]})]})]})})}),y&&ve.jsx("div",{className:"pc-modal-overlay",children:ve.jsxs("div",{className:"pc-modal",children:[ve.jsx("h3",{className:"pc-modal-title",children:"Contact Options"}),ve.jsxs("div",{className:"pc-modal-actions",children:[ve.jsx("button",{className:"pc-modal-btn",onClick:H,children:"Call"}),ve.jsx("button",{className:"pc-modal-btn",onClick:at,children:"WhatsApp"})]}),ve.jsx("button",{className:"pc-modal-close",onClick:()=>E(!1),children:"Cancel"})]})})]})},$3=NS.memo(J3);const ff="182",tw=0,Ly=1,ew=2,ku=1,nw=2,Pl=3,Va=0,wn=1,vi=2,ji=0,mo=1,Ny=2,Py=3,Oy=4,iw=5,ar=100,aw=101,sw=102,rw=103,ow=104,lw=200,cw=201,uw=202,fw=203,Xp=204,Wp=205,hw=206,dw=207,pw=208,mw=209,gw=210,vw=211,_w=212,xw=213,yw=214,qp=0,nf=1,Yp=2,vo=3,jp=4,Kp=5,Zp=6,Qp=7,xE=0,Sw=1,Mw=2,la=0,yE=1,SE=2,ME=3,EE=4,TE=5,bE=6,AE=7,RE=300,hr=301,_o=302,Jp=303,$p=304,hf=306,tm=1e3,Oa=1001,em=1002,Gn=1003,Ew=1004,_u=1005,ln=1006,Hd=1007,lr=1008,Yn=1009,CE=1010,wE=1011,ql=1012,_g=1013,Ki=1014,sa=1015,Ha=1016,xg=1017,yg=1018,xo=1020,DE=35902,UE=35899,LE=1021,NE=1022,Yi=1023,Ga=1026,Ts=1027,PE=1028,Sg=1029,yo=1030,Mg=1031,Eg=1033,Xu=33776,Wu=33777,qu=33778,Yu=33779,nm=35840,im=35841,am=35842,sm=35843,rm=36196,om=37492,lm=37496,cm=37488,um=37489,fm=37490,hm=37491,dm=37808,pm=37809,mm=37810,gm=37811,vm=37812,_m=37813,xm=37814,ym=37815,Sm=37816,Mm=37817,Em=37818,Tm=37819,bm=37820,Am=37821,Rm=36492,Cm=36494,wm=36495,Dm=36283,Um=36284,Lm=36285,Nm=36286,Jl=3200,Tw=0,bw=1,aa="",hn="srgb",Rs="srgb-linear",af="linear",qe="srgb",Kr=7680,Fy=519,Aw=512,Rw=513,Cw=514,Tg=515,ww=516,Dw=517,bg=518,Uw=519,Iy=35044,Pm="300 es",ra=2e3,sf=2001;function OE(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rf(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lw(){const i=rf("canvas");return i.style.display="block",i}const By={};function zy(...i){const t="THREE."+i.shift();console.log(t,...i)}function ue(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Pe(...i){const t="THREE."+i.shift();console.error(t,...i)}function Yl(...i){const t=i.join(" ");t in By||(By[t]=!0,ue(...i))}function Nw(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class ws{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gd=Math.PI/180,Om=180/Math.PI;function $l(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function Ce(i,t,n){return Math.max(t,Math.min(n,i))}function Pw(i,t){return(i%t+t)%t}function kd(i,t,n){return(1-n)*i+n*t}function bl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xe{constructor(t=0,n=0){xe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ce(this.x,t.x,n.x),this.y=Ce(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ce(this.x,t,n),this.y=Ce(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tc{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,f){let p=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3],_=c[u+0],y=c[u+1],E=c[u+2],b=c[u+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(f>=1){t[n+0]=_,t[n+1]=y,t[n+2]=E,t[n+3]=b;return}if(v!==b||p!==_||d!==y||g!==E){let M=p*_+d*y+g*E+v*b;M<0&&(_=-_,y=-y,E=-E,b=-b,M=-M);let x=1-f;if(M<.9995){const D=Math.acos(M),R=Math.sin(D);x=Math.sin(x*D)/R,f=Math.sin(f*D)/R,p=p*x+_*f,d=d*x+y*f,g=g*x+E*f,v=v*x+b*f}else{p=p*x+_*f,d=d*x+y*f,g=g*x+E*f,v=v*x+b*f;const D=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=D,d*=D,g*=D,v*=D}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,o,c,u){const f=s[o],p=s[o+1],d=s[o+2],g=s[o+3],v=c[u],_=c[u+1],y=c[u+2],E=c[u+3];return t[n]=f*E+g*v+p*y-d*_,t[n+1]=p*E+g*_+d*v-f*y,t[n+2]=d*E+g*y+f*_-p*v,t[n+3]=g*E-f*v-p*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(s/2),g=f(o/2),v=f(c/2),_=p(s/2),y=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=_*g*v+d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v-_*y*E;break;case"YXZ":this._x=_*g*v+d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v+_*y*E;break;case"ZXY":this._x=_*g*v-d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v-_*y*E;break;case"ZYX":this._x=_*g*v-d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v+_*y*E;break;case"YZX":this._x=_*g*v+d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v-_*y*E;break;case"XZY":this._x=_*g*v-d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v+_*y*E;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=s+f+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(s>f&&s>v){const y=2*Math.sqrt(1+s-f-v);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(f>v){const y=2*Math.sqrt(1+f-s-v);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-s-f);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,d=n._z,g=n._w;return this._x=s*g+u*f+o*d-c*p,this._y=o*g+u*p+c*f-s*d,this._z=c*g+u*d+s*p-o*f,this._w=u*g-s*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(s=-s,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+s*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,s=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Vy.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Vy.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*s),g=2*(f*n-c*o),v=2*(c*s-u*n);return this.x=n+p*d+u*v-f*g,this.y=s+p*g+f*d-c*v,this.z=o+p*v+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ce(this.x,t.x,n.x),this.y=Ce(this.y,t.y,n.y),this.z=Ce(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ce(this.x,t,n),this.y=Ce(this.y,t,n),this.z=Ce(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-s*p,this.z=s*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Xd.copy(this).projectOnVector(t),this.sub(Xd)}reflect(t){return this.sub(Xd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new lt,Vy=new tc;class me{constructor(t,n,s,o,c,u,f,p,d){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,p,d)}set(t,n,s,o,c,u,f,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[3],p=s[6],d=s[1],g=s[4],v=s[7],_=s[2],y=s[5],E=s[8],b=o[0],M=o[3],x=o[6],D=o[1],R=o[4],L=o[7],P=o[2],z=o[5],I=o[8];return c[0]=u*b+f*D+p*P,c[3]=u*M+f*R+p*z,c[6]=u*x+f*L+p*I,c[1]=d*b+g*D+v*P,c[4]=d*M+g*R+v*z,c[7]=d*x+g*L+v*I,c[2]=_*b+y*D+E*P,c[5]=_*M+y*R+E*z,c[8]=_*x+y*L+E*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*f*d-s*c*g+s*f*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],v=g*u-f*d,_=f*p-g*c,y=d*c-u*p,E=n*v+s*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(o*d-g*s)*b,t[2]=(f*s-o*u)*b,t[3]=_*b,t[4]=(g*n-o*p)*b,t[5]=(o*c-f*n)*b,t[6]=y*b,t[7]=(s*p-d*n)*b,t[8]=(u*n-s*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(s*p,s*d,-s*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Wd.makeScale(t,n)),this}rotate(t){return this.premultiply(Wd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Wd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new me,Hy=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gy=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ow(){const i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qe&&(o.r=Ia(o.r),o.g=Ia(o.g),o.b=Ia(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qe&&(o.r=go(o.r),o.g=go(o.g),o.b=go(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===aa?af:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Yl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Yl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[Rs]:{primaries:t,whitePoint:s,transfer:af,toXYZ:Hy,fromXYZ:Gy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:s,transfer:qe,toXYZ:Hy,fromXYZ:Gy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const De=Ow();function Ia(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zr;class Fw{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Zr===void 0&&(Zr=rf("canvas")),Zr.width=t.width,Zr.height=t.height;const o=Zr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Zr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=rf("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ia(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ia(n[s]/255)*255):n[s]=Ia(n[s]);return{data:n,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iw=0;class Ag{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=$l(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(qd(o[u].image)):c.push(qd(o[u]))}else c=qd(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function qd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fw.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let Bw=0;const Yd=new lt;class Dn extends ws{constructor(t=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,s=Oa,o=Oa,c=ln,u=lr,f=Yi,p=Yn,d=Dn.DEFAULT_ANISOTROPY,g=aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=$l(),this.name="",this.source=new Ag(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ue(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==RE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tm:t.x=t.x-Math.floor(t.x);break;case Oa:t.x=t.x<0?0:1;break;case em:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tm:t.y=t.y-Math.floor(t.y);break;case Oa:t.y=t.y<0?0:1;break;case em:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=RE;Dn.DEFAULT_ANISOTROPY=1;class dn{constructor(t=0,n=0,s=0,o=1){dn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],y=p[5],E=p[9],b=p[2],M=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(E+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(d+1)/2,L=(y+1)/2,P=(x+1)/2,z=(g+_)/4,I=(v+b)/4,k=(E+M)/4;return R>L&&R>P?R<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(R),o=z/s,c=I/s):L>P?L<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),s=z/o,c=k/o):P<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),s=I/c,o=k/c),this.set(s,o,c,n),this}let D=Math.sqrt((M-E)*(M-E)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(v-b)/D,this.z=(_-g)/D,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ce(this.x,t.x,n.x),this.y=Ce(this.y,t.y,n.y),this.z=Ce(this.z,t.z,n.z),this.w=Ce(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ce(this.x,t,n),this.y=Ce(this.y,t,n),this.z=Ce(this.z,t,n),this.w=Ce(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zw extends ws{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new dn(0,0,t,n),this.scissorTest=!1,this.viewport=new dn(0,0,t,n);const o={width:t,height:n,depth:s.depth},c=new Dn(o);this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Ag(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends zw{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class FE extends Dn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vw extends Dn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Gi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Gi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Gi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Gi):Gi.fromBufferAttribute(c,u),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xu.copy(s.boundingBox)),xu.applyMatrix4(t.matrixWorld),this.union(xu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Al),yu.subVectors(this.max,Al),Qr.subVectors(t.a,Al),Jr.subVectors(t.b,Al),$r.subVectors(t.c,Al),gs.subVectors(Jr,Qr),vs.subVectors($r,Jr),Zs.subVectors(Qr,$r);let n=[0,-gs.z,gs.y,0,-vs.z,vs.y,0,-Zs.z,Zs.y,gs.z,0,-gs.x,vs.z,0,-vs.x,Zs.z,0,-Zs.x,-gs.y,gs.x,0,-vs.y,vs.x,0,-Zs.y,Zs.x,0];return!jd(n,Qr,Jr,$r,yu)||(n=[1,0,0,0,1,0,0,0,1],!jd(n,Qr,Jr,$r,yu))?!1:(Su.crossVectors(gs,vs),n=[Su.x,Su.y,Su.z],jd(n,Qr,Jr,$r,yu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Gi=new lt,xu=new ec,Qr=new lt,Jr=new lt,$r=new lt,gs=new lt,vs=new lt,Zs=new lt,Al=new lt,yu=new lt,Su=new lt,Qs=new lt;function jd(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){Qs.fromArray(i,c);const f=o.x*Math.abs(Qs.x)+o.y*Math.abs(Qs.y)+o.z*Math.abs(Qs.z),p=t.dot(Qs),d=n.dot(Qs),g=s.dot(Qs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>f)return!1}return!0}const Hw=new ec,Rl=new lt,Kd=new lt;class Rg{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):Hw.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rl.subVectors(t,this.center);const n=Rl.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Rl,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rl.copy(t.center).add(Kd)),this.expandByPoint(Rl.copy(t.center).sub(Kd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ua=new lt,Zd=new lt,Mu=new lt,_s=new lt,Qd=new lt,Eu=new lt,Jd=new lt;class Gw{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ua)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ua.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ua.copy(this.origin).addScaledVector(this.direction,n),Ua.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){Zd.copy(t).add(n).multiplyScalar(.5),Mu.copy(n).sub(t).normalize(),_s.copy(this.origin).sub(Zd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Mu),f=_s.dot(this.direction),p=-_s.dot(Mu),d=_s.lengthSq(),g=Math.abs(1-u*u);let v,_,y,E;if(g>0)if(v=u*p-f,_=u*f-p,E=c*g,v>=0)if(_>=-E)if(_<=E){const b=1/g;v*=b,_*=b,y=v*(v+u*_+2*f)+_*(u*v+_+2*p)+d}else _=c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;else _=-c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;else _<=-E?(v=Math.max(0,-(-u*c+f)),_=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+d):_<=E?(v=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+d):(v=Math.max(0,-(u*c+f)),_=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+d);else _=u>0?-c:c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Zd).addScaledVector(Mu,_),y}intersectSphere(t,n){Ua.subVectors(t.center,this.origin);const s=Ua.dot(this.direction),o=Ua.dot(Ua)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,f,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),v>=0?(f=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),s>p||f>o)||((f>s||s!==s)&&(s=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Ua)!==null}intersectTriangle(t,n,s,o,c){Qd.subVectors(n,t),Eu.subVectors(s,t),Jd.crossVectors(Qd,Eu);let u=this.direction.dot(Jd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;_s.subVectors(this.origin,t);const p=f*this.direction.dot(Eu.crossVectors(_s,Eu));if(p<0)return null;const d=f*this.direction.dot(Qd.cross(_s));if(d<0||p+d>u)return null;const g=-f*_s.dot(Jd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn{constructor(t,n,s,o,c,u,f,p,d,g,v,_,y,E,b,M){Sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,p,d,g,v,_,y,E,b,M)}set(t,n,s,o,c,u,f,p,d,g,v,_,y,E,b,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=E,x[11]=b,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/to.setFromMatrixColumn(t,0).length(),c=1/to.setFromMatrixColumn(t,1).length(),u=1/to.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,y=u*v,E=f*g,b=f*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=y+E*d,n[5]=_-b*d,n[9]=-f*p,n[2]=b-_*d,n[6]=E+y*d,n[10]=u*p}else if(t.order==="YXZ"){const _=p*g,y=p*v,E=d*g,b=d*v;n[0]=_+b*f,n[4]=E*f-y,n[8]=u*d,n[1]=u*v,n[5]=u*g,n[9]=-f,n[2]=y*f-E,n[6]=b+_*f,n[10]=u*p}else if(t.order==="ZXY"){const _=p*g,y=p*v,E=d*g,b=d*v;n[0]=_-b*f,n[4]=-u*v,n[8]=E+y*f,n[1]=y+E*f,n[5]=u*g,n[9]=b-_*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const _=u*g,y=u*v,E=f*g,b=f*v;n[0]=p*g,n[4]=E*d-y,n[8]=_*d+b,n[1]=p*v,n[5]=b*d+_,n[9]=y*d-E,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const _=u*p,y=u*d,E=f*p,b=f*d;n[0]=p*g,n[4]=b-_*v,n[8]=E*v+y,n[1]=v,n[5]=u*g,n[9]=-f*g,n[2]=-d*g,n[6]=y*v+E,n[10]=_-b*v}else if(t.order==="XZY"){const _=u*p,y=u*d,E=f*p,b=f*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+b,n[5]=u*g,n[9]=y*v-E,n[2]=E*v-y,n[6]=f*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kw,t,Xw)}lookAt(t,n,s){const o=this.elements;return mi.subVectors(t,n),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),xs.crossVectors(s,mi),xs.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),xs.crossVectors(s,mi)),xs.normalize(),Tu.crossVectors(mi,xs),o[0]=xs.x,o[4]=Tu.x,o[8]=mi.x,o[1]=xs.y,o[5]=Tu.y,o[9]=mi.y,o[2]=xs.z,o[6]=Tu.z,o[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[4],p=s[8],d=s[12],g=s[1],v=s[5],_=s[9],y=s[13],E=s[2],b=s[6],M=s[10],x=s[14],D=s[3],R=s[7],L=s[11],P=s[15],z=o[0],I=o[4],k=o[8],A=o[12],U=o[1],H=o[5],at=o[9],q=o[13],it=o[2],Y=o[6],N=o[10],B=o[14],K=o[3],dt=o[7],mt=o[11],O=o[15];return c[0]=u*z+f*U+p*it+d*K,c[4]=u*I+f*H+p*Y+d*dt,c[8]=u*k+f*at+p*N+d*mt,c[12]=u*A+f*q+p*B+d*O,c[1]=g*z+v*U+_*it+y*K,c[5]=g*I+v*H+_*Y+y*dt,c[9]=g*k+v*at+_*N+y*mt,c[13]=g*A+v*q+_*B+y*O,c[2]=E*z+b*U+M*it+x*K,c[6]=E*I+b*H+M*Y+x*dt,c[10]=E*k+b*at+M*N+x*mt,c[14]=E*A+b*q+M*B+x*O,c[3]=D*z+R*U+L*it+P*K,c[7]=D*I+R*H+L*Y+P*dt,c[11]=D*k+R*at+L*N+P*mt,c[15]=D*A+R*q+L*B+P*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],y=t[14],E=t[3],b=t[7],M=t[11],x=t[15],D=p*y-d*_,R=f*y-d*v,L=f*_-p*v,P=u*y-d*g,z=u*_-p*g,I=u*v-f*g;return n*(b*D-M*R+x*L)-s*(E*D-M*P+x*z)+o*(E*R-b*P+x*I)-c*(E*L-b*z+M*I)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],y=t[11],E=t[12],b=t[13],M=t[14],x=t[15],D=v*M*d-b*_*d+b*p*y-f*M*y-v*p*x+f*_*x,R=E*_*d-g*M*d-E*p*y+u*M*y+g*p*x-u*_*x,L=g*b*d-E*v*d+E*f*y-u*b*y-g*f*x+u*v*x,P=E*v*p-g*b*p-E*f*_+u*b*_+g*f*M-u*v*M,z=n*D+s*R+o*L+c*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return t[0]=D*I,t[1]=(b*_*c-v*M*c-b*o*y+s*M*y+v*o*x-s*_*x)*I,t[2]=(f*M*c-b*p*c+b*o*d-s*M*d-f*o*x+s*p*x)*I,t[3]=(v*p*c-f*_*c-v*o*d+s*_*d+f*o*y-s*p*y)*I,t[4]=R*I,t[5]=(g*M*c-E*_*c+E*o*y-n*M*y-g*o*x+n*_*x)*I,t[6]=(E*p*c-u*M*c-E*o*d+n*M*d+u*o*x-n*p*x)*I,t[7]=(u*_*c-g*p*c+g*o*d-n*_*d-u*o*y+n*p*y)*I,t[8]=L*I,t[9]=(E*v*c-g*b*c-E*s*y+n*b*y+g*s*x-n*v*x)*I,t[10]=(u*b*c-E*f*c+E*s*d-n*b*d-u*s*x+n*f*x)*I,t[11]=(g*f*c-u*v*c-g*s*d+n*v*d+u*s*y-n*f*y)*I,t[12]=P*I,t[13]=(g*b*o-E*v*o+E*s*_-n*b*_-g*s*M+n*v*M)*I,t[14]=(E*f*o-u*b*o-E*s*p+n*b*p+u*s*M-n*f*M)*I,t[15]=(u*v*o-g*f*o+g*s*p-n*v*p-u*s*_+n*f*_)*I,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,f=t.y,p=t.z,d=c*u,g=c*f;return this.set(d*u+s,d*f-o*p,d*p+o*f,0,d*f+o*p,g*f+s,g*p-o*u,0,d*p-o*f,g*p+o*u,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,g=u+u,v=f+f,_=c*d,y=c*g,E=c*v,b=u*g,M=u*v,x=f*v,D=p*d,R=p*g,L=p*v,P=s.x,z=s.y,I=s.z;return o[0]=(1-(b+x))*P,o[1]=(y+L)*P,o[2]=(E-R)*P,o[3]=0,o[4]=(y-L)*z,o[5]=(1-(_+x))*z,o[6]=(M+D)*z,o[7]=0,o[8]=(E+R)*I,o[9]=(M-D)*I,o[10]=(1-(_+b))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=to.set(o[0],o[1],o[2]).length();const u=to.set(o[4],o[5],o[6]).length(),f=to.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),ki.copy(this);const d=1/c,g=1/u,v=1/f;return ki.elements[0]*=d,ki.elements[1]*=d,ki.elements[2]*=d,ki.elements[4]*=g,ki.elements[5]*=g,ki.elements[6]*=g,ki.elements[8]*=v,ki.elements[9]*=v,ki.elements[10]*=v,n.setFromRotationMatrix(ki),s.x=c,s.y=u,s.z=f,this}makePerspective(t,n,s,o,c,u,f=ra,p=!1){const d=this.elements,g=2*c/(n-t),v=2*c/(s-o),_=(n+t)/(n-t),y=(s+o)/(s-o);let E,b;if(p)E=c/(u-c),b=u*c/(u-c);else if(f===ra)E=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(f===sf)E=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,o,c,u,f=ra,p=!1){const d=this.elements,g=2/(n-t),v=2/(s-o),_=-(n+t)/(n-t),y=-(s+o)/(s-o);let E,b;if(p)E=1/(u-c),b=u/(u-c);else if(f===ra)E=-2/(u-c),b=-(u+c)/(u-c);else if(f===sf)E=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const to=new lt,ki=new Sn,kw=new lt(0,0,0),Xw=new lt(1,1,1),xs=new lt,Tu=new lt,mi=new lt,ky=new Sn,Xy=new tc;class ka{constructor(t=0,n=0,s=0,o=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ce(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return ky.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ky,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Xy.setFromEuler(this),this.setFromQuaternion(Xy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class IE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ww=0;const Wy=new lt,eo=new tc,La=new Sn,bu=new lt,Cl=new lt,qw=new lt,Yw=new tc,qy=new lt(1,0,0),Yy=new lt(0,1,0),jy=new lt(0,0,1),Ky={type:"added"},jw={type:"removed"},no={type:"childadded",child:null},$d={type:"childremoved",child:null};class _i extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=$l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_i.DEFAULT_UP.clone();const t=new lt,n=new ka,s=new tc,o=new lt(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Sn},normalMatrix:{value:new me}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=_i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new IE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return eo.setFromAxisAngle(t,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,n){return eo.setFromAxisAngle(t,n),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(qy,t)}rotateY(t){return this.rotateOnAxis(Yy,t)}rotateZ(t){return this.rotateOnAxis(jy,t)}translateOnAxis(t,n){return Wy.copy(t).applyQuaternion(this.quaternion),this.position.add(Wy.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(qy,t)}translateY(t){return this.translateOnAxis(Yy,t)}translateZ(t){return this.translateOnAxis(jy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?bu.copy(t):bu.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(Cl,bu,this.up):La.lookAt(bu,Cl,this.up),this.quaternion.setFromRotationMatrix(La),o&&(La.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(La),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ky),no.child=t,this.dispatchEvent(no),no.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(jw),$d.child=t,this.dispatchEvent($d),$d.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ky),no.child=t,this.dispatchEvent(no),no.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,t,qw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,Yw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),y=u(t.animations),E=u(t.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}_i.DEFAULT_UP=new lt(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new lt,Na=new lt,tp=new lt,Pa=new lt,io=new lt,ao=new lt,Zy=new lt,ep=new lt,np=new lt,ip=new lt,ap=new dn,sp=new dn,rp=new dn;class qi{constructor(t=new lt,n=new lt,s=new lt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Xi.subVectors(t,n),o.cross(Xi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Xi.subVectors(o,n),Na.subVectors(s,n),tp.subVectors(t,n);const u=Xi.dot(Xi),f=Xi.dot(Na),p=Xi.dot(tp),d=Na.dot(Na),g=Na.dot(tp),v=u*d-f*f;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(d*p-f*g)*_,E=(u*g-f*p)*_;return c.set(1-y-E,E,y)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(t,n,s,o,c,u,f,p){return this.getBarycoord(t,n,s,o,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Pa.x),p.addScaledVector(u,Pa.y),p.addScaledVector(f,Pa.z),p)}static getInterpolatedAttribute(t,n,s,o,c,u){return ap.setScalar(0),sp.setScalar(0),rp.setScalar(0),ap.fromBufferAttribute(t,n),sp.fromBufferAttribute(t,s),rp.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(ap,c.x),u.addScaledVector(sp,c.y),u.addScaledVector(rp,c.z),u}static isFrontFacing(t,n,s,o){return Xi.subVectors(s,n),Na.subVectors(t,n),Xi.cross(Na).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Xi.cross(Na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return qi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return qi.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,f;io.subVectors(o,s),ao.subVectors(c,s),ep.subVectors(t,s);const p=io.dot(ep),d=ao.dot(ep);if(p<=0&&d<=0)return n.copy(s);np.subVectors(t,o);const g=io.dot(np),v=ao.dot(np);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(s).addScaledVector(io,u);ip.subVectors(t,c);const y=io.dot(ip),E=ao.dot(ip);if(E>=0&&y<=E)return n.copy(c);const b=y*d-p*E;if(b<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(s).addScaledVector(ao,f);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return Zy.subVectors(c,o),f=(v-g)/(v-g+(y-E)),n.copy(o).addScaledVector(Zy,f);const x=1/(M+b+_);return u=b*x,f=_*x,n.copy(s).addScaledVector(io,u).addScaledVector(ao,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const BE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Au={h:0,s:0,l:0};function op(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class He{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=De.workingColorSpace){return this.r=t,this.g=n,this.b=s,De.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=De.workingColorSpace){if(t=Pw(t,1),n=Ce(n,0,1),s=Ce(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=op(u,c,t+1/3),this.g=op(u,c,t),this.b=op(u,c,t-1/3)}return De.colorSpaceToWorking(this,o),this}setStyle(t,n=hn){function s(c){c!==void 0&&parseFloat(c)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ue("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=hn){const s=BE[t.toLowerCase()];return s!==void 0?this.setHex(s,n):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}copyLinearToSRGB(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return De.workingToColorSpace(qn.copy(this),t),Math.round(Ce(qn.r*255,0,255))*65536+Math.round(Ce(qn.g*255,0,255))*256+Math.round(Ce(qn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.workingToColorSpace(qn.copy(this),n);const s=qn.r,o=qn.g,c=qn.b,u=Math.max(s,o,c),f=Math.min(s,o,c);let p,d;const g=(f+u)/2;if(f===u)p=0,d=0;else{const v=u-f;switch(d=g<=.5?v/(u+f):v/(2-u-f),u){case s:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-s)/v+2;break;case c:p=(s-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=De.workingColorSpace){return De.workingToColorSpace(qn.copy(this),n),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=hn){De.workingToColorSpace(qn.copy(this),t);const n=qn.r,s=qn.g,o=qn.b;return t!==hn?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+n,ys.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(ys),t.getHSL(Au);const s=kd(ys.h,Au.h,n),o=kd(ys.s,Au.s,n),c=kd(ys.l,Au.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new He;He.NAMES=BE;let Kw=0;class Ao extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=$l(),this.name="",this.type="Material",this.blending=mo,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xp,this.blendDst=Wp,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){ue(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xp&&(s.blendSrc=this.blendSrc),this.blendDst!==Wp&&(s.blendDst=this.blendDst),this.blendEquation!==ar&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fy&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zE extends Ao{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=xE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new lt,Ru=new xe;let Zw=0;class Pi{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=Iy,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Ru.fromBufferAttribute(this,n),Ru.applyMatrix3(t),this.setXY(n,Ru.x,Ru.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=bl(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=si(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=bl(n,this.array)),n}setX(t,n){return this.normalized&&(n=si(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=bl(n,this.array)),n}setY(t,n){return this.normalized&&(n=si(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=bl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=si(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=bl(n,this.array)),n}setW(t,n){return this.normalized&&(n=si(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=si(n,this.array),s=si(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=si(n,this.array),s=si(s,this.array),o=si(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=si(n,this.array),s=si(s,this.array),o=si(o,this.array),c=si(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Iy&&(t.usage=this.usage),t}}class VE extends Pi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class HE extends Pi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Ba extends Pi{constructor(t,n,s){super(new Float32Array(t),n,s)}}let Qw=0;const wi=new Sn,lp=new _i,so=new lt,gi=new ec,wl=new ec,Cn=new lt;class fa extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=$l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(OE(t)?HE:VE)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new me().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,n,s){return wi.makeTranslation(t,n,s),this.applyMatrix4(wi),this}scale(t,n,s){return wi.makeScale(t,n,s),this.applyMatrix4(wi),this}lookAt(t){return lp.lookAt(t),lp.updateMatrix(),this.applyMatrix4(lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ba(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ec);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rg);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];wl.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(gi.min,wl.min),gi.expandByPoint(Cn),Cn.addVectors(gi.max,wl.max),gi.expandByPoint(Cn)):(gi.expandByPoint(wl.min),gi.expandByPoint(wl.max))}gi.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)Cn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(Cn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Cn.fromBufferAttribute(f,d),p&&(so.fromBufferAttribute(t,d),Cn.add(so)),o=Math.max(o,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let k=0;k<s.count;k++)f[k]=new lt,p[k]=new lt;const d=new lt,g=new lt,v=new lt,_=new xe,y=new xe,E=new xe,b=new lt,M=new lt;function x(k,A,U){d.fromBufferAttribute(s,k),g.fromBufferAttribute(s,A),v.fromBufferAttribute(s,U),_.fromBufferAttribute(c,k),y.fromBufferAttribute(c,A),E.fromBufferAttribute(c,U),g.sub(d),v.sub(d),y.sub(_),E.sub(_);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),f[k].add(b),f[A].add(b),f[U].add(b),p[k].add(M),p[A].add(M),p[U].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let k=0,A=D.length;k<A;++k){const U=D[k],H=U.start,at=U.count;for(let q=H,it=H+at;q<it;q+=3)x(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const R=new lt,L=new lt,P=new lt,z=new lt;function I(k){P.fromBufferAttribute(o,k),z.copy(P);const A=f[k];R.copy(A),R.sub(P.multiplyScalar(P.dot(A))).normalize(),L.crossVectors(z,A);const H=L.dot(p[k])<0?-1:1;u.setXYZW(k,R.x,R.y,R.z,H)}for(let k=0,A=D.length;k<A;++k){const U=D[k],H=U.start,at=U.count;for(let q=H,it=H+at;q<it;q+=3)I(t.getX(q+0)),I(t.getX(q+1)),I(t.getX(q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const o=new lt,c=new lt,u=new lt,f=new lt,p=new lt,d=new lt,g=new lt,v=new lt;if(t)for(let _=0,y=t.count;_<y;_+=3){const E=t.getX(_+0),b=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),d.fromBufferAttribute(s,M),f.add(g),p.add(g),d.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,p){const d=f.array,g=f.itemSize,v=f.normalized,_=new d.constructor(p.length*g);let y=0,E=0;for(let b=0,M=p.length;b<M;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*g;for(let x=0;x<g;x++)_[E++]=d[y++]}return new Pi(_,g,v)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fa,s=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,s);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let g=0,v=d.length;g<v;g++){const _=d[g],y=t(_,s);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const d=s[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];g.push(y.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],v=c[d];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qy=new Sn,Js=new Gw,Cu=new Rg,Jy=new lt,wu=new lt,Du=new lt,Uu=new lt,cp=new lt,Lu=new lt,$y=new lt,Nu=new lt;class Zi extends _i{constructor(t=new fa,n=new zE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){Lu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=f[p],v=c[p];g!==0&&(cp.fromBufferAttribute(v,t),u?Lu.addScaledVector(cp,g):Lu.addScaledVector(cp.sub(n),g))}n.add(Lu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Cu.copy(s.boundingSphere),Cu.applyMatrix4(c),Js.copy(t.ray).recast(t.near),!(Cu.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Cu,Jy)===null||Js.origin.distanceToSquared(Jy)>(t.far-t.near)**2))&&(Qy.copy(c).invert(),Js.copy(t.ray).applyMatrix4(Qy),!(s.boundingBox!==null&&Js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Js)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const M=_[E],x=u[M.materialIndex],D=Math.max(M.start,y.start),R=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let L=D,P=R;L<P;L+=3){const z=f.getX(L),I=f.getX(L+1),k=f.getX(L+2);o=Pu(this,x,t,s,d,g,v,z,I,k),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let M=E,x=b;M<x;M+=3){const D=f.getX(M),R=f.getX(M+1),L=f.getX(M+2);o=Pu(this,u,t,s,d,g,v,D,R,L),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const M=_[E],x=u[M.materialIndex],D=Math.max(M.start,y.start),R=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=D,P=R;L<P;L+=3){const z=L,I=L+1,k=L+2;o=Pu(this,x,t,s,d,g,v,z,I,k),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let M=E,x=b;M<x;M+=3){const D=M,R=M+1,L=M+2;o=Pu(this,u,t,s,d,g,v,D,R,L),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function Jw(i,t,n,s,o,c,u,f){let p;if(t.side===wn?p=s.intersectTriangle(u,c,o,!0,f):p=s.intersectTriangle(o,c,u,t.side===Va,f),p===null)return null;Nu.copy(f),Nu.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(Nu);return d<n.near||d>n.far?null:{distance:d,point:Nu.clone(),object:i}}function Pu(i,t,n,s,o,c,u,f,p,d){i.getVertexPosition(f,wu),i.getVertexPosition(p,Du),i.getVertexPosition(d,Uu);const g=Jw(i,t,n,s,wu,Du,Uu,$y);if(g){const v=new lt;qi.getBarycoord($y,wu,Du,Uu,v),o&&(g.uv=qi.getInterpolatedAttribute(o,f,p,d,v,new xe)),c&&(g.uv1=qi.getInterpolatedAttribute(c,f,p,d,v,new xe)),u&&(g.normal=qi.getInterpolatedAttribute(u,f,p,d,v,new lt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:p,c:d,normal:new lt,materialIndex:0};qi.getNormal(wu,Du,Uu,_.normal),g.face=_,g.barycoord=v}return g}class nc extends fa{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],v=[];let _=0,y=0;E("z","y","x",-1,-1,s,n,t,u,c,0),E("z","y","x",1,-1,s,n,-t,u,c,1),E("x","z","y",1,1,t,s,n,o,u,2),E("x","z","y",1,-1,t,s,-n,o,u,3),E("x","y","z",1,-1,t,n,s,o,c,4),E("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new Ba(d,3)),this.setAttribute("normal",new Ba(g,3)),this.setAttribute("uv",new Ba(v,2));function E(b,M,x,D,R,L,P,z,I,k,A){const U=L/I,H=P/k,at=L/2,q=P/2,it=z/2,Y=I+1,N=k+1;let B=0,K=0;const dt=new lt;for(let mt=0;mt<N;mt++){const O=mt*H-q;for(let et=0;et<Y;et++){const gt=et*U-at;dt[b]=gt*D,dt[M]=O*R,dt[x]=it,d.push(dt.x,dt.y,dt.z),dt[b]=0,dt[M]=0,dt[x]=z>0?1:-1,g.push(dt.x,dt.y,dt.z),v.push(et/I),v.push(1-mt/k),B+=1}}for(let mt=0;mt<k;mt++)for(let O=0;O<I;O++){const et=_+O+Y*mt,gt=_+O+Y*(mt+1),Tt=_+(O+1)+Y*(mt+1),It=_+(O+1)+Y*mt;p.push(et,gt,It),p.push(gt,Tt,It),K+=6}f.addGroup(y,K,A),y+=K,_+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function So(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function Zn(i){const t={};for(let n=0;n<i.length;n++){const s=So(i[n]);for(const o in s)t[o]=s[o]}return t}function $w(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function GE(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const t2={clone:So,merge:Zn};var e2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Ao{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e2,this.fragmentShader=n2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=So(t.uniforms),this.uniformsGroups=$w(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class kE extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new lt,tS=new xe,eS=new xe;class Ui extends kE{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Om*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Om*2*Math.atan(Math.tan(Gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z)}getViewSize(t,n){return this.getViewBounds(t,tS,eS),n.subVectors(eS,tS)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Gd*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*s/d,o*=u.width/p,s*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ro=-90,oo=1;class i2 extends _i{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ui(ro,oo,t,n);o.layers=this.layers,this.add(o);const c=new Ui(ro,oo,t,n);c.layers=this.layers,this.add(c);const u=new Ui(ro,oo,t,n);u.layers=this.layers,this.add(u);const f=new Ui(ro,oo,t,n);f.layers=this.layers,this.add(f);const p=new Ui(ro,oo,t,n);p.layers=this.layers,this.add(p);const d=new Ui(ro,oo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,f,p]=n;for(const d of n)this.remove(d);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===sf)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,c),t.setRenderTarget(s,1,o),t.render(n,u),t.setRenderTarget(s,2,o),t.render(n,f),t.setRenderTarget(s,3,o),t.render(n,p),t.setRenderTarget(s,4,o),t.render(n,d),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,o),t.render(n,g),t.setRenderTarget(v,_,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class XE extends Dn{constructor(t=[],n=hr,s,o,c,u,f,p,d,g){super(t,n,s,o,c,u,f,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class WE extends ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new XE(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new nc(5,5,5),c=new oi({name:"CubemapFromEquirect",uniforms:So(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:wn,blending:ji});c.uniforms.tEquirect.value=n;const u=new Zi(o,c),f=n.minFilter;return n.minFilter===lr&&(n.minFilter=ln),new i2(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}class Ou extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a2={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const b of t.hand.values()){const M=n.getJointPose(b,s),x=this._getHandJoint(d,b);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,E=.005;d.inputState.pinching&&_>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(a2)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Ou;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class Fm extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class s2 extends Dn{constructor(t=null,n=1,s=1,o,c,u,f,p,d=Gn,g=Gn,v,_){super(null,u,f,p,d,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fp=new lt,r2=new lt,o2=new me;class ir{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=fp.subVectors(s,n).cross(r2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(fp),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||o2.getNormalMatrix(t),o=this.coplanarPoint(fp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Rg,l2=new xe(.5,.5),Fu=new lt;class qE{constructor(t=new ir,n=new ir,s=new ir,o=new ir,c=new ir,u=new ir){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(s),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ra,s=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],d=c[3],g=c[4],v=c[5],_=c[6],y=c[7],E=c[8],b=c[9],M=c[10],x=c[11],D=c[12],R=c[13],L=c[14],P=c[15];if(o[0].setComponents(d-u,y-g,x-E,P-D).normalize(),o[1].setComponents(d+u,y+g,x+E,P+D).normalize(),o[2].setComponents(d+f,y+v,x+b,P+R).normalize(),o[3].setComponents(d-f,y-v,x-b,P-R).normalize(),s)o[4].setComponents(p,_,M,L).normalize(),o[5].setComponents(d-p,y-_,x-M,P-L).normalize();else if(o[4].setComponents(d-p,y-_,x-M,P-L).normalize(),n===ra)o[5].setComponents(d+p,y+_,x+M,P+L).normalize();else if(n===sf)o[5].setComponents(p,_,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);const n=l2.distanceTo(t.center);return $s.radius=.7071067811865476+n,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Fu.x=o.normal.x>0?t.max.x:t.min.x,Fu.y=o.normal.y>0?t.max.y:t.min.y,Fu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Fu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mo extends Dn{constructor(t,n,s=Ki,o,c,u,f=Gn,p=Gn,d,g=Ga,v=1){if(g!==Ga&&g!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,f,p,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ag(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class c2 extends Mo{constructor(t,n=Ki,s=hr,o,c,u=Gn,f=Gn,p,d=Ga){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class YE extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ic extends fa{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(s),p=Math.floor(o),d=f+1,g=p+1,v=t/f,_=n/p,y=[],E=[],b=[],M=[];for(let x=0;x<g;x++){const D=x*_-u;for(let R=0;R<d;R++){const L=R*v-c;E.push(L,-D,0),b.push(0,0,1),M.push(R/f),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<f;D++){const R=D+d*x,L=D+d*(x+1),P=D+1+d*(x+1),z=D+1+d*x;y.push(R,L,z),y.push(L,P,z)}this.setIndex(y),this.setAttribute("position",new Ba(E,3)),this.setAttribute("normal",new Ba(b,3)),this.setAttribute("uv",new Ba(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.width,t.height,t.widthSegments,t.heightSegments)}}class u2 extends oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class f2 extends Ao{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class h2 extends Ao{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class df extends kE{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class d2 extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class p2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class fn{constructor(t){this.value=t}clone(){return new fn(this.value.clone===void 0?this.value:this.value.clone())}}function nS(i,t,n,s){const o=m2(s);switch(n){case LE:return i*t;case PE:return i*t/o.components*o.byteLength;case Sg:return i*t/o.components*o.byteLength;case yo:return i*t*2/o.components*o.byteLength;case Mg:return i*t*2/o.components*o.byteLength;case NE:return i*t*3/o.components*o.byteLength;case Yi:return i*t*4/o.components*o.byteLength;case Eg:return i*t*4/o.components*o.byteLength;case Xu:case Wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qu:case Yu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case im:case sm:return Math.max(i,16)*Math.max(t,8)/4;case nm:case am:return Math.max(i,8)*Math.max(t,8)/2;case rm:case om:case cm:case um:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lm:case fm:case hm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pm:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case mm:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gm:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vm:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _m:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xm:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ym:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mm:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Em:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bm:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Am:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rm:case Cm:case wm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dm:case Um:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lm:case Nm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function m2(i){switch(i){case Yn:case CE:return{byteLength:1,components:1};case ql:case wE:case Ha:return{byteLength:2,components:1};case xg:case yg:return{byteLength:2,components:4};case Ki:case _g:case sa:return{byteLength:4,components:1};case DE:case UE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ff}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ff);function jE(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function g2(i){const t=new WeakMap;function n(f,p){const d=f.array,g=f.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,d,g),f.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,p,d){const g=p.array,v=p.updateRanges;if(i.bindBuffer(d,f),v.length===0)i.bufferSubData(d,0,g);else{v.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<v.length;y++){const E=v[_],b=v[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,v[_]=b)}v.length=_+1;for(let y=0,E=v.length;y<E;y++){const b=v[y];i.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(i.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}var v2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,A2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,D2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y2="gl_FragColor = linearToOutputTexel( gl_FragColor );",j2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_D=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ED=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ND=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ID=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$D=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iU=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sU=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cU=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uU=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fU=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_U=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:v2,alphahash_pars_fragment:_2,alphamap_fragment:x2,alphamap_pars_fragment:y2,alphatest_fragment:S2,alphatest_pars_fragment:M2,aomap_fragment:E2,aomap_pars_fragment:T2,batching_pars_vertex:b2,batching_vertex:A2,begin_vertex:R2,beginnormal_vertex:C2,bsdfs:w2,iridescence_fragment:D2,bumpmap_pars_fragment:U2,clipping_planes_fragment:L2,clipping_planes_pars_fragment:N2,clipping_planes_pars_vertex:P2,clipping_planes_vertex:O2,color_fragment:F2,color_pars_fragment:I2,color_pars_vertex:B2,color_vertex:z2,common:V2,cube_uv_reflection_fragment:H2,defaultnormal_vertex:G2,displacementmap_pars_vertex:k2,displacementmap_vertex:X2,emissivemap_fragment:W2,emissivemap_pars_fragment:q2,colorspace_fragment:Y2,colorspace_pars_fragment:j2,envmap_fragment:K2,envmap_common_pars_fragment:Z2,envmap_pars_fragment:Q2,envmap_pars_vertex:J2,envmap_physical_pars_fragment:cD,envmap_vertex:$2,fog_vertex:tD,fog_pars_vertex:eD,fog_fragment:nD,fog_pars_fragment:iD,gradientmap_pars_fragment:aD,lightmap_pars_fragment:sD,lights_lambert_fragment:rD,lights_lambert_pars_fragment:oD,lights_pars_begin:lD,lights_toon_fragment:uD,lights_toon_pars_fragment:fD,lights_phong_fragment:hD,lights_phong_pars_fragment:dD,lights_physical_fragment:pD,lights_physical_pars_fragment:mD,lights_fragment_begin:gD,lights_fragment_maps:vD,lights_fragment_end:_D,logdepthbuf_fragment:xD,logdepthbuf_pars_fragment:yD,logdepthbuf_pars_vertex:SD,logdepthbuf_vertex:MD,map_fragment:ED,map_pars_fragment:TD,map_particle_fragment:bD,map_particle_pars_fragment:AD,metalnessmap_fragment:RD,metalnessmap_pars_fragment:CD,morphinstance_vertex:wD,morphcolor_vertex:DD,morphnormal_vertex:UD,morphtarget_pars_vertex:LD,morphtarget_vertex:ND,normal_fragment_begin:PD,normal_fragment_maps:OD,normal_pars_fragment:FD,normal_pars_vertex:ID,normal_vertex:BD,normalmap_pars_fragment:zD,clearcoat_normal_fragment_begin:VD,clearcoat_normal_fragment_maps:HD,clearcoat_pars_fragment:GD,iridescence_pars_fragment:kD,opaque_fragment:XD,packing:WD,premultiplied_alpha_fragment:qD,project_vertex:YD,dithering_fragment:jD,dithering_pars_fragment:KD,roughnessmap_fragment:ZD,roughnessmap_pars_fragment:QD,shadowmap_pars_fragment:JD,shadowmap_pars_vertex:$D,shadowmap_vertex:tU,shadowmask_pars_fragment:eU,skinbase_vertex:nU,skinning_pars_vertex:iU,skinning_vertex:aU,skinnormal_vertex:sU,specularmap_fragment:rU,specularmap_pars_fragment:oU,tonemapping_fragment:lU,tonemapping_pars_fragment:cU,transmission_fragment:uU,transmission_pars_fragment:fU,uv_pars_fragment:hU,uv_pars_vertex:dU,uv_vertex:pU,worldpos_vertex:mU,background_vert:gU,background_frag:vU,backgroundCube_vert:_U,backgroundCube_frag:xU,cube_vert:yU,cube_frag:SU,depth_vert:MU,depth_frag:EU,distance_vert:TU,distance_frag:bU,equirect_vert:AU,equirect_frag:RU,linedashed_vert:CU,linedashed_frag:wU,meshbasic_vert:DU,meshbasic_frag:UU,meshlambert_vert:LU,meshlambert_frag:NU,meshmatcap_vert:PU,meshmatcap_frag:OU,meshnormal_vert:FU,meshnormal_frag:IU,meshphong_vert:BU,meshphong_frag:zU,meshphysical_vert:VU,meshphysical_frag:HU,meshtoon_vert:GU,meshtoon_frag:kU,points_vert:XU,points_frag:WU,shadow_vert:qU,shadow_frag:YU,sprite_vert:jU,sprite_frag:KU},Ft={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},ia={basic:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new He(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Zn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Zn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new He(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Zn([Ft.points,Ft.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Zn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Zn([Ft.common,Ft.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Zn([Ft.sprite,Ft.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Zn([Ft.common,Ft.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Zn([Ft.lights,Ft.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ia.physical={uniforms:Zn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Iu={r:0,b:0,g:0},tr=new ka,ZU=new Sn;function QU(i,t,n,s,o,c,u){const f=new He(0);let p=c===!0?0:1,d,g,v=null,_=0,y=null;function E(R){let L=R.isScene===!0?R.background:null;return L&&L.isTexture&&(L=(R.backgroundBlurriness>0?n:t).get(L)),L}function b(R){let L=!1;const P=E(R);P===null?x(f,p):P&&P.isColor&&(x(P,1),L=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(i.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(R,L){const P=E(L);P&&(P.isCubeTexture||P.mapping===hf)?(g===void 0&&(g=new Zi(new nc(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:So(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),tr.copy(L.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ZU.makeRotationFromEuler(tr)),g.material.toneMapped=De.getTransfer(P.colorSpace)!==qe,(v!==P||_!==P.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=P,_=P.version,y=i.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Zi(new ic(2,2),new oi({name:"BackgroundMaterial",uniforms:So(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=De.getTransfer(P.colorSpace)!==qe,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,v=P,_=P.version,y=i.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function x(R,L){R.getRGB(Iu,GE(i)),s.buffers.color.setClear(Iu.r,Iu.g,Iu.b,L,u)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,L=1){f.set(R),p=L,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,x(f,p)},render:b,addToRenderList:M,dispose:D}}function JU(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=_(null);let c=o,u=!1;function f(U,H,at,q,it){let Y=!1;const N=v(q,at,H);c!==N&&(c=N,d(c.object)),Y=y(U,q,at,it),Y&&E(U,q,at,it),it!==null&&t.update(it,i.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,L(U,H,at,q),it!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function p(){return i.createVertexArray()}function d(U){return i.bindVertexArray(U)}function g(U){return i.deleteVertexArray(U)}function v(U,H,at){const q=at.wireframe===!0;let it=s[U.id];it===void 0&&(it={},s[U.id]=it);let Y=it[H.id];Y===void 0&&(Y={},it[H.id]=Y);let N=Y[q];return N===void 0&&(N=_(p()),Y[q]=N),N}function _(U){const H=[],at=[],q=[];for(let it=0;it<n;it++)H[it]=0,at[it]=0,q[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:at,attributeDivisors:q,object:U,attributes:{},index:null}}function y(U,H,at,q){const it=c.attributes,Y=H.attributes;let N=0;const B=at.getAttributes();for(const K in B)if(B[K].location>=0){const mt=it[K];let O=Y[K];if(O===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),mt===void 0||mt.attribute!==O||O&&mt.data!==O.data)return!0;N++}return c.attributesNum!==N||c.index!==q}function E(U,H,at,q){const it={},Y=H.attributes;let N=0;const B=at.getAttributes();for(const K in B)if(B[K].location>=0){let mt=Y[K];mt===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(mt=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(mt=U.instanceColor));const O={};O.attribute=mt,mt&&mt.data&&(O.data=mt.data),it[K]=O,N++}c.attributes=it,c.attributesNum=N,c.index=q}function b(){const U=c.newAttributes;for(let H=0,at=U.length;H<at;H++)U[H]=0}function M(U){x(U,0)}function x(U,H){const at=c.newAttributes,q=c.enabledAttributes,it=c.attributeDivisors;at[U]=1,q[U]===0&&(i.enableVertexAttribArray(U),q[U]=1),it[U]!==H&&(i.vertexAttribDivisor(U,H),it[U]=H)}function D(){const U=c.newAttributes,H=c.enabledAttributes;for(let at=0,q=H.length;at<q;at++)H[at]!==U[at]&&(i.disableVertexAttribArray(at),H[at]=0)}function R(U,H,at,q,it,Y,N){N===!0?i.vertexAttribIPointer(U,H,at,it,Y):i.vertexAttribPointer(U,H,at,q,it,Y)}function L(U,H,at,q){b();const it=q.attributes,Y=at.getAttributes(),N=H.defaultAttributeValues;for(const B in Y){const K=Y[B];if(K.location>=0){let dt=it[B];if(dt===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(dt=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(dt=U.instanceColor)),dt!==void 0){const mt=dt.normalized,O=dt.itemSize,et=t.get(dt);if(et===void 0)continue;const gt=et.buffer,Tt=et.type,It=et.bytesPerElement,J=Tt===i.INT||Tt===i.UNSIGNED_INT||dt.gpuType===_g;if(dt.isInterleavedBufferAttribute){const ct=dt.data,St=ct.stride,Dt=dt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<K.locationSize;Ot++)x(K.location+Ot,ct.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<K.locationSize;Ot++)M(K.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Ot=0;Ot<K.locationSize;Ot++)R(K.location+Ot,O/K.locationSize,Tt,mt,St*It,(Dt+O/K.locationSize*Ot)*It,J)}else{if(dt.isInstancedBufferAttribute){for(let ct=0;ct<K.locationSize;ct++)x(K.location+ct,dt.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ct=0;ct<K.locationSize;ct++)M(K.location+ct);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let ct=0;ct<K.locationSize;ct++)R(K.location+ct,O/K.locationSize,Tt,mt,O*It,O/K.locationSize*ct*It,J)}}else if(N!==void 0){const mt=N[B];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(K.location,mt);break;case 3:i.vertexAttrib3fv(K.location,mt);break;case 4:i.vertexAttrib4fv(K.location,mt);break;default:i.vertexAttrib1fv(K.location,mt)}}}}D()}function P(){k();for(const U in s){const H=s[U];for(const at in H){const q=H[at];for(const it in q)g(q[it].object),delete q[it];delete H[at]}delete s[U]}}function z(U){if(s[U.id]===void 0)return;const H=s[U.id];for(const at in H){const q=H[at];for(const it in q)g(q[it].object),delete q[it];delete H[at]}delete s[U.id]}function I(U){for(const H in s){const at=s[H];if(at[U.id]===void 0)continue;const q=at[U.id];for(const it in q)g(q[it].object),delete q[it];delete at[U.id]}}function k(){A(),u=!0,c!==o&&(c=o,d(c.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:k,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:M,disableUnusedAttributes:D}}function $U(i,t,n){let s;function o(d){s=d}function c(d,g){i.drawArrays(s,d,g),n.update(g,s,1)}function u(d,g,v){v!==0&&(i.drawArraysInstanced(s,d,g,v),n.update(g,s,v))}function f(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];n.update(y,s,1)}function p(d,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,g,0,_,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*_[b];n.update(E,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function tL(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Yi&&s.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const k=I===Ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Yn&&s.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==sa&&!k)}function p(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(ue("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),z=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:L,maxSamples:P,samples:z}}function eL(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new ir,f=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||s!==0||o;return o=_,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const E=v.clippingPlanes,b=v.clipIntersection,M=v.clipShadows,x=i.get(v);if(!o||E===null||E.length===0||c&&!M)c?g(null):d();else{const D=c?0:s,R=D*4;let L=x.clippingState||null;p.value=L,L=g(E,_,R,y);for(let P=0;P!==R;++P)L[P]=n[P];x.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,y,E){const b=v!==null?v.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const x=y+b*4,D=_.matrixWorldInverse;f.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let R=0,L=y;R!==b;++R,L+=4)u.copy(v[R]).applyMatrix4(D,f),u.normal.toArray(M,L),M[L+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function nL(i){let t=new WeakMap;function n(u,f){return f===Jp?u.mapping=hr:f===$p&&(u.mapping=_o),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Jp||f===$p)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new WE(p.height);return d.fromEquirectangularTexture(i,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const bs=4,iS=[.125,.215,.35,.446,.526,.582],sr=20,iL=256,Dl=new df,aS=new He;let hp=null,dp=0,pp=0,mp=!1;const aL=new lt;class sS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:f=aL}=c;hp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hp,dp,pp),this._renderer.xr.enabled=mp,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===hr||t.mapping===_o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ha,format:Yi,colorSpace:Rs,depthBuffer:!1},o=rS(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rS(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sL(c)),this._blurMaterial=oL(c,t,n),this._ggxMaterial=rL(c,t,n)}return o}_compileMaterial(t){const n=new Zi(new fa,t);this._renderer.compile(n,Dl)}_sceneToCubeUV(t,n,s,o,c){const p=new Ui(90,1,n,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(aS),v.toneMapping=la,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zi(new nc,new zE({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,M=b.material;let x=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,x=!0):(M.color.copy(aS),x=!0);for(let R=0;R<6;R++){const L=R%3;L===0?(p.up.set(0,d[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[R],c.y,c.z)):L===1?(p.up.set(0,0,d[R]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[R],c.z)):(p.up.set(0,d[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[R]));const P=this._cubeSize;lo(o,L*P,R>2?P:0,P,P),v.setRenderTarget(o),x&&v.render(b,p),v.render(t,p)}v.toneMapping=y,v.autoClear=_,t.background=D}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===hr||t.mapping===_o;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=lS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oS());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;lo(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,Dl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,d=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,y=v*_,{_lodMax:E}=this,b=this._sizeLods[s],M=3*b*(s>E-bs?s-E+bs:0),x=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=E-n,lo(c,M,x,3*b,2*b),o.setRenderTarget(c),o.render(f,Dl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-s,lo(t,M,x,3*b,2*b),o.setRenderTarget(t),o.render(f,Dl)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=d;const _=d.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*sr-1),b=c/E,M=isFinite(c)?1+Math.floor(g*b):sr;M>sr&&ue(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${sr}`);const x=[];let D=0;for(let I=0;I<sr;++I){const k=I/b,A=Math.exp(-k*k/2);x.push(A),I===0?D+=A:I<M&&(D+=2*A)}for(let I=0;I<x.length;I++)x[I]=x[I]/D;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:R}=this;_.dTheta.value=E,_.mipInt.value=R-s;const L=this._sizeLods[o],P=3*L*(o>R-bs?o-R+bs:0),z=4*(this._cubeSize-L);lo(n,P,z,3*L,2*L),p.setRenderTarget(n),p.render(v,Dl)}}function sL(i){const t=[],n=[],s=[];let o=i;const c=i-bs+1+iS.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>i-bs?p=iS[u-i+bs-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,b=3,M=2,x=1,D=new Float32Array(b*E*y),R=new Float32Array(M*E*y),L=new Float32Array(x*E*y);for(let z=0;z<y;z++){const I=z%3*2/3-1,k=z>2?0:-1,A=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];D.set(A,b*E*z),R.set(_,M*E*z);const U=[z,z,z,z,z,z];L.set(U,x*E*z)}const P=new fa;P.setAttribute("position",new Pi(D,b)),P.setAttribute("uv",new Pi(R,M)),P.setAttribute("faceIndex",new Pi(L,x)),s.push(new Zi(P,null)),o>bs&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function rS(i,t,n){const s=new ri(i,t,n);return s.texture.mapping=hf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function lo(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function rL(i,t,n){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iL,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function oL(i,t,n){const s=new Float32Array(sr),o=new lt(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function oS(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function lS(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function pf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lL(i){let t=new WeakMap,n=null;function s(f){if(f&&f.isTexture){const p=f.mapping,d=p===Jp||p===$p,g=p===hr||p===_o;if(d||g){let v=t.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new sS(i)),v=d?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return d&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new sS(i)),v=d?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function o(f){let p=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function cL(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Yl("WebGLRenderer: "+s+" extension not supported."),o}}}function uL(i,t,n,s){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const y in _)t.update(_[y],i.ARRAY_BUFFER)}function d(v){const _=[],y=v.index,E=v.attributes.position;let b=0;if(y!==null){const D=y.array;b=y.version;for(let R=0,L=D.length;R<L;R+=3){const P=D[R+0],z=D[R+1],I=D[R+2];_.push(P,z,z,I,I,P)}}else if(E!==void 0){const D=E.array;b=E.version;for(let R=0,L=D.length/3-1;R<L;R+=3){const P=R+0,z=R+1,I=R+2;_.push(P,z,z,I,I,P)}}else return;const M=new(OE(_)?HE:VE)(_,1);M.version=b;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&d(v)}else d(v);return c.get(v)}return{get:f,update:p,getWireframeAttribute:g}}function fL(i,t,n){let s;function o(_){s=_}let c,u;function f(_){c=_.type,u=_.bytesPerElement}function p(_,y){i.drawElements(s,y,c,_*u),n.update(y,s,1)}function d(_,y,E){E!==0&&(i.drawElementsInstanced(s,y,c,_*u,E),n.update(y,s,E))}function g(_,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];n.update(M,s,1)}function v(_,y,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)d(_[x]/u,y[x],b[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,b,0,E);let x=0;for(let D=0;D<E;D++)x+=y[D]*b[D];n.update(x,s,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function hL(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,f){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=f*(c/3);break;case i.LINES:n.lines+=f*(c/2);break;case i.LINE_STRIP:n.lines+=f*(c-1);break;case i.LINE_LOOP:n.lines+=f*c;break;case i.POINTS:n.points+=f*c;break;default:Pe("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function dL(i,t,n){const s=new WeakMap,o=new dn;function c(u,f,p){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let U=function(){k.dispose(),s.delete(f),f.removeEventListener("dispose",U)};var y=U;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let L=0;E===!0&&(L=1),b===!0&&(L=2),M===!0&&(L=3);let P=f.attributes.position.count*L,z=1;P>t.maxTextureSize&&(z=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const I=new Float32Array(P*z*4*v),k=new FE(I,P,z,v);k.type=sa,k.needsUpdate=!0;const A=L*4;for(let H=0;H<v;H++){const at=x[H],q=D[H],it=R[H],Y=P*z*4*H;for(let N=0;N<at.count;N++){const B=N*A;E===!0&&(o.fromBufferAttribute(at,N),I[Y+B+0]=o.x,I[Y+B+1]=o.y,I[Y+B+2]=o.z,I[Y+B+3]=0),b===!0&&(o.fromBufferAttribute(q,N),I[Y+B+4]=o.x,I[Y+B+5]=o.y,I[Y+B+6]=o.z,I[Y+B+7]=0),M===!0&&(o.fromBufferAttribute(it,N),I[Y+B+8]=o.x,I[Y+B+9]=o.y,I[Y+B+10]=o.z,I[Y+B+11]=it.itemSize===4?o.w:1)}}_={count:v,texture:k,size:new xe(P,z)},s.set(f,_),f.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<d.length;M++)E+=d[M];const b=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function pL(i,t,n,s){let o=new WeakMap;function c(p){const d=s.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function u(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const mL={[yE]:"LINEAR_TONE_MAPPING",[SE]:"REINHARD_TONE_MAPPING",[ME]:"CINEON_TONE_MAPPING",[EE]:"ACES_FILMIC_TONE_MAPPING",[bE]:"AGX_TONE_MAPPING",[AE]:"NEUTRAL_TONE_MAPPING",[TE]:"CUSTOM_TONE_MAPPING"};function gL(i,t,n,s,o){const c=new ri(t,n,{type:i,depthBuffer:s,stencilBuffer:o}),u=new ri(t,n,{type:Ha,depthBuffer:!1,stencilBuffer:!1}),f=new fa;f.setAttribute("position",new Ba([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ba([0,2,0,0,2,0],2));const p=new u2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Zi(f,p),g=new df(-1,1,1,-1,0,1);let v=null,_=null,y=!1,E,b=null,M=[],x=!1;this.setSize=function(D,R){c.setSize(D,R),u.setSize(D,R);for(let L=0;L<M.length;L++){const P=M[L];P.setSize&&P.setSize(D,R)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const R=c.width,L=c.height;for(let P=0;P<M.length;P++){const z=M[P];z.setSize&&z.setSize(R,L)}},this.begin=function(D,R){if(y||D.toneMapping===la&&M.length===0)return!1;if(b=R,R!==null){const L=R.width,P=R.height;(c.width!==L||c.height!==P)&&this.setSize(L,P)}return x===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=la,!0},this.hasRenderPass=function(){return x},this.end=function(D,R){D.toneMapping=E,y=!0;let L=c,P=u;for(let z=0;z<M.length;z++){const I=M[z];if(I.enabled!==!1&&(I.render(D,P,L,R),I.needsSwap!==!1)){const k=L;L=P,P=k}}if(v!==D.outputColorSpace||_!==D.toneMapping){v=D.outputColorSpace,_=D.toneMapping,p.defines={},De.getTransfer(v)===qe&&(p.defines.SRGB_TRANSFER="");const z=mL[_];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(b),D.render(d,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const KE=new Dn,Im=new Mo(1,1),ZE=new FE,QE=new Vw,JE=new XE,cS=[],uS=[],fS=new Float32Array(16),hS=new Float32Array(9),dS=new Float32Array(4);function Ro(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=cS[o];if(c===void 0&&(c=new Float32Array(o),cS[o]=c),t!==0){s.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,i[u].toArray(c,f)}return c}function bn(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function An(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function mf(i,t){let n=uS[t];n===void 0&&(n=new Int32Array(t),uS[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function vL(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function _L(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;i.uniform2fv(this.addr,t),An(n,t)}}function xL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bn(n,t))return;i.uniform3fv(this.addr,t),An(n,t)}}function yL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;i.uniform4fv(this.addr,t),An(n,t)}}function SL(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(bn(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),An(n,t)}else{if(bn(n,s))return;dS.set(s),i.uniformMatrix2fv(this.addr,!1,dS),An(n,s)}}function ML(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(bn(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),An(n,t)}else{if(bn(n,s))return;hS.set(s),i.uniformMatrix3fv(this.addr,!1,hS),An(n,s)}}function EL(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(bn(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),An(n,t)}else{if(bn(n,s))return;fS.set(s),i.uniformMatrix4fv(this.addr,!1,fS),An(n,s)}}function TL(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function bL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;i.uniform2iv(this.addr,t),An(n,t)}}function AL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;i.uniform3iv(this.addr,t),An(n,t)}}function RL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;i.uniform4iv(this.addr,t),An(n,t)}}function CL(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function wL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;i.uniform2uiv(this.addr,t),An(n,t)}}function DL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;i.uniform3uiv(this.addr,t),An(n,t)}}function UL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;i.uniform4uiv(this.addr,t),An(n,t)}}function LL(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Im.compareFunction=n.isReversedDepthBuffer()?bg:Tg,c=Im):c=KE,n.setTexture2D(t||c,o)}function NL(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||QE,o)}function PL(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||JE,o)}function OL(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||ZE,o)}function FL(i){switch(i){case 5126:return vL;case 35664:return _L;case 35665:return xL;case 35666:return yL;case 35674:return SL;case 35675:return ML;case 35676:return EL;case 5124:case 35670:return TL;case 35667:case 35671:return bL;case 35668:case 35672:return AL;case 35669:case 35673:return RL;case 5125:return CL;case 36294:return wL;case 36295:return DL;case 36296:return UL;case 35678:case 36198:case 36298:case 36306:case 35682:return LL;case 35679:case 36299:case 36307:return NL;case 35680:case 36300:case 36308:case 36293:return PL;case 36289:case 36303:case 36311:case 36292:return OL}}function IL(i,t){i.uniform1fv(this.addr,t)}function BL(i,t){const n=Ro(t,this.size,2);i.uniform2fv(this.addr,n)}function zL(i,t){const n=Ro(t,this.size,3);i.uniform3fv(this.addr,n)}function VL(i,t){const n=Ro(t,this.size,4);i.uniform4fv(this.addr,n)}function HL(i,t){const n=Ro(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function GL(i,t){const n=Ro(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function kL(i,t){const n=Ro(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function XL(i,t){i.uniform1iv(this.addr,t)}function WL(i,t){i.uniform2iv(this.addr,t)}function qL(i,t){i.uniform3iv(this.addr,t)}function YL(i,t){i.uniform4iv(this.addr,t)}function jL(i,t){i.uniform1uiv(this.addr,t)}function KL(i,t){i.uniform2uiv(this.addr,t)}function ZL(i,t){i.uniform3uiv(this.addr,t)}function QL(i,t){i.uniform4uiv(this.addr,t)}function JL(i,t,n){const s=this.cache,o=t.length,c=mf(n,o);bn(s,c)||(i.uniform1iv(this.addr,c),An(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=Im:u=KE;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function $L(i,t,n){const s=this.cache,o=t.length,c=mf(n,o);bn(s,c)||(i.uniform1iv(this.addr,c),An(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||QE,c[u])}function tN(i,t,n){const s=this.cache,o=t.length,c=mf(n,o);bn(s,c)||(i.uniform1iv(this.addr,c),An(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||JE,c[u])}function eN(i,t,n){const s=this.cache,o=t.length,c=mf(n,o);bn(s,c)||(i.uniform1iv(this.addr,c),An(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||ZE,c[u])}function nN(i){switch(i){case 5126:return IL;case 35664:return BL;case 35665:return zL;case 35666:return VL;case 35674:return HL;case 35675:return GL;case 35676:return kL;case 5124:case 35670:return XL;case 35667:case 35671:return WL;case 35668:case 35672:return qL;case 35669:case 35673:return YL;case 5125:return jL;case 36294:return KL;case 36295:return ZL;case 36296:return QL;case 35678:case 36198:case 36298:case 36306:case 35682:return JL;case 35679:case 36299:case 36307:return $L;case 35680:case 36300:case 36308:case 36293:return tN;case 36289:case 36303:case 36311:case 36292:return eN}}class iN{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=FL(n.type)}}class aN{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nN(n.type)}}class sN{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],s)}}}const gp=/(\w+)(\])?(\[|\.)?/g;function pS(i,t){i.seq.push(t),i.map[t.id]=t}function rN(i,t,n){const s=i.name,o=s.length;for(gp.lastIndex=0;;){const c=gp.exec(s),u=gp.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){pS(n,d===void 0?new iN(f,i,t):new aN(f,i,t));break}else{let v=n.map[f];v===void 0&&(v=new sN(f),pS(n,v)),n=v}}}class ju{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);rN(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=s[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function mS(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const oN=37297;let lN=0;function cN(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;s.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const gS=new me;function uN(i){De._getMatrix(gS,De.workingColorSpace,i);const t=`mat3( ${gS.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(i)){case af:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vS(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+cN(i.getShaderSource(t),f)}else return c}function fN(i,t){const n=uN(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hN={[yE]:"Linear",[SE]:"Reinhard",[ME]:"Cineon",[EE]:"ACESFilmic",[bE]:"AgX",[AE]:"Neutral",[TE]:"Custom"};function dN(i,t){const n=hN[t];return n===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Bu=new lt;function pN(){De.getLuminanceCoefficients(Bu);const i=Bu.x.toFixed(4),t=Bu.y.toFixed(4),n=Bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mN(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function gN(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function vN(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let f=1;c.type===i.FLOAT_MAT2&&(f=2),c.type===i.FLOAT_MAT3&&(f=3),c.type===i.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:f}}return n}function Ol(i){return i!==""}function _S(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xS(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _N=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bm(i){return i.replace(_N,yN)}const xN=new Map;function yN(i,t){let n=ge[t];if(n===void 0){const s=xN.get(t);if(s!==void 0)n=ge[s],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Bm(n)}const SN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yS(i){return i.replace(SN,MN)}function MN(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function SS(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const EN={[ku]:"SHADOWMAP_TYPE_PCF",[Pl]:"SHADOWMAP_TYPE_VSM"};function TN(i){return EN[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bN={[hr]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE",[hf]:"ENVMAP_TYPE_CUBE_UV"};function AN(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":bN[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const RN={[_o]:"ENVMAP_MODE_REFRACTION"};function CN(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":RN[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wN={[xE]:"ENVMAP_BLENDING_MULTIPLY",[Sw]:"ENVMAP_BLENDING_MIX",[Mw]:"ENVMAP_BLENDING_ADD"};function DN(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wN[i.combine]||"ENVMAP_BLENDING_NONE"}function UN(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function LN(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=TN(n),d=AN(n),g=CN(n),v=DN(n),_=UN(n),y=mN(n),E=gN(c),b=o.createProgram();let M,x,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ol).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ol).join(`
`),x.length>0&&(x+=`
`)):(M=[SS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),x=[SS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==la?"#define TONE_MAPPING":"",n.toneMapping!==la?ge.tonemapping_pars_fragment:"",n.toneMapping!==la?dN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,fN("linearToOutputTexel",n.outputColorSpace),pN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ol).join(`
`)),u=Bm(u),u=_S(u,n),u=xS(u,n),f=Bm(f),f=_S(f,n),f=xS(f,n),u=yS(u),f=yS(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=D+M+u,L=D+x+f,P=mS(o,o.VERTEX_SHADER,R),z=mS(o,o.FRAGMENT_SHADER,L);o.attachShader(b,P),o.attachShader(b,z),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function I(H){if(i.debug.checkShaderErrors){const at=o.getProgramInfoLog(b)||"",q=o.getShaderInfoLog(P)||"",it=o.getShaderInfoLog(z)||"",Y=at.trim(),N=q.trim(),B=it.trim();let K=!0,dt=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,P,z);else{const mt=vS(o,P,"vertex"),O=vS(o,z,"fragment");Pe("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+mt+`
`+O)}else Y!==""?ue("WebGLProgram: Program Info Log:",Y):(N===""||B==="")&&(dt=!1);dt&&(H.diagnostics={runnable:K,programLog:Y,vertexShader:{log:N,prefix:M},fragmentShader:{log:B,prefix:x}})}o.deleteShader(P),o.deleteShader(z),k=new ju(o,b),A=vN(o,b)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(b,oN)),U},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lN++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=z,this}let NN=0;class PN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new ON(t),n.set(t,s)),s}}class ON{constructor(t){this.id=NN++,this.code=t,this.usedTimes=0}}function FN(i,t,n,s,o,c,u){const f=new IE,p=new PN,d=new Set,g=[],v=new Map,_=o.logarithmicDepthBuffer;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return d.add(A),A===0?"uv":`uv${A}`}function M(A,U,H,at,q){const it=at.fog,Y=q.geometry,N=A.isMeshStandardMaterial?at.environment:null,B=(A.isMeshStandardMaterial?n:t).get(A.envMap||N),K=B&&B.mapping===hf?B.image.height:null,dt=E[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&ue("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,O=mt!==void 0?mt.length:0;let et=0;Y.morphAttributes.position!==void 0&&(et=1),Y.morphAttributes.normal!==void 0&&(et=2),Y.morphAttributes.color!==void 0&&(et=3);let gt,Tt,It,J;if(dt){const we=ia[dt];gt=we.vertexShader,Tt=we.fragmentShader}else gt=A.vertexShader,Tt=A.fragmentShader,p.update(A),It=p.getVertexShaderID(A),J=p.getFragmentShaderID(A);const ct=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Dt=q.isInstancedMesh===!0,Ot=q.isBatchedMesh===!0,fe=!!A.map,ze=!!A.matcap,oe=!!B,le=!!A.aoMap,ye=!!A.lightMap,Vt=!!A.bumpMap,se=!!A.normalMap,G=!!A.displacementMap,be=!!A.emissiveMap,_e=!!A.metalnessMap,Ue=!!A.roughnessMap,Kt=A.anisotropy>0,F=A.clearcoat>0,T=A.dispersion>0,j=A.iridescence>0,pt=A.sheen>0,yt=A.transmission>0,ft=Kt&&!!A.anisotropyMap,Qt=F&&!!A.clearcoatMap,Ct=F&&!!A.clearcoatNormalMap,qt=F&&!!A.clearcoatRoughnessMap,ie=j&&!!A.iridescenceMap,Et=j&&!!A.iridescenceThicknessMap,bt=pt&&!!A.sheenColorMap,Ht=pt&&!!A.sheenRoughnessMap,Bt=!!A.specularMap,wt=!!A.specularColorMap,de=!!A.specularIntensityMap,W=yt&&!!A.transmissionMap,Lt=yt&&!!A.thicknessMap,At=!!A.gradientMap,zt=!!A.alphaMap,Mt=A.alphaTest>0,xt=!!A.alphaHash,Rt=!!A.extensions;let ae=la;A.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Ge={shaderID:dt,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:Tt,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:J,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ot,batchingColor:Ot&&q._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&q.instanceColor!==null,instancingMorph:Dt&&q.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Rs,alphaToCoverage:!!A.alphaToCoverage,map:fe,matcap:ze,envMap:oe,envMapMode:oe&&B.mapping,envMapCubeUVHeight:K,aoMap:le,lightMap:ye,bumpMap:Vt,normalMap:se,displacementMap:G,emissiveMap:be,normalMapObjectSpace:se&&A.normalMapType===bw,normalMapTangentSpace:se&&A.normalMapType===Tw,metalnessMap:_e,roughnessMap:Ue,anisotropy:Kt,anisotropyMap:ft,clearcoat:F,clearcoatMap:Qt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:qt,dispersion:T,iridescence:j,iridescenceMap:ie,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:wt,specularIntensityMap:de,transmission:yt,transmissionMap:W,thicknessMap:Lt,gradientMap:At,opaque:A.transparent===!1&&A.blending===mo&&A.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:xt,combine:A.combine,mapUv:fe&&b(A.map.channel),aoMapUv:le&&b(A.aoMap.channel),lightMapUv:ye&&b(A.lightMap.channel),bumpMapUv:Vt&&b(A.bumpMap.channel),normalMapUv:se&&b(A.normalMap.channel),displacementMapUv:G&&b(A.displacementMap.channel),emissiveMapUv:be&&b(A.emissiveMap.channel),metalnessMapUv:_e&&b(A.metalnessMap.channel),roughnessMapUv:Ue&&b(A.roughnessMap.channel),anisotropyMapUv:ft&&b(A.anisotropyMap.channel),clearcoatMapUv:Qt&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(A.sheenRoughnessMap.channel),specularMapUv:Bt&&b(A.specularMap.channel),specularColorMapUv:wt&&b(A.specularColorMap.channel),specularIntensityMapUv:de&&b(A.specularIntensityMap.channel),transmissionMapUv:W&&b(A.transmissionMap.channel),thicknessMapUv:Lt&&b(A.thicknessMap.channel),alphaMapUv:zt&&b(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(se||Kt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(fe||zt),fog:!!it,useFog:A.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:St,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:et,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:fe&&A.map.isVideoTexture===!0&&De.getTransfer(A.map.colorSpace)===qe,decodeVideoTextureEmissive:be&&A.emissiveMap.isVideoTexture===!0&&De.getTransfer(A.emissiveMap.colorSpace)===qe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===vi,flipSided:A.side===wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Rt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&A.extensions.multiDraw===!0||Ot)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ge.vertexUv1s=d.has(1),Ge.vertexUv2s=d.has(2),Ge.vertexUv3s=d.has(3),d.clear(),Ge}function x(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)U.push(H),U.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(D(U,A),R(U,A),U.push(i.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function D(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function R(A,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),A.push(f.mask)}function L(A){const U=E[A.type];let H;if(U){const at=ia[U];H=t2.clone(at.uniforms)}else H=A.uniforms;return H}function P(A,U){let H=v.get(U);return H!==void 0?++H.usedTimes:(H=new LN(i,U,A,c),g.push(H),v.set(U,H)),H}function z(A){if(--A.usedTimes===0){const U=g.indexOf(A);g[U]=g[g.length-1],g.pop(),v.delete(A.cacheKey),A.destroy()}}function I(A){p.remove(A)}function k(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:P,releaseProgram:z,releaseShaderCache:I,programs:g,dispose:k}}function IN(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let f=i.get(u);return f===void 0&&(f={},i.set(u,f)),f}function s(u){i.delete(u)}function o(u,f,p){i.get(u)[f]=p}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function BN(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function MS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ES(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v,_,y,E,b,M){let x=i[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:E,renderOrder:v.renderOrder,z:b,group:M},i[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=b,x.group=M),t++,x}function f(v,_,y,E,b,M){const x=u(v,_,y,E,b,M);y.transmission>0?s.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(v,_,y,E,b,M){const x=u(v,_,y,E,b,M);y.transmission>0?s.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function d(v,_){n.length>1&&n.sort(v||BN),s.length>1&&s.sort(_||MS),o.length>1&&o.sort(_||MS)}function g(){for(let v=t,_=i.length;v<_;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:f,unshift:p,finish:g,sort:d}}function zN(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new ES,i.set(s,[u])):o>=c.length?(u=new ES,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function VN(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new He};break;case"SpotLight":n={position:new lt,direction:new lt,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return i[t.id]=n,n}}}function HN(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let GN=0;function kN(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function XN(i){const t=new VN,n=HN(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new lt);const o=new lt,c=new Sn,u=new Sn;function f(d){let g=0,v=0,_=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,E=0,b=0,M=0,x=0,D=0,R=0,L=0,P=0,z=0,I=0;d.sort(kN);for(let A=0,U=d.length;A<U;A++){const H=d[A],at=H.color,q=H.intensity,it=H.distance;let Y=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===yo?Y=H.shadow.map.texture:Y=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=at.r*q,v+=at.g*q,_+=at.b*q;else if(H.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(H.sh.coefficients[N],q);I++}else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,K=n.get(H);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,s.directionalShadow[y]=K,s.directionalShadowMap[y]=Y,s.directionalShadowMatrix[y]=H.shadow.matrix,D++}s.directional[y]=N,y++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(at).multiplyScalar(q),N.distance=it,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,s.spot[b]=N;const B=H.shadow;if(H.map&&(s.spotLightMap[P]=H.map,P++,B.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[b]=B.matrix,H.castShadow){const K=n.get(H);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,s.spotShadow[b]=K,s.spotShadowMap[b]=Y,L++}b++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(at).multiplyScalar(q),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=N,M++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const B=H.shadow,K=n.get(H);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,s.pointShadow[E]=K,s.pointShadowMap[E]=Y,s.pointShadowMatrix[E]=H.shadow.matrix,R++}s.point[E]=N,E++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(q),N.groundColor.copy(H.groundColor).multiplyScalar(q),s.hemi[x]=N,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==M||k.hemiLength!==x||k.numDirectionalShadows!==D||k.numPointShadows!==R||k.numSpotShadows!==L||k.numSpotMaps!==P||k.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=L+P-z,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=I,k.directionalLength=y,k.pointLength=E,k.spotLength=b,k.rectAreaLength=M,k.hemiLength=x,k.numDirectionalShadows=D,k.numPointShadows=R,k.numSpotShadows=L,k.numSpotMaps=P,k.numLightProbes=I,s.version=GN++)}function p(d,g){let v=0,_=0,y=0,E=0,b=0;const M=g.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const R=d[x];if(R.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(M),v++}else if(R.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(M),y++}else if(R.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(M),u.identity(),c.copy(R.matrixWorld),c.premultiply(M),u.extractRotation(c),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),E++}else if(R.isPointLight){const L=s.point[_];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(M),_++}else if(R.isHemisphereLight){const L=s.hemi[b];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(M),b++}}}return{setup:f,setupView:p,state:s}}function TS(i){const t=new XN(i),n=[],s=[];function o(g){d.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function WN(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new TS(i),t.set(o,[f])):c>=u.length?(f=new TS(i),u.push(f)):f=u[c],f}function s(){t=new WeakMap}return{get:n,dispose:s}}const qN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jN=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],KN=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],bS=new Sn,Ul=new lt,vp=new lt;function ZN(i,t,n){let s=new qE;const o=new xe,c=new xe,u=new dn,f=new f2,p=new h2,d={},g=n.maxTextureSize,v={[Va]:wn,[wn]:Va,[vi]:vi},_=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:qN,fragmentShader:YN}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new fa;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Zi(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let x=this.type;this.render=function(z,I,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===nw&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=ku);const A=i.getRenderTarget(),U=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),at=i.state;at.setBlending(ji),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const q=x!==this.type;q&&I.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(Y=>Y.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,Y=z.length;it<Y;it++){const N=z[it],B=N.shadow;if(B===void 0){ue("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const K=B.getFrameExtents();if(o.multiply(K),c.copy(B.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/K.x),o.x=c.x*K.x,B.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/K.y),o.y=c.y*K.y,B.mapSize.y=c.y)),B.map===null||q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Pl){if(N.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ri(o.x,o.y,{format:yo,type:Ha,minFilter:ln,magFilter:ln,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new Mo(o.x,o.y,sa),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=Ga,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Gn,B.map.depthTexture.magFilter=Gn}else{N.isPointLight?(B.map=new WE(o.x),B.map.depthTexture=new c2(o.x,Ki)):(B.map=new ri(o.x,o.y),B.map.depthTexture=new Mo(o.x,o.y,Ki)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=Ga;const mt=i.state.buffers.depth.getReversed();this.type===ku?(B.map.depthTexture.compareFunction=mt?bg:Tg,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Gn,B.map.depthTexture.magFilter=Gn)}B.camera.updateProjectionMatrix()}const dt=B.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<dt;mt++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,mt),i.clear();else{mt===0&&(i.setRenderTarget(B.map),i.clear());const O=B.getViewport(mt);u.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),at.viewport(u)}if(N.isPointLight){const O=B.camera,et=B.matrix,gt=N.distance||O.far;gt!==O.far&&(O.far=gt,O.updateProjectionMatrix()),Ul.setFromMatrixPosition(N.matrixWorld),O.position.copy(Ul),vp.copy(O.position),vp.add(jN[mt]),O.up.copy(KN[mt]),O.lookAt(vp),O.updateMatrixWorld(),et.makeTranslation(-Ul.x,-Ul.y,-Ul.z),bS.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),B._frustum.setFromProjectionMatrix(bS,O.coordinateSystem,O.reversedDepth)}else B.updateMatrices(N);s=B.getFrustum(),L(I,k,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===Pl&&D(B,k),B.needsUpdate=!1}x=this.type,M.needsUpdate=!1,i.setRenderTarget(A,U,H)};function D(z,I){const k=t.update(b);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ri(o.x,o.y,{format:yo,type:Ha})),_.uniforms.shadow_pass.value=z.map.depthTexture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(I,null,k,_,b,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(I,null,k,y,b,null)}function R(z,I,k,A){let U=null;const H=k.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)U=H;else if(U=k.isPointLight===!0?p:f,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const at=U.uuid,q=I.uuid;let it=d[at];it===void 0&&(it={},d[at]=it);let Y=it[q];Y===void 0&&(Y=U.clone(),it[q]=Y,I.addEventListener("dispose",P)),U=Y}if(U.visible=I.visible,U.wireframe=I.wireframe,A===Pl?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:v[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,k.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const at=i.properties.get(U);at.light=k}return U}function L(z,I,k,A,U){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&U===Pl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld);const q=t.update(z),it=z.material;if(Array.isArray(it)){const Y=q.groups;for(let N=0,B=Y.length;N<B;N++){const K=Y[N],dt=it[K.materialIndex];if(dt&&dt.visible){const mt=R(z,dt,A,U);z.onBeforeShadow(i,z,I,k,q,mt,K),i.renderBufferDirect(k,null,q,mt,z,K),z.onAfterShadow(i,z,I,k,q,mt,K)}}}else if(it.visible){const Y=R(z,it,A,U);z.onBeforeShadow(i,z,I,k,q,Y,null),i.renderBufferDirect(k,null,q,Y,z,null),z.onAfterShadow(i,z,I,k,q,Y,null)}}const at=z.children;for(let q=0,it=at.length;q<it;q++)L(at[q],I,k,A,U)}function P(z){z.target.removeEventListener("dispose",P);for(const k in d){const A=d[k],U=z.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}const QN={[qp]:nf,[Yp]:Zp,[jp]:Qp,[vo]:Kp,[nf]:qp,[Zp]:Yp,[Qp]:jp,[Kp]:vo};function JN(i,t){function n(){let W=!1;const Lt=new dn;let At=null;const zt=new dn(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!W&&(i.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,xt,Rt,ae,Ge){Ge===!0&&(Mt*=ae,xt*=ae,Rt*=ae),Lt.set(Mt,xt,Rt,ae),zt.equals(Lt)===!1&&(i.clearColor(Mt,xt,Rt,ae),zt.copy(Lt))},reset:function(){W=!1,At=null,zt.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,At=null,zt=null,Mt=null;return{setReversed:function(xt){if(Lt!==xt){const Rt=t.get("EXT_clip_control");xt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return Lt},setTest:function(xt){xt?ct(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(xt){At!==xt&&!W&&(i.depthMask(xt),At=xt)},setFunc:function(xt){if(Lt&&(xt=QN[xt]),zt!==xt){switch(xt){case qp:i.depthFunc(i.NEVER);break;case nf:i.depthFunc(i.ALWAYS);break;case Yp:i.depthFunc(i.LESS);break;case vo:i.depthFunc(i.LEQUAL);break;case jp:i.depthFunc(i.EQUAL);break;case Kp:i.depthFunc(i.GEQUAL);break;case Zp:i.depthFunc(i.GREATER);break;case Qp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Mt!==xt&&(Lt&&(xt=1-xt),i.clearDepth(xt),Mt=xt)},reset:function(){W=!1,At=null,zt=null,Mt=null,Lt=!1}}}function o(){let W=!1,Lt=null,At=null,zt=null,Mt=null,xt=null,Rt=null,ae=null,Ge=null;return{setTest:function(we){W||(we?ct(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(we){Lt!==we&&!W&&(i.stencilMask(we),Lt=we)},setFunc:function(we,kn,Oi){(At!==we||zt!==kn||Mt!==Oi)&&(i.stencilFunc(we,kn,Oi),At=we,zt=kn,Mt=Oi)},setOp:function(we,kn,Oi){(xt!==we||Rt!==kn||ae!==Oi)&&(i.stencilOp(we,kn,Oi),xt=we,Rt=kn,ae=Oi)},setLocked:function(we){W=we},setClear:function(we){Ge!==we&&(i.clearStencil(we),Ge=we)},reset:function(){W=!1,Lt=null,At=null,zt=null,Mt=null,xt=null,Rt=null,ae=null,Ge=null}}}const c=new n,u=new s,f=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,y=[],E=null,b=!1,M=null,x=null,D=null,R=null,L=null,P=null,z=null,I=new He(0,0,0),k=0,A=!1,U=null,H=null,at=null,q=null,it=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(K)[1]),N=B>=1):K.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),N=B>=2);let dt=null,mt={};const O=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),gt=new dn().fromArray(O),Tt=new dn().fromArray(et);function It(W,Lt,At,zt){const Mt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(W,xt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<At;Rt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(Lt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return xt}const J={};J[i.TEXTURE_2D]=It(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=It(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=It(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=It(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ct(i.DEPTH_TEST),u.setFunc(vo),Vt(!1),se(Ly),ct(i.CULL_FACE),le(ji);function ct(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function St(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function Dt(W,Lt){return v[W]!==Lt?(i.bindFramebuffer(W,Lt),v[W]=Lt,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Lt),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ot(W,Lt){let At=y,zt=!1;if(W){At=_.get(Lt),At===void 0&&(At=[],_.set(Lt,At));const Mt=W.textures;if(At.length!==Mt.length||At[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Rt=Mt.length;xt<Rt;xt++)At[xt]=i.COLOR_ATTACHMENT0+xt;At.length=Mt.length,zt=!0}}else At[0]!==i.BACK&&(At[0]=i.BACK,zt=!0);zt&&i.drawBuffers(At)}function fe(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const ze={[ar]:i.FUNC_ADD,[aw]:i.FUNC_SUBTRACT,[sw]:i.FUNC_REVERSE_SUBTRACT};ze[rw]=i.MIN,ze[ow]=i.MAX;const oe={[lw]:i.ZERO,[cw]:i.ONE,[uw]:i.SRC_COLOR,[Xp]:i.SRC_ALPHA,[gw]:i.SRC_ALPHA_SATURATE,[pw]:i.DST_COLOR,[hw]:i.DST_ALPHA,[fw]:i.ONE_MINUS_SRC_COLOR,[Wp]:i.ONE_MINUS_SRC_ALPHA,[mw]:i.ONE_MINUS_DST_COLOR,[dw]:i.ONE_MINUS_DST_ALPHA,[vw]:i.CONSTANT_COLOR,[_w]:i.ONE_MINUS_CONSTANT_COLOR,[xw]:i.CONSTANT_ALPHA,[yw]:i.ONE_MINUS_CONSTANT_ALPHA};function le(W,Lt,At,zt,Mt,xt,Rt,ae,Ge,we){if(W===ji){b===!0&&(St(i.BLEND),b=!1);return}if(b===!1&&(ct(i.BLEND),b=!0),W!==iw){if(W!==M||we!==A){if((x!==ar||L!==ar)&&(i.blendEquation(i.FUNC_ADD),x=ar,L=ar),we)switch(W){case mo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ny:i.blendFunc(i.ONE,i.ONE);break;case Py:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oy:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",W);break}else switch(W){case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ny:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Py:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oy:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",W);break}D=null,R=null,P=null,z=null,I.set(0,0,0),k=0,M=W,A=we}return}Mt=Mt||Lt,xt=xt||At,Rt=Rt||zt,(Lt!==x||Mt!==L)&&(i.blendEquationSeparate(ze[Lt],ze[Mt]),x=Lt,L=Mt),(At!==D||zt!==R||xt!==P||Rt!==z)&&(i.blendFuncSeparate(oe[At],oe[zt],oe[xt],oe[Rt]),D=At,R=zt,P=xt,z=Rt),(ae.equals(I)===!1||Ge!==k)&&(i.blendColor(ae.r,ae.g,ae.b,Ge),I.copy(ae),k=Ge),M=W,A=!1}function ye(W,Lt){W.side===vi?St(i.CULL_FACE):ct(i.CULL_FACE);let At=W.side===wn;Lt&&(At=!At),Vt(At),W.blending===mo&&W.transparent===!1?le(ji):le(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const zt=W.stencilWrite;f.setTest(zt),zt&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),be(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(W){U!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),U=W)}function se(W){W!==tw?(ct(i.CULL_FACE),W!==H&&(W===Ly?i.cullFace(i.BACK):W===ew?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),H=W}function G(W){W!==at&&(N&&i.lineWidth(W),at=W)}function be(W,Lt,At){W?(ct(i.POLYGON_OFFSET_FILL),(q!==Lt||it!==At)&&(i.polygonOffset(Lt,At),q=Lt,it=At)):St(i.POLYGON_OFFSET_FILL)}function _e(W){W?ct(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Ue(W){W===void 0&&(W=i.TEXTURE0+Y-1),dt!==W&&(i.activeTexture(W),dt=W)}function Kt(W,Lt,At){At===void 0&&(dt===null?At=i.TEXTURE0+Y-1:At=dt);let zt=mt[At];zt===void 0&&(zt={type:void 0,texture:void 0},mt[At]=zt),(zt.type!==W||zt.texture!==Lt)&&(dt!==At&&(i.activeTexture(At),dt=At),i.bindTexture(W,Lt||J[W]),zt.type=W,zt.texture=Lt)}function F(){const W=mt[dt];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(W){Pe("WebGLState:",W)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(W){Pe("WebGLState:",W)}}function pt(){try{i.texSubImage2D(...arguments)}catch(W){Pe("WebGLState:",W)}}function yt(){try{i.texSubImage3D(...arguments)}catch(W){Pe("WebGLState:",W)}}function ft(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Pe("WebGLState:",W)}}function Qt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Pe("WebGLState:",W)}}function Ct(){try{i.texStorage2D(...arguments)}catch(W){Pe("WebGLState:",W)}}function qt(){try{i.texStorage3D(...arguments)}catch(W){Pe("WebGLState:",W)}}function ie(){try{i.texImage2D(...arguments)}catch(W){Pe("WebGLState:",W)}}function Et(){try{i.texImage3D(...arguments)}catch(W){Pe("WebGLState:",W)}}function bt(W){gt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Ht(W){Tt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Tt.copy(W))}function Bt(W,Lt){let At=d.get(Lt);At===void 0&&(At=new WeakMap,d.set(Lt,At));let zt=At.get(W);zt===void 0&&(zt=i.getUniformBlockIndex(Lt,W.name),At.set(W,zt))}function wt(W,Lt){const zt=d.get(Lt).get(W);p.get(Lt)!==zt&&(i.uniformBlockBinding(Lt,zt,W.__bindingPointIndex),p.set(Lt,zt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},dt=null,mt={},v={},_=new WeakMap,y=[],E=null,b=!1,M=null,x=null,D=null,R=null,L=null,P=null,z=null,I=new He(0,0,0),k=0,A=!1,U=null,H=null,at=null,q=null,it=null,gt.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ct,disable:St,bindFramebuffer:Dt,drawBuffers:Ot,useProgram:fe,setBlending:le,setMaterial:ye,setFlipSided:Vt,setCullFace:se,setLineWidth:G,setPolygonOffset:be,setScissorTest:_e,activeTexture:Ue,bindTexture:Kt,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:ie,texImage3D:Et,updateUBOMapping:Bt,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:qt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Qt,scissor:bt,viewport:Ht,reset:de}}function $N(i,t,n,s,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new xe,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,T){return y?new OffscreenCanvas(F,T):rf("canvas")}function b(F,T,j){let pt=1;const yt=Kt(F);if((yt.width>j||yt.height>j)&&(pt=j/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ft=Math.floor(pt*yt.width),Qt=Math.floor(pt*yt.height);v===void 0&&(v=E(ft,Qt));const Ct=T?E(ft,Qt):v;return Ct.width=ft,Ct.height=Qt,Ct.getContext("2d").drawImage(F,0,0,ft,Qt),ue("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Qt+")."),Ct}else return"data"in F&&ue("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),F;return F}function M(F){return F.generateMipmaps}function x(F){i.generateMipmap(F)}function D(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(F,T,j,pt,yt=!1){if(F!==null){if(i[F]!==void 0)return i[F];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ft=T;if(T===i.RED&&(j===i.FLOAT&&(ft=i.R32F),j===i.HALF_FLOAT&&(ft=i.R16F),j===i.UNSIGNED_BYTE&&(ft=i.R8)),T===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ft=i.R8UI),j===i.UNSIGNED_SHORT&&(ft=i.R16UI),j===i.UNSIGNED_INT&&(ft=i.R32UI),j===i.BYTE&&(ft=i.R8I),j===i.SHORT&&(ft=i.R16I),j===i.INT&&(ft=i.R32I)),T===i.RG&&(j===i.FLOAT&&(ft=i.RG32F),j===i.HALF_FLOAT&&(ft=i.RG16F),j===i.UNSIGNED_BYTE&&(ft=i.RG8)),T===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ft=i.RG8UI),j===i.UNSIGNED_SHORT&&(ft=i.RG16UI),j===i.UNSIGNED_INT&&(ft=i.RG32UI),j===i.BYTE&&(ft=i.RG8I),j===i.SHORT&&(ft=i.RG16I),j===i.INT&&(ft=i.RG32I)),T===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),j===i.UNSIGNED_INT&&(ft=i.RGB32UI),j===i.BYTE&&(ft=i.RGB8I),j===i.SHORT&&(ft=i.RGB16I),j===i.INT&&(ft=i.RGB32I)),T===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),j===i.UNSIGNED_INT&&(ft=i.RGBA32UI),j===i.BYTE&&(ft=i.RGBA8I),j===i.SHORT&&(ft=i.RGBA16I),j===i.INT&&(ft=i.RGBA32I)),T===i.RGB&&(j===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),T===i.RGBA){const Qt=yt?af:De.getTransfer(pt);j===i.FLOAT&&(ft=i.RGBA32F),j===i.HALF_FLOAT&&(ft=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ft=Qt===qe?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function L(F,T){let j;return F?T===null||T===Ki||T===xo?j=i.DEPTH24_STENCIL8:T===sa?j=i.DEPTH32F_STENCIL8:T===ql&&(j=i.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===xo?j=i.DEPTH_COMPONENT24:T===sa?j=i.DEPTH_COMPONENT32F:T===ql&&(j=i.DEPTH_COMPONENT16),j}function P(F,T){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==Gn&&F.minFilter!==ln?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function z(F){const T=F.target;T.removeEventListener("dispose",z),k(T),T.isVideoTexture&&g.delete(T)}function I(F){const T=F.target;T.removeEventListener("dispose",I),U(T)}function k(F){const T=s.get(F);if(T.__webglInit===void 0)return;const j=F.source,pt=_.get(j);if(pt){const yt=pt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&A(F),Object.keys(pt).length===0&&_.delete(j)}s.remove(F)}function A(F){const T=s.get(F);i.deleteTexture(T.__webglTexture);const j=F.source,pt=_.get(j);delete pt[T.__cacheKey],u.memory.textures--}function U(F){const T=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let yt=0;yt<T.__webglFramebuffer[pt].length;yt++)i.deleteFramebuffer(T.__webglFramebuffer[pt][yt]);else i.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)i.deleteFramebuffer(T.__webglFramebuffer[pt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=F.textures;for(let pt=0,yt=j.length;pt<yt;pt++){const ft=s.get(j[pt]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),u.memory.textures--),s.remove(j[pt])}s.remove(F)}let H=0;function at(){H=0}function q(){const F=H;return F>=o.maxTextures&&ue("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),H+=1,F}function it(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function Y(F,T){const j=s.get(F);if(F.isVideoTexture&&_e(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&j.__version!==F.version){const pt=F.image;if(pt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,F,T);return}}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+T)}function N(F,T){const j=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){J(j,F,T);return}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+T)}function B(F,T){const j=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){J(j,F,T);return}n.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+T)}function K(F,T){const j=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&j.__version!==F.version){ct(j,F,T);return}n.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+T)}const dt={[tm]:i.REPEAT,[Oa]:i.CLAMP_TO_EDGE,[em]:i.MIRRORED_REPEAT},mt={[Gn]:i.NEAREST,[Ew]:i.NEAREST_MIPMAP_NEAREST,[_u]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Hd]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},O={[Aw]:i.NEVER,[Uw]:i.ALWAYS,[Rw]:i.LESS,[Tg]:i.LEQUAL,[Cw]:i.EQUAL,[bg]:i.GEQUAL,[ww]:i.GREATER,[Dw]:i.NOTEQUAL};function et(F,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ln||T.magFilter===Hd||T.magFilter===_u||T.magFilter===lr||T.minFilter===ln||T.minFilter===Hd||T.minFilter===_u||T.minFilter===lr)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,dt[T.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,dt[T.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,dt[T.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,mt[T.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,mt[T.minFilter]),T.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Gn||T.minFilter!==_u&&T.minFilter!==lr||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function gt(F,T){let j=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",z));const pt=T.source;let yt=_.get(pt);yt===void 0&&(yt={},_.set(pt,yt));const ft=it(T);if(ft!==F.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,j=!0),yt[ft].usedTimes++;const Qt=yt[F.__cacheKey];Qt!==void 0&&(yt[F.__cacheKey].usedTimes--,Qt.usedTimes===0&&A(T)),F.__cacheKey=ft,F.__webglTexture=yt[ft].texture}return j}function Tt(F,T,j){return Math.floor(Math.floor(F/j)/T)}function It(F,T,j,pt){const ft=F.updateRanges;if(ft.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,j,pt,T.data);else{ft.sort((Et,bt)=>Et.start-bt.start);let Qt=0;for(let Et=1;Et<ft.length;Et++){const bt=ft[Qt],Ht=ft[Et],Bt=bt.start+bt.count,wt=Tt(Ht.start,T.width,4),de=Tt(bt.start,T.width,4);Ht.start<=Bt+1&&wt===de&&Tt(Ht.start+Ht.count-1,T.width,4)===wt?bt.count=Math.max(bt.count,Ht.start+Ht.count-bt.start):(++Qt,ft[Qt]=Ht)}ft.length=Qt+1;const Ct=i.getParameter(i.UNPACK_ROW_LENGTH),qt=i.getParameter(i.UNPACK_SKIP_PIXELS),ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Et=0,bt=ft.length;Et<bt;Et++){const Ht=ft[Et],Bt=Math.floor(Ht.start/4),wt=Math.ceil(Ht.count/4),de=Bt%T.width,W=Math.floor(Bt/T.width),Lt=wt,At=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,de),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),n.texSubImage2D(i.TEXTURE_2D,0,de,W,Lt,At,j,pt,T.data)}F.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ie)}}function J(F,T,j){let pt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=i.TEXTURE_3D);const yt=gt(F,T),ft=T.source;n.bindTexture(pt,F.__webglTexture,i.TEXTURE0+j);const Qt=s.get(ft);if(ft.version!==Qt.__version||yt===!0){n.activeTexture(i.TEXTURE0+j);const Ct=De.getPrimaries(De.workingColorSpace),qt=T.colorSpace===aa?null:De.getPrimaries(T.colorSpace),ie=T.colorSpace===aa||Ct===qt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Et=b(T.image,!1,o.maxTextureSize);Et=Ue(T,Et);const bt=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type);let Bt=R(T.internalFormat,bt,Ht,T.colorSpace,T.isVideoTexture);et(pt,T);let wt;const de=T.mipmaps,W=T.isVideoTexture!==!0,Lt=Qt.__version===void 0||yt===!0,At=ft.dataReady,zt=P(T,Et);if(T.isDepthTexture)Bt=L(T.format===Ts,T.type),Lt&&(W?n.texStorage2D(i.TEXTURE_2D,1,Bt,Et.width,Et.height):n.texImage2D(i.TEXTURE_2D,0,Bt,Et.width,Et.height,0,bt,Ht,null));else if(T.isDataTexture)if(de.length>0){W&&Lt&&n.texStorage2D(i.TEXTURE_2D,zt,Bt,de[0].width,de[0].height);for(let Mt=0,xt=de.length;Mt<xt;Mt++)wt=de[Mt],W?At&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,wt.width,wt.height,bt,Ht,wt.data):n.texImage2D(i.TEXTURE_2D,Mt,Bt,wt.width,wt.height,0,bt,Ht,wt.data);T.generateMipmaps=!1}else W?(Lt&&n.texStorage2D(i.TEXTURE_2D,zt,Bt,Et.width,Et.height),At&&It(T,Et,bt,Ht)):n.texImage2D(i.TEXTURE_2D,0,Bt,Et.width,Et.height,0,bt,Ht,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Lt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Bt,de[0].width,de[0].height,Et.depth);for(let Mt=0,xt=de.length;Mt<xt;Mt++)if(wt=de[Mt],T.format!==Yi)if(bt!==null)if(W){if(At)if(T.layerUpdates.size>0){const Rt=nS(wt.width,wt.height,T.format,T.type);for(const ae of T.layerUpdates){const Ge=wt.data.subarray(ae*Rt/wt.data.BYTES_PER_ELEMENT,(ae+1)*Rt/wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,ae,wt.width,wt.height,1,bt,Ge)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,Et.depth,bt,wt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,Bt,wt.width,wt.height,Et.depth,0,wt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,Et.depth,bt,Ht,wt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,Mt,Bt,wt.width,wt.height,Et.depth,0,bt,Ht,wt.data)}else{W&&Lt&&n.texStorage2D(i.TEXTURE_2D,zt,Bt,de[0].width,de[0].height);for(let Mt=0,xt=de.length;Mt<xt;Mt++)wt=de[Mt],T.format!==Yi?bt!==null?W?At&&n.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,wt.width,wt.height,bt,wt.data):n.compressedTexImage2D(i.TEXTURE_2D,Mt,Bt,wt.width,wt.height,0,wt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,wt.width,wt.height,bt,Ht,wt.data):n.texImage2D(i.TEXTURE_2D,Mt,Bt,wt.width,wt.height,0,bt,Ht,wt.data)}else if(T.isDataArrayTexture)if(W){if(Lt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Bt,Et.width,Et.height,Et.depth),At)if(T.layerUpdates.size>0){const Mt=nS(Et.width,Et.height,T.format,T.type);for(const xt of T.layerUpdates){const Rt=Et.data.subarray(xt*Mt/Et.data.BYTES_PER_ELEMENT,(xt+1)*Mt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,bt,Ht,Rt)}T.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ht,Et.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,Et.width,Et.height,Et.depth,0,bt,Ht,Et.data);else if(T.isData3DTexture)W?(Lt&&n.texStorage3D(i.TEXTURE_3D,zt,Bt,Et.width,Et.height,Et.depth),At&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ht,Et.data)):n.texImage3D(i.TEXTURE_3D,0,Bt,Et.width,Et.height,Et.depth,0,bt,Ht,Et.data);else if(T.isFramebufferTexture){if(Lt)if(W)n.texStorage2D(i.TEXTURE_2D,zt,Bt,Et.width,Et.height);else{let Mt=Et.width,xt=Et.height;for(let Rt=0;Rt<zt;Rt++)n.texImage2D(i.TEXTURE_2D,Rt,Bt,Mt,xt,0,bt,Ht,null),Mt>>=1,xt>>=1}}else if(de.length>0){if(W&&Lt){const Mt=Kt(de[0]);n.texStorage2D(i.TEXTURE_2D,zt,Bt,Mt.width,Mt.height)}for(let Mt=0,xt=de.length;Mt<xt;Mt++)wt=de[Mt],W?At&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,bt,Ht,wt):n.texImage2D(i.TEXTURE_2D,Mt,Bt,bt,Ht,wt);T.generateMipmaps=!1}else if(W){if(Lt){const Mt=Kt(Et);n.texStorage2D(i.TEXTURE_2D,zt,Bt,Mt.width,Mt.height)}At&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ht,Et)}else n.texImage2D(i.TEXTURE_2D,0,Bt,bt,Ht,Et);M(T)&&x(pt),Qt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ct(F,T,j){if(T.image.length!==6)return;const pt=gt(F,T),yt=T.source;n.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+j);const ft=s.get(yt);if(yt.version!==ft.__version||pt===!0){n.activeTexture(i.TEXTURE0+j);const Qt=De.getPrimaries(De.workingColorSpace),Ct=T.colorSpace===aa?null:De.getPrimaries(T.colorSpace),qt=T.colorSpace===aa||Qt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const ie=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let xt=0;xt<6;xt++)!ie&&!Et?bt[xt]=b(T.image[xt],!0,o.maxCubemapSize):bt[xt]=Et?T.image[xt].image:T.image[xt],bt[xt]=Ue(T,bt[xt]);const Ht=bt[0],Bt=c.convert(T.format,T.colorSpace),wt=c.convert(T.type),de=R(T.internalFormat,Bt,wt,T.colorSpace),W=T.isVideoTexture!==!0,Lt=ft.__version===void 0||pt===!0,At=yt.dataReady;let zt=P(T,Ht);et(i.TEXTURE_CUBE_MAP,T);let Mt;if(ie){W&&Lt&&n.texStorage2D(i.TEXTURE_CUBE_MAP,zt,de,Ht.width,Ht.height);for(let xt=0;xt<6;xt++){Mt=bt[xt].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const ae=Mt[Rt];T.format!==Yi?Bt!==null?W?At&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,ae.width,ae.height,Bt,ae.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,de,ae.width,ae.height,0,ae.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,ae.width,ae.height,Bt,wt,ae.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,de,ae.width,ae.height,0,Bt,wt,ae.data)}}}else{if(Mt=T.mipmaps,W&&Lt){Mt.length>0&&zt++;const xt=Kt(bt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,zt,de,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt[xt].width,bt[xt].height,Bt,wt,bt[xt].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,bt[xt].width,bt[xt].height,0,Bt,wt,bt[xt].data);for(let Rt=0;Rt<Mt.length;Rt++){const Ge=Mt[Rt].image[xt].image;W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,Ge.width,Ge.height,Bt,wt,Ge.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,de,Ge.width,Ge.height,0,Bt,wt,Ge.data)}}else{W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt,wt,bt[xt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Bt,wt,bt[xt]);for(let Rt=0;Rt<Mt.length;Rt++){const ae=Mt[Rt];W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,Bt,wt,ae.image[xt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,de,Bt,wt,ae.image[xt])}}}M(T)&&x(i.TEXTURE_CUBE_MAP),ft.__version=yt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function St(F,T,j,pt,yt,ft){const Qt=c.convert(j.format,j.colorSpace),Ct=c.convert(j.type),qt=R(j.internalFormat,Qt,Ct,j.colorSpace),ie=s.get(T),Et=s.get(j);if(Et.__renderTarget=T,!ie.__hasExternalTextures){const bt=Math.max(1,T.width>>ft),Ht=Math.max(1,T.height>>ft);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?n.texImage3D(yt,ft,qt,bt,Ht,T.depth,0,Qt,Ct,null):n.texImage2D(yt,ft,qt,bt,Ht,0,Qt,Ct,null)}n.bindFramebuffer(i.FRAMEBUFFER,F),be(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,yt,Et.__webglTexture,0,G(T)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,yt,Et.__webglTexture,ft),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(F,T,j){if(i.bindRenderbuffer(i.RENDERBUFFER,F),T.depthBuffer){const pt=T.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ft=L(T.stencilBuffer,yt),Qt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(T),ft,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(T),ft,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ft,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Qt,i.RENDERBUFFER,F)}else{const pt=T.textures;for(let yt=0;yt<pt.length;yt++){const ft=pt[yt],Qt=c.convert(ft.format,ft.colorSpace),Ct=c.convert(ft.type),qt=R(ft.internalFormat,Qt,Ct,ft.colorSpace);be(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(T),qt,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(T),qt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,qt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(F,T,j){const pt=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(T.depthTexture);if(yt.__renderTarget=T,(!yt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),yt.__webglTexture===void 0){yt.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,yt.__webglTexture),et(i.TEXTURE_CUBE_MAP,T.depthTexture);const ie=c.convert(T.depthTexture.format),Et=c.convert(T.depthTexture.type);let bt;T.depthTexture.format===Ga?bt=i.DEPTH_COMPONENT24:T.depthTexture.format===Ts&&(bt=i.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,bt,T.width,T.height,0,ie,Et,null)}}else Y(T.depthTexture,0);const ft=yt.__webglTexture,Qt=G(T),Ct=pt?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,qt=T.depthTexture.format===Ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ga)be(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,qt,Ct,ft,0,Qt):i.framebufferTexture2D(i.FRAMEBUFFER,qt,Ct,ft,0);else if(T.depthTexture.format===Ts)be(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,qt,Ct,ft,0,Qt):i.framebufferTexture2D(i.FRAMEBUFFER,qt,Ct,ft,0);else throw new Error("Unknown depthTexture format")}function fe(F){const T=s.get(F),j=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const pt=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=pt}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let pt=0;pt<6;pt++)Ot(T.__webglFramebuffer[pt],F,pt);else{const pt=F.texture.mipmaps;pt&&pt.length>0?Ot(T.__webglFramebuffer[0],F,0):Ot(T.__webglFramebuffer,F,0)}else if(j){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=i.createRenderbuffer(),Dt(T.__webglDepthbuffer[pt],F,!1);else{const yt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,ft)}}else{const pt=F.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Dt(T.__webglDepthbuffer,F,!1);else{const yt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,ft)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(F,T,j){const pt=s.get(F);T!==void 0&&St(pt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&fe(F)}function oe(F){const T=F.texture,j=s.get(F),pt=s.get(T);F.addEventListener("dispose",I);const yt=F.textures,ft=F.isWebGLCubeRenderTarget===!0,Qt=yt.length>1;if(Qt||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=T.version,u.memory.textures++),ft){j.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ct]=[];for(let qt=0;qt<T.mipmaps.length;qt++)j.__webglFramebuffer[Ct][qt]=i.createFramebuffer()}else j.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)j.__webglFramebuffer[Ct]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Qt)for(let Ct=0,qt=yt.length;Ct<qt;Ct++){const ie=s.get(yt[Ct]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),u.memory.textures++)}if(F.samples>0&&be(F)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const qt=yt[Ct];j.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Ct]);const ie=c.convert(qt.format,qt.colorSpace),Et=c.convert(qt.type),bt=R(qt.internalFormat,ie,Et,qt.colorSpace,F.isXRRenderTarget===!0),Ht=G(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,bt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,j.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(j.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){n.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),et(i.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let qt=0;qt<T.mipmaps.length;qt++)St(j.__webglFramebuffer[Ct][qt],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt);else St(j.__webglFramebuffer[Ct],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(T)&&x(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Qt){for(let Ct=0,qt=yt.length;Ct<qt;Ct++){const ie=yt[Ct],Et=s.get(ie);let bt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(bt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(bt,Et.__webglTexture),et(bt,ie),St(j.__webglFramebuffer,F,ie,i.COLOR_ATTACHMENT0+Ct,bt,0),M(ie)&&x(bt)}n.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ct=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Ct,pt.__webglTexture),et(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let qt=0;qt<T.mipmaps.length;qt++)St(j.__webglFramebuffer[qt],F,T,i.COLOR_ATTACHMENT0,Ct,qt);else St(j.__webglFramebuffer,F,T,i.COLOR_ATTACHMENT0,Ct,0);M(T)&&x(Ct),n.unbindTexture()}F.depthBuffer&&fe(F)}function le(F){const T=F.textures;for(let j=0,pt=T.length;j<pt;j++){const yt=T[j];if(M(yt)){const ft=D(F),Qt=s.get(yt).__webglTexture;n.bindTexture(ft,Qt),x(ft),n.unbindTexture()}}}const ye=[],Vt=[];function se(F){if(F.samples>0){if(be(F)===!1){const T=F.textures,j=F.width,pt=F.height;let yt=i.COLOR_BUFFER_BIT;const ft=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Qt=s.get(F),Ct=T.length>1;if(Ct)for(let ie=0;ie<T.length;ie++)n.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const qt=F.texture.mipmaps;qt&&qt.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let ie=0;ie<T.length;ie++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Qt.__webglColorRenderbuffer[ie]);const Et=s.get(T[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,j,pt,0,0,j,pt,yt,i.NEAREST),p===!0&&(ye.length=0,Vt.length=0,ye.push(i.COLOR_ATTACHMENT0+ie),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ye.push(ft),Vt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let ie=0;ie<T.length;ie++){n.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Qt.__webglColorRenderbuffer[ie]);const Et=s.get(T[ie]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,Et,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const T=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function G(F){return Math.min(o.maxSamples,F.samples)}function be(F){const T=s.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _e(F){const T=u.render.frame;g.get(F)!==T&&(g.set(F,T),F.update())}function Ue(F,T){const j=F.colorSpace,pt=F.format,yt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||j!==Rs&&j!==aa&&(De.getTransfer(j)===qe?(pt!==Yi||yt!==Yn)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",j)),T}function Kt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=q,this.resetTextureUnits=at,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=ze,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=St,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tP(i,t){function n(s,o=aa){let c;const u=De.getTransfer(o);if(s===Yn)return i.UNSIGNED_BYTE;if(s===xg)return i.UNSIGNED_SHORT_4_4_4_4;if(s===yg)return i.UNSIGNED_SHORT_5_5_5_1;if(s===DE)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===UE)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===CE)return i.BYTE;if(s===wE)return i.SHORT;if(s===ql)return i.UNSIGNED_SHORT;if(s===_g)return i.INT;if(s===Ki)return i.UNSIGNED_INT;if(s===sa)return i.FLOAT;if(s===Ha)return i.HALF_FLOAT;if(s===LE)return i.ALPHA;if(s===NE)return i.RGB;if(s===Yi)return i.RGBA;if(s===Ga)return i.DEPTH_COMPONENT;if(s===Ts)return i.DEPTH_STENCIL;if(s===PE)return i.RED;if(s===Sg)return i.RED_INTEGER;if(s===yo)return i.RG;if(s===Mg)return i.RG_INTEGER;if(s===Eg)return i.RGBA_INTEGER;if(s===Xu||s===Wu||s===qu||s===Yu)if(u===qe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nm||s===im||s===am||s===sm)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===nm)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===im)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===am)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rm||s===om||s===lm||s===cm||s===um||s===fm||s===hm)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===rm||s===om)return u===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===lm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===cm)return c.COMPRESSED_R11_EAC;if(s===um)return c.COMPRESSED_SIGNED_R11_EAC;if(s===fm)return c.COMPRESSED_RG11_EAC;if(s===hm)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===dm||s===pm||s===mm||s===gm||s===vm||s===_m||s===xm||s===ym||s===Sm||s===Mm||s===Em||s===Tm||s===bm||s===Am)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===dm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_m)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ym)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Em)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bm)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Am)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rm||s===Cm||s===wm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Rm)return u===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dm||s===Um||s===Lm||s===Nm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Dm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Um)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xo?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const eP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new YE(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new oi({vertexShader:eP,fragmentShader:nP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zi(new ic(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aP extends ws{constructor(t,n){super();const s=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,g=null,v=null,_=null,y=null,E=null;const b=typeof XRWebGLBinding<"u",M=new iP,x={},D=n.getContextAttributes();let R=null,L=null;const P=[],z=[],I=new xe;let k=null;const A=new Ui;A.viewport=new dn;const U=new Ui;U.viewport=new dn;const H=[A,U],at=new d2;let q=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ct=P[J];return ct===void 0&&(ct=new up,P[J]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(J){let ct=P[J];return ct===void 0&&(ct=new up,P[J]=ct),ct.getGripSpace()},this.getHand=function(J){let ct=P[J];return ct===void 0&&(ct=new up,P[J]=ct),ct.getHandSpace()};function Y(J){const ct=z.indexOf(J.inputSource);if(ct===-1)return;const St=P[ct];St!==void 0&&(St.update(J.inputSource,J.frame,d||u),St.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",N),o.removeEventListener("inputsourceschange",B);for(let J=0;J<P.length;J++){const ct=z[J];ct!==null&&(z[J]=null,P[J].disconnect(ct))}q=null,it=null,M.reset();for(const J in x)delete x[J];t.setRenderTarget(R),y=null,_=null,v=null,o=null,L=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(R=t.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",N),o.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await n.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Dt=null,Ot=null;D.depth&&(Ot=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=D.stencil?Ts:Ga,Dt=D.stencil?xo:Ki);const fe={colorFormat:n.RGBA8,depthFormat:Ot,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(fe),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),L=new ri(_.textureWidth,_.textureHeight,{format:Yi,type:Yn,depthTexture:new Mo(_.textureWidth,_.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const St={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,St),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new ri(y.framebufferWidth,y.framebufferHeight,{format:Yi,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),It.setContext(o),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(J){for(let ct=0;ct<J.removed.length;ct++){const St=J.removed[ct],Dt=z.indexOf(St);Dt>=0&&(z[Dt]=null,P[Dt].disconnect(St))}for(let ct=0;ct<J.added.length;ct++){const St=J.added[ct];let Dt=z.indexOf(St);if(Dt===-1){for(let fe=0;fe<P.length;fe++)if(fe>=z.length){z.push(St),Dt=fe;break}else if(z[fe]===null){z[fe]=St,Dt=fe;break}if(Dt===-1)break}const Ot=P[Dt];Ot&&Ot.connect(St)}}const K=new lt,dt=new lt;function mt(J,ct,St){K.setFromMatrixPosition(ct.matrixWorld),dt.setFromMatrixPosition(St.matrixWorld);const Dt=K.distanceTo(dt),Ot=ct.projectionMatrix.elements,fe=St.projectionMatrix.elements,ze=Ot[14]/(Ot[10]-1),oe=Ot[14]/(Ot[10]+1),le=(Ot[9]+1)/Ot[5],ye=(Ot[9]-1)/Ot[5],Vt=(Ot[8]-1)/Ot[0],se=(fe[8]+1)/fe[0],G=ze*Vt,be=ze*se,_e=Dt/(-Vt+se),Ue=_e*-Vt;if(ct.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ue),J.translateZ(_e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ot[10]===-1)J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Kt=ze+_e,F=oe+_e,T=G-Ue,j=be+(Dt-Ue),pt=le*oe/F*Kt,yt=ye*oe/F*Kt;J.projectionMatrix.makePerspective(T,j,pt,yt,Kt,F),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function O(J,ct){ct===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ct.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let ct=J.near,St=J.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(St=M.depthFar)),at.near=U.near=A.near=ct,at.far=U.far=A.far=St,(q!==at.near||it!==at.far)&&(o.updateRenderState({depthNear:at.near,depthFar:at.far}),q=at.near,it=at.far),at.layers.mask=J.layers.mask|6,A.layers.mask=at.layers.mask&3,U.layers.mask=at.layers.mask&5;const Dt=J.parent,Ot=at.cameras;O(at,Dt);for(let fe=0;fe<Ot.length;fe++)O(Ot[fe],Dt);Ot.length===2?mt(at,A,U):at.projectionMatrix.copy(A.projectionMatrix),et(J,at,Dt)};function et(J,ct,St){St===null?J.matrix.copy(ct.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(ct.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Om*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(J){p=J,_!==null&&(_.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function(J){return x[J]};let gt=null;function Tt(J,ct){if(g=ct.getViewerPose(d||u),E=ct,g!==null){const St=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Dt=!1;St.length!==at.cameras.length&&(at.cameras.length=0,Dt=!0);for(let oe=0;oe<St.length;oe++){const le=St[oe];let ye=null;if(y!==null)ye=y.getViewport(le);else{const se=v.getViewSubImage(_,le);ye=se.viewport,oe===0&&(t.setRenderTargetTextures(L,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(L))}let Vt=H[oe];Vt===void 0&&(Vt=new Ui,Vt.layers.enable(oe),Vt.viewport=new dn,H[oe]=Vt),Vt.matrix.fromArray(le.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(le.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ye.x,ye.y,ye.width,ye.height),oe===0&&(at.matrix.copy(Vt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Dt===!0&&at.cameras.push(Vt)}const Ot=o.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=s.getBinding();const oe=v.getDepthInformation(St[0]);oe&&oe.isValid&&oe.texture&&M.init(oe,o.renderState)}if(Ot&&Ot.includes("camera-access")&&b){t.state.unbindTexture(),v=s.getBinding();for(let oe=0;oe<St.length;oe++){const le=St[oe].camera;if(le){let ye=x[le];ye||(ye=new YE,x[le]=ye);const Vt=v.getCameraImage(le);ye.sourceTexture=Vt}}}}for(let St=0;St<P.length;St++){const Dt=z[St],Ot=P[St];Dt!==null&&Ot!==void 0&&Ot.update(Dt,ct,d||u)}gt&&gt(J,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),E=null}const It=new jE;It.setAnimationLoop(Tt),this.setAnimationLoop=function(J){gt=J},this.dispose=function(){}}}const er=new ka,sP=new Sn;function rP(i,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,GE(i)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,D,R,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),b(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?p(M,x,D,R):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=t.get(x),R=D.envMap,L=D.envMapRotation;R&&(M.envMap.value=R,er.copy(L),er.x*=-1,er.y*=-1,er.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),M.envMapRotation.value.setFromMatrix4(sP.makeRotationFromEuler(er)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,D,R){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=R*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function b(M,x){const D=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function oP(i,t,n,s){let o={},c={},u=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,R){const L=R.program;s.uniformBlockBinding(D,L)}function d(D,R){let L=o[D.id];L===void 0&&(E(D),L=g(D),o[D.id]=L,D.addEventListener("dispose",M));const P=R.program;s.updateUBOMapping(D,P);const z=t.render.frame;c[D.id]!==z&&(_(D),c[D.id]=z)}function g(D){const R=v();D.__bindingPointIndex=R;const L=i.createBuffer(),P=D.__size,z=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,P,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,L),L}function v(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const R=o[D.id],L=D.uniforms,P=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let z=0,I=L.length;z<I;z++){const k=Array.isArray(L[z])?L[z]:[L[z]];for(let A=0,U=k.length;A<U;A++){const H=k[A];if(y(H,z,A,P)===!0){const at=H.__offset,q=Array.isArray(H.value)?H.value:[H.value];let it=0;for(let Y=0;Y<q.length;Y++){const N=q[Y],B=b(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,at+it,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,it),it+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,at,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(D,R,L,P){const z=D.value,I=R+"_"+L;if(P[I]===void 0)return typeof z=="number"||typeof z=="boolean"?P[I]=z:P[I]=z.clone(),!0;{const k=P[I];if(typeof z=="number"||typeof z=="boolean"){if(k!==z)return P[I]=z,!0}else if(k.equals(z)===!1)return k.copy(z),!0}return!1}function E(D){const R=D.uniforms;let L=0;const P=16;for(let I=0,k=R.length;I<k;I++){const A=Array.isArray(R[I])?R[I]:[R[I]];for(let U=0,H=A.length;U<H;U++){const at=A[U],q=Array.isArray(at.value)?at.value:[at.value];for(let it=0,Y=q.length;it<Y;it++){const N=q[it],B=b(N),K=L%P,dt=K%B.boundary,mt=K+dt;L+=dt,mt!==0&&P-mt<B.storage&&(L+=P-mt),at.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=L,L+=B.storage}}}const z=L%P;return z>0&&(L+=P-z),D.__size=L,D.__cache={},this}function b(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ue("WebGLRenderer: Unsupported uniform value type.",D),R}function M(D){const R=D.target;R.removeEventListener("dispose",M);const L=u.indexOf(R.__bindingPointIndex);u.splice(L,1),i.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function x(){for(const D in o)i.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:p,update:d,dispose:x}}const lP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function cP(){return na===null&&(na=new s2(lP,16,16,yo,Ha),na.name="DFG_LUT",na.minFilter=ln,na.magFilter=ln,na.wrapS=Oa,na.wrapT=Oa,na.generateMipmaps=!1,na.needsUpdate=!0),na}class uP{constructor(t={}){const{canvas:n=Lw(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=Yn}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const b=y,M=new Set([Eg,Mg,Sg]),x=new Set([Yn,Ki,ql,xo,xg,yg]),D=new Uint32Array(4),R=new Int32Array(4);let L=null,P=null;const z=[],I=[];let k=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=hn;let H=0,at=0,q=null,it=-1,Y=null;const N=new dn,B=new dn;let K=null;const dt=new He(0);let mt=0,O=n.width,et=n.height,gt=1,Tt=null,It=null;const J=new dn(0,0,O,et),ct=new dn(0,0,O,et);let St=!1;const Dt=new qE;let Ot=!1,fe=!1;const ze=new Sn,oe=new lt,le=new dn,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function se(){return q===null?gt:1}let G=s;function be(w,Z){return n.getContext(w,Z)}try{const w={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ff}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",we,!1),G===null){const Z="webgl2";if(G=be(Z,w),G===null)throw be(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Pe("WebGLRenderer: "+w.message),w}let _e,Ue,Kt,F,T,j,pt,yt,ft,Qt,Ct,qt,ie,Et,bt,Ht,Bt,wt,de,W,Lt,At,zt,Mt;function xt(){_e=new cL(G),_e.init(),At=new tP(G,_e),Ue=new tL(G,_e,t,At),Kt=new JN(G,_e),Ue.reversedDepthBuffer&&_&&Kt.buffers.depth.setReversed(!0),F=new hL(G),T=new IN,j=new $N(G,_e,Kt,T,Ue,At,F),pt=new nL(A),yt=new lL(A),ft=new g2(G),zt=new JU(G,ft),Qt=new uL(G,ft,F,zt),Ct=new pL(G,Qt,ft,F),de=new dL(G,Ue,j),Ht=new eL(T),qt=new FN(A,pt,yt,_e,Ue,zt,Ht),ie=new rP(A,T),Et=new zN,bt=new WN(_e),wt=new QU(A,pt,yt,Kt,Ct,E,p),Bt=new ZN(A,Ct,Ue),Mt=new oP(G,F,Ue,Kt),W=new $U(G,_e,F),Lt=new fL(G,_e,F),F.programs=qt.programs,A.capabilities=Ue,A.extensions=_e,A.properties=T,A.renderLists=Et,A.shadowMap=Bt,A.state=Kt,A.info=F}xt(),b!==Yn&&(k=new gL(b,n.width,n.height,o,c));const Rt=new aP(A,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(w){w!==void 0&&(gt=w,this.setSize(O,et,!1))},this.getSize=function(w){return w.set(O,et)},this.setSize=function(w,Z,ot=!0){if(Rt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,et=Z,n.width=Math.floor(w*gt),n.height=Math.floor(Z*gt),ot===!0&&(n.style.width=w+"px",n.style.height=Z+"px"),k!==null&&k.setSize(n.width,n.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(O*gt,et*gt).floor()},this.setDrawingBufferSize=function(w,Z,ot){O=w,et=Z,gt=ot,n.width=Math.floor(w*ot),n.height=Math.floor(Z*ot),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(b===Yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,Z,ot,st){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,Z,ot,st),Kt.viewport(N.copy(J).multiplyScalar(gt).round())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,Z,ot,st){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,Z,ot,st),Kt.scissor(B.copy(ct).multiplyScalar(gt).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(w){Kt.setScissorTest(St=w)},this.setOpaqueSort=function(w){Tt=w},this.setTransparentSort=function(w){It=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,ot=!0){let st=0;if(w){let $=!1;if(q!==null){const Ut=q.texture.format;$=M.has(Ut)}if($){const Ut=q.texture.type,Gt=x.has(Ut),Pt=wt.getClearColor(),kt=wt.getClearAlpha(),Yt=Pt.r,te=Pt.g,jt=Pt.b;Gt?(D[0]=Yt,D[1]=te,D[2]=jt,D[3]=kt,G.clearBufferuiv(G.COLOR,0,D)):(R[0]=Yt,R[1]=te,R[2]=jt,R[3]=kt,G.clearBufferiv(G.COLOR,0,R))}else st|=G.COLOR_BUFFER_BIT}Z&&(st|=G.DEPTH_BUFFER_BIT),ot&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",we,!1),wt.dispose(),Et.dispose(),bt.dispose(),T.dispose(),pt.dispose(),yt.dispose(),Ct.dispose(),zt.dispose(),Mt.dispose(),qt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",pr),Rt.removeEventListener("sessionend",Do),Qi.stop()};function ae(w){w.preventDefault(),zy("WebGLRenderer: Context Lost."),U=!0}function Ge(){zy("WebGLRenderer: Context Restored."),U=!1;const w=F.autoReset,Z=Bt.enabled,ot=Bt.autoUpdate,st=Bt.needsUpdate,$=Bt.type;xt(),F.autoReset=w,Bt.enabled=Z,Bt.autoUpdate=ot,Bt.needsUpdate=st,Bt.type=$}function we(w){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kn(w){const Z=w.target;Z.removeEventListener("dispose",kn),Oi(Z)}function Oi(w){ac(w),T.remove(w)}function ac(w){const Z=T.get(w).programs;Z!==void 0&&(Z.forEach(function(ot){qt.releaseProgram(ot)}),w.isShaderMaterial&&qt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ot,st,$,Ut){Z===null&&(Z=ye);const Gt=$.isMesh&&$.matrixWorld.determinant()<0,Pt=Us(w,Z,ot,st,$);Kt.setMaterial(st,Gt);let kt=ot.index,Yt=1;if(st.wireframe===!0){if(kt=Qt.getWireframeAttribute(ot),kt===void 0)return;Yt=2}const te=ot.drawRange,jt=ot.attributes.position;let ee=te.start*Yt,Fe=(te.start+te.count)*Yt;Ut!==null&&(ee=Math.max(ee,Ut.start*Yt),Fe=Math.min(Fe,(Ut.start+Ut.count)*Yt)),kt!==null?(ee=Math.max(ee,0),Fe=Math.min(Fe,kt.count)):jt!=null&&(ee=Math.max(ee,0),Fe=Math.min(Fe,jt.count));const en=Fe-ee;if(en<0||en===1/0)return;zt.setup($,st,Pt,ot,kt);let Je,Ve=W;if(kt!==null&&(Je=ft.get(kt),Ve=Lt,Ve.setIndex(Je)),$.isMesh)st.wireframe===!0?(Kt.setLineWidth(st.wireframeLinewidth*se()),Ve.setMode(G.LINES)):Ve.setMode(G.TRIANGLES);else if($.isLine){let Jt=st.linewidth;Jt===void 0&&(Jt=1),Kt.setLineWidth(Jt*se()),$.isLineSegments?Ve.setMode(G.LINES):$.isLineLoop?Ve.setMode(G.LINE_LOOP):Ve.setMode(G.LINE_STRIP)}else $.isPoints?Ve.setMode(G.POINTS):$.isSprite&&Ve.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Yl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ve.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))Ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Jt=$._multiDrawStarts,Ie=$._multiDrawCounts,re=$._multiDrawCount,Ln=kt?ft.get(kt).bytesPerElement:1,ha=T.get(st).currentProgram.getUniforms();for(let Nn=0;Nn<re;Nn++)ha.setValue(G,"_gl_DrawID",Nn),Ve.render(Jt[Nn]/Ln,Ie[Nn])}else if($.isInstancedMesh)Ve.renderInstances(ee,en,$.count);else if(ot.isInstancedBufferGeometry){const Jt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ie=Math.min(ot.instanceCount,Jt);Ve.renderInstances(ee,en,Ie)}else Ve.render(ee,en)};function Co(w,Z,ot){w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,gr(w,Z,ot),w.side=Va,w.needsUpdate=!0,gr(w,Z,ot),w.side=vi):gr(w,Z,ot)}this.compile=function(w,Z,ot=null){ot===null&&(ot=w),P=bt.get(ot),P.init(Z),I.push(P),ot.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),w!==ot&&w.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights();const st=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ut=$.material;if(Ut)if(Array.isArray(Ut))for(let Gt=0;Gt<Ut.length;Gt++){const Pt=Ut[Gt];Co(Pt,ot,$),st.add(Pt)}else Co(Ut,ot,$),st.add(Ut)}),P=I.pop(),st},this.compileAsync=function(w,Z,ot=null){const st=this.compile(w,Z,ot);return new Promise($=>{function Ut(){if(st.forEach(function(Gt){T.get(Gt).currentProgram.isReady()&&st.delete(Gt)}),st.size===0){$(w);return}setTimeout(Ut,10)}_e.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let dr=null;function wo(w){dr&&dr(w)}function pr(){Qi.stop()}function Do(){Qi.start()}const Qi=new jE;Qi.setAnimationLoop(wo),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(w){dr=w,Rt.setAnimationLoop(w),w===null?Qi.stop():Qi.start()},Rt.addEventListener("sessionstart",pr),Rt.addEventListener("sessionend",Do),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const ot=Rt.enabled===!0&&Rt.isPresenting===!0,st=k!==null&&(q===null||ot)&&k.begin(A,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Z),Z=Rt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,Z,q),P=bt.get(w,I.length),P.init(Z),I.push(P),ze.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Dt.setFromProjectionMatrix(ze,ra,Z.reversedDepth),fe=this.localClippingEnabled,Ot=Ht.init(this.clippingPlanes,fe),L=Et.get(w,z.length),L.init(),z.push(L),Rt.enabled===!0&&Rt.isPresenting===!0){const Gt=A.xr.getDepthSensingMesh();Gt!==null&&xi(Gt,Z,-1/0,A.sortObjects)}xi(w,Z,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Tt,It),Vt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Vt&&wt.addToRenderList(L,w),this.info.render.frame++,Ot===!0&&Ht.beginShadows();const $=P.state.shadowsArray;if(Bt.render($,w,Z),Ot===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&k.hasRenderPass())===!1){const Gt=L.opaque,Pt=L.transmissive;if(P.setupLights(),Z.isArrayCamera){const kt=Z.cameras;if(Pt.length>0)for(let Yt=0,te=kt.length;Yt<te;Yt++){const jt=kt[Yt];Un(Gt,Pt,w,jt)}Vt&&wt.render(w);for(let Yt=0,te=kt.length;Yt<te;Yt++){const jt=kt[Yt];pn(L,w,jt,jt.viewport)}}else Pt.length>0&&Un(Gt,Pt,w,Z),Vt&&wt.render(w),pn(L,w,Z)}q!==null&&at===0&&(j.updateMultisampleRenderTarget(q),j.updateRenderTargetMipmap(q)),st&&k.end(A),w.isScene===!0&&w.onAfterRender(A,w,Z),zt.resetDefaultState(),it=-1,Y=null,I.pop(),I.length>0?(P=I[I.length-1],Ot===!0&&Ht.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,z.pop(),z.length>0?L=z[z.length-1]:L=null};function xi(w,Z,ot,st){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Dt.intersectsSprite(w)){st&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ze);const Gt=Ct.update(w),Pt=w.material;Pt.visible&&L.push(w,Gt,Pt,ot,le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Dt.intersectsObject(w))){const Gt=Ct.update(w),Pt=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),le.copy(w.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),le.copy(Gt.boundingSphere.center)),le.applyMatrix4(w.matrixWorld).applyMatrix4(ze)),Array.isArray(Pt)){const kt=Gt.groups;for(let Yt=0,te=kt.length;Yt<te;Yt++){const jt=kt[Yt],ee=Pt[jt.materialIndex];ee&&ee.visible&&L.push(w,Gt,ee,ot,le.z,jt)}}else Pt.visible&&L.push(w,Gt,Pt,ot,le.z,null)}}const Ut=w.children;for(let Gt=0,Pt=Ut.length;Gt<Pt;Gt++)xi(Ut[Gt],Z,ot,st)}function pn(w,Z,ot,st){const{opaque:$,transmissive:Ut,transparent:Gt}=w;P.setupLightsView(ot),Ot===!0&&Ht.setGlobalState(A.clippingPlanes,ot),st&&Kt.viewport(N.copy(st)),$.length>0&&Fi($,Z,ot),Ut.length>0&&Fi(Ut,Z,ot),Gt.length>0&&Fi(Gt,Z,ot),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function Un(w,Z,ot,st){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[st.id]===void 0){const ee=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[st.id]=new ri(1,1,{generateMipmaps:!0,type:ee?Ha:Yn,minFilter:lr,samples:Ue.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Ut=P.state.transmissionRenderTarget[st.id],Gt=st.viewport||N;Ut.setSize(Gt.z*A.transmissionResolutionScale,Gt.w*A.transmissionResolutionScale);const Pt=A.getRenderTarget(),kt=A.getActiveCubeFace(),Yt=A.getActiveMipmapLevel();A.setRenderTarget(Ut),A.getClearColor(dt),mt=A.getClearAlpha(),mt<1&&A.setClearColor(16777215,.5),A.clear(),Vt&&wt.render(ot);const te=A.toneMapping;A.toneMapping=la;const jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),P.setupLightsView(st),Ot===!0&&Ht.setGlobalState(A.clippingPlanes,st),Fi(w,ot,st),j.updateMultisampleRenderTarget(Ut),j.updateRenderTargetMipmap(Ut),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Fe=0,en=Z.length;Fe<en;Fe++){const Je=Z[Fe],{object:Ve,geometry:Jt,material:Ie,group:re}=Je;if(Ie.side===vi&&Ve.layers.test(st.layers)){const Ln=Ie.side;Ie.side=wn,Ie.needsUpdate=!0,mr(Ve,ot,st,Jt,Ie,re),Ie.side=Ln,Ie.needsUpdate=!0,ee=!0}}ee===!0&&(j.updateMultisampleRenderTarget(Ut),j.updateRenderTargetMipmap(Ut))}A.setRenderTarget(Pt,kt,Yt),A.setClearColor(dt,mt),jt!==void 0&&(st.viewport=jt),A.toneMapping=te}function Fi(w,Z,ot){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,Ut=w.length;$<Ut;$++){const Gt=w[$],{object:Pt,geometry:kt,group:Yt}=Gt;let te=Gt.material;te.allowOverride===!0&&st!==null&&(te=st),Pt.layers.test(ot.layers)&&mr(Pt,Z,ot,kt,te,Yt)}}function mr(w,Z,ot,st,$,Ut){w.onBeforeRender(A,Z,ot,st,$,Ut),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(A,Z,ot,st,w,Ut),$.transparent===!0&&$.side===vi&&$.forceSinglePass===!1?($.side=wn,$.needsUpdate=!0,A.renderBufferDirect(ot,Z,st,$,w,Ut),$.side=Va,$.needsUpdate=!0,A.renderBufferDirect(ot,Z,st,$,w,Ut),$.side=vi):A.renderBufferDirect(ot,Z,st,$,w,Ut),w.onAfterRender(A,Z,ot,st,$,Ut)}function gr(w,Z,ot){Z.isScene!==!0&&(Z=ye);const st=T.get(w),$=P.state.lights,Ut=P.state.shadowsArray,Gt=$.state.version,Pt=qt.getParameters(w,$.state,Ut,Z,ot),kt=qt.getProgramCacheKey(Pt);let Yt=st.programs;st.environment=w.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(w.isMeshStandardMaterial?yt:pt).get(w.envMap||st.environment),st.envMapRotation=st.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",kn),Yt=new Map,st.programs=Yt);let te=Yt.get(kt);if(te!==void 0){if(st.currentProgram===te&&st.lightsStateVersion===Gt)return Uo(w,Pt),te}else Pt.uniforms=qt.getUniforms(w),w.onBeforeCompile(Pt,A),te=qt.acquireProgram(Pt,kt),Yt.set(kt,te),st.uniforms=Pt.uniforms;const jt=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(jt.clippingPlanes=Ht.uniform),Uo(w,Pt),st.needsLights=Xa(w),st.lightsStateVersion=Gt,st.needsLights&&(jt.ambientLightColor.value=$.state.ambient,jt.lightProbe.value=$.state.probe,jt.directionalLights.value=$.state.directional,jt.directionalLightShadows.value=$.state.directionalShadow,jt.spotLights.value=$.state.spot,jt.spotLightShadows.value=$.state.spotShadow,jt.rectAreaLights.value=$.state.rectArea,jt.ltc_1.value=$.state.rectAreaLTC1,jt.ltc_2.value=$.state.rectAreaLTC2,jt.pointLights.value=$.state.point,jt.pointLightShadows.value=$.state.pointShadow,jt.hemisphereLights.value=$.state.hemi,jt.directionalShadowMap.value=$.state.directionalShadowMap,jt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,jt.spotShadowMap.value=$.state.spotShadowMap,jt.spotLightMatrix.value=$.state.spotLightMatrix,jt.spotLightMap.value=$.state.spotLightMap,jt.pointShadowMap.value=$.state.pointShadowMap,jt.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=te,st.uniformsList=null,te}function sc(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=ju.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Uo(w,Z){const ot=T.get(w);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function Us(w,Z,ot,st,$){Z.isScene!==!0&&(Z=ye),j.resetTextureUnits();const Ut=Z.fog,Gt=st.isMeshStandardMaterial?Z.environment:null,Pt=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Rs,kt=(st.isMeshStandardMaterial?yt:pt).get(st.envMap||Gt),Yt=st.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,te=!!ot.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!ot.morphAttributes.position,ee=!!ot.morphAttributes.normal,Fe=!!ot.morphAttributes.color;let en=la;st.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(en=A.toneMapping);const Je=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ve=Je!==void 0?Je.length:0,Jt=T.get(st),Ie=P.state.lights;if(Ot===!0&&(fe===!0||w!==Y)){const On=w===Y&&st.id===it;Ht.setState(st,w,On)}let re=!1;st.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ie.state.version||Jt.outputColorSpace!==Pt||$.isBatchedMesh&&Jt.batching===!1||!$.isBatchedMesh&&Jt.batching===!0||$.isBatchedMesh&&Jt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Jt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Jt.instancing===!1||!$.isInstancedMesh&&Jt.instancing===!0||$.isSkinnedMesh&&Jt.skinning===!1||!$.isSkinnedMesh&&Jt.skinning===!0||$.isInstancedMesh&&Jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Jt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Jt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Jt.instancingMorph===!1&&$.morphTexture!==null||Jt.envMap!==kt||st.fog===!0&&Jt.fog!==Ut||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Ht.numPlanes||Jt.numIntersection!==Ht.numIntersection)||Jt.vertexAlphas!==Yt||Jt.vertexTangents!==te||Jt.morphTargets!==jt||Jt.morphNormals!==ee||Jt.morphColors!==Fe||Jt.toneMapping!==en||Jt.morphTargetsCount!==Ve)&&(re=!0):(re=!0,Jt.__version=st.version);let Ln=Jt.currentProgram;re===!0&&(Ln=gr(st,Z,$));let ha=!1,Nn=!1,yi=!1;const ke=Ln.getUniforms(),Pn=Jt.uniforms;if(Kt.useProgram(Ln.program)&&(ha=!0,Nn=!0,yi=!0),st.id!==it&&(it=st.id,Nn=!0),ha||Y!==w){Kt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ke.setValue(G,"projectionMatrix",w.projectionMatrix),ke.setValue(G,"viewMatrix",w.matrixWorldInverse);const Fn=ke.map.cameraPosition;Fn!==void 0&&Fn.setValue(G,oe.setFromMatrixPosition(w.matrixWorld)),Ue.logarithmicDepthBuffer&&ke.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ke.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Nn=!0,yi=!0)}if(Jt.needsLights&&(Ie.state.directionalShadowMap.length>0&&ke.setValue(G,"directionalShadowMap",Ie.state.directionalShadowMap,j),Ie.state.spotShadowMap.length>0&&ke.setValue(G,"spotShadowMap",Ie.state.spotShadowMap,j),Ie.state.pointShadowMap.length>0&&ke.setValue(G,"pointShadowMap",Ie.state.pointShadowMap,j)),$.isSkinnedMesh){ke.setOptional(G,$,"bindMatrix"),ke.setOptional(G,$,"bindMatrixInverse");const On=$.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),ke.setValue(G,"boneTexture",On.boneTexture,j))}$.isBatchedMesh&&(ke.setOptional(G,$,"batchingTexture"),ke.setValue(G,"batchingTexture",$._matricesTexture,j),ke.setOptional(G,$,"batchingIdTexture"),ke.setValue(G,"batchingIdTexture",$._indirectTexture,j),ke.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&ke.setValue(G,"batchingColorTexture",$._colorsTexture,j));const Mn=ot.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&de.update($,ot,Ln),(Nn||Jt.receiveShadow!==$.receiveShadow)&&(Jt.receiveShadow=$.receiveShadow,ke.setValue(G,"receiveShadow",$.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Pn.envMap.value=kt,Pn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Pn.envMapIntensity.value=Z.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=cP()),Nn&&(ke.setValue(G,"toneMappingExposure",A.toneMappingExposure),Jt.needsLights&&Lo(Pn,yi),Ut&&st.fog===!0&&ie.refreshFogUniforms(Pn,Ut),ie.refreshMaterialUniforms(Pn,st,gt,et,P.state.transmissionRenderTarget[w.id]),ju.upload(G,sc(Jt),Pn,j)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ju.upload(G,sc(Jt),Pn,j),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ke.setValue(G,"center",$.center),ke.setValue(G,"modelViewMatrix",$.modelViewMatrix),ke.setValue(G,"normalMatrix",$.normalMatrix),ke.setValue(G,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const On=st.uniformsGroups;for(let Fn=0,vr=On.length;Fn<vr;Fn++){const Ii=On[Fn];Mt.update(Ii,Ln),Mt.bind(Ii,Ln)}}return Ln}function Lo(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Xa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,Z,ot){const st=T.get(w);st.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=Z,T.get(w.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ot,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const ot=T.get(w);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const Wa=G.createFramebuffer();this.setRenderTarget=function(w,Z=0,ot=0){q=w,H=Z,at=ot;let st=null,$=!1,Ut=!1;if(w){const Pt=T.get(w);if(Pt.__useDefaultFramebuffer!==void 0){Kt.bindFramebuffer(G.FRAMEBUFFER,Pt.__webglFramebuffer),N.copy(w.viewport),B.copy(w.scissor),K=w.scissorTest,Kt.viewport(N),Kt.scissor(B),Kt.setScissorTest(K),it=-1;return}else if(Pt.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(Pt.__hasExternalTextures)j.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const te=w.depthTexture;if(Pt.__boundDepthTexture!==te){if(te!==null&&T.has(te)&&(w.width!==te.image.width||w.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}const kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ut=!0);const Yt=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[Z])?st=Yt[Z][ot]:st=Yt[Z],$=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?st=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?st=Yt[ot]:st=Yt,N.copy(w.viewport),B.copy(w.scissor),K=w.scissorTest}else N.copy(J).multiplyScalar(gt).floor(),B.copy(ct).multiplyScalar(gt).floor(),K=St;if(ot!==0&&(st=Wa),Kt.bindFramebuffer(G.FRAMEBUFFER,st)&&Kt.drawBuffers(w,st),Kt.viewport(N),Kt.scissor(B),Kt.setScissorTest(K),$){const Pt=T.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pt.__webglTexture,ot)}else if(Ut){const Pt=Z;for(let kt=0;kt<w.textures.length;kt++){const Yt=T.get(w.textures[kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,ot,Pt)}}else if(w!==null&&ot!==0){const Pt=T.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,ot)}it=-1},this.readRenderTargetPixels=function(w,Z,ot,st,$,Ut,Gt,Pt=0){if(!(w&&w.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(kt=kt[Gt]),kt){Kt.bindFramebuffer(G.FRAMEBUFFER,kt);try{const Yt=w.textures[Pt],te=Yt.format,jt=Yt.type;if(!Ue.textureFormatReadable(te)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(jt)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-st&&ot>=0&&ot<=w.height-$&&(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(Z,ot,st,$,At.convert(te),At.convert(jt),Ut))}finally{const Yt=q!==null?T.get(q).__webglFramebuffer:null;Kt.bindFramebuffer(G.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(w,Z,ot,st,$,Ut,Gt,Pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(kt=kt[Gt]),kt)if(Z>=0&&Z<=w.width-st&&ot>=0&&ot<=w.height-$){Kt.bindFramebuffer(G.FRAMEBUFFER,kt);const Yt=w.textures[Pt],te=Yt.format,jt=Yt.type;if(!Ue.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ee),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(Z,ot,st,$,At.convert(te),At.convert(jt),0);const Fe=q!==null?T.get(q).__webglFramebuffer:null;Kt.bindFramebuffer(G.FRAMEBUFFER,Fe);const en=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Nw(G,en,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ee),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer(ee),G.deleteSync(en),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,ot=0){const st=Math.pow(2,-ot),$=Math.floor(w.image.width*st),Ut=Math.floor(w.image.height*st),Gt=Z!==null?Z.x:0,Pt=Z!==null?Z.y:0;j.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Gt,Pt,$,Ut),Kt.unbindTexture()};const Ls=G.createFramebuffer(),qa=G.createFramebuffer();this.copyTextureToTexture=function(w,Z,ot=null,st=null,$=0,Ut=null){Ut===null&&($!==0?(Yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=$,$=0):Ut=0);let Gt,Pt,kt,Yt,te,jt,ee,Fe,en;const Je=w.isCompressedTexture?w.mipmaps[Ut]:w.image;if(ot!==null)Gt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,kt=ot.isBox3?ot.max.z-ot.min.z:1,Yt=ot.min.x,te=ot.min.y,jt=ot.isBox3?ot.min.z:0;else{const Mn=Math.pow(2,-$);Gt=Math.floor(Je.width*Mn),Pt=Math.floor(Je.height*Mn),w.isDataArrayTexture?kt=Je.depth:w.isData3DTexture?kt=Math.floor(Je.depth*Mn):kt=1,Yt=0,te=0,jt=0}st!==null?(ee=st.x,Fe=st.y,en=st.z):(ee=0,Fe=0,en=0);const Ve=At.convert(Z.format),Jt=At.convert(Z.type);let Ie;Z.isData3DTexture?(j.setTexture3D(Z,0),Ie=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(j.setTexture2DArray(Z,0),Ie=G.TEXTURE_2D_ARRAY):(j.setTexture2D(Z,0),Ie=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const re=G.getParameter(G.UNPACK_ROW_LENGTH),Ln=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ha=G.getParameter(G.UNPACK_SKIP_PIXELS),Nn=G.getParameter(G.UNPACK_SKIP_ROWS),yi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Je.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Je.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,jt);const ke=w.isDataArrayTexture||w.isData3DTexture,Pn=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const Mn=T.get(w),On=T.get(Z),Fn=T.get(Mn.__renderTarget),vr=T.get(On.__renderTarget);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Ii=0;Ii<kt;Ii++)ke&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(w).__webglTexture,$,jt+Ii),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(Z).__webglTexture,Ut,en+Ii)),G.blitFramebuffer(Yt,te,Gt,Pt,ee,Fe,Gt,Pt,G.DEPTH_BUFFER_BIT,G.NEAREST);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||T.has(w)){const Mn=T.get(w),On=T.get(Z);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,Ls),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,qa);for(let Fn=0;Fn<kt;Fn++)ke?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,$,jt+Fn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,$),Pn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,On.__webglTexture,Ut,en+Fn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,On.__webglTexture,Ut),$!==0?G.blitFramebuffer(Yt,te,Gt,Pt,ee,Fe,Gt,Pt,G.COLOR_BUFFER_BIT,G.NEAREST):Pn?G.copyTexSubImage3D(Ie,Ut,ee,Fe,en+Fn,Yt,te,Gt,Pt):G.copyTexSubImage2D(Ie,Ut,ee,Fe,Yt,te,Gt,Pt);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Pn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Ie,Ut,ee,Fe,en,Gt,Pt,kt,Ve,Jt,Je.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(Ie,Ut,ee,Fe,en,Gt,Pt,kt,Ve,Je.data):G.texSubImage3D(Ie,Ut,ee,Fe,en,Gt,Pt,kt,Ve,Jt,Je):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,ee,Fe,Gt,Pt,Ve,Jt,Je.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,ee,Fe,Je.width,Je.height,Ve,Je.data):G.texSubImage2D(G.TEXTURE_2D,Ut,ee,Fe,Gt,Pt,Ve,Jt,Je);G.pixelStorei(G.UNPACK_ROW_LENGTH,re),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ln),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ha),G.pixelStorei(G.UNPACK_SKIP_ROWS,Nn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,yi),Ut===0&&Z.generateMipmaps&&G.generateMipmap(Ie),Kt.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),Kt.unbindTexture()},this.resetState=function(){H=0,at=0,q=null,Kt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}}var _p=1/1e3,fP=1e3,hP=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*_p}get fixedDelta(){return this._fixedDelta*_p}set fixedDelta(i){this._fixedDelta=i*fP}get elapsed(){return this._elapsed*_p}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},dP=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),n=new fa;return n.setAttribute("position",new Pi(i,3)),n.setAttribute("uv",new Pi(t,2)),n})(),Ds=class zm{static get fullscreenGeometry(){return dP}constructor(t="Pass",n=new Fm,s=new df){this.name=t,this.renderer=null,this.scene=n,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let n=this.screen;n!==null?n.material=t:(n=new Zi(zm.fullscreenGeometry,t),n.frustumCulled=!1,this.scene===null&&(this.scene=new Fm),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,n=Jl){}render(t,n,s,o,c){throw new Error("Render method not implemented!")}setSize(t,n){}initialize(t,n,s){}dispose(){for(const t of Object.keys(this)){const n=this[t];(n instanceof ri||n instanceof Ao||n instanceof Dn||n instanceof zm)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},pP=class extends Ds{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,t,n,s,o){const c=i.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},mP=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,gP="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",vP=class extends oi{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new fn(null),depthBuffer:new fn(null),channelWeights:new fn(null),opacity:new fn(1)},blending:ji,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mP,vertexShader:gP}),this.depthFunc=nf}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(i){const t=i!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){const t=i!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(i){this.colorSpaceConversion!==i&&(i?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(i){i!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=i):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},_P=class extends Ds{constructor(i,t=!0){super("CopyPass"),this.fullscreenMaterial=new vP,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new ri(1,1,{minFilter:ln,magFilter:ln,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,t,n,s,o){this.fullscreenMaterial.inputBuffer=t.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,t){this.autoResize&&this.renderTarget.setSize(i,t)}initialize(i,t,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Yn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===hn&&(this.renderTarget.texture.colorSpace=hn))}},AS=new He,$E=class extends Ds{constructor(i=!0,t=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=t,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,t,n){this.color=i,this.depth=t,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,t,n,s,o){const c=this.overrideClearColor,u=this.overrideClearAlpha,f=i.getClearAlpha(),p=c!==null,d=u>=0;p?(i.getClearColor(AS),i.setClearColor(c,d?u:f)):d&&i.setClearAlpha(u),i.setRenderTarget(this.renderToScreen?null:t),i.clear(this.color,this.depth,this.stencil),p?i.setClearColor(AS,f):d&&i.setClearAlpha(f)}},xP=class extends Ds{constructor(i,t){super("MaskPass",i,t),this.needsSwap=!1,this.clearPass=new $E(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,t,n,s,o){const c=i.getContext(),u=i.state.buffers,f=this.scene,p=this.camera,d=this.clearPass,g=this.inverted?0:1,v=1-g;u.color.setMask(!1),u.depth.setMask(!1),u.color.setLocked(!0),u.depth.setLocked(!0),u.stencil.setTest(!0),u.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),u.stencil.setFunc(c.ALWAYS,g,4294967295),u.stencil.setClear(v),u.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?d.render(i,null):(d.render(i,t),d.render(i,n))),this.renderToScreen?(i.setRenderTarget(null),i.render(f,p)):(i.setRenderTarget(t),i.render(f,p),i.setRenderTarget(n),i.render(f,p)),u.color.setLocked(!1),u.depth.setLocked(!1),u.stencil.setLocked(!1),u.stencil.setFunc(c.EQUAL,1,4294967295),u.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),u.stencil.setLocked(!0)}},RS=class{constructor(i=null,{depthBuffer:t=!0,stencilBuffer:n=!1,multisampling:s=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,n,o,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new _P,this.depthTexture=null,this.passes=[],this.timer=new hP,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const t=this.inputBuffer,n=this.multisampling;n>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const t=i.getSize(new xe),n=i.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===Yn&&i.outputColorSpace===hn&&(this.inputBuffer.texture.colorSpace=hn,this.outputBuffer.texture.colorSpace=hn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(t.width,t.height);for(const o of this.passes)o.initialize(i,n,s)}}replaceRenderer(i,t=!0){const n=this.renderer,s=n.domElement.parentNode;return this.setRenderer(i),t&&s!==null&&(s.removeChild(n.domElement),s.appendChild(i.domElement)),n}createDepthTexture(){const i=this.depthTexture=new Mo;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=Ts,i.type=xo):i.type=Ki,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,t,n,s){const o=this.renderer,c=o===null?new xe:o.getDrawingBufferSize(new xe),u={minFilter:ln,magFilter:ln,stencilBuffer:t,depthBuffer:i,type:n},f=new ri(c.width,c.height,u);return s>0&&(f.samples=s),n===Yn&&o!==null&&o.outputColorSpace===hn&&(f.texture.colorSpace=hn),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(i){for(const t of this.passes)t.mainScene=i}setMainCamera(i){for(const t of this.passes)t.mainCamera=i}addPass(i,t){const n=this.passes,s=this.renderer,o=s.getDrawingBufferSize(new xe),c=s.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(i.setRenderer(s),i.setSize(o.width,o.height),i.initialize(s,c,u),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?n.splice(t,0,i):n.push(i),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(i of n)i.setDepthTexture(f)}else i.setDepthTexture(this.depthTexture)}removePass(i){const t=this.passes,n=t.indexOf(i);if(n!==-1&&t.splice(n,1).length>0){if(this.depthTexture!==null){const c=(f,p)=>f||p.needsDepthTexture;t.reduce(c,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===t.length&&(i.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const t=this.renderer,n=this.copyPass;let s=this.inputBuffer,o=this.outputBuffer,c=!1,u,f,p;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const d of this.passes)d.enabled&&(d.render(t,s,o,i,c),d.needsSwap&&(c&&(n.renderToScreen=d.renderToScreen,u=t.getContext(),f=t.state.buffers.stencil,f.setFunc(u.NOTEQUAL,1,4294967295),n.render(t,s,o,i,c),f.setFunc(u.EQUAL,1,4294967295)),p=s,s=o,o=p),d instanceof xP?c=!0:d instanceof pP&&(c=!1))}setSize(i,t,n){const s=this.renderer,o=s.getSize(new xe);(i===void 0||t===void 0)&&(i=o.width,t=o.height),(o.width!==i||o.height!==t)&&s.setSize(i,t,n);const c=s.getDrawingBufferSize(new xe);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const u of this.passes)u.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ds.fullscreenGeometry.dispose()}},ur={NONE:0,DEPTH:1,CONVOLUTION:2},Oe={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},yP=class{constructor(){this.shaderParts=new Map([[Oe.FRAGMENT_HEAD,null],[Oe.FRAGMENT_MAIN_UV,null],[Oe.FRAGMENT_MAIN_IMAGE,null],[Oe.VERTEX_HEAD,null],[Oe.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ur.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Rs}},xp=!1,CS=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let n;if(t.material.flatShading)switch(t.material.side){case vi:n=this.materialsFlatShadedDoubleSide;break;case wn:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(t.material.side){case vi:n=this.materialsDoubleSide;break;case wn:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=n[2]:t.isInstancedMesh?t.material=n[1]:t.material=n[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof oi))return i.clone();const t=i.uniforms,n=new Map;for(const o in t){const c=t[o].value;c.isRenderTargetTexture&&(t[o].value=null,n.set(o,c))}const s=i.clone();for(const o of n)t[o[0]].value=o[1],s.uniforms[o[0]].value=o[1];return s}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const t=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const n of t)n.uniforms=Object.assign({},i.uniforms),n.side=Va;t[2].skinning=!0,this.materialsBackSide=t.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},i.uniforms),s.side=wn,s}),this.materialsDoubleSide=t.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},i.uniforms),s.side=vi,s}),this.materialsFlatShaded=t.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},i.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=t.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},i.uniforms),s.flatShading=!0,s.side=wn,s}),this.materialsFlatShadedDoubleSide=t.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},i.uniforms),s.flatShading=!0,s.side=vi,s})}}render(i,t,n){const s=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,xp){const o=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),i.render(t,n);for(const c of o)c[0].material=c[1];this.meshCount!==o.size&&o.clear()}else{const o=t.overrideMaterial;t.overrideMaterial=this.material,i.render(t,n),t.overrideMaterial=o}i.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of i)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return xp}static set workaroundEnabled(i){xp=i}},Re={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},SP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",EP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",XP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",QP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JP="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$P=new Map([[Re.ADD,SP],[Re.ALPHA,MP],[Re.AVERAGE,EP],[Re.COLOR,TP],[Re.COLOR_BURN,bP],[Re.COLOR_DODGE,AP],[Re.DARKEN,RP],[Re.DIFFERENCE,CP],[Re.DIVIDE,wP],[Re.DST,null],[Re.EXCLUSION,DP],[Re.HARD_LIGHT,UP],[Re.HARD_MIX,LP],[Re.HUE,NP],[Re.INVERT,PP],[Re.INVERT_RGB,OP],[Re.LIGHTEN,FP],[Re.LINEAR_BURN,IP],[Re.LINEAR_DODGE,BP],[Re.LINEAR_LIGHT,zP],[Re.LUMINOSITY,VP],[Re.MULTIPLY,HP],[Re.NEGATION,GP],[Re.NORMAL,kP],[Re.OVERLAY,XP],[Re.PIN_LIGHT,WP],[Re.REFLECT,qP],[Re.SATURATION,YP],[Re.SCREEN,jP],[Re.SOFT_LIGHT,KP],[Re.SRC,ZP],[Re.SUBTRACT,QP],[Re.VIVID_LIGHT,JP]]),tO=class extends ws{constructor(i,t=1){super(),this._blendFunction=i,this.opacity=new fn(t)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return $P.get(this.blendFunction)}},tT=class extends ws{constructor(i,t,{attributes:n=ur.NONE,blendFunction:s=Re.NORMAL,defines:o=new Map,uniforms:c=new Map,extensions:u=null,vertexShader:f=null}={}){super(),this.name=i,this.renderer=null,this.attributes=n,this.fragmentShader=t,this.vertexShader=f,this.defines=o,this.uniforms=c,this.extensions=u,this.blendMode=new tO(s),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=Rs,this._outputColorSpace=aa}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,t=Jl){}update(i,t,n){}setSize(i,t){}initialize(i,t,n){}dispose(){for(const i of Object.keys(this)){const t=this[i];(t instanceof ri||t instanceof Ao||t instanceof Dn||t instanceof Ds)&&this[i].dispose()}}},wS=class extends Ds{constructor(i,t,n=null){super("RenderPass",i,t),this.needsSwap=!1,this.clearPass=new $E,this.overrideMaterialManager=n===null?null:new CS(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const t=this.overrideMaterialManager;i!==null?t!==null?t.setMaterial(i):this.overrideMaterialManager=new CS(i):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,t,n,s,o){const c=this.scene,u=this.camera,f=this.selection,p=u.layers.mask,d=c.background,g=i.shadowMap.autoUpdate,v=this.renderToScreen?null:t;f!==null&&u.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(i,t),i.setRenderTarget(v),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,c,u):i.render(c,u),u.layers.mask=p,c.background=d,i.shadowMap.autoUpdate=g}},eO=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,nO="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",iO=class extends oi{constructor(i,t,n,s,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ff.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new fn(null),depthBuffer:new fn(null),resolution:new fn(new xe),texelSize:new fn(new xe),cameraNear:new fn(.3),cameraFar:new fn(1e3),aspect:new fn(1),time:new fn(0)},blending:ji,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),i&&this.setShaderParts(i),t&&this.setDefines(t),n&&this.setUniforms(n),this.copyCameraSettings(s)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,t=Jl){this.depthBuffer=i,this.depthPacking=t}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=eO.replace(Oe.FRAGMENT_HEAD,i.get(Oe.FRAGMENT_HEAD)||"").replace(Oe.FRAGMENT_MAIN_UV,i.get(Oe.FRAGMENT_MAIN_UV)||"").replace(Oe.FRAGMENT_MAIN_IMAGE,i.get(Oe.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=nO.replace(Oe.VERTEX_HEAD,i.get(Oe.VERTEX_HEAD)||"").replace(Oe.VERTEX_MAIN_SUPPORT,i.get(Oe.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const t of i.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(i){for(const t of i.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(i){this.extensions={};for(const t of i)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof Ui?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,t){const n=this.uniforms;n.resolution.value.set(i,t),n.texelSize.value.set(1/i,1/t),n.aspect.value=i/t}static get Section(){return Oe}};function DS(i,t,n){for(const s of t){const o="$1"+i+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const u of n.entries())u[1]!==null&&n.set(u[0],u[1].replace(c,o))}}function aO(i,t,n){let s=t.getFragmentShader(),o=t.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),u=s!==void 0&&/mainUv/.test(s);if(n.attributes|=t.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(u&&(n.attributes&ur.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!c&&!u)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let d=p.get(Oe.FRAGMENT_HEAD)||"",g=p.get(Oe.FRAGMENT_MAIN_UV)||"",v=p.get(Oe.FRAGMENT_MAIN_IMAGE)||"",_=p.get(Oe.VERTEX_HEAD)||"",y=p.get(Oe.VERTEX_MAIN_SUPPORT)||"";const E=new Set,b=new Set;if(u&&(g+=`	${i}MainUv(UV);
`,n.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const D=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);y+=`	${i}MainSupport(`,y+=D?`vUv);
`:`);
`;for(const R of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const L of R[1].split(/\s*,\s*/))n.varyings.add(L),E.add(L),b.add(L);for(const R of o.matchAll(f))b.add(R[1])}for(const D of s.matchAll(f))b.add(D[1]);for(const D of t.defines.keys())b.add(D.replace(/\([\w\s,]*\)/g,""));for(const D of t.uniforms.keys())b.add(D);b.delete("while"),b.delete("for"),b.delete("if"),t.uniforms.forEach((D,R)=>n.uniforms.set(i+R.charAt(0).toUpperCase()+R.slice(1),D)),t.defines.forEach((D,R)=>n.defines.set(i+R.charAt(0).toUpperCase()+R.slice(1),D));const M=new Map([["fragment",s],["vertex",o]]);DS(i,b,n.defines),DS(i,b,M),s=M.get("fragment"),o=M.get("vertex");const x=t.blendMode;if(n.blendModes.set(x.blendFunction,x),c){t.inputColorSpace!==null&&t.inputColorSpace!==n.colorSpace&&(v+=t.inputColorSpace===hn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==aa?n.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(n.colorSpace=t.inputColorSpace);const D=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;v+=`${i}MainImage(color0, UV, `,(n.attributes&ur.DEPTH)!==0&&D.test(s)&&(v+="depth, ",n.readDepth=!0),v+=`color1);
	`;const R=i+"BlendOpacity";n.uniforms.set(R,x.opacity),v+=`color0 = blend${x.blendFunction}(color0, color1, ${R});

	`,d+=`uniform float ${R};

`}if(d+=s+`
`,o!==null&&(_+=o+`
`),p.set(Oe.FRAGMENT_HEAD,d),p.set(Oe.FRAGMENT_MAIN_UV,g),p.set(Oe.FRAGMENT_MAIN_IMAGE,v),p.set(Oe.VERTEX_HEAD,_),p.set(Oe.VERTEX_MAIN_SUPPORT,y),t.extensions!==null)for(const D of t.extensions)n.extensions.add(D)}}var US=class extends Ds{constructor(i,...t){super("EffectPass"),this.fullscreenMaterial=new iO(null,null,null,i),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const t of this.effects)t.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const t of this.effects)t.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const t=this.fullscreenMaterial;t.dithering=i,t.needsUpdate=!0}setEffects(i){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=i.sort((t,n)=>n.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const i=new yP;let t=0;for(const u of this.effects)if(u.blendMode.blendFunction===Re.DST)i.attributes|=u.getAttributes()&ur.DEPTH;else{if((i.attributes&u.getAttributes()&ur.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${u.name})`);aO("e"+t++,u,i)}let n=i.shaderParts.get(Oe.FRAGMENT_HEAD),s=i.shaderParts.get(Oe.FRAGMENT_MAIN_IMAGE),o=i.shaderParts.get(Oe.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const u of i.blendModes.values())n+=u.getShaderCode().replace(c,`blend${u.blendFunction}`)+`
`;(i.attributes&ur.DEPTH)!==0?(i.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===hn&&(s+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Oe.FRAGMENT_HEAD,n),i.shaderParts.set(Oe.FRAGMENT_MAIN_IMAGE,s),i.shaderParts.set(Oe.FRAGMENT_MAIN_UV,o);for(const[u,f]of i.shaderParts)f!==null&&i.shaderParts.set(u,f.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,t=Jl){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=t;for(const n of this.effects)n.setDepthTexture(i,t)}render(i,t,n,s,o){for(const c of this.effects)c.update(i,t,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=t.texture,c.time+=s*this.timeScale,i.setRenderTarget(this.renderToScreen?null:n),i.render(this.scene,this.camera)}}setSize(i,t){this.fullscreenMaterial.setSize(i,t);for(const n of this.effects)n.setSize(i,t)}initialize(i,t,n){this.renderer=i;for(const s of this.effects)s.initialize(i,t,n);this.updateMaterial(),n!==void 0&&n!==Yn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){i.type==="change"&&this.recompile()}};const sO=()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,t.width,t.height);const s=new Dn(t);s.minFilter=ln,s.magFilter=ln,s.generateMipmaps=!1;const o=[];let c=null;const u=64;let f=.1*64;const p=1/u,d=()=>{n.fillStyle="black",n.fillRect(0,0,t.width,t.height)},g=y=>{const E={x:y.x*64,y:(1-y.y)*64};let b=1;const M=L=>Math.sin(L*Math.PI/2),x=L=>-L*(L-2);y.age<u*.3?b=M(y.age/(u*.3)):b=x(1-(y.age-u*.3)/(u*.7))||0,b*=y.force;const D=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${b*255}`,R=320;n.shadowOffsetX=R,n.shadowOffsetY=R,n.shadowBlur=f,n.shadowColor=`rgba(${D},${.22*b})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(E.x-R,E.y-R,f,0,Math.PI*2),n.fill()};return{canvas:t,texture:s,addTouch:y=>{let E=0,b=0,M=0;if(c){const x=y.x-c.x,D=y.y-c.y;if(x===0&&D===0)return;const R=x*x+D*D,L=Math.sqrt(R);b=x/(L||1),M=D/(L||1),E=Math.min(R*1e4,1)}c={x:y.x,y:y.y},o.push({x:y.x,y:y.y,age:0,force:E,vx:b,vy:M})},update:()=>{d();for(let y=o.length-1;y>=0;y--){const E=o[y],b=E.force*p*(1-E.age/u);E.x+=E.vx*b,E.y+=E.vy*b,E.age++,E.age>u&&o.splice(y,1)}for(let y=0;y<o.length;y++)g(o[y]);s.needsUpdate=!0},set radiusScale(y){f=.1*64*y},get radiusScale(){return f/(.1*64)},size:64}},rO=(i,t)=>{const n=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new tT("LiquidEffect",n,{uniforms:new Map([["uTexture",new fn(i)],["uStrength",new fn(t?.strength??.025)],["uTime",new fn(0)],["uFreq",new fn(t?.freq??4.5)]])})},LS={square:0,circle:1,triangle:2,diamond:3},oO=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,lO=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,yp=10,cO=({variant:i="square",pixelSize:t=3,color:n="#B19EEF",className:s,style:o,antialias:c=!0,patternScale:u=2,patternDensity:f=1,liquid:p=!1,liquidStrength:d=.1,liquidRadius:g=1,pixelSizeJitter:v=0,enableRipples:_=!0,rippleIntensityScale:y=1,rippleThickness:E=.1,rippleSpeed:b=.3,liquidWobbleSpeed:M=4.5,autoPauseOffscreen:x=!0,speed:D=.5,transparent:R=!0,edgeFade:L=.5,noiseAmount:P=0})=>{const z=Nt.useRef(null),I=Nt.useRef({visible:!0}),k=Nt.useRef(D),A=Nt.useRef(null),U=Nt.useRef(null);return Nt.useEffect(()=>{const H=z.current;if(!H)return;k.current=D;const at=["antialias","liquid","noiseAmount"],q={antialias:c,liquid:p,noiseAmount:P};let it=!1;if(!A.current)it=!0;else if(U.current){for(const Y of at)if(U.current[Y]!==q[Y]){it=!0;break}}if(it){if(A.current){const Vt=A.current;Vt.resizeObserver?.disconnect(),cancelAnimationFrame(Vt.raf),Vt.quad?.geometry.dispose(),Vt.material.dispose(),Vt.composer?.dispose(),Vt.renderer.dispose(),Vt.renderer.domElement.parentElement===H&&H.removeChild(Vt.renderer.domElement),A.current=null}const Y=document.createElement("canvas"),N=new uP({canvas:Y,antialias:c,alpha:!0,powerPreference:"high-performance"});N.domElement.style.width="100%",N.domElement.style.height="100%",N.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.appendChild(N.domElement),R?N.setClearAlpha(0):N.setClearColor(0,1);const B={uResolution:{value:new xe(0,0)},uTime:{value:0},uColor:{value:new He(n)},uClickPos:{value:Array.from({length:yp},()=>new xe(-1,-1))},uClickTimes:{value:new Float32Array(yp)},uShapeType:{value:LS[i]??0},uPixelSize:{value:t*N.getPixelRatio()},uScale:{value:u},uDensity:{value:f},uPixelJitter:{value:v},uEnableRipples:{value:_?1:0},uRippleSpeed:{value:b},uRippleThickness:{value:E},uRippleIntensity:{value:y},uEdgeFade:{value:L}},K=new Fm,dt=new df(-1,1,1,-1,0,1),mt=new oi({vertexShader:oO,fragmentShader:lO,uniforms:B,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Pm}),O=new ic(2,2),et=new Zi(O,mt);K.add(et);const gt=new p2,Tt=()=>{const Vt=H.clientWidth||1,se=H.clientHeight||1;N.setSize(Vt,se,!1),B.uResolution.value.set(N.domElement.width,N.domElement.height),A.current?.composer&&A.current.composer.setSize(N.domElement.width,N.domElement.height),B.uPixelSize.value=t*N.getPixelRatio()};Tt();const It=new ResizeObserver(Tt);It.observe(H);const ct=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Vt=new Uint32Array(1);return window.crypto.getRandomValues(Vt),Vt[0]/4294967295}return Math.random()})()*1e3;let St,Dt,Ot;if(p){Dt=sO(),Dt.radiusScale=g,St=new RS(N);const Vt=new wS(K,dt);Ot=rO(Dt.texture,{strength:d,freq:M});const se=new US(dt,Ot);se.renderToScreen=!0,St.addPass(Vt),St.addPass(se)}if(P>0){St||(St=new RS(N),St.addPass(new wS(K,dt)));const Vt=new tT("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new fn(0)],["uAmount",new fn(P)]])}),se=new US(dt,Vt);se.renderToScreen=!0,St&&St.passes.length>0&&St.passes.forEach(G=>G.renderToScreen=!1),St.addPass(se)}St&&St.setSize(N.domElement.width,N.domElement.height);const fe=Vt=>{const se=N.domElement.getBoundingClientRect(),G=N.domElement.width/se.width,be=N.domElement.height/se.height,_e=(Vt.clientX-se.left)*G,Ue=(se.height-(Vt.clientY-se.top))*be;return{fx:_e,fy:Ue,w:N.domElement.width,h:N.domElement.height}},ze=Vt=>{const{fx:se,fy:G}=fe(Vt),be=A.current?.clickIx??0;B.uClickPos.value[be].set(se,G),B.uClickTimes.value[be]=B.uTime.value,A.current&&(A.current.clickIx=(be+1)%yp)},oe=Vt=>{if(!Dt)return;const{fx:se,fy:G,w:be,h:_e}=fe(Vt);Dt.addTouch({x:se/be,y:G/_e})};N.domElement.addEventListener("pointerdown",ze,{passive:!0}),N.domElement.addEventListener("pointermove",oe,{passive:!0});let le=0;const ye=()=>{if(x&&!I.current.visible){le=requestAnimationFrame(ye);return}B.uTime.value=ct+gt.getElapsedTime()*k.current,Ot&&(Ot.uniforms.get("uTime").value=B.uTime.value),St?(Dt&&Dt.update(),St.passes.forEach(Vt=>{const se=Vt.effects;se&&se.forEach(G=>{const be=G.uniforms?.get("uTime");be&&(be.value=B.uTime.value)})}),St.render()):N.render(K,dt),le=requestAnimationFrame(ye)};le=requestAnimationFrame(ye),A.current={renderer:N,scene:K,camera:dt,material:mt,clock:gt,clickIx:0,uniforms:B,resizeObserver:It,raf:le,quad:et,timeOffset:ct,composer:St,touch:Dt,liquidEffect:Ot}}else{const Y=A.current;if(Y.uniforms.uShapeType.value=LS[i]??0,Y.uniforms.uPixelSize.value=t*Y.renderer.getPixelRatio(),Y.uniforms.uColor.value.set(n),Y.uniforms.uScale.value=u,Y.uniforms.uDensity.value=f,Y.uniforms.uPixelJitter.value=v,Y.uniforms.uEnableRipples.value=_?1:0,Y.uniforms.uRippleIntensity.value=y,Y.uniforms.uRippleThickness.value=E,Y.uniforms.uRippleSpeed.value=b,Y.uniforms.uEdgeFade.value=L,R?Y.renderer.setClearAlpha(0):Y.renderer.setClearColor(0,1),Y.liquidEffect){const N=Y.liquidEffect;N&&(N.value=d);const B=Y.liquidEffect.uniforms.get("uFreq");B&&(B.value=M)}Y.touch&&(Y.touch.radiusScale=g)}return U.current=q,()=>{if(A.current&&it||!A.current)return;const Y=A.current;Y.resizeObserver?.disconnect(),cancelAnimationFrame(Y.raf),Y.quad?.geometry.dispose(),Y.material.dispose(),Y.composer?.dispose(),Y.renderer.dispose(),Y.renderer.domElement.parentElement===H&&H.removeChild(Y.renderer.domElement),A.current=null}},[c,p,P,t,u,f,_,y,E,b,v,L,R,d,g,M,x,i,n,D]),ve.jsx("div",{ref:z,className:`pixel-blast-container ${s??""}`,style:o,"aria-label":"PixelBlast interactive background"})},uO="/AstriOrb/assets/logo-pub3eiVb.png",fO="data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E",hO="data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.52894 2.0306L3.11194 0.794686C3.12764 0.759297 3.15328 0.729227 3.18574 0.708121C3.2182 0.687015 3.25608 0.675781 3.2948 0.675781C3.33352 0.675781 3.3714 0.687015 3.40386 0.708121C3.43632 0.729227 3.46196 0.759297 3.47766 0.794686L4.06066 2.0306L5.36388 2.22992C5.53104 2.25535 5.59761 2.47074 5.47682 2.59415L4.53371 3.55521L4.75621 4.91303C4.785 5.08767 4.60999 5.22042 4.46041 5.13815L3.2948 4.49683L2.12919 5.13815C1.97961 5.22042 1.8046 5.08767 1.83339 4.91303L2.05589 3.55558L1.11278 2.59415C0.991994 2.47074 1.05856 2.25535 1.22572 2.22992L2.52894 2.0306Z' fill='white' stroke='white' stroke-width='0.56093' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";function dO(){return ve.jsxs("div",{className:"App",children:[ve.jsx(cO,{variant:"square",pixelSize:4,color:"#B19EEF",patternScale:2,patternDensity:1,pixelSizeJitter:0,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquid:!1,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.5,edgeFade:.25,transparent:!0,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),ve.jsx("div",{className:"card-container-flex",children:ve.jsx($3,{name:"MOHAMMED HASHIM",title:"MANAGING DIRECTOR",avatarUrl:uO,grainUrl:fO,iconUrl:hO,enableTilt:!0,enableMobileTilt:!1,behindGlowEnabled:!0,behindGlowColor:"#8b5cf6",innerGradient:"linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)"},"v2-star-pattern")})]})}mA.createRoot(document.getElementById("root")).render(ve.jsx(Nt.StrictMode,{children:ve.jsx(dO,{})}));
