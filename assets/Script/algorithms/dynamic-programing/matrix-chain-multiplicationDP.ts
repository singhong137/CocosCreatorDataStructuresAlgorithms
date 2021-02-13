export function matrixChainOrder(p: number[]): number {
    const n = p.length;

    const m: number[][] = [];
    const s: number[][] = [];

    for (let i = 1; i <= n; i++) {
        m[i] = [];
        m[i][i] = 0;
    }

    for (let i = 0; i <= n; i++) {
        s[i] = [];
        for (let j = 0; j <= n; j++)s[i][j] = 0;
    }

    for (let l = 2; l < n; l++) {
        for (let i = 1; i < n - l + 1; i++) {
            const j = i + l - 1;
            m[i][j] = Number.MAX_SAFE_INTEGER;
            for (let k = i; k <= j - 1; k++) {
                const q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (q < m[i][j]) {
                    m[i][j] = q;
                    s[i][j] = k;
                }
            }
        }
    }

    let out = { s: '' };
    printOptimalParenthesis(s, 1, n - 1, out);

    console.log('m', m);
    console.log('s', s);

    console.log('MatrixChainOrder: ', out.s);

    return m[1][n - 1];
}

function printOptimalParenthesis(s: number[][], i: number, j: number, out: { s: string }) {
    if (i === j) {
        // console.log('A[' + i + ']');
        out.s += '[' + i + ']';
    } else {
        // console.log('(');
        out.s += '(';
        printOptimalParenthesis(s, i, s[i][j], out);
        printOptimalParenthesis(s, s[i][j] + 1, j, out);
        // console.log(')');
        out.s += ')';
    }
}