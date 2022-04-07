'use scrict';

const btn = document.getElementById('btn');
const range = document.getElementById('range');
const rangeValue = document.getElementById('range-span');
const eBtn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const inp = document.getElementById('text');
const square = document.getElementById('square');

range.addEventListener('input', function () {
  rangeValue.textContent = range.value;
  circle.style.width = range.value + '%';
  circle.style.height = range.value + '%';

});

btn.addEventListener('click', function () {
  square.style.backgroundColor = inp.value;
  inp.value = '';
});

circle.style.width = range.value + '%';
circle.style.height = range.value + '%';
rangeValue.textContent = range.value;
eBtn.style.display = 'none';







