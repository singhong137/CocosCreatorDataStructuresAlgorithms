const UNASSIGNED = 0;

export function sudokuSolver(grid: number[][]): number[][] | string {
    if (solveSudoku(grid) === true) {
        return grid;
    } else {
        return 'NO SOLUTION EXISTS!';
    }
}

function solveSudoku(grid: number[][]): boolean {
    let row = 0;
    let col = 0;
    let checkBlankSpaces = false;

    for (row = 0; row < grid.length; row++) {
        for (col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === UNASSIGNED) {
                checkBlankSpaces = true;
                break;
            }
        }
        if (checkBlankSpaces === true) break;
    }

    if (checkBlankSpaces === false) return true;

    for (let num = 1; num <= 9; num++) {
        if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;
            if (solveSudoku(grid)) return true;
        }
        grid[row][col] = UNASSIGNED;
    }

    return false;
}

function usedInRow(grid: number[][], row: number, num: number): boolean {
    for (let col = 0; col < grid.length; col++)if (grid[row][col] === num) return true;
    return false;
}

function usedInCol(grid: number[][], col: number, num: number): boolean {
    for (let row = 0; row < grid.length; row++)if (grid[row][col] === num) return true;
    return false;
}

function usedInBox(grid: number[][], boxStartRow: number, boxStartCol: number, num: number): boolean {
    for (let row = 0; row < 3; row++)for (let col = 0; col < 3; col++)if (grid[row + boxStartRow][col + boxStartCol] === num) return true;
    return false;
}

function isSafe(grid: number[][], row: number, col: number, num: number): boolean {
    return (!usedInRow(grid, row, num) && !usedInCol(grid, col, num) && !usedInBox(grid, row - row % 3, col - col % 3, num));
}