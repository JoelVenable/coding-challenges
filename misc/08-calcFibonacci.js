// This function calculates the first 'x' fibonacci numbers (the sum of the previous two numbers in the sequence).


function calcFib(x) {
  if (x.isNaN()) return false;
  var fibArray = [0, 1];
  do {
    var newNum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(newNum);
  } while (fibArray.length < x);
  return fibArray;
}

console.log(calcFib("b"));