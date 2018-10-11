/*
 It decompressing strings

 Examples:
 console.log(dec("2[3[a]b]")); // aaabaaab
 console.log(dec("2[3[4[q]a]b]")); //qqqqaqqqqaqqqqabqqqqaqqqqaqqqqab
 console.log(dec("2[0[q]r]")); //rr
 console.log(dec("a[]b")); //
 console.log(dec("2[2[2[a]]q]")); // aaaaqaaaaq
*/



const isNum = (s) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(s);

const repeatString = (str, repeatTimes, i) => {
    let res = [];
    let j;
    for (j = i + 1; j < str.length; j++) {
        if (str[j] === "]") {
            return [res.join("").repeat(repeatTimes), j];
        }
        if (isNum(str[j])) {
            let localRes = dec(str, j);

            res.push(localRes[0]);
            j = localRes[1] - 1;
        } else {
            res.push(str[j]);
        }
    }
    return [res.join("").repeat(repeatTimes), j];
};

const dec = (str, start = 0) => {
    let res = [];
    let num = [];
    let i;
    for (i = start; i < str.length; i++) {
        let c = str[i];
        if (isNum(c)) {
            num.push(c);
        } else if (c === "[") {
            let localRes = repeatString(str, parseInt(num.join(""), 10), i);
            res.push(localRes[0]);
            num = [];
            i = localRes[1];
        } else if (num.length === 0) {
            break;
        }
    };

    return [res.join(""), i];
};

export const decompress = (str) => {
    return dec(str)[0];
};
