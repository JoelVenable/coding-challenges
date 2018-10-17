function isPalindrome(string) {
  // ignore punctuation and spaces
  string = string.toLowerCase();
  var charArray = string.split(''),
    validChar = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    lettersArray = [];

  charArray.forEach(function (char) {
    if (validChar.indexOf(char) > -1) {
      lettersArray.push(char);
    }
  });

  if (lettersArray.join('') === lettersArray.reverse().join('')) return true;
  else return false;







}

console.log(isPalindrome("Madam, I'm Adame"));