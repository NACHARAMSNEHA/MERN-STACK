const employee ={
    name:'Alice',
    basic : 1000,
    bonus : 200,
    getTotalSalary : function(){
        return this.basic + this.bonus
    } 
}
console.log(employee.getTotalSalary())