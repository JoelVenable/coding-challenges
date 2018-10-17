function reverseArrayInPlace(arr) {
  // reverse array
  // return reversed array

  // DO NOT MAKE A NEW ARRAY.  DO NOT USE array.reverse();

  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;

}

console.log(reverseArrayInPlace(['hello', 'billy', 'bob', 'thornton']));
