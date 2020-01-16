// https://leetcode.com/problems/surrounded-regions/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const canBeCaptured = (board, row, c, g = [], v = {}) => {
    if (v[`${row}-${c}`]) return v[`${row}-${c}`];
    v[`${row}-${c}`] = true;
    
    if (row > board.length-1 ||
       row < 0 ||
       c > board[0].length-1 ||
       c < 0) {
        return true;
    }
    
    if (row === board.length-1 ||
       row === 0 ||
       c === board[0].length-1 ||
       c === 0) {
        return board[row][c] === 'X';
    }
    
    if (board[row][c] === 'X') {        
        return true;
    }
    
    g.push({row, c});
    
    return canBeCaptured(board, row-1, c, g, v) &&
         canBeCaptured(board, row+1, c, g, v) &&
         canBeCaptured(board, row, c-1, g, v) &&
         canBeCaptured(board, row, c+1, g, v);
};

const markVisitedWell = (board, regions) => {
    regions.forEach((region) => {
        board[region.row][region.c] = 'X';
    });  
};

const solve = function(board) {
    for(let row=0; row<board.length; row++){
        for(let c=0; c<board[0].length; c++){
            if (board[row][c] === 'O') {
                const g = [];
                const canBe = canBeCaptured(board, row, c, g);
                
                if (canBe) {
                    board[row][c] = 'X';
                    markVisitedWell(board, g)
                }
            }
        }
    }
};
