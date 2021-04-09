const bicycle = {
    
    gear: 1,
    speed: 0,

    speedUp: function(increment) {
        this.speed += increment;
    },

    applyBrake: function(decrement) {

        this.speed -= decrement;
    },

   

};

let mountainBike = {

    gear: 3,
    speed: 2,

   

}
mountainBike.__proto__ = bicycle;
