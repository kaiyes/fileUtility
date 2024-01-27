const fs = require('fs');

function cleanMeaning(meaning) {
  // Remove "This word means" or "means" and inner double quotes
  meaning = meaning.replace(/This word means|means|meaning/g, '').replace(/"/g, '');

  // If "or" is present, extract the part before "or"
  if (meaning.includes(' or ')) {
    meaning = meaning.split(' or ')[0];
  }

  // Remove backslashes and double quotes
  meaning = meaning.replace(/\\/g, '').replace(/"/g, '');

  return meaning.trim();
}

function cleanJSON(jsonArray) {
  return jsonArray.map(obj => {
    return {
      kanji: obj.kanji,
      word: obj.word,
      pronunciation: obj.pronunciation,
      meaning: cleanMeaning(obj.meaning)
    };
  });
}

function processJSONFile(inputFileName, outputFileName) {
  try {
    const data = fs.readFileSync(inputFileName, 'utf8');
    const jsonArray = JSON.parse(data);

    const cleanedArray = cleanJSON(jsonArray);
    const cleanedJSON = JSON.stringify(cleanedArray, null, 2);

    fs.writeFileSync(outputFileName, cleanedJSON);

    console.log(`Processed JSON written to ${outputFileName}`);
  } catch (err) {
    console.error('Error processing JSON file:', err.message);
  }
}

// Replace 'input.json' with the name of your input JSON file
// Replace 'output.json' with the desired name for the output JSON file
processJSONFile('llama13_jlpt5.json', 'cleaned.json');
