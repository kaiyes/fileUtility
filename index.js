// const fs = require('fs');
//
// // Read the JSON data from the file
// fs.readFile('kanji_data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }
//
//   // Parse the JSON data
//   const jsonData = JSON.parse(data);
//
//   // Calculate the number of keys
//   const keys = Object.keys(jsonData);
//   const numParts = 10;
//   const chunkSize = Math.ceil(keys.length / numParts);
//
//   // Divide the keys into chunks sequentially
//   const dividedParts = Array.from({ length: numParts }, (_, index) =>
//     keys.slice(index * chunkSize, (index + 1) * chunkSize)
//   );
//
//   // Object to store the divided parts
//   const dividedObject = {};
//
//   // Create ten parts sequentially and store them in the dividedObject
//   dividedParts.forEach((partKeys, index) => {
//     dividedObject[`part${index + 1}`] = {};
//
//     partKeys.forEach((key) => {
//       dividedObject[`part${index + 1}`][key] = jsonData[key].map(
//         (item) => item.kan
//       );
//     });
//   });
//
//   // Write the divided object to a file
//   fs.writeFile(
//     'divided_kanji_data.json',
//     JSON.stringify(dividedObject),
//     'utf8',
//     (err) => {
//       if (err) {
//         console.error('Error writing to file:', err);
//         return;
//       }
//       console.log(
//         keys.length,
//         keys,
//         'Data has been written to divided_kanji_data.json'
//       );
//     }
//   );
// });
//

const fs = require('fs');

// Function to read and process the JSON file
function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    try {
      const json = JSON.parse(data);
      const kanjiNames = json['5'].map((item) => item.kanjiName);
      console.log(kanjiNames);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
    }
  });
}

// Replace 'yourfile.json' with the path to your JSON file
processFile('./jlptAll.json');
