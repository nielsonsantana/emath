$pyjs.loaded_modules["pyjamas.ui.TextBoxBase"]=function(c){if($pyjs.loaded_modules["pyjamas.ui.TextBoxBase"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.TextBoxBase"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["TextBoxBase"]=$pyjs.loaded_modules["pyjamas.ui.TextBoxBase"];pyjamas.ui["TextBoxBase"].__was_initialized__=true;if((c===null)||(typeof c=="undefined")){c="pyjamas.ui.TextBoxBase"}var a=pyjamas.ui["TextBoxBase"].__name__=c;var b=pyjamas.ui["TextBoxBase"];pyjamas.ui["TextBoxBase"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["TextBoxBase"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["TextBoxBase"]["FocusWidget"]=pyjslib.___import___("FocusWidget.FocusWidget","pyjamas.ui",null,false);pyjamas.ui["TextBoxBase"]["Event"]=pyjslib.___import___("pyjamas.ui.Event","pyjamas.ui",null,false);pyjamas.ui["TextBoxBase"]["TextBoxBase"]=(function(){var f=$pyjs__class_instance("TextBoxBase");var e=new Object();var d;e.__md5__="266e00b6b5aaa701cfc07c930efcebf9";e.ALIGN_CENTER=String("center");e.ALIGN_JUSTIFY=String("justify");e.ALIGN_LEFT=String("left");e.ALIGN_RIGHT=String("right");d=$pyjs__bind_method(f,"__init__",function(i){if(this.__is_instance__===true){var h=this;var j=arguments.length>=2?arguments[arguments.length-1]:arguments[arguments.length];if(typeof j!="object"||j.__name__!="dict"||typeof j.$pyjs_is_kwarg=="undefined"){j=arguments[arguments.length+1]}else{delete j["$pyjs_is_kwarg"]}}else{var h=arguments[0];i=arguments[1];var j=arguments.length>=3?arguments[arguments.length-1]:arguments[arguments.length];if(typeof j!="object"||j.__name__!="dict"||typeof j.$pyjs_is_kwarg=="undefined"){j=arguments[arguments.length+1]}else{delete j["$pyjs_is_kwarg"]}}if(typeof j=="undefined"){j=pyjslib.__empty_dict();if(typeof i!="undefined"){if(i!==null&&typeof i["$pyjs_is_kwarg"]!="undefined"){j=i;i=arguments[2]}}else{if(typeof h!="undefined"){if(h!==null&&typeof h["$pyjs_is_kwarg"]!="undefined"){j=h;h=arguments[2]}}else{}}}var g,k;h.changeListeners=pyjslib.list([]);h.currentEvent=null;$pyjs_kwargs_call(pyjamas.ui["TextBoxBase"]["FocusWidget"],"__init__",null,j,[{},h,i]);h.sinkEvents((((g=pyjamas.ui["TextBoxBase"]["Event"]["ONCHANGE"])!==null&(k=pyjamas.ui["TextBoxBase"]["Event"]).__is_instance__)&&typeof g=="function"?pyjslib.getattr(k,"ONCHANGE"):pyjamas.ui["TextBoxBase"]["Event"]["ONCHANGE"]));return null},1,[null,["kwargs"],["self"],["element"]]);e.__init__=d;d=$pyjs__bind_method(f,"addChangeListener",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.changeListeners["append"](h);return null},1,[null,null,["self"],["listener"]]);e.addChangeListener=d;d=$pyjs__bind_method(f,"cancelKey",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h,i,k,j;if(pyjslib.bool(((((k=g.currentEvent)!==null&(j=g).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"currentEvent"):g.currentEvent)!==null))){pyjamas.ui["TextBoxBase"]["DOM"]["eventPreventDefault"]((((i=g.currentEvent)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"currentEvent"):g.currentEvent))}return null},1,[null,null,["self"]]);e.cancelKey=d;d=$pyjs__bind_method(f,"getCursorPos",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var j,l,k,i,h;i=g.getElement();try{return(((k=i.selectionStart)!==null&(j=i).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"selectionStart"):i.selectionStart)}catch(h){var m=(typeof h.__name__=="undefined"?h.name:h.__name__);$pyjs.__last_exception__={error:h,module:pyjamas.ui.TextBoxBase,try_lineno:43};if(true){$pyjs.__last_exception__.except_lineno=46;l=h;return 0}}return null},1,[null,null,["self"]]);e.getCursorPos=d;d=$pyjs__bind_method(f,"getName",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return pyjamas.ui["TextBoxBase"]["DOM"]["getAttribute"](g.getElement(),String("name"))},1,[null,null,["self"]]);e.getName=d;d=$pyjs__bind_method(f,"getSelectedText",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var k,h,l,j,i;l=g.getCursorPos();j=g.getSelectionLength();k=g.getText();return pyjslib.slice(k,l,(typeof(i=l)==typeof(h=j)&&(typeof i=="number"||typeof i=="string")?i+h:pyjslib.op_add(i,h)))},1,[null,null,["self"]]);e.getSelectedText=d;d=$pyjs__bind_method(f,"getSelectionLength",function(){if(this.__is_instance__===true){var q=this}else{var q=arguments[0]}var j,i,k,m,g,h,n,o,l;k=q.getElement();try{return(typeof(h=(((j=k.selectionEnd)!==null&(o=k).__is_instance__)&&typeof j=="function"?pyjslib.getattr(o,"selectionEnd"):k.selectionEnd))==typeof(g=(((n=k.selectionStart)!==null&(l=k).__is_instance__)&&typeof n=="function"?pyjslib.getattr(l,"selectionStart"):k.selectionStart))&&(typeof h=="number"||typeof h=="string")?h-g:pyjslib.op_sub(h,g))}catch(m){var p=(typeof m.__name__=="undefined"?m.name:m.__name__);$pyjs.__last_exception__={error:m,module:pyjamas.ui.TextBoxBase,try_lineno:59};if(true){$pyjs.__last_exception__.except_lineno=62;i=m;return 0}}return null},1,[null,null,["self"]]);e.getSelectionLength=d;d=$pyjs__bind_method(f,"setFocus",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}if(pyjslib.bool(h)){g.getElement()["focus"]()}else{g.getElement()["blur"]()}return null},1,[null,null,["self"],["focused"]]);e.setFocus=d;d=$pyjs__bind_method(f,"getText",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return pyjamas.ui["TextBoxBase"]["DOM"]["getAttribute"](g.getElement(),String("value"))},1,[null,null,["self"]]);e.getText=d;d=$pyjs__bind_method(f,"onBrowserEvent",function(i){if(this.__is_instance__===true){var o=this}else{var o=arguments[0];i=arguments[1]}var m,g,h,j,k,l,n;pyjamas.ui["TextBoxBase"]["FocusWidget"]["onBrowserEvent"](o,i);l=pyjamas.ui["TextBoxBase"]["DOM"]["eventGetType"](i);if(pyjslib.bool(pyjslib.op_eq(l,String("change")))){h=o.changeListeners;if(typeof(k=h.__array)!="undefined"){g=0}else{h=h.__iter__();g=typeof(k=h.__array)!="undefined"?0:(typeof h.$genfunc=="function"?1:-1)}n=0;while(typeof(m=(g?(g>0?h.next(true,false):pyjslib.wrapped_next(h)):k[n++]))!="undefined"){j=m;if(pyjslib.bool(pyjslib.hasattr(j,String("onChange")))){j.onChange(o)}else{j(o)}}}return null},1,[null,null,["self"],["event"]]);e.onBrowserEvent=d;d=$pyjs__bind_method(f,"removeChangeListener",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.changeListeners["remove"](h);return null},1,[null,null,["self"],["listener"]]);e.removeChangeListener=d;d=$pyjs__bind_method(f,"selectAll",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h;h=pyjslib.len(g.getText());if(pyjslib.bool((pyjslib.cmp(h,0)==1))){g.setSelectionRange(0,h)}return null},1,[null,null,["self"]]);e.selectAll=d;d=$pyjs__bind_method(f,"setCursorPos",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.setSelectionRange(h,0);return null},1,[null,null,["self"],["pos"]]);e.setCursorPos=d;d=$pyjs__bind_method(f,"setKey",function(i){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];i=arguments[1]}var k,l,j,g;if(pyjslib.bool(((((g=h.currentEvent)!==null&(l=h).__is_instance__)&&typeof g=="function"?pyjslib.getattr(l,"currentEvent"):h.currentEvent)!==null))){pyjamas.ui["TextBoxBase"]["DOM"]["eventSetKeyCode"]((((k=h.currentEvent)!==null&(j=h).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"currentEvent"):h.currentEvent),i)}return null},1,[null,null,["self"],["key"]]);e.setKey=d;d=$pyjs__bind_method(f,"setName",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}pyjamas.ui["TextBoxBase"]["DOM"]["setAttribute"](g.getElement(),String("name"),h);return null},1,[null,null,["self"],["name"]]);e.setName=d;d=$pyjs__bind_method(f,"setSelectionRange",function(r,l){if(this.__is_instance__===true){var v=this}else{var v=arguments[0];r=arguments[1];l=arguments[2]}var w,u,t,n,m,k,j,s,q,p,o,i,h,g,D,A,z,C,B,y,x;if(pyjslib.bool((pyjslib.cmp(l,0)==-1))){console.error((typeof(D=String("Length must be a positive integer. Length: "))==typeof(C=l)&&(typeof D=="number"||typeof D=="string")?D+C:pyjslib.op_add(D,C)))}if(pyjslib.bool((pyjslib.bool(u=(pyjslib.cmp(r,0)==-1))?u:(pyjslib.cmp((typeof(B=l)==typeof(A=r)&&(typeof B=="number"||typeof B=="string")?B+A:pyjslib.op_add(B,A)),pyjslib.len(v.getText()))==1)))){console.error((typeof(j=(typeof(m=(typeof(o=(typeof(x=(typeof(z=String("From Index: "))==typeof(y=r)&&(typeof z=="number"||typeof z=="string")?z+y:pyjslib.op_add(z,y)))==typeof(s=String("  To Index: "))&&(typeof x=="number"||typeof x=="string")?x+s:pyjslib.op_add(x,s)))==typeof(n=(typeof(q=r)==typeof(p=l)&&(typeof q=="number"||typeof q=="string")?q+p:pyjslib.op_add(q,p)))&&(typeof o=="number"||typeof o=="string")?o+n:pyjslib.op_add(o,n)))==typeof(k=String("  Text Length: "))&&(typeof m=="number"||typeof m=="string")?m+k:pyjslib.op_add(m,k)))==typeof(i=pyjslib.len(v.getText()))&&(typeof j=="number"||typeof j=="string")?j+i:pyjslib.op_add(j,i)))}g=v.getElement();g.setSelectionRange(r,(typeof(h=r)==typeof(w=l)&&(typeof h=="number"||typeof h=="string")?h+w:pyjslib.op_add(h,w)));return null},1,[null,null,["self"],["pos"],["length"]]);e.setSelectionRange=d;d=$pyjs__bind_method(f,"setText",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}pyjamas.ui["TextBoxBase"]["DOM"]["setAttribute"](g.getElement(),String("value"),pyjslib.str(h));return null},1,[null,null,["self"],["text"]]);e.setText=d;d=$pyjs__bind_method(f,"setTextAlignment",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}pyjamas.ui["TextBoxBase"]["DOM"]["setStyleAttribute"](g.getElement(),String("textAlign"),h);return null},1,[null,null,["self"],["align"]]);e.setTextAlignment=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["TextBoxBase"]["FocusWidget"]))})();return this};