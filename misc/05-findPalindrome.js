// A palindromic number reads the same both ways (i.e. 9009).  The largest palindrome made from the product of two 2-digit numbers is 9009.  Find and return the largest palindrome made from the product of two 3-digit numbers in the following format: 

// a. first3DigitNumber * second3DigitNumber = largestPalindrome
// b. i.e. for the 2 digit number it would be "91 * 99 = 9009"




// How I plan to solve:  
// Make nested for loop 
// Iterate each number down from 999,
// Check if product is a palindrome.  If so, add to array and exit loop.
// Find largest palindrome in array.


function isPal(num1, num2) {
  var prod = num1 * num2;
  if (prod.toString() === rev(prod.toString())) return true;
  else return false;

}

function rev(str) {
  return str.split('').reverse().join('');
}


function makePalindromes() {
  var palArray = {
    num1: [],
    num2: [],
    pal: []
  },
    i = 0;
  for (let num1 = 999; num1 > 800; num1--) {
    for (let num2 = 999; num2 > 800; num2--) {
      if (isPal(num1, num2)) {
        palArray.num1.push(num1);
        palArray.num2.push(num2);
        palArray.pal.push(num1 * num2);
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
      }
    }      
  }

  console.log(Math.max(...palArray.pal));
  i = palArray.pal.indexOf(Math.max(...palArray.pal));
  console.log(`${palArray.num1[i]} * ${palArray.num2[i]} = ${palArray.pal[i]}`);
}

makePalindromes();