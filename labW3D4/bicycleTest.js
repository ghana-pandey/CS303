describe("mountainBike", function () {


    it("checks mountainBike proto inheritance", function () {
        mountainBike.speedUp(100);
        mountainBike.applyBrake(10);
        assert.strictEqual(mountainBike.speed, 92);
        assert.strictEqual(mountainBike.gear, 3);
    });

});