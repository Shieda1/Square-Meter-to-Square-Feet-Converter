// https://www.omnicalculator.com/conversion/square-meter-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squareFeetRadio = document.getElementById('squareFeetRadio');
const squareMeterRadio = document.getElementById('squareMeterRadio');

let squareFeet;
let squareMeter = v; 

// labels of the inpust
const variable = document.getElementById('variable');

squareFeetRadio.addEventListener('click', function() {
  variable.textContent = 'Square Meter';
  squareMeter = v;
  result.textContent = '';
});

squareMeterRadio.addEventListener('click', function() {
  variable.textContent = 'Square Feet';
  squareFeet = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squareFeetRadio.checked)
    result.textContent = `Square Feet = ${computesquareFeet().toFixed(5)}`;

  else if(squareMeterRadio.checked)
    result.textContent = `Square Meter = ${computesquareMeter().toFixed(5)}`;
})

// calculation

function computesquareFeet() {
  return Number(squareMeter.value) * 10.764;
}

function computesquareMeter() {
  return Number(squareFeet.value) / 10.764;
}