function caesarCipher(str, num) {
  num = num % 26;
  var lowerString = str.toLowerCase(),
    validChar = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    newString = '';

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
    if (str[i] === str[i].toUpperCase()) {
      newString += validChar[newIndex].toUpperCase();
    } else {
      newString += validChar[newIndex];
    }
  }
  return newString;
}



console.log(caesarCipher('Zoo keeper!!!', -900));