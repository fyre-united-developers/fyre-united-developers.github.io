webpackHotUpdate(0,{

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var encryption = __webpack_require__(3);
	var fileList = __webpack_require__(38);

	var encryptForm = document.getElementById("encrypt-form");
	encryptForm.addEventListener("submit", function(e) {
	  e.preventDefault();
	  Array.prototype.forEach.call(encryptForm.files.files, function(file) {
	    encryption.getDataURI(file, function(dataURI) {
	      fileList.addEncryptedFileEntry(file.name, encryption.encryptDataURI(dataURI, 'sdfsdsf'));
	    });
	  });
	}, true);
	fileList.loadFileList();


/***/ }

})