const fruit = {
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

for (const key in fruit) {
    console.log(key+" : "+ JSON.stringify(fruit[key]));
}