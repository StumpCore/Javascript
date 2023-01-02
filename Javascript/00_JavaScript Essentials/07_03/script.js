/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);
console.log(backpackContents.join("-"));

backpackContents.push("pencil", 5);
backpackContents.unshift("First Item");

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

let longItems = backpackContents.find(function (item) {
  if (item.length >= 2) {
    return item;
  }
});
console.log("longItems:", longItems);
