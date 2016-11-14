function doubleChar(yourChars){
  return yourChars.split('').map(c => c.repeat(2)).join('');
}

var myChars = doubleChar('These are my chars and going to go to the hell.');
console.log(myChars);
