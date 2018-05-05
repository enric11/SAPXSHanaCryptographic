$.import("CryptoExample.libs", "aesCrypt");
var aesCrypt = $.CryptoExample.libs.aesCrypt;

$.import("CryptoExample.libs", "SHA256");
var SHA256 = $.CryptoExample.libs.SHA256;


var body = "";
var input = "Hello word!";

body = "Input" + input;

/* SHA256 example */
body = body + "\n  SHA256 : " + SHA256.SHA256(input);

/* aes */
var encript = aesCrypt.encrypt(input,"SecretKey",256);
body = body + "\n AES (encrypt) : " + encript;
var decript = aesCrypt.decrypt(encript,"SecretKey",256);
body = body + "\n AES (decrypt) : " + decript;

$.response.setBody(body);
