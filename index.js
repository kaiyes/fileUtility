const fs = require('fs').promises; // Import the fs module

const axios = require('axios');

const getJapaneseWords = async (kanjis) => {
  try {
    const dataToWrite = []; // Array to store extracted data

    for (const kanji of kanjis) {
      const response = await axios.post('http://localhost:11434/api/generate', {
        model: 'llama3.1',
        stream: false,
        prompt: `give me 5 Japanese words that are made with ${kanji}`,
      });

      console.log(`Ollama Local Response for ${kanji}:`, response.data);

      const matches = response.data.response.match(
        /\d+\.\s(\S+)\s\((\S+)\)\s-\s(.+)/g
      );

      if (matches) {
        const result = matches.map((match) => {
          const [, word, pronunciation, meaning] = match.match(
            /\d+\.\s(\S+)\s\((\S+)\)\s-\s(.+)/
          );
          return { kanji, word, pronunciation, meaning };
        });

        console.log(`Restructured data for ${kanji}:`, result);

        // Add the extracted data to the array
        dataToWrite.push(...result);
      } else {
        console.log(`No matches found for ${kanji}.`);
      }
    }

    // Write data to a JSON file
    await fs.writeFile(
      'llama13_jlpt5.json',
      JSON.stringify(dataToWrite, null, 2)
    );
    console.log('Data written to json successfully.');
  } catch (error) {
    console.error('Error making local API request to Ollama:', error.message);
  }
};

// Placeholder array for kanjis (replace this with your actual kanji array)
const kanjiArray = ['七', '人'];

// Make the API requests for each kanji
getJapaneseWords(kanjiArray);
