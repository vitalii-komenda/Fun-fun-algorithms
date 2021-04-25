const p = (arr, res = [], ans) => {
    if (!arr.length) {
        ans.push(res)
        return res;
    }

    for(let i=0; i<arr.length; i++) {
        p(slice(arr, i), res.concat(arr[i]), ans)
    }
}
