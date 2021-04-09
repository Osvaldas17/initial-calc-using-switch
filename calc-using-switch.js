
/*  SUPER SIMPLE CALC USING SWITCH  */

function render(result) {
    document.querySelector('#result').textContent = result
}
document.getElementById('buttons').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {

        let result = null;
        const firstNumber = Number(document.querySelector('#input-1').value);
        const secondNumber = Number(document.querySelector('#input-2').value);

        switch (event.target.id) {
            case 'sum':
                result = firstNumber + secondNumber;
                break;
            case 'subtraction':
                result = firstNumber - secondNumber;
                break;
            case 'divide':
                result = firstNumber / secondNumber;
                break;
            case 'multiply':
                result = firstNumber * secondNumber;
                break;
            case 'modulus':
                result = firstNumber % secondNumber;
                break;
            case 'clear':
                result = 'Result';
                break;
        }
        render(result);
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click',() => {
    document.querySelector('#input-1').value = '';
    document.querySelector('#input-2').value = '';
});

