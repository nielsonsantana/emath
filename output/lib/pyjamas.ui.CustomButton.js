/* start module: pyjamas.ui.CustomButton */
$pyjs.loaded_modules['pyjamas.ui.CustomButton'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.CustomButton'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.CustomButton'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['CustomButton'] = $pyjs.loaded_modules["pyjamas.ui.CustomButton"];
	pyjamas['ui']['CustomButton'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CustomButton';
	var __name__ = pyjamas['ui']['CustomButton'].__name__ = __mod_name__;
	var CustomButton = pyjamas['ui']['CustomButton'];


	pyjamas['ui']['CustomButton']['sys'] = pyjslib['___import___']('sys', 'pyjamas.ui');
	pyjamas['ui']['CustomButton']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['CustomButton']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['CustomButton']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['CustomButton']['ButtonBase'] = pyjslib['___import___']('ButtonBase.ButtonBase', 'pyjamas.ui', null, false);
	pyjamas['ui']['CustomButton']['Focus'] = pyjslib['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	pyjamas['ui']['CustomButton']['UIObject'] = pyjslib['___import___']('UIObject.UIObject', 'pyjamas.ui', null, false);
	pyjamas['ui']['CustomButton']['Face'] = (function(){
		var $cls_instance = $pyjs__class_instance('Face');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'fa31bc2c04af8290911687439910146c';
		$cls_definition['STYLENAME_HTML_FACE'] = String('html-face');
		$method = $pyjs__bind_method($cls_instance, '__init__', function(button, delegateTo) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				button = arguments[1];
				delegateTo = arguments[2];
			}
			if (typeof delegateTo == 'undefined') delegateTo=arguments.callee.__args__[4][1];

			self.button = button;
			self.delegateTo = delegateTo;
			self.face = null;
			self.id = null;
			self.$$name = String('fazom');
			return null;
		}
	, 1, [null,null,['self'],['button'],['delegateTo', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return ((($attr1=self['$$name']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, '$$name'):
						self['$$name']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getFaceID', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return ((($attr3=self['id']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'id'):
						self['id']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFaceID'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setFaceID', function(face_id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				face_id = arguments[1];
			}

			self.id = face_id;
			return null;
		}
	, 1, [null,null,['self'],['face_id']]);
		$cls_definition['setFaceID'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['CustomButton']['DOM']['getInnerHTML'](self['getFace']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['CustomButton']['DOM']['getInnerText'](self['getFace']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}
			var $attr9,$attr8,$attr5,$attr7,$attr6,$attr11,$attr10,$attr12;
			self.face = pyjamas['ui']['CustomButton']['DOM']['createDiv']();
			pyjamas['ui']['CustomButton']['UIObject']['setStyleName'](((($attr5=self['button']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'button'):
						self['button']), ((($attr7=self['face']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'face'):
						self['face']), ((($attr9=self['STYLENAME_HTML_FACE']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'STYLENAME_HTML_FACE'):
						self['STYLENAME_HTML_FACE']), true);
			pyjamas['ui']['CustomButton']['DOM']['setInnerHTML'](((($attr11=self['face']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'face'):
						self['face']), html);
			self['button']['updateButtonFace']();
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setImage', function(image) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				image = arguments[1];
			}

			self.face = image['getElement']();
			self['button']['updateButtonFace']();
			return null;
		}
	, 1, [null,null,['self'],['image']]);
		$cls_definition['setImage'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $attr20,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr13;
			self.face = pyjamas['ui']['CustomButton']['DOM']['createDiv']();
			pyjamas['ui']['CustomButton']['UIObject']['setStyleName'](((($attr13=self['button']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'button'):
						self['button']), ((($attr15=self['face']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'face'):
						self['face']), ((($attr17=self['STYLENAME_HTML_FACE']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'STYLENAME_HTML_FACE'):
						self['STYLENAME_HTML_FACE']), true);
			pyjamas['ui']['CustomButton']['DOM']['setInnerText'](((($attr19=self['face']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'face'):
						self['face']), text);
			self['button']['updateButtonFace']();
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getName']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28;
			if (pyjslib['bool']((((($attr21=self['face']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'face'):
						self['face']) === null))) {
				if (pyjslib['bool']((((($attr23=self['delegateTo']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
							pyjslib['getattr']($attr24, 'delegateTo'):
							self['delegateTo']) === null))) {
					self.face = pyjamas['ui']['CustomButton']['DOM']['createDiv']();
					return ((($attr25=self['face']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
								pyjslib['getattr']($attr26, 'face'):
								self['face']);
				}
				else {
					return self['delegateTo']['getFace']();
				}
			}
			else {
				return ((($attr27=self['face']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
							pyjslib['getattr']($attr28, 'face'):
							self['face']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFace'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['ui']['CustomButton']['CustomButton'] = (function(){
		var $cls_instance = $pyjs__class_instance('CustomButton');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'af78e612af992b7868115973475e9157';
		$cls_definition['STYLENAME_DEFAULT'] = String('gwt-CustomButton');
		$cls_definition['DOWN_ATTRIBUTE'] = 1;
		$cls_definition['HOVERING_ATTRIBUTE'] = 2;
		$cls_definition['DISABLED_ATTRIBUTE'] = 4;
		$cls_definition['UP'] = 0;
		$cls_definition['DOWN'] = $cls_definition['DOWN_ATTRIBUTE'];
		$cls_definition['UP_HOVERING'] = $cls_definition['HOVERING_ATTRIBUTE'];
		$cls_definition['DOWN_HOVERING'] = ($cls_definition['DOWN_ATTRIBUTE'])|($cls_definition['HOVERING_ATTRIBUTE']);
		$cls_definition['UP_DISABLED'] = $cls_definition['DISABLED_ATTRIBUTE'];
		$cls_definition['DOWN_DISABLED'] = ($cls_definition['DOWN'])|($cls_definition['DISABLED_ATTRIBUTE']);
		$method = $pyjs__bind_method($cls_instance, '__init__', function(upImageText, downImageText, listener) {
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
				upImageText = arguments[1];
				downImageText = arguments[2];
				listener = arguments[3];
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof listener != 'undefined') {
					if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = listener;
						listener = arguments[4];
					}
				} else 				if (typeof downImageText != 'undefined') {
					if (downImageText !== null && typeof downImageText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = downImageText;
						downImageText = arguments[4];
					}
				} else 				if (typeof upImageText != 'undefined') {
					if (upImageText !== null && typeof upImageText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = upImageText;
						upImageText = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof upImageText == 'undefined') upImageText=arguments.callee.__args__[3][1];
			if (typeof downImageText == 'undefined') downImageText=arguments.callee.__args__[4][1];
			if (typeof listener == 'undefined') listener=arguments.callee.__args__[5][1];
			var $attr40,$attr29,upText,downText,upImage,$and1,$and2,$and3,$and4,$and5,$and6,$attr33,$attr32,$attr31,$attr30,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38,downImage,element;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), ((($attr29=self['STYLENAME_DEFAULT']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
							pyjslib['getattr']($attr30, 'STYLENAME_DEFAULT'):
							self['STYLENAME_DEFAULT']));
			}
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['CustomButton']['Focus']['createFocusable']();
			}
			$pyjs_kwargs_call(pyjamas['ui']['CustomButton']['ButtonBase'], '__init__', null, kwargs, [{}, self, element]);
			self.curFace = null;
			self.curFaceElement = null;
			self.up = null;
			self.down = null;
			self.downHovering = null;
			self.upHovering = null;
			self.upDisabled = null;
			self.downDisabled = null;
			self.isCapturing = false;
			self.isFocusing = false;
			self.allowClick = false;
			self['setUpFace'](self['createFace'](null, String('up'), ((($attr31=self['UP']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, 'UP'):
						self['UP'])));
			if (pyjslib['bool']((pyjslib['bool']($and1=(downImageText === null))?(listener === null):$and1))) {
				listener = upImageText;
				upImageText = null;
			}
			if (pyjslib['bool']((pyjslib['bool']($and3=upImageText)?pyjslib['isinstance'](upImageText, pyjslib['str']):$and3))) {
				upText = upImageText;
				upImage = null;
			}
			else {
				upImage = upImageText;
				upText = null;
			}
			if (pyjslib['bool']((pyjslib['bool']($and5=downImageText)?pyjslib['isinstance'](downImageText, pyjslib['str']):$and5))) {
				downText = downImageText;
				downImage = null;
			}
			else {
				downImage = downImageText;
				downText = null;
			}
			if (pyjslib['bool'](upImage)) {
				self['getUpFace']()['setImage'](upImage);
			}
			if (pyjslib['bool'](upText)) {
				self['getUpFace']()['setText'](upText);
			}
			if (pyjslib['bool'](downImage)) {
				self['getDownFace']()['setImage'](downImage);
			}
			if (pyjslib['bool'](downText)) {
				self['getDownFace']()['setText'](downText);
			}
			self['sinkEvents']((((($attr33=pyjamas['ui']['CustomButton']['Event']['ONCLICK']) !== null & ($attr34=pyjamas['ui']['CustomButton']['Event']).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'ONCLICK'):
						pyjamas['ui']['CustomButton']['Event']['ONCLICK']))|(((($attr35=pyjamas['ui']['CustomButton']['Event']['MOUSEEVENTS']) !== null & ($attr36=pyjamas['ui']['CustomButton']['Event']).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'MOUSEEVENTS'):
						pyjamas['ui']['CustomButton']['Event']['MOUSEEVENTS']))|(((($attr37=pyjamas['ui']['CustomButton']['Event']['FOCUSEVENTS']) !== null & ($attr38=pyjamas['ui']['CustomButton']['Event']).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'FOCUSEVENTS'):
						pyjamas['ui']['CustomButton']['Event']['FOCUSEVENTS']))|(((($attr39=pyjamas['ui']['CustomButton']['Event']['KEYEVENTS']) !== null & ($attr40=pyjamas['ui']['CustomButton']['Event']).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'KEYEVENTS'):
						pyjamas['ui']['CustomButton']['Event']['KEYEVENTS'])));
			if (pyjslib['bool'](listener)) {
				self['addClickListener'](listener);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['upImageText', null],['downImageText', null],['listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'updateButtonFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and8,$and7,$attr44,$attr42,$attr43,$attr41;
			if (pyjslib['bool']((pyjslib['bool']($and7=(((($attr41=self['curFace']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'curFace'):
						self['curFace']) !== null))?pyjslib['op_eq'](self['curFace']['getFace'](), self['getFace']()):$and7))) {
				self['setCurrentFaceElement'](((($attr43=self['face']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
							pyjslib['getattr']($attr44, 'face'):
							self['face']));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateButtonFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getDownDisabledFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr50,$attr46,$attr47,$attr45,$attr48,$attr49;
			if (pyjslib['bool']((((($attr45=self['downDisabled']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'downDisabled'):
						self['downDisabled']) === null))) {
				self['setDownDisabledFace'](self['createFace'](self['getDownFace'](), String('down-disabled'), ((($attr47=self['DOWN_DISABLED']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
							pyjslib['getattr']($attr48, 'DOWN_DISABLED'):
							self['DOWN_DISABLED'])));
			}
			return ((($attr49=self['downDisabled']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'downDisabled'):
						self['downDisabled']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDownDisabledFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getDownFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr51,$attr52,$attr55,$attr54,$attr56,$attr53;
			if (pyjslib['bool']((((($attr51=self['down']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'down'):
						self['down']) === null))) {
				self['setDownFace'](self['createFace'](self['getUpFace'](), String('down'), ((($attr53=self['DOWN']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
							pyjslib['getattr']($attr54, 'DOWN'):
							self['DOWN'])));
			}
			return ((($attr55=self['down']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, 'down'):
						self['down']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDownFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getDownHoveringFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr59,$attr58,$attr60,$attr61,$attr57,$attr62;
			if (pyjslib['bool']((((($attr57=self['downHovering']) !== null & ($attr58=self).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'downHovering'):
						self['downHovering']) === null))) {
				self['setDownHoveringFace'](self['createFace'](self['getDownFace'](), String('down-hovering'), ((($attr59=self['DOWN_HOVERING']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
							pyjslib['getattr']($attr60, 'DOWN_HOVERING'):
							self['DOWN_HOVERING'])));
			}
			return ((($attr61=self['downHovering']) !== null & ($attr62=self).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, 'downHovering'):
						self['downHovering']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDownHoveringFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getCurrentFace']()['getHTML']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getTabIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['CustomButton']['Focus']['getTabIndex'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getCurrentFace']()['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getUpDisabledFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr68,$attr64,$attr65,$attr67,$attr63,$attr66;
			if (pyjslib['bool']((((($attr63=self['upDisabled']) !== null & ($attr64=self).__is_instance__) && typeof $attr63 == 'function'?
						pyjslib['getattr']($attr64, 'upDisabled'):
						self['upDisabled']) === null))) {
				self['setUpDisabledFace'](self['createFace'](self['getUpFace'](), String('up-disabled'), ((($attr65=self['UP_DISABLED']) !== null & ($attr66=self).__is_instance__) && typeof $attr65 == 'function'?
							pyjslib['getattr']($attr66, 'UP_DISABLED'):
							self['UP_DISABLED'])));
			}
			return ((($attr67=self['upDisabled']) !== null & ($attr68=self).__is_instance__) && typeof $attr67 == 'function'?
						pyjslib['getattr']($attr68, 'upDisabled'):
						self['upDisabled']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUpDisabledFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getUpFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr69,$attr70;
			return ((($attr69=self['up']) !== null & ($attr70=self).__is_instance__) && typeof $attr69 == 'function'?
						pyjslib['getattr']($attr70, 'up'):
						self['up']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUpFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getUpHoveringFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr76,$attr75,$attr74,$attr73,$attr72,$attr71;
			if (pyjslib['bool']((((($attr71=self['upHovering']) !== null & ($attr72=self).__is_instance__) && typeof $attr71 == 'function'?
						pyjslib['getattr']($attr72, 'upHovering'):
						self['upHovering']) === null))) {
				self['setUpHoveringFace'](self['createFace'](self['getUpFace'](), String('up-hovering'), ((($attr73=self['UP_HOVERING']) !== null & ($attr74=self).__is_instance__) && typeof $attr73 == 'function'?
							pyjslib['getattr']($attr74, 'UP_HOVERING'):
							self['UP_HOVERING'])));
			}
			return ((($attr75=self['upHovering']) !== null & ($attr76=self).__is_instance__) && typeof $attr75 == 'function'?
						pyjslib['getattr']($attr76, 'upHovering'):
						self['upHovering']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUpHoveringFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var event_type,$or4,$attr93,$attr82,$attr83,$attr80,$attr81,$attr86,$attr87,$attr84,$attr85,$attr88,$attr89,to,$and9,$or1,$or3,$or2,$and12,$and13,$and10,$and11,$and14,$attr95,$attr94,$attr97,$attr96,$attr91,$attr90,$attr79,$attr78,$attr77,$attr92,$attr98,keyCode;
			if (pyjslib['bool'](!pyjslib['bool'](self['isEnabled']()))) {
				return null;
			}
			event_type = pyjamas['ui']['CustomButton']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('click')))) {
				if (pyjslib['bool'](!pyjslib['bool'](((($attr77=self['allowClick']) !== null & ($attr78=self).__is_instance__) && typeof $attr77 == 'function'?
							pyjslib['getattr']($attr78, 'allowClick'):
							self['allowClick'])))) {
					pyjamas['ui']['CustomButton']['DOM']['eventStopPropagation'](event);
					return null;
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('mousedown')))) {
				if (pyjslib['bool'](pyjslib['op_eq'](pyjamas['ui']['CustomButton']['DOM']['eventGetButton'](event), ((($attr79=pyjamas['ui']['CustomButton']['Event']['BUTTON_LEFT']) !== null & ($attr80=pyjamas['ui']['CustomButton']['Event']).__is_instance__) && typeof $attr79 == 'function'?
							pyjslib['getattr']($attr80, 'BUTTON_LEFT'):
							pyjamas['ui']['CustomButton']['Event']['BUTTON_LEFT'])))) {
					self['setFocus'](true);
					self['onClickStart']();
					pyjamas['ui']['CustomButton']['DOM']['setCapture'](self['getElement']());
					self.isCapturing = true;
					pyjamas['ui']['CustomButton']['DOM']['eventPreventDefault'](event);
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('mouseup')))) {
				if (pyjslib['bool'](((($attr81=self['isCapturing']) !== null & ($attr82=self).__is_instance__) && typeof $attr81 == 'function'?
							pyjslib['getattr']($attr82, 'isCapturing'):
							self['isCapturing']))) {
					self.isCapturing = false;
					pyjamas['ui']['CustomButton']['DOM']['releaseCapture'](self['getElement']());
					if (pyjslib['bool']((pyjslib['bool']($and9=self['isHovering']())?pyjslib['op_eq'](pyjamas['ui']['CustomButton']['DOM']['eventGetButton'](event), ((($attr83=pyjamas['ui']['CustomButton']['Event']['BUTTON_LEFT']) !== null & ($attr84=pyjamas['ui']['CustomButton']['Event']).__is_instance__) && typeof $attr83 == 'function'?
								pyjslib['getattr']($attr84, 'BUTTON_LEFT'):
								pyjamas['ui']['CustomButton']['Event']['BUTTON_LEFT'])):$and9))) {
						self['onClick']();
					}
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('mousemove')))) {
				if (pyjslib['bool'](((($attr85=self['isCapturing']) !== null & ($attr86=self).__is_instance__) && typeof $attr85 == 'function'?
							pyjslib['getattr']($attr86, 'isCapturing'):
							self['isCapturing']))) {
					pyjamas['ui']['CustomButton']['DOM']['eventPreventDefault'](event);
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('mouseout')))) {
				to = pyjamas['ui']['CustomButton']['DOM']['eventGetToElement'](event);
				if (pyjslib['bool']((pyjslib['bool']($and11=pyjamas['ui']['CustomButton']['DOM']['isOrHasChild'](self['getElement'](), pyjamas['ui']['CustomButton']['DOM']['eventGetTarget'](event)))?(pyjslib['bool']($or1=(to === null))?$or1:!pyjslib['bool'](pyjamas['ui']['CustomButton']['DOM']['isOrHasChild'](self['getElement'](), to))):$and11))) {
					if (pyjslib['bool'](((($attr87=self['isCapturing']) !== null & ($attr88=self).__is_instance__) && typeof $attr87 == 'function'?
								pyjslib['getattr']($attr88, 'isCapturing'):
								self['isCapturing']))) {
						self['onClickCancel']();
					}
					self['setHovering'](false);
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('mouseover')))) {
				if (pyjslib['bool'](pyjamas['ui']['CustomButton']['DOM']['isOrHasChild'](self['getElement'](), pyjamas['ui']['CustomButton']['DOM']['eventGetTarget'](event)))) {
					self['setHovering'](true);
					if (pyjslib['bool'](((($attr89=self['isCapturing']) !== null & ($attr90=self).__is_instance__) && typeof $attr89 == 'function'?
								pyjslib['getattr']($attr90, 'isCapturing'):
								self['isCapturing']))) {
						self['onClickStart']();
					}
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('blur')))) {
				if (pyjslib['bool'](((($attr91=self['isFocusing']) !== null & ($attr92=self).__is_instance__) && typeof $attr91 == 'function'?
							pyjslib['getattr']($attr92, 'isFocusing'):
							self['isFocusing']))) {
					self.isFocusing = false;
					self['onClickCancel']();
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('losecapture')))) {
				if (pyjslib['bool'](((($attr93=self['isCapturing']) !== null & ($attr94=self).__is_instance__) && typeof $attr93 == 'function'?
							pyjslib['getattr']($attr94, 'isCapturing'):
							self['isCapturing']))) {
					self.isCapturing = false;
					self['onClickCancel']();
				}
			}
			pyjamas['ui']['CustomButton']['ButtonBase']['onBrowserEvent'](self, event);
			if (pyjslib['bool'](!pyjslib['op_eq']((pyjamas['ui']['CustomButton']['DOM']['eventGetTypeInt'](event))&(((($attr95=pyjamas['ui']['CustomButton']['Event']['KEYEVENTS']) !== null & ($attr96=pyjamas['ui']['CustomButton']['Event']).__is_instance__) && typeof $attr95 == 'function'?
						pyjslib['getattr']($attr96, 'KEYEVENTS'):
						pyjamas['ui']['CustomButton']['Event']['KEYEVENTS'])), 0))) {
				keyCode = pyjamas['ui']['CustomButton']['DOM']['eventGetKeyCode'](event);
				if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('keydown')))) {
					if (pyjslib['bool'](pyjslib['op_eq'](keyCode, String(' ')))) {
						self.isFocusing = true;
						self['onClickStart']();
					}
				}
				else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('keyup')))) {
					if (pyjslib['bool']((pyjslib['bool']($and13=((($attr97=self['isFocusing']) !== null & ($attr98=self).__is_instance__) && typeof $attr97 == 'function'?
								pyjslib['getattr']($attr98, 'isFocusing'):
								self['isFocusing']))?pyjslib['op_eq'](keyCode, String(' ')):$and13))) {
						self.isFocusing = false;
						self['onClick']();
					}
				}
				else if (pyjslib['bool'](pyjslib['op_eq'](event_type, String('keypress')))) {
					if (pyjslib['bool']((pyjslib['bool']($or3=pyjslib['op_eq'](keyCode, String('\x0A')))?$or3:pyjslib['op_eq'](keyCode, String('\x0D'))))) {
						self['onClickStart']();
						self['onClick']();
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setAccessKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setAccessKey'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setEnabled', function(enabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['op_eq'](self['isEnabled'](), enabled))) {
				self['toggleDisabled']();
				pyjamas['ui']['CustomButton']['ButtonBase']['setEnabled'](self, enabled);
				if (pyjslib['bool'](!pyjslib['bool'](enabled))) {
					self['cleanupCaptureState']();
				}
				else {
					self['setAriaPressed'](self['getCurrentFace']());
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['enabled']]);
		$cls_definition['setEnabled'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}

			if (pyjslib['bool'](focused)) {
				pyjamas['ui']['CustomButton']['Focus']['focus'](self['getElement']());
			}
			else {
				pyjamas['ui']['CustomButton']['Focus']['blur'](self['getElement']());
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			self['getCurrentFace']()['setHTML'](html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			pyjamas['ui']['CustomButton']['Focus']['setTabIndex'](self['getElement'](), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setTabIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['getCurrentFace']()['setText'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isDown', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr99,$attr100;
			return (pyjslib['cmp']((((($attr99=self['DOWN_ATTRIBUTE']) !== null & ($attr100=self).__is_instance__) && typeof $attr99 == 'function'?
						pyjslib['getattr']($attr100, 'DOWN_ATTRIBUTE'):
						self['DOWN_ATTRIBUTE']))&(self['getCurrentFace']()['getFaceID']()), 0) == 1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isDown'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onAttach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['finishSetup']();
			pyjamas['ui']['CustomButton']['ButtonBase']['onAttach'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];
			var evt;
			self.allowClick = true;
			evt = null;
			pyjamas['ui']['CustomButton']['DOM']['buttonClick'](self['getElement']());
			self.allowClick = false;
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClickCancel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onClickCancel'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClickStart', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onClickStart'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			pyjamas['ui']['CustomButton']['ButtonBase']['onDetach'](self);
			self['cleanupCaptureState']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setDown', function(down) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				down = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['op_eq'](down, self['isDown']()))) {
				self['toggleDown']();
			}
			return null;
		}
	, 1, [null,null,['self'],['down']]);
		$cls_definition['setDown'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'finishSetup', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr102,$attr101;
			if (pyjslib['bool']((((($attr101=self['curFace']) !== null & ($attr102=self).__is_instance__) && typeof $attr101 == 'function'?
						pyjslib['getattr']($attr102, 'curFace'):
						self['curFace']) === null))) {
				self['setCurrentFace'](self['getUpFace']());
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['finishSetup'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'fireClickListeners', function(nativeEvent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				nativeEvent = arguments[1];
			}

			self['fireEvent'](pyjamas.ui.CustomButton.ClickEvent());
			return null;
		}
	, 1, [null,null,['self'],['nativeEvent']]);
		$cls_definition['fireClickListeners'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'fireEvent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fireEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCurrentFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr104,$attr103;
			self['finishSetup']();
			return ((($attr103=self['curFace']) !== null & ($attr104=self).__is_instance__) && typeof $attr103 == 'function'?
						pyjslib['getattr']($attr104, 'curFace'):
						self['curFace']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isHovering', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr106,$attr105;
			return (pyjslib['cmp']((((($attr105=self['HOVERING_ATTRIBUTE']) !== null & ($attr106=self).__is_instance__) && typeof $attr105 == 'function'?
						pyjslib['getattr']($attr106, 'HOVERING_ATTRIBUTE'):
						self['HOVERING_ATTRIBUTE']))&(self['getCurrentFace']()['getFaceID']()), 0) == 1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isHovering'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHovering', function(hovering) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hovering = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['op_eq'](hovering, self['isHovering']()))) {
				self['toggleHover']();
			}
			return null;
		}
	, 1, [null,null,['self'],['hovering']]);
		$cls_definition['setHovering'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toggleDown', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr107,$attr108,newFaceID;
			newFaceID = (self['getCurrentFace']()['getFaceID']())^(((($attr107=self['DOWN_ATTRIBUTE']) !== null & ($attr108=self).__is_instance__) && typeof $attr107 == 'function'?
						pyjslib['getattr']($attr108, 'DOWN_ATTRIBUTE'):
						self['DOWN_ATTRIBUTE']));
			self['setCurrentFaceFromID'](newFaceID);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleDown'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'cleanupCaptureState', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or5,$or6,$attr111,$attr110,$attr112,$attr109;
			if (pyjslib['bool']((pyjslib['bool']($or5=((($attr109=self['isCapturing']) !== null & ($attr110=self).__is_instance__) && typeof $attr109 == 'function'?
						pyjslib['getattr']($attr110, 'isCapturing'):
						self['isCapturing']))?$or5:((($attr111=self['isFocusing']) !== null & ($attr112=self).__is_instance__) && typeof $attr111 == 'function'?
						pyjslib['getattr']($attr112, 'isFocusing'):
						self['isFocusing'])))) {
				pyjamas['ui']['CustomButton']['DOM']['releaseCapture'](self['getElement']());
				self.isCapturing = false;
				self.isFocusing = false;
				self['onClickCancel']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cleanupCaptureState'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createFace', function(delegateTo, name, faceID) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				delegateTo = arguments[1];
				name = arguments[2];
				faceID = arguments[3];
			}
			var face;
			face = pyjamas['ui']['CustomButton']['Face'](self, delegateTo);
			face['setName'](name);
			face['setFaceID'](faceID);
			return face;
		}
	, 1, [null,null,['self'],['delegateTo'],['name'],['faceID']]);
		$cls_definition['createFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getFaceFromID', function(face_id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				face_id = arguments[1];
			}
			var $attr119,$attr118,$attr115,$attr114,$attr117,$attr116,$attr120,$attr121,$attr122,$attr123,$attr124,$attr113;
			if (pyjslib['bool'](pyjslib['op_eq'](face_id, ((($attr113=self['DOWN']) !== null & ($attr114=self).__is_instance__) && typeof $attr113 == 'function'?
						pyjslib['getattr']($attr114, 'DOWN'):
						self['DOWN'])))) {
				return self['getDownFace']();
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](face_id, ((($attr115=self['UP']) !== null & ($attr116=self).__is_instance__) && typeof $attr115 == 'function'?
						pyjslib['getattr']($attr116, 'UP'):
						self['UP'])))) {
				return self['getUpFace']();
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](face_id, ((($attr117=self['DOWN_HOVERING']) !== null & ($attr118=self).__is_instance__) && typeof $attr117 == 'function'?
						pyjslib['getattr']($attr118, 'DOWN_HOVERING'):
						self['DOWN_HOVERING'])))) {
				return self['getDownHoveringFace']();
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](face_id, ((($attr119=self['UP_HOVERING']) !== null & ($attr120=self).__is_instance__) && typeof $attr119 == 'function'?
						pyjslib['getattr']($attr120, 'UP_HOVERING'):
						self['UP_HOVERING'])))) {
				return self['getUpHoveringFace']();
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](face_id, ((($attr121=self['UP_DISABLED']) !== null & ($attr122=self).__is_instance__) && typeof $attr121 == 'function'?
						pyjslib['getattr']($attr122, 'UP_DISABLED'):
						self['UP_DISABLED'])))) {
				return self['getUpDisabledFace']();
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](face_id, ((($attr123=self['DOWN_DISABLED']) !== null & ($attr124=self).__is_instance__) && typeof $attr123 == 'function'?
						pyjslib['getattr']($attr124, 'DOWN_DISABLED'):
						self['DOWN_DISABLED'])))) {
				return self['getDownDisabledFace']();
			}
			else {
				pyjslib['printFunc']([pyjamas.ui.CustomButton.id, String(' is not a known face id.')], 1);
			}
			return null;
		}
	, 1, [null,null,['self'],['face_id']]);
		$cls_definition['getFaceFromID'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setAriaPressed', function(newFace) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newFace = arguments[1];
			}
			var pressed,$attr126,$attr125;
			pressed = pyjslib['op_eq']((newFace['getFaceID']())&(((($attr125=self['DOWN_ATTRIBUTE']) !== null & ($attr126=self).__is_instance__) && typeof $attr125 == 'function'?
						pyjslib['getattr']($attr126, 'DOWN_ATTRIBUTE'):
						self['DOWN_ATTRIBUTE'])), 1);
			return null;
		}
	, 1, [null,null,['self'],['newFace']]);
		$cls_definition['setAriaPressed'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCurrentFace', function(newFace) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newFace = arguments[1];
			}
			var $attr132,$attr131,$attr130,$attr127,$attr128,$attr129;
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr127=self['curFace']) !== null & ($attr128=self).__is_instance__) && typeof $attr127 == 'function'?
						pyjslib['getattr']($attr128, 'curFace'):
						self['curFace']), newFace))) {
				if (pyjslib['bool']((((($attr129=self['curFace']) !== null & ($attr130=self).__is_instance__) && typeof $attr129 == 'function'?
							pyjslib['getattr']($attr130, 'curFace'):
							self['curFace']) !== null))) {
					self['removeStyleDependentName'](self['curFace']['getName']());
				}
				self.curFace = newFace;
				self['setCurrentFaceElement'](newFace['getFace']());
				self['addStyleDependentName'](self['curFace']['getName']());
				if (pyjslib['bool'](((($attr131=self['isEnabled']) !== null & ($attr132=self).__is_instance__) && typeof $attr131 == 'function'?
							pyjslib['getattr']($attr132, 'isEnabled'):
							self['isEnabled']))) {
					self['setAriaPressed'](newFace);
				}
				self.style_name = self['getStyleName']();
			}
			return null;
		}
	, 1, [null,null,['self'],['newFace']]);
		$cls_definition['setCurrentFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCurrentFaceFromID', function(faceID) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				faceID = arguments[1];
			}
			var newFace;
			newFace = self['getFaceFromID'](faceID);
			self['setCurrentFace'](newFace);
			return null;
		}
	, 1, [null,null,['self'],['faceID']]);
		$cls_definition['setCurrentFaceFromID'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCurrentFaceElement', function(newFaceElement) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newFaceElement = arguments[1];
			}
			var $attr140,$attr133,$attr137,$attr136,$attr135,$attr134,$attr139,$attr138;
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr133=self['curFaceElement']) !== null & ($attr134=self).__is_instance__) && typeof $attr133 == 'function'?
						pyjslib['getattr']($attr134, 'curFaceElement'):
						self['curFaceElement']), newFaceElement))) {
				if (pyjslib['bool']((((($attr135=self['curFaceElement']) !== null & ($attr136=self).__is_instance__) && typeof $attr135 == 'function'?
							pyjslib['getattr']($attr136, 'curFaceElement'):
							self['curFaceElement']) !== null))) {
					pyjamas['ui']['CustomButton']['DOM']['removeChild'](self['getElement'](), ((($attr137=self['curFaceElement']) !== null & ($attr138=self).__is_instance__) && typeof $attr137 == 'function'?
								pyjslib['getattr']($attr138, 'curFaceElement'):
								self['curFaceElement']));
				}
				self.curFaceElement = newFaceElement;
				pyjamas['ui']['CustomButton']['DOM']['appendChild'](self['getElement'](), ((($attr139=self['curFaceElement']) !== null & ($attr140=self).__is_instance__) && typeof $attr139 == 'function'?
							pyjslib['getattr']($attr140, 'curFaceElement'):
							self['curFaceElement']));
			}
			return null;
		}
	, 1, [null,null,['self'],['newFaceElement']]);
		$cls_definition['setCurrentFaceElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setDownDisabledFace', function(downDisabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				downDisabled = arguments[1];
			}

			self.downDisabled = downDisabled;
			return null;
		}
	, 1, [null,null,['self'],['downDisabled']]);
		$cls_definition['setDownDisabledFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setDownFace', function(down) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				down = arguments[1];
			}

			self.down = down;
			return null;
		}
	, 1, [null,null,['self'],['down']]);
		$cls_definition['setDownFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setDownHoveringFace', function(downHovering) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				downHovering = arguments[1];
			}

			self.downHovering = downHovering;
			return null;
		}
	, 1, [null,null,['self'],['downHovering']]);
		$cls_definition['setDownHoveringFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setUpDisabledFace', function(upDisabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				upDisabled = arguments[1];
			}

			self.upDisabled = upDisabled;
			return null;
		}
	, 1, [null,null,['self'],['upDisabled']]);
		$cls_definition['setUpDisabledFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setUpFace', function(up) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				up = arguments[1];
			}

			self.up = up;
			return null;
		}
	, 1, [null,null,['self'],['up']]);
		$cls_definition['setUpFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setUpHoveringFace', function(upHovering) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				upHovering = arguments[1];
			}

			self.upHovering = upHovering;
			return null;
		}
	, 1, [null,null,['self'],['upHovering']]);
		$cls_definition['setUpHoveringFace'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toggleDisabled', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr142,$attr143,$attr141,$attr144,newFaceID;
			newFaceID = (self['getCurrentFace']()['getFaceID']())^(((($attr141=self['DISABLED_ATTRIBUTE']) !== null & ($attr142=self).__is_instance__) && typeof $attr141 == 'function'?
						pyjslib['getattr']($attr142, 'DISABLED_ATTRIBUTE'):
						self['DISABLED_ATTRIBUTE']));
			newFaceID &= ~(((($attr143=self['HOVERING_ATTRIBUTE']) !== null & ($attr144=self).__is_instance__) && typeof $attr143 == 'function'?
						pyjslib['getattr']($attr144, 'HOVERING_ATTRIBUTE'):
						self['HOVERING_ATTRIBUTE']));
			self['setCurrentFaceFromID'](newFaceID);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleDisabled'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toggleHover', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr146,$attr147,$attr145,$attr148,newFaceID;
			newFaceID = (self['getCurrentFace']()['getFaceID']())^(((($attr145=self['HOVERING_ATTRIBUTE']) !== null & ($attr146=self).__is_instance__) && typeof $attr145 == 'function'?
						pyjslib['getattr']($attr146, 'HOVERING_ATTRIBUTE'):
						self['HOVERING_ATTRIBUTE']));
			newFaceID &= ~(((($attr147=self['DISABLED_ATTRIBUTE']) !== null & ($attr148=self).__is_instance__) && typeof $attr147 == 'function'?
						pyjslib['getattr']($attr148, 'DISABLED_ATTRIBUTE'):
						self['DISABLED_ATTRIBUTE']));
			self['setCurrentFaceFromID'](newFaceID);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleHover'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['CustomButton']['ButtonBase']));
	})();
	pyjamas['ui']['CustomButton']['Factory']['registerClass'](String('pyjamas.ui.CustomButton'), pyjamas['ui']['CustomButton']['CustomButton']);
	return this;
}; /* end pyjamas.ui.CustomButton */


/* end module: pyjamas.ui.CustomButton */


/*
PYJS_DEPS: ['sys', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Event', 'pyjamas.ui', 'ButtonBase.ButtonBase', 'ButtonBase', 'pyjamas.ui.Focus', 'UIObject.UIObject', 'UIObject']
*/
