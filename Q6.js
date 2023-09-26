let arr = [3, 8, 9, 7, 6]

function rotateArray(arr = []) {
    let tempArray = Array.from({ length: arr.length }); for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
            tempArray[i + 1] = arr[i]
        } else {
            tempArray[0] = arr[i]
        }
    }
    return tempArray
}

rotateArray(arr)