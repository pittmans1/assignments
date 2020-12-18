var lil = document.getElementById('lol')
var pls = document.getElementById("plz")
lil.addEventListener('mouseover', function(){
   document.body.style.backgroundColor = "blue"
})
lil.addEventListener('mousedown', function(){
   document.body.style.backgroundColor = "red"
})
lil.addEventListener('mouseup', function(){
   document.body.style.backgroundColor = "yellow"
})
lil.addEventListener('dblclick', function(){
   document.body.style.backgroundColor = "green"
})
pls.addEventListener('wheel', function(){
   document.body.style.backgroundColor = "orange"
})