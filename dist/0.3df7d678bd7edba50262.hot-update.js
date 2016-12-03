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

	function loadFileList() {
	  var files = JSON.parse(localStorage.getItem('files') || '[]');
	  var outputList = document.getElementById("enc-files-list");
	  outputList.innerHTML = "";

	  files.forEach(function(file) {
	    var li = document.createElement("li");
	    li.textContent = file.name + " uploaded on " + file.date;
	    var decButton = document.createElement("button");
	    decButton.textContent = "Decrypt";
	    decButton.addEventListener("click", function() {
	      // Do stuff
	      var dataURI = decryptToDataURI(file.b64, 'sdfsdsf');
	    });
	    li.appendChild(decButton);
	    outputList.appendChild(li);
	  });
	}

	function addEncryptedFileEntry(name, b64) {
	  var files = JSON.parse(localStorage.getItem('files') || '[]');

	  files.push({
	    name: name,
	    date: Date.now(),
	    b64: b64
	  });

	  localStorage.setItem('files', JSON.stringify(files));
	  loadFileList();
	}

	var encryptForm = document.getElementById("encrypt-form");
	encryptForm.addEventListener("submit", function(e) {
	  e.preventDefault();
	  Array.prototype.forEach.call(encryptForm.files.files, function(file) {
	    getDataURI(file, function(dataURI) {
	      addEncryptedFileEntry(file.name, encryptDataURI(dataURI, 'sdfsdsf'));
	    });
	  });
	}, true);
	loadFileList();


/***/ }
])