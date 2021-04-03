"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
 //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
return function(item){
    return arr.includes(item);
}
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 3,10])));




/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
return function(item)
{
return item>=low && item<=high;     
}}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log( arr1.filter(inBetween(3, 6)) );




/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){
    f
        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
      }




/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
        let shooters = [];
      
        let i = 0;
        while (i < 10) {
            let j = i;
            let shooter = function() { // shooter function
              alert( j ); // should show its number
            };
          shooters.push(shooter);
          i++;
        }
      
        return shooters;
      }
      
      // let army = makeArmy();
      
      // // Now the code works correctly
      // army[0](); // 0
      // army[5](); // 5
  

  