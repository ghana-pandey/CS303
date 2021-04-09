function Calculator()
{
    this.getValue=function(c,d)
    {
        this.a=c;
        this.b=d
    }
    this.add=function()
    {
        return this.a+this.b;
    }
    this.mul=function()
    {
        return this.a*this.b;
    }

}
let obj=new Calculator();
obj.getValue(5,10);
console.log(obj.a);
console.log(obj.add());
console.log(obj.mul());