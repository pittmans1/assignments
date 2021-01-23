const form = document.myForm

function FormAlert(){
    const FName= form.firstName.value
    const LName = form.lastName.value
    const age= form.Age.value
    const gender = form.gender.value
    const place = form.select.value
    const diet=[]
    for(i= 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            diet.push(form.diet[i].value)
        }
    }
    alert("First Name: " + FName +"\nLast Name: " + LName + "\nAge: " + age + "\nGender: " + gender + "\nTraveling TO: " + place + "\nDiet Problems: " + diet + "\nWell atleast now i can steal your identity shhhhh :)")
}



form.addEventListener("submit", function(event) {
    event.preventDefault()
    FormAlert();
})