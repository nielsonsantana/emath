$pyjs.loaded_modules["pyjamas.ui.TabBar"]=function(b){if($pyjs.loaded_modules["pyjamas.ui.TabBar"].__was_initialized__){return $pyjs.loaded_modules["pyjamas.ui.TabBar"]}if(typeof $pyjs.loaded_modules["pyjamas.ui"]=="undefined"||!$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__){pyjslib.___import___("pyjamas.ui",null)}pyjamas.ui["TabBar"]=$pyjs.loaded_modules["pyjamas.ui.TabBar"];pyjamas.ui["TabBar"].__was_initialized__=true;if((b===null)||(typeof b=="undefined")){b="pyjamas.ui.TabBar"}var a=pyjamas.ui["TabBar"].__name__=b;var c=pyjamas.ui["TabBar"];pyjamas.ui["TabBar"]["DOM"]=pyjslib.___import___("pyjamas.DOM","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["Factory"]=pyjslib.___import___("pyjamas.Factory","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["Composite"]=pyjslib.___import___("Composite.Composite","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["Event"]=pyjslib.___import___("pyjamas.ui.Event","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["HTML"]=pyjslib.___import___("HTML.HTML","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["Label"]=pyjslib.___import___("Label.Label","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["HorizontalPanel"]=pyjslib.___import___("HorizontalPanel.HorizontalPanel","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["ClickDelegatePanel"]=pyjslib.___import___("ClickDelegatePanel.ClickDelegatePanel","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["HasAlignment"]=pyjslib.___import___("pyjamas.ui.HasAlignment","pyjamas.ui",null,false);pyjamas.ui["TabBar"]["TabBar"]=(function(){var f=$pyjs__class_instance("TabBar");var e=new Object();var d;e.__md5__="2047a63b10b6369639ab7932ecc092bb";e.STYLENAME_DEFAULT=String("gwt-TabBarItem");d=$pyjs__bind_method(f,"__init__",function(){if(this.__is_instance__===true){var q=this;var g=arguments.length>=1?arguments[arguments.length-1]:arguments[arguments.length];if(typeof g!="object"||g.__name__!="dict"||typeof g.$pyjs_is_kwarg=="undefined"){g=arguments[arguments.length+1]}else{delete g["$pyjs_is_kwarg"]}}else{var q=arguments[0];var g=arguments.length>=2?arguments[arguments.length-1]:arguments[arguments.length];if(typeof g!="object"||g.__name__!="dict"||typeof g.$pyjs_is_kwarg=="undefined"){g=arguments[arguments.length+1]}else{delete g["$pyjs_is_kwarg"]}}if(typeof g=="undefined"){g=pyjslib.__empty_dict();if(typeof q!="undefined"){if(q!==null&&typeof q["$pyjs_is_kwarg"]!="undefined"){g=q;q=arguments[1]}}else{}}var p,o,l,m,h,i,k,n,j;if(pyjslib.bool(!pyjslib.bool(g.has_key(String("StyleName"))))){g.__setitem__(String("StyleName"),String("gwt-TabBar"))}i=null;if(pyjslib.bool(g.has_key(String("Element")))){i=g.pop(String("Element"))}q.panel=$pyjs_kwargs_call(null,pyjamas.ui["TabBar"]["HorizontalPanel"],null,null,[{Element:i}]);q.selectedTab=null;q.tabListeners=pyjslib.list([]);q.panel["setVerticalAlignment"]((((p=pyjamas.ui["TabBar"]["HasAlignment"]["ALIGN_BOTTOM"])!==null&(o=pyjamas.ui["TabBar"]["HasAlignment"]).__is_instance__)&&typeof p=="function"?pyjslib.getattr(o,"ALIGN_BOTTOM"):pyjamas.ui["TabBar"]["HasAlignment"]["ALIGN_BOTTOM"]));j=pyjamas.ui["TabBar"]["HTML"](String("\x26nbsp\x3B"),true);h=pyjamas.ui["TabBar"]["HTML"](String("\x26nbsp\x3B"),true);j.setStyleName(String("gwt-TabBarFirst"));h.setStyleName(String("gwt-TabBarRest"));j.setHeight(String("100%"));h.setHeight(String("100%"));q.panel["add"](j);q.panel["add"](h);j.setHeight(String("100%"));q.panel["setCellHeight"](j,String("100%"));q.panel["setCellWidth"](h,String("100%"));$pyjs_kwargs_call(pyjamas.ui["TabBar"]["Composite"],"__init__",null,g,[{},q,(((n=q.panel)!==null&(m=q).__is_instance__)&&typeof n=="function"?pyjslib.getattr(m,"panel"):q.panel)]);q.sinkEvents((((l=pyjamas.ui["TabBar"]["Event"]["ONCLICK"])!==null&(k=pyjamas.ui["TabBar"]["Event"]).__is_instance__)&&typeof l=="function"?pyjslib.getattr(k,"ONCLICK"):pyjamas.ui["TabBar"]["Event"]["ONCLICK"]));return null},1,[null,["kwargs"],["self"]]);e.__init__=d;d=$pyjs__bind_method(f,"addTab",function(h,i){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1];i=arguments[2]}if(typeof i=="undefined"){i=arguments.callee.__args__[4][1]}g.insertTab(h,i,g.getTabCount());return null},1,[null,null,["self"],["text"],["asHTML",false]]);e.addTab=d;d=$pyjs__bind_method(f,"addTabListener",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.tabListeners["append"](h);return null},1,[null,null,["self"],["listener"]]);e.addTabListener=d;d=$pyjs__bind_method(f,"getSelectedTab",function(){if(this.__is_instance__===true){var h=this}else{var h=arguments[0]}var j,k,l,m,g,i;if(pyjslib.bool(((((l=h.selectedTab)!==null&(k=h).__is_instance__)&&typeof l=="function"?pyjslib.getattr(k,"selectedTab"):h.selectedTab)===null))){return(typeof($usub1=1)=="number"?-$usub1:pyjslib.op_usub($usub1))}return(typeof(g=h.panel["getWidgetIndex"]((((j=h.selectedTab)!==null&(i=h).__is_instance__)&&typeof j=="function"?pyjslib.getattr(i,"selectedTab"):h.selectedTab)))==typeof(m=1)&&(typeof g=="number"||typeof g=="string")?g-m:pyjslib.op_sub(g,m))},1,[null,null,["self"]]);e.getSelectedTab=d;d=$pyjs__bind_method(f,"getTabCount",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}var i,h;return(typeof(i=g.panel["getWidgetCount"]())==typeof(h=2)&&(typeof i=="number"||typeof i=="string")?i-h:pyjslib.op_sub(i,h))},1,[null,null,["self"]]);e.getTabCount=d;d=$pyjs__bind_method(f,"getTabHTML",function(i){if(this.__is_instance__===true){var h=this}else{var h=arguments[0];i=arguments[1]}var g,n,m,j,k,l;if(pyjslib.bool((((pyjslib.cmp(i,h.getTabCount()))|1)==1))){return null}m=h.panel["getWidget"]((typeof(k=i)==typeof(j=1)&&(typeof k=="number"||typeof k=="string")?k+j:pyjslib.op_add(k,j)));l=m.getFocusablePanel();n=l.getWidget();if(pyjslib.bool(pyjslib.hasattr(n,String("getHTML")))){return n.getHTML()}else{if(pyjslib.bool(pyjslib.hasattr(n,String("getText")))){return n.getText()}else{g=pyjamas.ui["TabBar"]["DOM"]["getParent"](h.focusablePanel["getElement"]());return pyjamas.ui["TabBar"]["DOM"]["getInnerHTML"](g)}}return null},1,[null,null,["self"],["index"]]);e.getTabHTML=d;d=$pyjs__bind_method(f,"createTabTextWrapper",function(){if(this.__is_instance__===true){var g=this}else{var g=arguments[0]}return null},1,[null,null,["self"]]);e.createTabTextWrapper=d;d=$pyjs__bind_method(f,"insertTab",function(r,h,i){if(this.__is_instance__===true){var t=this}else{var t=arguments[0];r=arguments[1];h=arguments[2];i=arguments[3]}if(typeof i=="undefined"){i=arguments.callee.__args__[5][1]}var o,g,u,l,p,q,k,m,s,j;if(pyjslib.bool((i===null))){i=h;h=false}if(pyjslib.bool((pyjslib.bool(u=(pyjslib.cmp(i,0)==-1))?u:(pyjslib.cmp(i,t.getTabCount())==1)))){}if(pyjslib.bool((r===null))){r=pyjamas.ui["TabBar"]["HTML"](String("\x26nbsp\x3B"),true);r.setWidth(String("100%"));r.setStyleName(String("gwt-TabBarRest"));t.panel["insert"](r,(typeof(k=i)==typeof(j=1)&&(typeof k=="number"||typeof k=="string")?k+j:pyjslib.op_add(k,j)));t.panel["setCellWidth"](r,String("100%"));return null}try{g=(pyjslib.bool(p=pyjslib.isinstance(r,pyjslib.str))?p:pyjslib.isinstance(r,pyjamas.ui.TabBar.unicode))}catch(m){var n=(typeof m.__name__=="undefined"?m.name:m.__name__);$pyjs.__last_exception__={error:m,module:pyjamas.ui.TabBar,try_lineno:117};if(true){$pyjs.__last_exception__.except_lineno=120;l=m;g=pyjslib.isinstance(r,pyjslib.str)}}if(pyjslib.bool(g)){if(pyjslib.bool(h)){s=pyjamas.ui["TabBar"]["HTML"](r)}else{s=pyjamas.ui["TabBar"]["Label"](r)}s.setWordWrap(false)}else{s=r}t.insertTabWidget(s,i);return null},1,[null,null,["self"],["text"],["asHTML"],["beforeIndex",null]]);e.insertTab=d;d=$pyjs__bind_method(f,"insertTabWidget",function(n,j){if(this.__is_instance__===true){var s=this}else{var s=arguments[0];n=arguments[1];j=arguments[2]}var h,m,r,o,k,i,g,q,l,p;l=pyjamas.ui["TabBar"]["ClickDelegatePanel"](s,n,s,s);l.setStyleName((((q=s.STYLENAME_DEFAULT)!==null&(p=s).__is_instance__)&&typeof q=="function"?pyjslib.getattr(p,"STYLENAME_DEFAULT"):s.STYLENAME_DEFAULT));r=l.getFocusablePanel();s.panel["insert"](l,(typeof(k=j)==typeof(i=1)&&(typeof k=="number"||typeof k=="string")?k+i:pyjslib.op_add(k,i)));s.setStyleName(pyjamas.ui["TabBar"]["DOM"]["getParent"](l.getElement()),(typeof(h=(((o=s.STYLENAME_DEFAULT)!==null&(m=s).__is_instance__)&&typeof o=="function"?pyjslib.getattr(m,"STYLENAME_DEFAULT"):s.STYLENAME_DEFAULT))==typeof(g=String("-wrapper"))&&(typeof h=="number"||typeof h=="string")?h+g:pyjslib.op_add(h,g)),true);return null},1,[null,null,["self"],["widget"],["beforeIndex"]]);e.insertTabWidget=d;d=$pyjs__bind_method(f,"onClick",function(j){if(this.__is_instance__===true){var s=this}else{var s=arguments[0];j=arguments[1]}if(typeof j=="undefined"){j=arguments.callee.__args__[3][1]}var m,g,q,k,h,n,l,o,p,r;h=pyjslib.range(1,(typeof(r=s.panel["getWidgetCount"]())==typeof(p=1)&&(typeof r=="number"||typeof r=="string")?r-p:pyjslib.op_sub(r,p)));if(typeof(l=h.__array)!="undefined"){g=0}else{h=h.__iter__();g=typeof(l=h.__array)!="undefined"?0:(typeof h.$genfunc=="function"?1:-1)}q=0;while(typeof(m=(g?(g>0?h.next(true,false):pyjslib.wrapped_next(h)):l[q++]))!="undefined"){k=m;if(pyjslib.bool(pyjamas.ui["TabBar"]["DOM"]["isOrHasChild"](s.panel["getWidget"](k)["getElement"](),j.getElement()))){return s.selectTab((typeof(o=k)==typeof(n=1)&&(typeof o=="number"||typeof o=="string")?o-n:pyjslib.op_sub(o,n)))}}return false},1,[null,null,["self"],["sender",null]]);e.onClick=d;d=$pyjs__bind_method(f,"removeTab",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}var j,l,i,m,k;g.checkTabIndex(h);j=g.panel["getWidget"]((typeof(k=h)==typeof(i=1)&&(typeof k=="number"||typeof k=="string")?k+i:pyjslib.op_add(k,i)));if(pyjslib.bool(pyjslib.op_eq(j,(((m=g.selectedTab)!==null&(l=g).__is_instance__)&&typeof m=="function"?pyjslib.getattr(l,"selectedTab"):g.selectedTab)))){g.selectedTab=null}g.panel["remove"](j);return null},1,[null,null,["self"],["index"]]);e.removeTab=d;d=$pyjs__bind_method(f,"removeTabListener",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}g.tabListeners["remove"](h);return null},1,[null,null,["self"],["listener"]]);e.removeTabListener=d;d=$pyjs__bind_method(f,"selectTab",function(m){if(this.__is_instance__===true){var r=this}else{var r=arguments[0];m=arguments[1]}var i,g,s,y,w,v,j,u,n,o,p,k,h,q,t,x,l;r.checkTabIndex(m);s=r.tabListeners;if(typeof(x=s.__array)!="undefined"){g=0}else{s=s.__iter__();g=typeof(x=s.__array)!="undefined"?0:(typeof s.$genfunc=="function"?1:-1)}u=0;while(typeof(i=(g?(g>0?s.next(true,false):pyjslib.wrapped_next(s)):x[u++]))!="undefined"){j=i;if(pyjslib.bool(!pyjslib.bool(j.onBeforeTabSelected(r,m)))){return false}}r.setSelectionStyle((((q=r.selectedTab)!==null&(p=r).__is_instance__)&&typeof q=="function"?pyjslib.getattr(p,"selectedTab"):r.selectedTab),false);if(pyjslib.bool(pyjslib.op_eq(m,(typeof($usub2=1)=="number"?-$usub2:pyjslib.op_usub($usub2))))){r.selectedTab=null;return true}r.selectedTab=r.panel["getWidget"]((typeof(l=m)==typeof(k=1)&&(typeof l=="number"||typeof l=="string")?l+k:pyjslib.op_add(l,k)));r.setSelectionStyle((((o=r.selectedTab)!==null&(y=r).__is_instance__)&&typeof o=="function"?pyjslib.getattr(y,"selectedTab"):r.selectedTab),true);v=r.tabListeners;if(typeof(w=v.__array)!="undefined"){h=0}else{v=v.__iter__();h=typeof(w=v.__array)!="undefined"?0:(typeof v.$genfunc=="function"?1:-1)}n=0;while(typeof(t=(h?(h>0?v.next(true,false):pyjslib.wrapped_next(v)):w[n++]))!="undefined"){j=t;j.onTabSelected(r,m)}return true},1,[null,null,["self"],["index"]]);e.selectTab=d;d=$pyjs__bind_method(f,"checkTabIndex",function(h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];h=arguments[1]}var j,i;if(pyjslib.bool((pyjslib.bool(j=(pyjslib.cmp(h,(typeof($usub3=1)=="number"?-$usub3:pyjslib.op_usub($usub3)))==-1))?j:(((pyjslib.cmp(h,g.getTabCount()))|1)==1)))){}return null},1,[null,null,["self"],["index"]]);e.checkTabIndex=d;d=$pyjs__bind_method(f,"setSelectionStyle",function(i,h){if(this.__is_instance__===true){var g=this}else{var g=arguments[0];i=arguments[1];h=arguments[2]}if(pyjslib.bool((i!==null))){if(pyjslib.bool(h)){i.addStyleName(String("gwt-TabBarItem-selected"));g.setStyleName(pyjamas.ui["TabBar"]["DOM"]["getParent"](i.getElement()),String("gwt-TabBarItem-wrapper-selected"),true)}else{i.removeStyleName(String("gwt-TabBarItem-selected"));g.setStyleName(pyjamas.ui["TabBar"]["DOM"]["getParent"](i.getElement()),String("gwt-TabBarItem-wrapper-selected"),false)}}return null},1,[null,null,["self"],["item"],["selected"]]);e.setSelectionStyle=d;return $pyjs__class_function(f,e,new Array(pyjamas.ui["TabBar"]["Composite"]))})();pyjamas.ui["TabBar"]["Factory"]["registerClass"](String("pyjamas.ui.TabBar"),pyjamas.ui["TabBar"]["TabBar"]);return this};