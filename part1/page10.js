function greet(){
    console.log("hello world")
}
greet()

function greet(name){
    console.log(`hello ${name}`)
}
greet("sneha")

function add(a,b){
    return a+b
}
let sum=add(10,20)
console.log(sum)

function greet(name="guest"){
    console.log(`hello ${name}`)
}
greet()
greet("sneha")