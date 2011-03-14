/* start module: pyjamas.ui.DialogBox */
$pyjs.loaded_modules['pyjamas.ui.DialogBox'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DialogBox'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DialogBox'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['DialogBox'] = $pyjs.loaded_modules["pyjamas.ui.DialogBox"];
	pyjamas['ui']['DialogBox'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DialogBox';
	var __name__ = pyjamas['ui']['DialogBox'].__name__ = __mod_name__;
	var DialogBox = pyjamas['ui']['DialogBox'];


	pyjamas['ui']['DialogBox']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['DialogBox']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['DialogBox']['PopupPanel'] = pyjslib['___import___']('PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['DialogBox']['HTML'] = pyjslib['___import___']('HTML.HTML', 'pyjamas.ui', null, false);
	pyjamas['ui']['DialogBox']['FlexTable'] = pyjslib['___import___']('FlexTable.FlexTable', 'pyjamas.ui', null, false);
	pyjamas['ui']['DialogBox']['HasHorizontalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
	pyjamas['ui']['DialogBox']['HasVerticalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
	pyjamas['ui']['DialogBox']['DialogBox'] = (function(){
		var $cls_instance = $pyjs__class_instance('DialogBox');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e9d3e356e6ba3ab20b41e6059865179f';
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
			var $attr8,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,$attr3;
			$pyjs_kwargs_call(pyjamas['ui']['DialogBox']['PopupPanel'], '__init__', null, kwargs, [{}, self, autoHide, modal]);
			self.caption = pyjamas['ui']['DialogBox']['HTML']();
			self.child = null;
			self.dragging = false;
			self.dragStartX = 0;
			self.dragStartY = 0;
			self.panel = $pyjs_kwargs_call(null, pyjamas['ui']['DialogBox']['FlexTable'], null, null, [{Height:String('100%'), BorderWidth:String('0'), CellPadding:String('0'), CellSpacing:String('0')}]);
			self['panel']['setWidget'](0, 0, ((($attr1=self['caption']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'caption'):
						self['caption']));
			self['panel']['getCellFormatter']()['setHeight'](1, 0, String('100%'));
			self['panel']['getCellFormatter']()['setWidth'](1, 0, String('100%'));
			self['panel']['getCellFormatter']()['setAlignment'](1, 0, ((($attr3=pyjamas['ui']['DialogBox']['HasHorizontalAlignment']['ALIGN_CENTER']) !== null & ($attr4=pyjamas['ui']['DialogBox']['HasHorizontalAlignment']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'ALIGN_CENTER'):
						pyjamas['ui']['DialogBox']['HasHorizontalAlignment']['ALIGN_CENTER']), ((($attr5=pyjamas['ui']['DialogBox']['HasVerticalAlignment']['ALIGN_MIDDLE']) !== null & ($attr6=pyjamas['ui']['DialogBox']['HasVerticalAlignment']).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'ALIGN_MIDDLE'):
						pyjamas['ui']['DialogBox']['HasVerticalAlignment']['ALIGN_MIDDLE']));
			pyjamas['ui']['DialogBox']['PopupPanel']['setWidget'](self, ((($attr7=self['panel']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'panel'):
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
			type = pyjamas['ui']['DialogBox']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('mousedown')))) {
				target = pyjamas['ui']['DialogBox']['DOM']['eventGetTarget'](event);
				elem = self['caption']['getElement']();
				event_targets_popup = (pyjslib['bool']($and1=target)?pyjamas['ui']['DialogBox']['DOM']['isOrHasChild'](elem, target):$and1);
				if (pyjslib['bool'](event_targets_popup)) {
					pyjamas['ui']['DialogBox']['DOM']['eventPreventDefault'](event);
				}
			}
			return pyjamas['ui']['DialogBox']['PopupPanel']['onEventPreview'](self, event);
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
			pyjamas['ui']['DialogBox']['DOM']['setCapture'](self['caption']['getElement']());
			self.dragStartX = x;
			self.dragStartY = y;
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr9,$sub3,absX,absY,$add2,$add3,$attr14,$add1,$add4,$sub2,$sub1,$sub4,$attr11,$attr10,$attr13,$attr12;
			if (pyjslib['bool'](((($attr9=self['dragging']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'dragging'):
						self['dragging']))) {
				absX = (typeof ($add1=x)==typeof ($add2=self['getAbsoluteLeft']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					pyjslib['op_add']($add1,$add2));
				absY = (typeof ($add3=y)==typeof ($add4=self['getAbsoluteTop']()) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4));
				self['setPopupPosition']((typeof ($sub1=absX)==typeof ($sub2=((($attr11=self['dragStartX']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'dragStartX'):
							self['dragStartX'])) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					pyjslib['op_sub']($sub1,$sub2)), (typeof ($sub3=absY)==typeof ($sub4=((($attr13=self['dragStartY']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
							pyjslib['getattr']($attr14, 'dragStartY'):
							self['dragStartY'])) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					pyjslib['op_sub']($sub3,$sub4)));
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
			pyjamas['ui']['DialogBox']['DOM']['releaseCapture'](self['caption']['getElement']());
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr15,$attr16;
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr15=self['child']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'child'):
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

			pyjamas['ui']['DialogBox']['PopupPanel']['doAttachChildren'](self);
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

			pyjamas['ui']['DialogBox']['PopupPanel']['doDetachChildren'](self);
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
			var $attr20,$attr19,$attr18,$attr17;
			if (pyjslib['bool']((((($attr17=self['child']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'child'):
						self['child']) !== null))) {
				self['panel']['remove'](((($attr19=self['child']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
							pyjslib['getattr']($attr20, 'child'):
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
		                            new Array(pyjamas['ui']['DialogBox']['PopupPanel']));
	})();
	pyjamas['ui']['DialogBox']['Factory']['registerClass'](String('pyjamas.ui.DialogBox'), pyjamas['ui']['DialogBox']['DialogBox']);
	return this;
}; /* end pyjamas.ui.DialogBox */


/* end module: pyjamas.ui.DialogBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'PopupPanel.PopupPanel', 'PopupPanel', 'HTML.HTML', 'HTML', 'FlexTable.FlexTable', 'FlexTable', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', 'pyjamas.ui.HasVerticalAlignment']
*/
