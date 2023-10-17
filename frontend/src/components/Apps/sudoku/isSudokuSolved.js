export default function isSudokuSolved(grid) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid[i][j] === 0) {
                return false;
            }
        }
    }
    // Check each row
    for (let row = 0; row < 9; row++) {
        let seen = new Set();
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] !== 0) {
                if (seen.has(grid[row][col])) {
                    return false;
                }
                seen.add(grid[row][col]);
            }
        }
    }
    // Check each column
    for (let col = 0; col < 9; col++) {
        let seen = new Set();
        for (let row = 0; row < 9; row++) {
            if (grid[row][col] !== 0) {
                if (seen.has(grid[row][col])) {
                    return false;
                }
                seen.add(grid[row][col]);
            }
        }
    }

    for (let row = 0; row < 9; row+=3) {
        for (let col = 0; col < 9; col+=3) {
            if(!is_subgrid_correct(row,col,grid)){
                return false;
            }
        }
    }
    return true;

}

function is_subgrid_correct(row, col, grid) {
    let seen = new Set();
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            if (seen.has(grid[i][j])) {
                return false;
            }
            seen.add(grid[i][j]);
        }
    }
    return true;
}