const dhKeyExchange = function(dividend=3, divisor=17) {
  return {
    modulo(exp = 1) {
      return dividend ** exp % divisor;
    },
    createTwoPublicKeys(secretKey1, secretKey2) {  
      return {
        pubKey1: this.modulo(secretKey1),
        pubKey2: this.modulo(secretKey2)
      }
    },
    getSharedSecret(pubKey, secretKey) {
      return pubKey ** secretKey % divisor;
    }
  }
}


// const obj = dhKeyExchange();
// const res = obj.createTwoPublicKeys(6, 17);
// obj.getSharedSecret(6, res.pubKey2); // 6
// obj.getSharedSecret(17, res.pubKey1); // 6 the same
