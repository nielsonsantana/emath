$pyjs.loaded_modules["pyjamas.ui.Panel"]=function(c){if($pyjs.loaded_modules["pyjamas.ui.Panel"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.Panel"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["Panel"]=$pyjs.loaded_modules["pyjamas.ui.Panel"];pyjamas.ui["Panel"].__was_initialized__=true;if((c===null)||(typeof c=="undefined")){c="pyjamas.ui.Panel"}var a=pyjamas.ui["Panel"].__name__=c;var b=pyjamas.ui["Panel"];pyjamas.ui["Panel"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["Panel"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["Panel"]["Widget"]=pyjslib.___import___("Widget.Widget","pyjamas.ui",null,false);pyjamas.ui["Panel"]["Panel"]=(function(){var f=$pyjs__class_instance("Panel");var e=new Object();var d;e.__md5__="0edb5ae60aba152b769435de91d1e870";d=$pyjs__bind_method(f,"__init__",function(){if(this.__is_instance__===true){var g=this;var h=arguments.length>=1?arguments[arguments.length-1]:arguments[arguments.length];if(typeof h!="object"||h.__name__!="dict"||typeof h.$pyjs_is_kwarg=="undefined"){h=arguments[arguments.length+1]}else{delete h["$pyjs_is_kwarg"]}}else{var g=arguments[0];var h=arguments.length>=2?arguments[arguments.length-1]:arguments[arguments.length];if(typeof h!="object"||h.__name__!="dict"||typeof h.$pyjs_is_kwarg=="undefined"){h=arguments[arguments.length+1]}else{delete h["$pyjs_is_kwarg"]}}if(typeof h=="undefined"){h=pyjslib.__empty_dict();if(typeof g!="undefined"){if(g!==null&&typeof g["$pyjs_is_kwarg"]!="undefined"){h=g;g=arguments[1]}}else{}}g.children=pyjslib.list([]);$pyjs_kwargs_call(pyjamas.ui["Panel"]["Widget"],"__init__",null,h,[{},g]);return null},1,[null,["kwargs"],["self"]]);e.__init__=d;d=$pyjs__bind_method(f,"add",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}console.error(String("This panel does not support no-arg add()"));return null},1,[null,null,["self"]]);e.add=d;d=$pyjs__bind_method(f,"clear",function(){if(this.__is_instance__===true){var s=this}else{var s=arguments[0]}var m,p,g,n,h,q,o,j,l,i,k,r;i=pyjslib.list([]);h=s.children;if(typeof(o=h.__array)!="undefined"){g=0}else{h=h.__iter__();g=typeof(o=h.__array)!="undefined"?0:(typeof h.$genfunc=="function"?1:-1)}r=0;while(typeof(p=(g?(g>0?h.next(true,false):pyjslib.wrapped_next(h)):o[r++]))!="undefined"){j=p;i.append(j)}n=i;if(typeof(k=n.__array)!="undefined"){l=0}else{n=n.__iter__();l=typeof(k=n.__array)!="undefined"?0:(typeof n.$genfunc=="function"?1:-1)}q=0;while(typeof(m=(l?(l>0?n.next(true,false):pyjslib.wrapped_next(n)):k[q++]))!="undefined"){j=m;s.remove(j)}return null},1,[null,null,["self"]]);e.clear=d;d=$pyjs__bind_method(f,"disown",function(j){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];j=arguments[1]}var g,i;if(pyjslib.bool(!pyjslib.op_eq(j.getParent(),h))){console.error(String("widget %o is not a child of this panel %o"),j,h)}else{i=j.getElement();j.setParent(null);g=pyjamas.ui["Panel"]["DOM"]["getParent"](i);if(pyjslib.bool(g)){pyjamas.ui["Panel"]["DOM"]["removeChild"](g,i)}}return null},1,[null,null,["self"],["widget"]]);e.disown=d;d=$pyjs__bind_method(f,"adopt",function(i,g){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];i=arguments[1];g=arguments[2]}if(pyjslib.bool(g)){i.removeFromParent();pyjamas.ui["Panel"]["DOM"]["appendChild"](g,i.getElement())}i.setParent(h);return null},1,[null,null,["self"],["widget"],["container"]]);e.adopt=d;d=$pyjs__bind_method(f,"remove",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}return null},1,[null,null,["self"],["widget"]]);e.remove=d;d=$pyjs__bind_method(f,"doAttachChildren",function(){if(this.__is_instance__===true){var i=this}else{var i=arguments[0]}var m,l,g,k,h,j;k=i;if(typeof(h=k.__array)!="undefined"){g=0}else{k=k.__iter__();g=typeof(h=k.__array)!="undefined"?0:(typeof k.$genfunc=="function"?1:-1)}l=0;while(typeof(j=(g?(g>0?k.next(true,false):pyjslib.wrapped_next(k)):h[l++]))!="undefined"){m=j;m.onAttach()}return null},1,[null,null,["self"]]);e.doAttachChildren=d;d=$pyjs__bind_method(f,"doDetachChildren",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var k,i,m,l,h,j;j=g;if(typeof(h=j.__array)!="undefined"){m=0}else{j=j.__iter__();m=typeof(h=j.__array)!="undefined"?0:(typeof j.$genfunc=="function"?1:-1)}i=0;while(typeof(k=(m?(m>0?j.next(true,false):pyjslib.wrapped_next(j)):h[i++]))!="undefined"){l=k;l.onDetach()}return null},1,[null,null,["self"]]);e.doDetachChildren=d;d=$pyjs__bind_method(f,"__iter__",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return g.children["__iter__"]()},1,[null,null,["self"]]);e.__iter__=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["Panel"]["Widget"]))})();pyjamas.ui["Panel"]["Factory"]["registerClass"](String("pyjamas.ui.Panel"),pyjamas.ui["Panel"]["Panel"]);return this};