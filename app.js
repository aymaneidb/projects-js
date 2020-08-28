let number = document.querySelector('.input1');
let tax = document.querySelector('.input2');
let details2 = document.querySelector('.blockresult');
let result = document.querySelector('.output');
let calcule = document.querySelector('.result');
let reset = document.querySelector('.restebutton');
let details = document.querySelector('.details')

function calc(x, y) {
    return x * (1 + (y / 100));
}
calcule.addEventListener('click', e => {
    e.preventDefault();
        resulte = calc(number.value, tax.value);
        result.textContent = resulte.toPrecision(3);
        details.classList.add('d-none');
        details2.classList.remove('d-none');
})
reset.addEventListener('click', e => {
    e.preventDefault();
    details.classList.remove('d-none');
    details2.classList.add('d-none');
    number.value = '';
    tax.value = '';
})
