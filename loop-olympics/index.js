var numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var fruits = ["banana", "orange", "apple", "kiwi"]
for(i = numbers.length - 1; i >= 0 ; i--){
    console.log(i)
}
for (j = 0; j < numbers.length ; j++){
    console.log(j)
}
for (f = 0; f < fruits.length ; f++){
    console.log(fruits[f])
}

var numberArray = [];

for(var i = 0; i <= 9; i++){
    numberArray.push(i);
}

console.log(numberArray);
var secondNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
for(var l = 0; l < secondNum.length; l++){
    if(secondNum[l] % 2 === 0){
        console.log(secondNum[l])
    }
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(var l = 0; l < fruit.length; l += 2){
        console.log(fruit[l])
}
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  for(var p = 0; p < peopleArray.length; p++){
  console.log(peopleArray[p].name)
  }
  for(var pa = 0; pa < peopleArray.length; pa++){
      console.log(peopleArray[pa])
  }
  for(var pa = 0; pa < peopleArray.length; pa +=2){
    for(var po = 1; po < peopleArray.length; po +=2){
        console.log(peopleArray[pa].name + " " + peopleArray[po].occupation)
    }
}

  var arr = [];

for (var s = 0; s < 3 ; s++){
        arr.push([]);
        arr[s].push(0, 0 , 0)
        console.log(arr[s])
        
    }
