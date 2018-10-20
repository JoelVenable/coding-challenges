// queue for self-checkout tills.  Write a function to calculate the total time required for all customers to check out.

// Input variables:
// cust: array of positive integers representing the queue.  Each integer is a customer, and its value is the amount of time to checkout.
// n: is a positive integer representing the number of self-checkout tills.


function queueTime(cust, n) {
  var nArr = Array(n).fill(0);
  for (let c = 0; c < cust.length; c++) {
    nArr[nArr.indexOf(Math.min(...nArr))] += cust[c];
  }
  return Math.max(...nArr);
}

console.log(queueTime([1,5],2));