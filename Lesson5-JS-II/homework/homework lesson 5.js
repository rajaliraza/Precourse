// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
let total= multiplyArguments;
return total;
}
multiplyArguments();

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y){
    return x;
  }else
  
  {
  return y;
  }
  }
  getBiggest(45,17);

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German'){
    return 'Guten Tag';
  }else if (language === 'Mandarin'){
    return 'Ni Hao';
  }else if (language === 'Spanish'){
  return 'Hola';

}else{
  return 'Hello';
}
  }
greeting('German');

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num ===10 || num ===5){
  return true;
}
{
return false;
}
}
isTenOrFive(10, 5);

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if(num>=20 && num<=50){
    return true;
  }
return false;
}
  isInRange(12);


function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return num === math.floor(num);
    return true;
  }
  return false;
}
isInteger(5);

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  }else if (num % 3 === 0){
    return 'buzz';
  }else if(num % 5 === 0){
      return 'fizzbuzz';
    }
    else{
      return num;
    }
  }
fizzBuzz(3);

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if(num ===1 && num===0){

  return false;
}
for (let i=2; i<=num; i++){
if( num % i ===0 ){
    return false;
  }
}
return true;
}
isprime(11);


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
