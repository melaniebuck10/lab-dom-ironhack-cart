// ITERATION 1

var removeCartItemButtons = document.getElementsByClassName("btn-remove")
console.log(removeCartItemButtons)

for (var i = 0; i <removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateSubtotal
  })
}

function updateSubtotal () {
  var cartItemContainer = document.getElementById('cart')[0]
  var cartRows = cartItemContainer.getElementsByClassName('product')
  for (var i = 0; i <cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('.price span')[0]
    var quantityElement = cartRow.getElementsByClassName('.quantity input')[0]
     var price = parseFloat(priceElement.innerText.replace('$', ''))
     var quantity = quantityElements.value
     total = total + (price * quantity)
  }
  document.getElementsByClassName('subtotal')[0].innerText = '$' + total
}


function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
