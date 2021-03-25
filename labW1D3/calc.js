function Calculator() {
    this.getValue=function(c,d)
    {
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
   console.log(calc.sum());
   console.log(calc.mul());