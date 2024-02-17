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

    let combinedObject = {
      kanji: object.data?.kanji,
      usedIn: [...extractedData.kun, ...extractedData.on],
    };

    return combinedObject;
  };

  // Apply the extraction function to each object in the array
  const extractedArray = mergedData.map(extractData);

  // Function to transform the array of objects into a single object
  const transformToObject = (array) => {
    const transformedObject = array.reduce((acc, obj) => {
      acc[obj.kanji] = obj.usedIn;
      return acc;
    }, {});
    return transformedObject;
  };

  // Apply the transformation function to the extracted array
  const transformedObject = transformToObject(extractedArray);

  const outputContent = JSON.stringify(transformedObject, null, 2);
  fs.writeFileSync('./cleanedJisho.json', outputContent, 'utf8');
  console.error('done');
} catch (error) {
  console.error(`Error reading or processing ${mergedFile}: ${error.message}`);
}
