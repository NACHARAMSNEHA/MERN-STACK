function f1(a, b) {
    return a + b;
}
const result = f1(1, 2);
console.log(result)

//arrow function
const f2 = (a, b) => a + b;
const result2 = f2(1, 2);
console.log(result2)

const f3 = (a, b) => {
    const sum = a + b;
    return sum;
}
const result3 = f3(1, 2);
console.log(result3)