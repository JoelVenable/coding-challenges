function harmlessRansomNote(noteText, magazineText) {
  // assume inputs have no puncutation or uppercase characters.

  // transform each string into an array of words.
  var noteArr = noteText.split(' '),
    magArr = magazineText.split(' '),
    magObject = {};

  magArr.forEach(function (word) {
    if (!magObject[word]) magObject[word] = 0;
    magObject[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(function (word) {
    if (!magObject[word] || magObject[word] == 0) {
      // failure
      noteIsPossible = false;
    } else if (magObject[word]) {
      magObject[word]--;
    }

  });

  return noteIsPossible;

  // Are there enough words in magazineText to make noteText?  Note that each word in magazineText can only be used once.
}

var possible = harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

console.log("Is the note possible? " + possible);
/*

function log(array) { // constant runtime
  console.log(array[0]); // big O notation:  "O (1)"
  console.log(array[1]);
}


function logAll(array) { // linear runtime:  Big O notation: "O (n)"
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function addAndLog(array) { // exponential runtime: Big O notation: "O (n^2)"
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

function binarySearch(array, key) { // logarithmic runtime.  Big O notation: "O (log n)"
  var low = 0,
    high = array.length - 1,
    mid,
    element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1
}

*/