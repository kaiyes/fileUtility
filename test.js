const fs = require('fs').promises;
const axios = require('axios');

const getJapaneseWordsForObject = async inputObjects => {
  try {
    const dataToWrite = [];

    for (const inputObject of inputObjects) {
      const { word, kanji, meaning } = inputObject;
			const prompt = `add japanese pronunciation for the ${word}. for example, 大学: だいがく. just add one. DO NOT GIVE 10 examples. I only need one japanese pronunciation in`;

      const response = await axios.post('http://localhost:11434/api/generate', {
        model: 'llama2',
        stream: false,
        prompt
      });

      console.log(`Ollama Local Response for ${word}:`, response.data);

      // Extract furigana directly from the response
      const furiganaMatch = response.data.response.match(/「([^」]+)」/);
      if (furiganaMatch && furiganaMatch[1]) {
        const furigana = furiganaMatch[1].trim();
        dataToWrite.push({ kanji, word, furigana, meaning });
        console.log('Furigana:', furigana);
      } else {
        console.log('No furigana found.');
      }
    }

    // Write the extracted data to a JSON file
    await fs.writeFile('output.json', JSON.stringify(dataToWrite, null, 2));
    console.log('Data has been written to output.json');
  } catch (error) {
    console.error('Error making local API request to Ollama:', error.message);
  }
};

// Example input objects (replace this with your actual input)
const inputObjects = [
  {
    kanji: '一',
    word: '一人',
    pronunciation: 'hitori',
    meaning: 'one person'
  },
  {
    kanji: '一',
    word: '一種',
    pronunciation: 'isshu',
    meaning: 'one kind'
  },
  {
    kanji: '一',
    word: '一杯',
    pronunciation: 'hachi-bai',
    meaning: 'one bowl'
  },
  {
    kanji: '一',
    word: '一巻',
    pronunciation: 'ikka',
    meaning: 'one volume'
  },
  {
    kanji: '一',
    word: '一期',
    pronunciation: 'ikki',
    meaning: 'one period'
  },
  {
    kanji: '二',
    word: '日本',
    pronunciation: 'Nihon',
    meaning: 'Japan'
  },
  {
    kanji: '二',
    word: '新聞',
    pronunciation: 'Shinbun',
    meaning: 'news'
  },
  {
    kanji: '二',
    word: '二重',
    pronunciation: 'Nijou',
    meaning: 'double, twofold'
  },
  {
    kanji: '二',
    word: '二度',
    pronunciation: 'Nido',
    meaning: 'twice'
  },
  {
    kanji: '二',
    word: '二億',
    pronunciation: 'Nioku',
    meaning: 'two million'
  },
  {
    kanji: '九',
    word: '九州',
    pronunciation: 'kyuushuu',
    meaning: 'Kyushu, a region in Japan'
  },
  {
    kanji: '九',
    word: '九段',
    pronunciation: 'kyudan',
    meaning: 'Ninth, as in the ninth grade'
  },
  {
    kanji: '九',
    word: '九重',
    pronunciation: 'kyujo',
    meaning: 'Ninefold, as in nine times'
  },
  {
    kanji: '九',
    word: '九姐',
    pronunciation: 'kyuujou',
    meaning: 'Ninth sister, as in the ninth child'
  },
  {
    kanji: '九',
    word: '九篇',
    pronunciation: 'kyuhen',
    meaning: 'Nine parts, as in a book with nine chapters'
  },
  {
    kanji: '七',
    word: '七五三',
    pronunciation: 'nana-go-san',
    meaning: '753 in Japanese.'
  },
  {
    kanji: '七',
    word: '七夕',
    pronunciation: 'nana-yuu',
    meaning: 'Seventh night'
  },
  {
    kanji: '七',
    word: '七彩',
    pronunciation: 'nana-ai',
    meaning:
      'seven colors in Japanese, and can refer to a variety of things such as a rainbow'
  },
  {
    kanji: '七',
    word: '七調',
    pronunciation: 'nana-shou',
    meaning:
      'seventh scale in Japanese, and refers to the seventh mode of the traditional Japanese musical scale.'
  },
  {
    kanji: '七',
    word: '七星',
    pronunciation: 'nana-boshi',
    meaning:
      'seven stars in Japanese, and can refer to the seven brightest stars in the night sky'
  },
  {
    kanji: '人',
    word: '人類',
    pronunciation: 'jintsu',
    meaning: 'human race'
  },
  {
    kanji: '人',
    word: '人生',
    pronunciation: 'jinsengumi',
    meaning: 'human life'
  },
  {
    kanji: '人',
    word: '人工',
    pronunciation: 'jinko',
    meaning: 'artificial'
  },
  {
    kanji: '人',
    word: '人種',
    pronunciation: 'jintsu',
    meaning: 'race'
  },
  {
    kanji: '人',
    word: '人際',
    pronunciation: 'jintsu',
    meaning: 'interpersonal relationships'
  },
  {
    kanji: '入',
    word: '入り',
    pronunciation: 'Nyuuri',
    meaning: 'to enter'
  },
  {
    kanji: '入',
    word: '入札',
    pronunciation: 'Nyuudai',
    meaning: 'auction'
  },
  {
    kanji: '入',
    word: '入念',
    pronunciation: 'Nyunen',
    meaning: 'careful'
  },
  {
    kanji: '入',
    word: '入信',
    pronunciation: 'Nyushin',
    meaning: 'faithful'
  },
  {
    kanji: '入',
    word: '入湯',
    pronunciation: 'Nyu-yu',
    meaning: 'hot spring'
  },
  {
    kanji: '八',
    word: '八郎',
    pronunciation: 'Hachiro',
    meaning: 'eight, as in the number eight'
  },
  {
    kanji: '八',
    word: '八重',
    pronunciation: 'Hachio',
    meaning: 'eighth, as in a multiple of eight'
  },
  {
    kanji: '八',
    word: '八重都',
    pronunciation: 'Hachidono',
    meaning:
      'eighth city, as in a city that is the eighth largest in a particular region'
  },
  {
    kanji: '八',
    word: '八卦',
    pronunciation: 'Hakuge',
    meaning:
      'refers to the eighth trigrams in the I Ching, an ancient Chinese divination text'
  },
  {
    kanji: '八',
    word: '八眼',
    pronunciation: 'Hachiga',
    meaning: 'eight eyes, as in having multiple perspectives'
  },
  {
    kanji: '十',
    word: '日本',
    pronunciation: 'Nihon',
    meaning: 'Japan'
  },
  {
    kanji: '十',
    word: '十月',
    pronunciation: 'Juu-gatsu',
    meaning: 'October'
  },
  {
    kanji: '十',
    word: '熊本',
    pronunciation: 'Kumamoto',
    meaning: 'Kumamoto Prefecture'
  },
  {
    kanji: '十',
    word: '寿司',
    pronunciation: 'Sushi',
    meaning: 'sushi'
  },
  {
    kanji: '十',
    word: '旅行',
    pronunciation: 'Ryokou',
    meaning: 'travel'
  },
  {
    kanji: '三',
    word: 'Sansei',
    pronunciation: '三世',
    meaning: 'third generation'
  },
  {
    kanji: '三',
    word: 'Sansuk',
    pronunciation: '三作',
    meaning: 'the third work'
  },
  {
    kanji: '三',
    word: 'Sannin',
    pronunciation: '三人',
    meaning: 'three people'
  },
  {
    kanji: '三',
    word: 'Sanrin',
    pronunciation: '三輪',
    meaning: 'three wheels'
  },
  {
    kanji: '三',
    word: 'Sandai',
    pronunciation: '三代',
    meaning: 'third generation'
  },
  {
    kanji: '上',
    word: '上司',
    pronunciation: 'UE-shi',
    meaning: 'Boss'
  },
  {
    kanji: '上',
    word: '上演',
    pronunciation: 'UE-en',
    meaning: 'Performance'
  },
  {
    kanji: '上',
    word: '上級',
    pronunciation: 'UE-kyuu',
    meaning: 'Advanced'
  },
  {
    kanji: '上',
    word: '上海',
    pronunciation: 'UE-kai',
    meaning: 'Shanghai, China'
  },
  {
    kanji: '下',
    word: '下半身',
    pronunciation: 'Shita-hanmi',
    meaning: 'lower half of the body'
  },
  {
    kanji: '下',
    word: '下階層',
    pronunciation: 'Shita-kaiyou',
    meaning: 'lower level'
  },
  {
    kanji: '下',
    word: '下文',
    pronunciation: 'Shita-bun',
    meaning: 'lower class'
  },
  {
    kanji: '下',
    word: '下凡',
    pronunciation: 'Shita-ban',
    meaning: 'lower status'
  },
  {
    kanji: '下',
    word: '下限',
    pronunciation: 'Shita-gensen',
    meaning: 'lower limit'
  },
  {
    kanji: '大',
    word: '大人',
    pronunciation: 'daijin',
    meaning: 'adult'
  },
  {
    kanji: '大',
    word: '大学',
    pronunciation: 'daigaku',
    meaning: 'university'
  },
  {
    kanji: '大',
    word: '大陸',
    pronunciation: 'daichi',
    meaning: 'continent'
  },
  {
    kanji: '大',
    word: '大革命',
    pronunciation: 'daikomyojin',
    meaning: 'great revolution'
  },
  {
    kanji: '大',
    word: '大和',
    pronunciation: 'daiwa',
    meaning: 'Japan'
  },
  {
    kanji: '山',
    word: '山岳',
    pronunciation: 'yama-gawa',
    meaning: 'mountain'
  },
  {
    kanji: '山',
    word: '山脊',
    pronunciation: 'yama-giri',
    meaning: 'mountain ridge'
  },
  {
    kanji: '山',
    word: '山底',
    pronunciation: 'yama-doshi',
    meaning: 'base of a mountain'
  },
  {
    kanji: '山',
    word: '山椒',
    pronunciation: 'yama-sho',
    meaning: 'mountain pepper'
  },
  {
    kanji: '山',
    word: '山羊',
    pronunciation: 'yama-wolf',
    meaning: 'mountain wolf'
  },
  {
    kanji: '川',
    word: '河',
    pronunciation: 'kawa',
    meaning: 'river'
  },
  {
    kanji: '川',
    word: '寛',
    pronunciation: 'kan',
    meaning: 'wide, spacious'
  },
  {
    kanji: '川',
    word: '馳',
    pronunciation: 'kana',
    meaning: 'to flow, to move rapidly'
  },
  {
    kanji: '川',
    word: '狩',
    pronunciation: 'karami',
    meaning: 'hunt, chase'
  },
  {
    kanji: '川',
    word: '笠',
    pronunciation: 'kasa',
    meaning: 'umbrella'
  },
  {
    kanji: '土',
    word: '農業',
    pronunciation: 'nōgyō',
    meaning: 'agriculture'
  },
  {
    kanji: '土',
    word: '土地',
    pronunciation: 'dōchi',
    meaning: 'land, real estate'
  },
  {
    kanji: '土',
    word: '土наija',
    pronunciation: 'doinaiha',
    meaning: 'earthquake'
  },
  {
    kanji: '土',
    word: '土塊',
    pronunciation: 'tsuchi',
    meaning: 'soil, dirt'
  },
  {
    kanji: '土',
    word: '土下',
    pronunciation: 'sobu',
    meaning: 'underground'
  },
  {
    kanji: '千',
    word: '千客泊',
    pronunciation: 'sen-ke-bou',
    meaning: 'thousand guests'
  },
  {
    kanji: '千',
    word: '千戸',
    pronunciation: 'sen-do',
    meaning: 'thousand doors'
  },
  {
    kanji: '千',
    word: '千冊',
    pronunciation: 'sen-bai',
    meaning: 'thousand books'
  },
  {
    kanji: '千',
    word: '千色',
    pronunciation: 'sen-iro',
    meaning: 'thousand colors'
  },
  {
    kanji: '千',
    word: '千歳',
    pronunciation: 'sen-sai',
    meaning: 'thousand years'
  },
  {
    kanji: '子',
    word: '子供',
    pronunciation: 'kodomo',
    meaning: 'children'
  },
  {
    kanji: '子',
    word: '子猫',
    pronunciation: 'koneko',
    meaning: 'kittens'
  },
  {
    kanji: '子',
    word: '子連れ',
    pronunciation: 'konee',
    meaning: 'escort'
  },
  {
    kanji: '子',
    word: '子供服',
    pronunciation: 'kodomo-fuku',
    meaning: "children's clothing"
  },
  {
    kanji: '子',
    word: '子育て',
    pronunciation: 'kodukete',
    meaning: 'childcare'
  },
  {
    kanji: '小',
    word: 'お',
    pronunciation: 'O',
    meaning: 'small, little'
  },
  {
    kanji: '小',
    word: 'こども',
    pronunciation: 'Kodomo',
    meaning: 'child'
  },
  {
    kanji: '小',
    word: 'おんな',
    pronunciation: 'Onna',
    meaning: 'woman'
  },
  {
    kanji: '小',
    word: 'こいicked',
    pronunciation: 'Koi',
    meaning: 'love'
  },
  {
    kanji: '中',
    word: '中国',
    pronunciation: 'Chūgoku',
    meaning: 'China'
  },
  {
    kanji: '中',
    word: '中文',
    pronunciation: 'Chūbun',
    meaning: 'Chinese language'
  },
  {
    kanji: '中',
    word: '中毒',
    pronunciation: 'Chūdōku',
    meaning: 'poisonous'
  },
  {
    kanji: '中',
    word: '中学',
    pronunciation: 'Chūgaku',
    meaning: 'junior high school'
  },
  {
    kanji: '中',
    word: '中央',
    pronunciation: 'Chūō',
    meaning: 'central'
  },
  {
    kanji: '五',
    word: '五日',
    pronunciation: 'gohan',
    meaning: 'five days'
  },
  {
    kanji: '五',
    word: '五月',
    pronunciation: 'gogatsu',
    meaning: 'May'
  },
  {
    kanji: '五',
    word: '五輪',
    pronunciation: 'gorin',
    meaning: 'wheel'
  },
  {
    kanji: '五',
    word: '五官',
    pronunciation: 'gokan',
    meaning: 'five senses'
  },
  {
    kanji: '五',
    word: '五線',
    pronunciation: 'gosui',
    meaning: 'five lines'
  },
  {
    kanji: '六',
    word: '六番目',
    pronunciation: 'rokubume',
    meaning: 'sixth'
  },
  {
    kanji: '六',
    word: '六人',
    pronunciation: 'ronin',
    meaning: 'six people'
  },
  {
    kanji: '六',
    word: '六月',
    pronunciation: 'roku-gatsu',
    meaning: 'June in Japanese'
  },
  {
    kanji: '六',
    word: '六時間',
    pronunciation: 'roku-jikan',
    meaning: 'six hours'
  },
  {
    kanji: '六',
    word: '六文字',
    pronunciation: 'roku-moji',
    meaning: 'six characters'
  },
  {
    kanji: '円',
    word: '円盤',
    pronunciation: 'enban',
    meaning: 'plate, disk'
  },
  {
    kanji: '円',
    word: '円形',
    pronunciation: 'entou',
    meaning: 'circle, round'
  },
  {
    kanji: '円',
    word: '円遊',
    pronunciation: 'ensyou',
    meaning: 'travel, journey'
  },
  {
    kanji: '円',
    word: '円満',
    pronunciation: 'emun',
    meaning: 'complete, full'
  },
  {
    kanji: '円',
    word: '円標',
    pronunciation: 'enchou',
    meaning: 'symbol, marker'
  },
  {
    kanji: '天',
    word: '天才',
    pronunciation: 'tensai',
    meaning: 'genius'
  },
  {
    kanji: '天',
    word: '天然',
    pronunciation: 'tennen',
    meaning: 'natural, innate,'
  },
  {
    kanji: '天',
    word: '天地',
    pronunciation: 'tenchi',
    meaning: 'heaven and earth'
  },
  {
    kanji: '天',
    word: '天外',
    pronunciation: 'tenge',
    meaning: 'otherworldly, supernatural,'
  },
  {
    kanji: '天',
    word: '天涯',
    pronunciation: 'tenkai',
    meaning: 'horizon'
  },
  {
    kanji: '日',
    word: '日本',
    pronunciation: 'Nihon',
    meaning: 'Japan'
  },
  {
    kanji: '日',
    word: '日帰り',
    pronunciation: 'Kotoshi',
    meaning: 'Homecoming'
  },
  {
    kanji: '日',
    word: '日曜',
    pronunciation: 'Sunday',
    meaning: 'にちゆう'
  },
  {
    kanji: '日',
    word: '日降',
    pronunciation: 'Rain',
    meaning: 'にちこう'
  },
  {
    kanji: '日',
    word: '日誉',
    pronunciation: 'Honor',
    meaning: 'にちえい'
  },
  {
    kanji: '月',
    word: '月',
    pronunciation: 'tsuki',
    meaning: 'moon'
  },
  {
    kanji: '月',
    word: '日本',
    pronunciation: 'Nihon',
    meaning: 'Japan'
  },
  {
    kanji: '月',
    word: '月曜日',
    pronunciation: 'sunday',
    meaning: 'Sunday'
  },
  {
    kanji: '月',
    word: '落語',
    pronunciation: 'Rōgo',
    meaning: 'a type of traditional Japanese comedy'
  },
  {
    kanji: '月',
    word: '寿司',
    pronunciation: 'Sushi',
    meaning:
      'a Japanese dish made with vinegared rice and various toppings, such as raw fish'
  },
  {
    kanji: '水',
    word: '水槽',
    pronunciation: 'mizu-kochou',
    meaning: 'a tank'
  },
  {
    kanji: '水',
    word: '水産業',
    pronunciation: 'mizu-shinryo',
    meaning: 'the fishing industry'
  },
  {
    kanji: '水',
    word: '水車',
    pronunciation: 'mizu-sha',
    meaning: 'a watermill'
  },
  {
    kanji: '水',
    word: '水泡',
    pronunciation: 'mizu-bou',
    meaning: 'a bubble'
  },
  {
    kanji: '水',
    word: '水耐性',
    pronunciation: 'mizu-ryoushu',
    meaning: 'water resistance'
  },
  {
    kanji: '火',
    word: '火車',
    pronunciation: 'kasen',
    meaning: 'train'
  },
  {
    kanji: '火',
    word: '火山',
    pronunciation: 'yama',
    meaning: 'mountain'
  },
  {
    kanji: '火',
    word: '火災',
    pronunciation: 'sai',
    meaning: 'disaster'
  },
  {
    kanji: '火',
    word: '火葬',
    pronunciation: 'shoji',
    meaning: 'cremation'
  },
  {
    kanji: '火',
    word: '火傷',
    pronunciation: 'kizu',
    meaning: 'burn'
  },
  {
    kanji: '出',
    word: '出版',
    pronunciation: 'Shuppan',
    meaning: 'publication'
  },
  {
    kanji: '出',
    word: '出力',
    pronunciation: 'Doryoku',
    meaning: 'output'
  },
  {
    kanji: '出',
    word: '出入',
    pronunciation: 'Douei',
    meaning: 'entrance'
  },
  {
    kanji: '出',
    word: '出会い',
    pronunciation: 'Dekai',
    meaning: 'encounter'
  },
  {
    kanji: '出',
    word: '出稿',
    pronunciation: 'Doushoutsuu',
    meaning: 'submission'
  },
  {
    kanji: '右',
    word: '右',
    pronunciation: 'migi',
    meaning: 'right'
  },
  {
    kanji: '右',
    word: '右遊',
    pronunciation: 'hidari',
    meaning: 'rightward'
  },
  {
    kanji: '右',
    word: '右利',
    pronunciation: 'hidari',
    meaning: 'rightful'
  },
  {
    kanji: '右',
    word: '右割',
    pronunciation: 'hidari',
    meaning: 'rightful share'
  },
  {
    kanji: '右',
    word: '右派',
    pronunciation: 'hidari',
    meaning: 'right-wing'
  },
  {
    kanji: '四',
    word: '四国',
    pronunciation: 'yoko',
    meaning: 'four countries'
  },
  {
    kanji: '四',
    word: '四半',
    pronunciation: 'yonsan',
    meaning: 'half'
  },
  {
    kanji: '四',
    word: '四股',
    pronunciation: 'yokari',
    meaning: 'row'
  },
  {
    kanji: '四',
    word: '四度',
    pronunciation: 'yodou',
    meaning: 'four times'
  },
  {
    kanji: '四',
    word: '四分',
    pronunciation: 'yofun',
    meaning: 'four parts'
  },
  {
    kanji: '左',
    word: 'Hidari',
    pronunciation: '左',
    meaning: 'left'
  },
  {
    kanji: '左',
    word: 'Hidarikomi',
    pronunciation: '左コミ',
    meaning: 'left-handed'
  },
  {
    kanji: '左',
    word: 'Hidariyasui',
    pronunciation: '左やすい',
    meaning: 'easy to the left'
  },
  {
    kanji: '左',
    word: 'Hidarida',
    pronunciation: '左だ',
    meaning: 'left alone'
  },
  {
    kanji: '左',
    word: 'Hidarikata',
    pronunciation: '左方',
    meaning: 'west'
  },
  {
    kanji: '本',
    word: '本',
    pronunciation: 'hon',
    meaning: 'book'
  },
  {
    kanji: '本',
    word: '総本',
    pronunciation: 'sōhon',
    meaning: 'general, comprehensive'
  },
  {
    kanji: '本',
    word: '専本',
    pronunciation: 'senhon',
    meaning: 'special, exclusive'
  },
  {
    kanji: '本',
    word: '旅本',
    pronunciation: 'ryokun',
    meaning: 'travelogue, journal of travels'
  },
  {
    kanji: '本',
    word: '訳本',
    pronunciation: 'yukbon',
    meaning: 'translation, translated work'
  },
  {
    kanji: '白',
    word: 'Shirō',
    pronunciation: 'しろう',
    meaning: 'White'
  },
  {
    kanji: '白',
    word: 'Shirakawa',
    pronunciation: 'シラカワ',
    meaning: 'White river'
  },
  {
    kanji: '白',
    word: 'Shikoku',
    pronunciation: '四国',
    meaning: 'Four countries/provinces (white in )'
  },
  {
    kanji: '白',
    word: 'Hakuba',
    pronunciation: 'ハクバ',
    meaning: 'White horse'
  },
  {
    kanji: '白',
    word: 'Kakugo',
    pronunciation: 'カクゴウ',
    meaning: 'White eagle'
  },
  {
    kanji: '今',
    word: '今日',
    pronunciation: 'Konnichiwa',
    meaning: 'Hello'
  },
  {
    kanji: '今',
    word: '今月',
    pronunciation: 'Kogatsu',
    meaning: 'January'
  },
  {
    kanji: '今',
    word: '今晚',
    pronunciation: 'Konya',
    meaning: 'Tonight'
  },
  {
    kanji: '今',
    word: '今天',
    pronunciation: 'Kote',
    meaning: 'Today'
  },
  {
    kanji: '今',
    word: '今week',
    pronunciation: 'Konya',
    meaning: 'This week'
  },
  {
    kanji: '午',
    word: '午前',
    pronunciation: 'goman',
    meaning: 'morning'
  },
  {
    kanji: '午',
    word: '午後',
    pronunciation: 'gomou',
    meaning: 'afternoon'
  },
  {
    kanji: '午',
    word: '午中',
    pronunciation: 'gunchou',
    meaning: 'noon'
  },
  {
    kanji: '午',
    word: '午日',
    pronunciation: 'gonichi',
    meaning: 'daytime'
  },
  {
    kanji: '午',
    word: '午月',
    pronunciation: 'gounotchi',
    meaning: 'month'
  },
  {
    kanji: '友',
    word: '友達',
    pronunciation: 'yūdatsu',
    meaning: 'friend'
  },
  {
    kanji: '友',
    word: 'ゆうき',
    pronunciation: 'yūki',
    meaning: 'gentle, mild'
  },
  {
    kanji: '友',
    word: 'ゆうと',
    pronunciation: 'yūto',
    meaning: 'partner, companion'
  },
  {
    kanji: '友',
    word: 'ゆうこ',
    pronunciation: 'yūko',
    meaning: 'child, kid'
  },
  {
    kanji: '友',
    word: 'ゆうせつ',
    pronunciation: 'yūsetsu',
    meaning: 'smooth, gentle'
  },
  {
    kanji: '父',
    word: '父親',
    pronunciation: 'chichi-shin',
    meaning: 'father'
  },
  {
    kanji: '父',
    word: '父方',
    pronunciation: 'chichi-gata',
    meaning: 'paternal grandfather'
  },
  {
    kanji: '父',
    word: '父系',
    pronunciation: 'chichi-kei',
    meaning: 'paternal lineage'
  },
  {
    kanji: '父',
    word: '父兄',
    pronunciation: 'chichi-kyou',
    meaning: 'eldest brother'
  },
  {
    kanji: '父',
    word: '父類',
    pronunciation: 'chichi-ryuu',
    meaning: 'paternal descent'
  },
  {
    kanji: '北',
    word: '北海道',
    pronunciation: 'Hokkaido',
    meaning: "The northernmost of Japan's main islands."
  },
  {
    kanji: '北',
    word: '北京',
    pronunciation: 'Beijing',
    meaning: 'The capital city of China.'
  },
  {
    kanji: '北',
    word: '北方',
    pronunciation: 'Hokkaido',
    meaning:
      'A term used to refer to the northern region of Japan, including the island of Hokkaido and the surrounding waters.'
  },
  {
    kanji: '半',
    word: '半分',
    pronunciation: 'han-fun',
    meaning: 'half'
  },
  {
    kanji: '半',
    word: '半豆',
    pronunciation: 'han-dō',
    meaning: 'half-cooked beans'
  },
  {
    kanji: '半',
    word: '半生活',
    pronunciation: 'han-shōgai',
    meaning: 'semi-detached house'
  },
  {
    kanji: '半',
    word: '半競争',
    pronunciation: 'han-kyōsen',
    meaning: 'semi-competition'
  },
  {
    kanji: '半',
    word: '半途',
    pronunciation: 'han-tō',
    meaning: 'halfway through'
  },
  {
    kanji: '外',
    word: '外務省',
    pronunciation: 'gaiko-sho',
    meaning: 'Ministry of Foreign Affairs'
  },
  {
    kanji: '外',
    word: '外資',
    pronunciation: 'gaisho',
    meaning: 'foreign investment'
  },
  {
    kanji: '外',
    word: '外遊',
    pronunciation: 'gaikuryuu',
    meaning: 'travel abroad'
  },
  {
    kanji: '外',
    word: '外来',
    pronunciation: 'garakudo',
    meaning: 'imported, introduced from outside'
  },
  {
    kanji: '母',
    word: '母親',
    pronunciation: 'Mother',
    meaning:
      'This word is used to refer to a woman who is a parent, typically a biological mother.'
  },
  {
    kanji: '母',
    word: '母国',
    pronunciation: 'Motherland',
    meaning: "This word is used to refer to one's native country"
  },
  {
    kanji: '母',
    word: '母性',
    pronunciation: 'Maternal',
    meaning:
      'This word is used to describe something that is associated with mothers'
  },
  {
    kanji: '母',
    word: '母類',
    pronunciation: 'Motherly',
    meaning:
      'This word is used to describe something that is similar to a mother in terms of nurturing'
  },
  {
    kanji: '休',
    word: '休日',
    pronunciation: 'yuuji',
    meaning: 'holiday'
  },
  {
    kanji: '休',
    word: '休憩',
    pronunciation: 'kyouko',
    meaning: 'rest stop'
  },
  {
    kanji: '休',
    word: '休暇',
    pronunciation: 'kyouka',
    meaning: 'vacation time'
  },
  {
    kanji: '休',
    word: '休学',
    pronunciation: 'kyouka',
    meaning: 'summer vacation'
  },
  {
    kanji: '休',
    word: '休業',
    pronunciation: 'kyougyou',
    meaning: 'holiday'
  },
  {
    kanji: '先',
    word: '先生',
    pronunciation: 'sensei',
    meaning: 'teacher'
  },
  {
    kanji: '先',
    word: '先物',
    pronunciation: 'future',
    meaning: 'something that will happen in the future'
  },
  {
    kanji: '先',
    word: '先遣',
    pronunciation: 'sentence',
    meaning: 'a sentence'
  },
  {
    kanji: '先',
    word: '先生物',
    pronunciation: 'futuristic',
    meaning: 'something that is futuristic'
  },
  {
    kanji: '名',
    word: '名前',
    pronunciation: 'namae',
    meaning: 'name'
  },
  {
    kanji: '名',
    word: '名誉',
    pronunciation: 'myoui',
    meaning: 'honor, reputation'
  },
  {
    kanji: '名',
    word: '名折',
    pronunciation: 'me-o',
    meaning: 'folding screen'
  },
  {
    kanji: '名',
    word: '名士',
    pronunciation: 'nashi',
    meaning: 'eminent person, celebrity'
  },
  {
    kanji: '名',
    word: '名学',
    pronunciation: 'koushi',
    meaning: 'famous scholar, renowned expert'
  },
  {
    kanji: '年',
    word: '元日',
    pronunciation: 'Gannen',
    meaning: "New Year's Day"
  },
  {
    kanji: '年',
    word: '生日',
    pronunciation: 'Shigin',
    meaning: 'Birthday'
  },
  {
    kanji: '年',
    word: '成人式',
    pronunciation: 'Seijinshiki',
    meaning: 'Coming of Age Ceremony'
  },
  {
    kanji: '年',
    word: '結婚式',
    pronunciation: 'Kekkonigsiki',
    meaning: 'Wedding'
  },
  {
    kanji: '年',
    word: '没年',
    pronunciation: 'Meten',
    meaning: 'Death anniversary'
  },
  {
    kanji: '気',
    word: '気持ち',
    pronunciation: 'kimochi',
    meaning: 'mood'
  },
  {
    kanji: '気',
    word: '気づく',
    pronunciation: 'kiku',
    meaning: 'to realize'
  },
  {
    kanji: '気',
    word: '気が狂う',
    pronunciation: 'kigaku',
    meaning: 'to go crazy'
  },
  {
    kanji: '気',
    word: '気休',
    pronunciation: 'kiyuu',
    meaning: 'fatigue'
  },
  {
    kanji: '百',
    word: '百年',
    pronunciation: 'hyakunen',
    meaning: 'a hundred years'
  },
  {
    kanji: '百',
    word: '百科',
    pronunciation: 'hyakko',
    meaning: 'a hundred books'
  },
  {
    kanji: '百',
    word: '百合',
    pronunciation: 'hyougi',
    meaning: 'hundreds of yen'
  },
  {
    kanji: '百',
    word: '百精',
    pronunciation: 'hyoushin',
    meaning: 'hundreds of skills'
  },
  {
    kanji: '百',
    word: '百姓',
    pronunciation: 'hyakushou',
    meaning: 'a hundred households'
  },
  {
    kanji: '男',
    word: '働く',
    pronunciation: 'hikuku',
    meaning: 'to work'
  },
  {
    kanji: '男',
    word: '旅行',
    pronunciation: 'ryokou',
    meaning: 'travel'
  },
  {
    kanji: '男',
    word: '教育',
    pronunciation: 'kyouiku',
    meaning: 'education'
  },
  {
    kanji: '男',
    word: '奨学',
    pronunciation: 'kouka',
    meaning: 'scholarship'
  },
  {
    kanji: '見',
    word: '見る',
    pronunciation: 'みる',
    meaning: 'to see, watch'
  },
  {
    kanji: '見',
    word: '見た',
    pronunciation: 'みた',
    meaning: 'saw, looked'
  },
  {
    kanji: '見',
    word: '見分',
    pronunciation: 'みぶん',
    meaning: 'to distinguish, tell apart'
  },
  {
    kanji: '見',
    word: '見下',
    pronunciation: 'みした',
    meaning: 'to look down on, disparage'
  },
  {
    kanji: '見',
    word: '見学',
    pronunciation: 'みがく',
    meaning: 'to observe, study'
  },
  {
    kanji: '車',
    word: 'タクシー',
    pronunciation: 'takushī',
    meaning: 'taxi'
  },
  {
    kanji: '車',
    word: '自動車',
    pronunciation: 'jidōsha',
    meaning: 'car'
  },
  {
    kanji: '車',
    word: 'バス',
    pronunciation: 'basu',
    meaning: 'bus'
  },
  {
    kanji: '車',
    word: '駅',
    pronunciation: 'eki',
    meaning: 'station'
  },
  {
    kanji: '車',
    word: '自転車',
    pronunciation: 'jitensha',
    meaning: 'bicycle'
  },
  {
    kanji: '毎',
    word: '毎日',
    pronunciation: 'mairi',
    meaning: 'daily, every day'
  },
  {
    kanji: '毎',
    word: '毎週',
    pronunciation: 'maisuru',
    meaning: 'weekly'
  },
  {
    kanji: '毎',
    word: '毎月',
    pronunciation: 'maitsu',
    meaning: 'monthly'
  },
  {
    kanji: '毎',
    word: '毎年',
    pronunciation: 'maigoto',
    meaning: 'annually'
  },
  {
    kanji: '毎',
    word: '毎時',
    pronunciation: 'maikyoku',
    meaning: 'every hour'
  },
  {
    kanji: '西',
    word: '西部',
    pronunciation: 'Nishi-bu',
    meaning: 'west'
  },
  {
    kanji: '西',
    word: '西日',
    pronunciation: 'Nishi-niichi',
    meaning: 'western Japan'
  },
  {
    kanji: '西',
    word: '西陣',
    pronunciation: 'Nishi-jyo',
    meaning: 'Western army'
  },
  {
    kanji: '西',
    word: '西暦',
    pronunciation: 'Nishi-kyoku',
    meaning: 'Gregorian calendar'
  },
  {
    kanji: '西',
    word: '西方',
    pronunciation: 'Nishi-ho',
    meaning: 'westward'
  },
  {
    kanji: '何',
    word: '何か',
    pronunciation: 'naka',
    meaning: 'something'
  },
  {
    kanji: '何',
    word: '何を',
    pronunciation: 'nwo',
    meaning: 'what'
  },
  {
    kanji: '何',
    word: '何で',
    pronunciation: 'neddo',
    meaning: 'why'
  },
  {
    kanji: '何',
    word: '何時',
    pronunciation: 'niji',
    meaning: 'when'
  },
  {
    kanji: '来',
    word: '来た',
    pronunciation: 'Riat',
    meaning: 'arrived'
  },
  {
    kanji: '来',
    word: '来年',
    pronunciation: 'Kien',
    meaning: 'next year'
  },
  {
    kanji: '来',
    word: '来様',
    pronunciation: 'Raimyō',
    meaning: 'guest'
  },
  {
    kanji: '来',
    word: '来意',
    pronunciation: 'Raii',
    meaning: 'purpose'
  },
  {
    kanji: '来',
    word: '来程',
    pronunciation: 'Ritō',
    meaning: 'progress'
  },
  {
    kanji: '学',
    word: '学生',
    pronunciation: 'gakusei',
    meaning: 'student'
  },
  {
    kanji: '学',
    word: '学者',
    pronunciation: 'gakusha',
    meaning: 'scholar'
  },
  {
    kanji: '学',
    word: '学び',
    pronunciation: 'gaki',
    meaning: 'to learn'
  },
  {
    kanji: '学',
    word: '学会',
    pronunciation: 'gakkai',
    meaning: 'club'
  },
  {
    kanji: '学',
    word: '学芸',
    pronunciation: 'gaku-gei',
    meaning: 'art'
  },
  {
    kanji: '金',
    word: '金属',
    pronunciation: 'Kinzō',
    meaning: 'metal'
  },
  {
    kanji: '金',
    word: '金貨',
    pronunciation: 'Kin-gō',
    meaning: 'coin'
  },
  {
    kanji: '金',
    word: '金属学',
    pronunciation: 'Kinzōgaku',
    meaning: 'metallurgy'
  },
  {
    kanji: '金',
    word: '金色',
    pronunciation: 'Kin-iro',
    meaning: 'golden'
  },
  {
    kanji: '金',
    word: '金属療法',
    pronunciation: 'Kinzōryōhō',
    meaning: 'physical therapy using metals'
  },
  {
    kanji: '雨',
    word: '雨',
    pronunciation: 'ama',
    meaning: 'rain'
  },
  {
    kanji: '雨',
    word: '雨上がり',
    pronunciation: 'amagari',
    meaning: 'rain shower'
  },
  {
    kanji: '雨',
    word: '雨色',
    pronunciation: 'amei',
    meaning: 'pastel blue, a color often associated with rain'
  },
  {
    kanji: '雨',
    word: '雨漏れ',
    pronunciation: 'ama-mizu',
    meaning: 'leaking water due to rain.'
  },
  {
    kanji: '国',
    word: '日本国',
    pronunciation: 'Nihon-kuni',
    meaning: 'Japan'
  },
  {
    kanji: '国',
    word: '中国国',
    pronunciation: 'Zhōngguó-kuni',
    meaning: 'China'
  },
  {
    kanji: '国',
    word: '大韓国',
    pronunciation: 'Daehan-kuni',
    meaning: 'South Korea'
  },
  {
    kanji: '国',
    word: '北国',
    pronunciation: 'Kita-kuni',
    meaning: 'Northern Country/Region'
  },
  {
    kanji: '国',
    word: '沖縄国',
    pronunciation: 'Okinawa-kuni',
    meaning: 'Okinawa Prefecture'
  },
  {
    kanji: '東',
    word: '東京',
    pronunciation: 'Tōkyō',
    meaning: 'Tokyo'
  },
  {
    kanji: '東',
    word: '東洋',
    pronunciation: 'Tōyō',
    meaning: 'Oriental, East Asian'
  },
  {
    kanji: '東',
    word: '東南',
    pronunciation: 'Higashi',
    meaning: 'South, Southern'
  },
  {
    kanji: '東',
    word: '東部',
    pronunciation: 'Higashiku',
    meaning: 'East, Eastern'
  },
  {
    kanji: '長',
    word: '長崎',
    pronunciation: 'Nagasaki',
    meaning: 'a city in western Japan'
  },
  {
    kanji: '長',
    word: '長寿',
    pronunciation: 'Nagai',
    meaning: 'longevity'
  },
  {
    kanji: '長',
    word: '長恨',
    pronunciation: 'Nagao',
    meaning: 'long-standing hatred'
  },
  {
    kanji: '長',
    word: '長距離',
    pronunciation: 'Nagar',
    meaning: 'distance'
  },
  {
    kanji: '長',
    word: '長期',
    pronunciation: 'Nakae',
    meaning: 'long-term'
  },
  {
    kanji: '前',
    word: '前日',
    pronunciation: 'Ashita',
    meaning: 'tomorrow'
  },
  {
    kanji: '前',
    word: '前進',
    pronunciation: 'Kenshin',
    meaning: 'forward movement'
  },
  {
    kanji: '前',
    word: '前途',
    pronunciation: 'Menti',
    meaning: 'future'
  },
  {
    kanji: '前',
    word: '前例',
    pronunciation: 'Zenki',
    meaning: 'precedent'
  },
  {
    kanji: '前',
    word: '前遺',
    pronunciation: 'Kodama',
    meaning: 'legacy'
  },
  {
    kanji: '南',
    word: '南国',
    pronunciation: 'nankoku',
    meaning: 'southern country'
  },
  {
    kanji: '南',
    word: '南部',
    pronunciation: 'nanbu',
    meaning: 'southern region'
  },
  {
    kanji: '南',
    word: '南方',
    pronunciation: 'nanhou',
    meaning: 'southern direction'
  },
  {
    kanji: '南',
    word: '南極',
    pronunciation: 'nanpikku',
    meaning: 'southern pole'
  },
  {
    kanji: '南',
    word: '南亜',
    pronunciation: 'nanai',
    meaning: 'Southern Asia'
  },
  {
    kanji: '後',
    word: '後悔',
    pronunciation: 'go-kange',
    meaning: 'regret'
  },
  {
    kanji: '後',
    word: '後援',
    pronunciation: 'go-en',
    meaning: 'backup'
  },
  {
    kanji: '後',
    word: '後働',
    pronunciation: 'go-jikai',
    meaning: 'overtime'
  },
  {
    kanji: '後',
    word: '後進',
    pronunciation: 'go-shin',
    meaning: 'successor'
  },
  {
    kanji: '後',
    word: '後折',
    pronunciation: 'go-ozora',
    meaning: 'backtracking'
  },
  {
    kanji: '食',
    word: '料理',
    pronunciation: 'りょうり',
    meaning: 'cooking, cuisine'
  },
  {
    kanji: '食',
    word: '食べ物',
    pronunciation: 'てにき',
    meaning: 'food'
  },
  {
    kanji: '食',
    word: '調理',
    pronunciation: 'しらい',
    meaning: 'cooking, preparation'
  },
  {
    kanji: '食',
    word: '食材',
    pronunciation: 'しょくざい',
    meaning: 'ingredient'
  },
  {
    kanji: '食',
    word: '寿司',
    pronunciation: 'すし',
    meaning: 'sushi'
  },
  {
    kanji: '校',
    word: '学校',
    pronunciation: 'Gakkō',
    meaning: 'school'
  },
  {
    kanji: '校',
    word: '塾校',
    pronunciation: 'Jukkō',
    meaning: 'cram school'
  },
  {
    kanji: '校',
    word: '進路校',
    pronunciation: 'Shinryōkō',
    meaning: 'career counseling center'
  },
  {
    kanji: '校',
    word: '養成校',
    pronunciation: 'Yōseikō',
    meaning: 'training center'
  },
  {
    kanji: '校',
    word: '保健校',
    pronunciation: 'Hokenkō',
    meaning: 'health center'
  },
  {
    kanji: '時',
    word: '時間',
    pronunciation: 'jikan',
    meaning: 'time'
  },
  {
    kanji: '時',
    word: '時代',
    pronunciation: 'jidai',
    meaning: 'era, age'
  },
  {
    kanji: '時',
    word: '時務',
    pronunciation: 'jiku',
    meaning: 'duty, business'
  },
  {
    kanji: '時',
    word: '時価',
    pronunciation: 'jiko',
    meaning: 'price, worth'
  },
  {
    kanji: '時',
    word: '時代的',
    pronunciation: 'jidaitoki',
    meaning: 'contemporary, modern'
  },
  {
    kanji: '高',
    word: '高校',
    pronunciation: 'takkou',
    meaning: 'high school'
  },
  {
    kanji: '高',
    word: '高速',
    pronunciation: 'takusoku',
    meaning: 'high speed'
  },
  {
    kanji: '高',
    word: '高級',
    pronunciation: 'takkyou',
    meaning: 'luxury'
  },
  {
    kanji: '高',
    word: '高原',
    pronunciation: 'tahou',
    meaning: 'plateau'
  },
  {
    kanji: '高',
    word: '高度',
    pronunciation: 'tado',
    meaning: 'advanced, sophisticated'
  },
  {
    kanji: '間',
    word: '競馬',
    pronunciation: 'keiba',
    meaning: 'horse racing'
  },
  {
    kanji: '間',
    word: '空間',
    pronunciation: 'kūkan',
    meaning: 'space'
  },
  {
    kanji: '間',
    word: '漫画',
    pronunciation: 'manga',
    meaning: 'comic'
  },
  {
    kanji: '間',
    word: '短歌',
    pronunciation: 'tanka',
    meaning: 'short poem'
  },
  {
    kanji: '間',
    word: '摩訶',
    pronunciation: 'mahō',
    meaning: 'magic'
  },
  {
    kanji: '話',
    word: '話者',
    pronunciation: 'Hanashi',
    meaning: 'speaker'
  },
  {
    kanji: '話',
    word: '劇話',
    pronunciation: 'Gekihan',
    meaning: 'drama'
  },
  {
    kanji: '話',
    word: '説話',
    pronunciation: 'Setsuhan',
    meaning: 'explanation'
  },
  {
    kanji: '話',
    word: '會話',
    pronunciation: 'Kaihan',
    meaning: 'conversation'
  },
  {
    kanji: '話',
    word: '話情',
    pronunciation: 'Hanajou',
    meaning: 'talk'
  },
  {
    kanji: '電',
    word: '電力',
    pronunciation: 'denryoku',
    meaning: 'electricity'
  },
  {
    kanji: '電',
    word: '電車',
    pronunciation: 'densha',
    meaning: 'train'
  },
  {
    kanji: '電',
    word: '電脳',
    pronunciation: 'deno',
    meaning: 'brain (as in electronic brain)'
  },
  {
    kanji: '電',
    word: '電子',
    pronunciation: 'denshi',
    meaning: 'electronic'
  },
  {
    kanji: '電',
    word: '電影',
    pronunciation: 'dengeki',
    meaning: 'film (as in electric film)'
  },
  {
    kanji: '聞',
    word: '聞く',
    pronunciation: 'kiku',
    meaning: 'to hear'
  },
  {
    kanji: '聞',
    word: '聞き',
    pronunciation: 'kigi',
    meaning: 'hearing'
  },
  {
    kanji: '聞',
    word: '聞こえる',
    pronunciation: 'kikoeru',
    meaning: 'audible'
  },
  {
    kanji: '聞',
    word: '聞き間違い',
    pronunciation: 'kikimaihara',
    meaning: 'misunderstanding'
  },
  {
    kanji: '語',
    word: '日本語',
    pronunciation: 'Nihongo',
    meaning: 'Japanese language'
  },
  {
    kanji: '語',
    word: '文化語',
    pronunciation: 'Bunkaigo',
    meaning: 'cultural language'
  },
  {
    kanji: '語',
    word: '国語',
    pronunciation: 'Kokugo',
    meaning: 'national language'
  },
  {
    kanji: '語',
    word: '辞語',
    pronunciation: 'Jigoku',
    meaning: 'vocabulary'
  },
  {
    kanji: '語',
    word: '言語',
    pronunciation: 'Eigo',
    meaning: 'language'
  },
  {
    kanji: '生',
    word: '生活',
    pronunciation: 'seikatsu',
    meaning: 'living'
  },
  {
    kanji: '生',
    word: '生命',
    pronunciation: 'seimei',
    meaning: 'life'
  },
  {
    kanji: '生',
    word: '生成',
    pronunciation: 'seigen',
    meaning: 'production'
  },
  {
    kanji: '生',
    word: '生化',
    pronunciation: 'seikaku',
    meaning: 'metabolism'
  },
  {
    kanji: '生',
    word: '生物',
    pronunciation: 'seibutsu',
    meaning: 'living thing'
  },
  {
    kanji: '書',
    word: '文化',
    pronunciation: 'bunka',
    meaning: 'culture'
  },
  {
    kanji: '書',
    word: '書類',
    pronunciation: 'sho-ryo',
    meaning: 'documents'
  },
  {
    kanji: '書',
    word: '読本',
    pronunciation: 'yobon',
    meaning: 'reading materials'
  },
  {
    kanji: '書',
    word: '図書館',
    pronunciation: 'tsukuru-kan',
    meaning: 'library'
  },
  {
    kanji: '書',
    word: '文学',
    pronunciation: 'bungaku',
    meaning: 'literature'
  }
];

// Make the API requests for each input object
getJapaneseWordsForObject(inputObjects);
