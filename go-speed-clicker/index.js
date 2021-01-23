const button = document.getElementById("click")
const count = document.getElementById("counter")
const clicks = localStorage.getItem("clicks") || 0
if(clicks){
    count.textContent= clicks
} else {
    count.textContent = 0
}
button.addEventListener("click", function(e){
    times = count.innerHTML
    times++
    count.textContent = times
    localStorage.setItem("clicks", times)

})