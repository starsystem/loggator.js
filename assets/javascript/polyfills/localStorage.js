// [This is the best localStorage polyfill in the world](https://gist.github.com/juliocesar/926500)
if (!('localStorage' in window)) {
// if (!Modernizr.localstorage) {
  window.localStorage = {
    _data       : {},
    setItem     : function(id, val) { return this._data[id] = String(val); },
    getItem     : function(id) { return this._data.hasOwnProperty(id) ? this._data[id] : undefined; },
    removeItem  : function(id) { return delete this._data[id]; },
    clear       : function() { return this._data = {}; }
  };
}
