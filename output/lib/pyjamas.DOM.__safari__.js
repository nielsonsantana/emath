/* start module: pyjamas.DOM */
$pyjs.loaded_modules['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DOM'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DOM'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['DOM'] = $pyjs.loaded_modules["pyjamas.DOM"];
	pyjamas['DOM'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	var __name__ = pyjamas['DOM'].__name__ = __mod_name__;
	var DOM = pyjamas['DOM'];
	var $attr72,$attr71,$attr2,$attr1;

	pyjamas['DOM']['sys'] = pyjslib['___import___']('sys', 'pyjamas');
	if (pyjslib['bool'](!pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr1=pyjamas['DOM']['sys']['platform']) !== null & ($attr2=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'platform'):
				pyjamas['DOM']['sys']['platform'])))) {
		pyjamas['DOM']['onResize'] = pyjslib['___import___']('pyjamas.Window.onResize', 'pyjamas', null, false);
		pyjamas['DOM']['onClosing'] = pyjslib['___import___']('pyjamas.Window.onClosing', 'pyjamas', null, false);
		pyjamas['DOM']['onClosed'] = pyjslib['___import___']('pyjamas.Window.onClosed', 'pyjamas', null, false);
		pyjamas['DOM']['currentEvent'] = null;
	}
	pyjamas['DOM']['sCaptureElem'] = null;
	pyjamas['DOM']['sEventPreviewStack'] = pyjslib['list']([]);
	pyjamas['DOM']['listeners'] = pyjslib['dict']([]);
	pyjamas['DOM']['get_listener'] = function(item) {
		var $attr3,$attr4,ret;
		if (pyjslib['bool']((item === null))) {
			return null;
		}
		if (pyjslib['bool'](pyjslib['hasattr'](item, String('__instance__')))) {
			ret = pyjamas['DOM']['listeners']['get'](((($attr3=item['__instance__']) !== null & ($attr4=item).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '__instance__'):
						item['__instance__']));
		}
		else {
			ret = pyjamas['DOM']['listeners']['get'](pyjslib['hash'](item));
		}
		return ret;
	};
	pyjamas['DOM']['get_listener'].__name__ = 'get_listener';

	pyjamas['DOM']['get_listener'].__bind_type__ = 0;
	pyjamas['DOM']['get_listener'].__args__ = [null,null,['item']];
	pyjamas['DOM']['set_listener'] = function(item, listener) {
		var $attr5,$attr6;
		if (pyjslib['bool'](pyjslib['hasattr'](item, String('__instance__')))) {
			pyjamas['DOM']['listeners'].__setitem__(((($attr5=item['__instance__']) !== null & ($attr6=item).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, '__instance__'):
						item['__instance__']), listener);
		}
		else {
			pyjamas['DOM']['listeners'].__setitem__(pyjslib['hash'](item), listener);
		}
		return null;
	};
	pyjamas['DOM']['set_listener'].__name__ = 'set_listener';

	pyjamas['DOM']['set_listener'].__bind_type__ = 0;
	pyjamas['DOM']['set_listener'].__args__ = [null,null,['item'],['listener']];
	pyjamas['DOM']['hack_timer_workaround_bug_button'] = null;
	pyjamas['DOM']['init'] = function() {


    // Set up capture event dispatchers.
    $wnd.__dispatchCapturedMouseEvent = function(evt) {
        if ($wnd.__dispatchCapturedEvent(evt)) {
            var cap = DOM.getCaptureElement();
            if (cap && cap.__listener) {
                DOM.dispatchEvent(evt, cap, cap.__listener);
                evt.stopPropagation();
            }
        }
    };

    $wnd.__dispatchCapturedEvent = function(evt) {
        if (!DOM.previewEvent(evt)) {
            evt.stopPropagation();
            evt.preventDefault();
            return false;
        }

        return true;
        };

    $wnd.addEventListener(
        'mouseout',
        function(evt){
            var cap = DOM.getCaptureElement();
            if (cap) {
                if (!evt.relatedTarget) {
                    // When the mouse leaves the window during capture, release capture
                    // and synthesize an 'onlosecapture' event.
                    DOM.sCaptureElem = null;
                    if (cap.__listener) {
                        var lcEvent = $doc.createEvent('UIEvent');
                        lcEvent.initUIEvent('losecapture', false, false, $wnd, 0);
                        DOM.dispatchEvent(lcEvent, cap, cap.__listener);
                    }
                }
            }
        },
        true
    );


    $wnd.addEventListener('click', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('dblclick', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('mousedown', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('mouseup', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('mousemove', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('keydown', $wnd.__dispatchCapturedEvent, true);
    $wnd.addEventListener('keyup', $wnd.__dispatchCapturedEvent, true);
    $wnd.addEventListener('keypress', $wnd.__dispatchCapturedEvent, true);
    
    $wnd.__dispatchEvent = function(evt) {
    
        var listener, curElem = this;
        
        while (curElem && !(listener = curElem.__listener)) {
            curElem = curElem.parentNode;
        }
        if (curElem && curElem.nodeType != 1) {
            curElem = null;
        }
    
        if (listener) {
            DOM.dispatchEvent(evt, curElem, listener);
        }
    };
    
	};
	pyjamas['DOM']['init'].__name__ = 'init';

	pyjamas['DOM']['init'].__bind_type__ = 0;
	pyjamas['DOM']['init'].__args__ = [null,null];
	pyjamas['DOM']['_dispatchWindowEvent'] = function(sender, evt, useCap) {

 		return null;
	};
	pyjamas['DOM']['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

	pyjamas['DOM']['_dispatchWindowEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	pyjamas['DOM']['_dispatchEvent'] = function(sender, evt, useCap) {
		var $attr8,$and3,err,$and1,$and2,cap,curElem,$and4,$attr7,$and5,listener,$pyjs_try_err,$and6;
		if (pyjslib['bool']((evt === null))) {
			evt = ((($attr7=$wnd['event']) !== null & ($attr8=$wnd).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'event'):
						$wnd['event']);
		}
		else {
			try {
				sender = pyjamas.DOM.get_main_frame()['gobject_wrap'](sender);
				evt = pyjamas.DOM.get_main_frame()['gobject_wrap'](evt);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 75};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 79;
					err = $pyjs_try_err;
				}
			}
		}
		listener = null;
		curElem = sender;
		cap = pyjamas.DOM.getCaptureElement();
		listener = pyjamas['DOM']['get_listener'](cap);
		if (pyjslib['bool']((pyjslib['bool']($and1=cap)?listener:$and1))) {
			pyjamas.DOM.dispatchEvent(evt, cap, listener);
			evt['stopPropagation']();
			return null;
		}
		while (pyjslib['bool']((pyjslib['bool']($and3=curElem)?!pyjslib['bool'](pyjamas['DOM']['get_listener'](curElem)):$and3))) {
			curElem = pyjamas.DOM.getParent(curElem);
		}
		if (pyjslib['bool']((pyjslib['bool']($and5=curElem)?!pyjslib['op_eq'](pyjamas.DOM.getNodeType(curElem), 1):$and5))) {
			curElem = null;
		}
		listener = pyjamas['DOM']['get_listener'](curElem);
		if (pyjslib['bool'](listener)) {
			pyjamas.DOM.dispatchEvent(evt, curElem, listener);
		}
		return null;
	};
	pyjamas['DOM']['_dispatchEvent'].__name__ = '_dispatchEvent';

	pyjamas['DOM']['_dispatchEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	pyjamas['DOM']['_dispatchCapturedMouseEvent'] = function(evt) {
		var listener,$and8,cap,$and7;
		if (pyjslib['bool'](pyjamas.DOM._dispatchCapturedEvent(evt))) {
			cap = pyjamas.DOM.getCaptureElement();
			listener = pyjamas['DOM']['get_listener'](cap);
			if (pyjslib['bool']((pyjslib['bool']($and7=cap)?listener:$and7))) {
				pyjamas.DOM.dispatchEvent(evt, cap, listener);
				evt['stopPropagation']();
			}
		}
		return null;
	};
	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'] = function(evt) {
		var listener,lcEvent,cap;
		cap = pyjamas.DOM.getCaptureElement();
		if (pyjslib['bool'](cap)) {
			if (pyjslib['bool'](!pyjslib['bool'](pyjamas.DOM.eventGetToElement(evt)))) {
				pyjamas.DOM.setCapture(null);
				listener = pyjamas['DOM']['get_listener'](cap);
				if (pyjslib['bool'](listener)) {
					lcEvent = $doc['createEvent'](String('UIEvent'));
					lcEvent['initUIEvent'](String('losecapture'), false, false, $wnd, 0);
					pyjamas.DOM.dispatchEvent(lcEvent, cap, listener);
				}
			}
		}
		return null;
	};
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['browser_event_cb'] = function(view, event, from_window) {
		var $or4,$or1,$or3,err,$or2,$pyjs_try_err,et;
		try {
			event = pyjamas.DOM.get_main_frame()['gobject_wrap'](event);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 133};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 136;
				err = $pyjs_try_err;
			}
		}
		et = pyjamas.DOM.eventGetType(event);
		if (pyjslib['bool'](pyjslib['op_eq'](et, String('resize')))) {
			pyjamas['DOM']['onResize']();
			return null;
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](et, String('mouseout')))) {
			return pyjamas['DOM']['_dispatchCapturedMouseoutEvent'](event);
		}
		else if (pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](et, String('keyup')))?$or1:(pyjslib['bool']($or2=pyjslib['op_eq'](et, String('keydown')))?$or2:(pyjslib['bool']($or3=pyjslib['op_eq'](et, String('keypress')))?$or3:pyjslib['op_eq'](et, String('change'))))))) {
			return pyjamas.DOM._dispatchCapturedEvent(event);
		}
		else {
			return pyjamas['DOM']['_dispatchCapturedMouseEvent'](event);
		}
		return null;
	};
	pyjamas['DOM']['browser_event_cb'].__name__ = 'browser_event_cb';

	pyjamas['DOM']['browser_event_cb'].__bind_type__ = 0;
	pyjamas['DOM']['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
	pyjamas['DOM']['_dispatchCapturedEvent'] = function(event) {

		if (pyjslib['bool'](!pyjslib['bool'](pyjamas.DOM.previewEvent(event)))) {
			event['stopPropagation']();
			pyjamas.DOM.eventPreventDefault(event);
			return false;
		}
		return true;
	};
	pyjamas['DOM']['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

	pyjamas['DOM']['_dispatchCapturedEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
	pyjamas['DOM']['addEventPreview'] = function(preview) {

		pyjamas['DOM']['sEventPreviewStack']['append'](preview);
		return null;
	};
	pyjamas['DOM']['addEventPreview'].__name__ = 'addEventPreview';

	pyjamas['DOM']['addEventPreview'].__bind_type__ = 0;
	pyjamas['DOM']['addEventPreview'].__args__ = [null,null,['preview']];
	pyjamas['DOM']['appendChild'] = function(parent, child) {

		parent['appendChild'](child);
		return null;
	};
	pyjamas['DOM']['appendChild'].__name__ = 'appendChild';

	pyjamas['DOM']['appendChild'].__bind_type__ = 0;
	pyjamas['DOM']['appendChild'].__args__ = [null,null,['parent'],['child']];
	pyjamas['DOM']['buttonClick'] = function(elem) {


        var evt = $doc.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, null, 1, 0,
                    0, 0, 0, false, false, false, false, 0, null);

        elem.dispatchEvent(evt);
    
	};
	pyjamas['DOM']['buttonClick'].__name__ = 'buttonClick';

	pyjamas['DOM']['buttonClick'].__bind_type__ = 0;
	pyjamas['DOM']['buttonClick'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['compare'] = function(elem1, elem2) {


    return (elem1 == elem2);
    
	};
	pyjamas['DOM']['compare'].__name__ = 'compare';

	pyjamas['DOM']['compare'].__bind_type__ = 0;
	pyjamas['DOM']['compare'].__args__ = [null,null,['elem1'],['elem2']];
	pyjamas['DOM']['createAnchor'] = function() {

		return pyjamas.DOM.createElement(String('A'));
	};
	pyjamas['DOM']['createAnchor'].__name__ = 'createAnchor';

	pyjamas['DOM']['createAnchor'].__bind_type__ = 0;
	pyjamas['DOM']['createAnchor'].__args__ = [null,null];
	pyjamas['DOM']['createButton'] = function() {

		return pyjamas.DOM.createElement(String('button'));
	};
	pyjamas['DOM']['createButton'].__name__ = 'createButton';

	pyjamas['DOM']['createButton'].__bind_type__ = 0;
	pyjamas['DOM']['createButton'].__args__ = [null,null];
	pyjamas['DOM']['createCol'] = function() {

		return pyjamas.DOM.createElement(String('col'));
	};
	pyjamas['DOM']['createCol'].__name__ = 'createCol';

	pyjamas['DOM']['createCol'].__bind_type__ = 0;
	pyjamas['DOM']['createCol'].__args__ = [null,null];
	pyjamas['DOM']['createDiv'] = function() {

		return pyjamas.DOM.createElement(String('div'));
	};
	pyjamas['DOM']['createDiv'].__name__ = 'createDiv';

	pyjamas['DOM']['createDiv'].__bind_type__ = 0;
	pyjamas['DOM']['createDiv'].__args__ = [null,null];
	pyjamas['DOM']['createElement'] = function(tag) {


    return $doc.createElement(tag);
    
	};
	pyjamas['DOM']['createElement'].__name__ = 'createElement';

	pyjamas['DOM']['createElement'].__bind_type__ = 0;
	pyjamas['DOM']['createElement'].__args__ = [null,null,['tag']];
	pyjamas['DOM']['createFieldSet'] = function() {

		return pyjamas['DOM']['createElement'](String('fieldset'));
	};
	pyjamas['DOM']['createFieldSet'].__name__ = 'createFieldSet';

	pyjamas['DOM']['createFieldSet'].__bind_type__ = 0;
	pyjamas['DOM']['createFieldSet'].__args__ = [null,null];
	pyjamas['DOM']['createForm'] = function() {

		return pyjamas['DOM']['createElement'](String('form'));
	};
	pyjamas['DOM']['createForm'].__name__ = 'createForm';

	pyjamas['DOM']['createForm'].__bind_type__ = 0;
	pyjamas['DOM']['createForm'].__args__ = [null,null];
	pyjamas['DOM']['createIFrame'] = function() {

		return pyjamas['DOM']['createElement'](String('iframe'));
	};
	pyjamas['DOM']['createIFrame'].__name__ = 'createIFrame';

	pyjamas['DOM']['createIFrame'].__bind_type__ = 0;
	pyjamas['DOM']['createIFrame'].__args__ = [null,null];
	pyjamas['DOM']['createImg'] = function() {

		return pyjamas['DOM']['createElement'](String('img'));
	};
	pyjamas['DOM']['createImg'].__name__ = 'createImg';

	pyjamas['DOM']['createImg'].__bind_type__ = 0;
	pyjamas['DOM']['createImg'].__args__ = [null,null];
	pyjamas['DOM']['createInputCheck'] = function() {

		return pyjamas.DOM.createInputElement(String('checkbox'));
	};
	pyjamas['DOM']['createInputCheck'].__name__ = 'createInputCheck';

	pyjamas['DOM']['createInputCheck'].__bind_type__ = 0;
	pyjamas['DOM']['createInputCheck'].__args__ = [null,null];
	pyjamas['DOM']['createInputElement'] = function(elementType) {


    var e = $doc.createElement("INPUT");
    e.type = elementType;
    return e;
    
	};
	pyjamas['DOM']['createInputElement'].__name__ = 'createInputElement';

	pyjamas['DOM']['createInputElement'].__bind_type__ = 0;
	pyjamas['DOM']['createInputElement'].__args__ = [null,null,['elementType']];
	pyjamas['DOM']['createInputPassword'] = function() {

		return pyjamas['DOM']['createInputElement'](String('password'));
	};
	pyjamas['DOM']['createInputPassword'].__name__ = 'createInputPassword';

	pyjamas['DOM']['createInputPassword'].__bind_type__ = 0;
	pyjamas['DOM']['createInputPassword'].__args__ = [null,null];
	pyjamas['DOM']['createInputRadio'] = function(group) {


    var elem = $doc.createElement("INPUT");
    elem.type = 'radio';
    elem.name = group;
    return elem;
    
	};
	pyjamas['DOM']['createInputRadio'].__name__ = 'createInputRadio';

	pyjamas['DOM']['createInputRadio'].__bind_type__ = 0;
	pyjamas['DOM']['createInputRadio'].__args__ = [null,null,['group']];
	pyjamas['DOM']['createInputText'] = function() {

		return pyjamas['DOM']['createInputElement'](String('text'));
	};
	pyjamas['DOM']['createInputText'].__name__ = 'createInputText';

	pyjamas['DOM']['createInputText'].__bind_type__ = 0;
	pyjamas['DOM']['createInputText'].__args__ = [null,null];
	pyjamas['DOM']['createLabel'] = function() {

		return pyjamas['DOM']['createElement'](String('label'));
	};
	pyjamas['DOM']['createLabel'].__name__ = 'createLabel';

	pyjamas['DOM']['createLabel'].__bind_type__ = 0;
	pyjamas['DOM']['createLabel'].__args__ = [null,null];
	pyjamas['DOM']['createLegend'] = function() {

		return pyjamas['DOM']['createElement'](String('legend'));
	};
	pyjamas['DOM']['createLegend'].__name__ = 'createLegend';

	pyjamas['DOM']['createLegend'].__bind_type__ = 0;
	pyjamas['DOM']['createLegend'].__args__ = [null,null];
	pyjamas['DOM']['createOptions'] = function() {

		return pyjamas['DOM']['createElement'](String('options'));
	};
	pyjamas['DOM']['createOptions'].__name__ = 'createOptions';

	pyjamas['DOM']['createOptions'].__bind_type__ = 0;
	pyjamas['DOM']['createOptions'].__args__ = [null,null];
	pyjamas['DOM']['createSelect'] = function() {

		return pyjamas['DOM']['createElement'](String('select'));
	};
	pyjamas['DOM']['createSelect'].__name__ = 'createSelect';

	pyjamas['DOM']['createSelect'].__bind_type__ = 0;
	pyjamas['DOM']['createSelect'].__args__ = [null,null];
	pyjamas['DOM']['createSpan'] = function() {

		return pyjamas['DOM']['createElement'](String('span'));
	};
	pyjamas['DOM']['createSpan'].__name__ = 'createSpan';

	pyjamas['DOM']['createSpan'].__bind_type__ = 0;
	pyjamas['DOM']['createSpan'].__args__ = [null,null];
	pyjamas['DOM']['createTable'] = function() {

		return pyjamas['DOM']['createElement'](String('table'));
	};
	pyjamas['DOM']['createTable'].__name__ = 'createTable';

	pyjamas['DOM']['createTable'].__bind_type__ = 0;
	pyjamas['DOM']['createTable'].__args__ = [null,null];
	pyjamas['DOM']['createTBody'] = function() {

		return pyjamas['DOM']['createElement'](String('tbody'));
	};
	pyjamas['DOM']['createTBody'].__name__ = 'createTBody';

	pyjamas['DOM']['createTBody'].__bind_type__ = 0;
	pyjamas['DOM']['createTBody'].__args__ = [null,null];
	pyjamas['DOM']['createTD'] = function() {

		return pyjamas['DOM']['createElement'](String('td'));
	};
	pyjamas['DOM']['createTD'].__name__ = 'createTD';

	pyjamas['DOM']['createTD'].__bind_type__ = 0;
	pyjamas['DOM']['createTD'].__args__ = [null,null];
	pyjamas['DOM']['createTextArea'] = function() {

		return pyjamas['DOM']['createElement'](String('textarea'));
	};
	pyjamas['DOM']['createTextArea'].__name__ = 'createTextArea';

	pyjamas['DOM']['createTextArea'].__bind_type__ = 0;
	pyjamas['DOM']['createTextArea'].__args__ = [null,null];
	pyjamas['DOM']['createTH'] = function() {

		return pyjamas['DOM']['createElement'](String('th'));
	};
	pyjamas['DOM']['createTH'].__name__ = 'createTH';

	pyjamas['DOM']['createTH'].__bind_type__ = 0;
	pyjamas['DOM']['createTH'].__args__ = [null,null];
	pyjamas['DOM']['createTR'] = function() {

		return pyjamas['DOM']['createElement'](String('tr'));
	};
	pyjamas['DOM']['createTR'].__name__ = 'createTR';

	pyjamas['DOM']['createTR'].__bind_type__ = 0;
	pyjamas['DOM']['createTR'].__args__ = [null,null];
	pyjamas['DOM']['eventStopPropagation'] = function(evt) {

		evt['stopPropagation']();
		return null;
	};
	pyjamas['DOM']['eventStopPropagation'].__name__ = 'eventStopPropagation';

	pyjamas['DOM']['eventStopPropagation'].__bind_type__ = 0;
	pyjamas['DOM']['eventStopPropagation'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventCancelBubble'] = function(evt, cancel) {

		evt.cancelBubble = cancel;
		return null;
	};
	pyjamas['DOM']['eventCancelBubble'].__name__ = 'eventCancelBubble';

	pyjamas['DOM']['eventCancelBubble'].__bind_type__ = 0;
	pyjamas['DOM']['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
	pyjamas['DOM']['eventGetAltKey'] = function(evt) {
		var $attr9,$attr10;
		return ((($attr9=evt['altKey']) !== null & ($attr10=evt).__is_instance__) && typeof $attr9 == 'function'?
					pyjslib['getattr']($attr10, 'altKey'):
					evt['altKey']);
	};
	pyjamas['DOM']['eventGetAltKey'].__name__ = 'eventGetAltKey';

	pyjamas['DOM']['eventGetAltKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetAltKey'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetButton'] = function(evt) {


    var button = evt.which;
    if(button == 2) {
        return 4;
    } else if (button == 3) {
        return 2;
    } else {
        return button || 0;
    }
    
	};
	pyjamas['DOM']['eventGetButton'].__name__ = 'eventGetButton';

	pyjamas['DOM']['eventGetButton'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetButton'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetClientX'] = function(evt) {
		var $attr11,$attr12;
		return ((($attr11=evt['clientX']) !== null & ($attr12=evt).__is_instance__) && typeof $attr11 == 'function'?
					pyjslib['getattr']($attr12, 'clientX'):
					evt['clientX']);
	};
	pyjamas['DOM']['eventGetClientX'].__name__ = 'eventGetClientX';

	pyjamas['DOM']['eventGetClientX'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetClientX'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetClientY'] = function(evt) {
		var $attr14,$attr13;
		return ((($attr13=evt['clientY']) !== null & ($attr14=evt).__is_instance__) && typeof $attr13 == 'function'?
					pyjslib['getattr']($attr14, 'clientY'):
					evt['clientY']);
	};
	pyjamas['DOM']['eventGetClientY'].__name__ = 'eventGetClientY';

	pyjamas['DOM']['eventGetClientY'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetClientY'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetCtrlKey'] = function(evt) {
		var $attr15,$attr16;
		return ((($attr15=evt['ctrlKey']) !== null & ($attr16=evt).__is_instance__) && typeof $attr15 == 'function'?
					pyjslib['getattr']($attr16, 'ctrlKey'):
					evt['ctrlKey']);
	};
	pyjamas['DOM']['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

	pyjamas['DOM']['eventGetCtrlKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCtrlKey'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetFromElement'] = function(evt) {


    return evt.fromElement ? evt.fromElement : null;
    
	};
	pyjamas['DOM']['eventGetFromElement'].__name__ = 'eventGetFromElement';

	pyjamas['DOM']['eventGetFromElement'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetFromElement'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetKeyCode'] = function(evt) {


    return evt.which ? evt.which : (evt.keyCode ? evt.keyCode : 0);
    
	};
	pyjamas['DOM']['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	pyjamas['DOM']['eventGetKeyCode'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetKeyCode'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetRepeat'] = function(evt) {
		var $attr17,$attr18;
		return ((($attr17=evt['repeat']) !== null & ($attr18=evt).__is_instance__) && typeof $attr17 == 'function'?
					pyjslib['getattr']($attr18, 'repeat'):
					evt['repeat']);
	};
	pyjamas['DOM']['eventGetRepeat'].__name__ = 'eventGetRepeat';

	pyjamas['DOM']['eventGetRepeat'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetRepeat'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetScreenX'] = function(evt) {
		var $attr20,$attr19;
		return ((($attr19=evt['screenX']) !== null & ($attr20=evt).__is_instance__) && typeof $attr19 == 'function'?
					pyjslib['getattr']($attr20, 'screenX'):
					evt['screenX']);
	};
	pyjamas['DOM']['eventGetScreenX'].__name__ = 'eventGetScreenX';

	pyjamas['DOM']['eventGetScreenX'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetScreenX'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetScreenY'] = function(evt) {
		var $attr21,$attr22;
		return ((($attr21=evt['screenY']) !== null & ($attr22=evt).__is_instance__) && typeof $attr21 == 'function'?
					pyjslib['getattr']($attr22, 'screenY'):
					evt['screenY']);
	};
	pyjamas['DOM']['eventGetScreenY'].__name__ = 'eventGetScreenY';

	pyjamas['DOM']['eventGetScreenY'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetScreenY'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetShiftKey'] = function(evt) {
		var $attr24,$attr23;
		return ((($attr23=evt['shiftKey']) !== null & ($attr24=evt).__is_instance__) && typeof $attr23 == 'function'?
					pyjslib['getattr']($attr24, 'shiftKey'):
					evt['shiftKey']);
	};
	pyjamas['DOM']['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	pyjamas['DOM']['eventGetShiftKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetShiftKey'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetCurrentTarget'] = function(event) {
		var $attr26,$attr25;
		return ((($attr25=event['currentTarget']) !== null & ($attr26=event).__is_instance__) && typeof $attr25 == 'function'?
					pyjslib['getattr']($attr26, 'currentTarget'):
					event['currentTarget']);
	};
	pyjamas['DOM']['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	pyjamas['DOM']['eventGetCurrentTarget'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventGetTarget'] = function(event) {


    return event.target ? event.target : null;
    
	};
	pyjamas['DOM']['eventGetTarget'].__name__ = 'eventGetTarget';

	pyjamas['DOM']['eventGetTarget'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTarget'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventGetToElement'] = function(evt) {


    return evt.relatedTarget ? evt.relatedTarget : null;
    
	};
	pyjamas['DOM']['eventGetToElement'].__name__ = 'eventGetToElement';

	pyjamas['DOM']['eventGetToElement'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetToElement'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetType'] = function(event) {
		var $attr28,$attr27;
		return ((($attr27=event['type']) !== null & ($attr28=event).__is_instance__) && typeof $attr27 == 'function'?
					pyjslib['getattr']($attr28, 'type'):
					event['type']);
	};
	pyjamas['DOM']['eventGetType'].__name__ = 'eventGetType';

	pyjamas['DOM']['eventGetType'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetType'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventmap'] = pyjslib['dict']([[String('blur'), 4096], [String('change'), 1024], [String('click'), 1], [String('dblclick'), 2], [String('focus'), 2048], [String('keydown'), 128], [String('keypress'), 256], [String('keyup'), 512], [String('load'), 32768], [String('losecapture'), 8192], [String('mousedown'), 4], [String('mousemove'), 64], [String('mouseout'), 32], [String('mouseover'), 16], [String('mouseup'), 8], [String('scroll'), 16384], [String('error'), 65536], [String('contextmenu'), 131072]]);
	pyjamas['DOM']['eventGetTypeInt'] = function(event) {


    switch (event.type) {
      case "blur": return 0x01000;
      case "change": return 0x00400;
      case "click": return 0x00001;
      case "dblclick": return 0x00002;
      case "focus": return 0x00800;
      case "keydown": return 0x00080;
      case "keypress": return 0x00100;
      case "keyup": return 0x00200;
      case "load": return 0x08000;
      case "losecapture": return 0x02000;
      case "mousedown": return 0x00004;
      case "mousemove": return 0x00040;
      case "mouseout": return 0x00020;
      case "mouseover": return 0x00010;
      case "mouseup": return 0x00008;
      case "scroll": return 0x04000;
      case "error": return 0x10000;
      case "contextmenu": return 0x20000;
    }
    
	};
	pyjamas['DOM']['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

	pyjamas['DOM']['eventGetTypeInt'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTypeInt'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventGetTypeString'] = function(event) {

		return pyjamas['DOM']['eventGetType'](event);
	};
	pyjamas['DOM']['eventGetTypeString'].__name__ = 'eventGetTypeString';

	pyjamas['DOM']['eventGetTypeString'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTypeString'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventPreventDefault'] = function(evt) {

		evt['preventDefault']();
		return null;
	};
	pyjamas['DOM']['eventPreventDefault'].__name__ = 'eventPreventDefault';

	pyjamas['DOM']['eventPreventDefault'].__bind_type__ = 0;
	pyjamas['DOM']['eventPreventDefault'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventSetKeyCode'] = function(evt, key) {

		evt.keyCode = key;
		return null;
	};
	pyjamas['DOM']['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

	pyjamas['DOM']['eventSetKeyCode'].__bind_type__ = 0;
	pyjamas['DOM']['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
	pyjamas['DOM']['eventToString'] = function(evt) {


    return evt.toString();
    
	};
	pyjamas['DOM']['eventToString'].__name__ = 'eventToString';

	pyjamas['DOM']['eventToString'].__bind_type__ = 0;
	pyjamas['DOM']['eventToString'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['iframeGetSrc'] = function(elem) {
		var $attr29,$attr30;
		return ((($attr29=elem['src']) !== null & ($attr30=elem).__is_instance__) && typeof $attr29 == 'function'?
					pyjslib['getattr']($attr30, 'src'):
					elem['src']);
	};
	pyjamas['DOM']['iframeGetSrc'].__name__ = 'iframeGetSrc';

	pyjamas['DOM']['iframeGetSrc'].__bind_type__ = 0;
	pyjamas['DOM']['iframeGetSrc'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getAbsoluteLeft'] = function(elem) {


    // Unattached elements and elements (or their ancestors) with style
    // 'display: none' have no offsetLeft.
    if (elem.offsetLeft == null) {
      return 0;
    }

    var left = 0;
    var curr = elem.parentNode;
    if (curr) {
      // This intentionally excludes body which has a null offsetParent.
      while (curr.offsetParent) {
        left -= curr.scrollLeft;
        curr = curr.parentNode;
      }
    }
    
    while (elem) {
      left += elem.offsetLeft;

      // Safari bug: a top-level absolutely positioned element includes the
      // body's offset position already.
      var parent = elem.offsetParent;
      if (parent && (parent.tagName == 'BODY') &&
          (elem.style.position == 'absolute')) {
        break;
      }

      elem = parent;
    }
    return left;
    
	};
	pyjamas['DOM']['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	pyjamas['DOM']['getAbsoluteLeft'].__bind_type__ = 0;
	pyjamas['DOM']['getAbsoluteLeft'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getAbsoluteTop'] = function(elem) {


    // Unattached elements and elements (or their ancestors) with style
    // 'display: none' have no offsetTop.
    if (elem.offsetTop == null) {
      return 0;
    }

    var top = 0;
    var curr = elem.parentNode;
    if (curr) {
      // This intentionally excludes body which has a null offsetParent.
      while (curr.offsetParent) {
        top -= curr.scrollTop;
        curr = curr.parentNode;
      }
    }
    
    while (elem) {
      top += elem.offsetTop;

      // Safari bug: a top-level absolutely positioned element includes the
      // body's offset position already.
      var parent = elem.offsetParent;
      if (parent && (parent.tagName == 'BODY') &&
          (elem.style.position == 'absolute')) {
        break;
      }

      elem = parent;
    }
    return top;
    
	};
	pyjamas['DOM']['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	pyjamas['DOM']['getAbsoluteTop'].__bind_type__ = 0;
	pyjamas['DOM']['getAbsoluteTop'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getAttribute'] = function(elem, attr) {


    var ret = elem[attr];
    return (ret == null) ? null : String(ret);
    
	};
	pyjamas['DOM']['getAttribute'].__name__ = 'getAttribute';

	pyjamas['DOM']['getAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getElemAttribute'] = function(elem, attr) {

		return elem['getAttribute'](attr);
	};
	pyjamas['DOM']['getElemAttribute'].__name__ = 'getElemAttribute';

	pyjamas['DOM']['getElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getBooleanAttribute'] = function(elem, attr) {


    return !!elem[attr];
    
	};
	pyjamas['DOM']['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

	pyjamas['DOM']['getBooleanAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getBooleanElemAttribute'] = function(elem, attr) {

		if (pyjslib['bool'](!pyjslib['bool'](elem['hasAttribute'](attr)))) {
			return null;
		}
		return pyjslib['bool'](elem['getAttribute'](attr));
	};
	pyjamas['DOM']['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

	pyjamas['DOM']['getBooleanElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getCaptureElement'] = function() {

		return pyjamas['DOM']['sCaptureElem'];
	};
	pyjamas['DOM']['getCaptureElement'].__name__ = 'getCaptureElement';

	pyjamas['DOM']['getCaptureElement'].__bind_type__ = 0;
	pyjamas['DOM']['getCaptureElement'].__args__ = [null,null];
	pyjamas['DOM']['getChild'] = function(elem, index) {


    var count = 0, child = elem.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (child.nodeType == 1) {
        if (index == count)
          return child;
        ++count;
      }
      child = next;
    }

    return null;
    
	};
	pyjamas['DOM']['getChild'].__name__ = 'getChild';

	pyjamas['DOM']['getChild'].__bind_type__ = 0;
	pyjamas['DOM']['getChild'].__args__ = [null,null,['elem'],['index']];
	pyjamas['DOM']['getChildCount'] = function(elem) {


    var count = 0, child = elem.firstChild;
    while (child) {
      if (child.nodeType == 1)
      ++count;
      child = child.nextSibling;
    }
    return count;
    
	};
	pyjamas['DOM']['getChildCount'].__name__ = 'getChildCount';

	pyjamas['DOM']['getChildCount'].__bind_type__ = 0;
	pyjamas['DOM']['getChildCount'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getChildIndex'] = function(parent, toFind) {


    var count = 0, child = parent.firstChild;
    while (child) {
        if (child == toFind)
            return count;
        if (child.nodeType == 1)
            ++count;
        child = child.nextSibling;
    }

    return -1;
    
	};
	pyjamas['DOM']['getChildIndex'].__name__ = 'getChildIndex';

	pyjamas['DOM']['getChildIndex'].__bind_type__ = 0;
	pyjamas['DOM']['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
	pyjamas['DOM']['getElementById'] = function(id) {


    var elem = $doc.getElementById(id);
    return elem ? elem : null;
    
	};
	pyjamas['DOM']['getElementById'].__name__ = 'getElementById';

	pyjamas['DOM']['getElementById'].__bind_type__ = 0;
	pyjamas['DOM']['getElementById'].__args__ = [null,null,['id']];
	pyjamas['DOM']['getEventListener'] = function(element) {


    return element.__listener;
    
	};
	pyjamas['DOM']['getEventListener'].__name__ = 'getEventListener';

	pyjamas['DOM']['getEventListener'].__bind_type__ = 0;
	pyjamas['DOM']['getEventListener'].__args__ = [null,null,['element']];
	pyjamas['DOM']['eventbitsmap'] = pyjslib['dict']([]);
	pyjamas['DOM']['getEventsSunk'] = function(element) {

		return element.__eventBits ? element.__eventBits : 0;
	};
	pyjamas['DOM']['getEventsSunk'].__name__ = 'getEventsSunk';

	pyjamas['DOM']['getEventsSunk'].__bind_type__ = 0;
	pyjamas['DOM']['getEventsSunk'].__args__ = [null,null,['element']];
	pyjamas['DOM']['getFirstChild'] = function(elem) {


    var child = elem.firstChild;
    while (child && child.nodeType != 1)
      child = child.nextSibling;
    return child ? child : null;
    
	};
	pyjamas['DOM']['getFirstChild'].__name__ = 'getFirstChild';

	pyjamas['DOM']['getFirstChild'].__bind_type__ = 0;
	pyjamas['DOM']['getFirstChild'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getInnerHTML'] = function(element) {


    var ret = element.innerHTML;
    return (ret == null) ? null : ret;
    
	};
	pyjamas['DOM']['getInnerHTML'].__name__ = 'getInnerHTML';

	pyjamas['DOM']['getInnerHTML'].__bind_type__ = 0;
	pyjamas['DOM']['getInnerHTML'].__args__ = [null,null,['element']];
	pyjamas['DOM']['getInnerText'] = function(element) {


    // To mimic IE's 'innerText' property in the W3C DOM, we need to recursively
    // concatenate all child text nodes (depth first).
    var text = '', child = element.firstChild;
    while (child) {
      if (child.nodeType == 1){ // 1 == Element node
        text += DOM.getInnerText(child);
      } else if (child.nodeValue) {
        text += child.nodeValue;
      }
      child = child.nextSibling;
    }
    return text;
    
	};
	pyjamas['DOM']['getInnerText'].__name__ = 'getInnerText';

	pyjamas['DOM']['getInnerText'].__bind_type__ = 0;
	pyjamas['DOM']['getInnerText'].__args__ = [null,null,['element']];
	pyjamas['DOM']['getIntAttribute'] = function(elem, attr) {


    var i = parseInt(elem[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
	};
	pyjamas['DOM']['getIntAttribute'].__name__ = 'getIntAttribute';

	pyjamas['DOM']['getIntAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getIntElemAttribute'] = function(elem, attr) {

		if (pyjslib['bool'](!pyjslib['bool'](elem['hasAttribute'](attr)))) {
			return null;
		}
		return pyjslib['float_int'](elem['getAttribute'](attr));
	};
	pyjamas['DOM']['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	pyjamas['DOM']['getIntElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getIntStyleAttribute'] = function(elem, attr) {


    var i = parseInt(elem.style[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
	};
	pyjamas['DOM']['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	pyjamas['DOM']['getIntStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getNextSibling'] = function(elem) {


    var sib = elem.nextSibling;
    while (sib && sib.nodeType != 1)
      sib = sib.nextSibling;
    return sib ? sib : null;
    
	};
	pyjamas['DOM']['getNextSibling'].__name__ = 'getNextSibling';

	pyjamas['DOM']['getNextSibling'].__bind_type__ = 0;
	pyjamas['DOM']['getNextSibling'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getNodeType'] = function(elem) {
		var $attr32,$attr31;
		return ((($attr31=elem['nodeType']) !== null & ($attr32=elem).__is_instance__) && typeof $attr31 == 'function'?
					pyjslib['getattr']($attr32, 'nodeType'):
					elem['nodeType']);
	};
	pyjamas['DOM']['getNodeType'].__name__ = 'getNodeType';

	pyjamas['DOM']['getNodeType'].__bind_type__ = 0;
	pyjamas['DOM']['getNodeType'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getParent'] = function(elem) {


    var parent = elem.parentNode;
    if(parent == null) {
        return null;
    }
    if (parent.nodeType != 1)
        parent = null;
    return parent ? parent : null;
    
	};
	pyjamas['DOM']['getParent'].__name__ = 'getParent';

	pyjamas['DOM']['getParent'].__bind_type__ = 0;
	pyjamas['DOM']['getParent'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getStyleAttribute'] = function(elem, attr) {


    var ret = elem.style[attr];
    return (ret == null) ? null : ret;
    
	};
	pyjamas['DOM']['getStyleAttribute'].__name__ = 'getStyleAttribute';

	pyjamas['DOM']['getStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['insertChild'] = function(parent, toAdd, index) {


    var count = 0, child = parent.firstChild, before = null;
    while (child) {
      if (child.nodeType == 1) {
        if (count == index) {
          before = child;
          break;
        }
        ++count;
      }
      child = child.nextSibling;
    }

    parent.insertBefore(toAdd, before);
    
	};
	pyjamas['DOM']['insertChild'].__name__ = 'insertChild';

	pyjamas['DOM']['insertChild'].__bind_type__ = 0;
	pyjamas['DOM']['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
	pyjamas['DOM']['IterChildrenClass'] = (function(){
		var $cls_instance = $pyjs__class_instance('IterChildrenClass');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'ac20b681ce3e37358ce4695bb6b0235a';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}
			var $attr33,$attr34;
			self.parent = elem;
			self.child = ((($attr33=elem['firstChild']) !== null & ($attr34=elem).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'firstChild'):
						elem['firstChild']);
			self.lastChild = null;
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr37,$attr36,$attr35,$attr41,$attr42,$attr39,$attr38;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr35=self['child']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'child'):
						self['child'])))) {
				throw (pyjslib['StopIteration']);
			}
			self.lastChild = ((($attr37=self['child']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'child'):
						self['child']);
			self.child = pyjamas['DOM']['getNextSibling'](((($attr39=self['child']) !== null & ($attr40=self).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'child'):
						self['child']));
			return ((($attr41=self['lastChild']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr43,$attr44;
			self['parent']['removeChild'](((($attr43=self['lastChild']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['DOM']['iterChildren'] = function(elem) {


    var parent = elem;
    var child = elem.firstChild;
    var lastChild = null;
    return {
        'next': function() {
            if (child == null) {
                throw pyjslib.StopIteration;
            }
            lastChild = child;
            child = DOM.getNextSibling(child);
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
	};
	pyjamas['DOM']['iterChildren'].__name__ = 'iterChildren';

	pyjamas['DOM']['iterChildren'].__bind_type__ = 0;
	pyjamas['DOM']['iterChildren'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['IterWalkChildren'] = (function(){
		var $cls_instance = $pyjs__class_instance('IterWalkChildren');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'bc5e5c0dda264b4692f63f3512cced97';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			self.parent = elem;
			self.child = pyjamas['DOM']['getFirstChild'](elem);
			self.lastChild = null;
			self.stack = pyjslib['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr59,$attr58,$attr55,$attr60,$attr51,$attr50,$attr52,nextSibling,$attr54,firstChild,$attr56,$attr46,$attr47,$attr45,$attr57,$attr53,$attr48,$attr49;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr45=self['child']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'child'):
						self['child'])))) {
				throw (pyjslib['StopIteration']);
			}
			self.lastChild = ((($attr47=self['child']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'child'):
						self['child']);
			firstChild = pyjamas['DOM']['getFirstChild'](((($attr49=self['child']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'child'):
						self['child']));
			nextSibling = pyjamas['DOM']['getNextSibling'](((($attr51=self['child']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'child'):
						self['child']));
			if (pyjslib['bool']((firstChild !== null))) {
				if (pyjslib['bool']((nextSibling !== null))) {
					self['stack']['append'](pyjslib['tuple']([nextSibling, ((($attr53=self['parent']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
								pyjslib['getattr']($attr54, 'parent'):
								self['parent'])]));
				}
				self.parent = ((($attr55=self['child']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
							pyjslib['getattr']($attr56, 'child'):
							self['child']);
				self.child = firstChild;
			}
			else if (pyjslib['bool']((nextSibling !== null))) {
				self.child = nextSibling;
			}
			else if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](((($attr57=self['stack']) !== null & ($attr58=self).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'stack'):
						self['stack'])), 0) == 1))) {
				var $tupleassign1 = self['stack']['pop']();
				self.child = $tupleassign1.__getitem__(0);
				self.parent = $tupleassign1.__getitem__(1);
			}
			else {
				self.child = null;
			}
			return ((($attr59=self['lastChild']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr61,$attr62;
			self['parent']['removeChild'](((($attr61=self['lastChild']) !== null & ($attr62=self).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['DOM']['walkChildren'] = function(elem) {


    var parent = elem;
    var child = DOM.getFirstChild(elem);
    var lastChild = null;
    var stack = [];
    var parentStack = [];
    return {
        'next': function() {
            if (child == null) {
                throw pyjslib.StopIteration;
            }
            lastChild = child;
            var firstChild = DOM.getFirstChild(child);
            var nextSibling = DOM.getNextSibling(child);
            if(firstChild != null) {
               if(nextSibling != null) {
                   stack.push(nextSibling);
                   parentStack.push(parent);
                }
                parent = child;
                child = firstChild;
            } else if(nextSibling != null) {
                child = nextSibling;
            } else if(stack.length > 0) {
                child = stack.pop();
                parent = parentStack.pop();
            } else {
                child = null;
            }
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
	};
	pyjamas['DOM']['walkChildren'].__name__ = 'walkChildren';

	pyjamas['DOM']['walkChildren'].__bind_type__ = 0;
	pyjamas['DOM']['walkChildren'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['isOrHasChild'] = function(parent, child) {
		var $attr64,$attr65,$attr66,$attr63;
		while (pyjslib['bool'](child)) {
			if (pyjslib['bool'](pyjamas['DOM']['compare'](parent, child))) {
				return true;
			}
			child = ((($attr63=child['parentNode']) !== null & ($attr64=child).__is_instance__) && typeof $attr63 == 'function'?
						pyjslib['getattr']($attr64, 'parentNode'):
						child['parentNode']);
			if (pyjslib['bool'](!pyjslib['bool'](child))) {
				return false;
			}
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr65=child['nodeType']) !== null & ($attr66=child).__is_instance__) && typeof $attr65 == 'function'?
						pyjslib['getattr']($attr66, 'nodeType'):
						child['nodeType']), 1))) {
				child = null;
			}
		}
		return false;
	};
	pyjamas['DOM']['isOrHasChild'].__name__ = 'isOrHasChild';

	pyjamas['DOM']['isOrHasChild'].__bind_type__ = 0;
	pyjamas['DOM']['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	pyjamas['DOM']['releaseCapture'] = function(elem) {


    if ((DOM.sCaptureElem != null) && DOM.compare(elem, DOM.sCaptureElem))
        DOM.sCaptureElem = null;
    
	};
	pyjamas['DOM']['releaseCapture'].__name__ = 'releaseCapture';

	pyjamas['DOM']['releaseCapture'].__bind_type__ = 0;
	pyjamas['DOM']['releaseCapture'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['removeChild'] = function(parent, child) {

		parent['removeChild'](child);
		return null;
	};
	pyjamas['DOM']['removeChild'].__name__ = 'removeChild';

	pyjamas['DOM']['removeChild'].__bind_type__ = 0;
	pyjamas['DOM']['removeChild'].__args__ = [null,null,['parent'],['child']];
	pyjamas['DOM']['replaceChild'] = function(parent, newChild, oldChild) {

		parent['replaceChild'](newChild, oldChild);
		return null;
	};
	pyjamas['DOM']['replaceChild'].__name__ = 'replaceChild';

	pyjamas['DOM']['replaceChild'].__bind_type__ = 0;
	pyjamas['DOM']['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
	pyjamas['DOM']['removeEventPreview'] = function(preview) {

		pyjamas['DOM']['sEventPreviewStack']['remove'](preview);
		return null;
	};
	pyjamas['DOM']['removeEventPreview'].__name__ = 'removeEventPreview';

	pyjamas['DOM']['removeEventPreview'].__bind_type__ = 0;
	pyjamas['DOM']['removeEventPreview'].__args__ = [null,null,['preview']];
	pyjamas['DOM']['getOffsetHeight'] = function(elem) {
		var $attr67,$attr68;
		return ((($attr67=elem['offsetHeight']) !== null & ($attr68=elem).__is_instance__) && typeof $attr67 == 'function'?
					pyjslib['getattr']($attr68, 'offsetHeight'):
					elem['offsetHeight']);
	};
	pyjamas['DOM']['getOffsetHeight'].__name__ = 'getOffsetHeight';

	pyjamas['DOM']['getOffsetHeight'].__bind_type__ = 0;
	pyjamas['DOM']['getOffsetHeight'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getOffsetWidth'] = function(elem) {
		var $attr70,$attr69;
		return ((($attr69=elem['offsetWidth']) !== null & ($attr70=elem).__is_instance__) && typeof $attr69 == 'function'?
					pyjslib['getattr']($attr70, 'offsetWidth'):
					elem['offsetWidth']);
	};
	pyjamas['DOM']['getOffsetWidth'].__name__ = 'getOffsetWidth';

	pyjamas['DOM']['getOffsetWidth'].__bind_type__ = 0;
	pyjamas['DOM']['getOffsetWidth'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['scrollIntoView'] = function(elem) {


    var left = elem.offsetLeft, top = elem.offsetTop;
    var width = elem.offsetWidth, height = elem.offsetHeight;
    
    if (elem.parentNode != elem.offsetParent) {
        left -= elem.parentNode.offsetLeft;
        top -= elem.parentNode.offsetTop;
    }

    var cur = elem.parentNode;
    while (cur && (cur.nodeType == 1)) {
        if ((cur.style.overflow == 'auto') || (cur.style.overflow == 'scroll')) {
            if (left < cur.scrollLeft) {
                cur.scrollLeft = left;
            }
            if (left + width > cur.scrollLeft + cur.clientWidth) {
                cur.scrollLeft = (left + width) - cur.clientWidth;
            }
            if (top < cur.scrollTop) {
                cur.scrollTop = top;
            }
            if (top + height > cur.scrollTop + cur.clientHeight) {
                cur.scrollTop = (top + height) - cur.clientHeight;
            }
        }

        var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
        if (cur.parentNode != cur.offsetParent) {
            offsetLeft -= cur.parentNode.offsetLeft;
            offsetTop -= cur.parentNode.offsetTop;
        }

        left += offsetLeft - cur.scrollLeft;
        top += offsetTop - cur.scrollTop;
        cur = cur.parentNode;
    }
    
	};
	pyjamas['DOM']['scrollIntoView'].__name__ = 'scrollIntoView';

	pyjamas['DOM']['scrollIntoView'].__bind_type__ = 0;
	pyjamas['DOM']['scrollIntoView'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$iter1_nextval,$iter1_idx,res,$iter1_iter,$add2,$add3,$add1,$add6,$iter1_array,$add4,$add5,$iter1_type;
		res = String('');
		$iter1_iter = name;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			c = $iter1_nextval;
			if (pyjslib['bool'](c['isupper']())) {
				res = (typeof ($add3=res)==typeof ($add4=(typeof ($add1=joiner)==typeof ($add2=c['lower']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					pyjslib['op_add']($add1,$add2))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4));
			}
			else {
				res = (typeof ($add5=res)==typeof ($add6=c) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					pyjslib['op_add']($add5,$add6));
			}
		}
		return res;
	};
	pyjamas['DOM']['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

	pyjamas['DOM']['mash_name_for_glib'].__bind_type__ = 0;
	pyjamas['DOM']['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', String('-')]];
	pyjamas['DOM']['removeAttribute'] = function(element, attribute) {


    delete element[attribute];
    
	};
	pyjamas['DOM']['removeAttribute'].__name__ = 'removeAttribute';

	pyjamas['DOM']['removeAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	pyjamas['DOM']['setAttribute'] = function(element, attribute, value) {


    element[attribute] = value;
    
	};
	pyjamas['DOM']['setAttribute'].__name__ = 'setAttribute';

	pyjamas['DOM']['setAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	pyjamas['DOM']['setElemAttribute'] = function(element, attribute, value) {

		element['setAttribute'](attribute, value);
		return null;
	};
	pyjamas['DOM']['setElemAttribute'].__name__ = 'setElemAttribute';

	pyjamas['DOM']['setElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	pyjamas['DOM']['setBooleanAttribute'] = function(elem, attr, value) {


    elem[attr] = value;
    
	};
	pyjamas['DOM']['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	pyjamas['DOM']['setBooleanAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	pyjamas['DOM']['setCapture'] = function(elem) {


    DOM.sCaptureElem = elem;
    
	};
	pyjamas['DOM']['setCapture'].__name__ = 'setCapture';

	pyjamas['DOM']['setCapture'].__bind_type__ = 0;
	pyjamas['DOM']['setCapture'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['setEventListener'] = function(element, listener) {


    element.__listener = listener;
    
	};
	pyjamas['DOM']['setEventListener'].__name__ = 'setEventListener';

	pyjamas['DOM']['setEventListener'].__bind_type__ = 0;
	pyjamas['DOM']['setEventListener'].__args__ = [null,null,['element'],['listener']];
	pyjamas['DOM']['setInnerHTML'] = function(element, html) {

element.innerHTML = html || "";
	};
	pyjamas['DOM']['setInnerHTML'].__name__ = 'setInnerHTML';

	pyjamas['DOM']['setInnerHTML'].__bind_type__ = 0;
	pyjamas['DOM']['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	pyjamas['DOM']['setInnerText'] = function(elem, text) {


    // Remove all children first.
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    // Add a new text node.
    elem.appendChild($doc.createTextNode(text));
    
	};
	pyjamas['DOM']['setInnerText'].__name__ = 'setInnerText';

	pyjamas['DOM']['setInnerText'].__bind_type__ = 0;
	pyjamas['DOM']['setInnerText'].__args__ = [null,null,['elem'],['text']];
	pyjamas['DOM']['setIntElemAttribute'] = function(elem, attr, value) {

		elem['setAttribute'](attr, pyjslib['str'](value));
		return null;
	};
	pyjamas['DOM']['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

	pyjamas['DOM']['setIntElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	pyjamas['DOM']['setIntAttribute'] = function(elem, attr, value) {


    elem[attr] = value;
    
	};
	pyjamas['DOM']['setIntAttribute'].__name__ = 'setIntAttribute';

	pyjamas['DOM']['setIntAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	pyjamas['DOM']['setIntStyleAttribute'] = function(elem, attr, value) {


    elem.style[attr] = value;
    
	};
	pyjamas['DOM']['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

	pyjamas['DOM']['setIntStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	pyjamas['DOM']['setOptionText'] = function(select, text, index) {
		var option;
		option = select['options']['item'](index);
		option.text = text;
		return null;
	};
	pyjamas['DOM']['setOptionText'].__name__ = 'setOptionText';

	pyjamas['DOM']['setOptionText'].__bind_type__ = 0;
	pyjamas['DOM']['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	pyjamas['DOM']['setStyleAttribute'] = function(element, attr, value) {


    element.style[attr] = value;
    
	};
	pyjamas['DOM']['setStyleAttribute'].__name__ = 'setStyleAttribute';

	pyjamas['DOM']['setStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setStyleAttribute'].__args__ = [null,null,['element'],['attr'],['value']];
	pyjamas['DOM']['sinkEvents'] = function(element, bits) {


    element.__eventBits = bits;
    
    element.onclick    = (bits & 0x00001) ? $wnd.__dispatchEvent : null;
    element.ondblclick  = (bits & 0x00002) ? $wnd.__dispatchEvent : null;
    element.onmousedown   = (bits & 0x00004) ? $wnd.__dispatchEvent : null;
    element.onmouseup    = (bits & 0x00008) ? $wnd.__dispatchEvent : null;
    element.onmouseover   = (bits & 0x00010) ? $wnd.__dispatchEvent : null;
    element.onmouseout  = (bits & 0x00020) ? $wnd.__dispatchEvent : null;
    element.onmousemove   = (bits & 0x00040) ? $wnd.__dispatchEvent : null;
    element.onkeydown    = (bits & 0x00080) ? $wnd.__dispatchEvent : null;
    element.onkeypress  = (bits & 0x00100) ? $wnd.__dispatchEvent : null;
    element.onkeyup    = (bits & 0x00200) ? $wnd.__dispatchEvent : null;
    element.onchange      = (bits & 0x00400) ? $wnd.__dispatchEvent : null;
    element.onfocus    = (bits & 0x00800) ? $wnd.__dispatchEvent : null;
    element.onblur      = (bits & 0x01000) ? $wnd.__dispatchEvent : null;
    element.onlosecapture = (bits & 0x02000) ? $wnd.__dispatchEvent : null;
    element.onscroll      = (bits & 0x04000) ? $wnd.__dispatchEvent : null;
    element.onload      = (bits & 0x08000) ? $wnd.__dispatchEvent : null;
    element.onerror    = (bits & 0x10000) ? $wnd.__dispatchEvent : null;
    element.oncontextmenu = (bits & 0x20000) ? $wnd.__dispatchEvent : null;
    
	};
	pyjamas['DOM']['sinkEvents'].__name__ = 'sinkEvents';

	pyjamas['DOM']['sinkEvents'].__bind_type__ = 0;
	pyjamas['DOM']['sinkEvents'].__args__ = [null,null,['element'],['bits']];
	pyjamas['DOM']['toString'] = function(elem) {


    var temp = elem.cloneNode(true);
    var tempDiv = $doc.createElement("DIV");
    tempDiv.appendChild(temp);
    outer = tempDiv.innerHTML;
    //temp.innerHTML = " ";
    return outer;
    
	};
	pyjamas['DOM']['toString'].__name__ = 'toString';

	pyjamas['DOM']['toString'].__bind_type__ = 0;
	pyjamas['DOM']['toString'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['dispatchEvent'] = function(event, element, listener) {

		pyjamas.DOM.dispatchEventImpl(event, element, listener);
		return null;
	};
	pyjamas['DOM']['dispatchEvent'].__name__ = 'dispatchEvent';

	pyjamas['DOM']['dispatchEvent'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	pyjamas['DOM']['previewEvent'] = function(evt) {
		var $sub2,$sub1,preview,ret;
		ret = true;
		if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']), 0) == 1))) {
			preview = pyjamas['DOM']['sEventPreviewStack'].__getitem__((typeof ($sub1=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2)));
			ret = preview['onEventPreview'](evt);
			if (pyjslib['bool'](!pyjslib['bool'](ret))) {
				pyjamas['DOM']['eventCancelBubble'](evt, true);
				pyjamas['DOM']['eventPreventDefault'](evt);
			}
		}
		return ret;
	};
	pyjamas['DOM']['previewEvent'].__name__ = 'previewEvent';

	pyjamas['DOM']['previewEvent'].__bind_type__ = 0;
	pyjamas['DOM']['previewEvent'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {

 		return null;
	};
	pyjamas['DOM']['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

	pyjamas['DOM']['dispatchEventAndCatch'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
	pyjamas['DOM']['currentEvent'] = null;
	pyjamas['DOM']['dispatchEventImpl'] = function(event, element, listener) {
		var prevCurrentEvent;
		if (pyjslib['bool'](pyjslib['op_eq'](element, pyjamas['DOM']['sCaptureElem']))) {
			if (pyjslib['bool'](pyjslib['op_eq'](pyjamas['DOM']['eventGetType'](event), String('losecapture')))) {
				pyjamas['DOM']['sCaptureElem'] = null;
			}
		}
		prevCurrentEvent = pyjamas['DOM']['currentEvent'];
		pyjamas['DOM']['currentEvent'] = event;
		listener['onBrowserEvent'](event);
		pyjamas['DOM']['currentEvent'] = prevCurrentEvent;
		return null;
	};
	pyjamas['DOM']['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

	pyjamas['DOM']['dispatchEventImpl'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
	pyjamas['DOM']['eventGetCurrentEvent'] = function() {

		return pyjamas['DOM']['currentEvent'];
	};
	pyjamas['DOM']['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	pyjamas['DOM']['eventGetCurrentEvent'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCurrentEvent'].__args__ = [null,null];
	pyjamas['DOM']['insertListItem'] = function(select, item, value, index) {
		var option;
		option = pyjamas['DOM']['createElement'](String('OPTION'));
		pyjamas['DOM']['setInnerText'](option, item);
		if (pyjslib['bool']((value !== null))) {
			pyjamas['DOM']['setAttribute'](option, String('value'), value);
		}
		if (pyjslib['bool'](pyjslib['op_eq'](index, (typeof ($usub1=1)=='number'?
			-$usub1:
			pyjslib['op_usub']($usub1))))) {
			pyjamas['DOM']['appendChild'](select, option);
		}
		else {
			pyjamas['DOM']['insertChild'](select, option, index);
		}
		return null;
	};
	pyjamas['DOM']['insertListItem'].__name__ = 'insertListItem';

	pyjamas['DOM']['insertListItem'].__bind_type__ = 0;
	pyjamas['DOM']['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
	pyjamas['DOM']['getBodyOffsetTop'] = function() {

		return 0;
	};
	pyjamas['DOM']['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	pyjamas['DOM']['getBodyOffsetTop'].__bind_type__ = 0;
	pyjamas['DOM']['getBodyOffsetTop'].__args__ = [null,null];
	pyjamas['DOM']['getBodyOffsetLeft'] = function() {

		return 0;
	};
	pyjamas['DOM']['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	pyjamas['DOM']['getBodyOffsetLeft'].__bind_type__ = 0;
	pyjamas['DOM']['getBodyOffsetLeft'].__args__ = [null,null];
	if (pyjslib['bool'](pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr71=pyjamas['DOM']['sys']['platform']) !== null & ($attr72=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr71 == 'function'?
				pyjslib['getattr']($attr72, 'platform'):
				pyjamas['DOM']['sys']['platform'])))) {
		pyjamas['DOM']['init']();
	}
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['sys', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed']
*/
