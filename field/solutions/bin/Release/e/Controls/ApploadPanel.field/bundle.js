var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([
/*!************************!*\
  !*** ./field/index.ts ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.field=void 0;var r=function(){function e(){}return e.prototype.init=function(e,t,n,r){this.mainContainer=document.createElement("div"),this.mainContainer.style.minHeight="100%",this.mainContainer.style.position="relative",this.mainContainer.style.maxWidth="100%",this.mainContainer.style.overflowY="auto",this.mainContainer.style.overflowX="hidden",this.mainContainer.id="pcfContainer",r.appendChild(this.mainContainer);var i=document.createElement("p");i.innerHTML=e.parameters.sampleProperty.toString(),this.mainContainer.appendChild(i)},e.prototype.updateView=function(e){},e.prototype.getOutputs=function(){return{}},e.prototype.destroy=function(){},e}();t.field=r}]);
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('ApploadPanel.field', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.field);
} else {
	var ApploadPanel = ApploadPanel || {};
	ApploadPanel.field = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.field;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}