// cart.js
// function displayCartItems(items) {
//     const cartItemsDiv = document.getElementById('cart-items');
//     cartItemsDiv.innerHTML = '';

//     items.forEach(item => {
//         const itemDiv = document.createElement('div');
//         itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartItemsDiv.appendChild(itemDiv);
//     });
// }

// // Example cart data (replace with actual cart data)
// const cartData = [
//     { name: 'Margherita', price: 10.99 },
//     { name: 'Pepperoni', price: 12.99 }
// ];

// // Display initial cart items
// displayCartItems(cartData);
let cartItems = [];
window.addEventListener('DOMContentLoaded', () => {
    // Retrieve cart data from local storage
    debugger;
    const storedCart = localStorage.getItem('cart');
    let addedToCart = storedCart ? JSON.parse(storedCart) : [];
    cartItems = [...cartItems, ...addedToCart];
    console.log(cartItems);
    displayCartItems(cartItems);
    initCartButtons();
    
});

function initCartButtons(){
    let deleteBtns = document.querySelectorAll('.delete-img');
    deleteBtns.forEach((btn,index)=>{
        btn.addEventListener('click',(e)=>{
            debugger;
            console.log(e.target)
            const itemId = cartItems[index].id;
            console.log(itemId);
            const updatedCart = cartItems.filter((item)=>{
               return item.id !== itemId;
            })
            console.log(updatedCart);
            displayCartItems(updatedCart);
        })
    })
}

let cartgrid = document.querySelector('.cart-items-grid');

function displayCartItems(cartItem){
    let cartItems = cartItem.map((item,index)=>{
        return `<div class="container">
        <div class="img-container">
            <img src="${item.img}" class="cart-item-img">
        </div>
        <div class="info-container">
            <div class="top-section">
                <h3 class="cart-item-heading">${item.title}</h3>
                <h3 class="cart-item-heading" style="margin-right: 20px;">£${item.amount}</h3>
            </div>
            <div class="desc-section">
                <p style="margin-left: 20px; margin-right: 20px;">${item.ingredients}</p>
            </div>
            <div class="bottom-section">
                <div class="counter">
                    <button class="increment">+</button>
                    <div class="counterValue" id='counter-${index}'>${item.count}</div>
                    <button class="decrement">-</button>
                </div>
                <div class="delete">
                <img src="Icons/delete.png" class="delete-img">
                </div>
            </div>
        </div>
    </div>`
    });
    cartItems = cartItems.join('');
    cartgrid.innerHTML = cartItems;
}




