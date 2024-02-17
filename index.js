const fs = require('fs');

// Read the input array from a file named 'merged.json'
const mergedFile = 'merged.json';

try {
  // Read the content of the file and parse it as JSON
  const mergedData = JSON.parse(fs.readFileSync(mergedFile, 'utf8'));

  // Function to extract the "kanji" field and "reading_examples"
const extractData = (object) => {
  const extractedData = {
    kanji: object.data?.kanji,
    kun: object.data?.reading_examples?.kun || [],
    on: object.data?.reading_examples?.on || [],
  };

  if (extractedData.kun.length > 0) {
    extractedData.kun.forEach((item) => {
      if (item.meanings && item.meanings.length > 0) {
        item.meanings = item.meanings[0];
      }
    });
  }

  if (extractedData.on.length > 0) {
    extractedData.on.forEach((item) => {
      if (item.meanings && item.meanings.length > 0) {
        item.meanings = item.meanings[0];
      }
    });
  }

  return extractedData;
};


  // Apply the extraction function to each object in the array
  const extractedArray = mergedData.map(extractData);

  // Convert the extracted array to JSON format
  const extractedJsonString = JSON.stringify(extractedArray, null, 2);

  // Write the extracted JSON to a new file (e.g., extractedOutput.json)
  const extractedOutputFile = 'cleanedJisho.json';
  fs.writeFileSync(extractedOutputFile, extractedJsonString);

  console.log(`Extracted data written to ${extractedOutputFile}`);
} catch (error) {
  console.error(`Error reading or processing ${mergedFile}: ${error.message}`);
}
