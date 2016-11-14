function tripleChar(yourChars){
  return yourChars.split('').map(c => c.repeat(3)).join('');
}

var myChars = tripleChar('These are my chars and going to go to the hell.');
console.log(myChars);
