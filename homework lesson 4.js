
//create a string variable, it can contain anything
const newString = raza ;

//create a number variable, it an be any number
const newNum = 12 ;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the fun//In these first 6 questions, replace `null` with the answer
ction. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
  return returnString;
}
returnString();

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  const add=x+y;
   return add;
}
add(2,5);


function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const subtract=x-y;
  return subtract;
}
subtract(9-3);

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const multiply=x*y;
  return multiply;
}
multiply(3*5);

function divide(x, y) {
  // divide x by y and return the value
  // code here
  const divide=x/y;
  return divide;
}
divide(3/6);

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if(areEqual && x === y){
    return true;
  }
  {
    return false;
  }
}
areEqual(12, 34);

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if(str1.length === str2.length){
    return true;
  }
  {
    return false;
  }
}
areSameLength('Raza Muhammad','MuhammadRaza');

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  if(num <90){
    return true;
  }
  {
    return false;
  }
}
lessThanNinety(50);

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if(num >50){
    return true;
  }
  {
    return false;
  }
}
greaterThanFifty(40);

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  let getremainder=x/y;
  return getremainder;
}
getRemainder(2, 5);

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if(num %2 ===0){
    return true;
  }
  {
  return false;
  }
}
isEven(12);

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  if(num % 2 !==0){
    return true;
  }
  {
    return false;
  }
}
isOdd(9);

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  return num*num;
}
square(2, 2);

function cube(num) {
  // cube num and return the new value
  // code here
return Math.pow(num, 3);
}
cube(4);

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here

 return Math.pow(num, exponent);
}
raiseToPower(2,4);

function roundNumber(num) {
  // round num and return it
  // code here
  return Math.round(num);
}
roundNumber(4.6);

function roundUp(num) {
  // round num up and return it
  // code here
  return Math.ceil(num);
}
roundUp(3.9);

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  return str + '!';
}
addExclamationPoint('RAZA');

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  return ('Lambda'+','+'school' + ' -> ' + 'Lambda School');
}
combineNames();
function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here

 return ('sam' + ' -> ' + name + 'Hello Sam!');
}
getGreeting(name);

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  let getRectangleArea=length*width;
  return getRectangleArea;
}
getRectangleArea(3, 7);

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  let getTriangleArea= 0.5 * base * height;
  return getTriangleArea;
}
getTriangleArea(5, 6);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
