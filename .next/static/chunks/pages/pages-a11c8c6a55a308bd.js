(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{7814:function(i,e,b){"use strict";b.d(e,{G:function(){return c}});var j=b(3636),f=b(5697),a=b.n(f),d=b(7294);function k(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function l(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?k(Object(b),!0).forEach(function(a){n(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function m(a){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return p(a)||q(a)||r(a)||t()}function p(a){if(Array.isArray(a))return s(a)}function q(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function r(a,c){if(a){if("string"==typeof a)return s(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return s(a,c)}}function s(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function t(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(a){var b;return(b=a,(b-=0)==b)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(b,a){return a?a.toUpperCase():""})).substr(0,1).toLowerCase()+a.substr(1)}var v=["style"];function g(e,a){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var f=(a.children||[]).map(function(a){return g(e,a)}),b=Object.keys(a.attributes||{}).reduce(function(c,b){var e,d=a.attributes[b];switch(b){case"class":c.attrs.className=d,delete a.attributes.class;break;case"style":c.attrs.style=(e=d).split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,b){var d,e=b.indexOf(":"),c=u(b.slice(0,e)),f=b.slice(e+1).trim();return c.startsWith("webkit")?a[(d=c).charAt(0).toUpperCase()+d.slice(1)]=f:a[c]=f,a},{});break;default:0===b.indexOf("aria-")||0===b.indexOf("data-")?c.attrs[b.toLowerCase()]=d:c.attrs[u(b)]=d}return c},{attrs:{}}),d=c.style,h=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,v);return b.attrs.style=l(l({},b.attrs.style),void 0===d?{}:d),e.apply(void 0,[a.tag,l(l({},b.attrs),h)].concat(o(f)))}var h=!1;try{h=!0}catch(w){}function x(a){return a&&"object"===m(a)&&a.prefix&&a.iconName&&a.icon?a:j.Qc.icon?j.Qc.icon(a):null===a?null:a&&"object"===m(a)&&a.prefix&&a.iconName?a:Array.isArray(a)&&2===a.length?{prefix:a[0],iconName:a[1]}:"string"==typeof a?{prefix:"fas",iconName:a}:void 0}function y(b,a){return Array.isArray(a)&&a.length>0|| !Array.isArray(a)&&a?n({},b,a):{}}var c=d.forwardRef(function(b,H){var a,d,k,m,p,q,r,s,t,u,v,w,A,B,C,D,e,g,f,i,E,I=b.icon,J=b.mask,K=b.symbol,L=b.className,M=b.title,N=b.titleId,O=b.maskId,F=x(I),P=y("classes",[].concat(o((k=(a=b).beat,m=a.fade,p=a.beatFade,q=a.bounce,r=a.shake,s=a.flash,t=a.spin,u=a.spinPulse,v=a.spinReverse,w=a.pulse,A=a.fixedWidth,B=a.inverse,C=a.border,D=a.listItem,e=a.flip,g=a.size,f=a.rotation,i=a.pull,E=(d={"fa-beat":k,"fa-fade":m,"fa-beat-fade":p,"fa-bounce":q,"fa-shake":r,"fa-flash":s,"fa-spin":t,"fa-spin-reverse":v,"fa-spin-pulse":u,"fa-pulse":w,"fa-fw":A,"fa-inverse":B,"fa-border":C,"fa-li":D,"fa-flip":!0===e,"fa-flip-horizontal":"horizontal"===e||"both"===e,"fa-flip-vertical":"vertical"===e||"both"===e},n(d,"fa-".concat(g),null!=g),n(d,"fa-rotate-".concat(f),null!=f&&0!==f),n(d,"fa-pull-".concat(i),null!=i),n(d,"fa-swap-opacity",a.swapOpacity),d),Object.keys(E).map(function(a){return E[a]?a:null}).filter(function(a){return a}))),o(L.split(" ")))),Q=y("transform","string"==typeof b.transform?j.Qc.transform(b.transform):b.transform),R=y("mask",x(J)),G=(0,j.qv)(F,l(l(l(l({},P),Q),R),{},{symbol:K,title:M,titleId:N,maskId:O}));if(!G)return!function(){if(!h&&console&&"function"==typeof console.error){var a;(a=console).error.apply(a,arguments)}}("Could not find icon",F),null;var S=G.abstract,T={ref:H};return Object.keys(b).forEach(function(a){c.defaultProps.hasOwnProperty(a)||(T[a]=b[a])}),z(S[0],T)});c.displayName="FontAwesomeIcon",c.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},c.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var z=g.bind(null,d.createElement)},7086:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages",function(){return c(8913)}])},8913:function(c,b,a){"use strict";a.r(b),a.d(b,{default:function(){return m}});var d=a(5893),e=a(7294),f=a(9473),g=a(1163),h=a(2664),i=a(8146),j=a(9363),k=a(4987),l=function(m){var n=m.slug,o=(0,f.v9)(function(a){return a.websiteSetup}).websiteSetup,b=(0,e.useState)(null),a=b[0],p=b[1],c=(0,e.useState)(null),l=c[0],q=c[1];(0,e.useEffect)(function(){q((0,j.Z)())},[]);var r=(0,g.useRouter)();return(0,e.useEffect)(function(){if(o){var a=o.payload.customPages.find(function(a){return a.slug===n});a?p(a):r.push("/404")}},[a,n,o]),(0,d.jsxs)(d.Fragment,{children:[a&&(0,d.jsx)(k.Z,{title:a.page_name}),(0,d.jsx)(h.Z,{childrenClasses:"pt-0 pb-0",children:(0,d.jsxs)("div",{className:"terms-condition-page w-full bg-white pb-[30px]",children:[(0,d.jsx)("div",{className:"w-full mb-[30px]",children:a&&(0,d.jsx)(i.Z,{breadcrumb:[{name:l&&l.home,path:"/"},{name:a.page_name,path:"/pages?custom=".concat(a.slug)},],title:a.page_name})}),(0,d.jsx)("div",{className:"w-full pb-[120px]",children:(0,d.jsx)("div",{className:"container-x mx-auto content-body",children:a&&(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:a.description}})})})]})})]})};function m(){var a=(0,g.useRouter)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l,{slug:a.query.custom})})}},1546:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(c){var b=c.paths,a=void 0===b?[{name:"home",path:"/"}]:b;return(0,d.jsx)(d.Fragment,{children:a&&a.length>0&&(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden",children:a.map(function(a){return(0,d.jsxs)("span",{children:[(0,d.jsx)("a",{href:a.path,children:(0,d.jsx)("span",{className:"mx-1 capitalize",children:a.name})}),(0,d.jsx)("span",{className:"sperator",children:"/"})]},Math.random())})})},Math.random())})}},4987:function(d,b,a){"use strict";var e=a(5893),c=a(9008),f=a.n(c);a(7294);var g=a(8522);b.Z=function(b){var c=b.title,a=(0,g.Z)().favicon;return(0,e.jsxs)(f(),{children:[(0,e.jsx)("title",{children:c}),(0,e.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,e.jsx)("link",{rel:"icon",href:"".concat(a?"https://shopus.minionionbd.com/"+a:"/favico.svg")})]})}},8146:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(5893),e=a(1546);function f(a){var c=a.title,b=a.breadcrumb;return(0,d.jsx)("div",{className:"page-title-wrapper w-full h-[173px] py-10 bg-qpurplelow/10",children:(0,d.jsxs)("div",{className:"container-x mx-auto",children:[(0,d.jsx)("div",{className:"mb-5",children:(0,d.jsx)(e.Z,{paths:void 0===b?[]:b})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)("h1",{className:"text-3xl font-semibold text-qblack capitalize",children:c})})]})})}},9008:function(a,c,b){a.exports=b(5443)},2703:function(a,e,b){"use strict";var f=b(414);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},5697:function(a,c,b){a.exports=b(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(a){a.O(0,[664,774,888,179],function(){var b;return a(a.s=7086)}),_N_E=a.O()}])