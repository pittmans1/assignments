var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var newArr = forception(people, alphabet)

function forception(people, alphabet) {
    let newArr= []
    for (let i = 0; i < 1; i++){
        newArr.push(people[0])
        for (let n = 0; n < alphabet.length; n++){
            newArr.push(alphabet[n])
        }
    }
    return newArr
}


    console.log(newArr)