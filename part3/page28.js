const numbers =[11, 22, 33, 44, 55];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    numbers.forEach((number) => {
        console.log(number);
    });
}
numbers.map((number) => {
    console.log(number);
});

const numbers1 =[11, 22, 33, 44, 55];
const newArr = numbers1.map((number) => {
    return number * 2;
});
console.log(newArr);

const numbers2 =[11, 22, 33, 44, 55];
const newArr1 = numbers2.filter((number) => {
    return number > 30;
});
console.log(newArr1);