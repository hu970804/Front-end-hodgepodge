/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 动态规划
// var fib = function(N) {
//   let dp = new Array(N + 1).fill(0);
//   dp[2] = dp[1] = 1;

//   for (let i = 3; i <= N; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[N];
// };

// 递归
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if ( n < 2) return n;

  return fib(n - 1) + fib(n - 2);
};
// @lc code=end

