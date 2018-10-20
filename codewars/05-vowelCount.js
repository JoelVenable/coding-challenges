//  Return the number (count) of vowels in the given string. 

// String only consists of lower case letters and/or spaces.



function getCount(str) {
  var vowelsCount = 0;
  const vowels = 'aeiou';
  // enter your majic here
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) vowelsCount++;
  }
  return vowelsCount;
}