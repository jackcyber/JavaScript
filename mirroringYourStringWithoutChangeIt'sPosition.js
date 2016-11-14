function revChar(yourStr){
  var theStr = yourStr.split('').reverse().join('');
  theStr = theStr.split(' ');
  res = [];
  for(var x = 0; x < theStr.length; x++){
    var i = ((theStr.length - 1) - x);
    res.push(theStr[i]);
  }
  return res.join(' ');
}

var myRevStr = revChar('I will be a mirror');
console.log(myRevStr);
