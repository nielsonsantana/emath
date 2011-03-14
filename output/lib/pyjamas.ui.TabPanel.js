/* start module: pyjamas.ui.TabPanel */
$pyjs.loaded_modules['pyjamas.ui.TabPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TabPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TabPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['TabPanel'] = $pyjs.loaded_modules["pyjamas.ui.TabPanel"];
	pyjamas['ui']['TabPanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TabPanel';
	var __name__ = pyjamas['ui']['TabPanel'].__name__ = __mod_name__;
	var TabPanel = pyjamas['ui']['TabPanel'];


	pyjamas['ui']['TabPanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabPanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabPanel']['Composite'] = pyjslib['___import___']('Composite.Composite', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabPanel']['DeckPanel'] = pyjslib['___import___']('DeckPanel.DeckPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabPanel']['VerticalPanel'] = pyjslib['___import___']('VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabPanel']['TabBar'] = pyjslib['___import___']('TabBar.TabBar', 'pyjamas.ui', null, false);
	pyjamas['ui']['TabPanel']['TabPanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('TabPanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '0e2ce16c66b70f13a073471157b0ecdd';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(tabBar) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				tabBar = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof tabBar != 'undefined') {
					if (tabBar !== null && typeof tabBar['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = tabBar;
						tabBar = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof tabBar == 'undefined') tabBar=arguments.callee.__args__[3][1];
			var $attr1,$attr2,$attr5,$attr4,element,$attr6,$attr3,panel;
			self.tab_children = pyjslib['list']([]);
			self.deck = $pyjs_kwargs_call(null, pyjamas['ui']['TabPanel']['DeckPanel'], null, null, [{StyleName:String('gwt-TabPanelBottom')}]);
			if (pyjslib['bool']((tabBar === null))) {
				self.tabBar = pyjamas['ui']['TabPanel']['TabBar']();
			}
			else {
				self.tabBar = tabBar;
			}
			self.tabListeners = pyjslib['list']([]);
			element = null;
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			panel = $pyjs_kwargs_call(null, pyjamas['ui']['TabPanel']['VerticalPanel'], null, null, [{Element:element}]);
			panel['add'](((($attr1=self['tabBar']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'tabBar'):
						self['tabBar']));
			panel['add'](((($attr3=self['deck']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'deck'):
						self['deck']));
			panel['setCellHeight'](((($attr5=self['deck']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'deck'):
						self['deck']), String('100%'));
			self['tabBar']['setWidth'](String('100%'));
			self['tabBar']['addTabListener'](self);
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-TabPanel'));
			}
			$pyjs_kwargs_call(pyjamas['ui']['TabPanel']['Composite'], '__init__', null, kwargs, [{}, self, panel]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['tabBar', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function(widget, tabText, asHTML) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				tabText = arguments[2];
				asHTML = arguments[3];
			}
			if (typeof tabText == 'undefined') tabText=arguments.callee.__args__[4][1];
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[5][1];

			self['insert'](widget, tabText, asHTML, self['getWidgetCount']());
			return null;
		}
	, 1, [null,null,['self'],['widget'],['tabText', null],['asHTML', false]]);
		$cls_definition['add'] = $method;
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
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			while (pyjslib['bool']((pyjslib['cmp'](self['getWidgetCount'](), 0) == 1))) {
				self['remove'](self['getWidget'](0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getDeckPanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return ((($attr7=self['deck']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'deck'):
						self['deck']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDeckPanel'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getTabBar', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return ((($attr9=self['tabBar']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'tabBar'):
						self['tabBar']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabBar'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidget', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr11,$attr12;
			return ((($attr11=self['tab_children']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'tab_children'):
						self['tab_children']).__getitem__(index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidgetCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return pyjslib['len'](((($attr13=self['tab_children']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'tab_children'):
						self['tab_children']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidgetCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidgetIndex', function(child) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
			}

			return self['tab_children']['index'](child);
		}
	, 1, [null,null,['self'],['child']]);
		$cls_definition['getWidgetIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert', function(widget, tabText, asHTML, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				tabText = arguments[2];
				asHTML = arguments[3];
				beforeIndex = arguments[4];
			}
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[5][1];
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[6][1];

			if (pyjslib['bool']((beforeIndex === null))) {
				beforeIndex = asHTML;
				asHTML = false;
			}
			self['tab_children']['insert'](beforeIndex, widget);
			self['tabBar']['insertTab'](tabText, asHTML, beforeIndex);
			self['deck']['insert'](widget, beforeIndex);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['tabText'],['asHTML', false],['beforeIndex', null]]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['tab_children']['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBeforeTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $iter1_nextval,$iter1_idx,$iter1_iter,listener,$iter1_array,$iter1_type;
			$iter1_iter = self['tabListeners'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				if (pyjslib['bool'](!pyjslib['bool'](listener['onBeforeTabSelected'](sender, tabIndex)))) {
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onBeforeTabSelected'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$iter2_array;
			self['deck']['showWidget'](tabIndex);
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
				listener['onTabSelected'](sender, tabIndex);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onTabSelected'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var index;
			if (pyjslib['bool'](pyjslib['isinstance'](widget, pyjslib['float_int']))) {
				widget = self['getWidget'](widget);
			}
			index = self['getWidgetIndex'](widget);
			if (pyjslib['bool'](pyjslib['op_eq'](index, (typeof ($usub1=1)=='number'?
				-$usub1:
				pyjslib['op_usub']($usub1))))) {
				return false;
			}
			self['tab_children']['remove'](widget);
			self['tabBar']['removeTab'](index);
			self['deck']['remove'](widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
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

			self['tabBar']['selectTab'](index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['selectTab'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['TabPanel']['Composite']));
	})();
	pyjamas['ui']['TabPanel']['Factory']['registerClass'](String('pyjamas.ui.TabPanel'), pyjamas['ui']['TabPanel']['TabPanel']);
	return this;
}; /* end pyjamas.ui.TabPanel */


/* end module: pyjamas.ui.TabPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Composite.Composite', 'Composite', 'DeckPanel.DeckPanel', 'DeckPanel', 'VerticalPanel.VerticalPanel', 'VerticalPanel', 'TabBar.TabBar', 'TabBar']
*/
