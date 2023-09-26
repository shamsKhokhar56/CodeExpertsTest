let string = "doctor"

function checkPalindrome(string = '') {
    let array = []
    for (let i = 0; i < string.length; i++) {
        array.push(string[i])
    }
    let mid = parseInt(array.length / 2)
    let length = array.length
    if (length % 2 === 0) return false
    for (let i = 0; i < length; i++) {
        if (i === mid) return true
        if (array[i] != array[(length - 1) - i]) return false
    }
}

checkPalindrome(string)