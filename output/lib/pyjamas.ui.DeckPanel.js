/* start module: pyjamas.ui.DeckPanel */
$pyjs.loaded_modules['pyjamas.ui.DeckPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DeckPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DeckPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['DeckPanel'] = $pyjs.loaded_modules["pyjamas.ui.DeckPanel"];
	pyjamas['ui']['DeckPanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DeckPanel';
	var __name__ = pyjamas['ui']['DeckPanel'].__name__ = __mod_name__;
	var DeckPanel = pyjamas['ui']['DeckPanel'];


	pyjamas['ui']['DeckPanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['DeckPanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['DeckPanel']['ComplexPanel'] = pyjslib['___import___']('ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['DeckPanel']['DeckPanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('DeckPanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '8ab50b2bad1741e076dd571794c4a901';
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
			var element;
			self.visibleWidget = null;
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['DeckPanel']['DOM']['createDiv']();
			}
			self['setElement'](element);
			$pyjs_kwargs_call(pyjamas['ui']['DeckPanel']['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['insert'](widget, self['getWidgetCount']());
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getVisibleWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return self['getWidgetIndex'](((($attr1=self['visibleWidget']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'visibleWidget'):
						self['visibleWidget']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVisibleWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert', function(widget, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[4][1];
			var $or1,$or2,child;
			if (pyjslib['bool']((pyjslib['bool']($or1=(pyjslib['cmp'](beforeIndex, 0) == -1))?$or1:(pyjslib['cmp'](beforeIndex, self['getWidgetCount']()) == 1)))) {
				return null;
			}
			pyjamas['ui']['DeckPanel']['ComplexPanel']['insert'](self, widget, self['getElement'](), beforeIndex);
			child = widget['getElement']();
			pyjamas['ui']['DeckPanel']['DOM']['setStyleAttribute'](child, String('width'), String('100%'));
			pyjamas['ui']['DeckPanel']['DOM']['setStyleAttribute'](child, String('height'), String('100%'));
			widget['setVisible'](false);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['beforeIndex', null]]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr3,$attr4;
			if (pyjslib['bool'](pyjslib['isinstance'](widget, pyjslib['float_int']))) {
				widget = self['getWidget'](widget);
			}
			if (pyjslib['bool'](!pyjslib['bool'](pyjamas['ui']['DeckPanel']['ComplexPanel']['remove'](self, widget)))) {
				return false;
			}
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr3=self['visibleWidget']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'visibleWidget'):
						self['visibleWidget']), widget))) {
				self.visibleWidget = null;
			}
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'showWidget', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr5,$attr6;
			self['checkIndex'](index);
			if (pyjslib['bool']((((($attr5=self['visibleWidget']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'visibleWidget'):
						self['visibleWidget']) !== null))) {
				self['visibleWidget']['setVisible'](false);
			}
			self.visibleWidget = self['getWidget'](index);
			self['visibleWidget']['setVisible'](true);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['showWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'checkIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $or3,$or4;
			if (pyjslib['bool']((pyjslib['bool']($or3=(pyjslib['cmp'](index, 0) == -1))?$or3:(((pyjslib['cmp'](index, self['getWidgetCount']()))|1) == 1)))) {
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['checkIndex'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['DeckPanel']['ComplexPanel']));
	})();
	pyjamas['ui']['DeckPanel']['Factory']['registerClass'](String('pyjamas.ui.DeckPanel'), pyjamas['ui']['DeckPanel']['DeckPanel']);
	return this;
}; /* end pyjamas.ui.DeckPanel */


/* end module: pyjamas.ui.DeckPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'ComplexPanel.ComplexPanel', 'ComplexPanel']
*/
