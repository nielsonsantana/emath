/* start module: pyjamas.ui.CheckBox */
$pyjs.loaded_modules['pyjamas.ui.CheckBox'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.CheckBox'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.CheckBox'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['CheckBox'] = $pyjs.loaded_modules["pyjamas.ui.CheckBox"];
	pyjamas['ui']['CheckBox'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CheckBox';
	var __name__ = pyjamas['ui']['CheckBox'].__name__ = __mod_name__;
	var CheckBox = pyjamas['ui']['CheckBox'];


	pyjamas['ui']['CheckBox']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['CheckBox']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['CheckBox']['ButtonBase'] = pyjslib['___import___']('ButtonBase.ButtonBase', 'pyjamas.ui', null, false);
	pyjamas['ui']['CheckBox']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['CheckBox']['Focus'] = pyjslib['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	pyjamas['ui']['CheckBox']['_CheckBox_unique_id'] = 0;
	pyjamas['ui']['CheckBox']['CheckBox'] = (function(){
		var $cls_instance = $pyjs__class_instance('CheckBox');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '49ce821f64deb5c41e442f52cbf44629';
		$method = $pyjs__bind_method($cls_instance, '__init__', function($$label, asHTML) {
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
				$$label = arguments[1];
				asHTML = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof asHTML != 'undefined') {
					if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = asHTML;
						asHTML = arguments[3];
					}
				} else 				if (typeof $$label != 'undefined') {
					if ($$label !== null && typeof $$label['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = $$label;
						$$label = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof $$label == 'undefined') $$label=arguments.callee.__args__[3][1];
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[4][1];
			var $$label;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-CheckBox'));
			}
			if (pyjslib['bool']($$label)) {
				if (pyjslib['bool'](asHTML)) {
					kwargs.__setitem__(String('HTML'), $$label);
				}
				else {
					kwargs.__setitem__(String('Text'), $$label);
				}
			}
			$pyjs_kwargs_call(self, 'initElement', null, kwargs, [{}, pyjamas['ui']['CheckBox']['DOM']['createInputCheck']()]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['$$label', null],['asHTML', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'initElement', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				element = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var uid,$attr20,$attr9,$attr8,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12;
			self.inputElem = element;
			self.labelElem = pyjamas['ui']['CheckBox']['DOM']['createLabel']();
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['CheckBox']['DOM']['createSpan']();
			}
			$pyjs_kwargs_call(pyjamas['ui']['CheckBox']['ButtonBase'], '__init__', null, kwargs, [{}, self, element]);
			self['unsinkEvents']((((($attr1=pyjamas['ui']['CheckBox']['Event']['FOCUSEVENTS']) !== null & ($attr2=pyjamas['ui']['CheckBox']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'FOCUSEVENTS'):
						pyjamas['ui']['CheckBox']['Event']['FOCUSEVENTS']))|(((($attr3=pyjamas['ui']['CheckBox']['Event']['ONCLICK']) !== null & ($attr4=pyjamas['ui']['CheckBox']['Event']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'ONCLICK'):
						pyjamas['ui']['CheckBox']['Event']['ONCLICK'])));
			pyjamas['ui']['CheckBox']['DOM']['sinkEvents'](((($attr5=self['inputElem']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'inputElem'):
						self['inputElem']), (((($attr7=pyjamas['ui']['CheckBox']['Event']['FOCUSEVENTS']) !== null & ($attr8=pyjamas['ui']['CheckBox']['Event']).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'FOCUSEVENTS'):
						pyjamas['ui']['CheckBox']['Event']['FOCUSEVENTS']))|(((($attr9=pyjamas['ui']['CheckBox']['Event']['ONCLICK']) !== null & ($attr10=pyjamas['ui']['CheckBox']['Event']).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'ONCLICK'):
						pyjamas['ui']['CheckBox']['Event']['ONCLICK']))|(pyjamas['ui']['CheckBox']['DOM']['getEventsSunk'](((($attr11=self['inputElem']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'inputElem'):
						self['inputElem']))));
			pyjamas['ui']['CheckBox']['DOM']['appendChild'](self['getElement'](), ((($attr13=self['inputElem']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'inputElem'):
						self['inputElem']));
			pyjamas['ui']['CheckBox']['DOM']['appendChild'](self['getElement'](), ((($attr15=self['labelElem']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'labelElem'):
						self['labelElem']));
			uid = pyjslib['sprintf'](String('check%d'), self['getUniqueID']());
			pyjamas['ui']['CheckBox']['DOM']['setAttribute'](((($attr17=self['inputElem']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'inputElem'):
						self['inputElem']), String('id'), uid);
			pyjamas['ui']['CheckBox']['DOM']['setAttribute'](((($attr19=self['labelElem']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'labelElem'):
						self['labelElem']), String('htmlFor'), uid);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['initElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getUniqueID', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			pyjamas['ui']['CheckBox']['_CheckBox_unique_id'] = (typeof ($add1=pyjamas['ui']['CheckBox']['_CheckBox_unique_id'])==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2));
			return pyjamas['ui']['CheckBox']['_CheckBox_unique_id'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUniqueID'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return pyjamas['ui']['CheckBox']['DOM']['getInnerHTML'](((($attr21=self['labelElem']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'labelElem'):
						self['labelElem']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr23,$attr24;
			return pyjamas['ui']['CheckBox']['DOM']['getAttribute'](((($attr23=self['inputElem']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'inputElem'):
						self['inputElem']), String('name'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr25,$attr26;
			return pyjamas['ui']['CheckBox']['DOM']['getInnerText'](((($attr25=self['labelElem']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'labelElem'):
						self['labelElem']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setChecked', function(checked) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				checked = arguments[1];
			}
			var $attr30,$attr27,$attr28,$attr29;
			pyjamas['ui']['CheckBox']['DOM']['setBooleanAttribute'](((($attr27=self['inputElem']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'inputElem'):
						self['inputElem']), String('checked'), checked);
			pyjamas['ui']['CheckBox']['DOM']['setBooleanAttribute'](((($attr29=self['inputElem']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'inputElem'):
						self['inputElem']), String('defaultChecked'), checked);
			return null;
		}
	, 1, [null,null,['self'],['checked']]);
		$cls_definition['setChecked'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isChecked', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31,propName;
			if (pyjslib['bool'](self['isAttached']())) {
				propName = String('checked');
			}
			else {
				propName = String('defaultChecked');
			}
			return pyjamas['ui']['CheckBox']['DOM']['getBooleanAttribute'](((($attr31=self['inputElem']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, 'inputElem'):
						self['inputElem']), propName);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isChecked'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isEnabled', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr34;
			return !pyjslib['bool'](pyjamas['ui']['CheckBox']['DOM']['getBooleanAttribute'](((($attr33=self['inputElem']) !== null & ($attr34=self).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'inputElem'):
						self['inputElem']), String('disabled')));
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEnabled'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setEnabled', function(enabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}
			var $attr36,$attr35;
			pyjamas['ui']['CheckBox']['DOM']['setBooleanAttribute'](((($attr35=self['inputElem']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'inputElem'):
						self['inputElem']), String('disabled'), !pyjslib['bool'](enabled));
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
			var $attr37,$attr40,$attr39,$attr38;
			if (pyjslib['bool'](focused)) {
				pyjamas['ui']['CheckBox']['Focus']['focus'](((($attr37=self['inputElem']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
							pyjslib['getattr']($attr38, 'inputElem'):
							self['inputElem']));
			}
			else {
				pyjamas['ui']['CheckBox']['Focus']['blur'](((($attr39=self['inputElem']) !== null & ($attr40=self).__is_instance__) && typeof $attr39 == 'function'?
							pyjslib['getattr']($attr40, 'inputElem'):
							self['inputElem']));
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
			var $attr42,$attr41;
			pyjamas['ui']['CheckBox']['DOM']['setInnerHTML'](((($attr41=self['labelElem']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'labelElem'):
						self['labelElem']), html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $attr44,$attr43;
			pyjamas['ui']['CheckBox']['DOM']['setAttribute'](((($attr43=self['inputElem']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, 'inputElem'):
						self['inputElem']), String('name'), name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr46,$attr45;
			pyjamas['ui']['CheckBox']['Focus']['setTabIndex'](((($attr45=self['inputElem']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'inputElem'):
						self['inputElem']), index);
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
			var $attr48,$attr47;
			pyjamas['ui']['CheckBox']['DOM']['setInnerText'](((($attr47=self['labelElem']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'labelElem'):
						self['labelElem']), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['setChecked'](self['isChecked']());
			pyjamas['ui']['CheckBox']['ButtonBase']['onDetach'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['CheckBox']['ButtonBase']));
	})();
	pyjamas['ui']['CheckBox']['Factory']['registerClass'](String('pyjamas.ui.CheckBox'), pyjamas['ui']['CheckBox']['CheckBox']);
	return this;
}; /* end pyjamas.ui.CheckBox */


/* end module: pyjamas.ui.CheckBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'ButtonBase.ButtonBase', 'ButtonBase', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Focus']
*/
