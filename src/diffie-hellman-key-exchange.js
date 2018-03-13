const dhKeyExchange = {
  dividend: 3,
  divisor: 17,

  modulo(exp = 1) {
    return this.dividend ** exp % this.divisor;
  },
  createTwoPublicKeys(secretKey1, secretKey2) {  
    return {
      pubKey1: this.modulo(secretKey1),
      pubKey2: this.modulo(secretKey2)
    }
  },
  getSharedSecret(pubKey, secretKey) {
    return pubKey ** secretKey % this.divisor;
  }
}
