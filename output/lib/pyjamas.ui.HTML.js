/* start module: pyjamas.ui.HTML */
$pyjs.loaded_modules['pyjamas.ui.HTML'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HTML'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HTML'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['HTML'] = $pyjs.loaded_modules["pyjamas.ui.HTML"];
	pyjamas['ui']['HTML'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTML';
	var __name__ = pyjamas['ui']['HTML'].__name__ = __mod_name__;
	var HTML = pyjamas['ui']['HTML'];


	pyjamas['ui']['HTML']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTML']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTML']['Label'] = pyjslib['___import___']('Label.Label', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTML']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTML']['InnerHTML'] = pyjslib['___import___']('pyjamas.ui.InnerHTML', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTML']['HTML'] = (function(){
		var $cls_instance = $pyjs__class_instance('HTML');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '6364bcd348ffb66341265d10c9216ffe';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(html, wordWrap, Element) {
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
				html = arguments[1];
				wordWrap = arguments[2];
				Element = arguments[3];
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
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
						Element = arguments[4];
					}
				} else 				if (typeof wordWrap != 'undefined') {
					if (wordWrap !== null && typeof wordWrap['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = wordWrap;
						wordWrap = arguments[4];
					}
				} else 				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = html;
						html = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
			if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];
			if (typeof Element == 'undefined') Element=arguments.callee.__args__[5][1];
			var $attr1,$attr2,$attr4,$attr3;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-HTML'));
			}
			if (pyjslib['bool'](html)) {
				kwargs.__setitem__(String('HTML'), html);
			}
			kwargs.__setitem__(String('WordWrap'), wordWrap);
			if (pyjslib['bool']((Element === null))) {
				Element = pyjamas['ui']['HTML']['DOM']['createDiv']();
			}
			self['setElement'](Element);
			$pyjs_kwargs_call(pyjamas['ui']['HTML']['Label'], '__init__', null, kwargs, [{}, self]);
			self['sinkEvents']((((($attr1=pyjamas['ui']['HTML']['Event']['ONCLICK']) !== null & ($attr2=pyjamas['ui']['HTML']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'ONCLICK'):
						pyjamas['ui']['HTML']['Event']['ONCLICK']))|(((($attr3=pyjamas['ui']['HTML']['Event']['MOUSEEVENTS']) !== null & ($attr4=pyjamas['ui']['HTML']['Event']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'MOUSEEVENTS'):
						pyjamas['ui']['HTML']['Event']['MOUSEEVENTS'])));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['html', null],['wordWrap', true],['Element', null]]);
		$cls_definition['__init__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['HTML']['Label'],pyjamas['ui']['HTML']['InnerHTML']));
	})();
	pyjamas['ui']['HTML']['Factory']['registerClass'](String('pyjamas.ui.HTML'), pyjamas['ui']['HTML']['HTML']);
	return this;
}; /* end pyjamas.ui.HTML */


/* end module: pyjamas.ui.HTML */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Label.Label', 'Label', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.InnerHTML']
*/
