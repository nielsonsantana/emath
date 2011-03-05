/* start module: PaginaPrincipal */
var PaginaPrincipal;
$pyjs.loaded_modules['PaginaPrincipal'] = function (__mod_name__) {
	if($pyjs.loaded_modules['PaginaPrincipal'].__was_initialized__) return $pyjs.loaded_modules['PaginaPrincipal'];
	PaginaPrincipal = $pyjs.loaded_modules["PaginaPrincipal"];
	PaginaPrincipal.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'PaginaPrincipal';
	var __name__ = PaginaPrincipal.__name__ = __mod_name__;


	PaginaPrincipal['Canvas'] = pyjslib['___import___']('pyjamas.Canvas2D.Canvas', null, null, false);
	PaginaPrincipal['RootPanel'] = pyjslib['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	PaginaPrincipal['getFirstChild'] = pyjslib['___import___']('pyjamas.DOM.getFirstChild', null, null, false);
	PaginaPrincipal['Window'] = pyjslib['___import___']('pyjamas.Window', null, null, false);
	PaginaPrincipal['math'] = pyjslib['___import___']('math', null);
	PaginaPrincipal['Button'] = pyjslib['___import___']('pyjamas.ui.Button.Button', null, null, false);
	PaginaPrincipal['CustomButton'] = pyjslib['___import___']('pyjamas.ui.CustomButton.CustomButton', null, null, false);
	PaginaPrincipal['Image'] = pyjslib['___import___']('pyjamas.ui.Image.Image', null, null, false);
	PaginaPrincipal['HTML'] = pyjslib['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	PaginaPrincipal['Label'] = pyjslib['___import___']('pyjamas.ui.Label.Label', null, null, false);
	PaginaPrincipal['Grid'] = pyjslib['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	PaginaPrincipal['TabPanel'] = pyjslib['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	PaginaPrincipal['Soma'] = pyjslib['___import___']('componentes.soma.Soma', null, null, false);
	PaginaPrincipal['ToggleButton'] = pyjslib['___import___']('pyjamas.ui.ToggleButton.ToggleButton', null, null, false);
	PaginaPrincipal['PushButton'] = pyjslib['___import___']('pyjamas.ui.PushButton.PushButton', null, null, false);
	PaginaPrincipal['PopupPanel'] = pyjslib['___import___']('pyjamas.ui.PopupPanel.PopupPanel', null, null, false);
	PaginaPrincipal['DialogBox'] = pyjslib['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	PaginaPrincipal['VerticalPanel'] = pyjslib['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	PaginaPrincipal['PopupPagina'] = pyjslib['___import___']('PopupPagina.PopupPagina', null, null, false);
	PaginaPrincipal['DOM'] = pyjslib['___import___']('pyjamas.DOM', null, null, false);
	PaginaPrincipal['pyjslib'] = pyjslib['___import___']('pyjslib', null);
	PaginaPrincipal['dynamic'] = pyjslib['___import___']('dynamic', null);
	PaginaPrincipal['initCanvas'] = function() {

window.parent.init();
	};
	PaginaPrincipal['initCanvas'].__name__ = 'initCanvas';

	PaginaPrincipal['initCanvas'].__bind_type__ = 0;
	PaginaPrincipal['initCanvas'].__args__ = [null,null];
	PaginaPrincipal['MainPage'] = (function(){
		var $cls_instance = $pyjs__class_instance('MainPage');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '7d79d69e629d8586271fdb9e42d3c038';
		$method = $pyjs__bind_method($cls_instance, 'onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var multiplicacaobutton,imagemSubtracao,imagemSoma,imagemMultiplicacao,grid,tabpanel,imagemMultiplicacaoPorEscalar,somabutton,MultiplicacaoPorEscalarbutton,contents,subtracaobutton;
			self.popupsubtraca = $pyjs_kwargs_call(null, PaginaPrincipal['PopupPagina'], null, null, [{id:String('subtracaobutton'), datasrc:String('fsubtracao.pjs')}]);
			self.popupsoma = $pyjs_kwargs_call(null, PaginaPrincipal['PopupPagina'], null, null, [{id:String('soma'), datasrc:String('fsoma.pjs')}]);
			self.popupmultescalar = $pyjs_kwargs_call(null, PaginaPrincipal['PopupPagina'], null, null, [{id:String('escalar'), datasrc:String('fmultescalar.pjs')}]);
			self.popupmult = $pyjs_kwargs_call(null, PaginaPrincipal['PopupPagina'], null, null, [{id:String('mult'), datasrc:String('fmult.pjs')}]);
			self.dialogbbox = PaginaPrincipal['DialogBox']();
			tabpanel = PaginaPrincipal['TabPanel']();
			grid = PaginaPrincipal['Grid'](4, 2);
			imagemSoma = PaginaPrincipal['Image'](String('images/Soma_Matriz_sum_matrix.png'));
			imagemSubtracao = PaginaPrincipal['Image'](String('images/subtracao_Matriz_subtract_matrix.png'));
			imagemMultiplicacao = PaginaPrincipal['Image'](String('images/multiplicacao_Matriz_product_matrix.png'));
			imagemMultiplicacaoPorEscalar = PaginaPrincipal['Image'](String('images/multiplicacao_por_escalar.png'));
			somabutton = PaginaPrincipal['PushButton'](imagemSoma, imagemSoma, pyjslib['getattr'](self, String('onSomaButtonClick')));
			subtracaobutton = PaginaPrincipal['PushButton'](imagemSubtracao, imagemSubtracao, pyjslib['getattr'](self, String('onSubtracaoButtonClick')));
			multiplicacaobutton = PaginaPrincipal['PushButton'](imagemMultiplicacao, imagemMultiplicacao, pyjslib['getattr'](self, String('onMultiplicacaoButtonClick')));
			MultiplicacaoPorEscalarbutton = PaginaPrincipal['PushButton'](imagemMultiplicacaoPorEscalar, imagemMultiplicacaoPorEscalar, pyjslib['getattr'](self, String('onMulPorEscalarButtonClick')));
			somabutton['setWidth'](325);
			subtracaobutton['setWidth'](325);
			multiplicacaobutton['setWidth'](325);
			MultiplicacaoPorEscalarbutton['setWidth'](325);
			contents = PaginaPrincipal['VerticalPanel']();
			contents['setSpacing'](4);
			contents['add'](PaginaPrincipal['HTML'](String('You can place any contents you like in a dialog box.')));
			self['dialogbbox']['setHTML'](String('\x3Cb\x3EWelcome to the dialog box\x3C/b\x3E'));
			self['dialogbbox']['setTitle'](String('ssssssssss'));
			self['dialogbbox']['setWidget'](contents);
			grid['setWidget'](0, 0, somabutton);
			grid['setWidget'](0, 1, subtracaobutton);
			grid['setWidget'](2, 0, multiplicacaobutton);
			grid['setWidget'](2, 1, MultiplicacaoPorEscalarbutton);
			grid['setStyleName'](PaginaPrincipal.element);
			tabpanel['add'](PaginaPrincipal['HTML'](String('Modulo de introducao a matrizes')), String('\x3Ch2\x3EModulo de introducao a Matrizes\x3C/h2\x3E'), true);
			tabpanel['add'](grid, String('\x3Ch2\x3E  eMath  \x3C/h2\x3E'), true);
			tabpanel['add'](PaginaPrincipal['HTML'](String('Modulo de introducao a matrizes')), String('\x3Ch2\x3EAjuda para usar a ferramenta\x3C/h2\x3E'), true);
			tabpanel['setSize'](String('90%'), String(' 70%'));
			PaginaPrincipal['RootPanel'](String('conteudo'))['add'](tabpanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onSomaButtonClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['popupsoma']['show']();
			PaginaPrincipal['initCanvas']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onSomaButtonClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onSubtracaoButtonClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['popupsubtraca']['show']();
			PaginaPrincipal['initCanvas']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onSubtracaoButtonClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMulPorEscalarButtonClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['popupmultescalar']['show']();
			PaginaPrincipal['initCanvas']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMulPorEscalarButtonClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMultiplicacaoButtonClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['popupmult']['show']();
			PaginaPrincipal['initCanvas']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMultiplicacaoButtonClick'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	if (pyjslib['bool'](pyjslib['op_eq'](PaginaPrincipal['__name__'], String('__main__')))) {
		PaginaPrincipal['app'] = PaginaPrincipal['MainPage']();
		PaginaPrincipal['app']['onModuleLoad']();
	}
	return this;
}; /* end PaginaPrincipal */


/* end module: PaginaPrincipal */


/*
PYJS_DEPS: ['pyjamas.Canvas2D.Canvas', 'pyjamas', 'pyjamas.Canvas2D', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM.getFirstChild', 'pyjamas.DOM', 'pyjamas.Window', 'math', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.CustomButton.CustomButton', 'pyjamas.ui.CustomButton', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'componentes.soma.Soma', 'componentes', 'componentes.soma', 'pyjamas.ui.ToggleButton.ToggleButton', 'pyjamas.ui.ToggleButton', 'pyjamas.ui.PushButton.PushButton', 'pyjamas.ui.PushButton', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'PopupPagina.PopupPagina', 'PopupPagina', 'pyjslib', 'dynamic']
*/
