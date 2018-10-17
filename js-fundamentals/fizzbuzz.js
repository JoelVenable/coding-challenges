function fizzBuzz(num) {
  var output = num;
  if (num % 3 == 0) {
    output = 'fizz';
  } else if (num % 5 == 0) {
    output = 'buzz';
  }

  if (num % 3 == 0 && num % 5 == 0) {
    output = 'fizzBuzz';
  }

  return output;
}






for (let i = 1; i < 21; i++) {
  console.log(fizzBuzz(i));
}