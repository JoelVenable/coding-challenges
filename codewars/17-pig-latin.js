//  Convert given string to pig latin.  Move first letter to end of word and add 'ay'

//  Leave punctuation marks untouched.

function pigIt(str) {
  var out = [],
  str = str.split(' ');
  function pigWord(str) {
    if (/\W/.test(str)) {
      return str;
      // do something
    } else return str.slice(1) + str.charAt(0) + 'ay';
  }
  for (let i = 0; i < str.length; i++) {
    out[i] = pigWord(str[i]);
  }

  return out.join(' ');
}



console.log(pigIt("Hello, how are you doing??"));




console.log(/\W/.test("hello!"));