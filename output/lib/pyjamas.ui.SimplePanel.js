/* start module: pyjamas.ui.SimplePanel */
$pyjs.loaded_modules['pyjamas.ui.SimplePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.SimplePanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.SimplePanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['SimplePanel'] = $pyjs.loaded_modules["pyjamas.ui.SimplePanel"];
	pyjamas['ui']['SimplePanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.SimplePanel';
	var __name__ = pyjamas['ui']['SimplePanel'].__name__ = __mod_name__;
	var SimplePanel = pyjamas['ui']['SimplePanel'];


	pyjamas['ui']['SimplePanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['SimplePanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['SimplePanel']['Panel'] = pyjslib['___import___']('Panel.Panel', 'pyjamas.ui', null, false);
	pyjamas['ui']['SimplePanel']['SimplePanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('SimplePanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '1887d142d930bf4e3c0a6a8a51883438';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(Element) {
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
				Element = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof Element != 'undefined') {
					if (Element !== null && typeof Element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Element;
						Element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof Element == 'undefined') Element=arguments.callee.__args__[3][1];

			if (pyjslib['bool']((Element === null))) {
				Element = pyjamas['ui']['SimplePanel']['DOM']['createDiv']();
			}
			self['setElement'](Element);
			$pyjs_kwargs_call(pyjamas['ui']['SimplePanel']['Panel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['Element', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if (pyjslib['bool']((self['getWidget']() !== null))) {
				console['error'](String('SimplePanel can only contain one child widget'));
				return null;
			}
			self['setWidget'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2,$attr3,$attr4;
			if (pyjslib['bool'](pyjslib['len'](((($attr1=self['children']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'children'):
						self['children'])))) {
				return ((($attr3=self['children']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, 'children'):
							self['children']).__getitem__(0);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr5,$attr6;
			if (pyjslib['bool'](!pyjslib['op_eq'](self['getWidget'](), widget))) {
				return false;
			}
			self['disown'](widget);
			((($attr5=self['children']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'children'):
						self['children']).__delitem__(0);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getContainerElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getElement']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContainerElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if (pyjslib['bool'](pyjslib['op_eq'](self['getWidget'](), widget))) {
				return null;
			}
			if (pyjslib['bool']((self['getWidget']() !== null))) {
				self['remove'](self['getWidget']());
			}
			if (pyjslib['bool']((widget !== null))) {
				self['adopt'](widget, self['getContainerElement']());
				self['children']['append'](widget);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['SimplePanel']['Panel']));
	})();
	pyjamas['ui']['SimplePanel']['Factory']['registerClass'](String('pyjamas.ui.SimplePanel'), pyjamas['ui']['SimplePanel']['SimplePanel']);
	return this;
}; /* end pyjamas.ui.SimplePanel */


/* end module: pyjamas.ui.SimplePanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Panel.Panel', 'Panel']
*/
