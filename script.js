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
  let box = document.getElementById("cartBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function clearCart() {
  cart = [];
  updateCart();
}
