/* start module: pyjamas.ui.Composite */
$pyjs.loaded_modules['pyjamas.ui.Composite'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Composite'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Composite'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['Composite'] = $pyjs.loaded_modules["pyjamas.ui.Composite"];
	pyjamas['ui']['Composite'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Composite';
	var __name__ = pyjamas['ui']['Composite'].__name__ = __mod_name__;
	var Composite = pyjamas['ui']['Composite'];


	pyjamas['ui']['Composite']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['Composite']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['Composite']['Widget'] = pyjslib['___import___']('Widget.Widget', 'pyjamas.ui', null, false);
	pyjamas['ui']['Composite']['Composite'] = (function(){
		var $cls_instance = $pyjs__class_instance('Composite');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'fb6b4e746a4f97808637d5b7e464028a';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(widget) {
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
				widget = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof widget != 'undefined') {
					if (widget !== null && typeof widget['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = widget;
						widget = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof widget == 'undefined') widget=arguments.callee.__args__[3][1];

			self.widget = null;
			self.attached = null;
			if (pyjslib['bool'](widget)) {
				self['initWidget'](widget);
			}
			$pyjs_kwargs_call(pyjamas['ui']['Composite']['Widget'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['widget', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'initWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr1,$attr2;
			if (pyjslib['bool']((((($attr1=self['widget']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'widget'):
						self['widget']) !== null))) {
				return null;
			}
			widget['removeFromParent']();
			self['setElement'](widget['getElement']());
			self.widget = widget;
			widget['setParent'](self);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['initWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isAttached', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			if (pyjslib['bool'](((($attr3=self['widget']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'widget'):
						self['widget']))) {
				return self['widget']['isAttached']();
			}
			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isAttached'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onAttach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['widget']['onAttach']();
			pyjamas['ui']['Composite']['DOM']['setEventListener'](self['getElement'](), self);
			self['onLoad']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['widget']['onDetach']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['initWidget'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			pyjamas['ui']['Composite']['Widget']['onBrowserEvent'](self, event);
			self['widget']['onBrowserEvent'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['Composite']['Widget']));
	})();
	pyjamas['ui']['Composite']['Factory']['registerClass'](String('pyjamas.ui.Composite'), pyjamas['ui']['Composite']['Composite']);
	return this;
}; /* end pyjamas.ui.Composite */


/* end module: pyjamas.ui.Composite */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Widget.Widget', 'Widget']
*/
