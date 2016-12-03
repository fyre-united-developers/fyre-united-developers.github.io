"use strict";

var encryption = require('./encryption');
var fileList = require('./fileList');
var p5s = require('./p5');

var encryptForm = document.getElementById("encrypt-form");
encryptForm.addEventListener("submit", function(e) {
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
