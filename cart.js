const minusBtn = document.querySelector(".fa-minus");
const plusBtn = document.querySelector(".fa-plus");
const quantityEl = document.getElementById("product-quantity");

const totalItemsEl = document.getElementById("total");
const productBillEl = document.getElementById("product-bill");
const taxEl = document.getElementById("product-tax");
const shippingEl = document.getElementById("shipping-cost");
const totalPriceEl = document.getElementById("total-price");

let quantity = 0;
const price = 88; 
const taxRate = 0.18;
const freeShippingThreshold = 100;
const shippingCost = 10; 

function updateCart() {
  quantityEl.textContent = quantity;
  totalItemsEl.textContent = quantity;

  const bill = price * quantity;
  const tax = bill * taxRate;
  const shipping = bill >= freeShippingThreshold ? 0 : shippingCost;
  const total = bill + tax + shipping;

  productBillEl.textContent = `$ ${bill.toFixed(2)}`;
  taxEl.textContent = `$ ${tax.toFixed(2)}`;
  shippingEl.textContent = `$ ${shipping.toFixed(2)}`;
  totalPriceEl.textContent = `$ ${total.toFixed(2)}`;
}

minusBtn.addEventListener("click", () => {
  if (quantity > 0) quantity--;
  updateCart();
});

plusBtn.addEventListener("click", () => {
  quantity++;
  updateCart();
});

// initialize
updateCart();

