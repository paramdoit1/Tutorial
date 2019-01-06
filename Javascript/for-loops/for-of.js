const fruitList = ['banana', 'apple', 'orange', 'pinapple', 'lemon'];

console.log('Fruit List::: ');

for (const fruit of fruitList) {
    console.log(fruit);
};

const fruitList1 = {
    bananafruit: {
        name: 'banana',
        price: 10,
    },
    appleFruit: {
        name: 'apple',
        price: 20,
    },
    orangeFruit: {
        name: 'orange',
        price: 30,
    }
}
const list = Object.values(fruitList1);

console.log('Fruit Details::: ');

 for (const fruit of list) {
    for(const key in fruit) {
        console.log(key+':'+fruit[key]);
    }
} 

