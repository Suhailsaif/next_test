(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{7814:function(i,e,b){"use strict";b.d(e,{G:function(){return c}});var j=b(3636),f=b(5697),a=b.n(f),d=b(7294);function k(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function l(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?k(Object(b),!0).forEach(function(a){n(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function m(a){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return p(a)||q(a)||r(a)||t()}function p(a){if(Array.isArray(a))return s(a)}function q(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function r(a,c){if(a){if("string"==typeof a)return s(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return s(a,c)}}function s(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function t(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(a){var b;return(b=a,(b-=0)==b)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(b,a){return a?a.toUpperCase():""})).substr(0,1).toLowerCase()+a.substr(1)}var v=["style"];function g(e,a){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var f=(a.children||[]).map(function(a){return g(e,a)}),b=Object.keys(a.attributes||{}).reduce(function(c,b){var e,d=a.attributes[b];switch(b){case"class":c.attrs.className=d,delete a.attributes.class;break;case"style":c.attrs.style=(e=d).split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,b){var d,e=b.indexOf(":"),c=u(b.slice(0,e)),f=b.slice(e+1).trim();return c.startsWith("webkit")?a[(d=c).charAt(0).toUpperCase()+d.slice(1)]=f:a[c]=f,a},{});break;default:0===b.indexOf("aria-")||0===b.indexOf("data-")?c.attrs[b.toLowerCase()]=d:c.attrs[u(b)]=d}return c},{attrs:{}}),d=c.style,h=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,v);return b.attrs.style=l(l({},b.attrs.style),void 0===d?{}:d),e.apply(void 0,[a.tag,l(l({},b.attrs),h)].concat(o(f)))}var h=!1;try{h=!0}catch(w){}function x(a){return a&&"object"===m(a)&&a.prefix&&a.iconName&&a.icon?a:j.Qc.icon?j.Qc.icon(a):null===a?null:a&&"object"===m(a)&&a.prefix&&a.iconName?a:Array.isArray(a)&&2===a.length?{prefix:a[0],iconName:a[1]}:"string"==typeof a?{prefix:"fas",iconName:a}:void 0}function y(b,a){return Array.isArray(a)&&a.length>0|| !Array.isArray(a)&&a?n({},b,a):{}}var c=d.forwardRef(function(b,H){var a,d,k,m,p,q,r,s,t,u,v,w,A,B,C,D,e,g,f,i,E,I=b.icon,J=b.mask,K=b.symbol,L=b.className,M=b.title,N=b.titleId,O=b.maskId,F=x(I),P=y("classes",[].concat(o((k=(a=b).beat,m=a.fade,p=a.beatFade,q=a.bounce,r=a.shake,s=a.flash,t=a.spin,u=a.spinPulse,v=a.spinReverse,w=a.pulse,A=a.fixedWidth,B=a.inverse,C=a.border,D=a.listItem,e=a.flip,g=a.size,f=a.rotation,i=a.pull,E=(d={"fa-beat":k,"fa-fade":m,"fa-beat-fade":p,"fa-bounce":q,"fa-shake":r,"fa-flash":s,"fa-spin":t,"fa-spin-reverse":v,"fa-spin-pulse":u,"fa-pulse":w,"fa-fw":A,"fa-inverse":B,"fa-border":C,"fa-li":D,"fa-flip":!0===e,"fa-flip-horizontal":"horizontal"===e||"both"===e,"fa-flip-vertical":"vertical"===e||"both"===e},n(d,"fa-".concat(g),null!=g),n(d,"fa-rotate-".concat(f),null!=f&&0!==f),n(d,"fa-pull-".concat(i),null!=i),n(d,"fa-swap-opacity",a.swapOpacity),d),Object.keys(E).map(function(a){return E[a]?a:null}).filter(function(a){return a}))),o(L.split(" ")))),Q=y("transform","string"==typeof b.transform?j.Qc.transform(b.transform):b.transform),R=y("mask",x(J)),G=(0,j.qv)(F,l(l(l(l({},P),Q),R),{},{symbol:K,title:M,titleId:N,maskId:O}));if(!G)return!function(){if(!h&&console&&"function"==typeof console.error){var a;(a=console).error.apply(a,arguments)}}("Could not find icon",F),null;var S=G.abstract,T={ref:H};return Object.keys(b).forEach(function(a){c.defaultProps.hasOwnProperty(a)||(T[a]=b[a])}),z(S[0],T)});c.displayName="FontAwesomeIcon",c.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},c.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var z=g.bind(null,d.createElement)},1546:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(c){var b=c.paths,a=void 0===b?[{name:"home",path:"/"}]:b;return(0,d.jsx)(d.Fragment,{children:a&&a.length>0&&(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden",children:a.map(function(a){return(0,d.jsxs)("span",{children:[(0,d.jsx)("a",{href:a.path,children:(0,d.jsx)("span",{className:"mx-1 capitalize",children:a.name})}),(0,d.jsx)("span",{className:"sperator",children:"/"})]},Math.random())})})},Math.random())})}},2058:function(e,b,a){"use strict";a.d(b,{Z:function(){return k}});var f=a(5893),c=a(5675),g=a.n(c),d=a(1664),h=a.n(d),i=a(7294),j=a(9363);function k(c){var e=c.className,b=c.datas,d=(0,i.useState)(null),a=d[0],k=d[1];return(0,i.useEffect)(function(){k((0,j.Z)())},[]),(0,f.jsxs)("div",{className:"blog-card-wrapper w-full group ".concat(e||""),children:[(0,f.jsx)("div",{className:"img w-full h-[290px] rounded-t overflow-hidden",children:(0,f.jsx)("div",{className:"w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out",children:(0,f.jsx)(g(),{layout:"fill",src:"".concat(b.picture),alt:"blog",className:"w-full h-full object-cover"})})}),(0,f.jsxs)("div",{className:"p-[24px]",children:[(0,f.jsxs)("div",{className:"short-data flex space-x-9 items-center mb-3",children:[(0,f.jsxs)("div",{className:"flex space-x-1.5 items-center",children:[(0,f.jsx)("span",{className:"text-qpurple",children:(0,f.jsx)("svg",{width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-current",children:(0,f.jsx)("path",{d:"M1.761 14.9996C1.55973 14.9336 1.35152 14.8896 1.16065 14.7978C0.397206 14.4272 -0.02963 13.6273 0.00160193 12.743C0.0397743 11.6936 0.275749 10.7103 0.765049 9.7966C1.42439 8.56373 2.36829 7.65741 3.59327 7.07767C3.67309 7.04098 3.7529 7.00428 3.85007 6.95658C2.68061 5.9512 2.17396 4.67062 2.43422 3.10017C2.58691 2.18285 3.03804 1.42698 3.72514 0.847238C5.24163 -0.42967 7.34458 -0.216852 8.60773 1.1738C9.36424 2.00673 9.70779 3.01211 9.61757 4.16426C9.52734 5.31642 9.01375 6.23374 8.14619 6.94924C8.33359 7.04098 8.50363 7.11436 8.6702 7.20609C10.1485 8.006 11.1618 9.24254 11.6997 10.9011C11.9253 11.5945 12.0328 12.3137 11.9912 13.0476C11.9357 14.0163 11.2243 14.8235 10.3151 14.9703C10.2908 14.974 10.2665 14.9886 10.2387 14.9996C7.41051 14.9996 4.58575 14.9996 1.761 14.9996ZM6.00507 13.8475C7.30293 13.8475 8.60079 13.8401 9.89518 13.8512C10.5684 13.8548 10.9571 13.3338 10.9015 12.7577C10.8807 12.5486 10.8773 12.3394 10.846 12.1303C10.6309 10.6185 9.92294 9.41133 8.72225 8.5784C7.17106 7.50331 5.50883 7.3602 3.84313 8.23349C2.05944 9.16916 1.15718 10.7506 1.09125 12.8568C1.08778 13.0072 1.12595 13.1723 1.18494 13.3044C1.36193 13.6934 1.68466 13.8438 2.08026 13.8438C3.392 13.8475 4.70027 13.8475 6.00507 13.8475ZM5.99119 6.53462C7.38969 6.54195 8.53833 5.33843 8.54527 3.85238C8.55221 2.37733 7.41745 1.16647 6.00507 1.15179C4.62046 1.13344 3.45794 2.35531 3.45099 3.8377C3.44405 5.31275 4.58922 6.52728 5.99119 6.53462Z"})})}),(0,f.jsx)("span",{className:"text-base text-qgray capitalize",children:a&&a.By_Admin})]}),(0,f.jsxs)("div",{className:"flex space-x-1.5 items-center",children:[(0,f.jsx)("span",{className:"text-qpurple",children:(0,f.jsxs)("svg",{className:"fill-current",width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsx)("path",{d:"M3.73636 12.2092C3.29706 12.1112 2.89189 11.9493 2.52936 11.698C1.55268 11.0206 1.02382 10.0834 1.01102 8.89479C0.989696 7.06292 0.993961 5.23105 1.00676 3.39919C1.02382 1.68235 2.23934 0.297797 3.94108 0.0379278C4.11168 0.0123668 4.29081 0.00384653 4.46567 0.00384653C7.15688 0.00384653 9.8481 -0.000413627 12.5393 0.00384653C14.2069 0.00810668 15.5717 1.10723 15.9172 2.73034C15.9684 2.97317 15.9897 3.22452 15.9897 3.47587C15.994 5.25236 15.9982 7.0331 15.994 8.80958C15.9897 10.5136 14.8637 11.8939 13.2047 12.2134C12.9701 12.2603 12.7312 12.2688 12.4924 12.2688C11.2939 12.2731 10.0997 12.2731 8.90127 12.2688C8.77332 12.2688 8.66669 12.2986 8.56007 12.3711C7.33175 13.1933 6.10343 14.0112 4.87511 14.8334C4.71731 14.9399 4.55097 15.0166 4.35478 14.9953C3.98799 14.957 3.74489 14.6843 3.74062 14.3009C3.73636 13.6747 3.74062 13.0442 3.74062 12.4179C3.73636 12.354 3.73636 12.2901 3.73636 12.2092ZM5.09262 13.0442C5.16939 12.9973 5.21631 12.9632 5.26322 12.9334C6.1802 12.3242 7.09717 11.715 8.00988 11.0973C8.20607 10.9652 8.40226 10.9098 8.63684 10.9098C9.94193 10.9141 11.2428 10.9141 12.5478 10.9098C13.742 10.9056 14.6334 10.0109 14.6334 8.81384C14.6334 7.02458 14.6334 5.23531 14.6334 3.44605C14.6334 2.26173 13.7378 1.36284 12.5521 1.36284C9.85663 1.36284 7.15688 1.36284 4.46141 1.36284C3.27147 1.36284 2.37582 2.26173 2.37582 3.45457C2.37582 5.23957 2.37582 7.02032 2.37582 8.80532C2.37582 9.9726 3.2075 10.8459 4.37611 10.9056C4.84952 10.9311 5.09262 11.1825 5.09689 11.6554C5.09262 12.1069 5.09262 12.5543 5.09262 13.0442Z"}),(0,f.jsx)("path",{d:"M8.48317 5.45638C7.13543 5.45638 5.79196 5.45638 4.44422 5.45638C3.93668 5.45638 3.60401 4.99628 3.77461 4.54044C3.87697 4.26353 4.09022 4.12295 4.38024 4.09313C4.43142 4.08887 4.48687 4.08887 4.53805 4.08887C7.17808 4.08887 9.81385 4.08887 12.4539 4.08887C12.569 4.08887 12.6885 4.09739 12.7994 4.13147C13.115 4.22945 13.2984 4.5447 13.2514 4.88552C13.2088 5.19651 12.9273 5.44786 12.5946 5.45212C12.2108 5.46064 11.8269 5.45212 11.4473 5.45212C10.4621 5.45638 9.47265 5.45638 8.48317 5.45638Z"}),(0,f.jsx)("path",{d:"M8.48349 8.17895C7.58784 8.17895 6.69646 8.18321 5.80507 8.17895C5.32739 8.17469 5.01178 7.78701 5.11841 7.3397C5.18238 7.05853 5.42975 6.84552 5.71977 6.82848C5.76242 6.82422 5.80507 6.82422 5.84772 6.82422C7.6177 6.82422 9.39194 6.82422 11.1619 6.82422C11.5586 6.82422 11.8272 7.02871 11.8955 7.37378C11.9765 7.78275 11.6822 8.16617 11.2643 8.17895C10.8889 8.19173 10.5094 8.18321 10.1298 8.18321C9.5796 8.17895 9.03368 8.17895 8.48349 8.17895Z"})]})}),(0,f.jsxs)("span",{className:"text-base text-qgray",children:[b.comments_length," ",a&&a.Comments]})]})]}),(0,f.jsxs)("div",{className:"details",children:[(0,f.jsx)(h(),{href:"/blogs/blog?slug=".concat(b.slug),passHref:!0,children:(0,f.jsx)("a",{rel:"noopener noreferrer",children:(0,f.jsx)("h1",{className:"text-[24px] text-qblack leading-[30px] group-hover:text-qpurple font-semibold line-clamp-2 mb-1 capitalizen cursor-pointer",children:b.title})})}),(0,f.jsx)("div",{className:"w-full h-[1px] bg-qpurplelow/10 mt-4"}),(0,f.jsx)(h(),{href:"/blogs/blog?slug=".concat(b.slug),passHref:!0,children:(0,f.jsx)("a",{children:(0,f.jsxs)("div",{className:"flex items-center space-x-2 mt-5 text-qgray group-hover:text-qpurple",children:[(0,f.jsx)("span",{className:"text-base font-semibold",children:a&&a.View_More}),(0,f.jsx)("span",{children:(0,f.jsxs)("svg",{width:"17",height:"14",viewBox:"0 0 17 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-current",children:[(0,f.jsx)("path",{d:"M14.0225 6.00243C13.9998 6.03738 13.9772 6.06941 13.9545 6.10436C13.8724 6.10727 13.7904 6.11601 13.7083 6.11601C9.93521 6.11601 6.16215 6.11601 2.38909 6.11601C1.87111 6.11601 1.35313 6.10728 0.835147 6.12475C0.351131 6.14514 0.00863998 6.51501 0.000148475 6.981C-0.00834303 7.45864 0.3483 7.83725 0.837977 7.8722C0.956858 7.88094 1.07857 7.87511 1.20028 7.87511C5.33565 7.87803 9.46818 7.87803 13.6035 7.88094C13.7253 7.88094 13.8498 7.88094 13.9715 7.88094C14.0026 7.93627 14.031 7.9887 14.0621 8.04403C13.9404 8.12267 13.7988 8.18383 13.697 8.28576C12.3355 9.67499 10.9797 11.0671 9.62669 12.4651C9.26155 12.8437 9.25306 13.3767 9.58423 13.732C9.91823 14.0902 10.4419 14.099 10.8127 13.7233C12.7855 11.702 14.7556 9.6779 16.7199 7.64794C17.0907 7.26351 17.0851 6.73053 16.7171 6.34901C14.7697 4.33652 12.8167 2.32987 10.858 0.329035C10.7278 0.195063 10.5466 0.0873038 10.3683 0.0319679C10.0088 -0.0757916 9.63235 0.116428 9.44554 0.451356C9.26438 0.78046 9.31533 1.20859 9.60687 1.51148C10.6768 2.62111 11.7524 3.72492 12.8308 4.82581C13.2271 5.2219 13.6262 5.60925 14.0225 6.00243Z"}),(0,f.jsx)("path",{d:"M14.0225 6.00241C13.6262 5.60923 13.2243 5.22188 12.8336 4.82288C11.7552 3.72199 10.6796 2.61818 9.60971 1.50855C9.31816 1.20566 9.26721 0.77753 9.44837 0.448427C9.63518 0.113498 10.0116 -0.0787213 10.3711 0.0290382C10.5466 0.0814617 10.7278 0.192134 10.8608 0.326105C12.8195 2.32694 14.7697 4.33359 16.7199 6.34608C17.0879 6.72469 17.0936 7.26058 16.7228 7.64501C14.7584 9.67497 12.7884 11.6991 10.8155 13.7203C10.4475 14.0989 9.92106 14.0873 9.58706 13.7291C9.25589 13.3737 9.26155 12.8408 9.62952 12.4622C10.9825 11.0642 12.3383 9.67206 13.6998 8.28284C13.8017 8.1809 13.9404 8.11974 14.0649 8.0411C14.0338 7.98577 14.0055 7.93334 13.9743 7.87801C13.8526 7.87801 13.7281 7.87801 13.6064 7.87801C9.47101 7.8751 5.33848 7.8751 1.20311 7.87218C1.0814 7.87218 0.962519 7.87801 0.840808 7.86927C0.3483 7.84015 -0.00834304 7.45862 0.00014847 6.98098C0.00863998 6.515 0.351131 6.14512 0.832316 6.12764C1.3503 6.10726 1.86828 6.11891 2.38626 6.11891C6.16215 6.11599 9.93521 6.11599 13.7083 6.11599C13.7904 6.11599 13.8724 6.10726 13.9574 6.10143C13.9772 6.0694 13.9998 6.03445 14.0225 6.00241Z"})]})})]})})})]})]})]})}},8650:function(c,a,b){"use strict";var d=b(5893);a.Z=function(a){var c=a.datas,b=void 0===c?[]:c,f=a.startLength,e=a.endLength,g=a.children;return(0,d.jsx)(d.Fragment,{children:b&&b.length>=e&&b.slice(f,e).map(function(a){return g({datas:a})})})}},8146:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(5893),e=a(1546);function f(a){var c=a.title,b=a.breadcrumb;return(0,d.jsx)("div",{className:"page-title-wrapper w-full h-[173px] py-10 bg-qpurplelow/10",children:(0,d.jsxs)("div",{className:"container-x mx-auto",children:[(0,d.jsx)("div",{className:"mb-5",children:(0,d.jsx)(e.Z,{paths:void 0===b?[]:b})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)("h1",{className:"text-3xl font-semibold text-qblack capitalize",children:c})})]})})}},2703:function(a,e,b){"use strict";var f=b(414);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},5697:function(a,c,b){a.exports=b(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}])