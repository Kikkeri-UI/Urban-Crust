let quantity = document.querySelector('.count');
let title = document.querySelector('.title');
let price = document.querySelector('.amount');
let cartGrid = document.querySelector('.single-item');

window.addEventListener('DOMContentLoaded',()=>{
    debugger
    const storedCart = localStorage.getItem('cart');
    addedToCart = storedCart ? JSON.parse(storedCart) : [];
    console.log(addedToCart);
    displayCartItems(addedToCart);
})

document.getElementById('checkoutForm').addEventListener('submit', function (event) {
    //event.preventDefault();

    // Implement your logic to handle the form submission
    // You can retrieve form values using document.getElementById or other methods
    // For example:
     const firstName = document.getElementById('firstName').value;
     const lastName = document.getElementById('lastName').value;
     console.log(firstName, lastName);
    // ...

    // Perform actions like sending data to a server, showing a confirmation message, etc.
    alert('Order placed successfully!');
    
});

function displayCartItems(cartObject){
    let cartItems = cartObject.map((object)=>{
        return `<div class="item-row">
        <span class="count">${object.count}</span>
        <span class="title">${object.title}</span>
        <span class="price">${object.price}</span>
        </div>`
    });
    cartItems = cartItems.join('');
    cartGrid.innerHTML = cartItems;
}

// function goToCart(){
//     window.location.href = cart.html;
// }