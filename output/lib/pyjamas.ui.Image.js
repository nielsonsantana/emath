/* start module: pyjamas.ui.Image */
$pyjs.loaded_modules['pyjamas.ui.Image'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Image'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Image'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['Image'] = $pyjs.loaded_modules["pyjamas.ui.Image"];
	pyjamas['ui']['Image'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Image';
	var __name__ = pyjamas['ui']['Image'].__name__ = __mod_name__;
	var Image = pyjamas['ui']['Image'];


	pyjamas['ui']['Image']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['Image']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['Image']['Widget'] = pyjslib['___import___']('Widget.Widget', 'pyjamas.ui', null, false);
	pyjamas['ui']['Image']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['Image']['MouseHandler'] = pyjslib['___import___']('MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['Image']['ClickHandler'] = pyjslib['___import___']('ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['Image']['prefetchImages'] = pyjslib['dict']([]);
	pyjamas['ui']['Image']['Image'] = (function(){
		var $cls_instance = $pyjs__class_instance('Image');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '07c8c25f758be0722fbf5e80774d035b';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(url) {
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
				url = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof url != 'undefined') {
					if (url !== null && typeof url['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = url;
						url = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof url == 'undefined') url=arguments.callee.__args__[3][1];
			var $attr2,$attr4,element,$attr1,$attr3;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-Image'));
			}
			if (pyjslib['bool'](url)) {
				kwargs.__setitem__(String('Url'), url);
			}
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['Image']['DOM']['createImg']();
			}
			self['setElement'](element);
			$pyjs_kwargs_call(pyjamas['ui']['Image']['Widget'], '__init__', null, kwargs, [{}, self]);
			pyjamas['ui']['Image']['MouseHandler']['__init__'](self);
			pyjamas['ui']['Image']['ClickHandler']['__init__'](self);
			self['sinkEvents']((((($attr1=pyjamas['ui']['Image']['Event']['ONLOAD']) !== null & ($attr2=pyjamas['ui']['Image']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'ONLOAD'):
						pyjamas['ui']['Image']['Event']['ONLOAD']))|(((($attr3=pyjamas['ui']['Image']['Event']['ONERROR']) !== null & ($attr4=pyjamas['ui']['Image']['Event']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'ONERROR'):
						pyjamas['ui']['Image']['Event']['ONERROR'])));
			self.loadListeners = pyjslib['list']([]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['url', String('')]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addLoadListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['loadListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addLoadListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeLoadListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['loadListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeLoadListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getUrl', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['Image']['DOM']['getAttribute'](self['getElement'](), String('src'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUrl'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,listener,$iter2_idx,$iter1_array,$iter2_type,type,$iter2_array,$iter1_idx;
			pyjamas['ui']['Image']['Widget']['onBrowserEvent'](self, event);
			type = pyjamas['ui']['Image']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('load')))) {
				$iter1_iter = self['loadListeners'];
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					listener['onLoad'](self);
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](type, String('error')))) {
				$iter2_iter = self['loadListeners'];
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					listener = $iter2_nextval;
					listener['onError'](self);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'prefetch', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}
			var img;
			img = pyjamas['ui']['Image']['DOM']['createImg']();
			pyjamas['ui']['Image']['DOM']['setElemAttribute'](img, String('src'), url);
			pyjamas['ui']['Image']['prefetchImages'].__setitem__(url, img);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['prefetch'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setUrl', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			pyjamas['ui']['Image']['DOM']['setElemAttribute'](self['getElement'](), String('src'), url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['setUrl'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['Image']['Widget'],pyjamas['ui']['Image']['MouseHandler'],pyjamas['ui']['Image']['ClickHandler']));
	})();
	pyjamas['ui']['Image']['Factory']['registerClass'](String('pyjamas.ui.Image'), pyjamas['ui']['Image']['Image']);
	return this;
}; /* end pyjamas.ui.Image */


/* end module: pyjamas.ui.Image */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Widget.Widget', 'Widget', 'pyjamas.ui.Event', 'pyjamas.ui', 'MouseListener.MouseHandler', 'MouseListener', 'ClickListener.ClickHandler', 'ClickListener']
*/
