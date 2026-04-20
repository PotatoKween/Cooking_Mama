let cart = [];

function addToCart(name, price) {
  cart.push({ prod_name: name, prod_price: price });
  displayCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

function displayCart() {
  let list = document.getElementById("cartList");
  let total = 0;
  list.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.prod_price;

    let li = document.createElement("li");
    li.innerHTML = `${item.prod_name} - ₱${item.prod_price} 
      <button onclick="removeItem(${index})">Remove</button>`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

function prepareOrder() {
  document.getElementById("cust_order").value = JSON.stringify(cart);
}