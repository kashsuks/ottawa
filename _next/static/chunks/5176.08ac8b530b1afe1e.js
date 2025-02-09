(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5176],{6916:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(4848),o=n(5892);function u(e){let{id:t,title:n,slug:u,format:i,location:l,children:c}=e;return(0,r.jsxs)(o.az,{sx:{p:4,pt:0,pb:2,borderRadius:4,boxShadow:"0 0 8px rgba(0, 0, 0, 0.125)",bg:"white",background:"url(/elements/indexcard.png)",backgroundSize:"cover"},children:[(0,r.jsx)(o.DZ,{as:"h2",sx:{minWidth:"max-content",textAlign:"center"},children:n}),(0,r.jsxs)("p",{style:{fontWeight:"bold",minWidth:"max-content",textAlign:"center",backgroundColor:"white",fontFamily:"moonblossom"},children:[i.toUpperCase()," EVENT IN ",l.toUpperCase()]}),t&&(0,r.jsxs)(o.az,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,r.jsx)(o.N_,{href:"/".concat(u),sx:{textAlign:"center",display:"block",fontWeight:"bold",backgroundColor:"white",fontFamily:"moonblossom"},children:"WEBSITE"}),(0,r.jsx)("span",{sx:{transform:"scale(2)"},children:"・"}),(0,r.jsx)(o.N_,{href:"https://forms.hackclub.com/scrapyard-signup?event=".concat(t),sx:{textAlign:"center",display:"block",fontWeight:"bold",backgroundColor:"white",fontFamily:"moonblossom"},children:"SIGNUP"})]}),c]})}},5176:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(4848),o=n(6540),u=n(6916),i=n(6162),l=n(3148),c=n(9368),a=n(4489),s=n(3489),f=n(7340),p=n(4639);n(9869);var d=n(3481),h=n.n(d);let m=new(h()).Icon({iconUrl:"/elements/star-sticker.svg",iconSize:new(h()).Point(60,60),popupAnchor:[0,0]}),v=new(h()).Icon({iconUrl:"/elements/thumbtack.png",iconSize:new(h()).Point(30,30),popupAnchor:[0,0]}),g=i.W;function b(e){let{latitude:t,longitude:n}=e,r=(0,l.U$)().map;return(0,o.useEffect)(()=>{t&&n&&r.setView([t,n],10)},[t,n,r]),null}function x(e){let{full:t,latitude:n,longitude:i}=e,[l,d]=(0,o.useState)([]),[h,x]=(0,o.useState)([35.683,-25.099]);return(0,o.useEffect)(()=>{n&&i&&x([n,i])},[n,i]),(0,o.useEffect)(()=>{(async function(){try{let e=await fetch("/api/locations"),t=await e.json();d(t)}catch(e){console.error("Error fetching events:",e)}})()},[]),(0,r.jsxs)(g,{center:h,zoom:n&&i?10:2.5,style:{width:t?"80vw":"80%",height:"100vh",zIndex:0},zoomControl:!t,children:[(0,r.jsx)(b,{latitude:n,longitude:i}),(0,r.jsx)(c.e,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n&&i&&(0,r.jsx)(a.p,{position:[n,i],icon:m,children:(0,r.jsx)(s.z,{children:"You are here!"})}),l.map((e,t)=>(0,r.jsxs)(a.p,{position:[e.lat,e.lng],icon:e.flagship?m:v,children:[(0,r.jsx)(s.z,{children:(0,r.jsx)(u.A,{id:e.id,title:e.name,slug:e.slug,format:e.format,location:e.location})}),(0,r.jsx)(f.m,{children:e.name})]},t)),t&&(0,r.jsx)(p.p,{position:"topright"})]})}},9869:()=>{},3148:(e,t,n)=>{"use strict";n.d(t,{U$:()=>c,W4:()=>u,fB:()=>o,hL:()=>l});var r=n(6540);function o(e){return Object.freeze({__version:1,map:e})}function u(e,t){return Object.freeze({...e,...t})}let i=(0,r.createContext)(null),l=i.Provider;function c(){let e=(0,r.useContext)(i);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}},6667:(e,t,n)=>{"use strict";n.d(t,{K:()=>u,Q:()=>o});var r=n(6540);function o(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function u(e,t){return null==t?function(t,n){let o=(0,r.useRef)();return o.current||(o.current=e(t,n)),o}:function(n,o){let u=(0,r.useRef)();u.current||(u.current=e(n,o));let i=(0,r.useRef)(n),{instance:l}=u.current;return(0,r.useEffect)(function(){i.current!==n&&(t(l,n,i.current),i.current=n)},[l,n,o]),u}}},6414:(e,t,n)=>{"use strict";n.d(t,{T7:()=>p,Nq:()=>d,wk:()=>h,X3:()=>m});var r=n(6540),o=n(961),u=n(3148);function i(e){return(0,r.forwardRef)(function(t,n){let{instance:o}=e(t).current;return(0,r.useImperativeHandle)(n,()=>o),null})}var l=n(6667);function c(e,t){let n=(0,r.useRef)(t);(0,r.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function a(e,t){let n=(0,r.useRef)();(0,r.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}var s=n(7685);function f(e){return function(t){var n;let o=(0,u.U$)(),i=e((0,s.P)(t,o),o);return c(o.map,t.attribution),a(i.current,t.eventHandlers),n=i.current,(0,r.useEffect)(function(){return(o.layerContainer??o.map).addLayer(n.instance),function(){o.layerContainer?.removeLayer(n.instance),o.map.removeLayer(n.instance)}},[o,n]),i}}function p(e){var t;return i((t=(0,l.K)(function(t,n){return(0,l.Q)(e(t),n)}),function(e){let n=(0,u.U$)(),o=t(e,n),{instance:i}=o.current,l=(0,r.useRef)(e.position),{position:c}=e;return(0,r.useEffect)(function(){return i.addTo(n.map),function(){i.remove()}},[n.map,i]),(0,r.useEffect)(function(){null!=c&&c!==l.current&&(i.setPosition(c),l.current=c)},[i,c]),o}))}function d(e,t){var n;return n=f((0,l.K)(e,t)),(0,r.forwardRef)(function(e,t){let{instance:o,context:i}=n(e).current;return(0,r.useImperativeHandle)(t,()=>o),null==e.children?null:r.createElement(u.hL,{value:i},e.children)})}function h(e,t){var n,i;return n=(0,l.K)(e),i=function(e,r){let o=(0,u.U$)(),i=n((0,s.P)(e,o),o);return c(o.map,e.attribution),a(i.current,e.eventHandlers),t(i.current,o,e,r),i},(0,r.forwardRef)(function(e,t){let[n,u]=(0,r.useState)(!1),{instance:l}=i(e,u).current;(0,r.useImperativeHandle)(t,()=>l),(0,r.useEffect)(function(){n&&l.update()},[l,n,e.children]);let c=l._contentNode;return c?(0,o.createPortal)(e.children,c):null})}function m(e,t){return i(f((0,l.K)(e,t)))}},7685:(e,t,n)=>{"use strict";function r(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}n.d(t,{P:()=>r})},6162:(e,t,n)=>{"use strict";n.d(t,{W:()=>l});var r=n(3148),o=n(3481),u=n(6540);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let l=(0,u.forwardRef)(function({bounds:e,boundsOptions:t,center:n,children:l,className:c,id:a,placeholder:s,style:f,whenReady:p,zoom:d,...h},m){let[v]=(0,u.useState)({className:c,id:a,style:f}),[g,b]=(0,u.useState)(null);(0,u.useImperativeHandle)(m,()=>g?.map??null,[g]);let x=(0,u.useCallback)(u=>{if(null!==u&&null===g){let i=new o.Map(u,h);null!=n&&null!=d?i.setView(n,d):null!=e&&i.fitBounds(e,t),null!=p&&i.whenReady(p),b((0,r.fB)(i))}},[]);(0,u.useEffect)(()=>()=>{g?.map.remove()},[g]);let y=g?u.createElement(r.hL,{value:g},l):s??null;return u.createElement("div",i({},v,{ref:x}),y)})},4489:(e,t,n)=>{"use strict";n.d(t,{p:()=>l});var r=n(6414),o=n(6667),u=n(3148),i=n(3481);let l=(0,r.Nq)(function({position:e,...t},n){let r=new i.Marker(e,t);return(0,o.Q)(r,(0,u.W4)(n,{overlayContainer:r}))},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())})},3489:(e,t,n)=>{"use strict";n.d(t,{z:()=>l});var r=n(6414),o=n(6667),u=n(3481),i=n(6540);let l=(0,r.wk)(function(e,t){let n=new u.Popup(e,t.overlayContainer);return(0,o.Q)(n,t)},function(e,t,{position:n},r){(0,i.useEffect)(function(){let{instance:o}=e;function u(e){e.popup===o&&(o.update(),r(!0))}function i(e){e.popup===o&&r(!1)}return t.map.on({popupopen:u,popupclose:i}),null==t.overlayContainer?(null!=n&&o.setLatLng(n),o.openOn(t.map)):t.overlayContainer.bindPopup(o),function(){t.map.off({popupopen:u,popupclose:i}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(o)}},[e,t,r,n])})},9368:(e,t,n)=>{"use strict";n.d(t,{e:()=>l});var r=n(6414),o=n(7685),u=n(6667),i=n(3481);let l=(0,r.X3)(function({url:e,...t},n){let r=new i.TileLayer(e,(0,o.P)(t,n));return(0,u.Q)(r,n)},function(e,t,n){!function(e,t,n){let{opacity:r,zIndex:o}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=o&&o!==n.zIndex&&e.setZIndex(o)}(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)})},7340:(e,t,n)=>{"use strict";n.d(t,{m:()=>l});var r=n(6414),o=n(6667),u=n(3481),i=n(6540);let l=(0,r.wk)(function(e,t){let n=new u.Tooltip(e,t.overlayContainer);return(0,o.Q)(n,t)},function(e,t,{position:n},r){(0,i.useEffect)(function(){let o=t.overlayContainer;if(null==o)return;let{instance:u}=e,i=e=>{e.tooltip===u&&(null!=n&&u.setLatLng(n),u.update(),r(!0))},l=e=>{e.tooltip===u&&r(!1)};return o.on({tooltipopen:i,tooltipclose:l}),o.bindTooltip(u),function(){o.off({tooltipopen:i,tooltipclose:l}),null!=o._map&&o.unbindTooltip()}},[e,t,r,n])})},4639:(e,t,n)=>{"use strict";n.d(t,{p:()=>u});var r=n(6414),o=n(3481);let u=(0,r.T7)(function(e){return new o.Control.Zoom(e)})}}]);