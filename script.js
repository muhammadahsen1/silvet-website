let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;

  let list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = item + " <button onclick='removeItem(" + index + ")'>X</button>";
    list.appendChild(li);
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function toggleCart() {
  let box = document.getElementById("cartBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}
