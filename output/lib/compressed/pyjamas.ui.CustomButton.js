$pyjs.loaded_modules["pyjamas.ui.CustomButton"]=function(c){if($pyjs.loaded_modules["pyjamas.ui.CustomButton"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.CustomButton"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["CustomButton"]=$pyjs.loaded_modules["pyjamas.ui.CustomButton"];pyjamas.ui["CustomButton"].__was_initialized__=true;if((c===null)||(typeof c=="undefined")){c="pyjamas.ui.CustomButton"}var b=pyjamas.ui["CustomButton"].__name__=c;var a=pyjamas.ui["CustomButton"];pyjamas.ui["CustomButton"]["sys"]=pyjslib.___import___("sys","pyjamas.ui");pyjamas.ui["CustomButton"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["CustomButton"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["CustomButton"]["Event"]=pyjslib.___import___("pyjamas.ui.Event","pyjamas.ui",null,false);pyjamas.ui["CustomButton"]["ButtonBase"]=pyjslib.___import___("ButtonBase.ButtonBase","pyjamas.ui",null,false);pyjamas.ui["CustomButton"]["Focus"]=pyjslib.___import___("pyjamas.ui.Focus","pyjamas.ui",null,false);pyjamas.ui["CustomButton"]["UIObject"]=pyjslib.___import___("UIObject.UIObject","pyjamas.ui",null,false);pyjamas.ui["CustomButton"]["Face"]=(function(){var f=$pyjs__class_instance("Face");var e=new Object();var d;e.__md5__="fa31bc2c04af8290911687439910146c";e.STYLENAME_HTML_FACE=String("html-face");d=$pyjs__bind_method(f,"__init__",function(h,i){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1];i=arguments[2]}if(typeof i=="undefined"){i=arguments.callee.__args__[4][1]}g.button=h;g.delegateTo=i;g.face=null;g.id=null;g.$$name=String("fazom");return null},1,[null,null,["self"],["button"],["delegateTo",null]]);e.__init__=d;d=$pyjs__bind_method(f,"getName",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var g,i;return(((g=h["$$name"])!==null&(i=h).__is_instance__)&&typeof g=="function"?pyjslib.getattr(i,"$$name"):h["$$name"])},1,[null,null,["self"]]);e.getName=d;d=$pyjs__bind_method(f,"getFaceID",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return(((i=g.id)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"id"):g.id)},1,[null,null,["self"]]);e.getFaceID=d;d=$pyjs__bind_method(f,"setName",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.$$name=h;return null},1,[null,null,["self"],["name"]]);e.setName=d;d=$pyjs__bind_method(f,"setFaceID",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.id=h;return null},1,[null,null,["self"],["face_id"]]);e.setFaceID=d;d=$pyjs__bind_method(f,"getHTML",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return pyjamas.ui["CustomButton"]["DOM"]["getInnerHTML"](g.getFace())},1,[null,null,["self"]]);e.getHTML=d;d=$pyjs__bind_method(f,"getText",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return pyjamas.ui["CustomButton"]["DOM"]["getInnerText"](g.getFace())},1,[null,null,["self"]]);e.getText=d;d=$pyjs__bind_method(f,"setHTML",function(k){if(this.__is_instance__===true){var p=this}else{var p=arguments[0];k=arguments[1]}var g,h,l,i,j,n,o,m;p.face=pyjamas.ui["CustomButton"]["DOM"]["createDiv"]();pyjamas.ui["CustomButton"]["UIObject"]["setStyleName"]((((l=p.button)!==null&(j=p).__is_instance__)&&typeof l=="function"?pyjslib.getattr(j,"button"):p.button),(((i=p.face)!==null&(h=p).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"face"):p.face),(((g=p.STYLENAME_HTML_FACE)!==null&(o=p).__is_instance__)&&typeof g=="function"?pyjslib.getattr(o,"STYLENAME_HTML_FACE"):p.STYLENAME_HTML_FACE),true);pyjamas.ui["CustomButton"]["DOM"]["setInnerHTML"]((((n=p.face)!==null&(m=p).__is_instance__)&&typeof n=="function"?pyjslib.getattr(m,"face"):p.face),k);p.button["updateButtonFace"]();return null},1,[null,null,["self"],["html"]]);e.setHTML=d;d=$pyjs__bind_method(f,"setImage",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.face=h.getElement();g.button["updateButtonFace"]();return null},1,[null,null,["self"],["image"]]);e.setImage=d;d=$pyjs__bind_method(f,"setText",function(o){if(this.__is_instance__===true){var p=this}else{var p=arguments[0];o=arguments[1]}var i,g,h,l,m,j,k,n;p.face=pyjamas.ui["CustomButton"]["DOM"]["createDiv"]();pyjamas.ui["CustomButton"]["UIObject"]["setStyleName"]((((n=p.button)!==null&(m=p).__is_instance__)&&typeof n=="function"?pyjslib.getattr(m,"button"):p.button),(((l=p.face)!==null&(k=p).__is_instance__)&&typeof l=="function"?pyjslib.getattr(k,"face"):p.face),(((j=p.STYLENAME_HTML_FACE)!==null&(h=p).__is_instance__)&&typeof j=="function"?pyjslib.getattr(h,"STYLENAME_HTML_FACE"):p.STYLENAME_HTML_FACE),true);pyjamas.ui["CustomButton"]["DOM"]["setInnerText"]((((g=p.face)!==null&(i=p).__is_instance__)&&typeof g=="function"?pyjslib.getattr(i,"face"):p.face),o);p.button["updateButtonFace"]();return null},1,[null,null,["self"],["text"]]);e.setText=d;d=$pyjs__bind_method(f,"toString",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return g.getName()},1,[null,null,["self"]]);e.toString=d;d=$pyjs__bind_method(f,"getFace",function(){if(this.__is_instance__===true){var n=this}else{var n=arguments[0]}var l,k,j,i,h,g,o,m;if(pyjslib.bool(((((l=n.face)!==null&(k=n).__is_instance__)&&typeof l=="function"?pyjslib.getattr(k,"face"):n.face)===null))){if(pyjslib.bool(((((j=n.delegateTo)!==null&(i=n).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"delegateTo"):n.delegateTo)===null))){n.face=pyjamas.ui["CustomButton"]["DOM"]["createDiv"]();return(((h=n.face)!==null&(g=n).__is_instance__)&&typeof h=="function"?pyjslib.getattr(g,"face"):n.face)}else{return n.delegateTo["getFace"]()}}else{return(((o=n.face)!==null&(m=n).__is_instance__)&&typeof o=="function"?pyjslib.getattr(m,"face"):n.face)}return null},1,[null,null,["self"]]);e.getFace=d;return $pyjs__class_function(f,e,new Array(pyjslib.object))})();pyjamas.ui["CustomButton"]["CustomButton"]=(function(){var f=$pyjs__class_instance("CustomButton");var e=new Object();var d;e.__md5__="af78e612af992b7868115973475e9157";e.STYLENAME_DEFAULT=String("gwt-CustomButton");e.DOWN_ATTRIBUTE=1;e.HOVERING_ATTRIBUTE=2;e.DISABLED_ATTRIBUTE=4;e.UP=0;e.DOWN=e.DOWN_ATTRIBUTE;e.UP_HOVERING=e.HOVERING_ATTRIBUTE;e.DOWN_HOVERING=(e.DOWN_ATTRIBUTE)|(e.HOVERING_ATTRIBUTE);e.UP_DISABLED=e.DISABLED_ATTRIBUTE;e.DOWN_DISABLED=(e.DOWN)|(e.DISABLED_ATTRIBUTE);d=$pyjs__bind_method(f,"__init__",function(o,C,s){if(this.__is_instance__===true){var E=this;var G=arguments.length>=4?arguments[arguments.length-1]:arguments[arguments.length];if(typeof G!="object"||G.__name__!="dict"||typeof G.$pyjs_is_kwarg=="undefined"){G=arguments[arguments.length+1]}else{delete G["$pyjs_is_kwarg"]}}else{var E=arguments[0];o=arguments[1];C=arguments[2];s=arguments[3];var G=arguments.length>=5?arguments[arguments.length-1]:arguments[arguments.length];if(typeof G!="object"||G.__name__!="dict"||typeof G.$pyjs_is_kwarg=="undefined"){G=arguments[arguments.length+1]}else{delete G["$pyjs_is_kwarg"]}}if(typeof G=="undefined"){G=pyjslib.__empty_dict();if(typeof s!="undefined"){if(s!==null&&typeof s["$pyjs_is_kwarg"]!="undefined"){G=s;s=arguments[4]}}else{if(typeof C!="undefined"){if(C!==null&&typeof C["$pyjs_is_kwarg"]!="undefined"){G=C;C=arguments[4]}}else{if(typeof o!="undefined"){if(o!==null&&typeof o["$pyjs_is_kwarg"]!="undefined"){G=o;o=arguments[4]}}else{if(typeof E!="undefined"){if(E!==null&&typeof E["$pyjs_is_kwarg"]!="undefined"){G=E;E=arguments[4]}}else{}}}}}if(typeof o=="undefined"){o=arguments.callee.__args__[3][1]}if(typeof C=="undefined"){C=arguments.callee.__args__[4][1]}if(typeof s=="undefined"){s=arguments.callee.__args__[5][1]}var F,H,v,D,h,B,A,z,y,x,w,q,r,t,u,k,l,m,n,g,i,p,j;if(pyjslib.bool(!pyjslib.bool(G.has_key(String("StyleName"))))){G.__setitem__(String("StyleName"),(((H=E.STYLENAME_DEFAULT)!==null&(u=E).__is_instance__)&&typeof H=="function"?pyjslib.getattr(u,"STYLENAME_DEFAULT"):E.STYLENAME_DEFAULT))}if(pyjslib.bool(G.has_key(String("Element")))){j=G.pop(String("Element"))}else{j=pyjamas.ui["CustomButton"]["Focus"]["createFocusable"]()}$pyjs_kwargs_call(pyjamas.ui["CustomButton"]["ButtonBase"],"__init__",null,G,[{},E,j]);E.curFace=null;E.curFaceElement=null;E.up=null;E.down=null;E.downHovering=null;E.upHovering=null;E.upDisabled=null;E.downDisabled=null;E.isCapturing=false;E.isFocusing=false;E.allowClick=false;E.setUpFace(E.createFace(null,String("up"),(((t=E.UP)!==null&(r=E).__is_instance__)&&typeof t=="function"?pyjslib.getattr(r,"UP"):E.UP)));if(pyjslib.bool((pyjslib.bool(B=(C===null))?(s===null):B))){s=o;o=null}if(pyjslib.bool((pyjslib.bool(z=o)?pyjslib.isinstance(o,pyjslib.str):z))){v=o;h=null}else{h=o;v=null}if(pyjslib.bool((pyjslib.bool(x=C)?pyjslib.isinstance(C,pyjslib.str):x))){D=C;p=null}else{p=C;D=null}if(pyjslib.bool(h)){E.getUpFace()["setImage"](h)}if(pyjslib.bool(v)){E.getUpFace()["setText"](v)}if(pyjslib.bool(p)){E.getDownFace()["setImage"](p)}if(pyjslib.bool(D)){E.getDownFace()["setText"](D)}E.sinkEvents(((((q=pyjamas.ui["CustomButton"]["Event"]["ONCLICK"])!==null&(n=pyjamas.ui["CustomButton"]["Event"]).__is_instance__)&&typeof q=="function"?pyjslib.getattr(n,"ONCLICK"):pyjamas.ui["CustomButton"]["Event"]["ONCLICK"]))|((((m=pyjamas.ui["CustomButton"]["Event"]["MOUSEEVENTS"])!==null&(l=pyjamas.ui["CustomButton"]["Event"]).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"MOUSEEVENTS"):pyjamas.ui["CustomButton"]["Event"]["MOUSEEVENTS"]))|((((k=pyjamas.ui["CustomButton"]["Event"]["FOCUSEVENTS"])!==null&(i=pyjamas.ui["CustomButton"]["Event"]).__is_instance__)&&typeof k=="function"?pyjslib.getattr(i,"FOCUSEVENTS"):pyjamas.ui["CustomButton"]["Event"]["FOCUSEVENTS"]))|((((g=pyjamas.ui["CustomButton"]["Event"]["KEYEVENTS"])!==null&(F=pyjamas.ui["CustomButton"]["Event"]).__is_instance__)&&typeof g=="function"?pyjslib.getattr(F,"KEYEVENTS"):pyjamas.ui["CustomButton"]["Event"]["KEYEVENTS"])));if(pyjslib.bool(s)){E.addClickListener(s)}return null},1,[null,["kwargs"],["self"],["upImageText",null],["downImageText",null],["listener",null]]);e.__init__=d;d=$pyjs__bind_method(f,"updateButtonFace",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var g,i,j,l,k,m;if(pyjslib.bool((pyjslib.bool(i=((((m=h.curFace)!==null&(l=h).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"curFace"):h.curFace)!==null))?pyjslib.op_eq(h.curFace["getFace"](),h.getFace()):i))){h.setCurrentFaceElement((((k=h.face)!==null&(j=h).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"face"):h.face))}return null},1,[null,null,["self"]]);e.updateButtonFace=d;d=$pyjs__bind_method(f,"getDownDisabledFace",function(){if(this.__is_instance__===true){var k=this}else{var k=arguments[0]}var h,l,j,m,i,g;if(pyjslib.bool(((((m=k.downDisabled)!==null&(l=k).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"downDisabled"):k.downDisabled)===null))){k.setDownDisabledFace(k.createFace(k.getDownFace(),String("down-disabled"),(((j=k.DOWN_DISABLED)!==null&(i=k).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"DOWN_DISABLED"):k.DOWN_DISABLED)))}return(((g=k.downDisabled)!==null&(h=k).__is_instance__)&&typeof g=="function"?pyjslib.getattr(h,"downDisabled"):k.downDisabled)},1,[null,null,["self"]]);e.getDownDisabledFace=d;d=$pyjs__bind_method(f,"getDownFace",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var m,l,i,j,h,k;if(pyjslib.bool(((((m=g.down)!==null&(l=g).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"down"):g.down)===null))){g.setDownFace(g.createFace(g.getUpFace(),String("down"),(((k=g.DOWN)!==null&(j=g).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"DOWN"):g.DOWN)))}return(((i=g.down)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"down"):g.down)},1,[null,null,["self"]]);e.getDownFace=d;d=$pyjs__bind_method(f,"getDownHoveringFace",function(){if(this.__is_instance__===true){var k=this}else{var k=arguments[0]}var j,l,i,h,m,g;if(pyjslib.bool(((((m=k.downHovering)!==null&(l=k).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"downHovering"):k.downHovering)===null))){k.setDownHoveringFace(k.createFace(k.getDownFace(),String("down-hovering"),(((j=k.DOWN_HOVERING)!==null&(i=k).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"DOWN_HOVERING"):k.DOWN_HOVERING)))}return(((h=k.downHovering)!==null&(g=k).__is_instance__)&&typeof h=="function"?pyjslib.getattr(g,"downHovering"):k.downHovering)},1,[null,null,["self"]]);e.getDownHoveringFace=d;d=$pyjs__bind_method(f,"getHTML",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return g.getCurrentFace()["getHTML"]()},1,[null,null,["self"]]);e.getHTML=d;d=$pyjs__bind_method(f,"getTabIndex",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return pyjamas.ui["CustomButton"]["Focus"]["getTabIndex"](g.getElement())},1,[null,null,["self"]]);e.getTabIndex=d;d=$pyjs__bind_method(f,"getText",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return g.getCurrentFace()["getText"]()},1,[null,null,["self"]]);e.getText=d;d=$pyjs__bind_method(f,"getUpDisabledFace",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h,l,k,i,m,j;if(pyjslib.bool(((((m=g.upDisabled)!==null&(l=g).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"upDisabled"):g.upDisabled)===null))){g.setUpDisabledFace(g.createFace(g.getUpFace(),String("up-disabled"),(((k=g.UP_DISABLED)!==null&(j=g).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"UP_DISABLED"):g.UP_DISABLED)))}return(((i=g.upDisabled)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"upDisabled"):g.upDisabled)},1,[null,null,["self"]]);e.getUpDisabledFace=d;d=$pyjs__bind_method(f,"getUpFace",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return(((i=g.up)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"up"):g.up)},1,[null,null,["self"]]);e.getUpFace=d;d=$pyjs__bind_method(f,"getUpHoveringFace",function(){if(this.__is_instance__===true){var j=this}else{var j=arguments[0]}var l,m,g,h,i,k;if(pyjslib.bool(((((k=j.upHovering)!==null&(i=j).__is_instance__)&&typeof k=="function"?pyjslib.getattr(i,"upHovering"):j.upHovering)===null))){j.setUpHoveringFace(j.createFace(j.getUpFace(),String("up-hovering"),(((h=j.UP_HOVERING)!==null&(g=j).__is_instance__)&&typeof h=="function"?pyjslib.getattr(g,"UP_HOVERING"):j.UP_HOVERING)))}return(((m=j.upHovering)!==null&(l=j).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"upHovering"):j.upHovering)},1,[null,null,["self"]]);e.getUpHoveringFace=d;d=$pyjs__bind_method(f,"onBrowserEvent",function(O){if(this.__is_instance__===true){var s=this}else{var s=arguments[0];O=arguments[1]}var x,q,F,i,h,k,j,N,L,g,P,K,J,M,Q,u,r,t,n,m,p,o,l,D,E,B,C,H,I,w,y,z,G,A,v;if(pyjslib.bool(!pyjslib.bool(s.isEnabled()))){return null}x=pyjamas.ui["CustomButton"]["DOM"]["eventGetType"](O);if(pyjslib.bool(pyjslib.op_eq(x,String("click")))){if(pyjslib.bool(!pyjslib.bool((((z=s.allowClick)!==null&(y=s).__is_instance__)&&typeof z=="function"?pyjslib.getattr(y,"allowClick"):s.allowClick)))){pyjamas.ui["CustomButton"]["DOM"]["eventStopPropagation"](O);return null}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("mousedown")))){if(pyjslib.bool(pyjslib.op_eq(pyjamas.ui["CustomButton"]["DOM"]["eventGetButton"](O),(((w=pyjamas.ui["CustomButton"]["Event"]["BUTTON_LEFT"])!==null&(k=pyjamas.ui["CustomButton"]["Event"]).__is_instance__)&&typeof w=="function"?pyjslib.getattr(k,"BUTTON_LEFT"):pyjamas.ui["CustomButton"]["Event"]["BUTTON_LEFT"])))){s.setFocus(true);s.onClickStart();pyjamas.ui["CustomButton"]["DOM"]["setCapture"](s.getElement());s.isCapturing=true;pyjamas.ui["CustomButton"]["DOM"]["eventPreventDefault"](O)}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("mouseup")))){if(pyjslib.bool((((j=s.isCapturing)!==null&(i=s).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"isCapturing"):s.isCapturing))){s.isCapturing=false;pyjamas.ui["CustomButton"]["DOM"]["releaseCapture"](s.getElement());if(pyjslib.bool((pyjslib.bool(Q=s.isHovering())?pyjslib.op_eq(pyjamas.ui["CustomButton"]["DOM"]["eventGetButton"](O),(((h=pyjamas.ui["CustomButton"]["Event"]["BUTTON_LEFT"])!==null&(g=pyjamas.ui["CustomButton"]["Event"]).__is_instance__)&&typeof h=="function"?pyjslib.getattr(g,"BUTTON_LEFT"):pyjamas.ui["CustomButton"]["Event"]["BUTTON_LEFT"])):Q))){s.onClick()}}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("mousemove")))){if(pyjslib.bool((((P=s.isCapturing)!==null&(N=s).__is_instance__)&&typeof P=="function"?pyjslib.getattr(N,"isCapturing"):s.isCapturing))){pyjamas.ui["CustomButton"]["DOM"]["eventPreventDefault"](O)}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("mouseout")))){M=pyjamas.ui["CustomButton"]["DOM"]["eventGetToElement"](O);if(pyjslib.bool((pyjslib.bool(o=pyjamas.ui["CustomButton"]["DOM"]["isOrHasChild"](s.getElement(),pyjamas.ui["CustomButton"]["DOM"]["eventGetTarget"](O)))?(pyjslib.bool(u=(M===null))?u:!pyjslib.bool(pyjamas.ui["CustomButton"]["DOM"]["isOrHasChild"](s.getElement(),M))):o))){if(pyjslib.bool((((L=s.isCapturing)!==null&(K=s).__is_instance__)&&typeof L=="function"?pyjslib.getattr(K,"isCapturing"):s.isCapturing))){s.onClickCancel()}s.setHovering(false)}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("mouseover")))){if(pyjslib.bool(pyjamas.ui["CustomButton"]["DOM"]["isOrHasChild"](s.getElement(),pyjamas.ui["CustomButton"]["DOM"]["eventGetTarget"](O)))){s.setHovering(true);if(pyjslib.bool((((J=s.isCapturing)!==null&(I=s).__is_instance__)&&typeof J=="function"?pyjslib.getattr(I,"isCapturing"):s.isCapturing))){s.onClickStart()}}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("blur")))){if(pyjslib.bool((((H=s.isFocusing)!==null&(G=s).__is_instance__)&&typeof H=="function"?pyjslib.getattr(G,"isFocusing"):s.isFocusing))){s.isFocusing=false;s.onClickCancel()}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("losecapture")))){if(pyjslib.bool((((F=s.isCapturing)!==null&(E=s).__is_instance__)&&typeof F=="function"?pyjslib.getattr(E,"isCapturing"):s.isCapturing))){s.isCapturing=false;s.onClickCancel()}}}}}}}}}pyjamas.ui["CustomButton"]["ButtonBase"]["onBrowserEvent"](s,O);if(pyjslib.bool(!pyjslib.op_eq((pyjamas.ui["CustomButton"]["DOM"]["eventGetTypeInt"](O))&((((D=pyjamas.ui["CustomButton"]["Event"]["KEYEVENTS"])!==null&(C=pyjamas.ui["CustomButton"]["Event"]).__is_instance__)&&typeof D=="function"?pyjslib.getattr(C,"KEYEVENTS"):pyjamas.ui["CustomButton"]["Event"]["KEYEVENTS"])),0))){v=pyjamas.ui["CustomButton"]["DOM"]["eventGetKeyCode"](O);if(pyjslib.bool(pyjslib.op_eq(x,String("keydown")))){if(pyjslib.bool(pyjslib.op_eq(v,String(" ")))){s.isFocusing=true;s.onClickStart()}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("keyup")))){if(pyjslib.bool((pyjslib.bool(m=(((B=s.isFocusing)!==null&(A=s).__is_instance__)&&typeof B=="function"?pyjslib.getattr(A,"isFocusing"):s.isFocusing))?pyjslib.op_eq(v,String(" ")):m))){s.isFocusing=false;s.onClick()}}else{if(pyjslib.bool(pyjslib.op_eq(x,String("keypress")))){if(pyjslib.bool((pyjslib.bool(r=pyjslib.op_eq(v,String("\x0A")))?r:pyjslib.op_eq(v,String("\x0D"))))){s.onClickStart();s.onClick()}}}}}return null},1,[null,null,["self"],["event"]]);e.onBrowserEvent=d;d=$pyjs__bind_method(f,"setAccessKey",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}return null},1,[null,null,["self"],["key"]]);e.setAccessKey=d;d=$pyjs__bind_method(f,"setEnabled",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}if(pyjslib.bool(!pyjslib.op_eq(g.isEnabled(),h))){g.toggleDisabled();pyjamas.ui["CustomButton"]["ButtonBase"]["setEnabled"](g,h);if(pyjslib.bool(!pyjslib.bool(h))){g.cleanupCaptureState()}else{g.setAriaPressed(g.getCurrentFace())}}return null},1,[null,null,["self"],["enabled"]]);e.setEnabled=d;d=$pyjs__bind_method(f,"setFocus",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}if(pyjslib.bool(h)){pyjamas.ui["CustomButton"]["Focus"]["focus"](g.getElement())}else{pyjamas.ui["CustomButton"]["Focus"]["blur"](g.getElement())}return null},1,[null,null,["self"],["focused"]]);e.setFocus=d;d=$pyjs__bind_method(f,"setHTML",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.getCurrentFace()["setHTML"](h);return null},1,[null,null,["self"],["html"]]);e.setHTML=d;d=$pyjs__bind_method(f,"setTabIndex",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}pyjamas.ui["CustomButton"]["Focus"]["setTabIndex"](g.getElement(),h);return null},1,[null,null,["self"],["index"]]);e.setTabIndex=d;d=$pyjs__bind_method(f,"setText",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.getCurrentFace()["setText"](h);return null},1,[null,null,["self"],["text"]]);e.setText=d;d=$pyjs__bind_method(f,"isDown",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return(pyjslib.cmp(((((i=g.DOWN_ATTRIBUTE)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"DOWN_ATTRIBUTE"):g.DOWN_ATTRIBUTE))&(g.getCurrentFace()["getFaceID"]()),0)==1)},1,[null,null,["self"]]);e.isDown=d;d=$pyjs__bind_method(f,"onAttach",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}g.finishSetup();pyjamas.ui["CustomButton"]["ButtonBase"]["onAttach"](g);return null},1,[null,null,["self"]]);e.onAttach=d;d=$pyjs__bind_method(f,"onClick",function(i){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];i=arguments[1]}if(typeof i=="undefined"){i=arguments.callee.__args__[3][1]}var g;h.allowClick=true;g=null;pyjamas.ui["CustomButton"]["DOM"]["buttonClick"](h.getElement());h.allowClick=false;return null},1,[null,null,["self"],["sender",null]]);e.onClick=d;d=$pyjs__bind_method(f,"onClickCancel",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return null},1,[null,null,["self"]]);e.onClickCancel=d;d=$pyjs__bind_method(f,"onClickStart",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return null},1,[null,null,["self"]]);e.onClickStart=d;d=$pyjs__bind_method(f,"onDetach",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}pyjamas.ui["CustomButton"]["ButtonBase"]["onDetach"](g);g.cleanupCaptureState();return null},1,[null,null,["self"]]);e.onDetach=d;d=$pyjs__bind_method(f,"setDown",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}if(pyjslib.bool(!pyjslib.op_eq(h,g.isDown()))){g.toggleDown()}return null},1,[null,null,["self"],["down"]]);e.setDown=d;d=$pyjs__bind_method(f,"finishSetup",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h,i;if(pyjslib.bool(((((i=g.curFace)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"curFace"):g.curFace)===null))){g.setCurrentFace(g.getUpFace())}return null},1,[null,null,["self"]]);e.finishSetup=d;d=$pyjs__bind_method(f,"fireClickListeners",function(g){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];g=arguments[1]}h.fireEvent(pyjamas.ui.CustomButton.ClickEvent());return null},1,[null,null,["self"],["nativeEvent"]]);e.fireClickListeners=d;d=$pyjs__bind_method(f,"fireEvent",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return null},1,[null,null,["self"]]);e.fireEvent=d;d=$pyjs__bind_method(f,"getCurrentFace",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h,i;g.finishSetup();return(((i=g.curFace)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"curFace"):g.curFace)},1,[null,null,["self"]]);e.getCurrentFace=d;d=$pyjs__bind_method(f,"isHovering",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var h,i;return(pyjslib.cmp(((((i=g.HOVERING_ATTRIBUTE)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"HOVERING_ATTRIBUTE"):g.HOVERING_ATTRIBUTE))&(g.getCurrentFace()["getFaceID"]()),0)==1)},1,[null,null,["self"]]);e.isHovering=d;d=$pyjs__bind_method(f,"setHovering",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}if(pyjslib.bool(!pyjslib.op_eq(h,g.isHovering()))){g.toggleHover()}return null},1,[null,null,["self"],["hovering"]]);e.setHovering=d;d=$pyjs__bind_method(f,"toggleDown",function(){if(this.__is_instance__===true){var i=this}else{var i=arguments[0]}var j,h,g;g=(i.getCurrentFace()["getFaceID"]())^((((j=i.DOWN_ATTRIBUTE)!==null&(h=i).__is_instance__)&&typeof j=="function"?pyjslib.getattr(h,"DOWN_ATTRIBUTE"):i.DOWN_ATTRIBUTE));i.setCurrentFaceFromID(g);return null},1,[null,null,["self"]]);e.toggleDown=d;d=$pyjs__bind_method(f,"cleanupCaptureState",function(){if(this.__is_instance__===true){var j=this}else{var j=arguments[0]}var l,k,g,i,m,h;if(pyjslib.bool((pyjslib.bool(l=(((h=j.isCapturing)!==null&(i=j).__is_instance__)&&typeof h=="function"?pyjslib.getattr(i,"isCapturing"):j.isCapturing))?l:(((g=j.isFocusing)!==null&(m=j).__is_instance__)&&typeof g=="function"?pyjslib.getattr(m,"isFocusing"):j.isFocusing)))){pyjamas.ui["CustomButton"]["DOM"]["releaseCapture"](j.getElement());j.isCapturing=false;j.isFocusing=false;j.onClickCancel()}return null},1,[null,null,["self"]]);e.cleanupCaptureState=d;d=$pyjs__bind_method(f,"createFace",function(k,i,g){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];k=arguments[1];i=arguments[2];g=arguments[3]}var j;j=pyjamas.ui["CustomButton"]["Face"](h,k);j.setName(i);j.setFaceID(g);return j},1,[null,null,["self"],["delegateTo"],["name"],["faceID"]]);e.createFace=d;d=$pyjs__bind_method(f,"getFaceFromID",function(o){if(this.__is_instance__===true){var r=this}else{var r=arguments[0];o=arguments[1]}var q,t,i,j,g,h,s,p,n,m,l,k;if(pyjslib.bool(pyjslib.op_eq(o,(((k=r.DOWN)!==null&(j=r).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"DOWN"):r.DOWN)))){return r.getDownFace()}else{if(pyjslib.bool(pyjslib.op_eq(o,(((i=r.UP)!==null&(h=r).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"UP"):r.UP)))){return r.getUpFace()}else{if(pyjslib.bool(pyjslib.op_eq(o,(((g=r.DOWN_HOVERING)!==null&(t=r).__is_instance__)&&typeof g=="function"?pyjslib.getattr(t,"DOWN_HOVERING"):r.DOWN_HOVERING)))){return r.getDownHoveringFace()}else{if(pyjslib.bool(pyjslib.op_eq(o,(((q=r.UP_HOVERING)!==null&(s=r).__is_instance__)&&typeof q=="function"?pyjslib.getattr(s,"UP_HOVERING"):r.UP_HOVERING)))){return r.getUpHoveringFace()}else{if(pyjslib.bool(pyjslib.op_eq(o,(((p=r.UP_DISABLED)!==null&(n=r).__is_instance__)&&typeof p=="function"?pyjslib.getattr(n,"UP_DISABLED"):r.UP_DISABLED)))){return r.getUpDisabledFace()}else{if(pyjslib.bool(pyjslib.op_eq(o,(((m=r.DOWN_DISABLED)!==null&(l=r).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"DOWN_DISABLED"):r.DOWN_DISABLED)))){return r.getDownDisabledFace()}else{pyjslib.printFunc([pyjamas.ui.CustomButton.id,String(" is not a known face id.")],1)}}}}}}return null},1,[null,null,["self"],["face_id"]]);e.getFaceFromID=d;d=$pyjs__bind_method(f,"setAriaPressed",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}var i,j,k;i=pyjslib.op_eq((h.getFaceID())&((((k=g.DOWN_ATTRIBUTE)!==null&(j=g).__is_instance__)&&typeof k=="function"?pyjslib.getattr(j,"DOWN_ATTRIBUTE"):g.DOWN_ATTRIBUTE)),1);return null},1,[null,null,["self"],["newFace"]]);e.setAriaPressed=d;d=$pyjs__bind_method(f,"setCurrentFace",function(l){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];l=arguments[1]}var h,i,k,n,m,j;if(pyjslib.bool(!pyjslib.op_eq((((n=g.curFace)!==null&(m=g).__is_instance__)&&typeof n=="function"?pyjslib.getattr(m,"curFace"):g.curFace),l))){if(pyjslib.bool(((((j=g.curFace)!==null&(k=g).__is_instance__)&&typeof j=="function"?pyjslib.getattr(k,"curFace"):g.curFace)!==null))){g.removeStyleDependentName(g.curFace["getName"]())}g.curFace=l;g.setCurrentFaceElement(l.getFace());g.addStyleDependentName(g.curFace["getName"]());if(pyjslib.bool((((i=g.isEnabled)!==null&(h=g).__is_instance__)&&typeof i=="function"?pyjslib.getattr(h,"isEnabled"):g.isEnabled))){g.setAriaPressed(l)}g.style_name=g.getStyleName()}return null},1,[null,null,["self"],["newFace"]]);e.setCurrentFace=d;d=$pyjs__bind_method(f,"setCurrentFaceFromID",function(g){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];g=arguments[1]}var i;i=h.getFaceFromID(g);h.setCurrentFace(i);return null},1,[null,null,["self"],["faceID"]]);e.setCurrentFaceFromID=d;d=$pyjs__bind_method(f,"setCurrentFaceElement",function(o){if(this.__is_instance__===true){var p=this}else{var p=arguments[0];o=arguments[1]}var i,n,j,k,l,m,g,h;if(pyjslib.bool(!pyjslib.op_eq((((n=p.curFaceElement)!==null&(m=p).__is_instance__)&&typeof n=="function"?pyjslib.getattr(m,"curFaceElement"):p.curFaceElement),o))){if(pyjslib.bool(((((l=p.curFaceElement)!==null&(k=p).__is_instance__)&&typeof l=="function"?pyjslib.getattr(k,"curFaceElement"):p.curFaceElement)!==null))){pyjamas.ui["CustomButton"]["DOM"]["removeChild"](p.getElement(),(((j=p.curFaceElement)!==null&(h=p).__is_instance__)&&typeof j=="function"?pyjslib.getattr(h,"curFaceElement"):p.curFaceElement))}p.curFaceElement=o;pyjamas.ui["CustomButton"]["DOM"]["appendChild"](p.getElement(),(((g=p.curFaceElement)!==null&(i=p).__is_instance__)&&typeof g=="function"?pyjslib.getattr(i,"curFaceElement"):p.curFaceElement))}return null},1,[null,null,["self"],["newFaceElement"]]);e.setCurrentFaceElement=d;d=$pyjs__bind_method(f,"setDownDisabledFace",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.downDisabled=h;return null},1,[null,null,["self"],["downDisabled"]]);e.setDownDisabledFace=d;d=$pyjs__bind_method(f,"setDownFace",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.down=h;return null},1,[null,null,["self"],["down"]]);e.setDownFace=d;d=$pyjs__bind_method(f,"setDownHoveringFace",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.downHovering=h;return null},1,[null,null,["self"],["downHovering"]]);e.setDownHoveringFace=d;d=$pyjs__bind_method(f,"setUpDisabledFace",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.upDisabled=h;return null},1,[null,null,["self"],["upDisabled"]]);e.setUpDisabledFace=d;d=$pyjs__bind_method(f,"setUpFace",function(g){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];g=arguments[1]}h.up=g;return null},1,[null,null,["self"],["up"]]);e.setUpFace=d;d=$pyjs__bind_method(f,"setUpHoveringFace",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.upHovering=h;return null},1,[null,null,["self"],["upHovering"]]);e.setUpHoveringFace=d;d=$pyjs__bind_method(f,"toggleDisabled",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var k,j,l,i,g;g=(h.getCurrentFace()["getFaceID"]())^((((l=h.DISABLED_ATTRIBUTE)!==null&(k=h).__is_instance__)&&typeof l=="function"?pyjslib.getattr(k,"DISABLED_ATTRIBUTE"):h.DISABLED_ATTRIBUTE));g&=~((((j=h.HOVERING_ATTRIBUTE)!==null&(i=h).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"HOVERING_ATTRIBUTE"):h.HOVERING_ATTRIBUTE));h.setCurrentFaceFromID(g);return null},1,[null,null,["self"]]);e.toggleDisabled=d;d=$pyjs__bind_method(f,"toggleHover",function(){if(this.__is_instance__===true){var k=this}else{var k=arguments[0]}var h,g,j,l,i;i=(k.getCurrentFace()["getFaceID"]())^((((j=k.HOVERING_ATTRIBUTE)!==null&(h=k).__is_instance__)&&typeof j=="function"?pyjslib.getattr(h,"HOVERING_ATTRIBUTE"):k.HOVERING_ATTRIBUTE));i&=~((((g=k.DISABLED_ATTRIBUTE)!==null&(l=k).__is_instance__)&&typeof g=="function"?pyjslib.getattr(l,"DISABLED_ATTRIBUTE"):k.DISABLED_ATTRIBUTE));k.setCurrentFaceFromID(i);return null},1,[null,null,["self"]]);e.toggleHover=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["CustomButton"]["ButtonBase"]))})();pyjamas.ui["CustomButton"]["Factory"]["registerClass"](String("pyjamas.ui.CustomButton"),pyjamas.ui["CustomButton"]["CustomButton"]);return this};