$pyjs.loaded_modules["pyjamas.ui.UIObject"]=function(c){if($pyjs.loaded_modules["pyjamas.ui.UIObject"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.UIObject"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["UIObject"]=$pyjs.loaded_modules["pyjamas.ui.UIObject"];pyjamas.ui["UIObject"].__was_initialized__=true;if((c===null)||(typeof c=="undefined")){c="pyjamas.ui.UIObject"}var b=pyjamas.ui["UIObject"].__name__=c;var a=pyjamas.ui["UIObject"];pyjamas.ui["UIObject"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["UIObject"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["UIObject"]["Window"]=pyjslib.___import___("pyjamas.Window","pyjamas.ui",null,false);pyjamas.ui["UIObject"]["Applier"]=pyjslib.___import___("pyjamas.ui.Applier","pyjamas.ui",null,false);pyjamas.ui["UIObject"]["setStyleName"]=function(d,x,u){var w,e,j,k,l,p,i,n,D,s,o,q,r,v,h,g,f,m,t,G,F,H,B,A,E,C,z,y;v=pyjamas.ui["UIObject"]["DOM"]["getAttribute"](d,String("className"));if(pyjslib.bool((v===null))){v=String("")}t=v.find(x);w=pyjslib.len(v);while(pyjslib.bool(!pyjslib.op_eq(t,(typeof($usub1=1)=="number"?-$usub1:pyjslib.op_usub($usub1))))){if(pyjslib.bool((pyjslib.bool(s=pyjslib.op_eq(t,0))?s:pyjslib.op_eq(v.__getitem__((typeof(l=t)==typeof(k=1)&&(typeof l=="number"||typeof l=="string")?l-k:pyjslib.op_sub(l,k))),String(" "))))){m=(typeof(H=t)==typeof(G=pyjslib.len(x))&&(typeof H=="number"||typeof H=="string")?H+G:pyjslib.op_add(H,G));if(pyjslib.bool((pyjslib.bool(o=pyjslib.op_eq(m,w))?o:(pyjslib.bool(r=(pyjslib.cmp(m,w)==-1))?pyjslib.op_eq(v.__getitem__(m),String(" ")):r)))){break}}t=v.find(x,(typeof(F=t)==typeof(E=1)&&(typeof F=="number"||typeof F=="string")?F+E:pyjslib.op_add(F,E)))}if(pyjslib.bool(u)){if(pyjslib.bool(pyjslib.op_eq(t,(typeof($usub2=1)=="number"?-$usub2:pyjslib.op_usub($usub2))))){pyjamas.ui["UIObject"]["DOM"]["setAttribute"](d,String("className"),(typeof(A=(typeof(C=v)==typeof(B=String(" "))&&(typeof C=="number"||typeof C=="string")?C+B:pyjslib.op_add(C,B)))==typeof(z=x)&&(typeof A=="number"||typeof A=="string")?A+z:pyjslib.op_add(A,z)))}}else{if(pyjslib.bool(!pyjslib.op_eq(t,(typeof($usub3=1)=="number"?-$usub3:pyjslib.op_usub($usub3))))){if(pyjslib.bool(pyjslib.op_eq(t,0))){D=String("")}else{D=pyjslib.slice(v,0,(typeof(j=t)==typeof(i=1)&&(typeof j=="number"||typeof j=="string")?j-i:pyjslib.op_sub(j,i)))}e=pyjslib.slice(v,(typeof(y=t)==typeof(h=pyjslib.len(x))&&(typeof y=="number"||typeof y=="string")?y+h:pyjslib.op_add(y,h)),null);pyjamas.ui["UIObject"]["DOM"]["setAttribute"](d,String("className"),(typeof(g=D)==typeof(f=e)&&(typeof g=="number"||typeof g=="string")?g+f:pyjslib.op_add(g,f)))}}return null};pyjamas.ui["UIObject"]["setStyleName"].__name__="setStyleName";pyjamas.ui["UIObject"]["setStyleName"].__bind_type__=0;pyjamas.ui["UIObject"]["setStyleName"].__args__=[null,null,["element"],["style"],["add"]];pyjamas.ui["UIObject"]["UIObject"]=(function(){var f=$pyjs__class_instance("UIObject");var e=new Object();var d;e.__md5__="ecdc8596756d663b181cf0e2548da572";d=$pyjs__bind_method(f,"__init__",function(){if(this.__is_instance__===true){var g=this;var h=arguments.length>=1?arguments[arguments.length-1]:arguments[arguments.length];if(typeof h!="object"||h.__name__!="dict"||typeof h.$pyjs_is_kwarg=="undefined"){h=arguments[arguments.length+1]}else{delete h["$pyjs_is_kwarg"]}}else{var g=arguments[0];var h=arguments.length>=2?arguments[arguments.length-1]:arguments[arguments.length];if(typeof h!="object"||h.__name__!="dict"||typeof h.$pyjs_is_kwarg=="undefined"){h=arguments[arguments.length+1]}else{delete h["$pyjs_is_kwarg"]}}if(typeof h=="undefined"){h=pyjslib.__empty_dict();if(typeof g!="undefined"){if(g!==null&&typeof g["$pyjs_is_kwarg"]!="undefined"){h=g;g=arguments[1]}}else{}}$pyjs_kwargs_call(pyjamas.ui["UIObject"]["Applier"],"__init__",null,h,[{},g]);return null},1,[null,["kwargs"],["self"]]);e.__init__=d;d=$pyjs__bind_method(f,"getAbsoluteLeft",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return pyjamas.ui["UIObject"]["DOM"]["getAbsoluteLeft"](g.getElement())},1,[null,null,["self"]]);e.getAbsoluteLeft=d;d=$pyjs__bind_method(f,"getAbsoluteTop",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return pyjamas.ui["UIObject"]["DOM"]["getAbsoluteTop"](g.getElement())},1,[null,null,["self"]]);e.getAbsoluteTop=d;d=$pyjs__bind_method(f,"getElement",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var g,i;return(((g=h.element)!==null&(i=h).__is_instance__)&&typeof g=="function"?pyjslib.getattr(i,"element"):h.element)},1,[null,null,["self"]]);e.getElement=d;d=$pyjs__bind_method(f,"getOffsetHeight",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return pyjamas.ui["UIObject"]["DOM"]["getIntAttribute"]((((i=g.element)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"element"):g.element),String("offsetHeight"))},1,[null,null,["self"]]);e.getOffsetHeight=d;d=$pyjs__bind_method(f,"getOffsetWidth",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return pyjamas.ui["UIObject"]["DOM"]["getIntAttribute"]((((i=g.element)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"element"):g.element),String("offsetWidth"))},1,[null,null,["self"]]);e.getOffsetWidth=d;d=$pyjs__bind_method(f,"getStyleName",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h,i;return pyjamas.ui["UIObject"]["DOM"]["getAttribute"]((((i=g.element)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"element"):g.element),String("className"))},1,[null,null,["self"]]);e.getStyleName=d;d=$pyjs__bind_method(f,"getStylePrimaryName",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h;h=g.getStyleName();if(pyjslib.bool(h)){return h["$$split"]().__getitem__(0)}return null},1,[null,null,["self"]]);e.getStylePrimaryName=d;d=$pyjs__bind_method(f,"getTitle",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return pyjamas.ui["UIObject"]["DOM"]["getAttribute"]((((i=g.element)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"element"):g.element),String("title"))},1,[null,null,["self"]]);e.getTitle=d;d=$pyjs__bind_method(f,"setElement",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.element=h;return null},1,[null,null,["self"],["element"]]);e.setElement=d;d=$pyjs__bind_method(f,"setHeight",function(g){if(this.__is_instance__===true){var j=this}else{var j=arguments[0];g=arguments[1]}var h,i;pyjamas.ui["UIObject"]["DOM"]["setStyleAttribute"]((((i=j.element)!==null&(h=j).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"element"):j.element),String("height"),pyjslib.str(g));return null},1,[null,null,["self"],["height"]]);e.setHeight=d;d=$pyjs__bind_method(f,"getHeight",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var i,g;return pyjamas.ui["UIObject"]["DOM"]["getStyleAttribute"]((((g=h.element)!==null&(i=h).__is_instance__)&&typeof g=="function"?pyjslib.getattr(i,"element"):h.element),String("height"))},1,[null,null,["self"]]);e.getHeight=d;d=$pyjs__bind_method(f,"setPixelSize",function(i,g){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];i=arguments[1];g=arguments[2]}if(pyjslib.bool((((pyjslib.cmp(i,0))|1)==1))){h.setWidth(pyjslib.sprintf(String("%dpx"),i))}if(pyjslib.bool((((pyjslib.cmp(g,0))|1)==1))){h.setHeight(pyjslib.sprintf(String("%dpx"),g))}return null},1,[null,null,["self"],["width"],["height"]]);e.setPixelSize=d;d=$pyjs__bind_method(f,"setSize",function(i,g){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];i=arguments[1];g=arguments[2]}h.setWidth(i);h.setHeight(g);return null},1,[null,null,["self"],["width"],["height"]]);e.setSize=d;d=$pyjs__bind_method(f,"addStyleName",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}var j,i;g.setStyleName((((j=g.element)!==null&(i=g).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"element"):g.element),h,true);return null},1,[null,null,["self"],["style"]]);e.addStyleName=d;d=$pyjs__bind_method(f,"addStyleDependentName",function(k){if(this.__is_instance__===true){var j=this}else{var j=arguments[0];k=arguments[1]}var h,g,l,i;j.addStyleName((typeof(g=(typeof(i=j.getStylePrimaryName())==typeof(h=String("-"))&&(typeof i=="number"||typeof i=="string")?i+h:pyjslib.op_add(i,h)))==typeof(l=k)&&(typeof g=="number"||typeof g=="string")?g+l:pyjslib.op_add(g,l)));return null},1,[null,null,["self"],["styleSuffix"]]);e.addStyleDependentName=d;d=$pyjs__bind_method(f,"removeStyleName",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}var j,i;g.setStyleName((((j=g.element)!==null&(i=g).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"element"):g.element),h,false);return null},1,[null,null,["self"],["style"]]);e.removeStyleName=d;d=$pyjs__bind_method(f,"removeStyleDependentName",function(j){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];j=arguments[1]}var i,l,k,h;g.removeStyleName((typeof(h=(typeof(l=g.getStylePrimaryName())==typeof(k=String("-"))&&(typeof l=="number"||typeof l=="string")?l+k:pyjslib.op_add(l,k)))==typeof(i=j)&&(typeof h=="number"||typeof h=="string")?h+i:pyjslib.op_add(h,i)));return null},1,[null,null,["self"],["styleSuffix"]]);e.removeStyleDependentName=d;d=$pyjs__bind_method(f,"setStyleName",function(h,k,l){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1];k=arguments[2];l=arguments[3]}if(typeof k=="undefined"){k=arguments.callee.__args__[4][1]}if(typeof l=="undefined"){l=arguments.callee.__args__[5][1]}var j,i;if(pyjslib.bool((k===null))){k=h;pyjamas.ui["UIObject"]["DOM"]["setAttribute"]((((i=g.element)!==null&(j=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(j,"element"):g.element),String("className"),k);return null}pyjamas.ui["UIObject"]["setStyleName"](h,k,l);return null},1,[null,null,["self"],["element"],["style",null],["add",true]]);e.setStyleName=d;d=$pyjs__bind_method(f,"setTitle",function(j){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];j=arguments[1]}var i,h;pyjamas.ui["UIObject"]["DOM"]["setAttribute"]((((i=g.element)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"element"):g.element),String("title"),j);return null},1,[null,null,["self"],["title"]]);e.setTitle=d;d=$pyjs__bind_method(f,"setWidth",function(j){if(this.__is_instance__===true){var i=this}else{var i=arguments[0];j=arguments[1]}var h,g;pyjamas.ui["UIObject"]["DOM"]["setStyleAttribute"]((((h=i.element)!==null&(g=i).__is_instance__)&&typeof h=="function"?pyjslib.getattr(g,"element"):i.element),String("width"),pyjslib.str(j));return null},1,[null,null,["self"],["width"]]);e.setWidth=d;d=$pyjs__bind_method(f,"getWidth",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var g,i;return pyjamas.ui["UIObject"]["DOM"]["getStyleAttribute"]((((g=h.element)!==null&(i=h).__is_instance__)&&typeof g=="function"?pyjslib.getattr(i,"element"):h.element),String("width"))},1,[null,null,["self"]]);e.getWidth=d;d=$pyjs__bind_method(f,"sinkEvents",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}var i,j;if(pyjslib.bool((((j=g.element)!==null&(i=g).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"element"):g.element))){pyjamas.ui["UIObject"]["DOM"]["sinkEvents"](g.getElement(),(h)|(pyjamas.ui["UIObject"]["DOM"]["getEventsSunk"](g.getElement())))}return null},1,[null,null,["self"],["eventBitsToAdd"]]);e.sinkEvents=d;d=$pyjs__bind_method(f,"setzIndex",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}var j,i;pyjamas.ui["UIObject"]["DOM"]["setIntStyleAttribute"]((((i=g.element)!==null&(j=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(j,"element"):g.element),String("zIndex"),h);return null},1,[null,null,["self"],["index"]]);e.setzIndex=d;d=$pyjs__bind_method(f,"isVisible",function(h){if(this.__is_instance__===true){var o=this}else{var o=arguments[0];h=arguments[1]}if(typeof h=="undefined"){h=arguments.callee.__args__[3][1]}var g,l,m,n,i,k;if(pyjslib.bool(!pyjslib.bool(h))){h=(((n=o.element)!==null&(m=o).__is_instance__)&&typeof n=="function"?pyjslib.getattr(m,"element"):o.element)}try{return !pyjslib.op_eq((((l=h.style["display"])!==null&(k=h.style).__is_instance__)&&typeof l=="function"?pyjslib.getattr(k,"display"):h.style["display"]),String("none"))}catch(i){var j=(typeof i.__name__=="undefined"?i.name:i.__name__);$pyjs.__last_exception__={error:i,module:pyjamas.ui.UIObject,try_lineno:171};if((j==pyjslib.AttributeError.__name__)||pyjslib._isinstance(i,pyjslib.AttributeError)){$pyjs.__last_exception__.except_lineno=173;g=i;return true}else{throw i}}return null},1,[null,null,["self"],["element",null]]);e.isVisible=d;d=$pyjs__bind_method(f,"setVisible",function(j,k){if(this.__is_instance__===true){var i=this}else{var i=arguments[0];j=arguments[1];k=arguments[2]}if(typeof k=="undefined"){k=arguments.callee.__args__[4][1]}var g,h;if(pyjslib.bool((k===null))){k=j;j=(((h=i.element)!==null&(g=i).__is_instance__)&&typeof h=="function"?pyjslib.getattr(g,"element"):i.element)}if(pyjslib.bool(k)){pyjamas.ui["UIObject"]["DOM"]["setStyleAttribute"](j,String("display"),String(""))}else{pyjamas.ui["UIObject"]["DOM"]["setStyleAttribute"](j,String("display"),String("none"))}return null},1,[null,null,["self"],["element"],["visible",null]]);e.setVisible=d;d=$pyjs__bind_method(f,"unsinkEvents",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}pyjamas.ui["UIObject"]["DOM"]["sinkEvents"](g.getElement(),(~(h))&(pyjamas.ui["UIObject"]["DOM"]["getEventsSunk"](g.getElement())));return null},1,[null,null,["self"],["eventBitsToRemove"]]);e.unsinkEvents=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["UIObject"]["Applier"]))})();pyjamas.ui["UIObject"]["Factory"]["registerClass"](String("pyjamas.ui.UIObject"),pyjamas.ui["UIObject"]["UIObject"]);return this};