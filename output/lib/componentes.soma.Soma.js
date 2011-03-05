/* start module: componentes.soma.Soma */
$pyjs.loaded_modules['componentes.soma.Soma'] = function (__mod_name__) {
	if($pyjs.loaded_modules['componentes.soma.Soma'].__was_initialized__) return $pyjs.loaded_modules['componentes.soma.Soma'];
	if(typeof $pyjs.loaded_modules['componentes.soma'] == 'undefined' || !$pyjs.loaded_modules['componentes.soma'].__was_initialized__) pyjslib['___import___']('componentes.soma', null);
	componentes['soma']['Soma'] = $pyjs.loaded_modules["componentes.soma.Soma"];
	componentes['soma']['Soma'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'componentes.soma.Soma';
	var __name__ = componentes['soma']['Soma'].__name__ = __mod_name__;
	var Soma = componentes['soma']['Soma'];


	componentes['soma']['Soma']['Canvas'] = pyjslib['___import___']('pyjamas.Canvas2D.Canvas', 'componentes.soma', null, false);
	componentes['soma']['Soma']['RootPanel'] = pyjslib['___import___']('pyjamas.ui.RootPanel.RootPanel', 'componentes.soma', null, false);
	componentes['soma']['Soma']['getFirstChild'] = pyjslib['___import___']('pyjamas.DOM.getFirstChild', 'componentes.soma', null, false);
	componentes['soma']['Soma']['Window'] = pyjslib['___import___']('pyjamas.Window', 'componentes.soma', null, false);
	componentes['soma']['Soma']['math'] = pyjslib['___import___']('math', 'componentes.soma');
	componentes['soma']['Soma']['Button'] = pyjslib['___import___']('pyjamas.ui.Button.Button', 'componentes.soma', null, false);
	componentes['soma']['Soma']['HTML'] = pyjslib['___import___']('pyjamas.ui.HTML.HTML', 'componentes.soma', null, false);
	componentes['soma']['Soma']['Label'] = pyjslib['___import___']('pyjamas.ui.Label.Label', 'componentes.soma', null, false);
	componentes['soma']['Soma']['TabPanel'] = pyjslib['___import___']('pyjamas.ui.TabPanel.TabPanel', 'componentes.soma', null, false);
	componentes['soma']['Soma']['Soma'] = (function(){
		var $cls_instance = $pyjs__class_instance('Soma');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '25b876f660a0b86c264a1a011bf4229a';
		$method = $pyjs__bind_method($cls_instance, 'onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var tabpanel;
			tabpanel = componentes['soma']['Soma']['TabPanel']();
			tabpanel['add'](componentes['soma']['Soma']['HTML'](String('Modulo de introducao a matrizes')), String('\x3Ch2\x3EModulo de introducao a Matrizes\x3C/h2\x3E'), true);
			tabpanel['add'](componentes['soma']['Soma']['HTML'](String('Modulo de introducao a matrizes')), String('\x3Ch2\x3EImat\x3C/h2\x3E'), true);
			tabpanel['add'](componentes['soma']['Soma']['HTML'](String('Modulo de introducao a matrizes')), String('\x3Ch2\x3EAjuda para usar a ferramenta\x3C/h2\x3E'), true);
			tabpanel['setSize'](String('90%'), String(' 70%'));
			componentes['soma']['Soma']['RootPanel']()['add'](tabpanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	if (pyjslib['bool'](pyjslib['op_eq'](componentes['soma']['Soma']['__name__'], String('__main__')))) {
		componentes['soma']['Soma']['app'] = componentes.soma.Soma.MainPage();
		componentes['soma']['Soma']['app']['onModuleLoad']();
	}
	return this;
}; /* end componentes.soma.Soma */


/* end module: componentes.soma.Soma */


/*
PYJS_DEPS: ['pyjamas.Canvas2D.Canvas', 'pyjamas', 'pyjamas.Canvas2D', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM.getFirstChild', 'pyjamas.DOM', 'pyjamas.Window', 'math', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel']
*/
