const button = document.querySelector('button');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');

function add(num1, num2) {
    let sum = parseInt(num1) + parseInt(num2)
    return sum
}

button.addEventListener('click', () => {
    console.log(add(input1.value, input2.value))
})

