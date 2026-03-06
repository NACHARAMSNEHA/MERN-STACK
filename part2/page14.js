const stock =[
    {
        name:"Wipro",
        lastprice:200,
        currprice:250
    },
    {
        name:"Deloite",
        lastprice:100,
        currprice:150
    }
]
function calc(obj){
    console.log(obj.lastprice);
    obj.growth=obj.lastprice-obj.currprice
    obj.growthper=(obj.growth*100)/obj.lastprice
    console.log(obj)
}
calc(stock[0])
calc(stock[1])