// const obj = dhKeyExchange();
// const res = obj.createTwoPublicKeys(14, 17);
// obj.getSharedSecret(res.pubKey1, 17); // 2
// obj.getSharedSecret(res.pubKey2, 14); // the same 2

export const dhKeyExchange = function(dividend=3, divisor=17) {
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
