// Import necessary modules
const fs = require('fs');

// Read the JSON data from the file
const filePath = 'jlptArray.json'; // replace with the actual file path
const outputFilePath = 'output.json';
const rawData = fs.readFileSync(filePath);
const originalArray = JSON.parse(rawData);

// Modify the array to remove the "usedIn" field
const newArray = originalArray.map((obj) => {
  const { usedIn, ...newObj } = obj;
  return newObj;
});

try {
  const outputContent = JSON.stringify(newArray, null, 2);
  fs.writeFileSync(outputFilePath, outputContent, 'utf8');
  console.log(`Merged objects written to ${outputFilePath}`);
} catch (error) {
  console.error(`Error writing to output file: ${error.message}`);
}
