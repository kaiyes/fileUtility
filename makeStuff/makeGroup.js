const fs = require('fs');

// Read the JSON file
const data = require('./usedIn.js');

// Create an empty object to store grouped data
const groupedData = {};

// Iterate through each object in the array
data.forEach((obj) => {
  const { kanji, ...rest } = obj; // Destructure the object, excluding 'kanji'

  // Check if the kanji is already a key in groupedData
  if (groupedData[obj.kanji]) {
    groupedData[obj.kanji].push(rest); // If yes, push the object to the array
  } else {
    groupedData[obj.kanji] = [rest]; // If no, create a new array with the object
  }
});

// Write the grouped data to a new JSON file
fs.writeFileSync('grouped_usedIn.json', JSON.stringify(groupedData, null, 2));

console.log('Grouping completed. Check grouped_usedIn.json');
