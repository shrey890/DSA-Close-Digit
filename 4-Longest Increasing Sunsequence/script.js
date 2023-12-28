function longX(arr) {
    const dp = new Array(arr.length).fill(1)
    let maxLen = 1
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
            }
        }
        maxLen = Math.max(maxLen, dp[i])
    }
    return maxLen
}
console.log(longX([10, 22, 9, 33, 21, 50, 41, 60, 80]))