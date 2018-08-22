/*
  returns longest common subsequence
  example: lcs ('abcd', 'abcg', 4, 4) => [3, ['a', 'b', 'c']]
*/
export const lcs = (p, q, n, m, res = []) => {
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
