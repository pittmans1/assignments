var readline= require("readline-sync");

var calculation = function(number1, number2, op){
this.x = parseInt(number1);
this.y = parseInt(number2);
this.op = op;

    this.result = function(){
        var x =this.x;
        var y = this.y;
        var op = this.op;

         if (op === "+"){
             var result= x + y;
        } else if (op === "-"){
             var result= x - y;
        } else if (op === "*"){
            var result= x * y;
        } else if (op === "/"){
             var result = x / y;
        } else {
            var result = "error"
        }
        console.log ("result: " + result);
    };
}

var number1 = readline.question("Please enter a number: ");
var number2 = readline.question("Please enter another number: ");
var op = readline.question("Please enter an operation: ");

var calc = new calculation(number1, number2, op);
calc.result();