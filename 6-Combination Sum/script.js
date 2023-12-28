let combinationSum = function (candidates, target) {
    const dp = new Array(target + 1).fill().map(() => [])
    dp[0] = [[]]
    for (const candidate of candidates) {
        for (let i = candidate; i <= target; i++) {
            for (const combination of dp[i - candidate]) {
                dp[i].push([...combination, candidate])
            }
        }
    }
    return dp[target]
}
const result = combinationSum([2, 3, 6, 7], 7);
console.log(result);
