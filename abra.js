


function removeChar (str, charToRemove) {
  var index = str.indexOf(charToRemove);
  return str.substring(0, index) + str.substring(index, srt.length);

}



var newString = removeChar('abrakadabra', 'k');






var assert = function (val1, val2) {
  return val1 === val2;
}
