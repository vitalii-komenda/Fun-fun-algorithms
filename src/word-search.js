/*
 * Given a 2D board and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell, 
 * where "adjacent" cells are those horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once.
 *
 * board =
 *[
 * ['A','B','C','E'],
 * ['S','F','C','S'],
 * ['A','D','E','E']
 * ]
 *
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 */



const key = (r, c) => `${r}-${c}`;
const isValid = (board, r, c) => board.length > r && r >= 0 && 
      board[0].length > c && c >= 0

const exist = function(board, word) {
    const inspect = (board, word, r, c, path = {}) => {
        if (!word.length) return true;
        if (path[key(r, c)]) return false;
        if (!isValid(board, r, c)) return false;
        if (board[r][c] !== word[0]) return false;

        const nPath = {...path, [key(r, c)]: true};
        const nWord = word.slice(1);
        
        return inspect(board, nWord, r+1, c, nPath) ||
            inspect(board, nWord, r, c+1, nPath) ||
            inspect(board, nWord, r-1, c, nPath) ||
            inspect(board, nWord, r, c-1, nPath)
    }

    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            if (board[r][c] === word[0]) {
                if (inspect(board, word, r, c)) return true;
            }
        }
    }
    return false
};

export default exist;
