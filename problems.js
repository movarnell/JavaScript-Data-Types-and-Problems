

// 1. Numbers: Create a variable 'myNumber' and assign a number to it. Log the value to the console.
let myNumber = 42;
console.log(myNumber);

// 2. Strings: Create a variable 'myString' and assign a string to it. Log the length of the string.
let myString = "Hello, world!";
console.log(myString.length);

// 3. Booleans: Create a boolean variable 'isLearning' and set it to true. Log its value.
let isLearning = true;
console.log(isLearning);

// 4. Null: Create a variable 'emptyBox' and set its value to null. Log its type using 'typeof'.
let emptyBox = null;
console.log(typeof emptyBox);

// 5. Undefined: Create a variable 'notAssigned'. Don't assign any value to it. Log its type.
let notAssigned;
console.log(typeof notAssigned);

// 6. Objects: Create an object 'person' with properties 'name' and 'age'. Access and log the 'name' from the object.
const person = {
  name: "Alice",
  age: 30,
};
console.log(person.name);

// 7. Arrays: Create an array 'colors' containing three colors. Log the second item in the array.
let colors = ["red", "green", "blue"];
console.log(colors[1]);

// 8. Accessing String Characters: Given a string 'greeting', log the first character.
let greeting = "Hello";
console.log(greeting[0]);

// 9. Modifying Arrays: Add a fourth color to the 'colors' array. Then log the entire array.
colors.push("yellow");
console.log(colors);

// 10. Array Length: Log the number of items in the 'colors' array.
console.log(colors.length);

// 11. Loop Through Array: Use a loop to log each color in the 'colors' array.
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 12. Objects in Array: Create an array of objects, each with a 'type' and 'price'. Log the type of the second object.
const items = [
  { type: "book", price: 15 },
  { type: "pen", price: 5 },
];
console.log(items[1].type);

// 13. Nested Arrays: Create a nested array (an array of arrays) and log the second element of the first array.
let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(nestedArray[0][1]);

// 14. Nested Objects: Create an object that has another object as a property. Access a property of the inner object.
const student = {
  name: "Bob",
  grades: {
    math: 90,
    english: 85,
  },
};
console.log(student.grades.math);

// 15. Object Keys: Use 'Object.keys()' to log all property names (keys) of the 'person' object.
console.log(Object.keys(person));

// 16. Object Values: Use 'Object.values()' to log all values of the 'person' object.
console.log(Object.values(person));

// 17. Combining Arrays: Create two arrays and combine them into one larger array. Log the result.
let firstHalf = ["a", "b", "c"];
let secondHalf = ["d", "e", "f"];
let combined = firstHalf.concat(secondHalf);
console.log(combined);

// 18. Splitting Strings: Create a string and use the 'split' method to turn it into an array of words.
let sentence = "Learning JavaScript is fun";
let words = sentence.split(" ");
console.log(words);

// 19. Joining Arrays: Use the 'join' method to convert the 'words' array back into a string. Use a space as the separator.
let joinedSentence = words.join(" ");
console.log(joinedSentence);

// 20. Converting Numbers to Strings: Convert 'myNumber' to a string and log its type.
let stringNumber = myNumber.toString();
console.log(typeof stringNumber);

// 21. Converting Strings to Numbers: Given a string 'ageText' that contains a number, convert it to a number type.
let ageText = "35";
let ageNumber = parseInt(ageText);
console.log(typeof ageNumber);

// 22. Comparing Values: Compare if two numbers are equal. Use '===' for comparison and log the result.
let num1 = 10,
  num2 = 10;
console.log(num1 === num2);

// 23. Ternary Operator: Use the ternary operator to log "Minor" if 'age' is less than 18, otherwise "Adult".
console.log(age < 18 ? "Minor" : "Adult");

// 24. Finding Array Elements: Check if 'colors' array contains "green". Log "Found" or "Not found".
console.log(colors.includes("green") ? "Found" : "Not found");

// 25. Switch Statement: Use a switch statement on 'grade'. Log a different message for grades A, B, C, and default to "Unknown Grade".
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Unknown Grade");
}
