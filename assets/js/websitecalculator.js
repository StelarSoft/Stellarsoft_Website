// grab everything we need
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');
var initial = 1000;

// create functions we'll need

function calculateCost() {
  if( document.getElementById("customRadio1").checked == true ){
        initial =1000; 
        total.innerText = "$" + initial.toFixed(2);}
  if( document.getElementById("customRadio2").checked == true ){
        initial = 3000; }
  const quantity = quantityInput.value;
  const cost = initial * (quantity*0.75);
  console.log(cost);
  total.innerText = "TTD$" + cost.toFixed(2);
}

function updateQuantityLabel() {
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}

// on first run


// add event listeners
quantityInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', updateQuantityLabel);
