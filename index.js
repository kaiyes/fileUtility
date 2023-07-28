const fs = require('fs');

// Function to read the contents of a JSON file and parse it
function readJsonFile(filePath) {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

// Function to merge the contents of multiple JSON files into a single array
function mergeJsonFiles(filePaths) {
  let mergedData = [];
  for (const filePath of filePaths) {
    const jsonData = readJsonFile(filePath);
    mergedData = [...mergedData, ...jsonData];
  }
  return mergedData;
}

// File paths of the JSON files to merge
const filePaths = [
  'jlpt5.json',
  'jlpt4.json',
  'jlpt3.json',
  'jlpt2.json',
  'jlpt1.json',
];

// Merging the JSON files
const mergedData = mergeJsonFiles(filePaths);

// Function to write data to a new JSON file
function writeJsonFile(filePath, data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonData);
}

// Writing the merged data to a new file
const outputFile = 'merged_jlpt_data.json';
writeJsonFile(outputFile, mergedData);

console.log('Merging and writing completed.');

// app.listen(port, () => {
//   return addLine();
// });
