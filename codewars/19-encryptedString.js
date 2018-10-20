function encrypt(text, n) {
  if (!text || n <= 0 || !Number.isInteger(n)) return text;
  let i = 0;
  do {
    let out = '';
    text = text.split('');
    for (let j = 1; j < text.length; j++) {
      out += text.splice(j, 1).toString();
    }
    text = out + text.join('');
    i++;
  } while (i < n)
  return text;
}

function decrypt(text, n) {
  if (!text || n <= 0 || !Number.isInteger(n)) return text;
  let i = 0,
    k = (text.length % 2 == 0) ? text.length / 2 : text.length / 2 - .5; // always round down.
  do {
    let out = '';
    text = text.split('');
    for (let i = 0; i < k; i++) out += text[i + k].toString() + text[i].toString();
    if (text.length % 2) out += text[text.length - 1].toString();
    text = out;
    i++;
  } while (i < n)
  return text;
}

// 24135
console.log(decrypt(encrypt("12345", 1), 1));
console.log(decrypt(encrypt("This is a test!", 1),1));
console.log(decrypt(encrypt("This is a test!", 2),2));
//console.log(decrypt(encrypt("hsi  etTi sats!", 1),1);