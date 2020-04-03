/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  if (grid.length === 0) return 0;
  let dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j]
      } else if (i === 0) {
        dp[i][j] = dp[i][j-1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i-1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i-1][j] + grid[i][j], dp[i][j-1] + grid[i][j]);
      }
    }
  }
  return dp[n-1][m-1];
};

minPathSum([[1,1,1],[1,1,1]]);