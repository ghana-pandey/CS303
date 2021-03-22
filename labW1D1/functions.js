"use strict";

exports.maxOfThree=maxOfThree;
exports.findLongestWord=findLongestWord;


/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if(a>b &&a >c)
    return a;
    else if(b>a && b> c)
    return b
    else
    return c;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for(let i=0;i<arr.length;i++){
        tot=tot+arr[i];
    }


    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
     for(let i=0;i<arr.length;i++){
         tot=tot*arr[i];
     }
    return tot;

}

/**
 * @param (String) of sentences
 * @returns longest length of word in string
 */
function findLongestWord(str)
{
   new arr= str.split(" ")
    max=arr[0].length;
    for(let i=0;i<arr.length;i++)
    {
      if(max>arr[0].length)
      max=arr[i];
    }
    return arr[i];
}