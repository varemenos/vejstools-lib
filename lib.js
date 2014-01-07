// veJSTools a library of various tools used in tools.adonisk.com

'use strict';

// base64 encoding function
module.exports.encoding = function (x) {
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
module.exports.e = module.exports.encoding;

// base64 decoding function
module.exports.decoding = function (x) {
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
module.exports.d = module.exports.decoding;
