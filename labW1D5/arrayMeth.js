/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/

function filterRange(arr,a,b)
{
    return arr.filter(
     function (item){
        return (a <= item && item <= b);
    });
}

//let arr = [5, 3, 8, 1];

//let filtered = arr.filter(filterRange);

//console.log( filterRange(arr,1,3) ); // 3,1 (matching values)

//console.log( arr ); // 5,3,8,1

/**
 * @param{array}
 * @pram{numbers}
 * @return same array
 */
 function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
  console.log( arr ); // [3, 1]



  function unique(arr)
  {
     let b=[];
     for(let i=0;i<arr.length;i++)
     {
         if(b.indexOf(arr[i])==-1)
         b.push(arr[i]);
     }
     return b;
     
  }
  let a=[1,2,2,3,1,4,5]
  console.log(unique(a));

  function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
  }
  
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }