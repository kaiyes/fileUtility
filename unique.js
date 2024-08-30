const fs = require('fs');

// Path to your JSON file
const filePath = 'nouns_only_words.json';

// Load the JSON data
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Clean the data by keeping only the "meanings" field
const cleanedData = [...new Set(data)];
console.log(cleanedData.length);
// Write the cleaned data back to the file (or to a new file)
// fs.writeFileSync(
//   'llm_nouns_1.json',
//   JSON.stringify(cleanedData, null, 2),
//   'utf8'
// );
//
console.log('JSON file cleaned successfully!');
