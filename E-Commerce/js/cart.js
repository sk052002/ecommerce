// JavaScript functions for handling cart and checkout logic

// Function to add an item to the cart
function addToCart(productName, price, imageUrl) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: productName, price: price, imageUrl: imageUrl });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to update the cart display
function updateCart() {
    var cartItemsContainer = document.getElementById("cartItems");
    var totalAmountElement = document.getElementById("totalAmount");

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var totalAmount = 0;

    cartItemsContainer.innerHTML = "";

    cartItems.forEach(function (item) {
        var cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        var img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = item.name;

        var itemDetails = document.createElement("div");
        itemDetails.className = "item-details";
        itemDetails.innerHTML = `<h3>${item.name}</h3><p>$${item.price.toFixed(2)}</p>`;

        var removeButton = document.createElement("button");
        removeButton.className = "remove-btn";
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeFromCart(item);
        };

        cartItem.appendChild(img);
        cartItem.appendChild(itemDetails);
        cartItem.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItem);

        totalAmount += item.price;
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(itemToRemove) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.filter(function (item) {
        return item.name !== itemToRemove.name;
    });

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    updateCart();
}

// Initial update of the cart when the page loads
updateCart();
