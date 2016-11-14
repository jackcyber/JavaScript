function isArray(myArray){
  return myArray.constructor.toString().indexOf('Array') > -1;
}

function count(sequence, item){
  var found = [];
  isArray(sequence)? sequence.map(x => x == item && found.push(x)) :
  sequence.split('').map(x => x == item && found.push(x));
  return found.length;
}

console.log(count('1 is the main number and 1 indicates that the Champion was a winner',1));
