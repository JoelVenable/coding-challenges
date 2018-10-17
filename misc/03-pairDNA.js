// The DNA strand is missing its pairing element.  Take each character,
// get its pair, and return the results as a nested array.  
// Base pairs are AT and CG.  Match the missing element to the provided 
// character and return the provided character as the first element in each array.

var str = "TTGAG";

function pairDNA(str) {
  if (typeof str != "string") return false;  // handle invalid input
  // if there are other invalid characters contained in the string they are ignored.
  var outStr = [],
    splitStr = str.split(''),
    valueToAdd = [];
  for (let i = 0; i < splitStr.length; i++) {
    const currStrand = splitStr[i];
    switch (currStrand.toUpperCase()) {
      case 'G':
        valueToAdd = ["G", "C"];
        break;
      case "C":
        valueToAdd = ["C", "G"];
        break;
      case "A":
        valueToAdd = ["A", "T"];
        break;
      case "T":
        valueToAdd = ["T", "A"];
    }
    outStr[i] = valueToAdd;
  }
  return outStr;

}

console.log(pairDNA(str));


