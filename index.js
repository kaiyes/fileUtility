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
      const kanjiNames1 = json['1'].map(item => item.kanjiName);
      const kanjiNames2 = json['2'].map(item => item.kanjiName);
      const kanjiNames3 = json['3'].map(item => item.kanjiName);
      const kanjiNames4 = json['4'].map(item => item.kanjiName);
      const kanjiNames5 = json['5'].map(item => item.kanjiName);

      console.log(
        kanjiNames1.length,
        kanjiNames2.length,
        kanjiNames3.length,
        kanjiNames4.length,
        kanjiNames5.length
      );

      //const lastKanjiNames = kanjiNames4.slice(-67);
      // console.log(lastKanjiNames);

      // Create a new JSON object with the extracted information
      const resultJson = kanjiNames1;

      // Write the result to a new JSON file
      fs.writeFile(
        './jlpt1.json',
        JSON.stringify(resultJson, null, 2),
        writeErr => {
          if (writeErr) {
            console.error('Error writing result to file:', writeErr);
          } else {
            console.log('Result written to jlpt1.json');
          }
        }
      );
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
    }
  });
}

// Replace 'yourfile.json' with the path to your JSON file
processFile('./jlptAll.json');
