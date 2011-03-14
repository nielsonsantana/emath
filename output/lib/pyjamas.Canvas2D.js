/* start module: pyjamas.Canvas2D */
$pyjs.loaded_modules['pyjamas.Canvas2D'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas2D'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas2D'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['Canvas2D'] = $pyjs.loaded_modules["pyjamas.Canvas2D"];
	pyjamas['Canvas2D'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas2D';
	var __name__ = pyjamas['Canvas2D'].__name__ = __mod_name__;
	var Canvas2D = pyjamas['Canvas2D'];


	pyjamas['Canvas2D']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas', null, false);
	pyjamas['Canvas2D']['Image'] = pyjslib['___import___']('pyjamas.ui.Image.Image', 'pyjamas', null, false);
	pyjamas['Canvas2D']['FocusWidget'] = pyjslib['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas', null, false);
	pyjamas['Canvas2D']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas', null, false);
	pyjamas['Canvas2D']['MouseListener'] = pyjslib['___import___']('pyjamas.ui.MouseListener', 'pyjamas', null, false);
	pyjamas['Canvas2D']['KeyboardListener'] = pyjslib['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas', null, false);
	pyjamas['Canvas2D']['Focus'] = pyjslib['___import___']('pyjamas.ui.Focus', 'pyjamas', null, false);
	pyjamas['Canvas2D']['FocusListener'] = pyjslib['___import___']('pyjamas.ui.FocusListener', 'pyjamas', null, false);
	pyjamas['Canvas2D']['Canvas'] = (function(){
		var $cls_instance = $pyjs__class_instance('Canvas');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '8c1cf650e52ce0003a353ad64c67e97d';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(Width, Height) {
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
				Width = arguments[1];
				Height = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof Height != 'undefined') {
					if (Height !== null && typeof Height['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Height;
						Height = arguments[3];
					}
				} else 				if (typeof Width != 'undefined') {
					if (Width !== null && typeof Width['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Width;
						Width = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof Width == 'undefined') Width=arguments.callee.__args__[3][1];
			if (typeof Height == 'undefined') Height=arguments.callee.__args__[4][1];
			var $attr1,focusable,$attr2;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-Canvas'));
			}
			kwargs.__setitem__(String('Width'), Width);
			kwargs.__setitem__(String('Height'), Height);
			self.context = null;
			focusable = pyjamas['Canvas2D']['Focus']['createFocusable']();
			self.canvas = pyjamas['Canvas2D']['DOM']['createElement'](String('canvas'));
			pyjamas['Canvas2D']['DOM']['appendChild'](focusable, ((($attr1=self['canvas']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'canvas'):
						self['canvas']));
			$pyjs_kwargs_call(pyjamas['Canvas2D']['FocusWidget'], '__init__', null, kwargs, [{}, self, focusable]);
			self['init']();
			self['context'].fillStyle = String('black');
			self['context'].strokeStyle = String('black');
			return null;
		}
	, 1, [null,['kwargs'],['self'],['Width', 0],['Height', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			pyjamas['Canvas2D']['FocusWidget']['setWidth'](self, width);
			self['canvas'].width = width;
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setWidth'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHeight', function(height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}

			pyjamas['Canvas2D']['FocusWidget']['setHeight'](self, height);
			self['canvas'].height = height;
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setHeight'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getContext', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return ((($attr3=self['context']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'context'):
						self['context']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContext'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isEmulation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEmulation'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'init', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var el,$attr5,ctx,$attr6;
			el = ((($attr5=self['getElement']()['firstChild']) !== null & ($attr6=self['getElement']()).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'firstChild'):
						self['getElement']()['firstChild']);
			ctx = el['getContext'](String('2d'));
			self.context = ctx;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['init'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['Canvas2D']['FocusWidget']));
	})();
	pyjamas['Canvas2D']['CanvasImage'] = (function(){
		var $cls_instance = $pyjs__class_instance('CanvasImage');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e3ed6bc563e6eb26abb243ae7796bb42';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(url, load_listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				load_listener = arguments[2];
			}
			if (typeof url == 'undefined') url=arguments.callee.__args__[3][1];
			if (typeof load_listener == 'undefined') load_listener=arguments.callee.__args__[4][1];

			pyjamas['Canvas2D']['Image']['__init__'](self, url);
			if (pyjslib['bool'](load_listener)) {
				self['addLoadListener'](load_listener);
			}
			self['onAttach']();
			return null;
		}
	, 1, [null,null,['self'],['url', String('')],['load_listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isLoaded', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return ((($attr7=self['getElement']()['complete']) !== null & ($attr8=self['getElement']()).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'complete'):
						self['getElement']()['complete']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isLoaded'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['Canvas2D']['Image']));
	})();
	pyjamas['Canvas2D']['ImageLoadListener'] = (function(){
		var $cls_instance = $pyjs__class_instance('ImageLoadListener');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '44420080419c371a6a589b86a03705c3';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}
			if (typeof listener == 'undefined') listener=arguments.callee.__args__[3][1];

			self.wait_list = pyjslib['list']([]);
			self.loadListeners = pyjslib['list']([]);
			if (pyjslib['bool'](listener)) {
				self['addLoadListener'](listener);
			}
			return null;
		}
	, 1, [null,null,['self'],['listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['wait_list']['append'](sender);
			sender['addLoadListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['add'] = $method;
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
		$method = $pyjs__bind_method($cls_instance, 'isLoaded', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			if (pyjslib['bool'](pyjslib['len'](((($attr9=self['wait_list']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'wait_list'):
						self['wait_list'])))) {
				return false;
			}
			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isLoaded'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onError', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,listener,$iter1_array;
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
				listener['onError'](sender);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onLoad', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$iter2_array;
			self['wait_list']['remove'](sender);
			if (pyjslib['bool'](self['isLoaded']())) {
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
					listener['onLoad'](self);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLoad'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.Canvas2D */


/* end module: pyjamas.Canvas2D */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Image.Image', 'pyjamas.ui', 'pyjamas.ui.Image', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Focus', 'pyjamas.ui.FocusListener']
*/
