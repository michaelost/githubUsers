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



var characters = ['a', 'b', 'c', 'd', 'e'];
var currentIndex = 0;


function removeNtimes(count, string) {
  var charToRemove = characters[currentIndex];
  //  while string.length > 0 ||  count > 0
  //  do :
    if ( /* characted is in string */ ) {
      // remove character from string
    } else {
      // increment currentIndex 
      // try to remove the next char from string
    }
//    count = count - 1;
}

