function Murid(name, absent){
  this.name = name || "";  
  this.absent = absent || 0;
}

function Ketua(name, absent, autho){
  Murid.call(this, name, absent);
  this.authority = autho || "";
}

Ketua.prototype = new Murid();

function Wakil(name, absent){
  Ketua.call(this, name, absent, "Representing Ketua when they are absent");
}

Wakil.prototype = new Ketua();

function Cita(name, absent,cita){
  Murid.call(this, name, absent);
  this.cita = cita;
}

Cita.prototype = new Murid();

var doni = new Ketua("Romadhoni, Muhammad", 27, "Coordinator of the class");
var ansori = new Wakil("Ansori", 8)
var joko = new Cita("Purwanto, Joko", 18, "Programmer")

console.log("//DONI")
console.log(doni.name);
console.log(doni.absent);
console.log(doni.authority);
console.log("//ANSORI")
console.log(ansori.name);
console.log(ansori.absent);
console.log(ansori.authority);
console.log("//JOKO");
console.log(joko.name);
console.log(joko.absent);
console.log(joko.cita);