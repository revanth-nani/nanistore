// Initialize cart if not exist
if (!localStorage.getItem("cartCount")) {
    localStorage.setItem("cartCount", "0");
}

function updateCartDisplay() {
    const cartIcon = document.getElementById("cartCount");
    if (cartIcon) cartIcon.textContent = localStorage.getItem("cartCount");
}

// Add to cart function
function addToCart() {
    let count = parseInt(localStorage.getItem("cartCount"));
    localStorage.setItem("cartCount", count + 1);
    updateCartDisplay();
    alert("Item added to cart!");
}

document.addEventListener("DOMContentLoaded", updateCartDisplay);
