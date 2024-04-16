import{cy as S}from"./index-BHUrCk0l.js";function d(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),n.push.apply(n,e)}return n}function m(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(e){S(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function i(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var E=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),v=function(){return Math.random().toString(36).substring(7).split("").join(".")},P={INIT:"@@redux/INIT"+v(),REPLACE:"@@redux/REPLACE"+v(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+v()}};function I(r){if(typeof r!="object"||r===null)return!1;for(var t=r;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function R(r,t,n){var e;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(i(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(i(1));return n(R)(r,t)}if(typeof r!="function")throw new Error(i(2));var u=r,a=t,p=[],c=p,f=!1;function w(){c===p&&(c=p.slice())}function g(){if(f)throw new Error(i(3));return a}function O(o){if(typeof o!="function")throw new Error(i(4));if(f)throw new Error(i(5));var b=!0;return w(),c.push(o),function(){if(b){if(f)throw new Error(i(6));b=!1,w();var s=c.indexOf(o);c.splice(s,1),p=null}}}function y(o){if(!I(o))throw new Error(i(7));if(typeof o.type>"u")throw new Error(i(8));if(f)throw new Error(i(9));try{f=!0,a=u(a,o)}finally{f=!1}for(var b=p=c,l=0;l<b.length;l++){var s=b[l];s()}return o}function N(o){if(typeof o!="function")throw new Error(i(10));u=o,y({type:P.REPLACE})}function A(){var o,b=O;return o={subscribe:function(s){if(typeof s!="object"||s===null)throw new Error(i(11));function h(){s.next&&s.next(g())}h();var x=b(h);return{unsubscribe:x}}},o[E]=function(){return this},o}return y({type:P.INIT}),e={dispatch:y,subscribe:O,getState:g,replaceReducer:N},e[E]=A,e}function j(r,t){return function(){return t(r.apply(this,arguments))}}function D(r,t){if(typeof r=="function")return j(r,t);if(typeof r!="object"||r===null)throw new Error(i(16));var n={};for(var e in r){var u=r[e];typeof u=="function"&&(n[e]=j(u,t))}return n}function T(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.length===0?function(e){return e}:t.length===1?t[0]:t.reduce(function(e,u){return function(){return e(u.apply(void 0,arguments))}})}function M(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(e){return function(){var u=e.apply(void 0,arguments),a=function(){throw new Error(i(15))},p={getState:u.getState,dispatch:function(){return a.apply(void 0,arguments)}},c=t.map(function(f){return f(p)});return a=T.apply(void 0,c)(u.dispatch),m(m({},u),{},{dispatch:a})}}}export{M as a,D as b,R as c,T as d};
