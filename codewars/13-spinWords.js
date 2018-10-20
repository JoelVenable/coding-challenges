// Take a string of one or more words, and return the same string but with five+ letter words reversed.  Strings consist of only letters and spaces.


function spinWords(str) {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > 4) str[i] = str[i].split('').reverse().join('');
  }
  return str.join(' ');
}

spinWords("Hello dummies I am not here");