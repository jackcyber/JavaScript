/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || '';
}
function Manager() {
  this.reports = [
  ];
}
Manager.prototype = new Employee;
function WorkerBee(name, dept, projs) {
  Employee.call(this, name, dept);
  this.projects = projs || [
  ];
}
WorkerBee.prototype = new Employee;
function SalesPerson() {
  this.dept = 'sales';
  this.quota = 100;
}
SalesPerson.prototype = new WorkerBee;
function Engineer(name, projs, mach) {
  WorkerBee.call(this, name, 'Engineer', projs);
  this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;
var joe = new Engineer('Hawkins, Zack', [
  'System Analyst',
  'Navigator'
], 'Angular');
console.log(joe.name);
console.log(joe.projects);
console.log(joe.machine);
console.log(joe.dept);

function instanceOf(object, constructor){
  object = object.__proto__;
  while(object != null){
    if(object == constructor.prototype){
      return true;
    }
    if(object == 'XML'){
      return constructor.prototype = XML.prototype;
    }
    object = object.__proto__;
  }
  return false;
}
console.log('//TESTING')
console.log(instanceOf(joe, Engineer));
console.log(instanceOf(joe, Employee));
console.log(instanceOf(joe, Manager));
console.log(joe instanceof Engineer);
console.log(joe instanceof SalesPerson);
/*
Exception: ReferenceError: SalePerson is not defined
@Scratchpad/1:33:1
*/
