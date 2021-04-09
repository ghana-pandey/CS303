"use strict"

/**
 * 

 * @returns {Accumulator} constructor function
 */
 function Accumulator(initialValue,increment){
    this.currentValue=initialValue
    this.increment=increment

    
this.accumulate=function(){
   this.currentValue= this.currentValue+this.increment
   return this.currentValue;
   

}
this.report=function(){
    return this.currentValue
}
}
let c=new Accumulator(5,10);
console.log(c.accumulate());
console.log(c.accumulate());

console.log(c.report());