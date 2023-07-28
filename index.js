const fs = require('fs');

// Function to read the contents of a JSON file and parse it
function readJsonFile(filePath) {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

// Function to find all unique strokes in the data
function findUniqueStrokes(data) {
  const uniqueStrokes = new Set();
  data.forEach((kanji) => uniqueStrokes.add(kanji.strokes));
  return Array.from(uniqueStrokes);
}

// Function to filter kanji based on the number of strokes
function filterKanjiByStrokes(data, strokes) {
  return data.filter((kanji) => kanji.strokes === strokes);
}

// File path of the JSON file containing kanji data
const filePath = 'kanjiAll.json';

// Reading the JSON file
const jsonData = readJsonFile(filePath);

// Finding all unique strokes in the data
const uniqueStrokes = findUniqueStrokes(jsonData);

// Filter kanji for each unique stroke count and store them in an object
const filteredKanjiByStrokes = {};
uniqueStrokes.forEach((strokes) => {
  filteredKanjiByStrokes[strokes] = filterKanjiByStrokes(jsonData, strokes);
});

// Function to write data to a new JSON file
function writeJsonFile(filePath, data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonData);
}

// Writing the filtered kanji data to new files for each unique stroke count
Object.keys(filteredKanjiByStrokes).forEach((strokes) => {
  const outputFile = `strokes${strokes}.json`;
  writeJsonFile(outputFile, filteredKanjiByStrokes[strokes]);
  console.log(
    `Kanji with ${strokes} strokes filtered and written to ${outputFile}.`
  );
});
