const fs = require('fs');

// Function to read a JSON file
function readJSONFile(filename) {
  let rawdata = fs.readFileSync(filename);
  return JSON.parse(rawdata);
}

// Function to write to a JSON file
function writeJSONFile(filename, data) {
  let jsonContent = JSON.stringify(data, null, 2);
  fs.writeFileSync(filename, jsonContent);
}

// Main function to process the files
async function processFiles() {
  try {
    // Read the two JSON files
    let kanjiData = readJSONFile('jlpt.json');
    let similarKanjiData = readJSONFile('similar.json');

    // Process all sections (1 to 5)
    for (let i = 1; i <= 5; i++) {
      let sectionKey = i.toString();
      if (kanjiData[sectionKey]) {
        kanjiData[sectionKey].forEach((kanji) => {
          if (similarKanjiData[kanji.kanjiName]) {
            // Add the similars array to the kanji object
            kanji.similars = similarKanjiData[kanji.kanjiName];
          }
        });
      }
    }

    // Write the updated data back to the first file or a new file
    writeJSONFile('updatedFirstFile.json', kanjiData);
    console.log('File has been updated with similar kanji for all sections.');
  } catch (error) {
    console.error('Error processing files:', error);
  }
}

// Run the main function
processFiles();
