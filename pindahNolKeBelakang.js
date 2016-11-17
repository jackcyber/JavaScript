var pindahNol = function(myArr){
  return myArr.filter(x => x !== 0).concat(myArr.filter(x => x == 0));
}

console.log(pindahNol([1,0,0,2,0,0,3]));