function reverseString(s) {
    var reversedStr = ""; 
    for (let i = s.length - 1; i >= 0; i--) { 
        reversedStr += s[i]; 
    }
    return reversedStr; 
}

console.log(reverseString("khaled"))








///////////////////////////////////////////////////////////////////////////
function CountCharacters(s) {
    return s.length
}
console.log(CountCharacters("khaled"))



///////////////////////////////////////////////////////////////////////////










////////////////////////////////////////////////////////////////////////////

function findmax (arr){
    let max = arr[0] ;
    for (let i=1 ; i < arr.length ; i++ ) {
        if (arr[i]>max) {
    max=arr[i]

        }
    }
    return max ;
}

arr = [2,8,9,4,5,2]
console.log(findmax(arr))


function findmin (arr){
    let min = arr[0] ;
    for ( let i=1 ; i < arr.length ; i++ ) {
        if (arr[i] < min) {
    min = arr[i] 
        } 

    }
return min
}

arr = [2,8,9,4,5,2]
console.log(findmin(arr))


//////////////////////////////////////////////////////////////////

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

arr = [2,8,9,4,5,2]
console.log(sumArray(arr))






///////////////////////////////////////////////////////////////////

function filterArray(arr, condition) {
    return arr.filter(condition);
}


function filterArray(arr, n) {
    arr=[1,2,4,7,-9,-8]
    let array = arr.filter(element => element > n);
    return console.log(array);
}



///////////////////////////////////////////////////////////////////
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;  
    }
    return result;
}
n=7
console.log(factorial(n))

//////////////////////////////////////////////////////////////////////


function isprime(num) {

for (let i = 2; i < num; i++) { // Check divisibility from 2 to num - 1
    if (num % i === 0) {
        return false; // If num is divisible by i, it's not prime
    }
}

return true; // If no divisors found, it's prime

}

console.log(isprime(6))
console.log(isprime(7))





///////////////////////////////////////////////////////////////////
function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    // return arr.slice(0, n); 
    return arr;
}


console.log(fibonacci(7));









