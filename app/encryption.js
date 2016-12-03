var CryptoJS = require('crypto-js');
var CRYPTO_ALGORITHM = 'aes-256-ctr';

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

module.exports = {
  getDataURI: getDataURI,
  encryptDataURI: encryptDataURI,
  decryptToDataURI: decryptToDataURI
}
