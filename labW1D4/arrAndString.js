/**
 * 
 * @param {string} str 
 * @returns {strin} str
 */
function ucFirst(str)
{
    
    return str.charAt(0).toUpperCase() + str.slice(1);
    
}

/**
 * @param {String} str
 * @returns boolean
 */
function checkSpam(str){
   let checkStr= str.toLowerCase();
    if(checkStr.includes("viagra")||checkStr.includes("xxx"))
    return true;
    else
    return false;
}

function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  /**
   * @param{string}
   * @param{max length}
   * @return string
   */
   function truncate(str, maxlength) {
   if(str.length>maxlength)
   return str.slice(0,maxlength-1) +"...";
   else
   return str;
  }
  let c="Hi everyone!";

  /**
   * @param{String}
   * @return String
   */
  function extractCurrencyValue(str)
  {
      return +str.slice(1);

  }
  
function camelize(str)
{
    let arrStr=str.split("-");
    let cap=arrStr[0];
    for(let i=1;i<arrStr.length;i++)
    {
     cap+=makeWordCap(arrStr[i]);
    }
    return cap;

}
function makeWordCap(str)
{
    return str[0].toUpperCase()+str.slice(1);
}