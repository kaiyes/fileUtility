const fs = require('fs');
const path = require('path');

const folderPath = './output/1/'; // Replace with the actual path to your folder

const kanjiArray = [];

fs.readdirSync(folderPath).forEach((file) => {
  const extname = path.extname(file);
  if (extname.toLowerCase() === '.json') {
    const kanjiMatch = file.match(/[\u4e00-\u9faf]/); // Match Kanji characters
    if (kanjiMatch) {
      kanjiArray.push(kanjiMatch[0]);
    }
  }
});

const outputFilePath = './kanji.json'; // Replace with the desired output file path

fs.writeFileSync(outputFilePath, JSON.stringify(kanjiArray, null, 2));

console.log('Kanji file names collected and written to kanji.json');
