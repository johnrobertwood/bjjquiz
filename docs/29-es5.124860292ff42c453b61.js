!function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{TkC1:function(t,i,n){"use strict";n.r(i),n.d(i,"amplify_picker",function(){return o});var c=n("hKmi"),r=n("JIIv"),a=n("sPRy"),o=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Object(c.k)(this,e),this.pickerText=a.a.PICKER_TEXT,this.acceptValue="*/*"}var i,n,o;return i=t,(n=[{key:"render",value:function(){var e=this;return Object(c.i)("div",{class:"picker"},Object(c.i)("slot",{name:"picker"},Object(c.i)("amplify-button",null,r.a.get(this.pickerText))),Object(c.i)("input",{title:r.a.get(this.pickerText),type:"file",accept:this.acceptValue,onChange:function(t){return e.inputHandler(t)}}))}}])&&e(i.prototype,n),o&&e(i,o),t}();o.style=".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}"}}])}();