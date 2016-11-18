function findOutlier(arr){
  var even = arr.filter(x => x % 2 == 0);
  var odd = arr.filter(x => x % 2 != 0);
  return even.length == 1? +even.join('') : +odd.join('');
}

console.log(findOutlier([2,4,5,8,4,12])); //log 5, karena dia ganjil sendirian(asing)