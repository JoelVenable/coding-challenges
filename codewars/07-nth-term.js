// return the sum of the following series up to the nth term...

// 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16...


function seriesSum(n) {
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / ((i * 3) + 1);
  }
  console.log(sum);
  
}


seriesSum(1);
seriesSum(2);
seriesSum(3);
seriesSum(4);
seriesSum(5);
seriesSum(6);

