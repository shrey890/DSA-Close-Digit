const sumOfSubarray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        for (let j = i; j < arr.length; j++) {
            min = Math.min(min, arr[j])
            sum += min
        }
    }
    return sum
}
const arr = [3, 1, 2, 4]
const result = sumOfSubarray(arr)
console.log(result)