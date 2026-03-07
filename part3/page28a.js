const products=[
    {id:1,name:"product1",price:25},
    {id:2,name:"product2",price:50},
    {id:3,name:"product3",price:45}
];
products.forEach((product)=>{
    console.log('ID:${product.id},name:${product.name},price:${product.price}');
});
const newArray = products.filter((product) => product.price > 40);
console.log(newArray);