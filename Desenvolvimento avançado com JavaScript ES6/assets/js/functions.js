let counterDisplayElem = document.querySelector('.counter-display');
let addCounterElem = document.querySelector('.add-counter');

let count = 0;

addCounterElem.addEventListener('click', () => {
  count++;
  counterDisplayElem.innerHTML = 'Contador: ' + count;
});
