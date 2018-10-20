// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers.  

function arrayMin(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1) arr.splice(i, 1);
  }
  return arr.splice(arr.indexOf(Math.min(...arr)), 1)[0] + Math.min(...arr);
}

console.log(arrayMin([1, 5, 2, 6]));