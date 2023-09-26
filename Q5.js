let arr = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5]

function findRepeatedNumbers(arr = []) {
    let tempArray = []
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        tempArray[arr[i]] = tempArray[arr[i]] ? tempArray[arr[i]] + 1 : 0 + 1
    }
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] > max) {
            max = i
        }
    }
    return `${max} is repeated ${tempArray[max]} times`
}

findRepeatedNumbers(arr)