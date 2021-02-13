export function minCoinChangeDP(coins: number[], amount: number): number[] {
    const cache: number[][] = [];

    const makeChange = (amount: number): number[] => {
        if (!amount) return [];
        if (cache[amount]) return cache[amount];
        let min: number[] = [];
        let newMin: number[];
        let newAmount = 0;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            newAmount = amount - coin;
            if (newAmount >= 0) newMin = makeChange(newAmount);
            if (newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                // console.log('newMin: ', newMin.toString(), ' newAmount: ', newAmount);
                console.log('new Min ' + min + ' for ' + amount);
                // console.log('cache: ',cache);
            }
        }
        return cache[amount] = min;
    };

    return makeChange(amount);
}
