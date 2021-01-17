var array = [3 , 6, 2, 56, 32, 5, 89, 32, 299, 8123, 199];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
console.log(largest);

//var character = ["2234hf!3#$%", "!@##$%&^$@", "hey", "!QAZq", "!zrs"]
var char = ["22343#$%", "!@##$%&^$@", "hey", "!QAZq", "!zrs"]//.filter(el => el.length === ("!"))
console.log(char.filter(Element => Element.includes("!")))


num1 = 4
num2 = 2

function isDivisible(num1, num2) {
    if (!(num1 % num2)) {
        return (true)
    } else {
        return (false)
    }
}

if (isDivisible(num1, num2)) {
    console.log('\n3. ' + num1 + ' is divisible by ' + num2 + '.')
} else {
    console.log('\n3. ' + num1 + ' is not divisible by ' + num2 + '.')
}

num1 = 9
num2 = 3

if (isDivisible(num1, num2)) {
    console.log('   ' + num1 + ' is divisible by ' + num2 + '.')
} else {
    console.log('   ' + num1 + ' is not divisible by ' + num2 + '.')
}

num1 = 15
num2 = 4

if (isDivisible(num1, num2)) {
    console.log('   ' + num1 + ' is divisible by ' + num2 + '.')
} else {
    console.log('   ' + num1 + ' is not divisible by ' + num2 + '.')
}