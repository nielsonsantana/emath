$pyjs.loaded_modules["pyjamas.ui.Widget"]=function(c){if($pyjs.loaded_modules["pyjamas.ui.Widget"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.Widget"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["Widget"]=$pyjs.loaded_modules["pyjamas.ui.Widget"];pyjamas.ui["Widget"].__was_initialized__=true;if((c===null)||(typeof c=="undefined")){c="pyjamas.ui.Widget"}var a=pyjamas.ui["Widget"].__name__=c;var b=pyjamas.ui["Widget"];pyjamas.ui["Widget"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["Widget"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["Widget"]["log"]=pyjslib.___import___("pyjamas.log","pyjamas.ui",null,false);pyjamas.ui["Widget"]["UIObject"]=pyjslib.___import___("UIObject.UIObject","pyjamas.ui",null,false);pyjamas.ui["Widget"]["Event"]=pyjslib.___import___("pyjamas.ui.Event","pyjamas.ui",null,false);pyjamas.ui["Widget"]["ClickHandler"]=pyjslib.___import___("ClickListener.ClickHandler","pyjamas.ui",null,false);pyjamas.ui["Widget"]["FocusHandler"]=pyjslib.___import___("FocusListener.FocusHandler","pyjamas.ui",null,false);pyjamas.ui["Widget"]["KeyboardHandler"]=pyjslib.___import___("KeyboardListener.KeyboardHandler","pyjamas.ui",null,false);pyjamas.ui["Widget"]["MouseHandler"]=pyjslib.___import___("MouseListener.MouseHandler","pyjamas.ui",null,false);pyjamas.ui["Widget"]["Widget"]=(function(){var f=$pyjs__class_instance("Widget");var e=new Object();var d;e.__md5__="7dda9da4f91f0c60990c66d19f501711";d=$pyjs__bind_method(f,"__init__",function(){if(this.__is_instance__===true){var g=this;var h=arguments.length>=1?arguments[arguments.length-1]:arguments[arguments.length];if(typeof h!="object"||h.__name__!="dict"||typeof h.$pyjs_is_kwarg=="undefined"){h=arguments[arguments.length+1]}else{delete h["$pyjs_is_kwarg"]}}else{var g=arguments[0];var h=arguments.length>=2?arguments[arguments.length-1]:arguments[arguments.length];if(typeof h!="object"||h.__name__!="dict"||typeof h.$pyjs_is_kwarg=="undefined"){h=arguments[arguments.length+1]}else{delete h["$pyjs_is_kwarg"]}}if(typeof h=="undefined"){h=pyjslib.__empty_dict();if(typeof g!="undefined"){if(g!==null&&typeof g["$pyjs_is_kwarg"]!="undefined"){h=g;g=arguments[1]}}else{}}g.attached=false;g.parent=null;g.layoutData=null;g.contextMenu=null;$pyjs_kwargs_call(pyjamas.ui["Widget"]["UIObject"],"__init__",null,h,[{},g]);return null},1,[null,["kwargs"],["self"]]);e.__init__=d;d=$pyjs__bind_method(f,"getLayoutData",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var g,i;return(((g=h.layoutData)!==null&(i=h).__is_instance__)&&typeof g=="function"?pyjslib.getattr(i,"layoutData"):h.layoutData)},1,[null,null,["self"]]);e.getLayoutData=d;d=$pyjs__bind_method(f,"getParent",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return(((i=g.parent)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"parent"):g.parent)},1,[null,null,["self"]]);e.getParent=d;d=$pyjs__bind_method(f,"isAttached",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return(((i=g.attached)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"attached"):g.attached)},1,[null,null,["self"]]);e.isAttached=d;d=$pyjs__bind_method(f,"setContextMenu",function(l){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];l=arguments[1]}var i,j,k,h;g.contextMenu=l;if(pyjslib.bool(l)){g.sinkEvents((((k=pyjamas.ui["Widget"]["Event"]["ONCONTEXTMENU"])!==null&(j=pyjamas.ui["Widget"]["Event"]).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"ONCONTEXTMENU"):pyjamas.ui["Widget"]["Event"]["ONCONTEXTMENU"]))}else{g.unsinkEvents((((i=pyjamas.ui["Widget"]["Event"]["ONCONTEXTMENU"])!==null&(h=pyjamas.ui["Widget"]["Event"]).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"ONCONTEXTMENU"):pyjamas.ui["Widget"]["Event"]["ONCONTEXTMENU"]))}return null},1,[null,null,["self"],["menu"]]);e.setContextMenu=d;d=$pyjs__bind_method(f,"onBrowserEvent",function(k){if(this.__is_instance__===true){var i=this}else{var i=arguments[0];k=arguments[1]}var j,h,g;if(pyjslib.bool(pyjslib.hasattr(i,String("_clickListeners")))){pyjamas.ui["Widget"]["ClickHandler"]["onBrowserEvent"](i,k)}if(pyjslib.bool(pyjslib.hasattr(i,String("_keyboardListeners")))){pyjamas.ui["Widget"]["KeyboardHandler"]["onBrowserEvent"](i,k)}if(pyjslib.bool(pyjslib.hasattr(i,String("_mouseListeners")))){pyjamas.ui["Widget"]["MouseHandler"]["onBrowserEvent"](i,k)}if(pyjslib.bool(pyjslib.hasattr(i,String("_focusListeners")))){pyjamas.ui["Widget"]["FocusHandler"]["onBrowserEvent"](i,k)}if(pyjslib.bool(((((h=i.contextMenu)!==null&(g=i).__is_instance__)&&typeof h=="function"?pyjslib.getattr(g,"contextMenu"):i.contextMenu)===null))){return true}j=pyjamas.ui["Widget"]["DOM"]["eventGetType"](k);if(pyjslib.bool(pyjslib.op_eq(j,String("contextmenu")))){pyjamas.ui["Widget"]["DOM"]["eventCancelBubble"](k,true);pyjamas.ui["Widget"]["DOM"]["eventPreventDefault"](k);i.contextMenu["onContextMenu"](i);return false}return true},1,[null,null,["self"],["event"]]);e.onBrowserEvent=d;d=$pyjs__bind_method(f,"onLoad",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return null},1,[null,null,["self"]]);e.onLoad=d;d=$pyjs__bind_method(f,"doDetachChildren",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return null},1,[null,null,["self"]]);e.doDetachChildren=d;d=$pyjs__bind_method(f,"doAttachChildren",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return null},1,[null,null,["self"]]);e.doAttachChildren=d;d=$pyjs__bind_method(f,"onAttach",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}if(pyjslib.bool(g.isAttached())){return null}g.attached=true;pyjamas.ui["Widget"]["DOM"]["setEventListener"](g.getElement(),g);g.doAttachChildren();g.onLoad();return null},1,[null,null,["self"]]);e.onAttach=d;d=$pyjs__bind_method(f,"onDetach",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}if(pyjslib.bool(!pyjslib.bool(g.isAttached()))){return null}g.doDetachChildren();g.attached=false;pyjamas.ui["Widget"]["DOM"]["setEventListener"](g.getElement(),null);return null},1,[null,null,["self"]]);e.onDetach=d;d=$pyjs__bind_method(f,"setLayoutData",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.layoutData=h;return null},1,[null,null,["self"],["layoutData"]]);e.setLayoutData=d;d=$pyjs__bind_method(f,"setParent",function(p){if(this.__is_instance__===true){var q=this}else{var q=arguments[0];p=arguments[1]}var o,n,g,j,k,h,i,m,l;o=(((l=q.parent)!==null&(k=q).__is_instance__)&&typeof l=="function"?pyjslib.getattr(k,"parent"):q.parent);q.parent=p;if(pyjslib.bool((p===null))){if(pyjslib.bool((pyjslib.bool(n=(o!==null))?(((j=o.attached)!==null&(i=o).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"attached"):o.attached):n))){q.onDetach()}}else{if(pyjslib.bool((((h=p.attached)!==null&(g=p).__is_instance__)&&typeof h=="function"?pyjslib.getattr(g,"attached"):p.attached))){q.onAttach()}}return null},1,[null,null,["self"],["parent"]]);e.setParent=d;d=$pyjs__bind_method(f,"removeFromParent",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;if(pyjslib.bool(pyjslib.hasattr((((h=g.parent)!==null&(i=g).__is_instance__)&&typeof h=="function"?pyjslib.getattr(i,"parent"):g.parent),String("remove")))){g.parent["remove"](g)}return null},1,[null,null,["self"]]);e.removeFromParent=d;d=$pyjs__bind_method(f,"getID",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return pyjamas.ui["Widget"]["DOM"]["getAttribute"](g.getElement(),String("id"))},1,[null,null,["self"]]);e.getID=d;d=$pyjs__bind_method(f,"setID",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}pyjamas.ui["Widget"]["DOM"]["setAttribute"](g.getElement(),String("id"),h);return null},1,[null,null,["self"],["id"]]);e.setID=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["Widget"]["UIObject"]))})();pyjamas.ui["Widget"]["Factory"]["registerClass"](String("pyjamas.ui.Widget"),pyjamas.ui["Widget"]["Widget"]);return this};