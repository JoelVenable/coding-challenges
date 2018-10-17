//  This function takes a number 'x' and adds all the numbers from 1 to x.

// For example, if x = 4, the result is 1 + 2 + 3 + 4 = 10.  

// X can be any number from 1 to 1000.


function plusNum(x) {
  if (typeof (x) != 'number' || x < 1 || x > 1000) return false;  // handle invalid input.

  var num = 0;
  for (let i = 1; i < x + 1; i++) {
    num += i;
  }
  return num;
}

console.log(plusNum("blubber"));
console.log(plusNum(0));
console.log(plusNum(140));
console.log(plusNum(473));
