// Create a function that returns true if any duplicate arguments exist.  Any number of arguments may be passed into the function.  Values passed in will only be strings or numbers.

function isDuplicate() {
  var args = [],
    obj;
  for (var i = 0; i < arguments.length; ++i) args[i] = arguments[i];
  do {
    obj = args.pop();
    if (args.findIndex(el => el == obj) != -1) return true;
  } while (args.length > 0)
  return false;
}