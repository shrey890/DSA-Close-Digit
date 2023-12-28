// function wordSearch(board, word) {
//     const rows = board.length
//     const cols = board[0].length
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (board[i][j] === word[0] && dfs(board, word.substr(1), i, j, rows, cols)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// function dfs(board, word, row, col, rows, cols) {
//     if (word.length === 0) {
//         return true
//     }
//     if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[0]) {
//         return false
//     }
//     board[row][col] = '*'
//     const found = dfs(board, word.substr(1), row + 1, col, rows, cols) ||
//         dfs(board, word.substring(1), row - 1, col, rows, cols) ||
//         dfs(board, word.substring(1), row, col + 1, rows, cols) ||
//         dfs(board, word.substring(1), row, col - 1, rows, cols)
//     board[row][col] = word[0]
//     return found
// }
// const board = [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
// ]
// const word = 'ABCCED'
// const result = wordSearch(board, word)
// console.log(result)
// !----------
function DFS(board, row, col, rows, cols, word, cur) {
    if (row >= rows || row < 0) return false;
    if (col >= cols || col < 0) return false;
    const item = board[row][col];
    if (item !== word[cur]) return false;
    if (cur + 1 === word.length) return true;
    board[row][col] = null;
    const res =
        DFS(board, row + 1, col, rows, cols, word, cur + 1) ||
        DFS(board, row - 1, col, rows, cols, word, cur + 1) ||
        DFS(board, row, col - 1, rows, cols, word, cur + 1) ||
        DFS(board, row, col + 1, rows, cols, word, cur + 1);
    board[row][col] = item;
    return res;
}
var exist = function (board, word) {
    if (word.length === 0) return true;
    if (board.length === 0) return false;
    const rows = board.length;
    const cols = board[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const hit = DFS(board, i, j, rows, cols, word, 0);
            if (hit) return true;
        }
    }
    return false;
};
const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
const word = 'ABCCED';
const wordExists = exist(board, word);
console.log(wordExists); 
