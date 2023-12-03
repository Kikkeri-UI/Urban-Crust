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
        img: './Icons/hawaiian.webp',
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

// counter

const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const counterValue = document.getElementById('counter-value');
const priceValue = document.getElementById('price');

let counter = 1;
let price = 1;

incrementBtn.addEventListener('click',()=>{
    counter++;
    counterValue.innerHTML = counter;
    price = counter * 10.99;
    priceValue.innerHTML = price;
})

decrementBtn.addEventListener('click',()=>{
    if(counter!==0){
        counter--;
    }
    else{
        counter = 0;
    }
    counterValue.innerHTML = counter;
    price = counter * 10.99;
    priceValue.innerHTML = price;
})


