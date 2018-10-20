// Given an input string of DNA halves (ex. "ATTGC"), return the matching pair.

function DNAStrand(dna) {
  //your code here
  var out = '';
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        out += "T";
        break;
      case "T":
        out += "A";
        break;
      case "C":
        out += "G";
        break;
      case "G":
        out += "C";
    }

  }
  return out;
}