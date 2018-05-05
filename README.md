# SAPXSHanaCryptographic
##Cryptographic libraries for SAP XS Engine 

In this example we use 2 cryptographic libraries to secure our communications.

Import the project, and use folder libs:
```javascript
$.import("CryptoExample.libs", "aesCrypt");
var aesCrypt = $.CryptoExample.libs.aesCrypt;

$.import("CryptoExample.libs", "SHA256");
var SHA256 = $.CryptoExample.libs.SHA256;
```	

The code contains two libraries:
- __AES__ for encrypt and decrypt information (strings), you can see more information at:

	*_https://es.wikipedia.org/wiki/Advanced_Encryption_Standard_
	
Encrypt
```javascript
aesCrypt.encrypt(input,"SecretKey",256);
```	

Decrypt
```javascript
aesCrypt.decrypt(encript,"SecretKey",256);
```	
 
 
- __SHA256__ for encrypt strings (very useful when you need store passwords), you can see more information at:
	*_https://es.wikipedia.org/wiki/SHA-2_
 
Encrypt
```javascript
SHA256.SHA256("SomeInput");
```