/* start module: pyjamas.ui.PushButton */
$pyjs.loaded_modules['pyjamas.ui.PushButton'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.PushButton'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.PushButton'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['PushButton'] = $pyjs.loaded_modules["pyjamas.ui.PushButton"];
	pyjamas['ui']['PushButton'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.PushButton';
	var __name__ = pyjamas['ui']['PushButton'].__name__ = __mod_name__;
	var PushButton = pyjamas['ui']['PushButton'];


	pyjamas['ui']['PushButton']['CustomButton'] = pyjslib['___import___']('CustomButton.CustomButton', 'pyjamas.ui', null, false);
	pyjamas['ui']['PushButton']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['PushButton']['PushButton'] = (function(){
		var $cls_instance = $pyjs__class_instance('PushButton');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e67f834bba71966ae51536d5ff9321cc';
		$cls_definition['STYLENAME_DEFAULT'] = String('gwt-PushButton');
		$method = $pyjs__bind_method($cls_instance, '__init__', function(upImageText, downImageText, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				upImageText = arguments[1];
				downImageText = arguments[2];
				handler = arguments[3];
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof handler != 'undefined') {
					if (handler !== null && typeof handler['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = handler;
						handler = arguments[4];
					}
				} else 				if (typeof downImageText != 'undefined') {
					if (downImageText !== null && typeof downImageText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = downImageText;
						downImageText = arguments[4];
					}
				} else 				if (typeof upImageText != 'undefined') {
					if (upImageText !== null && typeof upImageText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = upImageText;
						upImageText = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof upImageText == 'undefined') upImageText=arguments.callee.__args__[3][1];
			if (typeof downImageText == 'undefined') downImageText=arguments.callee.__args__[4][1];
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[5][1];
			var $attr2,$attr1;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), ((($attr1=self['STYLENAME_DEFAULT']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
							pyjslib['getattr']($attr2, 'STYLENAME_DEFAULT'):
							self['STYLENAME_DEFAULT']));
			}
			$pyjs_kwargs_call(pyjamas['ui']['PushButton']['CustomButton'], '__init__', null, kwargs, [{}, self, upImageText, downImageText, handler]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['upImageText', null],['downImageText', null],['handler', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

			self['setDown'](false);
			pyjamas['ui']['PushButton']['CustomButton']['onClick'](self);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClickCancel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['setDown'](false);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onClickCancel'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClickStart', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['setDown'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onClickStart'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['PushButton']['CustomButton']));
	})();
	pyjamas['ui']['PushButton']['Factory']['registerClass'](String('pyjamas.ui.PushButton'), pyjamas['ui']['PushButton']['PushButton']);
	return this;
}; /* end pyjamas.ui.PushButton */


/* end module: pyjamas.ui.PushButton */


/*
PYJS_DEPS: ['CustomButton.CustomButton', 'CustomButton', 'pyjamas.Factory', 'pyjamas']
*/
