const employee ={
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        street: "123 Main St",
        city: "Hyderabad",
        country: "India"
    }
};
    const {name, age, position} = employee;
console.log(name); // John Doe
console.log(age); // 30
console.log(position); // Software Engineer