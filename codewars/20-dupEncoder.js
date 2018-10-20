// convert string to new string where unique characters are '(' and duplicates are ')'

// ex.  'din' => '((('
// 'recede' => '()()()'

function dupEncoder(word) {
  return word.toLowerCase().split('').map((el, i, arr) => arr.filter(val => val == el).length > 1 ? ')' : '(').join('');
}  // One line function FTW!!!

console.log(dupEncoder('big'));