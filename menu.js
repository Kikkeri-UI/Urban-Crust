
const pizzas = [
    {
        id: 1,
        title: 'Pepproni Passion',
        category: 'Pizza',
        price: '£10.99',
        ingredients: '2x pepperoni | 2x cheese',
        img: './Icons/passion.webp',
        count: 1
    },
    {
        id: 2,
        title: 'Margherita Marvel',
        category: 'Pizza',
        price: '£9.99',
        ingredients: 'Tomato sauce | Mozzarella cheese | Basil',
        img: './Icons/margherita.webp',
        count: 1
    },
    {
        id: 3,
        title: 'Vegetarian Delight',
        category: 'Pizza',
        price: '£11.99',
        ingredients: 'Mushrooms | Bell peppers | Onions | Olives | Cheese',
        img: './Icons/veg-delight.webp',
        count: 1
    },
    {
        id: 4,
        title: 'Meat Lovers Feast',
        category: 'Pizza',
        price: '£12.99',
        ingredients: 'Pepperoni | Sausage | Bacon | Ham | Cheese',
        img: './Icons/meatlover.webp',
        count: 1
    },
    {
        id: 5,
        title: 'Hawaiian Bliss',
        category: 'Pizza',
        price: '£10.99',
        ingredients: 'Ham | Pineapple | Cheese',
        img: './Icons/four.webp',
        count: 1
    },
    {
        id: 6,
        title: 'Mediterranean Magic',
        category: 'Pizza',
        price: '£13.99',
        ingredients: 'Feta cheese | Kalamata olives | Tomatoes | Spinach',
        img: './Icons/med.webp',
        count: 1
    },
    {
        id: 7,
        title: 'BBQ Chicken Supreme',
        category: 'Pizza',
        price: '£14.99',
        ingredients: 'BBQ chicken | Red onions | Bell peppers | Cheese',
        img: './Icons/bbq.webp',
        count: 1
    },
    {
        id: 8,
        title: 'Spicy Sausage Sensation',
        category: 'Pizza',
        price: '£11.99',
        ingredients: 'Spicy sausage | Jalapeños | Onions | Cheese',
        img: './Icons/spicy.webp',
        count: 1
    },
    {
        id: 9,
        title: 'Four Cheese Extravaganza',
        category: 'Pizza',
        price: '£12.99',
        ingredients: 'Mozzarella | Cheddar | Gouda | Parmesan',
        img: './Icons/four.webp',
        count: 1
    },
    {
        id: 10,
        title: 'Veggie Supreme',
        category: 'Pizza',
        price: '£12.99',
        ingredients: 'Broccoli | Mushrooms | Black olives | Tomatoes | Cheese',
        img: './Icons/supreme.webp',
        count: 1
    },
]
const sides = [
    {
        id: 11,
        title: 'Garlic Bread',
        category: 'Sides',
        price: '£4.99',
        ingredients: 'cheesy garlic bread',
        img: './Icons/garlic-bread.webp',
        count: 1
    },
    {
        id: 12,
        title: 'Cheese doughballs',
        category: 'Sides',
        price: '£6.99',
        ingredients: 'doughballs loaded with cheese',
        img: './Icons/cheese-doughball.webp',
        count: 1
    },
    {
        id: 13,
        title: 'Pepperoni doughballs',
        category: 'Sides',
        price: '£6.99',
        ingredients: 'doughballs loaded with cheese and pepperoni',
        img: './Icons/pepperoni-doughball.webp',
        count: 1
    },
    {
        id: 14,
        title: 'Loaded Fries Cheese',
        category: 'Sides',
        price: '£5.99',
        ingredients: 'Crispy fries loaded with cheese',
        img: './Icons/lfries-cheese.webp',
        count: 1
    }
    // Add more side items as needed
];

const desserts = [
    {
        id: 21,
        title: 'Chocolate cookie',
        category: 'Desserts',
        price: '£7.99',
        ingredients: 'Rich chocolate brownie with nuts',
        img: './Icons/cookie.webp',
        count: 1
    },
    {
        id: 22,
        title: 'Strawberry Cheesecake',
        category: 'Desserts',
        price: '£8.99',
        ingredients: 'Classic New York-style cheesecake',
        img: './Icons/cheesecake-icecream.webp',
        count: 1
    },
    {
        id: 23,
        title: 'Choco lava cake',
        category: 'Desserts',
        price: '£8.99',
        ingredients: 'Lava of chocoloate awaits you',
        img: './Icons/cheesecake-icecream.webp',
        count: 1
    },
    {
        id: 24,
        title: 'Death by Caramel',
        category: 'Desserts',
        price: '£8.99',
        ingredients: 'Classic New York-style cheesecake',
        img: './Icons/cheesecake-icecream.webp',
        count: 1
    },

];

const drinks = [
    {
        id: 31,
        title: 'Cola',
        category: 'Drinks',
        price: '£2.99',
        ingredients: 'Classic cola beverage',
        img: './Icons/cola.webp',
        count: 1
    },
    {
        id: 32,
        title: 'Orange Juice',
        category: 'Drinks',
        price: '£3.99',
        ingredients: 'Freshly squeezed orange juice',
        img: './Icons/orange-juice.webp',
        count: 1
    },

];

let addedPizzas = [];
let addedSides = [];
let addedDesserts = [];
let addedDrinks = [];
let updatedMenu = [];
const itemCounts = {};

const menuGrid = document.querySelector('.menu-grid');

window.addEventListener('DOMContentLoaded', () => {
   
    const storedCart = localStorage.getItem('cart');
    let existingCartItems = storedCart ? JSON.parse(storedCart) : [];
     const menu = [...pizzas, ...sides, ...desserts, ...drinks];
     const selectedItem = existingCartItems.map((cartItem)=>{
        const matchingItem = menu.find((menuItem) => menuItem.id === cartItem.id );
        if(matchingItem){
            matchingItem.count = cartItem.count;
            matchingItem.price = cartItem.amount;
        }
        return matchingItem || cartItem;
    })
    
    const unselectedItems = menu.filter((menuItem) => !existingCartItems.some((cartItem) => cartItem.id === menuItem.id));
    console.log(unselectedItems);
    updatedMenu = selectedItem.concat(unselectedItems);
    console.log(updatedMenu);
    debugger;

    addedPizzas = updatedMenu.filter((item) => item.category === 'Pizza');
    addedSides = updatedMenu.filter((item) => item.category === 'Sides');
    addedDesserts = updatedMenu.filter((item) => item.category === 'Desserts');
    addedDrinks = updatedMenu.filter((item) => item.category === 'Drinks');
    
    displayFilteredMenu(addedPizzas,pizzas);
})

let cartItems = [];

function addToCart() {
    const cartBtns = document.querySelectorAll('.cart-btn');
    cartBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            const itemId = e.target.dataset.id;
            const selectedItem = findItemById(itemId);
            //console.log(selectedItem);
            const counterVal = e.target.closest('.container').querySelector('.counterValue');
            const quantity = counterVal.textContent;

            //console.log(quantity);
            debugger
            let existingItem = cartItems.find((item) => item.id === selectedItem.id);
            let amount = selectedItem.price.slice(1) * quantity;
            console.log(amount);
            if (!existingItem) {
                cartItems.push({ ...selectedItem, count: quantity, amount: amount });
            }
            else {
                existingItem.count = quantity;
                existingItem.amount = amount;
                cartItems.push({ ...selectedItem, count: quantity, amount: amount });
            }
            console.log(cartItems);
            console.log(cartItems.length);
            alert(`${quantity} ${selectedItem.title}(s) added to the cart`);
            const storedCart = localStorage.getItem('cart');
            let existingCartItems = storedCart ? JSON.parse(storedCart) : [];

            existingCartItems = [...existingCartItems, { ...selectedItem, count: quantity, amount: amount }];
            console.log(existingCartItems);

            localStorage.setItem('cart', JSON.stringify(existingCartItems));

        })
    })
}

const sidesFilter = document.getElementById('filter-sides');
const pizzaFilter = document.getElementById('filter-pizza');
const dessertFilter = document.getElementById('filter-desserts');
const drinksFilter = document.getElementById('filter-drinks');

function displayFilteredMenu(categoryItems, defaultItems) {
    if (updatedMenu.length > 0) {
        displayMenu(categoryItems);
    } else {
        displayMenu(defaultItems);
    }
}

pizzaFilter.addEventListener('click', () => {
    displayFilteredMenu(addedPizzas,pizzas);
})

sidesFilter.addEventListener('click', () => {
    displayFilteredMenu(addedSides,sides)
})

dessertFilter.addEventListener('click', () => {
    displayFilteredMenu(addedDesserts,desserts);
})

drinksFilter.addEventListener('click', () => {
    displayFilteredMenu(addedDrinks,drinks);
})



function updateCount() {
    const incrementBtns = document.querySelectorAll('.increment');
    const counterValue = document.querySelectorAll('.counterValue');
    const decrementbtns = document.querySelectorAll('.decrement');
    incrementBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            // debugger;
            const itemId = e.target.closest('.container').querySelector('.cart-btn').dataset.id;
            const decrement = e.target.closest('.container').querySelector('.decrement');
            decrement.disabled = false;
            itemCounts[itemId] = (itemCounts[itemId] || 1) + 1;
            counterValue[index].textContent = itemCounts[itemId];
            updatePrice(itemId, itemCounts[itemId], index);
            //debugger
        })
    })
    decrementbtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            //console.log(e);
            debugger;
            const itemId = e.target.closest('.container').querySelector('.cart-btn').dataset.id;
            const counterVal = e.target.closest('.container').querySelector('.counterValue');

            if (counterVal.textContent === '1') {
                btn.disabled = true
                itemCounts[itemId] = 1;
                //console.log(itemCounts);
            }
            else {
                btn.disabled = false;
                itemCounts[itemId] = (itemCounts[itemId] || 1) - 1;
                counterValue[index].textContent = itemCounts[itemId];
            }
            updatePrice(itemId, itemCounts[itemId], index);

        })
    })
}

function updatePrice(itemId, quantity, index) {
    const item = findItemById(itemId);
    //console.log(item);
    const priceElement = document.querySelector(`#price-${index}`);
    const totalPrice = (item.price.slice(1) * quantity.toFixed(2));
    //console.log(totalPrice);
    priceElement.innerHTML = `£${totalPrice}`;
    return totalPrice;
}

function findItemById(id) {
    const menu = [...pizzas, ...sides, ...desserts, ...drinks];
    return menu.find((item) => item.id == id);
}

function displayMenu(menuItem) {
    let displayMenuItems = menuItem.map((item, index) => {
        const uniqueId = `item-${index}`;
        return `<div class="container">
        <div class="menu-image-container">
            <img src="${item.img}" class="menu-img">
        </div>
        <div class="menu-info-container">
            <div class="menu-title-desc">
                <h2 class="menu-title">${item.title}</h2>
                <p class="menu-desc">${item.ingredients}</p>
            </div>
            <div class="counter-price">
                <div class="counter">
                    <button class="increment">+</button>
                    <div class="counterValue" id='counter-${index}'>${item.count}</div>
                    <button class="decrement">-</button>
                </div>
                <div class="price">
                    <h3 id='price-${index}' style="font-family: Grandstander; font-size: 16px; font-weight: 700; margin-left: 40px;">${item.price}</h3>
                </div>
            </div>
            <button class="cart-btn" data-id="${item.id}">Add to Cart</button>
        </div>
    </div>`;
    })
    displayMenuItems = displayMenuItems.join('');
    menuGrid.innerHTML = displayMenuItems;
    addToCart();
    updateCount();
}

function displayUpdatedMenu(cartItem) {

    // const res = menu.map((item)=>item.id === existingCartItems.id);
    // console.log(res);
}

