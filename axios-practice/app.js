//const { default: axios } = require("axios")

const todoList = document.getElementById("container")
//const url = "https://api.vschool.io/scottpittman/todo"
const form = document["form"]

function getAll(){
    axios.get("https://api.vschool.io/scottpittman/todo")
    .then(res => makeTodo(res.data))
    .catch(err => console.log(err))
 };getAll()
 form.addEventListener("submit", (e) => {
     e.preventDefault()
     const newTD = {
         title: form.titles.value,
         description: form.descr.value,
         price: form.prices.value,
         imgUrl: form.images.value
        }
        form.titles.value = ""
        form.descr.value=""
        form.prices.value=""
        form.images.value=""
     axios.post("https://api.vschool.io/scottpittman/todo", newTD)
     .then(res => getAll())
     .catch(err => console.log(err))
 })
 //getAll();
function makeTodo(data){
    document.getElementById("container").innerHTML = ""
    for (i = 0; i < data.length ; i++){
    //create elements
    const containr = document.createElement("div")
    const title = document.createElement("h1")
    const deleteButton = document.createElement("button")
    const description = document.createElement("p")
    const price = document.createElement("p")
    const completed = document.createElement("input")
    const br = document.createElement("br")
    const img = document.createElement("img")
    const complet = document.createElement("h6")
    //const id = data[i]._id

    //edit
    title.textContent = ` Title: ${data[i].title}`;
    title.className = "title"
    deleteButton.textContent="Delete"
    deleteButton.className="deleteButton"
    description.textContent = ` Description: ${data[i].description}`;
    description.className = "desc"
    price.className="price"
    price.textContent = `Price: ${data[i].price}`;
    img.src= `${data[i].imgUrl}`;
    img.className="image"
    img.style.height="150px"
    img.style.width="150px"
    img.style.borderRadius = "50%"
    complet.textContent="completed click this box"
    completed.className="compl"
    completed.type="checkbox"
    
    
    
    //append
    todoList.appendChild(containr)
    containr.appendChild(title)
    containr.appendChild(description)
    containr.appendChild(price)
    containr.appendChild(img)
    containr.appendChild(completed)
    containr.appendChild(complet)
    containr.appendChild(deleteButton)
    containr.appendChild(br)
    //put attempt
    const id = data[i]._id;

        completed.addEventListener("change", () => {
                const completer = {
                    completed : true
                }
                const url = `https://api.vschool.io/scottpittman/todo/${id}`;
                axios.put(url, completer)
                .then(res => res.data)
                .catch(err => console.log(err))
                if(data[i].completed === true){
                    title.style.textDecoration = "line-through"
                }
        })



     deleteButton.addEventListener("click", (event) => {
         event.preventDefault()
         
            axios.delete(`https://api.vschool.io/scottpittman/todo/${id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));

        
     });
    }
} 
getAll()