/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  }
  
  /**
   * 获取localStorage
   */
  export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
  }
  
  /**
   * 删除localStorage
   */
  export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
  }
  
  /**
	 * cookie 存去
	 * @k   { String } 必选
	 * @v   { String || Number || Array || Object || null }
	 * @o   { Object } 可选参数 expires: 时间，path： 路径，domain：域
	 */
  export const $cookie = (k, v, o = {} ) => {
		if( k && typeof v !== 'undefined' ) {
			k = encodeURIComponent( k );
			if( v == null ) o.expires = -1;

			if (typeof o.expires === 'number') {
				var days = o.expires,
					t = o.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}
			if( typeof v !== 'string' ) v = JSON.stringify(v);
			return (document.cookie = [
				k,
				'=',
				encodeURIComponent( v ),
				o.expires ? '; expires=' + o.expires.toUTCString() : '',
				o.path    ? '; path=' + o.path : '',
				o.domain  ? '; domain=' + o.domain : '',
				o.secure  ? '; secure' : ''
			].join(''));
		}

		var result = k ? null : {},
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0, l = cookies.length,
			_c, _k, _v;
		for(; i < l; i++) {
			_c = cookies[i].split('='),
			_k = decodeURIComponent( _c.shift() ),
			_v = _getData( decodeURIComponent( _c.join('=') ) );
			if ( k ) {
				if( k === _k ){
					result = _v;
					break;
				}
			}else{
				result[ _k ] =  _v;
			}
		}
		return result;
	}