// cart.js
function displayCartItems(items) {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
    });
}

// Example cart data (replace with actual cart data)
const cartData = [
    { name: 'Margherita', price: 10.99 },
    { name: 'Pepperoni', price: 12.99 }
];

// Display initial cart items
displayCartItems(cartData);
