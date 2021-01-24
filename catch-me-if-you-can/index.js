function sum(x, y){
    //check data types first and throw error
    try {
        if (isNaN(x) || isNaN(y))
        throw Error ("only accepts numbers")
    } catch (error) {
        console.log(error)
    }
    return x + y
}

console.log(sum(1,2));
sum("1", "2two");


var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check 
  try{
      if(username !== user.username || password !== user.password)
      throw " sorry the username or password doesnt match";
    else  {
        throw "login succesful"
    }
  } catch (err){
        console.log(err)
  }
}
login("sam", "123abc")
login("john", "111111")