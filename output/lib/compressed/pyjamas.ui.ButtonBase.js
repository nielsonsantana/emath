$pyjs.loaded_modules["pyjamas.ui.ButtonBase"]=function(c){if($pyjs.loaded_modules["pyjamas.ui.ButtonBase"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.ButtonBase"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["ButtonBase"]=$pyjs.loaded_modules["pyjamas.ui.ButtonBase"];pyjamas.ui["ButtonBase"].__was_initialized__=true;if((c===null)||(typeof c=="undefined")){c="pyjamas.ui.ButtonBase"}var b=pyjamas.ui["ButtonBase"].__name__=c;var a=pyjamas.ui["ButtonBase"];pyjamas.ui["ButtonBase"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["ButtonBase"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["ButtonBase"]["FocusWidget"]=pyjslib.___import___("FocusWidget.FocusWidget","pyjamas.ui",null,false);pyjamas.ui["ButtonBase"]["InnerText"]=pyjslib.___import___("pyjamas.ui.InnerText","pyjamas.ui",null,false);pyjamas.ui["ButtonBase"]["InnerHTML"]=pyjslib.___import___("pyjamas.ui.InnerHTML","pyjamas.ui",null,false);pyjamas.ui["ButtonBase"]["ButtonBase"]=(function(){var f=$pyjs__class_instance("ButtonBase");var e=new Object();var d;e.__md5__="bd59a4f77ba37b97afcc8d9c9601e1ec";d=$pyjs__bind_method(f,"__init__",function(h){if(this.__is_instance__===true){var g=this;var i=arguments.length>=2?arguments[arguments.length-1]:arguments[arguments.length];if(typeof i!="object"||i.__name__!="dict"||typeof i.$pyjs_is_kwarg=="undefined"){i=arguments[arguments.length+1]}else{delete i["$pyjs_is_kwarg"]}}else{var g=arguments[0];h=arguments[1];var i=arguments.length>=3?arguments[arguments.length-1]:arguments[arguments.length];if(typeof i!="object"||i.__name__!="dict"||typeof i.$pyjs_is_kwarg=="undefined"){i=arguments[arguments.length+1]}else{delete i["$pyjs_is_kwarg"]}}if(typeof i=="undefined"){i=pyjslib.__empty_dict();if(typeof h!="undefined"){if(h!==null&&typeof h["$pyjs_is_kwarg"]!="undefined"){i=h;h=arguments[2]}}else{if(typeof g!="undefined"){if(g!==null&&typeof g["$pyjs_is_kwarg"]!="undefined"){i=g;g=arguments[2]}}else{}}}$pyjs_kwargs_call(pyjamas.ui["ButtonBase"]["FocusWidget"],"__init__",null,i,[{},g,h]);return null},1,[null,["kwargs"],["self"],["element"]]);e.__init__=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["ButtonBase"]["FocusWidget"],pyjamas.ui["ButtonBase"]["InnerHTML"],pyjamas.ui["ButtonBase"]["InnerText"]))})();pyjamas.ui["ButtonBase"]["Factory"]["registerClass"](String("pyjamas.ui.ButtonBase"),pyjamas.ui["ButtonBase"]["ButtonBase"]);return this};