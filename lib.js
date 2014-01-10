// veJSTools a library of various tools used in tools.adonisk.com

'use strict';

// base64 encoding function
module.exports.encode = function (x) {
	if (x) {
		// if an argument was passed
		// then base64-encode it and return the value
		return new Buffer(x).toString('base64');
	} else {
		// else print error message
		console.log('Nothing to encode. The encoding option requires a parameter');
		// and exit
		return -1;
	}
}

// alias
module.exports.e = module.exports.encode;

// base64 decoding function
module.exports.decode = function (x) {
	if (x) {
		// if an argument was passed
		// then base64-decode it and return the value
		return (new Buffer(x, 'base64')).toString();
	} else {
		// else print error message
		console.log('Nothing to decode. The decoding option requires a parameter');
		// and exit
		return -1;
	}
}

// alias
module.exports.d = module.exports.decode;

// char to unicode encoding function
module.exports.encodeUnicode = function (x) {
	if (x) {
		// if an argument was passed
		// then encode it in unicode and return the value
		return String.fromCharCode(x);
	} else {
		// else print error message
		console.log('Nothing to encode in unicode. The encodeUnicode option requires a parameter');
		// and exit
		return -1;
	}
}

// char to unicode decoding function
module.exports.decodeUnicode = function (x) {
	if (x) {
		// if an argument was passed
		// then decode it in unicode and return the value
		var temp = '';
		for (var i = 0; i < x.length; i++) {
			temp += x.charCodeAt(i) + ', ';
		}
		return temp.slice(0, -2);
	} else {
		// else print error message
		console.log('Nothing to decode in unicode. The decodeUnicode option requires a parameter');
		// and exit
		return -1;
	}
}

// help function
module.exports.help = function () {
	// TODO: write a help page
	// go through all modules.exports keys, removed aliases and add them in the help message
	console.log('Help is still in the TODO list');
}

// alias
module.exports.h = module.exports.help;
