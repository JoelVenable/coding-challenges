// Create a function that takes in a string and replaces each letter with the following letter.
// i.e. 'c' becomes 'd', 'z' becomes 'a'.  
// Then capitalize every vowel in the new string.
// Non-letter characters are passed through unmolested.


function letterReplace(str) {
  if (typeof str != "string") return false;  // handle invalid input
  num = 1;
  var lowerString = str.toLowerCase(),
    validChar = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    upperChar = 'aeiou'.split(''),
    newString = '';

  function findUpper(char) {
    if (upperChar.includes(char)) return true;
    else return false;
  }

  for (let i = 0; i < lowerString.length; i++) {
    const currentLetter = lowerString[i];
    if (validChar.indexOf(currentLetter) == -1) {
      newString += currentLetter;
      continue;
    }
    var currentIndex = validChar.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (findUpper(validChar[newIndex])) newString += validChar[newIndex].toUpperCase();
    else newString += validChar[newIndex];


  }
  return newString;
}


console.log(letterReplace('gzoox gz11nvddm!'));
console.log(letterReplace('$o00jx bnc1mf bg@kkdmfd'));