const form = document.myForm
const coin1 = 5
const coin2 = 7
const coin3 = 11

form.addEventListener("submit", function(e){
    e.preventDefault()
    const A = form.input1.value
    const B = form.input2.value
    const C = form.input3.value
    form.input1.value = " "
    form.input2.value = " "
    form.input3.value = " "
    r1 = +A * 5;
    r2 = +B * 7;
    r3 = +C * 11;
    const sumTotal = r1 + r2 + r3;
    const h1 =document.createElement("h1")
    h1.textContent = "The grand total for my services is: " + sumTotal;
    document.getElementById("total").append(h1)
    h1.id="sum"
    const img = document.createElement("img");
    img.src = "https://static.wikia.nocookie.net/nintendo/images/2/2f/Coin_-_New_Super_Mario_Bros.png/revision/latest/scale-to-width-down/1000?cb=20151206061007&path-prefix=en";
    img.id = "image1"
   document.getElementById("total").append(img)
})