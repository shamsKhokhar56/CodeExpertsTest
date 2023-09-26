let arr = [3, 4, 9, 1, 7, 3, 2, 6]

function findMissingNumbers(arr = []) {
    let tempArray = []
    let missingNumbers = []
    for (let i = 0; i < arr.length; i++) {
        tempArray[arr[i]] = arr[i]
    }
    for (let i = 0; i < tempArray.length; i++) {
        if (!tempArray[i]) {
            missingNumbers.push(i)
        }
    }
    return missingNumbers
}

findMissingNumbers(arr)