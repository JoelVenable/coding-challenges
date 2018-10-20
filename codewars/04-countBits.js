// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.  

// Example: 1234 is 10011010010 in binary, so the function should return 5.

var countBits = function (n) {
  str = n.toString(2);
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) count++;
    
  }
  return count;
};


console.log(countBits(4));
console.log(countBits(16));
console.log(countBits(7));
console.log(countBits(4));