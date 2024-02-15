/**
 * https://leetcode.com/problems/valid-sudoku/description/
 * 
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * 
 * Note:
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 * 
 * 
 * Input: board = [["5","3",".",".","7",".",".",".","."]
 *                ,["6",".",".","1","9","5",".",".","."]
 *                ,[".","9","8",".",".",".",".","6","."]
 *                ,["8",".",".",".","6",".",".",".","3"]
 *                ,["4",".",".","8",".","3",".",".","1"]
 *                ,["7",".",".",".","2",".",".",".","6"]
 *                ,[".","6",".",".",".",".","2","8","."]
 *                ,[".",".",".","4","1","9",".",".","5"]
 *                ,[".",".",".",".","8",".",".","7","9"]]
 * 
 * Output: true
 * 
 * Time complexity: O(9^2)
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // track the rows of the full grid to detect dupes
  rows = new Map();
  // track the columns of the full grid to detect dupes
  cols = new Map();  
  // track the values within each 3X3 square
  squares = new Map();
    
  for (let r = 0; r < 9; r++) {     // for each row
    for (let c = 0; c < 9; c++) {   // and each column
      // skip if the value is a "."
      if (board[r][c] !== ".") {
        // calculate the key for the current 3X3 square
        // each 3X3 square is located within a larger grid: 00, 01, 02, 10, 11, 12, 20, 21, 22
        let currentSquareKey = JSON.stringify(Math.floor(r/3)) + JSON.stringify(Math.floor(c/3));
        
        // determine if the current value already exists within the row, column, or 3X3 square
        if ((rows.has(r) && rows.get(r).indexOf(board[r][c]) > -1) || 
            (cols.has(c) && cols.get(c).indexOf(board[r][c]) > -1) || 
            (squares.has(currentSquareKey) && squares.get(currentSquareKey).indexOf(board[r][c]) > -1)) {
          // duplicate detected => invalid Sudoku solution
          return false;
        } else {
          // add the current value to the row, column and 3X3 square hashmaps
          rows.set(r, rows.get(r) ? (rows.get(r) + board[r][c] + ",") : board[r][c] + ",");
          cols.set(c, cols.get(c) ? (cols.get(c) + board[r][c] + ",") : board[r][c] + ",");
          squares.set(currentSquareKey, squares.get(currentSquareKey) ? squares.get(currentSquareKey) + board[r][c] + "," : board[r][c] + ","); 
        }
      }
    }
  }

  // if we reached this point, our Sudoku solution is valid
  return true;
};

// console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
//                           ,["6",".",".","1","9","5",".",".","."]
//                           ,[".","9","8",".",".",".",".","6","."]
//                           ,["8",".",".",".","6",".",".",".","3"]
//                           ,["4",".",".","8",".","3",".",".","1"]
//                           ,["7",".",".",".","2",".",".",".","6"]
//                           ,[".","6",".",".",".",".","2","8","."]
//                           ,[".",".",".","4","1","9",".",".","5"]
//                           ,[".",".",".",".","8",".",".","7","9"]]));

// console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
//                           ,["6",".",".","1","9","5",".",".","."]
//                           ,[".","9","8",".",".",".",".","6","."]
//                           ,["8",".",".",".","6",".",".",".","3"]
//                           ,["4",".",".","8",".","3",".",".","1"]
//                           ,["7",".",".",".","2",".",".",".","6"]
//                           ,[".","6",".",".",".",".","2","8","."]
//                           ,[".",".",".","4","1","9",".",".","5"]
//                           ,[".",".",".",".","8",".",".","7","9"]]));

console.log(isValidSudoku([[".",".",".",".",".",".","5",".","."],
                           [".",".",".",".",".",".",".",".","."],
                           [".",".",".",".",".",".",".",".","."],
                           ["9","3",".",".","2",".","4",".","."],
                           [".",".","7",".",".",".","3",".","."],
                           [".",".",".",".",".",".",".",".","."],
                           [".",".",".","3","4",".",".",".","."],
                           [".",".",".",".",".","3",".",".","."],
                           [".",".",".",".",".","5","2",".","."]]));                          