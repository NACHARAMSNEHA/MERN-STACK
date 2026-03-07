const employee={
    name:"John",
    age:30,
    city:"New York"
    
}
for(let key in employee){
    console.log(key,employee[key]);
}
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));