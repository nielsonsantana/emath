/* start module: pyjamas.ui.ClickDelegatePanel */
$pyjs.loaded_modules['pyjamas.ui.ClickDelegatePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ClickDelegatePanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ClickDelegatePanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['ClickDelegatePanel'] = $pyjs.loaded_modules["pyjamas.ui.ClickDelegatePanel"];
	pyjamas['ui']['ClickDelegatePanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ClickDelegatePanel';
	var __name__ = pyjamas['ui']['ClickDelegatePanel'].__name__ = __mod_name__;
	var ClickDelegatePanel = pyjamas['ui']['ClickDelegatePanel'];


	pyjamas['ui']['ClickDelegatePanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickDelegatePanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickDelegatePanel']['Composite'] = pyjslib['___import___']('Composite.Composite', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickDelegatePanel']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickDelegatePanel']['Focus'] = pyjslib['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickDelegatePanel']['SimplePanel'] = pyjslib['___import___']('SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickDelegatePanel']['KeyboardListener'] = pyjslib['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickDelegatePanel']['ClickDelegatePanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('ClickDelegatePanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '707b264b8caf090619349e2f5b68eafb';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(p, child, cDelegate, kDelegate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p = arguments[1];
				child = arguments[2];
				cDelegate = arguments[3];
				kDelegate = arguments[4];
			}
			var $attr8,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,wrapperWidget,$attr3;
			pyjamas['ui']['ClickDelegatePanel']['Composite']['__init__'](self);
			self.clickDelegate = cDelegate;
			self.keyDelegate = kDelegate;
			self.focusablePanel = pyjamas['ui']['ClickDelegatePanel']['SimplePanel'](pyjamas['ui']['ClickDelegatePanel']['Focus']['createFocusable']());
			self['focusablePanel']['setWidget'](child);
			wrapperWidget = p['createTabTextWrapper']();
			if (pyjslib['bool']((wrapperWidget === null))) {
				self['initWidget'](((($attr1=self['focusablePanel']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
							pyjslib['getattr']($attr2, 'focusablePanel'):
							self['focusablePanel']));
			}
			else {
				wrapperWidget['setWidget'](((($attr3=self['focusablePanel']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, 'focusablePanel'):
							self['focusablePanel']));
				self['initWidget'](wrapperWidget);
			}
			if (pyjslib['bool'](pyjslib['hasattr'](child, String('addKeyboardListener')))) {
				child['addKeyboardListener'](kDelegate);
			}
			self['sinkEvents']((((($attr5=pyjamas['ui']['ClickDelegatePanel']['Event']['ONCLICK']) !== null & ($attr6=pyjamas['ui']['ClickDelegatePanel']['Event']).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'ONCLICK'):
						pyjamas['ui']['ClickDelegatePanel']['Event']['ONCLICK']))|(((($attr7=pyjamas['ui']['ClickDelegatePanel']['Event']['ONKEYDOWN']) !== null & ($attr8=pyjamas['ui']['ClickDelegatePanel']['Event']).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'ONKEYDOWN'):
						pyjamas['ui']['ClickDelegatePanel']['Event']['ONKEYDOWN'])));
			return null;
		}
	, 1, [null,null,['self'],['p'],['child'],['cDelegate'],['kDelegate']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

			self['clickDelegate']['onClick'](sender);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getFocusablePanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return ((($attr9=self['focusablePanel']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'focusablePanel'):
						self['focusablePanel']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFocusablePanel'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var modifiers,type,$attr11,$attr12;
			type = pyjamas['ui']['ClickDelegatePanel']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('click')))) {
				self['onClick'](self);
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](type, String('keydown')))) {
				modifiers = pyjamas['ui']['ClickDelegatePanel']['KeyboardListener']['getKeyboardModifiers'](event);
				if (pyjslib['bool'](pyjslib['hasattr'](((($attr11=self['keyDelegate']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'keyDelegate'):
							self['keyDelegate']), String('onKeyDown')))) {
					self['keyDelegate']['onKeyDown'](self, pyjamas['ui']['ClickDelegatePanel']['DOM']['eventGetKeyCode'](event), modifiers);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['ClickDelegatePanel']['Composite']));
	})();
	return this;
}; /* end pyjamas.ui.ClickDelegatePanel */


/* end module: pyjamas.ui.ClickDelegatePanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Composite.Composite', 'Composite', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Focus', 'SimplePanel.SimplePanel', 'SimplePanel', 'pyjamas.ui.KeyboardListener']
*/
