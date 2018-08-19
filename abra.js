function removeChar (str, charToRemove) {
  var index = str.indexOf(charToRemove);
  var result = str.substring(0, index) + str.substring(index + 1, str.length);
  return result;
}

var assert = function (val1, val2) {
  return val1 === val2;
}

var newString = removeChar('abrakadabra', 'k');
console.log(assert(newString, 'abraadabra'))
