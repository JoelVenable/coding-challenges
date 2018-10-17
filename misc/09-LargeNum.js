var numbers = [50, 55, 5, 2, 1, 9];

function makeLargeNum(numArr) {
  if (!Array.isArray(numArr) || numArr.length === 0) return null;
  var out = '',
    compare, index;

  function compareDigits(dig1, dig2) {
    const numStr = "9876543210".split(''),
      new1 = dig1.toString().split(''),
      new2 = dig2.toString().split('');
    var out, biggerNum = Math.max(new1.length, new2.length);

    for (let i = 0; i < biggerNum; i++) {
      var new1i = numStr.findIndex(el => el === new1[i]),
        new2i = numStr.findIndex(el => el === new2[i]);
      if (new1[i] === undefined) return dig1; // dig1 has fewer digits than dig2
      if (new2[i] === undefined) return dig2; // reverse of previous rule
      if (new1i < new2i) return dig1; // dig1 has larger of compared digits
      else if (new2i < new1i) return dig2; // dig2 has larger of compared digits
    }
    return dig1; // If we make it this far, both numbers are the exact same.
  }
  do {
    compare = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
      compare = compareDigits(compare, numArr[i]);
    }
    index = numArr.findIndex(el => el === compare);
    out += numArr.splice(index, 1).toString();
  } while (numArr.length > 1) 
  out += numArr[0];
  return Number(out);
}

console.log(makeLargeNum(numbers));

