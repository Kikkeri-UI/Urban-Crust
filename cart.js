
let cartItems = [];
window.addEventListener('DOMContentLoaded', () => {
    // Retrieve cart data from local storage
    debugger;
    const storedCart = localStorage.getItem('cart');
    let addedToCart = storedCart ? JSON.parse(storedCart) : [];
    cartItems = [...cartItems, ...addedToCart];
    console.log(cartItems);
    displayCartItems(cartItems);
    
    
});

function initCartButtons(){
    let deleteBtns = document.querySelectorAll('.delete-img');
    deleteBtns.forEach((btn,index)=>{
        btn.addEventListener('click',(e)=>{
            debugger;
            console.log(e.target)
            const itemId = cartItems[index].id;
            console.log(itemId);
            cartItems = cartItems.filter((item)=>{
               return item.id !== itemId;
            })
            //console.log(updatedCart);
            // alert(`${item.title} being removed from the cart`);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            alert(`You are removing from the cart`)
            displayCartItems(cartItems);
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
    initCartButtons();
}




