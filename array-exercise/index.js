var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop()
//console.log(vegetables)
fruit.shift()
var indexFruit = fruit.indexOf("orange")
fruit.push('1')
console.log(fruit)
console.log(vegetables.length)
vegetables.push(3)
var foods = fruit.concat(vegetables)
//console.log(foods)
foods.splice(4, 2)
var reverseFoods = foods.reverse()
console.log(reverseFoods)
var joinedFoods = reverseFoods.join()
console.log(joinedFoods)