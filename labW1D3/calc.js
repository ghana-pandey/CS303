"use strict"

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
 function getValue(c,d){
     this.a=c;
     this.b=d;

 }
this.sum=function(){
    return this.a+this.b;
}
this.mul=function(){
    
     return this.a*this.b
 }
}
 let calc=new Calculator();
 calc.getValue(4,5);
calc.sum();
calc.mul();

