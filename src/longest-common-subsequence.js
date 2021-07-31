/*
  returns longest common subsequence
  example: lcs ('abcd', 'abcg', 4, 4) => [3, ['a', 'b', 'c']]
*/
const lcs = (p, q, n, m, res = []) => {
  if (n === 0 || m === 0) {
    return [0, res];
  } else if (p[n-1] === q[m-1]) {
    const r = lcs(p, q, n-1, m-1, [q[m-1]].concat(res));
    return [1 + r[0], r[1]];
  } else {
    const tmp1 = lcs(p, q, n-1, m, res);
    const tmp2 = lcs(p, q, n, m-1, res);

    return tmp1[0] > tmp2[0] ? tmp1 : tmp2;
  }
};

ans = [];
const lcs2 = (s1, s2, s1i, s2i, arr = []) => {
    if(s2i === s2.length || s1i === s1.length) {
        if (ans.length < arr.length) ans = arr;

        return 0;
    }

    let res = 0;
    if (s1[s1i] === s2[s2i]) {    
        res += 1 + lcs2(s1, s2, s1i+1, s2i+1, arr.concat(s1[s1i]));
    } else {
        res = Math.max( lcs2(s1, s2, s1i+1, s2i, arr), lcs2(s1, s2, s1i, s2i+1, arr) )
    }
    return res;
}
lcc('abcdefmo', 'cdo', 0, 0) //["c", "d", "o"]
