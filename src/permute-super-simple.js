const p = (arr, res = [], ans) => {
    if (!arr.length) {
        ans.push(res)
        return res;
    }

    for(let i=0; i<arr.length; i++) {
        p(slice(arr, i), res.concat(arr[i]), ans)
    }
}

const p2 = function (nums) {
  const result = [];
  // TODO: Write your code here

  const f = (localNums, res) => {
    if (res.length >= nums.length || !localNums.length) {
      result.push(res);

      return;
    }

    for (let i=0; i < localNums.length; i++) {
      const copy = localNums.slice(0);
      copy.splice(i, 1);

      f(copy, [localNums[i]].concat(res.slice(0)));
    }
  }

  f(nums, []);

  return result;
};
