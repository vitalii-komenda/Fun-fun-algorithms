const arr = [12, 1, 2,3,7 ,5, 12];
const s = 12;

const flsa = (a, s) => {
    let p1 = 0;
    let p2 = 0
    let sum = a[p1];

    let res = [];

    while(p1 < a.length) {
        if (sum === s) {
            res.push([p1, p2-1 < 0 ? 0 : p2-1]);
            sum -= a[p1];
            p1++;
            if (p2<p1) p2 = p1; 
        } else if (sum < s) {
            if(p2 < a.length) {
                sum += a[p2];
                p2++;
            } else {
                p1++;
            }
        } else if (sum > s) {
            sum -= a[p1];
            p1++;
        }
    }
    return res;
};
// flsa(arr, s)
