(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-380e90a2"],{"9c0e":function(e,t,a){},b75e:function(e,t,a){"use strict";var n=a("9c0e"),r=a.n(n);r.a},ddd8:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-view",attrs:{tabindex:"0"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.handleSpaceDown(t))},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.handleSpaceUp(t))}}},[a("vue-draggable-resizable",{style:e.screenStyle,attrs:{w:1920,h:1080,"class-name":"screen-box","class-name-draggable":"screen-box-draggable",draggable:e.screenDraggable,resizable:!1}},[a("div",{staticClass:"screen"},e._l(e.chartData.elements,function(t,n){return a("vue-drag-resize",{key:n,attrs:{isActive:t.active,parentScaleX:e.scale,parentScaleY:e.scale,x:t.x,y:t.y,w:t.w,h:t.h,parentLimitation:!0,parentW:1920,parentH:1080,aspectRatio:!1,minw:20,minh:20,z:n,isDraggable:!0,isResizable:!0},on:{activated:function(t){return e.handleActivated(n)},resizing:function(a){return e.handleResize(t,arguments[0])},dragging:function(a){return e.handleDrag(t,arguments[0])}}},[a("div",{staticClass:"filler",staticStyle:{width:"100%",height:"100%",background:"#666"}})])}),1)])],1)},r=[],c={props:["scale"],data:function(){return{screenDraggable:!1,elements:[{name:"keykey1",x:10,y:100,w:192,h:108}]}},computed:{chartData:function(){return this.$parent.chartData},screenStyle:function(){return{transform:"scale(".concat(this.scale,")")}}},methods:{handleSpaceDown:function(){this.screenDraggable=!0},handleSpaceUp:function(){this.screenDraggable=!1},handleActivated:function(e){this.$parent.setActiveComponentByIndex(e)},handleResize:function(e,t){var a=e;a.x=t.left,a.y=t.top,a.w=t.width,a.h=t.height},handleDrag:function(e,t){var a=e;a.x=t.left,a.y=t.top}}},i=c,s=(a("b75e"),a("2877")),l=Object(s["a"])(i,n,r,!1,null,"2c86752b",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-380e90a2.60db6821.js.map