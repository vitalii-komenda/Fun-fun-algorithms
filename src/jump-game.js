/*
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 *
 * Each element in the array represents your maximum jump length at that position.
 *
 * Determine if you are able to reach the last index.
 *
 * Example
 * Input: [2,3,1,1,4]
 * Output: true
 * https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807/
*/



/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canReach = (arr, p=0, mem={}) => {
  if(p === arr.length-1) return true;
  let jmps = arr[p];
  let res = false;
  mem[p] = true;
  
  while(jmps>0){
      if (mem[p+jmps]) {
        break;
      }

      if (canReach(arr, p+jmps, mem)) {
        return true;
      }
      jmps -= 1;
  }
  
  return res;
};  

export const canJump = function(nums) {
    return canReach(nums);
};
