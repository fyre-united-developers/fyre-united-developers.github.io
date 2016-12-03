webpackHotUpdate(0,{

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	var encryption = __webpack_require__(2);
	var p5s = __webpack_require__(38);

	function downloadURI(uri, name) {
	  var link = document.createElement("a");
	  link.download = name;
	  link.href = uri;
	  document.body.appendChild(link);
	  link.click();
	  document.body.removeChild(link);
	}

	function loadFileList() {
	  var files = JSON.parse(localStorage.getItem('files') || '[]');
	  var outputList = document.getElementById("enc-files-list");
	  outputList.innerHTML = "";

	  files.forEach(function(file) {
	    var li = document.createElement("li");
	    li.textContent = file.name + " uploaded on " + file.date + " ";

	    var downloadButton = document.createElement("button");
	    downloadButton.textContent = "Download";
	    downloadButton.addEventListener("click", function() {
	      var b64DataURI = 'data:text/plain;charset=utf-8,' + file.b64;
	      downloadURI(b64DataURI, "(encrypted) " + file.name);
	    });
	    li.appendChild(downloadButton);

	    var decButton = document.createElement("button");
	    decButton.textContent = "Decrypt";
	    decButton.addEventListener("click", function() {
	      // Do stuff
	      var potentialDataURI = encryption.decryptToDataURI(file.b64, 'sdfsdsf');
	      if (!potentialDataURI.startsWith("data:")) {
	        alert("Incorrect gesture password!");
	      } else {
	        // Trigger download
	        downloadURI(potentialDataURI, file.name);
	      }
	    });
	    li.appendChild(decButton);

	    var delButton = document.createElement("button");
	    delButton.textContent = "Delete";
	    delButton.addEventListener("click", function() {
	      removeEncryptedFileEntry(file);
	    });
	    li.appendChild(delButton);

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

	function removeEncryptedFileEntry(file) {
	  var files = JSON.parse(localStorage.getItem('files') || '[]');

	  files.splice(files.indexOf(file), 1);

	  localStorage.setItem('files', JSON.stringify(files));
	  loadFileList();
	}

	module.exports = {
	  downloadURI: downloadURI,
	  loadFileList: loadFileList,
	  addEncryptedFileEntry: addEncryptedFileEntry,
	  removeEncryptedFileEntry: removeEncryptedFileEntry
	}


/***/ }

})