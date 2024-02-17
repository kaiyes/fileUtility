const fs = require('fs');

// Load the JSON files
const jlpt5UsedInJisho = require('./jlpt5UsedInJisho.json');
const jlptArray = require('./jlptArray.json');

// Iterate through the keys of the first file
Object.keys(jlpt5UsedInJisho).forEach((key) => {
  // Find the corresponding item in the second file by kanjiName
  const matchingItem = jlptArray.find((item) => item.kanjiName === key);

  // Check if a match is found
  if (matchingItem) {
    // Check if jlpt5UsedInJisho[key] is an array before using map
    if (Array.isArray(jlpt5UsedInJisho[key])) {
      matchingItem.usedIn = jlpt5UsedInJisho[key];
    } else {
      console.error(
        `Invalid data structure for key ${key} in jlpt5UsedInJisho.json`
      );
    }
  } else {
    console.error(`No matching item found for key ${key} in jlptArray.json`);
  }
});

// Save the modified second file
fs.writeFileSync('./output.json', JSON.stringify(jlptArray, null, 2));

console.log('Script executed successfully. Check output.json for the result.');
