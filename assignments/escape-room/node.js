const readline = require("readline-sync");

//escape room-- options 1.stick hand in hole option 2 find key option 3


let isAlive= true;
var name= readline.question("What Is Your Name?");
console.log(name + ", you must escape this room but be warned the hole kills!");
var choicesa= ['put hand in hole','open the door']
var choices = ['put hand in hole', 'find the key', 'open the door'],
index = readline.keyInSelect(choices, "which will you choose? put hand in hole, find the key, open the door");
while(isAlive === true){
    if (choices[index] === 'put hand in hole'){
        console.log ('you have died');
        isAlive = false
    } else if (choices[index] === 'find the key'){
        console.log ('you have found the key');
        index = readline.keyInSelect(choicesa, "which will you choose? put hand in hole, open the door");
        console.log ('you have Escaped :)');
        return ('you have won');
    } else if (choices[index] === 'open the door'){
       console.log('you dont have the key, find the Key');
    }
}

/*var name= readline.question("What Is Your Name?");
console.log(name + ", you must escape this room but be warned the hole kills!");
var choices = ['put hand in hole', 'find the key', 'open the door'],
index = readline.keyInSelect(choices, "which will you choose? put hand in hole, find the key, open the door");
 return (choices[index]) */

/*const isAlive= true;
while(isAlive === true)
    if (choices[index] === [1]){
        return ('you have died');
        isAlive = false
    } else if (choices[index] === [2]){
        return ('you have found the key');

    } else if (choices[index] === [3]){
        return ('you dont have the key, find the Key');
    }
*/