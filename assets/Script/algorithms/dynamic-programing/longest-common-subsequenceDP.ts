export function lcsDP(wordX: string, wordY: string): string {
    const m = wordX.length;
    const n = wordY.length;
    const l: number[][] = [];
    const solution: string[][] = [];

    for (let i = 0; i <= m; i++) {
        l[i] = [];
        solution[i] = [];
        for (let j = 0; j <= n; j++) {
            l[i][j] = 0;
            solution[i][j] = '0';
        }
    }

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                l[i][j] = 0;
            } else if (wordX[i - 1] === wordY[j - 1]) {
                l[i][j] = l[i - 1][j - 1] + 1;
                solution[i][j] = 'diagonal';
            } else {
                const a = l[i - 1][j];
                const b = l[i][j - 1];
                l[i][j] = a > b ? a : b;
                solution[i][j] = l[i][j] === l[i - 1][j] ? 'top' : 'left';
            }
        }
    }
    console.log('l,solution: ', l, solution)
    return printSolution(solution, wordX, m, n);
}

function printSolution(solution: string[][], wordX: string, m: number, n: number): string {
    let [a, b, answer] = [m, n, ''];
    let x = solution[a][b];

    while (x !== '0') {
        if (solution[a][b] === 'diagonal') {
            answer = wordX[a - 1] + answer;
            a--;
            b--;
        } else if (solution[a][b] === 'left') {
            b--;
        } else if (solution[a][b] === 'top') {
            a--;
        }
        x = solution[a][b];
    }
    return answer;
}