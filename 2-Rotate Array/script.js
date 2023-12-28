const rotateArray = (array, steps) => {
    if (array === null || array.length === 0 || steps < 0) {
        throw new Error("Invalid input.");
    }
    const actualSteps = steps % array.length;
    const rotatedArray = new Array(array.length)
    for (let i = 0; i < array.length; i++) {
        rotatedArray[(i + actualSteps) % array.length] = array[i]
    }
    return rotatedArray
}
const array = [1, 2, 3, 4, 5]
const steps = 2
const rotatedArray = rotateArray(array, steps)
console.log(rotatedArray)