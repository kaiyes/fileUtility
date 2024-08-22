const fs = require('fs').promises;
const axios = require('axios');

const getJapaneseWordsForObject = async (inputObjects) => {
  try {
    const dataToWrite = [];

    for (const inputObject of inputObjects) {
      const { word } = inputObject;
      const prompt = `add furigana for the ${word}`;

      const response = await axios.post('http://localhost:11434/api/generate', {
        model: 'llama3.1',
        stream: false,
        prompt,
      });

      console.log(`Ollama Local Response for ${word}:`, response.data);

      // Extract information from the response
      console.log(response.data.response);
      dataToWrite.push(response.data.response);
    }

    // Write the extracted data to a JSON file
    await fs.writeFile('output.json', JSON.stringify(dataToWrite, null, 2));
    console.log('Data has been written to output.json');
  } catch (error) {
    console.error('Error making local API request to Ollama:', error.message);
  }
};

// Extract the new word information

// Example input objects (replace this with your actual input)
const inputObjects = [];

// Make the API requests for each input object
getJapaneseWordsForObject(inputObjects);
