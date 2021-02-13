export function knapSackDP(capacity: number, weights: number[], values: number[], n: number): number {
    const ks: number[][] = [];

    for (let i = 0; i <= n; i++) {
        ks[i] = [];
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                ks[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                const a = values[i - 1] + ks[i - 1][w - weights[i - 1]];
                const b = ks[i - 1][w];
                ks[i][w] = a > b ? a : b;
            } else {
                ks[i][w] = ks[i - 1][w];
            }
        }
    }
    findValues(n, capacity, ks, weights, values);

    return ks[n][capacity];
}

function findValues(n: number, capacity: number, ks: number[][], weights: number[], values: number[]) {
    let [i, k] = [n, capacity];
    // console.log('Items that are part of the solution:');
    while (i > 0 && k > 0) {
        if (ks[i][k] !== ks[i - 1][k]) {
            console.log('item ' + i + 'can be part of solution w,v: ' + weights[i - 1] + ',' + values[i - 1]);
            i--;
            k -= ks[i][k];
        } else {
            i--;
        };
    }
}