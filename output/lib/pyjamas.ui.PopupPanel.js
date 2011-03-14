/* start module: pyjamas.ui.PopupPanel */
$pyjs.loaded_modules['pyjamas.ui.PopupPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.PopupPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.PopupPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['PopupPanel'] = $pyjs.loaded_modules["pyjamas.ui.PopupPanel"];
	pyjamas['ui']['PopupPanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.PopupPanel';
	var __name__ = pyjamas['ui']['PopupPanel'].__name__ = __mod_name__;
	var PopupPanel = pyjamas['ui']['PopupPanel'];


	pyjamas['ui']['PopupPanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['PopupPanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['PopupPanel']['SimplePanel'] = pyjslib['___import___']('SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['PopupPanel']['RootPanel'] = pyjslib['___import___']('RootPanel.RootPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['PopupPanel']['MouseListener'] = pyjslib['___import___']('pyjamas.ui.MouseListener', 'pyjamas.ui', null, false);
	pyjamas['ui']['PopupPanel']['KeyboardListener'] = pyjslib['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
	pyjamas['ui']['PopupPanel']['PopupPanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('PopupPanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '54ba393aed754f3576e5ec99892ff5ff';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(autoHide, modal, rootpanel) {
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
				autoHide = arguments[1];
				modal = arguments[2];
				rootpanel = arguments[3];
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof rootpanel != 'undefined') {
					if (rootpanel !== null && typeof rootpanel['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = rootpanel;
						rootpanel = arguments[4];
					}
				} else 				if (typeof modal != 'undefined') {
					if (modal !== null && typeof modal['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modal;
						modal = arguments[4];
					}
				} else 				if (typeof autoHide != 'undefined') {
					if (autoHide !== null && typeof autoHide['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = autoHide;
						autoHide = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof autoHide == 'undefined') autoHide=arguments.callee.__args__[3][1];
			if (typeof modal == 'undefined') modal=arguments.callee.__args__[4][1];
			if (typeof rootpanel == 'undefined') rootpanel=arguments.callee.__args__[5][1];
			var element;
			self.popupListeners = pyjslib['list']([]);
			self.showing = false;
			self.autoHide = autoHide;
			self.modal = modal;
			if (pyjslib['bool']((rootpanel === null))) {
				rootpanel = pyjamas['ui']['PopupPanel']['RootPanel']();
			}
			self.rootpanel = rootpanel;
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = self['createElement']();
			}
			pyjamas['ui']['PopupPanel']['DOM']['setStyleAttribute'](element, String('position'), String('absolute'));
			$pyjs_kwargs_call(pyjamas['ui']['PopupPanel']['SimplePanel'], '__init__', null, kwargs, [{}, self, element]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['autoHide', false],['modal', true],['rootpanel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addPopupListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['popupListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addPopupListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getPopupLeft', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['PopupPanel']['DOM']['getIntAttribute'](self['getElement'](), String('offsetLeft'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPopupLeft'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getPopupTop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['PopupPanel']['DOM']['getIntAttribute'](self['getElement'](), String('offsetTop'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPopupTop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['PopupPanel']['DOM']['createDiv']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'hide', function(autoClosed) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autoClosed = arguments[1];
			}
			if (typeof autoClosed == 'undefined') autoClosed=arguments.callee.__args__[3][1];
			var $iter1_nextval,$iter1_type,$attr1,$attr2,$iter1_iter,listener,$iter1_array,$iter1_idx;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr1=self['showing']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'showing'):
						self['showing'])))) {
				return null;
			}
			self.showing = false;
			pyjamas['ui']['PopupPanel']['DOM']['removeEventPreview'](self);
			self['rootpanel']['remove'](self);
			self['onHideImpl'](self['getElement']());
			$iter1_iter = self['popupListeners'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				if (pyjslib['bool'](pyjslib['hasattr'](listener, String('onPopupClosed')))) {
					listener['onPopupClosed'](self, autoClosed);
				}
				else {
					listener(self, autoClosed);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['autoClosed', false]]);
		$cls_definition['hide'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isModal', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return ((($attr3=self['modal']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'modal'):
						self['modal']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isModal'] = $method;
		$method = $pyjs__bind_method($cls_instance, '_event_targets_popup', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and2,target;
			target = pyjamas['ui']['PopupPanel']['DOM']['eventGetTarget'](event);
			return (pyjslib['bool']($and1=target)?pyjamas['ui']['PopupPanel']['DOM']['isOrHasChild'](self['getElement'](), target):$and1);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_event_targets_popup'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onEventPreview', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $or5,$or4,$or9,$or8,$and9,$attr9,$and8,$attr8,$or7,$or6,$or1,$or3,$or2,$and4,$and3,$attr5,$and5,$and6,$attr6,$and10,$attr7,$attr14,$and7,$attr11,$attr10,$attr13,$attr12,type,$or14,$or11,$or10,$or13,$or12;
			type = pyjamas['ui']['PopupPanel']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('keydown')))) {
				return (pyjslib['bool']($and3=self['onKeyDownPreview'](pyjamas['ui']['PopupPanel']['DOM']['eventGetKeyCode'](event), pyjamas['ui']['PopupPanel']['KeyboardListener']['getKeyboardModifiers'](event)))?(pyjslib['bool']($or1=!pyjslib['bool'](((($attr5=self['modal']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
							pyjslib['getattr']($attr6, 'modal'):
							self['modal'])))?$or1:self['_event_targets_popup'](event)):$and3);
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](type, String('keyup')))) {
				return (pyjslib['bool']($and5=self['onKeyUpPreview'](pyjamas['ui']['PopupPanel']['DOM']['eventGetKeyCode'](event), pyjamas['ui']['PopupPanel']['KeyboardListener']['getKeyboardModifiers'](event)))?(pyjslib['bool']($or3=!pyjslib['bool'](((($attr7=self['modal']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'modal'):
							self['modal'])))?$or3:self['_event_targets_popup'](event)):$and5);
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](type, String('keypress')))) {
				return (pyjslib['bool']($and7=self['onKeyPressPreview'](pyjamas['ui']['PopupPanel']['DOM']['eventGetKeyCode'](event), pyjamas['ui']['PopupPanel']['KeyboardListener']['getKeyboardModifiers'](event)))?(pyjslib['bool']($or5=!pyjslib['bool'](((($attr9=self['modal']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'modal'):
							self['modal'])))?$or5:self['_event_targets_popup'](event)):$and7);
			}
			else if (pyjslib['bool']((pyjslib['bool']($or7=pyjslib['op_eq'](type, String('mousedown')))?$or7:pyjslib['op_eq'](type, String('blur'))))) {
				if (pyjslib['bool']((pyjamas['ui']['PopupPanel']['DOM']['getCaptureElement']() !== null))) {
					return true;
				}
				if (pyjslib['bool']((pyjslib['bool']($and9=((($attr11=self['autoHide']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'autoHide'):
							self['autoHide']))?!pyjslib['bool'](self['_event_targets_popup'](event)):$and9))) {
					self['hide'](true);
					return true;
				}
			}
			else if (pyjslib['bool']((pyjslib['bool']($or9=pyjslib['op_eq'](type, String('mouseup')))?$or9:(pyjslib['bool']($or10=pyjslib['op_eq'](type, String('click')))?$or10:(pyjslib['bool']($or11=pyjslib['op_eq'](type, String('mousemove')))?$or11:pyjslib['op_eq'](type, String('dblclick'))))))) {
				if (pyjslib['bool']((pyjamas['ui']['PopupPanel']['DOM']['getCaptureElement']() !== null))) {
					return true;
				}
			}
			return (pyjslib['bool']($or13=!pyjslib['bool'](((($attr13=self['modal']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'modal'):
						self['modal'])))?$or13:self['_event_targets_popup'](event));
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onKeyDownPreview', function(key, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				modifiers = arguments[2];
			}

			return true;
		}
	, 1, [null,null,['self'],['key'],['modifiers']]);
		$cls_definition['onKeyDownPreview'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onKeyPressPreview', function(key, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				modifiers = arguments[2];
			}

			return true;
		}
	, 1, [null,null,['self'],['key'],['modifiers']]);
		$cls_definition['onKeyPressPreview'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onKeyUpPreview', function(key, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				modifiers = arguments[2];
			}

			return true;
		}
	, 1, [null,null,['self'],['key'],['modifiers']]);
		$cls_definition['onKeyUpPreview'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onHideImpl', function(popup) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onHideImpl'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onShowImpl', function(popup) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onShowImpl'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removePopupListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['popupListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removePopupListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setPopupPosition', function(left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}
			var element,$sub3,$sub2,$sub1,$sub4;
			if (pyjslib['bool']((pyjslib['cmp'](left, 0) == -1))) {
				left = 0;
			}
			if (pyjslib['bool']((pyjslib['cmp'](top, 0) == -1))) {
				top = 0;
			}
			left = (typeof ($sub1=left)==typeof ($sub2=pyjamas['ui']['PopupPanel']['DOM']['getBodyOffsetLeft']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2));
			top = (typeof ($sub3=top)==typeof ($sub4=pyjamas['ui']['PopupPanel']['DOM']['getBodyOffsetTop']()) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				pyjslib['op_sub']($sub3,$sub4));
			element = self['getElement']();
			pyjamas['ui']['PopupPanel']['DOM']['setStyleAttribute'](element, String('left'), pyjslib['sprintf'](String('%dpx'), left));
			pyjamas['ui']['PopupPanel']['DOM']['setStyleAttribute'](element, String('top'), pyjslib['sprintf'](String('%dpx'), top));
			return null;
		}
	, 1, [null,null,['self'],['left'],['top']]);
		$cls_definition['setPopupPosition'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'show', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			if (pyjslib['bool'](((($attr15=self['showing']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'showing'):
						self['showing']))) {
				return null;
			}
			self.showing = true;
			pyjamas['ui']['PopupPanel']['DOM']['addEventPreview'](self);
			self['rootpanel']['add'](self);
			self['onShowImpl'](self['getElement']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['PopupPanel']['SimplePanel']));
	})();
	pyjamas['ui']['PopupPanel']['Factory']['registerClass'](String('pyjamas.ui.PopupPanel'), pyjamas['ui']['PopupPanel']['PopupPanel']);
	return this;
}; /* end pyjamas.ui.PopupPanel */


/* end module: pyjamas.ui.PopupPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'SimplePanel.SimplePanel', 'SimplePanel', 'RootPanel.RootPanel', 'RootPanel', 'pyjamas.ui.MouseListener', 'pyjamas.ui', 'pyjamas.ui.KeyboardListener']
*/
