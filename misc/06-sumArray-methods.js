//  given an array of numbers, return the total of of the numbers, demonstrating use of a 'for' loop, a 'while' loop, and recursion.

var numbers = [1, 5, 29, 3];

function forLoop(numArray) {
  if (!Array.isArray(numArray)) return false;  // handle invalid input
  var sumTotal = 0;
  for (let i = 0; i < numArray.length; i++) {
    const element = numArray[i];
    if (isNaN(element)) continue;  // ignore invalid input
    sumTotal += numArray[i];
  }
  return sumTotal;
}

function whileLoop(numArray) {
  if (!Array.isArray(numArray)) return false; // handle invalid input
  var sumTotal = 0, i = 0;
  do {
    if (!isNaN(numArray[i])) sumTotal += numArray[i]; // ignore invalid input
    i++;
  } while (i < numArray.length);
  return sumTotal;
}


// One way to do it:
// .slice(1) returns the array without the first element.
function recursion(numArray) {
  if (!Array.isArray(numArray)) return false;  // handle invalid input
  if (numArray.length === 0) return 0; 
  return numArray[0] + recursion(numArray.slice(1));
}

// Another way: 
// the .pop() method returns the last element and removes it from the array.
function recursionPop(numArray) {
  if (!Array.isArray(numArray)) return false;  // handle invalid input
  var num = numArray.pop();
  return num + recursion(numArray);
}


console.log(forLoop(numbers));
console.log(whileLoop(numbers));
console.log(recursion(numbers));
console.log(recursionPop(numbers));