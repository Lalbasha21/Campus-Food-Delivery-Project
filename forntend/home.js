// Check if user is logged in
if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "index.html";
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// Add item to cart
function addToCart(itemName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ itemName, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  
}
