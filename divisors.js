function divisors(n){
  res = [];
  for(var i = 1; i <= n; i++){
    if(n % i == 0) res.push(i);
  }
  return res;
}

var myDiv = divisors(10);
console.log('10 dapat di bagi oleh angka: ' + myDiv.join(', ') +
           ' dan mereka berjumlah ' + myDiv.length + '.');