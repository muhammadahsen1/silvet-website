let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;

  let list = document.getElementById("cartList");
  list.innerHTML = "";

  cart.forEach(i => {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  });
}

function toggleCart() {
  let c = document.getElementById("cart");
  c.style.display = c.style.display === "block" ? "none" : "block";
}

function clearCart() {
  cart = [];
  updateCart();
}
