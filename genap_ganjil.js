var myArr = [1,2,3,4,5,6,7,8,9,10];
var ganjil = myArr.filter(x => x % 2 != 0);
var genap = myArr.filter(x => x % 2 == 0);
console.log('myArr adalah ' + myArr.join(', ') + '\nAngka genap dari myArr: ' +
            genap.join(', ') + '\nAngka ganjil dari myArr: ' +
            ganjil.join(', '));