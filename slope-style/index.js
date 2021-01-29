function collectAnimals(...animals) {  
   return animals
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables){
    return {combineFruit}
}

combineFruit = { fruit :["apple", "pear"],
             sweets :["cake", "pie"],
            vegtables: ["carrot"]}
const food = { combineFruit }; 
      /*  fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }*/

     const vacation = {  
        location: "Burly Idaho",
        duration: "2 weeks"
      };
      
      function parseSentence({location, duration}){
        return `We're going to have a good time in ${location} for ${duration}`
      }

      function returnFirst(items){
        const [firstItem] = items; /*change this line to be es6*/
        return [firstItem]
    }

    const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

returnFavorites(favoriteActivities)

function combineAnimals(arr1, arr2, arr3) {  
        return [...arr1, ...arr2, ...arr3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce((acc, number) => {acc * number}, 1)
  }
  
 unshift((array,...args) =>  [...array, ...args]);

 /*function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]*/
function populatePeople(names){
    return names.map((name) => {
        let [firstName, lastName] = name.split(" ");
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}