/* start module: PopupPagina */
var PopupPagina;
$pyjs.loaded_modules['PopupPagina'] = function (__mod_name__) {
	if($pyjs.loaded_modules['PopupPagina'].__was_initialized__) return $pyjs.loaded_modules['PopupPagina'];
	PopupPagina = $pyjs.loaded_modules["PopupPagina"];
	PopupPagina.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'PopupPagina';
	var __name__ = PopupPagina.__name__ = __mod_name__;


	PopupPagina['DOM'] = pyjslib['___import___']('pyjamas.DOM', null, null, false);
	PopupPagina['Factory'] = pyjslib['___import___']('pyjamas.Factory', null, null, false);
	PopupPagina['Window'] = pyjslib['___import___']('pyjamas.Window', null, null, false);
	PopupPagina['PopupPanel'] = pyjslib['___import___']('pyjamas.ui.PopupPanel.PopupPanel', null, null, false);
	PopupPagina['Grid'] = pyjslib['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	PopupPagina['HTML'] = pyjslib['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	PopupPagina['Button'] = pyjslib['___import___']('pyjamas.ui.Button.Button', null, null, false);
	PopupPagina['FlexTable'] = pyjslib['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	PopupPagina['HasHorizontalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasHorizontalAlignment', null, null, false);
	PopupPagina['HasVerticalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasVerticalAlignment', null, null, false);
	PopupPagina['Label'] = pyjslib['___import___']('pyjamas.ui.Label.Label', null, null, false);
	PopupPagina['TextBox'] = pyjslib['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	PopupPagina['PushButton'] = pyjslib['___import___']('pyjamas.ui.PushButton.PushButton', null, null, false);
	PopupPagina['CheckBox'] = pyjslib['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	PopupPagina['ListBox'] = pyjslib['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	PopupPagina['Image'] = pyjslib['___import___']('pyjamas.ui.Image.Image', null, null, false);
	PopupPagina['DialogBox'] = pyjslib['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	PopupPagina['Canvas'] = pyjslib['___import___']('pyjamas.Canvas2D.Canvas', null, null, false);
	PopupPagina['pyjslib'] = pyjslib['___import___']('pyjslib', null);
	PopupPagina['VerticalPanel'] = pyjslib['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	PopupPagina['HorizontalPanel'] = pyjslib['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	PopupPagina['PararAnimacao'] = function() {

 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.background(200);
            p.noLoop();
        }
        window.parent.Processing.removeInstance('soma');
    
    
	};
	PopupPagina['PararAnimacao'].__name__ = 'PararAnimacao';

	PopupPagina['PararAnimacao'].__bind_type__ = 0;
	PopupPagina['PararAnimacao'].__args__ = [null,null];
	PopupPagina['IniciarAnimacaoAutomatica'] = function(sender) {

 
        window.parent.init();
        setTimeout("window.parent.pausarAnim('soma');",1000);
    
	};
	PopupPagina['IniciarAnimacaoAutomatica'].__name__ = 'IniciarAnimacaoAutomatica';

	PopupPagina['IniciarAnimacaoAutomatica'].__bind_type__ = 0;
	PopupPagina['IniciarAnimacaoAutomatica'].__args__ = [null,null,['sender']];
	PopupPagina['IniciarAnimacaoPassoAPasso'] = function(sender) {

 
        window.parent.init();    
    
	};
	PopupPagina['IniciarAnimacaoPassoAPasso'].__name__ = 'IniciarAnimacaoPassoAPasso';

	PopupPagina['IniciarAnimacaoPassoAPasso'].__bind_type__ = 0;
	PopupPagina['IniciarAnimacaoPassoAPasso'].__args__ = [null,null,['sender']];
	PopupPagina['desfazerProxOperacao'] = function(sender) {

 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.undraw();
        }    
    
	};
	PopupPagina['desfazerProxOperacao'].__name__ = 'desfazerProxOperacao';

	PopupPagina['desfazerProxOperacao'].__bind_type__ = 0;
	PopupPagina['desfazerProxOperacao'].__args__ = [null,null,['sender']];
	PopupPagina['fazerProxOperacao'] = function(sender) {

 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.draw();
        }
    
	};
	PopupPagina['fazerProxOperacao'].__name__ = 'fazerProxOperacao';

	PopupPagina['fazerProxOperacao'].__bind_type__ = 0;
	PopupPagina['fazerProxOperacao'].__args__ = [null,null,['sender']];
	PopupPagina['PopupPagina'] = (function(){
		var $cls_instance = $pyjs__class_instance('PopupPagina');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e89d87566cf48df720f08b6a4ad77fb6';
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
			$pyjs_kwargs_call(PopupPagina['PopupPanel'], '__init__', null, kwargs, [{}, self, autoHide, modal]);
			datasource = null;
			id = null;
			if (pyjslib['bool'](kwargs['has_key'](String('datasrc')))) {
				datasource = kwargs.__getitem__(String('datasrc'));
			}
			if (pyjslib['bool'](kwargs['has_key'](String('id')))) {
				id = kwargs.__getitem__(String('id'));
			}
			self['setSize']((typeof ($sub1=PopupPagina['Window']['getClientWidth']())==typeof ($sub2=50) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2)), (typeof ($sub3=PopupPagina['Window']['getClientHeight']())==typeof ($sub4=50) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				pyjslib['op_sub']($sub3,$sub4)));
			self['setPopupPosition'](20, 0);
			PopupPagina['DOM']['setAttribute'](self, String('align'), String('center'));
			self.caption = PopupPagina['HTML']();
			self.child = null;
			self['setHTML'](String('\x3Cb\x3ESoma de Matrizes.\x3C/b\x3E'));
			self.dragging = false;
			self.dragStartX = 0;
			self.dragStartY = 0;
			self.imageFechar = $pyjs_kwargs_call(null, PopupPagina['Image'], null, null, [{Size:pyjslib['tuple']([String('32px'), String('32px')]), StyleName:String('gwt-ImageButton')}, String('images/fechar.gif')]);
			self.imgbtnDesfazer = $pyjs_kwargs_call(null, PopupPagina['Image'], null, null, [{Size:pyjslib['tuple']([String('32px'), String('20px')]), StyleName:String('gwt-ImageButton')}, String('images/previous-arrow.png')]);
			self.imgbtnFazer = $pyjs_kwargs_call(null, PopupPagina['Image'], null, null, [{Size:pyjslib['tuple']([String('32px'), String('20px')]), StyleName:String('gwt-ImageButton')}, String('images/next-arrow.png')]);
			self.btnAutomatic = PopupPagina['Button'](String('Automático'), ((($attr1=self['onIniciarAnimacaoAutomatica']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'onIniciarAnimacaoAutomatica'):
						self['onIniciarAnimacaoAutomatica']));
			self.btnInterativo = PopupPagina['Button'](String('Interativo'));
			if (pyjslib['bool'](pyjslib['op_eq'](id, String('escalar')))) {
				self.btnStepByStep = PopupPagina['Button'](String('Passo a passo'), PopupPagina['IniciarAnimacaoPassoAPasso']);
			}
			else {
				self.btnStepByStep = PopupPagina['Button'](String('Passo a passo'), ((($attr3=self['onIniciarAnimacaoPassoAPasso']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, 'onIniciarAnimacaoPassoAPasso'):
							self['onIniciarAnimacaoPassoAPasso']));
			}
			self.btnFazer = PopupPagina['Button'](String('fazer \x3E\x3E'), PopupPagina['fazerProxOperacao']);
			self.btnDesfazer = PopupPagina['Button'](String('\x3C\x3C desfazer'), PopupPagina['desfazerProxOperacao']);
			self.btnFechar = PopupPagina['PushButton'](PopupPagina.imageFechar, PopupPagina.imageFechar);
			self.btnTestarResposta = PopupPagina['Button'](String('Testar Solução'));
			self.lbVelocidade = PopupPagina['ListBox']();
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
			lblinha1 = PopupPagina['ListBox']();
			lblinha1['setID'](String('lm1'));
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:1}, String('1')]);
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:2}, String('2')]);
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:3}, String('3')]);
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:4}, String('4')]);
			$pyjs_kwargs_call(lblinha1, 'addItem', null, null, [{value:5}, String('5')]);
			lblinha2 = PopupPagina['ListBox']();
			lblinha2['setID'](String('lm2'));
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:1}, String('1')]);
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:2}, String('2')]);
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:3}, String('3')]);
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:4}, String('4')]);
			$pyjs_kwargs_call(lblinha2, 'addItem', null, null, [{value:5}, String('5')]);
			lbcoluna1 = PopupPagina['ListBox']();
			lbcoluna1['setID'](String('cm1'));
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:1}, String('1')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:2}, String('2')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:3}, String('3')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:4}, String('4')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:5}, String('5')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:6}, String('6')]);
			$pyjs_kwargs_call(lbcoluna1, 'addItem', null, null, [{value:7}, String('7')]);
			lbcoluna2 = PopupPagina['ListBox']();
			lbcoluna2['setID'](String('cm2'));
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:1}, String('1')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:2}, String('2')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:3}, String('3')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:4}, String('4')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:5}, String('5')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:6}, String('6')]);
			$pyjs_kwargs_call(lbcoluna2, 'addItem', null, null, [{value:7}, String('7')]);
			self.lblStatus = PopupPagina['Label'](String('Label para Status'));
			self['imageFechar']['addClickListener'](((($attr5=self['onFecharPopup']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'onFecharPopup'):
						self['onFecharPopup']));
			self.grid = PopupPagina['Grid'](1, 16);
			self['grid']['setWidth'](self['getWidth']());
			self['grid']['setHTML'](0, 0, String('\x3Cb\x3EMatriz 1:\x3C/b\x3E Nº Linhas:'));
			self['grid']['setWidget'](0, 1, lblinha1);
			self['grid']['setText'](0, 2, String('Nº Colunas:'));
			self['grid']['setWidget'](0, 3, lbcoluna1);
			self['grid']['setHTML'](0, 4, String('\x3Cb\x3EMatriz 2:\x3C/b\x3E Nº Linhas:'));
			self['grid']['setWidget'](0, 5, lblinha2);
			self['grid']['setText'](0, 6, String('Nº Colunas:'));
			self['grid']['setWidget'](0, 7, lbcoluna2);
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
			self['grid']['getCellFormatter']()['setAlignment'](0, 15, ((($attr19=PopupPagina['HasHorizontalAlignment']['ALIGN_RIGHT']) !== null & ($attr20=PopupPagina['HasHorizontalAlignment']).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'ALIGN_RIGHT'):
						PopupPagina['HasHorizontalAlignment']['ALIGN_RIGHT']), ((($attr21=PopupPagina['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr22=PopupPagina['HasVerticalAlignment']).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'ALIGN_TOP'):
						PopupPagina['HasVerticalAlignment']['ALIGN_TOP']));
			self.panel = $pyjs_kwargs_call(null, PopupPagina['FlexTable'], null, null, [{Height:String('100%'), width:String('100%'), BorderWidth:String('0'), CellPadding:String('0'), CellSpacing:String('0')}]);
			self['panel']['setWidget'](0, 0, ((($attr23=self['caption']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'caption'):
						self['caption']));
			self['panel']['setWidget'](1, 0, ((($attr25=self['grid']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'grid'):
						self['grid']));
			self['panel']['getCellFormatter']()['setHeight'](2, 0, String('100%'));
			self['panel']['getCellFormatter']()['setWidth'](2, 0, String('100%'));
			self['panel']['getCellFormatter']()['setAlignment'](2, 0, ((($attr27=PopupPagina['HasHorizontalAlignment']['ALIGN_CENTER']) !== null & ($attr28=PopupPagina['HasHorizontalAlignment']).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'ALIGN_CENTER'):
						PopupPagina['HasHorizontalAlignment']['ALIGN_CENTER']), ((($attr29=PopupPagina['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr30=PopupPagina['HasVerticalAlignment']).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'ALIGN_TOP'):
						PopupPagina['HasVerticalAlignment']['ALIGN_TOP']));
			self['panel']['setID'](String('contetepopup'));
			painelhorizontal = PopupPagina['HorizontalPanel']();
			gridinterativa = PopupPagina['FlexTable']();
			painelhorizontal['add'](PopupPagina['HTML'](pyjslib['sprintf'](String('\x3Ccanvas id=\x27%s\x27 datasrc=\x27%s\x27 width=\x27%s\x27 height=\x27%s\x27 style=\x27image-rendering: optimizespeed !important\x3B \x27\x3E\x3C/canvas\x3E'), pyjslib['tuple']([String('soma'), datasource, String('1000px'), String('500px')]))));
			ftInterativo = $pyjs_kwargs_call(null, PopupPagina['FlexTable'], null, null, [{Height:String('100%'), width:String('100%'), BorderWidth:String('0'), CellPadding:String('0'), CellSpacing:String('0')}]);
			gridinterativa = PopupPagina['Grid'](4, 4);
			gridinterativa['setWidget'](0, 0, PopupPagina['HTML'](String('\x3Cb\x3EM1(\x3C/b\x3E\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27linha1\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E , \x3C/b\x3E')));
			gridinterativa['setWidget'](0, 1, PopupPagina['HTML'](String('\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27coluna1\x27 style=\x27width: 25px\x3Bheight:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E)\x26nbsp\x3B+\x3C/b\x3E')));
			gridinterativa['setWidget'](0, 2, PopupPagina['HTML'](String('\x3Cb\x3EM2(\x3C/b\x3E\x26nbsp\x3B\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27linha2\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E , \x3C/b\x3E')));
			gridinterativa['setWidget'](0, 3, PopupPagina['HTML'](String('\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27coluna2\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E)\x26nbsp\x3B=\x3C/b\x3E')));
			gridinterativa['setWidget'](2, 0, PopupPagina['HTML'](String('\x26nbsp\x3B\x26nbsp\x3B\x3Cb\x3E(\x3C/b\x3E\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27n1\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E)\x26nbsp\x3B+\x3C/b\x3E')));
			gridinterativa['setWidget'](2, 1, PopupPagina['HTML'](String('\x3Cb\x3E(\x3C/b\x3E\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27n2\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E\x3Cb\x3E)\x3C/b\x3E')));
			gridinterativa['setWidget'](2, 2, PopupPagina['HTML'](String('\x3Cb\x3E=\x26nbsp\x3B\x3C/b\x3E\x26nbsp\x3B\x3Cinput type=\x27text\x27 class=\x27gwt-TextBox\x27 id=\x27solucao\x27 style=\x27width: 25px\x3B height:20px\x3B\x27 maxLength=\x271\x27\x3E')));
			ftInterativo['setHTML'](0, 0, String('\x3C/br\x3E'));
			ftInterativo['setHTML'](1, 0, String('\x3Cb\x3E\x3Ch3\x3EPainel Interativo\x3Ch3\x3E\x3C/b\x3E'));
			ftInterativo['setWidget'](3, 0, gridinterativa);
			ftInterativo['setWidget'](4, 0, ((($attr31=self['btnTestarResposta']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, 'btnTestarResposta'):
						self['btnTestarResposta']));
			ftInterativo['setHTML'](5, 0, String('\x3C/br\x3E'));
			ftInterativo['setHTML'](6, 0, String('Use a tecla tab para agilizar.'));
			ftInterativo['getCellFormatter']()['setAlignment'](4, 0, ((($attr33=PopupPagina['HasHorizontalAlignment']['ALIGN_CENTER']) !== null & ($attr34=PopupPagina['HasHorizontalAlignment']).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'ALIGN_CENTER'):
						PopupPagina['HasHorizontalAlignment']['ALIGN_CENTER']), ((($attr35=PopupPagina['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr36=PopupPagina['HasVerticalAlignment']).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'ALIGN_TOP'):
						PopupPagina['HasVerticalAlignment']['ALIGN_TOP']));
			ftInterativo['getCellFormatter']()['setAlignment'](1, 0, ((($attr37=PopupPagina['HasHorizontalAlignment']['ALIGN_CENTER']) !== null & ($attr38=PopupPagina['HasHorizontalAlignment']).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'ALIGN_CENTER'):
						PopupPagina['HasHorizontalAlignment']['ALIGN_CENTER']), ((($attr39=PopupPagina['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr40=PopupPagina['HasVerticalAlignment']).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'ALIGN_TOP'):
						PopupPagina['HasVerticalAlignment']['ALIGN_TOP']));
			self['panel']['setWidget'](2, 0, painelhorizontal);
			self['panel']['setWidget'](3, 0, ((($attr41=self['lblStatus']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'lblStatus'):
						self['lblStatus']));
			self['panel']['setStyleName'](String('dialogContent'));
			PopupPagina['PopupPanel']['setWidget'](self, ((($attr43=self['panel']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
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
			PopupPagina['PararAnimacao']();
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
				PopupPagina['IniciarAnimacaoPassoAPasso']();
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
				PopupPagina['IniciarAnimacaoAutomatica']();
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
			var $attr51,lm1,lm2,$attr52,$attr46,$attr47,$attr45,cm1,$attr50,cm2,$attr48,$attr49;
			lm1 = PopupPagina['DOM']['getElementById'](String('linha1'));
			lm1 = ((($attr45=lm1['value']) !== null & ($attr46=lm1).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'value'):
						lm1['value']);
			cm1 = PopupPagina['DOM']['getElementById'](String('coluna1'));
			cm1 = ((($attr47=cm1['value']) !== null & ($attr48=cm1).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'value'):
						cm1['value']);
			lm2 = PopupPagina['DOM']['getElementById'](String('linha2'));
			lm2 = ((($attr49=lm2['value']) !== null & ($attr50=lm2).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'value'):
						lm2['value']);
			cm2 = PopupPagina['DOM']['getElementById'](String('coluna2'));
			cm2 = ((($attr51=cm2['value']) !== null & ($attr52=cm2).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'value'):
						cm2['value']);
			return null;
		}
	, 1, [null,null]);
		$cls_definition['validarParametrosTestarSolucao'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'validarParametrosMatriz', function() {
			if (this.__is_instance__ === true) {
			} else {
			}
			var lm1,lm2,$attr60,cm2,cm1,$or5,$or4,$or7,$or6,$or1,$or3,$or2,$or9,$or8,$attr59,$attr58,$attr53,$attr55,$attr54,$attr57,$attr56,$or11,$or10,$or12;
			lm1 = PopupPagina['DOM']['getElementById'](String('lm1'));
			lm1 = ((($attr53=lm1['value']) !== null & ($attr54=lm1).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, 'value'):
						lm1['value']);
			cm1 = PopupPagina['DOM']['getElementById'](String('cm1'));
			cm1 = ((($attr55=cm1['value']) !== null & ($attr56=cm1).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, 'value'):
						cm1['value']);
			lm2 = PopupPagina['DOM']['getElementById'](String('lm2'));
			lm2 = ((($attr57=lm2['value']) !== null & ($attr58=lm2).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'value'):
						lm2['value']);
			cm2 = PopupPagina['DOM']['getElementById'](String('cm2'));
			cm2 = ((($attr59=cm2['value']) !== null & ($attr60=cm2).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'value'):
						cm2['value']);
			if (pyjslib['bool']((pyjslib['bool']($or1=!pyjslib['bool'](lm1))?$or1:!pyjslib['bool'](lm2)))) {
				PopupPagina['Window']['alert'](String('Informe o numero de linhas da matriz M1 e M2.'));
				return false;
			}
			if (pyjslib['bool'](!pyjslib['op_eq'](lm1, lm2))) {
				PopupPagina['Window']['alert'](String('A quantidade de linhas da matriz M1 deve ser igual a da matriz M2 para operação de soma.'));
				return false;
			}
			if (pyjslib['bool']((pyjslib['bool']($or3=(pyjslib['cmp'](lm1, String('5')) == 1))?$or3:(pyjslib['bool']($or4=(pyjslib['cmp'](lm2, String('5')) == 1))?$or4:(pyjslib['bool']($or5=!pyjslib['op_eq'](pyjslib['len'](lm1), 1))?$or5:!pyjslib['op_eq'](pyjslib['len'](lm2), 1)))))) {
				PopupPagina['Window']['alert'](String('A quantidade de linhas da matriz M1 e da matriz M2, deve ser menor ou igual a 5.'));
				return false;
			}
			if (pyjslib['bool']((pyjslib['bool']($or7=!pyjslib['bool'](cm1))?$or7:!pyjslib['bool'](cm2)))) {
				PopupPagina['Window']['alert'](String('Informe o numero de colunas da matriz M1 e M2.'));
				return false;
			}
			if (pyjslib['bool'](!pyjslib['op_eq'](cm1, cm2))) {
				PopupPagina['Window']['alert'](String('A quantidade de colunas da matriz M1 deve ser igual a da matriz M2 para operação de soma.'));
				return false;
			}
			if (pyjslib['bool']((pyjslib['bool']($or9=(pyjslib['cmp'](cm1, String('7')) == 1))?$or9:(pyjslib['bool']($or10=(pyjslib['cmp'](cm2, String('7')) == 1))?$or10:(pyjslib['bool']($or11=!pyjslib['op_eq'](pyjslib['len'](cm1), 1))?$or11:!pyjslib['op_eq'](pyjslib['len'](cm2), 1)))))) {
				PopupPagina['Window']['alert'](String('A quantidade de colunas da matriz M1 e da matriz M2, deve ser menor ou igual a 7.'));
				return false;
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
			type = PopupPagina['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('mousedown')))) {
				target = PopupPagina['DOM']['eventGetTarget'](event);
				elem = self['caption']['getElement']();
				event_targets_popup = (pyjslib['bool']($and1=target)?PopupPagina['DOM']['isOrHasChild'](elem, target):$and1);
				if (pyjslib['bool'](event_targets_popup)) {
					PopupPagina['DOM']['eventPreventDefault'](event);
				}
			}
			return PopupPagina['PopupPanel']['onEventPreview'](self, event);
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
			PopupPagina['DOM']['setCapture'](self['caption']['getElement']());
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
			var $attr64,$attr65,absX,$attr61,$attr62,absY,$add2,$add3,$add1,$sub8,$add4,$attr66,$attr63,$sub7,$sub6,$sub5;
			if (pyjslib['bool'](((($attr61=self['dragging']) !== null & ($attr62=self).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, 'dragging'):
						self['dragging']))) {
				absX = (typeof ($add1=x)==typeof ($add2=self['getAbsoluteLeft']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					pyjslib['op_add']($add1,$add2));
				absY = (typeof ($add3=y)==typeof ($add4=self['getAbsoluteTop']()) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4));
				self['setPopupPosition']((typeof ($sub5=absX)==typeof ($sub6=((($attr63=self['dragStartX']) !== null & ($attr64=self).__is_instance__) && typeof $attr63 == 'function'?
							pyjslib['getattr']($attr64, 'dragStartX'):
							self['dragStartX'])) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					pyjslib['op_sub']($sub5,$sub6)), (typeof ($sub7=absY)==typeof ($sub8=((($attr65=self['dragStartY']) !== null & ($attr66=self).__is_instance__) && typeof $attr65 == 'function'?
							pyjslib['getattr']($attr66, 'dragStartY'):
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
			PopupPagina['DOM']['releaseCapture'](self['caption']['getElement']());
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
			var $attr67,$attr68;
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr67=self['child']) !== null & ($attr68=self).__is_instance__) && typeof $attr67 == 'function'?
						pyjslib['getattr']($attr68, 'child'):
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

			PopupPagina['PopupPanel']['doAttachChildren'](self);
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

			PopupPagina['PopupPanel']['doDetachChildren'](self);
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
			var $attr69,$attr72,$attr71,$attr70;
			if (pyjslib['bool']((((($attr69=self['child']) !== null & ($attr70=self).__is_instance__) && typeof $attr69 == 'function'?
						pyjslib['getattr']($attr70, 'child'):
						self['child']) !== null))) {
				self['panel']['remove'](((($attr71=self['child']) !== null & ($attr72=self).__is_instance__) && typeof $attr71 == 'function'?
							pyjslib['getattr']($attr72, 'child'):
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
		                            new Array(PopupPagina['PopupPanel']));
	})();
	return this;
}; /* end PopupPagina */


/* end module: PopupPagina */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.Window', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.PushButton.PushButton', 'pyjamas.ui.PushButton', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.Canvas2D.Canvas', 'pyjamas.Canvas2D', 'pyjslib', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel']
*/
