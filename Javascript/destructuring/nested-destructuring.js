let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true    // something extra that we will not destruct
  };
  
  // destructuring assignment on multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;

  
  console.log('width: ', width);
console.log('height: ', height);
console.log('Title: ', title);