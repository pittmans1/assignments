/*var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computer = "computer"
var count = 0
for (i = 0;  i <= officeItems.length ; i++){
 if(officeItems[i]=== computer){
     count++;
 }
}
console.log("computer appeared in this array " + count++ + " times") */
var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
    var age = 18
  
  for (var i = 0; i < people.length; i++ ){
    if (people[i].age > 18) {
       console.log(people[i].name + " is old enough to watch");
    } else if(people[i].age <= 18) {
            console.log(people[i].name + " is not old enough");
     
  }
  }