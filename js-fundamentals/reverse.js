function reverseWords(string) {
  // reverse every word in the string
  // return the new string

  //  assume the array is split with spaces
  var stringArr = string.split(' '),
    strObject = [];
  
  
  stringArr.forEach(function (word) {
    strObject.push(loopWord(word));
  });
  
 

  console.log(strObject.join(' '));
}


function loopWord(word) {
  const letters = word.split('');
  var newWord = '';
  for (let i = 1; i <= letters.length; i++) {
    newWord += letters[letters.length - i];
  }

  return newWord;
}


reverseWords("this is a string of words");