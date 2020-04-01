/**
 * https://leetcode-cn.com/problems/house-robber/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  let dp = new Array(nums.length).fill(0);
  
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[nums.length - 1];
};

console.log(rob([1,2,3,1]))