$pyjs.loaded_modules["pyjamas.ui.SimplePanel"]=function(b){if($pyjs.loaded_modules["pyjamas.ui.SimplePanel"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.SimplePanel"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["SimplePanel"]=$pyjs.loaded_modules["pyjamas.ui.SimplePanel"];pyjamas.ui["SimplePanel"].__was_initialized__=true;if((b===null)||(typeof b=="undefined")){b="pyjamas.ui.SimplePanel"}var a=pyjamas.ui["SimplePanel"].__name__=b;var c=pyjamas.ui["SimplePanel"];pyjamas.ui["SimplePanel"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["SimplePanel"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["SimplePanel"]["Panel"]=pyjslib.___import___("Panel.Panel","pyjamas.ui",null,false);pyjamas.ui["SimplePanel"]["SimplePanel"]=(function(){var f=$pyjs__class_instance("SimplePanel");var e=new Object();var d;e.__md5__="1887d142d930bf4e3c0a6a8a51883438";d=$pyjs__bind_method(f,"__init__",function(h){if(this.__is_instance__===true){var g=this;var i=arguments.length>=2?arguments[arguments.length-1]:arguments[arguments.length];if(typeof i!="object"||i.__name__!="dict"||typeof i.$pyjs_is_kwarg=="undefined"){i=arguments[arguments.length+1]}else{delete i["$pyjs_is_kwarg"]}}else{var g=arguments[0];h=arguments[1];var i=arguments.length>=3?arguments[arguments.length-1]:arguments[arguments.length];if(typeof i!="object"||i.__name__!="dict"||typeof i.$pyjs_is_kwarg=="undefined"){i=arguments[arguments.length+1]}else{delete i["$pyjs_is_kwarg"]}}if(typeof i=="undefined"){i=pyjslib.__empty_dict();if(typeof h!="undefined"){if(h!==null&&typeof h["$pyjs_is_kwarg"]!="undefined"){i=h;h=arguments[2]}}else{if(typeof g!="undefined"){if(g!==null&&typeof g["$pyjs_is_kwarg"]!="undefined"){i=g;g=arguments[2]}}else{}}}if(typeof h=="undefined"){h=arguments.callee.__args__[3][1]}if(pyjslib.bool((h===null))){h=pyjamas.ui["SimplePanel"]["DOM"]["createDiv"]()}g.setElement(h);$pyjs_kwargs_call(pyjamas.ui["SimplePanel"]["Panel"],"__init__",null,i,[{},g]);return null},1,[null,["kwargs"],["self"],["Element",null]]);e.__init__=d;d=$pyjs__bind_method(f,"add",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}if(pyjslib.bool((g.getWidget()!==null))){console.error(String("SimplePanel can only contain one child widget"));return null}g.setWidget(h);return null},1,[null,null,["self"],["widget"]]);e.add=d;d=$pyjs__bind_method(f,"getWidget",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var g,k,j,i;if(pyjslib.bool(pyjslib.len((((g=h.children)!==null&(k=h).__is_instance__)&&typeof g=="function"?pyjslib.getattr(k,"children"):h.children)))){return(((j=h.children)!==null&(i=h).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"children"):h.children).__getitem__(0)}return null},1,[null,null,["self"]]);e.getWidget=d;d=$pyjs__bind_method(f,"remove",function(j){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];j=arguments[1]}var i,h;if(pyjslib.bool(!pyjslib.op_eq(g.getWidget(),j))){return false}g.disown(j);(((i=g.children)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"children"):g.children).__delitem__(0);return true},1,[null,null,["self"],["widget"]]);e.remove=d;d=$pyjs__bind_method(f,"getContainerElement",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return g.getElement()},1,[null,null,["self"]]);e.getContainerElement=d;d=$pyjs__bind_method(f,"setWidget",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}if(pyjslib.bool(pyjslib.op_eq(g.getWidget(),h))){return null}if(pyjslib.bool((g.getWidget()!==null))){g.remove(g.getWidget())}if(pyjslib.bool((h!==null))){g.adopt(h,g.getContainerElement());g.children["append"](h)}return null},1,[null,null,["self"],["widget"]]);e.setWidget=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["SimplePanel"]["Panel"]))})();pyjamas.ui["SimplePanel"]["Factory"]["registerClass"](String("pyjamas.ui.SimplePanel"),pyjamas.ui["SimplePanel"]["SimplePanel"]);return this};