//  Combine two lists by alternatingly taking each element...

var l1 = ['a', 'b', 'c', 'd'],
  l2 = [1, 2, 3, 4];


function listJoin(list1, list2) {
  if (!list1.isArray() || !list2.isArray()) return false;  // handle invalid input
  var rev1 = list1.reverse();
  var rev2 = list2.reverse();
  var outList = [];
  var i = 0;
  do {
    if (rev1.length > 0) {
      outList[i] =rev1.pop();
      i++;
    }
    if (rev2.length > 0) {
      outList[i] = rev2.pop();
      i++;
    }
  } while (rev1.length > 0 || rev2.length > 0);
  return outList;
}

console.log(listJoin(l1, l2));