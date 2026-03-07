/*setTimeout(() => {},3000);
console.log('hello world');

setTimeout(() => {
    console.log('hello world');
},3000);

setTimeout(() => {
    console.log('hello world');
},3000);
console.log('welcome to javascript');

function f1(){
    console.log("beginning")
}
function f2(){
    setTimeout(() => {
        console.log("middle")
    },3000);
}
function f3(){
    console.log("end")
}
f1();
f2();
f3();

/*function f1(){
    console.log("beginning")
}
function f2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("middle")
            resolve();
        },3000);
    });
}*/
function f1(){
    console.log("beginning")
}
function f2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("middle")
            resolve();
        },3000);
    });
}
function f3(){
    console.log("end")
}
async function main(){
    try{f1();
    await f2();
    f3();
} catch (error) {
    console.error("An error occurred:", error);
}
}
main();