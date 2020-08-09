function clvGrp4(s) {
		var spacedS = s.match(/.{1,9}/g).join('%E2%80%A6');
		s = spacedS;
		return s;
	}

	function h2b(s) {
		return btoa(s.match(/\w{2}/g).map(function (a) {
			return String.fromCharCode(parseInt(a, 16));
		}).join(""));
	}
	b2dc = function (s) {
		var e = {},
			i, b = 0,
			c, x, l = 0,
			a, r = '',
			w = String.fromCharCode,
			L = s.length;
		var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		for (i = 0; i < 64; i++) {
			e[A.charAt(i)] = i;
		}
		for (x = 0; x < L; x++) {
			c = e[s.charAt(x)];
			b = (b << 6) + c;
			l += 6;
			while (l >= 8) {
				((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
			}
		}
		return r;
	};