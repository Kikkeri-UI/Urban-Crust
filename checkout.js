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
    
     const firstName = document.getElementById('firstName').value;
     const lastName = document.getElementById('lastName').value;
     const email = document.getElementById('email').value;
     const address = document.getElementById('address').value;
    debugger;
    alert('Order placed successfully!');
    window.location.href = 'index.html';
    localStorage.clear();
    
});

function displayCartItems(cartObject){
    let cartItems = cartObject.map((object,index)=>{
        return `<div class="item-row">
        <img class="count" src="${object.categoryLogo}"> 
        <span class="title">${object.count} * ${object.title}</span>
        <span class="price">£${object.amount}</span>
        </div>`
    });
    cartItems = cartItems.join('');
    cartGrid.innerHTML = cartItems;
}

let backToCart = document.querySelector('.cart-button');

backToCart.addEventListener('click',()=>{
    window.location.href = 'cart.html';
})

