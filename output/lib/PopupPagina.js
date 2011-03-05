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
	PopupPagina['Canvas'] = pyjslib['___import___']('pyjamas.Canvas2D.Canvas', null, null, false);
	PopupPagina['pyjslib'] = pyjslib['___import___']('pyjslib', null);
	PopupPagina['dynamic'] = pyjslib['___import___']('dynamic', null);
	PopupPagina['PopupPagina'] = (function(){
		var $cls_instance = $pyjs__class_instance('PopupPagina');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '48f81a9085eb4114a896f5d47920ec04';
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
			var $attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,id,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$attr9,$attr8,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,datasource;
			$pyjs_kwargs_call(PopupPagina['PopupPanel'], '__init__', null, kwargs, [{}, self, autoHide, modal]);
			datasource = null;
			id = null;
			if (pyjslib['bool'](kwargs['has_key'](String('datasrc')))) {
				datasource = kwargs.__getitem__(String('datasrc'));
			}
			if (pyjslib['bool'](kwargs['has_key'](String('id')))) {
				id = kwargs.__getitem__(String('id'));
			}
			self['setSize']((typeof ($sub1=PopupPagina['Window']['getClientWidth']())==typeof ($sub2=100) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2)), (typeof ($sub3=PopupPagina['Window']['getClientHeight']())==typeof ($sub4=100) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				pyjslib['op_sub']($sub3,$sub4)));
			self['setPopupPosition'](50, 30);
			self.caption = PopupPagina['HTML']();
			self.child = null;
			self['setText'](String('Soma de Matrizes.          Os botões desta tela ainda não estão funcionando.'));
			self.dragging = false;
			self.dragStartX = 0;
			self.dragStartY = 0;
			self.btnAutomatic = PopupPagina['Button'](String('Automatico'));
			self.btnStepByStep = PopupPagina['Button'](String('Passo a passo'));
			self.btnFechar = PopupPagina['Button'](String('Fechar'));
			self.txtColunas = PopupPagina['TextBox']();
			self.txtLinhas = PopupPagina['TextBox']();
			self.lblStatus = PopupPagina['Label'](String('Label para Status'));
			self['btnFechar']['addClickListener'](((($attr1=self['onFecharPopup']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'onFecharPopup'):
						self['onFecharPopup']));
			self.grid = PopupPagina['Grid'](1, 8);
			self['grid']['setWidth'](self['getWidth']());
			self['grid']['setText'](0, 0, String('Nº Linhas:'));
			self['grid']['setWidget'](0, 1, ((($attr3=self['txtLinhas']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'txtLinhas'):
						self['txtLinhas']));
			self['grid']['setText'](0, 2, String('Nº Colunas:'));
			self['grid']['setWidget'](0, 3, ((($attr5=self['txtColunas']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'txtColunas'):
						self['txtColunas']));
			self['grid']['setWidget'](0, 4, ((($attr7=self['btnAutomatic']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'btnAutomatic'):
						self['btnAutomatic']));
			self['grid']['setWidget'](0, 5, ((($attr9=self['btnStepByStep']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'btnStepByStep'):
						self['btnStepByStep']));
			self['grid']['setWidget'](0, 7, ((($attr11=self['btnFechar']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'btnFechar'):
						self['btnFechar']));
			self['grid']['getCellFormatter']()['setAlignment'](0, 7, ((($attr13=PopupPagina['HasHorizontalAlignment']['ALIN_RIGTH']) !== null & ($attr14=PopupPagina['HasHorizontalAlignment']).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'ALIN_RIGTH'):
						PopupPagina['HasHorizontalAlignment']['ALIN_RIGTH']), ((($attr15=PopupPagina['HasVerticalAlignment']['ALIGN_MIDDLE']) !== null & ($attr16=PopupPagina['HasVerticalAlignment']).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'ALIGN_MIDDLE'):
						PopupPagina['HasVerticalAlignment']['ALIGN_MIDDLE']));
			self.panel = $pyjs_kwargs_call(null, PopupPagina['FlexTable'], null, null, [{Height:String('100%'), width:String('100%'), BorderWidth:String('0'), CellPadding:String('0'), CellSpacing:String('0')}]);
			self['panel']['setWidget'](0, 0, ((($attr17=self['caption']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'caption'):
						self['caption']));
			self['panel']['setWidget'](1, 0, ((($attr19=self['grid']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'grid'):
						self['grid']));
			self['panel']['getCellFormatter']()['setHeight'](2, 0, String('100%'));
			self['panel']['getCellFormatter']()['setWidth'](2, 0, String('100%'));
			self['panel']['getCellFormatter']()['setAlignment'](2, 0, ((($attr21=PopupPagina['HasHorizontalAlignment']['ALIGN_CENTER']) !== null & ($attr22=PopupPagina['HasHorizontalAlignment']).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'ALIGN_CENTER'):
						PopupPagina['HasHorizontalAlignment']['ALIGN_CENTER']), ((($attr23=PopupPagina['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr24=PopupPagina['HasVerticalAlignment']).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'ALIGN_TOP'):
						PopupPagina['HasVerticalAlignment']['ALIGN_TOP']));
			self['panel']['setID'](String('contetepopup'));
			self['panel']['setHTML'](2, 0, pyjslib['sprintf'](String('\x3Ccanvas id=\x27%s\x27 datasrc=\x27%s\x27 width=\x27%d\x27 height=\x27%d\x27 style=\x27image-rendering: optimizespeed !important\x3B \x27\x3E\x3C/canvas\x3E'), pyjslib['tuple']([id, datasource, (typeof ($sub5=PopupPagina['Window']['getClientWidth']())==typeof ($sub6=100) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				pyjslib['op_sub']($sub5,$sub6)), pyjslib['abs']((typeof ($sub7=PopupPagina['Window']['getClientHeight']())==typeof ($sub8=200) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				pyjslib['op_sub']($sub7,$sub8)))])));
			self['panel']['setWidget'](3, 0, ((($attr25=self['lblStatus']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'lblStatus'):
						self['lblStatus']));
			self['panel']['setStyleName'](String('dialogContent'));
			PopupPagina['PopupPanel']['setWidget'](self, ((($attr27=self['panel']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'panel'):
						self['panel']));
			self['setStyleName'](String('gwt-DialogBox'));
			self['caption']['setStyleName'](String('Caption'));
			self['caption']['addMouseListener'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['autoHide', null],['modal', true]]);
		$cls_definition['__init__'] = $method;
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
			var $attr33,$attr32,$sub12,$sub10,absX,absY,$add2,$add3,$attr31,$attr30,$add4,$attr29,$add1,$sub11,$attr34,$sub9;
			if (pyjslib['bool'](((($attr29=self['dragging']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'dragging'):
						self['dragging']))) {
				absX = (typeof ($add1=x)==typeof ($add2=self['getAbsoluteLeft']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					pyjslib['op_add']($add1,$add2));
				absY = (typeof ($add3=y)==typeof ($add4=self['getAbsoluteTop']()) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4));
				self['setPopupPosition']((typeof ($sub9=absX)==typeof ($sub10=((($attr31=self['dragStartX']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
							pyjslib['getattr']($attr32, 'dragStartX'):
							self['dragStartX'])) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					pyjslib['op_sub']($sub9,$sub10)), (typeof ($sub11=absY)==typeof ($sub12=((($attr33=self['dragStartY']) !== null & ($attr34=self).__is_instance__) && typeof $attr33 == 'function'?
							pyjslib['getattr']($attr34, 'dragStartY'):
							self['dragStartY'])) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					pyjslib['op_sub']($sub11,$sub12)));
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
			var $attr35,$attr36;
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr35=self['child']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'child'):
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
			var $attr37,$attr40,$attr39,$attr38;
			if (pyjslib['bool']((((($attr37=self['child']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'child'):
						self['child']) !== null))) {
				self['panel']['remove'](((($attr39=self['child']) !== null & ($attr40=self).__is_instance__) && typeof $attr39 == 'function'?
							pyjslib['getattr']($attr40, 'child'):
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
		$method = $pyjs__bind_method($cls_instance, 'onFecharPopup', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['hide']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onFecharPopup'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(PopupPagina['PopupPanel']));
	})();
	return this;
}; /* end PopupPagina */


/* end module: PopupPagina */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.Window', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Canvas2D.Canvas', 'pyjamas.Canvas2D', 'pyjslib', 'dynamic']
*/
