function Employee(name, job, salary, status ){
    this.name = name
    this.job = job
    this.salary = salary
    this.status = "full time"
}
Employee.prototype.printEmployeeForm = printEmployeeForm
function printEmployeeForm(){
    console.log("Name: " + this.name + " Job title: " + this.job + " salary " + this.salary + " status " + this.status)
}
var Employees= ["George Clooney", "Bill Gates", "Jeff Bezos"]
var GeorgeClooney = new Employee( "George Clooney", " Actor", 3000000)
var BillGates = new Employee("Bill Gates", "Microsoft- rich man", 99999999999)
var JeffBezos = new Employee("Jeff Bezos", "Amazon Owner", 9999999999999)
 GeorgeClooney.status= "contractor"

 GeorgeClooney.printEmployeeForm()
 BillGates.printEmployeeForm()
 JeffBezos.printEmployeeForm()

 var newEmployee = ["Ken Block", "Ryan Reynolds", "Hugh Jackman"]
 for ( var i = 0; i < newEmployee.length; i++){
     Employees.push(newEmployee[i])
 }
console.log(Employees)