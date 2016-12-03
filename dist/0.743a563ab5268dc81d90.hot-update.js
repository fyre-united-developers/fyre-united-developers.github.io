webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var encryption = __webpack_require__(2);
	var fileList = __webpack_require__(37);
	var p5s = __webpack_require__(38);

	var encryptForm = document.getElementById("encrypt-form");
	encryptForm.addEventListener("submit", function(e) {
	  encryptForm.blur();
	  e.preventDefault();
	  p5s.promptPassword(function(password) {
	    Array.prototype.forEach.call(encryptForm.files.files, function(file) {
	      encryption.getDataURI(file, function(dataURI) {
	        fileList.addEncryptedFileEntry(file.name, encryption.encryptDataURI(dataURI, password));
	      });
	    });
	  });
	}, true);
	fileList.loadFileList();


/***/ }
])