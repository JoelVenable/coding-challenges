var arr1 = [],
  arr2 = [1, 2, 3, 7, 9],
  arr3 = [1, 6],
  arr4 = null;

function test(arr) {
  if (!Array.isArray(arr) || arr === null) return true; // handle invalid input
  return false;
}

//  long form, with for loop.
function arrayProductOld(arr) {
  test(arr);
  var prod = 1;
  for (let i of arr) {
    prod *= arr[i];
  }
  return prod;
}
// works...



// let's try forEach() with an arrow function...
function arrayProductArrow(arr) {
  if (test(arr)) return null;
  var prod = 1;
  arr.forEach(el => prod *= el);
  return prod;
}
// works...


// how about recursion?
function arrayProduct(arr) {
  // breaks with strings that enter the function empty.  They should return null.
  if (test(arr)) return null;
  if (!arr.length) return 1;
  let num = arr.pop();
  return num * arrayProduct(arr);
}



function recursionPop(arr) {
  if (!Array.isArray(arr)) return false; // handle invalid input
  if (arr.length == 0) return 1;
  var num = arr.pop();
  return num + recursionPop(arr);
}

console.log(arrayProduct(arr1));
console.log(arrayProduct(arr2));
console.log(arrayProduct(arr3));
console.log(arrayProduct(arr4));