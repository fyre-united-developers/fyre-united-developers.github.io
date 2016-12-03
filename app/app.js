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
  return false;
}, true);

var decryptForm = document.getElementById("decrypt-form");
decryptForm.addEventListener("submit", function(e) {
  e.preventDefault();

  Array.prototype.forEach.call(decryptForm.files.files, function(file) {
    encryption.getDataURI(file, function(dataURI) {
      fetch(dataURI).then(function(response) {
        return response.text();
      }).then(function(text) {
        console.log(text);
        fileList.addEncryptedFileEntry(file.name, text);
      });
    });
  });
  return false;
}, true);

fileList.loadFileList();
