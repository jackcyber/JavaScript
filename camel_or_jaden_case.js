function toCamelCase(str){
  var myExp = str.split(/[-_]+/g).map(s => s.slice(0, 1).toUpperCase() +
  s.slice(1, s.length)).join('');
  return str.indexOf('-') > 0? myExp : myExp.slice(0,1).toLowerCase() +
  myExp.slice(1, myExp.length);
}

console.log(toCamelCase('how-are-you'));//jika mengandung '-' maka return JadenCase
console.log(toCamelCase('how_are_you'));//jika mengandung '_' maka return CamelCase