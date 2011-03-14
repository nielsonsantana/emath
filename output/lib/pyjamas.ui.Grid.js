/* start module: pyjamas.ui.Grid */
$pyjs.loaded_modules['pyjamas.ui.Grid'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Grid'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Grid'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['Grid'] = $pyjs.loaded_modules["pyjamas.ui.Grid"];
	pyjamas['ui']['Grid'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Grid';
	var __name__ = pyjamas['ui']['Grid'].__name__ = __mod_name__;
	var Grid = pyjamas['ui']['Grid'];


	pyjamas['ui']['Grid']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['Grid']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['Grid']['HTMLTable'] = pyjslib['___import___']('HTMLTable.HTMLTable', 'pyjamas.ui', null, false);
	pyjamas['ui']['Grid']['CellFormatter'] = pyjslib['___import___']('CellFormatter.CellFormatter', 'pyjamas.ui', null, false);
	pyjamas['ui']['Grid']['RowFormatter'] = pyjslib['___import___']('RowFormatter.RowFormatter', 'pyjamas.ui', null, false);
	pyjamas['ui']['Grid']['Grid'] = (function(){
		var $cls_instance = $pyjs__class_instance('Grid');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'adb6e9618907c17abd456a1e470af509';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(rows, columns) {
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
				rows = arguments[1];
				columns = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof columns != 'undefined') {
					if (columns !== null && typeof columns['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = columns;
						columns = arguments[3];
					}
				} else 				if (typeof rows != 'undefined') {
					if (rows !== null && typeof rows['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = rows;
						rows = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof rows == 'undefined') rows=arguments.callee.__args__[3][1];
			if (typeof columns == 'undefined') columns=arguments.callee.__args__[4][1];
			var $or1,$or2;
			self.numColumns = 0;
			self.numRows = 0;
			$pyjs_kwargs_call(pyjamas['ui']['Grid']['HTMLTable'], '__init__', null, kwargs, [{}, self]);
			if (pyjslib['bool']((pyjslib['bool']($or1=(pyjslib['cmp'](rows, 0) == 1))?$or1:(pyjslib['cmp'](columns, 0) == 1)))) {
				self['resize'](rows, columns);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['rows', 0],['columns', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeRow', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $attr1,$attr2,$sub2,$sub1;
			pyjamas['ui']['Grid']['HTMLTable']['removeRow'](self, row);
			self.numRows = (typeof ($sub1=((($attr1=self['numRows']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'numRows'):
						self['numRows']))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2));
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['removeRow'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'resize', function(rows, columns) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rows = arguments[1];
				columns = arguments[2];
			}

			self['resizeColumns'](columns);
			self['resizeRows'](rows);
			return null;
		}
	, 1, [null,null,['self'],['rows'],['columns']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'resizeColumns', function(columns) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				columns = arguments[1];
			}
			var $iter3_array,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_iter,$iter1_array,$sub3,$sub6,$sub4,$attr9,$attr8,$iter1_nextval,$attr3,$attr5,$attr4,$attr7,$attr6,$iter2_idx,$iter3_type,$attr14,$attr11,$attr10,$attr13,$attr12,$iter2_nextval,$iter1_type,$sub5,i,$iter4_nextval,j,$iter4_idx,$iter1_idx,$iter4_array,$iter3_nextval,$iter2_array;
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr3=self['numColumns']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'numColumns'):
						self['numColumns']), columns))) {
				return null;
			}
			if (pyjslib['bool']((pyjslib['cmp'](((($attr5=self['numColumns']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'numColumns'):
						self['numColumns']), columns) == 1))) {
				$iter1_iter = pyjslib['range'](0, ((($attr7=self['numRows']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'numRows'):
							self['numRows']));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					$iter2_iter = pyjslib['range']((typeof ($sub3=((($attr9=self['numColumns']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
								pyjslib['getattr']($attr10, 'numColumns'):
								self['numColumns']))==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						pyjslib['op_sub']($sub3,$sub4)), (typeof ($sub5=columns)==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						pyjslib['op_sub']($sub5,$sub6)), (typeof ($usub1=1)=='number'?
						-$usub1:
						pyjslib['op_usub']($usub1)));
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						j = $iter2_nextval;
						self['removeCell'](i, j);
					}
				}
			}
			else {
				$iter3_iter = pyjslib['range'](((($attr11=self['numRows']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'numRows'):
							self['numRows']));
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					$iter4_iter = pyjslib['range'](((($attr13=self['numColumns']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
								pyjslib['getattr']($attr14, 'numColumns'):
								self['numColumns']), columns);
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						j = $iter4_nextval;
						self['insertCell'](i, j);
					}
				}
			}
			self.numColumns = columns;
			return null;
		}
	, 1, [null,null,['self'],['columns']]);
		$cls_definition['resizeColumns'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'resizeRows', function(rows) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rows = arguments[1];
			}
			var $sub10,$attr23,$sub9,$attr20,$attr21,$attr22,$sub8,$attr19,$attr18,$attr26,$attr15,$attr24,$attr17,$attr16,$sub7,$attr25;
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr15=self['numRows']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'numRows'):
						self['numRows']), rows))) {
				return null;
			}
			if (pyjslib['bool']((pyjslib['cmp'](((($attr17=self['numRows']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'numRows'):
						self['numRows']), rows) == -1))) {
				self['addRows'](self['getBodyElement'](), (typeof ($sub7=rows)==typeof ($sub8=((($attr19=self['numRows']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
							pyjslib['getattr']($attr20, 'numRows'):
							self['numRows'])) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					pyjslib['op_sub']($sub7,$sub8)), ((($attr21=self['numColumns']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
							pyjslib['getattr']($attr22, 'numColumns'):
							self['numColumns']));
				self.numRows = rows;
			}
			else {
				while (pyjslib['bool']((pyjslib['cmp'](((($attr23=self['numRows']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
							pyjslib['getattr']($attr24, 'numRows'):
							self['numRows']), rows) == 1))) {
					self['removeRow']((typeof ($sub9=((($attr25=self['numRows']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
								pyjslib['getattr']($attr26, 'numRows'):
								self['numRows']))==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						pyjslib['op_sub']($sub9,$sub10)));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['rows']]);
		$cls_definition['resizeRows'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createCell', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var td;
			td = pyjamas['ui']['Grid']['HTMLTable']['createCell'](self);
			pyjamas['ui']['Grid']['DOM']['setInnerHTML'](td, String('\x26nbsp\x3B'));
			return td;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clearCell', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var b,td;
			td = self['cellFormatter']['getElement'](row, column);
			b = pyjamas['ui']['Grid']['HTMLTable']['internalClearCell'](self, td);
			pyjamas['ui']['Grid']['DOM']['setInnerHTML'](td, String('\x26nbsp\x3B'));
			return b;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['clearCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'prepareCell', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['prepareCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'prepareRow', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['prepareRow'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCellCount', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $attr28,$attr27;
			return ((($attr27=self['numColumns']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'numColumns'):
						self['numColumns']);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getCellCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getColumnCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr29,$attr30;
			return ((($attr29=self['numColumns']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'numColumns'):
						self['numColumns']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getColumnCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getRowCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31;
			return ((($attr31=self['numRows']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, 'numRows'):
						self['numRows']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addRows', function(table, numRows, columns) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				numRows = arguments[2];
				columns = arguments[3];
			}
			var $iter5_nextval,cell,cellNum,$iter5_idx,$iter6_idx,$iter6_type,$iter5_array,rowNum,$iter6_array,$iter5_iter,$iter5_type,td,$iter6_nextval,$iter6_iter,row;
			td = pyjamas['ui']['Grid']['DOM']['createElement'](String('td'));
			pyjamas['ui']['Grid']['DOM']['setInnerHTML'](td, String('\x26nbsp\x3B'));
			row = pyjamas['ui']['Grid']['DOM']['createElement'](String('tr'));
			$iter5_iter = pyjslib['range'](columns);
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				cellNum = $iter5_nextval;
				cell = td['cloneNode'](true);
				row['appendChild'](cell);
			}
			$iter6_iter = pyjslib['range'](numRows);
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				rowNum = $iter6_nextval;
				table['appendChild'](row['cloneNode'](true));
			}
			return null;
		}
	, 1, [null,null,['self'],['table'],['numRows'],['columns']]);
		$cls_definition['addRows'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['Grid']['HTMLTable']));
	})();
	pyjamas['ui']['Grid']['Factory']['registerClass'](String('pyjamas.ui.Grid'), pyjamas['ui']['Grid']['Grid']);
	return this;
}; /* end pyjamas.ui.Grid */


/* end module: pyjamas.ui.Grid */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'HTMLTable.HTMLTable', 'HTMLTable', 'CellFormatter.CellFormatter', 'CellFormatter', 'RowFormatter.RowFormatter', 'RowFormatter']
*/
