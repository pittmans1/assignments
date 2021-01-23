const formOne = document.form1
const formtwo = document.form2
const formthree= document.form3

formOne.addEventListener("submit", function(e){
    e.preventDefault()
    const A =formOne.num1.value
    const B = formOne.num2.value
    const op = "+"
    formOne.num1.value=" "
    formOne.num2.value=" "
    result= +A + +B;
    console.log(result)
    const h1= document.createElement("h1")
    h1.textContent="The result of your addition is: " + result;
    document.getElementById("divOne").append(h1)
    h1.id="ADD"
})
formtwo.addEventListener("submit", function(e){
    e.preventDefault()
    const A =formtwo.num3.value
    const B = formtwo.num4.value
    const op = "-"
    formtwo.num3.value=" "
    formtwo.num4.value=" "
    result= +A - +B;
    console.log(result)
    const h1= document.createElement("h1")
    h1.textContent="The result of your subtraction is: " + result;
    document.getElementById("divTwo").append(h1)
    h1.id="subtract" 
})
formthree.addEventListener("submit", function(e){
    e.preventDefault()
    const A =formthree.num5.value
    const B = formthree.num6.value
    const op = "-"
    formthree.num5.value=" "
    formthree.num6.value=" "
    result= +A * +B;
    console.log(result)
    const h1= document.createElement("h1")
    h1.textContent="The result of your multiplication is: " + result;
    document.getElementById("divThree").append(h1)
    h1.id="multiply" 
})