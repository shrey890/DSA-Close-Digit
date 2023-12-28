const maxSubarraySum = (arr) => {
    let maxSum = -Infinity
    let currSum = 0
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i]
        maxSum = Math.max(maxSum, currSum)
        if (currSum < 0) {
            currSum = 0
        }
    }
    return maxSum
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubarraySum(arr))