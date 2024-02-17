const fs = require('fs');

// Read the grouped data file
const groupedData = require('./grouped_data.json'); // Replace with the actual path to your grouped data file

// Create an empty object to store key-value pairs
const keyValuePairs = {};

// Iterate through each key-value pair in the grouped data
for (const [key, value] of Object.entries(groupedData)) {
    keyValuePairs[key] = value.map(obj => obj.word);
}

// Write the key-value pairs to a new JSON file
fs.writeFileSync('key_value_pairs.json', JSON.stringify(keyValuePairs, null, 2));

console.log('Key-value pairs extraction completed. Check key_value_pairs.json');

