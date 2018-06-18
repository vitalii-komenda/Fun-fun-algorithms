function compress(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            let j = i + 1;
            while (j < arr.length && arr[j] === arr[i]) {
                j++;
            }
            res.push(j - i);
            i = j - 1;
        } else {
            res.push(1);
        }
        res.push(arr[i]);
    }

    return res;
}

// compress('aabcc'.split('')) => [2, "a", 1, "b", 2, "c"]
