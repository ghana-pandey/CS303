let numArray;


describe("map practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
    
    });

    it("doubles an array of numbers", function () {
        assert.deepEqual(ownMap(numArray,double), [10, 0, 14, 154, -40, 600, 102, 4]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

   
});

describe("filter practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
       
    });

    it("filter all even numbers", function () {
        assert.deepEqual(ownFilter(numArray,returnEven), [0, -20, 300, 2]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it("find even", function () {
        assert.strictEqual(ownFilter(numArray,returnEven), 0);
        assert.strictEqual(findEvenNum([1, 3, 801]), undefined);
    });
});