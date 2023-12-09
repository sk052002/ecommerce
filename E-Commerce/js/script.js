let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear previous items
    cartItemsElement.innerHTML = '';

    let total = 0;

    // Populate cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);

        // Update total
        total += item.price;
    });

    // Update total on the cart page
    cartTotalElement.textContent = total.toFixed(2);
}
