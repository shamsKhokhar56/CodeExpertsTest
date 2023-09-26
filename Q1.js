
let arr = [3, 2, 7, 4, 6, 9]

function sort(arr = []) {
    let tempArray = []
    let sortedArray = []
    for (let i = 0; i < arr.length; i++) {
        tempArray[arr[i]] = arr[i]
    }
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] || tempArray[i] === 0) {
            sortedArray.push(tempArray[i])
        }
    }
    return sortedArray
}

sort(arr)