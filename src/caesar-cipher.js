const alpabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numToLetter = {};
alpabet.forEach((x, i) =>{numToLetter[i+1] = x;});

const letterToNum = {};
alpabet.forEach((x, i) =>{letterToNum[x] = i+1;});

const decrypt = (text, shift) => {
  return text.split('').map(l => {
    return numToLetter[letterToNum[l] - shift];
  }).join('');
}

const encrypt = (text, shift) => {
  return text.split('').map(l => {
    return numToLetter[letterToNum[l] + shift];
  }).join('');
}

export default const caesarCipher = {
  decrypt,
  encrypt
};
