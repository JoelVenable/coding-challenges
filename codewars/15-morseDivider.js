var decodeMorse = function (mC) {
  var out = '';
  mC = mC.trim().split(" ");
  mC.forEach(el => {
    if (el === "") out += " ";
    else out += MORSE_CODE[el]; // libray loaded into codewars challenge
  });
  out = out.replace(/\ \ /g, " ");
  return out;
}
console.log(decodeMorse(".... . -.--   .--- ..- -.. .    "));