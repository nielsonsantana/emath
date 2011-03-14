/* start module: pyjamas.ui.TabBar */
$pyjs.loaded_modules['pyjamas.ui.TabBar'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TabBar'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TabBar'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['TabBar'] = $pyjs.loaded_modules["pyjamas.ui.TabBar"];
	pyjamas['ui']['TabBar'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TabBar';
	var __name__ = pyjamas['ui']['TabBar'].__name__ = __mod_name__;
	var TabBar = pyjamas['ui']['TabBar'];


	pyjamas['ui']['TabBar']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['Composite'] = pyjslib['___import___']('Composite.Composite', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['HTML'] = pyjslib['___import___']('HTML.HTML', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['Label'] = pyjslib['___import___']('Label.Label', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['HorizontalPanel'] = pyjslib['___import___']('HorizontalPanel.HorizontalPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['ClickDelegatePanel'] = pyjslib['___import___']('ClickDelegatePanel.ClickDelegatePanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['HasAlignment'] = pyjslib['___import___']('pyjamas.ui.HasAlignment', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabBar']['TabBar'] = (function(){
		var $cls_instance = $pyjs__class_instance('TabBar');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '2047a63b10b6369639ab7932ecc092bb';
		$cls_definition['STYLENAME_DEFAULT'] = String('gwt-TabBarItem');
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $attr1,$attr2,$attr5,$attr4,rest,element,$attr6,$attr3,first;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-TabBar'));
			}
			element = null;
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			self.panel = $pyjs_kwargs_call(null, pyjamas['ui']['TabBar']['HorizontalPanel'], null, null, [{Element:element}]);
			self.selectedTab = null;
			self.tabListeners = pyjslib['list']([]);
			self['panel']['setVerticalAlignment'](((($attr1=pyjamas['ui']['TabBar']['HasAlignment']['ALIGN_BOTTOM']) !== null & ($attr2=pyjamas['ui']['TabBar']['HasAlignment']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'ALIGN_BOTTOM'):
						pyjamas['ui']['TabBar']['HasAlignment']['ALIGN_BOTTOM']));
			first = pyjamas['ui']['TabBar']['HTML'](String('\x26nbsp\x3B'), true);
			rest = pyjamas['ui']['TabBar']['HTML'](String('\x26nbsp\x3B'), true);
			first['setStyleName'](String('gwt-TabBarFirst'));
			rest['setStyleName'](String('gwt-TabBarRest'));
			first['setHeight'](String('100%'));
			rest['setHeight'](String('100%'));
			self['panel']['add'](first);
			self['panel']['add'](rest);
			first['setHeight'](String('100%'));
			self['panel']['setCellHeight'](first, String('100%'));
			self['panel']['setCellWidth'](rest, String('100%'));
			$pyjs_kwargs_call(pyjamas['ui']['TabBar']['Composite'], '__init__', null, kwargs, [{}, self, ((($attr3=self['panel']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'panel'):
						self['panel'])]);
			self['sinkEvents'](((($attr5=pyjamas['ui']['TabBar']['Event']['ONCLICK']) !== null & ($attr6=pyjamas['ui']['TabBar']['Event']).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'ONCLICK'):
						pyjamas['ui']['TabBar']['Event']['ONCLICK']));
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addTab', function(text, asHTML) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
			}
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[4][1];

			self['insertTab'](text, asHTML, self['getTabCount']());
			return null;
		}
	, 1, [null,null,['self'],['text'],['asHTML', false]]);
		$cls_definition['addTab'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addTabListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tabListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addTabListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSelectedTab', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr7,$sub2,$sub1,$attr10;
			if (pyjslib['bool']((((($attr7=self['selectedTab']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'selectedTab'):
						self['selectedTab']) === null))) {
				return (typeof ($usub1=1)=='number'?
					-$usub1:
					pyjslib['op_usub']($usub1));
			}
			return (typeof ($sub1=self['panel']['getWidgetIndex'](((($attr9=self['selectedTab']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'selectedTab'):
						self['selectedTab'])))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedTab'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getTabCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub3,$sub4;
			return (typeof ($sub3=self['panel']['getWidgetCount']())==typeof ($sub4=2) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				pyjslib['op_sub']($sub3,$sub4));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getTabHTML', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var fpe,widget,delPanel,$add2,$add1,focusablePanel;
			if (pyjslib['bool']((((pyjslib['cmp'](index, self['getTabCount']()))|1) == 1))) {
				return null;
			}
			delPanel = self['panel']['getWidget']((typeof ($add1=index)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)));
			focusablePanel = delPanel['getFocusablePanel']();
			widget = focusablePanel['getWidget']();
			if (pyjslib['bool'](pyjslib['hasattr'](widget, String('getHTML')))) {
				return widget['getHTML']();
			}
			else if (pyjslib['bool'](pyjslib['hasattr'](widget, String('getText')))) {
				return widget['getText']();
			}
			else {
				fpe = pyjamas['ui']['TabBar']['DOM']['getParent'](self['focusablePanel']['getElement']());
				return pyjamas['ui']['TabBar']['DOM']['getInnerHTML'](fpe);
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getTabHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createTabTextWrapper', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createTabTextWrapper'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insertTab', function(text, asHTML, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
				beforeIndex = arguments[3];
			}
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[5][1];
			var $or4,istext,$or1,err,$or3,$or2,$add3,$pyjs_try_err,item,$add4;
			if (pyjslib['bool']((beforeIndex === null))) {
				beforeIndex = asHTML;
				asHTML = false;
			}
			if (pyjslib['bool']((pyjslib['bool']($or1=(pyjslib['cmp'](beforeIndex, 0) == -1))?$or1:(pyjslib['cmp'](beforeIndex, self['getTabCount']()) == 1)))) {
			}
			if (pyjslib['bool']((text === null))) {
				text = pyjamas['ui']['TabBar']['HTML'](String('\x26nbsp\x3B'), true);
				text['setWidth'](String('100%'));
				text['setStyleName'](String('gwt-TabBarRest'));
				self['panel']['insert'](text, (typeof ($add3=beforeIndex)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4)));
				self['panel']['setCellWidth'](text, String('100%'));
				return null;
			}
			try {
				istext = (pyjslib['bool']($or3=pyjslib['isinstance'](text, pyjslib['str']))?$or3:pyjslib['isinstance'](text, pyjamas.ui.TabBar.unicode));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.ui.TabBar, try_lineno: 117};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 120;
					err = $pyjs_try_err;
					istext = pyjslib['isinstance'](text, pyjslib['str']);
				}
			}
			if (pyjslib['bool'](istext)) {
				if (pyjslib['bool'](asHTML)) {
					item = pyjamas['ui']['TabBar']['HTML'](text);
				}
				else {
					item = pyjamas['ui']['TabBar']['Label'](text);
				}
				item['setWordWrap'](false);
			}
			else {
				item = text;
			}
			self['insertTabWidget'](item, beforeIndex);
			return null;
		}
	, 1, [null,null,['self'],['text'],['asHTML'],['beforeIndex', null]]);
		$cls_definition['insertTab'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insertTabWidget', function(widget, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			var $add7,$attr14,focusablePanel,$attr13,$add5,$add6,$add8,$attr11,delWidget,$attr12;
			delWidget = pyjamas['ui']['TabBar']['ClickDelegatePanel'](self, widget, self, self);
			delWidget['setStyleName'](((($attr11=self['STYLENAME_DEFAULT']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'STYLENAME_DEFAULT'):
						self['STYLENAME_DEFAULT']));
			focusablePanel = delWidget['getFocusablePanel']();
			self['panel']['insert'](delWidget, (typeof ($add5=beforeIndex)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				pyjslib['op_add']($add5,$add6)));
			self['setStyleName'](pyjamas['ui']['TabBar']['DOM']['getParent'](delWidget['getElement']()), (typeof ($add7=((($attr13=self['STYLENAME_DEFAULT']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'STYLENAME_DEFAULT'):
						self['STYLENAME_DEFAULT']))==typeof ($add8=String('-wrapper')) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				pyjslib['op_add']($add7,$add8)), true);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['beforeIndex']]);
		$cls_definition['insertTabWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];
			var $iter1_nextval,$iter1_type,$iter1_idx,i,$iter1_iter,$sub8,$iter1_array,$sub7,$sub6,$sub5;
			$iter1_iter = pyjslib['range'](1, (typeof ($sub5=self['panel']['getWidgetCount']())==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				pyjslib['op_sub']($sub5,$sub6)));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				if (pyjslib['bool'](pyjamas['ui']['TabBar']['DOM']['isOrHasChild'](self['panel']['getWidget'](i)['getElement'](), sender['getElement']()))) {
					return self['selectTab']((typeof ($sub7=i)==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						pyjslib['op_sub']($sub7,$sub8)));
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeTab', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var toRemove,$attr16,$add10,$attr15,$add9;
			self['checkTabIndex'](index);
			toRemove = self['panel']['getWidget']((typeof ($add9=index)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				pyjslib['op_add']($add9,$add10)));
			if (pyjslib['bool'](pyjslib['op_eq'](toRemove, ((($attr15=self['selectedTab']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'selectedTab'):
						self['selectedTab'])))) {
				self.selectedTab = null;
			}
			self['panel']['remove'](toRemove);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['removeTab'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeTabListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tabListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeTabListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'selectTab', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$attr20,$iter3_array,$iter3_iter,listener,$iter2_idx,$iter3_idx,$attr19,$attr18,$add12,$iter3_type,$attr17,$iter3_nextval,$iter2_array,$add11;
			self['checkTabIndex'](index);
			$iter2_iter = self['tabListeners'];
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				listener = $iter2_nextval;
				if (pyjslib['bool'](!pyjslib['bool'](listener['onBeforeTabSelected'](self, index)))) {
					return false;
				}
			}
			self['setSelectionStyle'](((($attr17=self['selectedTab']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'selectedTab'):
						self['selectedTab']), false);
			if (pyjslib['bool'](pyjslib['op_eq'](index, (typeof ($usub2=1)=='number'?
				-$usub2:
				pyjslib['op_usub']($usub2))))) {
				self.selectedTab = null;
				return true;
			}
			self.selectedTab = self['panel']['getWidget']((typeof ($add11=index)==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				pyjslib['op_add']($add11,$add12)));
			self['setSelectionStyle'](((($attr19=self['selectedTab']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'selectedTab'):
						self['selectedTab']), true);
			$iter3_iter = self['tabListeners'];
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				listener = $iter3_nextval;
				listener['onTabSelected'](self, index);
			}
			return true;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['selectTab'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'checkTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $or5,$or6;
			if (pyjslib['bool']((pyjslib['bool']($or5=(pyjslib['cmp'](index, (typeof ($usub3=1)=='number'?
				-$usub3:
				pyjslib['op_usub']($usub3))) == -1))?$or5:(((pyjslib['cmp'](index, self['getTabCount']()))|1) == 1)))) {
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['checkTabIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setSelectionStyle', function(item, selected) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				selected = arguments[2];
			}

			if (pyjslib['bool']((item !== null))) {
				if (pyjslib['bool'](selected)) {
					item['addStyleName'](String('gwt-TabBarItem-selected'));
					self['setStyleName'](pyjamas['ui']['TabBar']['DOM']['getParent'](item['getElement']()), String('gwt-TabBarItem-wrapper-selected'), true);
				}
				else {
					item['removeStyleName'](String('gwt-TabBarItem-selected'));
					self['setStyleName'](pyjamas['ui']['TabBar']['DOM']['getParent'](item['getElement']()), String('gwt-TabBarItem-wrapper-selected'), false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item'],['selected']]);
		$cls_definition['setSelectionStyle'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['TabBar']['Composite']));
	})();
	pyjamas['ui']['TabBar']['Factory']['registerClass'](String('pyjamas.ui.TabBar'), pyjamas['ui']['TabBar']['TabBar']);
	return this;
}; /* end pyjamas.ui.TabBar */


/* end module: pyjamas.ui.TabBar */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Composite.Composite', 'Composite', 'pyjamas.ui.Event', 'pyjamas.ui', 'HTML.HTML', 'HTML', 'Label.Label', 'Label', 'HorizontalPanel.HorizontalPanel', 'HorizontalPanel', 'ClickDelegatePanel.ClickDelegatePanel', 'ClickDelegatePanel', 'pyjamas.ui.HasAlignment']
*/
