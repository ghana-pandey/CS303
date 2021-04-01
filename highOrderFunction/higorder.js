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





