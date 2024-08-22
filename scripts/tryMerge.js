const fs = require('fs');
const path = require('path');

const folderPath = './output/all'; // Replace with the path to your folder
const outputFilePath = 'merged.json'; // Replace with the desired output file path

function readFilesInFolder(folderPath) {
  try {
    const fileNames = fs.readdirSync(folderPath);

    const objectsArray = [];

    fileNames.forEach((fileName) => {
      const filePath = path.join(folderPath, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');

      try {
        const jsonObject = JSON.parse(fileContent);
        objectsArray.push(jsonObject);
      } catch (error) {
        console.error(
          `Error parsing JSON in file ${fileName}: ${error.message}`
        );
      }
    });

    return objectsArray;
  } catch (error) {
    console.error(`Error reading files in folder: ${error.message}`);
    return [];
  }
}

const mergedObjectsArray = readFilesInFolder(folderPath);

try {
  const outputContent = JSON.stringify(mergedObjectsArray, null, 2);
  fs.writeFileSync(outputFilePath, outputContent, 'utf8');
  console.log(`Merged objects written to ${outputFilePath}`);
} catch (error) {
  console.error(`Error writing to output file: ${error.message}`);
}
