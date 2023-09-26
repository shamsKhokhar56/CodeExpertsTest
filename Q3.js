
let arr = [3, 7, 1, 5, 11, 19]

function largestSum(arr = []) {
    let num1 = -Infinity
    let num2 = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num1) {
            num2 = num1
            num1 = arr[i]
        } else if (arr[i] > num2 && arr[i] !== num1) {
            num2 = arr[i]
        }
    }
    return num1 + num2
}

largestSum(arr)