let cart = [];

function add(item){
  cart.push(item);
  document.getElementById("count").innerText = cart.length;

  let list = document.getElementById("list");
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
}

function toggleCart(){
  let c = document.getElementById("cart");
  c.style.display = "block";
}
