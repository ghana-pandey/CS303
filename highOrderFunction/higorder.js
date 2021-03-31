function ownMap(arr,fun)
{
    let newarr=[]
    for(let i=0;i<arr.length;i++)
    {
        let result=fun(arr[i]);
        newarr.push(result)
    }
    return newarr;
}

function double(n){
    return n*2;
}

let a=[1,2,3,4]
console.log(ownMap(a,double));

function ownFilter(arr,fun)
{
    let newArr=[]
    for(let i=0;i<arr.length;i++)
    {
        let result=fun(arr[i]);
        if(result)
        {
            newArr.push(result)
        }
    }
    return newArr
}
function returnEven(n)
{
    if(n%2==0)
    return n;
}
function returnPositve(a)
{
    if(a>0)
    {
        return a;
    }
    
}
let a=[1,2,3,4,5,6]
let b=[-1,-2,-3,-4,1,2,3,4]

console.log(ownFilter(a,returnEven));
console.log(ownFilter(b,returnPositve));



