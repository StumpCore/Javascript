/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Cup from "./cup.js";
import Computer from "./Computer.js";

const everydayCup = new Cup(
    "Martin",
    "Right",
    50,
    "Red",
    "Metal",
    false
);

const everydayComputer = new Computer(
    "Marcs PC",
    false,
    "Intel",
    500,
    "Microsoft",
    true,
    true,
    true,
    "offline"
)

console.log("My EverydayCup: ", everydayCup);
console.log("My Everyday Computer: ", everydayComputer);