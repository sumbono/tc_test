//Fibonacci function:
fibonacciSeries = (n) => {
    if (n==1) {
      return [0, 1];
    }
    else {
      let s = fibonacciSeries(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
};

//Prime number function:
getPrimeNum = (n) => {
    for(var x = 2; x < n; x++){
        if(n % x === 0){
            return false;
        }
    }
    return true;
}

//Other function:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const arrSum = arr => arr.reduce((a,b) => a + b, 0)

//Play the game:
readline.question(`Get the first n Fibonacci numbers & SUM of its prime number.
Input n (with n>0): `, (num) => {
    let fibSeries = fibonacciSeries(num),
        primeFib = [];

    for (let i = 0; i < fibSeries.length; i++) {
        const el = fibSeries[i];
        //check is n is prime number or not
        if (getPrimeNum(el)) { primeFib.push(el) }
    }

    console.log('========================================');
    console.log(`${num} Fibonacci series are:`)
    console.log(fibSeries)
    console.log('========================================');
    console.log(`Prime numbers of ${num} Fibonacci series are:`)
    console.log(primeFib)
    console.log('========================================');
    console.log(`SUM of prime number of ${num} fibonacci series is: ${arrSum(primeFib)}`)
    console.log('========================================');
    readline.close()
})