let cart = [];
let total = 0;

function addItem(name, price){
  cart.push(name);

  let li = document.createElement("li");
  li.innerText = name + " - $" + price;
  document.getElementById("cartList").appendChild(li);

  total += price;
  document.getElementById("total").innerText = "Total: $" + total;
}
