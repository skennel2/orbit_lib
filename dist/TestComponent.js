!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("keycode")):"function"==typeof define&&define.amd?define(["react","keycode"],t):"object"==typeof exports?exports.Orbit=t(require("react"),require("keycode")):e.Orbit=t(e.react,e.keycode)}(window,function(e,t){return function(e){function t(t){for(var o,c,i=t[0],f=t[1],a=t[2],s=0,p=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in f)Object.prototype.hasOwnProperty.call(f,o)&&(e[o]=f[o]);for(l&&l(t);p.length;)p.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,i=1;i<n.length;i++){var f=n[i];0!==r[f]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={2:0},u=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonpOrbit=window.webpackJsonpOrbit||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=f;return u.push([6,0]),n()}([function(t,n){t.exports=e},,function(e,n){e.exports=t},,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var o=n(0),r=n.n(o),u=n(1),c=n.n(u),i=n(2),f=n.n(i);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return(n=s(this,(e=p(t)).call.apply(e,[this].concat(r)))).handleKeyDown=function(e,t){var o=n.state.refs;switch(f()(t)){case"right":o[(e+1)%o.length].focus();break;case"left":if(0===e){o[o.length-1].focus();break}o[e-1].focus()}},n.handleTouchTap=function(){console.log("버튼이 클릭되었습니다.")},n}var n,u,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o["Component"]),n=t,(u=[{key:"componentDidMount",value:function(){this.refs.focus1.focus(),this.setState({refs:[this.refs.focus1,this.refs.focus2,this.refs.focus3,this.refs.focus4]})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(c.a,{ref:"focus1",label:"Focus1",onKeyDown:this.handleKeyDown.bind(this,0),onTouchTap:this.handleTouchTap})," ",r.a.createElement(c.a,{ref:"focus2",label:"Focus2",blue:!0,onKeyDown:this.handleKeyDown.bind(this,1)})," ",r.a.createElement(c.a,{ref:"focus3",label:"Focus3 (Link)",href:"http://google.com",onKeyDown:this.handleKeyDown.bind(this,2)})," ",r.a.createElement(c.a,{ref:"focus4",label:"Focus4",disabled:!0,onKeyDown:this.handleKeyDown.bind(this,3)}))}}])&&l(n.prototype,u),i&&l(n,i),t}()}])});