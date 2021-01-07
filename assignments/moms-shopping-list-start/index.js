const form = document.addItem;
var grocery = document.createElement('li');
var deleteB = document.createElement("button");
form.addEventListener('submit', function(event){
    event.preventDefault()
   /* var newElement = document.createElement('li')
    var newItem = document.getElementById('title')
    newElement.textContent = newItem.value
    document.getElementsById("list").append("newElement")
    */
   var inputText = document.getElementById("title")
   inputText = inputText.value
   addItems(inputText)
   form.title.value = " "
})
function addItems(Item){
   const list = document.getElementById("list");
   const grocery = document.createElement("li");
   const deleteB = document.createElement("button");
   deleteB.textContent = "X";
   deleteB.id = "delete-button";

   grocery.textContent = Item
   //list.className = "list"
    //newElement.textContent = newItem.value
    //document.getElementsById("list").append("newElement")
    deleteB.addEventListener("click",  function (e){
        e.preventDefault()
        grocery.remove()
    })

document.getElementById('list').appendChild(grocery)
grocery.prepend(deleteB)
}
