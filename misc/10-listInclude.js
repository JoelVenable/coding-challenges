//  Does my list (arr) include this 'item'?


function include(arr, item) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) return true;
    
  }
  return false;
}


// Testing...

console.log(include([1, 2, 3, 4], 3));   // true
console.log(include([1,2,3,5], 4));  // false