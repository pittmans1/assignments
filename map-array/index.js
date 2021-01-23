function doubleNumbers(arr){
    return arr.map(function(num){
      return num * 2
    })
  }
  
  //console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

  function stringItUp(arr){
    // your code here
    return arr.map(function(num){
      return num.toString();
    })
  }
  
  //console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

  function capitalizeNames(arr){
    // your code here
    return arr.map(function(cap){
      return cap.charAt(0).toUpperCase() + cap.slice(1).toLowerCase()
    })
  }
  
  //console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  function namesOnly(arr){
    // your code here
    return arr.map(function(object){
      return object.name
    })
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  function makeStrings(arr){
    // your code here
    return arr.map(function(old){
      if (old.age > 18){
        return old.name + " is old enough to watch the matrix"
      } else {
        return old.name + " is not old enough to watch the matrix sorry :("
      }
    })
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]

  function readyToPutInTheDOM(arr){
    // your code here
    return arr.map(function(dom){
      const h1 = document.createElement("h1")
      const h2 = document.createElement("h2")
      h1 = document.getElementsByTagName("h1")
      h2= document.getElementsByTagName("h2")
      h1.textContent = dom.name
      h2.textContent = dom.age
    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]