function fiveAndGreaterOnly(arr) {
    // your code here
   return arr.filter(num => num >= 5)
  }
 // console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

  function evensOnly(arr) {
    // your code here
    return arr.filter(num => num % 2 === 0)
  }
  // test
 // console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  function fiveCharactersOrFewerOnly(arr) {
    // your code here
    return arr.filter(c => c.length <= 5)
  }
  // test
  //console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

  function peopleWhoBelongToTheIlluminati(arr){
    // your code here
    return arr.filter(club => club.member)
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));


  function ofAge(arr){
    // your code here
    return arr.filter(age => age.age > 18)
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 