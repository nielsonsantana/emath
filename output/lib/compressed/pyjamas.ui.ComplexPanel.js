$pyjs.loaded_modules["pyjamas.ui.ComplexPanel"]=function(b){if($pyjs.loaded_modules["pyjamas.ui.ComplexPanel"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.ComplexPanel"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["ComplexPanel"]=$pyjs.loaded_modules["pyjamas.ui.ComplexPanel"];pyjamas.ui["ComplexPanel"].__was_initialized__=true;if((b===null)||(typeof b=="undefined")){b="pyjamas.ui.ComplexPanel"}var a=pyjamas.ui["ComplexPanel"].__name__=b;var c=pyjamas.ui["ComplexPanel"];pyjamas.ui["ComplexPanel"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["ComplexPanel"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["ComplexPanel"]["Panel"]=pyjslib.___import___("Panel.Panel","pyjamas.ui",null,false);pyjamas.ui["ComplexPanel"]["ComplexPanel"]=(function(){var f=$pyjs__class_instance("ComplexPanel");var e=new Object();var d;e.__md5__="5031c90327ea4f9e8c2b11c3c702bde0";d=$pyjs__bind_method(f,"add",function(j,h){if(this.__is_instance__===true){var i=this}else{var i=arguments[0];j=arguments[1];h=arguments[2]}var g,k;i.insert(j,h,pyjslib.len((((g=i.children)!==null&(k=i).__is_instance__)&&typeof g=="function"?pyjslib.getattr(k,"children"):i.children)));return null},1,[null,null,["self"],["widget"],["container"]]);e.add=d;d=$pyjs__bind_method(f,"getWidgetCount",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return pyjslib.len((((i=g.children)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"children"):g.children))},1,[null,null,["self"]]);e.getWidgetCount=d;d=$pyjs__bind_method(f,"getWidget",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}var j,i;return(((j=g.children)!==null&(i=g).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"children"):g.children).__getitem__(h)},1,[null,null,["self"],["index"]]);e.getWidget=d;d=$pyjs__bind_method(f,"getWidgetIndex",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}return g.children["index"](h)},1,[null,null,["self"],["child"]]);e.getWidgetIndex=d;d=$pyjs__bind_method(f,"getChildren",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h,i;return(((i=g.children)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"children"):g.children)},1,[null,null,["self"]]);e.getChildren=d;d=$pyjs__bind_method(f,"insert",function(j,h,g){if(this.__is_instance__===true){var i=this}else{var i=arguments[0];j=arguments[1];h=arguments[2];g=arguments[3]}if(pyjslib.bool(pyjslib.op_eq(j.getParent(),i))){return null}i.adopt(j,h);i.children["insert"](g,j);return null},1,[null,null,["self"],["widget"],["container"],["beforeIndex"]]);e.insert=d;d=$pyjs__bind_method(f,"remove",function(j){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];j=arguments[1]}var i,h;if(pyjslib.bool(!(((i=g.children)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"children"):g.children).__contains__(j))){return false}g.disown(j);g.children["remove"](j);return true},1,[null,null,["self"],["widget"]]);e.remove=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["ComplexPanel"]["Panel"]))})();pyjamas.ui["ComplexPanel"]["Factory"]["registerClass"](String("pyjamas.ui.ComplexPanel"),pyjamas.ui["ComplexPanel"]["ComplexPanel"]);return this};