//String to array:
strToArr = (data) => {
    let arrOfStr = data.split(',')
    for (let i = 0; i < arrOfStr.length; i++) {
        arrOfStr[i] = parseInt(arrOfStr[i]);
    }
    return arrOfStr;
}

//Read input function:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
// const arrSum = arr => arr.reduce((a,b) => a + b, 0)

//Play the game:
readline.question(`Input int array A (example: 1,3,5,7,...): `, (numA) => {
    readline.question(`Input int array B (example: 3,7,...): `, (numB) => {
        let A = strToArr(numA)
        let B = strToArr(numB)
        let w = []
        for (let j = 0; j < B.length; j++) {
            w.push(A.includes(B[j]))
        }
        // console.log(w)
        console.log(`Is B subarray of A?`)
        if (w.includes(false)) {
            console.log(false)
        } else {
            console.log(true)
        }
        readline.close()
    })
})