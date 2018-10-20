//  Given a lottery ticket (ticket) represented by an array of 2-value arrays, find out if you've won the jackpot.

var ticket = [
  ['ABC', 65],
  ['HGR', 74],
  ['BYHT', 74]
];

//  To do this, count the 'mini-wins' on the ticket.  Each array has a string and a number.  If the character code of any of the characters in the string matches the number, you get a mini win.  Note you can only have one mini win per sub-array.

//  Once mini wins are counted, compare to the other input provided by 'win' (a number).

function bingo(ticket, win) {
  var count = 0;



  for (let i = 0; i < ticket.length; i++) {
    var breakFor = false;
    const el = ticket[i],
      str = el[0],
      val = el[1];
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) === val && !breakFor) {
        count++;
        breakFor = true;
      }
    }
  }
  if (count >= win) return "Winner!";
  else return "Loser!"

}

bingo(ticket, 2);