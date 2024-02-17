const fs = require('fs');

function findDifference(originalArray, newArray) {
  return originalArray.filter(element => !newArray.includes(element));
}

const originalFilePath = './jlpt1.json'; // Replace with the actual path to your original array JSON file
const newArrayPath = './kanji.json'; // Replace with the actual path to your new array JSON file
const outputFilePath = './leftOver.json'; // Replace with the desired output file path

// Read original array from JSON file
const originalArray = JSON.parse(fs.readFileSync(originalFilePath, 'utf-8'));

// Read new array from JSON file
const newArray = JSON.parse(fs.readFileSync(newArrayPath, 'utf-8'));

// Find the difference
const differenceArray = findDifference(originalArray, newArray);

// Write the difference array to a new JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(differenceArray, null, 2));

console.log('Difference between arrays written to difference.json');

