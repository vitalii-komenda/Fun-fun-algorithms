// matrix 9*9
// https://jsbin.com/paminob/edit?js,console

const solveSudoku = function (board) {
    const original = JSON.parse(JSON.stringify(grid));

    const checkSquare = (grid, row, col) => {
        let n = Math.sqrt(size);
        row = (Math.ceil(row / n) * n) - n;
        col = (Math.ceil(col / n) * n) - n;
        const h = {};
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                const val = grid[row + r][col + c];
                if (val !== '.' && h[val]) return false;
                h[val] = val;
            }
        }

        return true;
    };

    const valid = (board, r, c) => {
        let hash = {};
        for (let h = 0; h < board.length; h++) {
            if (board[r][h] !== '.' && hash[board[r][h]]) return false;
            hash[board[r][h]] = true;
        }

        hash = {};
        for (let v = 0; v < board[0].length; v++) {
            if (board[v][c] !== '.' && hash[board[v][c]]) return false;
            hash[board[v][c]] = true;
        }

        return checkSquare(board, r + 1, c + 1);
    };

    const solve = (board, r = 0, c = 0, ii = 1) => {
        if (r >= board.length || c >= board[0].length) return true;

        let nextC;
        let nextR;

        for (let i = ii; i < 10; i++) {
            if (original[r][c] === '.') board[r][c] = i;

            nextC = c + 1;
            nextR = r;
            if (nextC >= board[0].length) {
                nextC = 0;
                nextR++;
            };
            if (nextR >= board.length) return valid(board, r, c);

            if (valid(board, r, c)) {
                if (solve(board, nextR, nextC, 1)) return true;
            } else {
                if (original[r][c] === '.') board[r][c] = '.';
            }
        }

        return false;
    }

    return solve(board);
};
