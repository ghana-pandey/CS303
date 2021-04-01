"use-strict"
/**
 * 
 * @param {number} 
 * @returns {number} n
 */

function sumTo(n)
 {
     if(n==0)
     return 0;
     else
     return n+sumTo(n-1);
 }   
 console.log(sumTo(10))  
 
 /**
 * 
 * @param {number} n 
 * @returns {number} n
 */
 function factorial(n)
 {
     if(n===0||n===1)
     return 1;
     else
     return n*factorial(n-1);
 }
 console.log(factorial(5));

 
 /**
 * 
 * @param {number} n 
 * @returns {number} n
 */
 function fibonacci(n)
 {
     if(n<=1)
     return n;
     return fibonacci(n-1)+fibonacci(n-2);
 }
 console.log(fibonacci(10));