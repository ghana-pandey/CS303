"use stirct;"
let calculator={
    a: 0,
    b: 0,
    getVlaues:function(num1,num2){
        this.a=num1;
        this.b=num2;
        //this.isAdmin=false;
    },
    sum:function(){
        return this.a+this.b
    },
    mul:function(){
        return this.a*this.b;
    }
    

};
calculator.getVlaues(2,3);
console.log(calculator.sum());
console.log(calculator.mul());


