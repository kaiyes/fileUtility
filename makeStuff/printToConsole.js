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
      const kanjiNames = json['1'].map((item) => item.kanjiName);

      // Convert array to JSON string
      const transformedOutput = JSON.stringify(kanjiNames, null, 2);

      // Write the transformed JSON to a new file (e.g., transformedOutput.json)
      const transformedOutputFile = 'jlpt1.json';

      // Use fs.writeFile for asynchronous operation
      fs.writeFile(transformedOutputFile, transformedOutput, (writeErr) => {
        if (writeErr) {
          console.error('Error writing file:', writeErr);
        } else {
          console.log('File successfully written:', transformedOutputFile);
        }
      });
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
    }
  });
}

// Replace 'yourfile.json' with the path to your JSON file
processFile('../jlptMain.json');
