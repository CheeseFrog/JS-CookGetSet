function cookget(n) {
	var l = window.localStorage.getItem("q_" + n);
	if (l) return JSON.parse(l);
	return null;
}

function cookset(n, v) {
	if (v == null) window.localStorage.removeItem("q_" + n);
	else window.localStorage.setItem("q_" + n, JSON.stringify(v));
	return v;
}
if (typeof window.localStorage == "undefined") {
	cookget = function(n) {
		var c = document.cookie.split("; ");
		for (var i = 0; i < c.length; i++) {
			var j = c[i].split("=");
			if (j[0] == n) break;
		};
		return JSON.parse(j[1] || 0) || null;
	}
	cookset = function(n, v) {
		document.cookie = n + "=" + JSON.stringify(v) + "; expires=" + (new Date(Date.parse((v == null) ? "1970" : "3000"))).toUTCString() + ";";
		return v;
	}
}
