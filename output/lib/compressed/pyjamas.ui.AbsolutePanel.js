$pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"]=function(c){if($pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["AbsolutePanel"]=$pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"];pyjamas.ui["AbsolutePanel"].__was_initialized__=true;if((c===null)||(typeof c=="undefined")){c="pyjamas.ui.AbsolutePanel"}var b=pyjamas.ui["AbsolutePanel"].__name__=c;var a=pyjamas.ui["AbsolutePanel"];pyjamas.ui["AbsolutePanel"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["AbsolutePanel"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["AbsolutePanel"]["ComplexPanel"]=pyjslib.___import___("ComplexPanel.ComplexPanel","pyjamas.ui",null,false);pyjamas.ui["AbsolutePanel"]["AbsolutePanel"]=(function(){var f=$pyjs__class_instance("AbsolutePanel");var e=new Object();var d;e.__md5__="9e102ada0f415425ca4807cc82ba8a48";d=$pyjs__bind_method(f,"__init__",function(){if(this.__is_instance__===true){var g=this;var i=arguments.length>=1?arguments[arguments.length-1]:arguments[arguments.length];if(typeof i!="object"||i.__name__!="dict"||typeof i.$pyjs_is_kwarg=="undefined"){i=arguments[arguments.length+1]}else{delete i["$pyjs_is_kwarg"]}}else{var g=arguments[0];var i=arguments.length>=2?arguments[arguments.length-1]:arguments[arguments.length];if(typeof i!="object"||i.__name__!="dict"||typeof i.$pyjs_is_kwarg=="undefined"){i=arguments[arguments.length+1]}else{delete i["$pyjs_is_kwarg"]}}if(typeof i=="undefined"){i=pyjslib.__empty_dict();if(typeof g!="undefined"){if(g!==null&&typeof g["$pyjs_is_kwarg"]!="undefined"){i=g;g=arguments[1]}}else{}}var h;if(pyjslib.bool(i.has_key(String("Element")))){h=i.pop(String("Element"))}else{h=pyjamas.ui["AbsolutePanel"]["DOM"]["createDiv"]()}g.setElement(h);pyjamas.ui["AbsolutePanel"]["DOM"]["setStyleAttribute"](g.getElement(),String("position"),String("relative"));pyjamas.ui["AbsolutePanel"]["DOM"]["setStyleAttribute"](g.getElement(),String("overflow"),String("hidden"));$pyjs_kwargs_call(pyjamas.ui["AbsolutePanel"]["ComplexPanel"],"__init__",null,i,[{},g]);return null},1,[null,["kwargs"],["self"]]);e.__init__=d;d=$pyjs__bind_method(f,"add",function(h,j,i){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1];j=arguments[2];i=arguments[3]}if(typeof j=="undefined"){j=arguments.callee.__args__[4][1]}if(typeof i=="undefined"){i=arguments.callee.__args__[5][1]}pyjamas.ui["AbsolutePanel"]["ComplexPanel"]["add"](g,h,g.getElement());if(pyjslib.bool((j!==null))){g.setWidgetPosition(h,j,i)}return null},1,[null,null,["self"],["widget"],["left",null],["top",null]]);e.add=d;d=$pyjs__bind_method(f,"setWidgetPosition",function(j,m,l){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];j=arguments[1];m=arguments[2];l=arguments[3]}var i,k,n;g.checkWidgetParent(j);i=j.getElement();if(pyjslib.bool((pyjslib.bool(n=pyjslib.op_eq(m,(typeof($usub1=1)=="number"?-$usub1:pyjslib.op_usub($usub1))))?pyjslib.op_eq(l,(typeof($usub2=1)=="number"?-$usub2:pyjslib.op_usub($usub2))):n))){pyjamas.ui["AbsolutePanel"]["DOM"]["setStyleAttribute"](i,String("left"),String(""));pyjamas.ui["AbsolutePanel"]["DOM"]["setStyleAttribute"](i,String("top"),String(""));pyjamas.ui["AbsolutePanel"]["DOM"]["setStyleAttribute"](i,String("position"),String("static"))}else{pyjamas.ui["AbsolutePanel"]["DOM"]["setStyleAttribute"](i,String("position"),String("absolute"));pyjamas.ui["AbsolutePanel"]["DOM"]["setStyleAttribute"](i,String("left"),pyjslib.sprintf(String("%dpx"),m));pyjamas.ui["AbsolutePanel"]["DOM"]["setStyleAttribute"](i,String("top"),pyjslib.sprintf(String("%dpx"),l))}return null},1,[null,null,["self"],["widget"],["left"],["top"]]);e.setWidgetPosition=d;d=$pyjs__bind_method(f,"getWidgetLeft",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.checkWidgetParent(h);return pyjamas.ui["AbsolutePanel"]["DOM"]["getIntAttribute"](h.getElement(),String("offsetLeft"))},1,[null,null,["self"],["widget"]]);e.getWidgetLeft=d;d=$pyjs__bind_method(f,"getWidgetTop",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.checkWidgetParent(h);return pyjamas.ui["AbsolutePanel"]["DOM"]["getIntAttribute"](h.getElement(),String("offsetTop"))},1,[null,null,["self"],["widget"]]);e.getWidgetTop=d;d=$pyjs__bind_method(f,"checkWidgetParent",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}if(pyjslib.bool(!pyjslib.op_eq(h.getParent(),g))){console.error(String("Widget must be a child of this panel."))}return null},1,[null,null,["self"],["widget"]]);e.checkWidgetParent=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["AbsolutePanel"]["ComplexPanel"]))})();pyjamas.ui["AbsolutePanel"]["Factory"]["registerClass"](String("pyjamas.ui.AbsolutePanel"),pyjamas.ui["AbsolutePanel"]["AbsolutePanel"]);return this};