var header = document.getElementById("header")
header.textContent="I made this using javascript!!! Scott pittman wrote the javascript"
header.style.textAlign = "center"
header.style.fontSize= "40px"
document.querySelector('header').innerHTML = document.querySelector('header').innerHTML.replace('Scott pittman', '<span class="foo", style="color:#00ff90 ">Scott Pittman</span>');

//var newleft = x[0];

// 

document.getElementById('clear-button').addEventListener('click', function(){
   leftMess[0].textContent= (" ");
   leftMess[1].textContent= (" ");
   rightMess[0].textContent= (" ");
   rightMess[1].textContent = (' ');
})

document.getElementById('themesl').addEventListener('change', function(){
  if (Selection= document.getElementsByClassName('.two')){
    leftMess[0].style.backgroundColor="red";
    leftMess[1].style.backgroundColor="red";
    rightMess[0].style.backgroundColor="black";
    rightMess[1].style.backgroundColor="black";
    rightMess[0].style.color = "white";
    rightMess[1].style.color = "white";
  }
})

var l = document.getElementById("main").getElementsByClassName('.left').length.valueOf(1)
var leftMess= document.querySelectorAll(".left")
var rightMess= document.querySelectorAll(".right")
leftMess[0].textContent= "I have Something Serious to Tell you..."
rightMess[0].textContent = "What is it you need to tell me mate?"
leftMess[1].textContent = "I ... Aced my mid-term assessment!!!!"
rightMess[1].textContent = "that's awesome! im glad since you didnt study."
var themes= document.getElementById('themesl').value[1];
var input = document.getElementById('input');
var newText = document.getElementById("messages");
var button= document.getElementsByTagName('button');
button[1].id = "sendb";
//var newDiv = document.getElementById('input').value
document.getElementById('sendb').addEventListener('click',function(){
 // for (var i = 0; i < input.textContent; i++  ){
   var newMess = document.createElement("div")
   var newDiv = document.getElementById('input').value.innerHTML
   newMess.innerHTML= newDiv;
    leftMess.appendChild(newMess);
    const leftMess = document.querySelectorAll(".left");
    document.body.insertAfter(newMess, leftMess[1]);
    console.log(newMess, newDiv, leftMess)

  /*document.getElementById('sendb').addEventListener("submit",function(){
 // for (var i = 0; i < input.textContent; i++  ){
   var newMess = document.createElement('div')
   var leftMess = document.querySelectorAll(".left");
   var main = document.getElementsByClassName('messages');
   var inputl = document.getElementById('input');
   newMess.id= "last";
    newMess.append(leftMess[1]);
    //const leftMess = document.querySelectorAll(".left");
  // document.body.insertBefore(newMess, leftMess[1].nextSibling);
    //console.log(document.body.insertAfter(newMess, leftMess[1]))
    var lasti = document.getElementById("last");
   return (lasti.textContent = "yes")*/
})

