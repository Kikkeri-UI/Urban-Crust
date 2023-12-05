
const menu =[
    {
        id: 1,
        title: 'Pepproni Passion',
        category: 'Pizza',
        price: '£10.99',
        ingredients: '2x pepperoni | 2x cheese',
        img: './Icons/passion.webp',
    },
    {
        id: 2,
        title: 'Margherita Marvel',
        category: 'Pizza',
        price: '£9.99',
        ingredients: 'Tomato sauce | Mozzarella cheese | Basil',
        img: './Icons/margherita.webp',
    },
    {
        id: 3,
        title: 'Vegetarian Delight',
        category: 'Pizza',
        price: '£11.99',
        ingredients: 'Mushrooms | Bell peppers | Onions | Olives | Cheese',
        img: './Icons/veg-delight.webp',
    },
    {
        id: 4,
        title: 'Meat Lovers Feast',
        category: 'Pizza',
        price: '£12.99',
        ingredients: 'Pepperoni | Sausage | Bacon | Ham | Cheese',
        img: './Icons/meatlover.webp',
    },
    {
        id: 5,
        title: 'Hawaiian Bliss',
        category: 'Pizza',
        price: '£10.99',
        ingredients: 'Ham | Pineapple | Cheese',
        img: './Icons/four.webp',
    },
    {
        id: 6,
        title: 'Mediterranean Magic',
        category: 'Pizza',
        price: '£13.99',
        ingredients: 'Feta cheese | Kalamata olives | Tomatoes | Spinach',
        img: './Icons/med.webp',
    },
    {
        id: 7,
        title: 'BBQ Chicken Supreme',
        category: 'Pizza',
        price: '£14.99',
        ingredients: 'BBQ chicken | Red onions | Bell peppers | Cheese',
        img: './Icons/bbq.webp',
    },
    {
        id: 8,
        title: 'Spicy Sausage Sensation',
        category: 'Pizza',
        price: '£11.99',
        ingredients: 'Spicy sausage | Jalapeños | Onions | Cheese',
        img: './Icons/spicy.webp',
    },
    {
        id: 9,
        title: 'Four Cheese Extravaganza',
        category: 'Pizza',
        price: '£12.99',
        ingredients: 'Mozzarella | Cheddar | Gouda | Parmesan',
        img: './Icons/four.webp',
    },
    {
        id: 10,
        title: 'Veggie Supreme',
        category: 'Pizza',
        price: '£12.99',
        ingredients: 'Broccoli | Mushrooms | Black olives | Tomatoes | Cheese',
        img: './Icons/supreme.webp',
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
    },
    {
        id: 12,
        title: 'Cheese doughballs',
        category: 'Sides',
        price: '£6.99',
        ingredients: 'doughballs loaded with cheese',
        img: './Icons/cheese-doughball.webp',
    },
    {
        id: 13,
        title: 'Pepperoni doughballs',
        category: 'Sides',
        price: '£6.99',
        ingredients: 'doughballs loaded with cheese and pepperoni',
        img: './Icons/pepperoni-doughball.webp',
    },
    {
        id: 14,
        title: 'Loaded Fries Cheese',
        category: 'Sides',
        price: '£5.99',
        ingredients: 'Crispy fries loaded with cheese',
        img: './Icons/lfries-cheese.webp',
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
    },
    {
        id: 22,
        title: 'Strawberry Cheesecake',
        category: 'Desserts',
        price: '£8.99',
        ingredients: 'Classic New York-style cheesecake',
        img: './Icons/cheesecake-icecream.webp',
    },
    {
        id: 23,
        title: 'Choco lava cake',
        category: 'Desserts',
        price: '£8.99',
        ingredients: 'Lava of chocoloate awaits you',
        img: './Icons/cheesecake-icecream.webp',
    },
    {
        id: 24,
        title: 'Death by Caramel',
        category: 'Desserts',
        price: '£8.99',
        ingredients: 'Classic New York-style cheesecake',
        img: './Icons/cheesecake-icecream.webp',
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
    },
    {
        id: 32,
        title: 'Orange Juice',
        category: 'Drinks',
        price: '£3.99',
        ingredients: 'Freshly squeezed orange juice',
        img: './Icons/orange-juice.webp',
    },
    // Add more drink items as needed
];

const menuGrid = document.querySelector('.menu-grid');

window.addEventListener('DOMContentLoaded',()=>{
    displayMenu(menu);
    console.log('called');
})

const sidesFilter = document.getElementById('filter-sides');
const pizzaFilter = document.getElementById('filter-pizza');
const dessertFilter = document.getElementById('filter-desserts');
const drinksFIlter = document.getElementById('filter-drinks');

pizzaFilter.addEventListener('click',()=>{
    displayMenu(menu);
})

sidesFilter.addEventListener('click',()=>{
    displayMenu(sides);
})

dessertFilter.addEventListener('click',()=>{
    displayMenu(desserts);
})

drinksFIlter.addEventListener('click',()=>{
    displayMenu(drinks);
})

function displayMenu(menuItem){
    let displayMenuItems = menuItem.map((item,index)=>{
        const uniqueId = `item-${index}`;
        console.log(uniqueId);
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
                    <button id="increment">+</button>
                    <div id="counterValue">0</div>
                    <button id="decrement">-</button>
                </div>
                <div class="price">
                    <h3 style="font-family: Grandstander; font-size: 16px; font-weight: 700; margin-left: 40px;">${item.price}</h3>
                </div>
            </div>
            <button class="cart-btn">Add to cart</button>
        </div>
    </div>`;
    })
    displayMenuItems = displayMenuItems.join('');
    menuGrid.innerHTML = displayMenuItems;
}
