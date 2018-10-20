// Given an array of integers.  Take that array and find an index N where:

// the sum arr[0...(n-1)] == sum of arr[(n+1)...arr.length] 

// Return the array index, or if the array does not work return '-1'.

var test1 = [1, 2, 3, 4, 3, 2, 1],
  test2 = [1, 2, 3, 3, 2, 1];  

function findEvenIndex(arr) {
  var e = (el, sum) => el + sum;
  for (let i = 1; i < arr.length-1; i++) {
    if (arr.slice(0, i).reduce(e) === arr.slice(i + 1).reduce(e)) return i;    
  }
  return -1;  
}



console.log(findEvenIndex(test1));  // 3
console.log(findEvenIndex(test2));  // -1