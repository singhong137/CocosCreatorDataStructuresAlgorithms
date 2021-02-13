const { ccclass, property } = cc._decorator;

@ccclass
export default class RecursiveTest extends cc.Component {
    start(){
        console.log('RecursiveTest~~');

        const factorial = (n: number): number => {
            if (n === 1 || n === 0) return 1;
            return n * factorial(n - 1);
        }
        console.log('factorial ', factorial(5));

        const fibonacciIterative = (n: number): number => {
            if (n < 1) return 0;
            let [fibNMinus2, fibNMinus1, fibN] = [0, 1, n];
            for (let i: number = 2; i <= n; i++) {
                fibN = fibNMinus1 + fibNMinus2;
                fibNMinus2 = fibNMinus1;
                fibNMinus1 = fibN;
            }
            return fibN;
        }
        console.log('fibonacciIterative ', fibonacciIterative(5));

        const fibonacci = (n: number): number => {
            if (n < 1) return 0;
            if (n <= 2) return 1;
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        console.log('fibonacci ', fibonacci(5));

        const fibonacciMemorization = (n: number): number => {
            if (n < 1) return 0;
            const memo = [0, 1];
            console.log(memo);
            const fibonacciMem = (num: number): number => {
                if (memo[num] != null) return memo[num];
                return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
            }
            return fibonacciMem(n);
        }
        console.log('fibonacciMemorization ', fibonacciMemorization(5));
    }
}