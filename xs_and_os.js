function XO(str){
   var x = str.toLowerCase().split('').filter(x => x == 'x');
   var o = str.toLowerCase().split('').filter(o => o == 'o');
   return !o && !x? true : x.length == o.length? true : false;
}

console.log(XO('zpsda'));//tidak ada x dan o maka return true
console.log(XO('xxs'));//x tidak di ikuti o maka return false
console.log(XO('xxoo'));/*tersedia x dan o, dan memiliki ukuran yang sama, dalam hal
ini x memiliki ukuran 2 dan o memiliki ukuran 2, maka return true*/
console.log(XO('xxo'));//tersedia x dan o namun tidak memiliki ukuran sama maka return false