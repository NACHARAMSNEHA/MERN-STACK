/*const obj = {
    name: 'Alice',
    skill: 'JavaScript',
}
console.log(obj.name) // Alice
console.log(obj.skill) 
// JavaScript
console.log(obj) */

const obj=new Object()
obj.name='Alice'
obj.skill='JavaScript'
console.log(obj) 
obj.score=100
console.log(obj)
delete obj.skill
console.log(obj)
obj["rank"]=1
console.log(obj)
let key ='city'
let value='hyderabad'
obj[key]=value
console.log(obj)