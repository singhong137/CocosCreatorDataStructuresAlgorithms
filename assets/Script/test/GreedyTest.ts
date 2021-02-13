import { knapSackGreedy } from "../algorithms/greedy/knapsackGreedy";
import { minCoinChangeGreedy } from "../algorithms/greedy/min-coin-changeGreedy";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GreedyTest extends cc.Component {
    start(){
        console.log('Greedy Test~~~');

        console.log('minCoinChangeGreedy [1, 5, 10],15: ', minCoinChangeGreedy([1, 5, 10], 15));
        console.log('minCoinChangeGreedy [1, 3, 4],6: ', minCoinChangeGreedy([1, 3, 4], 6));

        const values = [3, 4, 5];
        const weights = [2, 3, 4];
        const capacity = 6;

        console.log('KnapSackGreedy: ', knapSackGreedy(capacity, weights, values));
    }
}