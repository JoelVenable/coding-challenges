// Create a method that converts dash/underscore delimited words into camel casing.  The first word should be capitalized only if the original word was.


function toCamelCase(str) {
  str = str.split(/[\_,\-]/);
  out = str.shift();
  str.forEach(val => out += val.slice(0, 1).toUpperCase() + val.slice(1));
  return out;
}