var readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  function result(arr){
         inputArr = input.split("")
     for (var i=0; i < inputArr.length; i++){
         
         var strg = inputArr[i]; 
         
         if (strg !== " "){
             var random = arr.findIndex(letter => letter === strg) 
            
             console.log(arr[random + shift])
            } else {
                console.log(" ")
            }
       /*  if(shift < 26){
             shift = shift%26;
         } else if(shift > 0){
             shift = (shift%26)+26;
            }*/
            // console.log(arr[random + shift]);
            
            
           
            }
        } result(arr)
 



