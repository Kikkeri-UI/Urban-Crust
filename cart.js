
let cartItems = [];
let itemCounts = {};
let addedToCart = [];
window.addEventListener('DOMContentLoaded', () => {

    debugger;
    const storedCart = localStorage.getItem('cart');
    addedToCart = storedCart ? JSON.parse(storedCart) : [];
    console.log(addedToCart);
    console.log(cartItems);
    const storedItemCounts = localStorage.getItem('itemCounts');
    itemCounts = storedItemCounts ? JSON.parse(storedItemCounts) : {};
    const uniqueItems = new Set([...cartItems, ...addedToCart].map(item => item.id));
    
    // Merge arrays based on unique item ids
    cartItems = Array.from(uniqueItems, id => {
        const existingItem = cartItems.find(item => item.id === id);
        const addedItem = addedToCart.find(item => item.id === id);
        return existingItem ? { ...existingItem } : { ...addedItem };
    });
    console.log(cartItems);
    displayCartItems(cartItems);
    updateCount();
    displayTotalPrice(cartItems);
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
            localStorage.setItem('cart', JSON.stringify(cartItems));
            alert(`You are removing from the cart`)
            if(cartItems.length!=0){
                displayCartItems(cartItems);
            }
            else{
                window.location.href = 'menu.html'
            }
            displayTotalPrice(cartItems);
            
        })
    })
}

function updateCount(){
    const incrementBtns = document.querySelectorAll('.increment');
    const counterValue = document.querySelectorAll('.counterValue');
    const decrementbtns = document.querySelectorAll('.decrement');
    
    incrementBtns.forEach((btn,index)=>{
        btn.addEventListener('click',(e)=>{
            debugger;
            const itemId = cartItems[index].id;
            const decrement = e.target.closest('.container').querySelector('.decrement');
            const counterVal = e.target.closest('.container').querySelector('.counterValue');
            const priceValue = e.target.closest('.container').querySelector('#price');
            decrement.disabled = false;
            itemCounts[itemId] = Number(counterVal.textContent) + 1;
            counterValue[index].textContent = itemCounts[itemId]; 
            cartItems[index].count = Number(counterVal.textContent);
            cartItems[index].amount = (cartItems[index].price.slice(1) * cartItems[index].count).toFixed(2);
            priceValue.innerHTML = `£${cartItems[index].amount}`;
            console.log(cartItems[index].amount)
            localStorage.setItem('cart', JSON.stringify(cartItems));
            displayTotalPrice(cartItems);
            
        })
    })
    decrementbtns.forEach((btn,index)=>{
        btn.addEventListener('click',(e)=>{
            debugger;
            const itemId = cartItems[index].id;
            const counterVal = e.target.closest('.container').querySelector('.counterValue');
            const priceValue = e.target.closest('.container').querySelector('#price');
            if(counterVal.textContent === '1'){
                btn.disabled = true
                itemCounts[itemId] = 1;
            }
            else{
                btn.disabled = false;
                itemCounts[itemId] = counterVal.textContent - 1;
                counterValue[index].textContent = itemCounts[itemId];
                cartItems[index].count = Number(counterVal.textContent);
                cartItems[index].amount = cartItems[index].price.slice(1) * cartItems[index].count;
                priceValue.innerHTML = `£${cartItems[index].amount}`;
                localStorage.setItem('cart', JSON.stringify(cartItems));
            }
            displayTotalPrice(cartItems);
            
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
                <h3 id="price"class="cart-item-heading" style="margin-right: 20px;">£${item.amount}</h3>
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

//

function displayTotalPrice(cartItem) {
    let totalPrice = cartItem.reduce((accumulator, currentValue) => {
        return Number(accumulator) + Number(currentValue.amount);
    }, 0).toFixed(2);
    
    totalPrice = totalPrice;
    let checkoutPrice = document.querySelector('.totalprice');
    checkoutPrice.innerHTML = `Cart total price: ${totalPrice}`;

    return `<h2>Cart total price: £ ${totalPrice}</h2>`;
}

function fun(){
    console.log('clicked')
}




