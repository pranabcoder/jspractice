// reduce example

// const myNumbs = [1, 2, 3, 4, 5];

// const myTotal = myNumbs.reduce((acc, cur) => {
    
//     console.log(`acc: ${acc}, cur: ${cur}`); // acc: 0, cur: 1 acc: 1, cur: 2 acc: 3, cur: 3 acc: 6, cur: 4 acc: 10, cur: 5
//     return acc + cur;

// }, 0);

// console.log(myTotal); // 15

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0);

console.log(totalPrice); // 22996



