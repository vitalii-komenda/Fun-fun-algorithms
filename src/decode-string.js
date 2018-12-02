/*
 * Given an encoded string, return it's decoded string.
 * 
 * Examples:
 *
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 * s = "3[a]2[b4[F]c]", return "aaabFFFFcbFFFFc".
 * 
 * Live example https://jsbin.com/jekodiv/4/edit?js,console
 */


const proccess = (arr) => {
  const res = [];

  while(arr.length) {
    const num = arr.shift();
    const val = arr.shift();
    
    if (Number(num)) {
      if(Array.isArray(val)) {                      
        const p = proccess(val);

        res.push(p.repeat(num || 1));
      }  else {
        res.push(val.repeat(num || 1));
      }
    } else {
      res.push(val);
    }
  }
  
  return res.join('');
};

function parse(stack) {
  let res = [];
  let curNum = [];

  while (stack.length) {
    let c = stack.shift();

    if (!isNaN(Number(c))) {
      curNum.push(c);
    } else if (c === '[') {
      const s2 = parse(stack);
      res.push(Number(curNum.join('')));
      res.push(s2);
      curNum = [];
    } else if (c !== ']') {
      res.push(0);
      res.push(c);
    } else if (c === ']') {
      return res;
    }
  }

  return res;
}


export const decodeString = function (s) {
    return proccess(parse(s.split('')));
};
