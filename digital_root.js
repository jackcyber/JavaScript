function digital_root(n) {
  var x = n.toString(10).split('').map(i => parseInt(i)).reduce((x, y) => x + y, 0)
  while(x.length !== 1){
    return x.toString(10).split('').map(i => parseInt(i)).reduce((x, y) => x + y, 0)
  }
}

console.log(digital_root(942));