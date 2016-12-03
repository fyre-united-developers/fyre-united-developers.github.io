"use strict";

var encryption = require('./encryption');
var fileList = require('./fileList');

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
