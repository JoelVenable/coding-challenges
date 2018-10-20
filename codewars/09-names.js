names = [
  { name: 'bart' },
  { name: 'lisa' },
]


function list(names) {
  //your code here
  var outString = '';
  while (names.length > 0) {
    outString += names.shift().name;
    if (names.length > 1) outString += ', ';
    if (names.length == 1) outString += ' & ';
  }
  return outString;
}

console.log(list(names));