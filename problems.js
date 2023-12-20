// 1. Numbers: Create a variable 'myNumber' and assign a number to it. Log the value to the console.
let myNumber = 42;

// 2. Strings: Create a variable 'myString' and assign a string to it. Log the length of the string.
let myString = "Hello, world!";

// 3. Booleans: Create a boolean variable 'isLearning' and set it to true. Log its value.
let isLearning = true;

// 4. Null: Create a variable 'emptyBox' and set its value to null. Log its type using 'typeof'.
let emptyBox = null;

// 5. Undefined: Create a variable 'notAssigned'. Don't assign any value to it. Log its type.
let notAssigned;

// 6. Objects: Create an object 'person' with properties 'name' and 'age'. Access and log the 'name' from the object.
const person = {
  name: "Alice",
  age: 30,
};

// 7. Arrays: Create an array 'colors' containing three colors. Log the second item in the array.
let colors = ["red", "green", "blue"];

// 8. Accessing String Characters: Given a string 'greeting', log the first character.
let greeting = "Hello";

// 9. Modifying Arrays: Add a fourth color to the 'colors' array. Then log the entire array.
colors.push("yellow");

// 10. Array Length: Log the number of items in the 'colors' array.

// 11. Loop Through Array: Use a loop to log each color in the 'colors' array.

// 12. Objects in Array: Create an array of objects, each with a 'type' and 'price'. Log the type of the second object.
const items = [
  { type: "book", price: 15 },
  { type: "pen", price: 5 },
];

// 13. Nested Arrays: Create a nested array (an array of arrays) and log the second element of the first array.
let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
];

// 14. Nested Objects: Create an object that has another object as a property. Access a property of the inner object.
const student = {
  name: "Bob",
  grades: {
    math: 90,
    english: 85,
  },
};

// 15. Object Keys: Use 'Object.keys()' to log all property names (keys) of the 'person' object.

// 16. Object Values: Use 'Object.values()' to log all values of the 'person' object.

// 17. Combining Arrays: Create two arrays and combine them into one larger array. Log the result.
let firstHalf = ["a", "b", "c"];
let secondHalf = ["d", "e", "f"];

// 18. Splitting Strings: Create a string and use the 'split' method to turn it into an array of words.
let sentence = "Learning JavaScript is fun";
let words = sentence.split(" ");

// 19. Joining Arrays: Use the 'join' method to convert the 'words' array back into a string. Use a space as the separator.
let joinedSentence = words.join(" ");

// 20. Converting Numbers to Strings: Convert 'myNumber' to a string and log its type.
let stringNumber = myNumber.toString();

// 21. Converting Strings to Numbers: Given a string 'ageText' that contains a number, convert it to a number type.
let ageText = "35";
let ageNumber = parseInt(ageText);

// 22. Comparing Values: Compare if two numbers are equal. Use '===' for comparison and log the result.
let num1 = 10,
  num2 = 10;

// 23. Ternary Operator: Use the ternary operator to log "Minor" if 'age' is less than 18, otherwise "Adult".

// 24. Finding Array Elements: Check if 'colors' array contains "green". Log "Found" or "Not found".

// 25. Switch Statement: Use a switch statement on 'grade'. Log a different message for grades A, B, C, and default to "Unknown Grade".
