// Input string may contain a number at the end.  If the string contains a number, increment by 1, otherwise append '1' to the output string.

function incrementString(str) {
  str = str.split('');
  var sw = false,
    i = str.length - 1;
  do { // decrement from end of string
    if (!isNaN(str[i])) {
      if (str[i] < 9) {
        str[i]++;
        sw = true;
      } else {
        str[i] = 0;
        i--;
      }
    } else {
      str.splice(i+1, 0, 1);
      sw = true;
    }
  } while (!sw)
  return str.join('');
}

console.log(incrementString('testing'));