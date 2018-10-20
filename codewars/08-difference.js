// Difference function:  Subtract one list from another and return the result:

// remove all values from list 'a' that are present in list 'b'.

// EX:  ([1,2], [1]) == [2] 

// If a value is present in 'b', ALL OCCURRENCES must be removed:

// EX:  ([1,2,2,2,3], [2]) == [1,3]

function array_diff(a, b) {
  b.forEach(el => {
    a = a.filter(val => val !== el);
  });
  return a;
}

console.log(array_diff([1, 2, 3, 3], [3]));