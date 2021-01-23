function total(arr) {
    // your code here
   return arr.reduce(function(final, num){
        final += num
        return final
    }, 0)
 }
 
 console.log(total([1,2,3])); // 6

 function stringConcat(arr) {
    // your code here 
    return arr.reduce(function(final, string){
        return final.toString() + string.toString()
    }, [])
 }
 
 console.log(stringConcat([1,2,3])); // "123"

 function totalVotes(arr) {
    // your code here  
    return arr.reduce(function(final, voters){
        if(voters.voted){
            final++
        }return final
    }, 0)  
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

 function shoppingSpree(arr) {
    // your code here  
    return arr.reduce(function(final, num){
        final += num.price
        return final
    }, 0)  
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 //console.log(shoppingSpree(wishlist)); // 227005


 function flatten(arr) {
    // your code here    
    return arr.reduce(function(final, mult){
       return final.concat(mult)
    }, [])
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 //console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   // your code here
   return arr.reduce(function(final, voters){
       if(voters.age <= 25)
           voters.voted ? (final.numYoungVotes++, final.numYoungPeople++ ) : final.numYoungPeople++;
           else if (voters.age > 35)
                voters.voted  ? (final.numOldVotesPeople++, final.numOldsPeople++) : final.numOldsPeople++;
            else /*(voters.age > 26 && voters.age < 35) */
            voters.voted ? (final.numMidVotesPeople++, final.numMidsPeople++) : final.numMidsPeople++;
       
       return final;
       
   }, {numYoungVotes: 0,
   numYoungPeople: 0,
   numMidVotesPeople: 0,
   numMidsPeople: 0,
   numOldVotesPeople: 0,
   numOldsPeople: 0 })
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/