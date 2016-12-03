webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var CryptoJS = __webpack_require__(5);
	var CRYPTO_ALGORITHM = 'aes-256-ctr'; //yes
	var p5 = __webpack_require__(39);
	new p5();

	// p5 code here????

	function getDataURI(fileObject, cb) {
	  var reader = new FileReader();
	  reader.readAsDataURL(fileObject);
	  reader.onloadend = function() {
	    cb(reader.result);
	  }
	}

	function encryptDataURI(dataURI, gesturePassword) {
	  return CryptoJS.AES.encrypt(dataURI, gesturePassword).toString();
	}

	function decryptToDataURI(encB64, gesturePassword) {
	  return CryptoJS.AES.decrypt(encB64, gesturePassword).toString(CryptoJS.enc.Utf8);
	}

	var encryptForm = document.getElementById("encrypt-form");
	encryptForm.addEventListener("submit", function(e) {
	  e.preventDefault();
	  Array.prototype.forEach.call(encryptForm.files.files, function(file) {
	    getDataURI(file, function(dataURI) {
	      var encryptedB64 = encryptB64(dataURI, 'sdfdsfs');
	      console.log('Unencrypted data URI: ' + dataURI);
	      console.log('TEST b64 encrypted data: ' + encryptedB64);
	      console.log('TEST b64 decrypted data: ' + decryptB64(encryptedB64, 'sdfdsfs'));
	    });
	  });
	}, true);


/***/ }
])