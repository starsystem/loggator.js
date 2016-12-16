function b64e(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
		return String.fromCharCode('0x' + p1);
	}));
}

function b64d(str) {
	return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
		return '%' + c.charCodeAt(0).toString(16);
	}).join(''));
}

Storage.prototype.setObject = function(key, value) {
	this.setItem(key, b64e(JSON.stringify(value)));
};

Storage.prototype.getObject = function(key) {
	var value = this.getItem(key);
	return value && JSON.parse(b64d(value));
};

function flash (string, clear) {
	clear = clear || false;
	if (clear) {
		// remove other flashes
		var flashes = document.querySelectorAll('.flash');
		for (var i = 0, len = flashes.length; i < len; i++) {
			flashes[i].parentNode.removeChild(flashes[i]);
		}
	}
	var alert = '<div class="flash"><p><strong>' + string + '</strong></p></div>';
	document.querySelector('body > header').innerHTML += alert;
}
