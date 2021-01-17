const btn = document.getElementById('btn_calc')
const input_num1 = document.getElementById('input_num1')
const input_num2 = document.getElementById('input_num2')
const operator = document.getElementById('input_symbol')

let number1
let number2
let result = ''
let operators 

number1 = Number (number1)
number2 = Number (number2)


function calculate () {
    if (operators === "+"){
    result = number2 + number1
}
    else if (operators === "-") {
    result = number1 - number2
}
    else if (operators === "*") {
        result = number1 * number2
}
    else if (operators === "/") {
        result = number1 / number2
}
alert (result)
}

btn.addEventListener ('click', calculate)

input_num1.addEventListener ('input', function(event){
    number1 = event.target.value
})
input_num2.addEventListener ('input', function(event){
    number2 = event.target.value
})
operator.addEventListener ('input', function(event){
    operators = event.target.value
})


btn_add = document.getElementById('btn_input')

btn_add.addEventListener ('click', newInput)

function newInput () {
    var textfield = document.createElement('input')
    document.getElementById('form').appendChild(textfield);
}


btn_del = document.getElementById('btn_delete')

btn_del.addEventListener ('click', deleteMe)

function deleteMe (){
    btn_del.remove ()
}

btn_col = document.getElementById('btn_color')

btn_col.addEventListener ('click', colorChange)

function colorChange (){
    const r = prompt ("which color?")

    document.getElementById('btn_color').style.background = r ;
}

