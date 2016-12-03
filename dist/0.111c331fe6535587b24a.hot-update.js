webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";

	var CryptoJS = __webpack_require__(5);
	console.log(Buffer);
	var CRYPTO_ALGORITHM = 'aes-256-ctr'; //yes
	var p5 = __webpack_require__(39);
	new p5();

	// p5 code here????

	function getFileB64(fileObject, cb) {
	  var reader = new FileReader();
	  reader.readAsDataURL(fileObject);
	  reader.onloadend = function() {
	    cb(reader.result);
	  }
	}

	function encryptB64(b64, gesturePassword) {
	  return CryptoJS.AES.encrypt(b64, gesturePassword).toString();
	}

	function decryptB64(enc, gesturePassword) {
	  return CryptoJS.AES.decrypt(end, gesturePassword).toString(CryptoJS.enc.Utf8)
	}

	var encryptForm = document.getElementById("encrypt-form");
	encryptForm.addEventListener("submit", function(e) {
	  e.preventDefault();
	  Array.prototype.forEach.call(encryptForm.files.files, function(file) {
	    getFileB64(file, function(b64) {
	      console.log(encryptB64(b64, 'sdfdsfs'));
	    });
	  });
	}, true);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1).Buffer))

/***/ }
])