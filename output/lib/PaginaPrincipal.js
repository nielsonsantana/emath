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
	PaginaPrincipal['Button'] = pyjslib['___import___']('pyjamas.ui.Button.Button', null, null, false);
	PaginaPrincipal['Image'] = pyjslib['___import___']('pyjamas.ui.Image.Image', null, null, false);
	PaginaPrincipal['HTML'] = pyjslib['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	PaginaPrincipal['Label'] = pyjslib['___import___']('pyjamas.ui.Label.Label', null, null, false);
	PaginaPrincipal['Grid'] = pyjslib['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	PaginaPrincipal['TabPanel'] = pyjslib['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	PaginaPrincipal['ToggleButton'] = pyjslib['___import___']('pyjamas.ui.ToggleButton.ToggleButton', null, null, false);
	PaginaPrincipal['PushButton'] = pyjslib['___import___']('pyjamas.ui.PushButton.PushButton', null, null, false);
	PaginaPrincipal['PopupPanel'] = pyjslib['___import___']('pyjamas.ui.PopupPanel.PopupPanel', null, null, false);
	PaginaPrincipal['DialogBox'] = pyjslib['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	PaginaPrincipal['VerticalPanel'] = pyjslib['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	PaginaPrincipal['PopupPagina'] = pyjslib['___import___']('PopupPagina.PopupPagina', null, null, false);
	PaginaPrincipal['DOM'] = pyjslib['___import___']('pyjamas.DOM', null, null, false);
	PaginaPrincipal['PopupSoma'] = pyjslib['___import___']('componentes.soma.PopupSoma.PopupSoma', null, null, false);
	PaginaPrincipal['PopupSub'] = pyjslib['___import___']('componentes.subtracao.PopupSub.PopupSub', null, null, false);
	PaginaPrincipal['PopupEscalar'] = pyjslib['___import___']('componentes.produtoescalar.PopupEscalar.PopupEscalar', null, null, false);
	PaginaPrincipal['PopupProduto'] = pyjslib['___import___']('componentes.produto.PopupProduto.PopupProduto', null, null, false);
	PaginaPrincipal['initCanvas'] = function() {

		PaginaPrincipal.JS(String('window.parent.init()\x3B'));
		return null;
	};
	PaginaPrincipal['initCanvas'].__name__ = 'initCanvas';

	PaginaPrincipal['initCanvas'].__bind_type__ = 0;
	PaginaPrincipal['initCanvas'].__args__ = [null,null];
	PaginaPrincipal['AnimacaoSoma'] = function() {

		PaginaPrincipal.JS(String('p = window.parent.Processing.getInstanceById(\x27soma\x27)\x3B p.loop()\x3B'));
		return null;
	};
	PaginaPrincipal['AnimacaoSoma'].__name__ = 'AnimacaoSoma';

	PaginaPrincipal['AnimacaoSoma'].__bind_type__ = 0;
	PaginaPrincipal['AnimacaoSoma'].__args__ = [null,null];
	PaginaPrincipal['MainPage'] = (function(){
		var $cls_instance = $pyjs__class_instance('MainPage');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '4736b0cac6fa5762df424f5f6601bd5d';
		$method = $pyjs__bind_method($cls_instance, 'onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var imgbtnMultiplicacao,$attr8,$attr1,$attr2,$attr5,$attr4,$attr7,imgbtnMultiplicacaoPorEscalar,grid,tabpanel,imgbtnSubtracao,$attr6,$attr3,contents,imgbtnSoma;
			self.popupsubtraca = $pyjs_kwargs_call(null, PaginaPrincipal['PopupSub'], null, null, [{id:String('sub'), datasrc:String('fsubtracao.pjs')}]);
			self.popupsoma = $pyjs_kwargs_call(null, PaginaPrincipal['PopupSoma'], null, null, [{id:String('soma'), datasrc:String('fsoma.pjs')}]);
			self.popupmultescalar = $pyjs_kwargs_call(null, PaginaPrincipal['PopupEscalar'], null, null, [{id:String('escalar'), datasrc:String('fmultescalar.pjs')}]);
			self.popupmult = $pyjs_kwargs_call(null, PaginaPrincipal['PopupProduto'], null, null, [{id:String('mult'), datasrc:String('fmult.pjs')}]);
			self['popupsoma'].iniciado = false;
			tabpanel = PaginaPrincipal['TabPanel']();
			grid = PaginaPrincipal['Grid'](4, 2);
			imgbtnSoma = $pyjs_kwargs_call(null, PaginaPrincipal['Image'], null, null, [{StyleName:String('gwt-ImageButton')}, String('images/Soma_Matriz_sum_matrix.png')]);
			imgbtnSubtracao = $pyjs_kwargs_call(null, PaginaPrincipal['Image'], null, null, [{StyleName:String('gwt-ImageButton')}, String('images/subtracao_Matriz_subtract_matrix.png')]);
			imgbtnMultiplicacao = $pyjs_kwargs_call(null, PaginaPrincipal['Image'], null, null, [{StyleName:String('gwt-ImageButton')}, String('images/multiplicacao_Matriz_product_matrix.png')]);
			imgbtnMultiplicacaoPorEscalar = $pyjs_kwargs_call(null, PaginaPrincipal['Image'], null, null, [{StyleName:String('gwt-ImageButton')}, String('images/multiplicacao_por_escalar.png')]);
			imgbtnSoma['addClickListener'](((($attr1=self['onSomaButtonClick']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'onSomaButtonClick'):
						self['onSomaButtonClick']));
			imgbtnSubtracao['addClickListener'](((($attr3=self['onSubtracaoButtonClick']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'onSubtracaoButtonClick'):
						self['onSubtracaoButtonClick']));
			imgbtnMultiplicacao['addClickListener'](((($attr5=self['onMultiplicacaoButtonClick']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'onMultiplicacaoButtonClick'):
						self['onMultiplicacaoButtonClick']));
			imgbtnMultiplicacaoPorEscalar['addClickListener'](((($attr7=self['onMulPorEscalarButtonClick']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'onMulPorEscalarButtonClick'):
						self['onMulPorEscalarButtonClick']));
			contents = PaginaPrincipal['VerticalPanel']();
			contents['setSpacing'](4);
			contents['add'](PaginaPrincipal['HTML'](String('You can place any contents you like in a dialog box.')));
			grid['setWidget'](0, 0, imgbtnSoma);
			grid['setWidget'](0, 1, imgbtnSubtracao);
			grid['setWidget'](2, 0, imgbtnMultiplicacao);
			grid['setWidget'](2, 1, imgbtnMultiplicacaoPorEscalar);
			grid['setStyleName'](PaginaPrincipal.element);
			tabpanel['add'](PaginaPrincipal['HTML'](String('Modulo de introducao a matrizes')), String('\x3Ch2\x3EModulo de introducao a Matrizes\x3C/h2\x3E'), true);
			tabpanel['add'](grid, String('\x3Ch2\x3E  Matrizes  \x3C/h2\x3E'), true);
			tabpanel['add'](PaginaPrincipal['HTML'](String('Modulo de introducao a matrizes')), String('\x3Ch2\x3EAjuda para usar a ferramenta\x3C/h2\x3E'), true);
			tabpanel['setSize'](String('90%'), String(' 70%'));
			tabpanel['selectTab'](1);
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
PYJS_DEPS: ['pyjamas.Canvas2D.Canvas', 'pyjamas', 'pyjamas.Canvas2D', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM.getFirstChild', 'pyjamas.DOM', 'pyjamas.Window', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.ToggleButton.ToggleButton', 'pyjamas.ui.ToggleButton', 'pyjamas.ui.PushButton.PushButton', 'pyjamas.ui.PushButton', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'PopupPagina.PopupPagina', 'PopupPagina', 'componentes.soma.PopupSoma.PopupSoma', 'componentes', 'componentes.soma', 'componentes.soma.PopupSoma', 'componentes.subtracao.PopupSub.PopupSub', 'componentes.subtracao', 'componentes.subtracao.PopupSub', 'componentes.produtoescalar.PopupEscalar.PopupEscalar', 'componentes.produtoescalar', 'componentes.produtoescalar.PopupEscalar', 'componentes.produto.PopupProduto.PopupProduto', 'componentes.produto', 'componentes.produto.PopupProduto']
*/
