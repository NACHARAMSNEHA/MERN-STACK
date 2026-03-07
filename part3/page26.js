/*const items ={
    name:"product1",
    price:100,
    quantity:2,
}
const obj ={...items,rating:4}
console.log(obj);
*/
let items={
    name:"product1",
    price:100,
    quantity:2,
}
items.rating=4;
items = {...items,discount:10}
console.log(items);