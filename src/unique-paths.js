/*
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 *
 * How many possible unique paths are there?
 *
 * Input: m = 3, n = 2
 * Output: 3
 */
 
 
 /**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const calc = (m, n) => {
    const mem = {};

    const check = (m, n) => {
      if (m === 1 && n === 1) {
        return 1;
      }
      if (m < 1 || n < 1) return 0;
      if (mem[`${m}-${n}`]) return mem[`${m}-${n}`];

      const res = check(m-1, n) + check(m, n-1);

      mem[`${m}-${n}`] = res;

      return res;
    };
    return check(m, n);
}

export const uniquePaths = (m, n) => {
    return calc(m, n);
};
