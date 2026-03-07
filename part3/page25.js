const stock ={
    name: "Apple",
    lastprice: 150,
    currprice: 155,
    //growth:function(){
    //    return ((this.currprice - this.lastprice)/this.lastprice)*100;
    //}
    growthper: function(){
        return (this.growth()/this.lastprice)*100 + "%";
    }
};
console.log(stock.name); // Apple
console.log(stock.lastprice); // 150
console.log(stock.currprice); // 155
//console.log(stock.growth()); // 3.33
console.log(stock.growthper()); // 3.33%