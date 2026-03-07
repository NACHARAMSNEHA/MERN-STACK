const numbers =[1, 2, 3, 4, 5];
const result = numbers.find((number) => {
    return number > 3;
});
console.log(result);

const numbers1 =[1, 2, 3, 4, 5];
const result1 = numbers1.some((number) => {
    return number > 3;
});
console.log(result1);
const result2 = numbers1.every((number) => {
    return number > 3;
});
console.log(result2);

const subjectscore =[50, 60, 70, 80, 90];
const result4 = subjectscore.every((score) => {return score > 40;});
     if(result4){
        console.log("pass");
     }else{
        console.log("fail");
     }