//  Given an array of strings, return an array only containing strings that 
//  don't contain the word 'raisin' (case insensitive).




var str = ["Chocolate Cookies", "Raisin Trail Mix", "Raisin Scones", "Bobby"];

function arrayContains(str, searchStr) {
  if (typeof searchStr != "string" || !Array.isArray(str)) return false; // handle invalid input
  var newArray = [];
  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] != "string") return false;  // handle invalid input
    if (str[i].toLowerCase().search(searchStr.toLowerCase()) == -1) newArray.push(str[i]); 
  }
  return newArray;
}

console.log(arrayContains(str, 'raisin'));