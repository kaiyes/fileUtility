const fs = require('fs').promises; // Import the fs module

const axios = require('axios');

const getJapaneseWords = async kanjis => {
  try {
    const dataToWrite = []; // Array to store extracted data

    for (const kanji of kanjis) {
      const response = await axios.post('http://localhost:11434/api/generate', {
        model: 'llama2',
        stream: false,
        prompt: `give me 5 Japanese words that are made with ${kanji}`
      });

      console.log(`Ollama Local Response for ${kanji}:`, response.data);

      const matches = response.data.response.match(
        /\d+\.\s(\S+)\s\((\S+)\)\s-\s(.+)/g
      );

      if (matches) {
        const result = matches.map(match => {
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
      'jlpt1UsedIn.json',
      JSON.stringify(dataToWrite, null, 2)
    );
    console.log('Data written to json successfully.');
  } catch (error) {
    console.error('Error making local API request to Ollama:', error.message);
  }
};

// Placeholder array for kanjis (replace this with your actual kanji array)
const kanjiArray = [
  '一',
  '二',
  '九',
  '七',
  '人',
  '入',
  '八',
  '十',
  '三',
  '上',
  '下',
  '大',
  '女',
  '山',
  '川',
  '土',
  '千',
  '子',
  '小',
  '中',
  '五',
  '六',
  '円',
  '天',
  '日',
  '月',
  '木',
  '水',
  '火',
  '出',
  '右',
  '四',
  '左',
  '本',
  '白',
  '万',
  '今',
  '午',
  '友',
  '父',
  '北',
  '半',
  '外',
  '母',
  '休',
  '先',
  '名',
  '年',
  '気',
  '百',
  '男',
  '見',
  '車',
  '毎',
  '行',
  '西',
  '何',
  '来',
  '学',
  '金',
  '雨',
  '国',
  '東',
  '長',
  '前',
  '南',
  '後',
  '食',
  '校',
  '時',
  '高',
  '間',
  '話',
  '電',
  '聞',
  '語',
  '読',
  '生',
  '書'
];

// Make the API requests for each kanji
getJapaneseWords(kanjiArray);
