/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {

  //Backpackname and Function for new Name
  name: "Everyday Backpack",
  newName: function(nameChange){
    this.name = nameChange;
  },
  //Volume and Increase Volume Function
  volume: 30,
  addBackpack: function (newBackpackSize){
    this.volume = newBackpackSize;
  },

  //Dy Backpack and change Color
  color: "grey",
  changeColor: function(newColor){
    this.color = newColor;
  },
  //Change Pocket Number...
  pocketNum: 15,
  ripOpen: function(numberOfNewPockets){
    this.pocketNum = numberOfNewPockets;
  },

  //Strap and Function of it
  strapLength: {
    left: 26,
    right: 26,
  },
  strapAdjustment: function (lengthLeft, lengthRight){
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight
  },

  //Lid and Function of it
  lidStatus: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};
