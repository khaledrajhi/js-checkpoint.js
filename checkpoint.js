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
        if arr[i]>max {
    max=arr[i]

        }
    }
    return max ;
}



function findmin (arr){
    let min = arr[0] ;
    for ( let i=1 ; i < arr.length ; i++ ) {
        if arr[i] < min {
    min = arr[i] 
        } 

    }
return min
}




//////////////////////////////////////////////////////////////////

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}



}




///////////////////////////////////////////////////////////////////

function filterArray(arr, condition) {
    return arr.filter(condition);
}


function filterArray(arr, n) {
    arr=[1,2,4,7,-9,-8]
    let array = arr.filter(element => element > n);
    return array;
  console.log(array)
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


//////////////////////////////////////////////////////////////////////


fonction isprime(num)
for (let i = 2; i < num; i++) { // Check divisibility from 2 to num - 1
    if (num % i === 0) {
        return false; // If num is divisible by i, it's not prime
    }
}

return true; // If no divisors found, it's prime