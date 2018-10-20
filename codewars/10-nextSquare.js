// find the next square of the input number (which must be a perfect squre)

// If input number not perfect square return '-1'

function findNextSquare(sq) {
  var rt = Math.sqrt(sq);
  if (sq % rt != 0) return -1;
  else return (rt + 1) ** 2;
}