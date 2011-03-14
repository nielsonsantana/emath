/* start module: componentes.produtoescalar.PopupEscalar */
$pyjs.loaded_modules['componentes.produtoescalar.PopupEscalar'] = function (__mod_name__) {
	if($pyjs.loaded_modules['componentes.produtoescalar.PopupEscalar'].__was_initialized__) return $pyjs.loaded_modules['componentes.produtoescalar.PopupEscalar'];
	if(typeof $pyjs.loaded_modules['componentes.produtoescalar'] == 'undefined' || !$pyjs.loaded_modules['componentes.produtoescalar'].__was_initialized__) pyjslib['___import___']('componentes.produtoescalar', null);
	componentes['produtoescalar']['PopupEscalar'] = $pyjs.loaded_modules["componentes.produtoescalar.PopupEscalar"];
	componentes['produtoescalar']['PopupEscalar'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'componentes.produtoescalar.PopupEscalar';
	var __name__ = componentes['produtoescalar']['PopupEscalar'].__name__ = __mod_name__;
	var PopupEscalar = componentes['produtoescalar']['PopupEscalar'];


	componentes['produtoescalar']['PopupEscalar']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['Window'] = pyjslib['___import___']('pyjamas.Window', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['PopupPanel'] = pyjslib['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['Grid'] = pyjslib['___import___']('pyjamas.ui.Grid.Grid', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['HTML'] = pyjslib['___import___']('pyjamas.ui.HTML.HTML', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['Button'] = pyjslib['___import___']('pyjamas.ui.Button.Button', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['FlexTable'] = pyjslib['___import___']('pyjamas.ui.FlexTable.FlexTable', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasHorizontalAlignment', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasVerticalAlignment', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['Label'] = pyjslib['___import___']('pyjamas.ui.Label.Label', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['TextBox'] = pyjslib['___import___']('pyjamas.ui.TextBox.TextBox', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['PushButton'] = pyjslib['___import___']('pyjamas.ui.PushButton.PushButton', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['CheckBox'] = pyjslib['___import___']('pyjamas.ui.CheckBox.CheckBox', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['ListBox'] = pyjslib['___import___']('pyjamas.ui.ListBox.ListBox', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['Image'] = pyjslib['___import___']('pyjamas.ui.Image.Image', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['DialogBox'] = pyjslib['___import___']('pyjamas.ui.DialogBox.DialogBox', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['Canvas'] = pyjslib['___import___']('pyjamas.Canvas2D.Canvas', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['pyjslib'] = pyjslib['___import___']('pyjslib', 'componentes.produtoescalar');
	componentes['produtoescalar']['PopupEscalar']['VerticalPanel'] = pyjslib['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['HorizontalPanel'] = pyjslib['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'componentes.produtoescalar', null, false);
	componentes['produtoescalar']['PopupEscalar']['PararAnimacao'] = function() {

 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.background(200);
            p.noLoop();
        }
        window.parent.Processing.removeInstance('soma');
    
    
	};
	componentes['produtoescalar']['PopupEscalar']['PararAnimacao'].__name__ = 'PararAnimacao';

	componentes['produtoescalar']['PopupEscalar']['PararAnimacao'].__bind_type__ = 0;
	componentes['produtoescalar']['PopupEscalar']['PararAnimacao'].__args__ = [null,null];
	componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoAutomatica'] = function(sender) {

 
        window.parent.init();
        setTimeout("window.parent.pausarAnim('soma');",1000);
    
	};
	componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoAutomatica'].__name__ = 'IniciarAnimacaoAutomatica';

	componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoAutomatica'].__bind_type__ = 0;
	componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoAutomatica'].__args__ = [null,null,['sender']];
	componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoPassoAPasso'] = function(sender) {

 
        window.parent.init();    
    
	};
	componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoPassoAPasso'].__name__ = 'IniciarAnimacaoPassoAPasso';

	componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoPassoAPasso'].__bind_type__ = 0;
	componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoPassoAPasso'].__args__ = [null,null,['sender']];
	componentes['produtoescalar']['PopupEscalar']['desfazerProxOperacao'] = function(sender) {

 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.undraw();
        }    
    
	};
	componentes['produtoescalar']['PopupEscalar']['desfazerProxOperacao'].__name__ = 'desfazerProxOperacao';

	componentes['produtoescalar']['PopupEscalar']['desfazerProxOperacao'].__bind_type__ = 0;
	componentes['produtoescalar']['PopupEscalar']['desfazerProxOperacao'].__args__ = [null,null,['sender']];
	componentes['produtoescalar']['PopupEscalar']['fazerProxOperacao'] = function(sender) {

 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.draw();
        }
    
	};
	componentes['produtoescalar']['PopupEscalar']['fazerProxOperacao'].__name__ = 'fazerProxOperacao';

	componentes['produtoescalar']['PopupEscalar']['fazerProxOperacao'].__bind_type__ = 0;
	componentes['produtoescalar']['PopupEscalar']['fazerProxOperacao'].__args__ = [null,null,['sender']];
	componentes['produtoescalar']['PopupEscalar']['PopupEscalar'] = (function(){
		var $cls_instance = $pyjs__class_instance('PopupEscalar');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'bf5723ece1623ffbc36bae46785f4f9f';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(autoHide, modal) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				autoHide = arguments[1];
				modal = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof modal != 'undefined') {
					if (modal !== null && typeof modal['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modal;
						modal = arguments[3];
					}
				} else 				if (typeof autoHide != 'undefined') {
					if (autoHide !== null && typeof autoHide['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = autoHide;
						autoHide = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof autoHide == 'undefined') autoHide=arguments.callee.__args__[3][1];
			if (typeof modal == 'undefined') modal=arguments.callee.__args__[4][1];
			var $attr40,$attr41,$attr39,$attr20,$attr15,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,id,$attr16,lbcoluna2,lbcoluna1,lblinha2,lblinha1,ftInterativo,$sub3,$sub2,$sub1,$sub4,$attr9,$attr8,$attr42,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr33,$attr32,$attr31,$attr30,$attr19,$attr18,$attr35,$attr34,$div2,$attr14,$attr17,$div1,$attr11,$attr10,$attr13,$attr12,$attr38,$attr43,$attr21,$attr44,gridinterativa,datasource,painelhorizontal,$attr37,$attr36;
			$pyjs_kwargs_call(componentes['produtoescalar']['PopupEscalar']['PopupPanel'], '__init__', null, kwargs, [{}, self, autoHide, modal]);
			datasource = null;
			id = null;
			if (pyjslib['bool'](kwargs['has_key'](String('datasrc')))) {
				datasource = kwargs.__getitem__(String('datasrc'));
			}
			if (pyjslib['bool'](kwargs['has_key'](String('id')))) {
				id = kwargs.__getitem__(String('id'));
			}
			self['setSize']((typeof ($sub1=componentes['produtoescalar']['PopupEscalar']['Window']['getClientWidth']())==typeof ($sub2=50) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2)), (typeof ($sub3=componentes['produtoescalar']['PopupEscalar']['Window']['getClientHeight']())==typeof ($sub4=50) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				pyjslib['op_sub']($sub3,$sub4)));
			self['setPopupPosition'](20, 0);
			componentes['produtoescalar']['PopupEscalar']['DOM']['setAttribute'](self, String('align'), String('center'));
			self.caption = componentes['produtoescalar']['PopupEscalar']['HTML']();
			self.child = null;
			self['setHTML'](String('\x3Cb\x3EProduto escalar de Matrizes.\x3C/b\x3E'));
			self.dragging = false;
			self.dragStartX = 0;
			self.dragStartY = 0;
			self.imageFechar = $pyjs_kwargs_call(null, componentes['produtoescalar']['PopupEscalar']['Image'], null, null, [{Size:pyjslib['tuple']([String('32px'), String('32px')]), StyleName:String('gwt-ImageButton')}, String('images/fechar.gif')]);
			self.imgbtnDesfazer = $pyjs_kwargs_call(null, componentes['produtoescalar']['PopupEscalar']['Image'], null, null, [{Size:pyjslib['tuple']([String('32px'), String('20px')]), StyleName:String('gwt-ImageButton')}, String('images/previous-arrow.png')]);
			self.imgbtnFazer = $pyjs_kwargs_call(null, componentes['produtoescalar']['PopupEscalar']['Image'], null, null, [{Size:pyjslib['tuple']([String('32px'), String('20px')]), StyleName:String('gwt-ImageButton')}, String('images/next-arrow.png')]);
			self.btnAutomatic = componentes['produtoescalar']['PopupEscalar']['Button'](String('Automático'), ((($attr1=self['onIniciarAnimacaoAutomatica']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'onIniciarAnimacaoAutomatica'):
						self['onIniciarAnimacaoAutomatica']));
			self.btnInterativo = componentes['produtoescalar']['PopupEscalar']['Button'](String('Interativo'));
			self.btnStepByStep = componentes['produtoescalar']['PopupEscalar']['Button'](String('Passo a passo'), ((($attr3=self['onIniciarAnimacaoPassoAPasso']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'onIniciarAnimacaoPassoAPasso'):
						self['onIniciarAnimacaoPassoAPasso']));
			self.btnFazer = componentes['produtoescalar']['PopupEscalar']['Button'](String('fazer \x3E\x3E'), componentes['produtoescalar']['PopupEscalar']['fazerProxOperacao']);
			self.btnDesfazer = componentes['produtoescalar']['PopupEscalar']['Button'](String('\x3C\x3C desfazer'), componentes['produtoescalar']['PopupEscalar']['desfazerProxOperacao']);
			self.btnFechar = componentes['produtoescalar']['PopupEscalar']['PushButton'](componentes.produtoescalar.PopupEscalar.imageFechar, componentes.produtoescalar.PopupEscalar.imageFechar);
			self.btnTestarResposta = componentes['produtoescalar']['PopupEscalar']['Button'](String('Testar Solução'));
			self.lbVelocidade = componentes['produtoescalar']['PopupEscalar']['ListBox']();
			self['lbVelocidade']['setID'](String('lbseg'));
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:2}, String('0.5 segundo')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:1}, String('1 segundo')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.5}, String('2 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:(typeof ($div1=1)==typeof ($div2=3) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				pyjslib['op_div']($div1,$div2))}, String('3 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.25}, String('4 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.2}, String('5 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.167}, String('6 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.143}, String('7 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.125}, String('8 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.1}, String('10 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.0666}, String('15 segundos')]);
			$pyjs_kwargs_call(self['lbVelocidade'], 'addItem', null, null, [{value:0.05}, String('20 segundos')]);
			lblinha1 = componentes['produtoescalar']['PopupEscalar']['ListBox']();
			lblinha1['setID'](String('lm1'));
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:1}, String('1')]);
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:2}, String('2')]);
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:3}, String('3')]);
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:4}, String('4')]);
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:5}, String('5')]);
			lblinha2 = componentes['produtoescalar']['PopupEscalar']['ListBox']();
			lblinha2['setID'](String('lm2'));
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:1}, String('1')]);
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:2}, String('2')]);
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:3}, String('3')]);
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:4}, String('4')]);
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:5}, String('5')]);
			lbcoluna1 = componentes['produtoescalar']['PopupEscalar']['ListBox']();
			lbcoluna1['setID'](String('cm1'));
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:1}, String('1')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:2}, String('2')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:3}, String('3')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:4}, String('4')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:5}, String('5')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:6}, String('6')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:7}, String('7')]);
			lbcoluna2 = componentes['produtoescalar']['PopupEscalar']['ListBox']();
			lbcoluna2['setID'](String('cm2'));
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:1}, String('1')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:2}, String('2')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:3}, String('3')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:4}, String('4')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:5}, String('5')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:6}, String('6')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:7}, String('7')]);
			self.lblStatus = componentes['produtoescalar']['PopupEscalar']['Label'](String('Label para Status'));
			self['imageFechar']['addClickListener'](((($attr5=self['onFecharPopup']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'onFecharPopup'):
						self['onFecharPopup']));
			self.grid = componentes['produtoescalar']['PopupEscalar']['Grid'](1, 16);
			self['grid']['setWidth'](self['getWidth']());
			self['grid']['setHTML'](0, 0, String('\x3Cb\x3EMatriz 1:\x3C/b\x3E Nº Linhas:'));
			self['grid']['setWidget'](0, 1, lblinha1);
			self['grid']['setText'](0, 2, String('Nº Colunas:'));
			self['grid']['setWidget'](0, 3, lbcoluna1);
			self['grid']['setWidget'](0, 8, ((($attr7=self['btnStepByStep']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'btnStepByStep'):
						self['btnStepByStep']));
			self['grid']['setWidget'](0, 9, ((($attr9=self['btnDesfazer']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'btnDesfazer'):
						self['btnDesfazer']));
			self['grid']['setWidget'](0, 10, ((($attr11=self['btnFazer']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'btnFazer'):
						self['btnFazer']));
			self['grid']['setHTML'](0, 11, String('\x3Cb\x3EVelocidade:\x3C/b\x3E'));
			self['grid']['setWidget'](0, 12, ((($attr13=self['lbVelocidade']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'lbVelocidade'):
						self['lbVelocidade']));
			self['grid']['setWidget'](0, 13, ((($attr15=self['btnAutomatic']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'btnAutomatic'):
						self['btnAutomatic']));
			self['grid']['setWidget'](0, 15, ((($attr17=self['imageFechar']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'imageFechar'):
						self['imageFechar']));
			self['grid']['getCellFormatter']()['setAlignment'](0, 15, ((($attr19=componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']['ALIGN_RIGHT']) !== null & ($attr20=componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'ALIGN_RIGHT'):
						componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']['ALIGN_RIGHT']), ((($attr21=componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr22=componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'ALIGN_TOP'):
						componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']['ALIGN_TOP']));
			self.panel = $pyjs_kwargs_call(null, componentes['produtoescalar']['PopupEscalar']['FlexTable'], null, null, [{Height:String('100%'), width:String('100%'), BorderWidth:String('0'), CellPadding:String('0'), CellSpacing:String('0')}]);
			self['panel']['setWidget'](0, 0, ((($attr23=self['caption']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'caption'):
						self['caption']));
			self['panel']['setWidget'](1, 0, ((($attr25=self['grid']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'grid'):
						self['grid']));
			self['panel']['getCellFormatter']()['setHeight'](2, 0, String('100%'));
			self['panel']['getCellFormatter']()['setWidth'](2, 0, String('100%'));
			self['panel']['getCellFormatter']()['setAlignment'](2, 0, ((($attr27=componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']['ALIGN_CENTER']) !== null & ($attr28=componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'ALIGN_CENTER'):
						componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']['ALIGN_CENTER']), ((($attr29=componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr30=componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'ALIGN_TOP'):
						componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']['ALIGN_TOP']));
			self['panel']['setID'](String('contetepopup'));
			painelhorizontal = componentes['produtoescalar']['PopupEscalar']['HorizontalPanel']();
			gridinterativa = componentes['produtoescalar']['PopupEscalar']['FlexTable']();
			painelhorizontal['add'](componentes['produtoescalar']['PopupEscalar']['HTML'](pyjslib['sprintf'](String('\x3Ccanvas id=\x27%s\x27 datasrc=\x27%s\x27 width=\x27%s\x27 height=\x27%s\x27 style=\x27image-rendering: optimizespeed !important\x3B \x27\x3E\x3C/canvas\x3E'), pyjslib['tuple']([String('soma'), datasource, String('1000px'), String('500px')]))));
			ftInterativo = $pyjs_kwargs_call(null, componentes['produtoescalar']['PopupEscalar']['FlexTable'], null, null, [{Height:String('100%'), width:String('100%'), BorderWidth:String('0'), CellPadding:String('0'), CellSpacing:String('0')}]);
			gridinterativa = componentes['produtoescalar']['PopupEscalar']['Grid'](4, 4);
			gridinterativa['setWidget'](0, 0, componentes['produtoescalar']['PopupEscalar']['HTML'](String('\x3Cb\x3EM1(\x3C/b\x3E\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27linha1\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E , \x3C/b\x3E')));
			gridinterativa['setWidget'](0, 1, componentes['produtoescalar']['PopupEscalar']['HTML'](String('\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27coluna1\x27 style=\x27width: 25px\x3Bheight:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E)\x26nbsp\x3B+\x3C/b\x3E')));
			gridinterativa['setWidget'](0, 2, componentes['produtoescalar']['PopupEscalar']['HTML'](String('\x3Cb\x3EM2(\x3C/b\x3E\x26nbsp\x3B\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27linha2\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E , \x3C/b\x3E')));
			gridinterativa['setWidget'](0, 3, componentes['produtoescalar']['PopupEscalar']['HTML'](String('\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27coluna2\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E)\x26nbsp\x3B=\x3C/b\x3E')));
			gridinterativa['setWidget'](2, 0, componentes['produtoescalar']['PopupEscalar']['HTML'](String('\x26nbsp\x3B\x26nbsp\x3B\x3Cb\x3E(\x3C/b\x3E\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27n1\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E)\x26nbsp\x3B+\x3C/b\x3E')));
			gridinterativa['setWidget'](2, 1, componentes['produtoescalar']['PopupEscalar']['HTML'](String('\x3Cb\x3E(\x3C/b\x3E\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27n2\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E)\x3C/b\x3E')));
			gridinterativa['setWidget'](2, 2, componentes['produtoescalar']['PopupEscalar']['HTML'](String('\x3Cb\x3E=\x26nbsp\x3B\x3C/b\x3E\x26nbsp\x3B\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27solucao\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E')));
			ftInterativo['setHTML'](0, 0, String('\x3C/br\x3E'));
			ftInterativo['setHTML'](1, 0, String('\x3Cb\x3E\x3Ch3\x3EPainel Interativo\x3Ch3\x3E\x3C/b\x3E'));
			ftInterativo['setWidget'](3, 0, gridinterativa);
			ftInterativo['setWidget'](4, 0, ((($attr31=self['btnTestarResposta']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, 'btnTestarResposta'):
						self['btnTestarResposta']));
			ftInterativo['setHTML'](5, 0, String('\x3C/br\x3E'));
			ftInterativo['setHTML'](6, 0, String('Use a tecla tab para agilizar.'));
			ftInterativo['getCellFormatter']()['setAlignment'](4, 0, ((($attr33=componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']['ALIGN_CENTER']) !== null & ($attr34=componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'ALIGN_CENTER'):
						componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']['ALIGN_CENTER']), ((($attr35=componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr36=componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'ALIGN_TOP'):
						componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']['ALIGN_TOP']));
			ftInterativo['getCellFormatter']()['setAlignment'](1, 0, ((($attr37=componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']['ALIGN_CENTER']) !== null & ($attr38=componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'ALIGN_CENTER'):
						componentes['produtoescalar']['PopupEscalar']['HasHorizontalAlignment']['ALIGN_CENTER']), ((($attr39=componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr40=componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'ALIGN_TOP'):
						componentes['produtoescalar']['PopupEscalar']['HasVerticalAlignment']['ALIGN_TOP']));
			self['panel']['setWidget'](2, 0, painelhorizontal);
			self['panel']['setWidget'](3, 0, ((($attr41=self['lblStatus']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'lblStatus'):
						self['lblStatus']));
			self['panel']['setStyleName'](String('dialogContent'));
			componentes['produtoescalar']['PopupEscalar']['PopupPanel']['setWidget'](self, ((($attr43=self['panel']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, 'panel'):
						self['panel']));
			self['setStyleName'](String('gwt-DialogBox'));
			self['caption']['setStyleName'](String('Caption'));
			self['caption']['addMouseListener'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['autoHide', null],['modal', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onFecharPopup', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['hide']();
			componentes['produtoescalar']['PopupEscalar']['PararAnimacao']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onFecharPopup'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onIniciarAnimacaoPassoAPasso', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['btnFazer']['setEnabled'](true);
			self['btnDesfazer']['setEnabled'](true);
			if (pyjslib['bool'](self['validarParametrosMatriz']())) {
				componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoPassoAPasso']();
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onIniciarAnimacaoPassoAPasso'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onIniciarAnimacaoAutomatica', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var onTestarSolucao;
			if (pyjslib['bool'](self['validarParametrosMatriz']())) {
				componentes['produtoescalar']['PopupEscalar']['IniciarAnimacaoAutomatica']();
			}
			onTestarSolucao = function(self, event) {

 				return null;
			};
			onTestarSolucao.__name__ = 'onTestarSolucao';

			onTestarSolucao.__bind_type__ = 0;
			onTestarSolucao.__args__ = [null,null,['self'],['event']];
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onIniciarAnimacaoAutomatica'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'validarParametrosTestarSolucao', function() {
			if (this.__is_instance__ === true) {
			} else {
			}
			var lm1,$attr46,$attr47,$attr45,cm1,$attr48;
			lm1 = componentes['produtoescalar']['PopupEscalar']['DOM']['getElementById'](String('linha1'));
			lm1 = ((($attr45=lm1['value']) !== null & ($attr46=lm1).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'value'):
						lm1['value']);
			cm1 = componentes['produtoescalar']['PopupEscalar']['DOM']['getElementById'](String('coluna1'));
			cm1 = ((($attr47=cm1['value']) !== null & ($attr48=cm1).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'value'):
						cm1['value']);
			return null;
		}
	, 1, [null,null]);
		$cls_definition['validarParametrosTestarSolucao'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'validarParametrosMatriz', function() {
			if (this.__is_instance__ === true) {
			} else {
			}

			return true;
			return null;
		}
	, 1, [null,null]);
		$cls_definition['validarParametrosMatriz'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['caption']['getHTML']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['caption']['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onEventPreview', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var target,event_targets_popup,$and1,elem,$and2,type;
			type = componentes['produtoescalar']['PopupEscalar']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('mousedown')))) {
				target = componentes['produtoescalar']['PopupEscalar']['DOM']['eventGetTarget'](event);
				elem = self['caption']['getElement']();
				event_targets_popup = (pyjslib['bool']($and1=target)?componentes['produtoescalar']['PopupEscalar']['DOM']['isOrHasChild'](elem, target):$and1);
				if (pyjslib['bool'](event_targets_popup)) {
					componentes['produtoescalar']['PopupEscalar']['DOM']['eventPreventDefault'](event);
				}
			}
			return componentes['produtoescalar']['PopupEscalar']['PopupPanel']['onEventPreview'](self, event);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseDown', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self.dragging = true;
			componentes['produtoescalar']['PopupEscalar']['DOM']['setCapture'](self['caption']['getElement']());
			self.dragStartX = x;
			self.dragStartY = y;
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr51,$attr50,$attr52,absX,absY,$attr54,$add2,$add3,$add1,$add4,$sub8,$attr53,$sub7,$sub6,$sub5,$attr49;
			if (pyjslib['bool'](((($attr49=self['dragging']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'dragging'):
						self['dragging']))) {
				absX = (typeof ($add1=x)==typeof ($add2=self['getAbsoluteLeft']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					pyjslib['op_add']($add1,$add2));
				absY = (typeof ($add3=y)==typeof ($add4=self['getAbsoluteTop']()) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4));
				self['setPopupPosition']((typeof ($sub5=absX)==typeof ($sub6=((($attr51=self['dragStartX']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
							pyjslib['getattr']($attr52, 'dragStartX'):
							self['dragStartX'])) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					pyjslib['op_sub']($sub5,$sub6)), (typeof ($sub7=absY)==typeof ($sub8=((($attr53=self['dragStartY']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
							pyjslib['getattr']($attr54, 'dragStartY'):
							self['dragStartY'])) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					pyjslib['op_sub']($sub7,$sub8)));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseUp', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self.dragging = false;
			componentes['produtoescalar']['PopupEscalar']['DOM']['releaseCapture'](self['caption']['getElement']());
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseLeave', function(self, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				self = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['self'],['x'],['y']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseEnter', function(self, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				self = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['self'],['x'],['y']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr55,$attr56;
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr55=self['child']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, 'child'):
						self['child']), widget))) {
				return false;
			}
			self['panel']['remove'](widget);
			self.child = null;
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			self['caption']['setHTML'](html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['caption']['setText'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'doAttachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			componentes['produtoescalar']['PopupEscalar']['PopupPanel']['doAttachChildren'](self);
			self['caption']['onAttach']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'doDetachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			componentes['produtoescalar']['PopupEscalar']['PopupPanel']['doDetachChildren'](self);
			self['caption']['onDetach']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr59,$attr58,$attr60,$attr57;
			if (pyjslib['bool']((((($attr57=self['child']) !== null & ($attr58=self).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'child'):
						self['child']) !== null))) {
				self['panel']['remove'](((($attr59=self['child']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
							pyjslib['getattr']($attr60, 'child'):
							self['child']));
			}
			if (pyjslib['bool']((widget !== null))) {
				self['panel']['setWidget'](1, 0, widget);
			}
			self.child = widget;
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(componentes['produtoescalar']['PopupEscalar']['PopupPanel']));
	})();
	return this;
}; /* end componentes.produtoescalar.PopupEscalar */


/* end module: componentes.produtoescalar.PopupEscalar */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.Window', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.PushButton.PushButton', 'pyjamas.ui.PushButton', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.Canvas2D.Canvas', 'pyjamas.Canvas2D', 'pyjslib', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel']
*/
