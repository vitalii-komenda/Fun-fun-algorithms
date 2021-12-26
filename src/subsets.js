const find_subsets = function (nums) {
    let subsets = [[]];

    for (let i=0; i < nums.length; i++) {
        const newSet = JSON.parse(JSON.stringify(subsets));

        for (let y=0; y < newSet.length; y++) {
            newSet[y].push(nums[i]);
        }
        subsets = subsets.concat(newSet);
    }

    return subsets;
};
