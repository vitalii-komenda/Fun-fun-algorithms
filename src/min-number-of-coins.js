const minNumberOfCoins = (coins, sum) => {
    const min = Array.from(new Array(sum + 1), () => 0);

    for(let i=1; i <= sum; i++) {
        for(let j = 0; j < coins.length; j++) {
            let coin = coins[j];
            let prev = min[Math.abs(i - coin)];
            let isPrevSmaller = (prev + 1 < min[i]) || min[i] === 0;

            if (coin <= i && isPrevSmaller) {
                min[i] = prev + 1;
            } else if (coin === i) {
                min[i] = V[0];
            }
        }
    }
    return {
        sequence: min,
        sum: min[min.length - 1]
    };
}
// minNumberOfCoins([1, 3, 5], 11);
