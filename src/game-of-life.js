/* 
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 * Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
 * Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 * Any live cell with two or three live neighbors lives on to the next generation.
 * Any live cell with more than three live neighbors dies, as if by over-population..
 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
*/

const isOutBound = (b, r, c) => {
    if (r >= b.length) return true;
    if (r < 0) return true;
    
    if (c >= b[0].length) return true;
    if (c < 0) return true;
};

const sides = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1]
];


/**
 * Time and Space Complexity O(R * C), where R is amount of rows and C is amount of columns
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
    const bCopy = JSON.parse(JSON.stringify(board));

    for(let r=0; r<board.length; r++) {
        for(let c=0; c<board[0].length; c++) {
            
            let alive = 0;
            for(let s = 0; s<sides.length; s++) {
                const newR = sides[s][0] + r;
                const newC = sides[s][1] + c;
                
                if (isOutBound(bCopy, newR, newC)) {
                    continue;
                } else if (bCopy[newR][newC] === 1) {
                    alive += 1;
                }
            }
            if (alive < 2) {
                board[r][c] = 0;
            } 
            // else if (alive >= 2 && alive <= 3) { 
            else if (alive > 3) {
                board[r][c] = 0;
            } else if (alive === 3 && bCopy[r][c] === 0) {
                board[r][c] = 1;
            }
        }
    }
};
