/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const smartphone = {
    name : "Iphone",
    height:50,
    width: 20,
    system: "Apple",
    display_type: "Touch",
    color: "Black",
    power: "on",
    togglePower: function(powerStatus){
        this.power = powerStatus;
    },
    locked: false,
    changeLock: function (lockStatus){
        this.locked = lockStatus;
    },

    app : {
        name: "App Calculator",
        appNo: 1
    }
};

console.log(smartphone);