import { groupBy } from 'lodash';

let arr = [
  {
    kanjiName: '一',
    strokes: 1,
    grade: 1,
    freq: 2,
    meanings: ['One', 'One Radical (no.1)'],
    on: ['いち', 'いつ'],
    kun: ['ひと-', 'ひと.つ'],
    jlpt: 5,
    quizAnswers: ['Closing', 'Woe', 'One', 'Outrage'],
    similars: [
      {
        kanji: '十',
        meaning: 'ten',
      },
      {
        kanji: '二',
        meaning: 'two',
      },
      {
        kanji: '七',
        meaning: 'seven',
      },
      {
        kanji: '丁',
        meaning: 'street',
      },
      {
        kanji: '己',
        meaning: 'self',
      },
      {
        kanji: '与',
        meaning: 'bestow',
      },
      {
        kanji: '子',
        meaning: 'child',
      },
      {
        kanji: '下',
        meaning: 'below',
      },
      {
        kanji: '土',
        meaning: 'soil',
      },
      {
        kanji: '上',
        meaning: 'above',
      },
    ],
    usedIn: [
      {
        kanji: '一つ',
        reading: 'ひとつ',
        meanings: 'one',
      },
      {
        kanji: '一つ一つ',
        reading: 'ひとつひとつ',
        meanings: 'one-by-one',
      },
      {
        kanji: '一',
        reading: 'いち',
        meanings: 'one',
      },
      {
        kanji: '一位',
        reading: 'いちい',
        meanings: 'first place',
      },
      {
        kanji: '十一',
        reading: 'じゅういち',
        meanings: 'eleven',
      },
      {
        kanji: '１対１',
        reading: 'いちたいいち',
        meanings: 'one-to-one',
      },
      {
        kanji: '一',
        reading: 'いつ',
        meanings: 'one',
      },
      {
        kanji: '一に',
        reading: 'いつに',
        meanings: 'solely',
      },
      {
        kanji: '均一',
        reading: 'きんいつ',
        meanings: 'uniformity',
      },
      {
        kanji: '画一',
        reading: 'かくいつ',
        meanings: 'uniformity',
      },
    ],
  },
  {
    kanjiName: '二',
    strokes: 2,
    grade: 1,
    freq: 9,
    meanings: ['Two', 'Two Radical (no. 7)'],
    on: ['に', 'じ'],
    kun: ['ふた', 'ふた.つ', 'ふたたび'],
    jlpt: 5,
    quizAnswers: ['Affix A Seal', 'Two', 'Sort', 'Expert'],
    similars: [
      {
        kanji: '土',
        meaning: 'soil',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '三',
        meaning: 'three',
      },
      {
        kanji: '与',
        meaning: 'bestow',
      },
      {
        kanji: '干',
        meaning: 'dry',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '互',
        meaning: 'mutually',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '十',
        meaning: 'ten',
      },
    ],
    usedIn: [
      {
        kanji: '二',
        reading: 'に',
        meanings: 'two',
      },
      {
        kanji: '二重',
        reading: 'にじゅう',
        meanings: 'double',
      },
      {
        kanji: '二つ',
        reading: 'ふたつ',
        meanings: 'two',
      },
      {
        kanji: '二つ目',
        reading: 'ふたつめ',
        meanings: 'one after next',
      },
      {
        kanji: '再び',
        reading: 'ふたたび',
        meanings: 'again',
      },
      {
        kanji: '二',
        reading: 'に',
        meanings: 'two',
      },
      {
        kanji: '二院',
        reading: 'にいん',
        meanings: 'the two houses of legislature',
      },
      {
        kanji: '一二',
        reading: 'いちに',
        meanings: 'the first and second',
      },
      {
        kanji: '十二',
        reading: 'じゅうに',
        meanings: 'twelve',
      },
      {
        kanji: '次男',
        reading: 'じなん',
        meanings: 'second son',
      },
      {
        kanji: '二黒',
        reading: 'じこく',
        meanings:
          'second of nine traditional astrological signs (corresponding to Saturn and southwest)',
      },
      {
        kanji: '不二',
        reading: 'ふじ',
        meanings: 'being two sides of the same coin',
      },
      {
        kanji: '唯一不二',
        reading: 'ゆいいつふじ',
        meanings: 'one and only',
      },
    ],
  },
  {
    kanjiName: '九',
    strokes: 2,
    grade: 1,
    freq: 55,
    meanings: ['Nine'],
    on: ['きゅう', 'く'],
    kun: ['ここの', 'ここの.つ'],
    jlpt: 5,
    quizAnswers: ['Reckless', 'Nine', 'Waves', 'Consume'],
    similars: [
      {
        kanji: '丸',
        meaning: 'round',
      },
      {
        kanji: '入',
        meaning: 'enter',
      },
      {
        kanji: '八',
        meaning: 'eight',
      },
      {
        kanji: '乙',
        meaning: 'the latter',
      },
      {
        kanji: '人',
        meaning: 'person',
      },
      {
        kanji: '久',
        meaning: 'long time',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '勺',
        meaning: 'ladle',
      },
      {
        kanji: '及',
        meaning: 'reach out',
      },
      {
        kanji: '川',
        meaning: 'stream',
      },
    ],
    usedIn: [
      {
        kanji: '九',
        reading: 'きゅう',
        meanings: 'nine',
      },
      {
        kanji: '九重',
        reading: 'ここのえ',
        meanings: 'ninefold',
      },
      {
        kanji: '九つ',
        reading: 'ここのつ',
        meanings: 'nine',
      },
      {
        kanji: '九つ時',
        reading: 'ここのつどき',
        meanings: "(approx.) twelve o'clock (am or pm",
      },
      {
        kanji: '九',
        reading: 'きゅう',
        meanings: 'nine',
      },
      {
        kanji: '九州',
        reading: 'きゅうしゅう',
        meanings: 'Kyūshū (southernmost of the four main islands of Japan)',
      },
      {
        kanji: '十九',
        reading: 'じゅうきゅう',
        meanings: 'nineteen',
      },
      {
        kanji: '２９',
        reading: 'にじゅうきゅう',
        meanings: '29',
      },
      {
        kanji: '九',
        reading: 'きゅう',
        meanings: 'nine',
      },
      {
        kanji: '９月',
        reading: 'くがつ',
        meanings: 'September',
      },
      {
        kanji: '九九',
        reading: 'くく',
        meanings: 'multiplication table',
      },
      {
        kanji: '第九',
        reading: 'だいく',
        meanings: 'ninth',
      },
    ],
  },
  {
    kanjiName: '七',
    strokes: 2,
    grade: 1,
    freq: 115,
    meanings: ['Seven'],
    on: ['しち'],
    kun: ['なな', 'なな.つ', 'なの'],
    jlpt: 5,
    quizAnswers: ['Seven', 'Copulate', 'Discern', 'Far Off'],
    similars: [
      {
        kanji: '己',
        meaning: 'self',
      },
      {
        kanji: '十',
        meaning: 'ten',
      },
      {
        kanji: '一',
        meaning: 'one',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '毛',
        meaning: 'fur',
      },
      {
        kanji: '二',
        meaning: 'two',
      },
      {
        kanji: '匹',
        meaning: 'equal',
      },
      {
        kanji: '丁',
        meaning: 'street',
      },
      {
        kanji: '札',
        meaning: 'tag',
      },
      {
        kanji: '包',
        meaning: 'wrap',
      },
    ],
    usedIn: [
      {
        kanji: '七',
        reading: 'しち',
        meanings: 'seven',
      },
      {
        kanji: '７月',
        reading: 'しちがつ',
        meanings: 'July',
      },
      {
        kanji: '第七',
        reading: 'だいなな',
        meanings: 'seventh',
      },
      {
        kanji: '２７',
        reading: 'にじゅうしち',
        meanings: '27',
      },
      {
        kanji: '七つ',
        reading: 'ななつ',
        meanings: 'seven',
      },
      {
        kanji: '七帯アルマジロ',
        reading: 'ななつおびあるまじろ',
        meanings: 'seven-banded armadillo (Dasypus septemcinctus)',
      },
      {
        kanji: '７日',
        reading: 'なのか',
        meanings: '7th day of the month',
      },
      {
        kanji: '七',
        reading: 'しち',
        meanings: 'seven',
      },
      {
        kanji: '７月',
        reading: 'しちがつ',
        meanings: 'July',
      },
      {
        kanji: '２７',
        reading: 'にじゅうしち',
        meanings: '27',
      },
      {
        kanji: 'セシウム１３７',
        reading: 'せしうむひゃくさんじゅうしち',
        meanings: 'cesium-137',
      },
    ],
  },
  {
    kanjiName: '人',
    strokes: 2,
    grade: 1,
    freq: 5,
    meanings: ['Person'],
    on: ['じん', 'にん'],
    kun: ['ひと', '-り', '-と'],
    jlpt: 5,
    quizAnswers: ['Choice', 'Person', 'Association', 'Mediocre'],
    similars: [
      {
        kanji: '入',
        meaning: 'enter',
      },
      {
        kanji: '八',
        meaning: 'eight',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '及',
        meaning: 'reach out',
      },
      {
        kanji: '久',
        meaning: 'long time',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
      {
        kanji: '反',
        meaning: 'anti-',
      },
      {
        kanji: '父',
        meaning: 'father',
      },
    ],
    usedIn: [
      {
        kanji: '人',
        reading: 'ひと',
        meanings: 'person',
      },
      {
        kanji: '人一倍',
        reading: 'ひといちばい',
        meanings: '(much) more than others',
      },
      {
        kanji: '貴人',
        reading: 'きじん',
        meanings: 'aristocrat',
      },
      {
        kanji: 'いい人',
        reading: 'いいひと',
        meanings: 'good-natured person',
      },
      {
        kanji: '人',
        reading: 'じん',
        meanings: '-ian (e.g. Italian)',
      },
      {
        kanji: '人為',
        reading: 'じんい',
        meanings: 'human work',
      },
      {
        kanji: '米人',
        reading: 'べいじん',
        meanings: 'American person',
      },
      {
        kanji: '俳人',
        reading: 'はいじん',
        meanings: 'haiku poet',
      },
      {
        kanji: '人',
        reading: 'にん',
        meanings: 'counter for people',
      },
      {
        kanji: '人気',
        reading: 'にんき',
        meanings: 'popularity',
      },
      {
        kanji: '同人',
        reading: 'どうじん',
        meanings: 'same person',
      },
      {
        kanji: '代人',
        reading: 'だいにん',
        meanings: 'substitute',
      },
    ],
  },
  {
    kanjiName: '入',
    strokes: 2,
    grade: 1,
    freq: 56,
    meanings: ['Enter', 'Insert'],
    on: ['にゅう', 'じゅ'],
    kun: ['い.る', '-い.る', '-い.り', 'い.れる', '-い.れ', 'はい.る'],
    jlpt: 5,
    quizAnswers: ['First Time', 'Char', 'Enter', 'Cut Out (pattern)'],
    similars: [
      {
        kanji: '人',
        meaning: 'person',
      },
      {
        kanji: '八',
        meaning: 'eight',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '及',
        meaning: 'reach out',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '久',
        meaning: 'long time',
      },
      {
        kanji: '欠',
        meaning: 'lack',
      },
      {
        kanji: '水',
        meaning: 'water',
      },
      {
        kanji: '火',
        meaning: 'fire',
      },
      {
        kanji: '父',
        meaning: 'father',
      },
    ],
    usedIn: [
      {
        kanji: '入る',
        reading: 'いる',
        meanings: 'to enter',
      },
      {
        kanji: '入満',
        reading: 'いるまん',
        meanings: 'brother',
      },
      {
        kanji: '入れる',
        reading: 'いれる',
        meanings: 'to put in',
      },
      {
        kanji: '入る',
        reading: 'はいる',
        meanings: 'to enter',
      },
      {
        kanji: '入園',
        reading: 'にゅうえん',
        meanings: 'enrollment in kindergarten',
      },
      {
        kanji: '入院',
        reading: 'にゅういん',
        meanings: 'hospitalization',
      },
      {
        kanji: '輸出入',
        reading: 'ゆしゅつにゅう',
        meanings: 'export and import',
      },
      {
        kanji: '納入',
        reading: 'のうにゅう',
        meanings: 'payment (of taxes',
      },
      {
        kanji: '入水',
        reading: 'じゅすい',
        meanings: 'suicide by drowning',
      },
      {
        kanji: '入御',
        reading: 'にゅうぎょ',
        meanings: "emperor's return to the imperial palace",
      },
    ],
  },
  {
    kanjiName: '八',
    strokes: 2,
    grade: 1,
    freq: 92,
    meanings: ['Eight', 'Eight Radical (no. 12)'],
    on: ['はち'],
    kun: ['や', 'や.つ', 'やっ.つ', 'よう'],
    jlpt: 5,
    quizAnswers: ['Cleanse', '3rd Calendar Sign', 'Eight', 'Purify'],
    similars: [
      {
        kanji: '人',
        meaning: 'person',
      },
      {
        kanji: '入',
        meaning: 'enter',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '久',
        meaning: 'long time',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '及',
        meaning: 'reach out',
      },
      {
        kanji: '水',
        meaning: 'water',
      },
      {
        kanji: '欠',
        meaning: 'lack',
      },
      {
        kanji: '反',
        meaning: 'anti-',
      },
      {
        kanji: '又',
        meaning: 'or again',
      },
    ],
    usedIn: [
      {
        kanji: '八',
        reading: 'はち',
        meanings: 'eight',
      },
      {
        kanji: '八重',
        reading: 'やえ',
        meanings: 'multilayered',
      },
      {
        kanji: '八つ',
        reading: 'やっつ',
        meanings: 'eight',
      },
      {
        kanji: '八つ当たり',
        reading: 'やつあたり',
        meanings: "venting one's anger (on someone or something)",
      },
      {
        kanji: '八つ',
        reading: 'やっつ',
        meanings: 'eight',
      },
      {
        kanji: '８日',
        reading: 'ようか',
        meanings: '8th day of the month',
      },
      {
        kanji: '八',
        reading: 'はち',
        meanings: 'eight',
      },
      {
        kanji: '８月',
        reading: 'はちがつ',
        meanings: 'August',
      },
      {
        kanji: '十八',
        reading: 'じゅうはち',
        meanings: 'eighteen',
      },
      {
        kanji: '尺八',
        reading: 'しゃくはち',
        meanings: 'shakuhachi',
      },
      {
        kanji: '鳶尾',
        reading: 'いちはつ',
        meanings: 'wall iris',
      },
    ],
  },
  {
    kanjiName: '十',
    strokes: 2,
    grade: 1,
    freq: 8,
    meanings: ['Ten'],
    on: ['じゅう', 'じっ', 'じゅっ'],
    kun: ['とお', 'と'],
    jlpt: 5,
    quizAnswers: ['Due To', 'Ten', 'Depend', 'Reparation'],
    similars: [
      {
        kanji: '干',
        meaning: 'dry',
      },
      {
        kanji: '下',
        meaning: 'below',
      },
      {
        kanji: '千',
        meaning: 'thousand',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '不',
        meaning: 'negative',
      },
      {
        kanji: '丁',
        meaning: 'street',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '升',
        meaning: 'measuring box',
      },
      {
        kanji: '井',
        meaning: 'well',
      },
    ],
    usedIn: [
      {
        kanji: '十',
        reading: 'じゅう',
        meanings: 'ten',
      },
      {
        kanji: '１０日',
        reading: 'とおか',
        meanings: '10th day of the month',
      },
      {
        kanji: '釈迦十',
        reading: 'しゃかじゅう',
        meanings: '10 of batons (in mekuri karuta)',
      },
      {
        kanji: '十',
        reading: 'じゅう',
        meanings: 'ten',
      },
      {
        kanji: '１０日',
        reading: 'とおか',
        meanings: '10th day of the month',
      },
      {
        kanji: '算盤',
        reading: 'そろばん',
        meanings: 'abacus',
      },
      {
        kanji: '十',
        reading: 'じゅう',
        meanings: 'ten',
      },
      {
        kanji: '十一',
        reading: 'じゅういち',
        meanings: 'eleven',
      },
      {
        kanji: '９０',
        reading: 'きゅうじゅう',
        meanings: 'ninety',
      },
      {
        kanji: '第十',
        reading: 'だいじゅう',
        meanings: 'tenth',
      },
      {
        kanji: '十種競技',
        reading: 'じっしゅきょうぎ',
        meanings: 'decathlon',
      },
      {
        kanji: '十指',
        reading: 'じっし',
        meanings: 'the ten fingers',
      },
      {
        kanji: '十指',
        reading: 'じっし',
        meanings: 'the ten fingers',
      },
      {
        kanji: '十回',
        reading: 'じっかい',
        meanings: 'ten times',
      },
    ],
  },
  {
    kanjiName: '三',
    strokes: 3,
    grade: 1,
    freq: 14,
    meanings: ['Three'],
    on: ['さん', 'ぞう'],
    kun: ['み', 'み.つ', 'みっ.つ'],
    jlpt: 5,
    quizAnswers: ['Sputter', 'Three', 'While', 'General'],
    similars: [
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '干',
        meaning: 'dry',
      },
      {
        kanji: '二',
        meaning: 'two',
      },
      {
        kanji: '与',
        meaning: 'bestow',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '土',
        meaning: 'soil',
      },
      {
        kanji: '左',
        meaning: 'left',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '圧',
        meaning: 'pressure',
      },
    ],
    usedIn: [
      {
        kanji: '三',
        reading: 'さん',
        meanings: 'three',
      },
      {
        kanji: '三十日',
        reading: 'みそか',
        meanings: 'last day of the month',
      },
      {
        kanji: '三つ',
        reading: 'みっつ',
        meanings: 'three',
      },
      {
        kanji: '三つ折り',
        reading: 'みつおり',
        meanings: 'threefold',
      },
      {
        kanji: '三つ',
        reading: 'みっつ',
        meanings: 'three',
      },
      {
        kanji: '３つの密',
        reading: 'みっつのみつ',
        meanings: 'three Cs',
      },
      {
        kanji: '三',
        reading: 'さん',
        meanings: 'three',
      },
      {
        kanji: '三',
        reading: 'さん',
        meanings: 'three',
      },
      {
        kanji: '十三',
        reading: 'じゅうさん',
        meanings: 'thirteen',
      },
      {
        kanji: '七三',
        reading: 'しちさん',
        meanings: '7 or 3 ratio',
      },
      {
        kanji: '四三',
        reading: 'しそう',
        meanings: 'one four-of-a-kind and one three-of-a-kind in a dealt hand',
      },
    ],
  },
  {
    kanjiName: '上',
    strokes: 3,
    grade: 1,
    freq: 35,
    meanings: ['Above', 'Up'],
    on: ['じょう', 'しょう', 'しゃん'],
    kun: [
      'うえ',
      '-うえ',
      'うわ-',
      'かみ',
      'あ.げる',
      '-あ.げる',
      'あ.がる',
      '-あ.がる',
      'あ.がり',
      '-あ.がり',
      'のぼ.る',
      'のぼ.り',
      'のぼ.せる',
      'のぼ.す',
      'たてまつ.る',
    ],
    jlpt: 5,
    quizAnswers: ['Island', 'Above', 'Jewel', 'Perish'],
    similars: [
      {
        kanji: '五',
        meaning: 'five',
      },
      {
        kanji: '止',
        meaning: 'stop',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '立',
        meaning: 'stand up',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '正',
        meaning: 'correct',
      },
      {
        kanji: '且',
        meaning: 'moreover',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '央',
        meaning: 'center',
      },
    ],
    usedIn: [
      {
        kanji: '上',
        reading: 'うえ',
        meanings: 'above',
      },
      {
        kanji: '上向き',
        reading: 'うわむき',
        meanings: 'pointing up',
      },
      {
        kanji: '床上',
        reading: 'ゆかうえ',
        meanings: 'on a floor',
      },
      {
        kanji: '一枚上',
        reading: 'いちまいうえ',
        meanings: 'one step higher',
      },
      {
        kanji: '上',
        reading: 'かみ',
        meanings: 'upper reaches (of a river)',
      },
      {
        kanji: '上期',
        reading: 'かみき',
        meanings: 'first half of the (fiscal) year',
      },
      {
        kanji: '風上',
        reading: 'かざかみ',
        meanings: 'windward',
      },
      {
        kanji: '御上',
        reading: 'おかみ',
        meanings: 'the Emperor',
      },
      {
        kanji: '上げる',
        reading: 'あげる',
        meanings: 'to raise',
      },
      {
        kanji: '上がる',
        reading: 'あがる',
        meanings: 'to rise',
      },
      {
        kanji: '上がり',
        reading: 'あがり',
        meanings: 'rise',
      },
      {
        kanji: '上がり下り',
        reading: 'あがりおり',
        meanings: 'going up and down',
      },
      {
        kanji: '芸者上がり',
        reading: 'げいしゃあがり',
        meanings: 'ex-geisha',
      },
      {
        kanji: '上る',
        reading: 'のぼる',
        meanings: 'to ascend',
      },
      {
        kanji: '上り',
        reading: 'のぼり',
        meanings: 'ascent',
      },
      {
        kanji: '上り下り',
        reading: 'のぼりくだり',
        meanings: 'going up and down',
      },
      {
        kanji: '逆上せる',
        reading: 'のぼせる',
        meanings: 'to feel dizzy',
      },
      {
        kanji: '上せる',
        reading: 'のぼせる',
        meanings: 'to raise',
      },
      {
        kanji: '上す',
        reading: 'のぼす',
        meanings: 'to raise',
      },
      {
        kanji: '上',
        reading: 'じょう',
        meanings: 'from the standpoint of',
      },
      {
        kanji: '上位',
        reading: 'じょうい',
        meanings: 'superior (in rank)',
      },
      {
        kanji: '口上',
        reading: 'こうじょう',
        meanings: 'vocal message',
      },
      {
        kanji: '水上',
        reading: 'すいじょう',
        meanings: 'aquatic',
      },
      {
        kanji: '上人',
        reading: 'しょうにん',
        meanings: 'holy priest',
      },
      {
        kanji: '上下',
        reading: 'しょうか',
        meanings: 'top and bottom',
      },
      {
        kanji: '呈上',
        reading: 'ていじょう',
        meanings: 'giving',
      },
      {
        kanji: '主上',
        reading: 'しゅじょう',
        meanings: 'emperor',
      },
      {
        kanji: '上海',
        reading: 'しゃんはい',
        meanings: 'Shanghai (China)',
      },
      {
        kanji: '上湯',
        reading: 'しゃんたん',
        meanings: 'top-grade Chinese soup stock',
      },
    ],
  },
  {
    kanjiName: '下',
    strokes: 3,
    grade: 1,
    freq: 97,
    meanings: ['Below', 'Down', 'Descend', 'Give', 'Low', 'Inferior'],
    on: ['か', 'げ'],
    kun: [
      'した',
      'しも',
      'もと',
      'さ.げる',
      'さ.がる',
      'くだ.る',
      'くだ.り',
      'くだ.す',
      '-くだ.す',
      'くだ.さる',
      'お.ろす',
      'お.りる',
    ],
    jlpt: 5,
    quizAnswers: ['Puckery Juice', 'Become Serious', 'Below', 'Red Lead'],
    similars: [
      {
        kanji: '不',
        meaning: 'negative',
      },
      {
        kanji: '十',
        meaning: 'ten',
      },
      {
        kanji: '寸',
        meaning: 'measurement',
      },
      {
        kanji: '斥',
        meaning: 'reject',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '迅',
        meaning: 'swift',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '仏',
        meaning: 'Buddha',
      },
      {
        kanji: '朴',
        meaning: 'crude',
      },
    ],
    usedIn: [
      {
        kanji: '下',
        reading: 'した',
        meanings: 'below',
      },
      {
        kanji: '下請け',
        reading: 'したうけ',
        meanings: 'subcontract',
      },
      {
        kanji: '幕下',
        reading: 'まくした',
        meanings: 'third highest division',
      },
      {
        kanji: '上下',
        reading: 'うえした',
        meanings: 'top and bottom',
      },
      {
        kanji: '下',
        reading: 'しも',
        meanings: 'lower reaches (of a river)',
      },
      {
        kanji: '下期',
        reading: 'しもき',
        meanings: 'second half of the (fiscal) year',
      },
      {
        kanji: '風下',
        reading: 'かざしも',
        meanings: 'leeward',
      },
      {
        kanji: '裃',
        reading: 'かみしも',
        meanings: 'samurai costume',
      },
      {
        kanji: '下',
        reading: 'もと',
        meanings: 'under (guidance',
      },
      {
        kanji: '山元',
        reading: 'やまもと',
        meanings: 'foot of a mountain',
      },
      {
        kanji: 'お膝元',
        reading: 'おひざもと',
        meanings: 'beside a nobleman',
      },
      {
        kanji: '下げる',
        reading: 'さげる',
        meanings: 'to hang',
      },
      {
        kanji: '下がる',
        reading: 'さがる',
        meanings: 'to come down',
      },
      {
        kanji: '下る',
        reading: 'くだる',
        meanings: 'to descend',
      },
      {
        kanji: '下り',
        reading: 'くだり',
        meanings: 'down-train',
      },
      {
        kanji: '下り坂',
        reading: 'くだりざか',
        meanings: 'downhill',
      },
      {
        kanji: '下す',
        reading: 'くだす',
        meanings: 'to make a decision',
      },
      {
        kanji: '下さる',
        reading: 'くださる',
        meanings: 'to give',
      },
      {
        kanji: '下ろす',
        reading: 'おろす',
        meanings: 'to take down',
      },
      {
        kanji: '降りる',
        reading: 'おりる',
        meanings: 'to descend (e.g. a mountain)',
      },
      {
        kanji: '下',
        reading: 'か',
        meanings: 'under (influence',
      },
      {
        kanji: '下位',
        reading: 'かい',
        meanings: 'low rank',
      },
      {
        kanji: '陛下',
        reading: 'へいか',
        meanings: 'Your Majesty',
      },
      {
        kanji: '最下',
        reading: 'さいか',
        meanings: 'the lowest',
      },
      {
        kanji: '下',
        reading: 'げ',
        meanings: 'lowness (of degree',
      },
      {
        kanji: '下山',
        reading: 'げざん',
        meanings: 'descending a mountain',
      },
      {
        kanji: '高下',
        reading: 'こうげ',
        meanings: 'rise and fall (e.g. prices)',
      },
      {
        kanji: '帯下',
        reading: 'たいげ',
        meanings: 'leukorrhoea',
      },
    ],
  },
  {
    kanjiName: '大',
    strokes: 3,
    grade: 1,
    freq: 7,
    meanings: ['Large', 'Big'],
    on: ['だい', 'たい'],
    kun: ['おお-', 'おお.きい', '-おお.いに'],
    jlpt: 5,
    quizAnswers: ['Gang', 'Task', 'Large', 'Model'],
    similars: [
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '友',
        meaning: 'friend',
      },
      {
        kanji: '反',
        meaning: 'anti-',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '人',
        meaning: 'person',
      },
    ],
    usedIn: [
      {
        kanji: '大きい',
        reading: 'おおきい',
        meanings: 'big',
      },
      {
        kanji: '大',
        reading: 'だい',
        meanings: 'large',
      },
      {
        kanji: '大尉',
        reading: 'たいい',
        meanings: 'captain (Army',
      },
      {
        kanji: '国大',
        reading: 'こくだい',
        meanings: 'national university',
      },
      {
        kanji: '電通大',
        reading: 'でんつうだい',
        meanings: 'University of Electro-Communications',
      },
      {
        kanji: '大',
        reading: 'たい',
        meanings: 'nth year in the Taishō era (1912.7.30-1926.12.25)',
      },
      {
        kanji: '大尉',
        reading: 'たいい',
        meanings: 'captain (Army',
      },
      {
        kanji: '負荷増大',
        reading: 'ふかぞうたい',
        meanings: 'load increase',
      },
      {
        kanji: '御大',
        reading: 'おんたい',
        meanings: 'boss',
      },
    ],
  },
  {
    kanjiName: '女',
    strokes: 3,
    grade: 1,
    freq: 151,
    meanings: ['Woman', 'Female'],
    on: ['じょ', 'にょ', 'にょう'],
    kun: ['おんな', 'め'],
    jlpt: 5,
    quizAnswers: ['Beautiful Woman', 'Assist', 'Woman', 'Mat'],
    similars: [
      {
        kanji: '好',
        meaning: 'fond',
      },
      {
        kanji: '斤',
        meaning: 'axe',
      },
      {
        kanji: '妃',
        meaning: 'queen',
      },
      {
        kanji: '升',
        meaning: 'measuring box',
      },
      {
        kanji: '安',
        meaning: 'relax',
      },
      {
        kanji: '妄',
        meaning: 'delusion',
      },
      {
        kanji: '妨',
        meaning: 'disturb',
      },
      {
        kanji: '妥',
        meaning: 'gentle',
      },
      {
        kanji: '妊',
        meaning: 'pregnancy',
      },
      {
        kanji: '斥',
        meaning: 'reject',
      },
    ],
    usedIn: [
      {
        kanji: '女',
        reading: 'おんな',
        meanings: 'woman',
      },
      {
        kanji: '女形',
        reading: 'おんながた',
        meanings: 'onnagata',
      },
      {
        kanji: '醜女',
        reading: 'しゅうじょ',
        meanings: 'homely woman',
      },
      {
        kanji: '囲い女',
        reading: 'かこいおんな',
        meanings: 'mistress',
      },
      {
        kanji: '雌',
        reading: 'め',
        meanings: 'female',
      },
      {
        kanji: '女神',
        reading: 'めがみ',
        meanings: 'goddess',
      },
      {
        kanji: '早乙女',
        reading: 'さおとめ',
        meanings: 'young female rice planter',
      },
      {
        kanji: '醜女',
        reading: 'しゅうじょ',
        meanings: 'homely woman',
      },
      {
        kanji: '女',
        reading: 'じょ',
        meanings: 'woman',
      },
      {
        kanji: '女王',
        reading: 'じょおう',
        meanings: 'queen',
      },
      {
        kanji: '処女',
        reading: 'しょじょ',
        meanings: 'virgin (usu. female)',
      },
      {
        kanji: '一女',
        reading: 'いちじょ',
        meanings: 'one daughter',
      },
      {
        kanji: '女王',
        reading: 'じょおう',
        meanings: 'queen',
      },
      {
        kanji: '女房',
        reading: 'にょうぼう',
        meanings: "wife (esp. one's own wife)",
      },
      {
        kanji: '老若男女',
        reading: 'ろうにゃくなんにょ',
        meanings: 'men and women of all ages',
      },
      {
        kanji: '天女',
        reading: 'てんにょ',
        meanings: 'heavenly nymph',
      },
      {
        kanji: '女房',
        reading: 'にょうぼう',
        meanings: "wife (esp. one's own wife)",
      },
      {
        kanji: '女官',
        reading: 'じょかん',
        meanings: 'court lady',
      },
    ],
  },
  {
    kanjiName: '山',
    strokes: 3,
    grade: 1,
    freq: 131,
    meanings: ['Mountain'],
    on: ['さん', 'せん'],
    kun: ['やま'],
    jlpt: 5,
    quizAnswers: ['Mountain', 'Charge', 'Miss', 'Untie'],
    similars: [
      {
        kanji: '出',
        meaning: 'exit',
      },
      {
        kanji: '仙',
        meaning: 'hermit',
      },
      {
        kanji: '凶',
        meaning: 'villain',
      },
      {
        kanji: '両',
        meaning: 'both',
      },
      {
        kanji: '缶',
        meaning: 'tin can',
      },
      {
        kanji: '岐',
        meaning: 'branch off',
      },
      {
        kanji: '凹',
        meaning: 'concave',
      },
      {
        kanji: '占',
        meaning: 'fortune-telling',
      },
      {
        kanji: '凸',
        meaning: 'convex',
      },
      {
        kanji: '市',
        meaning: 'market',
      },
    ],
    usedIn: [
      {
        kanji: '山',
        reading: 'やま',
        meanings: 'mountain',
      },
      {
        kanji: '山陰',
        reading: 'やまかげ',
        meanings: 'place in the shade of a mountain',
      },
      {
        kanji: '奥山',
        reading: 'おくやま',
        meanings: 'remote mountain',
      },
      {
        kanji: '青山',
        reading: 'せいざん',
        meanings: 'lush mountain',
      },
      {
        kanji: '山',
        reading: 'さん',
        meanings: 'Mt.',
      },
      {
        kanji: '山陰',
        reading: 'やまかげ',
        meanings: 'place in the shade of a mountain',
      },
      {
        kanji: '治山',
        reading: 'ちさん',
        meanings: 'forest conservation',
      },
      {
        kanji: '開山',
        reading: 'かいさん',
        meanings: 'founding a temple (on a hill-top)',
      },
      {
        kanji: '山道',
        reading: 'やまみち',
        meanings: 'mountain road',
      },
      {
        kanji: '山海経',
        reading: 'せんがいきょう',
        meanings: 'Classic of Mountains and Seas (classic Chinese text)',
      },
      {
        kanji: '雪山',
        reading: 'せつざん',
        meanings: 'snowy mountain',
      },
      {
        kanji: '須弥山',
        reading: 'しゅみせん',
        meanings:
          'Mount Sumeru (believed to be the centre of the Buddhist world)',
      },
    ],
  },
  {
    kanjiName: '川',
    strokes: 3,
    grade: 1,
    freq: 181,
    meanings: [
      'Stream',
      'River',
      'River Or Three-stroke River Radical (no. 47)',
    ],
    on: ['せん'],
    kun: ['かわ'],
    jlpt: 5,
    quizAnswers: ['Dilute (acid)', 'Enemy', 'Stream', 'Lightly'],
    similars: [
      {
        kanji: '千',
        meaning: 'thousand',
      },
      {
        kanji: '布',
        meaning: 'linen',
      },
      {
        kanji: '他',
        meaning: 'other',
      },
      {
        kanji: '仙',
        meaning: 'hermit',
      },
      {
        kanji: '休',
        meaning: 'rest',
      },
      {
        kanji: '凶',
        meaning: 'villain',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '仲',
        meaning: 'go-between',
      },
      {
        kanji: '屯',
        meaning: 'barracks',
      },
      {
        kanji: '斤',
        meaning: 'axe',
      },
    ],
    usedIn: [
      {
        kanji: '川',
        reading: 'かわ',
        meanings: 'river',
      },
      {
        kanji: '川上',
        reading: 'かわかみ',
        meanings: 'upper reaches of a river',
      },
      {
        kanji: '堀川',
        reading: 'ほりかわ',
        meanings: 'canal',
      },
      {
        kanji: '山川',
        reading: 'さんせん',
        meanings: 'mountains and rivers',
      },
      {
        kanji: '川柳',
        reading: 'せんりゅう',
        meanings: 'senryū',
      },
      {
        kanji: '川きゅう',
        reading: 'せんきゅう',
        meanings: 'cnidium rhizome (Cnidium officinale)',
      },
      {
        kanji: '山川',
        reading: 'さんせん',
        meanings: 'mountains and rivers',
      },
      {
        kanji: '四川',
        reading: 'しせん',
        meanings: 'Sichuan (China)',
      },
    ],
  },
  {
    kanjiName: '土',
    strokes: 3,
    grade: 1,
    freq: 307,
    meanings: ['Soil', 'Earth', 'Ground', 'Turkey'],
    on: ['ど', 'と'],
    kun: ['つち'],
    jlpt: 5,
    quizAnswers: ['Expel', 'Greasy', 'Soil', 'Illusion'],
    similars: [
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '五',
        meaning: 'five',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '与',
        meaning: 'bestow',
      },
      {
        kanji: '三',
        meaning: 'three',
      },
      {
        kanji: '二',
        meaning: 'two',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '左',
        meaning: 'left',
      },
    ],
    usedIn: [
      {
        kanji: '土',
        reading: 'つち',
        meanings: 'earth',
      },
      {
        kanji: '土方',
        reading: 'どかた',
        meanings: 'construction worker',
      },
      {
        kanji: '盛り土',
        reading: 'もりど',
        meanings: 'embankment (for road',
      },
      {
        kanji: '赤土',
        reading: 'あかつち',
        meanings: 'red clay',
      },
      {
        kanji: '土',
        reading: 'ど',
        meanings: 'Saturday',
      },
      {
        kanji: '土地',
        reading: 'とち',
        meanings: 'plot of land',
      },
      {
        kanji: '浄土',
        reading: 'じょうど',
        meanings: 'pure land (esp. the Western Pure Land paradise of Amitabha)',
      },
      {
        kanji: '郷土',
        reading: 'きょうど',
        meanings: 'native place',
      },
      {
        kanji: '土',
        reading: 'と',
        meanings: 'Turkey',
      },
      {
        kanji: '時計',
        reading: 'とけい',
        meanings: 'clock',
      },
      {
        kanji: '下土',
        reading: 'かど',
        meanings: 'lower world',
      },
      {
        kanji: '率土',
        reading: 'そっと',
        meanings: 'ends of the earth',
      },
    ],
  },
  {
    kanjiName: '千',
    strokes: 3,
    grade: 1,
    freq: 195,
    meanings: ['Thousand'],
    on: ['せん'],
    kun: ['ち'],
    jlpt: 5,
    quizAnswers: ['Thousand', 'Madder', 'Evade', 'Hurry'],
    similars: [
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '升',
        meaning: 'measuring box',
      },
      {
        kanji: '斤',
        meaning: 'axe',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '川',
        meaning: 'stream',
      },
      {
        kanji: '十',
        meaning: 'ten',
      },
      {
        kanji: '干',
        meaning: 'dry',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '半',
        meaning: 'half',
      },
      {
        kanji: '布',
        meaning: 'linen',
      },
    ],
    usedIn: [
      {
        kanji: '千',
        reading: 'せん',
        meanings: 'thousand',
      },
      {
        kanji: '千島',
        reading: 'ちしま',
        meanings: 'Kurile Islands',
      },
      {
        kanji: '百千',
        reading: 'ひゃくせん',
        meanings: 'a large number',
      },
      {
        kanji: '８０００',
        reading: 'はっせん',
        meanings: '8000',
      },
      {
        kanji: '千',
        reading: 'せん',
        meanings: 'thousand',
      },
      {
        kanji: '千九百年代',
        reading: 'せんきゅうひゃくねんだい',
        meanings: 'the 1900s',
      },
      {
        kanji: '一騎当千',
        reading: 'いっきとうせん',
        meanings: 'being a match for a thousand',
      },
      {
        kanji: '一人当千',
        reading: 'いちにんとうせん',
        meanings: 'being a match for a thousand',
      },
    ],
  },
  {
    kanjiName: '子',
    strokes: 3,
    grade: 1,
    freq: 72,
    meanings: [
      'Child',
      'Sign Of The Rat',
      '11pm-1am',
      'First Sign Of Chinese Zodiac',
    ],
    on: ['し', 'す', 'つ'],
    kun: ['こ', '-こ', 'ね'],
    jlpt: 5,
    quizAnswers: ['Weak Point', 'Entrust To', 'Constancy', 'Child'],
    similars: [
      {
        kanji: '孔',
        meaning: 'cavity',
      },
      {
        kanji: '字',
        meaning: 'character',
      },
      {
        kanji: '存',
        meaning: 'exist',
      },
      {
        kanji: '好',
        meaning: 'fond',
      },
      {
        kanji: '孝',
        meaning: 'filial piety',
      },
      {
        kanji: '季',
        meaning: 'seasons',
      },
      {
        kanji: '享',
        meaning: 'enjoy',
      },
      {
        kanji: '学',
        meaning: 'study',
      },
      {
        kanji: '土',
        meaning: 'soil',
      },
      {
        kanji: '与',
        meaning: 'bestow',
      },
    ],
    usedIn: [
      {
        kanji: '子',
        reading: 'こ',
        meanings: 'child',
      },
      {
        kanji: '子',
        reading: 'こう',
        meanings: 'child',
      },
      {
        kanji: '根っこ',
        reading: 'ねっこ',
        meanings: 'root (of a plant)',
      },
      {
        kanji: '江戸っ子',
        reading: 'えどっこ',
        meanings: '(true) Tokyoite',
      },
      {
        kanji: '子',
        reading: 'ね',
        meanings: 'the Rat (first sign of the Chinese zodiac)',
      },
      {
        kanji: '子忌み',
        reading: 'ねいみ',
        meanings:
          'collecting herbs and pulling out young pine trees by the roots (annual event held on the first day of the Rat of the New Year)',
      },
      {
        kanji: '庚子',
        reading: 'かのえね',
        meanings: 'Metal Rat (37th term of the sexagenary cycle',
      },
      {
        kanji: '甲子',
        reading: 'きのえね',
        meanings: 'Wood Rat (1st term of the sexagenary cycle',
      },
      {
        kanji: '子',
        reading: 'し',
        meanings: 'child (esp. a boy)',
      },
      {
        kanji: '子宮',
        reading: 'しきゅう',
        meanings: 'womb',
      },
      {
        kanji: '中性子',
        reading: 'ちゅうせいし',
        meanings: 'neutron',
      },
      {
        kanji: '精子',
        reading: 'せいし',
        meanings: 'sperm',
      },
      {
        kanji: '主',
        reading: 'す',
        meanings: 'honorific (or familiar) suffix used after a name',
      },
      {
        kanji: '恵比寿',
        reading: 'えびす',
        meanings: 'Ebisu',
      },
      {
        kanji: '久留子',
        reading: 'くるす',
        meanings: 'cross sign',
      },
      {
        kanji: '対子',
        reading: 'といつ',
        meanings: 'pair',
      },
      {
        kanji: '七対子',
        reading: 'ちーといつ',
        meanings: 'seven pairs',
      },
    ],
  },
  {
    kanjiName: '小',
    strokes: 3,
    grade: 1,
    freq: 114,
    meanings: ['Little', 'Small'],
    on: ['しょう'],
    kun: ['ちい.さい', 'こ-', 'お-', 'さ-'],
    jlpt: 5,
    quizAnswers: ['Fault', 'Mallet', 'Little', 'Honor'],
    similars: [
      {
        kanji: '少',
        meaning: 'few',
      },
      {
        kanji: '刃',
        meaning: 'blade',
      },
      {
        kanji: '示',
        meaning: 'show',
      },
      {
        kanji: '水',
        meaning: 'water',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '不',
        meaning: 'negative',
      },
      {
        kanji: '劣',
        meaning: 'inferiority',
      },
      {
        kanji: '抄',
        meaning: 'extract',
      },
      {
        kanji: '求',
        meaning: 'request',
      },
    ],
    usedIn: [
      {
        kanji: '小さい',
        reading: 'ちいさい',
        meanings: 'small',
      },
      {
        kanji: '小さい頃',
        reading: 'ちいさいころ',
        meanings: 'as a child',
      },
      {
        kanji: '小',
        reading: 'しょう',
        meanings: 'smallness',
      },
      {
        kanji: '小雨',
        reading: 'こさめ',
        meanings: 'light rain',
      },
      {
        kanji: '微小',
        reading: 'びしょう',
        meanings: 'microscopic',
      },
      {
        kanji: '中小',
        reading: 'ちゅうしょう',
        meanings: 'small and medium',
      },
    ],
  },
  {
    kanjiName: '中',
    strokes: 4,
    grade: 1,
    freq: 11,
    meanings: ['In', 'Inside', 'Middle', 'Mean', 'Center'],
    on: ['ちゅう'],
    kun: ['なか', 'うち', 'あた.る'],
    jlpt: 5,
    quizAnswers: ['Witch', 'Rising Sun', 'Include', 'In'],
    similars: [
      {
        kanji: '口',
        meaning: 'mouth',
      },
      {
        kanji: '叫',
        meaning: 'shout',
      },
      {
        kanji: '仲',
        meaning: 'go-between',
      },
      {
        kanji: '可',
        meaning: 'can',
      },
      {
        kanji: '号',
        meaning: 'nickname',
      },
      {
        kanji: '巨',
        meaning: 'gigantic',
      },
      {
        kanji: '史',
        meaning: 'history',
      },
      {
        kanji: '兄',
        meaning: 'elder brother',
      },
      {
        kanji: '沖',
        meaning: 'open sea',
      },
      {
        kanji: '束',
        meaning: 'bundle',
      },
    ],
    usedIn: [
      {
        kanji: '中',
        reading: 'なか',
        meanings: 'inside',
      },
      {
        kanji: '中島',
        reading: 'なかじま',
        meanings: 'island in a pond or river',
      },
      {
        kanji: '野中',
        reading: 'のなか',
        meanings: 'in the middle of a field',
      },
      {
        kanji: 'そんな中',
        reading: 'そんななか',
        meanings: 'wherein',
      },
      {
        kanji: '内',
        reading: 'うち',
        meanings: 'inside',
      },
      {
        kanji: '碁打ち鳥飼い馬鹿の中',
        reading: 'ごうちとりかいばかのうち',
        meanings:
          'go players and bird keepers are idiots (both activities demand a lot of time)',
      },
      {
        kanji: '此の内',
        reading: 'このうち',
        meanings: 'meanwhile',
      },
      {
        kanji: '当たる',
        reading: 'あたる',
        meanings: 'to be hit',
      },
      {
        kanji: '中',
        reading: 'ちゅう',
        meanings: 'medium (size)',
      },
      {
        kanji: '中尉',
        reading: 'ちゅうい',
        meanings: 'first lieutenant',
      },
      {
        kanji: '宮中',
        reading: 'きゅうちゅう',
        meanings: 'imperial court',
      },
      {
        kanji: '訪中',
        reading: 'ほうちゅう',
        meanings: 'visit to China',
      },
    ],
  },
  {
    kanjiName: '五',
    strokes: 4,
    grade: 1,
    freq: 31,
    meanings: ['Five'],
    on: ['ご'],
    kun: ['いつ', 'いつ.つ'],
    jlpt: 5,
    quizAnswers: ['Encircle', 'Cause', 'Five', 'Rookery'],
    similars: [
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '互',
        meaning: 'mutually',
      },
      {
        kanji: '土',
        meaning: 'soil',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '正',
        meaning: 'correct',
      },
      {
        kanji: '巧',
        meaning: 'adroit',
      },
    ],
    usedIn: [
      {
        kanji: '五',
        reading: 'ご',
        meanings: 'five',
      },
      {
        kanji: '五つ',
        reading: 'いつつ',
        meanings: 'five',
      },
      {
        kanji: '五つ',
        reading: 'いつつ',
        meanings: 'five',
      },
      {
        kanji: '五つ子',
        reading: 'いつつご',
        meanings: 'quintuplets',
      },
      {
        kanji: '五',
        reading: 'ご',
        meanings: 'five',
      },
      {
        kanji: '５月',
        reading: 'ごがつ',
        meanings: 'May',
      },
      {
        kanji: '端午',
        reading: 'たんご',
        meanings: "Boys' Day celebration (May 5)",
      },
      {
        kanji: '第五',
        reading: 'だいご',
        meanings: 'fifth',
      },
    ],
  },
  {
    kanjiName: '六',
    strokes: 4,
    grade: 1,
    freq: 93,
    meanings: ['Six'],
    on: ['ろく', 'りく'],
    kun: ['む', 'む.つ', 'むっ.つ', 'むい'],
    jlpt: 5,
    quizAnswers: ['Bow', 'Reduce', 'Six', 'Counter For Equestrians'],
    similars: [
      {
        kanji: '文',
        meaning: 'sentence',
      },
      {
        kanji: '立',
        meaning: 'stand up',
      },
      {
        kanji: '央',
        meaning: 'center',
      },
      {
        kanji: '庁',
        meaning: 'government office',
      },
      {
        kanji: '広',
        meaning: 'wide',
      },
      {
        kanji: '以',
        meaning: 'by means of',
      },
      {
        kanji: '兵',
        meaning: 'soldier',
      },
      {
        kanji: '対',
        meaning: 'vis-a-vis',
      },
      {
        kanji: '因',
        meaning: 'cause',
      },
      {
        kanji: '妄',
        meaning: 'delusion',
      },
    ],
    usedIn: [
      {
        kanji: '六',
        reading: 'ろく',
        meanings: 'six',
      },
      {
        kanji: '難しい',
        reading: 'むずかしい',
        meanings: 'difficult',
      },
      {
        kanji: '六つ',
        reading: 'むっつ',
        meanings: 'six',
      },
      {
        kanji: '難しい',
        reading: 'むずかしい',
        meanings: 'difficult',
      },
      {
        kanji: '六つ',
        reading: 'むっつ',
        meanings: 'six',
      },
      {
        kanji: '６日',
        reading: 'むいか',
        meanings: '6th day of the month',
      },
      {
        kanji: '六日間戦争',
        reading: 'むいかかんせんそう',
        meanings: 'Six-Day War (June 5-10',
      },
      {
        kanji: '六',
        reading: 'ろく',
        meanings: 'six',
      },
      {
        kanji: '６月',
        reading: 'ろくがつ',
        meanings: 'June',
      },
      {
        kanji: '十六',
        reading: 'じゅうろく',
        meanings: 'sixteen',
      },
      {
        kanji: '才六',
        reading: 'さいろく',
        meanings: 'kid',
      },
      {
        kanji: '六官',
        reading: 'りくかん',
        meanings: 'six ministries (of Zhou dynasty China)',
      },
      {
        kanji: '六気',
        reading: 'ろっき',
        meanings: 'yin',
      },
    ],
  },
  {
    kanjiName: '円',
    strokes: 4,
    grade: 1,
    freq: 69,
    meanings: ['Circle', 'Yen', 'Round'],
    on: ['えん'],
    kun: ['まる.い', 'まる', 'まど', 'まど.か', 'まろ.やか'],
    jlpt: 5,
    quizAnswers: ['Offer', 'Take', 'Cape', 'Circle'],
    similars: [
      {
        kanji: '再',
        meaning: 'again',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '田',
        meaning: 'rice field',
      },
      {
        kanji: '内',
        meaning: 'inside',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
      {
        kanji: '曲',
        meaning: 'bend',
      },
      {
        kanji: '月',
        meaning: 'month',
      },
      {
        kanji: '両',
        meaning: 'both',
      },
      {
        kanji: '町',
        meaning: 'town',
      },
      {
        kanji: '角',
        meaning: 'angle',
      },
    ],
    usedIn: [
      {
        kanji: '丸い',
        reading: 'まるい',
        meanings: 'round',
      },
      {
        kanji: '丸',
        reading: 'まる',
        meanings: 'circle',
      },
      {
        kanji: '丸い',
        reading: 'まるい',
        meanings: 'round',
      },
      {
        kanji: '黒円',
        reading: 'くろまる',
        meanings: 'black spot',
      },
      {
        kanji: '円居',
        reading: 'まどい',
        meanings: 'sitting in a circle',
      },
      {
        kanji: '円か',
        reading: 'まどか',
        meanings: 'round',
      },
      {
        kanji: '円か',
        reading: 'まどか',
        meanings: 'round',
      },
      {
        kanji: '円やか',
        reading: 'まろやか',
        meanings: 'round',
      },
      {
        kanji: '円',
        reading: 'えん',
        meanings: 'yen (Japanese monetary unit)',
      },
      {
        kanji: '円滑',
        reading: 'えんかつ',
        meanings: 'smooth',
      },
      {
        kanji: '楕円',
        reading: 'だえん',
        meanings: 'ellipse',
      },
      {
        kanji: '同心円',
        reading: 'どうしんえん',
        meanings: 'concentric circles',
      },
    ],
  },
  {
    kanjiName: '天',
    strokes: 4,
    grade: 1,
    freq: 512,
    meanings: ['Heavens', 'Sky', 'Imperial'],
    on: ['てん'],
    kun: ['あまつ', 'あめ', 'あま-'],
    jlpt: 5,
    quizAnswers: ['Confront', 'Wholesale', 'Heavens', 'Target'],
    similars: [
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
      {
        kanji: '井',
        meaning: 'well',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
    ],
    usedIn: [
      {
        kanji: '天津',
        reading: 'あまつ',
        meanings: 'heavenly',
      },
      {
        kanji: '天津乙女',
        reading: 'あまつおとめ',
        meanings: 'celestial maiden',
      },
      {
        kanji: '天',
        reading: 'あめ',
        meanings: 'sky',
      },
      {
        kanji: '天地',
        reading: 'てんち',
        meanings: 'heaven and earth',
      },
      {
        kanji: '天',
        reading: 'てん',
        meanings: 'sky',
      },
      {
        kanji: '天下',
        reading: 'てんか',
        meanings: 'the whole world',
      },
      {
        kanji: '炎天',
        reading: 'えんてん',
        meanings: 'blazing heat',
      },
      {
        kanji: '楽天',
        reading: 'らくてん',
        meanings: 'optimism',
      },
    ],
  },
  {
    kanjiName: '日',
    strokes: 4,
    grade: 1,
    freq: 1,
    meanings: ['Day', 'Sun', 'Japan', 'Counter For Days'],
    on: ['にち', 'じつ'],
    kun: ['ひ', '-び', '-か'],
    jlpt: 5,
    quizAnswers: ['Speak To A Ruler', 'I (male)', 'Trunk', 'Day'],
    similars: [
      {
        kanji: '甲',
        meaning: 'armor',
      },
      {
        kanji: '申',
        meaning: 'have the honor to',
      },
      {
        kanji: '旧',
        meaning: 'old times',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '田',
        meaning: 'rice field',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '白',
        meaning: 'white',
      },
      {
        kanji: '旨',
        meaning: 'delicious',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '旬',
        meaning: 'decameron',
      },
    ],
    usedIn: [
      {
        kanji: '日',
        reading: 'ひ',
        meanings: 'day',
      },
      {
        kanji: '日陰',
        reading: 'ひかげ',
        meanings: 'shade',
      },
      {
        kanji: '在りし日',
        reading: 'ありしひ',
        meanings: 'past days',
      },
      {
        kanji: 'あくる日',
        reading: 'あくるひ',
        meanings: 'next day',
      },
      {
        kanji: '日',
        reading: 'にち',
        meanings: 'Sunday',
      },
      {
        kanji: '日時',
        reading: 'にちじ',
        meanings: 'date and time (of a meeting',
      },
      {
        kanji: '抗日',
        reading: 'こうにち',
        meanings: 'resistance against Japanese aggression',
      },
      {
        kanji: '在日',
        reading: 'ざいにち',
        meanings: 'resident in Japan (of a foreigner)',
      },
      {
        kanji: '日月',
        reading: 'じつげつ',
        meanings: 'sun and moon',
      },
      {
        kanji: '日外',
        reading: 'じつがい',
        meanings: 'at one time',
      },
      {
        kanji: '両日',
        reading: 'りょうじつ',
        meanings: 'both days',
      },
      {
        kanji: '三十日',
        reading: 'みそか',
        meanings: 'last day of the month',
      },
    ],
  },
  {
    kanjiName: '月',
    strokes: 4,
    grade: 1,
    freq: 23,
    meanings: ['Month', 'Moon'],
    on: ['げつ', 'がつ'],
    kun: ['つき'],
    jlpt: 5,
    quizAnswers: ['Punish', 'Virtue', 'Month', 'In The First Place'],
    similars: [
      {
        kanji: '用',
        meaning: 'utilize',
      },
      {
        kanji: '肌',
        meaning: 'texture',
      },
      {
        kanji: '有',
        meaning: 'possess',
      },
      {
        kanji: '白',
        meaning: 'white',
      },
      {
        kanji: '肝',
        meaning: 'liver',
      },
      {
        kanji: '肖',
        meaning: 'resemblance',
      },
      {
        kanji: '身',
        meaning: 'somebody',
      },
      {
        kanji: '角',
        meaning: 'angle',
      },
      {
        kanji: '旨',
        meaning: 'delicious',
      },
      {
        kanji: '肪',
        meaning: 'obese',
      },
    ],
    usedIn: [
      {
        kanji: '月',
        reading: 'つき',
        meanings: 'Moon',
      },
      {
        kanji: '月末',
        reading: 'げつまつ',
        meanings: 'end of the month',
      },
      {
        kanji: '卯月',
        reading: 'うづき',
        meanings: 'fourth month of the lunar calendar',
      },
      {
        kanji: '祥月',
        reading: 'しょうつき',
        meanings: "month of a person's death",
      },
      {
        kanji: '月',
        reading: 'げつ',
        meanings: 'Monday',
      },
      {
        kanji: '月額',
        reading: 'げつがく',
        meanings: 'monthly amount (sum)',
      },
      {
        kanji: '隔月',
        reading: 'かくげつ',
        meanings: 'every second month',
      },
      {
        kanji: '望月',
        reading: 'もちづき',
        meanings: 'full moon',
      },
      {
        kanji: '月輪',
        reading: 'げつりん',
        meanings: '(full) moon',
      },
      {
        kanji: '旧正月',
        reading: 'きゅうしょうがつ',
        meanings: 'lunar New Year (esp. the Chinese New Year)',
      },
      {
        kanji: 'お正月',
        reading: 'おしょうがつ',
        meanings: 'New Year (esp. first three days)',
      },
    ],
  },
  {
    kanjiName: '木',
    strokes: 4,
    grade: 1,
    freq: 317,
    meanings: ['Tree', 'Wood'],
    on: ['ぼく', 'もく'],
    kun: ['き', 'こ-'],
    jlpt: 5,
    quizAnswers: ['Steer', 'Pouch', 'Tree', 'Chestnut'],
    similars: [
      {
        kanji: '本',
        meaning: 'book',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '吏',
        meaning: 'officer',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '米',
        meaning: 'rice',
      },
    ],
    usedIn: [
      {
        kanji: '木',
        reading: 'き',
        meanings: 'tree',
      },
      {
        kanji: '木々',
        reading: 'きぎ',
        meanings: '(many) trees',
      },
      {
        kanji: '本木',
        reading: 'もとき',
        meanings: 'original stock',
      },
      {
        kanji: '青木',
        reading: 'あおき',
        meanings: 'Japanese laurel (Aucuba japonica)',
      },
      {
        kanji: '木刀',
        reading: 'ぼくとう',
        meanings: 'wooden sword',
      },
      {
        kanji: '木偶',
        reading: 'でく',
        meanings: 'wooden doll',
      },
      {
        kanji: '土木',
        reading: 'どぼく',
        meanings: 'engineering works',
      },
      {
        kanji: '名木',
        reading: 'めいぼく',
        meanings: 'old tree of historical interest',
      },
      {
        kanji: '木',
        reading: 'もく',
        meanings: 'Thursday',
      },
      {
        kanji: '木材',
        reading: 'もくざい',
        meanings: 'lumber',
      },
      {
        kanji: '水木',
        reading: 'すいもく',
        meanings: 'Wednesday and Thursday',
      },
      {
        kanji: '火水木',
        reading: 'かすいもく',
        meanings: 'Tuesday',
      },
    ],
  },
  {
    kanjiName: '水',
    strokes: 4,
    grade: 1,
    freq: 223,
    meanings: ['Water'],
    on: ['すい'],
    kun: ['みず', 'みず-'],
    jlpt: 5,
    quizAnswers: ['Water', 'Beginning', 'Period', 'Involve'],
    similars: [
      {
        kanji: '永',
        meaning: 'eternity',
      },
      {
        kanji: '氷',
        meaning: 'icicle',
      },
      {
        kanji: '尿',
        meaning: 'urine',
      },
      {
        kanji: '入',
        meaning: 'enter',
      },
      {
        kanji: '扱',
        meaning: 'handle',
      },
      {
        kanji: '小',
        meaning: 'little',
      },
      {
        kanji: '尺',
        meaning: 'shaku',
      },
      {
        kanji: '匁',
        meaning: 'monme',
      },
      {
        kanji: '父',
        meaning: 'father',
      },
      {
        kanji: '八',
        meaning: 'eight',
      },
    ],
    usedIn: [
      {
        kanji: '水',
        reading: 'みず',
        meanings: 'water (esp. cool',
      },
      {
        kanji: '水揚げ',
        reading: 'みずあげ',
        meanings: 'landing',
      },
      {
        kanji: '飲み水',
        reading: 'のみみず',
        meanings: 'drinking water',
      },
      {
        kanji: '呼び水',
        reading: 'よびみず',
        meanings: 'pump-priming',
      },
      {
        kanji: '水',
        reading: 'すい',
        meanings: 'Wednesday',
      },
      {
        kanji: '水位',
        reading: 'すいい',
        meanings: 'water level',
      },
      {
        kanji: '用水',
        reading: 'ようすい',
        meanings: 'irrigation water',
      },
      {
        kanji: '浄水',
        reading: 'じょうすい',
        meanings: 'clean water',
      },
    ],
  },
  {
    kanjiName: '火',
    strokes: 4,
    grade: 1,
    freq: 574,
    meanings: ['Fire'],
    on: ['か'],
    kun: ['ひ', '-び', 'ほ-'],
    jlpt: 5,
    quizAnswers: ['Parch', 'Fire', 'Distant', 'Placement'],
    similars: [
      {
        kanji: '次',
        meaning: 'next',
      },
      {
        kanji: '灰',
        meaning: 'ashes',
      },
      {
        kanji: '米',
        meaning: 'rice',
      },
      {
        kanji: '永',
        meaning: 'eternity',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
      {
        kanji: '氷',
        meaning: 'icicle',
      },
      {
        kanji: '災',
        meaning: 'disaster',
      },
      {
        kanji: '来',
        meaning: 'come',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '尺',
        meaning: 'shaku',
      },
    ],
    usedIn: [
      {
        kanji: '火',
        reading: 'ひ',
        meanings: 'fire',
      },
      {
        kanji: '火口',
        reading: 'ひぐち',
        meanings: 'burner',
      },
      {
        kanji: '飛び火',
        reading: 'とびひ',
        meanings: 'leaping flames',
      },
      {
        kanji: '不知火',
        reading: 'しらぬい',
        meanings: 'phosphorescent light',
      },
      {
        kanji: '火',
        reading: 'か',
        meanings: 'Tuesday',
      },
      {
        kanji: '火炎瓶',
        reading: 'かえんびん',
        meanings: 'Molotov cocktail',
      },
      {
        kanji: '発火',
        reading: 'はっか',
        meanings: 'ignition',
      },
      {
        kanji: '点火',
        reading: 'てんか',
        meanings: 'ignition',
      },
    ],
  },
  {
    kanjiName: '出',
    strokes: 5,
    grade: 1,
    freq: 13,
    meanings: ['Exit', 'Leave', 'Go Out', 'Come Out', 'Put Out', 'Protrude'],
    on: ['しゅつ', 'すい'],
    kun: ['で.る', '-で', 'だ.す', '-だ.す', 'い.でる', 'い.だす'],
    jlpt: 5,
    quizAnswers: ['Lull', 'Truss', 'Duty', 'Exit'],
    similars: [
      {
        kanji: '屈',
        meaning: 'yield',
      },
      {
        kanji: '拙',
        meaning: 'bungling',
      },
      {
        kanji: '市',
        meaning: 'market',
      },
      {
        kanji: '山',
        meaning: 'mountain',
      },
      {
        kanji: '岩',
        meaning: 'boulder',
      },
      {
        kanji: '岸',
        meaning: 'beach',
      },
      {
        kanji: '岬',
        meaning: 'headland',
      },
      {
        kanji: '掘',
        meaning: 'dig',
      },
      {
        kanji: '堀',
        meaning: 'ditch',
      },
      {
        kanji: '峠',
        meaning: 'mountain peak',
      },
    ],
    usedIn: [
      {
        kanji: '出る',
        reading: 'でる',
        meanings: 'to leave',
      },
      {
        kanji: '出る杭は打たれる',
        reading: 'でるくいはうたれる',
        meanings: 'the nail that sticks out gets hammered down',
      },
      {
        kanji: '出す',
        reading: 'だす',
        meanings: 'to take out',
      },
      {
        kanji: '出すことは舌を出すも嫌い',
        reading: 'だすことはしたをだすもきらい',
        meanings: 'being exceptionally stingy',
      },
      {
        kanji: '出でる',
        reading: 'いでる',
        meanings: 'to go',
      },
      {
        kanji: '出',
        reading: 'しゅつ',
        meanings: 'coming out',
      },
      {
        kanji: '出演',
        reading: 'しゅつえん',
        meanings: 'appearance (in a film',
      },
      {
        kanji: '輩出',
        reading: 'はいしゅつ',
        meanings: 'producing (people) in great numbers',
      },
      {
        kanji: '歳出',
        reading: 'さいしゅつ',
        meanings: 'annual expenditure',
      },
      {
        kanji: '出納',
        reading: 'すいとう',
        meanings: 'receipts and expenditure (disbursements)',
      },
      {
        kanji: '出納簿',
        reading: 'すいとうぼ',
        meanings: 'cashbook',
      },
    ],
  },
  {
    kanjiName: '右',
    strokes: 5,
    grade: 1,
    freq: 602,
    meanings: ['Right'],
    on: ['う', 'ゆう'],
    kun: ['みぎ'],
    jlpt: 5,
    quizAnswers: ['As Well As', 'Efficiency', 'Right', 'Filter'],
    similars: [
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '司',
        meaning: 'director',
      },
      {
        kanji: '句',
        meaning: 'phrase',
      },
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '乱',
        meaning: 'riot',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '含',
        meaning: 'contain',
      },
      {
        kanji: '何',
        meaning: 'what',
      },
    ],
    usedIn: [
      {
        kanji: '右',
        reading: 'みぎ',
        meanings: 'right',
      },
      {
        kanji: '右腕',
        reading: 'みぎうで',
        meanings: 'right arm',
      },
      {
        kanji: '上右',
        reading: 'うえみぎ',
        meanings: 'upper right (corner)',
      },
      {
        kanji: '下右',
        reading: 'したみぎ',
        meanings: 'lower right (corner)',
      },
      {
        kanji: '右中間',
        reading: 'うちゅうかん',
        meanings: 'between right and center fielders (centre)',
      },
      {
        kanji: '右側',
        reading: 'みぎがわ',
        meanings: 'right side',
      },
      {
        kanji: '極右',
        reading: 'きょくう',
        meanings: 'far right (in politics)',
      },
      {
        kanji: '最右',
        reading: 'さいう',
        meanings: 'right-most',
      },
      {
        kanji: '右筆',
        reading: 'ゆうひつ',
        meanings: 'private secretary',
      },
      {
        kanji: '右文',
        reading: 'ゆうぶん',
        meanings: 'respect for literary culture',
      },
      {
        kanji: '上下左右',
        reading: 'じょうげさゆう',
        meanings: 'up and down',
      },
    ],
  },
  {
    kanjiName: '四',
    strokes: 5,
    grade: 1,
    freq: 47,
    meanings: ['Four'],
    on: ['し'],
    kun: ['よ', 'よ.つ', 'よっ.つ', 'よん'],
    jlpt: 5,
    quizAnswers: ['Sharpen', 'Blessing', 'Four', 'Luxuriant'],
    similars: [
      {
        kanji: '西',
        meaning: 'west',
      },
      {
        kanji: '囚',
        meaning: 'captured',
      },
      {
        kanji: '因',
        meaning: 'cause',
      },
      {
        kanji: '田',
        meaning: 'rice field',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
      {
        kanji: '囲',
        meaning: 'surround',
      },
      {
        kanji: '困',
        meaning: 'quandary',
      },
      {
        kanji: '図',
        meaning: 'map',
      },
    ],
    usedIn: [
      {
        kanji: '四',
        reading: 'し',
        meanings: 'four',
      },
      {
        kanji: '四畳半',
        reading: 'よじょうはん',
        meanings: 'four and a half tatami mats',
      },
      {
        kanji: '四つ',
        reading: 'よっつ',
        meanings: 'four',
      },
      {
        kanji: '四つ角',
        reading: 'よつかど',
        meanings: 'four corners',
      },
      {
        kanji: '四つ',
        reading: 'よっつ',
        meanings: 'four',
      },
      {
        kanji: '四つの自由',
        reading: 'よっつのじゆう',
        meanings:
          'the Four Freedoms (as defined by Franklin D. Roosevelt: freedom of speech',
      },
      {
        kanji: '四',
        reading: 'し',
        meanings: 'four',
      },
      {
        kanji: '４０',
        reading: 'よんじゅう',
        meanings: 'forty',
      },
      {
        kanji: '十四',
        reading: 'じゅうし',
        meanings: 'fourteen',
      },
      {
        kanji: '軽四',
        reading: 'けいよん',
        meanings: 'four-wheeled light vehicle',
      },
      {
        kanji: '四',
        reading: 'し',
        meanings: 'four',
      },
      {
        kanji: '４月',
        reading: 'しがつ',
        meanings: 'April',
      },
      {
        kanji: '十四',
        reading: 'じゅうし',
        meanings: 'fourteen',
      },
      {
        kanji: '炭素１４',
        reading: 'たんそじゅうし',
        meanings: 'carbon-14',
      },
    ],
  },
  {
    kanjiName: '左',
    strokes: 5,
    grade: 1,
    freq: 630,
    meanings: ['Left'],
    on: ['さ', 'しゃ'],
    kun: ['ひだり'],
    jlpt: 5,
    quizAnswers: ['In Addition', 'Slowly', 'Left', 'Involuntarily'],
    similars: [
      {
        kanji: '圧',
        meaning: 'pressure',
      },
      {
        kanji: '在',
        meaning: 'exist',
      },
      {
        kanji: '佐',
        meaning: 'assistant',
      },
      {
        kanji: '至',
        meaning: 'climax',
      },
      {
        kanji: '任',
        meaning: 'responsibility',
      },
      {
        kanji: '正',
        meaning: 'correct',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
    ],
    usedIn: [
      {
        kanji: '左',
        reading: 'ひだり',
        meanings: 'left',
      },
      {
        kanji: '左腕',
        reading: 'さわん',
        meanings: 'left arm',
      },
      {
        kanji: '向かって左',
        reading: 'むかってひだり',
        meanings: 'on the left as one faces (it)',
      },
      {
        kanji: '同左',
        reading: 'どうひだり',
        meanings: 'same as on the left',
      },
      {
        kanji: '左',
        reading: 'さ',
        meanings: 'left (esp. in vertical Japanese writing)',
      },
      {
        kanji: '左右',
        reading: 'さゆう',
        meanings: 'left and right',
      },
      {
        kanji: '極左',
        reading: 'きょくさ',
        meanings: 'extreme left',
      },
      {
        kanji: '最左',
        reading: 'さいさ',
        meanings: 'left-most',
      },
      {
        kanji: '左官',
        reading: 'さかん',
        meanings: 'plasterer',
      },
    ],
  },
  {
    kanjiName: '本',
    strokes: 5,
    grade: 1,
    freq: 10,
    meanings: [
      'Book',
      'Present',
      'Main',
      'Origin',
      'True',
      'Real',
      'Counter For Long Cylindrical Things',
    ],
    on: ['ほん'],
    kun: ['もと'],
    jlpt: 5,
    quizAnswers: ['Front Door', 'Bay', 'Book', '10**44'],
    similars: [
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '体',
        meaning: 'body',
      },
      {
        kanji: '朽',
        meaning: 'decay',
      },
      {
        kanji: '委',
        meaning: 'committee',
      },
      {
        kanji: '季',
        meaning: 'seasons',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
    ],
    usedIn: [
      {
        kanji: '元',
        reading: 'もと',
        meanings: 'origin',
      },
      {
        kanji: '本木',
        reading: 'もとき',
        meanings: 'original stock',
      },
      {
        kanji: '大本',
        reading: 'おおもと',
        meanings: 'root',
      },
      {
        kanji: '旗本',
        reading: 'はたもと',
        meanings: 'shogunal vassal',
      },
      {
        kanji: '本',
        reading: 'ほん',
        meanings: 'book',
      },
      {
        kanji: '本位',
        reading: 'ほんい',
        meanings: 'standard',
      },
      {
        kanji: '社会資本',
        reading: 'しゃかいしほん',
        meanings: 'social capital',
      },
      {
        kanji: '配本',
        reading: 'はいほん',
        meanings: 'distribution of books',
      },
    ],
  },
  {
    kanjiName: '白',
    strokes: 5,
    grade: 1,
    freq: 483,
    meanings: ['White'],
    on: ['はく', 'びゃく'],
    kun: ['しろ', 'しら-', 'しろ.い'],
    jlpt: 5,
    quizAnswers: ['Embarrass', 'Model', 'Honor', 'White'],
    similars: [
      {
        kanji: '旬',
        meaning: 'decameron',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '旨',
        meaning: 'delicious',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '旧',
        meaning: 'old times',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
      {
        kanji: '伸',
        meaning: 'expand',
      },
      {
        kanji: '伯',
        meaning: 'chief',
      },
      {
        kanji: '但',
        meaning: 'however',
      },
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
    ],
    usedIn: [
      {
        kanji: '白',
        reading: 'しろ',
        meanings: 'white',
      },
      {
        kanji: '白い',
        reading: 'しろい',
        meanings: 'white',
      },
      {
        kanji: '面白',
        reading: 'おもしろ',
        meanings: 'amusing',
      },
      {
        kanji: '蘿蔔',
        reading: 'すずしろ',
        meanings: 'daikon (variety of large white Oriental radish',
      },
      {
        kanji: '白い',
        reading: 'しろい',
        meanings: 'white',
      },
      {
        kanji: '白色',
        reading: 'しろいろ',
        meanings: 'white',
      },
      {
        kanji: '白',
        reading: 'はく',
        meanings: 'white',
      },
      {
        kanji: '白衣',
        reading: 'はくい',
        meanings: 'white clothes',
      },
      {
        kanji: '美白',
        reading: 'びはく',
        meanings: 'beautifully white (esp. of skin)',
      },
      {
        kanji: '漂白',
        reading: 'ひょうはく',
        meanings: 'blanching',
      },
      {
        kanji: '白衣',
        reading: 'はくい',
        meanings: 'white clothes',
      },
      {
        kanji: '白夜',
        reading: 'びゃくや',
        meanings: 'night under the midnight sun',
      },
      {
        kanji: '敬白',
        reading: 'けいはく',
        meanings: 'yours sincerely',
      },
      {
        kanji: '恐惶敬白',
        reading: 'きょうこうけいはく',
        meanings: 'very truly yours',
      },
    ],
  },
  {
    kanjiName: '万',
    strokes: 3,
    grade: 2,
    freq: 375,
    meanings: ['Ten Thousand', '10,000'],
    on: ['まん', 'ばん'],
    kun: ['よろず'],
    jlpt: 5,
    quizAnswers: ['Graceful', 'Tie', 'Company', 'Ten Thousand'],
    similars: [
      {
        kanji: '切',
        meaning: 'cut',
      },
      {
        kanji: '力',
        meaning: 'power',
      },
      {
        kanji: '刀',
        meaning: 'sword',
      },
      {
        kanji: '才',
        meaning: 'genius',
      },
      {
        kanji: '功',
        meaning: 'achievement',
      },
      {
        kanji: '分',
        meaning: 'part',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '厄',
        meaning: 'unlucky',
      },
    ],
    usedIn: [
      {
        kanji: '万',
        reading: 'まん',
        meanings: '10,000',
      },
      {
        kanji: '万年',
        reading: 'まんねん',
        meanings: 'ten thousand years',
      },
      {
        kanji: '八百万',
        reading: 'やおよろず',
        meanings: 'myriad',
      },
      {
        kanji: '５００万',
        reading: 'ごひゃくまん',
        meanings: '5,000,000',
      },
      {
        kanji: '万',
        reading: 'まん',
        meanings: '10,000',
      },
      {
        kanji: '万一',
        reading: 'まんいち',
        meanings: '(unlikely event of) emergency',
      },
      {
        kanji: '億万',
        reading: 'おくまん',
        meanings: 'millions and millions',
      },
      {
        kanji: '永万',
        reading: 'えいまん',
        meanings: 'Eiman era (1165.6.5-1166.8.27)',
      },
      {
        kanji: '万',
        reading: 'ばん',
        meanings: 'completely',
      },
      {
        kanji: '万一',
        reading: 'まんいち',
        meanings: '(unlikely event of) emergency',
      },
      {
        kanji: '千万',
        reading: 'せんばん',
        meanings: 'exceedingly',
      },
      {
        kanji: '奇怪千万',
        reading: 'きかいせんばん',
        meanings: 'very strange (mysterious',
      },
    ],
  },
  {
    kanjiName: '今',
    strokes: 4,
    grade: 2,
    freq: 49,
    meanings: ['Now'],
    on: ['こん', 'きん'],
    kun: ['いま'],
    jlpt: 5,
    quizAnswers: ['Strangeness', 'Eulogy', 'Doll', 'Now'],
    similars: [
      {
        kanji: '含',
        meaning: 'contain',
      },
      {
        kanji: '吟',
        meaning: 'versify',
      },
      {
        kanji: '八',
        meaning: 'eight',
      },
      {
        kanji: '手',
        meaning: 'hand',
      },
      {
        kanji: '千',
        meaning: 'thousand',
      },
      {
        kanji: '介',
        meaning: 'jammed in',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '毛',
        meaning: 'fur',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
    ],
    usedIn: [
      {
        kanji: '今',
        reading: 'いま',
        meanings: 'now',
      },
      {
        kanji: '今に',
        reading: 'いまに',
        meanings: 'before long',
      },
      {
        kanji: '中今',
        reading: 'なかいま',
        meanings: 'the present (esp. as a privileged moment in eternity)',
      },
      {
        kanji: '今が今',
        reading: 'いまがいま',
        meanings: 'just now',
      },
      {
        kanji: '今',
        reading: 'こん',
        meanings: 'the current ...',
      },
      {
        kanji: '今夏',
        reading: 'こんか',
        meanings: 'this summer',
      },
      {
        kanji: '往古来今',
        reading: 'おうこらいこん',
        meanings: 'in all ages',
      },
      {
        kanji: '当今',
        reading: 'とうこん',
        meanings: 'nowadays',
      },
      {
        kanji: '今古',
        reading: 'きんこ',
        meanings: 'now and anciently',
      },
      {
        kanji: '今上',
        reading: 'きんじょう',
        meanings: 'His Majesty the Emperor',
      },
    ],
  },
  {
    kanjiName: '午',
    strokes: 4,
    grade: 2,
    freq: 154,
    meanings: [
      'Noon',
      'Sign Of The Horse',
      '11am-1pm',
      'Seventh Sign Of Chinese Zodiac',
    ],
    on: ['ご'],
    kun: ['うま'],
    jlpt: 5,
    quizAnswers: ['Noon', 'Drink', 'Bacteria', 'Compete With'],
    similars: [
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '半',
        meaning: 'half',
      },
      {
        kanji: '斤',
        meaning: 'axe',
      },
      {
        kanji: '干',
        meaning: 'dry',
      },
      {
        kanji: '升',
        meaning: 'measuring box',
      },
      {
        kanji: '毛',
        meaning: 'fur',
      },
      {
        kanji: '千',
        meaning: 'thousand',
      },
      {
        kanji: '手',
        meaning: 'hand',
      },
      {
        kanji: '羊',
        meaning: 'sheep',
      },
      {
        kanji: '件',
        meaning: 'affair',
      },
    ],
    usedIn: [
      {
        kanji: '午',
        reading: 'うま',
        meanings: 'the Horse (seventh sign of the Chinese zodiac)',
      },
      {
        kanji: '午年',
        reading: 'うまどし',
        meanings: 'year of the Horse',
      },
      {
        kanji: '庚午',
        reading: 'かのえうま',
        meanings: 'Metal Horse (7th term of the sexagenary cycle',
      },
      {
        kanji: '甲午',
        reading: 'きのえうま',
        meanings: 'Wood Horse (31st term of the sexagenary cycle',
      },
      {
        kanji: '午前',
        reading: 'ごぜん',
        meanings: 'morning',
      },
      {
        kanji: '午後',
        reading: 'ごご',
        meanings: 'afternoon',
      },
      {
        kanji: '端午',
        reading: 'たんご',
        meanings: "Boys' Day celebration (May 5)",
      },
      {
        kanji: '亭午',
        reading: 'ていご',
        meanings: 'noon',
      },
    ],
  },
  {
    kanjiName: '友',
    strokes: 4,
    grade: 2,
    freq: 622,
    meanings: ['Friend'],
    on: ['ゆう'],
    kun: ['とも'],
    jlpt: 5,
    quizAnswers: ['Friend', 'Crazy', 'Rock', 'Boil'],
    similars: [
      {
        kanji: '反',
        meaning: 'anti-',
      },
      {
        kanji: '支',
        meaning: 'branch',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '久',
        meaning: 'long time',
      },
      {
        kanji: '仮',
        meaning: 'sham',
      },
      {
        kanji: '奴',
        meaning: 'guy',
      },
      {
        kanji: '坂',
        meaning: 'slope',
      },
      {
        kanji: '麦',
        meaning: 'barley',
      },
      {
        kanji: '返',
        meaning: 'return',
      },
    ],
    usedIn: [
      {
        kanji: '友',
        reading: 'とも',
        meanings: 'friend',
      },
      {
        kanji: '友達',
        reading: 'ともだち',
        meanings: 'friend',
      },
      {
        kanji: 'リア友',
        reading: 'りあとも',
        meanings: 'real-life friend (as opposed to online friend)',
      },
      {
        kanji: '酒のお供',
        reading: 'さけのおとも',
        meanings: 'appetizer or snack served with drinks',
      },
      {
        kanji: '友',
        reading: 'ゆう',
        meanings: 'friend',
      },
      {
        kanji: '友愛',
        reading: 'ゆうあい',
        meanings: 'fraternity',
      },
      {
        kanji: '戦友',
        reading: 'せんゆう',
        meanings: 'comrade in arms',
      },
      {
        kanji: '盟友',
        reading: 'めいゆう',
        meanings: 'sworn friend',
      },
    ],
  },
  {
    kanjiName: '父',
    strokes: 4,
    grade: 2,
    freq: 646,
    meanings: ['Father'],
    on: ['ふ'],
    kun: ['ちち'],
    jlpt: 5,
    quizAnswers: ['Seal', 'Board', 'Father', 'Snapshot'],
    similars: [
      {
        kanji: '匁',
        meaning: 'monme',
      },
      {
        kanji: '欠',
        meaning: 'lack',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '灰',
        meaning: 'ashes',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '氷',
        meaning: 'icicle',
      },
      {
        kanji: '谷',
        meaning: 'valley',
      },
      {
        kanji: '米',
        meaning: 'rice',
      },
    ],
    usedIn: [
      {
        kanji: '父',
        reading: 'ちち',
        meanings: 'father',
      },
      {
        kanji: '父親',
        reading: 'ちちおや',
        meanings: 'father',
      },
      {
        kanji: '亡き父',
        reading: 'なきちち',
        meanings: "(one's) late father",
      },
      {
        kanji: '建国の父',
        reading: 'けんこくのちち',
        meanings: 'founding father (of a country)',
      },
      {
        kanji: '父母',
        reading: 'ふぼ',
        meanings: 'father and mother',
      },
      {
        kanji: '父子',
        reading: 'ふし',
        meanings: 'father and child',
      },
      {
        kanji: '義父',
        reading: 'ぎふ',
        meanings: 'father-in-law',
      },
      {
        kanji: '養父',
        reading: 'ようふ',
        meanings: 'foster father',
      },
    ],
  },
  {
    kanjiName: '北',
    strokes: 5,
    grade: 2,
    freq: 153,
    meanings: ['North'],
    on: ['ほく'],
    kun: ['きた'],
    jlpt: 5,
    quizAnswers: ['Milk', 'Bury', 'Burst Open', 'North'],
    similars: [
      {
        kanji: '背',
        meaning: 'stature',
      },
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '沈',
        meaning: 'sink',
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)',
      },
      {
        kanji: '批',
        meaning: 'criticism',
      },
      {
        kanji: '花',
        meaning: 'flower',
      },
      {
        kanji: '似',
        meaning: 'becoming',
      },
      {
        kanji: '売',
        meaning: 'sell',
      },
      {
        kanji: '克',
        meaning: 'overcome',
      },
    ],
    usedIn: [
      {
        kanji: '北',
        reading: 'きた',
        meanings: 'north',
      },
      {
        kanji: '北アイルランド',
        reading: 'きたあいるらんど',
        meanings: 'Northern Ireland',
      },
      {
        kanji: '西北',
        reading: 'せいほく',
        meanings: 'north-west',
      },
      {
        kanji: '北欧',
        reading: 'ほくおう',
        meanings: 'Northern Europe',
      },
      {
        kanji: '北緯',
        reading: 'ほくい',
        meanings: 'north latitude',
      },
      {
        kanji: '極北',
        reading: 'きょくほく',
        meanings: 'extreme north',
      },
      {
        kanji: '西北',
        reading: 'せいほく',
        meanings: 'north-west',
      },
    ],
  },
  {
    kanjiName: '半',
    strokes: 5,
    grade: 2,
    freq: 224,
    meanings: ['Half', 'Middle', 'Odd Number', 'Semi-', 'Part-'],
    on: ['はん'],
    kun: ['なか.ば'],
    jlpt: 5,
    quizAnswers: ['Rebuke', 'Half', 'Beginning', 'Peak'],
    similars: [
      {
        kanji: '羊',
        meaning: 'sheep',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '判',
        meaning: 'judgement',
      },
      {
        kanji: '伴',
        meaning: 'consort',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '件',
        meaning: 'affair',
      },
      {
        kanji: '汗',
        meaning: 'sweat',
      },
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '併',
        meaning: 'join',
      },
    ],
    usedIn: [
      {
        kanji: '半ば',
        reading: 'なかば',
        meanings: 'middle',
      },
      {
        kanji: '半ば過ぎ',
        reading: 'なかばすぎ',
        meanings: 'beyond the middle',
      },
      {
        kanji: '半',
        reading: 'はん',
        meanings: 'half',
      },
      {
        kanji: '半額',
        reading: 'はんがく',
        meanings: 'half the amount (of money)',
      },
      {
        kanji: '四畳半',
        reading: 'よじょうはん',
        meanings: 'four and a half tatami mats',
      },
      {
        kanji: '過半',
        reading: 'かはん',
        meanings: 'the greater part',
      },
    ],
  },
  {
    kanjiName: '外',
    strokes: 5,
    grade: 2,
    freq: 81,
    meanings: ['Outside'],
    on: ['がい', 'げ'],
    kun: ['そと', 'ほか', 'はず.す', 'はず.れる', 'と-'],
    jlpt: 5,
    quizAnswers: ['Pound', 'Trial', 'Outside', 'Tendon'],
    similars: [
      {
        kanji: '多',
        meaning: 'many',
      },
      {
        kanji: '列',
        meaning: 'file',
      },
      {
        kanji: '名',
        meaning: 'name',
      },
      {
        kanji: '斥',
        meaning: 'reject',
      },
      {
        kanji: '夕',
        meaning: 'evening',
      },
      {
        kanji: '系',
        meaning: 'lineage',
      },
      {
        kanji: '例',
        meaning: 'example',
      },
      {
        kanji: '各',
        meaning: 'each',
      },
      {
        kanji: '烈',
        meaning: 'ardent',
      },
      {
        kanji: '死',
        meaning: 'death',
      },
    ],
    usedIn: [
      {
        kanji: '外',
        reading: 'そと',
        meanings: 'outside',
      },
      {
        kanji: '外壁',
        reading: 'がいへき',
        meanings: 'outer wall',
      },
      {
        kanji: '大外',
        reading: 'おおそと',
        meanings: 'far out wide',
      },
      {
        kanji: '家の外',
        reading: 'いえのそと',
        meanings: 'outside the house',
      },
      {
        kanji: '他',
        reading: 'ほか',
        meanings: 'another place',
      },
      {
        kanji: '他に',
        reading: 'ほかに',
        meanings: 'else',
      },
      {
        kanji: 'この外',
        reading: 'このほか',
        meanings: 'besides',
      },
      {
        kanji: '思いのほか',
        reading: 'おもいのほか',
        meanings: 'unexpectedly',
      },
      {
        kanji: '外す',
        reading: 'はずす',
        meanings: 'to remove',
      },
      {
        kanji: '外れる',
        reading: 'はずれる',
        meanings: 'to be disconnected',
      },
      {
        kanji: '外',
        reading: 'がい',
        meanings: 'outside ...',
      },
      {
        kanji: '外圧',
        reading: 'がいあつ',
        meanings: 'external pressure',
      },
      {
        kanji: '渉外',
        reading: 'しょうがい',
        meanings: 'public relations',
      },
      {
        kanji: '在外',
        reading: 'ざいがい',
        meanings: 'overseas',
      },
      {
        kanji: '外科',
        reading: 'げか',
        meanings: 'surgery (branch of medicine)',
      },
      {
        kanji: '外科医',
        reading: 'げかい',
        meanings: 'surgeon',
      },
    ],
  },
  {
    kanjiName: '母',
    strokes: 5,
    grade: 2,
    freq: 570,
    meanings: ['Mother'],
    on: ['ぼ'],
    kun: ['はは', 'も'],
    jlpt: 5,
    quizAnswers: ['Mother', 'Piccolo', 'Parsley', 'Ephemeral Thing'],
    similars: [
      {
        kanji: '丹',
        meaning: 'rust-colored',
      },
      {
        kanji: '斗',
        meaning: 'Big Dipper',
      },
      {
        kanji: '立',
        meaning: 'stand up',
      },
      {
        kanji: '冊',
        meaning: 'tome',
      },
      {
        kanji: '雨',
        meaning: 'rain',
      },
      {
        kanji: '州',
        meaning: 'state',
      },
      {
        kanji: '肉',
        meaning: 'meat',
      },
      {
        kanji: '再',
        meaning: 'again',
      },
      {
        kanji: '南',
        meaning: 'south',
      },
      {
        kanji: '糾',
        meaning: 'twist',
      },
    ],
    usedIn: [
      {
        kanji: '母',
        reading: 'はは',
        meanings: 'mother',
      },
      {
        kanji: '母親',
        reading: 'ははおや',
        meanings: 'mother',
      },
      {
        kanji: '必要は発明の母',
        reading: 'ひつようははつめいのはは',
        meanings: 'necessity is the mother of invention',
      },
      {
        kanji: '失敗は成功の母',
        reading: 'しっぱいはせいこうのはは',
        meanings: 'failure is the mother of success',
      },
      {
        kanji: '母屋',
        reading: 'もや',
        meanings: 'purlin (structural beam in a roof)',
      },
      {
        kanji: '母屋桁',
        reading: 'もやげた',
        meanings: 'purlin (structural beam in a roof)',
      },
      {
        kanji: '雲母',
        reading: 'うんも',
        meanings: 'mica',
      },
      {
        kanji: '乳母',
        reading: 'うば',
        meanings: 'wet nurse',
      },
      {
        kanji: '母国',
        reading: 'ぼこく',
        meanings: "one's home country",
      },
      {
        kanji: '母校',
        reading: 'ぼこう',
        meanings: 'alma mater',
      },
      {
        kanji: '養父母',
        reading: 'ようふぼ',
        meanings: 'adoptive parents',
      },
      {
        kanji: '空母',
        reading: 'くうぼ',
        meanings: 'aircraft carrier',
      },
    ],
  },
  {
    kanjiName: '休',
    strokes: 6,
    grade: 1,
    freq: 642,
    meanings: ['Rest', 'Day Off', 'Retire', 'Sleep'],
    on: ['きゅう'],
    kun: ['やす.む', 'やす.まる', 'やす.める'],
    jlpt: 5,
    quizAnswers: ['Give', 'Pills', 'Rest', 'Old Times'],
    similars: [
      {
        kanji: '体',
        meaning: 'body',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '使',
        meaning: 'use',
      },
      {
        kanji: '条',
        meaning: 'article',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '伐',
        meaning: 'fell',
      },
      {
        kanji: '仮',
        meaning: 'sham',
      },
      {
        kanji: '便',
        meaning: 'convenience',
      },
    ],
    usedIn: [
      {
        kanji: '休む',
        reading: 'やすむ',
        meanings: 'to be absent',
      },
      {
        kanji: '休まる',
        reading: 'やすまる',
        meanings: 'to be rested',
      },
      {
        kanji: '休める',
        reading: 'やすめる',
        meanings: 'to rest',
      },
      {
        kanji: '休館',
        reading: 'きゅうかん',
        meanings: 'closure (of a library',
      },
      {
        kanji: '休暇',
        reading: 'きゅうか',
        meanings: 'holiday',
      },
      {
        kanji: '帰休',
        reading: 'ききゅう',
        meanings: 'leave',
      },
      {
        kanji: '定休',
        reading: 'ていきゅう',
        meanings: 'regular holiday',
      },
    ],
  },
  {
    kanjiName: '先',
    strokes: 6,
    grade: 1,
    freq: 173,
    meanings: ['Before', 'Ahead', 'Previous', 'Future', 'Precedence'],
    on: ['せん'],
    kun: ['さき', 'ま.ず'],
    jlpt: 5,
    quizAnswers: ['Before', 'Rouse', 'Wheel', 'Assist'],
    similars: [
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '毛',
        meaning: 'fur',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '洗',
        meaning: 'wash',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
      {
        kanji: '位',
        meaning: 'rank',
      },
      {
        kanji: '乱',
        meaning: 'riot',
      },
    ],
    usedIn: [
      {
        kanji: '先',
        reading: 'さき',
        meanings: 'point',
      },
      {
        kanji: '先行き',
        reading: 'さきゆき',
        meanings: 'the future',
      },
      {
        kanji: '小手先',
        reading: 'こてさき',
        meanings: 'tip of the hand',
      },
      {
        kanji: '矛先',
        reading: 'ほこさき',
        meanings: 'point of a spear',
      },
      {
        kanji: '先ず',
        reading: 'まず',
        meanings: 'first (of all)',
      },
      {
        kanji: 'まず第一に',
        reading: 'まずだいいちに',
        meanings: 'first of all',
      },
      {
        kanji: '先',
        reading: 'せん',
        meanings: 'former',
      },
      {
        kanji: '先駆',
        reading: 'せんく',
        meanings: 'forerunner',
      },
      {
        kanji: '機先',
        reading: 'きせん',
        meanings: 'forestall',
      },
      {
        kanji: '互先',
        reading: 'たがいせん',
        meanings: 'even game (esp. in go)',
      },
    ],
  },
  {
    kanjiName: '名',
    strokes: 6,
    grade: 1,
    freq: 177,
    meanings: ['Name', 'Noted', 'Distinguished', 'Reputation'],
    on: ['めい', 'みょう'],
    kun: ['な', '-な'],
    jlpt: 5,
    quizAnswers: ['Flour', 'Brilliant Fabric Design', 'Name', 'Push'],
    similars: [
      {
        kanji: '各',
        meaning: 'each',
      },
      {
        kanji: '否',
        meaning: 'negate',
      },
      {
        kanji: '外',
        meaning: 'outside',
      },
      {
        kanji: '向',
        meaning: 'yonder',
      },
      {
        kanji: '句',
        meaning: 'phrase',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '台',
        meaning: 'pedestal',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
    ],
    usedIn: [
      {
        kanji: '名',
        reading: 'な',
        meanings: 'name',
      },
      {
        kanji: '名残',
        reading: 'なごり',
        meanings: 'remains',
      },
      {
        kanji: '仮名',
        reading: 'かめい',
        meanings: 'alias',
      },
      {
        kanji: '片仮名',
        reading: 'かたかな',
        meanings: 'katakana',
      },
      {
        kanji: '名',
        reading: 'めい',
        meanings: 'counter for people (usu. seating',
      },
      {
        kanji: '名画',
        reading: 'めいが',
        meanings: 'famous picture',
      },
      {
        kanji: '同名',
        reading: 'どうめい',
        meanings: 'same name',
      },
      {
        kanji: '芸名',
        reading: 'げいめい',
        meanings: 'stage name',
      },
      {
        kanji: '名目',
        reading: 'めいもく',
        meanings: 'name',
      },
      {
        kanji: '苗字',
        reading: 'みょうじ',
        meanings: 'surname',
      },
      {
        kanji: '仮名',
        reading: 'かめい',
        meanings: 'alias',
      },
      {
        kanji: '同名',
        reading: 'どうめい',
        meanings: 'same name',
      },
    ],
  },
  {
    kanjiName: '年',
    strokes: 6,
    grade: 1,
    freq: 6,
    meanings: ['Year', 'Counter For Years'],
    on: ['ねん'],
    kun: ['とし'],
    jlpt: 5,
    quizAnswers: ['Middle', 'Year', 'Beach', 'Disobey'],
    similars: [
      {
        kanji: '缶',
        meaning: 'tin can',
      },
      {
        kanji: '羊',
        meaning: 'sheep',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '乗',
        meaning: 'ride',
      },
      {
        kanji: '全',
        meaning: 'whole',
      },
      {
        kanji: '舎',
        meaning: 'cottage',
      },
      {
        kanji: '垂',
        meaning: 'droop',
      },
    ],
    usedIn: [
      {
        kanji: '年',
        reading: 'とし',
        meanings: 'year',
      },
      {
        kanji: '年明け',
        reading: 'としあけ',
        meanings: 'beginning of the year',
      },
      {
        kanji: 'いい年',
        reading: 'いいとし',
        meanings: 'mature age',
      },
      {
        kanji: '御年',
        reading: 'おんとし',
        meanings: 'age (esp. advanced)',
      },
      {
        kanji: '年',
        reading: 'ねん',
        meanings: 'year',
      },
      {
        kanji: '年会',
        reading: 'ねんかい',
        meanings: 'conference',
      },
      {
        kanji: '往年',
        reading: 'おうねん',
        meanings: 'years gone by',
      },
      {
        kanji: '平年',
        reading: 'へいねん',
        meanings: 'non-leap year',
      },
    ],
  },
  {
    kanjiName: '気',
    strokes: 6,
    grade: 1,
    freq: 113,
    meanings: ['Spirit', 'Mind', 'Air', 'Atmosphere', 'Mood'],
    on: ['き', 'け'],
    kun: ['いき'],
    jlpt: 5,
    quizAnswers: ['Persuade', 'Further', 'Cruelty', 'Spirit'],
    similars: [
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '余',
        meaning: 'too much',
      },
      {
        kanji: '示',
        meaning: 'show',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
    ],
    usedIn: [
      {
        kanji: '気',
        reading: 'き',
        meanings: 'spirit',
      },
      {
        kanji: '気合',
        reading: 'きあい',
        meanings: '(fighting) spirit',
      },
      {
        kanji: '心意気',
        reading: 'こころいき',
        meanings: 'spirit',
      },
      {
        kanji: '水気',
        reading: 'みずけ',
        meanings: 'water content',
      },
      {
        kanji: '気',
        reading: 'き',
        meanings: 'spirit',
      },
      {
        kanji: '気合',
        reading: 'きあい',
        meanings: '(fighting) spirit',
      },
      {
        kanji: '心意気',
        reading: 'こころいき',
        meanings: 'spirit',
      },
      {
        kanji: '水気',
        reading: 'みずけ',
        meanings: 'water content',
      },
      {
        kanji: '気',
        reading: 'け',
        meanings: 'sign',
      },
      {
        kanji: '気配',
        reading: 'けはい',
        meanings: 'indication',
      },
      {
        kanji: '嫌気',
        reading: 'いやき',
        meanings: 'dislike',
      },
      {
        kanji: '水気',
        reading: 'みずけ',
        meanings: 'water content',
      },
    ],
  },
  {
    kanjiName: '百',
    strokes: 6,
    grade: 1,
    freq: 163,
    meanings: ['Hundred'],
    on: ['ひゃく', 'びゃく'],
    kun: ['もも'],
    jlpt: 5,
    quizAnswers: ['Skin', 'Hundred', 'Wage', 'Connection'],
    similars: [
      {
        kanji: '白',
        meaning: 'white',
      },
      {
        kanji: '拍',
        meaning: 'clap',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '伯',
        meaning: 'chief',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
      {
        kanji: '面',
        meaning: 'mask',
      },
      {
        kanji: '指',
        meaning: 'finger',
      },
      {
        kanji: '旧',
        meaning: 'old times',
      },
      {
        kanji: '旨',
        meaning: 'delicious',
      },
    ],
    usedIn: [
      {
        kanji: '百',
        reading: 'もも',
        meanings: 'hundred',
      },
      {
        kanji: '百重',
        reading: 'ももえ',
        meanings: 'piling up highly',
      },
      {
        kanji: '百',
        reading: 'ひゃく',
        meanings: 'hundred',
      },
      {
        kanji: '１００億',
        reading: 'ひゃくおく',
        meanings: '10,000,000,000',
      },
      {
        kanji: '９００',
        reading: 'きゅうひゃく',
        meanings: '900',
      },
      {
        kanji: '５００',
        reading: 'ごひゃく',
        meanings: '500',
      },
      {
        kanji: '凡百',
        reading: 'ぼんぴゃく',
        meanings: 'various',
      },
    ],
  },
  {
    kanjiName: '男',
    strokes: 7,
    grade: 1,
    freq: 240,
    meanings: ['Male'],
    on: ['だん', 'なん'],
    kun: ['おとこ', 'お'],
    jlpt: 5,
    quizAnswers: ['Medicine', 'Male', 'Continent', 'Shake'],
    similars: [
      {
        kanji: '勇',
        meaning: 'courage',
      },
      {
        kanji: '町',
        meaning: 'town',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '田',
        meaning: 'rice field',
      },
      {
        kanji: '界',
        meaning: 'world',
      },
      {
        kanji: '画',
        meaning: 'brush-stroke',
      },
      {
        kanji: '易',
        meaning: 'easy',
      },
      {
        kanji: '具',
        meaning: 'tool',
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge',
      },
      {
        kanji: '勉',
        meaning: 'exertion',
      },
    ],
    usedIn: [
      {
        kanji: '男',
        reading: 'おとこ',
        meanings: 'man',
      },
      {
        kanji: '男の子',
        reading: 'おとこのこ',
        meanings: 'boy',
      },
      {
        kanji: '年男',
        reading: 'としおとこ',
        meanings:
          'man born in a year with the same Chinese zodiac sign as the current year',
      },
      {
        kanji: '山男',
        reading: 'やまおとこ',
        meanings: 'giant',
      },
      {
        kanji: '雄',
        reading: 'お',
        meanings: 'male',
      },
      {
        kanji: '男',
        reading: 'おとこ',
        meanings: 'man',
      },
      {
        kanji: '愛上男',
        reading: 'あいうえお',
        meanings: 'skilled male lover',
      },
      {
        kanji: '毒男',
        reading: 'どくお',
        meanings: 'lonely heart',
      },
      {
        kanji: '男',
        reading: 'だん',
        meanings: 'masculine noun',
      },
      {
        kanji: '男子',
        reading: 'だんし',
        meanings: 'boy',
      },
      {
        kanji: '既男',
        reading: 'きだん',
        meanings: 'married man',
      },
      {
        kanji: '公侯伯子男',
        reading: 'こうこうはくしだん',
        meanings: 'duke',
      },
      {
        kanji: '男',
        reading: 'なん',
        meanings: 'son',
      },
      {
        kanji: '男女',
        reading: 'だんじょ',
        meanings: 'men and women',
      },
      {
        kanji: '一男',
        reading: 'いちなん',
        meanings: 'boy',
      },
      {
        kanji: '次男',
        reading: 'じなん',
        meanings: 'second son',
      },
    ],
  },
  {
    kanjiName: '見',
    strokes: 7,
    grade: 1,
    freq: 22,
    meanings: [
      'See',
      'Hopes',
      'Chances',
      'Idea',
      'Opinion',
      'Look At',
      'Visible',
    ],
    on: ['けん'],
    kun: ['み.る', 'み.える', 'み.せる'],
    jlpt: 5,
    quizAnswers: ['See', 'Bad', 'Noise', 'Shameless'],
    similars: [
      {
        kanji: '貝',
        meaning: 'shellfish',
      },
      {
        kanji: '具',
        meaning: 'tool',
      },
      {
        kanji: '昆',
        meaning: 'descendants',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '児',
        meaning: 'newborn babe',
      },
      {
        kanji: '則',
        meaning: 'rule',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '貞',
        meaning: 'upright',
      },
      {
        kanji: '県',
        meaning: 'prefecture',
      },
      {
        kanji: '臭',
        meaning: 'stinking',
      },
    ],
    usedIn: [
      {
        kanji: '見る',
        reading: 'みる',
        meanings: 'to see',
      },
      {
        kanji: '見る見る',
        reading: 'みるみる',
        meanings: 'very fast',
      },
      {
        kanji: '見える',
        reading: 'みえる',
        meanings: 'to be seen',
      },
      {
        kanji: '見える化',
        reading: 'みえるか',
        meanings: 'visualization',
      },
      {
        kanji: '見せる',
        reading: 'みせる',
        meanings: 'to show',
      },
      {
        kanji: '見',
        reading: 'けん',
        meanings: 'view (of life',
      },
      {
        kanji: '見解',
        reading: 'けんかい',
        meanings: 'opinion',
      },
      {
        kanji: '後見',
        reading: 'こうけん',
        meanings: 'guardianship',
      },
      {
        kanji: '政見',
        reading: 'せいけん',
        meanings: 'political views',
      },
    ],
  },
  {
    kanjiName: '車',
    strokes: 7,
    grade: 1,
    freq: 333,
    meanings: ['Car'],
    on: ['しゃ'],
    kun: ['くるま'],
    jlpt: 5,
    quizAnswers: ['Plantation', 'Congratulations', 'Injure', 'Car'],
    similars: [
      {
        kanji: '早',
        meaning: 'early',
      },
      {
        kanji: '軍',
        meaning: 'army',
      },
      {
        kanji: '草',
        meaning: 'grass',
      },
      {
        kanji: '軌',
        meaning: 'rut',
      },
      {
        kanji: '画',
        meaning: 'brush-stroke',
      },
      {
        kanji: '卓',
        meaning: 'eminent',
      },
      {
        kanji: '更',
        meaning: 'grow late',
      },
      {
        kanji: '申',
        meaning: 'have the honor to',
      },
      {
        kanji: '甲',
        meaning: 'armor',
      },
      {
        kanji: '軒',
        meaning: 'flats',
      },
    ],
    usedIn: [
      {
        kanji: '車',
        reading: 'くるま',
        meanings: 'car',
      },
      {
        kanji: '車椅子',
        reading: 'くるまいす',
        meanings: 'wheelchair',
      },
      {
        kanji: '火の車',
        reading: 'ひのくるま',
        meanings: 'fiery chariot (that carries the souls of sinners into hell)',
      },
      {
        kanji: '車',
        reading: 'しゃ',
        meanings: 'car',
      },
      {
        kanji: '車検',
        reading: 'しゃけん',
        meanings: 'vehicle inspection',
      },
      {
        kanji: '軽自動車',
        reading: 'けいじどうしゃ',
        meanings: 'light motor vehicle (up to 660cc and 64bhp)',
      },
      {
        kanji: '台車',
        reading: 'だいしゃ',
        meanings: 'platform truck',
      },
    ],
  },
  {
    kanjiName: '毎',
    strokes: 6,
    grade: 2,
    freq: 436,
    meanings: ['Every'],
    on: ['まい'],
    kun: ['ごと', '-ごと.に'],
    jlpt: 5,
    quizAnswers: ['Foreign', 'Cessation', 'Every', 'Gift'],
    similars: [
      {
        kanji: '侮',
        meaning: 'scorn',
      },
      {
        kanji: '悔',
        meaning: 'repent',
      },
      {
        kanji: '海',
        meaning: 'sea',
      },
      {
        kanji: '佐',
        meaning: 'assistant',
      },
      {
        kanji: '梅',
        meaning: 'plum',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '正',
        meaning: 'correct',
      },
      {
        kanji: '血',
        meaning: 'blood',
      },
      {
        kanji: '敏',
        meaning: 'cleverness',
      },
      {
        kanji: '年',
        meaning: 'year',
      },
    ],
    usedIn: [
      {
        kanji: '毎',
        reading: 'ごと',
        meanings: 'each',
      },
      {
        kanji: '毎に',
        reading: 'ごとに',
        meanings: 'one by one',
      },
      {
        kanji: '月ごと',
        reading: 'つきごと',
        meanings: 'monthly',
      },
      {
        kanji: '戸ごと',
        reading: 'こごと',
        meanings: 'every house',
      },
      {
        kanji: '毎',
        reading: 'まい',
        meanings: 'every (usu. with events',
      },
      {
        kanji: '毎朝',
        reading: 'まいあさ',
        meanings: 'every morning',
      },
      {
        kanji: '毎々',
        reading: 'まいまい',
        meanings: 'each time',
      },
    ],
  },
  {
    kanjiName: '行',
    strokes: 6,
    grade: 2,
    freq: 20,
    meanings: [
      'Going',
      'Journey',
      'Carry Out',
      'Conduct',
      'Act',
      'Line',
      'Row',
      'Bank',
    ],
    on: ['こう', 'ぎょう', 'あん'],
    kun: [
      'い.く',
      'ゆ.く',
      '-ゆ.き',
      '-ゆき',
      '-い.き',
      '-いき',
      'おこな.う',
      'おこ.なう',
    ],
    jlpt: 5,
    quizAnswers: ['Clear', 'Sound Of Jewels', 'Manhood', 'Going'],
    similars: [
      {
        kanji: '待',
        meaning: 'wait',
      },
      {
        kanji: '争',
        meaning: 'contend',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '往',
        meaning: 'journey',
      },
      {
        kanji: '徐',
        meaning: 'gradually',
      },
      {
        kanji: '律',
        meaning: 'rhythm',
      },
      {
        kanji: '得',
        meaning: 'gain',
      },
      {
        kanji: '術',
        meaning: 'art',
      },
      {
        kanji: '芋',
        meaning: 'potato',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
    ],
    usedIn: [
      {
        kanji: '行く',
        reading: 'いく',
        meanings: 'to go',
      },
      {
        kanji: '行く先',
        reading: 'ゆくさき',
        meanings: 'destination',
      },
      {
        kanji: '行く',
        reading: 'いく',
        meanings: 'to go',
      },
      {
        kanji: '行方',
        reading: 'ゆくえ',
        meanings: "(one's) whereabouts",
      },
      {
        kanji: '行う',
        reading: 'おこなう',
        meanings: 'to perform',
      },
      {
        kanji: '行う',
        reading: 'おこなう',
        meanings: 'to perform',
      },
      {
        kanji: '行',
        reading: 'こう',
        meanings: 'going',
      },
      {
        kanji: '行為',
        reading: 'こうい',
        meanings: 'act',
      },
      {
        kanji: '並行',
        reading: 'へいこう',
        meanings: 'going side-by-side',
      },
      {
        kanji: '性行',
        reading: 'せいこう',
        meanings: 'character and conduct',
      },
      {
        kanji: '行',
        reading: 'ぎょう',
        meanings: 'line (of text)',
      },
      {
        kanji: '行革',
        reading: 'ぎょうかく',
        meanings: 'administrative reform',
      },
      {
        kanji: '奉行',
        reading: 'ぶぎょう',
        meanings: 'magistrate',
      },
      {
        kanji: '施行',
        reading: 'しこう',
        meanings: 'putting in force (a law)',
      },
      {
        kanji: '行脚',
        reading: 'あんぎゃ',
        meanings: 'pilgrimage',
      },
      {
        kanji: '行火',
        reading: 'あんか',
        meanings: 'bed warmer',
      },
    ],
  },
  {
    kanjiName: '西',
    strokes: 6,
    grade: 2,
    freq: 259,
    meanings: ['West', 'Spain'],
    on: ['せい', 'さい', 'す'],
    kun: ['にし'],
    jlpt: 5,
    quizAnswers: ['Prefer', 'Inside', 'Sentence', 'West'],
    similars: [
      {
        kanji: '四',
        meaning: 'four',
      },
      {
        kanji: '囚',
        meaning: 'captured',
      },
      {
        kanji: '酒',
        meaning: 'sake',
      },
      {
        kanji: '配',
        meaning: 'distribute',
      },
      {
        kanji: '酌',
        meaning: 'bar-tending',
      },
      {
        kanji: '酔',
        meaning: 'drunk',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '直',
        meaning: 'straightaway',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '白',
        meaning: 'white',
      },
    ],
    usedIn: [
      {
        kanji: '西',
        reading: 'にし',
        meanings: 'west',
      },
      {
        kanji: '西方',
        reading: 'せいほう',
        meanings: 'western direction',
      },
      {
        kanji: '南西',
        reading: 'なんせい',
        meanings: 'southwest',
      },
      {
        kanji: '京都外大西',
        reading: 'きょうとがいだいにし',
        meanings: 'Kyoto Gaidainishi',
      },
      {
        kanji: '西',
        reading: 'せい',
        meanings: 'Spain',
      },
      {
        kanji: '西欧',
        reading: 'せいおう',
        meanings: 'Western Europe',
      },
      {
        kanji: '南西',
        reading: 'なんせい',
        meanings: 'southwest',
      },
      {
        kanji: '北北西',
        reading: 'ほくほくせい',
        meanings: 'north-northwest',
      },
      {
        kanji: '西方',
        reading: 'せいほう',
        meanings: 'western direction',
      },
      {
        kanji: '西遊',
        reading: 'せいゆう',
        meanings: 'westward trip',
      },
      {
        kanji: '西瓜',
        reading: 'すいか',
        meanings: 'watermelon (Citrullus lanatus)',
      },
      {
        kanji: '西班牙',
        reading: 'すぺいん',
        meanings: 'Spain',
      },
    ],
  },
  {
    kanjiName: '何',
    strokes: 7,
    grade: 2,
    freq: 340,
    meanings: ['What'],
    on: ['か'],
    kun: ['なに', 'なん', 'なに-', 'なん-'],
    jlpt: 5,
    quizAnswers: ['Rope', 'Wrap', 'What', 'Tenth Sign Of Chinese Zodiac'],
    similars: [
      {
        kanji: '使',
        meaning: 'use',
      },
      {
        kanji: '奇',
        meaning: 'strange',
      },
      {
        kanji: '可',
        meaning: 'can',
      },
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '向',
        meaning: 'yonder',
      },
      {
        kanji: '仲',
        meaning: 'go-between',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '荷',
        meaning: 'baggage',
      },
    ],
    usedIn: [
      {
        kanji: '何',
        reading: 'なに',
        meanings: 'what',
      },
      {
        kanji: '何か',
        reading: 'なにか',
        meanings: 'something',
      },
      {
        kanji: '何々',
        reading: 'なになに',
        meanings: 'what',
      },
      {
        kanji: '何',
        reading: 'なん',
        meanings: 'what',
      },
      {
        kanji: '何か',
        reading: 'なにか',
        meanings: 'something',
      },
      {
        kanji: '非可換幾何',
        reading: 'ひかかんきか',
        meanings: 'noncommutative geometry',
      },
    ],
  },
  {
    kanjiName: '来',
    strokes: 7,
    grade: 2,
    freq: 102,
    meanings: ['Come', 'Due', 'Next', 'Cause', 'Become'],
    on: ['らい', 'たい'],
    kun: ['く.る', 'きた.る', 'きた.す', 'き.たす', 'き.たる', 'き', 'こ'],
    jlpt: 5,
    quizAnswers: ['Shoulder', 'Pasture', 'Come', 'War'],
    similars: [
      {
        kanji: '米',
        meaning: 'rice',
      },
      {
        kanji: '林',
        meaning: 'grove',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '平',
        meaning: 'even',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '殊',
        meaning: 'particularly',
      },
      {
        kanji: '栄',
        meaning: 'flourish',
      },
      {
        kanji: '柔',
        meaning: 'tender',
      },
      {
        kanji: '染',
        meaning: 'dye',
      },
    ],
    usedIn: [
      {
        kanji: '来る',
        reading: 'くる',
        meanings: 'to come (spatially or temporally)',
      },
      {
        kanji: '来る年',
        reading: 'くるとし',
        meanings: 'the coming year',
      },
      {
        kanji: '来る',
        reading: 'きたる',
        meanings: 'next',
      },
      {
        kanji: '来るべき',
        reading: 'きたるべき',
        meanings: 'expected to arrive (occur) in the near future',
      },
      {
        kanji: '来す',
        reading: 'きたす',
        meanings: 'to cause',
      },
      {
        kanji: '来す',
        reading: 'きたす',
        meanings: 'to cause',
      },
      {
        kanji: '来る',
        reading: 'きたる',
        meanings: 'next',
      },
      {
        kanji: '来るべき',
        reading: 'きたるべき',
        meanings: 'expected to arrive (occur) in the near future',
      },
      {
        kanji: '来合わせる',
        reading: 'きあわせる',
        meanings: 'to happen to come along',
      },
      {
        kanji: '来掛かる',
        reading: 'きかかる',
        meanings: 'to happen to come',
      },
      {
        kanji: '不出来',
        reading: 'ふでき',
        meanings: 'bad job',
      },
      {
        kanji: '行ってき',
        reading: 'いってき',
        meanings: 'bye',
      },
      {
        kanji: '来い',
        reading: 'こい',
        meanings: 'come!',
      },
      {
        kanji: '来し方',
        reading: 'きしかた',
        meanings: 'the past',
      },
      {
        kanji: '来',
        reading: 'らい',
        meanings: 'next (year',
      },
      {
        kanji: '来客',
        reading: 'らいきゃく',
        meanings: 'visitor',
      },
      {
        kanji: '在来',
        reading: 'ざいらい',
        meanings: 'pre-existing',
      },
      {
        kanji: '再来',
        reading: 'さいらい',
        meanings: 'return',
      },
    ],
  },
  {
    kanjiName: '学',
    strokes: 8,
    grade: 1,
    freq: 63,
    meanings: ['Study', 'Learning', 'Science'],
    on: ['がく'],
    kun: ['まな.ぶ'],
    jlpt: 5,
    quizAnswers: ['Arc', 'Melody', 'Study', 'Plunder'],
    similars: [
      {
        kanji: '浮',
        meaning: 'floating',
      },
      {
        kanji: '字',
        meaning: 'character',
      },
      {
        kanji: '労',
        meaning: 'labor',
      },
      {
        kanji: '栄',
        meaning: 'flourish',
      },
      {
        kanji: '存',
        meaning: 'exist',
      },
      {
        kanji: '好',
        meaning: 'fond',
      },
      {
        kanji: '注',
        meaning: 'pour',
      },
      {
        kanji: '沈',
        meaning: 'sink',
      },
      {
        kanji: '受',
        meaning: 'accept',
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug',
      },
    ],
    usedIn: [
      {
        kanji: '学ぶ',
        reading: 'まなぶ',
        meanings: 'to learn',
      },
      {
        kanji: '学',
        reading: 'がく',
        meanings: 'learning',
      },
      {
        kanji: '学位',
        reading: 'がくい',
        meanings: '(academic) degree',
      },
      {
        kanji: '短期大学',
        reading: 'たんきだいがく',
        meanings: 'junior college',
      },
      {
        kanji: '法医学',
        reading: 'ほういがく',
        meanings: 'forensic medicine',
      },
    ],
  },
  {
    kanjiName: '金',
    strokes: 8,
    grade: 1,
    freq: 53,
    meanings: ['Gold'],
    on: ['きん', 'こん', 'ごん'],
    kun: ['かね', 'かな-', '-がね'],
    jlpt: 5,
    quizAnswers: ['Resign', 'Gold', 'Cheat', 'Worship'],
    similars: [
      {
        kanji: '針',
        meaning: 'needle',
      },
      {
        kanji: '位',
        meaning: 'rank',
      },
      {
        kanji: '全',
        meaning: 'whole',
      },
      {
        kanji: '妻',
        meaning: 'wife',
      },
      {
        kanji: '並',
        meaning: 'row',
      },
      {
        kanji: '余',
        meaning: 'too much',
      },
      {
        kanji: '会',
        meaning: 'meeting',
      },
      {
        kanji: '善',
        meaning: 'virtuous',
      },
      {
        kanji: '虚',
        meaning: 'void',
      },
      {
        kanji: '釣',
        meaning: 'angling',
      },
    ],
    usedIn: [
      {
        kanji: '金',
        reading: 'かね',
        meanings: 'money',
      },
      {
        kanji: '金持ち',
        reading: 'かねもち',
        meanings: 'rich person',
      },
      {
        kanji: '細かい金',
        reading: 'こまかいかね',
        meanings: 'small change',
      },
      {
        kanji: '汚れた金',
        reading: 'よごれたかね',
        meanings: 'dirty money',
      },
      {
        kanji: '金',
        reading: 'きん',
        meanings: 'gold (metal)',
      },
      {
        kanji: '金色',
        reading: 'きんいろ',
        meanings: 'gold (colour',
      },
      {
        kanji: '集金',
        reading: 'しゅうきん',
        meanings: 'money collection',
      },
      {
        kanji: '納金',
        reading: 'のうきん',
        meanings: 'payment',
      },
      {
        kanji: '金色',
        reading: 'きんいろ',
        meanings: 'gold (colour',
      },
      {
        kanji: '金剛',
        reading: 'こんごう',
        meanings: 'vajra (indestructible substance)',
      },
      {
        kanji: '鬱金',
        reading: 'うこん',
        meanings: 'turmeric (Curcuma domestica)',
      },
      {
        kanji: '葛鬱金',
        reading: 'くずうこん',
        meanings: 'arrowroot (Maranta arundinacea)',
      },
      {
        kanji: '漉油',
        reading: 'こしあぶら',
        meanings:
          'Acanthopanax sciadophylloides (species of flowering plant related to the aralias)',
      },
    ],
  },
  {
    kanjiName: '雨',
    strokes: 8,
    grade: 1,
    freq: 950,
    meanings: ['Rain'],
    on: ['う'],
    kun: ['あめ', 'あま-', '-さめ'],
    jlpt: 5,
    quizAnswers: ['Home', 'Rain', 'Face', 'Grow Bulky'],
    similars: [
      {
        kanji: '烈',
        meaning: 'ardent',
      },
      {
        kanji: '漏',
        meaning: 'leak',
      },
      {
        kanji: '点',
        meaning: 'spot',
      },
      {
        kanji: '耐',
        meaning: '-proof',
      },
      {
        kanji: '庶',
        meaning: 'commoner',
      },
      {
        kanji: '雪',
        meaning: 'snow',
      },
      {
        kanji: '秘',
        meaning: 'secret',
      },
      {
        kanji: '肉',
        meaning: 'meat',
      },
      {
        kanji: '雰',
        meaning: 'atmosphere',
      },
      {
        kanji: '雲',
        meaning: 'cloud',
      },
    ],
    usedIn: [
      {
        kanji: '雨',
        reading: 'あめ',
        meanings: 'rain',
      },
      {
        kanji: '雨降り',
        reading: 'あめふり',
        meanings: 'rainfall',
      },
      {
        kanji: '五月雨',
        reading: 'さみだれ',
        meanings: 'early-summer rain',
      },
      {
        kanji: '強い雨',
        reading: 'つよいあめ',
        meanings: 'heavy rain (specifically 20-29 mm per hour in JMA use)',
      },
      {
        kanji: '雨水',
        reading: 'あまみず',
        meanings: 'rain water',
      },
      {
        kanji: '雨季',
        reading: 'うき',
        meanings: 'rainy season',
      },
      {
        kanji: '集中豪雨',
        reading: 'しゅうちゅうごうう',
        meanings: 'local downpour',
      },
      {
        kanji: '時雨',
        reading: 'しぐれ',
        meanings: 'rain shower in late autumn (fall) or early winter',
      },
    ],
  },
  {
    kanjiName: '国',
    strokes: 8,
    grade: 2,
    freq: 3,
    meanings: ['Country'],
    on: ['こく'],
    kun: ['くに'],
    jlpt: 5,
    quizAnswers: ['Scar', 'Country', 'Section', 'Manchu Dynasty'],
    similars: [
      {
        kanji: '囲',
        meaning: 'surround',
      },
      {
        kanji: '固',
        meaning: 'harden',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '団',
        meaning: 'group',
      },
      {
        kanji: '時',
        meaning: 'time',
      },
      {
        kanji: '晴',
        meaning: 'clear up',
      },
      {
        kanji: '黒',
        meaning: 'black',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '困',
        meaning: 'quandary',
      },
    ],
    usedIn: [
      {
        kanji: '国',
        reading: 'くに',
        meanings: 'country',
      },
      {
        kanji: '国人',
        reading: 'こくじん',
        meanings: 'indigenous person',
      },
      {
        kanji: 'お国',
        reading: 'おくに',
        meanings: 'your native country',
      },
      {
        kanji: '現国',
        reading: 'うつしくに',
        meanings: 'world of mankind',
      },
      {
        kanji: '国益',
        reading: 'こくえき',
        meanings: 'national interest',
      },
      {
        kanji: '国営',
        reading: 'こくえい',
        meanings: 'government management',
      },
      {
        kanji: '最恵国',
        reading: 'さいけいこく',
        meanings: 'most favored nation',
      },
      {
        kanji: '異国',
        reading: 'いこく',
        meanings: 'foreign country',
      },
    ],
  },
  {
    kanjiName: '東',
    strokes: 8,
    grade: 2,
    freq: 37,
    meanings: ['East'],
    on: ['とう'],
    kun: ['ひがし'],
    jlpt: 5,
    quizAnswers: ['Refined', 'Error', 'Be Blinded', 'East'],
    similars: [
      {
        kanji: '更',
        meaning: 'grow late',
      },
      {
        kanji: '凍',
        meaning: 'frozen',
      },
      {
        kanji: '軌',
        meaning: 'rut',
      },
      {
        kanji: '某',
        meaning: 'so-and-so',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '軟',
        meaning: 'soft',
      },
      {
        kanji: '陳',
        meaning: 'exhibit',
      },
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '夏',
        meaning: 'summer',
      },
      {
        kanji: '便',
        meaning: 'convenience',
      },
    ],
    usedIn: [
      {
        kanji: '東',
        reading: 'ひがし',
        meanings: 'east',
      },
      {
        kanji: '東方',
        reading: 'とうほう',
        meanings: 'eastern direction',
      },
      {
        kanji: '犬が西向きゃ尾は東',
        reading: 'いぬがにしむきゃおはひがし',
        meanings: 'that goes without saying',
      },
      {
        kanji: '東欧',
        reading: 'とうおう',
        meanings: 'Eastern Europe',
      },
      {
        kanji: '東亜',
        reading: 'とうあ',
        meanings: 'East Asia',
      },
      {
        kanji: '北北東',
        reading: 'ほくほくとう',
        meanings: 'north-northeast',
      },
      {
        kanji: '東北東',
        reading: 'とうほくとう',
        meanings: 'east-northeast',
      },
    ],
  },
  {
    kanjiName: '長',
    strokes: 8,
    grade: 2,
    freq: 12,
    meanings: ['Long', 'Leader', 'Superior', 'Senior'],
    on: ['ちょう'],
    kun: ['なが.い', 'おさ'],
    jlpt: 5,
    quizAnswers: ['Good Belt', 'Thank', 'Pleasing', 'Long'],
    similars: [
      {
        kanji: '張',
        meaning: 'counter for bows & stringed instruments',
      },
      {
        kanji: '帳',
        meaning: 'notebook',
      },
      {
        kanji: '脹',
        meaning: 'dilate',
      },
      {
        kanji: '喪',
        meaning: 'miss',
      },
      {
        kanji: '集',
        meaning: 'gather',
      },
      {
        kanji: '哀',
        meaning: 'pathetic',
      },
      {
        kanji: '髪',
        meaning: 'hair of the head',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '味',
        meaning: 'flavor',
      },
      {
        kanji: '実',
        meaning: 'reality',
      },
    ],
    usedIn: [
      {
        kanji: '長い',
        reading: 'ながい',
        meanings: 'long (distance',
      },
      {
        kanji: '長居',
        reading: 'ながい',
        meanings: 'long visit',
      },
      {
        kanji: '長',
        reading: 'おさ',
        meanings: 'head',
      },
      {
        kanji: '長亀',
        reading: 'おさがめ',
        meanings: 'leatherback turtle (Dermochelys coriacea)',
      },
      {
        kanji: '田長',
        reading: 'たおさ',
        meanings: 'master of the rice field',
      },
      {
        kanji: '死出田長',
        reading: 'しでたおさ',
        meanings: 'lesser cuckoo (Cuculus poliocephalus)',
      },
      {
        kanji: '長',
        reading: 'ちょう',
        meanings: 'head',
      },
      {
        kanji: '長官',
        reading: 'ちょうかん',
        meanings: 'secretary (government)',
      },
      {
        kanji: '体長',
        reading: 'たいちょう',
        meanings: 'length (of an animal)',
      },
      {
        kanji: '医長',
        reading: 'いちょう',
        meanings: 'medical director',
      },
    ],
  },
  {
    kanjiName: '前',
    strokes: 9,
    grade: 2,
    freq: 27,
    meanings: ['In Front', 'Before'],
    on: ['ぜん'],
    kun: ['まえ', '-まえ'],
    jlpt: 5,
    quizAnswers: ['Rationing', 'Participate In', 'Consideration', 'In Front'],
    similars: [
      {
        kanji: '削',
        meaning: 'plane',
      },
      {
        kanji: '愉',
        meaning: 'pleasure',
      },
      {
        kanji: '有',
        meaning: 'possess',
      },
      {
        kanji: '浦',
        meaning: 'bay',
      },
      {
        kanji: '補',
        meaning: 'supplement',
      },
      {
        kanji: '諭',
        meaning: 'rebuke',
      },
      {
        kanji: '判',
        meaning: 'judgement',
      },
      {
        kanji: '肖',
        meaning: 'resemblance',
      },
      {
        kanji: '用',
        meaning: 'utilize',
      },
      {
        kanji: '庸',
        meaning: 'commonplace',
      },
    ],
    usedIn: [
      {
        kanji: '前',
        reading: 'まえ',
        meanings: 'in front (of)',
      },
      {
        kanji: '前売り',
        reading: 'まえうり',
        meanings: 'advance sale',
      },
      {
        kanji: '左前',
        reading: 'ひだりまえ',
        meanings:
          'wearing a kimono with the right side over the left (normally used only for the dead)',
      },
      {
        kanji: '出前',
        reading: 'でまえ',
        meanings: 'home delivery (of food)',
      },
      {
        kanji: '前',
        reading: 'ぜん',
        meanings: 'last (i.e. immediately preceding)',
      },
      {
        kanji: '前衛',
        reading: 'ぜんえい',
        meanings: 'advance guard',
      },
      {
        kanji: '中前',
        reading: 'ちゅうぜん',
        meanings: 'front of center field',
      },
      {
        kanji: '風前',
        reading: 'ふうぜん',
        meanings: 'where the wind blows',
      },
    ],
  },
  {
    kanjiName: '南',
    strokes: 9,
    grade: 2,
    freq: 341,
    meanings: ['South'],
    on: ['なん', 'な'],
    kun: ['みなみ'],
    jlpt: 5,
    quizAnswers: ['South', 'Model', 'Support', 'Commander'],
    similars: [
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '献',
        meaning: 'offering',
      },
      {
        kanji: '伴',
        meaning: 'consort',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '坪',
        meaning: 'two-mat area',
      },
      {
        kanji: '辞',
        meaning: 'resign',
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge',
      },
      {
        kanji: '祥',
        meaning: 'auspicious',
      },
      {
        kanji: '塀',
        meaning: 'fence',
      },
      {
        kanji: '砕',
        meaning: 'smash',
      },
    ],
    usedIn: [
      {
        kanji: '南',
        reading: 'みなみ',
        meanings: 'south',
      },
      {
        kanji: '南アフリカ',
        reading: 'みなみあふりか',
        meanings: 'South Africa',
      },
      {
        kanji: '東南',
        reading: 'とうなん',
        meanings: 'south-east',
      },
      {
        kanji: '西南',
        reading: 'せいなん',
        meanings: 'south-west',
      },
      {
        kanji: '南',
        reading: 'なん',
        meanings: 'south wind tile',
      },
      {
        kanji: '南海',
        reading: 'なんかい',
        meanings: 'southern sea',
      },
      {
        kanji: '東南',
        reading: 'とうなん',
        meanings: 'south-east',
      },
      {
        kanji: '西南',
        reading: 'せいなん',
        meanings: 'south-west',
      },
      {
        kanji: '南',
        reading: 'なん',
        meanings: 'south wind tile',
      },
      {
        kanji: '南海',
        reading: 'なんかい',
        meanings: 'southern sea',
      },
    ],
  },
  {
    kanjiName: '後',
    strokes: 9,
    grade: 2,
    freq: 26,
    meanings: ['Behind', 'Back', 'Later'],
    on: ['ご', 'こう'],
    kun: ['のち', 'うし.ろ', 'うしろ', 'あと', 'おく.れる'],
    jlpt: 5,
    quizAnswers: ['Behind', 'Male Name Suffix', 'Canal', 'Node'],
    similars: [
      {
        kanji: '仮',
        meaning: 'sham',
      },
      {
        kanji: '秋',
        meaning: 'autumn',
      },
      {
        kanji: '俊',
        meaning: 'sagacious',
      },
      {
        kanji: '彼',
        meaning: 'he',
      },
      {
        kanji: '役',
        meaning: 'duty',
      },
      {
        kanji: '夏',
        meaning: 'summer',
      },
      {
        kanji: '般',
        meaning: 'carrier',
      },
      {
        kanji: '復',
        meaning: 'restore',
      },
      {
        kanji: '徹',
        meaning: 'penetrate',
      },
      {
        kanji: '腹',
        meaning: 'abdomen',
      },
    ],
    usedIn: [
      {
        kanji: '後',
        reading: 'のち',
        meanings: 'later',
      },
      {
        kanji: '後々',
        reading: 'のちのち',
        meanings: 'future',
      },
      {
        kanji: '後々',
        reading: 'のちのち',
        meanings: 'future',
      },
      {
        kanji: 'この後',
        reading: 'このあと',
        meanings: 'after this',
      },
      {
        kanji: '後ろ',
        reading: 'うしろ',
        meanings: 'back',
      },
      {
        kanji: '後ろ姿',
        reading: 'うしろすがた',
        meanings: "(a person's) appearance from behind",
      },
      {
        kanji: '後ろ',
        reading: 'うしろ',
        meanings: 'back',
      },
      {
        kanji: '後ろ姿',
        reading: 'うしろすがた',
        meanings: "(a person's) appearance from behind",
      },
      {
        kanji: '後',
        reading: 'あと',
        meanings: 'behind',
      },
      {
        kanji: '後押し',
        reading: 'あとおし',
        meanings: 'pushing',
      },
      {
        kanji: '亡き後',
        reading: 'なきあと',
        meanings: "after one's death",
      },
      {
        kanji: '後々',
        reading: 'あとあと',
        meanings: 'future',
      },
      {
        kanji: '遅れる',
        reading: 'おくれる',
        meanings: 'to be late',
      },
      {
        kanji: '後',
        reading: 'ご',
        meanings: 'after',
      },
      {
        kanji: '後日',
        reading: 'ごじつ',
        meanings: 'in the future',
      },
      {
        kanji: '越後',
        reading: 'えちご',
        meanings:
          'Echigo (former province located in present-day Niigata Prefecture)',
      },
      {
        kanji: '終了後',
        reading: 'しゅうりょうご',
        meanings: 'after the end (of something)',
      },
      {
        kanji: '後援',
        reading: 'こうえん',
        meanings: 'support',
      },
      {
        kanji: '後遺症',
        reading: 'こういしょう',
        meanings: 'prognostic symptoms',
      },
      {
        kanji: '向後',
        reading: 'こうご',
        meanings: 'hereafter',
      },
      {
        kanji: '先後',
        reading: 'せんご',
        meanings: 'before and after',
      },
    ],
  },
  {
    kanjiName: '食',
    strokes: 9,
    grade: 2,
    freq: 328,
    meanings: ['Eat', 'Food'],
    on: ['しょく', 'じき'],
    kun: ['く.う', 'く.らう', 'た.べる', 'は.む'],
    jlpt: 5,
    quizAnswers: ['Eat', 'Swear', 'Awe', 'White'],
    similars: [
      {
        kanji: '娘',
        meaning: 'daughter',
      },
      {
        kanji: '良',
        meaning: 'good',
      },
      {
        kanji: '飢',
        meaning: 'hungry',
      },
      {
        kanji: '浪',
        meaning: 'wandering',
      },
      {
        kanji: '飯',
        meaning: 'meal',
      },
      {
        kanji: '限',
        meaning: 'limit',
      },
      {
        kanji: '飲',
        meaning: 'drink',
      },
      {
        kanji: '恨',
        meaning: 'regret',
      },
      {
        kanji: '養',
        meaning: 'foster',
      },
      {
        kanji: '根',
        meaning: 'root',
      },
    ],
    usedIn: [
      {
        kanji: '食う',
        reading: 'くう',
        meanings: 'to eat',
      },
      {
        kanji: '食うや食わず',
        reading: 'くうやくわず',
        meanings: '(living) from hand to mouth',
      },
      {
        kanji: '食らう',
        reading: 'くらう',
        meanings: 'to eat',
      },
      {
        kanji: '食べる',
        reading: 'たべる',
        meanings: 'to eat',
      },
      {
        kanji: '食べるラー油',
        reading: 'たべるらーゆ',
        meanings: 'chili oil mixed with chopped garlic',
      },
      {
        kanji: '食む',
        reading: 'はむ',
        meanings: 'to eat (fodder',
      },
      {
        kanji: '食',
        reading: 'しょく',
        meanings: 'food',
      },
      {
        kanji: '食',
        reading: 'しょく',
        meanings: 'eclipse (solar',
      },
      {
        kanji: '飽食',
        reading: 'ほうしょく',
        meanings: 'eating until one is full',
      },
      {
        kanji: '会食',
        reading: 'かいしょく',
        meanings: 'eating together',
      },
      {
        kanji: '食',
        reading: 'しょく',
        meanings: 'food',
      },
      {
        kanji: '食堂',
        reading: 'じきどう',
        meanings: 'dining hall (at a temple)',
      },
      {
        kanji: '断食',
        reading: 'だんじき',
        meanings: 'fasting',
      },
      {
        kanji: '斎食',
        reading: 'さいじき',
        meanings: 'morning meal (for priests',
      },
    ],
  },
  {
    kanjiName: '校',
    strokes: 10,
    grade: 1,
    freq: 294,
    meanings: ['Exam', 'School', 'Printing', 'Proof', 'Correction'],
    on: ['こう', 'きょう'],
    kun: [],
    jlpt: 5,
    quizAnswers: ['Tend Toward', 'Exam', 'Bag', 'Try'],
    similars: [
      {
        kanji: '板',
        meaning: 'plank',
      },
      {
        kanji: '核',
        meaning: 'nucleus',
      },
      {
        kanji: '林',
        meaning: 'grove',
      },
      {
        kanji: '株',
        meaning: 'stocks',
      },
      {
        kanji: '枚',
        meaning: 'sheet of...',
      },
      {
        kanji: '絞',
        meaning: 'strangle',
      },
      {
        kanji: '粒',
        meaning: 'grains',
      },
      {
        kanji: '械',
        meaning: 'contraption',
      },
      {
        kanji: '較',
        meaning: 'contrast',
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)',
      },
    ],
    usedIn: [
      {
        kanji: '校',
        reading: 'こう',
        meanings: 'school',
      },
      {
        kanji: '校歌',
        reading: 'こうか',
        meanings: 'school song',
      },
      {
        kanji: '一校',
        reading: 'いっこう',
        meanings: 'whole school',
      },
      {
        kanji: '同校',
        reading: 'どうこう',
        meanings: 'the same school',
      },
      {
        kanji: '校合',
        reading: 'きょうごう',
        meanings: 'collation',
      },
      {
        kanji: '校書',
        reading: 'きょうしょ',
        meanings: 'collation',
      },
    ],
  },
  {
    kanjiName: '時',
    strokes: 10,
    grade: 2,
    freq: 16,
    meanings: ['Time', 'Hour'],
    on: ['じ'],
    kun: ['とき', '-どき'],
    jlpt: 5,
    quizAnswers: ['Time', 'Satiate', 'Vast', 'Depend On'],
    similars: [
      {
        kanji: '転',
        meaning: 'revolve',
      },
      {
        kanji: '異',
        meaning: 'uncommon',
      },
      {
        kanji: '里',
        meaning: 'ri',
      },
      {
        kanji: '星',
        meaning: 'star',
      },
      {
        kanji: '皇',
        meaning: 'emperor',
      },
      {
        kanji: '専',
        meaning: 'specialty',
      },
      {
        kanji: '晴',
        meaning: 'clear up',
      },
      {
        kanji: '黒',
        meaning: 'black',
      },
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '待',
        meaning: 'wait',
      },
    ],
    usedIn: [
      {
        kanji: '時',
        reading: 'とき',
        meanings: 'time',
      },
      {
        kanji: '時折',
        reading: 'ときおり',
        meanings: 'sometimes',
      },
      {
        kanji: '切り替え時',
        reading: 'きりかえとき',
        meanings: 'time to switch over',
      },
      {
        kanji: '逢魔が時',
        reading: 'おうまがとき',
        meanings:
          'twilight (traditionally regarded as a time when accidents and disasters are frequent)',
      },
      {
        kanji: '時',
        reading: 'じ',
        meanings: 'hour',
      },
      {
        kanji: '時価',
        reading: 'じか',
        meanings: 'current value',
      },
      {
        kanji: '零時',
        reading: 'れいじ',
        meanings: "twelve o'clock",
      },
      {
        kanji: '平時',
        reading: 'へいじ',
        meanings: 'peacetime',
      },
    ],
  },
  {
    kanjiName: '高',
    strokes: 10,
    grade: 2,
    freq: 65,
    meanings: ['Tall', 'High', 'Expensive'],
    on: ['こう'],
    kun: ['たか.い', 'たか', '-だか', 'たか.まる', 'たか.める'],
    jlpt: 5,
    quizAnswers: ['Wet', 'Stingy', 'Show A Liking For', 'Tall'],
    similars: [
      {
        kanji: '稿',
        meaning: 'draft',
      },
      {
        kanji: '喜',
        meaning: 'rejoice',
      },
      {
        kanji: '店',
        meaning: 'store',
      },
      {
        kanji: '宮',
        meaning: 'Shinto shrine',
      },
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '品',
        meaning: 'goods',
      },
      {
        kanji: '詞',
        meaning: 'part of speech',
      },
      {
        kanji: '詔',
        meaning: 'imperial edict',
      },
      {
        kanji: '橋',
        meaning: 'bridge',
      },
      {
        kanji: '商',
        meaning: 'make a deal',
      },
    ],
    usedIn: [
      {
        kanji: '高い',
        reading: 'たかい',
        meanings: 'high',
      },
      {
        kanji: '高い高い',
        reading: 'たかいたかい',
        meanings: 'lifting (a child) high up in the air',
      },
      {
        kanji: '高',
        reading: 'たか',
        meanings: 'quantity',
      },
      {
        kanji: '高い',
        reading: 'たかい',
        meanings: 'high',
      },
      {
        kanji: '威高',
        reading: 'いたか',
        meanings: 'arrogant',
      },
      {
        kanji: '背高',
        reading: 'せいたか',
        meanings: 'tallness',
      },
      {
        kanji: '高まる',
        reading: 'たかまる',
        meanings: 'to rise',
      },
      {
        kanji: '高める',
        reading: 'たかめる',
        meanings: 'to raise',
      },
      {
        kanji: '高',
        reading: 'こう',
        meanings: 'high',
      },
      {
        kanji: '高圧',
        reading: 'こうあつ',
        meanings: 'high voltage',
      },
      {
        kanji: '中高',
        reading: 'ちゅうこう',
        meanings: 'middle and high school',
      },
      {
        kanji: '激昂',
        reading: 'げっこう',
        meanings: 'excitement',
      },
    ],
  },
  {
    kanjiName: '間',
    strokes: 12,
    grade: 2,
    freq: 33,
    meanings: ['Interval', 'Space'],
    on: ['かん', 'けん'],
    kun: ['あいだ', 'ま', 'あい'],
    jlpt: 5,
    quizAnswers: ['Interval', 'Honesty', 'Burn', 'Put Up (tent)'],
    similars: [
      {
        kanji: '晶',
        meaning: 'sparkle',
      },
      {
        kanji: '問',
        meaning: 'question',
      },
      {
        kanji: '聞',
        meaning: 'hear',
      },
      {
        kanji: '暑',
        meaning: 'sultry',
      },
      {
        kanji: '門',
        meaning: 'gate',
      },
      {
        kanji: '閑',
        meaning: 'leisure',
      },
      {
        kanji: '開',
        meaning: 'open',
      },
      {
        kanji: '冒',
        meaning: 'risk',
      },
      {
        kanji: '簡',
        meaning: 'simplicity',
      },
      {
        kanji: '閉',
        meaning: 'closed',
      },
    ],
    usedIn: [
      {
        kanji: '間',
        reading: 'あいだ',
        meanings: 'space (between)',
      },
      {
        kanji: '間中',
        reading: 'あいだじゅう',
        meanings: 'during',
      },
      {
        kanji: '候間',
        reading: 'そうろうあいだ',
        meanings: 'as ...',
      },
      {
        kanji: 'ついこの間',
        reading: 'ついこのあいだ',
        meanings: 'just the other day',
      },
      {
        kanji: '間',
        reading: 'ま',
        meanings: 'time',
      },
      {
        kanji: '間際',
        reading: 'まぎわ',
        meanings: 'the point just before ...',
      },
      {
        kanji: '茶の間',
        reading: 'ちゃのま',
        meanings: '(Japanese-style) living room',
      },
      {
        kanji: '床の間',
        reading: 'とこのま',
        meanings: 'tokonoma (alcove where art or flowers are displayed)',
      },
      {
        kanji: '間',
        reading: 'あいだ',
        meanings: 'space (between)',
      },
      {
        kanji: '間中',
        reading: 'あいだじゅう',
        meanings: 'during',
      },
      {
        kanji: '波間',
        reading: 'なみま',
        meanings: 'interval between the waves',
      },
      {
        kanji: '幕間',
        reading: 'まくあい',
        meanings: 'intermission (between acts)',
      },
      {
        kanji: '間',
        reading: 'かん',
        meanings: 'interval',
      },
      {
        kanji: '間隔',
        reading: 'かんかく',
        meanings: 'space',
      },
      {
        kanji: '短期間',
        reading: 'たんきかん',
        meanings: 'short term',
      },
      {
        kanji: '右中間',
        reading: 'うちゅうかん',
        meanings: 'between right and center fielders (centre)',
      },
      {
        kanji: '間',
        reading: 'けん',
        meanings: 'ken (6 shaku',
      },
      {
        kanji: '間数',
        reading: 'けんすう',
        meanings: 'number of ken (in length or breadth)',
      },
      {
        kanji: '世間',
        reading: 'せけん',
        meanings: 'world',
      },
      {
        kanji: '六百間',
        reading: 'ろっぴゃっけん',
        meanings: 'roppyakken (type of game)',
      },
    ],
  },
  {
    kanjiName: '話',
    strokes: 13,
    grade: 2,
    freq: 134,
    meanings: ['Tale', 'Talk'],
    on: ['わ'],
    kun: ['はな.す', 'はなし'],
    jlpt: 5,
    quizAnswers: ['Tale', 'Plan', 'Limited', 'Blessing'],
    similars: [
      {
        kanji: '詞',
        meaning: 'part of speech',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '詰',
        meaning: 'packed',
      },
      {
        kanji: '調',
        meaning: 'tune',
      },
      {
        kanji: '語',
        meaning: 'word',
      },
      {
        kanji: '詔',
        meaning: 'imperial edict',
      },
      {
        kanji: '許',
        meaning: 'permit',
      },
      {
        kanji: '諾',
        meaning: 'consent',
      },
      {
        kanji: '訴',
        meaning: 'accusation',
      },
      {
        kanji: '試',
        meaning: 'test',
      },
    ],
    usedIn: [
      {
        kanji: '話す',
        reading: 'はなす',
        meanings: 'to talk',
      },
      {
        kanji: '話',
        reading: 'はなし',
        meanings: 'talk',
      },
      {
        kanji: '話し合い',
        reading: 'はなしあい',
        meanings: 'discussion',
      },
      {
        kanji: 'いい話',
        reading: 'いいはなし',
        meanings: 'good story',
      },
      {
        kanji: '固い話',
        reading: 'かたいはなし',
        meanings: 'serious topic (of conversation)',
      },
      {
        kanji: '話',
        reading: 'わ',
        meanings: 'counter for stories',
      },
      {
        kanji: '話題',
        reading: 'わだい',
        meanings: 'topic',
      },
      {
        kanji: '懇話',
        reading: 'こんわ',
        meanings: 'friendly talk',
      },
      {
        kanji: '秘話',
        reading: 'ひわ',
        meanings: 'secret story',
      },
    ],
  },
  {
    kanjiName: '電',
    strokes: 13,
    grade: 2,
    freq: 268,
    meanings: ['Electricity'],
    on: ['でん'],
    kun: [],
    jlpt: 5,
    quizAnswers: ['Electricity', 'Item', 'Game', 'Vehement'],
    similars: [
      {
        kanji: '雷',
        meaning: 'thunder',
      },
      {
        kanji: '霜',
        meaning: 'frost',
      },
      {
        kanji: '雲',
        meaning: 'cloud',
      },
      {
        kanji: '零',
        meaning: 'zero',
      },
      {
        kanji: '雪',
        meaning: 'snow',
      },
      {
        kanji: '雰',
        meaning: 'atmosphere',
      },
      {
        kanji: '需',
        meaning: 'demand',
      },
      {
        kanji: '禅',
        meaning: 'Zen',
      },
      {
        kanji: '相',
        meaning: 'inter-',
      },
      {
        kanji: '霊',
        meaning: 'spirits',
      },
    ],
    usedIn: [
      {
        kanji: '電化',
        reading: 'でんか',
        meanings: 'electrification',
      },
      {
        kanji: '電圧',
        reading: 'でんあつ',
        meanings: 'voltage',
      },
      {
        kanji: '送電',
        reading: 'そうでん',
        meanings: 'transmission of electricity',
      },
      {
        kanji: '配電',
        reading: 'はいでん',
        meanings: 'distribution of electricity',
      },
    ],
  },
  {
    kanjiName: '聞',
    strokes: 14,
    grade: 2,
    freq: 319,
    meanings: ['Hear', 'Ask', 'Listen'],
    on: ['ぶん', 'もん'],
    kun: ['き.く', 'き.こえる'],
    jlpt: 5,
    quizAnswers: ['Leisure', 'Resist', 'Hear', '-times'],
    similars: [
      {
        kanji: '間',
        meaning: 'interval',
      },
      {
        kanji: '開',
        meaning: 'open',
      },
      {
        kanji: '閉',
        meaning: 'closed',
      },
      {
        kanji: '晶',
        meaning: 'sparkle',
      },
      {
        kanji: '閑',
        meaning: 'leisure',
      },
      {
        kanji: '門',
        meaning: 'gate',
      },
      {
        kanji: '最',
        meaning: 'utmost',
      },
      {
        kanji: '冒',
        meaning: 'risk',
      },
      {
        kanji: '閣',
        meaning: 'tower',
      },
      {
        kanji: '閥',
        meaning: 'clique',
      },
    ],
    usedIn: [
      {
        kanji: '聞く',
        reading: 'きく',
        meanings: 'to hear',
      },
      {
        kanji: '聞くだけ野暮',
        reading: 'きくだけやぼ',
        meanings: 'asking would be rude',
      },
      {
        kanji: '聞こえる',
        reading: 'きこえる',
        meanings: 'to be heard',
      },
      {
        kanji: '聞見',
        reading: 'ぶんけん',
        meanings: 'information',
      },
      {
        kanji: '聞香',
        reading: 'ぶんこう',
        meanings: 'smelling incense',
      },
      {
        kanji: 'スポーツ新聞',
        reading: 'すぽーつしんぶん',
        meanings: 'sports newspaper',
      },
      {
        kanji: '壁新聞',
        reading: 'かべしんぶん',
        meanings: 'wall newspaper',
      },
      {
        kanji: '聞見',
        reading: 'ぶんけん',
        meanings: 'information',
      },
      {
        kanji: '聞香',
        reading: 'ぶんこう',
        meanings: 'smelling incense',
      },
      {
        kanji: '奏聞',
        reading: 'そうもん',
        meanings: 'reporting to the Emperor',
      },
      {
        kanji: '声聞',
        reading: 'しょうもん',
        meanings: 'sravaka (disciple of Buddha)',
      },
    ],
  },
  {
    kanjiName: '語',
    strokes: 14,
    grade: 2,
    freq: 301,
    meanings: ['Word', 'Speech', 'Language'],
    on: ['ご'],
    kun: ['かた.る', 'かた.らう'],
    jlpt: 5,
    quizAnswers: ['Word', 'King', 'Annoyed', 'Congeal'],
    similars: [
      {
        kanji: '詰',
        meaning: 'packed',
      },
      {
        kanji: '諾',
        meaning: 'consent',
      },
      {
        kanji: '調',
        meaning: 'tune',
      },
      {
        kanji: '話',
        meaning: 'tale',
      },
      {
        kanji: '詞',
        meaning: 'part of speech',
      },
      {
        kanji: '詩',
        meaning: 'poem',
      },
      {
        kanji: '評',
        meaning: 'evaluate',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '詔',
        meaning: 'imperial edict',
      },
      {
        kanji: '請',
        meaning: 'solicit',
      },
    ],
    usedIn: [
      {
        kanji: '語る',
        reading: 'かたる',
        meanings: 'to talk about',
      },
      {
        kanji: '語るに落ちる',
        reading: 'かたるにおちる',
        meanings: 'to let slip a secret',
      },
      {
        kanji: '語らう',
        reading: 'かたらう',
        meanings: 'to talk',
      },
      {
        kanji: '語',
        reading: 'ご',
        meanings: 'word',
      },
      {
        kanji: '語学',
        reading: 'ごがく',
        meanings: 'study of foreign languages',
      },
      {
        kanji: '標語',
        reading: 'ひょうご',
        meanings: 'motto',
      },
      {
        kanji: '造語',
        reading: 'ぞうご',
        meanings: 'coined word',
      },
    ],
  },
  {
    kanjiName: '読',
    strokes: 14,
    grade: 2,
    freq: 618,
    meanings: ['Read'],
    on: ['どく', 'とく', 'とう'],
    kun: ['よ.む', '-よ.み'],
    jlpt: 5,
    quizAnswers: [
      'Tool',
      'Right Village Radical (no. 163)',
      'Read',
      'Bear A Grudge',
    ],
    similars: [
      {
        kanji: '誌',
        meaning: 'document',
      },
      {
        kanji: '訪',
        meaning: 'call on',
      },
      {
        kanji: '詰',
        meaning: 'packed',
      },
      {
        kanji: '詩',
        meaning: 'poem',
      },
      {
        kanji: '該',
        meaning: 'above-stated',
      },
      {
        kanji: '請',
        meaning: 'solicit',
      },
      {
        kanji: '諸',
        meaning: 'various',
      },
      {
        kanji: '説',
        meaning: 'opinion',
      },
      {
        kanji: '記',
        meaning: 'scribe',
      },
      {
        kanji: '証',
        meaning: 'evidence',
      },
    ],
    usedIn: [
      {
        kanji: '読む',
        reading: 'よむ',
        meanings: 'to read',
      },
      {
        kanji: '読書',
        reading: 'どくしょ',
        meanings: 'reading (a book)',
      },
      {
        kanji: '読者',
        reading: 'どくしゃ',
        meanings: 'reader',
      },
      {
        kanji: '積ん読',
        reading: 'つんどく',
        meanings: 'buying books and not reading them',
      },
      {
        kanji: '必読',
        reading: 'ひつどく',
        meanings: 'must-read',
      },
      {
        kanji: '読書',
        reading: 'どくしょ',
        meanings: 'reading (a book)',
      },
      {
        kanji: '読本',
        reading: 'とくほん',
        meanings: 'reading-book',
      },
      {
        kanji: '読点',
        reading: 'とうてん',
        meanings: 'comma',
      },
      {
        kanji: '句読',
        reading: 'くとう',
        meanings: 'breaks and pauses (in a sentence)',
      },
      {
        kanji: '吏読',
        reading: 'りと',
        meanings:
          'Idu (archaic writing system that uses Chinese characters to represent the Korean language)',
      },
    ],
  },
  {
    kanjiName: '生',
    strokes: 5,
    grade: 1,
    freq: 29,
    meanings: ['Life', 'Genuine', 'Birth'],
    on: ['せい', 'しょう'],
    kun: [
      'い.きる',
      'い.かす',
      'い.ける',
      'う.まれる',
      'うま.れる',
      'う.まれ',
      'うまれ',
      'う.む',
      'お.う',
      'は.える',
      'は.やす',
      'き',
      'なま',
      'なま-',
      'な.る',
      'な.す',
      'む.す',
      '-う',
    ],
    jlpt: 5,
    quizAnswers: ['Take Warning From', 'Example', 'Life', 'Seven'],
    similars: [
      {
        kanji: '全',
        meaning: 'whole',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
      {
        kanji: '狂',
        meaning: 'lunatic',
      },
      {
        kanji: '年',
        meaning: 'year',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '性',
        meaning: 'sex',
      },
      {
        kanji: '佳',
        meaning: 'excellent',
      },
      {
        kanji: '侍',
        meaning: 'waiter',
      },
    ],
    usedIn: [
      {
        kanji: '生きる',
        reading: 'いきる',
        meanings: 'to live',
      },
      {
        kanji: '生きる糧',
        reading: 'いきるかて',
        meanings: 'source of vitality',
      },
      {
        kanji: '生かす',
        reading: 'いかす',
        meanings: 'to make (the best) use of',
      },
      {
        kanji: '生ける',
        reading: 'いける',
        meanings: 'to arrange (flowers)',
      },
      {
        kanji: '生ける屍',
        reading: 'いけるしかばね',
        meanings: 'living corpse',
      },
      {
        kanji: '生まれる',
        reading: 'うまれる',
        meanings: 'to be born',
      },
      {
        kanji: '生まれる',
        reading: 'うまれる',
        meanings: 'to be born',
      },
      {
        kanji: '生まれ',
        reading: 'うまれ',
        meanings: 'birth',
      },
      {
        kanji: '生まれつき',
        reading: 'うまれつき',
        meanings: 'by nature',
      },
      {
        kanji: '生まれ',
        reading: 'うまれ',
        meanings: 'birth',
      },
      {
        kanji: '生まれつき',
        reading: 'うまれつき',
        meanings: 'by nature',
      },
      {
        kanji: '生む',
        reading: 'うむ',
        meanings: 'to give birth',
      },
      {
        kanji: '生う',
        reading: 'おう',
        meanings: 'to grow (of plants)',
      },
      {
        kanji: '生える',
        reading: 'はえる',
        meanings: 'to grow',
      },
      {
        kanji: '生やす',
        reading: 'はやす',
        meanings: 'to grow',
      },
      {
        kanji: '生',
        reading: 'き',
        meanings: 'pure',
      },
      {
        kanji: '生地',
        reading: 'きじ',
        meanings: 'cloth',
      },
      {
        kanji: '死に生き',
        reading: 'しにいき',
        meanings: 'death and life',
      },
      {
        kanji: '生',
        reading: 'なま',
        meanings: 'raw',
      },
      {
        kanji: '生り',
        reading: 'なまり',
        meanings: 'boiled and half-dried bonito',
      },
      {
        kanji: 'お生',
        reading: 'おなま',
        meanings: 'impudence',
      },
      {
        kanji: '現ナマ',
        reading: 'げんなま',
        meanings: 'cold cash',
      },
      {
        kanji: '生る',
        reading: 'なる',
        meanings: 'to bear fruit',
      },
      {
        kanji: '生す',
        reading: 'なす',
        meanings: 'to have a child',
      },
      {
        kanji: '生す',
        reading: 'むす',
        meanings: 'to grow (of moss',
      },
      {
        kanji: '生',
        reading: 'せい',
        meanings: 'life',
      },
      {
        kanji: '生育',
        reading: 'せいいく',
        meanings: 'birth and growth',
      },
      {
        kanji: '回生',
        reading: 'かいせい',
        meanings: 'resurrection',
      },
      {
        kanji: '公衆衛生',
        reading: 'こうしゅうえいせい',
        meanings: 'public health',
      },
      {
        kanji: '生',
        reading: 'せい',
        meanings: 'life',
      },
      {
        kanji: '生家',
        reading: 'せいか',
        meanings: 'house where one was born',
      },
      {
        kanji: '殺生',
        reading: 'せっしょう',
        meanings: 'killing',
      },
      {
        kanji: '死生',
        reading: 'しせい',
        meanings: 'life and death',
      },
    ],
  },
  {
    kanjiName: '書',
    strokes: 10,
    grade: 2,
    freq: 169,
    meanings: ['Write'],
    on: ['しょ'],
    kun: ['か.く', '-が.き', '-がき'],
    jlpt: 5,
    quizAnswers: ['Chamber', 'Perspire', 'Interest (on Money)', 'Write'],
    similars: [
      {
        kanji: '春',
        meaning: 'springtime',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '昔',
        meaning: 'once upon a time',
      },
      {
        kanji: '諸',
        meaning: 'various',
      },
      {
        kanji: '建',
        meaning: 'build',
      },
      {
        kanji: '音',
        meaning: 'sound',
      },
      {
        kanji: '着',
        meaning: 'don',
      },
      {
        kanji: '替',
        meaning: 'exchange',
      },
      {
        kanji: '措',
        meaning: 'set aside',
      },
      {
        kanji: '描',
        meaning: 'sketch',
      },
    ],
    usedIn: [
      {
        kanji: '書く',
        reading: 'かく',
        meanings: 'to write',
      },
      {
        kanji: '書',
        reading: 'しょ',
        meanings: 'book',
      },
      {
        kanji: '書院',
        reading: 'しょいん',
        meanings: 'drawing room',
      },
      {
        kanji: '投書',
        reading: 'とうしょ',
        meanings: 'letter (e.g. of complaint)',
      },
      {
        kanji: '議定書',
        reading: 'ぎていしょ',
        meanings: 'protocol',
      },
    ],
  },
  {
    kanjiName: '力',
    strokes: 2,
    grade: 1,
    freq: 62,
    meanings: ['Power', 'Strength', 'Strong', 'Strain', 'Bear Up', 'Exert'],
    on: ['りょく', 'りき', 'りい'],
    kun: ['ちから'],
    wk_meanings: ['Power', '^Strength'],
    jlpt: 4,
    quizAnswers: ['Power', 'Marsh', 'Bastard', 'Only'],
    similars: [
      {
        kanji: '刀',
        meaning: 'sword',
      },
      {
        kanji: '刃',
        meaning: 'blade',
      },
      {
        kanji: '万',
        meaning: 'ten thousand',
      },
      {
        kanji: '分',
        meaning: 'part',
      },
      {
        kanji: '匁',
        meaning: 'monme',
      },
      {
        kanji: '切',
        meaning: 'cut',
      },
      {
        kanji: '召',
        meaning: 'seduce',
      },
      {
        kanji: '加',
        meaning: 'add',
      },
      {
        kanji: '幼',
        meaning: 'infancy',
      },
      {
        kanji: '功',
        meaning: 'achievement',
      },
    ],
    usedIn: [
      {
        kanji: '力',
        reading: 'ちから',
        meanings: 'force',
      },
      {
        kanji: '力強い',
        reading: 'ちからづよい',
        meanings: 'powerful',
      },
      {
        kanji: '強い力',
        reading: 'つよいちから',
        meanings: 'strong interaction',
      },
      {
        kanji: '弱い力',
        reading: 'よわいちから',
        meanings: 'weak force',
      },
      {
        kanji: '力',
        reading: 'りょく',
        meanings: 'strength',
      },
      {
        kanji: '力作',
        reading: 'りきさく',
        meanings: 'painstaking piece of work',
      },
      {
        kanji: '水力',
        reading: 'すいりょく',
        meanings: 'hydraulic power',
      },
      {
        kanji: '威力',
        reading: 'いりょく',
        meanings: 'power',
      },
      {
        kanji: '力',
        reading: 'りき',
        meanings: 'strength',
      },
      {
        kanji: '力学',
        reading: 'りきがく',
        meanings: 'mechanics',
      },
      {
        kanji: '地力',
        reading: 'じりき',
        meanings: "one's own potential",
      },
      {
        kanji: '合力',
        reading: 'ごうりょく',
        meanings: 'resultant force',
      },
    ],
  },
  {
    kanjiName: '口',
    strokes: 3,
    grade: 1,
    freq: 284,
    meanings: ['Mouth'],
    on: ['こう', 'く'],
    kun: ['くち'],
    wk_meanings: ['Mouth'],
    jlpt: 4,
    quizAnswers: ['Lock', 'Mouth', 'Sap', 'Performance'],
    similars: [
      {
        kanji: '中',
        meaning: 'in',
      },
      {
        kanji: '巨',
        meaning: 'gigantic',
      },
      {
        kanji: '可',
        meaning: 'can',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '句',
        meaning: 'phrase',
      },
      {
        kanji: '台',
        meaning: 'pedestal',
      },
      {
        kanji: '司',
        meaning: 'director',
      },
      {
        kanji: '古',
        meaning: 'old',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '占',
        meaning: 'fortune-telling',
      },
    ],
    usedIn: [
      {
        kanji: '口',
        reading: 'くち',
        meanings: 'mouth',
      },
      {
        kanji: '口利き',
        reading: 'くちきき',
        meanings: 'mediation',
      },
      {
        kanji: '切り口',
        reading: 'きりくち',
        meanings: 'cut end',
      },
      {
        kanji: '大口',
        reading: 'おおぐち',
        meanings: 'big mouth',
      },
      {
        kanji: '口',
        reading: 'く',
        meanings: 'mouth',
      },
      {
        kanji: '口径',
        reading: 'こうけい',
        meanings: 'aperture',
      },
      {
        kanji: '開口',
        reading: 'かいこう',
        meanings: 'opening',
      },
      {
        kanji: '経口',
        reading: 'けいこう',
        meanings: 'taken by mouth',
      },
      {
        kanji: '口',
        reading: 'く',
        meanings: 'mouth',
      },
      {
        kanji: '口',
        reading: 'くち',
        meanings: 'mouth',
      },
      {
        kanji: '猪口',
        reading: 'ちょこ',
        meanings: 'sake cup',
      },
      {
        kanji: '赤口',
        reading: 'しゃっこう',
        meanings:
          'day that is unlucky except between the auspicious hours of 11am and 1pm (in the traditional calendar)',
      },
    ],
  },
  {
    kanjiName: '工',
    strokes: 3,
    grade: 2,
    freq: 299,
    meanings: ['Craft', 'Construction', 'Katakana E Radical (no. 48)'],
    on: ['こう', 'く', 'ぐ'],
    kun: [],
    wk_meanings: ['Construction', '^Industry'],
    jlpt: 4,
    quizAnswers: ['Contact', 'Words', 'Inside', 'Craft'],
    similars: [
      {
        kanji: '土',
        meaning: 'soil',
      },
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '五',
        meaning: 'five',
      },
      {
        kanji: '二',
        meaning: 'two',
      },
      {
        kanji: '与',
        meaning: 'bestow',
      },
      {
        kanji: '三',
        meaning: 'three',
      },
      {
        kanji: '正',
        meaning: 'correct',
      },
      {
        kanji: '去',
        meaning: 'gone',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
    ],
    usedIn: [
      {
        kanji: '工',
        reading: 'こう',
        meanings: '(factory) worker',
      },
      {
        kanji: '工員',
        reading: 'こういん',
        meanings: 'factory worker',
      },
      {
        kanji: '起工',
        reading: 'きこう',
        meanings: 'setting to work',
      },
      {
        kanji: '商工',
        reading: 'しょうこう',
        meanings: 'commerce and industry',
      },
      {
        kanji: '工夫',
        reading: 'くふう',
        meanings: 'devising (a way)',
      },
      {
        kanji: '工面',
        reading: 'くめん',
        meanings: 'contrivance',
      },
      {
        kanji: '竹細工',
        reading: 'たけざいく',
        meanings: 'bamboo work',
      },
      {
        kanji: '寄せ木細工',
        reading: 'よせぎざいく',
        meanings: 'wooden mosaic work',
      },
      {
        kanji: '具合',
        reading: 'ぐあい',
        meanings: 'condition',
      },
      {
        kanji: '工面',
        reading: 'くめん',
        meanings: 'contrivance',
      },
    ],
  },
  {
    kanjiName: '夕',
    strokes: 3,
    grade: 1,
    freq: 924,
    meanings: ['Evening'],
    on: ['せき'],
    kun: ['ゆう'],
    wk_meanings: ['Evening'],
    jlpt: 4,
    quizAnswers: ['Sever', 'Bosom', 'Office', 'Evening'],
    similars: [
      {
        kanji: '久',
        meaning: 'long time',
      },
      {
        kanji: '勺',
        meaning: 'ladle',
      },
      {
        kanji: '凡',
        meaning: 'commonplace',
      },
      {
        kanji: '丸',
        meaning: 'round',
      },
      {
        kanji: '冬',
        meaning: 'winter',
      },
      {
        kanji: '外',
        meaning: 'outside',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '友',
        meaning: 'friend',
      },
      {
        kanji: '仏',
        meaning: 'Buddha',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
    ],
    usedIn: [
      {
        kanji: '夕',
        reading: 'ゆう',
        meanings: 'evening',
      },
      {
        kanji: '夕刊',
        reading: 'ゆうかん',
        meanings: 'evening paper',
      },
      {
        kanji: '昨夕',
        reading: 'さくゆう',
        meanings: 'yesterday evening',
      },
      {
        kanji: '春の夕',
        reading: 'はるのゆう',
        meanings: 'spring evening',
      },
      {
        kanji: '勺',
        reading: 'しゃく',
        meanings: 'shaku',
      },
      {
        kanji: '夕日',
        reading: 'ゆうひ',
        meanings: 'evening sun',
      },
      {
        kanji: '秋夕',
        reading: 'しゅうせき',
        meanings: 'autumn evening',
      },
      {
        kanji: '一夕',
        reading: 'いっせき',
        meanings: 'one evening',
      },
    ],
  },
  {
    kanjiName: '手',
    strokes: 4,
    grade: 1,
    freq: 60,
    meanings: ['Hand'],
    on: ['しゅ', 'ず'],
    kun: ['て', 'て-', '-て', 'た-'],
    wk_meanings: ['Hand'],
    jlpt: 4,
    quizAnswers: ['Meter', 'High', 'Capacity', 'Hand'],
    similars: [
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '毛',
        meaning: 'fur',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '半',
        meaning: 'half',
      },
      {
        kanji: '干',
        meaning: 'dry',
      },
      {
        kanji: '氏',
        meaning: 'family name',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
    ],
    usedIn: [
      {
        kanji: '手',
        reading: 'て',
        meanings: 'hand',
      },
      {
        kanji: '手足',
        reading: 'てあし',
        meanings: 'hands and feet',
      },
      {
        kanji: '逆手',
        reading: 'ぎゃくて',
        meanings: 'underhand grip',
      },
      {
        kanji: '担い手',
        reading: 'にないて',
        meanings: 'bearer',
      },
      {
        kanji: '手術',
        reading: 'しゅじゅつ',
        meanings: 'surgery',
      },
      {
        kanji: '手記',
        reading: 'しゅき',
        meanings: 'note',
      },
      {
        kanji: '二塁手',
        reading: 'にるいしゅ',
        meanings: 'second baseman',
      },
      {
        kanji: '名手',
        reading: 'めいしゅ',
        meanings: 'master',
      },
      {
        kanji: '交際上手',
        reading: 'こうさいじょうず',
        meanings: 'good at socializing',
      },
      {
        kanji: '処世上手',
        reading: 'しょせいじょうず',
        meanings: 'knowing how to get on in the world',
      },
    ],
  },
  {
    kanjiName: '文',
    strokes: 4,
    grade: 1,
    freq: 190,
    meanings: [
      'Sentence',
      'Literature',
      'Style',
      'Art',
      'Decoration',
      'Figures',
      'Plan',
      'Literary Radical (no. 67)',
    ],
    on: ['ぶん', 'もん'],
    kun: ['ふみ', 'あや'],
    wk_meanings: ['Writing', '^Sentence'],
    jlpt: 4,
    quizAnswers: ['Control', 'Gloss', 'Sentence', 'Appeal To'],
    similars: [
      {
        kanji: '央',
        meaning: 'center',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '六',
        meaning: 'six',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '衣',
        meaning: 'garment',
      },
      {
        kanji: '立',
        meaning: 'stand up',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
    ],
    usedIn: [
      {
        kanji: '文',
        reading: 'ふみ',
        meanings: 'letter',
      },
      {
        kanji: '文香',
        reading: 'ふみこう',
        meanings: 'scented insert (to enclose with a letter)',
      },
      {
        kanji: '御文',
        reading: 'おふみ',
        meanings: 'Gobunsho (The Epistles',
      },
      {
        kanji: '雁の文',
        reading: 'かりのふみ',
        meanings: '(a) letter',
      },
      {
        kanji: '綾',
        reading: 'あや',
        meanings: 'figure',
      },
      {
        kanji: '文つける',
        reading: 'あやつける',
        meanings: 'to make a false accusation',
      },
      {
        kanji: '言葉は身の文',
        reading: 'ことばはみのあや',
        meanings: "words betray one's character",
      },
      {
        kanji: '文',
        reading: 'ぶん',
        meanings: 'sentence',
      },
      {
        kanji: '文化',
        reading: 'ぶんか',
        meanings: 'culture',
      },
      {
        kanji: '公文',
        reading: 'こうぶん',
        meanings: 'official document',
      },
      {
        kanji: '異文',
        reading: 'いぶん',
        meanings: 'variant (in a manuscript or book)',
      },
      {
        kanji: '文',
        reading: 'もん',
        meanings: 'mon',
      },
      {
        kanji: '紋',
        reading: 'もん',
        meanings: '(family) crest',
      },
      {
        kanji: '人文',
        reading: 'じんぶん',
        meanings: 'humanity',
      },
      {
        kanji: '縄文',
        reading: 'じょうもん',
        meanings: 'straw-rope pattern pressed into earthenware',
      },
    ],
  },
  {
    kanjiName: '犬',
    strokes: 4,
    grade: 1,
    freq: 1326,
    meanings: ['Dog'],
    on: ['けん'],
    kun: ['いぬ', 'いぬ-'],
    wk_meanings: ['Dog'],
    jlpt: 4,
    quizAnswers: ['Clean', 'Dog', 'Firm', 'Minute'],
    similars: [
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '不',
        meaning: 'negative',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '本',
        meaning: 'book',
      },
      {
        kanji: '広',
        meaning: 'wide',
      },
      {
        kanji: '求',
        meaning: 'request',
      },
      {
        kanji: '状',
        meaning: 'status quo',
      },
      {
        kanji: '返',
        meaning: 'return',
      },
    ],
    usedIn: [
      {
        kanji: '犬',
        reading: 'いぬ',
        meanings: 'dog (Canis (lupus) familiaris)',
      },
      {
        kanji: '犬合わせ',
        reading: 'いぬあわせ',
        meanings: 'dog fighting',
      },
      {
        kanji: '野良犬',
        reading: 'のらいぬ',
        meanings: 'stray dog',
      },
      {
        kanji: '柴犬',
        reading: 'しばいぬ',
        meanings: 'shiba inu (dog breed)',
      },
      {
        kanji: '犬猿の仲',
        reading: 'けんえんのなか',
        meanings: 'like cats and dogs',
      },
      {
        kanji: '犬猿',
        reading: 'けんえん',
        meanings: 'cats and dogs (as an example of a bad relationship)',
      },
      {
        kanji: '柴犬',
        reading: 'しばいぬ',
        meanings: 'shiba inu (dog breed)',
      },
      {
        kanji: 'ポメラニア犬',
        reading: 'ぽめらにあけん',
        meanings: 'Pomeranian (dog)',
      },
    ],
  },
  {
    kanjiName: '正',
    strokes: 5,
    grade: 1,
    freq: 143,
    meanings: ['Correct', 'Justice', 'Righteous', '10**40'],
    on: ['せい', 'しょう'],
    kun: ['ただ.しい', 'ただ.す', 'まさ', 'まさ.に'],
    wk_meanings: ['Correct'],
    jlpt: 4,
    quizAnswers: ['Scrape', 'Uproar', 'Correct', 'Sing'],
    similars: [
      {
        kanji: '止',
        meaning: 'stop',
      },
      {
        kanji: '企',
        meaning: 'undertake',
      },
      {
        kanji: '征',
        meaning: 'subjugate',
      },
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '圧',
        meaning: 'pressure',
      },
      {
        kanji: '五',
        meaning: 'five',
      },
      {
        kanji: '左',
        meaning: 'left',
      },
      {
        kanji: '丘',
        meaning: 'hill',
      },
    ],
    usedIn: [
      {
        kanji: '正しい',
        reading: 'ただしい',
        meanings: 'right',
      },
      {
        kanji: '正しい行い',
        reading: 'ただしいおこない',
        meanings: 'conducting oneself properly',
      },
      {
        kanji: '正す',
        reading: 'ただす',
        meanings: 'to correct',
      },
      {
        kanji: '糺す',
        reading: 'ただす',
        meanings: 'to ascertain',
      },
      {
        kanji: '正',
        reading: 'まさ',
        meanings: 'exact',
      },
      {
        kanji: '正に',
        reading: 'まさに',
        meanings: 'exactly',
      },
      {
        kanji: '正に',
        reading: 'まさに',
        meanings: 'exactly',
      },
      {
        kanji: '正',
        reading: 'せい',
        meanings: '(logical) true',
      },
      {
        kanji: '正解',
        reading: 'せいかい',
        meanings: 'correct answer',
      },
      {
        kanji: '検事正',
        reading: 'けんじせい',
        meanings: 'chief public prosecutor',
      },
      {
        kanji: '適正',
        reading: 'てきせい',
        meanings: 'reasonable',
      },
      {
        kanji: '正',
        reading: 'しょう',
        meanings: 'exactly',
      },
      {
        kanji: '正月',
        reading: 'しょうがつ',
        meanings: 'New Year (esp. first three days)',
      },
      {
        kanji: '大正',
        reading: 'たいしょう',
        meanings: 'Taishō era (1912.7.30-1926.12.25)',
      },
      {
        kanji: '賀正',
        reading: 'がしょう',
        meanings: 'A Happy New Year!',
      },
    ],
  },
  {
    kanjiName: '田',
    strokes: 5,
    grade: 1,
    freq: 90,
    meanings: ['Rice Field', 'Rice Paddy'],
    on: ['でん'],
    kun: ['た'],
    wk_meanings: ['Rice Paddy', '^Rice Field', '^Field'],
    jlpt: 4,
    quizAnswers: ['Pray', 'Arrival', 'Ear', 'Rice Field'],
    similars: [
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '曲',
        meaning: 'bend',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '男',
        meaning: 'male',
      },
      {
        kanji: '町',
        meaning: 'town',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '油',
        meaning: 'oil',
      },
      {
        kanji: '画',
        meaning: 'brush-stroke',
      },
      {
        kanji: '宙',
        meaning: 'mid-air',
      },
    ],
    usedIn: [
      {
        kanji: '田',
        reading: 'た',
        meanings: 'rice field',
      },
      {
        kanji: '田植え',
        reading: 'たうえ',
        meanings: 'rice planting',
      },
      {
        kanji: '新田',
        reading: 'しんでん',
        meanings: 'new rice field',
      },
      {
        kanji: '塩田',
        reading: 'えんでん',
        meanings: 'saltpan',
      },
      {
        kanji: '田畑',
        reading: 'たはた',
        meanings: 'fields (of rice and other crops)',
      },
      {
        kanji: '田園',
        reading: 'でんえん',
        meanings: 'the country',
      },
      {
        kanji: '桑田',
        reading: 'そうでん',
        meanings: 'mulberry plantation',
      },
      {
        kanji: '水田',
        reading: 'すいでん',
        meanings: '(water-filled) paddy field',
      },
    ],
  },
  {
    kanjiName: '目',
    strokes: 5,
    grade: 1,
    freq: 76,
    meanings: [
      'Eye',
      'Class',
      'Look',
      'Insight',
      'Experience',
      'Care',
      'Favor',
    ],
    on: ['もく', 'ぼく'],
    kun: ['め', '-め', 'ま-'],
    wk_meanings: ['Eye'],
    jlpt: 4,
    quizAnswers: ['Eye', 'Strip', 'Recede', 'Bullet'],
    similars: [
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '甲',
        meaning: 'armor',
      },
      {
        kanji: '申',
        meaning: 'have the honor to',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '田',
        meaning: 'rice field',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
      {
        kanji: '見',
        meaning: 'see',
      },
      {
        kanji: '貝',
        meaning: 'shellfish',
      },
      {
        kanji: '曲',
        meaning: 'bend',
      },
      {
        kanji: '早',
        meaning: 'early',
      },
    ],
    usedIn: [
      {
        kanji: '目',
        reading: 'め',
        meanings: 'eye',
      },
      {
        kanji: '目当て',
        reading: 'めあて',
        meanings: 'mark',
      },
      {
        kanji: '蛇の目',
        reading: 'じゃのめ',
        meanings: "bull's-eye (pattern)",
      },
      {
        kanji: '負い目',
        reading: 'おいめ',
        meanings: '(feeling of) indebtedness',
      },
      {
        kanji: '目',
        reading: 'もく',
        meanings: 'order',
      },
      {
        kanji: '目撃',
        reading: 'もくげき',
        meanings: 'witnessing',
      },
      {
        kanji: '着目',
        reading: 'ちゃくもく',
        meanings: 'attention',
      },
      {
        kanji: '細目',
        reading: 'さいもく',
        meanings: 'particulars',
      },
      {
        kanji: '耳目',
        reading: 'じもく',
        meanings: 'eyes and ears',
      },
      {
        kanji: '不面目',
        reading: 'ふめんぼく',
        meanings: 'shame',
      },
    ],
  },
  {
    kanjiName: '立',
    strokes: 5,
    grade: 1,
    freq: 58,
    meanings: ['Stand Up', 'Rise', 'Set Up', 'Erect'],
    on: ['りつ', 'りゅう', 'りっとる'],
    kun: [
      'た.つ',
      '-た.つ',
      'た.ち-',
      'た.てる',
      '-た.てる',
      'た.て-',
      'たて-',
      '-た.て',
      '-だ.て',
      '-だ.てる',
    ],
    wk_meanings: ['Stand'],
    jlpt: 4,
    quizAnswers: ['Stand Up', 'Law', 'Inspire', 'Foster'],
    similars: [
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '位',
        meaning: 'rank',
      },
      {
        kanji: '充',
        meaning: 'allot',
      },
      {
        kanji: '妄',
        meaning: 'delusion',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '坪',
        meaning: 'two-mat area',
      },
      {
        kanji: '泣',
        meaning: 'cry',
      },
      {
        kanji: '以',
        meaning: 'by means of',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
    ],
    usedIn: [
      {
        kanji: '立つ',
        reading: 'たつ',
        meanings: 'to stand (up)',
      },
      {
        kanji: '立つ瀬',
        reading: 'たつせ',
        meanings: "one's position",
      },
      {
        kanji: '突立',
        reading: 'とったつ',
        meanings: 'stand straight up',
      },
      {
        kanji: '立てる',
        reading: 'たてる',
        meanings: 'to stand up',
      },
      {
        kanji: '立案',
        reading: 'りつあん',
        meanings: 'planning',
      },
      {
        kanji: '立像',
        reading: 'りつぞう',
        meanings: 'standing statue',
      },
      {
        kanji: '並立',
        reading: 'へいりつ',
        meanings: 'standing abreast',
      },
      {
        kanji: '不成立',
        reading: 'ふせいりつ',
        meanings: 'failure (e.g. of a bill',
      },
      {
        kanji: '立ち木',
        reading: 'たちき',
        meanings: 'standing tree',
      },
      {
        kanji: '立纓',
        reading: 'りゅうえい',
        meanings: 'erect tail (of a traditional Japanese hat)',
      },
      {
        kanji: '開立',
        reading: 'かいりゅう',
        meanings: 'extraction of cubic root',
      },
      {
        kanji: '造立',
        reading: 'ぞうりゅう',
        meanings: 'erecting (a temple',
      },
    ],
  },
  {
    kanjiName: '元',
    strokes: 4,
    grade: 2,
    freq: 192,
    meanings: ['Beginning', 'Former Time', 'Origin'],
    on: ['げん', 'がん'],
    kun: ['もと'],
    wk_meanings: ['Origin'],
    jlpt: 4,
    quizAnswers: ['Imperial Court', 'Follow', 'Drunk', 'Beginning'],
    similars: [
      {
        kanji: '井',
        meaning: 'well',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '札',
        meaning: 'tag',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
    ],
    usedIn: [
      {
        kanji: '元',
        reading: 'もと',
        meanings: 'origin',
      },
      {
        kanji: '元',
        reading: 'もと',
        meanings: 'former',
      },
      {
        kanji: '家元',
        reading: 'いえもと',
        meanings: 'head of a school (of music',
      },
      {
        kanji: '胸元',
        reading: 'むなもと',
        meanings: 'breast',
      },
      {
        kanji: '元',
        reading: 'げん',
        meanings: 'unknown (e.g. in an equation)',
      },
      {
        kanji: '原価',
        reading: 'げんか',
        meanings: 'cost price',
      },
      {
        kanji: '中元',
        reading: 'ちゅうげん',
        meanings: '15th day of the 7th lunar month',
      },
      {
        kanji: '抗原',
        reading: 'こうげん',
        meanings: 'antigen',
      },
      {
        kanji: '元祖',
        reading: 'がんそ',
        meanings: 'originator',
      },
      {
        kanji: '元日',
        reading: 'がんじつ',
        meanings: "New Year's Day",
      },
    ],
  },
  {
    kanjiName: '公',
    strokes: 4,
    grade: 2,
    freq: 118,
    meanings: ['Public', 'Prince', 'Official', 'Governmental'],
    on: ['こう', 'く'],
    kun: ['おおやけ'],
    wk_meanings: ['Public'],
    jlpt: 4,
    quizAnswers: ['Public', 'Hair', 'Wish', 'Keep'],
    similars: [
      {
        kanji: '仏',
        meaning: 'Buddha',
      },
      {
        kanji: '会',
        meaning: 'meeting',
      },
      {
        kanji: '介',
        meaning: 'jammed in',
      },
      {
        kanji: '夕',
        meaning: 'evening',
      },
      {
        kanji: '分',
        meaning: 'part',
      },
      {
        kanji: '松',
        meaning: 'pine tree',
      },
      {
        kanji: '今',
        meaning: 'now',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '入',
        meaning: 'enter',
      },
      {
        kanji: '勺',
        meaning: 'ladle',
      },
    ],
    usedIn: [
      {
        kanji: '公',
        reading: 'おおやけ',
        meanings: 'official',
      },
      {
        kanji: '公所',
        reading: 'おおやけどころ',
        meanings: 'imperial court',
      },
      {
        kanji: '公',
        reading: 'こう',
        meanings: 'public affair',
      },
      {
        kanji: '公安',
        reading: 'こうあん',
        meanings: 'public safety',
      },
      {
        kanji: '大公',
        reading: 'たいこう',
        meanings: 'archduke',
      },
      {
        kanji: '乃公',
        reading: 'だいこう',
        meanings: 'I',
      },
      {
        kanji: '公家',
        reading: 'くげ',
        meanings: 'court noble',
      },
      {
        kanji: '公廨',
        reading: 'くがい',
        meanings: 'government office',
      },
      {
        kanji: '夙',
        reading: 'しゅく',
        meanings:
          'outcasts common around the Kyoto region from the Kamakura period to the Edo period',
      },
    ],
  },
  {
    kanjiName: '切',
    strokes: 4,
    grade: 2,
    freq: 324,
    meanings: ['Cut', 'Cutoff', 'Be Sharp'],
    on: ['せつ', 'さい'],
    kun: [
      'き.る',
      '-き.る',
      'き.り',
      '-き.り',
      '-ぎ.り',
      'き.れる',
      '-き.れる',
      'き.れ',
      '-き.れ',
      '-ぎ.れ',
    ],
    wk_meanings: ['Cut'],
    jlpt: 4,
    quizAnswers: ['Easy', 'Councillor', 'Giraffe', 'Cut'],
    similars: [
      {
        kanji: '万',
        meaning: 'ten thousand',
      },
      {
        kanji: '功',
        meaning: 'achievement',
      },
      {
        kanji: '刀',
        meaning: 'sword',
      },
      {
        kanji: '才',
        meaning: 'genius',
      },
      {
        kanji: '力',
        meaning: 'power',
      },
      {
        kanji: '戸',
        meaning: 'door',
      },
      {
        kanji: '分',
        meaning: 'part',
      },
      {
        kanji: '厄',
        meaning: 'unlucky',
      },
      {
        kanji: '窃',
        meaning: 'stealth',
      },
      {
        kanji: '励',
        meaning: 'encourage',
      },
    ],
    usedIn: [
      {
        kanji: '切る',
        reading: 'きる',
        meanings: 'to cut',
      },
      {
        kanji: '切り',
        reading: 'きり',
        meanings: 'end',
      },
      {
        kanji: '切り替え',
        reading: 'きりかえ',
        meanings: 'exchange',
      },
      {
        kanji: '爪切り',
        reading: 'つめきり',
        meanings: 'nail clippers',
      },
      {
        kanji: '押し切り',
        reading: 'おしきり',
        meanings: 'straw cutter',
      },
      {
        kanji: '切れる',
        reading: 'きれる',
        meanings: 'to break',
      },
      {
        kanji: '切れ',
        reading: 'きれ',
        meanings: 'piece',
      },
      {
        kanji: '切れ味',
        reading: 'きれあじ',
        meanings: 'sharpness',
      },
      {
        kanji: '布切れ',
        reading: 'ぬのぎれ',
        meanings: 'piece of cloth',
      },
      {
        kanji: '切',
        reading: 'せつ',
        meanings: 'eager',
      },
      {
        kanji: '切実',
        reading: 'せつじつ',
        meanings: 'earnest',
      },
      {
        kanji: '懇切',
        reading: 'こんせつ',
        meanings: 'kind and careful (instruction',
      },
      {
        kanji: '哀切',
        reading: 'あいせつ',
        meanings: 'pathetic',
      },
      {
        kanji: '家財一切',
        reading: 'かざいいっさい',
        meanings: 'complete set of household goods',
      },
      {
        kanji: '費用一切',
        reading: 'ひよういっさい',
        meanings: 'all expenses',
      },
    ],
  },
  {
    kanjiName: '少',
    strokes: 4,
    grade: 2,
    freq: 287,
    meanings: ['Few', 'Little'],
    on: ['しょう'],
    kun: ['すく.ない', 'すこ.し'],
    wk_meanings: ['Few', '^A Little'],
    jlpt: 4,
    quizAnswers: ['Few', 'Defeat', 'Smelting', 'In The Event'],
    similars: [
      {
        kanji: '小',
        meaning: 'little',
      },
      {
        kanji: '劣',
        meaning: 'inferiority',
      },
      {
        kanji: '妙',
        meaning: 'exquisite',
      },
      {
        kanji: '抄',
        meaning: 'extract',
      },
      {
        kanji: '歩',
        meaning: 'walk',
      },
      {
        kanji: '父',
        meaning: 'father',
      },
      {
        kanji: '刃',
        meaning: 'blade',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '死',
        meaning: 'death',
      },
      {
        kanji: '灰',
        meaning: 'ashes',
      },
    ],
    usedIn: [
      {
        kanji: '少ない',
        reading: 'すくない',
        meanings: 'few',
      },
      {
        kanji: '少し',
        reading: 'すこし',
        meanings: 'a little',
      },
      {
        kanji: '少しも',
        reading: 'すこしも',
        meanings: '(not) at all',
      },
      {
        kanji: '少',
        reading: 'しょう',
        meanings: 'small',
      },
      {
        kanji: '少輔',
        reading: 'しょう',
        meanings: 'assistant vice-minister (ritsuryō system',
      },
      {
        kanji: '最少',
        reading: 'さいしょう',
        meanings: 'fewest',
      },
      {
        kanji: '過少',
        reading: 'かしょう',
        meanings: 'too few',
      },
    ],
  },
  {
    kanjiName: '心',
    strokes: 4,
    grade: 2,
    freq: 157,
    meanings: ['Heart', 'Mind', 'Spirit', 'Heart Radical (no. 61)'],
    on: ['しん'],
    kun: ['こころ', '-ごころ'],
    wk_meanings: ['Heart'],
    jlpt: 4,
    quizAnswers: ['Fragrance', 'Regular', 'Heart', 'Eternity'],
    similars: [
      {
        kanji: '必',
        meaning: 'invariably',
      },
      {
        kanji: '忍',
        meaning: 'endure',
      },
      {
        kanji: '志',
        meaning: 'intention',
      },
      {
        kanji: '忌',
        meaning: 'mourning',
      },
      {
        kanji: '応',
        meaning: 'apply',
      },
      {
        kanji: '忘',
        meaning: 'forget',
      },
      {
        kanji: '念',
        meaning: 'wish',
      },
      {
        kanji: '忠',
        meaning: 'loyalty',
      },
      {
        kanji: '怒',
        meaning: 'angry',
      },
      {
        kanji: '思',
        meaning: 'think',
      },
    ],
    usedIn: [
      {
        kanji: '心',
        reading: 'こころ',
        meanings: 'mind',
      },
      {
        kanji: '心意気',
        reading: 'こころいき',
        meanings: 'spirit',
      },
      {
        kanji: '我が心',
        reading: 'わがこころ',
        meanings: 'my heart',
      },
      {
        kanji: '静心',
        reading: 'しずごころ',
        meanings: 'calm mind',
      },
      {
        kanji: '心',
        reading: 'しん',
        meanings: 'heart',
      },
      {
        kanji: '心から',
        reading: 'こころから',
        meanings: "from the bottom of one's heart",
      },
      {
        kanji: '重心',
        reading: 'じゅうしん',
        meanings: 'centre of gravity (center)',
      },
      {
        kanji: '会心',
        reading: 'かいしん',
        meanings: 'congeniality',
      },
    ],
  },
  {
    kanjiName: '方',
    strokes: 4,
    grade: 2,
    freq: 46,
    meanings: ['Direction', 'Person', 'Alternative'],
    on: ['ほう'],
    kun: ['かた', '-かた', '-がた'],
    wk_meanings: ['Direction', '^Way'],
    jlpt: 4,
    quizAnswers: ['Offer', 'Direction', 'Arrow', 'Weight'],
    similars: [
      {
        kanji: '市',
        meaning: 'market',
      },
      {
        kanji: '立',
        meaning: 'stand up',
      },
      {
        kanji: '芳',
        meaning: 'perfume',
      },
      {
        kanji: '妨',
        meaning: 'disturb',
      },
      {
        kanji: '坊',
        meaning: 'boy',
      },
      {
        kanji: '防',
        meaning: 'ward off',
      },
      {
        kanji: '亡',
        meaning: 'deceased',
      },
      {
        kanji: '放',
        meaning: 'set free',
      },
      {
        kanji: '房',
        meaning: 'tassel',
      },
      {
        kanji: '考',
        meaning: 'consider',
      },
    ],
    usedIn: [
      {
        kanji: '方',
        reading: 'かた',
        meanings: 'direction',
      },
      {
        kanji: '方々',
        reading: 'かたがた',
        meanings: 'people',
      },
      {
        kanji: '親方',
        reading: 'おやかた',
        meanings: 'master',
      },
      {
        kanji: '出方',
        reading: 'でかた',
        meanings: 'attitude',
      },
      {
        kanji: '方',
        reading: 'ほう',
        meanings: 'direction',
      },
      {
        kanji: '方言',
        reading: 'ほうげん',
        meanings: 'dialect',
      },
      {
        kanji: '途方',
        reading: 'とほう',
        meanings: 'way',
      },
      {
        kanji: '右方',
        reading: 'うほう',
        meanings: 'right side',
      },
    ],
  },
  {
    kanjiName: '牛',
    strokes: 4,
    grade: 2,
    freq: 1202,
    meanings: ['Cow'],
    on: ['ぎゅう'],
    kun: ['うし'],
    wk_meanings: ['Cow'],
    jlpt: 4,
    quizAnswers: ['Cow', 'Discipline', 'Separation', 'Conclusion'],
    similars: [
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '半',
        meaning: 'half',
      },
      {
        kanji: '斤',
        meaning: 'axe',
      },
      {
        kanji: '毛',
        meaning: 'fur',
      },
      {
        kanji: '手',
        meaning: 'hand',
      },
      {
        kanji: '升',
        meaning: 'measuring box',
      },
      {
        kanji: '千',
        meaning: 'thousand',
      },
      {
        kanji: '干',
        meaning: 'dry',
      },
      {
        kanji: '件',
        meaning: 'affair',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
    ],
    usedIn: [
      {
        kanji: '牛',
        reading: 'うし',
        meanings: 'cattle (Bos taurus)',
      },
      {
        kanji: '牛車',
        reading: 'ぎゅうしゃ',
        meanings: 'ox carriage (for Heian-era nobles)',
      },
      {
        kanji: '去勢牛',
        reading: 'きょせいうし',
        meanings: 'ox',
      },
      {
        kanji: '特牛',
        reading: 'こというし',
        meanings: 'strong bull',
      },
      {
        kanji: '妓夫',
        reading: 'ぎゅう',
        meanings: 'pimp',
      },
      {
        kanji: '牛',
        reading: 'うし',
        meanings: 'cattle (Bos taurus)',
      },
      {
        kanji: '肉牛',
        reading: 'にくぎゅう',
        meanings: 'beef cattle',
      },
      {
        kanji: '海牛',
        reading: 'かいぎゅう',
        meanings: 'sirenian (any aquatic mammal of order Sirenia',
      },
    ],
  },
  {
    kanjiName: '止',
    strokes: 4,
    grade: 2,
    freq: 310,
    meanings: ['Stop', 'Halt'],
    on: ['し'],
    kun: [
      'と.まる',
      '-ど.まり',
      'と.める',
      '-と.める',
      '-ど.め',
      'とど.める',
      'とど.め',
      'とど.まる',
      'や.める',
      'や.む',
      '-や.む',
      'よ.す',
      '-さ.す',
      '-さ.し',
    ],
    wk_meanings: ['Stop'],
    jlpt: 4,
    quizAnswers: ['Offer', 'Stop', 'Counter For Pairs', 'India'],
    similars: [
      {
        kanji: '正',
        meaning: 'correct',
      },
      {
        kanji: '企',
        meaning: 'undertake',
      },
      {
        kanji: '皿',
        meaning: 'dish',
      },
      {
        kanji: '丘',
        meaning: 'hill',
      },
      {
        kanji: '兵',
        meaning: 'soldier',
      },
      {
        kanji: '肯',
        meaning: 'agreement',
      },
      {
        kanji: '血',
        meaning: 'blood',
      },
      {
        kanji: '延',
        meaning: 'prolong',
      },
      {
        kanji: '征',
        meaning: 'subjugate',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
    ],
    usedIn: [
      {
        kanji: '止まる',
        reading: 'とまる',
        meanings: 'to stop (moving)',
      },
      {
        kanji: '止める',
        reading: 'とめる',
        meanings: 'to stop',
      },
      {
        kanji: '留める',
        reading: 'とどめる',
        meanings: 'to stop',
      },
      {
        kanji: '止め',
        reading: 'とどめ',
        meanings: 'finishing blow',
      },
      {
        kanji: '留める',
        reading: 'とどめる',
        meanings: 'to stop',
      },
      {
        kanji: '止まる',
        reading: 'とどまる',
        meanings: 'to remain',
      },
      {
        kanji: 'とどまるところを知らない',
        reading: 'とどまるところをしらない',
        meanings: 'knowing no bounds',
      },
      {
        kanji: '止める',
        reading: 'やめる',
        meanings: 'to stop (an activity)',
      },
      {
        kanji: '止む',
        reading: 'やむ',
        meanings: 'to cease',
      },
      {
        kanji: 'やむを得ない',
        reading: 'やむをえない',
        meanings: 'cannot be helped',
      },
      {
        kanji: '止す',
        reading: 'よす',
        meanings: 'to stop (doing)',
      },
      {
        kanji: '止血',
        reading: 'しけつ',
        meanings: 'stopping of bleeding',
      },
      {
        kanji: '止音器',
        reading: 'しおんき',
        meanings: '(piano) damper',
      },
      {
        kanji: '抑止',
        reading: 'よくし',
        meanings: 'check',
      },
      {
        kanji: '解止',
        reading: 'かいし',
        meanings: 'termination',
      },
    ],
  },
  {
    kanjiName: '兄',
    strokes: 5,
    grade: 2,
    freq: 1219,
    meanings: ['Elder Brother', 'Big Brother'],
    on: ['けい', 'きょう'],
    kun: ['あに'],
    wk_meanings: ['Older Brother', '^Big Brother', '^Elder Brother'],
    jlpt: 4,
    quizAnswers: ['Elder Brother', 'Command', 'Do', 'Illusion'],
    similars: [
      {
        kanji: '史',
        meaning: 'history',
      },
      {
        kanji: '克',
        meaning: 'overcome',
      },
      {
        kanji: '吏',
        meaning: 'officer',
      },
      {
        kanji: '吸',
        meaning: 'suck',
      },
      {
        kanji: '況',
        meaning: 'condition',
      },
      {
        kanji: '口',
        meaning: 'mouth',
      },
      {
        kanji: '中',
        meaning: 'in',
      },
      {
        kanji: '号',
        meaning: 'nickname',
      },
      {
        kanji: '豆',
        meaning: 'beans',
      },
      {
        kanji: '呉',
        meaning: 'give',
      },
    ],
    usedIn: [
      {
        kanji: '兄',
        reading: 'あに',
        meanings: 'older brother',
      },
      {
        kanji: '兄貴',
        reading: 'あにき',
        meanings: 'elder brother',
      },
      {
        kanji: '中の兄',
        reading: 'なかのあに',
        meanings: 'middle brother',
      },
      {
        kanji: '義理の兄',
        reading: 'ぎりのあに',
        meanings: "one's brother-in-law",
      },
      {
        kanji: '兄',
        reading: 'けい',
        meanings: 'you',
      },
      {
        kanji: '兄弟',
        reading: 'きょうだい',
        meanings: 'siblings',
      },
      {
        kanji: '実兄',
        reading: 'じっけい',
        meanings: 'biological older brother',
      },
      {
        kanji: '父兄',
        reading: 'ふけい',
        meanings: 'guardians',
      },
      {
        kanji: '兄弟',
        reading: 'きょうだい',
        meanings: 'siblings',
      },
      {
        kanji: '兄姉',
        reading: 'けいし',
        meanings: 'brother and sister',
      },
    ],
  },
  {
    kanjiName: '冬',
    strokes: 5,
    grade: 2,
    freq: 1090,
    meanings: ['Winter'],
    on: ['とう'],
    kun: ['ふゆ'],
    wk_meanings: ['Winter'],
    jlpt: 4,
    quizAnswers: ['Furthermore', 'Stiff', 'Hamper', 'Winter'],
    similars: [
      {
        kanji: '夕',
        meaning: 'evening',
      },
      {
        kanji: '久',
        meaning: 'long time',
      },
      {
        kanji: '処',
        meaning: 'dispose',
      },
      {
        kanji: '返',
        meaning: 'return',
      },
      {
        kanji: '尽',
        meaning: 'exhaust',
      },
      {
        kanji: '各',
        meaning: 'each',
      },
      {
        kanji: '終',
        meaning: 'end',
      },
      {
        kanji: '怒',
        meaning: 'angry',
      },
      {
        kanji: '条',
        meaning: 'article',
      },
      {
        kanji: '努',
        meaning: 'toil',
      },
    ],
    usedIn: [
      {
        kanji: '冬',
        reading: 'ふゆ',
        meanings: 'winter',
      },
      {
        kanji: '冬場',
        reading: 'ふゆば',
        meanings: 'wintertime',
      },
      {
        kanji: '初冬',
        reading: 'しょとう',
        meanings: 'early winter',
      },
      {
        kanji: '毎冬',
        reading: 'まいふゆ',
        meanings: 'every winter',
      },
      {
        kanji: '冬季',
        reading: 'とうき',
        meanings: '(season of) winter',
      },
      {
        kanji: '冬期',
        reading: 'とうき',
        meanings: 'winter',
      },
      {
        kanji: '越冬',
        reading: 'えっとう',
        meanings: 'passing the winter',
      },
      {
        kanji: '春夏秋冬',
        reading: 'しゅんかしゅうとう',
        meanings: 'spring',
      },
    ],
  },
  {
    kanjiName: '古',
    strokes: 5,
    grade: 2,
    freq: 509,
    meanings: ['Old'],
    on: ['こ'],
    kun: ['ふる.い', 'ふる-', '-ふる.す'],
    wk_meanings: ['Old'],
    jlpt: 4,
    quizAnswers: ['Spare Time', 'Coloring', 'Base', 'Old'],
    similars: [
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '乱',
        meaning: 'riot',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '克',
        meaning: 'overcome',
      },
      {
        kanji: '苦',
        meaning: 'suffering',
      },
      {
        kanji: '若',
        meaning: 'young',
      },
      {
        kanji: '舎',
        meaning: 'cottage',
      },
      {
        kanji: '居',
        meaning: 'reside',
      },
    ],
    usedIn: [
      {
        kanji: '古い',
        reading: 'ふるい',
        meanings: 'old',
      },
      {
        kanji: '古家',
        reading: 'ふるいえ',
        meanings: 'old house',
      },
      {
        kanji: '古参',
        reading: 'こさん',
        meanings: 'seniority',
      },
      {
        kanji: '古今',
        reading: 'ここん',
        meanings: 'ancient and modern times',
      },
      {
        kanji: '蒙古',
        reading: 'もうこ',
        meanings: 'Mongolia (region)',
      },
      {
        kanji: '懐古',
        reading: 'かいこ',
        meanings: 'reminiscence',
      },
    ],
  },
  {
    kanjiName: '台',
    strokes: 5,
    grade: 2,
    freq: 262,
    meanings: ['Pedestal', 'A Stand', 'Counter For Machines And Vehicles'],
    on: ['だい', 'たい'],
    kun: ['うてな', 'われ', 'つかさ'],
    wk_meanings: ['Machine'],
    jlpt: 4,
    quizAnswers: ['Crop', 'Misfortune', 'Pedestal', 'Deplete'],
    similars: [
      {
        kanji: '名',
        meaning: 'name',
      },
      {
        kanji: '始',
        meaning: 'commence',
      },
      {
        kanji: '治',
        meaning: 'reign',
      },
      {
        kanji: '占',
        meaning: 'fortune-telling',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '古',
        meaning: 'old',
      },
      {
        kanji: '句',
        meaning: 'phrase',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '口',
        meaning: 'mouth',
      },
      {
        kanji: '加',
        meaning: 'add',
      },
    ],
    usedIn: [
      {
        kanji: '台',
        reading: 'うてな',
        meanings: 'tower',
      },
      {
        kanji: '弾正台',
        reading: 'だんじょうだい',
        meanings: 'Imperial Prosecuting and Investigating Office (1869-1871)',
      },
      {
        kanji: '台',
        reading: 'だい',
        meanings: 'stand',
      },
      {
        kanji: '台車',
        reading: 'だいしゃ',
        meanings: 'platform truck',
      },
      {
        kanji: '管区気象台',
        reading: 'かんくきしょうだい',
        meanings: 'district meteorological observatory',
      },
      {
        kanji: '気象台',
        reading: 'きしょうだい',
        meanings: 'meteorological observatory',
      },
      {
        kanji: '台',
        reading: 'たい',
        meanings: 'Taiwan',
      },
      {
        kanji: '台頭',
        reading: 'たいとう',
        meanings: 'rise (e.g. of a movement)',
      },
      {
        kanji: '屋台',
        reading: 'やたい',
        meanings: 'cart (esp. a food cart)',
      },
      {
        kanji: '最後の舞台',
        reading: 'さいごのぶたい',
        meanings: 'final performance',
      },
    ],
  },
  {
    kanjiName: '広',
    strokes: 5,
    grade: 2,
    freq: 263,
    meanings: ['Wide', 'Broad', 'Spacious'],
    on: ['こう'],
    kun: ['ひろ.い', 'ひろ.まる', 'ひろ.める', 'ひろ.がる', 'ひろ.げる'],
    wk_meanings: ['Wide'],
    jlpt: 4,
    quizAnswers: ['Bright', 'Account', 'Wide', 'Tide Over'],
    similars: [
      {
        kanji: '玄',
        meaning: 'mysterious',
      },
      {
        kanji: '拡',
        meaning: 'broaden',
      },
      {
        kanji: '去',
        meaning: 'gone',
      },
      {
        kanji: '庁',
        meaning: 'government office',
      },
      {
        kanji: '六',
        meaning: 'six',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
      {
        kanji: '不',
        meaning: 'negative',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '芸',
        meaning: 'technique',
      },
    ],
    usedIn: [
      {
        kanji: '広い',
        reading: 'ひろい',
        meanings: 'spacious',
      },
      {
        kanji: '広い支持',
        reading: 'ひろいしじ',
        meanings: 'broad support',
      },
      {
        kanji: '広まる',
        reading: 'ひろまる',
        meanings: 'to spread',
      },
      {
        kanji: '広める',
        reading: 'ひろめる',
        meanings: 'to spread',
      },
      {
        kanji: '広がる',
        reading: 'ひろがる',
        meanings: 'to spread (out)',
      },
      {
        kanji: '広げる',
        reading: 'ひろげる',
        meanings: 'to spread',
      },
      {
        kanji: '広告',
        reading: 'こうこく',
        meanings: 'advertisement',
      },
      {
        kanji: '広域',
        reading: 'こういき',
        meanings: 'wide area',
      },
      {
        kanji: '曠々',
        reading: 'こうこう',
        meanings: 'extensive',
      },
    ],
  },
  {
    kanjiName: '用',
    strokes: 5,
    grade: 2,
    freq: 107,
    meanings: ['Utilize', 'Business', 'Service', 'Use', 'Employ'],
    on: ['よう'],
    kun: ['もち.いる'],
    wk_meanings: ['Task', '^Use'],
    jlpt: 4,
    quizAnswers: ['Going', 'Deposit', 'Utilize', 'Clan'],
    similars: [
      {
        kanji: '月',
        meaning: 'month',
      },
      {
        kanji: '肝',
        meaning: 'liver',
      },
      {
        kanji: '肌',
        meaning: 'texture',
      },
      {
        kanji: '服',
        meaning: 'clothing',
      },
      {
        kanji: '甲',
        meaning: 'armor',
      },
      {
        kanji: '申',
        meaning: 'have the honor to',
      },
      {
        kanji: '身',
        meaning: 'somebody',
      },
      {
        kanji: '伸',
        meaning: 'expand',
      },
      {
        kanji: '削',
        meaning: 'plane',
      },
      {
        kanji: '前',
        meaning: 'in front',
      },
    ],
    usedIn: [
      {
        kanji: '用いる',
        reading: 'もちいる',
        meanings: 'to use',
      },
      {
        kanji: '用',
        reading: 'よう',
        meanings: 'business',
      },
      {
        kanji: '用意',
        reading: 'ようい',
        meanings: 'preparation',
      },
      {
        kanji: '登用',
        reading: 'とうよう',
        meanings: 'appointment',
      },
      {
        kanji: '効用',
        reading: 'こうよう',
        meanings: 'use',
      },
    ],
  },
  {
    kanjiName: '世',
    strokes: 5,
    grade: 3,
    freq: 135,
    meanings: ['Generation', 'World', 'Society', 'Public'],
    on: ['せい', 'せ', 'そう'],
    kun: ['よ'],
    wk_meanings: ['World', '^Generation'],
    jlpt: 4,
    quizAnswers: ['Sigh Of Admiration', 'Generation', 'Weight', 'Generosity'],
    similars: [
      {
        kanji: '可',
        meaning: 'can',
      },
      {
        kanji: '再',
        meaning: 'again',
      },
      {
        kanji: '両',
        meaning: 'both',
      },
      {
        kanji: '吏',
        meaning: 'officer',
      },
      {
        kanji: '度',
        meaning: 'degrees',
      },
      {
        kanji: '革',
        meaning: 'leather',
      },
      {
        kanji: '豆',
        meaning: 'beans',
      },
      {
        kanji: '乱',
        meaning: 'riot',
      },
      {
        kanji: '束',
        meaning: 'bundle',
      },
      {
        kanji: '何',
        meaning: 'what',
      },
    ],
    usedIn: [
      {
        kanji: '世',
        reading: 'よ',
        meanings: 'world',
      },
      {
        kanji: '世の中',
        reading: 'よのなか',
        meanings: 'society',
      },
      {
        kanji: '千代',
        reading: 'ちよ',
        meanings: 'thousand years',
      },
      {
        kanji: '君が代',
        reading: 'きみがよ',
        meanings: 'Imperial reign',
      },
      {
        kanji: '世',
        reading: 'せい',
        meanings: 'counter for generations',
      },
      {
        kanji: '世紀',
        reading: 'せいき',
        meanings: 'century',
      },
      {
        kanji: '近世',
        reading: 'きんせい',
        meanings: 'recent past',
      },
      {
        kanji: '創世',
        reading: 'そうせい',
        meanings: 'creation of the world',
      },
      {
        kanji: '世',
        reading: 'せい',
        meanings: 'counter for generations',
      },
      {
        kanji: '世紀',
        reading: 'せいき',
        meanings: 'century',
      },
      {
        kanji: '夜店',
        reading: 'よみせ',
        meanings: 'night stall',
      },
      {
        kanji: '救世',
        reading: 'きゅうせい',
        meanings: 'salvation',
      },
    ],
  },
  {
    kanjiName: '主',
    strokes: 5,
    grade: 3,
    freq: 95,
    meanings: ['Lord', 'Chief', 'Master', 'Main Thing', 'Principal'],
    on: ['しゅ', 'す', 'しゅう'],
    kun: ['ぬし', 'おも', 'あるじ'],
    wk_meanings: ['Master', '^Main'],
    jlpt: 4,
    quizAnswers: ['Tower', 'Sit Down', 'Ugly', 'Lord'],
    similars: [
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
      {
        kanji: '全',
        meaning: 'whole',
      },
      {
        kanji: '注',
        meaning: 'pour',
      },
      {
        kanji: '性',
        meaning: 'sex',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '往',
        meaning: 'journey',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
    ],
    usedIn: [
      {
        kanji: '主',
        reading: 'ぬし',
        meanings: 'head (of a household',
      },
      {
        kanji: '馬主',
        reading: 'うまぬし',
        meanings: 'owner of a horse (esp. racehorse)',
      },
      {
        kanji: '船主',
        reading: 'せんしゅ',
        meanings: 'shipowner',
      },
      {
        kanji: '主',
        reading: 'おも',
        meanings: 'chief',
      },
      {
        kanji: '主に',
        reading: 'おもに',
        meanings: 'mainly',
      },
      {
        kanji: '主',
        reading: 'あるじ',
        meanings: 'head (of a household)',
      },
      {
        kanji: '女主',
        reading: 'おんなあるじ',
        meanings: 'female owner',
      },
      {
        kanji: '坊の主',
        reading: 'ぼうのあるじ',
        meanings: 'master of the priests quarters',
      },
      {
        kanji: '主',
        reading: 'しゅ',
        meanings: "(one's) master",
      },
      {
        kanji: '首位',
        reading: 'しゅい',
        meanings: 'first place',
      },
      {
        kanji: '自主',
        reading: 'じしゅ',
        meanings: 'independence',
      },
      {
        kanji: '盟主',
        reading: 'めいしゅ',
        meanings: 'leader (of an alliance)',
      },
      {
        kanji: '主',
        reading: 'す',
        meanings: 'honorific (or familiar) suffix used after a name',
      },
      {
        kanji: '法主',
        reading: 'ほっす',
        meanings: 'high priest',
      },
      {
        kanji: '座主',
        reading: 'ざす',
        meanings: "temple's head priest",
      },
      {
        kanji: '主',
        reading: 'しゅ',
        meanings: "(one's) master",
      },
      {
        kanji: '主従',
        reading: 'しゅうじゅう',
        meanings: 'master and servant',
      },
    ],
  },
  {
    kanjiName: '代',
    strokes: 5,
    grade: 3,
    freq: 66,
    meanings: [
      'Substitute',
      'Change',
      'Convert',
      'Replace',
      'Period',
      'Age',
      'Counter For Decades Of Ages, Eras, Etc.',
      'Generation',
      'Charge',
      'Rate',
      'Fee',
    ],
    on: ['だい', 'たい'],
    kun: [
      'か.わる',
      'かわ.る',
      'かわ.り',
      'か.わり',
      '-がわ.り',
      '-が.わり',
      'か.える',
      'よ',
      'しろ',
    ],
    wk_meanings: ['Substitute', '^Replace', '^Period', '^Age'],
    jlpt: 4,
    quizAnswers: ['Substitute', 'Few', 'Annoyed', 'Chord'],
    similars: [
      {
        kanji: '伐',
        meaning: 'fell',
      },
      {
        kanji: '付',
        meaning: 'adhere',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '伝',
        meaning: 'transmit',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
      {
        kanji: '仏',
        meaning: 'Buddha',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '氏',
        meaning: 'family name',
      },
      {
        kanji: '斥',
        meaning: 'reject',
      },
      {
        kanji: '低',
        meaning: 'lower',
      },
    ],
    usedIn: [
      {
        kanji: '替わる',
        reading: 'かわる',
        meanings: 'to succeed',
      },
      {
        kanji: '代わる代わる',
        reading: 'かわるがわる',
        meanings: 'alternately',
      },
      {
        kanji: '替わる',
        reading: 'かわる',
        meanings: 'to succeed',
      },
      {
        kanji: '代わる代わる',
        reading: 'かわるがわる',
        meanings: 'alternately',
      },
      {
        kanji: '代わり',
        reading: 'かわり',
        meanings: 'substitute',
      },
      {
        kanji: '変わり目',
        reading: 'かわりめ',
        meanings: 'turning point',
      },
      {
        kanji: '代わり',
        reading: 'かわり',
        meanings: 'substitute',
      },
      {
        kanji: '変わり目',
        reading: 'かわりめ',
        meanings: 'turning point',
      },
      {
        kanji: '換える',
        reading: 'かえる',
        meanings: 'to replace',
      },
      {
        kanji: '世',
        reading: 'よ',
        meanings: 'world',
      },
      {
        kanji: '代々',
        reading: 'よよ',
        meanings: 'for generations',
      },
      {
        kanji: '千代',
        reading: 'ちよ',
        meanings: 'thousand years',
      },
      {
        kanji: '君が代',
        reading: 'きみがよ',
        meanings: 'Imperial reign',
      },
      {
        kanji: '代',
        reading: 'しろ',
        meanings: 'substitution',
      },
      {
        kanji: '代物',
        reading: 'しろもの',
        meanings: 'article',
      },
      {
        kanji: '地代',
        reading: 'ちだい',
        meanings: 'land rent',
      },
      {
        kanji: '阿代',
        reading: 'あしろ',
        meanings: 'Ophidion asiro (species of cusk eel)',
      },
      {
        kanji: '代',
        reading: 'だい',
        meanings: 'charge',
      },
      {
        kanji: '代官',
        reading: 'だいかん',
        meanings: 'local governor (Edo period)',
      },
      {
        kanji: '大時代',
        reading: 'おおじだい',
        meanings: 'old-fashioned',
      },
      {
        kanji: '次代',
        reading: 'じだい',
        meanings: 'the next era',
      },
      {
        kanji: '代謝',
        reading: 'たいしゃ',
        meanings: 'metabolism',
      },
      {
        kanji: '代赭',
        reading: 'たいしゃ',
        meanings: 'red ocher (ochre)',
      },
      {
        kanji: '永代',
        reading: 'えいたい',
        meanings: 'permanence',
      },
      {
        kanji: '希代',
        reading: 'きたい',
        meanings: 'uncommon',
      },
    ],
  },
  {
    kanjiName: '写',
    strokes: 5,
    grade: 3,
    freq: 453,
    meanings: ['Copy', 'Be Photographed', 'Describe'],
    on: ['しゃ', 'じゃ'],
    kun: ['うつ.す', 'うつ.る', 'うつ-', 'うつ.し'],
    wk_meanings: ['Copy'],
    jlpt: 4,
    quizAnswers: ['Treetops', 'Game-hunting', 'Help', 'Copy'],
    similars: [
      {
        kanji: '安',
        meaning: 'relax',
      },
      {
        kanji: '字',
        meaning: 'character',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '与',
        meaning: 'bestow',
      },
      {
        kanji: '冗',
        meaning: 'superfluous',
      },
      {
        kanji: '止',
        meaning: 'stop',
      },
      {
        kanji: '正',
        meaning: 'correct',
      },
      {
        kanji: '丘',
        meaning: 'hill',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '実',
        meaning: 'reality',
      },
    ],
    usedIn: [
      {
        kanji: '写す',
        reading: 'うつす',
        meanings: 'to copy',
      },
      {
        kanji: '写る',
        reading: 'うつる',
        meanings: 'to be photographed',
      },
      {
        kanji: '写し',
        reading: 'うつし',
        meanings: 'copy',
      },
      {
        kanji: '映し出す',
        reading: 'うつしだす',
        meanings: 'to project',
      },
      {
        kanji: '写真集',
        reading: 'しゃしんしゅう',
        meanings: 'photo book (esp. one featuring photos of female celebrities',
      },
      {
        kanji: '写真',
        reading: 'しゃしん',
        meanings: 'photograph',
      },
      {
        kanji: '実写',
        reading: 'じっしゃ',
        meanings: 'on-the-spot filming or photography',
      },
      {
        kanji: '活写',
        reading: 'かっしゃ',
        meanings: 'vivid description',
      },
    ],
  },
  {
    kanjiName: '去',
    strokes: 5,
    grade: 3,
    freq: 440,
    meanings: [
      'Gone',
      'Past',
      'Quit',
      'Leave',
      'Elapse',
      'Eliminate',
      'Divorce',
    ],
    on: ['きょ', 'こ'],
    kun: ['さ.る', '-さ.る'],
    wk_meanings: ['Past'],
    jlpt: 4,
    quizAnswers: ['Gone', 'Involve', 'Get Together', 'Intercede'],
    similars: [
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '芸',
        meaning: 'technique',
      },
      {
        kanji: '却',
        meaning: 'instead',
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
      {
        kanji: '共',
        meaning: 'together',
      },
      {
        kanji: '法',
        meaning: 'method',
      },
      {
        kanji: '弦',
        meaning: 'bowstring',
      },
      {
        kanji: '拡',
        meaning: 'broaden',
      },
      {
        kanji: '払',
        meaning: 'pay',
      },
      {
        kanji: '広',
        meaning: 'wide',
      },
    ],
    usedIn: [
      {
        kanji: '去る',
        reading: 'さる',
        meanings: 'to leave',
      },
      {
        kanji: '去る者追わず',
        reading: 'さるものおわず',
        meanings: 'do not chase the one who leaves',
      },
      {
        kanji: '去年',
        reading: 'きょねん',
        meanings: 'last year',
      },
      {
        kanji: '去就',
        reading: 'きょしゅう',
        meanings: 'leaving or staying',
      },
      {
        kanji: '消去',
        reading: 'しょうきょ',
        meanings: 'erasure',
      },
      {
        kanji: '国外退去',
        reading: 'こくがいたいきょ',
        meanings: 'deportation',
      },
      {
        kanji: '去年',
        reading: 'きょねん',
        meanings: 'last year',
      },
      {
        kanji: '大過去',
        reading: 'だいかこ',
        meanings: 'past perfect tense',
      },
      {
        kanji: '不定過去',
        reading: 'ふていかこ',
        meanings: 'aorist tense (in Greek)',
      },
    ],
  },
  {
    kanjiName: '字',
    strokes: 6,
    grade: 1,
    freq: 485,
    meanings: ['Character', 'Letter', 'Word', 'Section Of Village'],
    on: ['じ'],
    kun: ['あざ', 'あざな', '-な'],
    wk_meanings: ['Letter', '^Character', '^Symbol'],
    jlpt: 4,
    quizAnswers: ['Character', 'Feel Bitter', 'Pointed', 'Warehouse'],
    similars: [
      {
        kanji: '安',
        meaning: 'relax',
      },
      {
        kanji: '学',
        meaning: 'study',
      },
      {
        kanji: '孝',
        meaning: 'filial piety',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
      {
        kanji: '享',
        meaning: 'enjoy',
      },
      {
        kanji: '子',
        meaning: 'child',
      },
      {
        kanji: '好',
        meaning: 'fond',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '宜',
        meaning: 'best regards',
      },
      {
        kanji: '守',
        meaning: 'guard',
      },
    ],
    usedIn: [
      {
        kanji: '字',
        reading: 'あざ',
        meanings: 'section of village',
      },
      {
        kanji: '字',
        reading: 'あざな',
        meanings:
          'Chinese courtesy name (name formerly given to adult Chinese men',
      },
      {
        kanji: '大字',
        reading: 'おおあざ',
        meanings: 'larger section (of village)',
      },
      {
        kanji: '小字',
        reading: 'こあざ',
        meanings: 'small administrative unit (of a village)',
      },
      {
        kanji: '字',
        reading: 'あざな',
        meanings:
          'Chinese courtesy name (name formerly given to adult Chinese men',
      },
      {
        kanji: '字',
        reading: 'じ',
        meanings: 'character (esp. kanji)',
      },
      {
        kanji: '字形',
        reading: 'じけい',
        meanings: 'character style',
      },
      {
        kanji: '題字',
        reading: 'だいじ',
        meanings: 'title lettering',
      },
      {
        kanji: '英字',
        reading: 'えいじ',
        meanings: 'English letter',
      },
    ],
  },
  {
    kanjiName: '早',
    strokes: 6,
    grade: 1,
    freq: 402,
    meanings: ['Early', 'Fast'],
    on: ['そう', 'さっ'],
    kun: ['はや.い', 'はや', 'はや-', 'はや.まる', 'はや.める', 'さ-'],
    wk_meanings: ['Early', '^Fast', '^Quick'],
    jlpt: 4,
    quizAnswers: ['Cause', 'Early', 'Laziness', 'Chastise'],
    similars: [
      {
        kanji: '車',
        meaning: 'car',
      },
      {
        kanji: '申',
        meaning: 'have the honor to',
      },
      {
        kanji: '甲',
        meaning: 'armor',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '卓',
        meaning: 'eminent',
      },
      {
        kanji: '昇',
        meaning: 'rise up',
      },
      {
        kanji: '町',
        meaning: 'town',
      },
      {
        kanji: '里',
        meaning: 'ri',
      },
      {
        kanji: '昨',
        meaning: 'yesterday',
      },
      {
        kanji: '卑',
        meaning: 'lowly',
      },
    ],
    usedIn: [
      {
        kanji: '早い',
        reading: 'はやい',
        meanings: 'fast',
      },
      {
        kanji: '早いこと',
        reading: 'はやいこと',
        meanings: 'quickly',
      },
      {
        kanji: '早',
        reading: 'はや',
        meanings: 'already',
      },
      {
        kanji: '甲矢',
        reading: 'はや',
        meanings:
          'arrow with feathers that curve to the left (the first of two arrows to be fired)',
      },
      {
        kanji: '千早',
        reading: 'ちはや',
        meanings: 'thin',
      },
      {
        kanji: '早々',
        reading: 'はやはや',
        meanings: 'quickly',
      },
      {
        kanji: '早まる',
        reading: 'はやまる',
        meanings: 'to be brought forward (e.g. by three hours)',
      },
      {
        kanji: '早める',
        reading: 'はやめる',
        meanings: 'to bring forward (e.g. by 3 hours)',
      },
      {
        kanji: '早急',
        reading: 'そうきゅう',
        meanings: 'immediate',
      },
      {
        kanji: '早期',
        reading: 'そうき',
        meanings: 'early stage',
      },
      {
        kanji: '時期早々',
        reading: 'じきそうそう',
        meanings: 'premature',
      },
      {
        kanji: '尚早',
        reading: 'しょうそう',
        meanings: 'prematurity',
      },
      {
        kanji: '早急',
        reading: 'そうきゅう',
        meanings: 'immediate',
      },
      {
        kanji: '早速',
        reading: 'さっそく',
        meanings: 'at once',
      },
    ],
  },
  {
    kanjiName: '町',
    strokes: 7,
    grade: 1,
    freq: 292,
    meanings: ['Town', 'Village', 'Block', 'Street'],
    on: ['ちょう'],
    kun: ['まち'],
    wk_meanings: ['Town'],
    jlpt: 4,
    quizAnswers: ['Condition', 'Town', 'Exquisite', 'Target'],
    similars: [
      {
        kanji: '田',
        meaning: 'rice field',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '早',
        meaning: 'early',
      },
      {
        kanji: '男',
        meaning: 'male',
      },
      {
        kanji: '卑',
        meaning: 'lowly',
      },
      {
        kanji: '画',
        meaning: 'brush-stroke',
      },
      {
        kanji: '具',
        meaning: 'tool',
      },
      {
        kanji: '財',
        meaning: 'property',
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
    ],
    usedIn: [
      {
        kanji: '町',
        reading: 'まち',
        meanings: 'town',
      },
      {
        kanji: '街角',
        reading: 'まちかど',
        meanings: 'street corner',
      },
      {
        kanji: '室町',
        reading: 'むろまち',
        meanings: 'Muromachi period (1336-1573)',
      },
      {
        kanji: '門前町',
        reading: 'もんぜんまち',
        meanings: 'town originally built around a temple or shrine',
      },
      {
        kanji: '町',
        reading: 'ちょう',
        meanings: 'town',
      },
      {
        kanji: '町議会',
        reading: 'ちょうぎかい',
        meanings: 'town council',
      },
      {
        kanji: '同町',
        reading: 'どうちょう',
        meanings: 'the same town',
      },
      {
        kanji: '門前町',
        reading: 'もんぜんまち',
        meanings: 'town originally built around a temple or shrine',
      },
    ],
  },
  {
    kanjiName: '花',
    strokes: 7,
    grade: 1,
    freq: 578,
    meanings: ['Flower'],
    on: ['か', 'け'],
    kun: ['はな'],
    wk_meanings: ['Flower'],
    jlpt: 4,
    quizAnswers: ['Needle', 'Implore', 'Flower', 'Bend'],
    similars: [
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '茶',
        meaning: 'tea',
      },
      {
        kanji: '茂',
        meaning: 'overgrown',
      },
      {
        kanji: '若',
        meaning: 'young',
      },
      {
        kanji: '克',
        meaning: 'overcome',
      },
      {
        kanji: '考',
        meaning: 'consider',
      },
      {
        kanji: '地',
        meaning: 'ground',
      },
      {
        kanji: '共',
        meaning: 'together',
      },
      {
        kanji: '売',
        meaning: 'sell',
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)',
      },
    ],
    usedIn: [
      {
        kanji: '花',
        reading: 'はな',
        meanings: 'flower',
      },
      {
        kanji: '花形',
        reading: 'はながた',
        meanings: 'floral pattern',
      },
      {
        kanji: '菜の花',
        reading: 'なのはな',
        meanings: 'rape blossoms',
      },
      {
        kanji: '紅花',
        reading: 'べにばな',
        meanings: 'safflower (Carthamus tinctorius)',
      },
      {
        kanji: '花形',
        reading: 'はながた',
        meanings: 'floral pattern',
      },
      {
        kanji: '花園',
        reading: 'はなぞの',
        meanings: 'flower garden',
      },
      {
        kanji: '献花',
        reading: 'けんか',
        meanings: 'flower offering',
      },
      {
        kanji: '紅花',
        reading: 'べにばな',
        meanings: 'safflower (Carthamus tinctorius)',
      },
      {
        kanji: '花かご',
        reading: 'はなかご',
        meanings: 'flower basket',
      },
      {
        kanji: '花瓶',
        reading: 'けびょう',
        meanings:
          'vase used to hold flower offerings (often made of gilded copper)',
      },
      {
        kanji: '天花',
        reading: 'てんげ',
        meanings: 'flowers that bloom in the heavens',
      },
    ],
  },
  {
    kanjiName: '赤',
    strokes: 7,
    grade: 1,
    freq: 584,
    meanings: ['Red'],
    on: ['せき', 'しゃく'],
    kun: ['あか', 'あか-', 'あか.い', 'あか.らむ', 'あか.らめる'],
    wk_meanings: ['Red'],
    jlpt: 4,
    quizAnswers: ['Assemble', 'Pamper', 'Red', 'Catch'],
    similars: [
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '考',
        meaning: 'consider',
      },
      {
        kanji: '示',
        meaning: 'show',
      },
      {
        kanji: '赦',
        meaning: 'pardon',
      },
      {
        kanji: '茂',
        meaning: 'overgrown',
      },
      {
        kanji: '表',
        meaning: 'surface',
      },
      {
        kanji: '恭',
        meaning: 'respect',
      },
      {
        kanji: '栽',
        meaning: 'plantation',
      },
      {
        kanji: '孝',
        meaning: 'filial piety',
      },
    ],
    usedIn: [
      {
        kanji: '赤',
        reading: 'あか',
        meanings: 'red',
      },
      {
        kanji: '銅',
        reading: 'どう',
        meanings: 'copper (Cu)',
      },
      {
        kanji: '紅赤',
        reading: 'べにあか',
        meanings: 'beniaka',
      },
      {
        kanji: '真赤',
        reading: 'まあか',
        meanings: 'bright red',
      },
      {
        kanji: '赤い',
        reading: 'あかい',
        meanings: 'red',
      },
      {
        kanji: '赤色',
        reading: 'あかいろ',
        meanings: 'red',
      },
      {
        kanji: '赤らむ',
        reading: 'あからむ',
        meanings: 'to become red',
      },
      {
        kanji: '赤らめる',
        reading: 'あからめる',
        meanings: 'to blush',
      },
      {
        kanji: '赤軍',
        reading: 'せきぐん',
        meanings: 'Red Army (Soviet Union',
      },
      {
        kanji: '赤外線',
        reading: 'せきがいせん',
        meanings: 'infrared rays',
      },
      {
        kanji: '七赤',
        reading: 'しちせき',
        meanings:
          'seventh of nine traditional astrological signs (corresponding to Venus and west)',
      },
      {
        kanji: '日赤',
        reading: 'にっせき',
        meanings: 'Japanese Red Cross Society (abbr)',
      },
      {
        kanji: '赤銅',
        reading: 'しゃくどう',
        meanings: 'shakudo',
      },
      {
        kanji: '赤銅色',
        reading: 'しゃくどういろ',
        meanings: 'brown',
      },
    ],
  },
  {
    kanjiName: '足',
    strokes: 7,
    grade: 1,
    freq: 343,
    meanings: ['Leg', 'Foot', 'Be Sufficient', 'Counter For Pairs Of Footwear'],
    on: ['そく'],
    kun: ['あし', 'た.りる', 'た.る', 'た.す'],
    wk_meanings: ['Foot', '^Leg', '^Sufficient'],
    jlpt: 4,
    quizAnswers: ['Leg', 'Speech', 'Protrude', 'Volume'],
    similars: [
      {
        kanji: '促',
        meaning: 'stimulate',
      },
      {
        kanji: '史',
        meaning: 'history',
      },
      {
        kanji: '吹',
        meaning: 'blow',
      },
      {
        kanji: '衷',
        meaning: 'inmost',
      },
      {
        kanji: '味',
        meaning: 'flavor',
      },
      {
        kanji: '蚊',
        meaning: 'mosquito',
      },
      {
        kanji: '吏',
        meaning: 'officer',
      },
      {
        kanji: '叫',
        meaning: 'shout',
      },
      {
        kanji: '吸',
        meaning: 'suck',
      },
      {
        kanji: '呉',
        meaning: 'give',
      },
    ],
    usedIn: [
      {
        kanji: '足',
        reading: 'あし',
        meanings: 'foot',
      },
      {
        kanji: '足跡',
        reading: 'あしあと',
        meanings: 'footprints',
      },
      {
        kanji: '出足',
        reading: 'であし',
        meanings: 'turnout (of people)',
      },
      {
        kanji: '客足',
        reading: 'きゃくあし',
        meanings: 'customer traffic',
      },
      {
        kanji: '足りる',
        reading: 'たりる',
        meanings: 'to be sufficient',
      },
      {
        kanji: '足る',
        reading: 'たる',
        meanings: 'to be sufficient',
      },
      {
        kanji: '足るを知る',
        reading: 'たるをしる',
        meanings: 'to know one has enough',
      },
      {
        kanji: '足す',
        reading: 'たす',
        meanings: 'to add (numbers)',
      },
      {
        kanji: '足',
        reading: 'そく',
        meanings: 'counter for pairs of socks',
      },
      {
        kanji: '足跡',
        reading: 'あしあと',
        meanings: 'footprints',
      },
      {
        kanji: '俊足',
        reading: 'しゅんそく',
        meanings: 'swiftness of foot',
      },
      {
        kanji: '土足',
        reading: 'どそく',
        meanings: 'shod feet',
      },
    ],
  },
  {
    kanjiName: '不',
    strokes: 4,
    grade: 4,
    freq: 101,
    meanings: ['Negative', 'Non-', 'Bad', 'Ugly', 'Clumsy'],
    on: ['ふ', 'ぶ'],
    kun: [],
    wk_meanings: ['Not'],
    jlpt: 4,
    quizAnswers: ['Clarify', 'Feather', 'Selection', 'Negative'],
    similars: [
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '下',
        meaning: 'below',
      },
      {
        kanji: '朴',
        meaning: 'crude',
      },
      {
        kanji: '広',
        meaning: 'wide',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '斥',
        meaning: 'reject',
      },
      {
        kanji: '否',
        meaning: 'negate',
      },
      {
        kanji: '戒',
        meaning: 'commandment',
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls',
      },
    ],
    usedIn: [
      {
        kanji: '不',
        reading: 'ふ',
        meanings: 'un-',
      },
      {
        kanji: '不安',
        reading: 'ふあん',
        meanings: 'anxiety',
      },
      {
        kanji: '意味不',
        reading: 'いみふ',
        meanings: 'of uncertain meaning',
      },
      {
        kanji: '社不',
        reading: 'しゃふ',
        meanings: 'person unfit for society',
      },
      {
        kanji: '無',
        reading: 'ぶ',
        meanings: 'un-',
      },
      {
        kanji: '不気味',
        reading: 'ぶきみ',
        meanings: 'weird',
      },
    ],
  },
  {
    kanjiName: '仕',
    strokes: 5,
    grade: 3,
    freq: 439,
    meanings: ['Attend', 'Doing', 'Official', 'Serve'],
    on: ['し', 'じ'],
    kun: ['つか.える'],
    wk_meanings: ['Doing', '^Do'],
    jlpt: 4,
    quizAnswers: ['Sudden', 'Attend', 'Choice', 'Noes'],
    similars: [
      {
        kanji: '在',
        meaning: 'exist',
      },
      {
        kanji: '任',
        meaning: 'responsibility',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '佐',
        meaning: 'assistant',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
      {
        kanji: '年',
        meaning: 'year',
      },
      {
        kanji: '全',
        meaning: 'whole',
      },
      {
        kanji: '侮',
        meaning: 'scorn',
      },
      {
        kanji: '往',
        meaning: 'journey',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
    ],
    usedIn: [
      {
        kanji: '仕える',
        reading: 'つかえる',
        meanings: 'to serve',
      },
      {
        kanji: '仕',
        reading: 'し',
        meanings: 'official',
      },
      {
        kanji: '試合',
        reading: 'しあい',
        meanings: 'match',
      },
      {
        kanji: '勤労奉仕',
        reading: 'きんろうほうし',
        meanings: 'labor service',
      },
      {
        kanji: '中仕',
        reading: 'なかし',
        meanings: 'longshoreman',
      },
      {
        kanji: '仕込み',
        reading: 'じこみ',
        meanings: 'learned at ...',
      },
      {
        kanji: '仕丁',
        reading: 'しちょう',
        meanings: 'men pressed into forced labor (ritsuryō system)',
      },
      {
        kanji: '致仕',
        reading: 'ちし',
        meanings: 'resignation',
      },
    ],
  },
  {
    kanjiName: '会',
    strokes: 6,
    grade: 2,
    freq: 4,
    meanings: ['Meeting', 'Meet', 'Party', 'Association', 'Interview', 'Join'],
    on: ['かい', 'え'],
    kun: ['あ.う', 'あ.わせる', 'あつ.まる'],
    wk_meanings: ['Meet'],
    jlpt: 4,
    quizAnswers: ['Feelings', 'Haiku', 'Meeting', 'Ring'],
    similars: [
      {
        kanji: '伝',
        meaning: 'transmit',
      },
      {
        kanji: '余',
        meaning: 'too much',
      },
      {
        kanji: '公',
        meaning: 'public',
      },
      {
        kanji: '金',
        meaning: 'gold',
      },
      {
        kanji: '芸',
        meaning: 'technique',
      },
      {
        kanji: '陰',
        meaning: 'shade',
      },
      {
        kanji: '絵',
        meaning: 'picture',
      },
      {
        kanji: '途',
        meaning: 'route',
      },
      {
        kanji: '手',
        meaning: 'hand',
      },
      {
        kanji: '念',
        meaning: 'wish',
      },
    ],
    usedIn: [
      {
        kanji: '会う',
        reading: 'あう',
        meanings: 'to meet',
      },
      {
        kanji: '逢うは別れの始め',
        reading: 'あうはわかれのはじめ',
        meanings: 'we meet only to part',
      },
      {
        kanji: '会わせる',
        reading: 'あわせる',
        meanings: 'to make (someone) to meet',
      },
      {
        kanji: '会',
        reading: 'かい',
        meanings: 'meeting',
      },
      {
        kanji: '会員',
        reading: 'かいいん',
        meanings: 'member',
      },
      {
        kanji: '例会',
        reading: 'れいかい',
        meanings: 'regular meeting',
      },
      {
        kanji: '際会',
        reading: 'さいかい',
        meanings: 'meeting',
      },
      {
        kanji: '会',
        reading: 'え',
        meanings: 'gathering (esp. Buddhist',
      },
      {
        kanji: '会釈',
        reading: 'えしゃく',
        meanings: 'slight bow (as a greeting or sign of gratitude)',
      },
      {
        kanji: '法会',
        reading: 'ほうえ',
        meanings: 'Buddhist service (e.g. memorial service)',
      },
      {
        kanji: '御斎会',
        reading: 'ごさいえ',
        meanings:
          'imperial event at which high monks recited the Golden Light Sutra to pray for national security and good harvests (held annually at the palace from the 8th to the 14th of the first lunar month',
      },
    ],
  },
  {
    kanjiName: '同',
    strokes: 6,
    grade: 2,
    freq: 15,
    meanings: ['Same', 'Agree', 'Equal'],
    on: ['どう'],
    kun: ['おな.じ'],
    wk_meanings: ['Same'],
    jlpt: 4,
    quizAnswers: ['Same', 'Real', 'Obi', 'Step'],
    similars: [
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '向',
        meaning: 'yonder',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '司',
        meaning: 'director',
      },
      {
        kanji: '洞',
        meaning: 'den',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '固',
        meaning: 'harden',
      },
      {
        kanji: '周',
        meaning: 'circumference',
      },
    ],
    usedIn: [
      {
        kanji: '同じ',
        reading: 'おなじ',
        meanings: 'same',
      },
      {
        kanji: '同じく',
        reading: 'おなじく',
        meanings: 'in the same way',
      },
      {
        kanji: '同',
        reading: 'どう',
        meanings: 'the same',
      },
      {
        kanji: '同意',
        reading: 'どうい',
        meanings: 'agreement',
      },
      {
        kanji: '合同',
        reading: 'ごうどう',
        meanings: 'combination',
      },
      {
        kanji: '大同',
        reading: 'だいどう',
        meanings: 'general resemblance',
      },
    ],
  },
  {
    kanjiName: '多',
    strokes: 6,
    grade: 2,
    freq: 139,
    meanings: ['Many', 'Frequent', 'Much'],
    on: ['た'],
    kun: ['おお.い', 'まさ.に', 'まさ.る'],
    wk_meanings: ['Many', '^Much', '^Lots Of'],
    jlpt: 4,
    quizAnswers: ['Many', 'Core', 'Overdo', 'Obey'],
    similars: [
      {
        kanji: '外',
        meaning: 'outside',
      },
      {
        kanji: '卵',
        meaning: 'egg',
      },
      {
        kanji: '移',
        meaning: 'shift',
      },
      {
        kanji: '処',
        meaning: 'dispose',
      },
      {
        kanji: '例',
        meaning: 'example',
      },
      {
        kanji: '予',
        meaning: 'beforehand',
      },
      {
        kanji: '受',
        meaning: 'accept',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '父',
        meaning: 'father',
      },
      {
        kanji: '死',
        meaning: 'death',
      },
    ],
    usedIn: [
      {
        kanji: '多い',
        reading: 'おおい',
        meanings: 'many',
      },
      {
        kanji: '大いに',
        reading: 'おおいに',
        meanings: 'very',
      },
      {
        kanji: '多',
        reading: 'た',
        meanings: 'multi-',
      },
      {
        kanji: '多角',
        reading: 'たかく',
        meanings: 'many-sided',
      },
      {
        kanji: '過多',
        reading: 'かた',
        meanings: 'excess',
      },
      {
        kanji: '最多',
        reading: 'さいた',
        meanings: 'most (numerous)',
      },
    ],
  },
  {
    kanjiName: '考',
    strokes: 6,
    grade: 2,
    freq: 196,
    meanings: ['Consider', 'Think Over'],
    on: ['こう'],
    kun: ['かんが.える', 'かんが.え'],
    wk_meanings: ['Think', '^Consider'],
    jlpt: 4,
    quizAnswers: ['Account', 'Consider', 'Guess', 'Safeguard'],
    similars: [
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '赤',
        meaning: 'red',
      },
      {
        kanji: '拷',
        meaning: 'torture',
      },
      {
        kanji: '表',
        meaning: 'surface',
      },
      {
        kanji: '売',
        meaning: 'sell',
      },
      {
        kanji: '攻',
        meaning: 'aggression',
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)',
      },
      {
        kanji: '麦',
        meaning: 'barley',
      },
      {
        kanji: '花',
        meaning: 'flower',
      },
      {
        kanji: '坂',
        meaning: 'slope',
      },
    ],
    usedIn: [
      {
        kanji: '考える',
        reading: 'かんがえる',
        meanings: 'to think (about',
      },
      {
        kanji: '考え',
        reading: 'かんがえ',
        meanings: 'thinking',
      },
      {
        kanji: '考え方',
        reading: 'かんがえかた',
        meanings: 'way of thinking',
      },
      {
        kanji: '考',
        reading: 'こう',
        meanings: 'thought',
      },
      {
        kanji: '考古学',
        reading: 'こうこがく',
        meanings: 'archaeology',
      },
      {
        kanji: '備考',
        reading: 'びこう',
        meanings: 'note (for reference)',
      },
      {
        kanji: '論考',
        reading: 'ろんこう',
        meanings: 'study (of)',
      },
    ],
  },
  {
    kanjiName: '肉',
    strokes: 6,
    grade: 2,
    freq: 986,
    meanings: ['Meat'],
    on: ['にく'],
    kun: ['しし'],
    wk_meanings: ['Meat'],
    jlpt: 4,
    quizAnswers: ['Meat', 'Rich', 'Devil', 'Circle'],
    similars: [
      {
        kanji: '将',
        meaning: 'leader',
      },
      {
        kanji: '内',
        meaning: 'inside',
      },
      {
        kanji: '少',
        meaning: 'few',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '桃',
        meaning: 'peach',
      },
      {
        kanji: '父',
        meaning: 'father',
      },
      {
        kanji: '帆',
        meaning: 'sail',
      },
      {
        kanji: '雨',
        meaning: 'rain',
      },
      {
        kanji: '呼',
        meaning: 'call',
      },
      {
        kanji: '移',
        meaning: 'shift',
      },
    ],
    usedIn: [
      {
        kanji: '肉',
        reading: 'しし',
        meanings: 'flesh (esp. of an animal)',
      },
      {
        kanji: '肉合い',
        reading: 'ししあい',
        meanings: 'fleshiness',
      },
      {
        kanji: '鹿',
        reading: 'かのしし',
        meanings: 'venison',
      },
      {
        kanji: '脯',
        reading: 'ほしし',
        meanings: 'dried meat',
      },
      {
        kanji: '肉',
        reading: 'にく',
        meanings: 'flesh',
      },
      {
        kanji: '肉親',
        reading: 'にくしん',
        meanings: 'blood relationship',
      },
      {
        kanji: '食肉',
        reading: 'しょくにく',
        meanings: 'meat (for consumption)',
      },
      {
        kanji: '中肉',
        reading: 'ちゅうにく',
        meanings: 'medium build',
      },
    ],
  },
  {
    kanjiName: '自',
    strokes: 6,
    grade: 2,
    freq: 19,
    meanings: ['Oneself'],
    on: ['じ', 'し'],
    kun: ['みずか.ら', 'おの.ずから', 'おの.ずと'],
    wk_meanings: ['Self'],
    jlpt: 4,
    quizAnswers: ['Oneself', 'Person In Charge', 'Narrative', 'Two'],
    similars: [
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '白',
        meaning: 'white',
      },
      {
        kanji: '但',
        meaning: 'however',
      },
      {
        kanji: '伸',
        meaning: 'expand',
      },
      {
        kanji: '甲',
        meaning: 'armor',
      },
      {
        kanji: '臭',
        meaning: 'stinking',
      },
      {
        kanji: '省',
        meaning: 'government ministry',
      },
      {
        kanji: '首',
        meaning: 'neck',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
    ],
    usedIn: [
      {
        kanji: '自ら',
        reading: 'みずから',
        meanings: 'oneself',
      },
      {
        kanji: '自ら進んで',
        reading: 'みずからすすんで',
        meanings: 'by choice',
      },
      {
        kanji: '自ずから',
        reading: 'おのずから',
        meanings: 'naturally',
      },
      {
        kanji: '自ずから明らか',
        reading: 'おのずからあきらか',
        meanings: 'self-evident',
      },
      {
        kanji: '自ずと',
        reading: 'おのずと',
        meanings: 'naturally',
      },
      {
        kanji: '自',
        reading: 'じ',
        meanings: 'self-',
      },
      {
        kanji: '自営',
        reading: 'じえい',
        meanings: "running one's own business",
      },
      {
        kanji: '出自',
        reading: 'しゅつじ',
        meanings: 'origin',
      },
      {
        kanji: '海自',
        reading: 'かいじ',
        meanings: 'Maritime Self-Defense Force',
      },
      {
        kanji: '自然界',
        reading: 'しぜんかい',
        meanings: 'nature',
      },
      {
        kanji: '自然',
        reading: 'しぜん',
        meanings: 'nature',
      },
      {
        kanji: '己がじし',
        reading: 'おのがじし',
        meanings: 'each (and every one)',
      },
    ],
  },
  {
    kanjiName: '色',
    strokes: 6,
    grade: 2,
    freq: 621,
    meanings: ['Color'],
    on: ['しょく', 'しき'],
    kun: ['いろ'],
    wk_meanings: ['Color'],
    jlpt: 4,
    quizAnswers: ['Discarding', 'Disorder', 'Color', 'Bestow'],
    similars: [
      {
        kanji: '免',
        meaning: 'excuse',
      },
      {
        kanji: '肥',
        meaning: 'fertilizer',
      },
      {
        kanji: '角',
        meaning: 'angle',
      },
      {
        kanji: '把',
        meaning: 'grasp',
      },
      {
        kanji: '絶',
        meaning: 'discontinue',
      },
      {
        kanji: '声',
        meaning: 'voice',
      },
      {
        kanji: '晩',
        meaning: 'nightfall',
      },
      {
        kanji: '鬼',
        meaning: 'ghost',
      },
      {
        kanji: '勉',
        meaning: 'exertion',
      },
      {
        kanji: '届',
        meaning: 'deliver',
      },
    ],
    usedIn: [
      {
        kanji: '色',
        reading: 'いろ',
        meanings: 'colour',
      },
      {
        kanji: '色合い',
        reading: 'いろあい',
        meanings: 'colouring',
      },
      {
        kanji: '紫色',
        reading: 'むらさきいろ',
        meanings: 'purple',
      },
      {
        kanji: '橙色',
        reading: 'だいだいいろ',
        meanings: 'orange (color',
      },
      {
        kanji: '色',
        reading: 'しょく',
        meanings: 'counter for colours',
      },
      {
        kanji: '紫色',
        reading: 'むらさきいろ',
        meanings: 'purple',
      },
      {
        kanji: '彩色',
        reading: 'さいしき',
        meanings: 'colouring',
      },
      {
        kanji: '色',
        reading: 'しき',
        meanings: 'rupa (form)',
      },
      {
        kanji: '色彩',
        reading: 'しきさい',
        meanings: 'colour',
      },
      {
        kanji: '彩色',
        reading: 'さいしき',
        meanings: 'colouring',
      },
      {
        kanji: '極彩色',
        reading: 'ごくさいしき',
        meanings: 'richly colored',
      },
    ],
  },
  {
    kanjiName: '体',
    strokes: 7,
    grade: 2,
    freq: 88,
    meanings: ['Body', 'Substance', 'Object', 'Reality', 'Counter For Images'],
    on: ['たい', 'てい'],
    kun: ['からだ', 'かたち'],
    wk_meanings: ['Body'],
    jlpt: 4,
    quizAnswers: ['Body', 'Back', 'Protect', 'Pay'],
    similars: [
      {
        kanji: '休',
        meaning: 'rest',
      },
      {
        kanji: '本',
        meaning: 'book',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '使',
        meaning: 'use',
      },
      {
        kanji: '季',
        meaning: 'seasons',
      },
      {
        kanji: '委',
        meaning: 'committee',
      },
      {
        kanji: '俸',
        meaning: 'stipend',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
    ],
    usedIn: [
      {
        kanji: '体',
        reading: 'からだ',
        meanings: 'body',
      },
      {
        kanji: '体つき',
        reading: 'からだつき',
        meanings: 'body build',
      },
      {
        kanji: 'お体',
        reading: 'おからだ',
        meanings: 'body',
      },
      {
        kanji: '御体',
        reading: 'おんからだ',
        meanings: 'body of Christ (Eucharist)',
      },
      {
        kanji: '形体',
        reading: 'なりかたち',
        meanings: "one's appearance",
      },
      {
        kanji: '体',
        reading: 'たい',
        meanings: 'body',
      },
      {
        kanji: '体育',
        reading: 'たいいく',
        meanings: 'physical education',
      },
      {
        kanji: '生体',
        reading: 'せいたい',
        meanings: 'organism',
      },
      {
        kanji: '解体',
        reading: 'かいたい',
        meanings: 'demolition',
      },
      {
        kanji: '体',
        reading: 'てい',
        meanings: 'appearance',
      },
      {
        kanji: '体裁',
        reading: 'ていさい',
        meanings: '(outward) appearance',
      },
      {
        kanji: '身体',
        reading: 'しんたい',
        meanings: 'body',
      },
      {
        kanji: '風体',
        reading: 'ふうてい',
        meanings: 'appearance',
      },
    ],
  },
  {
    kanjiName: '作',
    strokes: 7,
    grade: 2,
    freq: 103,
    meanings: ['Make', 'Production', 'Prepare', 'Build'],
    on: ['さく', 'さ'],
    kun: ['つく.る', 'つく.り', '-づく.り'],
    wk_meanings: ['Make'],
    jlpt: 4,
    quizAnswers: ['Ship', 'Retreat', 'Make', 'Dormitory'],
    similars: [
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '和',
        meaning: 'harmony',
      },
      {
        kanji: '倍',
        meaning: 'double',
      },
      {
        kanji: '俳',
        meaning: 'haiku',
      },
      {
        kanji: '倹',
        meaning: 'frugal',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '斥',
        meaning: 'reject',
      },
      {
        kanji: '同',
        meaning: 'same',
      },
      {
        kanji: '斤',
        meaning: 'axe',
      },
    ],
    usedIn: [
      {
        kanji: '作る',
        reading: 'つくる',
        meanings: 'to make',
      },
      {
        kanji: '作り',
        reading: 'つくり',
        meanings: 'making',
      },
      {
        kanji: '作り上げる',
        reading: 'つくりあげる',
        meanings: 'to build up',
      },
      {
        kanji: '作',
        reading: 'さく',
        meanings: 'work (e.g. of art)',
      },
      {
        kanji: '作柄',
        reading: 'さくがら',
        meanings: 'crop conditions',
      },
      {
        kanji: '大作',
        reading: 'たいさく',
        meanings: 'large-scale work',
      },
      {
        kanji: '遺作',
        reading: 'いさく',
        meanings: 'posthumous works',
      },
      {
        kanji: '作',
        reading: 'さく',
        meanings: 'work (e.g. of art)',
      },
      {
        kanji: '作業',
        reading: 'さぎょう',
        meanings: 'work',
      },
      {
        kanji: '所作',
        reading: 'しょさ',
        meanings: 'conduct',
      },
      {
        kanji: '安定操作',
        reading: 'あんていそうさ',
        meanings: 'stabilizing (stock) transaction',
      },
    ],
  },
  {
    kanjiName: '図',
    strokes: 7,
    grade: 2,
    freq: 539,
    meanings: ['Map', 'Drawing', 'Plan', 'Extraordinary', 'Audacious'],
    on: ['ず', 'と'],
    kun: ['え', 'はか.る'],
    wk_meanings: ['Diagram'],
    jlpt: 4,
    quizAnswers: ['Mature', 'Take Off', 'Sign Of The Ram', 'Map'],
    similars: [
      {
        kanji: '因',
        meaning: 'cause',
      },
      {
        kanji: '困',
        meaning: 'quandary',
      },
      {
        kanji: '四',
        meaning: 'four',
      },
      {
        kanji: '囚',
        meaning: 'captured',
      },
      {
        kanji: '囲',
        meaning: 'surround',
      },
      {
        kanji: '明',
        meaning: 'bright',
      },
      {
        kanji: '菌',
        meaning: 'germ',
      },
      {
        kanji: '姻',
        meaning: 'matrimony',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '肉',
        meaning: 'meat',
      },
    ],
    usedIn: [
      {
        kanji: '図る',
        reading: 'はかる',
        meanings: 'to plan',
      },
      {
        kanji: '図',
        reading: 'ず',
        meanings: 'drawing',
      },
      {
        kanji: '図鑑',
        reading: 'ずかん',
        meanings: 'pictorial book',
      },
      {
        kanji: '一途',
        reading: 'いちず',
        meanings: 'wholehearted',
      },
      {
        kanji: '構図',
        reading: 'こうず',
        meanings: 'composition (of painting)',
      },
      {
        kanji: '図書館',
        reading: 'としょかん',
        meanings: 'library',
      },
      {
        kanji: '図書',
        reading: 'としょ',
        meanings: 'books',
      },
      {
        kanji: '異図',
        reading: 'いと',
        meanings: 'treasonable intent',
      },
      {
        kanji: '隠された意図',
        reading: 'かくされたいと',
        meanings: 'hidden agenda',
      },
    ],
  },
  {
    kanjiName: '売',
    strokes: 7,
    grade: 2,
    freq: 202,
    meanings: ['Sell'],
    on: ['ばい'],
    kun: ['う.る', 'う.れる'],
    wk_meanings: ['Sell'],
    jlpt: 4,
    quizAnswers: ['Well', 'War', 'Sell', 'Appreciate'],
    similars: [
      {
        kanji: '壱',
        meaning: 'one (in documents)',
      },
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '沈',
        meaning: 'sink',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '赤',
        meaning: 'red',
      },
      {
        kanji: '考',
        meaning: 'consider',
      },
      {
        kanji: '花',
        meaning: 'flower',
      },
      {
        kanji: '走',
        meaning: 'run',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '志',
        meaning: 'intention',
      },
    ],
    usedIn: [
      {
        kanji: '売る',
        reading: 'うる',
        meanings: 'to sell',
      },
      {
        kanji: '売れる',
        reading: 'うれる',
        meanings: 'to sell (well)',
      },
      {
        kanji: '売春',
        reading: 'ばいしゅん',
        meanings: 'prostitution',
      },
      {
        kanji: '売却',
        reading: 'ばいきゃく',
        meanings: 'selling off',
      },
      {
        kanji: '乱売',
        reading: 'らんばい',
        meanings: 'underselling',
      },
      {
        kanji: '転売',
        reading: 'てんばい',
        meanings: 'resale',
      },
    ],
  },
  {
    kanjiName: '弟',
    strokes: 7,
    grade: 2,
    freq: 1161,
    meanings: ['Younger Brother', 'Faithful Service To Elders'],
    on: ['てい', 'だい', 'で'],
    kun: ['おとうと'],
    wk_meanings: ['Younger Brother', '^Little Brother'],
    jlpt: 4,
    quizAnswers: ['Cape', 'Fracture', 'Younger Brother', 'Sport'],
    similars: [
      {
        kanji: '兼',
        meaning: 'concurrently',
      },
      {
        kanji: '半',
        meaning: 'half',
      },
      {
        kanji: '引',
        meaning: 'pull',
      },
      {
        kanji: '羊',
        meaning: 'sheep',
      },
      {
        kanji: '判',
        meaning: 'judgement',
      },
      {
        kanji: '弔',
        meaning: 'condolences',
      },
      {
        kanji: '米',
        meaning: 'rice',
      },
      {
        kanji: '第',
        meaning: 'No.',
      },
      {
        kanji: '妹',
        meaning: 'younger sister',
      },
      {
        kanji: '炉',
        meaning: 'hearth',
      },
    ],
    usedIn: [
      {
        kanji: '弟',
        reading: 'おとうと',
        meanings: 'younger brother',
      },
      {
        kanji: '弟君',
        reading: 'おとうとぎみ',
        meanings: 'younger brother',
      },
      {
        kanji: '弟',
        reading: 'おとうと',
        meanings: 'younger brother',
      },
      {
        kanji: '弟子',
        reading: 'でし',
        meanings: 'pupil',
      },
      {
        kanji: '実弟',
        reading: 'じってい',
        meanings: 'biological younger brother',
      },
      {
        kanji: '子弟',
        reading: 'してい',
        meanings: 'children',
      },
      {
        kanji: '親兄弟',
        reading: 'おやきょうだい',
        meanings: 'parents and siblings',
      },
      {
        kanji: '姉弟',
        reading: 'してい',
        meanings: 'older sister and younger brother',
      },
      {
        kanji: '弟子',
        reading: 'でし',
        meanings: 'pupil',
      },
      {
        kanji: '弟子入り',
        reading: 'でしいり',
        meanings: 'becoming a pupil (of)',
      },
    ],
  },
  {
    kanjiName: '社',
    strokes: 7,
    grade: 2,
    freq: 21,
    meanings: ['Company', 'Firm', 'Office', 'Association', 'Shrine'],
    on: ['しゃ'],
    kun: ['やしろ'],
    wk_meanings: ['Company'],
    jlpt: 4,
    quizAnswers: ['Luck', 'Opportunity', 'Company', 'Meaning'],
    similars: [
      {
        kanji: '祉',
        meaning: 'welfare',
      },
      {
        kanji: '祈',
        meaning: 'pray',
      },
      {
        kanji: '怪',
        meaning: 'suspicious',
      },
      {
        kanji: '往',
        meaning: 'journey',
      },
      {
        kanji: '注',
        meaning: 'pour',
      },
      {
        kanji: '性',
        meaning: 'sex',
      },
      {
        kanji: '祥',
        meaning: 'auspicious',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
      {
        kanji: '礼',
        meaning: 'salute',
      },
      {
        kanji: '壮',
        meaning: 'robust',
      },
    ],
    usedIn: [
      {
        kanji: '社',
        reading: 'やしろ',
        meanings: '(Shinto) shrine',
      },
      {
        kanji: '大社',
        reading: 'たいしゃ',
        meanings: 'grand shrine',
      },
      {
        kanji: '村のお社',
        reading: 'むらのおやしろ',
        meanings: 'village shrine',
      },
      {
        kanji: '社',
        reading: 'しゃ',
        meanings: 'company',
      },
      {
        kanji: '社員',
        reading: 'しゃいん',
        meanings: 'company employee',
      },
      {
        kanji: '大社',
        reading: 'たいしゃ',
        meanings: 'grand shrine',
      },
      {
        kanji: '親会社',
        reading: 'おやがいしゃ',
        meanings: 'parent company',
      },
    ],
  },
  {
    kanjiName: '言',
    strokes: 7,
    grade: 2,
    freq: 83,
    meanings: ['Say', 'Word'],
    on: ['げん', 'ごん'],
    kun: ['い.う', 'こと'],
    wk_meanings: ['Say'],
    jlpt: 4,
    quizAnswers: [
      'Sign Of The Snake Or Serpent',
      'Bowstring',
      'Say',
      'Absolve',
    ],
    similars: [
      {
        kanji: '訂',
        meaning: 'revise',
      },
      {
        kanji: '計',
        meaning: 'plot',
      },
      {
        kanji: '信',
        meaning: 'faith',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '君',
        meaning: 'mister',
      },
      {
        kanji: '託',
        meaning: 'consign',
      },
      {
        kanji: '害',
        meaning: 'harm',
      },
      {
        kanji: '討',
        meaning: 'chastise',
      },
      {
        kanji: '訓',
        meaning: 'instruction',
      },
    ],
    usedIn: [
      {
        kanji: '言う',
        reading: 'いう',
        meanings: 'to say',
      },
      {
        kanji: '言うまでもない',
        reading: 'いうまでもない',
        meanings: 'goes without saying',
      },
      {
        kanji: '言',
        reading: 'げん',
        meanings: 'word',
      },
      {
        kanji: '言葉',
        reading: 'ことば',
        meanings: 'language',
      },
      {
        kanji: '禍言',
        reading: 'まがごと',
        meanings: 'ominous word',
      },
      {
        kanji: '二言',
        reading: 'ふたこと',
        meanings: 'two words',
      },
      {
        kanji: '言',
        reading: 'げん',
        meanings: 'word',
      },
      {
        kanji: '言及',
        reading: 'げんきゅう',
        meanings: 'reference',
      },
      {
        kanji: '過言',
        reading: 'かごん',
        meanings: 'exaggeration',
      },
      {
        kanji: '狂言',
        reading: 'きょうげん',
        meanings: 'kyogen',
      },
      {
        kanji: '言語',
        reading: 'げんご',
        meanings: 'language',
      },
      {
        kanji: '言下',
        reading: 'げんか',
        meanings: 'promptly',
      },
      {
        kanji: '過言',
        reading: 'かごん',
        meanings: 'exaggeration',
      },
      {
        kanji: '二言',
        reading: 'にごん',
        meanings: 'double-dealing',
      },
    ],
  },
  {
    kanjiName: '走',
    strokes: 7,
    grade: 2,
    freq: 626,
    meanings: ['Run'],
    on: ['そう'],
    kun: ['はし.る'],
    wk_meanings: ['Run'],
    jlpt: 4,
    quizAnswers: ['Room', 'Joy', 'Dismissal', 'Run'],
    similars: [
      {
        kanji: '赴',
        meaning: 'proceed',
      },
      {
        kanji: '英',
        meaning: 'England',
      },
      {
        kanji: '表',
        meaning: 'surface',
      },
      {
        kanji: '起',
        meaning: 'rouse',
      },
      {
        kanji: '徒',
        meaning: 'on foot',
      },
      {
        kanji: '超',
        meaning: 'transcend',
      },
      {
        kanji: '越',
        meaning: 'surpass',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '衣',
        meaning: 'garment',
      },
    ],
    usedIn: [
      {
        kanji: '走る',
        reading: 'はしる',
        meanings: 'to run',
      },
      {
        kanji: '走',
        reading: 'そう',
        meanings: 'run',
      },
      {
        kanji: '走行',
        reading: 'そうこう',
        meanings: 'running (of a car',
      },
      {
        kanji: '代走',
        reading: 'だいそう',
        meanings: 'substitute runner',
      },
      {
        kanji: '快走',
        reading: 'かいそう',
        meanings: 'fast moving',
      },
    ],
  },
  {
    kanjiName: '近',
    strokes: 7,
    grade: 2,
    freq: 194,
    meanings: ['Near', 'Early', 'Akin', 'Tantamount'],
    on: ['きん', 'こん'],
    kun: ['ちか.い'],
    wk_meanings: ['Near', '^Close'],
    jlpt: 4,
    quizAnswers: ['Full Moon', 'Near', 'Fresh', 'Jump'],
    similars: [
      {
        kanji: '迅',
        meaning: 'swift',
      },
      {
        kanji: '斥',
        meaning: 'reject',
      },
      {
        kanji: '迎',
        meaning: 'welcome',
      },
      {
        kanji: '逝',
        meaning: 'departed',
      },
      {
        kanji: '逓',
        meaning: 'relay',
      },
      {
        kanji: '逆',
        meaning: 'inverted',
      },
      {
        kanji: '迷',
        meaning: 'astray',
      },
      {
        kanji: '迭',
        meaning: 'transfer',
      },
      {
        kanji: '造',
        meaning: 'create',
      },
      {
        kanji: '遅',
        meaning: 'slow',
      },
    ],
    usedIn: [
      {
        kanji: '近い',
        reading: 'ちかい',
        meanings: 'near',
      },
      {
        kanji: '近いうちに',
        reading: 'ちかいうちに',
        meanings: 'soon',
      },
      {
        kanji: '近畿',
        reading: 'きんき',
        meanings: 'Kinki (region around Osaka',
      },
      {
        kanji: '近海',
        reading: 'きんかい',
        meanings: 'coastal waters',
      },
      {
        kanji: 'ごく最近',
        reading: 'ごくさいきん',
        meanings: 'very recently',
      },
      {
        kanji: '至近',
        reading: 'しきん',
        meanings: 'very near',
      },
      {
        kanji: '近流',
        reading: 'こんる',
        meanings: 'banishment (to a nearby province)',
      },
    ],
  },
  {
    kanjiName: '空',
    strokes: 8,
    grade: 1,
    freq: 304,
    meanings: ['Empty', 'Sky', 'Void', 'Vacant', 'Vacuum'],
    on: ['くう'],
    kun: [
      'そら',
      'あ.く',
      'あ.き',
      'あ.ける',
      'から',
      'す.く',
      'す.かす',
      'むな.しい',
    ],
    wk_meanings: ['Sky'],
    jlpt: 4,
    quizAnswers: ['Empty', 'Fidelity', 'Obey', 'Counter For Loaves Of Bread'],
    similars: [
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '控',
        meaning: 'withdraw',
      },
      {
        kanji: '窒',
        meaning: 'plug up',
      },
      {
        kanji: '窃',
        meaning: 'stealth',
      },
      {
        kanji: '室',
        meaning: 'room',
      },
      {
        kanji: '宅',
        meaning: 'home',
      },
      {
        kanji: '究',
        meaning: 'research',
      },
      {
        kanji: '紅',
        meaning: 'crimson',
      },
      {
        kanji: '産',
        meaning: 'products',
      },
      {
        kanji: '堂',
        meaning: 'public chamber',
      },
    ],
    usedIn: [
      {
        kanji: '空',
        reading: 'そら',
        meanings: 'sky',
      },
      {
        kanji: '空模様',
        reading: 'そらもよう',
        meanings: 'look of the sky',
      },
      {
        kanji: '定めなき空',
        reading: 'さだめなきそら',
        meanings: 'changeable weather',
      },
      {
        kanji: '晴れた空',
        reading: 'はれたそら',
        meanings: 'clear sky',
      },
      {
        kanji: '開く',
        reading: 'あく',
        meanings: 'to open (e.g. doors)',
      },
      {
        kanji: '空き',
        reading: 'あき',
        meanings: 'space',
      },
      {
        kanji: '空き缶',
        reading: 'あきかん',
        meanings: 'empty can',
      },
      {
        kanji: '開ける',
        reading: 'あける',
        meanings: 'to open (a door',
      },
      {
        kanji: '空',
        reading: 'から',
        meanings: 'emptiness',
      },
      {
        kanji: '空手',
        reading: 'からて',
        meanings: 'karate',
      },
      {
        kanji: 'もぬけの殻',
        reading: 'もぬけのから',
        meanings: 'completely empty (of a residence',
      },
      {
        kanji: '空く',
        reading: 'すく',
        meanings: 'to become less crowded',
      },
      {
        kanji: '空かす',
        reading: 'すかす',
        meanings: 'to feel hungry',
      },
      {
        kanji: '虚しい',
        reading: 'むなしい',
        meanings: 'empty',
      },
      {
        kanji: '空',
        reading: 'くう',
        meanings: 'empty air',
      },
      {
        kanji: '空域',
        reading: 'くういき',
        meanings: 'airspace',
      },
      {
        kanji: '領空',
        reading: 'りょうくう',
        meanings: 'territorial airspace',
      },
      {
        kanji: '防空',
        reading: 'ぼうくう',
        meanings: 'air defense',
      },
    ],
  },
  {
    kanjiName: '青',
    strokes: 8,
    grade: 1,
    freq: 589,
    meanings: ['Blue', 'Green'],
    on: ['せい', 'しょう'],
    kun: ['あお', 'あお-', 'あお.い'],
    wk_meanings: ['Blue'],
    jlpt: 4,
    quizAnswers: ['Foolish', 'Blue', 'Burst Open', 'Courage'],
    similars: [
      {
        kanji: '情',
        meaning: 'feelings',
      },
      {
        kanji: '清',
        meaning: 'pure',
      },
      {
        kanji: '晴',
        meaning: 'clear up',
      },
      {
        kanji: '庸',
        meaning: 'commonplace',
      },
      {
        kanji: '肩',
        meaning: 'shoulder',
      },
      {
        kanji: '肖',
        meaning: 'resemblance',
      },
      {
        kanji: '育',
        meaning: 'bring up',
      },
      {
        kanji: '昔',
        meaning: 'once upon a time',
      },
      {
        kanji: '有',
        meaning: 'possess',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
    ],
    usedIn: [
      {
        kanji: '青',
        reading: 'あお',
        meanings: 'blue',
      },
      {
        kanji: '青梅',
        reading: 'あおうめ',
        meanings: 'unripe plum',
      },
      {
        kanji: 'プロシア青',
        reading: 'ぷろしああお',
        meanings: 'Prussian blue',
      },
      {
        kanji: '深青',
        reading: 'ふかあお',
        meanings: 'dark blue',
      },
      {
        kanji: '青い',
        reading: 'あおい',
        meanings: 'blue',
      },
      {
        kanji: '青色',
        reading: 'あおいろ',
        meanings: 'blue',
      },
      {
        kanji: '青果',
        reading: 'せいか',
        meanings: 'fruits and vegetables',
      },
      {
        kanji: '青雲',
        reading: 'せいうん',
        meanings: 'blue sky',
      },
      {
        kanji: '回青',
        reading: 'かいせい',
        meanings: 'Mohammedan blue (pigment used in porcelain painting)',
      },
      {
        kanji: '黛青',
        reading: 'たいせい',
        meanings: 'blackish blue',
      },
      {
        kanji: '青面金剛',
        reading: 'しょうめんこんごう',
        meanings: 'Shōmen Kongō',
      },
      {
        kanji: '青龍',
        reading: 'せいりょう',
        meanings: 'blue dragon (an auspicious creature in Chinese mythology)',
      },
      {
        kanji: '緑青',
        reading: 'ろくしょう',
        meanings: 'verdigris',
      },
      {
        kanji: '花緑青',
        reading: 'はなろくしょう',
        meanings: 'Paris green',
      },
    ],
  },
  {
    kanjiName: '音',
    strokes: 9,
    grade: 1,
    freq: 491,
    meanings: ['Sound', 'Noise'],
    on: ['おん', 'いん', '-のん'],
    kun: ['おと', 'ね'],
    wk_meanings: ['Sound'],
    jlpt: 4,
    quizAnswers: ['Destroy', 'Catalpa Tree', 'Sound', 'Occasion'],
    similars: [
      {
        kanji: '竜',
        meaning: 'dragon',
      },
      {
        kanji: '章',
        meaning: 'badge',
      },
      {
        kanji: '童',
        meaning: 'juvenile',
      },
      {
        kanji: '庫',
        meaning: 'warehouse',
      },
      {
        kanji: '暗',
        meaning: 'darkness',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '意',
        meaning: 'idea',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '香',
        meaning: 'incense',
      },
    ],
    usedIn: [
      {
        kanji: '音',
        reading: 'おと',
        meanings: 'sound',
      },
      {
        kanji: '音孔',
        reading: 'おとあな',
        meanings: 'tone hole',
      },
      {
        kanji: '鈍い音',
        reading: 'にぶいおと',
        meanings: 'dull sound',
      },
      {
        kanji: '風音',
        reading: 'かざおと',
        meanings: 'sound of the wind',
      },
      {
        kanji: '音',
        reading: 'ね',
        meanings: 'sound',
      },
      {
        kanji: '音色',
        reading: 'ねいろ',
        meanings: 'tone color',
      },
      {
        kanji: '弱音',
        reading: 'よわね',
        meanings: 'feeble complaint',
      },
      {
        kanji: '高音',
        reading: 'こうおん',
        meanings: 'high-pitched tone',
      },
      {
        kanji: '音',
        reading: 'おん',
        meanings: 'sound',
      },
      {
        kanji: '音楽',
        reading: 'おんがく',
        meanings: 'music',
      },
      {
        kanji: '爆音',
        reading: 'ばくおん',
        meanings: '(sound of an) explosion or detonation',
      },
      {
        kanji: '防音',
        reading: 'ぼうおん',
        meanings: 'soundproofing',
      },
      {
        kanji: '音信',
        reading: 'おんしん',
        meanings: 'correspondence',
      },
      {
        kanji: '鸚哥',
        reading: 'いんこ',
        meanings: 'true parrot (esp. small parrots such as the parakeet',
      },
      {
        kanji: '玉音',
        reading: 'ぎょくおん',
        meanings: "the Emperor's voice",
      },
      {
        kanji: '唐音',
        reading: 'とうおん',
        meanings: 'tō-on',
      },
    ],
  },
  {
    kanjiName: '地',
    strokes: 6,
    grade: 2,
    freq: 40,
    meanings: ['Ground', 'Earth'],
    on: ['ち', 'じ'],
    kun: [],
    wk_meanings: ['Earth', '^Ground'],
    jlpt: 4,
    quizAnswers: ['Ground', 'Nearby', 'Minuteness', 'Grey Starling'],
    similars: [
      {
        kanji: '花',
        meaning: 'flower',
      },
      {
        kanji: '功',
        meaning: 'achievement',
      },
      {
        kanji: '他',
        meaning: 'other',
      },
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '池',
        meaning: 'pond',
      },
      {
        kanji: '巧',
        meaning: 'adroit',
      },
      {
        kanji: '施',
        meaning: 'give',
      },
      {
        kanji: '垣',
        meaning: 'hedge',
      },
      {
        kanji: '荒',
        meaning: 'laid waste',
      },
      {
        kanji: '攻',
        meaning: 'aggression',
      },
    ],
    usedIn: [
      {
        kanji: '地',
        reading: 'ち',
        meanings: 'earth',
      },
      {
        kanji: '地位',
        reading: 'ちい',
        meanings: '(social) position',
      },
      {
        kanji: '奥地',
        reading: 'おくち',
        meanings: 'interior',
      },
      {
        kanji: '対地',
        reading: 'たいち',
        meanings: 'ground to ground',
      },
      {
        kanji: '地',
        reading: 'じ',
        meanings: 'ground',
      },
      {
        kanji: '地合い',
        reading: 'じあい',
        meanings: 'texture (cloth',
      },
      {
        kanji: '下地',
        reading: 'したじ',
        meanings: 'groundwork',
      },
      {
        kanji: '築地',
        reading: 'ついじ',
        meanings: 'mud wall with a roof',
      },
    ],
  },
  {
    kanjiName: '安',
    strokes: 6,
    grade: 3,
    freq: 144,
    meanings: [
      'Relax',
      'Cheap',
      'Low',
      'Quiet',
      'Rested',
      'Contented',
      'Peaceful',
    ],
    on: ['あん'],
    kun: ['やす.い', 'やす.まる', 'やす', 'やす.らか'],
    wk_meanings: ['Relax', '^Cheap'],
    jlpt: 4,
    quizAnswers: ['Sieving', 'Firewood', 'Relax', 'Crank'],
    similars: [
      {
        kanji: '字',
        meaning: 'character',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
      {
        kanji: '宅',
        meaning: 'home',
      },
      {
        kanji: '妄',
        meaning: 'delusion',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
      {
        kanji: '宴',
        meaning: 'banquet',
      },
      {
        kanji: '究',
        meaning: 'research',
      },
      {
        kanji: '妥',
        meaning: 'gentle',
      },
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '宇',
        meaning: 'eaves',
      },
    ],
    usedIn: [
      {
        kanji: '安い',
        reading: 'やすい',
        meanings: 'cheap',
      },
      {
        kanji: '休まる',
        reading: 'やすまる',
        meanings: 'to be rested',
      },
      {
        kanji: '安',
        reading: 'やす',
        meanings: 'cheap',
      },
      {
        kanji: '安上がり',
        reading: 'やすあがり',
        meanings: 'cheap',
      },
      {
        kanji: '目安',
        reading: 'めやす',
        meanings: 'criterion',
      },
      {
        kanji: '最安',
        reading: 'さいやす',
        meanings: 'cheapest',
      },
      {
        kanji: '安らか',
        reading: 'やすらか',
        meanings: 'peaceful',
      },
      {
        kanji: '安らかにお眠りください',
        reading: 'やすらかにおねむりください',
        meanings: 'rest in peace',
      },
      {
        kanji: '安価',
        reading: 'あんか',
        meanings: 'low-priced',
      },
      {
        kanji: '安易',
        reading: 'あんい',
        meanings: 'easy',
      },
      {
        kanji: '平安',
        reading: 'へいあん',
        meanings: 'peace',
      },
      {
        kanji: '慰安',
        reading: 'いあん',
        meanings: 'solace',
      },
    ],
  },
  {
    kanjiName: '有',
    strokes: 6,
    grade: 3,
    freq: 282,
    meanings: ['Possess', 'Have', 'Exist', 'Happen', 'Occur', 'Approx'],
    on: ['ゆう', 'う'],
    kun: ['あ.る'],
    wk_meanings: ['Have'],
    jlpt: 4,
    quizAnswers: ['Publish', 'Instep', 'Possess', 'Happenstance'],
    similars: [
      {
        kanji: '月',
        meaning: 'month',
      },
      {
        kanji: '前',
        meaning: 'in front',
      },
      {
        kanji: '青',
        meaning: 'blue',
      },
      {
        kanji: '育',
        meaning: 'bring up',
      },
      {
        kanji: '角',
        meaning: 'angle',
      },
      {
        kanji: '肖',
        meaning: 'resemblance',
      },
      {
        kanji: '背',
        meaning: 'stature',
      },
      {
        kanji: '庸',
        meaning: 'commonplace',
      },
      {
        kanji: '愉',
        meaning: 'pleasure',
      },
      {
        kanji: '白',
        meaning: 'white',
      },
    ],
    usedIn: [
      {
        kanji: '有る',
        reading: 'ある',
        meanings: 'to be',
      },
      {
        kanji: 'ある限り',
        reading: 'あるかぎり',
        meanings: 'all (there is)',
      },
      {
        kanji: '有',
        reading: 'ゆう',
        meanings: 'existence',
      },
      {
        kanji: '有意義',
        reading: 'ゆういぎ',
        meanings: 'significant',
      },
      {
        kanji: '領有',
        reading: 'りょうゆう',
        meanings: 'possession (esp. of a territory)',
      },
      {
        kanji: '公有',
        reading: 'こうゆう',
        meanings: 'public ownership',
      },
      {
        kanji: '有',
        reading: 'う',
        meanings: 'bhava (becoming',
      },
      {
        kanji: '有無',
        reading: 'うむ',
        meanings: 'existence or nonexistence',
      },
      {
        kanji: '領有',
        reading: 'りょうゆう',
        meanings: 'possession (esp. of a territory)',
      },
      {
        kanji: '公有',
        reading: 'こうゆう',
        meanings: 'public ownership',
      },
    ],
  },
  {
    kanjiName: '死',
    strokes: 6,
    grade: 3,
    freq: 229,
    meanings: ['Death', 'Die'],
    on: ['し'],
    kun: ['し.ぬ', 'し.に-'],
    wk_meanings: ['Death'],
    jlpt: 4,
    quizAnswers: ['Follow', 'Death', 'Scour', 'Support'],
    similars: [
      {
        kanji: '列',
        meaning: 'file',
      },
      {
        kanji: '序',
        meaning: 'preface',
      },
      {
        kanji: '売',
        meaning: 'sell',
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)',
      },
      {
        kanji: '返',
        meaning: 'return',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '少',
        meaning: 'few',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '殉',
        meaning: 'martyrdom',
      },
      {
        kanji: '葬',
        meaning: 'interment',
      },
    ],
    usedIn: [
      {
        kanji: '死ぬ',
        reading: 'しぬ',
        meanings: 'to die',
      },
      {
        kanji: '死ぬ気で',
        reading: 'しぬきで',
        meanings: 'all out',
      },
      {
        kanji: '死',
        reading: 'し',
        meanings: 'death',
      },
      {
        kanji: '死因',
        reading: 'しいん',
        meanings: 'cause of death',
      },
      {
        kanji: '安楽死',
        reading: 'あんらくし',
        meanings: 'euthanasia',
      },
      {
        kanji: '病死',
        reading: 'びょうし',
        meanings: 'death from disease',
      },
    ],
  },
  {
    kanjiName: '京',
    strokes: 8,
    grade: 2,
    freq: 74,
    meanings: ['Capital', '10**16'],
    on: ['きょう', 'けい', 'きん'],
    kun: ['みやこ'],
    wk_meanings: ['Capital'],
    jlpt: 4,
    quizAnswers: ['Capital', 'How', 'Bunting', 'Pit'],
    similars: [
      {
        kanji: '涼',
        meaning: 'refreshing',
      },
      {
        kanji: '就',
        meaning: 'concerning',
      },
      {
        kanji: '砂',
        meaning: 'sand',
      },
      {
        kanji: '哀',
        meaning: 'pathetic',
      },
      {
        kanji: '景',
        meaning: 'scenery',
      },
      {
        kanji: '域',
        meaning: 'range',
      },
      {
        kanji: '吏',
        meaning: 'officer',
      },
      {
        kanji: '束',
        meaning: 'bundle',
      },
      {
        kanji: '享',
        meaning: 'enjoy',
      },
      {
        kanji: '豆',
        meaning: 'beans',
      },
    ],
    usedIn: [
      {
        kanji: '都',
        reading: 'みやこ',
        meanings: 'capital (esp. Kyoto',
      },
      {
        kanji: '長岡京',
        reading: 'ながおかきょう',
        meanings: 'Nagaoka-kyō (capital of Japan 784-794)',
      },
      {
        kanji: '京',
        reading: 'きょう',
        meanings: 'imperial capital (esp. Kyoto)',
      },
      {
        kanji: '京都',
        reading: 'きょうと',
        meanings: 'Kyoto (city',
      },
      {
        kanji: '帝京',
        reading: 'ていきょう',
        meanings: 'the capital',
      },
      {
        kanji: '在京',
        reading: 'ざいきょう',
        meanings: 'being in the capital (i.e. Tokyo',
      },
      {
        kanji: '京',
        reading: 'きょう',
        meanings: 'imperial capital (esp. Kyoto)',
      },
      {
        kanji: '京阪',
        reading: 'けいはん',
        meanings: 'Kyoto and Osaka',
      },
      {
        kanji: '英京',
        reading: 'えいきょう',
        meanings: 'British capital',
      },
      {
        kanji: 'キン族',
        reading: 'きんぞく',
        meanings: 'Kinh (people)',
      },
      {
        kanji: '南京',
        reading: 'なんきん',
        meanings: 'Nanjing (China)',
      },
    ],
  },
  {
    kanjiName: '夜',
    strokes: 8,
    grade: 2,
    freq: 487,
    meanings: ['Night', 'Evening'],
    on: ['や'],
    kun: ['よ', 'よる'],
    wk_meanings: ['Night', '^Evening'],
    jlpt: 4,
    quizAnswers: ['Impede', 'Night', 'Entrust To', 'Throw'],
    similars: [
      {
        kanji: '液',
        meaning: 'fluid',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '衣',
        meaning: 'garment',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '郊',
        meaning: 'outskirts',
      },
      {
        kanji: '度',
        meaning: 'degrees',
      },
      {
        kanji: '変',
        meaning: 'unusual',
      },
      {
        kanji: '疫',
        meaning: 'epidemic',
      },
      {
        kanji: '麻',
        meaning: 'hemp',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
    ],
    usedIn: [
      {
        kanji: '夜',
        reading: 'よる',
        meanings: 'evening',
      },
      {
        kanji: '夜明け',
        reading: 'よあけ',
        meanings: 'dawn',
      },
      {
        kanji: '毎夜',
        reading: 'まいよ',
        meanings: 'every evening',
      },
      {
        kanji: '短夜',
        reading: 'みじかよ',
        meanings: 'short summer night',
      },
      {
        kanji: '夜',
        reading: 'よる',
        meanings: 'evening',
      },
      {
        kanji: '夜ご飯',
        reading: 'よるごはん',
        meanings: 'dinner',
      },
      {
        kanji: '御寝',
        reading: 'およる',
        meanings: 'sleep',
      },
      {
        kanji: '銀河鉄道の夜',
        reading: 'ぎんがてつどうのよる',
        meanings: 'Night on the Galactic Railroad (novel by Kenji Miyazawa)',
      },
      {
        kanji: '夜',
        reading: 'や',
        meanings: 'counter for nights',
      },
      {
        kanji: '夜間',
        reading: 'やかん',
        meanings: 'night',
      },
      {
        kanji: '同夜',
        reading: 'どうや',
        meanings: 'the same night',
      },
      {
        kanji: '通夜',
        reading: 'つや',
        meanings: 'all-night vigil over a body',
      },
    ],
  },
  {
    kanjiName: '妹',
    strokes: 8,
    grade: 2,
    freq: 1446,
    meanings: ['Younger Sister'],
    on: ['まい'],
    kun: ['いもうと'],
    wk_meanings: ['Younger Sister', '^Little Sister'],
    jlpt: 4,
    quizAnswers: ['Righteous', 'Omen', 'Goodwill', 'Younger Sister'],
    similars: [
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '娠',
        meaning: 'with child',
      },
      {
        kanji: '媒',
        meaning: 'mediator',
      },
      {
        kanji: '条',
        meaning: 'article',
      },
      {
        kanji: '味',
        meaning: 'flavor',
      },
      {
        kanji: '妨',
        meaning: 'disturb',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '姉',
        meaning: 'elder sister',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '抹',
        meaning: 'rub',
      },
    ],
    usedIn: [
      {
        kanji: '妹',
        reading: 'いもうと',
        meanings: 'younger sister',
      },
      {
        kanji: '妹君',
        reading: 'いもうとぎみ',
        meanings: '(younger) sister',
      },
      {
        kanji: '妹君',
        reading: 'いもうとぎみ',
        meanings: '(younger) sister',
      },
      {
        kanji: '義妹',
        reading: 'ぎまい',
        meanings:
          "sister-in-law (spouse's younger sister or younger brother's wife)",
      },
      {
        kanji: '弟妹',
        reading: 'ていまい',
        meanings: 'younger brother and sister',
      },
    ],
  },
  {
    kanjiName: '姉',
    strokes: 8,
    grade: 2,
    freq: 1473,
    meanings: ['Elder Sister'],
    on: ['し'],
    kun: ['あね', 'はは'],
    wk_meanings: ['Older Sister', '^Big Sister', '^Elder Sister'],
    jlpt: 4,
    quizAnswers: ['Be Inferior To', 'Force', 'Thought', 'Elder Sister'],
    similars: [
      {
        kanji: '妨',
        meaning: 'disturb',
      },
      {
        kanji: '婦',
        meaning: 'lady',
      },
      {
        kanji: '妹',
        meaning: 'younger sister',
      },
      {
        kanji: '布',
        meaning: 'linen',
      },
      {
        kanji: '希',
        meaning: 'hope',
      },
      {
        kanji: '市',
        meaning: 'market',
      },
      {
        kanji: '嫡',
        meaning: 'legitimate wife',
      },
      {
        kanji: '肺',
        meaning: 'lungs',
      },
      {
        kanji: '端',
        meaning: 'edge',
      },
      {
        kanji: '姓',
        meaning: 'surname',
      },
    ],
    usedIn: [
      {
        kanji: '姉',
        reading: 'あね',
        meanings: 'older sister',
      },
      {
        kanji: '姉さん',
        reading: 'ねえさん',
        meanings: 'older sister',
      },
      {
        kanji: '大姉',
        reading: 'おおあね',
        meanings: 'eldest sister',
      },
      {
        kanji: '姉',
        reading: 'し',
        meanings:
          'honorific suffix used after the name of a woman of equal or higher status',
      },
      {
        kanji: '姉妹',
        reading: 'しまい',
        meanings: 'sisters',
      },
      {
        kanji: '実姉',
        reading: 'じっし',
        meanings: 'biological older sister',
      },
      {
        kanji: '兄姉',
        reading: 'けいし',
        meanings: 'brother and sister',
      },
    ],
  },
  {
    kanjiName: '店',
    strokes: 8,
    grade: 2,
    freq: 378,
    meanings: ['Store', 'Shop'],
    on: ['てん'],
    kun: ['みせ', 'たな'],
    wk_meanings: ['Shop', '^Store'],
    jlpt: 4,
    quizAnswers: ['Split', 'Store', 'Become Experienced', 'Welfare'],
    similars: [
      {
        kanji: '粘',
        meaning: 'sticky',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '占',
        meaning: 'fortune-telling',
      },
      {
        kanji: '古',
        meaning: 'old',
      },
      {
        kanji: '否',
        meaning: 'negate',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '高',
        meaning: 'tall',
      },
    ],
    usedIn: [
      {
        kanji: '店',
        reading: 'みせ',
        meanings: 'store',
      },
      {
        kanji: '店先',
        reading: 'みせさき',
        meanings: 'storefront',
      },
      {
        kanji: '酒店',
        reading: 'さかだな',
        meanings: 'liquor store',
      },
      {
        kanji: '茶店',
        reading: 'さてん',
        meanings: 'tea house',
      },
      {
        kanji: '店',
        reading: 'たな',
        meanings: "merchant's home",
      },
      {
        kanji: '店子',
        reading: 'たなこ',
        meanings: 'tenant (esp. in contrast to a landlord)',
      },
      {
        kanji: 'お店',
        reading: 'おたな',
        meanings: "merchant's home (esp. used by apprentices",
      },
      {
        kanji: '店',
        reading: 'てん',
        meanings: 'store',
      },
      {
        kanji: '店員',
        reading: 'てんいん',
        meanings: 'employee (of a store)',
      },
      {
        kanji: '酒店',
        reading: 'さかだな',
        meanings: 'liquor store',
      },
      {
        kanji: '同店',
        reading: 'どうてん',
        meanings: 'the same store',
      },
    ],
  },
  {
    kanjiName: '明',
    strokes: 8,
    grade: 2,
    freq: 67,
    meanings: ['Bright', 'Light'],
    on: ['めい', 'みょう', 'みん'],
    kun: [
      'あ.かり',
      'あか.るい',
      'あか.るむ',
      'あか.らむ',
      'あき.らか',
      'あ.ける',
      '-あ.け',
      'あ.く',
      'あ.くる',
      'あ.かす',
    ],
    wk_meanings: ['Bright'],
    jlpt: 4,
    quizAnswers: ['Befriend', 'District', 'Rich', 'Bright'],
    similars: [
      {
        kanji: '門',
        meaning: 'gate',
      },
      {
        kanji: '胃',
        meaning: 'stomach',
      },
      {
        kanji: '冒',
        meaning: 'risk',
      },
      {
        kanji: '朝',
        meaning: 'morning',
      },
      {
        kanji: '問',
        meaning: 'question',
      },
      {
        kanji: '閉',
        meaning: 'closed',
      },
      {
        kanji: '崩',
        meaning: 'crumble',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '昇',
        meaning: 'rise up',
      },
      {
        kanji: '易',
        meaning: 'easy',
      },
    ],
    usedIn: [
      {
        kanji: '明かり',
        reading: 'あかり',
        meanings: 'light',
      },
      {
        kanji: '明り先',
        reading: 'あかりさき',
        meanings: 'source of light',
      },
      {
        kanji: '明るい',
        reading: 'あかるい',
        meanings: 'light',
      },
      {
        kanji: '明るむ',
        reading: 'あかるむ',
        meanings: 'to brighten',
      },
      {
        kanji: '明らむ',
        reading: 'あからむ',
        meanings: 'to become luminous at dawn (esp. the sky)',
      },
      {
        kanji: '明らか',
        reading: 'あきらか',
        meanings: 'clear',
      },
      {
        kanji: '明らかにする',
        reading: 'あきらかにする',
        meanings: 'to make clear',
      },
      {
        kanji: '開ける',
        reading: 'あける',
        meanings: 'to open (a door',
      },
      {
        kanji: '開く',
        reading: 'あく',
        meanings: 'to open (e.g. doors)',
      },
      {
        kanji: '明くる',
        reading: 'あくる',
        meanings: 'next (day',
      },
      {
        kanji: '明くる',
        reading: 'あくる',
        meanings: 'next (day',
      },
      {
        kanji: 'あくる日',
        reading: 'あくるひ',
        meanings: 'next day',
      },
      {
        kanji: '明かす',
        reading: 'あかす',
        meanings: 'to pass (the night)',
      },
      {
        kanji: '明',
        reading: 'めい',
        meanings: 'brightness',
      },
      {
        kanji: '明暗',
        reading: 'めいあん',
        meanings: 'light and darkness',
      },
      {
        kanji: '公明',
        reading: 'こうめい',
        meanings: 'fairness',
      },
      {
        kanji: '英明',
        reading: 'えいめい',
        meanings: 'intelligent',
      },
      {
        kanji: '明',
        reading: 'みょう',
        meanings: 'vidya (wisdom)',
      },
      {
        kanji: '明日',
        reading: 'あした',
        meanings: 'tomorrow',
      },
      {
        kanji: '光明',
        reading: 'こうみょう',
        meanings: 'bright light',
      },
      {
        kanji: '内明',
        reading: 'ないみょう',
        meanings: 'adhyatma vidya (one of the five sciences of ancient India)',
      },
      {
        kanji: '明',
        reading: 'みん',
        meanings: 'Ming dynasty (of China; 1368-1644)',
      },
      {
        kanji: '明楽',
        reading: 'みんがく',
        meanings:
          'Ming-era Chinese music (popularized in Japan during the early 17th century)',
      },
      {
        kanji: '胡志明',
        reading: 'ほーちみん',
        meanings: 'Ho Chi Minh (1890-1969)',
      },
    ],
  },
  {
    kanjiName: '歩',
    strokes: 8,
    grade: 2,
    freq: 554,
    meanings: ['Walk', 'Counter For Steps'],
    on: ['ほ', 'ぶ', 'ふ'],
    kun: ['ある.く', 'あゆ.む'],
    wk_meanings: ['Walk'],
    jlpt: 4,
    quizAnswers: ['Pretend', 'Walk', 'Row', 'Phantom'],
    similars: [
      {
        kanji: '渉',
        meaning: 'ford',
      },
      {
        kanji: '寂',
        meaning: 'loneliness',
      },
      {
        kanji: '歳',
        meaning: 'year-end',
      },
      {
        kanji: '少',
        meaning: 'few',
      },
      {
        kanji: '叔',
        meaning: 'uncle',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '妙',
        meaning: 'exquisite',
      },
      {
        kanji: '共',
        meaning: 'together',
      },
      {
        kanji: '守',
        meaning: 'guard',
      },
      {
        kanji: '示',
        meaning: 'show',
      },
    ],
    usedIn: [
      {
        kanji: '歩く',
        reading: 'あるく',
        meanings: 'to walk',
      },
      {
        kanji: '歩む',
        reading: 'あゆむ',
        meanings: 'to walk',
      },
      {
        kanji: '歩',
        reading: 'ほ',
        meanings: 'step',
      },
      {
        kanji: '歩行',
        reading: 'ほこう',
        meanings: 'walking',
      },
      {
        kanji: '遊歩',
        reading: 'ゆうほ',
        meanings: 'walk',
      },
      {
        kanji: '牛歩',
        reading: 'ぎゅうほ',
        meanings: "snail's pace",
      },
      {
        kanji: '歩',
        reading: 'ぶ',
        meanings: 'bu',
      },
      {
        kanji: '歩合',
        reading: 'ぶあい',
        meanings: 'rate',
      },
      {
        kanji: '町歩',
        reading: 'ちょうぶ',
        meanings: 'hectare (2.471 acres)',
      },
      {
        kanji: '町段畝歩',
        reading: 'ちょうたんせぶ',
        meanings: 'units of square measure (for rice fields',
      },
      {
        kanji: '歩',
        reading: 'ふ',
        meanings: 'pawn',
      },
      {
        kanji: '歩兵',
        reading: 'ふひょう',
        meanings: 'pawn',
      },
      {
        kanji: '敵歩',
        reading: 'てきふ',
        meanings: 'opponents pawn',
      },
      {
        kanji: '二歩',
        reading: 'にふ',
        meanings:
          'dropping two unpromoted pawns on the same file (illegal move)',
      },
    ],
  },
  {
    kanjiName: '画',
    strokes: 8,
    grade: 2,
    freq: 199,
    meanings: ['Brush-stroke', 'Picture'],
    on: ['が', 'かく', 'え', 'かい'],
    kun: ['えが.く', 'かく.する', 'かぎ.る', 'はかりごと', 'はか.る'],
    wk_meanings: ['Drawing', '^Picture', '^Painting'],
    jlpt: 4,
    quizAnswers: ['Train', 'Probe', 'Brush-stroke', 'Adore'],
    similars: [
      {
        kanji: '車',
        meaning: 'car',
      },
      {
        kanji: '卑',
        meaning: 'lowly',
      },
      {
        kanji: '早',
        meaning: 'early',
      },
      {
        kanji: '申',
        meaning: 'have the honor to',
      },
      {
        kanji: '耳',
        meaning: 'ear',
      },
      {
        kanji: '町',
        meaning: 'town',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '更',
        meaning: 'grow late',
      },
      {
        kanji: '甲',
        meaning: 'armor',
      },
      {
        kanji: '田',
        meaning: 'rice field',
      },
    ],
    usedIn: [
      {
        kanji: '描く',
        reading: 'えがく',
        meanings: 'to draw',
      },
      {
        kanji: '画する',
        reading: 'かくする',
        meanings: 'to draw (a line)',
      },
      {
        kanji: '絵',
        reading: 'え',
        meanings: 'picture',
      },
      {
        kanji: '画家',
        reading: 'がか',
        meanings: 'painter',
      },
      {
        kanji: '洋画',
        reading: 'ようが',
        meanings: 'Western painting',
      },
      {
        kanji: '邦画',
        reading: 'ほうが',
        meanings: 'Japanese film',
      },
      {
        kanji: '画',
        reading: 'かく',
        meanings: 'stroke (of a kanji',
      },
      {
        kanji: '描く',
        reading: 'えがく',
        meanings: 'to draw',
      },
      {
        kanji: '参画',
        reading: 'さんかく',
        meanings: 'taking part (in planning)',
      },
      {
        kanji: '家族計画',
        reading: 'かぞくけいかく',
        meanings: 'family planning',
      },
      {
        kanji: '絵',
        reading: 'え',
        meanings: 'picture',
      },
      {
        kanji: '描く',
        reading: 'えがく',
        meanings: 'to draw',
      },
      {
        kanji: '似顔絵',
        reading: 'にがおえ',
        meanings: 'portrait',
      },
      {
        kanji: '影絵',
        reading: 'かげえ',
        meanings: 'shadow picture',
      },
    ],
  },
  {
    kanjiName: '知',
    strokes: 8,
    grade: 2,
    freq: 205,
    meanings: ['Know', 'Wisdom'],
    on: ['ち'],
    kun: ['し.る', 'し.らせる'],
    wk_meanings: ['Know'],
    jlpt: 4,
    quizAnswers: ['Know', 'Pavilion', 'Big', 'Naked'],
    similars: [
      {
        kanji: '和',
        meaning: 'harmony',
      },
      {
        kanji: '君',
        meaning: 'mister',
      },
      {
        kanji: '唇',
        meaning: 'lips',
      },
      {
        kanji: '短',
        meaning: 'short',
      },
      {
        kanji: '粘',
        meaning: 'sticky',
      },
      {
        kanji: '谷',
        meaning: 'valley',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
    ],
    usedIn: [
      {
        kanji: '知る',
        reading: 'しる',
        meanings: 'to know',
      },
      {
        kanji: '知る限り',
        reading: 'しるかぎり',
        meanings: 'as far as I know',
      },
      {
        kanji: '吾唯足知',
        reading: 'われただたるをしる',
        meanings: 'I am content with what I am (have)',
      },
      {
        kanji: '知らせる',
        reading: 'しらせる',
        meanings: 'to notify',
      },
      {
        kanji: '知',
        reading: 'ち',
        meanings: 'wisdom',
      },
      {
        kanji: '知恵',
        reading: 'ちえ',
        meanings: 'wisdom',
      },
      {
        kanji: '認知',
        reading: 'にんち',
        meanings: 'acknowledgement',
      },
      {
        kanji: '熟知',
        reading: 'じゅくち',
        meanings: 'being familiar with',
      },
    ],
  },
  {
    kanjiName: '室',
    strokes: 9,
    grade: 2,
    freq: 550,
    meanings: ['Room', 'Apartment', 'Chamber', 'Greenhouse', 'Cellar'],
    on: ['しつ'],
    kun: ['むろ'],
    wk_meanings: ['Room'],
    jlpt: 4,
    quizAnswers: ['Room', 'Gateway', 'Beach', 'Be Luxuriant'],
    similars: [
      {
        kanji: '窒',
        meaning: 'plug up',
      },
      {
        kanji: '空',
        meaning: 'empty',
      },
      {
        kanji: '至',
        meaning: 'climax',
      },
      {
        kanji: '屋',
        meaning: 'roof',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '宇',
        meaning: 'eaves',
      },
      {
        kanji: '守',
        meaning: 'guard',
      },
      {
        kanji: '実',
        meaning: 'reality',
      },
      {
        kanji: '社',
        meaning: 'company',
      },
      {
        kanji: '完',
        meaning: 'perfect',
      },
    ],
    usedIn: [
      {
        kanji: '室',
        reading: 'むろ',
        meanings: 'greenhouse',
      },
      {
        kanji: '室町',
        reading: 'むろまち',
        meanings: 'Muromachi period (1336-1573)',
      },
      {
        kanji: '石室',
        reading: 'せきしつ',
        meanings: 'stone hut',
      },
      {
        kanji: '氷室',
        reading: 'こおりむろ',
        meanings: 'ice house',
      },
      {
        kanji: '室',
        reading: 'しつ',
        meanings: 'room',
      },
      {
        kanji: '室長',
        reading: 'しつちょう',
        meanings: 'section chief',
      },
      {
        kanji: '同室',
        reading: 'どうしつ',
        meanings: 'same room',
      },
      {
        kanji: '皇室',
        reading: 'こうしつ',
        meanings: 'Imperial household',
      },
    ],
  },
  {
    kanjiName: '思',
    strokes: 9,
    grade: 2,
    freq: 132,
    meanings: ['Think'],
    on: ['し'],
    kun: ['おも.う', 'おもえら.く', 'おぼ.す'],
    wk_meanings: ['Think', '^Thought'],
    jlpt: 4,
    quizAnswers: ['Search', 'Healing', 'Think', 'Thong'],
    similars: [
      {
        kanji: '息',
        meaning: 'breath',
      },
      {
        kanji: '恵',
        meaning: 'favor',
      },
      {
        kanji: '恩',
        meaning: 'grace',
      },
      {
        kanji: '悪',
        meaning: 'bad',
      },
      {
        kanji: '魚',
        meaning: 'fish',
      },
      {
        kanji: '累',
        meaning: 'accumulate',
      },
      {
        kanji: '想',
        meaning: 'concept',
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge',
      },
      {
        kanji: '鬼',
        meaning: 'ghost',
      },
      {
        kanji: '恥',
        meaning: 'shame',
      },
    ],
    usedIn: [
      {
        kanji: '思う',
        reading: 'おもう',
        meanings: 'to think',
      },
      {
        kanji: '思う存分',
        reading: 'おもうぞんぶん',
        meanings: "to one's heart's content",
      },
      {
        kanji: '思春期',
        reading: 'ししゅんき',
        meanings: 'puberty',
      },
      {
        kanji: '思考',
        reading: 'しこう',
        meanings: 'thought',
      },
      {
        kanji: '相思',
        reading: 'そうし',
        meanings: 'mutual affection',
      },
      {
        kanji: '哀思',
        reading: 'あいし',
        meanings: 'sad feeling',
      },
    ],
  },
  {
    kanjiName: '海',
    strokes: 9,
    grade: 2,
    freq: 200,
    meanings: ['Sea', 'Ocean'],
    on: ['かい'],
    kun: ['うみ'],
    wk_meanings: ['Sea', '^Ocean'],
    jlpt: 4,
    quizAnswers: ['Stairs', 'Interval Of Time', 'Wag', 'Sea'],
    similars: [
      {
        kanji: '悔',
        meaning: 'repent',
      },
      {
        kanji: '毎',
        meaning: 'every',
      },
      {
        kanji: '侮',
        meaning: 'scorn',
      },
      {
        kanji: '江',
        meaning: 'creek',
      },
      {
        kanji: '涯',
        meaning: 'horizon',
      },
      {
        kanji: '性',
        meaning: 'sex',
      },
      {
        kanji: '怖',
        meaning: 'dreadful',
      },
      {
        kanji: '汽',
        meaning: 'vapor',
      },
      {
        kanji: '壮',
        meaning: 'robust',
      },
      {
        kanji: '活',
        meaning: 'lively',
      },
    ],
    usedIn: [
      {
        kanji: '海',
        reading: 'うみ',
        meanings: 'sea',
      },
      {
        kanji: '海辺',
        reading: 'うみべ',
        meanings: 'beach',
      },
      {
        kanji: '内海',
        reading: 'ないかい',
        meanings: 'inland sea',
      },
      {
        kanji: '血の海',
        reading: 'ちのうみ',
        meanings: 'sea of blood',
      },
      {
        kanji: '海運',
        reading: 'かいうん',
        meanings: 'maritime transport',
      },
      {
        kanji: '海域',
        reading: 'かいいき',
        meanings: 'area of ocean',
      },
      {
        kanji: '公海',
        reading: 'こうかい',
        meanings: 'high seas',
      },
      {
        kanji: '内海',
        reading: 'ないかい',
        meanings: 'inland sea',
      },
    ],
  },
  {
    kanjiName: '茶',
    strokes: 9,
    grade: 2,
    freq: 1116,
    meanings: ['Tea'],
    on: ['ちゃ', 'さ'],
    kun: [],
    wk_meanings: ['Tea'],
    jlpt: 4,
    quizAnswers: ['Carry', 'Iron', 'Present', 'Tea'],
    similars: [
      {
        kanji: '菊',
        meaning: 'chrysanthemum',
      },
      {
        kanji: '奏',
        meaning: 'play music',
      },
      {
        kanji: '花',
        meaning: 'flower',
      },
      {
        kanji: '若',
        meaning: 'young',
      },
      {
        kanji: '茂',
        meaning: 'overgrown',
      },
      {
        kanji: '菜',
        meaning: 'vegetable',
      },
      {
        kanji: '菌',
        meaning: 'germ',
      },
      {
        kanji: '荷',
        meaning: 'baggage',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '搭',
        meaning: 'board',
      },
    ],
    usedIn: [
      {
        kanji: '茶',
        reading: 'ちゃ',
        meanings: 'tea',
      },
      {
        kanji: '茶色',
        reading: 'ちゃいろ',
        meanings: 'brown',
      },
      {
        kanji: '煎茶',
        reading: 'せんちゃ',
        meanings: 'green tea',
      },
      {
        kanji: '抹茶',
        reading: 'まっちゃ',
        meanings: 'matcha',
      },
      {
        kanji: '茶道',
        reading: 'さどう',
        meanings: 'tea ceremony',
      },
      {
        kanji: '茶店',
        reading: 'さてん',
        meanings: 'tea house',
      },
      {
        kanji: '喫茶',
        reading: 'きっさ',
        meanings: 'tea drinking',
      },
      {
        kanji: '歌声喫茶',
        reading: 'うたごえきっさ',
        meanings: 'utagoe coffeehouse',
      },
    ],
  },
  {
    kanjiName: '以',
    strokes: 5,
    grade: 4,
    freq: 126,
    meanings: ['By Means Of', 'Because', 'In View Of', 'Compared With'],
    on: ['い'],
    kun: ['もっ.て'],
    wk_meanings: ['From', '^Since', '^Compared With', '^With', '^By Means Of'],
    jlpt: 4,
    quizAnswers: ['Crime', 'Outskirts', 'Refuse', 'By Means Of'],
    similars: [
      {
        kanji: '似',
        meaning: 'becoming',
      },
      {
        kanji: '立',
        meaning: 'stand up',
      },
      {
        kanji: '六',
        meaning: 'six',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '効',
        meaning: 'merit',
      },
      {
        kanji: '充',
        meaning: 'allot',
      },
      {
        kanji: '郊',
        meaning: 'outskirts',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)',
      },
      {
        kanji: '沈',
        meaning: 'sink',
      },
    ],
    usedIn: [
      {
        kanji: '以て',
        reading: 'もって',
        meanings: 'with',
      },
      {
        kanji: '以ってしても',
        reading: 'もってしても',
        meanings: '(not) even when using ...',
      },
      {
        kanji: '以降',
        reading: 'いこう',
        meanings: 'on and after',
      },
      {
        kanji: '以下',
        reading: 'いか',
        meanings: 'not exceeding ...',
      },
      {
        kanji: '縞曹以',
        reading: 'しまそい',
        meanings: 'threestripe rockfish (Sebastes trivittatus)',
      },
      {
        kanji: '斑曹以',
        reading: 'むらそい',
        meanings: 'spotbelly rockfish (Sebastes pachycephalus)',
      },
    ],
  },
  {
    kanjiName: '夏',
    strokes: 10,
    grade: 2,
    freq: 659,
    meanings: ['Summer'],
    on: ['か', 'が', 'げ'],
    kun: ['なつ'],
    wk_meanings: ['Summer'],
    jlpt: 4,
    quizAnswers: ['Persuade', 'Confer On', 'Protect', 'Summer'],
    similars: [
      {
        kanji: '更',
        meaning: 'grow late',
      },
      {
        kanji: '臭',
        meaning: 'stinking',
      },
      {
        kanji: '東',
        meaning: 'east',
      },
      {
        kanji: '畝',
        meaning: 'furrow',
      },
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
      {
        kanji: '規',
        meaning: 'standard',
      },
      {
        kanji: '直',
        meaning: 'straightaway',
      },
      {
        kanji: '貝',
        meaning: 'shellfish',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '泉',
        meaning: 'spring',
      },
    ],
    usedIn: [
      {
        kanji: '夏',
        reading: 'なつ',
        meanings: 'summer',
      },
      {
        kanji: '夏季',
        reading: 'かき',
        meanings: 'summer season',
      },
      {
        kanji: '初夏',
        reading: 'しょか',
        meanings: 'early summer',
      },
      {
        kanji: '常夏',
        reading: 'とこなつ',
        meanings: 'everlasting summer',
      },
      {
        kanji: '夏',
        reading: 'か',
        meanings:
          'Xia dynasty (of China; c. 2070-1600 BCE; possibly mythological)',
      },
      {
        kanji: '夏季',
        reading: 'かき',
        meanings: 'summer season',
      },
      {
        kanji: '初夏',
        reading: 'しょか',
        meanings: 'early summer',
      },
      {
        kanji: '盛夏',
        reading: 'せいか',
        meanings: 'midsummer',
      },
      {
        kanji: '夏',
        reading: 'げ',
        meanings:
          'summer (on the lunisolar calendar: 16th day of the 4th month to the 15th day of the 7th month)',
      },
      {
        kanji: '夏至',
        reading: 'げし',
        meanings: 'summer solstice',
      },
      {
        kanji: '一夏',
        reading: 'いちげ',
        meanings: 'one summer (during which a monk attends a summer retreat)',
      },
      {
        kanji: '半夏',
        reading: 'はんげ',
        meanings: 'crow dipper (Pinellia tuber)',
      },
    ],
  },
  {
    kanjiName: '家',
    strokes: 10,
    grade: 2,
    freq: 133,
    meanings: [
      'House',
      'Home',
      'Family',
      'Professional',
      'Expert',
      'Performer',
    ],
    on: ['か', 'け'],
    kun: ['いえ', 'や', 'うち'],
    wk_meanings: ['House', '^Home'],
    jlpt: 4,
    quizAnswers: ['House', 'Question', 'Sap', 'Absurdity'],
    similars: [
      {
        kanji: '塚',
        meaning: 'hillock',
      },
      {
        kanji: '嫁',
        meaning: 'marry into',
      },
      {
        kanji: '豪',
        meaning: 'overpowering',
      },
      {
        kanji: '隊',
        meaning: 'regiment',
      },
      {
        kanji: '稼',
        meaning: 'earnings',
      },
      {
        kanji: '豚',
        meaning: 'pork',
      },
      {
        kanji: '実',
        meaning: 'reality',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '炭',
        meaning: 'charcoal',
      },
      {
        kanji: '定',
        meaning: 'determine',
      },
    ],
    usedIn: [
      {
        kanji: '家',
        reading: 'いえ',
        meanings: 'house',
      },
      {
        kanji: '家主',
        reading: 'やぬし',
        meanings: 'landlord',
      },
      {
        kanji: '本家',
        reading: 'ほんけ',
        meanings: 'head house (family)',
      },
      {
        kanji: '小家',
        reading: 'こいえ',
        meanings: 'small and simple home',
      },
      {
        kanji: '屋',
        reading: 'や',
        meanings: 'shop',
      },
      {
        kanji: '家内',
        reading: 'かない',
        meanings: '(my) wife',
      },
      {
        kanji: '長屋',
        reading: 'ながや',
        meanings: 'tenement house',
      },
      {
        kanji: '本家',
        reading: 'ほんけ',
        meanings: 'head house (family)',
      },
      {
        kanji: '家',
        reading: 'うち',
        meanings: "one's house",
      },
      {
        kanji: '内',
        reading: 'うち',
        meanings: 'inside',
      },
      {
        kanji: 'お家',
        reading: 'おうち',
        meanings: 'your home',
      },
      {
        kanji: '家',
        reading: 'か',
        meanings: '-ist',
      },
      {
        kanji: '家屋',
        reading: 'かおく',
        meanings: 'house',
      },
      {
        kanji: '研究家',
        reading: 'けんきゅうか',
        meanings: 'researcher',
      },
      {
        kanji: '活動家',
        reading: 'かつどうか',
        meanings: 'activist',
      },
      {
        kanji: '家',
        reading: 'け',
        meanings: 'house',
      },
      {
        kanji: '家来',
        reading: 'けらい',
        meanings: 'retainer',
      },
      {
        kanji: '本家',
        reading: 'ほんけ',
        meanings: 'head house (family)',
      },
      {
        kanji: '公家',
        reading: 'くげ',
        meanings: 'court noble',
      },
    ],
  },
  {
    kanjiName: '紙',
    strokes: 10,
    grade: 2,
    freq: 559,
    meanings: ['Paper'],
    on: ['し'],
    kun: ['かみ'],
    wk_meanings: ['Paper'],
    jlpt: 4,
    quizAnswers: ['Resentment', 'Point', 'Ten Sho (vol)', 'Paper'],
    similars: [
      {
        kanji: '級',
        meaning: 'class',
      },
      {
        kanji: '紀',
        meaning: 'chronicle',
      },
      {
        kanji: '糾',
        meaning: 'twist',
      },
      {
        kanji: '紛',
        meaning: 'distract',
      },
      {
        kanji: '純',
        meaning: 'genuine',
      },
      {
        kanji: '紅',
        meaning: 'crimson',
      },
      {
        kanji: '約',
        meaning: 'promise',
      },
      {
        kanji: '給',
        meaning: 'salary',
      },
      {
        kanji: '絵',
        meaning: 'picture',
      },
      {
        kanji: '紹',
        meaning: 'introduce',
      },
    ],
    usedIn: [
      {
        kanji: '紙',
        reading: 'かみ',
        meanings: 'paper',
      },
      {
        kanji: '紙芝居',
        reading: 'かみしばい',
        meanings: 'kamishibai',
      },
      {
        kanji: 'インディア紙',
        reading: 'いんでぃあかみ',
        meanings: 'India paper',
      },
      {
        kanji: '頸上',
        reading: 'くびかみ',
        meanings: 'neckband',
      },
      {
        kanji: '紙',
        reading: 'し',
        meanings: 'newspaper',
      },
      {
        kanji: '紙上',
        reading: 'しじょう',
        meanings: 'on paper',
      },
      {
        kanji: '原稿用紙',
        reading: 'げんこうようし',
        meanings: 'Japanese writing paper (lined with a square grid',
      },
      {
        kanji: '製紙',
        reading: 'せいし',
        meanings: 'papermaking',
      },
    ],
  },
  {
    kanjiName: '通',
    strokes: 10,
    grade: 2,
    freq: 80,
    meanings: [
      'Traffic',
      'Pass Through',
      'Avenue',
      'Commute',
      'Counter For Letters, Notes, Documents, Etc.',
    ],
    on: ['つう', 'つ'],
    kun: [
      'とお.る',
      'とお.り',
      '-とお.り',
      '-どお.り',
      'とお.す',
      'とお.し',
      '-どお.し',
      'かよ.う',
    ],
    wk_meanings: ['Pass Through'],
    jlpt: 4,
    quizAnswers: ['Closed', 'Play', 'Discontinue', 'Traffic'],
    similars: [
      {
        kanji: '随',
        meaning: 'follow',
      },
      {
        kanji: '能',
        meaning: 'ability',
      },
      {
        kanji: '迫',
        meaning: 'urge',
      },
      {
        kanji: '削',
        meaning: 'plane',
      },
      {
        kanji: '遍',
        meaning: 'everywhere',
      },
      {
        kanji: '連',
        meaning: 'take along',
      },
      {
        kanji: '運',
        meaning: 'carry',
      },
      {
        kanji: '逸',
        meaning: 'deviate',
      },
      {
        kanji: '遭',
        meaning: 'encounter',
      },
      {
        kanji: '態',
        meaning: 'attitude',
      },
    ],
    usedIn: [
      {
        kanji: '通る',
        reading: 'とおる',
        meanings: 'to go by',
      },
      {
        kanji: '通り',
        reading: 'とおり',
        meanings: 'street',
      },
      {
        kanji: '通り過ぎる',
        reading: 'とおりすぎる',
        meanings: 'to go past',
      },
      {
        kanji: '通す',
        reading: 'とおす',
        meanings: 'to stick through',
      },
      {
        kanji: '通し',
        reading: 'とおし',
        meanings: 'continuing from beginning to end',
      },
      {
        kanji: '通し切符',
        reading: 'とおしきっぷ',
        meanings: 'through ticket (e.g. rail',
      },
      {
        kanji: '切通し',
        reading: 'きりどおし',
        meanings: 'road (or railway) cut through hilly terrain',
      },
      {
        kanji: '通う',
        reading: 'かよう',
        meanings: 'to go to and from (a place)',
      },
      {
        kanji: '通',
        reading: 'つう',
        meanings: 'authority',
      },
      {
        kanji: '通院',
        reading: 'つういん',
        meanings: 'going to the hospital for regular treatment',
      },
      {
        kanji: '富士通',
        reading: 'ふじつう',
        meanings: 'Fujitsu',
      },
      {
        kanji: '食通',
        reading: 'しょくつう',
        meanings: 'gourmandism',
      },
      {
        kanji: '通',
        reading: 'つう',
        meanings: 'authority',
      },
      {
        kanji: '通院',
        reading: 'つういん',
        meanings: 'going to the hospital for regular treatment',
      },
    ],
  },
  {
    kanjiName: '強',
    strokes: 11,
    grade: 2,
    freq: 112,
    meanings: ['Strong'],
    on: ['きょう', 'ごう'],
    kun: ['つよ.い', 'つよ.まる', 'つよ.める', 'し.いる', 'こわ.い'],
    wk_meanings: ['Strong', '^Strength'],
    jlpt: 4,
    quizAnswers: ['Strong', 'Get', 'Lively', 'Successful'],
    similars: [
      {
        kanji: '蛮',
        meaning: 'barbarian',
      },
      {
        kanji: '蚕',
        meaning: 'silkworm',
      },
      {
        kanji: '独',
        meaning: 'single',
      },
      {
        kanji: '虫',
        meaning: 'insect',
      },
      {
        kanji: '風',
        meaning: 'wind',
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug',
      },
      {
        kanji: '属',
        meaning: 'belong',
      },
      {
        kanji: '触',
        meaning: 'contact',
      },
      {
        kanji: '亜',
        meaning: 'Asia',
      },
      {
        kanji: '郡',
        meaning: 'county',
      },
    ],
    usedIn: [
      {
        kanji: '強い',
        reading: 'つよい',
        meanings: 'strong',
      },
      {
        kanji: '強い雨',
        reading: 'つよいあめ',
        meanings: 'heavy rain (specifically 20-29 mm per hour in JMA use)',
      },
      {
        kanji: '強まる',
        reading: 'つよまる',
        meanings: 'to get strong',
      },
      {
        kanji: '強める',
        reading: 'つよめる',
        meanings: 'to strengthen',
      },
      {
        kanji: '強いる',
        reading: 'しいる',
        meanings: 'to force',
      },
      {
        kanji: '強い',
        reading: 'こわい',
        meanings: 'tough',
      },
      {
        kanji: '強飯',
        reading: 'こわめし',
        meanings:
          'glutinous rice with red beans (eaten on celebratory occasions)',
      },
      {
        kanji: '強',
        reading: 'きょう',
        meanings: 'a little over',
      },
      {
        kanji: '強化',
        reading: 'きょうか',
        meanings: 'strengthening',
      },
      {
        kanji: '列強',
        reading: 'れっきょう',
        meanings: 'major powers of the world',
      },
      {
        kanji: '屈強',
        reading: 'くっきょう',
        meanings: 'robust',
      },
      {
        kanji: '強盗',
        reading: 'ごうとう',
        meanings: 'robber',
      },
      {
        kanji: '強引',
        reading: 'ごういん',
        meanings: 'overbearing',
      },
    ],
  },
  {
    kanjiName: '教',
    strokes: 11,
    grade: 2,
    freq: 166,
    meanings: ['Teach', 'Faith', 'Doctrine'],
    on: ['きょう'],
    kun: ['おし.える', 'おそ.わる'],
    wk_meanings: ['Teach'],
    jlpt: 4,
    quizAnswers: ['Futility', 'Govern', 'Long Time', 'Teach'],
    similars: [
      {
        kanji: '赦',
        meaning: 'pardon',
      },
      {
        kanji: '政',
        meaning: 'politics',
      },
      {
        kanji: '攻',
        meaning: 'aggression',
      },
      {
        kanji: '孝',
        meaning: 'filial piety',
      },
      {
        kanji: '契',
        meaning: 'pledge',
      },
      {
        kanji: '散',
        meaning: 'scatter',
      },
      {
        kanji: '敬',
        meaning: 'awe',
      },
      {
        kanji: '敢',
        meaning: 'daring',
      },
      {
        kanji: '致',
        meaning: 'doth',
      },
      {
        kanji: '枚',
        meaning: 'sheet of...',
      },
    ],
    usedIn: [
      {
        kanji: '教える',
        reading: 'おしえる',
        meanings: 'to teach',
      },
      {
        kanji: '教わる',
        reading: 'おそわる',
        meanings: 'to be taught',
      },
      {
        kanji: '教育委員会',
        reading: 'きょういくいいんかい',
        meanings: 'Board of Education',
      },
      {
        kanji: '教育',
        reading: 'きょういく',
        meanings: 'education',
      },
      {
        kanji: '政教',
        reading: 'せいきょう',
        meanings: 'religion and politics',
      },
      {
        kanji: '正教',
        reading: 'せいきょう',
        meanings: 'orthodoxy',
      },
    ],
  },
  {
    kanjiName: '理',
    strokes: 11,
    grade: 2,
    freq: 86,
    meanings: ['Logic', 'Arrangement', 'Reason', 'Justice', 'Truth'],
    on: ['り'],
    kun: ['ことわり'],
    wk_meanings: ['Reason'],
    jlpt: 4,
    quizAnswers: ['Logic', 'Smoke', 'Trouble', 'Receiving'],
    similars: [
      {
        kanji: '埋',
        meaning: 'bury',
      },
      {
        kanji: '班',
        meaning: 'squad',
      },
      {
        kanji: '現',
        meaning: 'present',
      },
      {
        kanji: '重',
        meaning: 'heavy',
      },
      {
        kanji: '厘',
        meaning: 'rin',
      },
      {
        kanji: '童',
        meaning: 'juvenile',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '都',
        meaning: 'metropolis',
      },
      {
        kanji: '里',
        meaning: 'ri',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
    ],
    usedIn: [
      {
        kanji: '理',
        reading: 'ことわり',
        meanings: 'reason',
      },
      {
        kanji: '理',
        reading: 'り',
        meanings: 'reason',
      },
      {
        kanji: '理科',
        reading: 'りか',
        meanings: 'science (inc. mathematics',
      },
      {
        kanji: '合理',
        reading: 'ごうり',
        meanings: 'rationality',
      },
      {
        kanji: '経理',
        reading: 'けいり',
        meanings: 'accounting',
      },
    ],
  },
  {
    kanjiName: '週',
    strokes: 11,
    grade: 2,
    freq: 540,
    meanings: ['Week'],
    on: ['しゅう'],
    kun: [],
    wk_meanings: ['Week'],
    jlpt: 4,
    quizAnswers: ['Drop', 'Degenerate', 'Meadow', 'Week'],
    similars: [
      {
        kanji: '造',
        meaning: 'create',
      },
      {
        kanji: '彫',
        meaning: 'carve',
      },
      {
        kanji: '周',
        meaning: 'circumference',
      },
      {
        kanji: '遣',
        meaning: 'dispatch',
      },
      {
        kanji: '適',
        meaning: 'suitable',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '舎',
        meaning: 'cottage',
      },
      {
        kanji: '逓',
        meaning: 'relay',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '遠',
        meaning: 'distant',
      },
    ],
    usedIn: [
      {
        kanji: '週',
        reading: 'しゅう',
        meanings: 'week',
      },
      {
        kanji: '週明け',
        reading: 'しゅうあけ',
        meanings: 'beginning of next week (usu. Monday)',
      },
      {
        kanji: '前週',
        reading: 'ぜんしゅう',
        meanings: 'last week',
      },
      {
        kanji: '隔週',
        reading: 'かくしゅう',
        meanings: 'every other week',
      },
    ],
  },
  {
    kanjiName: '魚',
    strokes: 11,
    grade: 2,
    freq: 1208,
    meanings: ['Fish'],
    on: ['ぎょ'],
    kun: ['うお', 'さかな', '-ざかな'],
    wk_meanings: ['Fish'],
    jlpt: 4,
    quizAnswers: ['Young', 'Spite', 'Remarkable', 'Fish'],
    similars: [
      {
        kanji: '漁',
        meaning: 'fishing',
      },
      {
        kanji: '逸',
        meaning: 'deviate',
      },
      {
        kanji: '鬼',
        meaning: 'ghost',
      },
      {
        kanji: '思',
        meaning: 'think',
      },
      {
        kanji: '鳥',
        meaning: 'bird',
      },
      {
        kanji: '息',
        meaning: 'breath',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '鮮',
        meaning: 'fresh',
      },
      {
        kanji: '煮',
        meaning: 'boil',
      },
      {
        kanji: '迫',
        meaning: 'urge',
      },
    ],
    usedIn: [
      {
        kanji: '魚',
        reading: 'さかな',
        meanings: 'fish',
      },
      {
        kanji: '魚市場',
        reading: 'うおいちば',
        meanings: 'fish market',
      },
      {
        kanji: '川魚',
        reading: 'かわうお',
        meanings: 'river fish',
      },
      {
        kanji: '活魚',
        reading: 'かつぎょ',
        meanings: 'live fish and shellfish (kept in a tank in a restaurant)',
      },
      {
        kanji: '魚',
        reading: 'さかな',
        meanings: 'fish',
      },
      {
        kanji: '魚釣り',
        reading: 'さかなつり',
        meanings: 'fishing',
      },
      {
        kanji: '旬の魚',
        reading: 'しゅんのさかな',
        meanings: 'fish in season',
      },
      {
        kanji: '魚類',
        reading: 'ぎょるい',
        meanings: 'fish',
      },
      {
        kanji: '魚介類',
        reading: 'ぎょかいるい',
        meanings: 'marine products',
      },
      {
        kanji: '鮮魚',
        reading: 'せんぎょ',
        meanings: 'fresh fish',
      },
      {
        kanji: '稚魚',
        reading: 'ちぎょ',
        meanings: 'fry',
      },
    ],
  },
  {
    kanjiName: '鳥',
    strokes: 11,
    grade: 2,
    freq: 1043,
    meanings: ['Bird', 'Chicken'],
    on: ['ちょう'],
    kun: ['とり'],
    wk_meanings: ['Bird'],
    jlpt: 4,
    quizAnswers: ['Till', 'Haven', 'Arrest', 'Bird'],
    similars: [
      {
        kanji: '鳴',
        meaning: 'chirp',
      },
      {
        kanji: '黒',
        meaning: 'black',
      },
      {
        kanji: '馬',
        meaning: 'horse',
      },
      {
        kanji: '魚',
        meaning: 'fish',
      },
      {
        kanji: '島',
        meaning: 'island',
      },
      {
        kanji: '息',
        meaning: 'breath',
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed',
      },
      {
        kanji: '焦',
        meaning: 'char',
      },
      {
        kanji: '煮',
        meaning: 'boil',
      },
      {
        kanji: '鶏',
        meaning: 'chicken',
      },
    ],
    usedIn: [
      {
        kanji: '鳥',
        reading: 'とり',
        meanings: 'bird',
      },
      {
        kanji: '鳥居',
        reading: 'とりい',
        meanings: 'torii (Shinto shrine archway)',
      },
      {
        kanji: '焼き鳥',
        reading: 'やきとり',
        meanings: 'yakitori',
      },
      {
        kanji: '花鶏',
        reading: 'あとり',
        meanings: 'brambling (bird) (Fringilla montifringilla)',
      },
      {
        kanji: '鶏肉',
        reading: 'とりにく',
        meanings: 'chicken meat',
      },
      {
        kanji: '鳥獣',
        reading: 'ちょうじゅう',
        meanings: 'birds and wild animals',
      },
      {
        kanji: '海鳥',
        reading: 'うみどり',
        meanings: 'sea bird',
      },
      {
        kanji: '愛鳥',
        reading: 'あいちょう',
        meanings: 'pet bird',
      },
    ],
  },
  {
    kanjiName: '黒',
    strokes: 11,
    grade: 2,
    freq: 573,
    meanings: ['Black'],
    on: ['こく'],
    kun: ['くろ', 'くろ.ずむ', 'くろ.い'],
    wk_meanings: ['Black'],
    jlpt: 4,
    quizAnswers: ['Black', 'Ink Stick', 'Bonfire', 'Wheat'],
    similars: [
      {
        kanji: '墨',
        meaning: 'black ink',
      },
      {
        kanji: '黙',
        meaning: 'silence',
      },
      {
        kanji: '薫',
        meaning: 'send forth fragrance',
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed',
      },
      {
        kanji: '野',
        meaning: 'plains',
      },
      {
        kanji: '時',
        meaning: 'time',
      },
      {
        kanji: '里',
        meaning: 'ri',
      },
      {
        kanji: '鳥',
        meaning: 'bird',
      },
      {
        kanji: '照',
        meaning: 'illuminate',
      },
      {
        kanji: '景',
        meaning: 'scenery',
      },
    ],
    usedIn: [
      {
        kanji: '黒',
        reading: 'くろ',
        meanings: 'black',
      },
      {
        kanji: '黒い',
        reading: 'くろい',
        meanings: 'black',
      },
      {
        kanji: '黒ずむ',
        reading: 'くろずむ',
        meanings: 'to blacken',
      },
      {
        kanji: '黒い',
        reading: 'くろい',
        meanings: 'black',
      },
      {
        kanji: '黒色',
        reading: 'くろいろ',
        meanings: 'black (colour',
      },
      {
        kanji: '黒煙',
        reading: 'こくえん',
        meanings: 'black smoke',
      },
      {
        kanji: '黒衣',
        reading: 'こくい',
        meanings: 'black clothes',
      },
      {
        kanji: '大黒',
        reading: 'だいこく',
        meanings: 'god of wealth',
      },
      {
        kanji: '二黒',
        reading: 'じこく',
        meanings:
          'second of nine traditional astrological signs (corresponding to Saturn and southwest)',
      },
    ],
  },
  {
    kanjiName: '住',
    strokes: 7,
    grade: 3,
    freq: 270,
    meanings: ['Dwell', 'Reside', 'Live', 'Inhabit'],
    on: ['じゅう', 'ぢゅう', 'ちゅう'],
    kun: ['す.む', 'す.まう', '-ず.まい'],
    wk_meanings: ['Dwelling', '^Reside', '^Dwell'],
    jlpt: 4,
    quizAnswers: ['Dwell', 'Knit', 'Roll Of Cloth', 'Line'],
    similars: [
      {
        kanji: '往',
        meaning: 'journey',
      },
      {
        kanji: '任',
        meaning: 'responsibility',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '狂',
        meaning: 'lunatic',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '全',
        meaning: 'whole',
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice',
      },
      {
        kanji: '柱',
        meaning: 'pillar',
      },
      {
        kanji: '皇',
        meaning: 'emperor',
      },
    ],
    usedIn: [
      {
        kanji: '住む',
        reading: 'すむ',
        meanings: 'to live (of humans)',
      },
      {
        kanji: '住まう',
        reading: 'すまう',
        meanings: 'to live',
      },
      {
        kanji: '住',
        reading: 'じゅう',
        meanings: 'dwelling',
      },
      {
        kanji: '住居',
        reading: 'じゅうきょ',
        meanings: 'dwelling',
      },
      {
        kanji: '先住',
        reading: 'せんじゅう',
        meanings: 'original inhabitant',
      },
      {
        kanji: '安住',
        reading: 'あんじゅう',
        meanings: 'living in peace',
      },
    ],
  },
  {
    kanjiName: '医',
    strokes: 7,
    grade: 3,
    freq: 437,
    meanings: ['Doctor', 'Medicine'],
    on: ['い'],
    kun: ['い.やす', 'い.する', 'くすし'],
    wk_meanings: ['Medicine'],
    jlpt: 4,
    quizAnswers: ['Shoulder', 'Rope', 'Doctor', 'Correct'],
    similars: [
      {
        kanji: '枢',
        meaning: 'hinge',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '匠',
        meaning: 'artisan',
      },
      {
        kanji: '麦',
        meaning: 'barley',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '区',
        meaning: 'ward',
      },
      {
        kanji: '励',
        meaning: 'encourage',
      },
      {
        kanji: '送',
        meaning: 'escort',
      },
      {
        kanji: '奏',
        meaning: 'play music',
      },
      {
        kanji: '辱',
        meaning: 'embarrass',
      },
    ],
    usedIn: [
      {
        kanji: '医する',
        reading: 'いする',
        meanings: 'to cure',
      },
      {
        kanji: '薬師',
        reading: 'くすし',
        meanings: 'doctor',
      },
      {
        kanji: '医',
        reading: 'い',
        meanings: 'medicine',
      },
      {
        kanji: '医院',
        reading: 'いいん',
        meanings: "doctor's office",
      },
      {
        kanji: '軍医',
        reading: 'ぐんい',
        meanings: 'military physician or surgeon',
      },
      {
        kanji: '校医',
        reading: 'こうい',
        meanings: 'school doctor',
      },
    ],
  },
  {
    kanjiName: '究',
    strokes: 7,
    grade: 3,
    freq: 368,
    meanings: ['Research', 'Study'],
    on: ['きゅう', 'く'],
    kun: ['きわ.める'],
    wk_meanings: ['Research'],
    jlpt: 4,
    quizAnswers: ['Fork In Road', 'Defense', 'Research', 'Behind'],
    similars: [
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '空',
        meaning: 'empty',
      },
      {
        kanji: '宅',
        meaning: 'home',
      },
      {
        kanji: '安',
        meaning: 'relax',
      },
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '光',
        meaning: 'ray',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
      {
        kanji: '窃',
        meaning: 'stealth',
      },
      {
        kanji: '実',
        meaning: 'reality',
      },
      {
        kanji: '容',
        meaning: 'contain',
      },
    ],
    usedIn: [
      {
        kanji: '極める',
        reading: 'きわめる',
        meanings: 'to carry to extremes',
      },
      {
        kanji: '究明',
        reading: 'きゅうめい',
        meanings: 'investigation (esp. in academic and scientific contexts)',
      },
      {
        kanji: '究極',
        reading: 'きゅうきょく',
        meanings: 'ultimate',
      },
      {
        kanji: '最新研究',
        reading: 'さいしんけんきゅう',
        meanings: 'the newest research',
      },
      {
        kanji: '学究',
        reading: 'がっきゅう',
        meanings: 'scholar',
      },
      {
        kanji: '究竟',
        reading: 'くきょう',
        meanings: 'culmination',
      },
      {
        kanji: '究竟',
        reading: 'くっきょう',
        meanings: 'after all',
      },
    ],
  },
  {
    kanjiName: '者',
    strokes: 8,
    grade: 3,
    freq: 38,
    meanings: ['Someone', 'Person'],
    on: ['しゃ'],
    kun: ['もの'],
    wk_meanings: ['Someone', '^Somebody'],
    jlpt: 4,
    quizAnswers: ['Someone', 'Connect', 'Profound', 'Choose'],
    similars: [
      {
        kanji: '春',
        meaning: 'springtime',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '拍',
        meaning: 'clap',
      },
      {
        kanji: '昔',
        meaning: 'once upon a time',
      },
      {
        kanji: '著',
        meaning: 'renowned',
      },
      {
        kanji: '都',
        meaning: 'metropolis',
      },
      {
        kanji: '音',
        meaning: 'sound',
      },
      {
        kanji: '暑',
        meaning: 'sultry',
      },
      {
        kanji: '煮',
        meaning: 'boil',
      },
      {
        kanji: '垣',
        meaning: 'hedge',
      },
    ],
    usedIn: [
      {
        kanji: '者',
        reading: 'もの',
        meanings: 'person',
      },
      {
        kanji: '者ども',
        reading: 'ものども',
        meanings: 'you',
      },
      {
        kanji: '弱き者',
        reading: 'よわきもの',
        meanings: 'weak person',
      },
      {
        kanji: '若い者',
        reading: 'わかいもの',
        meanings: 'young person',
      },
      {
        kanji: '者',
        reading: 'しゃ',
        meanings: 'person',
      },
      {
        kanji: '芸者',
        reading: 'げいしゃ',
        meanings: 'geisha',
      },
      {
        kanji: '加害者',
        reading: 'かがいしゃ',
        meanings: 'perpetrator',
      },
    ],
  },
  {
    kanjiName: '研',
    strokes: 9,
    grade: 3,
    freq: 336,
    meanings: ['Polish', 'Study Of', 'Sharpen'],
    on: ['けん'],
    kun: ['と.ぐ'],
    wk_meanings: ['Sharpen'],
    jlpt: 4,
    quizAnswers: ['Polish', 'Bay', 'Worry', 'Order'],
    similars: [
      {
        kanji: '砕',
        meaning: 'smash',
      },
      {
        kanji: '群',
        meaning: 'flock',
      },
      {
        kanji: '硫',
        meaning: 'sulphur',
      },
      {
        kanji: '架',
        meaning: 'erect',
      },
      {
        kanji: '叫',
        meaning: 'shout',
      },
      {
        kanji: '律',
        meaning: 'rhythm',
      },
      {
        kanji: '件',
        meaning: 'affair',
      },
      {
        kanji: '砂',
        meaning: 'sand',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '事',
        meaning: 'matter',
      },
    ],
    usedIn: [
      {
        kanji: '研ぐ',
        reading: 'とぐ',
        meanings: 'to sharpen',
      },
      {
        kanji: '研究員',
        reading: 'けんきゅういん',
        meanings: 'researcher',
      },
      {
        kanji: '研究',
        reading: 'けんきゅう',
        meanings: 'study',
      },
      {
        kanji: '予研',
        reading: 'よけん',
        meanings: 'National Institute of Health',
      },
      {
        kanji: '技研',
        reading: 'ぎけん',
        meanings: 'technical research institute',
      },
    ],
  },
  {
    kanjiName: '場',
    strokes: 12,
    grade: 2,
    freq: 52,
    meanings: ['Location', 'Place'],
    on: ['じょう', 'ちょう'],
    kun: ['ば'],
    wk_meanings: ['Location', '^Place'],
    jlpt: 4,
    quizAnswers: ['11am-1pm', 'Location', 'Inn', 'Fair'],
    similars: [
      {
        kanji: '揚',
        meaning: 'raise',
      },
      {
        kanji: '湯',
        meaning: 'hot water',
      },
      {
        kanji: '陽',
        meaning: 'sunshine',
      },
      {
        kanji: '堤',
        meaning: 'dike',
      },
      {
        kanji: '募',
        meaning: 'recruit',
      },
      {
        kanji: '傷',
        meaning: 'wound',
      },
      {
        kanji: '腸',
        meaning: 'intestines',
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)',
      },
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '易',
        meaning: 'easy',
      },
    ],
    usedIn: [
      {
        kanji: '場',
        reading: 'ば',
        meanings: 'place',
      },
      {
        kanji: '場合',
        reading: 'ばあい',
        meanings: 'case',
      },
      {
        kanji: '木場',
        reading: 'きば',
        meanings: 'lumberyard',
      },
      {
        kanji: '漁場',
        reading: 'ぎょじょう',
        meanings: 'fishing grounds',
      },
      {
        kanji: '場',
        reading: 'じょう',
        meanings: 'place',
      },
      {
        kanji: '場外',
        reading: 'じょうがい',
        meanings: 'outside the hall (or stadium',
      },
      {
        kanji: '斎場',
        reading: 'さいじょう',
        meanings: 'funeral hall',
      },
      {
        kanji: '開場',
        reading: 'かいじょう',
        meanings: 'opening (the doors of a venue)',
      },
    ],
  },
  {
    kanjiName: '朝',
    strokes: 12,
    grade: 2,
    freq: 248,
    meanings: [
      'Morning',
      'Dynasty',
      'Regime',
      'Epoch',
      'Period',
      '(north) Korea',
    ],
    on: ['ちょう'],
    kun: ['あさ'],
    wk_meanings: ['Morning'],
    jlpt: 4,
    quizAnswers: [
      'Morning',
      'Mulberry',
      'Rope',
      'Counter For Suits Of Clothing',
    ],
    similars: [
      {
        kanji: '潮',
        meaning: 'tide',
      },
      {
        kanji: '乾',
        meaning: 'drought',
      },
      {
        kanji: '幹',
        meaning: 'tree trunk',
      },
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '軸',
        meaning: 'axis',
      },
      {
        kanji: '門',
        meaning: 'gate',
      },
      {
        kanji: '期',
        meaning: 'period',
      },
      {
        kanji: '軟',
        meaning: 'soft',
      },
      {
        kanji: '軌',
        meaning: 'rut',
      },
      {
        kanji: '明',
        meaning: 'bright',
      },
    ],
    usedIn: [
      {
        kanji: '朝',
        reading: 'あさ',
        meanings: 'morning',
      },
      {
        kanji: '朝方',
        reading: 'あさがた',
        meanings: 'early morning',
      },
      {
        kanji: '後の朝',
        reading: 'のちのあした',
        meanings: 'the morning after (having slept together)',
      },
      {
        kanji: '霜朝',
        reading: 'しもあさ',
        meanings: 'frosty morning',
      },
      {
        kanji: '朝',
        reading: 'ちょう',
        meanings: 'dynasty',
      },
      {
        kanji: '朝刊',
        reading: 'ちょうかん',
        meanings: 'morning newspaper',
      },
      {
        kanji: '本朝',
        reading: 'ほんちょう',
        meanings: 'this land',
      },
      {
        kanji: '王朝',
        reading: 'おうちょう',
        meanings: 'dynasty',
      },
    ],
  },
  {
    kanjiName: '答',
    strokes: 12,
    grade: 2,
    freq: 486,
    meanings: ['Solution', 'Answer'],
    on: ['とう'],
    kun: ['こた.える', 'こた.え'],
    wk_meanings: ['Answer', '^Response', '^Reply'],
    jlpt: 4,
    quizAnswers: ['Moat', 'Ph.d.', 'Liver', 'Solution'],
    similars: [
      {
        kanji: '筒',
        meaning: 'cylinder',
      },
      {
        kanji: '箇',
        meaning: 'counter for articles',
      },
      {
        kanji: '笑',
        meaning: 'laugh',
      },
      {
        kanji: '符',
        meaning: 'token',
      },
      {
        kanji: '管',
        meaning: 'pipe',
      },
      {
        kanji: '俗',
        meaning: 'vulgar',
      },
      {
        kanji: '第',
        meaning: 'No.',
      },
      {
        kanji: '策',
        meaning: 'scheme',
      },
      {
        kanji: '等',
        meaning: 'etc.',
      },
      {
        kanji: '筋',
        meaning: 'muscle',
      },
    ],
    usedIn: [
      {
        kanji: '答える',
        reading: 'こたえる',
        meanings: 'to answer',
      },
      {
        kanji: '答え',
        reading: 'こたえ',
        meanings: 'answer',
      },
      {
        kanji: '答える',
        reading: 'こたえる',
        meanings: 'to answer',
      },
      {
        kanji: '答申',
        reading: 'とうしん',
        meanings: 'report',
      },
      {
        kanji: '答案',
        reading: 'とうあん',
        meanings: 'examination paper',
      },
      {
        kanji: '贈答',
        reading: 'ぞうとう',
        meanings: 'exchange of presents',
      },
      {
        kanji: '正答',
        reading: 'せいとう',
        meanings: 'correct answer',
      },
    ],
  },
  {
    kanjiName: '買',
    strokes: 12,
    grade: 2,
    freq: 520,
    meanings: ['Buy'],
    on: ['ばい'],
    kun: ['か.う'],
    wk_meanings: ['Buy'],
    jlpt: 4,
    quizAnswers: ['Fall Into', 'Model', 'Buy', 'Therefore'],
    similars: [
      {
        kanji: '貴',
        meaning: 'precious',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '賃',
        meaning: 'fare',
      },
      {
        kanji: '置',
        meaning: 'placement',
      },
      {
        kanji: '黄',
        meaning: 'yellow',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '貫',
        meaning: 'pierce',
      },
      {
        kanji: '偵',
        meaning: 'spy',
      },
      {
        kanji: '責',
        meaning: 'blame',
      },
      {
        kanji: '貞',
        meaning: 'upright',
      },
    ],
    usedIn: [
      {
        kanji: '買う',
        reading: 'かう',
        meanings: 'to buy',
      },
      {
        kanji: '買収',
        reading: 'ばいしゅう',
        meanings: 'acquisition (esp. corporate)',
      },
      {
        kanji: '買収計画',
        reading: 'ばいしゅうけいかく',
        meanings: 'purchasing plan',
      },
      {
        kanji: '不買',
        reading: 'ふばい',
        meanings: 'not buying',
      },
      {
        kanji: '人身売買',
        reading: 'じんしんばいばい',
        meanings: 'slave trade',
      },
    ],
  },
  {
    kanjiName: '道',
    strokes: 12,
    grade: 2,
    freq: 207,
    meanings: [
      'Road-way',
      'Street',
      'District',
      'Journey',
      'Course',
      'Moral',
      'Teachings',
    ],
    on: ['どう', 'とう'],
    kun: ['みち', 'いう'],
    wk_meanings: ['Road', '^Street', '^Path', '^Way'],
    jlpt: 4,
    quizAnswers: ['Straw Rope', 'Road-way', 'Dedicate', '3-5am'],
    similars: [
      {
        kanji: '導',
        meaning: 'guidance',
      },
      {
        kanji: '首',
        meaning: 'neck',
      },
      {
        kanji: '迫',
        meaning: 'urge',
      },
      {
        kanji: '運',
        meaning: 'carry',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '遵',
        meaning: 'abide by',
      },
      {
        kanji: '夏',
        meaning: 'summer',
      },
      {
        kanji: '遂',
        meaning: 'consummate',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
    ],
    usedIn: [
      {
        kanji: '道',
        reading: 'みち',
        meanings: 'road',
      },
      {
        kanji: '道筋',
        reading: 'みちすじ',
        meanings: 'path',
      },
      {
        kanji: '花道',
        reading: 'はなみち',
        meanings: 'elevated walkway through the audience to the stage (kabuki)',
      },
      {
        kanji: '横道',
        reading: 'よこみち',
        meanings: 'byway',
      },
      {
        kanji: '道',
        reading: 'どう',
        meanings: 'road',
      },
      {
        kanji: '道義',
        reading: 'どうぎ',
        meanings: 'morality',
      },
      {
        kanji: '正道',
        reading: 'せいどう',
        meanings: 'path of righteousness',
      },
      {
        kanji: '海道',
        reading: 'かいどう',
        meanings: 'sea route',
      },
      {
        kanji: '有道',
        reading: 'ゆうどう',
        meanings: 'being good',
      },
      {
        kanji: '不道',
        reading: 'ふどう',
        meanings: 'inhuman',
      },
    ],
  },
  {
    kanjiName: '楽',
    strokes: 13,
    grade: 2,
    freq: 373,
    meanings: ['Music', 'Comfort', 'Ease'],
    on: ['がく', 'らく', 'ごう'],
    kun: ['たの.しい', 'たの.しむ', 'この.む'],
    wk_meanings: ['Comfort', '^Ease', '^Pleasure'],
    jlpt: 4,
    quizAnswers: ['Protect', 'Sigh', 'Hemp', 'Music'],
    similars: [
      {
        kanji: '薬',
        meaning: 'medicine',
      },
      {
        kanji: '魅',
        meaning: 'fascination',
      },
      {
        kanji: '販',
        meaning: 'marketing',
      },
      {
        kanji: '朕',
        meaning: 'majestic plural',
      },
      {
        kanji: '閑',
        meaning: 'leisure',
      },
      {
        kanji: '財',
        meaning: 'property',
      },
      {
        kanji: '塁',
        meaning: 'bases',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '臭',
        meaning: 'stinking',
      },
      {
        kanji: '敗',
        meaning: 'failure',
      },
    ],
    usedIn: [
      {
        kanji: '楽しい',
        reading: 'たのしい',
        meanings: 'enjoyable',
      },
      {
        kanji: '楽しい思い出',
        reading: 'たのしいおもいで',
        meanings: 'happy memory',
      },
      {
        kanji: '楽しむ',
        reading: 'たのしむ',
        meanings: 'to enjoy',
      },
      {
        kanji: '楽',
        reading: 'がく',
        meanings: 'music',
      },
      {
        kanji: '楽章',
        reading: 'がくしょう',
        meanings: 'movement',
      },
      {
        kanji: '邦楽',
        reading: 'ほうがく',
        meanings: 'Japanese music (esp. traditional Japanese music)',
      },
      {
        kanji: '室内楽',
        reading: 'しつないがく',
        meanings: 'chamber music',
      },
      {
        kanji: '楽',
        reading: 'らく',
        meanings: 'comfort',
      },
      {
        kanji: '楽園',
        reading: 'らくえん',
        meanings: 'paradise',
      },
      {
        kanji: '千秋楽',
        reading: 'せんしゅうらく',
        meanings: 'final day of a performance',
      },
      {
        kanji: '行楽',
        reading: 'こうらく',
        meanings: 'outing',
      },
      {
        kanji: '猿楽',
        reading: 'さるがく',
        meanings:
          'sarugaku (form of theatre popular in Japan during the 11th to 14th centuries)',
      },
    ],
  },
  {
    kanjiName: '事',
    strokes: 8,
    grade: 3,
    freq: 18,
    meanings: ['Matter', 'Thing', 'Fact', 'Business', 'Reason', 'Possibly'],
    on: ['じ', 'ず'],
    kun: ['こと', 'つか.う', 'つか.える'],
    wk_meanings: ['Action', '^Matter', '^Thing'],
    jlpt: 4,
    quizAnswers: ['Leader', 'Forehead', 'Matter', 'Community'],
    similars: [
      {
        kanji: '亭',
        meaning: 'pavilion',
      },
      {
        kanji: '亜',
        meaning: 'Asia',
      },
      {
        kanji: '可',
        meaning: 'can',
      },
      {
        kanji: '豆',
        meaning: 'beans',
      },
      {
        kanji: '故',
        meaning: 'happenstance',
      },
      {
        kanji: '砕',
        meaning: 'smash',
      },
      {
        kanji: '研',
        meaning: 'polish',
      },
      {
        kanji: '停',
        meaning: 'halt',
      },
      {
        kanji: '許',
        meaning: 'permit',
      },
      {
        kanji: '詩',
        meaning: 'poem',
      },
    ],
    usedIn: [
      {
        kanji: '事',
        reading: 'こと',
        meanings: 'thing',
      },
      {
        kanji: '事柄',
        reading: 'ことがら',
        meanings: 'matter',
      },
      {
        kanji: '神事',
        reading: 'しんじ',
        meanings: 'Shinto ritual',
      },
      {
        kanji: 'いい事',
        reading: 'いいこと',
        meanings: 'good thing',
      },
      {
        kanji: '仕える',
        reading: 'つかえる',
        meanings: 'to serve',
      },
      {
        kanji: '事',
        reading: 'じ',
        meanings:
          'individual concrete phenomenon (as opposed to a general principle)',
      },
      {
        kanji: '事業',
        reading: 'じぎょう',
        meanings: 'business',
      },
      {
        kanji: '商事',
        reading: 'しょうじ',
        meanings: 'commercial affairs',
      },
      {
        kanji: '有事',
        reading: 'ゆうじ',
        meanings: 'emergency',
      },
    ],
  },
  {
    kanjiName: '使',
    strokes: 8,
    grade: 3,
    freq: 219,
    meanings: [
      'Use',
      'Send On A Mission',
      'Order',
      'Messenger',
      'Envoy',
      'Ambassador',
      'Cause',
    ],
    on: ['し'],
    kun: ['つか.う', 'つか.い', '-つか.い', '-づか.い'],
    wk_meanings: ['Use'],
    jlpt: 4,
    quizAnswers: ['Magic', 'Use', 'Melancholy', 'Bowstring'],
    similars: [
      {
        kanji: '倹',
        meaning: 'frugal',
      },
      {
        kanji: '何',
        meaning: 'what',
      },
      {
        kanji: '休',
        meaning: 'rest',
      },
      {
        kanji: '吏',
        meaning: 'officer',
      },
      {
        kanji: '促',
        meaning: 'stimulate',
      },
      {
        kanji: '便',
        meaning: 'convenience',
      },
      {
        kanji: '保',
        meaning: 'protect',
      },
      {
        kanji: '険',
        meaning: 'precipitous',
      },
      {
        kanji: '体',
        meaning: 'body',
      },
      {
        kanji: '向',
        meaning: 'yonder',
      },
    ],
    usedIn: [
      {
        kanji: '使う',
        reading: 'つかう',
        meanings: 'to use (a tool',
      },
      {
        kanji: '使い',
        reading: 'つかい',
        meanings: 'errand',
      },
      {
        kanji: '使い方',
        reading: 'つかいかた',
        meanings: 'way of using (something)',
      },
      {
        kanji: 'オズの魔法使い',
        reading: 'おずのまほうつかい',
        meanings: 'The Wonderful Wizard of Oz (novel by L. F. Baum',
      },
      {
        kanji: '春の使い',
        reading: 'はるのつかい',
        meanings: 'Japanese bush warbler',
      },
      {
        kanji: '使',
        reading: 'し',
        meanings: 'messenger',
      },
      {
        kanji: '使者',
        reading: 'ししゃ',
        meanings: 'messenger',
      },
      {
        kanji: '特使',
        reading: 'とくし',
        meanings: 'special envoy',
      },
      {
        kanji: '実力行使',
        reading: 'じつりょくこうし',
        meanings: 'use of force',
      },
    ],
  },
  {
    kanjiName: '始',
    strokes: 8,
    grade: 3,
    freq: 244,
    meanings: ['Commence', 'Begin'],
    on: ['し'],
    kun: ['はじ.める', '-はじ.める', 'はじ.まる'],
    wk_meanings: ['Begin', '^Start'],
    jlpt: 4,
    quizAnswers: ['Publish', 'Commence', 'Demon', 'Unreasonable'],
    similars: [
      {
        kanji: '如',
        meaning: 'likeness',
      },
      {
        kanji: '治',
        meaning: 'reign',
      },
      {
        kanji: '否',
        meaning: 'negate',
      },
      {
        kanji: '台',
        meaning: 'pedestal',
      },
      {
        kanji: '名',
        meaning: 'name',
      },
      {
        kanji: '胎',
        meaning: 'womb',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '各',
        meaning: 'each',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '姫',
        meaning: 'princess',
      },
    ],
    usedIn: [
      {
        kanji: '始める',
        reading: 'はじめる',
        meanings: 'to start',
      },
      {
        kanji: '始まる',
        reading: 'はじまる',
        meanings: 'to begin',
      },
      {
        kanji: '始発',
        reading: 'しはつ',
        meanings: 'first departure (of the day)',
      },
      {
        kanji: '始業',
        reading: 'しぎょう',
        meanings: 'start of work',
      },
      {
        kanji: '年始',
        reading: 'ねんし',
        meanings: 'beginning of the year',
      },
      {
        kanji: '創始',
        reading: 'そうし',
        meanings: 'creation',
      },
    ],
  },
  {
    kanjiName: '服',
    strokes: 8,
    grade: 3,
    freq: 873,
    meanings: ['Clothing', 'Admit', 'Obey', 'Discharge'],
    on: ['ふく'],
    kun: [],
    wk_meanings: ['Clothes', '^Clothing'],
    jlpt: 4,
    quizAnswers: ['Froth', 'Endure', 'Go Backwards', 'Clothing'],
    similars: [
      {
        kanji: '肢',
        meaning: 'limb',
      },
      {
        kanji: '用',
        meaning: 'utilize',
      },
      {
        kanji: '取',
        meaning: 'take',
      },
      {
        kanji: '脈',
        meaning: 'vein',
      },
      {
        kanji: '肺',
        meaning: 'lungs',
      },
      {
        kanji: '胞',
        meaning: 'placenta',
      },
      {
        kanji: '胎',
        meaning: 'womb',
      },
      {
        kanji: '腹',
        meaning: 'abdomen',
      },
      {
        kanji: '肌',
        meaning: 'texture',
      },
      {
        kanji: '肪',
        meaning: 'obese',
      },
    ],
    usedIn: [
      {
        kanji: '服',
        reading: 'ふく',
        meanings: 'clothes (esp. Western clothes)',
      },
      {
        kanji: '服役',
        reading: 'ふくえき',
        meanings: 'penal servitude',
      },
      {
        kanji: '私服',
        reading: 'しふく',
        meanings: 'ordinary clothes (i.e. non-uniform)',
      },
      {
        kanji: '呉服',
        reading: 'ごふく',
        meanings: 'cloth (for Japanese clothes)',
      },
    ],
  },
  {
    kanjiName: '物',
    strokes: 8,
    grade: 3,
    freq: 215,
    meanings: ['Thing', 'Object', 'Matter'],
    on: ['ぶつ', 'もつ'],
    kun: ['もの', 'もの-'],
    wk_meanings: ['Thing'],
    jlpt: 4,
    quizAnswers: ['Conduct', 'Thing', 'Shellfish', 'Fiber'],
    similars: [
      {
        kanji: '牧',
        meaning: 'breed',
      },
      {
        kanji: '秀',
        meaning: 'excel',
      },
      {
        kanji: '協',
        meaning: 'co-',
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice',
      },
      {
        kanji: '秋',
        meaning: 'autumn',
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)',
      },
      {
        kanji: '傷',
        meaning: 'wound',
      },
      {
        kanji: '委',
        meaning: 'committee',
      },
      {
        kanji: '易',
        meaning: 'easy',
      },
      {
        kanji: '秩',
        meaning: 'regularity',
      },
    ],
    usedIn: [
      {
        kanji: '物',
        reading: 'もの',
        meanings: 'thing',
      },
      {
        kanji: '物言い',
        reading: 'ものいい',
        meanings: 'manner of speaking',
      },
      {
        kanji: '先物',
        reading: 'さきもの',
        meanings: 'futures',
      },
      {
        kanji: '拾い物',
        reading: 'ひろいもの',
        meanings: 'found article',
      },
      {
        kanji: '物',
        reading: 'ぶつ',
        meanings: 'stock',
      },
      {
        kanji: '物議',
        reading: 'ぶつぎ',
        meanings: 'public discussion',
      },
      {
        kanji: '異物',
        reading: 'いぶつ',
        meanings: 'foreign substance',
      },
      {
        kanji: '遺物',
        reading: 'いぶつ',
        meanings: 'relic',
      },
      {
        kanji: '財物',
        reading: 'ざいぶつ',
        meanings: 'property',
      },
      {
        kanji: '幣物',
        reading: 'へいもつ',
        meanings: 'Shinto offerings',
      },
    ],
  },
  {
    kanjiName: '屋',
    strokes: 9,
    grade: 3,
    freq: 616,
    meanings: ['Roof', 'House', 'Shop', 'Dealer', 'Seller'],
    on: ['おく'],
    kun: ['や'],
    wk_meanings: ['Roof', '^Shop', '^Store'],
    jlpt: 4,
    quizAnswers: ['Paragraph', 'Sand', 'Roof', 'Defy'],
    similars: [
      {
        kanji: '握',
        meaning: 'grip',
      },
      {
        kanji: '至',
        meaning: 'climax',
      },
      {
        kanji: '室',
        meaning: 'room',
      },
      {
        kanji: '窒',
        meaning: 'plug up',
      },
      {
        kanji: '尉',
        meaning: 'military officer',
      },
      {
        kanji: '展',
        meaning: 'unfold',
      },
      {
        kanji: '塗',
        meaning: 'paint',
      },
      {
        kanji: '産',
        meaning: 'products',
      },
      {
        kanji: '涯',
        meaning: 'horizon',
      },
      {
        kanji: '社',
        meaning: 'company',
      },
    ],
    usedIn: [
      {
        kanji: '屋',
        reading: 'や',
        meanings: 'shop',
      },
      {
        kanji: '屋敷',
        reading: 'やしき',
        meanings: 'residence',
      },
      {
        kanji: '長屋',
        reading: 'ながや',
        meanings: 'tenement house',
      },
      {
        kanji: '総会屋',
        reading: 'そうかいや',
        meanings:
          'extortionist that threatens to disrupt stock-holder meetings',
      },
      {
        kanji: '屋',
        reading: 'おく',
        meanings: 'house',
      },
      {
        kanji: '屋外',
        reading: 'おくがい',
        meanings: 'outdoors',
      },
      {
        kanji: '草屋',
        reading: 'そうおく',
        meanings: 'thatched hut',
      },
      {
        kanji: '塔屋',
        reading: 'とうや',
        meanings: 'rooftop structure',
      },
    ],
  },
  {
    kanjiName: '度',
    strokes: 9,
    grade: 3,
    freq: 110,
    meanings: [
      'Degrees',
      'Occurrence',
      'Time',
      'Counter For Occurrences',
      'Consider',
      'Attitude',
    ],
    on: ['ど', 'と', 'たく'],
    kun: ['たび', '-た.い'],
    wk_meanings: ['Degrees', '^Occurrence'],
    jlpt: 4,
    quizAnswers: ['Circumstances', 'Degrees', 'Penetrate', 'Pray'],
    similars: [
      {
        kanji: '渡',
        meaning: 'transit',
      },
      {
        kanji: '席',
        meaning: 'seat',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '旋',
        meaning: 'rotation',
      },
      {
        kanji: '庶',
        meaning: 'commoner',
      },
      {
        kanji: '部',
        meaning: 'section',
      },
      {
        kanji: '庭',
        meaning: 'courtyard',
      },
      {
        kanji: '剖',
        meaning: 'divide',
      },
      {
        kanji: '報',
        meaning: 'report',
      },
      {
        kanji: '疫',
        meaning: 'epidemic',
      },
    ],
    usedIn: [
      {
        kanji: '度',
        reading: 'たび',
        meanings: 'time (three times',
      },
      {
        kanji: '度数',
        reading: 'どすう',
        meanings: 'frequency',
      },
      {
        kanji: '中度',
        reading: 'なかたび',
        meanings: 'midway (through)',
      },
      {
        kanji: '千度',
        reading: 'せんど',
        meanings: 'thousand times',
      },
      {
        kanji: '度',
        reading: 'ど',
        meanings: 'degree (angle',
      },
      {
        kanji: '度',
        reading: 'ど',
        meanings: 'precisely',
      },
      {
        kanji: '重度',
        reading: 'じゅうど',
        meanings: 'severe (illness',
      },
      {
        kanji: '濃度',
        reading: 'のうど',
        meanings: 'concentration',
      },
      {
        kanji: '法度',
        reading: 'はっと',
        meanings: 'ban',
      },
      {
        kanji: 'ご法度',
        reading: 'ごはっと',
        meanings: 'forbidden',
      },
      {
        kanji: '忖度',
        reading: 'そんたく',
        meanings: "surmise (about someone's feelings)",
      },
      {
        kanji: '臆度',
        reading: 'おくたく',
        meanings: 'guessing',
      },
    ],
  },
  {
    kanjiName: '待',
    strokes: 9,
    grade: 3,
    freq: 391,
    meanings: ['Wait', 'Depend On'],
    on: ['たい'],
    kun: ['ま.つ', '-ま.ち'],
    wk_meanings: ['Wait'],
    jlpt: 4,
    quizAnswers: ['Wait', 'Equal', 'Generosity', 'Field'],
    similars: [
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '特',
        meaning: 'special',
      },
      {
        kanji: '徐',
        meaning: 'gradually',
      },
      {
        kanji: '佳',
        meaning: 'excellent',
      },
      {
        kanji: '往',
        meaning: 'journey',
      },
      {
        kanji: '持',
        meaning: 'hold',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
      {
        kanji: '行',
        meaning: 'going',
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
      {
        kanji: '等',
        meaning: 'etc.',
      },
    ],
    usedIn: [
      {
        kanji: '待つ',
        reading: 'まつ',
        meanings: 'to wait',
      },
      {
        kanji: '待つ身は長い',
        reading: 'まつみはながい',
        meanings: 'a watched pot never boils',
      },
      {
        kanji: '待遇',
        reading: 'たいぐう',
        meanings: 'treatment',
      },
      {
        kanji: '待機',
        reading: 'たいき',
        meanings: 'standing by',
      },
      {
        kanji: '歓待',
        reading: 'かんたい',
        meanings: 'warm welcome',
      },
      {
        kanji: '優待',
        reading: 'ゆうたい',
        meanings: 'preferential treatment',
      },
    ],
  },
  {
    kanjiName: '持',
    strokes: 9,
    grade: 3,
    freq: 119,
    meanings: ['Hold', 'Have'],
    on: ['じ'],
    kun: ['も.つ', '-も.ち', 'も.てる'],
    wk_meanings: ['Hold'],
    jlpt: 4,
    quizAnswers: ['Get', 'Reward For', 'Hold', 'Design'],
    similars: [
      {
        kanji: '特',
        meaning: 'special',
      },
      {
        kanji: '掛',
        meaning: 'hang',
      },
      {
        kanji: '拷',
        meaning: 'torture',
      },
      {
        kanji: '拝',
        meaning: 'worship',
      },
      {
        kanji: '待',
        meaning: 'wait',
      },
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
      {
        kanji: '拡',
        meaning: 'broaden',
      },
      {
        kanji: '封',
        meaning: 'seal',
      },
      {
        kanji: '振',
        meaning: 'shake',
      },
    ],
    usedIn: [
      {
        kanji: '持つ',
        reading: 'もつ',
        meanings: "to hold (in one's hand)",
      },
      {
        kanji: '持子',
        reading: 'もつご',
        meanings: 'stone moroko (Pseudorasbora parva)',
      },
      {
        kanji: '持てる',
        reading: 'もてる',
        meanings: 'to be able to possess (hold',
      },
      {
        kanji: '持てる者',
        reading: 'もてるもの',
        meanings: '(the) haves',
      },
      {
        kanji: '持',
        reading: 'じ',
        meanings: 'draw (in go',
      },
      {
        kanji: '持久',
        reading: 'じきゅう',
        meanings: 'endurance',
      },
      {
        kanji: '堅持',
        reading: 'けんじ',
        meanings: 'holding on to',
      },
      {
        kanji: '護持',
        reading: 'ごじ',
        meanings: 'defend and maintain',
      },
    ],
  },
  {
    kanjiName: '界',
    strokes: 9,
    grade: 3,
    freq: 158,
    meanings: ['World', 'Boundary'],
    on: ['かい'],
    kun: [],
    wk_meanings: ['World'],
    jlpt: 4,
    quizAnswers: ['Shellfish', 'Gap', 'World', 'Calm'],
    similars: [
      {
        kanji: '畔',
        meaning: 'paddy ridge',
      },
      {
        kanji: '卑',
        meaning: 'lowly',
      },
      {
        kanji: '男',
        meaning: 'male',
      },
      {
        kanji: '易',
        meaning: 'easy',
      },
      {
        kanji: '昇',
        meaning: 'rise up',
      },
      {
        kanji: '略',
        meaning: 'abbreviation',
      },
      {
        kanji: '鬼',
        meaning: 'ghost',
      },
      {
        kanji: '申',
        meaning: 'have the honor to',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '県',
        meaning: 'prefecture',
      },
    ],
    usedIn: [
      {
        kanji: '界',
        reading: 'かい',
        meanings: 'community',
      },
      {
        kanji: '界隈',
        reading: 'かいわい',
        meanings: 'neighborhood',
      },
      {
        kanji: '球界',
        reading: 'きゅうかい',
        meanings: 'the baseball world',
      },
      {
        kanji: '経済界',
        reading: 'けいざいかい',
        meanings: 'economic world',
      },
    ],
  },
  {
    kanjiName: '発',
    strokes: 9,
    grade: 3,
    freq: 32,
    meanings: [
      'Departure',
      'Discharge',
      'Publish',
      'Emit',
      'Start From',
      'Disclose',
      'Counter For Gunshots',
    ],
    on: ['はつ', 'ほつ'],
    kun: ['た.つ', 'あば.く', 'おこ.る', 'つか.わす', 'はな.つ'],
    wk_meanings: ['Departure'],
    jlpt: 4,
    quizAnswers: ['Decide', 'Injure', 'Departure', 'Patch'],
    similars: [
      {
        kanji: '廃',
        meaning: 'abolish',
      },
      {
        kanji: '登',
        meaning: 'ascend',
      },
      {
        kanji: '尾',
        meaning: 'tail',
      },
      {
        kanji: '洗',
        meaning: 'wash',
      },
      {
        kanji: '光',
        meaning: 'ray',
      },
      {
        kanji: '柔',
        meaning: 'tender',
      },
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '渓',
        meaning: 'mountain stream',
      },
      {
        kanji: '斎',
        meaning: 'purification',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
    ],
    usedIn: [
      {
        kanji: '発つ',
        reading: 'たつ',
        meanings: 'to depart (on a journey',
      },
      {
        kanji: '立つ鳥跡を濁さず',
        reading: 'たつとりあとをにごさず',
        meanings: 'it is simply common courtesy to clean up after yourself',
      },
      {
        kanji: '暴く',
        reading: 'あばく',
        meanings: 'to disclose',
      },
      {
        kanji: '発',
        reading: 'はつ',
        meanings: 'departure',
      },
      {
        kanji: '発',
        reading: 'はつ',
        meanings: 'green dragon tile',
      },
      {
        kanji: '偶発',
        reading: 'ぐうはつ',
        meanings: 'sudden outbreak',
      },
      {
        kanji: '電源開発',
        reading: 'でんげんかいはつ',
        meanings: 'development of electrical power resources',
      },
      {
        kanji: '発熱',
        reading: 'はつねつ',
        meanings: 'generation of heat',
      },
      {
        kanji: '発議',
        reading: 'はつぎ',
        meanings: 'proposal',
      },
    ],
  },
  {
    kanjiName: '送',
    strokes: 9,
    grade: 3,
    freq: 311,
    meanings: ['Escort', 'Send'],
    on: ['そう'],
    kun: ['おく.る'],
    wk_meanings: ['Send'],
    jlpt: 4,
    quizAnswers: ['Few', 'Free', 'Pave', 'Escort'],
    similars: [
      {
        kanji: '迭',
        meaning: 'transfer',
      },
      {
        kanji: '迷',
        meaning: 'astray',
      },
      {
        kanji: '逆',
        meaning: 'inverted',
      },
      {
        kanji: '遂',
        meaning: 'consummate',
      },
      {
        kanji: '料',
        meaning: 'fee',
      },
      {
        kanji: '途',
        meaning: 'route',
      },
      {
        kanji: '逐',
        meaning: 'pursue',
      },
      {
        kanji: '逓',
        meaning: 'relay',
      },
      {
        kanji: '遅',
        meaning: 'slow',
      },
      {
        kanji: '達',
        meaning: 'accomplished',
      },
    ],
    usedIn: [
      {
        kanji: '送る',
        reading: 'おくる',
        meanings: 'to send (a thing)',
      },
      {
        kanji: '送球',
        reading: 'そうきゅう',
        meanings: 'throwing a ball',
      },
      {
        kanji: '送還',
        reading: 'そうかん',
        meanings: 'sending home',
      },
      {
        kanji: '葬送',
        reading: 'そうそう',
        meanings: 'attending a funeral procession',
      },
      {
        kanji: '移送',
        reading: 'いそう',
        meanings: 'transfer',
      },
    ],
  },
  {
    kanjiName: '重',
    strokes: 9,
    grade: 3,
    freq: 193,
    meanings: [
      'Heavy',
      'Important',
      'Esteem',
      'Respect',
      'Heap Up',
      'Pile Up',
      'Nest Of Boxes',
      '-fold',
    ],
    on: ['じゅう', 'ちょう'],
    kun: [
      'え',
      'おも.い',
      'おも.り',
      'おも.なう',
      'かさ.ねる',
      'かさ.なる',
      'おも',
    ],
    wk_meanings: ['Heavy'],
    jlpt: 4,
    quizAnswers: ['Even', 'Lost', 'Excavate', 'Heavy'],
    similars: [
      {
        kanji: '厘',
        meaning: 'rin',
      },
      {
        kanji: '里',
        meaning: 'ri',
      },
      {
        kanji: '皇',
        meaning: 'emperor',
      },
      {
        kanji: '童',
        meaning: 'juvenile',
      },
      {
        kanji: '動',
        meaning: 'move',
      },
      {
        kanji: '理',
        meaning: 'logic',
      },
      {
        kanji: '埋',
        meaning: 'bury',
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice',
      },
      {
        kanji: '量',
        meaning: 'quantity',
      },
      {
        kanji: '但',
        meaning: 'however',
      },
    ],
    usedIn: [
      {
        kanji: '重',
        reading: 'え',
        meanings: '-fold',
      },
      {
        kanji: '八重',
        reading: 'やえ',
        meanings: 'multilayered',
      },
      {
        kanji: '九重',
        reading: 'ここのえ',
        meanings: 'ninefold',
      },
      {
        kanji: '重い',
        reading: 'おもい',
        meanings: 'heavy',
      },
      {
        kanji: '重い腰を上げる',
        reading: 'おもいこしをあげる',
        meanings: "to get off one's backside",
      },
      {
        kanji: '重り',
        reading: 'おもり',
        meanings: 'weight',
      },
      {
        kanji: '重ねる',
        reading: 'かさねる',
        meanings: 'to pile up',
      },
      {
        kanji: '重なる',
        reading: 'かさなる',
        meanings: 'to be piled up',
      },
      {
        kanji: '主',
        reading: 'おも',
        meanings: 'chief',
      },
      {
        kanji: '重き',
        reading: 'おもき',
        meanings: 'importance',
      },
      {
        kanji: '身重',
        reading: 'みおも',
        meanings: 'pregnant',
      },
      {
        kanji: '気重',
        reading: 'きおも',
        meanings: 'heavy-hearted',
      },
      {
        kanji: '重',
        reading: 'じゅう',
        meanings: 'jūbako',
      },
      {
        kanji: '重圧',
        reading: 'じゅうあつ',
        meanings: 'strong pressure',
      },
      {
        kanji: '九重',
        reading: 'ここのえ',
        meanings: 'ninefold',
      },
      {
        kanji: '加重',
        reading: 'かじゅう',
        meanings: 'weighting (in averaging)',
      },
      {
        kanji: '重複',
        reading: 'ちょうふく',
        meanings: 'duplication',
      },
      {
        kanji: '重厚',
        reading: 'じゅうこう',
        meanings: 'profound',
      },
      {
        kanji: '加重',
        reading: 'かじゅう',
        meanings: 'weighting (in averaging)',
      },
      {
        kanji: '九重',
        reading: 'ここのえ',
        meanings: 'ninefold',
      },
    ],
  },
  {
    kanjiName: '起',
    strokes: 10,
    grade: 3,
    freq: 374,
    meanings: ['Rouse', 'Wake Up', 'Get Up'],
    on: ['き'],
    kun: ['お.きる', 'お.こる', 'お.こす', 'おこ.す', 'た.つ'],
    wk_meanings: ['Wake Up'],
    jlpt: 4,
    quizAnswers: ['Preserve', 'Jetty', 'Eight Radical (no. 12)', 'Rouse'],
    similars: [
      {
        kanji: '赴',
        meaning: 'proceed',
      },
      {
        kanji: '砲',
        meaning: 'cannon',
      },
      {
        kanji: '走',
        meaning: 'run',
      },
      {
        kanji: '巻',
        meaning: 'scroll',
      },
      {
        kanji: '港',
        meaning: 'harbor',
      },
      {
        kanji: '越',
        meaning: 'surpass',
      },
      {
        kanji: '奉',
        meaning: 'observance',
      },
      {
        kanji: '塔',
        meaning: 'pagoda',
      },
      {
        kanji: '孝',
        meaning: 'filial piety',
      },
      {
        kanji: '珍',
        meaning: 'rare',
      },
    ],
    usedIn: [
      {
        kanji: '起きる',
        reading: 'おきる',
        meanings: 'to get up',
      },
      {
        kanji: '起こる',
        reading: 'おこる',
        meanings: 'to occur',
      },
      {
        kanji: '起こす',
        reading: 'おこす',
        meanings: 'to raise',
      },
      {
        kanji: '起こす',
        reading: 'おこす',
        meanings: 'to raise',
      },
      {
        kanji: '起つ',
        reading: 'たつ',
        meanings: 'to take action',
      },
      {
        kanji: '起源',
        reading: 'きげん',
        meanings: 'origin',
      },
      {
        kanji: '起因',
        reading: 'きいん',
        meanings: 'to be caused by',
      },
      {
        kanji: '突起',
        reading: 'とっき',
        meanings: 'protuberance',
      },
      {
        kanji: '決起',
        reading: 'けっき',
        meanings: 'rising to action',
      },
    ],
  },
  {
    kanjiName: '院',
    strokes: 10,
    grade: 3,
    freq: 150,
    meanings: ['Inst.', 'Institution', 'Temple', 'Mansion', 'School'],
    on: ['いん'],
    kun: [],
    wk_meanings: ['Institution'],
    jlpt: 4,
    quizAnswers: ['Spear', 'Escape From', 'Inst.', 'Check'],
    similars: [
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '崇',
        meaning: 'adore',
      },
      {
        kanji: '防',
        meaning: 'ward off',
      },
      {
        kanji: '陪',
        meaning: 'obeisance',
      },
      {
        kanji: '宅',
        meaning: 'home',
      },
      {
        kanji: '宇',
        meaning: 'eaves',
      },
      {
        kanji: '発',
        meaning: 'departure',
      },
      {
        kanji: '宗',
        meaning: 'religion',
      },
      {
        kanji: '光',
        meaning: 'ray',
      },
      {
        kanji: '実',
        meaning: 'reality',
      },
    ],
    usedIn: [
      {
        kanji: '院',
        reading: 'いん',
        meanings: 'house of parliament (congress',
      },
      {
        kanji: '院長',
        reading: 'いんちょう',
        meanings: 'director (of a hospital',
      },
      {
        kanji: '議院',
        reading: 'ぎいん',
        meanings: 'parliament',
      },
      {
        kanji: '棋院',
        reading: 'きいん',
        meanings: 'go institution',
      },
    ],
  },
  {
    kanjiName: '終',
    strokes: 11,
    grade: 3,
    freq: 256,
    meanings: ['End', 'Finish'],
    on: ['しゅう'],
    kun: ['お.わる', '-お.わる', 'おわ.る', 'お.える', 'つい', 'つい.に'],
    wk_meanings: ['End', '^Finish'],
    jlpt: 4,
    quizAnswers: ['Escape', 'Prudent', 'Piece', 'End'],
    similars: [
      {
        kanji: '絡',
        meaning: 'entwine',
      },
      {
        kanji: '級',
        meaning: 'class',
      },
      {
        kanji: '紛',
        meaning: 'distract',
      },
      {
        kanji: '約',
        meaning: 'promise',
      },
      {
        kanji: '経',
        meaning: 'sutra',
      },
      {
        kanji: '紙',
        meaning: 'paper',
      },
      {
        kanji: '純',
        meaning: 'genuine',
      },
      {
        kanji: '縫',
        meaning: 'sew',
      },
      {
        kanji: '統',
        meaning: 'overall',
      },
      {
        kanji: '絵',
        meaning: 'picture',
      },
    ],
    usedIn: [
      {
        kanji: '終わる',
        reading: 'おわる',
        meanings: 'to end',
      },
      {
        kanji: '終わる',
        reading: 'おわる',
        meanings: 'to end',
      },
      {
        kanji: '終える',
        reading: 'おえる',
        meanings: 'to finish',
      },
      {
        kanji: '終',
        reading: 'つい',
        meanings: 'end',
      },
      {
        kanji: '遂に',
        reading: 'ついに',
        meanings: 'finally',
      },
      {
        kanji: '遂に',
        reading: 'ついに',
        meanings: 'finally',
      },
      {
        kanji: '終局',
        reading: 'しゅうきょく',
        meanings: 'end',
      },
      {
        kanji: '終焉',
        reading: 'しゅうえん',
        meanings: 'end (of life)',
      },
      {
        kanji: '有終',
        reading: 'ゆうしゅう',
        meanings: 'carrying out to the end',
      },
      {
        kanji: 'サ終',
        reading: 'さしゅう',
        meanings: 'end of service (esp. of an online server)',
      },
    ],
  },
  {
    kanjiName: '習',
    strokes: 11,
    grade: 3,
    freq: 706,
    meanings: ['Learn'],
    on: ['しゅう', 'じゅ'],
    kun: ['なら.う', 'なら.い'],
    wk_meanings: ['Learn'],
    jlpt: 4,
    quizAnswers: ['Learn', 'Rinse Mouth', 'Rebel', 'Summon'],
    similars: [
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
      {
        kanji: '油',
        meaning: 'oil',
      },
      {
        kanji: '消',
        meaning: 'extinguish',
      },
      {
        kanji: '宿',
        meaning: 'inn',
      },
      {
        kanji: '羽',
        meaning: 'feathers',
      },
      {
        kanji: '翌',
        meaning: 'the following',
      },
      {
        kanji: '拍',
        meaning: 'clap',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '翼',
        meaning: 'wing',
      },
      {
        kanji: '演',
        meaning: 'performance',
      },
    ],
    usedIn: [
      {
        kanji: '習う',
        reading: 'ならう',
        meanings: 'to take lessons in',
      },
      {
        kanji: '習うより慣れろ',
        reading: 'ならうよりなれろ',
        meanings: 'experience is the best teacher',
      },
      {
        kanji: '習い',
        reading: 'ならい',
        meanings: 'as is habit',
      },
      {
        kanji: '習い事',
        reading: 'ならいごと',
        meanings: 'accomplishment',
      },
      {
        kanji: '見習い',
        reading: 'みならい',
        meanings: 'apprenticeship',
      },
      {
        kanji: '行儀見習い',
        reading: 'ぎょうぎみならい',
        meanings:
          'learning good manners through apprenticeship (to an upper-class family)',
      },
      {
        kanji: '習性',
        reading: 'しゅうせい',
        meanings: 'habit',
      },
      {
        kanji: '習慣',
        reading: 'しゅうかん',
        meanings: 'habit',
      },
      {
        kanji: '演習',
        reading: 'えんしゅう',
        meanings: 'practice',
      },
      {
        kanji: '教習',
        reading: 'きょうしゅう',
        meanings: 'training',
      },
      {
        kanji: '近習',
        reading: 'きんじゅ',
        meanings: 'attendant',
      },
    ],
  },
  {
    kanjiName: '転',
    strokes: 11,
    grade: 3,
    freq: 327,
    meanings: ['Revolve', 'Turn Around', 'Change'],
    on: ['てん'],
    kun: [
      'ころ.がる',
      'ころ.げる',
      'ころ.がす',
      'ころ.ぶ',
      'まろ.ぶ',
      'うたた',
      'うつ.る',
      'くる.めく',
    ],
    wk_meanings: ['Revolve'],
    jlpt: 4,
    quizAnswers: ['Ward', 'Revolve', 'First Time', 'Give To'],
    similars: [
      {
        kanji: '軒',
        meaning: 'flats',
      },
      {
        kanji: '時',
        meaning: 'time',
      },
      {
        kanji: '較',
        meaning: 'contrast',
      },
      {
        kanji: '軽',
        meaning: 'lightly',
      },
      {
        kanji: '皇',
        meaning: 'emperor',
      },
      {
        kanji: '軌',
        meaning: 'rut',
      },
      {
        kanji: '乾',
        meaning: 'drought',
      },
      {
        kanji: '連',
        meaning: 'take along',
      },
      {
        kanji: '専',
        meaning: 'specialty',
      },
      {
        kanji: '軟',
        meaning: 'soft',
      },
    ],
    usedIn: [
      {
        kanji: '転がる',
        reading: 'ころがる',
        meanings: 'to roll',
      },
      {
        kanji: '転がる石には苔は付かない',
        reading: 'ころがるいしにはこけはつかない',
        meanings: 'a rolling stone gathers no moss',
      },
      {
        kanji: '転げる',
        reading: 'ころげる',
        meanings: 'to roll over',
      },
      {
        kanji: '転がす',
        reading: 'ころがす',
        meanings: 'to roll',
      },
      {
        kanji: '転ぶ',
        reading: 'ころぶ',
        meanings: 'to fall down',
      },
      {
        kanji: '転ぶ',
        reading: 'ころぶ',
        meanings: 'to fall down',
      },
      {
        kanji: '転',
        reading: 'うたた',
        meanings: 'more and more',
      },
      {
        kanji: 'うたた寝',
        reading: 'うたたね',
        meanings: 'doze',
      },
      {
        kanji: '眩く',
        reading: 'くるめく',
        meanings: 'to feel dizzy',
      },
      {
        kanji: '転',
        reading: 'てん',
        meanings: 'change in pronunciation or meaning of a word',
      },
      {
        kanji: '転移',
        reading: 'てんい',
        meanings: 'moving (location',
      },
      {
        kanji: '不退転',
        reading: 'ふたいてん',
        meanings: 'determination',
      },
      {
        kanji: '大回転',
        reading: 'だいかいてん',
        meanings: 'giant slalom',
      },
    ],
  },
  {
    kanjiName: '運',
    strokes: 12,
    grade: 3,
    freq: 255,
    meanings: [
      'Carry',
      'Luck',
      'Destiny',
      'Fate',
      'Lot',
      'Transport',
      'Progress',
      'Advance',
    ],
    on: ['うん'],
    kun: ['はこ.ぶ'],
    wk_meanings: ['Carry', '^Luck'],
    jlpt: 4,
    quizAnswers: ['Follower', 'Criminal Investigation', 'Clause', 'Carry'],
    similars: [
      {
        kanji: '連',
        meaning: 'take along',
      },
      {
        kanji: '軍',
        meaning: 'army',
      },
      {
        kanji: '道',
        meaning: 'road-way',
      },
      {
        kanji: '遵',
        meaning: 'abide by',
      },
      {
        kanji: '凍',
        meaning: 'frozen',
      },
      {
        kanji: '宣',
        meaning: 'proclaim',
      },
      {
        kanji: '軌',
        meaning: 'rut',
      },
      {
        kanji: '巣',
        meaning: 'nest',
      },
      {
        kanji: '軒',
        meaning: 'flats',
      },
      {
        kanji: '車',
        meaning: 'car',
      },
    ],
    usedIn: [
      {
        kanji: '運ぶ',
        reading: 'はこぶ',
        meanings: 'to carry',
      },
      {
        kanji: '運',
        reading: 'うん',
        meanings: 'fortune',
      },
      {
        kanji: '運営',
        reading: 'うんえい',
        meanings: 'management',
      },
      {
        kanji: '機運',
        reading: 'きうん',
        meanings: 'opportunity',
      },
      {
        kanji: '命運',
        reading: 'めいうん',
        meanings: 'fate',
      },
    ],
  },
  {
    kanjiName: '開',
    strokes: 12,
    grade: 3,
    freq: 59,
    meanings: ['Open', 'Unfold', 'Unseal'],
    on: ['かい'],
    kun: ['ひら.く', 'ひら.き', '-びら.き', 'ひら.ける', 'あ.く', 'あ.ける'],
    wk_meanings: ['Open'],
    jlpt: 4,
    quizAnswers: ['Argument', 'Open', 'Whey', 'Talent'],
    similars: [
      {
        kanji: '閉',
        meaning: 'closed',
      },
      {
        kanji: '閑',
        meaning: 'leisure',
      },
      {
        kanji: '関',
        meaning: 'connection',
      },
      {
        kanji: '聞',
        meaning: 'hear',
      },
      {
        kanji: '間',
        meaning: 'interval',
      },
      {
        kanji: '門',
        meaning: 'gate',
      },
      {
        kanji: '問',
        meaning: 'question',
      },
      {
        kanji: '閥',
        meaning: 'clique',
      },
      {
        kanji: '閣',
        meaning: 'tower',
      },
      {
        kanji: '潤',
        meaning: 'wet',
      },
    ],
    usedIn: [
      {
        kanji: '開く',
        reading: 'ひらく',
        meanings: 'to open',
      },
      {
        kanji: '開き',
        reading: 'ひらき',
        meanings: 'opening',
      },
      {
        kanji: '開き直る',
        reading: 'ひらきなおる',
        meanings: 'to become defiant',
      },
      {
        kanji: '開ける',
        reading: 'ひらける',
        meanings: 'to open out (of a view',
      },
      {
        kanji: '開く',
        reading: 'あく',
        meanings: 'to open (e.g. doors)',
      },
      {
        kanji: '開ける',
        reading: 'あける',
        meanings: 'to open (a door',
      },
      {
        kanji: '開花',
        reading: 'かいか',
        meanings: 'flowering',
      },
      {
        kanji: '開演',
        reading: 'かいえん',
        meanings: 'curtain raising',
      },
      {
        kanji: '疎開',
        reading: 'そかい',
        meanings: 'evacuation (to the country)',
      },
      {
        kanji: '非公開',
        reading: 'ひこうかい',
        meanings: 'private',
      },
    ],
  },
  {
    kanjiName: '集',
    strokes: 12,
    grade: 3,
    freq: 210,
    meanings: ['Gather', 'Meet', 'Congregate', 'Swarm', 'Flock'],
    on: ['しゅう'],
    kun: ['あつ.まる', 'あつ.める', 'つど.う'],
    wk_meanings: ['Collect', '^Gather'],
    jlpt: 4,
    quizAnswers: ['Be Indignant', 'Gather', 'Lead', 'Commander'],
    similars: [
      {
        kanji: '隻',
        meaning: 'vessels',
      },
      {
        kanji: '帳',
        meaning: 'notebook',
      },
      {
        kanji: '進',
        meaning: 'advance',
      },
      {
        kanji: '焦',
        meaning: 'char',
      },
      {
        kanji: '脹',
        meaning: 'dilate',
      },
      {
        kanji: '歓',
        meaning: 'delight',
      },
      {
        kanji: '準',
        meaning: 'semi-',
      },
      {
        kanji: '張',
        meaning: 'counter for bows & stringed instruments',
      },
      {
        kanji: '保',
        meaning: 'protect',
      },
      {
        kanji: '長',
        meaning: 'long',
      },
    ],
    usedIn: [
      {
        kanji: '集まる',
        reading: 'あつまる',
        meanings: 'to gather',
      },
      {
        kanji: '集める',
        reading: 'あつめる',
        meanings: 'to collect',
      },
      {
        kanji: '集う',
        reading: 'つどう',
        meanings: 'to meet',
      },
      {
        kanji: '集',
        reading: 'しゅう',
        meanings: 'collection',
      },
      {
        kanji: '集荷',
        reading: 'しゅうか',
        meanings: 'collection of cargo (esp. produce',
      },
      {
        kanji: '句集',
        reading: 'くしゅう',
        meanings: 'collection of haiku poems',
      },
      {
        kanji: '歌集',
        reading: 'かしゅう',
        meanings: 'collection of waka poems',
      },
    ],
  },
  {
    kanjiName: '飲',
    strokes: 12,
    grade: 3,
    freq: 969,
    meanings: ['Drink', 'Smoke', 'Take'],
    on: ['いん', 'おん'],
    kun: ['の.む', '-の.み'],
    wk_meanings: ['Drink'],
    jlpt: 4,
    quizAnswers: ['Likeness', 'Dismiss', 'Withdraw', 'Drink'],
    similars: [
      {
        kanji: '飢',
        meaning: 'hungry',
      },
      {
        kanji: '飯',
        meaning: 'meal',
      },
      {
        kanji: '飽',
        meaning: 'sated',
      },
      {
        kanji: '飾',
        meaning: 'decorate',
      },
      {
        kanji: '餓',
        meaning: 'starve',
      },
      {
        kanji: '食',
        meaning: 'eat',
      },
      {
        kanji: '飼',
        meaning: 'domesticate',
      },
      {
        kanji: '娘',
        meaning: 'daughter',
      },
      {
        kanji: '欺',
        meaning: 'deceit',
      },
      {
        kanji: '良',
        meaning: 'good',
      },
    ],
    usedIn: [
      {
        kanji: '飲む',
        reading: 'のむ',
        meanings: 'to drink',
      },
      {
        kanji: '飲む打つ買う',
        reading: 'のむうつかう',
        meanings: 'drinking',
      },
      {
        kanji: '飲',
        reading: 'いん',
        meanings: 'drinking (sometimes esp. alcohol)',
      },
      {
        kanji: '飲酒',
        reading: 'いんしゅ',
        meanings: 'drinking alcohol',
      },
      {
        kanji: '暴飲',
        reading: 'ぼういん',
        meanings: 'heavy drinking',
      },
      {
        kanji: '愛飲',
        reading: 'あいいん',
        meanings: 'drinking habitually',
      },
      {
        kanji: '飲食',
        reading: 'いんしょく',
        meanings: 'food and drink',
      },
      {
        kanji: '飲酒',
        reading: 'おんじゅ',
        meanings:
          'consumption of alcohol (as prohibited by one of the Buddhist precepts)',
      },
    ],
  },
  {
    kanjiName: '業',
    strokes: 13,
    grade: 3,
    freq: 43,
    meanings: ['Business', 'Vocation', 'Arts', 'Performance'],
    on: ['ぎょう', 'ごう'],
    kun: ['わざ'],
    wk_meanings: ['Business'],
    jlpt: 4,
    quizAnswers: ['Reliable', 'Arms', 'Character', 'Business'],
    similars: [
      {
        kanji: '僕',
        meaning: 'me',
      },
      {
        kanji: '撲',
        meaning: 'slap',
      },
      {
        kanji: '兼',
        meaning: 'concurrently',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
      {
        kanji: '美',
        meaning: 'beauty',
      },
      {
        kanji: '菜',
        meaning: 'vegetable',
      },
      {
        kanji: '麻',
        meaning: 'hemp',
      },
      {
        kanji: '廉',
        meaning: 'bargain',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '殊',
        meaning: 'particularly',
      },
    ],
    usedIn: [
      {
        kanji: '業',
        reading: 'わざ',
        meanings: 'deed',
      },
      {
        kanji: '業師',
        reading: 'わざし',
        meanings: 'tricky wrestler',
      },
      {
        kanji: '寝技',
        reading: 'ねわざ',
        meanings: 'pinning technique (in wrestling or judo)',
      },
      {
        kanji: '投げ技',
        reading: 'なげわざ',
        meanings: 'throw or throwing technique (sumo',
      },
      {
        kanji: '業',
        reading: 'ぎょう',
        meanings: 'work',
      },
      {
        kanji: '業界',
        reading: 'ぎょうかい',
        meanings: 'business world',
      },
      {
        kanji: '興業',
        reading: 'こうぎょう',
        meanings: 'promotion of industry',
      },
      {
        kanji: '鉱業',
        reading: 'こうぎょう',
        meanings: 'mining industry',
      },
      {
        kanji: '業',
        reading: 'ごう',
        meanings: 'karma',
      },
      {
        kanji: '業因',
        reading: 'ごういん',
        meanings: 'karma',
      },
      {
        kanji: '罪業',
        reading: 'ざいごう',
        meanings: 'sin',
      },
      {
        kanji: '正業',
        reading: 'しょうごう',
        meanings: 'right action',
      },
    ],
  },
  {
    kanjiName: '漢',
    strokes: 13,
    grade: 3,
    freq: 1487,
    meanings: ['Sino-', 'China'],
    on: ['かん'],
    kun: [],
    wk_meanings: ['Chinese', '^China'],
    jlpt: 4,
    quizAnswers: ['Sino-', 'Farm', 'Rapture', 'Need Not'],
    similars: [
      {
        kanji: '漠',
        meaning: 'vague',
      },
      {
        kanji: '嘆',
        meaning: 'sigh',
      },
      {
        kanji: '涙',
        meaning: 'tears',
      },
      {
        kanji: '故',
        meaning: 'happenstance',
      },
      {
        kanji: '湖',
        meaning: 'lake',
      },
      {
        kanji: '涼',
        meaning: 'refreshing',
      },
      {
        kanji: '洪',
        meaning: 'deluge',
      },
      {
        kanji: '濃',
        meaning: 'concentrated',
      },
      {
        kanji: '活',
        meaning: 'lively',
      },
      {
        kanji: '美',
        meaning: 'beauty',
      },
    ],
    usedIn: [
      {
        kanji: '漢',
        reading: 'かん',
        meanings: 'China',
      },
      {
        kanji: '漢字',
        reading: 'かんじ',
        meanings: 'kanji',
      },
      {
        kanji: '巨漢',
        reading: 'きょかん',
        meanings: 'giant',
      },
      {
        kanji: '門外漢',
        reading: 'もんがいかん',
        meanings: 'outsider',
      },
    ],
  },
  {
    kanjiName: '歌',
    strokes: 14,
    grade: 2,
    freq: 519,
    meanings: ['Song', 'Sing'],
    on: ['か'],
    kun: ['うた', 'うた.う'],
    wk_meanings: ['Song', '^Sing'],
    jlpt: 4,
    quizAnswers: ['Song', 'Flats', 'Agreement', 'Sputter'],
    similars: [
      {
        kanji: '喪',
        meaning: 'miss',
      },
      {
        kanji: '使',
        meaning: 'use',
      },
      {
        kanji: '較',
        meaning: 'contrast',
      },
      {
        kanji: '敬',
        meaning: 'awe',
      },
      {
        kanji: '倹',
        meaning: 'frugal',
      },
      {
        kanji: '嘆',
        meaning: 'sigh',
      },
      {
        kanji: '哀',
        meaning: 'pathetic',
      },
      {
        kanji: '味',
        meaning: 'flavor',
      },
      {
        kanji: '故',
        meaning: 'happenstance',
      },
      {
        kanji: '砂',
        meaning: 'sand',
      },
    ],
    usedIn: [
      {
        kanji: '歌',
        reading: 'うた',
        meanings: 'song',
      },
      {
        kanji: '歌合',
        reading: 'うたあわせ',
        meanings: 'poetry contest',
      },
      {
        kanji: '短歌',
        reading: 'たんか',
        meanings: 'tanka',
      },
      {
        kanji: '替え歌',
        reading: 'かえうた',
        meanings: 'parody (of a song)',
      },
      {
        kanji: '歌う',
        reading: 'うたう',
        meanings: 'to sing',
      },
      {
        kanji: '歌うたい',
        reading: 'うたうたい',
        meanings: 'singer',
      },
      {
        kanji: '歌劇',
        reading: 'かげき',
        meanings: 'opera',
      },
      {
        kanji: '歌曲',
        reading: 'かきょく',
        meanings: 'melody',
      },
      {
        kanji: '演歌',
        reading: 'えんか',
        meanings: 'enka',
      },
      {
        kanji: '和歌',
        reading: 'わか',
        meanings: 'waka',
      },
    ],
  },
  {
    kanjiName: '親',
    strokes: 16,
    grade: 2,
    freq: 406,
    meanings: [
      'Parent',
      'Intimacy',
      'Relative',
      'Familiarity',
      'Dealer (cards)',
    ],
    on: ['しん'],
    kun: ['おや', 'おや-', 'した.しい', 'した.しむ'],
    wk_meanings: ['Parent'],
    jlpt: 4,
    quizAnswers: ['Make Light Of', 'Parent', 'Sultry', 'Hedge'],
    similars: [
      {
        kanji: '規',
        meaning: 'standard',
      },
      {
        kanji: '顔',
        meaning: 'face',
      },
      {
        kanji: '韻',
        meaning: 'rhyme',
      },
      {
        kanji: '賞',
        meaning: 'prize',
      },
      {
        kanji: '竜',
        meaning: 'dragon',
      },
      {
        kanji: '賛',
        meaning: 'approve',
      },
      {
        kanji: '頑',
        meaning: 'stubborn',
      },
      {
        kanji: '寛',
        meaning: 'tolerant',
      },
      {
        kanji: '魔',
        meaning: 'witch',
      },
      {
        kanji: '首',
        meaning: 'neck',
      },
    ],
    usedIn: [
      {
        kanji: '親',
        reading: 'おや',
        meanings: 'parent',
      },
      {
        kanji: '親方',
        reading: 'おやかた',
        meanings: 'master',
      },
      {
        kanji: '生みの親',
        reading: 'うみのおや',
        meanings: 'biological parent',
      },
      {
        kanji: '里親',
        reading: 'さとおや',
        meanings: 'foster parent',
      },
      {
        kanji: '親しい',
        reading: 'したしい',
        meanings: 'close (e.g. friend)',
      },
      {
        kanji: '親しむ',
        reading: 'したしむ',
        meanings: 'to be intimate with',
      },
      {
        kanji: '親',
        reading: 'しん',
        meanings: 'intimacy',
      },
      {
        kanji: '親衛',
        reading: 'しんえい',
        meanings: "monarch's guards",
      },
      {
        kanji: '懇親',
        reading: 'こんしん',
        meanings: 'friendship',
      },
      {
        kanji: '近親',
        reading: 'きんしん',
        meanings: 'near relative',
      },
    ],
  },
  {
    kanjiName: '病',
    strokes: 10,
    grade: 3,
    freq: 384,
    meanings: ['Ill', 'Sick'],
    on: ['びょう', 'へい'],
    kun: ['や.む', '-や.み', 'やまい'],
    wk_meanings: ['Sick', '^Sickness', '^Ill', '^Illness'],
    jlpt: 4,
    quizAnswers: ['Govt Office', 'Ill', 'Cramped', 'Board'],
    similars: [
      {
        kanji: '痘',
        meaning: 'pox',
      },
      {
        kanji: '痢',
        meaning: 'diarrhea',
      },
      {
        kanji: '疾',
        meaning: 'rapidly',
      },
      {
        kanji: '症',
        meaning: 'symptoms',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '柄',
        meaning: 'design',
      },
      {
        kanji: '菊',
        meaning: 'chrysanthemum',
      },
      {
        kanji: '廉',
        meaning: 'bargain',
      },
      {
        kanji: '痴',
        meaning: 'stupid',
      },
      {
        kanji: '効',
        meaning: 'merit',
      },
    ],
    usedIn: [
      {
        kanji: '病む',
        reading: 'やむ',
        meanings: 'to fall ill',
      },
      {
        kanji: '病',
        reading: 'やまい',
        meanings: 'illness',
      },
      {
        kanji: '病が篤い',
        reading: 'やまいがあつい',
        meanings: 'seriously ill',
      },
      {
        kanji: '恋病',
        reading: 'こいやまい',
        meanings: 'lovesickness',
      },
      {
        kanji: '躁鬱病',
        reading: 'そううつびょう',
        meanings: 'manic depression',
      },
      {
        kanji: '病',
        reading: 'びょう',
        meanings: 'disease',
      },
      {
        kanji: '病院',
        reading: 'びょういん',
        meanings: 'hospital',
      },
      {
        kanji: '血友病',
        reading: 'けつゆうびょう',
        meanings: 'hemophilia',
      },
      {
        kanji: '同病',
        reading: 'どうびょう',
        meanings: 'the same sickness',
      },
    ],
  },
  {
    kanjiName: '別',
    strokes: 7,
    grade: 4,
    freq: 214,
    meanings: [
      'Separate',
      'Branch Off',
      'Diverge',
      'Fork',
      'Another',
      'Extra',
      'Specially',
    ],
    on: ['べつ'],
    kun: ['わか.れる', 'わ.ける'],
    wk_meanings: ['Separate'],
    jlpt: 4,
    quizAnswers: ['Separate', 'Mind', 'Curtain', 'Serve'],
    similars: [
      {
        kanji: '吸',
        meaning: 'suck',
      },
      {
        kanji: '史',
        meaning: 'history',
      },
      {
        kanji: '兄',
        meaning: 'elder brother',
      },
      {
        kanji: '中',
        meaning: 'in',
      },
      {
        kanji: '叫',
        meaning: 'shout',
      },
      {
        kanji: '剣',
        meaning: 'sabre',
      },
      {
        kanji: '呼',
        meaning: 'call',
      },
      {
        kanji: '事',
        meaning: 'matter',
      },
      {
        kanji: '味',
        meaning: 'flavor',
      },
      {
        kanji: '副',
        meaning: 'vice-',
      },
    ],
    usedIn: [
      {
        kanji: '別れる',
        reading: 'わかれる',
        meanings: 'to part (usu. of people)',
      },
      {
        kanji: '分ける',
        reading: 'わける',
        meanings: 'to divide (into)',
      },
      {
        kanji: '別',
        reading: 'べつ',
        meanings: 'distinction',
      },
      {
        kanji: '別院',
        reading: 'べついん',
        meanings: 'branch temple',
      },
      {
        kanji: '無差別',
        reading: 'むさべつ',
        meanings: 'indiscrimination',
      },
      {
        kanji: '告別',
        reading: 'こくべつ',
        meanings: 'farewell',
      },
    ],
  },
  {
    kanjiName: '注',
    strokes: 8,
    grade: 3,
    freq: 497,
    meanings: [
      'Pour',
      'Irrigate',
      'Shed (tears)',
      'Flow Into',
      'Concentrate On',
      'Notes',
      'Comment',
      'Annotate',
    ],
    on: ['ちゅう'],
    kun: ['そそ.ぐ', 'さ.す', 'つ.ぐ'],
    wk_meanings: ['Pour'],
    jlpt: 4,
    quizAnswers: ['Ship', 'Pour', 'From Now On', 'Help'],
    similars: [
      {
        kanji: '性',
        meaning: 'sex',
      },
      {
        kanji: '江',
        meaning: 'creek',
      },
      {
        kanji: '洋',
        meaning: 'ocean',
      },
      {
        kanji: '津',
        meaning: 'haven',
      },
      {
        kanji: '洗',
        meaning: 'wash',
      },
      {
        kanji: '涯',
        meaning: 'horizon',
      },
      {
        kanji: '壮',
        meaning: 'robust',
      },
      {
        kanji: '泣',
        meaning: 'cry',
      },
      {
        kanji: '汽',
        meaning: 'vapor',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
    ],
    usedIn: [
      {
        kanji: '注ぐ',
        reading: 'そそぐ',
        meanings: 'to pour (into)',
      },
      {
        kanji: '注す',
        reading: 'さす',
        meanings: 'to pour',
      },
      {
        kanji: '注ぐ',
        reading: 'つぐ',
        meanings: 'to pour (into a vessel)',
      },
      {
        kanji: '注',
        reading: 'ちゅう',
        meanings: 'annotation',
      },
      {
        kanji: '注意',
        reading: 'ちゅうい',
        meanings: 'attention',
      },
      {
        kanji: '受注',
        reading: 'じゅちゅう',
        meanings: 'accepting an order',
      },
      {
        kanji: '特注',
        reading: 'とくちゅう',
        meanings: 'special order (goods)',
      },
    ],
  },
  {
    kanjiName: '洋',
    strokes: 9,
    grade: 3,
    freq: 763,
    meanings: ['Ocean', 'Sea', 'Foreign', 'Western Style'],
    on: ['よう'],
    kun: [],
    wk_meanings: ['Western Style', '^Ocean'],
    jlpt: 4,
    quizAnswers: ['Track', 'Step', 'Ocean', 'Tracks'],
    similars: [
      {
        kanji: '津',
        meaning: 'haven',
      },
      {
        kanji: '祥',
        meaning: 'auspicious',
      },
      {
        kanji: '汗',
        meaning: 'sweat',
      },
      {
        kanji: '注',
        meaning: 'pour',
      },
      {
        kanji: '汽',
        meaning: 'vapor',
      },
      {
        kanji: '羊',
        meaning: 'sheep',
      },
      {
        kanji: '渓',
        meaning: 'mountain stream',
      },
      {
        kanji: '涯',
        meaning: 'horizon',
      },
      {
        kanji: '江',
        meaning: 'creek',
      },
      {
        kanji: '汁',
        meaning: 'soup',
      },
    ],
    usedIn: [
      {
        kanji: '洋',
        reading: 'よう',
        meanings: 'Occident and Orient (esp. the Occident)',
      },
      {
        kanji: '洋画',
        reading: 'ようが',
        meanings: 'Western painting',
      },
      {
        kanji: '南氷洋',
        reading: 'なんひょうよう',
        meanings: 'Antarctic Ocean',
      },
      {
        kanji: '環太平洋',
        reading: 'かんたいへいよう',
        meanings: 'Pacific Rim',
      },
    ],
  },
  {
    kanjiName: '特',
    strokes: 10,
    grade: 4,
    freq: 234,
    meanings: ['Special'],
    on: ['とく'],
    kun: [],
    wk_meanings: ['Special'],
    jlpt: 4,
    quizAnswers: ['Be Bright', 'Edge', 'Special', 'Birth'],
    similars: [
      {
        kanji: '待',
        meaning: 'wait',
      },
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '持',
        meaning: 'hold',
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice',
      },
      {
        kanji: '詩',
        meaning: 'poem',
      },
      {
        kanji: '時',
        meaning: 'time',
      },
      {
        kanji: '佳',
        meaning: 'excellent',
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
      {
        kanji: '封',
        meaning: 'seal',
      },
    ],
    usedIn: [
      {
        kanji: '特産',
        reading: 'とくさん',
        meanings: 'being produced in a particular region',
      },
      {
        kanji: '特異',
        reading: 'とくい',
        meanings: 'unique',
      },
      {
        kanji: '快特',
        reading: 'かいとく',
        meanings: 'rapid express (train service)',
      },
      {
        kanji: '在特',
        reading: 'ざいとく',
        meanings: 'Special Permission to Stay in Japan',
      },
    ],
  },
  {
    kanjiName: '意',
    strokes: 13,
    grade: 3,
    freq: 99,
    meanings: [
      'Idea',
      'Mind',
      'Heart',
      'Taste',
      'Thought',
      'Desire',
      'Care',
      'Liking',
    ],
    on: ['い'],
    kun: [],
    wk_meanings: ['Idea'],
    jlpt: 4,
    quizAnswers: ['Robber', 'Nation', 'Death Of A Priest', 'Idea'],
    similars: [
      {
        kanji: '億',
        meaning: 'hundred million',
      },
      {
        kanji: '憶',
        meaning: 'recollection',
      },
      {
        kanji: '穂',
        meaning: 'ear',
      },
      {
        kanji: '童',
        meaning: 'juvenile',
      },
      {
        kanji: '竜',
        meaning: 'dragon',
      },
      {
        kanji: '想',
        meaning: 'concept',
      },
      {
        kanji: '章',
        meaning: 'badge',
      },
      {
        kanji: '音',
        meaning: 'sound',
      },
      {
        kanji: '慮',
        meaning: 'prudence',
      },
      {
        kanji: '彰',
        meaning: 'patent',
      },
    ],
    usedIn: [
      {
        kanji: '意',
        reading: 'い',
        meanings: 'feelings',
      },
      {
        kanji: '意外',
        reading: 'いがい',
        meanings: 'unexpected',
      },
      {
        kanji: '賛意',
        reading: 'さんい',
        meanings: 'approval',
      },
      {
        kanji: '総意',
        reading: 'そうい',
        meanings: 'consensus',
      },
    ],
  },
  {
    kanjiName: '味',
    strokes: 8,
    grade: 3,
    freq: 442,
    meanings: ['Flavor', 'Taste'],
    on: ['み'],
    kun: ['あじ', 'あじ.わう'],
    wk_meanings: ['Flavor', '^Taste'],
    jlpt: 4,
    quizAnswers: ['Worry', 'Market', 'Banish', 'Flavor'],
    similars: [
      {
        kanji: '架',
        meaning: 'erect',
      },
      {
        kanji: '保',
        meaning: 'protect',
      },
      {
        kanji: '咲',
        meaning: 'blossom',
      },
      {
        kanji: '呉',
        meaning: 'give',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '叫',
        meaning: 'shout',
      },
      {
        kanji: '束',
        meaning: 'bundle',
      },
      {
        kanji: '史',
        meaning: 'history',
      },
      {
        kanji: '妹',
        meaning: 'younger sister',
      },
      {
        kanji: '抹',
        meaning: 'rub',
      },
    ],
    usedIn: [
      {
        kanji: '味',
        reading: 'あじ',
        meanings: 'flavor',
      },
      {
        kanji: '味付け',
        reading: 'あじつけ',
        meanings: 'seasoning',
      },
      {
        kanji: '切れ味',
        reading: 'きれあじ',
        meanings: 'sharpness',
      },
      {
        kanji: '下味',
        reading: 'したあじ',
        meanings: 'seasoning of food',
      },
      {
        kanji: '味わう',
        reading: 'あじわう',
        meanings: 'to taste',
      },
      {
        kanji: '味',
        reading: 'み',
        meanings: '(sense of) taste',
      },
      {
        kanji: '味覚',
        reading: 'みかく',
        meanings: 'taste',
      },
      {
        kanji: '厚み',
        reading: 'あつみ',
        meanings: 'thickness',
      },
      {
        kanji: '加味',
        reading: 'かみ',
        meanings: 'seasoning',
      },
    ],
  },
  {
    kanjiName: '勉',
    strokes: 10,
    grade: 3,
    freq: 1066,
    meanings: [
      'Exertion',
      'Endeavour',
      'Encourage',
      'Strive',
      'Make Effort',
      'Diligent',
    ],
    on: ['べん'],
    kun: ['つと.める'],
    wk_meanings: ['Exertion'],
    jlpt: 4,
    quizAnswers: ['Muscle', 'Exertion', 'Line', 'Carving'],
    similars: [
      {
        kanji: '逸',
        meaning: 'deviate',
      },
      {
        kanji: '免',
        meaning: 'excuse',
      },
      {
        kanji: '象',
        meaning: 'elephant',
      },
      {
        kanji: '勇',
        meaning: 'courage',
      },
      {
        kanji: '男',
        meaning: 'male',
      },
      {
        kanji: '鬼',
        meaning: 'ghost',
      },
      {
        kanji: '的',
        meaning: "bull's eye",
      },
      {
        kanji: '動',
        meaning: 'move',
      },
      {
        kanji: '魚',
        meaning: 'fish',
      },
      {
        kanji: '初',
        meaning: 'first time',
      },
    ],
    usedIn: [
      {
        kanji: '努める',
        reading: 'つとめる',
        meanings: 'to endeavor (to do)',
      },
      {
        kanji: '勉強',
        reading: 'べんきょう',
        meanings: 'study',
      },
      {
        kanji: '勉学',
        reading: 'べんがく',
        meanings: 'study',
      },
      {
        kanji: '猛勉',
        reading: 'もうべん',
        meanings: 'studying hard',
      },
      {
        kanji: 'のこ勉',
        reading: 'のこべん',
        meanings: 'staying behind after school to do private study',
      },
    ],
  },
  {
    kanjiName: '旅',
    strokes: 10,
    grade: 3,
    freq: 783,
    meanings: ['Trip', 'Travel'],
    on: ['りょ'],
    kun: ['たび'],
    wk_meanings: ['Trip', '^Travel'],
    jlpt: 4,
    quizAnswers: ['Expectation', 'Stage', 'Trip', 'Till'],
    similars: [
      {
        kanji: '族',
        meaning: 'tribe',
      },
      {
        kanji: '放',
        meaning: 'set free',
      },
      {
        kanji: '旋',
        meaning: 'rotation',
      },
      {
        kanji: '施',
        meaning: 'give',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '倣',
        meaning: 'emulate',
      },
      {
        kanji: '派',
        meaning: 'faction',
      },
      {
        kanji: '林',
        meaning: 'grove',
      },
      {
        kanji: '来',
        meaning: 'come',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
    ],
    usedIn: [
      {
        kanji: '旅',
        reading: 'たび',
        meanings: 'travel',
      },
      {
        kanji: '旅先',
        reading: 'たびさき',
        meanings: 'destination',
      },
      {
        kanji: 'あてなき旅',
        reading: 'あてなきたび',
        meanings: 'journey without a destination',
      },
      {
        kanji: '股旅',
        reading: 'またたび',
        meanings: 'wandering life of a gambler',
      },
      {
        kanji: '旅',
        reading: 'りょ',
        meanings: '500-man battalion (Zhou dynasty Chinese army)',
      },
      {
        kanji: '旅客',
        reading: 'りょかく',
        meanings: 'passenger',
      },
      {
        kanji: '行旅',
        reading: 'こうりょ',
        meanings: 'traveling',
      },
      {
        kanji: '修旅',
        reading: 'しゅうりょ',
        meanings: 'excursion',
      },
    ],
  },
  {
    kanjiName: '員',
    strokes: 10,
    grade: 3,
    freq: 54,
    meanings: ['Employee', 'Member', 'Number', 'The One In Charge'],
    on: ['いん'],
    kun: [],
    wk_meanings: ['Member'],
    jlpt: 4,
    quizAnswers: ['Pretend', 'Ten Sho (vol)', 'Employee', 'Virtuous'],
    similars: [
      {
        kanji: '貴',
        meaning: 'precious',
      },
      {
        kanji: '賀',
        meaning: 'congratulations',
      },
      {
        kanji: '偵',
        meaning: 'spy',
      },
      {
        kanji: '貞',
        meaning: 'upright',
      },
      {
        kanji: '損',
        meaning: 'damage',
      },
      {
        kanji: '貨',
        meaning: 'freight',
      },
      {
        kanji: '喝',
        meaning: 'hoarse',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '貝',
        meaning: 'shellfish',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
    ],
    usedIn: [
      {
        kanji: '員',
        reading: 'いん',
        meanings: 'member',
      },
      {
        kanji: '員数',
        reading: 'いんずう',
        meanings: '(total) number (of people or things)',
      },
      {
        kanji: '随員',
        reading: 'ずいいん',
        meanings: 'member of an entourage or retinue or party',
      },
      {
        kanji: '執行委員',
        reading: 'しっこういいん',
        meanings: 'executive committee',
      },
    ],
  },
  {
    kanjiName: '動',
    strokes: 11,
    grade: 3,
    freq: 73,
    meanings: ['Move', 'Motion', 'Change', 'Confusion', 'Shift', 'Shake'],
    on: ['どう'],
    kun: ['うご.く', 'うご.かす'],
    wk_meanings: ['Move'],
    jlpt: 4,
    quizAnswers: [
      'Counter For Chapters (of A Book)',
      'Fracture',
      'Ahead',
      'Move',
    ],
    similars: [
      {
        kanji: '働',
        meaning: 'work',
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed',
      },
      {
        kanji: '重',
        meaning: 'heavy',
      },
      {
        kanji: '専',
        meaning: 'specialty',
      },
      {
        kanji: '裏',
        meaning: 'back',
      },
      {
        kanji: '傷',
        meaning: 'wound',
      },
      {
        kanji: '衝',
        meaning: 'collide',
      },
      {
        kanji: '里',
        meaning: 'ri',
      },
      {
        kanji: '厘',
        meaning: 'rin',
      },
      {
        kanji: '車',
        meaning: 'car',
      },
    ],
    usedIn: [
      {
        kanji: '動く',
        reading: 'うごく',
        meanings: 'to move',
      },
      {
        kanji: '動く歩道',
        reading: 'うごくほどう',
        meanings: 'moving walkway',
      },
      {
        kanji: '動かす',
        reading: 'うごかす',
        meanings: 'to move',
      },
      {
        kanji: '動',
        reading: 'どう',
        meanings: 'motion',
      },
      {
        kanji: '動員',
        reading: 'どういん',
        meanings: 'mobilization',
      },
      {
        kanji: '人事異動',
        reading: 'じんじいどう',
        meanings: 'personnel change',
      },
      {
        kanji: '異動',
        reading: 'いどう',
        meanings: '(personnel) change',
      },
    ],
  },
  {
    kanjiName: '悪',
    strokes: 11,
    grade: 3,
    freq: 530,
    meanings: ['Bad', 'Vice', 'Rascal', 'False', 'Evil', 'Wrong'],
    on: ['あく', 'お'],
    kun: [
      'わる.い',
      'わる-',
      'あ.し',
      'にく.い',
      '-にく.い',
      'ああ',
      'いずくに',
      'いずくんぞ',
      'にく.む',
    ],
    wk_meanings: ['Bad', '^Evil'],
    jlpt: 4,
    quizAnswers: ['Reject', 'Plan', 'Bad', 'Ancestral Offering Receptacle'],
    similars: [
      {
        kanji: '恵',
        meaning: 'favor',
      },
      {
        kanji: '志',
        meaning: 'intention',
      },
      {
        kanji: '思',
        meaning: 'think',
      },
      {
        kanji: '息',
        meaning: 'breath',
      },
      {
        kanji: '専',
        meaning: 'specialty',
      },
      {
        kanji: '誌',
        meaning: 'document',
      },
      {
        kanji: '徳',
        meaning: 'benevolence',
      },
      {
        kanji: '恥',
        meaning: 'shame',
      },
      {
        kanji: '恩',
        meaning: 'grace',
      },
      {
        kanji: '黒',
        meaning: 'black',
      },
    ],
    usedIn: [
      {
        kanji: '悪い',
        reading: 'わるい',
        meanings: 'bad',
      },
      {
        kanji: '悪い行い',
        reading: 'わるいおこない',
        meanings: 'bad deed',
      },
      {
        kanji: '悪し',
        reading: 'あし',
        meanings: 'bad',
      },
      {
        kanji: '悪しからず',
        reading: 'あしからず',
        meanings: "don't get me wrong",
      },
      {
        kanji: '難い',
        reading: 'にくい',
        meanings: 'difficult to ...',
      },
      {
        kanji: '憎い',
        reading: 'にくい',
        meanings: 'hateful',
      },
      {
        kanji: '安んぞ',
        reading: 'いずくんぞ',
        meanings: 'how',
      },
      {
        kanji: '憎む',
        reading: 'にくむ',
        meanings: 'to hate',
      },
      {
        kanji: '悪',
        reading: 'あく',
        meanings: 'evil',
      },
      {
        kanji: '悪質',
        reading: 'あくしつ',
        meanings: 'malicious',
      },
      {
        kanji: '害悪',
        reading: 'がいあく',
        meanings: 'harm',
      },
      {
        kanji: '改悪',
        reading: 'かいあく',
        meanings: 'changing (something) for the worse',
      },
      {
        kanji: '悪寒',
        reading: 'おかん',
        meanings: 'chill',
      },
      {
        kanji: '悪血',
        reading: 'あくち',
        meanings: 'impure blood',
      },
      {
        kanji: '自己嫌悪',
        reading: 'じこけんお',
        meanings: 'self-hatred',
      },
      {
        kanji: '好悪',
        reading: 'こうお',
        meanings: 'likes and dislikes',
      },
    ],
  },
  {
    kanjiName: '族',
    strokes: 11,
    grade: 3,
    freq: 393,
    meanings: ['Tribe', 'Family'],
    on: ['ぞく'],
    kun: [],
    wk_meanings: ['Tribe', '^Family'],
    jlpt: 4,
    quizAnswers: ['Twig', 'Pinch', 'Benefit', 'Tribe'],
    similars: [
      {
        kanji: '旅',
        meaning: 'trip',
      },
      {
        kanji: '放',
        meaning: 'set free',
      },
      {
        kanji: '旋',
        meaning: 'rotation',
      },
      {
        kanji: '疾',
        meaning: 'rapidly',
      },
      {
        kanji: '庭',
        meaning: 'courtyard',
      },
      {
        kanji: '秩',
        meaning: 'regularity',
      },
      {
        kanji: '廉',
        meaning: 'bargain',
      },
      {
        kanji: '廃',
        meaning: 'abolish',
      },
      {
        kanji: '遊',
        meaning: 'play',
      },
      {
        kanji: '奥',
        meaning: 'heart',
      },
    ],
    usedIn: [
      {
        kanji: '族',
        reading: 'ぞく',
        meanings: 'tribe',
      },
      {
        kanji: '族長',
        reading: 'ぞくちょう',
        meanings: 'patriarch',
      },
      {
        kanji: '皇族',
        reading: 'こうぞく',
        meanings: 'imperial family',
      },
      {
        kanji: '王族',
        reading: 'おうぞく',
        meanings: 'royalty',
      },
    ],
  },
  {
    kanjiName: '着',
    strokes: 12,
    grade: 3,
    freq: 376,
    meanings: ['Don', 'Arrive', 'Wear', 'Counter For Suits Of Clothing'],
    on: ['ちゃく', 'じゃく'],
    kun: ['き.る', '-ぎ', 'き.せる', '-き.せ', 'つ.く', 'つ.ける'],
    wk_meanings: ['Wear', '^Arrive'],
    jlpt: 4,
    quizAnswers: ['Till', 'Peak', 'Don', 'Polish'],
    similars: [
      {
        kanji: '首',
        meaning: 'neck',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
      {
        kanji: '普',
        meaning: 'universal',
      },
      {
        kanji: '盾',
        meaning: 'shield',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '漬',
        meaning: 'pickling',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '類',
        meaning: 'sort',
      },
    ],
    usedIn: [
      {
        kanji: '着る',
        reading: 'きる',
        meanings: 'to wear (from the shoulders down)',
      },
      {
        kanji: '着類',
        reading: 'きるい',
        meanings: 'clothing',
      },
      {
        kanji: '着せる',
        reading: 'きせる',
        meanings: 'to put clothes on (someone)',
      },
      {
        kanji: '着く',
        reading: 'つく',
        meanings: 'to arrive at',
      },
      {
        kanji: '付ける',
        reading: 'つける',
        meanings: 'to attach',
      },
      {
        kanji: '着',
        reading: 'ちゃく',
        meanings: 'arrival',
      },
      {
        kanji: '着衣',
        reading: 'ちゃくい',
        meanings: 'clothes (that one is wearing)',
      },
      {
        kanji: '決着',
        reading: 'けっちゃく',
        meanings: 'conclusion',
      },
      {
        kanji: '装着',
        reading: 'そうちゃく',
        meanings: 'equipping',
      },
      {
        kanji: '着す',
        reading: 'じゃくす',
        meanings: 'to insist on',
      },
      {
        kanji: '愛着',
        reading: 'あいじゃく',
        meanings: 'attachment',
      },
      {
        kanji: '頓着',
        reading: 'とんちゃく',
        meanings: 'being concerned about or mindful of',
      },
    ],
  },
  {
    kanjiName: '野',
    strokes: 11,
    grade: 2,
    freq: 120,
    meanings: ['Plains', 'Field', 'Rustic', 'Civilian Life'],
    on: ['や', 'しょ'],
    kun: ['の', 'の-'],
    wk_meanings: ['Field'],
    jlpt: 4,
    quizAnswers: ['Seacoast', 'Plains', 'Regret', 'Burglar'],
    similars: [
      {
        kanji: '黒',
        meaning: 'black',
      },
      {
        kanji: '時',
        meaning: 'time',
      },
      {
        kanji: '専',
        meaning: 'specialty',
      },
      {
        kanji: '序',
        meaning: 'preface',
      },
      {
        kanji: '里',
        meaning: 'ri',
      },
      {
        kanji: '則',
        meaning: 'rule',
      },
      {
        kanji: '黙',
        meaning: 'silence',
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed',
      },
      {
        kanji: '墨',
        meaning: 'black ink',
      },
      {
        kanji: '貯',
        meaning: 'savings',
      },
    ],
    usedIn: [
      {
        kanji: '野',
        reading: 'の',
        meanings: 'plain',
      },
      {
        kanji: '野末',
        reading: 'のずえ',
        meanings: 'corners of a field',
      },
      {
        kanji: '裾野',
        reading: 'すその',
        meanings: 'foot of a mountain',
      },
      {
        kanji: '郊野',
        reading: 'こうの',
        meanings: 'suburban fields',
      },
      {
        kanji: '野',
        reading: 'の',
        meanings: 'plain',
      },
      {
        kanji: '野外',
        reading: 'やがい',
        meanings: 'outdoors',
      },
      {
        kanji: '内野',
        reading: 'ないや',
        meanings: 'infield',
      },
      {
        kanji: '在野',
        reading: 'ざいや',
        meanings: 'out of office',
      },
    ],
  },
  {
    kanjiName: '風',
    strokes: 9,
    grade: 2,
    freq: 558,
    meanings: ['Wind', 'Air', 'Style', 'Manner'],
    on: ['ふう', 'ふ'],
    kun: ['かぜ', 'かざ-', '-かぜ'],
    wk_meanings: ['Wind', '^Style'],
    jlpt: 4,
    quizAnswers: ['With Child', 'Case', 'Wind', 'Refer To'],
    similars: [
      {
        kanji: '独',
        meaning: 'single',
      },
      {
        kanji: '蚕',
        meaning: 'silkworm',
      },
      {
        kanji: '虫',
        meaning: 'insect',
      },
      {
        kanji: '蛮',
        meaning: 'barbarian',
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug',
      },
      {
        kanji: '触',
        meaning: 'contact',
      },
      {
        kanji: '属',
        meaning: 'belong',
      },
      {
        kanji: '強',
        meaning: 'strong',
      },
      {
        kanji: '程',
        meaning: 'extent',
      },
      {
        kanji: '嘱',
        meaning: 'entrust',
      },
    ],
    usedIn: [
      {
        kanji: '風',
        reading: 'かぜ',
        meanings: 'wind',
      },
      {
        kanji: '風邪',
        reading: 'かぜ',
        meanings: '(common) cold',
      },
      {
        kanji: '涼風',
        reading: 'りょうふう',
        meanings: 'cool breeze',
      },
      {
        kanji: '西風',
        reading: 'にしかぜ',
        meanings: 'west wind',
      },
      {
        kanji: '風',
        reading: 'ふう',
        meanings: 'method',
      },
      {
        kanji: '風格',
        reading: 'ふうかく',
        meanings: 'personality',
      },
      {
        kanji: '逆風',
        reading: 'ぎゃくふう',
        meanings: 'headwind',
      },
      {
        kanji: '作風',
        reading: 'さくふう',
        meanings: 'style (of a work',
      },
      {
        kanji: '風',
        reading: 'ふう',
        meanings: 'method',
      },
      {
        kanji: '振り',
        reading: 'ふり',
        meanings: 'swing',
      },
      {
        kanji: '中風',
        reading: 'ちゅうふう',
        meanings: 'palsy',
      },
      {
        kanji: '破風',
        reading: 'はふ',
        meanings: 'gable',
      },
    ],
  },
  {
    kanjiName: '新',
    strokes: 13,
    grade: 2,
    freq: 51,
    meanings: ['New'],
    on: ['しん'],
    kun: ['あたら.しい', 'あら.た', 'あら-', 'にい-'],
    wk_meanings: ['New'],
    jlpt: 4,
    quizAnswers: ['Model', 'Accompany', 'Banish', 'New'],
    similars: [
      {
        kanji: '薪',
        meaning: 'fuel',
      },
      {
        kanji: '粋',
        meaning: 'chic',
      },
      {
        kanji: '断',
        meaning: 'severance',
      },
      {
        kanji: '析',
        meaning: 'chop',
      },
      {
        kanji: '章',
        meaning: 'badge',
      },
      {
        kanji: '彩',
        meaning: 'coloring',
      },
      {
        kanji: '料',
        meaning: 'fee',
      },
      {
        kanji: '穀',
        meaning: 'cereals',
      },
      {
        kanji: '親',
        meaning: 'parent',
      },
      {
        kanji: '耗',
        meaning: 'decrease',
      },
    ],
    usedIn: [
      {
        kanji: '新しい',
        reading: 'あたらしい',
        meanings: 'new',
      },
      {
        kanji: '新しい女',
        reading: 'あたらしいおんな',
        meanings: 'liberated woman',
      },
      {
        kanji: '新た',
        reading: 'あらた',
        meanings: 'new',
      },
      {
        kanji: '新田',
        reading: 'しんでん',
        meanings: 'new rice field',
      },
      {
        kanji: '新',
        reading: 'しん',
        meanings: 'new',
      },
      {
        kanji: '新鋭',
        reading: 'しんえい',
        meanings: 'young and energetic',
      },
      {
        kanji: '維新',
        reading: 'いしん',
        meanings: 'reformation',
      },
      {
        kanji: '改新',
        reading: 'かいしん',
        meanings: 'reformation',
      },
    ],
  },
  {
    kanjiName: '問',
    strokes: 11,
    grade: 3,
    freq: 64,
    meanings: ['Question', 'Ask', 'Problem'],
    on: ['もん'],
    kun: ['と.う', 'と.い', 'とん'],
    wk_meanings: ['Problem'],
    jlpt: 4,
    quizAnswers: ['Respect', 'Guilt', 'Question', 'Whereupon'],
    similars: [
      {
        kanji: '閣',
        meaning: 'tower',
      },
      {
        kanji: '閑',
        meaning: 'leisure',
      },
      {
        kanji: '間',
        meaning: 'interval',
      },
      {
        kanji: '閲',
        meaning: 'review',
      },
      {
        kanji: '閉',
        meaning: 'closed',
      },
      {
        kanji: '門',
        meaning: 'gate',
      },
      {
        kanji: '開',
        meaning: 'open',
      },
      {
        kanji: '晶',
        meaning: 'sparkle',
      },
      {
        kanji: '閥',
        meaning: 'clique',
      },
      {
        kanji: '胴',
        meaning: 'trunk',
      },
    ],
    usedIn: [
      {
        kanji: '問う',
        reading: 'とう',
        meanings: 'to ask',
      },
      {
        kanji: '問うに落ちず語るに落ちる',
        reading: 'とうにおちずかたるにおちる',
        meanings: 'to keep a secret when asked about it',
      },
      {
        kanji: '問い',
        reading: 'とい',
        meanings: 'question',
      },
      {
        kanji: '問い合わせ',
        reading: 'といあわせ',
        meanings: 'inquiry',
      },
      {
        kanji: '更問',
        reading: 'さらとい',
        meanings: 'follow-up question',
      },
      {
        kanji: '問屋',
        reading: 'とんや',
        meanings: 'wholesale store',
      },
      {
        kanji: '問',
        reading: 'もん',
        meanings: 'counter for questions',
      },
      {
        kanji: '問責',
        reading: 'もんせき',
        meanings: 'blame',
      },
      {
        kanji: '設問',
        reading: 'せつもん',
        meanings: 'posing a question',
      },
      {
        kanji: '弔問',
        reading: 'ちょうもん',
        meanings: 'condolence call',
      },
    ],
  },
  {
    kanjiName: '銀',
    strokes: 14,
    grade: 3,
    freq: 395,
    meanings: ['Silver'],
    on: ['ぎん'],
    kun: ['しろがね'],
    wk_meanings: ['Silver'],
    jlpt: 4,
    quizAnswers: ['Silver', 'Instigate', 'Hit', 'Soak'],
    similars: [
      {
        kanji: '錬',
        meaning: 'tempering',
      },
      {
        kanji: '鉄',
        meaning: 'iron',
      },
      {
        kanji: '銭',
        meaning: 'coin',
      },
      {
        kanji: '鉢',
        meaning: 'bowl',
      },
      {
        kanji: '銑',
        meaning: 'pig iron',
      },
      {
        kanji: '銃',
        meaning: 'gun',
      },
      {
        kanji: '錠',
        meaning: 'lock',
      },
      {
        kanji: '録',
        meaning: 'record',
      },
      {
        kanji: '鎮',
        meaning: 'tranquilize',
      },
      {
        kanji: '鎖',
        meaning: 'chain',
      },
    ],
    usedIn: [
      {
        kanji: '銀',
        reading: 'ぎん',
        meanings: 'silver (Ag)',
      },
      {
        kanji: '銀鯵',
        reading: 'しろがねあじ',
        meanings: 'lookdown (Selene vomer)',
      },
      {
        kanji: '銀',
        reading: 'ぎん',
        meanings: 'silver (Ag)',
      },
      {
        kanji: '銀色',
        reading: 'ぎんいろ',
        meanings: 'silver (color',
      },
      {
        kanji: '世銀',
        reading: 'せぎん',
        meanings: 'World Bank',
      },
      {
        kanji: '水銀',
        reading: 'すいぎん',
        meanings: 'mercury (Hg)',
      },
    ],
  },
  {
    kanjiName: '題',
    strokes: 18,
    grade: 3,
    freq: 96,
    meanings: ['Topic', 'Subject'],
    on: ['だい'],
    kun: [],
    wk_meanings: ['Topic'],
    jlpt: 4,
    quizAnswers: ['Topic', 'Segment (orange)', 'Abide By', 'Detach'],
    similars: [
      {
        kanji: '顕',
        meaning: 'appear',
      },
      {
        kanji: '暑',
        meaning: 'sultry',
      },
      {
        kanji: '願',
        meaning: 'petition',
      },
      {
        kanji: '頑',
        meaning: 'stubborn',
      },
      {
        kanji: '顔',
        meaning: 'face',
      },
      {
        kanji: '項',
        meaning: 'paragraph',
      },
      {
        kanji: '頒',
        meaning: 'distribute',
      },
      {
        kanji: '賛',
        meaning: 'approve',
      },
      {
        kanji: '頼',
        meaning: 'trust',
      },
      {
        kanji: '貴',
        meaning: 'precious',
      },
    ],
    usedIn: [
      {
        kanji: '題',
        reading: 'だい',
        meanings: 'title',
      },
      {
        kanji: '題材',
        reading: 'だいざい',
        meanings: 'subject',
      },
      {
        kanji: '表題',
        reading: 'ひょうだい',
        meanings: 'title',
      },
      {
        kanji: '命題',
        reading: 'めいだい',
        meanings: 'proposition',
      },
    ],
  },
  {
    kanjiName: '館',
    strokes: 16,
    grade: 3,
    freq: 613,
    meanings: ['Building', 'Mansion', 'Large Building', 'Palace'],
    on: ['かん'],
    kun: ['やかた', 'たて'],
    wk_meanings: ['Public Building'],
    jlpt: 4,
    quizAnswers: ['Scold', 'Phrase', 'Building', 'Verge'],
    similars: [
      {
        kanji: '飼',
        meaning: 'domesticate',
      },
      {
        kanji: '管',
        meaning: 'pipe',
      },
      {
        kanji: '棺',
        meaning: 'coffin',
      },
      {
        kanji: '創',
        meaning: 'genesis',
      },
      {
        kanji: '飾',
        meaning: 'decorate',
      },
      {
        kanji: '官',
        meaning: 'bureaucrat',
      },
      {
        kanji: '飽',
        meaning: 'sated',
      },
      {
        kanji: '郎',
        meaning: 'son',
      },
      {
        kanji: '脱',
        meaning: 'undress',
      },
      {
        kanji: '飯',
        meaning: 'meal',
      },
    ],
    usedIn: [
      {
        kanji: '館',
        reading: 'やかた',
        meanings: 'mansion',
      },
      {
        kanji: '夏館',
        reading: 'なつやかた',
        meanings: 'villa arranged appropriately for summer',
      },
      {
        kanji: '恐怖の館',
        reading: 'きょうふのやかた',
        meanings: 'house of horrors',
      },
      {
        kanji: '館',
        reading: 'やかた',
        meanings: 'mansion',
      },
      {
        kanji: '館',
        reading: 'かん',
        meanings: '(large) building',
      },
      {
        kanji: '館長',
        reading: 'かんちょう',
        meanings: 'superintendent',
      },
      {
        kanji: '在外公館',
        reading: 'ざいがいこうかん',
        meanings: 'diplomatic mission',
      },
      {
        kanji: '公館',
        reading: 'こうかん',
        meanings: 'official residence',
      },
    ],
  },
  {
    kanjiName: '駅',
    strokes: 14,
    grade: 3,
    freq: 724,
    meanings: ['Station'],
    on: ['えき'],
    kun: [],
    wk_meanings: ['Station', '^Train Station'],
    jlpt: 4,
    quizAnswers: ['Immature', 'Station', 'Give', 'Prosperity'],
    similars: [
      {
        kanji: '駄',
        meaning: 'burdensome',
      },
      {
        kanji: '験',
        meaning: 'verification',
      },
      {
        kanji: '駆',
        meaning: 'drive',
      },
      {
        kanji: '馬',
        meaning: 'horse',
      },
      {
        kanji: '駐',
        meaning: 'stop-over',
      },
      {
        kanji: '騒',
        meaning: 'boisterous',
      },
      {
        kanji: '騎',
        meaning: 'equestrian',
      },
      {
        kanji: '焦',
        meaning: 'char',
      },
      {
        kanji: '沢',
        meaning: 'swamp',
      },
      {
        kanji: '鳥',
        meaning: 'bird',
      },
    ],
    usedIn: [
      {
        kanji: '駅',
        reading: 'えき',
        meanings: 'railway station',
      },
      {
        kanji: '駅員',
        reading: 'えきいん',
        meanings: '(train) station attendant',
      },
      {
        kanji: '宿駅',
        reading: 'しゅくえき',
        meanings: 'relay station',
      },
      {
        kanji: '終着駅',
        reading: 'しゅうちゃくえき',
        meanings: 'terminal station',
      },
    ],
  },
  {
    kanjiName: '料',
    strokes: 10,
    grade: 4,
    freq: 295,
    meanings: ['Fee', 'Materials'],
    on: ['りょう'],
    kun: [],
    wk_meanings: ['Fee', '^Material'],
    jlpt: 4,
    quizAnswers: ['Bride', 'Facility', 'Fee', 'Vicinity'],
    similars: [
      {
        kanji: '粋',
        meaning: 'chic',
      },
      {
        kanji: '科',
        meaning: 'department',
      },
      {
        kanji: '断',
        meaning: 'severance',
      },
      {
        kanji: '迷',
        meaning: 'astray',
      },
      {
        kanji: '術',
        meaning: 'art',
      },
      {
        kanji: '粒',
        meaning: 'grains',
      },
      {
        kanji: '新',
        meaning: 'new',
      },
      {
        kanji: '粉',
        meaning: 'flour',
      },
      {
        kanji: '私',
        meaning: 'private',
      },
      {
        kanji: '送',
        meaning: 'escort',
      },
    ],
    usedIn: [
      {
        kanji: '料',
        reading: 'りょう',
        meanings: 'fee',
      },
      {
        kanji: '料金',
        reading: 'りょうきん',
        meanings: 'fee',
      },
      {
        kanji: '史料',
        reading: 'しりょう',
        meanings: 'historical materials',
      },
      {
        kanji: '使用料',
        reading: 'しようりょう',
        meanings: 'use fee',
      },
    ],
  },
  {
    kanjiName: '映',
    strokes: 9,
    grade: 6,
    freq: 404,
    meanings: ['Reflect', 'Reflection', 'Projection'],
    on: ['えい'],
    kun: ['うつ.る', 'うつ.す', 'は.える', '-ば.え'],
    wk_meanings: ['Reflect', '^Reflection'],
    jlpt: 4,
    quizAnswers: ['Reflect', 'Skill', 'Clear', 'Private'],
    similars: [
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '里',
        meaning: 'ri',
      },
      {
        kanji: '具',
        meaning: 'tool',
      },
      {
        kanji: '臭',
        meaning: 'stinking',
      },
      {
        kanji: '是',
        meaning: 'just so',
      },
      {
        kanji: '異',
        meaning: 'uncommon',
      },
      {
        kanji: '販',
        meaning: 'marketing',
      },
      {
        kanji: '敗',
        meaning: 'failure',
      },
      {
        kanji: '裏',
        meaning: 'back',
      },
      {
        kanji: '時',
        meaning: 'time',
      },
    ],
    usedIn: [
      {
        kanji: '映る',
        reading: 'うつる',
        meanings: 'to be reflected',
      },
      {
        kanji: '映す',
        reading: 'うつす',
        meanings: 'to project',
      },
      {
        kanji: '映える',
        reading: 'はえる',
        meanings: 'to shine',
      },
      {
        kanji: '映画館',
        reading: 'えいがかん',
        meanings: 'movie theatre',
      },
      {
        kanji: '映画',
        reading: 'えいが',
        meanings: 'movie',
      },
      {
        kanji: '大映',
        reading: 'だいえい',
        meanings: 'Daiei Motion Picture Company',
      },
      {
        kanji: '開映',
        reading: 'かいえい',
        meanings: 'beginning of a screening (at a movie theatre)',
      },
    ],
  },
  {
    kanjiName: '私',
    strokes: 7,
    grade: 6,
    freq: 242,
    meanings: ['Private', 'I', 'Me'],
    on: ['し'],
    kun: ['わたくし', 'わたし'],
    wk_meanings: ['I', '^Private'],
    jlpt: 4,
    quizAnswers: ['Sober Up', 'Appeal To', 'Subordinate Official', 'Private'],
    similars: [
      {
        kanji: '利',
        meaning: 'profit',
      },
      {
        kanji: '朴',
        meaning: 'crude',
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)',
      },
      {
        kanji: '和',
        meaning: 'harmony',
      },
      {
        kanji: '松',
        meaning: 'pine tree',
      },
      {
        kanji: '秘',
        meaning: 'secret',
      },
      {
        kanji: '称',
        meaning: 'appellation',
      },
      {
        kanji: '料',
        meaning: 'fee',
      },
      {
        kanji: '伝',
        meaning: 'transmit',
      },
      {
        kanji: '村',
        meaning: 'village',
      },
    ],
    usedIn: [
      {
        kanji: '私',
        reading: 'わたくし',
        meanings: 'I',
      },
      {
        kanji: '私立',
        reading: 'しりつ',
        meanings: 'private (establishment)',
      },
      {
        kanji: '不肖私',
        reading: 'ふしょうわたくし',
        meanings: 'I',
      },
      {
        kanji: '私',
        reading: 'わたし',
        meanings: 'I',
      },
      {
        kanji: '私たち',
        reading: 'わたしたち',
        meanings: 'we',
      },
      {
        kanji: '私',
        reading: 'し',
        meanings: 'private affairs',
      },
      {
        kanji: '私案',
        reading: 'しあん',
        meanings: 'private plan',
      },
      {
        kanji: '無私',
        reading: 'むし',
        meanings: 'unselfish',
      },
      {
        kanji: '滅私',
        reading: 'めっし',
        meanings: 'selflessness',
      },
    ],
  },
  {
    kanjiName: '帰',
    strokes: 10,
    grade: 2,
    freq: 504,
    meanings: ['Homecoming', 'Arrive At', 'Lead To', 'Result In'],
    on: ['き'],
    kun: ['かえ.る', 'かえ.す', 'おく.る', 'とつ.ぐ'],
    wk_meanings: ['Return', '^Return Home'],
    jlpt: 4,
    quizAnswers: ['Conclusion', 'Homecoming', 'Heat', 'Rich'],
    similars: [
      {
        kanji: '掃',
        meaning: 'sweep',
      },
      {
        kanji: '婦',
        meaning: 'lady',
      },
      {
        kanji: '侵',
        meaning: 'encroach',
      },
      {
        kanji: '帯',
        meaning: 'sash',
      },
      {
        kanji: '帝',
        meaning: 'sovereign',
      },
      {
        kanji: '浸',
        meaning: 'immersed',
      },
      {
        kanji: '締',
        meaning: 'tighten',
      },
      {
        kanji: '急',
        meaning: 'hurry',
      },
      {
        kanji: '滞',
        meaning: 'stagnate',
      },
      {
        kanji: '寝',
        meaning: 'lie down',
      },
    ],
    usedIn: [
      {
        kanji: '帰る',
        reading: 'かえる',
        meanings: 'to return',
      },
      {
        kanji: '帰す',
        reading: 'かえす',
        meanings: 'to send (someone) back',
      },
      {
        kanji: '帰還',
        reading: 'きかん',
        meanings: 'return (home)',
      },
      {
        kanji: '帰化',
        reading: 'きか',
        meanings: 'naturalization',
      },
      {
        kanji: '社会復帰',
        reading: 'しゃかいふっき',
        meanings: 'rehabilitation (in society)',
      },
      {
        kanji: '回帰',
        reading: 'かいき',
        meanings: 'return (to)',
      },
    ],
  },
  {
    kanjiName: '春',
    strokes: 9,
    grade: 2,
    freq: 579,
    meanings: ['Springtime', 'Spring (season)'],
    on: ['しゅん'],
    kun: ['はる'],
    wk_meanings: ['Spring'],
    jlpt: 4,
    quizAnswers: ['Springtime', 'Group', 'Twilight', 'Account'],
    similars: [
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '香',
        meaning: 'incense',
      },
      {
        kanji: '替',
        meaning: 'exchange',
      },
      {
        kanji: '書',
        meaning: 'write',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
      {
        kanji: '音',
        meaning: 'sound',
      },
      {
        kanji: '拍',
        meaning: 'clap',
      },
      {
        kanji: '指',
        meaning: 'finger',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '暦',
        meaning: 'calendar',
      },
    ],
    usedIn: [
      {
        kanji: '春',
        reading: 'はる',
        meanings: 'spring',
      },
      {
        kanji: '春秋',
        reading: 'しゅんじゅう',
        meanings: 'spring and autumn',
      },
      {
        kanji: '小春',
        reading: 'こはる',
        meanings:
          '10th month of the lunisolar calendar (traditional first month of winter',
      },
      {
        kanji: '毎春',
        reading: 'まいしゅん',
        meanings: 'every spring',
      },
      {
        kanji: '春秋',
        reading: 'しゅんじゅう',
        meanings: 'spring and autumn',
      },
      {
        kanji: '春季',
        reading: 'しゅんき',
        meanings: 'spring season',
      },
      {
        kanji: '昨春',
        reading: 'さくしゅん',
        meanings: 'last spring',
      },
      {
        kanji: '売春',
        reading: 'ばいしゅん',
        meanings: 'prostitution',
      },
    ],
  },
  {
    kanjiName: '昼',
    strokes: 9,
    grade: 2,
    freq: 1115,
    meanings: ['Daytime', 'Noon'],
    on: ['ちゅう'],
    kun: ['ひる'],
    wk_meanings: ['Noon'],
    jlpt: 4,
    quizAnswers: ['Daytime', 'Ore', 'Snap', 'Conclusion'],
    similars: [
      {
        kanji: '届',
        meaning: 'deliver',
      },
      {
        kanji: '但',
        meaning: 'however',
      },
      {
        kanji: '庫',
        meaning: 'warehouse',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '胆',
        meaning: 'gall bladder',
      },
      {
        kanji: '伸',
        meaning: 'expand',
      },
      {
        kanji: '宣',
        meaning: 'proclaim',
      },
      {
        kanji: '相',
        meaning: 'inter-',
      },
      {
        kanji: '白',
        meaning: 'white',
      },
      {
        kanji: '春',
        meaning: 'springtime',
      },
    ],
    usedIn: [
      {
        kanji: '昼',
        reading: 'ひる',
        meanings: 'noon',
      },
      {
        kanji: '昼食',
        reading: 'ちゅうしょく',
        meanings: 'lunch',
      },
      {
        kanji: '小昼',
        reading: 'こひる',
        meanings: 'just before noon',
      },
      {
        kanji: '夜昼',
        reading: 'よるひる',
        meanings: 'day and night',
      },
      {
        kanji: '昼食',
        reading: 'ちゅうしょく',
        meanings: 'lunch',
      },
      {
        kanji: '昼間',
        reading: 'ひるま',
        meanings: 'daytime',
      },
      {
        kanji: '炎昼',
        reading: 'えんちゅう',
        meanings: 'hot summer early afternoon',
      },
      {
        kanji: '春昼',
        reading: 'しゅんちゅう',
        meanings: 'spring day (which seems long and quiet)',
      },
    ],
  },
  {
    kanjiName: '秋',
    strokes: 9,
    grade: 2,
    freq: 635,
    meanings: ['Autumn'],
    on: ['しゅう'],
    kun: ['あき', 'とき'],
    wk_meanings: ['Autumn', '^Fall'],
    jlpt: 4,
    quizAnswers: ['Autumn', 'Admonish', 'Hoard', 'Pipe'],
    similars: [
      {
        kanji: '秩',
        meaning: 'regularity',
      },
      {
        kanji: '秘',
        meaning: 'secret',
      },
      {
        kanji: '愁',
        meaning: 'distress',
      },
      {
        kanji: '税',
        meaning: 'tax',
      },
      {
        kanji: '灰',
        meaning: 'ashes',
      },
      {
        kanji: '枚',
        meaning: 'sheet of...',
      },
      {
        kanji: '炎',
        meaning: 'inflammation',
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)',
      },
      {
        kanji: '林',
        meaning: 'grove',
      },
      {
        kanji: '板',
        meaning: 'plank',
      },
    ],
    usedIn: [
      {
        kanji: '秋',
        reading: 'あき',
        meanings: 'autumn',
      },
      {
        kanji: '秋口',
        reading: 'あきぐち',
        meanings: 'beginning of autumn',
      },
      {
        kanji: '春秋',
        reading: 'しゅんじゅう',
        meanings: 'spring and autumn',
      },
      {
        kanji: '中秋',
        reading: 'ちゅうしゅう',
        meanings: '15th day of the 8th lunar month',
      },
      {
        kanji: '時',
        reading: 'とき',
        meanings: 'time',
      },
      {
        kanji: '危急存亡の秋',
        reading: 'ききゅうそんぼうのとき',
        meanings: 'crisis',
      },
      {
        kanji: '秋季',
        reading: 'しゅうき',
        meanings: 'fall season',
      },
      {
        kanji: '秋風',
        reading: 'あきかぜ',
        meanings: 'autumn breeze',
      },
      {
        kanji: '今秋',
        reading: 'こんしゅう',
        meanings: 'this autumn',
      },
      {
        kanji: '中秋',
        reading: 'ちゅうしゅう',
        meanings: '15th day of the 8th lunar month',
      },
    ],
  },
  {
    kanjiName: '計',
    strokes: 9,
    grade: 2,
    freq: 228,
    meanings: ['Plot', 'Plan', 'Scheme', 'Measure'],
    on: ['けい'],
    kun: ['はか.る', 'はか.らう'],
    wk_meanings: ['Measure', '^Measurement'],
    jlpt: 4,
    quizAnswers: ['Honor', 'Spread Out', 'Plot', 'Prepare'],
    similars: [
      {
        kanji: '訂',
        meaning: 'revise',
      },
      {
        kanji: '許',
        meaning: 'permit',
      },
      {
        kanji: '討',
        meaning: 'chastise',
      },
      {
        kanji: '記',
        meaning: 'scribe',
      },
      {
        kanji: '訓',
        meaning: 'instruction',
      },
      {
        kanji: '託',
        meaning: 'consign',
      },
      {
        kanji: '言',
        meaning: 'say',
      },
      {
        kanji: '評',
        meaning: 'evaluate',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '訴',
        meaning: 'accusation',
      },
    ],
    usedIn: [
      {
        kanji: '計る',
        reading: 'はかる',
        meanings: 'to measure',
      },
      {
        kanji: '計らう',
        reading: 'はからう',
        meanings: 'to manage',
      },
      {
        kanji: '計',
        reading: 'けい',
        meanings: 'plan',
      },
      {
        kanji: '計画',
        reading: 'けいかく',
        meanings: 'plan',
      },
      {
        kanji: '生計',
        reading: 'せいけい',
        meanings: 'livelihood',
      },
      {
        kanji: '推計',
        reading: 'すいけい',
        meanings: 'estimate',
      },
    ],
  },
  {
    kanjiName: '建',
    strokes: 9,
    grade: 4,
    freq: 300,
    meanings: ['Build'],
    on: ['けん', 'こん'],
    kun: ['た.てる', 'た.て', '-だ.て', 'た.つ'],
    wk_meanings: ['Build', '^Construct'],
    jlpt: 4,
    quizAnswers: ['Build', 'Corner', 'Man & Wife', 'Reject'],
    similars: [
      {
        kanji: '健',
        meaning: 'healthy',
      },
      {
        kanji: '書',
        meaning: 'write',
      },
      {
        kanji: '麦',
        meaning: 'barley',
      },
      {
        kanji: '廷',
        meaning: 'courts',
      },
      {
        kanji: '承',
        meaning: 'acquiesce',
      },
      {
        kanji: '兼',
        meaning: 'concurrently',
      },
      {
        kanji: '庭',
        meaning: 'courtyard',
      },
      {
        kanji: '廉',
        meaning: 'bargain',
      },
      {
        kanji: '抜',
        meaning: 'slip out',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
    ],
    usedIn: [
      {
        kanji: '建てる',
        reading: 'たてる',
        meanings: 'to build',
      },
      {
        kanji: '建て',
        reading: 'たて',
        meanings: 'contract',
      },
      {
        kanji: '建前',
        reading: 'たてまえ',
        meanings: 'face',
      },
      {
        kanji: '建つ',
        reading: 'たつ',
        meanings: 'to be erected',
      },
      {
        kanji: '建国',
        reading: 'けんこく',
        meanings: 'founding of a nation',
      },
      {
        kanji: '建議',
        reading: 'けんぎ',
        meanings: 'proposition',
      },
      {
        kanji: '経営再建',
        reading: 'けいえいさいけん',
        meanings: 'management reorganization',
      },
      {
        kanji: '財政再建',
        reading: 'ざいせいさいけん',
        meanings: 'finance reform',
      },
      {
        kanji: '建立',
        reading: 'こんりゅう',
        meanings: '(act of) building (temple',
      },
      {
        kanji: '再建',
        reading: 'さいこん',
        meanings: '(temple or shrine) rebuilding',
      },
    ],
  },
  {
    kanjiName: '英',
    strokes: 8,
    grade: 4,
    freq: 430,
    meanings: ['England', 'English', 'Hero', 'Outstanding', 'Calyx'],
    on: ['えい'],
    kun: ['はなぶさ'],
    wk_meanings: ['England', '^English'],
    jlpt: 4,
    quizAnswers: ['Immature', 'England', 'Revere', 'Forward'],
    similars: [
      {
        kanji: '政',
        meaning: 'politics',
      },
      {
        kanji: '芳',
        meaning: 'perfume',
      },
      {
        kanji: '共',
        meaning: 'together',
      },
      {
        kanji: '坑',
        meaning: 'pit',
      },
      {
        kanji: '央',
        meaning: 'center',
      },
      {
        kanji: '攻',
        meaning: 'aggression',
      },
      {
        kanji: '走',
        meaning: 'run',
      },
      {
        kanji: '葉',
        meaning: 'leaf',
      },
      {
        kanji: '敬',
        meaning: 'awe',
      },
      {
        kanji: '茶',
        meaning: 'tea',
      },
    ],
    usedIn: [
      {
        kanji: '花房',
        reading: 'はなぶさ',
        meanings: 'calyx',
      },
      {
        kanji: '英',
        reading: 'えい',
        meanings: 'United Kingdom',
      },
      {
        kanji: '英語',
        reading: 'えいご',
        meanings: 'English (language)',
      },
      {
        kanji: '育英',
        reading: 'いくえい',
        meanings: 'education of gifted young people',
      },
      {
        kanji: '和英',
        reading: 'わえい',
        meanings: 'Japanese-English',
      },
    ],
  },
  {
    kanjiName: '飯',
    strokes: 12,
    grade: 4,
    freq: 1046,
    meanings: ['Meal', 'Boiled Rice'],
    on: ['はん'],
    kun: ['めし'],
    wk_meanings: ['Meal', '^Food'],
    jlpt: 4,
    quizAnswers: ['Extreme', 'War', 'Meal', 'End'],
    similars: [
      {
        kanji: '飢',
        meaning: 'hungry',
      },
      {
        kanji: '飲',
        meaning: 'drink',
      },
      {
        kanji: '飼',
        meaning: 'domesticate',
      },
      {
        kanji: '飾',
        meaning: 'decorate',
      },
      {
        kanji: '食',
        meaning: 'eat',
      },
      {
        kanji: '飽',
        meaning: 'sated',
      },
      {
        kanji: '餓',
        meaning: 'starve',
      },
      {
        kanji: '娘',
        meaning: 'daughter',
      },
      {
        kanji: '良',
        meaning: 'good',
      },
      {
        kanji: '恨',
        meaning: 'regret',
      },
    ],
    usedIn: [
      {
        kanji: '飯',
        reading: 'めし',
        meanings: 'cooked rice',
      },
      {
        kanji: '飯売女',
        reading: 'めしうりおんな',
        meanings:
          'maid at an inn who served clients and worked as a prostitute (Edo period)',
      },
      {
        kanji: '握り飯',
        reading: 'にぎりめし',
        meanings: 'onigiri',
      },
      {
        kanji: '冷や飯',
        reading: 'ひやめし',
        meanings: 'cold rice',
      },
      {
        kanji: '飯店',
        reading: 'はんてん',
        meanings: 'Chinese restaurant',
      },
      {
        kanji: '飯切',
        reading: 'はんぎり',
        meanings: 'flat-bottomed wooden bowl for preparing sushi rice',
      },
      {
        kanji: '米飯',
        reading: 'べいはん',
        meanings: 'cooked rice',
      },
      {
        kanji: '赤飯',
        reading: 'せきはん',
        meanings: 'red rice (beans and mochi) for auspicious occasions',
      },
    ],
  },
  {
    kanjiName: '曜',
    strokes: 18,
    grade: 2,
    freq: 940,
    meanings: ['Weekday'],
    on: ['よう'],
    kun: [],
    wk_meanings: ['Weekday', '^Day Of The Week'],
    jlpt: 4,
    quizAnswers: ['Weekday', 'Pond', 'Gather', 'Change'],
    similars: [
      {
        kanji: '羅',
        meaning: 'gauze',
      },
      {
        kanji: '唯',
        meaning: 'solely',
      },
      {
        kanji: '催',
        meaning: 'sponsor',
      },
      {
        kanji: '維',
        meaning: 'fiber',
      },
      {
        kanji: '確',
        meaning: 'assurance',
      },
      {
        kanji: '擁',
        meaning: 'hug',
      },
      {
        kanji: '雅',
        meaning: 'gracious',
      },
      {
        kanji: '雌',
        meaning: 'feminine',
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous',
      },
      {
        kanji: '離',
        meaning: 'detach',
      },
    ],
    usedIn: [
      {
        kanji: '曜日',
        reading: 'ようび',
        meanings: 'day of the week',
      },
      {
        kanji: '曜霊',
        reading: 'ようれい',
        meanings: 'the sun',
      },
      {
        kanji: '晃曜',
        reading: 'こうよう',
        meanings: 'dazzling brightness',
      },
      {
        kanji: '宿曜',
        reading: 'すくよう',
        meanings: 'form of astrology based on the Xiuyaojing',
      },
    ],
  },
  {
    kanjiName: '品',
    strokes: 9,
    grade: 3,
    freq: 225,
    meanings: [
      'Goods',
      'Refinement',
      'Dignity',
      'Article',
      'Counter For Meal Courses',
    ],
    on: ['ひん', 'ほん'],
    kun: ['しな'],
    wk_meanings: ['Product', '^Article', '^Goods', '^Products'],
    jlpt: 4,
    quizAnswers: ['Submit To', 'Surplus', 'Stomach', 'Goods'],
    similars: [
      {
        kanji: '患',
        meaning: 'afflicted',
      },
      {
        kanji: '高',
        meaning: 'tall',
      },
      {
        kanji: '宮',
        meaning: 'Shinto shrine',
      },
      {
        kanji: '器',
        meaning: 'utensil',
      },
      {
        kanji: '操',
        meaning: 'maneuver',
      },
      {
        kanji: '臣',
        meaning: 'retainer',
      },
      {
        kanji: '巨',
        meaning: 'gigantic',
      },
      {
        kanji: '官',
        meaning: 'bureaucrat',
      },
      {
        kanji: '帥',
        meaning: 'commander',
      },
      {
        kanji: '唯',
        meaning: 'solely',
      },
    ],
    usedIn: [
      {
        kanji: '品',
        reading: 'しな',
        meanings: 'article',
      },
      {
        kanji: '品目',
        reading: 'ひんもく',
        meanings: 'item',
      },
      {
        kanji: '一品',
        reading: 'いっぴん',
        meanings: 'item',
      },
      {
        kanji: '極め付きの品',
        reading: 'きわめつきのしな',
        meanings: 'article of certified genuineness',
      },
      {
        kanji: '品',
        reading: 'ひん',
        meanings: 'elegance',
      },
      {
        kanji: '品位',
        reading: 'ひんい',
        meanings: 'dignity',
      },
      {
        kanji: '小品',
        reading: 'しょうひん',
        meanings: 'short piece (of music',
      },
      {
        kanji: '遺品',
        reading: 'いひん',
        meanings: 'things left (to one) by the deceased',
      },
      {
        kanji: '品',
        reading: 'ほん',
        meanings: 'court rank',
      },
      {
        kanji: '品題',
        reading: 'ほんだい',
        meanings: 'chapter title',
      },
      {
        kanji: '九品',
        reading: 'くほん',
        meanings: "nine levels of Amitabha's Pure Land",
      },
    ],
  },
  {
    kanjiName: '急',
    strokes: 9,
    grade: 3,
    freq: 309,
    meanings: ['Hurry', 'Emergency', 'Sudden', 'Steep'],
    on: ['きゅう'],
    kun: ['いそ.ぐ', 'いそ.ぎ', 'せ.く'],
    wk_meanings: ['Hurry'],
    jlpt: 4,
    quizAnswers: ['Pleasure', 'Detailed', 'Hurry', 'Severe'],
    similars: [
      {
        kanji: '念',
        meaning: 'wish',
      },
      {
        kanji: '侵',
        meaning: 'encroach',
      },
      {
        kanji: '息',
        meaning: 'breath',
      },
      {
        kanji: '穏',
        meaning: 'calm',
      },
      {
        kanji: '隠',
        meaning: 'conceal',
      },
      {
        kanji: '悠',
        meaning: 'permanence',
      },
      {
        kanji: '忘',
        meaning: 'forget',
      },
      {
        kanji: '忍',
        meaning: 'endure',
      },
      {
        kanji: '忠',
        meaning: 'loyalty',
      },
      {
        kanji: '応',
        meaning: 'apply',
      },
    ],
    usedIn: [
      {
        kanji: '急ぐ',
        reading: 'いそぐ',
        meanings: 'to hurry',
      },
      {
        kanji: '急ぎ',
        reading: 'いそぎ',
        meanings: 'haste',
      },
      {
        kanji: '急ぎ足',
        reading: 'いそぎあし',
        meanings: 'fast pace',
      },
      {
        kanji: '急く',
        reading: 'せく',
        meanings: 'to hurry',
      },
      {
        kanji: '急',
        reading: 'きゅう',
        meanings: 'sudden',
      },
      {
        kanji: '急遽',
        reading: 'きゅうきょ',
        meanings: 'hurriedly',
      },
      {
        kanji: '準急',
        reading: 'じゅんきゅう',
        meanings: 'semi-express train',
      },
      {
        kanji: '快急',
        reading: 'かいきゅう',
        meanings: 'rapid express (train)',
      },
    ],
  },
  {
    kanjiName: '真',
    strokes: 10,
    grade: 3,
    freq: 279,
    meanings: ['True', 'Reality', 'Buddhist Sect'],
    on: ['しん'],
    kun: ['ま', 'ま-', 'まこと'],
    wk_meanings: ['Reality'],
    jlpt: 4,
    quizAnswers: ['True', 'Unite', 'Build', 'Sound Of Jewels'],
    similars: [
      {
        kanji: '具',
        meaning: 'tool',
      },
      {
        kanji: '慎',
        meaning: 'humility',
      },
      {
        kanji: '直',
        meaning: 'straightaway',
      },
      {
        kanji: '臭',
        meaning: 'stinking',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '現',
        meaning: 'present',
      },
      {
        kanji: '乾',
        meaning: 'drought',
      },
      {
        kanji: '責',
        meaning: 'blame',
      },
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '貞',
        meaning: 'upright',
      },
    ],
    usedIn: [
      {
        kanji: '真',
        reading: 'ま',
        meanings: 'just',
      },
      {
        kanji: '誠',
        reading: 'まこと',
        meanings: 'truth',
      },
      {
        kanji: '秀真',
        reading: 'ほつま',
        meanings: 'Hotsuma (script)',
      },
      {
        kanji: '誠',
        reading: 'まこと',
        meanings: 'truth',
      },
      {
        kanji: '誠に',
        reading: 'まことに',
        meanings: 'indeed',
      },
      {
        kanji: '嘘から出たまこと',
        reading: 'うそからでたまこと',
        meanings:
          'something intended as a lie or joke which (by chance) ends up being true',
      },
      {
        kanji: '真',
        reading: 'しん',
        meanings: 'truth',
      },
      {
        kanji: '真意',
        reading: 'しんい',
        meanings: 'real intention',
      },
      {
        kanji: '組み写真',
        reading: 'くみしゃしん',
        meanings: 'composite or montage photograph',
      },
      {
        kanji: '迫真',
        reading: 'はくしん',
        meanings: 'realistic',
      },
    ],
  },
  {
    kanjiName: '堂',
    strokes: 11,
    grade: 4,
    freq: 1010,
    meanings: ['Public Chamber', 'Hall'],
    on: ['どう'],
    kun: [],
    wk_meanings: ['Hall', '^Public Chamber'],
    jlpt: 4,
    quizAnswers: ['Strike', 'Period', 'Race', 'Public Chamber'],
    similars: [
      {
        kanji: '掌',
        meaning: 'manipulate',
      },
      {
        kanji: '常',
        meaning: 'usual',
      },
      {
        kanji: '党',
        meaning: 'party',
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug',
      },
      {
        kanji: '痘',
        meaning: 'pox',
      },
      {
        kanji: '営',
        meaning: 'camp',
      },
      {
        kanji: '緯',
        meaning: 'horizontal',
      },
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '官',
        meaning: 'bureaucrat',
      },
      {
        kanji: '症',
        meaning: 'symptoms',
      },
    ],
    usedIn: [
      {
        kanji: '堂',
        reading: 'どう',
        meanings: 'temple',
      },
      {
        kanji: '堂々',
        reading: 'どうどう',
        meanings: 'magnificent',
      },
      {
        kanji: '殿堂',
        reading: 'でんどう',
        meanings: 'palace',
      },
      {
        kanji: '議事堂',
        reading: 'ぎじどう',
        meanings: 'assembly hall',
      },
    ],
  },
  {
    kanjiName: '試',
    strokes: 13,
    grade: 4,
    freq: 392,
    meanings: ['Test', 'Try', 'Attempt', 'Experiment', 'Ordeal'],
    on: ['し'],
    kun: ['こころ.みる', 'ため.す'],
    wk_meanings: ['Try', '^Attempt'],
    jlpt: 4,
    quizAnswers: ['Test', 'Album', 'Pension', 'Pointed'],
    similars: [
      {
        kanji: '誌',
        meaning: 'document',
      },
      {
        kanji: '誠',
        meaning: 'sincerity',
      },
      {
        kanji: '話',
        meaning: 'tale',
      },
      {
        kanji: '討',
        meaning: 'chastise',
      },
      {
        kanji: '証',
        meaning: 'evidence',
      },
      {
        kanji: '詩',
        meaning: 'poem',
      },
      {
        kanji: '読',
        meaning: 'read',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '訴',
        meaning: 'accusation',
      },
      {
        kanji: '託',
        meaning: 'consign',
      },
    ],
    usedIn: [
      {
        kanji: '試みる',
        reading: 'こころみる',
        meanings: 'to try',
      },
      {
        kanji: '試す',
        reading: 'ためす',
        meanings: 'to try (out)',
      },
      {
        kanji: '試筋',
        reading: 'ためすじ',
        meanings: 'patron',
      },
      {
        kanji: '試',
        reading: 'し',
        meanings: 'testing',
      },
      {
        kanji: '試合',
        reading: 'しあい',
        meanings: 'match',
      },
      {
        kanji: '公試',
        reading: 'こうし',
        meanings: 'national examinations',
      },
      {
        kanji: '考試',
        reading: 'こうし',
        meanings: 'test',
      },
    ],
  },
  {
    kanjiName: '借',
    strokes: 10,
    grade: 4,
    freq: 932,
    meanings: ['Borrow', 'Rent'],
    on: ['しゃく'],
    kun: ['か.りる'],
    wk_meanings: ['Borrow'],
    jlpt: 4,
    quizAnswers: ['Marketing', 'Fragrant', 'Borrow', 'Inside'],
    similars: [
      {
        kanji: '惜',
        meaning: 'pity',
      },
      {
        kanji: '昔',
        meaning: 'once upon a time',
      },
      {
        kanji: '措',
        meaning: 'set aside',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '備',
        meaning: 'equip',
      },
      {
        kanji: '普',
        meaning: 'universal',
      },
      {
        kanji: '猫',
        meaning: 'cat',
      },
      {
        kanji: '曹',
        meaning: 'office',
      },
      {
        kanji: '賃',
        meaning: 'fare',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
    ],
    usedIn: [
      {
        kanji: '借りる',
        reading: 'かりる',
        meanings: 'to borrow',
      },
      {
        kanji: '借りる時の地蔵顔、済す時の閻魔顔',
        reading: 'かりるときのじぞうがおなすときのえんまがお',
        meanings:
          'people look friendly when they ask for a loan but not so much when they repay it',
      },
      {
        kanji: '借家',
        reading: 'しゃくや',
        meanings: 'rented house',
      },
      {
        kanji: '借地',
        reading: 'しゃくち',
        meanings: 'leased land',
      },
      {
        kanji: '賃借',
        reading: 'ちんしゃく',
        meanings: 'hiring',
      },
      {
        kanji: '賃貸借',
        reading: 'ちんたいしゃく',
        meanings: 'renting',
      },
    ],
  },
  {
    kanjiName: '験',
    strokes: 18,
    grade: 4,
    freq: 410,
    meanings: ['Verification', 'Effect', 'Testing'],
    on: ['けん', 'げん'],
    kun: ['あかし', 'しるし', 'ため.す', 'ためし'],
    wk_meanings: ['Test'],
    jlpt: 4,
    quizAnswers: ['Verification', 'Explain Away', 'Reap', 'Valve'],
    similars: [
      {
        kanji: '騎',
        meaning: 'equestrian',
      },
      {
        kanji: '駅',
        meaning: 'station',
      },
      {
        kanji: '騒',
        meaning: 'boisterous',
      },
      {
        kanji: '駄',
        meaning: 'burdensome',
      },
      {
        kanji: '駆',
        meaning: 'drive',
      },
      {
        kanji: '駐',
        meaning: 'stop-over',
      },
      {
        kanji: '馬',
        meaning: 'horse',
      },
      {
        kanji: '鯨',
        meaning: 'whale',
      },
      {
        kanji: '悦',
        meaning: 'ecstasy',
      },
      {
        kanji: '容',
        meaning: 'contain',
      },
    ],
    usedIn: [
      {
        kanji: '徴',
        reading: 'しるし',
        meanings: 'sign',
      },
      {
        kanji: '試す',
        reading: 'ためす',
        meanings: 'to try (out)',
      },
      {
        kanji: '試し',
        reading: 'ためし',
        meanings: 'trial',
      },
      {
        kanji: '験',
        reading: 'げん',
        meanings: 'effect',
      },
      {
        kanji: '験者',
        reading: 'けんざ',
        meanings: 'mountaineering ascetic',
      },
      {
        kanji: '治験',
        reading: 'ちけん',
        meanings: 'clinical trial',
      },
      {
        kanji: '筆記試験',
        reading: 'ひっきしけん',
        meanings: 'written examination',
      },
      {
        kanji: '験',
        reading: 'げん',
        meanings: 'effect',
      },
      {
        kanji: 'ゲン担ぎ',
        reading: 'げんかつぎ',
        meanings: 'superstition',
      },
      {
        kanji: '霊験',
        reading: 'れいげん',
        meanings: 'miraculous efficacy',
      },
    ],
  },
  {
    kanjiName: '質',
    strokes: 15,
    grade: 5,
    freq: 389,
    meanings: ['Substance', 'Quality', 'Matter', 'Temperament'],
    on: ['しつ', 'しち', 'ち'],
    kun: ['たち', 'ただ.す', 'もと', 'わりふ'],
    wk_meanings: ['Quality'],
    jlpt: 4,
    quizAnswers: ['Serve', 'Praise', 'Substance', 'Benefit'],
    similars: [
      {
        kanji: '循',
        meaning: 'sequential',
      },
      {
        kanji: '傾',
        meaning: 'lean',
      },
      {
        kanji: '類',
        meaning: 'sort',
      },
      {
        kanji: '積',
        meaning: 'volume',
      },
      {
        kanji: '費',
        meaning: 'expense',
      },
      {
        kanji: '顔',
        meaning: 'face',
      },
      {
        kanji: '順',
        meaning: 'obey',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '頒',
        meaning: 'distribute',
      },
    ],
    usedIn: [
      {
        kanji: '質',
        reading: 'たち',
        meanings: 'nature (of a person)',
      },
      {
        kanji: 'たちが良い',
        reading: 'たちがいい',
        meanings: 'good-natured',
      },
      {
        kanji: '質す',
        reading: 'ただす',
        meanings: 'to ask (about)',
      },
      {
        kanji: '質',
        reading: 'しつ',
        meanings: 'quality',
      },
      {
        kanji: '質疑',
        reading: 'しつぎ',
        meanings: 'question',
      },
      {
        kanji: '変質',
        reading: 'へんしつ',
        meanings: 'alteration (of character or essence)',
      },
      {
        kanji: 'タンパク質',
        reading: 'たんぱくしつ',
        meanings: 'protein',
      },
      {
        kanji: '質',
        reading: 'しち',
        meanings: 'pawn',
      },
      {
        kanji: '質屋',
        reading: 'しちや',
        meanings: 'pawnshop',
      },
      {
        kanji: '入質',
        reading: 'にゅうしち',
        meanings: 'pawning',
      },
      {
        kanji: '流質',
        reading: 'りゅうしち',
        meanings: 'forfeiting a pawned article',
      },
      {
        kanji: '入質',
        reading: 'にゅうしち',
        meanings: 'pawning',
      },
      {
        kanji: '流質',
        reading: 'りゅうしち',
        meanings: 'forfeiting a pawned article',
      },
    ],
  },
  {
    kanjiName: '貸',
    strokes: 12,
    grade: 5,
    freq: 995,
    meanings: ['Lend'],
    on: ['たい'],
    kun: ['か.す', 'か.し-', 'かし-'],
    wk_meanings: ['Lend'],
    jlpt: 4,
    quizAnswers: ['Steer', 'Request', 'Steeple', 'Lend'],
    similars: [
      {
        kanji: '賃',
        meaning: 'fare',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '貨',
        meaning: 'freight',
      },
      {
        kanji: '順',
        meaning: 'obey',
      },
      {
        kanji: '偵',
        meaning: 'spy',
      },
      {
        kanji: '僚',
        meaning: 'colleague',
      },
      {
        kanji: '傾',
        meaning: 'lean',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '値',
        meaning: 'price',
      },
      {
        kanji: '貧',
        meaning: 'poverty',
      },
    ],
    usedIn: [
      {
        kanji: '貸す',
        reading: 'かす',
        meanings: 'to lend',
      },
      {
        kanji: '貸与',
        reading: 'たいよ',
        meanings: 'loan',
      },
      {
        kanji: '貸借',
        reading: 'たいしゃく',
        meanings: 'loan',
      },
      {
        kanji: '転貸',
        reading: 'てんたい',
        meanings: 'subleasing',
      },
      {
        kanji: '借貸',
        reading: 'しゃくたい',
        meanings: 'loan',
      },
    ],
  },
  {
    kanjiName: '才',
    strokes: 3,
    grade: 2,
    freq: 1497,
    meanings: ['Genius', 'Years Old', 'Cubic Shaku'],
    on: ['さい'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Arrest', 'Green', 'Descendants', 'Genius'],
    similars: [
      {
        kanji: '丁',
        meaning: 'street',
      },
      {
        kanji: '万',
        meaning: 'ten thousand',
      },
      {
        kanji: '寸',
        meaning: 'measurement',
      },
      {
        kanji: '示',
        meaning: 'show',
      },
      {
        kanji: '切',
        meaning: 'cut',
      },
      {
        kanji: '井',
        meaning: 'well',
      },
      {
        kanji: '方',
        meaning: 'direction',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '戸',
        meaning: 'door',
      },
    ],
    usedIn: [
      {
        kanji: '才',
        reading: 'さい',
        meanings: 'ability',
      },
      {
        kanji: '歳',
        reading: 'さい',
        meanings: '... years old',
      },
      {
        kanji: '鬼才',
        reading: 'きさい',
        meanings: 'wizard',
      },
      {
        kanji: '英才',
        reading: 'えいさい',
        meanings: 'genius',
      },
    ],
  },
  {
    kanjiName: '王',
    strokes: 4,
    grade: 1,
    freq: 684,
    meanings: ['King', 'Rule', 'Magnate'],
    on: ['おう', '-のう'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Grieve', 'Aim (a Gun) At', 'King', 'Careful Inquiry'],
    similars: [
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '五',
        meaning: 'five',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '土',
        meaning: 'soil',
      },
      {
        kanji: '三',
        meaning: 'three',
      },
      {
        kanji: '全',
        meaning: 'whole',
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
    ],
    usedIn: [
      {
        kanji: '王',
        reading: 'おう',
        meanings: 'king',
      },
      {
        kanji: '王女',
        reading: 'おうじょ',
        meanings: 'princess',
      },
      {
        kanji: '竜王',
        reading: 'りゅうおう',
        meanings: 'Dragon King',
      },
      {
        kanji: '大王',
        reading: 'だいおう',
        meanings: 'great king',
      },
    ],
  },
  {
    kanjiName: '石',
    strokes: 5,
    grade: 1,
    freq: 342,
    meanings: ['Stone'],
    on: ['せき', 'しゃく', 'こく'],
    kun: ['いし'],
    jlpt: 3,
    quizAnswers: ['Impatient', 'Book', 'Illness', 'Stone'],
    similars: [
      {
        kanji: '加',
        meaning: 'add',
      },
      {
        kanji: '召',
        meaning: 'seduce',
      },
      {
        kanji: '古',
        meaning: 'old',
      },
      {
        kanji: '否',
        meaning: 'negate',
      },
      {
        kanji: '君',
        meaning: 'mister',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '如',
        meaning: 'likeness',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)',
      },
    ],
    usedIn: [
      {
        kanji: '石',
        reading: 'いし',
        meanings: 'stone',
      },
      {
        kanji: '石垣',
        reading: 'いしがき',
        meanings: 'stone wall',
      },
      {
        kanji: '墓石',
        reading: 'ぼせき',
        meanings: 'tombstone',
      },
      {
        kanji: '敷石',
        reading: 'しきいし',
        meanings: 'paving stone',
      },
      {
        kanji: '石',
        reading: 'せき',
        meanings: 'counter for jewels in a watch',
      },
      {
        kanji: '石材',
        reading: 'せきざい',
        meanings: '(building) stone',
      },
      {
        kanji: '一石',
        reading: 'いっせき',
        meanings: 'one game (of go)',
      },
      {
        kanji: '投石',
        reading: 'とうせき',
        meanings: 'stone throwing',
      },
      {
        kanji: '石神',
        reading: 'しゃくじん',
        meanings: 'stone which is worshipped',
      },
      {
        kanji: '石南花',
        reading: 'しゃくなげ',
        meanings: 'rhododendron',
      },
      {
        kanji: '電磁石',
        reading: 'でんじしゃく',
        meanings: 'electromagnet',
      },
      {
        kanji: '界磁石',
        reading: 'かいじしゃく',
        meanings: 'field magnet',
      },
      {
        kanji: '石',
        reading: 'こく',
        meanings: 'koku',
      },
      {
        kanji: '石高',
        reading: 'こくだか',
        meanings: '(crop) yield',
      },
      {
        kanji: '一石',
        reading: 'いっこく',
        meanings: 'one koku (measure)',
      },
    ],
  },
  {
    kanjiName: '内',
    strokes: 4,
    grade: 2,
    freq: 44,
    meanings: ['Inside', 'Within', 'Between', 'Among', 'House', 'Home'],
    on: ['ない', 'だい'],
    kun: ['うち'],
    jlpt: 3,
    quizAnswers: ['Resemblance', 'Commit (suicide)', 'Inside', 'Twig'],
    similars: [
      {
        kanji: '丙',
        meaning: 'third class',
      },
      {
        kanji: '肉',
        meaning: 'meat',
      },
      {
        kanji: '帆',
        meaning: 'sail',
      },
      {
        kanji: '刺',
        meaning: 'thorn',
      },
      {
        kanji: '六',
        meaning: 'six',
      },
      {
        kanji: '因',
        meaning: 'cause',
      },
      {
        kanji: '円',
        meaning: 'circle',
      },
      {
        kanji: '柄',
        meaning: 'design',
      },
      {
        kanji: '別',
        meaning: 'separate',
      },
      {
        kanji: '呉',
        meaning: 'give',
      },
    ],
    usedIn: [
      {
        kanji: '内',
        reading: 'うち',
        meanings: 'inside',
      },
      {
        kanji: '内々',
        reading: 'うちうち',
        meanings: 'private',
      },
      {
        kanji: '幕内',
        reading: 'まくうち',
        meanings: 'makuuchi',
      },
      {
        kanji: 'お家',
        reading: 'おうち',
        meanings: 'your home',
      },
      {
        kanji: '内',
        reading: 'ない',
        meanings: 'within ...',
      },
      {
        kanji: '内科',
        reading: 'ないか',
        meanings: 'internal medicine',
      },
      {
        kanji: '党内',
        reading: 'とうない',
        meanings: 'party-internal',
      },
      {
        kanji: '校内',
        reading: 'こうない',
        meanings: 'within a school',
      },
      {
        kanji: '内裏',
        reading: 'だいり',
        meanings: 'imperial palace',
      },
      {
        kanji: '内府',
        reading: 'ないふ',
        meanings: 'Minister of the Interior (669-1868)',
      },
      {
        kanji: '境内',
        reading: 'けいだい',
        meanings: 'grounds (esp. of shrines and temples)',
      },
      {
        kanji: '海内',
        reading: 'かいだい',
        meanings: 'the whole country',
      },
    ],
  },
  {
    kanjiName: '太',
    strokes: 4,
    grade: 2,
    freq: 552,
    meanings: ['Plump', 'Thick', 'Big Around'],
    on: ['たい', 'た'],
    kun: ['ふと.い', 'ふと.る'],
    jlpt: 3,
    quizAnswers: ['Link', 'Smear', 'Plump', 'Group'],
    similars: [
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '不',
        meaning: 'negative',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '広',
        meaning: 'wide',
      },
      {
        kanji: '本',
        meaning: 'book',
      },
      {
        kanji: '状',
        meaning: 'status quo',
      },
      {
        kanji: '求',
        meaning: 'request',
      },
      {
        kanji: '返',
        meaning: 'return',
      },
    ],
    usedIn: [
      {
        kanji: '太い',
        reading: 'ふとい',
        meanings: 'fat',
      },
      {
        kanji: '太藺',
        reading: 'ふとい',
        meanings: 'softstem bulrush (Scirpus tabernaemontani)',
      },
      {
        kanji: '太る',
        reading: 'ふとる',
        meanings: 'to put on weight',
      },
      {
        kanji: '大山',
        reading: 'たいざん',
        meanings: 'great mountain',
      },
      {
        kanji: '太鼓',
        reading: 'たいこ',
        meanings: 'drum',
      },
      {
        kanji: '太太',
        reading: 'たいたい',
        meanings: 'wife',
      },
      {
        kanji: '馬太',
        reading: 'またい',
        meanings: 'Matthew (the Apostle)',
      },
      {
        kanji: '大山',
        reading: 'たいざん',
        meanings: 'great mountain',
      },
      {
        kanji: '太鼓',
        reading: 'たいこ',
        meanings: 'drum',
      },
      {
        kanji: '羽太',
        reading: 'はた',
        meanings: 'sea basses',
      },
      {
        kanji: '赤羽太',
        reading: 'あかはた',
        meanings: 'blacktip grouper (species of fish',
      },
    ],
  },
  {
    kanjiName: '引',
    strokes: 4,
    grade: 2,
    freq: 218,
    meanings: ['Pull', 'Tug', 'Jerk', 'Admit', 'Install', 'Quote', 'Refer To'],
    on: ['いん'],
    kun: ['ひ.く', 'ひ.き', 'ひ.き-', '-び.き', 'ひ.ける'],
    jlpt: 3,
    quizAnswers: ['Pull', 'Ferment', 'Broad', 'Tortoise'],
    similars: [
      {
        kanji: '弔',
        meaning: 'condolences',
      },
      {
        kanji: '弓',
        meaning: 'bow',
      },
      {
        kanji: '弟',
        meaning: 'younger brother',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '沸',
        meaning: 'seethe',
      },
      {
        kanji: '干',
        meaning: 'dry',
      },
      {
        kanji: '井',
        meaning: 'well',
      },
      {
        kanji: '与',
        meaning: 'bestow',
      },
      {
        kanji: '己',
        meaning: 'self',
      },
      {
        kanji: '千',
        meaning: 'thousand',
      },
    ],
    usedIn: [
      {
        kanji: '引く',
        reading: 'ひく',
        meanings: 'to pull',
      },
      {
        kanji: '引く手',
        reading: 'ひくて',
        meanings: 'admirer',
      },
      {
        kanji: '引ける',
        reading: 'ひける',
        meanings: 'to close',
      },
      {
        kanji: '引退',
        reading: 'いんたい',
        meanings: 'retirement',
      },
      {
        kanji: '引責',
        reading: 'いんせき',
        meanings: 'taking responsibility',
      },
      {
        kanji: '誘引',
        reading: 'ゆういん',
        meanings: 'enticement',
      },
      {
        kanji: '吸引',
        reading: 'きゅういん',
        meanings: 'absorption',
      },
    ],
  },
  {
    kanjiName: '市',
    strokes: 5,
    grade: 2,
    freq: 42,
    meanings: ['Market', 'City', 'Town'],
    on: ['し'],
    kun: ['いち'],
    jlpt: 3,
    quizAnswers: ['Market', 'Hedge', 'Point', 'Wide'],
    similars: [
      {
        kanji: '布',
        meaning: 'linen',
      },
      {
        kanji: '姉',
        meaning: 'elder sister',
      },
      {
        kanji: '出',
        meaning: 'exit',
      },
      {
        kanji: '方',
        meaning: 'direction',
      },
      {
        kanji: '希',
        meaning: 'hope',
      },
      {
        kanji: '帝',
        meaning: 'sovereign',
      },
      {
        kanji: '肺',
        meaning: 'lungs',
      },
      {
        kanji: '高',
        meaning: 'tall',
      },
      {
        kanji: '両',
        meaning: 'both',
      },
      {
        kanji: '制',
        meaning: 'system',
      },
    ],
    usedIn: [
      {
        kanji: '市',
        reading: 'いち',
        meanings: 'market',
      },
      {
        kanji: '市中',
        reading: 'しちゅう',
        meanings: 'in the city',
      },
      {
        kanji: '骨董市',
        reading: 'こっとういち',
        meanings: 'antique market',
      },
      {
        kanji: '草市',
        reading: 'くさいち',
        meanings: 'flower market during Obon',
      },
      {
        kanji: '市',
        reading: 'し',
        meanings: 'city',
      },
      {
        kanji: '市営',
        reading: 'しえい',
        meanings: '(under) municipal management (transport',
      },
      {
        kanji: '同市',
        reading: 'どうし',
        meanings: 'same city',
      },
      {
        kanji: '田園都市',
        reading: 'でんえんとし',
        meanings: 'garden city',
      },
    ],
  },
  {
    kanjiName: '他',
    strokes: 5,
    grade: 3,
    freq: 543,
    meanings: ['Other', 'Another', 'The Others'],
    on: ['た'],
    kun: ['ほか'],
    jlpt: 3,
    quizAnswers: ['Husk', 'Other', 'Angling', 'Road-way'],
    similars: [
      {
        kanji: '化',
        meaning: 'change',
      },
      {
        kanji: '屯',
        meaning: 'barracks',
      },
      {
        kanji: '川',
        meaning: 'stream',
      },
      {
        kanji: '向',
        meaning: 'yonder',
      },
      {
        kanji: '地',
        meaning: 'ground',
      },
      {
        kanji: '休',
        meaning: 'rest',
      },
      {
        kanji: '池',
        meaning: 'pond',
      },
      {
        kanji: '施',
        meaning: 'give',
      },
      {
        kanji: '乱',
        meaning: 'riot',
      },
      {
        kanji: '伯',
        meaning: 'chief',
      },
    ],
    usedIn: [
      {
        kanji: '他',
        reading: 'ほか',
        meanings: 'another place',
      },
      {
        kanji: '他に',
        reading: 'ほかに',
        meanings: 'else',
      },
      {
        kanji: '思いのほか',
        reading: 'おもいのほか',
        meanings: 'unexpectedly',
      },
      {
        kanji: '殊の外',
        reading: 'ことのほか',
        meanings: 'exceedingly',
      },
      {
        kanji: '他',
        reading: 'た',
        meanings: 'other (esp. people and abstract matters)',
      },
      {
        kanji: '他国',
        reading: 'たこく',
        meanings: 'foreign country',
      },
      {
        kanji: '自他',
        reading: 'じた',
        meanings: 'oneself and others',
      },
      {
        kanji: '排他',
        reading: 'はいた',
        meanings: 'exclusion',
      },
    ],
  },
  {
    kanjiName: '号',
    strokes: 5,
    grade: 3,
    freq: 585,
    meanings: [
      'Nickname',
      'Number',
      'Item',
      'Title',
      'Pseudonym',
      'Name',
      'Call',
    ],
    on: ['ごう'],
    kun: ['さけ.ぶ', 'よびな'],
    jlpt: 3,
    quizAnswers: ['Model After', 'Nickname', 'Teachings', 'Explain Away'],
    similars: [
      {
        kanji: '叫',
        meaning: 'shout',
      },
      {
        kanji: '吐',
        meaning: 'spit',
      },
      {
        kanji: '口',
        meaning: 'mouth',
      },
      {
        kanji: '史',
        meaning: 'history',
      },
      {
        kanji: '中',
        meaning: 'in',
      },
      {
        kanji: '兄',
        meaning: 'elder brother',
      },
      {
        kanji: '吟',
        meaning: 'versify',
      },
      {
        kanji: '呈',
        meaning: 'display',
      },
      {
        kanji: '呉',
        meaning: 'give',
      },
      {
        kanji: '吸',
        meaning: 'suck',
      },
    ],
    usedIn: [
      {
        kanji: '号',
        reading: 'ごう',
        meanings: 'number',
      },
      {
        kanji: '号車',
        reading: 'ごうしゃ',
        meanings: 'suffix for train car numbers',
      },
      {
        kanji: '二号',
        reading: 'にごう',
        meanings: 'number two',
      },
      {
        kanji: '符号',
        reading: 'ふごう',
        meanings: 'sign',
      },
    ],
  },
  {
    kanjiName: '平',
    strokes: 5,
    grade: 3,
    freq: 128,
    meanings: ['Even', 'Flat', 'Peace'],
    on: ['へい', 'びょう', 'ひょう'],
    kun: ['たい.ら', '-だいら', 'ひら', 'ひら-'],
    jlpt: 3,
    quizAnswers: ['Pure', 'Wave', 'Table', 'Even'],
    similars: [
      {
        kanji: '来',
        meaning: 'come',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '匠',
        meaning: 'artisan',
      },
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '坪',
        meaning: 'two-mat area',
      },
      {
        kanji: '斗',
        meaning: 'Big Dipper',
      },
      {
        kanji: '千',
        meaning: 'thousand',
      },
      {
        kanji: '半',
        meaning: 'half',
      },
      {
        kanji: '升',
        meaning: 'measuring box',
      },
      {
        kanji: '干',
        meaning: 'dry',
      },
    ],
    usedIn: [
      {
        kanji: '平ら',
        reading: 'たいら',
        meanings: 'flat',
      },
      {
        kanji: '平らか',
        reading: 'たいらか',
        meanings: 'level',
      },
      {
        kanji: '平らげる',
        reading: 'たいらげる',
        meanings: 'to eat up (completely)',
      },
      {
        kanji: '平',
        reading: 'ひら',
        meanings: 'something broad and flat',
      },
      {
        kanji: '平泳ぎ',
        reading: 'ひらおよぎ',
        meanings: 'breaststroke (swimming)',
      },
      {
        kanji: '嘉平次平',
        reading: 'かへいじひら',
        meanings: 'hakama fabric made from meisen silk',
      },
      {
        kanji: '金平',
        reading: 'かねひら',
        meanings: 'Acheilognathus rhombeus (species of cyprinid)',
      },
      {
        kanji: '平',
        reading: 'へい',
        meanings: 'nth year in the Heisei era (1989.1.8-2019.4.30)',
      },
      {
        kanji: '平安',
        reading: 'へいあん',
        meanings: 'peace',
      },
      {
        kanji: '和平',
        reading: 'わへい',
        meanings: 'peace',
      },
      {
        kanji: '公平',
        reading: 'こうへい',
        meanings: 'fairness',
      },
      {
        kanji: '平等',
        reading: 'びょうどう',
        meanings: 'equality',
      },
      {
        kanji: '平常心',
        reading: 'びょうじょうしん',
        meanings: 'everyday feelings',
      },
      {
        kanji: '寛平',
        reading: 'かんぴょう',
        meanings: 'Kanpyō era (889.4.27-898.4.26)',
      },
      {
        kanji: '天平',
        reading: 'てんぴょう',
        meanings: 'Tenpyō era (729.8.5-749.4.14)',
      },
      {
        kanji: '平韻',
        reading: 'ひょういん',
        meanings: 'level-tone rhyme (of Chinese)',
      },
      {
        kanji: '平声',
        reading: 'ひょうしょう',
        meanings: 'first tone in old Chinese phonetics',
      },
    ],
  },
  {
    kanjiName: '打',
    strokes: 5,
    grade: 3,
    freq: 239,
    meanings: ['Strike', 'Hit', 'Knock', 'Pound', 'Dozen'],
    on: ['だ', 'だあす'],
    kun: ['う.つ', 'う.ち-', 'ぶ.つ'],
    jlpt: 3,
    quizAnswers: ['Strike', 'Unusual', 'Fast', 'Obstruct'],
    similars: [
      {
        kanji: '払',
        meaning: 'pay',
      },
      {
        kanji: '折',
        meaning: 'fold',
      },
      {
        kanji: '抜',
        meaning: 'slip out',
      },
      {
        kanji: '技',
        meaning: 'skill',
      },
      {
        kanji: '扶',
        meaning: 'aid',
      },
      {
        kanji: '抗',
        meaning: 'confront',
      },
      {
        kanji: '持',
        meaning: 'hold',
      },
      {
        kanji: '抵',
        meaning: 'resist',
      },
      {
        kanji: '拝',
        meaning: 'worship',
      },
      {
        kanji: '拡',
        meaning: 'broaden',
      },
    ],
    usedIn: [
      {
        kanji: '打つ',
        reading: 'うつ',
        meanings: 'to hit',
      },
      {
        kanji: '打つ手',
        reading: 'うつて',
        meanings: 'way to do (something)',
      },
      {
        kanji: '打つ',
        reading: 'ぶつ',
        meanings: 'to hit (someone)',
      },
      {
        kanji: '打付ける',
        reading: 'ぶつける',
        meanings: "to hit (e.g. one's head)",
      },
      {
        kanji: '打',
        reading: 'だ',
        meanings: 'hitting a ball (with a bat',
      },
      {
        kanji: '打',
        reading: 'だーす',
        meanings: 'dozen',
      },
      {
        kanji: '本塁打',
        reading: 'ほんるいだ',
        meanings: 'home run',
      },
      {
        kanji: '二塁打',
        reading: 'にるいだ',
        meanings: 'two-base hit',
      },
      {
        kanji: '打',
        reading: 'だーす',
        meanings: 'dozen',
      },
    ],
  },
  {
    kanjiName: '申',
    strokes: 5,
    grade: 3,
    freq: 492,
    meanings: [
      'Have The Honor To',
      'Sign Of The Monkey',
      '3-5pm',
      'Ninth Sign Of Chinese Zodiac',
    ],
    on: ['しん'],
    kun: ['もう.す', 'もう.し-', 'さる'],
    jlpt: 3,
    quizAnswers: ['Chicken', 'Have The Honor To', 'Splendor', 'Sole'],
    similars: [
      {
        kanji: '甲',
        meaning: 'armor',
      },
      {
        kanji: '早',
        meaning: 'early',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
      {
        kanji: '伸',
        meaning: 'expand',
      },
      {
        kanji: '車',
        meaning: 'car',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '岬',
        meaning: 'headland',
      },
      {
        kanji: '東',
        meaning: 'east',
      },
      {
        kanji: '卓',
        meaning: 'eminent',
      },
    ],
    usedIn: [
      {
        kanji: '申す',
        reading: 'もうす',
        meanings: 'to say',
      },
      {
        kanji: '申すまでもなく',
        reading: 'もうすまでもなく',
        meanings: 'needless to say',
      },
      {
        kanji: '申',
        reading: 'さる',
        meanings: 'the Monkey (ninth sign of the Chinese zodiac)',
      },
      {
        kanji: '猿楽',
        reading: 'さるがく',
        meanings:
          'sarugaku (form of theatre popular in Japan during the 11th to 14th centuries)',
      },
      {
        kanji: '庚申',
        reading: 'かのえさる',
        meanings: 'Metal Monkey (57th term of the sexagenary cycle',
      },
      {
        kanji: '甲申',
        reading: 'きのえさる',
        meanings: 'Wood Monkey (21st term of the sexagenary cycle',
      },
      {
        kanji: '申請',
        reading: 'しんせい',
        meanings: 'application',
      },
      {
        kanji: '申告',
        reading: 'しんこく',
        meanings: 'report',
      },
      {
        kanji: '上申',
        reading: 'じょうしん',
        meanings: 'report to a superior',
      },
      {
        kanji: '具申',
        reading: 'ぐしん',
        meanings: 'offering a full report to a superior',
      },
    ],
  },
  {
    kanjiName: '礼',
    strokes: 5,
    grade: 3,
    freq: 1185,
    meanings: ['Salute', 'Bow', 'Ceremony', 'Thanks', 'Remuneration'],
    on: ['れい', 'らい'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Deliberate', 'Husk', 'Nine', 'Salute'],
    similars: [
      {
        kanji: '初',
        meaning: 'first time',
      },
      {
        kanji: '社',
        meaning: 'company',
      },
      {
        kanji: '祝',
        meaning: 'celebrate',
      },
      {
        kanji: '州',
        meaning: 'state',
      },
      {
        kanji: '祈',
        meaning: 'pray',
      },
      {
        kanji: '祉',
        meaning: 'welfare',
      },
      {
        kanji: '視',
        meaning: 'inspection',
      },
      {
        kanji: '神',
        meaning: 'gods',
      },
      {
        kanji: '祖',
        meaning: 'ancestor',
      },
      {
        kanji: '沈',
        meaning: 'sink',
      },
    ],
    usedIn: [
      {
        kanji: '礼',
        reading: 'れい',
        meanings: 'thanks',
      },
      {
        kanji: '礼儀',
        reading: 'れいぎ',
        meanings: 'manners',
      },
      {
        kanji: '巡礼',
        reading: 'じゅんれい',
        meanings: 'pilgrimage',
      },
      {
        kanji: '儀礼',
        reading: 'ぎれい',
        meanings: 'courtesy',
      },
      {
        kanji: '礼賛',
        reading: 'らいさん',
        meanings: 'praise',
      },
      {
        kanji: '礼冠',
        reading: 'らいかん',
        meanings:
          'crown or head-ornament worn with formal or ceremonial clothes by nobility (ritsuryō system)',
      },
      {
        kanji: '頂礼',
        reading: 'ちょうらい',
        meanings: 'prostration',
      },
      {
        kanji: '帰命頂礼',
        reading: 'きみょうちょうらい',
        meanings: 'most formal form of a prayer',
      },
    ],
  },
  {
    kanjiName: '耳',
    strokes: 6,
    grade: 1,
    freq: 1328,
    meanings: ['Ear'],
    on: ['じ'],
    kun: ['みみ'],
    jlpt: 3,
    quizAnswers: ['Ear', 'Lawn', 'Collusion', 'Measurement'],
    similars: [
      {
        kanji: '取',
        meaning: 'take',
      },
      {
        kanji: '画',
        meaning: 'brush-stroke',
      },
      {
        kanji: '恥',
        meaning: 'shame',
      },
      {
        kanji: '車',
        meaning: 'car',
      },
      {
        kanji: '身',
        meaning: 'somebody',
      },
      {
        kanji: '草',
        meaning: 'grass',
      },
      {
        kanji: '申',
        meaning: 'have the honor to',
      },
      {
        kanji: '用',
        meaning: 'utilize',
      },
      {
        kanji: '最',
        meaning: 'utmost',
      },
      {
        kanji: '甲',
        meaning: 'armor',
      },
    ],
    usedIn: [
      {
        kanji: '耳',
        reading: 'みみ',
        meanings: 'ear',
      },
      {
        kanji: '耳障り',
        reading: 'みみざわり',
        meanings: 'hard (on the ears)',
      },
      {
        kanji: '大耳',
        reading: 'おおみみ',
        meanings: 'big ears',
      },
      {
        kanji: '遠耳',
        reading: 'とおみみ',
        meanings: 'sharp hearing',
      },
      {
        kanji: '耳鼻科',
        reading: 'じびか',
        meanings: 'otolaryngology',
      },
      {
        kanji: '耳鼻咽喉科',
        reading: 'じびいんこうか',
        meanings: 'otorhinolaryngology',
      },
      {
        kanji: '中耳',
        reading: 'ちゅうじ',
        meanings: 'middle ear',
      },
      {
        kanji: '外耳',
        reading: 'がいじ',
        meanings: 'external ear',
      },
    ],
  },
  {
    kanjiName: '交',
    strokes: 6,
    grade: 2,
    freq: 178,
    meanings: ['Mingle', 'Mixing', 'Association', 'Coming & Going'],
    on: ['こう'],
    kun: [
      'まじ.わる',
      'まじ.える',
      'ま.じる',
      'まじ.る',
      'ま.ざる',
      'ま.ぜる',
      '-か.う',
      'か.わす',
      'かわ.す',
      'こもごも',
    ],
    jlpt: 3,
    quizAnswers: ['Demand', 'Rome', 'Amount', 'Mingle'],
    similars: [
      {
        kanji: '衣',
        meaning: 'garment',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '変',
        meaning: 'unusual',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
      {
        kanji: '疫',
        meaning: 'epidemic',
      },
      {
        kanji: '立',
        meaning: 'stand up',
      },
      {
        kanji: '灰',
        meaning: 'ashes',
      },
      {
        kanji: '父',
        meaning: 'father',
      },
      {
        kanji: '充',
        meaning: 'allot',
      },
      {
        kanji: '炭',
        meaning: 'charcoal',
      },
    ],
    usedIn: [
      {
        kanji: '交わる',
        reading: 'まじわる',
        meanings: 'to cross',
      },
      {
        kanji: '交える',
        reading: 'まじえる',
        meanings: 'to mix',
      },
      {
        kanji: '混じる',
        reading: 'まじる',
        meanings: 'to be mixed',
      },
      {
        kanji: '混じる',
        reading: 'まじる',
        meanings: 'to be mixed',
      },
      {
        kanji: '混ざる',
        reading: 'まざる',
        meanings: 'to be mixed',
      },
      {
        kanji: '混ぜる',
        reading: 'まぜる',
        meanings: 'to mix',
      },
      {
        kanji: '交わす',
        reading: 'かわす',
        meanings: 'to exchange (messages',
      },
      {
        kanji: '交わす',
        reading: 'かわす',
        meanings: 'to exchange (messages',
      },
      {
        kanji: '交々',
        reading: 'こもごも',
        meanings: 'alternately',
      },
      {
        kanji: '交',
        reading: 'こう',
        meanings: 'association',
      },
      {
        kanji: '交易',
        reading: 'こうえき',
        meanings: 'trade',
      },
      {
        kanji: '親交',
        reading: 'しんこう',
        meanings: 'intimacy',
      },
      {
        kanji: '国交',
        reading: 'こっこう',
        meanings: 'diplomatic relations',
      },
    ],
  },
  {
    kanjiName: '光',
    strokes: 6,
    grade: 2,
    freq: 527,
    meanings: ['Ray', 'Light'],
    on: ['こう'],
    kun: ['ひか.る', 'ひかり'],
    jlpt: 3,
    quizAnswers: ['Shilling', 'Finish', 'Mountain Pass', 'Ray'],
    similars: [
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '宅',
        meaning: 'home',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '花',
        meaning: 'flower',
      },
      {
        kanji: '攻',
        meaning: 'aggression',
      },
      {
        kanji: '究',
        meaning: 'research',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '来',
        meaning: 'come',
      },
      {
        kanji: '峡',
        meaning: 'gorge',
      },
    ],
    usedIn: [
      {
        kanji: '光る',
        reading: 'ひかる',
        meanings: 'to shine',
      },
      {
        kanji: '光る棒',
        reading: 'ひかるぼう',
        meanings: 'glowstick',
      },
      {
        kanji: '光',
        reading: 'ひかり',
        meanings: 'light',
      },
      {
        kanji: '光り輝く',
        reading: 'ひかりかがやく',
        meanings: 'to shine',
      },
      {
        kanji: '越光',
        reading: 'こしひかり',
        meanings: 'Koshihikari (variety of rice)',
      },
      {
        kanji: '柔らかな光',
        reading: 'やわらかなひかり',
        meanings: 'soft light',
      },
      {
        kanji: '光学',
        reading: 'こうがく',
        meanings: 'optics',
      },
      {
        kanji: '光栄',
        reading: 'こうえい',
        meanings: 'honour',
      },
      {
        kanji: '脚光',
        reading: 'きゃっこう',
        meanings: 'footlight',
      },
      {
        kanji: '発光',
        reading: 'はっこう',
        meanings: 'emission (of light)',
      },
    ],
  },
  {
    kanjiName: '回',
    strokes: 6,
    grade: 2,
    freq: 50,
    meanings: ['-times', 'Round', 'Game', 'Revolve', 'Counter For Occurrences'],
    on: ['かい', 'え'],
    kun: [
      'まわ.る',
      '-まわ.る',
      '-まわ.り',
      'まわ.す',
      '-まわ.す',
      'まわ.し-',
      '-まわ.し',
      'もとお.る',
      'か.える',
    ],
    jlpt: 3,
    quizAnswers: ['-times', 'Lord', 'Recommend', 'Stamp'],
    similars: [
      {
        kanji: '固',
        meaning: 'harden',
      },
      {
        kanji: '個',
        meaning: 'individual',
      },
      {
        kanji: '何',
        meaning: 'what',
      },
      {
        kanji: '困',
        meaning: 'quandary',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '団',
        meaning: 'group',
      },
      {
        kanji: '囚',
        meaning: 'captured',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '巨',
        meaning: 'gigantic',
      },
      {
        kanji: '司',
        meaning: 'director',
      },
    ],
    usedIn: [
      {
        kanji: '回る',
        reading: 'まわる',
        meanings: 'to turn',
      },
      {
        kanji: '回す',
        reading: 'まわす',
        meanings: 'to turn',
      },
      {
        kanji: '回る',
        reading: 'もとおる',
        meanings: 'to wander around',
      },
      {
        kanji: '回',
        reading: 'かい',
        meanings: 'counter for occurrences',
      },
      {
        kanji: '回帰',
        reading: 'かいき',
        meanings: 'return (to)',
      },
      {
        kanji: '初回',
        reading: 'しょかい',
        meanings: 'first time',
      },
      {
        kanji: '奪回',
        reading: 'だっかい',
        meanings: 'recovery',
      },
      {
        kanji: '回向',
        reading: 'えこう',
        meanings: 'memorial service',
      },
      {
        kanji: '回向偈',
        reading: 'えこうげ',
        meanings:
          'closing recital that transfers the merit of the service to a buddha',
      },
    ],
  },
  {
    kanjiName: '当',
    strokes: 6,
    grade: 2,
    freq: 91,
    meanings: ['Hit', 'Right', 'Appropriate', 'Himself'],
    on: ['とう'],
    kun: ['あ.たる', 'あ.たり', 'あ.てる', 'あ.て', 'まさ.に', 'まさ.にべし'],
    jlpt: 3,
    quizAnswers: ['Extend', 'Hit', 'Char', 'Death Anniversary'],
    similars: [
      {
        kanji: '光',
        meaning: 'ray',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '究',
        meaning: 'research',
      },
      {
        kanji: '肖',
        meaning: 'resemblance',
      },
      {
        kanji: '浸',
        meaning: 'immersed',
      },
      {
        kanji: '寝',
        meaning: 'lie down',
      },
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '効',
        meaning: 'merit',
      },
      {
        kanji: '空',
        meaning: 'empty',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
    ],
    usedIn: [
      {
        kanji: '当たる',
        reading: 'あたる',
        meanings: 'to be hit',
      },
      {
        kanji: '当たるも八卦当たらぬも八卦',
        reading: 'あたるもはっけあたらぬもはっけ',
        meanings: 'a prediction may or may not come true',
      },
      {
        kanji: '当たり',
        reading: 'あたり',
        meanings: 'hit',
      },
      {
        kanji: '当たり前',
        reading: 'あたりまえ',
        meanings: 'natural',
      },
      {
        kanji: '坪当たり',
        reading: 'つぼあたり',
        meanings: 'per tsubo (approx. 3.3 square meters)',
      },
      {
        kanji: '当てる',
        reading: 'あてる',
        meanings: 'to hit',
      },
      {
        kanji: '当て',
        reading: 'あて',
        meanings: 'aim',
      },
      {
        kanji: '当てる',
        reading: 'あてる',
        meanings: 'to hit',
      },
      {
        kanji: '引き当て',
        reading: 'ひきあて',
        meanings: 'mortgage',
      },
      {
        kanji: '額当て',
        reading: 'ひたいあて',
        meanings: '(military) headband with reinforced metal plate',
      },
      {
        kanji: '当に',
        reading: 'まさに',
        meanings: 'really (ought to)',
      },
      {
        kanji: '当',
        reading: 'とう',
        meanings: 'this',
      },
      {
        kanji: '当確',
        reading: 'とうかく',
        meanings: 'projected to win',
      },
      {
        kanji: '順当',
        reading: 'じゅんとう',
        meanings: 'proper',
      },
      {
        kanji: '過当',
        reading: 'かとう',
        meanings: 'excessive',
      },
    ],
  },
  {
    kanjiName: '米',
    strokes: 6,
    grade: 2,
    freq: 61,
    meanings: ['Rice', 'Usa', 'Metre'],
    on: ['べい', 'まい', 'めえとる'],
    kun: ['こめ', 'よね'],
    jlpt: 3,
    quizAnswers: ['Rice', 'Lamp', 'Border', 'Origin'],
    similars: [
      {
        kanji: '来',
        meaning: 'come',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '柔',
        meaning: 'tender',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '休',
        meaning: 'rest',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '火',
        meaning: 'fire',
      },
    ],
    usedIn: [
      {
        kanji: '米',
        reading: 'こめ',
        meanings: '(husked grains of) rice',
      },
      {
        kanji: '米倉',
        reading: 'こめぐら',
        meanings: 'rice granary',
      },
      {
        kanji: 'お米',
        reading: 'おこめ',
        meanings: '(husked grains of) rice',
      },
      {
        kanji: 'アルボリオ米',
        reading: 'あるぼりおこめ',
        meanings: 'arborio rice (Italian variety)',
      },
      {
        kanji: '米',
        reading: 'よね',
        meanings: '88 years old',
      },
      {
        kanji: '米沢牛',
        reading: 'よねざわぎゅう',
        meanings: 'Yonezawa beef',
      },
      {
        kanji: '白米',
        reading: 'はくまい',
        meanings: 'polished rice',
      },
      {
        kanji: '米',
        reading: 'べい',
        meanings: '(United States of) America',
      },
      {
        kanji: '米価',
        reading: 'べいか',
        meanings: 'rice price',
      },
      {
        kanji: '在米',
        reading: 'ざいべい',
        meanings: 'being in the United States',
      },
      {
        kanji: '対米',
        reading: 'たいべい',
        meanings: 'relating to the USA',
      },
      {
        kanji: '精米',
        reading: 'せいまい',
        meanings: 'rice polishing',
      },
      {
        kanji: '白米',
        reading: 'はくまい',
        meanings: 'polished rice',
      },
    ],
  },
  {
    kanjiName: '声',
    strokes: 7,
    grade: 2,
    freq: 388,
    meanings: ['Voice'],
    on: ['せい', 'しょう'],
    kun: ['こえ', 'こわ-'],
    jlpt: 3,
    quizAnswers: ['Attempt', 'Chest', 'Conceal', 'Voice'],
    similars: [
      {
        kanji: '把',
        meaning: 'grasp',
      },
      {
        kanji: '走',
        meaning: 'run',
      },
      {
        kanji: '黄',
        meaning: 'yellow',
      },
      {
        kanji: '青',
        meaning: 'blue',
      },
      {
        kanji: '表',
        meaning: 'surface',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '芽',
        meaning: 'bud',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '堪',
        meaning: 'withstand',
      },
      {
        kanji: '妻',
        meaning: 'wife',
      },
    ],
    usedIn: [
      {
        kanji: '声',
        reading: 'こえ',
        meanings: 'voice',
      },
      {
        kanji: '声かけ',
        reading: 'こえかけ',
        meanings: 'saying something (to someone)',
      },
      {
        kanji: '一声',
        reading: 'いっせい',
        meanings: 'voice',
      },
      {
        kanji: '険しい声',
        reading: 'けわしいこえ',
        meanings: 'sharp voice',
      },
      {
        kanji: '声楽',
        reading: 'せいがく',
        meanings: 'vocal music',
      },
      {
        kanji: '声援',
        reading: 'せいえん',
        meanings: '(shout of) encouragement',
      },
      {
        kanji: '肉声',
        reading: 'にくせい',
        meanings: 'natural voice (without a microphone)',
      },
      {
        kanji: '和声',
        reading: 'わせい',
        meanings: 'harmony',
      },
      {
        kanji: '声',
        reading: 'しょう',
        meanings: 'voice',
      },
      {
        kanji: '声点',
        reading: 'しょうてん',
        meanings: 'tone mark',
      },
      {
        kanji: '高声',
        reading: 'こうせい',
        meanings: 'loud voice',
      },
      {
        kanji: '上声',
        reading: 'じょうしょう',
        meanings: 'rising tone (in Chinese)',
      },
    ],
  },
  {
    kanjiName: '形',
    strokes: 7,
    grade: 2,
    freq: 418,
    meanings: ['Shape', 'Form', 'Style'],
    on: ['けい', 'ぎょう'],
    kun: ['かた', '-がた', 'かたち', 'なり'],
    jlpt: 3,
    quizAnswers: ['Loss', 'Shape', 'Pelt', 'Plan'],
    similars: [
      {
        kanji: '刑',
        meaning: 'punish',
      },
      {
        kanji: '戒',
        meaning: 'commandment',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '杉',
        meaning: 'cedar',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '珍',
        meaning: 'rare',
      },
      {
        kanji: '栽',
        meaning: 'plantation',
      },
      {
        kanji: '耕',
        meaning: 'till',
      },
      {
        kanji: '参',
        meaning: 'nonplussed',
      },
      {
        kanji: '款',
        meaning: 'goodwill',
      },
    ],
    usedIn: [
      {
        kanji: '形',
        reading: 'かた',
        meanings: 'shape',
      },
      {
        kanji: '形',
        reading: 'かたち',
        meanings: 'form',
      },
      {
        kanji: '借金のカタ',
        reading: 'しゃっきんのかた',
        meanings: 'security for a loan',
      },
      {
        kanji: '館',
        reading: 'やかた',
        meanings: 'mansion',
      },
      {
        kanji: '形',
        reading: 'かたち',
        meanings: 'form',
      },
      {
        kanji: '形作る',
        reading: 'かたちづくる',
        meanings: 'to form',
      },
      {
        kanji: '顔かたち',
        reading: 'かおかたち',
        meanings: 'features',
      },
      {
        kanji: '姿形',
        reading: 'すがたかたち',
        meanings: 'appearance',
      },
      {
        kanji: '形',
        reading: 'なり',
        meanings: 'style',
      },
      {
        kanji: '形体',
        reading: 'なりかたち',
        meanings: "one's appearance",
      },
      {
        kanji: '生成り',
        reading: 'きなり',
        meanings: 'unbleached cloth',
      },
      {
        kanji: '鉤状',
        reading: 'かぎなり',
        meanings: 'hooklike',
      },
      {
        kanji: '形',
        reading: 'けい',
        meanings: 'form',
      },
      {
        kanji: '形式',
        reading: 'けいしき',
        meanings: 'form (as opposed to substance)',
      },
      {
        kanji: '造形',
        reading: 'ぞうけい',
        meanings: 'molding',
      },
      {
        kanji: '体型',
        reading: 'たいけい',
        meanings: 'figure',
      },
      {
        kanji: '形相',
        reading: 'ぎょうそう',
        meanings: 'look (esp. an angry or upset look)',
      },
      {
        kanji: '奇形',
        reading: 'きけい',
        meanings: 'deformity',
      },
      {
        kanji: '大仰',
        reading: 'おおぎょう',
        meanings: 'exaggerated',
      },
    ],
  },
  {
    kanjiName: '草',
    strokes: 9,
    grade: 1,
    freq: 967,
    meanings: ['Grass', 'Weeds', 'Herbs', 'Pasture', 'Write', 'Draft'],
    on: ['そう'],
    kun: ['くさ', 'くさ-', '-ぐさ'],
    jlpt: 3,
    quizAnswers: ['Blind', 'Question', 'Grass', 'Cruelty'],
    similars: [
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '卓',
        meaning: 'eminent',
      },
      {
        kanji: '車',
        meaning: 'car',
      },
      {
        kanji: '庫',
        meaning: 'warehouse',
      },
      {
        kanji: '埋',
        meaning: 'bury',
      },
      {
        kanji: '幕',
        meaning: 'curtain',
      },
      {
        kanji: '単',
        meaning: 'simple',
      },
      {
        kanji: '苗',
        meaning: 'seedling',
      },
      {
        kanji: '直',
        meaning: 'straightaway',
      },
      {
        kanji: '押',
        meaning: 'push',
      },
    ],
    usedIn: [
      {
        kanji: '草',
        reading: 'くさ',
        meanings: 'grass',
      },
      {
        kanji: '草刈り',
        reading: 'くさかり',
        meanings: 'mowing',
      },
      {
        kanji: '水草',
        reading: 'みずくさ',
        meanings: 'water plant',
      },
      {
        kanji: '若草',
        reading: 'わかくさ',
        meanings: 'green grass',
      },
      {
        kanji: '草',
        reading: 'そう',
        meanings: 'draft',
      },
      {
        kanji: '草案',
        reading: 'そうあん',
        meanings: 'draft (for a speech',
      },
      {
        kanji: '除草',
        reading: 'じょそう',
        meanings: 'weeding',
      },
      {
        kanji: '起草',
        reading: 'きそう',
        meanings: 'drafting (e.g. a bill)',
      },
    ],
  },
  {
    kanjiName: '化',
    strokes: 4,
    grade: 3,
    freq: 89,
    meanings: [
      'Change',
      'Take The Form Of',
      'Influence',
      'Enchant',
      'Delude',
      '-ization',
    ],
    on: ['か', 'け'],
    kun: ['ば.ける', 'ば.かす', 'ふ.ける', 'け.する'],
    jlpt: 3,
    quizAnswers: ['Smash', 'Sway', 'Change', 'Varnish'],
    similars: [
      {
        kanji: '札',
        meaning: 'tag',
      },
      {
        kanji: '他',
        meaning: 'other',
      },
      {
        kanji: '花',
        meaning: 'flower',
      },
      {
        kanji: '毛',
        meaning: 'fur',
      },
      {
        kanji: '米',
        meaning: 'rice',
      },
      {
        kanji: '川',
        meaning: 'stream',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '匁',
        meaning: 'monme',
      },
      {
        kanji: '光',
        meaning: 'ray',
      },
      {
        kanji: '竹',
        meaning: 'bamboo',
      },
    ],
    usedIn: [
      {
        kanji: '化ける',
        reading: 'ばける',
        meanings: 'to take the form of (esp. in ref. to a spirit',
      },
      {
        kanji: '化かす',
        reading: 'ばかす',
        meanings: 'to bewitch',
      },
      {
        kanji: '老ける',
        reading: 'ふける',
        meanings: 'to age',
      },
      {
        kanji: '化',
        reading: 'か',
        meanings: 'change to ...',
      },
      {
        kanji: '化学',
        reading: 'かがく',
        meanings: 'chemistry',
      },
      {
        kanji: '機械化',
        reading: 'きかいか',
        meanings: 'mechanization',
      },
      {
        kanji: '民営化',
        reading: 'みんえいか',
        meanings: 'privatization',
      },
      {
        kanji: '化粧',
        reading: 'けしょう',
        meanings: 'make-up',
      },
      {
        kanji: '化粧水',
        reading: 'けしょうすい',
        meanings: 'skin lotion',
      },
      {
        kanji: '応化',
        reading: 'おうげ',
        meanings: 'assumption of a suitable form (by a buddha or bodhisattva)',
      },
      {
        kanji: '教化',
        reading: 'きょうけ',
        meanings: 'guidance',
      },
    ],
  },
  {
    kanjiName: '両',
    strokes: 6,
    grade: 3,
    freq: 247,
    meanings: [
      'Both',
      'Old Japanese Coin',
      'Counter For Carriages (e.g., In A Train)',
      'Two',
    ],
    on: ['りょう'],
    kun: ['てる', 'ふたつ'],
    jlpt: 3,
    quizAnswers: ['Tendon', 'Interim', 'Attending', 'Both'],
    similars: [
      {
        kanji: '再',
        meaning: 'again',
      },
      {
        kanji: '仙',
        meaning: 'hermit',
      },
      {
        kanji: '画',
        meaning: 'brush-stroke',
      },
      {
        kanji: '山',
        meaning: 'mountain',
      },
      {
        kanji: '岳',
        meaning: 'point',
      },
      {
        kanji: '凸',
        meaning: 'convex',
      },
      {
        kanji: '缶',
        meaning: 'tin can',
      },
      {
        kanji: '布',
        meaning: 'linen',
      },
      {
        kanji: '円',
        meaning: 'circle',
      },
      {
        kanji: '拙',
        meaning: 'bungling',
      },
    ],
    usedIn: [
      {
        kanji: '両',
        reading: 'りょう',
        meanings: 'both (hands',
      },
      {
        kanji: '両足',
        reading: 'りょうそく',
        meanings: 'both feet',
      },
      {
        kanji: '一両',
        reading: 'いちりょう',
        meanings: 'one vehicle',
      },
      {
        kanji: '十両',
        reading: 'じゅうりょう',
        meanings: 'second highest division',
      },
    ],
  },
  {
    kanjiName: '全',
    strokes: 6,
    grade: 3,
    freq: 75,
    meanings: ['Whole', 'Entire', 'All', 'Complete', 'Fulfill'],
    on: ['ぜん'],
    kun: ['まった.く', 'すべ.て'],
    jlpt: 3,
    quizAnswers: ['Whole', 'Stretch', 'See', 'Coil Around'],
    similars: [
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '狂',
        meaning: 'lunatic',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
      {
        kanji: '年',
        meaning: 'year',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '往',
        meaning: 'journey',
      },
      {
        kanji: '姓',
        meaning: 'surname',
      },
      {
        kanji: '舎',
        meaning: 'cottage',
      },
    ],
    usedIn: [
      {
        kanji: '全く',
        reading: 'まったく',
        meanings: 'really',
      },
      {
        kanji: '全くする',
        reading: 'まったくする',
        meanings: 'to accomplish',
      },
      {
        kanji: '全て',
        reading: 'すべて',
        meanings: 'everything',
      },
      {
        kanji: 'すべて選択',
        reading: 'すべてせんたく',
        meanings: 'select all',
      },
      {
        kanji: '全',
        reading: 'ぜん',
        meanings: 'all',
      },
      {
        kanji: '全域',
        reading: 'ぜんいき',
        meanings: 'the whole area',
      },
      {
        kanji: '腎不全',
        reading: 'じんふぜん',
        meanings: 'kidney failure',
      },
      {
        kanji: '大全',
        reading: 'たいぜん',
        meanings: 'complete collection',
      },
    ],
  },
  {
    kanjiName: '向',
    strokes: 6,
    grade: 3,
    freq: 182,
    meanings: [
      'Yonder',
      'Facing',
      'Beyond',
      'Confront',
      'Defy',
      'Tend Toward',
      'Approach',
    ],
    on: ['こう'],
    kun: [
      'む.く',
      'む.い',
      '-む.き',
      'む.ける',
      '-む.け',
      'む.かう',
      'む.かい',
      'む.こう',
      'む.こう-',
      'むこ',
      'むか.い',
    ],
    jlpt: 3,
    quizAnswers: ['Intention', 'Code', 'Yonder', 'Cultural Progress'],
    similars: [
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '否',
        meaning: 'negate',
      },
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '何',
        meaning: 'what',
      },
      {
        kanji: '各',
        meaning: 'each',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '仲',
        meaning: 'go-between',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '同',
        meaning: 'same',
      },
    ],
    usedIn: [
      {
        kanji: '向く',
        reading: 'むく',
        meanings: 'to turn toward',
      },
      {
        kanji: '向いている',
        reading: 'むいている',
        meanings: 'to be cut out for (e.g. a job)',
      },
      {
        kanji: '向ける',
        reading: 'むける',
        meanings: 'to turn (towards)',
      },
      {
        kanji: '向かう',
        reading: 'むかう',
        meanings: 'to face',
      },
      {
        kanji: '向かうところ敵無し',
        reading: 'むかうところてきなし',
        meanings: 'unbeatable',
      },
      {
        kanji: '向い',
        reading: 'むかい',
        meanings: 'facing',
      },
      {
        kanji: '向かい合う',
        reading: 'むかいあう',
        meanings: 'to be opposite',
      },
      {
        kanji: '向こう',
        reading: 'むこう',
        meanings: 'opposite side',
      },
      {
        kanji: '向こう側',
        reading: 'むこうがわ',
        meanings: 'other side',
      },
      {
        kanji: '向こう',
        reading: 'むこう',
        meanings: 'opposite side',
      },
      {
        kanji: '向こう側',
        reading: 'むこうがわ',
        meanings: 'other side',
      },
      {
        kanji: '向い',
        reading: 'むかい',
        meanings: 'facing',
      },
      {
        kanji: '向かい合う',
        reading: 'むかいあう',
        meanings: 'to be opposite',
      },
      {
        kanji: '向上',
        reading: 'こうじょう',
        meanings: 'elevation',
      },
      {
        kanji: '向後',
        reading: 'こうご',
        meanings: 'hereafter',
      },
      {
        kanji: '趣向',
        reading: 'しゅこう',
        meanings: 'plan',
      },
      {
        kanji: '性向',
        reading: 'せいこう',
        meanings: 'inclination',
      },
    ],
  },
  {
    kanjiName: '曲',
    strokes: 6,
    grade: 3,
    freq: 810,
    meanings: [
      'Bend',
      'Music',
      'Melody',
      'Composition',
      'Pleasure',
      'Injustice',
      'Fault',
      'Curve',
      'Crooked',
      'Perverse',
      'Lean',
    ],
    on: ['きょく'],
    kun: ['ま.がる', 'ま.げる', 'くま'],
    jlpt: 3,
    quizAnswers: ['Achievements', 'Measuring Rod', 'Matter', 'Bend'],
    similars: [
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '田',
        meaning: 'rice field',
      },
      {
        kanji: '面',
        meaning: 'mask',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '男',
        meaning: 'male',
      },
      {
        kanji: '町',
        meaning: 'town',
      },
      {
        kanji: '胃',
        meaning: 'stomach',
      },
      {
        kanji: '曹',
        meaning: 'office',
      },
      {
        kanji: '画',
        meaning: 'brush-stroke',
      },
    ],
    usedIn: [
      {
        kanji: '曲がる',
        reading: 'まがる',
        meanings: 'to bend',
      },
      {
        kanji: '曲げる',
        reading: 'まげる',
        meanings: 'to bend',
      },
      {
        kanji: '隈',
        reading: 'くま',
        meanings: 'corner',
      },
      {
        kanji: '曲',
        reading: 'きょく',
        meanings: 'composition',
      },
      {
        kanji: '曲折',
        reading: 'きょくせつ',
        meanings: 'bending',
      },
      {
        kanji: '歌謡曲',
        reading: 'かようきょく',
        meanings: 'kayōkyoku',
      },
      {
        kanji: '名曲',
        reading: 'めいきょく',
        meanings: 'famous piece of music',
      },
    ],
  },
  {
    kanjiName: '次',
    strokes: 6,
    grade: 3,
    freq: 222,
    meanings: ['Next', 'Order', 'Sequence'],
    on: ['じ', 'し'],
    kun: ['つ.ぐ', 'つぎ'],
    jlpt: 3,
    quizAnswers: ['Cruelty', 'Yin', 'Next', 'Twist'],
    similars: [
      {
        kanji: '欠',
        meaning: 'lack',
      },
      {
        kanji: '姿',
        meaning: 'figure',
      },
      {
        kanji: '火',
        meaning: 'fire',
      },
      {
        kanji: '炊',
        meaning: 'cook',
      },
      {
        kanji: '吹',
        meaning: 'blow',
      },
      {
        kanji: '没',
        meaning: 'drown',
      },
      {
        kanji: '沢',
        meaning: 'swamp',
      },
      {
        kanji: '決',
        meaning: 'decide',
      },
      {
        kanji: '染',
        meaning: 'dye',
      },
      {
        kanji: '派',
        meaning: 'faction',
      },
    ],
    usedIn: [
      {
        kanji: '次ぐ',
        reading: 'つぐ',
        meanings: 'to follow',
      },
      {
        kanji: '次ぐ身',
        reading: 'つぐみ',
        meanings: 'next in line',
      },
      {
        kanji: '次',
        reading: 'つぎ',
        meanings: 'next',
      },
      {
        kanji: '次々',
        reading: 'つぎつぎ',
        meanings: 'in succession',
      },
      {
        kanji: '五十三次',
        reading: 'ごじゅうさんつぎ',
        meanings:
          'fifty-three stations on the Tōkaidō (Edo-Kyoto highway in Edo-period Japan)',
      },
      {
        kanji: '中継ぎ',
        reading: 'なかつぎ',
        meanings: 'joining',
      },
      {
        kanji: '次',
        reading: 'じ',
        meanings: 'next',
      },
      {
        kanji: '次回',
        reading: 'じかい',
        meanings: 'next time (occasion)',
      },
      {
        kanji: '三次',
        reading: 'さんじ',
        meanings: 'third',
      },
      {
        kanji: '数次',
        reading: 'すうじ',
        meanings: 'several times',
      },
      {
        kanji: '次第に',
        reading: 'しだいに',
        meanings: 'gradually (progress into a state)',
      },
      {
        kanji: '次第',
        reading: 'しだい',
        meanings: 'depending on',
      },
      {
        kanji: '路次',
        reading: 'ろじ',
        meanings: 'way',
      },
    ],
  },
  {
    kanjiName: '直',
    strokes: 8,
    grade: 2,
    freq: 246,
    meanings: ['Straightaway', 'Honesty', 'Frankness', 'Fix', 'Repair'],
    on: ['ちょく', 'じき', 'じか'],
    kun: ['ただ.ちに', 'なお.す', '-なお.す', 'なお.る', 'なお.き', 'す.ぐ'],
    jlpt: 3,
    quizAnswers: ['Prepare', 'Enroll', 'Straightaway', 'Receive'],
    similars: [
      {
        kanji: '値',
        meaning: 'price',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '真',
        meaning: 'true',
      },
      {
        kanji: '草',
        meaning: 'grass',
      },
      {
        kanji: '殖',
        meaning: 'augment',
      },
      {
        kanji: '植',
        meaning: 'plant',
      },
      {
        kanji: '盾',
        meaning: 'shield',
      },
      {
        kanji: '責',
        meaning: 'blame',
      },
      {
        kanji: '現',
        meaning: 'present',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
    ],
    usedIn: [
      {
        kanji: '直ちに',
        reading: 'ただちに',
        meanings: 'at once',
      },
      {
        kanji: '直す',
        reading: 'なおす',
        meanings: 'to repair',
      },
      {
        kanji: '直る',
        reading: 'なおる',
        meanings: 'to get mended',
      },
      {
        kanji: '直き',
        reading: 'なおき',
        meanings: 'straight',
      },
      {
        kanji: '直木三十五賞',
        reading: 'なおきさんじゅうごしょう',
        meanings: 'Naoki Prize (literary award)',
      },
      {
        kanji: '直ぐ',
        reading: 'すぐ',
        meanings: 'immediately',
      },
      {
        kanji: '直ぐさま',
        reading: 'すぐさま',
        meanings: 'immediately',
      },
      {
        kanji: '真直ぐ',
        reading: 'ますぐ',
        meanings: 'straight (ahead)',
      },
      {
        kanji: '直',
        reading: 'ちょく',
        meanings: 'direct',
      },
      {
        kanji: '直営',
        reading: 'ちょくえい',
        meanings: 'direct management',
      },
      {
        kanji: '司直',
        reading: 'しちょく',
        meanings: 'judge',
      },
      {
        kanji: '愚直',
        reading: 'ぐちょく',
        meanings: 'simple honesty',
      },
      {
        kanji: '直',
        reading: 'じき',
        meanings: 'soon',
      },
      {
        kanji: '直に',
        reading: 'じきに',
        meanings: 'immediately',
      },
      {
        kanji: '高直',
        reading: 'こうじき',
        meanings: 'expensive',
      },
      {
        kanji: 'バカ正直',
        reading: 'ばかしょうじき',
        meanings: 'honest to a fault',
      },
      {
        kanji: '直',
        reading: 'じか',
        meanings: 'direct',
      },
      {
        kanji: '直に',
        reading: 'じかに',
        meanings: 'directly',
      },
    ],
  },
  {
    kanjiName: '活',
    strokes: 9,
    grade: 2,
    freq: 171,
    meanings: ['Lively', 'Resuscitation', 'Being Helped', 'Living'],
    on: ['かつ'],
    kun: ['い.きる', 'い.かす', 'い.ける'],
    jlpt: 3,
    quizAnswers: ['Submit To', 'Shake', 'Spinning', 'Lively'],
    similars: [
      {
        kanji: '括',
        meaning: 'fasten',
      },
      {
        kanji: '沿',
        meaning: 'run alongside',
      },
      {
        kanji: '浴',
        meaning: 'bathe',
      },
      {
        kanji: '洞',
        meaning: 'den',
      },
      {
        kanji: '河',
        meaning: 'river',
      },
      {
        kanji: '居',
        meaning: 'reside',
      },
      {
        kanji: '洗',
        meaning: 'wash',
      },
      {
        kanji: '治',
        meaning: 'reign',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '減',
        meaning: 'dwindle',
      },
    ],
    usedIn: [
      {
        kanji: '生きる',
        reading: 'いきる',
        meanings: 'to live',
      },
      {
        kanji: '生かす',
        reading: 'いかす',
        meanings: 'to make (the best) use of',
      },
      {
        kanji: '生ける',
        reading: 'いける',
        meanings: 'to arrange (flowers)',
      },
      {
        kanji: '活',
        reading: 'かつ',
        meanings: 'living',
      },
      {
        kanji: '活字',
        reading: 'かつじ',
        meanings: 'printing type',
      },
      {
        kanji: '死活',
        reading: 'しかつ',
        meanings: 'life and death',
      },
      {
        kanji: '就活',
        reading: 'しゅうかつ',
        meanings: 'job hunting',
      },
    ],
  },
  {
    kanjiName: '点',
    strokes: 9,
    grade: 2,
    freq: 165,
    meanings: ['Spot', 'Point', 'Mark', 'Speck', 'Decimal Point'],
    on: ['てん'],
    kun: ['つ.ける', 'つ.く', 'た.てる', 'さ.す', 'とぼ.す', 'とも.す', 'ぼち'],
    jlpt: 3,
    quizAnswers: ['Favor', 'Conceal', 'Spot', 'Lament'],
    similars: [
      {
        kanji: '庶',
        meaning: 'commoner',
      },
      {
        kanji: '怠',
        meaning: 'neglect',
      },
      {
        kanji: '亭',
        meaning: 'pavilion',
      },
      {
        kanji: '京',
        meaning: 'capital',
      },
      {
        kanji: '為',
        meaning: 'do',
      },
      {
        kanji: '雨',
        meaning: 'rain',
      },
      {
        kanji: '照',
        meaning: 'illuminate',
      },
      {
        kanji: '熟',
        meaning: 'mellow',
      },
      {
        kanji: '遮',
        meaning: 'intercept',
      },
      {
        kanji: '煮',
        meaning: 'boil',
      },
    ],
    usedIn: [
      {
        kanji: '点ける',
        reading: 'つける',
        meanings: 'to turn on',
      },
      {
        kanji: '点く',
        reading: 'つく',
        meanings: 'to be lit (of a lamp',
      },
      {
        kanji: '点てる',
        reading: 'たてる',
        meanings: 'to make tea (matcha)',
      },
      {
        kanji: '注す',
        reading: 'さす',
        meanings: 'to pour',
      },
      {
        kanji: '灯す',
        reading: 'ともす',
        meanings: 'to light (a candle',
      },
      {
        kanji: '灯す',
        reading: 'ともす',
        meanings: 'to light (a candle',
      },
      {
        kanji: '点',
        reading: 'てん',
        meanings: 'dot',
      },
      {
        kanji: '点検',
        reading: 'てんけん',
        meanings: 'detailed inspection',
      },
      {
        kanji: '最重点',
        reading: 'さいじゅうてん',
        meanings: 'very important point',
      },
      {
        kanji: '同点',
        reading: 'どうてん',
        meanings: 'same score',
      },
    ],
  },
  {
    kanjiName: '科',
    strokes: 9,
    grade: 2,
    freq: 531,
    meanings: ['Department', 'Course', 'Section'],
    on: ['か'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Miss', 'Department', 'Seize', 'Prance'],
    similars: [
      {
        kanji: '料',
        meaning: 'fee',
      },
      {
        kanji: '斜',
        meaning: 'diagonal',
      },
      {
        kanji: '粋',
        meaning: 'chic',
      },
      {
        kanji: '私',
        meaning: 'private',
      },
      {
        kanji: '件',
        meaning: 'affair',
      },
      {
        kanji: '析',
        meaning: 'chop',
      },
      {
        kanji: '枠',
        meaning: 'frame',
      },
      {
        kanji: '述',
        meaning: 'mention',
      },
      {
        kanji: '季',
        meaning: 'seasons',
      },
      {
        kanji: '委',
        meaning: 'committee',
      },
    ],
    usedIn: [
      {
        kanji: '科',
        reading: 'か',
        meanings: 'department',
      },
      {
        kanji: '科学',
        reading: 'かがく',
        meanings: 'science',
      },
      {
        kanji: '工科',
        reading: 'こうか',
        meanings: 'engineering course',
      },
      {
        kanji: '医科',
        reading: 'いか',
        meanings: 'medical science',
      },
    ],
  },
  {
    kanjiName: '首',
    strokes: 9,
    grade: 2,
    freq: 98,
    meanings: ['Neck', 'Counter For Songs And Poems'],
    on: ['しゅ'],
    kun: ['くび'],
    jlpt: 3,
    quizAnswers: ['Put Up (a Notice)', 'Den', 'Outline', 'Neck'],
    similars: [
      {
        kanji: '盾',
        meaning: 'shield',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
      {
        kanji: '省',
        meaning: 'government ministry',
      },
      {
        kanji: '道',
        meaning: 'road-way',
      },
      {
        kanji: '着',
        meaning: 'don',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '畑',
        meaning: 'farm',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '盲',
        meaning: 'blind',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
    ],
    usedIn: [
      {
        kanji: '首',
        reading: 'くび',
        meanings: 'neck',
      },
      {
        kanji: '首飾り',
        reading: 'くびかざり',
        meanings: 'necklace',
      },
      {
        kanji: '縛り首',
        reading: 'しばりくび',
        meanings: '(death by) hanging',
      },
      {
        kanji: '猪首',
        reading: 'いくび',
        meanings: 'bull neck',
      },
      {
        kanji: '首',
        reading: 'しゅ',
        meanings: 'counter for songs and poems',
      },
      {
        kanji: '首級',
        reading: 'しゅきゅう',
        meanings: 'decapitated head of an enemy',
      },
      {
        kanji: '元首',
        reading: 'げんしゅ',
        meanings: 'sovereign',
      },
      {
        kanji: '百人一首',
        reading: 'ひゃくにんいっしゅ',
        meanings: '(Ogura) Hyakunin Isshu',
      },
    ],
  },
  {
    kanjiName: '欠',
    strokes: 4,
    grade: 4,
    freq: 860,
    meanings: ['Lack', 'Gap', 'Fail', 'Yawning Radical (no. 76)'],
    on: ['けつ', 'けん'],
    kun: ['か.ける', 'か.く'],
    jlpt: 3,
    quizAnswers: ['Lack', 'Beast', 'Rinse Mouth', 'Badge'],
    similars: [
      {
        kanji: '匁',
        meaning: 'monme',
      },
      {
        kanji: '父',
        meaning: 'father',
      },
      {
        kanji: '次',
        meaning: 'next',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '吹',
        meaning: 'blow',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
      {
        kanji: '火',
        meaning: 'fire',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
    ],
    usedIn: [
      {
        kanji: '欠ける',
        reading: 'かける',
        meanings: 'to chip',
      },
      {
        kanji: '欠く',
        reading: 'かく',
        meanings: 'to chip',
      },
      {
        kanji: '欠くことができない',
        reading: 'かくことができない',
        meanings: 'indispensable',
      },
      {
        kanji: '欠',
        reading: 'けつ',
        meanings: 'lack',
      },
      {
        kanji: '欠員',
        reading: 'けついん',
        meanings: 'vacancy',
      },
      {
        kanji: '補欠',
        reading: 'ほけつ',
        meanings: 'filling a vacancy',
      },
      {
        kanji: '出欠',
        reading: 'しゅっけつ',
        meanings: 'attendance or absence',
      },
      {
        kanji: '欠缺',
        reading: 'けんけつ',
        meanings: 'lacuna',
      },
      {
        kanji: '欠缺利札',
        reading: 'けんけつりさつ',
        meanings: 'invalid coupon',
      },
      {
        kanji: '阿毘羅吽欠',
        reading: 'あびらうんけん',
        meanings: 'a-bi-ra-un-ken (mantra directed to Vairocana)',
      },
    ],
  },
  {
    kanjiName: '由',
    strokes: 5,
    grade: 3,
    freq: 325,
    meanings: ['Wherefore', 'A Reason'],
    on: ['ゆ', 'ゆう', 'ゆい'],
    kun: ['よし', 'よ.る'],
    jlpt: 3,
    quizAnswers: ['Wherefore', 'Female', 'Cottage', 'Freight'],
    similars: [
      {
        kanji: '田',
        meaning: 'rice field',
      },
      {
        kanji: '曲',
        meaning: 'bend',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '日',
        meaning: 'day',
      },
      {
        kanji: '男',
        meaning: 'male',
      },
      {
        kanji: '町',
        meaning: 'town',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '画',
        meaning: 'brush-stroke',
      },
      {
        kanji: '油',
        meaning: 'oil',
      },
      {
        kanji: '苗',
        meaning: 'seedling',
      },
    ],
    usedIn: [
      {
        kanji: '由',
        reading: 'よし',
        meanings: 'reason',
      },
      {
        kanji: '由ありげ',
        reading: 'よしありげ',
        meanings: 'meaningful',
      },
      {
        kanji: '候由',
        reading: 'そうろうよし',
        meanings: 'I hear that ...',
      },
      {
        kanji: '依る',
        reading: 'よる',
        meanings: 'to be due to',
      },
      {
        kanji: '由来',
        reading: 'ゆらい',
        meanings: 'origin',
      },
      {
        kanji: '由緒',
        reading: 'ゆいしょ',
        meanings: 'history',
      },
      {
        kanji: '来由',
        reading: 'らいゆ',
        meanings: 'origin',
      },
      {
        kanji: '因由',
        reading: 'いんゆ',
        meanings: 'cause',
      },
      {
        kanji: '事由',
        reading: 'じゆう',
        meanings: 'reason',
      },
      {
        kanji: '服装自由',
        reading: 'ふくそうじゆう',
        meanings: 'no dress code',
      },
      {
        kanji: '由緒',
        reading: 'ゆいしょ',
        meanings: 'history',
      },
      {
        kanji: '由緒ある',
        reading: 'ゆいしょある',
        meanings: 'venerable',
      },
    ],
  },
  {
    kanjiName: '民',
    strokes: 5,
    grade: 4,
    freq: 28,
    meanings: ['People', 'Nation', 'Subjects'],
    on: ['みん'],
    kun: ['たみ'],
    jlpt: 3,
    quizAnswers: ['Live', 'England', 'People', 'Touch'],
    similars: [
      {
        kanji: '氏',
        meaning: 'family name',
      },
      {
        kanji: '眠',
        meaning: 'sleep',
      },
      {
        kanji: '低',
        meaning: 'lower',
      },
      {
        kanji: '尾',
        meaning: 'tail',
      },
      {
        kanji: '戻',
        meaning: 're-',
      },
      {
        kanji: '尺',
        meaning: 'shaku',
      },
      {
        kanji: '尼',
        meaning: 'nun',
      },
      {
        kanji: '止',
        meaning: 'stop',
      },
      {
        kanji: '比',
        meaning: 'compare',
      },
      {
        kanji: '弓',
        meaning: 'bow',
      },
    ],
    usedIn: [
      {
        kanji: '民',
        reading: 'たみ',
        meanings: 'people',
      },
      {
        kanji: '民草',
        reading: 'たみくさ',
        meanings: 'people',
      },
      {
        kanji: '国民',
        reading: 'くにたみ',
        meanings: 'people of a country',
      },
      {
        kanji: '流浪の民',
        reading: 'るろうのたみ',
        meanings: 'wandering people',
      },
      {
        kanji: '民',
        reading: 'みん',
        meanings: 'citizen',
      },
      {
        kanji: '民意',
        reading: 'みんい',
        meanings: 'popular will',
      },
      {
        kanji: '自民',
        reading: 'じみん',
        meanings: 'Liberal Democratic Party',
      },
      {
        kanji: '公民',
        reading: 'こうみん',
        meanings: 'citizen',
      },
    ],
  },
  {
    kanjiName: '付',
    strokes: 5,
    grade: 4,
    freq: 322,
    meanings: ['Adhere', 'Attach', 'Refer To', 'Append'],
    on: ['ふ'],
    kun: [
      'つ.ける',
      '-つ.ける',
      '-づ.ける',
      'つ.け',
      'つ.け-',
      '-つ.け',
      '-づ.け',
      '-づけ',
      'つ.く',
      '-づ.く',
      'つ.き',
      '-つ.き',
      '-つき',
      '-づ.き',
      '-づき',
    ],
    jlpt: 3,
    quizAnswers: ['Art', 'Clumsy', 'Japanese Foot', 'Adhere'],
    similars: [
      {
        kanji: '代',
        meaning: 'substitute',
      },
      {
        kanji: '伐',
        meaning: 'fell',
      },
      {
        kanji: '伝',
        meaning: 'transmit',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '附',
        meaning: 'affixed',
      },
      {
        kanji: '府',
        meaning: 'borough',
      },
      {
        kanji: '寸',
        meaning: 'measurement',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '斥',
        meaning: 'reject',
      },
    ],
    usedIn: [
      {
        kanji: '付ける',
        reading: 'つける',
        meanings: 'to attach',
      },
      {
        kanji: '付け',
        reading: 'つけ',
        meanings: 'bill',
      },
      {
        kanji: '付け根',
        reading: 'つけね',
        meanings: 'root',
      },
      {
        kanji: '振り付け',
        reading: 'ふりつけ',
        meanings: 'choreography',
      },
      {
        kanji: '締め付け',
        reading: 'しめつけ',
        meanings: 'pressure',
      },
      {
        kanji: '付く',
        reading: 'つく',
        meanings: 'to be attached',
      },
      {
        kanji: '付喪神',
        reading: 'つくもがみ',
        meanings: 'artifact spirit',
      },
      {
        kanji: '付き',
        reading: 'つき',
        meanings: 'furnished with',
      },
      {
        kanji: '付き合い',
        reading: 'つきあい',
        meanings: 'association',
      },
      {
        kanji: '紋付',
        reading: 'もんつき',
        meanings: "clothing (e.g. kimono) decorated with one's family crest",
      },
      {
        kanji: '原付',
        reading: 'げんつき',
        meanings:
          'motorized two-wheeled vehicle (with a displacement of less than 50cc)',
      },
      {
        kanji: '付近',
        reading: 'ふきん',
        meanings: 'neighborhood',
      },
      {
        kanji: '付加',
        reading: 'ふか',
        meanings: 'addition',
      },
      {
        kanji: '貼付',
        reading: 'ちょうふ',
        meanings: 'pasting',
      },
      {
        kanji: '回付',
        reading: 'かいふ',
        meanings: 'transmitting',
      },
    ],
  },
  {
    kanjiName: '失',
    strokes: 5,
    grade: 4,
    freq: 447,
    meanings: ['Lose', 'Error', 'Fault', 'Disadvantage', 'Loss'],
    on: ['しつ'],
    kun: ['うしな.う', 'う.せる'],
    jlpt: 3,
    quizAnswers: ['Ward Off', 'Lose', 'Repulse', 'Forest'],
    similars: [
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '米',
        meaning: 'rice',
      },
      {
        kanji: '気',
        meaning: 'spirit',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '休',
        meaning: 'rest',
      },
      {
        kanji: '仮',
        meaning: 'sham',
      },
    ],
    usedIn: [
      {
        kanji: '失う',
        reading: 'うしなう',
        meanings: 'to lose',
      },
      {
        kanji: '失せる',
        reading: 'うせる',
        meanings: 'to disappear',
      },
      {
        kanji: '失',
        reading: 'しつ',
        meanings: 'loss (of something)',
      },
      {
        kanji: '失業',
        reading: 'しつぎょう',
        meanings: 'unemployment',
      },
      {
        kanji: '得失',
        reading: 'とくしつ',
        meanings: 'advantages and disadvantages',
      },
      {
        kanji: '敵失',
        reading: 'てきしつ',
        meanings: 'error made by the enemy or opposing team',
      },
    ],
  },
  {
    kanjiName: '必',
    strokes: 5,
    grade: 4,
    freq: 265,
    meanings: ['Invariably', 'Certain', 'Inevitable'],
    on: ['ひつ'],
    kun: ['かなら.ず'],
    jlpt: 3,
    quizAnswers: ['Stimulate', 'Weak', 'Invariably', 'Lead'],
    similars: [
      {
        kanji: '泌',
        meaning: 'ooze',
      },
      {
        kanji: '心',
        meaning: 'heart',
      },
      {
        kanji: '秘',
        meaning: 'secret',
      },
      {
        kanji: '州',
        meaning: 'state',
      },
      {
        kanji: '密',
        meaning: 'secrecy',
      },
      {
        kanji: '為',
        meaning: 'do',
      },
      {
        kanji: '卵',
        meaning: 'egg',
      },
      {
        kanji: '冷',
        meaning: 'cool',
      },
      {
        kanji: '応',
        meaning: 'apply',
      },
      {
        kanji: '忍',
        meaning: 'endure',
      },
    ],
    usedIn: [
      {
        kanji: '必ず',
        reading: 'かならず',
        meanings: 'always',
      },
      {
        kanji: '必ずしも',
        reading: 'かならずしも',
        meanings: '(not) always',
      },
      {
        kanji: '必',
        reading: 'ひつ',
        meanings: 'definiteness',
      },
      {
        kanji: '必需',
        reading: 'ひつじゅ',
        meanings: 'necessary',
      },
    ],
  },
  {
    kanjiName: '未',
    strokes: 5,
    grade: 4,
    freq: 650,
    meanings: [
      'Un-',
      'Not Yet',
      'Hitherto',
      'Still',
      'Even Now',
      'Sign Of The Ram',
      '1-3pm',
      'Eighth Sign Of Chinese Zodiac',
    ],
    on: ['み', 'び'],
    kun: ['いま.だ', 'ま.だ', 'ひつじ'],
    jlpt: 3,
    quizAnswers: ['Torrent', 'Strength', 'Un-', 'Strong And Brave'],
    similars: [
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '来',
        meaning: 'come',
      },
      {
        kanji: '米',
        meaning: 'rice',
      },
      {
        kanji: '休',
        meaning: 'rest',
      },
      {
        kanji: '妹',
        meaning: 'younger sister',
      },
    ],
    usedIn: [
      {
        kanji: '未だ',
        reading: 'まだ',
        meanings: 'still',
      },
      {
        kanji: '未だかつて',
        reading: 'いまだかつて',
        meanings: 'never (before)',
      },
      {
        kanji: '未だ',
        reading: 'まだ',
        meanings: 'still',
      },
      {
        kanji: '未だしも',
        reading: 'まだしも',
        meanings: 'rather',
      },
      {
        kanji: '未',
        reading: 'ひつじ',
        meanings: 'the Sheep (eighth sign of the Chinese zodiac)',
      },
      {
        kanji: '未草',
        reading: 'ひつじぐさ',
        meanings: 'pygmy waterlily (Nymphaea tetragona)',
      },
      {
        kanji: '辛未',
        reading: 'かのとひつじ',
        meanings: 'Metal Sheep (8th term of the sexagenary cycle',
      },
      {
        kanji: '乙未',
        reading: 'きのとひつじ',
        meanings: 'Wood Sheep (32nd term of the sexagenary cycle',
      },
      {
        kanji: '未',
        reading: 'み',
        meanings: 'not yet',
      },
      {
        kanji: '未解決',
        reading: 'みかいけつ',
        meanings: 'unsolved',
      },
      {
        kanji: '過現未',
        reading: 'かげんみ',
        meanings: 'past',
      },
      {
        kanji: '未央柳',
        reading: 'びようやなぎ',
        meanings: 'Chinese hypericum (Hypericum monogynum)',
      },
      {
        kanji: '丁未',
        reading: 'ひのとひつじ',
        meanings: 'Fire Sheep (44th term of the sexagenary cycle',
      },
      {
        kanji: '癸未',
        reading: 'みずのとひつじ',
        meanings: 'Water Sheep (20th term of the sexagenary cycle',
      },
    ],
  },
  {
    kanjiName: '末',
    strokes: 5,
    grade: 4,
    freq: 456,
    meanings: ['End', 'Close', 'Tip', 'Powder', 'Posterity'],
    on: ['まつ', 'ばつ'],
    kun: ['すえ'],
    jlpt: 3,
    quizAnswers: ['.01 Yen', 'Figured Cloth', 'Total', 'End'],
    similars: [
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '床',
        meaning: 'bed',
      },
      {
        kanji: '来',
        meaning: 'come',
      },
      {
        kanji: '米',
        meaning: 'rice',
      },
      {
        kanji: '休',
        meaning: 'rest',
      },
      {
        kanji: '抹',
        meaning: 'rub',
      },
    ],
    usedIn: [
      {
        kanji: '末',
        reading: 'すえ',
        meanings: 'end',
      },
      {
        kanji: '末広',
        reading: 'すえひろ',
        meanings: 'spreading out like an open fan',
      },
      {
        kanji: '来月末',
        reading: 'らいげつまつ',
        meanings: 'end of next month',
      },
      {
        kanji: '末の末',
        reading: 'すえのすえ',
        meanings: 'the last',
      },
      {
        kanji: '末',
        reading: 'うら',
        meanings: 'top end',
      },
      {
        kanji: '末枯れ',
        reading: 'うらがれ',
        meanings: 'dying of the little twigs and branches',
      },
      {
        kanji: '末',
        reading: 'うれ',
        meanings: 'new shoots',
      },
      {
        kanji: '末葉',
        reading: 'うらば',
        meanings: 'end leaves',
      },
      {
        kanji: '木の末',
        reading: 'このうれ',
        meanings: 'treetop',
      },
      {
        kanji: '末',
        reading: 'まつ',
        meanings: 'the end (of)',
      },
      {
        kanji: '末日',
        reading: 'まつじつ',
        meanings: 'last day (of a month)',
      },
      {
        kanji: '幕末',
        reading: 'ばくまつ',
        meanings: 'Bakumatsu period',
      },
      {
        kanji: '終末',
        reading: 'しゅうまつ',
        meanings: 'end',
      },
      {
        kanji: '末路',
        reading: 'まつろ',
        meanings: 'last days',
      },
      {
        kanji: '末裔',
        reading: 'まつえい',
        meanings: 'descendant',
      },
    ],
  },
  {
    kanjiName: '記',
    strokes: 10,
    grade: 2,
    freq: 149,
    meanings: ['Scribe', 'Account', 'Narrative'],
    on: ['き'],
    kun: ['しる.す'],
    jlpt: 3,
    quizAnswers: [
      'Early Night',
      'Bright',
      'Domestic Fowl And Animals',
      'Scribe',
    ],
    similars: [
      {
        kanji: '託',
        meaning: 'consign',
      },
      {
        kanji: '計',
        meaning: 'plot',
      },
      {
        kanji: '訂',
        meaning: 'revise',
      },
      {
        kanji: '訪',
        meaning: 'call on',
      },
      {
        kanji: '許',
        meaning: 'permit',
      },
      {
        kanji: '訳',
        meaning: 'translate',
      },
      {
        kanji: '討',
        meaning: 'chastise',
      },
      {
        kanji: '言',
        meaning: 'say',
      },
      {
        kanji: '訓',
        meaning: 'instruction',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
    ],
    usedIn: [
      {
        kanji: '記す',
        reading: 'しるす',
        meanings: 'to write down',
      },
      {
        kanji: '記',
        reading: 'き',
        meanings: 'account',
      },
      {
        kanji: '記憶',
        reading: 'きおく',
        meanings: 'memory',
      },
      {
        kanji: '手記',
        reading: 'しゅき',
        meanings: 'note',
      },
      {
        kanji: '左記',
        reading: 'さき',
        meanings: 'undermentioned (statement)',
      },
    ],
  },
  {
    kanjiName: '組',
    strokes: 11,
    grade: 2,
    freq: 204,
    meanings: [
      'Association',
      'Braid',
      'Plait',
      'Construct',
      'Assemble',
      'Unite',
      'Cooperate',
      'Grapple',
    ],
    on: ['そ'],
    kun: ['く.む', 'くみ', '-ぐみ'],
    jlpt: 3,
    quizAnswers: ['Mainly', 'Grieve', 'Mottled', 'Association'],
    similars: [
      {
        kanji: '紳',
        meaning: 'sire',
      },
      {
        kanji: '経',
        meaning: 'sutra',
      },
      {
        kanji: '紅',
        meaning: 'crimson',
      },
      {
        kanji: '査',
        meaning: 'investigate',
      },
      {
        kanji: '糾',
        meaning: 'twist',
      },
      {
        kanji: '紋',
        meaning: 'family crest',
      },
      {
        kanji: '紡',
        meaning: 'spinning',
      },
      {
        kanji: '粗',
        meaning: 'coarse',
      },
      {
        kanji: '紺',
        meaning: 'dark blue',
      },
      {
        kanji: '細',
        meaning: 'dainty',
      },
    ],
    usedIn: [
      {
        kanji: '組む',
        reading: 'くむ',
        meanings: 'to cross (legs or arms)',
      },
      {
        kanji: '組',
        reading: 'くみ',
        meanings: 'class (of students)',
      },
      {
        kanji: '組合',
        reading: 'くみあい',
        meanings: 'association',
      },
      {
        kanji: '労組',
        reading: 'ろうそ',
        meanings: 'labor union',
      },
      {
        kanji: '死の組',
        reading: 'しのくみ',
        meanings: 'group of death',
      },
      {
        kanji: '組閣',
        reading: 'そかく',
        meanings: 'formation of a cabinet',
      },
      {
        kanji: '組織',
        reading: 'そしき',
        meanings: 'organization',
      },
      {
        kanji: '労組',
        reading: 'ろうそ',
        meanings: 'labor union',
      },
      {
        kanji: '改組',
        reading: 'かいそ',
        meanings: 'reorganization',
      },
    ],
  },
  {
    kanjiName: '船',
    strokes: 11,
    grade: 2,
    freq: 713,
    meanings: ['Ship', 'Boat'],
    on: ['せん'],
    kun: ['ふね', 'ふな-'],
    jlpt: 3,
    quizAnswers: ['Ship', 'Expose', 'India', 'Beach'],
    similars: [
      {
        kanji: '俗',
        meaning: 'vulgar',
      },
      {
        kanji: '般',
        meaning: 'carrier',
      },
      {
        kanji: '谷',
        meaning: 'valley',
      },
      {
        kanji: '舶',
        meaning: 'liner',
      },
      {
        kanji: '鉛',
        meaning: 'lead',
      },
      {
        kanji: '盤',
        meaning: 'tray',
      },
      {
        kanji: '唇',
        meaning: 'lips',
      },
      {
        kanji: '沿',
        meaning: 'run alongside',
      },
      {
        kanji: '航',
        meaning: 'navigate',
      },
      {
        kanji: '和',
        meaning: 'harmony',
      },
    ],
    usedIn: [
      {
        kanji: '船',
        reading: 'ふね',
        meanings: 'ship',
      },
      {
        kanji: '船貝',
        reading: 'ふねがい',
        meanings: 'Arca avellana (species of ark shell)',
      },
      {
        kanji: '大船',
        reading: 'おおぶね',
        meanings: 'large boat',
      },
      {
        kanji: '釣り船',
        reading: 'つりぶね',
        meanings: 'fishing boat',
      },
      {
        kanji: '船',
        reading: 'せん',
        meanings: 'ship',
      },
      {
        kanji: '船員',
        reading: 'せんいん',
        meanings: 'sailor',
      },
      {
        kanji: '造船',
        reading: 'ぞうせん',
        meanings: 'shipbuilding',
      },
      {
        kanji: '大船',
        reading: 'おおぶね',
        meanings: 'large boat',
      },
    ],
  },
  {
    kanjiName: '雪',
    strokes: 11,
    grade: 2,
    freq: 1131,
    meanings: ['Snow'],
    on: ['せつ'],
    kun: ['ゆき'],
    jlpt: 3,
    quizAnswers: ['All', 'Salt Water', 'Snow', 'Slide'],
    similars: [
      {
        kanji: '雰',
        meaning: 'atmosphere',
      },
      {
        kanji: '雲',
        meaning: 'cloud',
      },
      {
        kanji: '雷',
        meaning: 'thunder',
      },
      {
        kanji: '電',
        meaning: 'electricity',
      },
      {
        kanji: '零',
        meaning: 'zero',
      },
      {
        kanji: '霊',
        meaning: 'spirits',
      },
      {
        kanji: '震',
        meaning: 'quake',
      },
      {
        kanji: '需',
        meaning: 'demand',
      },
      {
        kanji: '雨',
        meaning: 'rain',
      },
      {
        kanji: '曇',
        meaning: 'cloudy weather',
      },
    ],
    usedIn: [
      {
        kanji: '雪',
        reading: 'ゆき',
        meanings: 'snow',
      },
      {
        kanji: '雪国',
        reading: 'ゆきぐに',
        meanings: 'snow country',
      },
      {
        kanji: '細雪',
        reading: 'ささめゆき',
        meanings: 'light snow fall',
      },
      {
        kanji: '粉雪',
        reading: 'こなゆき',
        meanings: 'powder snow',
      },
      {
        kanji: '雪辱',
        reading: 'せつじょく',
        meanings: 'vindication of honour',
      },
      {
        kanji: '雪上',
        reading: 'せつじょう',
        meanings: 'on the snow',
      },
      {
        kanji: '積雪',
        reading: 'せきせつ',
        meanings: 'fallen snow',
      },
      {
        kanji: '融雪',
        reading: 'ゆうせつ',
        meanings: 'melted snow',
      },
    ],
  },
  {
    kanjiName: '支',
    strokes: 4,
    grade: 5,
    freq: 159,
    meanings: ['Branch', 'Support', 'Sustain', 'Branch Radical (no. 65)'],
    on: ['し'],
    kun: ['ささ.える', 'つか.える', 'か.う'],
    jlpt: 3,
    quizAnswers: ['Refine', 'Volume', 'Branch', 'Quantity'],
    similars: [
      {
        kanji: '反',
        meaning: 'anti-',
      },
      {
        kanji: '友',
        meaning: 'friend',
      },
      {
        kanji: '皮',
        meaning: 'pelt',
      },
      {
        kanji: '収',
        meaning: 'income',
      },
      {
        kanji: '廷',
        meaning: 'courts',
      },
      {
        kanji: '麦',
        meaning: 'barley',
      },
      {
        kanji: '坂',
        meaning: 'slope',
      },
      {
        kanji: '技',
        meaning: 'skill',
      },
      {
        kanji: '岐',
        meaning: 'branch off',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
    ],
    usedIn: [
      {
        kanji: '支える',
        reading: 'ささえる',
        meanings: 'to support',
      },
      {
        kanji: '閊える',
        reading: 'つかえる',
        meanings: 'to stick',
      },
      {
        kanji: '支う',
        reading: 'かう',
        meanings: 'to support',
      },
      {
        kanji: '支',
        reading: 'し',
        meanings: 'China',
      },
      {
        kanji: '支援',
        reading: 'しえん',
        meanings: 'support',
      },
      {
        kanji: '気管支',
        reading: 'きかんし',
        meanings: 'bronchus',
      },
      {
        kanji: '干支',
        reading: 'えと',
        meanings: 'sexagenary cycle',
      },
    ],
  },
  {
    kanjiName: '助',
    strokes: 7,
    grade: 3,
    freq: 397,
    meanings: ['Help', 'Rescue', 'Assist'],
    on: ['じょ'],
    kun: ['たす.ける', 'たす.かる', 'す.ける', 'すけ'],
    jlpt: 3,
    quizAnswers: ['Symptoms', 'Fault', 'France', 'Help'],
    similars: [
      {
        kanji: '且',
        meaning: 'moreover',
      },
      {
        kanji: '易',
        meaning: 'easy',
      },
      {
        kanji: '動',
        meaning: 'move',
      },
      {
        kanji: '勘',
        meaning: 'intuition',
      },
      {
        kanji: '喝',
        meaning: 'hoarse',
      },
      {
        kanji: '男',
        meaning: 'male',
      },
      {
        kanji: '身',
        meaning: 'somebody',
      },
      {
        kanji: '寡',
        meaning: 'widow',
      },
      {
        kanji: '功',
        meaning: 'achievement',
      },
      {
        kanji: '良',
        meaning: 'good',
      },
    ],
    usedIn: [
      {
        kanji: '助ける',
        reading: 'たすける',
        meanings: 'to save',
      },
      {
        kanji: '助かる',
        reading: 'たすかる',
        meanings: 'to be saved',
      },
      {
        kanji: '助',
        reading: 'すけ',
        meanings: 'assistance',
      },
      {
        kanji: '助っ人',
        reading: 'すけっと',
        meanings: 'helper',
      },
      {
        kanji: '福助',
        reading: 'ふくすけ',
        meanings: 'large-headed dwarf statue',
      },
      {
        kanji: 'デコ助',
        reading: 'でこすけ',
        meanings: 'big forehead',
      },
      {
        kanji: '助',
        reading: 'じょ',
        meanings: 'help',
      },
      {
        kanji: '助演',
        reading: 'じょえん',
        meanings: 'supporting performance',
      },
      {
        kanji: '互助',
        reading: 'ごじょ',
        meanings: 'mutual aid',
      },
      {
        kanji: '介助',
        reading: 'かいじょ',
        meanings: 'help',
      },
    ],
  },
  {
    kanjiName: '君',
    strokes: 7,
    grade: 3,
    freq: 947,
    meanings: ['Mister', 'You', 'Ruler', 'Male Name Suffix'],
    on: ['くん'],
    kun: ['きみ', '-ぎみ'],
    jlpt: 3,
    quizAnswers: ['Shellfish', 'Mister', 'Epidemic', 'Beauty'],
    similars: [
      {
        kanji: '知',
        meaning: 'know',
      },
      {
        kanji: '言',
        meaning: 'say',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '郡',
        meaning: 'county',
      },
      {
        kanji: '居',
        meaning: 'reside',
      },
      {
        kanji: '岩',
        meaning: 'boulder',
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)',
      },
      {
        kanji: '和',
        meaning: 'harmony',
      },
      {
        kanji: '唐',
        meaning: "T'ang",
      },
      {
        kanji: '唇',
        meaning: 'lips',
      },
    ],
    usedIn: [
      {
        kanji: '君',
        reading: 'きみ',
        meanings: 'you',
      },
      {
        kanji: '君が代',
        reading: 'きみがよ',
        meanings: 'Imperial reign',
      },
      {
        kanji: '大君',
        reading: 'おおきみ',
        meanings: 'emperor',
      },
      {
        kanji: '嫁が君',
        reading: 'よめがきみ',
        meanings: 'mouse',
      },
      {
        kanji: '君',
        reading: 'くん',
        meanings: 'Mr',
      },
      {
        kanji: '君子',
        reading: 'くんし',
        meanings: 'man of virtue',
      },
      {
        kanji: '夫君',
        reading: 'ふくん',
        meanings: "(another's) husband",
      },
      {
        kanji: '名君',
        reading: 'めいくん',
        meanings: 'wise ruler',
      },
    ],
  },
  {
    kanjiName: '対',
    strokes: 7,
    grade: 3,
    freq: 34,
    meanings: [
      'Vis-a-vis',
      'Opposite',
      'Even',
      'Equal',
      'Versus',
      'Anti-',
      'Compare',
    ],
    on: ['たい', 'つい'],
    kun: ['あいて', 'こた.える', 'そろ.い', 'つれあ.い', 'なら.ぶ', 'むか.う'],
    jlpt: 3,
    quizAnswers: ['Cram School', 'Flower', 'Vis-a-vis', 'Store'],
    similars: [
      {
        kanji: '府',
        meaning: 'borough',
      },
      {
        kanji: '庁',
        meaning: 'government office',
      },
      {
        kanji: '村',
        meaning: 'village',
      },
      {
        kanji: '称',
        meaning: 'appellation',
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
      {
        kanji: '広',
        meaning: 'wide',
      },
      {
        kanji: '材',
        meaning: 'lumber',
      },
      {
        kanji: '寿',
        meaning: 'longevity',
      },
      {
        kanji: '灯',
        meaning: 'lamp',
      },
      {
        kanji: '六',
        meaning: 'six',
      },
    ],
    usedIn: [
      {
        kanji: '対手',
        reading: 'たいしゅ',
        meanings: 'opponent (in combat)',
      },
      {
        kanji: '向かう',
        reading: 'むかう',
        meanings: 'to face',
      },
      {
        kanji: '対',
        reading: 'たい',
        meanings: 'versus',
      },
      {
        kanji: '対案',
        reading: 'たいあん',
        meanings: 'counter-proposal',
      },
      {
        kanji: '国対',
        reading: 'こくたい',
        meanings: 'Committee of the National Diet',
      },
      {
        kanji: '相対',
        reading: 'そうたい',
        meanings: 'relativity',
      },
      {
        kanji: '対',
        reading: 'つい',
        meanings: 'pair',
      },
      {
        kanji: '対句',
        reading: 'ついく',
        meanings: 'couplet',
      },
      {
        kanji: '一対',
        reading: 'いっつい',
        meanings: 'pair',
      },
      {
        kanji: '双対',
        reading: 'そうつい',
        meanings: 'duality',
      },
    ],
  },
  {
    kanjiName: '局',
    strokes: 7,
    grade: 3,
    freq: 286,
    meanings: [
      'Bureau',
      'Board',
      'Office',
      'Affair',
      'Conclusion',
      'Court Lady',
      'Lady-in-waiting',
      'Her Apartment',
    ],
    on: ['きょく'],
    kun: ['つぼね'],
    jlpt: 3,
    quizAnswers: ['Earn Money', '-ship', 'Spill', 'Bureau'],
    similars: [
      {
        kanji: '居',
        meaning: 'reside',
      },
      {
        kanji: '句',
        meaning: 'phrase',
      },
      {
        kanji: '拘',
        meaning: 'arrest',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '谷',
        meaning: 'valley',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '召',
        meaning: 'seduce',
      },
      {
        kanji: '如',
        meaning: 'likeness',
      },
      {
        kanji: '君',
        meaning: 'mister',
      },
    ],
    usedIn: [
      {
        kanji: '局',
        reading: 'つぼね',
        meanings: 'court lady (Heian period)',
      },
      {
        kanji: '局女郎',
        reading: 'つぼねじょろう',
        meanings: 'prostitute of the lowest class (Edo period)',
      },
      {
        kanji: '御局',
        reading: 'おつぼね',
        meanings: 'court lady with her own private chamber or office',
      },
      {
        kanji: 'お局',
        reading: 'おつぼね',
        meanings:
          'senior female worker who supervises junior employees in a domineering fashion',
      },
      {
        kanji: '局',
        reading: 'きょく',
        meanings: 'bureau',
      },
      {
        kanji: '局員',
        reading: 'きょくいん',
        meanings: 'clerk',
      },
      {
        kanji: '医局',
        reading: 'いきょく',
        meanings: 'medical office (esp. in a hospital)',
      },
      {
        kanji: '開局',
        reading: 'かいきょく',
        meanings: 'opening (of a broadcasting station',
      },
    ],
  },
  {
    kanjiName: '役',
    strokes: 7,
    grade: 3,
    freq: 315,
    meanings: [
      'Duty',
      'War',
      'Campaign',
      'Drafted Labor',
      'Office',
      'Service',
      'Role',
    ],
    on: ['やく', 'えき'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Clause', 'Post', 'Stretching', 'Duty'],
    similars: [
      {
        kanji: '彼',
        meaning: 'he',
      },
      {
        kanji: '般',
        meaning: 'carrier',
      },
      {
        kanji: '殴',
        meaning: 'assault',
      },
      {
        kanji: '殺',
        meaning: 'kill',
      },
      {
        kanji: '投',
        meaning: 'throw',
      },
      {
        kanji: '没',
        meaning: 'drown',
      },
      {
        kanji: '仮',
        meaning: 'sham',
      },
      {
        kanji: '後',
        meaning: 'behind',
      },
      {
        kanji: '段',
        meaning: 'grade',
      },
      {
        kanji: '疫',
        meaning: 'epidemic',
      },
    ],
    usedIn: [
      {
        kanji: '役',
        reading: 'やく',
        meanings: 'role',
      },
      {
        kanji: '役員',
        reading: 'やくいん',
        meanings: 'director',
      },
      {
        kanji: '悪役',
        reading: 'あくやく',
        meanings: 'villain',
      },
      {
        kanji: '大役',
        reading: 'たいやく',
        meanings: 'important task',
      },
      {
        kanji: '役',
        reading: 'えき',
        meanings: 'war',
      },
      {
        kanji: '役務',
        reading: 'えきむ',
        meanings: 'labor',
      },
      {
        kanji: '荷役',
        reading: 'にえき',
        meanings: 'handling cargo',
      },
      {
        kanji: '就役',
        reading: 'しゅうえき',
        meanings: 'being placed on duty',
      },
    ],
  },
  {
    kanjiName: '投',
    strokes: 7,
    grade: 3,
    freq: 236,
    meanings: [
      'Throw',
      'Discard',
      'Abandon',
      'Launch Into',
      'Join',
      'Invest In',
      'Hurl',
      'Give Up',
      'Sell At A Loss',
    ],
    on: ['とう'],
    kun: ['な.げる', '-な.げ'],
    jlpt: 3,
    quizAnswers: ['Attain', 'Take', 'Patent', 'Throw'],
    similars: [
      {
        kanji: '披',
        meaning: 'expose',
      },
      {
        kanji: '技',
        meaning: 'skill',
      },
      {
        kanji: '扱',
        meaning: 'handle',
      },
      {
        kanji: '没',
        meaning: 'drown',
      },
      {
        kanji: '抜',
        meaning: 'slip out',
      },
      {
        kanji: '疫',
        meaning: 'epidemic',
      },
      {
        kanji: '拠',
        meaning: 'foothold',
      },
      {
        kanji: '殴',
        meaning: 'assault',
      },
      {
        kanji: '択',
        meaning: 'choose',
      },
      {
        kanji: '抑',
        meaning: 'repress',
      },
    ],
    usedIn: [
      {
        kanji: '投げる',
        reading: 'なげる',
        meanings: 'to throw',
      },
      {
        kanji: '投',
        reading: 'とう',
        meanings: 'pitching ability',
      },
      {
        kanji: '投下',
        reading: 'とうか',
        meanings: 'throwing down',
      },
      {
        kanji: '好投',
        reading: 'こうとう',
        meanings: 'good (nice) pitching',
      },
      {
        kanji: '継投',
        reading: 'けいとう',
        meanings: 'relieving the (starting) pitcher',
      },
    ],
  },
  {
    kanjiName: '決',
    strokes: 7,
    grade: 3,
    freq: 71,
    meanings: ['Decide', 'Fix', 'Agree Upon', 'Appoint'],
    on: ['けつ'],
    kun: ['き.める', '-ぎ.め', 'き.まる', 'さ.く'],
    jlpt: 3,
    quizAnswers: ['Butterbur', 'Appearance', 'Look Back', 'Decide'],
    similars: [
      {
        kanji: '沢',
        meaning: 'swamp',
      },
      {
        kanji: '快',
        meaning: 'cheerful',
      },
      {
        kanji: '沸',
        meaning: 'seethe',
      },
      {
        kanji: '涙',
        meaning: 'tears',
      },
      {
        kanji: '染',
        meaning: 'dye',
      },
      {
        kanji: '泥',
        meaning: 'mud',
      },
      {
        kanji: '泣',
        meaning: 'cry',
      },
      {
        kanji: '泳',
        meaning: 'swim',
      },
      {
        kanji: '没',
        meaning: 'drown',
      },
      {
        kanji: '次',
        meaning: 'next',
      },
    ],
    usedIn: [
      {
        kanji: '決める',
        reading: 'きめる',
        meanings: 'to decide',
      },
      {
        kanji: '決まる',
        reading: 'きまる',
        meanings: 'to be decided',
      },
      {
        kanji: '決る',
        reading: 'しゃくる',
        meanings: 'to dig out',
      },
      {
        kanji: '決',
        reading: 'けつ',
        meanings: 'decision',
      },
      {
        kanji: '決意',
        reading: 'けつい',
        meanings: 'decision',
      },
      {
        kanji: '表決',
        reading: 'ひょうけつ',
        meanings: 'vote',
      },
      {
        kanji: '強行採決',
        reading: 'きょうこうさいけつ',
        meanings: 'forced passage (of a bill',
      },
    ],
  },
  {
    kanjiName: '馬',
    strokes: 10,
    grade: 2,
    freq: 639,
    meanings: ['Horse'],
    on: ['ば'],
    kun: ['うま', 'うま-', 'ま'],
    jlpt: 3,
    quizAnswers: ['Horse', 'Perfume', 'On', 'Hole'],
    similars: [
      {
        kanji: '焦',
        meaning: 'char',
      },
      {
        kanji: '駅',
        meaning: 'station',
      },
      {
        kanji: '駆',
        meaning: 'drive',
      },
      {
        kanji: '駄',
        meaning: 'burdensome',
      },
      {
        kanji: '駐',
        meaning: 'stop-over',
      },
      {
        kanji: '鳥',
        meaning: 'bird',
      },
      {
        kanji: '篤',
        meaning: 'fervent',
      },
      {
        kanji: '鳴',
        meaning: 'chirp',
      },
      {
        kanji: '験',
        meaning: 'verification',
      },
      {
        kanji: '騒',
        meaning: 'boisterous',
      },
    ],
    usedIn: [
      {
        kanji: '馬',
        reading: 'うま',
        meanings: 'horse',
      },
      {
        kanji: '馬車',
        reading: 'ばしゃ',
        meanings: 'coach (horse-drawn)',
      },
      {
        kanji: '白馬',
        reading: 'はくば',
        meanings: 'white horse',
      },
      {
        kanji: '竹馬',
        reading: 'たけうま',
        meanings: 'stilts (for walking)',
      },
      {
        kanji: '馬克',
        reading: 'まるく',
        meanings: 'mark (currency)',
      },
      {
        kanji: '馬尼剌',
        reading: 'まにら',
        meanings: 'Manila (Philippines)',
      },
      {
        kanji: '白馬',
        reading: 'はくば',
        meanings: 'white horse',
      },
      {
        kanji: '竹馬',
        reading: 'たけうま',
        meanings: 'stilts (for walking)',
      },
      {
        kanji: '馬車',
        reading: 'ばしゃ',
        meanings: 'coach (horse-drawn)',
      },
      {
        kanji: '馬券',
        reading: 'ばけん',
        meanings: 'betting ticket',
      },
      {
        kanji: '白馬',
        reading: 'はくば',
        meanings: 'white horse',
      },
      {
        kanji: '騎馬',
        reading: 'きば',
        meanings: 'horse riding',
      },
    ],
  },
  {
    kanjiName: '番',
    strokes: 12,
    grade: 2,
    freq: 348,
    meanings: ['Turn', 'Number In A Series'],
    on: ['ばん'],
    kun: ['つが.い'],
    jlpt: 3,
    quizAnswers: ['Thin Silk', 'Party', 'Partial', 'Turn'],
    similars: [
      {
        kanji: '審',
        meaning: 'hearing',
      },
      {
        kanji: '香',
        meaning: 'incense',
      },
      {
        kanji: '首',
        meaning: 'neck',
      },
      {
        kanji: '畑',
        meaning: 'farm',
      },
      {
        kanji: '藩',
        meaning: 'clan',
      },
      {
        kanji: '富',
        meaning: 'wealth',
      },
      {
        kanji: '猫',
        meaning: 'cat',
      },
      {
        kanji: '暦',
        meaning: 'calendar',
      },
      {
        kanji: '翻',
        meaning: 'flip',
      },
      {
        kanji: '箱',
        meaning: 'box',
      },
    ],
    usedIn: [
      {
        kanji: '番い',
        reading: 'つがい',
        meanings: 'pair (esp. of mated animals)',
      },
      {
        kanji: 'つがい目',
        reading: 'つがいめ',
        meanings: 'joint',
      },
      {
        kanji: '手番',
        reading: 'てつがい',
        meanings: 'plan',
      },
      {
        kanji: '番',
        reading: 'ばん',
        meanings: 'number (in a series)',
      },
      {
        kanji: '番組',
        reading: 'ばんぐみ',
        meanings: 'program (e.g. TV)',
      },
      {
        kanji: '出番',
        reading: 'でばん',
        meanings: "one's turn",
      },
      {
        kanji: '春一番',
        reading: 'はるいちばん',
        meanings: 'first storm of spring',
      },
    ],
  },
  {
    kanjiName: '絵',
    strokes: 12,
    grade: 2,
    freq: 895,
    meanings: ['Picture', 'Drawing', 'Painting', 'Sketch'],
    on: ['かい', 'え'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Set', 'Cover', 'Govt Office', 'Picture'],
    similars: [
      {
        kanji: '給',
        meaning: 'salary',
      },
      {
        kanji: '縫',
        meaning: 'sew',
      },
      {
        kanji: '紙',
        meaning: 'paper',
      },
      {
        kanji: '約',
        meaning: 'promise',
      },
      {
        kanji: '紛',
        meaning: 'distract',
      },
      {
        kanji: '経',
        meaning: 'sutra',
      },
      {
        kanji: '総',
        meaning: 'general',
      },
      {
        kanji: '緩',
        meaning: 'slacken',
      },
      {
        kanji: '純',
        meaning: 'genuine',
      },
      {
        kanji: '紀',
        meaning: 'chronicle',
      },
    ],
    usedIn: [
      {
        kanji: '絵画',
        reading: 'かいが',
        meanings: 'painting',
      },
      {
        kanji: '絵画館',
        reading: 'かいがかん',
        meanings: 'art or picture gallery',
      },
      {
        kanji: '絵',
        reading: 'え',
        meanings: 'picture',
      },
      {
        kanji: '絵の具',
        reading: 'えのぐ',
        meanings: 'paint',
      },
      {
        kanji: '巴',
        reading: 'ともえ',
        meanings: 'tomoe',
      },
      {
        kanji: '踏み絵',
        reading: 'ふみえ',
        meanings: 'fumi-e',
      },
    ],
  },
  {
    kanjiName: '数',
    strokes: 13,
    grade: 2,
    freq: 148,
    meanings: ['Number', 'Strength', 'Fate', 'Law', 'Figures'],
    on: ['すう', 'す', 'さく', 'そく', 'しゅ'],
    kun: ['かず', 'かぞ.える', 'しばしば', 'せ.める', 'わずらわ.しい'],
    jlpt: 3,
    quizAnswers: ['Childhood', 'Now', 'Number', 'Neck'],
    similars: [
      {
        kanji: '秩',
        meaning: 'regularity',
      },
      {
        kanji: '断',
        meaning: 'severance',
      },
      {
        kanji: '秋',
        meaning: 'autumn',
      },
      {
        kanji: '粒',
        meaning: 'grains',
      },
      {
        kanji: '粋',
        meaning: 'chic',
      },
      {
        kanji: '枚',
        meaning: 'sheet of...',
      },
      {
        kanji: '粉',
        meaning: 'flour',
      },
      {
        kanji: '粧',
        meaning: 'cosmetics',
      },
      {
        kanji: '炊',
        meaning: 'cook',
      },
      {
        kanji: '株',
        meaning: 'stocks',
      },
    ],
    usedIn: [
      {
        kanji: '数',
        reading: 'かず',
        meanings: 'number',
      },
      {
        kanji: '数多く',
        reading: 'かずおおく',
        meanings: 'in great numbers',
      },
      {
        kanji: '手数',
        reading: 'てすう',
        meanings: 'trouble',
      },
      {
        kanji: '口数',
        reading: 'くちかず',
        meanings: 'number of words a person speaks',
      },
      {
        kanji: '数える',
        reading: 'かぞえる',
        meanings: 'to count',
      },
      {
        kanji: '屡々',
        reading: 'しばしば',
        meanings: 'often',
      },
      {
        kanji: '数',
        reading: 'すう',
        meanings: 'several',
      },
      {
        kanji: '数億年',
        reading: 'すうおくねん',
        meanings: 'several hundred million years',
      },
      {
        kanji: '複数',
        reading: 'ふくすう',
        meanings: 'plural',
      },
      {
        kanji: '枚数',
        reading: 'まいすう',
        meanings: 'the number of flat things',
      },
      {
        kanji: '数',
        reading: 'すう',
        meanings: 'several',
      },
      {
        kanji: '数億年',
        reading: 'すうおくねん',
        meanings: 'several hundred million years',
      },
      {
        kanji: '数牌',
        reading: 'しゅーぱい',
        meanings: 'suited tiles',
      },
    ],
  },
  {
    kanjiName: '所',
    strokes: 8,
    grade: 3,
    freq: 221,
    meanings: ['Place', 'Extent'],
    on: ['しょ'],
    kun: ['ところ', '-ところ', 'どころ', 'とこ'],
    jlpt: 3,
    quizAnswers: ['Make Round', 'Reputation', 'Place', 'Wide'],
    similars: [
      {
        kanji: '啓',
        meaning: 'disclose',
      },
      {
        kanji: '尾',
        meaning: 'tail',
      },
      {
        kanji: '折',
        meaning: 'fold',
      },
      {
        kanji: '析',
        meaning: 'chop',
      },
      {
        kanji: '戻',
        meaning: 're-',
      },
      {
        kanji: '塀',
        meaning: 'fence',
      },
      {
        kanji: '肩',
        meaning: 'shoulder',
      },
      {
        kanji: '坪',
        meaning: 'two-mat area',
      },
      {
        kanji: '祈',
        meaning: 'pray',
      },
      {
        kanji: '枠',
        meaning: 'frame',
      },
    ],
    usedIn: [
      {
        kanji: '所',
        reading: 'ところ',
        meanings: 'place',
      },
      {
        kanji: '所が',
        reading: 'ところが',
        meanings: 'even so',
      },
      {
        kanji: '一所',
        reading: 'いっしょ',
        meanings: 'one place',
      },
      {
        kanji: '痛いところ',
        reading: 'いたいところ',
        meanings: "one's weak point",
      },
      {
        kanji: '所か',
        reading: 'どころか',
        meanings: 'far from',
      },
      {
        kanji: '所じゃない',
        reading: 'どころじゃない',
        meanings: 'not the time for',
      },
      {
        kanji: '大所',
        reading: 'おおどころ',
        meanings: 'wealthy family',
      },
      {
        kanji: '居所',
        reading: 'いどころ',
        meanings: 'whereabouts',
      },
      {
        kanji: '所',
        reading: 'ところ',
        meanings: 'place',
      },
      {
        kanji: '所が',
        reading: 'ところが',
        meanings: 'even so',
      },
      {
        kanji: '早いとこ',
        reading: 'はやいとこ',
        meanings: 'promptly',
      },
      {
        kanji: '僕んとこ',
        reading: 'ぼくんとこ',
        meanings: 'at my place',
      },
      {
        kanji: '所',
        reading: 'しょ',
        meanings: 'counter for places',
      },
      {
        kanji: '署員',
        reading: 'しょいん',
        meanings: 'staff member',
      },
      {
        kanji: '高所',
        reading: 'こうしょ',
        meanings: 'high place',
      },
      {
        kanji: '随所',
        reading: 'ずいしょ',
        meanings: 'everywhere',
      },
    ],
  },
  {
    kanjiName: '具',
    strokes: 8,
    grade: 3,
    freq: 629,
    meanings: [
      'Tool',
      'Utensil',
      'Means',
      'Possess',
      'Ingredients',
      'Counter For Armor, Suits, Sets Of Furniture',
    ],
    on: ['ぐ'],
    kun: ['そな.える', 'つぶさ.に'],
    jlpt: 3,
    quizAnswers: ['Wheel', 'Tool', 'Diverge', 'Control'],
    similars: [
      {
        kanji: '真',
        meaning: 'true',
      },
      {
        kanji: '臭',
        meaning: 'stinking',
      },
      {
        kanji: '見',
        meaning: 'see',
      },
      {
        kanji: '貝',
        meaning: 'shellfish',
      },
      {
        kanji: '映',
        meaning: 'reflect',
      },
      {
        kanji: '県',
        meaning: 'prefecture',
      },
      {
        kanji: '敗',
        meaning: 'failure',
      },
      {
        kanji: '販',
        meaning: 'marketing',
      },
      {
        kanji: '町',
        meaning: 'town',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
    ],
    usedIn: [
      {
        kanji: '備える',
        reading: 'そなえる',
        meanings: 'to furnish with',
      },
      {
        kanji: '具に',
        reading: 'つぶさに',
        meanings: 'in detail',
      },
      {
        kanji: '具',
        reading: 'ぐ',
        meanings: 'tool',
      },
      {
        kanji: '具合',
        reading: 'ぐあい',
        meanings: 'condition',
      },
      {
        kanji: '文具',
        reading: 'ぶんぐ',
        meanings: 'stationery',
      },
      {
        kanji: '金具',
        reading: 'かなぐ',
        meanings: 'metal fittings',
      },
    ],
  },
  {
    kanjiName: '受',
    strokes: 8,
    grade: 3,
    freq: 136,
    meanings: [
      'Accept',
      'Undergo',
      'Answer (phone)',
      'Take',
      'Get',
      'Catch',
      'Receive',
    ],
    on: ['じゅ'],
    kun: ['う.ける', '-う.け', 'う.かる'],
    jlpt: 3,
    quizAnswers: ['Accept', 'Diameter', 'Subjugate', 'Impose On'],
    similars: [
      {
        kanji: '授',
        meaning: 'impart',
      },
      {
        kanji: '労',
        meaning: 'labor',
      },
      {
        kanji: '愛',
        meaning: 'love',
      },
      {
        kanji: '栄',
        meaning: 'flourish',
      },
      {
        kanji: '侵',
        meaning: 'encroach',
      },
      {
        kanji: '俊',
        meaning: 'sagacious',
      },
      {
        kanji: '疲',
        meaning: 'exhausted',
      },
      {
        kanji: '泳',
        meaning: 'swim',
      },
      {
        kanji: '妥',
        meaning: 'gentle',
      },
      {
        kanji: '援',
        meaning: 'abet',
      },
    ],
    usedIn: [
      {
        kanji: '受ける',
        reading: 'うける',
        meanings: 'to receive',
      },
      {
        kanji: '受かる',
        reading: 'うかる',
        meanings: 'to pass (examination)',
      },
      {
        kanji: '受',
        reading: 'じゅ',
        meanings: 'vedana (sensation)',
      },
      {
        kanji: '受益',
        reading: 'じゅえき',
        meanings: 'benefitting by',
      },
      {
        kanji: '授受',
        reading: 'じゅじゅ',
        meanings: 'giving and receiving',
      },
      {
        kanji: '収受',
        reading: 'しゅうじゅ',
        meanings: 'reception',
      },
    ],
  },
  {
    kanjiName: '和',
    strokes: 8,
    grade: 3,
    freq: 124,
    meanings: ['Harmony', 'Japanese Style', 'Peace', 'Soften', 'Japan'],
    on: ['わ', 'お', 'か'],
    kun: ['やわ.らぐ', 'やわ.らげる', 'なご.む', 'なご.やか', 'あ.える'],
    jlpt: 3,
    quizAnswers: ['Black', 'Dignified', 'Harmony', 'Decay'],
    similars: [
      {
        kanji: '知',
        meaning: 'know',
      },
      {
        kanji: '利',
        meaning: 'profit',
      },
      {
        kanji: '粘',
        meaning: 'sticky',
      },
      {
        kanji: '程',
        meaning: 'extent',
      },
      {
        kanji: '税',
        meaning: 'tax',
      },
      {
        kanji: '枯',
        meaning: 'wither',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '君',
        meaning: 'mister',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
    ],
    usedIn: [
      {
        kanji: '和らぐ',
        reading: 'やわらぐ',
        meanings: 'to soften',
      },
      {
        kanji: '和らげる',
        reading: 'やわらげる',
        meanings: 'to soften',
      },
      {
        kanji: '和む',
        reading: 'なごむ',
        meanings: 'to be softened',
      },
      {
        kanji: '和やか',
        reading: 'なごやか',
        meanings: 'mild',
      },
      {
        kanji: '和える',
        reading: 'あえる',
        meanings: 'to dress (vegetables',
      },
      {
        kanji: '和',
        reading: 'わ',
        meanings: 'sum',
      },
      {
        kanji: '和歌',
        reading: 'わか',
        meanings: 'waka',
      },
      {
        kanji: '講和',
        reading: 'こうわ',
        meanings: 'reconciliation (between warring nations)',
      },
      {
        kanji: '英和',
        reading: 'えいわ',
        meanings: 'English-Japanese',
      },
      {
        kanji: '阿蘭陀',
        reading: 'おらんだ',
        meanings: 'Netherlands',
      },
      {
        kanji: '和尚',
        reading: 'おしょう',
        meanings: 'priestly teacher',
      },
      {
        kanji: '和声',
        reading: 'わせい',
        meanings: 'harmony',
      },
      {
        kanji: '和尚',
        reading: 'おしょう',
        meanings: 'priestly teacher',
      },
      {
        kanji: '諧和',
        reading: 'かいわ',
        meanings: 'gentle mutual affection',
      },
    ],
  },
  {
    kanjiName: '定',
    strokes: 8,
    grade: 3,
    freq: 48,
    meanings: ['Determine', 'Fix', 'Establish', 'Decide'],
    on: ['てい', 'じょう'],
    kun: ['さだ.める', 'さだ.まる', 'さだ.か'],
    jlpt: 3,
    quizAnswers: ['Stipend', 'Testing', 'Determine', 'Five'],
    similars: [
      {
        kanji: '実',
        meaning: 'reality',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '宗',
        meaning: 'religion',
      },
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
      {
        kanji: '家',
        meaning: 'house',
      },
      {
        kanji: '従',
        meaning: 'accompany',
      },
      {
        kanji: '寒',
        meaning: 'cold',
      },
    ],
    usedIn: [
      {
        kanji: '定める',
        reading: 'さだめる',
        meanings: 'to decide',
      },
      {
        kanji: '定まる',
        reading: 'さだまる',
        meanings: 'to become settled',
      },
      {
        kanji: '定か',
        reading: 'さだか',
        meanings: 'definite',
      },
      {
        kanji: '定価',
        reading: 'ていか',
        meanings: 'list price',
      },
      {
        kanji: '定員',
        reading: 'ていいん',
        meanings: 'fixed number (of people)',
      },
      {
        kanji: '裁定',
        reading: 'さいてい',
        meanings: 'decision',
      },
      {
        kanji: '改定',
        reading: 'かいてい',
        meanings: 'revision (of a rule',
      },
      {
        kanji: '定',
        reading: 'じょう',
        meanings: 'certainty',
      },
      {
        kanji: '定住',
        reading: 'ていじゅう',
        meanings: 'settlement',
      },
      {
        kanji: '不定',
        reading: 'ふじょう',
        meanings: 'uncertainty',
      },
      {
        kanji: '改定',
        reading: 'かいてい',
        meanings: 'revision (of a rule',
      },
    ],
  },
  {
    kanjiName: '実',
    strokes: 8,
    grade: 3,
    freq: 68,
    meanings: ['Reality', 'Truth'],
    on: ['じつ', 'しつ'],
    kun: ['み', 'みの.る', 'まこと', 'みの', 'みち.る'],
    jlpt: 3,
    quizAnswers: ['Aperture', 'Make Love To', 'Old Times', 'Reality'],
    similars: [
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '定',
        meaning: 'determine',
      },
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '宗',
        meaning: 'religion',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
      {
        kanji: '寒',
        meaning: 'cold',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '宇',
        meaning: 'eaves',
      },
      {
        kanji: '害',
        meaning: 'harm',
      },
    ],
    usedIn: [
      {
        kanji: '実',
        reading: 'み',
        meanings: 'fruit',
      },
      {
        kanji: '実り',
        reading: 'みのり',
        meanings: 'ripening (of a crop)',
      },
      {
        kanji: '浮き実',
        reading: 'うきみ',
        meanings: 'soup garnish',
      },
      {
        kanji: '桷',
        reading: 'ずみ',
        meanings: 'Toringo crabapple (Malus sieboldii)',
      },
      {
        kanji: '実る',
        reading: 'みのる',
        meanings: 'to bear fruit',
      },
      {
        kanji: '実るほど頭の下がる稲穂かな',
        reading: 'みのるほどあたまのさがるいなほかな',
        meanings: 'the more learned',
      },
      {
        kanji: '誠',
        reading: 'まこと',
        meanings: 'truth',
      },
      {
        kanji: '実に',
        reading: 'じつに',
        meanings: 'indeed',
      },
      {
        kanji: '嘘から出たまこと',
        reading: 'うそからでたまこと',
        meanings:
          'something intended as a lie or joke which (by chance) ends up being true',
      },
      {
        kanji: '実り',
        reading: 'みのり',
        meanings: 'ripening (of a crop)',
      },
      {
        kanji: '実る',
        reading: 'みのる',
        meanings: 'to bear fruit',
      },
      {
        kanji: '実',
        reading: 'じつ',
        meanings: 'truth',
      },
      {
        kanji: '実演',
        reading: 'じつえん',
        meanings: 'demonstration',
      },
      {
        kanji: '名実',
        reading: 'めいじつ',
        meanings: 'in name and in reality',
      },
      {
        kanji: '内実',
        reading: 'ないじつ',
        meanings: 'the facts',
      },
      {
        kanji: '故実',
        reading: 'こじつ',
        meanings: 'ancient practices',
      },
    ],
  },
  {
    kanjiName: '泳',
    strokes: 8,
    grade: 3,
    freq: 1223,
    meanings: ['Swim'],
    on: ['えい'],
    kun: ['およ.ぐ'],
    jlpt: 3,
    quizAnswers: ['Swim', 'Discrimination', 'Early Night', 'Solely'],
    similars: [
      {
        kanji: '沢',
        meaning: 'swamp',
      },
      {
        kanji: '沈',
        meaning: 'sink',
      },
      {
        kanji: '決',
        meaning: 'decide',
      },
      {
        kanji: '没',
        meaning: 'drown',
      },
      {
        kanji: '染',
        meaning: 'dye',
      },
      {
        kanji: '栄',
        meaning: 'flourish',
      },
      {
        kanji: '派',
        meaning: 'faction',
      },
      {
        kanji: '渓',
        meaning: 'mountain stream',
      },
      {
        kanji: '深',
        meaning: 'deep',
      },
      {
        kanji: '淡',
        meaning: 'thin',
      },
    ],
    usedIn: [
      {
        kanji: '泳ぐ',
        reading: 'およぐ',
        meanings: 'to swim',
      },
      {
        kanji: '泳者',
        reading: 'えいしゃ',
        meanings: 'a swimmer',
      },
      {
        kanji: '泳動',
        reading: 'えいどう',
        meanings: 'migration',
      },
      {
        kanji: '遠泳',
        reading: 'えんえい',
        meanings: 'long-distance swimming',
      },
      {
        kanji: '着衣泳',
        reading: 'ちゃくいえい',
        meanings: 'swimming fully-clothed',
      },
    ],
  },
  {
    kanjiName: '苦',
    strokes: 8,
    grade: 3,
    freq: 623,
    meanings: [
      'Suffering',
      'Trial',
      'Worry',
      'Hardship',
      'Feel Bitter',
      'Scowl',
    ],
    on: ['く'],
    kun: [
      'くる.しい',
      '-ぐる.しい',
      'くる.しむ',
      'くる.しめる',
      'にが.い',
      'にが.る',
    ],
    jlpt: 3,
    quizAnswers: ['Benevolence', 'Genius', 'Suffering', 'Summit'],
    similars: [
      {
        kanji: '若',
        meaning: 'young',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '括',
        meaning: 'fasten',
      },
      {
        kanji: '枯',
        meaning: 'wither',
      },
      {
        kanji: '培',
        meaning: 'cultivate',
      },
      {
        kanji: '芽',
        meaning: 'bud',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '古',
        meaning: 'old',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '居',
        meaning: 'reside',
      },
    ],
    usedIn: [
      {
        kanji: '苦しい',
        reading: 'くるしい',
        meanings: 'painful',
      },
      {
        kanji: '苦しい言い訳',
        reading: 'くるしいいいわけ',
        meanings: 'lame excuse',
      },
      {
        kanji: '苦しむ',
        reading: 'くるしむ',
        meanings: 'to suffer',
      },
      {
        kanji: '苦しめる',
        reading: 'くるしめる',
        meanings: 'to torment',
      },
      {
        kanji: '苦い',
        reading: 'にがい',
        meanings: 'bitter',
      },
      {
        kanji: '苦い薬',
        reading: 'にがいくすり',
        meanings: 'bitter medicine',
      },
      {
        kanji: '苦る',
        reading: 'にがる',
        meanings: 'to feel bitter',
      },
      {
        kanji: '苦',
        reading: 'く',
        meanings: 'pain',
      },
      {
        kanji: '苦境',
        reading: 'くきょう',
        meanings: 'difficult situation',
      },
      {
        kanji: '生活苦',
        reading: 'せいかつく',
        meanings: 'hardships of life (esp. due to lack of money)',
      },
      {
        kanji: '病苦',
        reading: 'びょうく',
        meanings: 'pain of sickness',
      },
    ],
  },
  {
    kanjiName: '表',
    strokes: 8,
    grade: 3,
    freq: 77,
    meanings: ['Surface', 'Table', 'Chart', 'Diagram'],
    on: ['ひょう'],
    kun: ['おもて', '-おもて', 'あらわ.す', 'あらわ.れる', 'あら.わす'],
    jlpt: 3,
    quizAnswers: ['Bitter', 'Ask', 'Tolerate', 'Surface'],
    similars: [
      {
        kanji: '俵',
        meaning: 'bag',
      },
      {
        kanji: '衣',
        meaning: 'garment',
      },
      {
        kanji: '麦',
        meaning: 'barley',
      },
      {
        kanji: '契',
        meaning: 'pledge',
      },
      {
        kanji: '装',
        meaning: 'attire',
      },
      {
        kanji: '老',
        meaning: 'old man',
      },
      {
        kanji: '攻',
        meaning: 'aggression',
      },
      {
        kanji: '依',
        meaning: 'reliant',
      },
      {
        kanji: '赤',
        meaning: 'red',
      },
      {
        kanji: '走',
        meaning: 'run',
      },
    ],
    usedIn: [
      {
        kanji: '表',
        reading: 'おもて',
        meanings: 'surface',
      },
      {
        kanji: '表裏',
        reading: 'ひょうり',
        meanings: 'front and back',
      },
      {
        kanji: '京表',
        reading: 'きょうおもて',
        meanings: 'vicinity of Kyoto',
      },
      {
        kanji: '中表',
        reading: 'なかおもて',
        meanings: 'cloth folded inside out',
      },
      {
        kanji: '表す',
        reading: 'あらわす',
        meanings: 'to represent',
      },
      {
        kanji: '現れる',
        reading: 'あらわれる',
        meanings: 'to appear',
      },
      {
        kanji: '表す',
        reading: 'あらわす',
        meanings: 'to represent',
      },
      {
        kanji: '表',
        reading: 'ひょう',
        meanings: 'table',
      },
      {
        kanji: '表記',
        reading: 'ひょうき',
        meanings: 'expression in writing',
      },
      {
        kanji: '一覧表',
        reading: 'いちらんひょう',
        meanings: 'list',
      },
      {
        kanji: '意表',
        reading: 'いひょう',
        meanings: 'surprise',
      },
    ],
  },
  {
    kanjiName: '部',
    strokes: 11,
    grade: 3,
    freq: 36,
    meanings: [
      'Section',
      'Bureau',
      'Dept',
      'Class',
      'Copy',
      'Part',
      'Portion',
      'Counter For Copies Of A Newspaper Or Magazine',
    ],
    on: ['ぶ'],
    kun: ['-べ'],
    jlpt: 3,
    quizAnswers: ['Champion', 'Perfume', 'Hit', 'Section'],
    similars: [
      {
        kanji: '郡',
        meaning: 'county',
      },
      {
        kanji: '剖',
        meaning: 'divide',
      },
      {
        kanji: '席',
        meaning: 'seat',
      },
      {
        kanji: '度',
        meaning: 'degrees',
      },
      {
        kanji: '章',
        meaning: 'badge',
      },
      {
        kanji: '痘',
        meaning: 'pox',
      },
      {
        kanji: '適',
        meaning: 'suitable',
      },
      {
        kanji: '竜',
        meaning: 'dragon',
      },
      {
        kanji: '庫',
        meaning: 'warehouse',
      },
      {
        kanji: '常',
        meaning: 'usual',
      },
    ],
    usedIn: [
      {
        kanji: '部',
        reading: 'ぶ',
        meanings: 'department (in an organization',
      },
      {
        kanji: '部位',
        reading: 'ぶい',
        meanings: 'part (esp. of the body)',
      },
      {
        kanji: '首脳部',
        reading: 'しゅのうぶ',
        meanings: 'executives',
      },
      {
        kanji: '頭部',
        reading: 'とうぶ',
        meanings: 'head',
      },
    ],
  },
  {
    kanjiName: '乗',
    strokes: 9,
    grade: 3,
    freq: 377,
    meanings: [
      'Ride',
      'Power',
      'Multiplication',
      'Record',
      'Counter For Vehicles',
      'Board',
      'Mount',
      'Join',
    ],
    on: ['じょう', 'しょう'],
    kun: ['の.る', '-の.り', 'の.せる'],
    jlpt: 3,
    quizAnswers: ['Hold In The Mouth', 'Ride', 'Sphere', 'Desk'],
    similars: [
      {
        kanji: '剰',
        meaning: 'surplus',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '垂',
        meaning: 'droop',
      },
      {
        kanji: '年',
        meaning: 'year',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
      {
        kanji: '棄',
        meaning: 'abandon',
      },
      {
        kanji: '鉢',
        meaning: 'bowl',
      },
      {
        kanji: '俵',
        meaning: 'bag',
      },
      {
        kanji: '敏',
        meaning: 'cleverness',
      },
      {
        kanji: '借',
        meaning: 'borrow',
      },
    ],
    usedIn: [
      {
        kanji: '乗る',
        reading: 'のる',
        meanings: 'to get on (train',
      },
      {
        kanji: '伸るか反るか',
        reading: 'のるかそるか',
        meanings: 'win or lose',
      },
      {
        kanji: '乗せる',
        reading: 'のせる',
        meanings: 'to place on (something)',
      },
      {
        kanji: '乗',
        reading: 'じょう',
        meanings: '(nth) power',
      },
      {
        kanji: '乗員',
        reading: 'じょういん',
        meanings: 'crew member',
      },
      {
        kanji: '同乗',
        reading: 'どうじょう',
        meanings: 'riding together',
      },
      {
        kanji: '相乗',
        reading: 'そうじょう',
        meanings: 'multiplication',
      },
    ],
  },
  {
    kanjiName: '客',
    strokes: 9,
    grade: 3,
    freq: 557,
    meanings: ['Guest', 'Visitor', 'Customer', 'Client'],
    on: ['きゃく', 'かく'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Enshrine', 'Bunch', 'Guest', 'Palace'],
    similars: [
      {
        kanji: '容',
        meaning: 'contain',
      },
      {
        kanji: '落',
        meaning: 'fall',
      },
      {
        kanji: '各',
        meaning: 'each',
      },
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '沿',
        meaning: 'run alongside',
      },
      {
        kanji: '谷',
        meaning: 'valley',
      },
      {
        kanji: '寄',
        meaning: 'draw near',
      },
      {
        kanji: '略',
        meaning: 'abbreviation',
      },
      {
        kanji: '溶',
        meaning: 'melt',
      },
      {
        kanji: '格',
        meaning: 'status',
      },
    ],
    usedIn: [
      {
        kanji: '客',
        reading: 'きゃく',
        meanings: 'guest',
      },
      {
        kanji: '客足',
        reading: 'きゃくあし',
        meanings: 'customer traffic',
      },
      {
        kanji: '論客',
        reading: 'ろんきゃく',
        meanings: 'controversialist',
      },
      {
        kanji: '賓客',
        reading: 'ひんきゃく',
        meanings: 'guest of honour',
      },
      {
        kanji: '客',
        reading: 'きゃく',
        meanings: 'guest',
      },
      {
        kanji: '客員',
        reading: 'きゃくいん',
        meanings: 'guest member',
      },
      {
        kanji: '論客',
        reading: 'ろんきゃく',
        meanings: 'controversialist',
      },
      {
        kanji: '賓客',
        reading: 'ひんきゃく',
        meanings: 'guest of honour',
      },
    ],
  },
  {
    kanjiName: '相',
    strokes: 9,
    grade: 3,
    freq: 45,
    meanings: [
      'Inter-',
      'Mutual',
      'Together',
      'Each Other',
      'Minister Of State',
      'Councillor',
      'Aspect',
      'Phase',
      'Physiognomy',
    ],
    on: ['そう', 'しょう'],
    kun: ['あい-'],
    jlpt: 3,
    quizAnswers: ['Inter-', 'Interior', 'Recital', 'Coerce'],
    similars: [
      {
        kanji: '想',
        meaning: 'concept',
      },
      {
        kanji: '省',
        meaning: 'government ministry',
      },
      {
        kanji: '植',
        meaning: 'plant',
      },
      {
        kanji: '香',
        meaning: 'incense',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '伯',
        meaning: 'chief',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '細',
        meaning: 'dainty',
      },
      {
        kanji: '紳',
        meaning: 'sire',
      },
    ],
    usedIn: [
      {
        kanji: '相',
        reading: 'そう',
        meanings: 'aspect',
      },
      {
        kanji: '相違',
        reading: 'そうい',
        meanings: 'difference',
      },
      {
        kanji: '実相',
        reading: 'じっそう',
        meanings: 'reality',
      },
      {
        kanji: '世相',
        reading: 'せそう',
        meanings: 'social conditions',
      },
      {
        kanji: '相',
        reading: 'しょう',
        meanings: 'minister (of a government department)',
      },
      {
        kanji: '相伴',
        reading: 'しょうばん',
        meanings: 'partaking',
      },
      {
        kanji: '厚相',
        reading: 'こうしょう',
        meanings: 'Welfare Minister',
      },
      {
        kanji: '宰相',
        reading: 'さいしょう',
        meanings: 'prime minister',
      },
    ],
  },
  {
    kanjiName: '美',
    strokes: 9,
    grade: 3,
    freq: 462,
    meanings: ['Beauty', 'Beautiful'],
    on: ['び', 'み'],
    kun: ['うつく.しい'],
    jlpt: 3,
    quizAnswers: ['Bright', 'Beauty', 'Netting', 'Committee'],
    similars: [
      {
        kanji: '兼',
        meaning: 'concurrently',
      },
      {
        kanji: '差',
        meaning: 'distinction',
      },
      {
        kanji: '義',
        meaning: 'righteousness',
      },
      {
        kanji: '業',
        meaning: 'business',
      },
      {
        kanji: '敏',
        meaning: 'cleverness',
      },
      {
        kanji: '俵',
        meaning: 'bag',
      },
      {
        kanji: '徒',
        meaning: 'on foot',
      },
      {
        kanji: '娠',
        meaning: 'with child',
      },
      {
        kanji: '装',
        meaning: 'attire',
      },
      {
        kanji: '寒',
        meaning: 'cold',
      },
    ],
    usedIn: [
      {
        kanji: '美しい',
        reading: 'うつくしい',
        meanings: 'beautiful',
      },
      {
        kanji: '美',
        reading: 'び',
        meanings: 'beauty',
      },
      {
        kanji: '美意識',
        reading: 'びいしき',
        meanings: 'sense of beauty',
      },
      {
        kanji: '華美',
        reading: 'かび',
        meanings: 'splendor',
      },
      {
        kanji: '造形美',
        reading: 'ぞうけいび',
        meanings: 'beauty of form (oft. used of nature)',
      },
      {
        kanji: '御',
        reading: 'み',
        meanings: 'august',
      },
      {
        kanji: '見事',
        reading: 'みごと',
        meanings: 'splendid',
      },
      {
        kanji: '水野亜美',
        reading: 'みずのあみ',
        meanings: 'Ami Mizuno (Sailor Moon character)',
      },
      {
        kanji: '伊邪那美',
        reading: 'いざなみ',
        meanings: 'Izanami (Shinto goddess)',
      },
    ],
  },
  {
    kanjiName: '負',
    strokes: 9,
    grade: 3,
    freq: 443,
    meanings: [
      'Defeat',
      'Negative',
      '-',
      'Minus',
      'Bear',
      'Owe',
      'Assume A Responsibility',
    ],
    on: ['ふ'],
    kun: ['ま.ける', 'ま.かす', 'お.う'],
    jlpt: 3,
    quizAnswers: ['Adroit', 'Ratio', 'Scrape', 'Defeat'],
    similars: [
      {
        kanji: '貝',
        meaning: 'shellfish',
      },
      {
        kanji: '貞',
        meaning: 'upright',
      },
      {
        kanji: '偵',
        meaning: 'spy',
      },
      {
        kanji: '貨',
        meaning: 'freight',
      },
      {
        kanji: '側',
        meaning: 'side',
      },
      {
        kanji: '貧',
        meaning: 'poverty',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '原',
        meaning: 'meadow',
      },
      {
        kanji: '員',
        meaning: 'employee',
      },
      {
        kanji: '的',
        meaning: "bull's eye",
      },
    ],
    usedIn: [
      {
        kanji: '負ける',
        reading: 'まける',
        meanings: 'to lose',
      },
      {
        kanji: '負けるが勝ち',
        reading: 'まけるがかち',
        meanings: 'he that fights and runs away may live to fight another day',
      },
      {
        kanji: '負かす',
        reading: 'まかす',
        meanings: 'to defeat',
      },
      {
        kanji: '負う',
        reading: 'おう',
        meanings: "to carry on one's back",
      },
      {
        kanji: '負うた子に教えられて浅瀬を渡る',
        reading: 'おうたこにおしえられてあさせをわたる',
        meanings: 'some things can be learned from the young',
      },
      {
        kanji: '負',
        reading: 'ふ',
        meanings: 'negative',
      },
      {
        kanji: '負荷',
        reading: 'ふか',
        meanings: 'burden',
      },
      {
        kanji: '正負',
        reading: 'せいふ',
        meanings: 'positive and negative',
      },
      {
        kanji: '非負',
        reading: 'ひふ',
        meanings: 'non-negative',
      },
    ],
  },
  {
    kanjiName: '談',
    strokes: 15,
    grade: 3,
    freq: 272,
    meanings: ['Discuss', 'Talk'],
    on: ['だん'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Discuss', 'Succeed To', 'Inlet', 'Disguise'],
    similars: [
      {
        kanji: '診',
        meaning: 'checkup',
      },
      {
        kanji: '説',
        meaning: 'opinion',
      },
      {
        kanji: '詠',
        meaning: 'recitation',
      },
      {
        kanji: '謙',
        meaning: 'self-effacing',
      },
      {
        kanji: '諮',
        meaning: 'consult with',
      },
      {
        kanji: '訟',
        meaning: 'sue',
      },
      {
        kanji: '誇',
        meaning: 'boast',
      },
      {
        kanji: '読',
        meaning: 'read',
      },
      {
        kanji: '詳',
        meaning: 'detailed',
      },
      {
        kanji: '該',
        meaning: 'above-stated',
      },
    ],
    usedIn: [
      {
        kanji: '談',
        reading: 'だん',
        meanings: 'talk',
      },
      {
        kanji: '談合',
        reading: 'だんごう',
        meanings: 'bid rigging',
      },
      {
        kanji: '示談',
        reading: 'じだん',
        meanings: 'settlement out of court',
      },
      {
        kanji: '講談',
        reading: 'こうだん',
        meanings: 'storytelling (of war chronicles',
      },
    ],
  },
  {
    kanjiName: '要',
    strokes: 9,
    grade: 4,
    freq: 106,
    meanings: ['Need', 'Main Point', 'Essence', 'Pivot', 'Key To'],
    on: ['よう'],
    kun: ['い.る', 'かなめ'],
    jlpt: 3,
    quizAnswers: ['School', 'Need', 'Deliberate', 'Summary'],
    similars: [
      {
        kanji: '腰',
        meaning: 'loins',
      },
      {
        kanji: '東',
        meaning: 'east',
      },
      {
        kanji: '更',
        meaning: 'grow late',
      },
      {
        kanji: '酔',
        meaning: 'drunk',
      },
      {
        kanji: '煙',
        meaning: 'smoke',
      },
      {
        kanji: '遷',
        meaning: 'transition',
      },
      {
        kanji: '宴',
        meaning: 'banquet',
      },
      {
        kanji: '桜',
        meaning: 'cherry',
      },
      {
        kanji: '配',
        meaning: 'distribute',
      },
      {
        kanji: '酢',
        meaning: 'vinegar',
      },
    ],
    usedIn: [
      {
        kanji: '要る',
        reading: 'いる',
        meanings: 'to need',
      },
      {
        kanji: '要',
        reading: 'かなめ',
        meanings: 'pivot',
      },
      {
        kanji: '要石',
        reading: 'かなめいし',
        meanings: 'keystone',
      },
      {
        kanji: '要',
        reading: 'よう',
        meanings: 'main point',
      },
      {
        kanji: '要因',
        reading: 'よういん',
        meanings: 'main cause',
      },
      {
        kanji: '所要',
        reading: 'しょよう',
        meanings: 'required',
      },
      {
        kanji: '法要',
        reading: 'ほうよう',
        meanings: 'Buddhist memorial service',
      },
    ],
  },
  {
    kanjiName: '勝',
    strokes: 12,
    grade: 3,
    freq: 185,
    meanings: ['Victory', 'Win', 'Prevail', 'Excel'],
    on: ['しょう'],
    kun: ['か.つ', '-が.ち', 'まさ.る', 'すぐ.れる', 'かつ'],
    jlpt: 3,
    quizAnswers: ['Put On', 'Oil', 'Victory', 'Voiced'],
    similars: [
      {
        kanji: '朕',
        meaning: 'majestic plural',
      },
      {
        kanji: '券',
        meaning: 'ticket',
      },
      {
        kanji: '謄',
        meaning: 'mimeograph',
      },
      {
        kanji: '脈',
        meaning: 'vein',
      },
      {
        kanji: '腸',
        meaning: 'intestines',
      },
      {
        kanji: '胸',
        meaning: 'bosom',
      },
      {
        kanji: '脳',
        meaning: 'brain',
      },
      {
        kanji: '肪',
        meaning: 'obese',
      },
      {
        kanji: '咲',
        meaning: 'blossom',
      },
      {
        kanji: '脚',
        meaning: 'skids',
      },
    ],
    usedIn: [
      {
        kanji: '勝つ',
        reading: 'かつ',
        meanings: 'to win',
      },
      {
        kanji: '褐色',
        reading: 'かちいろ',
        meanings: 'dark indigo (almost black)',
      },
      {
        kanji: '勝る',
        reading: 'まさる',
        meanings: 'to excel',
      },
      {
        kanji: '優るとも劣らない',
        reading: 'まさるともおとらない',
        meanings: 'not at all inferior to',
      },
      {
        kanji: '優れる',
        reading: 'すぐれる',
        meanings: 'to surpass',
      },
      {
        kanji: '勝つ',
        reading: 'かつ',
        meanings: 'to win',
      },
      {
        kanji: '褐色',
        reading: 'かちいろ',
        meanings: 'dark indigo (almost black)',
      },
      {
        kanji: '勝',
        reading: 'しょう',
        meanings: 'win',
      },
      {
        kanji: '勝因',
        reading: 'しょういん',
        meanings: 'cause of victory',
      },
      {
        kanji: '必勝',
        reading: 'ひっしょう',
        meanings: 'certain victory',
      },
      {
        kanji: '快勝',
        reading: 'かいしょう',
        meanings: 'sweeping victory',
      },
    ],
  },
  {
    kanjiName: '速',
    strokes: 10,
    grade: 3,
    freq: 576,
    meanings: ['Quick', 'Fast'],
    on: ['そく'],
    kun: ['はや.い', 'はや-', 'はや.める', 'すみ.やか'],
    jlpt: 3,
    quizAnswers: ['Mix', 'Accompany', 'Quick', 'Track'],
    similars: [
      {
        kanji: '勅',
        meaning: 'imperial order',
      },
      {
        kanji: '遠',
        meaning: 'distant',
      },
      {
        kanji: '還',
        meaning: 'send back',
      },
      {
        kanji: '述',
        meaning: 'mention',
      },
      {
        kanji: '逐',
        meaning: 'pursue',
      },
      {
        kanji: '束',
        meaning: 'bundle',
      },
      {
        kanji: '追',
        meaning: 'chase',
      },
      {
        kanji: '迷',
        meaning: 'astray',
      },
      {
        kanji: '逮',
        meaning: 'apprehend',
      },
      {
        kanji: '違',
        meaning: 'difference',
      },
    ],
    usedIn: [
      {
        kanji: '早い',
        reading: 'はやい',
        meanings: 'fast',
      },
      {
        kanji: '早める',
        reading: 'はやめる',
        meanings: 'to bring forward (e.g. by 3 hours)',
      },
      {
        kanji: '速やか',
        reading: 'すみやか',
        meanings: 'quick',
      },
      {
        kanji: '速',
        reading: 'そく',
        meanings: 'gear',
      },
      {
        kanji: '速度',
        reading: 'そくど',
        meanings: 'speed',
      },
      {
        kanji: '失速',
        reading: 'しっそく',
        meanings: 'stall',
      },
      {
        kanji: '快速',
        reading: 'かいそく',
        meanings: 'high speed',
      },
    ],
  },
  {
    kanjiName: '配',
    strokes: 10,
    grade: 3,
    freq: 359,
    meanings: ['Distribute', 'Spouse', 'Exile', 'Rationing'],
    on: ['はい'],
    kun: ['くば.る'],
    jlpt: 3,
    quizAnswers: ['Incite', 'Except', 'Distribute', 'Neck'],
    similars: [
      {
        kanji: '酔',
        meaning: 'drunk',
      },
      {
        kanji: '酌',
        meaning: 'bar-tending',
      },
      {
        kanji: '酢',
        meaning: 'vinegar',
      },
      {
        kanji: '車',
        meaning: 'car',
      },
      {
        kanji: '西',
        meaning: 'west',
      },
      {
        kanji: '尊',
        meaning: 'revered',
      },
      {
        kanji: '酵',
        meaning: 'fermentation',
      },
      {
        kanji: '酷',
        meaning: 'cruel',
      },
      {
        kanji: '酸',
        meaning: 'acid',
      },
      {
        kanji: '酪',
        meaning: 'dairy products',
      },
    ],
    usedIn: [
      {
        kanji: '配る',
        reading: 'くばる',
        meanings: 'to distribute',
      },
      {
        kanji: '配球',
        reading: 'はいきゅう',
        meanings: 'combination of (varied) pitches',
      },
      {
        kanji: '配管',
        reading: 'はいかん',
        meanings: 'plumbing',
      },
      {
        kanji: '無配',
        reading: 'むはい',
        meanings: 'without dividend',
      },
      {
        kanji: '宅配',
        reading: 'たくはい',
        meanings: 'home delivery',
      },
    ],
  },
  {
    kanjiName: '酒',
    strokes: 10,
    grade: 3,
    freq: 1006,
    meanings: ['Sake', 'Alcohol'],
    on: ['しゅ'],
    kun: ['さけ', 'さか-'],
    jlpt: 3,
    quizAnswers: ['Assault', 'Sake', 'Tallow', 'Reckless'],
    similars: [
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
      {
        kanji: '油',
        meaning: 'oil',
      },
      {
        kanji: '湖',
        meaning: 'lake',
      },
      {
        kanji: '猶',
        meaning: 'furthermore',
      },
      {
        kanji: '潮',
        meaning: 'tide',
      },
      {
        kanji: '恒',
        meaning: 'constancy',
      },
      {
        kanji: '西',
        meaning: 'west',
      },
      {
        kanji: '尊',
        meaning: 'revered',
      },
      {
        kanji: '清',
        meaning: 'pure',
      },
      {
        kanji: '済',
        meaning: 'settle (debt',
      },
    ],
    usedIn: [
      {
        kanji: '酒',
        reading: 'さけ',
        meanings: 'alcohol',
      },
      {
        kanji: '酒好き',
        reading: 'さけずき',
        meanings: 'love of drink',
      },
      {
        kanji: '手酌酒',
        reading: 'てじゃくさけ',
        meanings: "pouring one's own drinks",
      },
      {
        kanji: '小酒',
        reading: 'こさけ',
        meanings: 'small drink',
      },
      {
        kanji: '酒',
        reading: 'さけ',
        meanings: 'alcohol',
      },
      {
        kanji: '酒税',
        reading: 'しゅぜい',
        meanings: 'liquor tax',
      },
      {
        kanji: '洋酒',
        reading: 'ようしゅ',
        meanings: 'Western wine and spirits',
      },
      {
        kanji: '清酒',
        reading: 'せいしゅ',
        meanings: 'refined sake',
      },
    ],
  },
  {
    kanjiName: '進',
    strokes: 11,
    grade: 3,
    freq: 142,
    meanings: ['Advance', 'Proceed', 'Progress', 'Promote'],
    on: ['しん'],
    kun: ['すす.む', 'すす.める'],
    jlpt: 3,
    quizAnswers: ['Advance', 'Solely', 'Moan', 'Secretion'],
    similars: [
      {
        kanji: '焦',
        meaning: 'char',
      },
      {
        kanji: '隻',
        meaning: 'vessels',
      },
      {
        kanji: '集',
        meaning: 'gather',
      },
      {
        kanji: '追',
        meaning: 'chase',
      },
      {
        kanji: '奪',
        meaning: 'rob',
      },
      {
        kanji: '准',
        meaning: 'quasi-',
      },
      {
        kanji: '勧',
        meaning: 'persuade',
      },
      {
        kanji: '準',
        meaning: 'semi-',
      },
      {
        kanji: '遣',
        meaning: 'dispatch',
      },
      {
        kanji: '携',
        meaning: 'portable',
      },
    ],
    usedIn: [
      {
        kanji: '進む',
        reading: 'すすむ',
        meanings: 'to advance',
      },
      {
        kanji: '進むも地獄退くも地獄',
        reading: 'すすむもじごくしりぞくもじごく',
        meanings: 'between the devil and the deep blue sea',
      },
      {
        kanji: '進める',
        reading: 'すすめる',
        meanings: 'to advance',
      },
      {
        kanji: '進学',
        reading: 'しんがく',
        meanings: 'advancing to the next stage of education',
      },
      {
        kanji: '進化',
        reading: 'しんか',
        meanings: 'evolution',
      },
      {
        kanji: '後進',
        reading: 'こうしん',
        meanings: "one's junior",
      },
      {
        kanji: '累進',
        reading: 'るいしん',
        meanings: 'successive promotion',
      },
    ],
  },
  {
    kanjiName: '落',
    strokes: 12,
    grade: 3,
    freq: 420,
    meanings: ['Fall', 'Drop', 'Come Down', 'Village', 'Hamlet'],
    on: ['らく'],
    kun: ['お.ちる', 'お.ち', 'お.とす'],
    jlpt: 3,
    quizAnswers: ['Instrument', 'Fall', 'Butterbur', '10**12'],
    similars: [
      {
        kanji: '客',
        meaning: 'guest',
      },
      {
        kanji: '沿',
        meaning: 'run alongside',
      },
      {
        kanji: '浴',
        meaning: 'bathe',
      },
      {
        kanji: '若',
        meaning: 'young',
      },
      {
        kanji: '略',
        meaning: 'abbreviation',
      },
      {
        kanji: '格',
        meaning: 'status',
      },
      {
        kanji: '培',
        meaning: 'cultivate',
      },
      {
        kanji: '活',
        meaning: 'lively',
      },
      {
        kanji: '銘',
        meaning: 'inscription',
      },
      {
        kanji: '酪',
        meaning: 'dairy products',
      },
    ],
    usedIn: [
      {
        kanji: '落ちる',
        reading: 'おちる',
        meanings: 'to fall',
      },
      {
        kanji: '落ち',
        reading: 'おち',
        meanings: 'slip',
      },
      {
        kanji: '落ち込む',
        reading: 'おちこむ',
        meanings: 'to feel down',
      },
      {
        kanji: '付け落ち',
        reading: 'つけおち',
        meanings: 'omission in a bill',
      },
      {
        kanji: '鳩尾',
        reading: 'みぞおち',
        meanings: 'pit of the stomach',
      },
      {
        kanji: '落とす',
        reading: 'おとす',
        meanings: 'to drop',
      },
      {
        kanji: '落語',
        reading: 'らくご',
        meanings: 'rakugo',
      },
      {
        kanji: '落書き',
        reading: 'らくがき',
        meanings: 'scrawl',
      },
      {
        kanji: '崩落',
        reading: 'ほうらく',
        meanings: 'collapse',
      },
      {
        kanji: '当落',
        reading: 'とうらく',
        meanings: 'result (of an election)',
      },
    ],
  },
  {
    kanjiName: '葉',
    strokes: 12,
    grade: 3,
    freq: 414,
    meanings: [
      'Leaf',
      'Plane',
      'Lobe',
      'Needle',
      'Blade',
      'Spear',
      'Counter For Flat Things',
      'Fragment',
      'Piece',
    ],
    on: ['よう'],
    kun: ['は'],
    jlpt: 3,
    quizAnswers: ['Leaf', 'Open', 'Persuade', 'Skeleton'],
    similars: [
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '棄',
        meaning: 'abandon',
      },
      {
        kanji: '芽',
        meaning: 'bud',
      },
      {
        kanji: '華',
        meaning: 'splendor',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '敬',
        meaning: 'awe',
      },
      {
        kanji: '英',
        meaning: 'England',
      },
      {
        kanji: '菜',
        meaning: 'vegetable',
      },
      {
        kanji: '故',
        meaning: 'happenstance',
      },
      {
        kanji: '載',
        meaning: 'ride',
      },
    ],
    usedIn: [
      {
        kanji: '葉',
        reading: 'は',
        meanings: 'leaf',
      },
      {
        kanji: '葉書',
        reading: 'はがき',
        meanings: 'postcard',
      },
      {
        kanji: '一葉',
        reading: 'いちよう',
        meanings: 'one leaf',
      },
      {
        kanji: '枝葉',
        reading: 'えだは',
        meanings: 'branches and leaves',
      },
      {
        kanji: '葉',
        reading: 'よう',
        meanings: 'counter for leaves',
      },
      {
        kanji: '葉胃',
        reading: 'ようい',
        meanings: 'omasum',
      },
      {
        kanji: '紅葉',
        reading: 'こうよう',
        meanings: 'leaves turning red (in autumn)',
      },
      {
        kanji: '前頭葉',
        reading: 'ぜんとうよう',
        meanings: 'frontal lobe',
      },
    ],
  },
  {
    kanjiName: '路',
    strokes: 13,
    grade: 3,
    freq: 529,
    meanings: ['Path', 'Route', 'Road', 'Distance'],
    on: ['ろ', 'る'],
    kun: ['-じ', 'みち'],
    jlpt: 3,
    quizAnswers: ['Path', 'Dislike', 'Conduct', 'Stopping'],
    similars: [
      {
        kanji: '踏',
        meaning: 'step',
      },
      {
        kanji: '露',
        meaning: 'dew',
      },
      {
        kanji: '跳',
        meaning: 'hop',
      },
      {
        kanji: '距',
        meaning: 'long-distance',
      },
      {
        kanji: '略',
        meaning: 'abbreviation',
      },
      {
        kanji: '客',
        meaning: 'guest',
      },
      {
        kanji: '唆',
        meaning: 'tempt',
      },
      {
        kanji: '格',
        meaning: 'status',
      },
      {
        kanji: '絡',
        meaning: 'entwine',
      },
      {
        kanji: '践',
        meaning: 'tread',
      },
    ],
    usedIn: [
      {
        kanji: '道',
        reading: 'みち',
        meanings: 'road',
      },
      {
        kanji: '道草',
        reading: 'みちくさ',
        meanings: 'loitering on the way',
      },
      {
        kanji: '長路',
        reading: 'ながみち',
        meanings: 'long road',
      },
      {
        kanji: '脇道',
        reading: 'わきみち',
        meanings: 'side road',
      },
      {
        kanji: '路上',
        reading: 'ろじょう',
        meanings: 'on the road',
      },
      {
        kanji: '路地',
        reading: 'ろじ',
        meanings: 'alley',
      },
      {
        kanji: '活路',
        reading: 'かつろ',
        meanings: 'means of survival',
      },
      {
        kanji: '岐路',
        reading: 'きろ',
        meanings: 'forked road',
      },
      {
        kanji: '路加',
        reading: 'るか',
        meanings: 'St Luke',
      },
    ],
  },
  {
    kanjiName: '鳴',
    strokes: 14,
    grade: 2,
    freq: 1279,
    meanings: ['Chirp', 'Cry', 'Bark', 'Sound', 'Ring', 'Echo', 'Honk'],
    on: ['めい'],
    kun: ['な.く', 'な.る', 'な.らす'],
    jlpt: 3,
    quizAnswers: ['Chirp', 'Secrete', 'Purify', 'Comfort'],
    similars: [
      {
        kanji: '鳥',
        meaning: 'bird',
      },
      {
        kanji: '煮',
        meaning: 'boil',
      },
      {
        kanji: '遺',
        meaning: 'bequeath',
      },
      {
        kanji: '礁',
        meaning: 'reef',
      },
      {
        kanji: '鶏',
        meaning: 'chicken',
      },
      {
        kanji: '馬',
        meaning: 'horse',
      },
      {
        kanji: '員',
        meaning: 'employee',
      },
      {
        kanji: '薫',
        meaning: 'send forth fragrance',
      },
      {
        kanji: '憩',
        meaning: 'recess',
      },
      {
        kanji: '黒',
        meaning: 'black',
      },
    ],
    usedIn: [
      {
        kanji: '鳴く',
        reading: 'なく',
        meanings: 'to make sound (of an animal)',
      },
      {
        kanji: '鳴く蝉よりも鳴かぬ蛍が身を焦がす',
        reading: 'なくせみよりもなかぬほたるがみをこがす',
        meanings: 'empty vessels make the most noise',
      },
      {
        kanji: '鳴る',
        reading: 'なる',
        meanings: 'to sound',
      },
      {
        kanji: '鳴門',
        reading: 'なると',
        meanings: 'strait with a roaring tidal ebb and flow',
      },
      {
        kanji: '鳴らす',
        reading: 'ならす',
        meanings: 'to ring',
      },
      {
        kanji: '鳴管',
        reading: 'めいかん',
        meanings: 'syrinx (part of a bird)',
      },
      {
        kanji: '鳴禽',
        reading: 'めいきん',
        meanings: 'songbird',
      },
      {
        kanji: '百家争鳴',
        reading: 'ひゃっかそうめい',
        meanings: 'let a hundred schools of thought contend',
      },
      {
        kanji: '蛙鳴',
        reading: 'あめい',
        meanings: 'frog calling',
      },
    ],
  },
  {
    kanjiName: '横',
    strokes: 15,
    grade: 3,
    freq: 480,
    meanings: [
      'Sideways',
      'Side',
      'Horizontal',
      'Width',
      'Woof',
      'Unreasonable',
      'Perverse',
    ],
    on: ['おう'],
    kun: ['よこ'],
    jlpt: 3,
    quizAnswers: ['Boil', 'Deceive', 'Sideways', 'Punishment'],
    similars: [
      {
        kanji: '積',
        meaning: 'volume',
      },
      {
        kanji: '賃',
        meaning: 'fare',
      },
      {
        kanji: '黄',
        meaning: 'yellow',
      },
      {
        kanji: '績',
        meaning: 'exploits',
      },
      {
        kanji: '模',
        meaning: 'imitation',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '類',
        meaning: 'sort',
      },
      {
        kanji: '賛',
        meaning: 'approve',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '構',
        meaning: 'posture',
      },
    ],
    usedIn: [
      {
        kanji: '横',
        reading: 'よこ',
        meanings: 'horizontal (as opposed to vertical)',
      },
      {
        kanji: '邪',
        reading: 'よこしま',
        meanings: 'wicked',
      },
      {
        kanji: '真横',
        reading: 'まよこ',
        meanings: '(right at the) side',
      },
      {
        kanji: '縦中横',
        reading: 'たてちゅうよこ',
        meanings: 'using horizontal characters in vertical writing',
      },
      {
        kanji: '横線',
        reading: 'おうせん',
        meanings: 'horizontal line',
      },
      {
        kanji: '横行',
        reading: 'おうこう',
        meanings: 'being rampant',
      },
      {
        kanji: '縦横',
        reading: 'じゅうおう',
        meanings: 'length and width',
      },
      {
        kanji: '専横',
        reading: 'せんおう',
        meanings: 'arbitrariness',
      },
    ],
  },
  {
    kanjiName: '調',
    strokes: 15,
    grade: 3,
    freq: 87,
    meanings: [
      'Tune',
      'Tone',
      'Meter',
      'Key (music)',
      'Writing Style',
      'Prepare',
      'Exorcise',
      'Investigate',
      'Harmonize',
      'Mediate',
    ],
    on: ['ちょう'],
    kun: ['しら.べる', 'しら.べ', 'ととの.う', 'ととの.える'],
    jlpt: 3,
    quizAnswers: ['Far Off', 'Tune', 'System', 'Alike'],
    similars: [
      {
        kanji: '詰',
        meaning: 'packed',
      },
      {
        kanji: '話',
        meaning: 'tale',
      },
      {
        kanji: '語',
        meaning: 'word',
      },
      {
        kanji: '諾',
        meaning: 'consent',
      },
      {
        kanji: '詞',
        meaning: 'part of speech',
      },
      {
        kanji: '詔',
        meaning: 'imperial edict',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '詳',
        meaning: 'detailed',
      },
      {
        kanji: '許',
        meaning: 'permit',
      },
      {
        kanji: '詩',
        meaning: 'poem',
      },
    ],
    usedIn: [
      {
        kanji: '調べる',
        reading: 'しらべる',
        meanings: 'to examine',
      },
      {
        kanji: '調べ',
        reading: 'しらべ',
        meanings: 'investigation',
      },
      {
        kanji: '調べる',
        reading: 'しらべる',
        meanings: 'to examine',
      },
      {
        kanji: '取り調べ',
        reading: 'とりしらべ',
        meanings: 'investigation (e.g. by police or prosecutors)',
      },
      {
        kanji: '整う',
        reading: 'ととのう',
        meanings: 'to be ready',
      },
      {
        kanji: '整える',
        reading: 'ととのえる',
        meanings: 'to put in order',
      },
      {
        kanji: '調',
        reading: 'ちょう',
        meanings: 'pitch',
      },
      {
        kanji: '調印',
        reading: 'ちょういん',
        meanings: 'signature',
      },
      {
        kanji: '長調',
        reading: 'ちょうちょう',
        meanings: 'major key',
      },
      {
        kanji: '空調',
        reading: 'くうちょう',
        meanings: 'air conditioning',
      },
    ],
  },
  {
    kanjiName: '頭',
    strokes: 16,
    grade: 2,
    freq: 433,
    meanings: ['Head', 'Counter For Large Animals'],
    on: ['とう', 'ず', 'と'],
    kun: ['あたま', 'かしら', '-がしら', 'かぶり'],
    jlpt: 3,
    quizAnswers: ['Wall', 'Head', 'Shift', 'West'],
    similars: [
      {
        kanji: '頼',
        meaning: 'trust',
      },
      {
        kanji: '瀬',
        meaning: 'rapids',
      },
      {
        kanji: '頑',
        meaning: 'stubborn',
      },
      {
        kanji: '傾',
        meaning: 'lean',
      },
      {
        kanji: '項',
        meaning: 'paragraph',
      },
      {
        kanji: '貴',
        meaning: 'precious',
      },
      {
        kanji: '類',
        meaning: 'sort',
      },
      {
        kanji: '顕',
        meaning: 'appear',
      },
      {
        kanji: '願',
        meaning: 'petition',
      },
      {
        kanji: '噴',
        meaning: 'erupt',
      },
    ],
    usedIn: [
      {
        kanji: '頭',
        reading: 'あたま',
        meanings: 'head',
      },
      {
        kanji: '頭打ち',
        reading: 'あたまうち',
        meanings: 'reaching a peak',
      },
      {
        kanji: '石頭',
        reading: 'いしあたま',
        meanings: 'obstinate person',
      },
      {
        kanji: 'ごま塩頭',
        reading: 'ごましおあたま',
        meanings: 'salt and pepper hair',
      },
      {
        kanji: '頭',
        reading: 'あたま',
        meanings: 'head',
      },
      {
        kanji: '頭文字',
        reading: 'かしらもじ',
        meanings: 'first letter of a word',
      },
      {
        kanji: 'お頭',
        reading: 'おかしら',
        meanings: 'leader',
      },
      {
        kanji: '鯛の尾より鰯の頭',
        reading: 'たいのおよりいわしのかしら',
        meanings: 'better be the head of a dog than the tail of a lion',
      },
      {
        kanji: '頭',
        reading: 'かぶり',
        meanings: 'head',
      },
      {
        kanji: '頭を振る',
        reading: 'かぶりをふる',
        meanings: "to shake one's head (in denial)",
      },
      {
        kanji: '頭',
        reading: 'とう',
        meanings: 'counter for large animals (e.g. head of cattle)',
      },
      {
        kanji: '頭角',
        reading: 'とうかく',
        meanings: 'top of the head',
      },
      {
        kanji: '教頭',
        reading: 'きょうとう',
        meanings: 'deputy head teacher',
      },
      {
        kanji: '会頭',
        reading: 'かいとう',
        meanings: 'society president',
      },
      {
        kanji: '頭',
        reading: 'ず',
        meanings: 'head',
      },
      {
        kanji: '頭打ち',
        reading: 'あたまうち',
        meanings: 'reaching a peak',
      },
      {
        kanji: '馬頭',
        reading: 'めず',
        meanings: 'horse-headed demon (in hell)',
      },
      {
        kanji: '竜頭',
        reading: 'りゅうず',
        meanings: 'crown (of a watch)',
      },
      {
        kanji: '頭',
        reading: 'とう',
        meanings: 'counter for large animals (e.g. head of cattle)',
      },
      {
        kanji: '頭角',
        reading: 'とうかく',
        meanings: 'top of the head',
      },
      {
        kanji: '鳥兜',
        reading: 'とりかぶと',
        meanings: 'aconite (esp. species Aconitum japonicum)',
      },
    ],
  },
  {
    kanjiName: '顔',
    strokes: 18,
    grade: 2,
    freq: 676,
    meanings: ['Face', 'Expression'],
    on: ['がん'],
    kun: ['かお'],
    jlpt: 3,
    quizAnswers: ['Face', 'Water Route', 'Axe Radical (no. 69)', 'Restaurant'],
    similars: [
      {
        kanji: '頻',
        meaning: 'repeatedly',
      },
      {
        kanji: '親',
        meaning: 'parent',
      },
      {
        kanji: '質',
        meaning: 'substance',
      },
      {
        kanji: '頑',
        meaning: 'stubborn',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '賓',
        meaning: 'V.I.P.',
      },
      {
        kanji: '類',
        meaning: 'sort',
      },
      {
        kanji: '韻',
        meaning: 'rhyme',
      },
      {
        kanji: '題',
        meaning: 'topic',
      },
      {
        kanji: '寮',
        meaning: 'dormitory',
      },
    ],
    usedIn: [
      {
        kanji: '顔',
        reading: 'かお',
        meanings: 'face',
      },
      {
        kanji: '顔合わせ',
        reading: 'かおあわせ',
        meanings: 'meeting together',
      },
      {
        kanji: 'いい顔',
        reading: 'いいかお',
        meanings: 'big-shot',
      },
      {
        kanji: '涼しい顔',
        reading: 'すずしいかお',
        meanings: 'nonchalant air',
      },
      {
        kanji: '顔',
        reading: 'かお',
        meanings: 'face',
      },
      {
        kanji: '顔色',
        reading: 'かおいろ',
        meanings: 'complexion',
      },
      {
        kanji: '美顔',
        reading: 'びがん',
        meanings: 'beautiful face',
      },
      {
        kanji: '童顔',
        reading: 'どうがん',
        meanings: "child's face",
      },
    ],
  },
  {
    kanjiName: '最',
    strokes: 12,
    grade: 4,
    freq: 82,
    meanings: ['Utmost', 'Most', 'Extreme'],
    on: ['さい', 'しゅ'],
    kun: ['もっと.も', 'つま'],
    jlpt: 3,
    quizAnswers: ['Staple', 'Utmost', 'Woodblock Printing', 'Repudiate'],
    similars: [
      {
        kanji: '撮',
        meaning: 'snapshot',
      },
      {
        kanji: '閑',
        meaning: 'leisure',
      },
      {
        kanji: '取',
        meaning: 'take',
      },
      {
        kanji: '是',
        meaning: 'just so',
      },
      {
        kanji: '問',
        meaning: 'question',
      },
      {
        kanji: '眼',
        meaning: 'eyeball',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '聞',
        meaning: 'hear',
      },
      {
        kanji: '閉',
        meaning: 'closed',
      },
      {
        kanji: '門',
        meaning: 'gate',
      },
    ],
    usedIn: [
      {
        kanji: '最も',
        reading: 'もっとも',
        meanings: 'most',
      },
      {
        kanji: '最も近い共通祖先',
        reading: 'もっともちかいきょうつうそせん',
        meanings: 'most recent common ancestor',
      },
      {
        kanji: '最',
        reading: 'さい',
        meanings: 'the most',
      },
      {
        kanji: '最悪',
        reading: 'さいあく',
        meanings: 'worst',
      },
    ],
  },
  {
    kanjiName: '争',
    strokes: 6,
    grade: 4,
    freq: 271,
    meanings: ['Contend', 'Dispute', 'Argue'],
    on: ['そう'],
    kun: ['あらそ.う', 'いか.でか'],
    jlpt: 3,
    quizAnswers: ['Tremble', 'Peace-loving', 'Low Price', 'Contend'],
    similars: [
      {
        kanji: '浄',
        meaning: 'clean',
      },
      {
        kanji: '行',
        meaning: 'going',
      },
      {
        kanji: '毛',
        meaning: 'fur',
      },
      {
        kanji: '手',
        meaning: 'hand',
      },
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '包',
        meaning: 'wrap',
      },
      {
        kanji: '宇',
        meaning: 'eaves',
      },
      {
        kanji: '件',
        meaning: 'affair',
      },
    ],
    usedIn: [
      {
        kanji: '争う',
        reading: 'あらそう',
        meanings: 'to compete',
      },
      {
        kanji: '争うべからざる',
        reading: 'あらそうべからざる',
        meanings: 'indisputable',
      },
      {
        kanji: '争奪',
        reading: 'そうだつ',
        meanings: 'struggle (for)',
      },
      {
        kanji: '争議',
        reading: 'そうぎ',
        meanings: 'dispute',
      },
      {
        kanji: '係争',
        reading: 'けいそう',
        meanings: 'dispute',
      },
      {
        kanji: '政争',
        reading: 'せいそう',
        meanings: 'political strife',
      },
    ],
  },
  {
    kanjiName: '伝',
    strokes: 6,
    grade: 4,
    freq: 416,
    meanings: [
      'Transmit',
      'Go Along',
      'Walk Along',
      'Follow',
      'Report',
      'Communicate',
      'Legend',
      'Tradition',
    ],
    on: ['でん', 'てん'],
    kun: ['つた.わる', 'つた.える', 'つた.う', 'つだ.う', '-づた.い', 'つて'],
    jlpt: 3,
    quizAnswers: ['Wring', 'Hole', 'Transmit', 'Honor'],
    similars: [
      {
        kanji: '会',
        meaning: 'meeting',
      },
      {
        kanji: '伐',
        meaning: 'fell',
      },
      {
        kanji: '代',
        meaning: 'substitute',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '付',
        meaning: 'adhere',
      },
      {
        kanji: '仏',
        meaning: 'Buddha',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '余',
        meaning: 'too much',
      },
    ],
    usedIn: [
      {
        kanji: '伝わる',
        reading: 'つたわる',
        meanings: 'to spread (of a rumour',
      },
      {
        kanji: '伝える',
        reading: 'つたえる',
        meanings: 'to convey',
      },
      {
        kanji: '伝う',
        reading: 'つたう',
        meanings: 'to go along',
      },
      {
        kanji: '伝',
        reading: 'つて',
        meanings: 'means of making contact',
      },
      {
        kanji: '伝言',
        reading: 'つてこと',
        meanings: '(verbal) message',
      },
      {
        kanji: '風のつて',
        reading: 'かぜのつて',
        meanings: 'hearsay',
      },
      {
        kanji: '伝',
        reading: 'でん',
        meanings: 'legend',
      },
      {
        kanji: '伝記',
        reading: 'でんき',
        meanings: 'biography',
      },
      {
        kanji: '駅伝',
        reading: 'えきでん',
        meanings: 'long-distance relay race',
      },
      {
        kanji: '評伝',
        reading: 'ひょうでん',
        meanings: 'critical biography',
      },
      {
        kanji: '転手',
        reading: 'てんじゅ',
        meanings: 'tuning peg (on a biwa or shamisen)',
      },
      {
        kanji: '伝奏',
        reading: 'てんそう',
        meanings: 'delivering a message to the emperor',
      },
    ],
  },
  {
    kanjiName: '共',
    strokes: 6,
    grade: 4,
    freq: 174,
    meanings: ['Together', 'Both', 'Neither', 'All', 'And', 'Alike', 'With'],
    on: ['きょう'],
    kun: ['とも', 'とも.に', '-ども'],
    jlpt: 3,
    quizAnswers: ['Together', 'Catch (cold, Fire)', 'Weak (tea)', 'Universal'],
    similars: [
      {
        kanji: '茂',
        meaning: 'overgrown',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
      {
        kanji: '坑',
        meaning: 'pit',
      },
      {
        kanji: '芸',
        meaning: 'technique',
      },
      {
        kanji: '洪',
        meaning: 'deluge',
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
      {
        kanji: '芋',
        meaning: 'potato',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '去',
        meaning: 'gone',
      },
      {
        kanji: '拡',
        meaning: 'broaden',
      },
    ],
    usedIn: [
      {
        kanji: '共',
        reading: 'とも',
        meanings: 'together with',
      },
      {
        kanji: '共に',
        reading: 'ともに',
        meanings: 'together',
      },
      {
        kanji: '送料共',
        reading: 'そうりょうとも',
        meanings: 'including postage',
      },
      {
        kanji: '母子とも',
        reading: 'ぼしとも',
        meanings: 'both mother and child',
      },
      {
        kanji: '共に',
        reading: 'ともに',
        meanings: 'together',
      },
      {
        kanji: '共にする',
        reading: 'ともにする',
        meanings: 'to do together',
      },
      {
        kanji: '共演',
        reading: 'きょうえん',
        meanings: 'appearing together (in a film',
      },
      {
        kanji: '共栄',
        reading: 'きょうえい',
        meanings: 'mutual prosperity',
      },
      {
        kanji: '反共',
        reading: 'はんきょう',
        meanings: 'anticommunism',
      },
      {
        kanji: '中共',
        reading: 'ちゅうきょう',
        meanings: 'Chinese Communist Party',
      },
    ],
  },
  {
    kanjiName: '好',
    strokes: 6,
    grade: 4,
    freq: 423,
    meanings: ['Fond', 'Pleasing', 'Like Something'],
    on: ['こう'],
    kun: ['この.む', 'す.く', 'よ.い', 'い.い'],
    jlpt: 3,
    quizAnswers: ['Fond', 'Ask', 'Ruin', 'Accompany'],
    similars: [
      {
        kanji: '存',
        meaning: 'exist',
      },
      {
        kanji: '妊',
        meaning: 'pregnancy',
      },
      {
        kanji: '姓',
        meaning: 'surname',
      },
      {
        kanji: '学',
        meaning: 'study',
      },
      {
        kanji: '子',
        meaning: 'child',
      },
      {
        kanji: '如',
        meaning: 'likeness',
      },
      {
        kanji: '字',
        meaning: 'character',
      },
      {
        kanji: '季',
        meaning: 'seasons',
      },
      {
        kanji: '妃',
        meaning: 'queen',
      },
      {
        kanji: '奴',
        meaning: 'guy',
      },
    ],
    usedIn: [
      {
        kanji: '好む',
        reading: 'このむ',
        meanings: 'to like',
      },
      {
        kanji: '好むと好まざるとにかかわらず',
        reading: 'このむとこのまざるとにかかわらず',
        meanings: 'whether one likes it or not',
      },
      {
        kanji: '好く',
        reading: 'すく',
        meanings: 'to like',
      },
      {
        kanji: '良い',
        reading: 'よい',
        meanings: 'good',
      },
      {
        kanji: 'いい男',
        reading: 'いいおとこ',
        meanings: 'handsome man',
      },
      {
        kanji: 'いい加減',
        reading: 'いいかげん',
        meanings: 'irresponsible',
      },
      {
        kanji: 'いい男',
        reading: 'いいおとこ',
        meanings: 'handsome man',
      },
      {
        kanji: '好',
        reading: 'こう',
        meanings: 'good',
      },
      {
        kanji: '好意',
        reading: 'こうい',
        meanings: 'kindness',
      },
      {
        kanji: '友好',
        reading: 'ゆうこう',
        meanings: 'friendship',
      },
      {
        kanji: '同好',
        reading: 'どうこう',
        meanings: 'similar tastes',
      },
    ],
  },
  {
    kanjiName: '成',
    strokes: 6,
    grade: 4,
    freq: 116,
    meanings: ['Turn Into', 'Become', 'Get', 'Grow', 'Elapse', 'Reach'],
    on: ['せい', 'じょう'],
    kun: ['な.る', 'な.す', '-な.す'],
    jlpt: 3,
    quizAnswers: ['Sect', 'Spinning', 'Turn Into', 'Witch'],
    similars: [
      {
        kanji: '我',
        meaning: 'ego',
      },
      {
        kanji: '城',
        meaning: 'castle',
      },
      {
        kanji: '伐',
        meaning: 'fell',
      },
      {
        kanji: '戒',
        meaning: 'commandment',
      },
      {
        kanji: '余',
        meaning: 'too much',
      },
      {
        kanji: '威',
        meaning: 'intimidate',
      },
      {
        kanji: '方',
        meaning: 'direction',
      },
      {
        kanji: '代',
        meaning: 'substitute',
      },
      {
        kanji: '示',
        meaning: 'show',
      },
      {
        kanji: '兆',
        meaning: 'portent',
      },
    ],
    usedIn: [
      {
        kanji: '成る',
        reading: 'なる',
        meanings: 'to become',
      },
      {
        kanji: '成るべく',
        reading: 'なるべく',
        meanings: 'as (much) as possible',
      },
      {
        kanji: '為す',
        reading: 'なす',
        meanings: 'to build up',
      },
      {
        kanji: 'なす角',
        reading: 'なすかく',
        meanings: 'formed angle',
      },
      {
        kanji: '成果',
        reading: 'せいか',
        meanings: '(good) result',
      },
      {
        kanji: '成案',
        reading: 'せいあん',
        meanings: 'definite plan',
      },
      {
        kanji: '合成',
        reading: 'ごうせい',
        meanings: 'composition',
      },
      {
        kanji: '集大成',
        reading: 'しゅうたいせい',
        meanings: '(large) compilation',
      },
      {
        kanji: '成仏',
        reading: 'じょうぶつ',
        meanings: 'attaining Buddhahood',
      },
      {
        kanji: '成就',
        reading: 'じょうじゅ',
        meanings: 'fulfillment',
      },
    ],
  },
  {
    kanjiName: '老',
    strokes: 6,
    grade: 4,
    freq: 803,
    meanings: ['Old Man', 'Old Age', 'Grow Old'],
    on: ['ろう'],
    kun: ['お.いる', 'ふ.ける'],
    jlpt: 3,
    quizAnswers: ['Old Man', 'Cheer Up', 'History', 'Outskirts'],
    similars: [
      {
        kanji: '考',
        meaning: 'consider',
      },
      {
        kanji: '花',
        meaning: 'flower',
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)',
      },
      {
        kanji: '赤',
        meaning: 'red',
      },
      {
        kanji: '売',
        meaning: 'sell',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '表',
        meaning: 'surface',
      },
      {
        kanji: '孝',
        meaning: 'filial piety',
      },
      {
        kanji: '坂',
        meaning: 'slope',
      },
    ],
    usedIn: [
      {
        kanji: '老いる',
        reading: 'おいる',
        meanings: 'to age',
      },
      {
        kanji: '老ける',
        reading: 'ふける',
        meanings: 'to age',
      },
      {
        kanji: '老',
        reading: 'ろう',
        meanings: 'old age',
      },
      {
        kanji: '老化',
        reading: 'ろうか',
        meanings: 'ageing',
      },
      {
        kanji: '養老',
        reading: 'ようろう',
        meanings: 'making provision for the elderly',
      },
      {
        kanji: '敬老',
        reading: 'けいろう',
        meanings: 'respect for the aged',
      },
    ],
  },
  {
    kanjiName: '位',
    strokes: 7,
    grade: 4,
    freq: 276,
    meanings: ['Rank', 'Grade', 'Throne', 'Crown', 'About', 'Some'],
    on: ['い'],
    kun: ['くらい', 'ぐらい'],
    jlpt: 3,
    quizAnswers: ['Resonant', 'Summarize', 'Rank', 'Recur'],
    similars: [
      {
        kanji: '立',
        meaning: 'stand up',
      },
      {
        kanji: '似',
        meaning: 'becoming',
      },
      {
        kanji: '倍',
        meaning: 'double',
      },
      {
        kanji: '粒',
        meaning: 'grains',
      },
      {
        kanji: '泣',
        meaning: 'cry',
      },
      {
        kanji: '佳',
        meaning: 'excellent',
      },
      {
        kanji: '金',
        meaning: 'gold',
      },
      {
        kanji: '依',
        meaning: 'reliant',
      },
      {
        kanji: '並',
        meaning: 'row',
      },
      {
        kanji: '倣',
        meaning: 'emulate',
      },
    ],
    usedIn: [
      {
        kanji: '位',
        reading: 'くらい',
        meanings: 'throne',
      },
      {
        kanji: '位が昇る',
        reading: 'くらいがのぼる',
        meanings: 'to rise in rank',
      },
      {
        kanji: 'どれ位',
        reading: 'どれくらい',
        meanings: 'how long',
      },
      {
        kanji: '申し訳ないくらい',
        reading: 'もうしわけないくらい',
        meanings: 'to the extent it makes one feel apologetic',
      },
      {
        kanji: 'どれ位',
        reading: 'どれくらい',
        meanings: 'how long',
      },
      {
        kanji: '申し訳ないくらい',
        reading: 'もうしわけないくらい',
        meanings: 'to the extent it makes one feel apologetic',
      },
      {
        kanji: '位',
        reading: 'い',
        meanings: 'rank',
      },
      {
        kanji: '位置',
        reading: 'いち',
        meanings: 'place',
      },
      {
        kanji: '一位',
        reading: 'いちい',
        meanings: 'first place',
      },
      {
        kanji: '高位',
        reading: 'こうい',
        meanings: 'dignity',
      },
    ],
  },
  {
    kanjiName: '初',
    strokes: 7,
    grade: 4,
    freq: 152,
    meanings: ['First Time', 'Beginning'],
    on: ['しょ'],
    kun: [
      'はじ.め',
      'はじ.めて',
      'はつ',
      'はつ-',
      'うい-',
      '-そ.める',
      '-ぞ.め',
    ],
    jlpt: 3,
    quizAnswers: ['Preferably', 'First Time', 'Strong', 'Stream'],
    similars: [
      {
        kanji: '労',
        meaning: 'labor',
      },
      {
        kanji: '礼',
        meaning: 'salute',
      },
      {
        kanji: '褐',
        meaning: 'brown',
      },
      {
        kanji: '裕',
        meaning: 'abundant',
      },
      {
        kanji: '粉',
        meaning: 'flour',
      },
      {
        kanji: '祈',
        meaning: 'pray',
      },
      {
        kanji: '勉',
        meaning: 'exertion',
      },
      {
        kanji: '券',
        meaning: 'ticket',
      },
      {
        kanji: '紛',
        meaning: 'distract',
      },
      {
        kanji: '被',
        meaning: 'incur',
      },
    ],
    usedIn: [
      {
        kanji: '始め',
        reading: 'はじめ',
        meanings: 'beginning',
      },
      {
        kanji: '初めて',
        reading: 'はじめて',
        meanings: 'for the first time',
      },
      {
        kanji: '月初め',
        reading: 'つきはじめ',
        meanings: 'beginning of the month',
      },
      {
        kanji: '初めて',
        reading: 'はじめて',
        meanings: 'for the first time',
      },
      {
        kanji: '初',
        reading: 'はつ',
        meanings: 'first',
      },
      {
        kanji: '初夏',
        reading: 'しょか',
        meanings: 'early summer',
      },
      {
        kanji: '業界初',
        reading: 'ぎょうかいはつ',
        meanings: "the industry's first ...",
      },
      {
        kanji: '人生初',
        reading: 'じんせいはつ',
        meanings: "(for the) first time in one's life",
      },
      {
        kanji: '初夏',
        reading: 'しょか',
        meanings: 'early summer',
      },
      {
        kanji: '初演',
        reading: 'しょえん',
        meanings: 'first performance',
      },
      {
        kanji: '年初',
        reading: 'ねんしょ',
        meanings: 'beginning of the year',
      },
      {
        kanji: '原初',
        reading: 'げんしょ',
        meanings: 'origin',
      },
    ],
  },
  {
    kanjiName: '利',
    strokes: 7,
    grade: 4,
    freq: 203,
    meanings: ['Profit', 'Advantage', 'Benefit'],
    on: ['り'],
    kun: ['き.く'],
    jlpt: 3,
    quizAnswers: ['Profit', 'Pig', 'Miscanthus Reed', 'Perfume'],
    similars: [
      {
        kanji: '和',
        meaning: 'harmony',
      },
      {
        kanji: '朴',
        meaning: 'crude',
      },
      {
        kanji: '私',
        meaning: 'private',
      },
      {
        kanji: '剣',
        meaning: 'sabre',
      },
      {
        kanji: '剰',
        meaning: 'surplus',
      },
      {
        kanji: '刻',
        meaning: 'engrave',
      },
      {
        kanji: '知',
        meaning: 'know',
      },
      {
        kanji: '刺',
        meaning: 'thorn',
      },
      {
        kanji: '制',
        meaning: 'system',
      },
      {
        kanji: '称',
        meaning: 'appellation',
      },
    ],
    usedIn: [
      {
        kanji: '効く',
        reading: 'きく',
        meanings: 'to be effective',
      },
      {
        kanji: '利',
        reading: 'り',
        meanings: 'advantage',
      },
      {
        kanji: '利上げ',
        reading: 'りあげ',
        meanings: 'increase in interest rates',
      },
      {
        kanji: '低利',
        reading: 'ていり',
        meanings: 'low interest rate',
      },
      {
        kanji: '水利',
        reading: 'すいり',
        meanings: 'utilization of water',
      },
    ],
  },
  {
    kanjiName: '努',
    strokes: 7,
    grade: 4,
    freq: 749,
    meanings: ['Toil', 'Diligent', 'As Much As Possible'],
    on: ['ど'],
    kun: ['つと.める'],
    jlpt: 3,
    quizAnswers: ['Infer', 'Toil', 'Keep (rain)out', 'Ditch'],
    similars: [
      {
        kanji: '奴',
        meaning: 'guy',
      },
      {
        kanji: '妙',
        meaning: 'exquisite',
      },
      {
        kanji: '妨',
        meaning: 'disturb',
      },
      {
        kanji: '分',
        meaning: 'part',
      },
      {
        kanji: '怒',
        meaning: 'angry',
      },
      {
        kanji: '券',
        meaning: 'ticket',
      },
      {
        kanji: '妹',
        meaning: 'younger sister',
      },
      {
        kanji: '姻',
        meaning: 'matrimony',
      },
      {
        kanji: '功',
        meaning: 'achievement',
      },
      {
        kanji: '好',
        meaning: 'fond',
      },
    ],
    usedIn: [
      {
        kanji: '努める',
        reading: 'つとめる',
        meanings: 'to endeavor (to do)',
      },
      {
        kanji: '努',
        reading: 'ど',
        meanings: 'third principle of the Eight Principles of Yong',
      },
      {
        kanji: '努力',
        reading: 'どりょく',
        meanings: 'effort',
      },
    ],
  },
  {
    kanjiName: '労',
    strokes: 7,
    grade: 4,
    freq: 398,
    meanings: ['Labor', 'Thank For', 'Reward For', 'Toil', 'Trouble'],
    on: ['ろう'],
    kun: [
      'ろう.する',
      'いたわ.る',
      'いた.ずき',
      'ねぎら',
      'つか.れる',
      'ねぎら.う',
    ],
    jlpt: 3,
    quizAnswers: ['Labor', 'Shirk', 'Idea', 'Installment'],
    similars: [
      {
        kanji: '栄',
        meaning: 'flourish',
      },
      {
        kanji: '受',
        meaning: 'accept',
      },
      {
        kanji: '学',
        meaning: 'study',
      },
      {
        kanji: '沈',
        meaning: 'sink',
      },
      {
        kanji: '劣',
        meaning: 'inferiority',
      },
      {
        kanji: '初',
        meaning: 'first time',
      },
      {
        kanji: '営',
        meaning: 'camp',
      },
      {
        kanji: '党',
        meaning: 'party',
      },
      {
        kanji: '効',
        meaning: 'merit',
      },
      {
        kanji: '覚',
        meaning: 'memorize',
      },
    ],
    usedIn: [
      {
        kanji: '労する',
        reading: 'ろうする',
        meanings: 'to work',
      },
      {
        kanji: '労る',
        reading: 'いたわる',
        meanings: 'to pity',
      },
      {
        kanji: '労き',
        reading: 'いたずき',
        meanings: 'pain',
      },
      {
        kanji: '労い',
        reading: 'ねぎらい',
        meanings: "expression of appreciation (for someone's efforts)",
      },
      {
        kanji: '労う',
        reading: 'ねぎらう',
        meanings: 'to show appreciation for (efforts',
      },
      {
        kanji: '労う',
        reading: 'ねぎらう',
        meanings: 'to show appreciation for (efforts',
      },
      {
        kanji: '労',
        reading: 'ろう',
        meanings: 'labor',
      },
      {
        kanji: '労組',
        reading: 'ろうそ',
        meanings: 'labor union',
      },
      {
        kanji: '国労',
        reading: 'こくろう',
        meanings: 'National Railway Workers Union',
      },
      {
        kanji: '功労',
        reading: 'こうろう',
        meanings: 'meritorious deed',
      },
    ],
  },
  {
    kanjiName: '命',
    strokes: 8,
    grade: 3,
    freq: 465,
    meanings: ['Fate', 'Command', 'Decree', 'Destiny', 'Life', 'Appoint'],
    on: ['めい', 'みょう'],
    kun: ['いのち'],
    jlpt: 3,
    quizAnswers: ['Absorb', 'Fate', 'Infer', 'Bad Luck'],
    similars: [
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '印',
        meaning: 'stamp',
      },
      {
        kanji: '含',
        meaning: 'contain',
      },
      {
        kanji: '使',
        meaning: 'use',
      },
      {
        kanji: '仲',
        meaning: 'go-between',
      },
      {
        kanji: '何',
        meaning: 'what',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '倹',
        meaning: 'frugal',
      },
      {
        kanji: '剣',
        meaning: 'sabre',
      },
    ],
    usedIn: [
      {
        kanji: '命',
        reading: 'いのち',
        meanings: 'life',
      },
      {
        kanji: '命からがら',
        reading: 'いのちからがら',
        meanings: 'for dear life',
      },
      {
        kanji: '貴い命',
        reading: 'たっといいのち',
        meanings: 'precious life',
      },
      {
        kanji: '露の命',
        reading: 'つゆのいのち',
        meanings: 'life as evanescent as the dew',
      },
      {
        kanji: '命',
        reading: 'めい',
        meanings: 'order',
      },
      {
        kanji: '命運',
        reading: 'めいうん',
        meanings: 'fate',
      },
      {
        kanji: '延命',
        reading: 'えんめい',
        meanings: 'keeping alive longer',
      },
      {
        kanji: '十月革命',
        reading: 'じゅうがつかくめい',
        meanings: 'October Revolution',
      },
      {
        kanji: '命婦',
        reading: 'みょうぶ',
        meanings: 'title for high-ranking court ladies',
      },
      {
        kanji: '延命',
        reading: 'えんめい',
        meanings: 'keeping alive longer',
      },
      {
        kanji: '安心立命',
        reading: 'あんしんりつめい',
        meanings: 'spiritual peace and enlightenment',
      },
    ],
  },
  {
    kanjiName: '放',
    strokes: 8,
    grade: 3,
    freq: 288,
    meanings: [
      'Set Free',
      'Release',
      'Fire',
      'Shoot',
      'Emit',
      'Banish',
      'Liberate',
    ],
    on: ['ほう'],
    kun: ['はな.す', '-っぱな.し', 'はな.つ', 'はな.れる', 'こ.く', 'ほう.る'],
    jlpt: 3,
    quizAnswers: ['Exclude', 'Set Free', 'Pave', 'Decline'],
    similars: [
      {
        kanji: '旅',
        meaning: 'trip',
      },
      {
        kanji: '倣',
        meaning: 'emulate',
      },
      {
        kanji: '族',
        meaning: 'tribe',
      },
      {
        kanji: '旋',
        meaning: 'rotation',
      },
      {
        kanji: '施',
        meaning: 'give',
      },
      {
        kanji: '契',
        meaning: 'pledge',
      },
      {
        kanji: '赦',
        meaning: 'pardon',
      },
      {
        kanji: '攻',
        meaning: 'aggression',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '衣',
        meaning: 'garment',
      },
    ],
    usedIn: [
      {
        kanji: '放す',
        reading: 'はなす',
        meanings: 'to release',
      },
      {
        kanji: '放つ',
        reading: 'はなつ',
        meanings: 'to fire (gun',
      },
      {
        kanji: '放れる',
        reading: 'はなれる',
        meanings: 'to get free (from)',
      },
      {
        kanji: '放く',
        reading: 'こく',
        meanings: 'to expel (from the body)',
      },
      {
        kanji: '放る',
        reading: 'ほうる',
        meanings: 'to throw',
      },
      {
        kanji: '放火',
        reading: 'ほうか',
        meanings: 'arson',
      },
      {
        kanji: '放映',
        reading: 'ほうえい',
        meanings: 'televising',
      },
      {
        kanji: '豪放',
        reading: 'ごうほう',
        meanings: 'largehearted',
      },
      {
        kanji: '性解放',
        reading: 'せいかいほう',
        meanings: 'sexual liberation',
      },
    ],
  },
  {
    kanjiName: '昔',
    strokes: 8,
    grade: 3,
    freq: 1197,
    meanings: ['Once Upon A Time', 'Antiquity', 'Old Times'],
    on: ['せき', 'しゃく'],
    kun: ['むかし'],
    jlpt: 3,
    quizAnswers: ['Once Upon A Time', 'Irrigate', 'Level', 'Likeness'],
    similars: [
      {
        kanji: '借',
        meaning: 'borrow',
      },
      {
        kanji: '垣',
        meaning: 'hedge',
      },
      {
        kanji: '苗',
        meaning: 'seedling',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '著',
        meaning: 'renowned',
      },
      {
        kanji: '黄',
        meaning: 'yellow',
      },
      {
        kanji: '措',
        meaning: 'set aside',
      },
      {
        kanji: '惜',
        meaning: 'pity',
      },
      {
        kanji: '音',
        meaning: 'sound',
      },
      {
        kanji: '普',
        meaning: 'universal',
      },
    ],
    usedIn: [
      {
        kanji: '昔',
        reading: 'むかし',
        meanings: 'the old days',
      },
      {
        kanji: '昔話',
        reading: 'むかしばなし',
        meanings: 'old tale',
      },
      {
        kanji: '一昔',
        reading: 'ひとむかし',
        meanings: 'an age (ago)',
      },
      {
        kanji: '遥か昔',
        reading: 'はるかむかし',
        meanings: 'long ago',
      },
      {
        kanji: '昔時',
        reading: 'せきじ',
        meanings: 'old times',
      },
      {
        kanji: '昔日',
        reading: 'せきじつ',
        meanings: 'old days',
      },
      {
        kanji: '今昔',
        reading: 'こんじゃく',
        meanings: 'past and present',
      },
      {
        kanji: '往昔',
        reading: 'おうせき',
        meanings: 'ancient times',
      },
    ],
  },
  {
    kanjiName: '育',
    strokes: 8,
    grade: 3,
    freq: 369,
    meanings: ['Bring Up', 'Grow Up', 'Raise', 'Rear'],
    on: ['いく'],
    kun: ['そだ.つ', 'そだ.ち', 'そだ.てる', 'はぐく.む'],
    jlpt: 3,
    quizAnswers: ['Bring Up', 'Country', 'Frequent', 'Bout'],
    similars: [
      {
        kanji: '有',
        meaning: 'possess',
      },
      {
        kanji: '肖',
        meaning: 'resemblance',
      },
      {
        kanji: '青',
        meaning: 'blue',
      },
      {
        kanji: '畜',
        meaning: 'livestock',
      },
      {
        kanji: '宵',
        meaning: 'wee hours',
      },
      {
        kanji: '骨',
        meaning: 'skeleton',
      },
      {
        kanji: '痛',
        meaning: 'pain',
      },
      {
        kanji: '背',
        meaning: 'stature',
      },
      {
        kanji: '庸',
        meaning: 'commonplace',
      },
      {
        kanji: '撤',
        meaning: 'remove',
      },
    ],
    usedIn: [
      {
        kanji: '育つ',
        reading: 'そだつ',
        meanings: 'to be raised (e.g. child)',
      },
      {
        kanji: '育ち',
        reading: 'そだち',
        meanings: 'growth',
      },
      {
        kanji: '育ち盛り',
        reading: 'そだちざかり',
        meanings: 'growth period (in children)',
      },
      {
        kanji: '育てる',
        reading: 'そだてる',
        meanings: 'to raise',
      },
      {
        kanji: '育む',
        reading: 'はぐくむ',
        meanings: 'to raise',
      },
      {
        kanji: '育児',
        reading: 'いくじ',
        meanings: 'childcare',
      },
      {
        kanji: '育英',
        reading: 'いくえい',
        meanings: 'education of gifted young people',
      },
      {
        kanji: '性教育',
        reading: 'せいきょういく',
        meanings: 'sex education',
      },
      {
        kanji: '社会教育',
        reading: 'しゃかいきょういく',
        meanings: 'social education',
      },
    ],
  },
  {
    kanjiName: '指',
    strokes: 9,
    grade: 3,
    freq: 155,
    meanings: [
      'Finger',
      'Point To',
      'Indicate',
      'Put Into',
      'Play (chess)',
      'Measure (ruler)',
    ],
    on: ['し'],
    kun: ['ゆび', 'さ.す', '-さ.し'],
    jlpt: 3,
    quizAnswers: ['Figured Cloth', 'Finger', 'Inspect', 'Coating'],
    similars: [
      {
        kanji: '拍',
        meaning: 'clap',
      },
      {
        kanji: '挿',
        meaning: 'insert',
      },
      {
        kanji: '押',
        meaning: 'push',
      },
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
      {
        kanji: '抽',
        meaning: 'pluck',
      },
      {
        kanji: '担',
        meaning: 'shouldering',
      },
      {
        kanji: '旨',
        meaning: 'delicious',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '春',
        meaning: 'springtime',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
    ],
    usedIn: [
      {
        kanji: '指',
        reading: 'ゆび',
        meanings: 'finger',
      },
      {
        kanji: '指先',
        reading: 'ゆびさき',
        meanings: 'fingertip',
      },
      {
        kanji: '中指',
        reading: 'なかゆび',
        meanings: 'middle finger',
      },
      {
        kanji: '食指',
        reading: 'しょくし',
        meanings: 'index finger',
      },
      {
        kanji: '指す',
        reading: 'さす',
        meanings: 'to point',
      },
      {
        kanji: '刺股',
        reading: 'さすまた',
        meanings: 'sasumata',
      },
      {
        kanji: '指揮者',
        reading: 'しきしゃ',
        meanings: '(musical) conductor',
      },
      {
        kanji: '指揮',
        reading: 'しき',
        meanings: 'command',
      },
      {
        kanji: '中指',
        reading: 'なかゆび',
        meanings: 'middle finger',
      },
      {
        kanji: '食指',
        reading: 'しょくし',
        meanings: 'index finger',
      },
    ],
  },
  {
    kanjiName: '神',
    strokes: 9,
    grade: 3,
    freq: 347,
    meanings: ['Gods', 'Mind', 'Soul'],
    on: ['しん', 'じん'],
    kun: ['かみ', 'かん-', 'こう-'],
    jlpt: 3,
    quizAnswers: ['Gods', 'Gay', 'Fertile', 'Nearby'],
    similars: [
      {
        kanji: '視',
        meaning: 'inspection',
      },
      {
        kanji: '禅',
        meaning: 'Zen',
      },
      {
        kanji: '裸',
        meaning: 'naked',
      },
      {
        kanji: '伸',
        meaning: 'expand',
      },
      {
        kanji: '恒',
        meaning: 'constancy',
      },
      {
        kanji: '補',
        meaning: 'supplement',
      },
      {
        kanji: '岬',
        meaning: 'headland',
      },
      {
        kanji: '祖',
        meaning: 'ancestor',
      },
      {
        kanji: '紳',
        meaning: 'sire',
      },
      {
        kanji: '悼',
        meaning: 'lament',
      },
    ],
    usedIn: [
      {
        kanji: '神',
        reading: 'かみ',
        meanings: 'god',
      },
      {
        kanji: '神様',
        reading: 'かみさま',
        meanings: 'God',
      },
      {
        kanji: '大神',
        reading: 'おおかみ',
        meanings: 'god',
      },
      {
        kanji: 'ギ神',
        reading: 'ぎかみ',
        meanings: 'Greek mythology',
      },
      {
        kanji: '神',
        reading: 'しん',
        meanings: 'spirit',
      },
      {
        kanji: '神学',
        reading: 'しんがく',
        meanings: 'theology',
      },
      {
        kanji: '鬼神',
        reading: 'きしん',
        meanings: 'fierce god',
      },
      {
        kanji: '祭神',
        reading: 'さいじん',
        meanings: 'enshrined deity',
      },
      {
        kanji: '神',
        reading: 'しん',
        meanings: 'spirit',
      },
      {
        kanji: '神宮',
        reading: 'じんぐう',
        meanings:
          'high-status Shinto shrine with connection to imperial family',
      },
      {
        kanji: '天神',
        reading: 'てんじん',
        meanings: 'heavenly god',
      },
      {
        kanji: '石神',
        reading: 'しゃくじん',
        meanings: 'stone which is worshipped',
      },
    ],
  },
  {
    kanjiName: '追',
    strokes: 9,
    grade: 3,
    freq: 411,
    meanings: ['Chase', 'Drive Away', 'Follow', 'Pursue', 'Meanwhile'],
    on: ['つい'],
    kun: ['お.う'],
    jlpt: 3,
    quizAnswers: ['Moan', 'Excel', 'Take By Force', 'Chase'],
    similars: [
      {
        kanji: '帥',
        meaning: 'commander',
      },
      {
        kanji: '進',
        meaning: 'advance',
      },
      {
        kanji: '遣',
        meaning: 'dispatch',
      },
      {
        kanji: '造',
        meaning: 'create',
      },
      {
        kanji: '速',
        meaning: 'quick',
      },
      {
        kanji: '師',
        meaning: 'expert',
      },
      {
        kanji: '迫',
        meaning: 'urge',
      },
      {
        kanji: '過',
        meaning: 'overdo',
      },
      {
        kanji: '適',
        meaning: 'suitable',
      },
      {
        kanji: '透',
        meaning: 'transparent',
      },
    ],
    usedIn: [
      {
        kanji: '追う',
        reading: 'おう',
        meanings: 'to chase',
      },
      {
        kanji: '追手門学院大学',
        reading: 'おうてもんがくいんだいがく',
        meanings: 'Otemon Gakuin University',
      },
      {
        kanji: '追求',
        reading: 'ついきゅう',
        meanings: 'pursuit (of a goal',
      },
      {
        kanji: '追加',
        reading: 'ついか',
        meanings: 'addition',
      },
      {
        kanji: '訴追',
        reading: 'そつい',
        meanings: 'prosecution',
      },
      {
        kanji: '猛追',
        reading: 'もうつい',
        meanings: 'hot pursuit',
      },
    ],
  },
  {
    kanjiName: '戦',
    strokes: 13,
    grade: 4,
    freq: 78,
    meanings: ['War', 'Battle', 'Match'],
    on: ['せん'],
    kun: ['いくさ', 'たたか.う', 'おのの.く', 'そよ.ぐ', 'わなな.く'],
    jlpt: 3,
    quizAnswers: ['Peak', 'Measuring Box', 'War', 'Sue'],
    similars: [
      {
        kanji: '巣',
        meaning: 'nest',
      },
      {
        kanji: '単',
        meaning: 'simple',
      },
      {
        kanji: '獣',
        meaning: 'animal',
      },
      {
        kanji: '転',
        meaning: 'revolve',
      },
      {
        kanji: '載',
        meaning: 'ride',
      },
      {
        kanji: '湯',
        meaning: 'hot water',
      },
      {
        kanji: '閥',
        meaning: 'clique',
      },
      {
        kanji: '漸',
        meaning: 'steadily',
      },
      {
        kanji: '彰',
        meaning: 'patent',
      },
      {
        kanji: '漂',
        meaning: 'drift',
      },
    ],
    usedIn: [
      {
        kanji: '戦',
        reading: 'いくさ',
        meanings: 'war',
      },
      {
        kanji: '戦場',
        reading: 'せんじょう',
        meanings: 'battlefield',
      },
      {
        kanji: '負け戦',
        reading: 'まけいくさ',
        meanings: 'losing a battle',
      },
      {
        kanji: '野合戦',
        reading: 'のがっせん',
        meanings: 'battle in the open',
      },
      {
        kanji: '戦う',
        reading: 'たたかう',
        meanings: 'to make war (on)',
      },
      {
        kanji: '戦く',
        reading: 'おののく',
        meanings: 'to shake (from fear',
      },
      {
        kanji: '戦ぐ',
        reading: 'そよぐ',
        meanings: 'to rustle',
      },
      {
        kanji: '戦慄く',
        reading: 'わななく',
        meanings: 'to tremble',
      },
      {
        kanji: '戦',
        reading: 'せん',
        meanings: 'war',
      },
      {
        kanji: '戦域',
        reading: 'せんいき',
        meanings: 'war area',
      },
      {
        kanji: '開戦',
        reading: 'かいせん',
        meanings: 'outbreak of war',
      },
      {
        kanji: '回戦',
        reading: 'かいせん',
        meanings: 'event with ... rounds',
      },
    ],
  },
  {
    kanjiName: '良',
    strokes: 7,
    grade: 4,
    freq: 501,
    meanings: ['Good', 'Pleasing', 'Skilled'],
    on: ['りょう'],
    kun: ['よ.い', '-よ.い', 'い.い', '-い.い'],
    jlpt: 3,
    quizAnswers: ['Good', 'Government Office', 'Estimate', 'Hamper'],
    similars: [
      {
        kanji: '食',
        meaning: 'eat',
      },
      {
        kanji: '浪',
        meaning: 'wandering',
      },
      {
        kanji: '娘',
        meaning: 'daughter',
      },
      {
        kanji: '限',
        meaning: 'limit',
      },
      {
        kanji: '恨',
        meaning: 'regret',
      },
      {
        kanji: '朗',
        meaning: 'melodious',
      },
      {
        kanji: '飢',
        meaning: 'hungry',
      },
      {
        kanji: '根',
        meaning: 'root',
      },
      {
        kanji: '飯',
        meaning: 'meal',
      },
      {
        kanji: '飲',
        meaning: 'drink',
      },
    ],
    usedIn: [
      {
        kanji: '良い',
        reading: 'よい',
        meanings: 'good',
      },
      {
        kanji: 'いい男',
        reading: 'いいおとこ',
        meanings: 'handsome man',
      },
      {
        kanji: 'いい塩梅に',
        reading: 'いいあんばいに',
        meanings: 'fortunately',
      },
      {
        kanji: 'いい男',
        reading: 'いいおとこ',
        meanings: 'handsome man',
      },
      {
        kanji: '良',
        reading: 'りょう',
        meanings: 'good (quality',
      },
      {
        kanji: '良好',
        reading: 'りょうこう',
        meanings: 'good',
      },
      {
        kanji: '優良',
        reading: 'ゆうりょう',
        meanings: 'superior',
      },
      {
        kanji: '選良',
        reading: 'せんりょう',
        meanings: 'member of parliament',
      },
    ],
  },
  {
    kanjiName: '便',
    strokes: 9,
    grade: 4,
    freq: 729,
    meanings: [
      'Convenience',
      'Facility',
      'Excrement',
      'Feces',
      'Letter',
      'Chance',
    ],
    on: ['べん', 'びん'],
    kun: ['たよ.り'],
    jlpt: 3,
    quizAnswers: ['Crop Tax', 'Shipping Channel', 'Class', 'Convenience'],
    similars: [
      {
        kanji: '更',
        meaning: 'grow late',
      },
      {
        kanji: '硬',
        meaning: 'stiff',
      },
      {
        kanji: '復',
        meaning: 'restore',
      },
      {
        kanji: '陳',
        meaning: 'exhibit',
      },
      {
        kanji: '凍',
        meaning: 'frozen',
      },
      {
        kanji: '値',
        meaning: 'price',
      },
      {
        kanji: '東',
        meaning: 'east',
      },
      {
        kanji: '児',
        meaning: 'newborn babe',
      },
      {
        kanji: '棟',
        meaning: 'ridgepole',
      },
      {
        kanji: '順',
        meaning: 'obey',
      },
    ],
    usedIn: [
      {
        kanji: '便り',
        reading: 'たより',
        meanings: 'news',
      },
      {
        kanji: '便りがないのはよい便り',
        reading: 'たよりがないのはよいたより',
        meanings: 'no news is good news',
      },
      {
        kanji: '便',
        reading: 'べん',
        meanings: 'convenience',
      },
      {
        kanji: '便宜',
        reading: 'べんぎ',
        meanings: 'convenience',
      },
      {
        kanji: '利便',
        reading: 'りべん',
        meanings: 'convenience',
      },
      {
        kanji: '大便',
        reading: 'だいべん',
        meanings: 'feces',
      },
      {
        kanji: '便',
        reading: 'びん',
        meanings: 'flight (e.g. airline flight)',
      },
      {
        kanji: '便宜',
        reading: 'べんぎ',
        meanings: 'convenience',
      },
      {
        kanji: '穏便',
        reading: 'おんびん',
        meanings: 'gentle',
      },
      {
        kanji: '増便',
        reading: 'ぞうびん',
        meanings: 'increase in the number of flights',
      },
    ],
  },
  {
    kanjiName: '働',
    strokes: 13,
    grade: 4,
    freq: 417,
    meanings: ['Work', '(kokuji)'],
    on: ['どう'],
    kun: ['はたら.く'],
    jlpt: 3,
    quizAnswers: ['Drain', 'Work', 'Row', 'Sprout'],
    similars: [
      {
        kanji: '動',
        meaning: 'move',
      },
      {
        kanji: '傷',
        meaning: 'wound',
      },
      {
        kanji: '衝',
        meaning: 'collide',
      },
      {
        kanji: '重',
        meaning: 'heavy',
      },
      {
        kanji: '穂',
        meaning: 'ear',
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed',
      },
      {
        kanji: '種',
        meaning: 'species',
      },
      {
        kanji: '庫',
        meaning: 'warehouse',
      },
      {
        kanji: '厘',
        meaning: 'rin',
      },
      {
        kanji: '専',
        meaning: 'specialty',
      },
    ],
    usedIn: [
      {
        kanji: '働く',
        reading: 'はたらく',
        meanings: 'to work',
      },
      {
        kanji: '実働',
        reading: 'じつどう',
        meanings: 'actual work',
      },
      {
        kanji: '就働',
        reading: 'しゅうどう',
        meanings: 'being employed',
      },
    ],
  },
  {
    kanjiName: '庭',
    strokes: 10,
    grade: 3,
    freq: 816,
    meanings: ['Courtyard', 'Garden', 'Yard'],
    on: ['てい'],
    kun: ['にわ'],
    jlpt: 3,
    quizAnswers: ['Rested', 'Patterned', 'Bridegroom', 'Courtyard'],
    similars: [
      {
        kanji: '廷',
        meaning: 'courts',
      },
      {
        kanji: '族',
        meaning: 'tribe',
      },
      {
        kanji: '延',
        meaning: 'prolong',
      },
      {
        kanji: '度',
        meaning: 'degrees',
      },
      {
        kanji: '旋',
        meaning: 'rotation',
      },
      {
        kanji: '艇',
        meaning: 'rowboat',
      },
      {
        kanji: '廉',
        meaning: 'bargain',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '建',
        meaning: 'build',
      },
      {
        kanji: '技',
        meaning: 'skill',
      },
    ],
    usedIn: [
      {
        kanji: '庭',
        reading: 'にわ',
        meanings: 'garden',
      },
      {
        kanji: '庭木',
        reading: 'にわき',
        meanings: 'garden tree',
      },
      {
        kanji: '前庭',
        reading: 'ぜんてい',
        meanings: 'front garden',
      },
      {
        kanji: '奥庭',
        reading: 'おくにわ',
        meanings: 'inner garden',
      },
      {
        kanji: '庭園',
        reading: 'ていえん',
        meanings: 'garden',
      },
      {
        kanji: '庭球',
        reading: 'ていきゅう',
        meanings: 'tennis',
      },
      {
        kanji: '前庭',
        reading: 'ぜんてい',
        meanings: 'front garden',
      },
      {
        kanji: '営庭',
        reading: 'えいてい',
        meanings: 'open space within a barracks compound',
      },
    ],
  },
  {
    kanjiName: '息',
    strokes: 10,
    grade: 3,
    freq: 882,
    meanings: ['Breath', 'Respiration', 'Son', 'Interest (on Money)'],
    on: ['そく'],
    kun: ['いき'],
    jlpt: 3,
    quizAnswers: ['Breath', 'Firefly', 'Watch', 'Pit'],
    similars: [
      {
        kanji: '思',
        meaning: 'think',
      },
      {
        kanji: '恵',
        meaning: 'favor',
      },
      {
        kanji: '想',
        meaning: 'concept',
      },
      {
        kanji: '鳥',
        meaning: 'bird',
      },
      {
        kanji: '魚',
        meaning: 'fish',
      },
      {
        kanji: '悪',
        meaning: 'bad',
      },
      {
        kanji: '憩',
        meaning: 'recess',
      },
      {
        kanji: '意',
        meaning: 'idea',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '慮',
        meaning: 'prudence',
      },
    ],
    usedIn: [
      {
        kanji: '息',
        reading: 'いき',
        meanings: 'breath',
      },
      {
        kanji: '息切れ',
        reading: 'いきぎれ',
        meanings: 'shortness of breath',
      },
      {
        kanji: '鼻息',
        reading: 'はないき',
        meanings: 'nasal breathing',
      },
      {
        kanji: '寝息',
        reading: 'ねいき',
        meanings: 'breathing of a sleeping person',
      },
      {
        kanji: '息',
        reading: 'そく',
        meanings: 'son',
      },
      {
        kanji: '息子',
        reading: 'むすこ',
        meanings: 'son',
      },
      {
        kanji: '鼻息',
        reading: 'はないき',
        meanings: 'nasal breathing',
      },
      {
        kanji: '終息',
        reading: 'しゅうそく',
        meanings: 'cessation',
      },
    ],
  },
  {
    kanjiName: '流',
    strokes: 10,
    grade: 3,
    freq: 280,
    meanings: ['Current', 'A Sink', 'Flow', 'Forfeit'],
    on: ['りゅう', 'る'],
    kun: ['なが.れる', 'なが.れ', 'なが.す', '-なが.す'],
    jlpt: 3,
    quizAnswers: ['Current', 'Shallow', 'Disadvantage', 'Supervise'],
    similars: [
      {
        kanji: '泣',
        meaning: 'cry',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '法',
        meaning: 'method',
      },
      {
        kanji: '洗',
        meaning: 'wash',
      },
      {
        kanji: '充',
        meaning: 'allot',
      },
      {
        kanji: '沸',
        meaning: 'seethe',
      },
      {
        kanji: '硫',
        meaning: 'sulphur',
      },
      {
        kanji: '済',
        meaning: 'settle (debt',
      },
      {
        kanji: '液',
        meaning: 'fluid',
      },
      {
        kanji: '溶',
        meaning: 'melt',
      },
    ],
    usedIn: [
      {
        kanji: '流れる',
        reading: 'ながれる',
        meanings: 'to stream',
      },
      {
        kanji: '流れ',
        reading: 'ながれ',
        meanings: 'flow (of a fluid or gas)',
      },
      {
        kanji: '流れ込む',
        reading: 'ながれこむ',
        meanings: 'to flow into',
      },
      {
        kanji: '流す',
        reading: 'ながす',
        meanings: 'to drain',
      },
      {
        kanji: '流',
        reading: 'りゅう',
        meanings: 'way',
      },
      {
        kanji: '旒',
        reading: 'りゅう',
        meanings: 'counter for flags',
      },
      {
        kanji: '清流',
        reading: 'せいりゅう',
        meanings: 'clear stream',
      },
      {
        kanji: '火砕流',
        reading: 'かさいりゅう',
        meanings: 'pyroclastic flow',
      },
      {
        kanji: '流',
        reading: 'る',
        meanings: 'exile (second most severe of the five ritsuryō punishments)',
      },
      {
        kanji: '流刑',
        reading: 'りゅうけい',
        meanings: 'exile',
      },
      {
        kanji: '配流',
        reading: 'はいる',
        meanings: 'exile',
      },
      {
        kanji: '中流',
        reading: 'ちゅうる',
        meanings: 'banishment (to a somewhat distant province)',
      },
    ],
  },
  {
    kanjiName: '消',
    strokes: 10,
    grade: 3,
    freq: 345,
    meanings: ['Extinguish', 'Blow Out', 'Turn Off', 'Neutralize', 'Cancel'],
    on: ['しょう'],
    kun: ['き.える', 'け.す'],
    jlpt: 3,
    quizAnswers: ['Extinguish', 'Paragraph', 'Witty', 'Spur On'],
    similars: [
      {
        kanji: '宵',
        meaning: 'wee hours',
      },
      {
        kanji: '清',
        meaning: 'pure',
      },
      {
        kanji: '肖',
        meaning: 'resemblance',
      },
      {
        kanji: '滑',
        meaning: 'slippery',
      },
      {
        kanji: '情',
        meaning: 'feelings',
      },
      {
        kanji: '済',
        meaning: 'settle (debt',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
      {
        kanji: '硝',
        meaning: 'nitrate',
      },
      {
        kanji: '湖',
        meaning: 'lake',
      },
    ],
    usedIn: [
      {
        kanji: '消える',
        reading: 'きえる',
        meanings: 'to disappear',
      },
      {
        kanji: '消す',
        reading: 'けす',
        meanings: 'to erase',
      },
      {
        kanji: '消化',
        reading: 'しょうか',
        meanings: 'digestion (of food)',
      },
      {
        kanji: '消火',
        reading: 'しょうか',
        meanings: 'fire fighting',
      },
      {
        kanji: '費消',
        reading: 'ひしょう',
        meanings: 'spending',
      },
      {
        kanji: '曖昧性解消',
        reading: 'あいまいせいかいしょう',
        meanings: 'disambiguation',
      },
    ],
  },
  {
    kanjiName: '都',
    strokes: 11,
    grade: 3,
    freq: 123,
    meanings: ['Metropolis', 'Capital', 'All', 'Everything'],
    on: ['と', 'つ'],
    kun: ['みやこ'],
    jlpt: 3,
    quizAnswers: ['Compose', 'Metropolis', 'Void', 'Heart'],
    similars: [
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '項',
        meaning: 'paragraph',
      },
      {
        kanji: '煮',
        meaning: 'boil',
      },
      {
        kanji: '庫',
        meaning: 'warehouse',
      },
      {
        kanji: '理',
        meaning: 'logic',
      },
      {
        kanji: '草',
        meaning: 'grass',
      },
      {
        kanji: '現',
        meaning: 'present',
      },
      {
        kanji: '責',
        meaning: 'blame',
      },
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
    ],
    usedIn: [
      {
        kanji: '都',
        reading: 'みやこ',
        meanings: 'capital (esp. Kyoto',
      },
      {
        kanji: '都入り',
        reading: 'みやこいり',
        meanings: 'arriving in the capital',
      },
      {
        kanji: '京の都',
        reading: 'きょうのみやこ',
        meanings: 'Kyoto',
      },
      {
        kanji: '花の都',
        reading: 'はなのみやこ',
        meanings: 'City of Flowers (nickname for various cities',
      },
      {
        kanji: '都',
        reading: 'と',
        meanings: 'Metropolis (of Tokyo)',
      },
      {
        kanji: '都営',
        reading: 'とえい',
        meanings: '(under) metropolitan government management',
      },
      {
        kanji: '遷都',
        reading: 'せんと',
        meanings: 'relocation of the capital',
      },
      {
        kanji: '東都',
        reading: 'とうと',
        meanings: 'the Eastern Capital (now Tokyo)',
      },
      {
        kanji: '都度',
        reading: 'つど',
        meanings: 'each (every) time',
      },
      {
        kanji: '都合',
        reading: 'つごう',
        meanings: 'circumstances',
      },
    ],
  },
  {
    kanjiName: '商',
    strokes: 11,
    grade: 3,
    freq: 413,
    meanings: ['Make A Deal', 'Selling', 'Dealing In', 'Merchant'],
    on: ['しょう'],
    kun: ['あきな.う'],
    jlpt: 3,
    quizAnswers: ['Force', 'Make A Deal', 'Smoke (tobacco)', 'Fence'],
    similars: [
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '嫡',
        meaning: 'legitimate wife',
      },
      {
        kanji: '滴',
        meaning: 'drip',
      },
      {
        kanji: '適',
        meaning: 'suitable',
      },
      {
        kanji: '摘',
        meaning: 'pinch',
      },
      {
        kanji: '痴',
        meaning: 'stupid',
      },
      {
        kanji: '敵',
        meaning: 'enemy',
      },
      {
        kanji: '唐',
        meaning: "T'ang",
      },
      {
        kanji: '岩',
        meaning: 'boulder',
      },
      {
        kanji: '否',
        meaning: 'negate',
      },
    ],
    usedIn: [
      {
        kanji: '商う',
        reading: 'あきなう',
        meanings: 'to trade in (commercial goods)',
      },
      {
        kanji: '商',
        reading: 'しょう',
        meanings: 'quotient',
      },
      {
        kanji: '商会',
        reading: 'しょうかい',
        meanings: 'firm',
      },
      {
        kanji: '年商',
        reading: 'ねんしょう',
        meanings: 'yearly (annual) turnover',
      },
      {
        kanji: '画商',
        reading: 'がしょう',
        meanings: 'picture dealer',
      },
    ],
  },
  {
    kanjiName: '深',
    strokes: 11,
    grade: 3,
    freq: 484,
    meanings: ['Deep', 'Heighten', 'Intensify', 'Strengthen'],
    on: ['しん'],
    kun: ['ふか.い', '-ぶか.い', 'ふか.まる', 'ふか.める', 'み-'],
    jlpt: 3,
    quizAnswers: ['Hang', '5-7am', 'Military', 'Deep'],
    similars: [
      {
        kanji: '探',
        meaning: 'grope',
      },
      {
        kanji: '栄',
        meaning: 'flourish',
      },
      {
        kanji: '染',
        meaning: 'dye',
      },
      {
        kanji: '渓',
        meaning: 'mountain stream',
      },
      {
        kanji: '淡',
        meaning: 'thin',
      },
      {
        kanji: '派',
        meaning: 'faction',
      },
      {
        kanji: '沈',
        meaning: 'sink',
      },
      {
        kanji: '泳',
        meaning: 'swim',
      },
      {
        kanji: '巣',
        meaning: 'nest',
      },
      {
        kanji: '採',
        meaning: 'pick',
      },
    ],
    usedIn: [
      {
        kanji: '深い',
        reading: 'ふかい',
        meanings: 'deep',
      },
      {
        kanji: '深入り',
        reading: 'ふかいり',
        meanings: 'getting deeply involved',
      },
      {
        kanji: '深まる',
        reading: 'ふかまる',
        meanings: 'to deepen',
      },
      {
        kanji: '深める',
        reading: 'ふかめる',
        meanings: 'to deepen',
      },
      {
        kanji: '深刻',
        reading: 'しんこく',
        meanings: 'serious',
      },
      {
        kanji: '深海',
        reading: 'しんかい',
        meanings: 'deep sea',
      },
      {
        kanji: '海深',
        reading: 'かいしん',
        meanings: 'depth of the sea',
      },
      {
        kanji: '最深',
        reading: 'さいしん',
        meanings: 'deepest',
      },
    ],
  },
  {
    kanjiName: '球',
    strokes: 11,
    grade: 3,
    freq: 302,
    meanings: ['Ball', 'Sphere'],
    on: ['きゅう'],
    kun: ['たま'],
    jlpt: 3,
    quizAnswers: ['Ball', 'Put Up (tent)', 'Public', 'Put Up'],
    similars: [
      {
        kanji: '求',
        meaning: 'request',
      },
      {
        kanji: '琴',
        meaning: 'harp',
      },
      {
        kanji: '表',
        meaning: 'surface',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '泰',
        meaning: 'peaceful',
      },
      {
        kanji: '坪',
        meaning: 'two-mat area',
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple',
      },
      {
        kanji: '康',
        meaning: 'ease',
      },
      {
        kanji: '赤',
        meaning: 'red',
      },
      {
        kanji: '素',
        meaning: 'elementary',
      },
    ],
    usedIn: [
      {
        kanji: '玉',
        reading: 'たま',
        meanings: 'ball',
      },
      {
        kanji: '玉突き',
        reading: 'たまつき',
        meanings: 'billiards',
      },
      {
        kanji: '電気の球',
        reading: 'でんきのたま',
        meanings: 'electric (light) bulb',
      },
      {
        kanji: '目の玉',
        reading: 'めのたま',
        meanings: 'eyeball',
      },
      {
        kanji: '球',
        reading: 'きゅう',
        meanings: 'sphere',
      },
      {
        kanji: '球威',
        reading: 'きゅうい',
        meanings: "(pitcher's) stuff",
      },
      {
        kanji: '配球',
        reading: 'はいきゅう',
        meanings: 'combination of (varied) pitches',
      },
      {
        kanji: '制球',
        reading: 'せいきゅう',
        meanings: "(pitcher's) control",
      },
    ],
  },
  {
    kanjiName: '陽',
    strokes: 12,
    grade: 3,
    freq: 1071,
    meanings: [
      'Sunshine',
      'Yang Principle',
      'Positive',
      'Male',
      'Heaven',
      'Daytime',
    ],
    on: ['よう'],
    kun: ['ひ'],
    jlpt: 3,
    quizAnswers: ['For The First Time', 'Sunshine', 'Reward', 'Amount'],
    similars: [
      {
        kanji: '場',
        meaning: 'location',
      },
      {
        kanji: '揚',
        meaning: 'raise',
      },
      {
        kanji: '湯',
        meaning: 'hot water',
      },
      {
        kanji: '傷',
        meaning: 'wound',
      },
      {
        kanji: '腸',
        meaning: 'intestines',
      },
      {
        kanji: '易',
        meaning: 'easy',
      },
      {
        kanji: '陣',
        meaning: 'camp',
      },
      {
        kanji: '渇',
        meaning: 'thirst',
      },
      {
        kanji: '陳',
        meaning: 'exhibit',
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)',
      },
    ],
    usedIn: [
      {
        kanji: '陽',
        reading: 'ひ',
        meanings: 'sun',
      },
      {
        kanji: '日差し',
        reading: 'ひざし',
        meanings: 'sunlight',
      },
      {
        kanji: '陽',
        reading: 'よう',
        meanings: '(the) positive',
      },
      {
        kanji: '陽気',
        reading: 'ようき',
        meanings: 'cheerful',
      },
      {
        kanji: '山陽',
        reading: 'さんよう',
        meanings: 'south side of a mountain',
      },
      {
        kanji: '陰陽',
        reading: 'いんよう',
        meanings: 'cosmic dual forces',
      },
    ],
  },
  {
    kanjiName: '寒',
    strokes: 12,
    grade: 3,
    freq: 1456,
    meanings: ['Cold'],
    on: ['かん'],
    kun: ['さむ.い'],
    jlpt: 3,
    quizAnswers: ['Impose On', 'Cold', 'Attain', 'Western Style'],
    similars: [
      {
        kanji: '実',
        meaning: 'reality',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '宗',
        meaning: 'religion',
      },
      {
        kanji: '美',
        meaning: 'beauty',
      },
      {
        kanji: '害',
        meaning: 'harm',
      },
      {
        kanji: '洪',
        meaning: 'deluge',
      },
      {
        kanji: '定',
        meaning: 'determine',
      },
      {
        kanji: '寡',
        meaning: 'widow',
      },
      {
        kanji: '宰',
        meaning: 'superintend',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
    ],
    usedIn: [
      {
        kanji: '寒い',
        reading: 'さむい',
        meanings: 'cold (e.g. weather)',
      },
      {
        kanji: '寒',
        reading: 'かん',
        meanings: 'midwinter',
      },
      {
        kanji: '寒気',
        reading: 'さむけ',
        meanings: 'chill',
      },
      {
        kanji: '悪寒',
        reading: 'おかん',
        meanings: 'chill',
      },
      {
        kanji: '防寒',
        reading: 'ぼうかん',
        meanings: 'protection against cold',
      },
    ],
  },
  {
    kanjiName: '悲',
    strokes: 12,
    grade: 3,
    freq: 1014,
    meanings: ['Grieve', 'Sad', 'Deplore', 'Regret'],
    on: ['ひ'],
    kun: ['かな.しい', 'かな.しむ'],
    jlpt: 3,
    quizAnswers: ['5-7pm', 'Quiet', 'Disaster', 'Grieve'],
    similars: [
      {
        kanji: '非',
        meaning: 'un-',
      },
      {
        kanji: '輩',
        meaning: 'comrade',
      },
      {
        kanji: '忠',
        meaning: 'loyalty',
      },
      {
        kanji: '焦',
        meaning: 'char',
      },
      {
        kanji: '俳',
        meaning: 'haiku',
      },
      {
        kanji: '怠',
        meaning: 'neglect',
      },
      {
        kanji: '患',
        meaning: 'afflicted',
      },
      {
        kanji: '感',
        meaning: 'emotion',
      },
      {
        kanji: '篤',
        meaning: 'fervent',
      },
      {
        kanji: '徳',
        meaning: 'benevolence',
      },
    ],
    usedIn: [
      {
        kanji: '悲しい',
        reading: 'かなしい',
        meanings: 'sad',
      },
      {
        kanji: '悲しいかな',
        reading: 'かなしいかな',
        meanings: 'sad to say',
      },
      {
        kanji: '悲しむ',
        reading: 'かなしむ',
        meanings: 'to be sad',
      },
      {
        kanji: '悲しむべき境遇',
        reading: 'かなしむべききょうぐう',
        meanings: 'pitiable condition',
      },
      {
        kanji: '悲',
        reading: 'ひ',
        meanings: 'karuna (compassion)',
      },
      {
        kanji: '悲哀',
        reading: 'ひあい',
        meanings: 'sorrow',
      },
      {
        kanji: '大慈大悲',
        reading: 'だいじだいひ',
        meanings: 'great compassion and mercy',
      },
      {
        kanji: '無慈悲',
        reading: 'むじひ',
        meanings: 'merciless',
      },
    ],
  },
  {
    kanjiName: '期',
    strokes: 12,
    grade: 3,
    freq: 117,
    meanings: ['Period', 'Time', 'Date', 'Term'],
    on: ['き', 'ご'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Form', 'Protect', 'Sign Of The Tiger', 'Period'],
    similars: [
      {
        kanji: '欺',
        meaning: 'deceit',
      },
      {
        kanji: '朝',
        meaning: 'morning',
      },
      {
        kanji: '暮',
        meaning: 'evening',
      },
      {
        kanji: '碁',
        meaning: 'Go',
      },
      {
        kanji: '勘',
        meaning: 'intuition',
      },
      {
        kanji: '著',
        meaning: 'renowned',
      },
      {
        kanji: '甚',
        meaning: 'tremendously',
      },
      {
        kanji: '朗',
        meaning: 'melodious',
      },
      {
        kanji: '基',
        meaning: 'fundamentals',
      },
      {
        kanji: '幕',
        meaning: 'curtain',
      },
    ],
    usedIn: [
      {
        kanji: '期',
        reading: 'き',
        meanings: 'period',
      },
      {
        kanji: '期間',
        reading: 'きかん',
        meanings: 'period',
      },
      {
        kanji: '周期',
        reading: 'しゅうき',
        meanings: 'cycle',
      },
      {
        kanji: '当期',
        reading: 'とうき',
        meanings: 'current term (period)',
      },
      {
        kanji: '期',
        reading: 'ご',
        meanings: 'time',
      },
      {
        kanji: '期日',
        reading: 'きじつ',
        meanings: 'fixed date',
      },
      {
        kanji: '一期',
        reading: 'いちご',
        meanings: "one's whole life",
      },
      {
        kanji: '非業の最期',
        reading: 'ひごうのさいご',
        meanings: 'unnatural death',
      },
    ],
  },
  {
    kanjiName: '歯',
    strokes: 12,
    grade: 3,
    freq: 1106,
    meanings: ['Tooth', 'Cog'],
    on: ['し'],
    kun: ['よわい', 'は', 'よわ.い', 'よわい.する'],
    jlpt: 3,
    quizAnswers: ['Follow', 'Soldier', 'Depravity', 'Tooth'],
    similars: [
      {
        kanji: '齢',
        meaning: 'age',
      },
      {
        kanji: '薪',
        meaning: 'fuel',
      },
      {
        kanji: '新',
        meaning: 'new',
      },
      {
        kanji: '峡',
        meaning: 'gorge',
      },
      {
        kanji: '部',
        meaning: 'section',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '来',
        meaning: 'come',
      },
      {
        kanji: '音',
        meaning: 'sound',
      },
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '粛',
        meaning: 'solemn',
      },
    ],
    usedIn: [
      {
        kanji: '齢',
        reading: 'よわい',
        meanings: "(one's) age",
      },
      {
        kanji: '歯する',
        reading: 'よわいする',
        meanings: 'to associate (with)',
      },
      {
        kanji: '歯',
        reading: 'は',
        meanings: 'tooth',
      },
      {
        kanji: '歯切れ',
        reading: 'はぎれ',
        meanings: 'feel when biting',
      },
      {
        kanji: '継ぎ歯',
        reading: 'つぎば',
        meanings: 'capped tooth',
      },
      {
        kanji: '年端',
        reading: 'としは',
        meanings: 'age',
      },
      {
        kanji: '齢',
        reading: 'よわい',
        meanings: "(one's) age",
      },
      {
        kanji: '歯する',
        reading: 'よわいする',
        meanings: 'to associate (with)',
      },
      {
        kanji: '歯する',
        reading: 'よわいする',
        meanings: 'to associate (with)',
      },
      {
        kanji: '歯',
        reading: 'し',
        meanings: 'tooth',
      },
      {
        kanji: '歯科',
        reading: 'しか',
        meanings: 'dentistry',
      },
      {
        kanji: '義歯',
        reading: 'ぎし',
        meanings: 'artificial tooth',
      },
      {
        kanji: '生歯',
        reading: 'せいし',
        meanings: 'teething',
      },
    ],
  },
  {
    kanjiName: '港',
    strokes: 12,
    grade: 3,
    freq: 495,
    meanings: ['Harbor'],
    on: ['こう'],
    kun: ['みなと'],
    jlpt: 3,
    quizAnswers: ['Receive Benefits', 'Handwriting', 'Circle', 'Harbor'],
    similars: [
      {
        kanji: '巻',
        meaning: 'scroll',
      },
      {
        kanji: '洪',
        meaning: 'deluge',
      },
      {
        kanji: '洗',
        meaning: 'wash',
      },
      {
        kanji: '満',
        meaning: 'full',
      },
      {
        kanji: '起',
        meaning: 'rouse',
      },
      {
        kanji: '泡',
        meaning: 'bubbles',
      },
      {
        kanji: '漠',
        meaning: 'vague',
      },
      {
        kanji: '溝',
        meaning: 'gutter',
      },
      {
        kanji: '漢',
        meaning: 'Sino-',
      },
      {
        kanji: '装',
        meaning: 'attire',
      },
    ],
    usedIn: [
      {
        kanji: '港',
        reading: 'みなと',
        meanings: 'harbour',
      },
      {
        kanji: '港区',
        reading: 'みなとく',
        meanings: 'Minato City (special ward of Tokyo)',
      },
      {
        kanji: '港',
        reading: 'こう',
        meanings: 'harbour',
      },
      {
        kanji: '港内',
        reading: 'こうない',
        meanings: 'inside the harbour',
      },
      {
        kanji: '漁港',
        reading: 'ぎょこう',
        meanings: 'fishing harbour',
      },
      {
        kanji: '海港',
        reading: 'かいこう',
        meanings: 'port',
      },
    ],
  },
  {
    kanjiName: '登',
    strokes: 12,
    grade: 3,
    freq: 566,
    meanings: ['Ascend', 'Climb Up'],
    on: ['とう', 'と', 'どう', 'しょう', 'ちょう'],
    kun: ['のぼ.る', 'あ.がる'],
    jlpt: 3,
    quizAnswers: ['Fathom', 'Green', 'Quasi-', 'Ascend'],
    similars: [
      {
        kanji: '澄',
        meaning: 'lucidity',
      },
      {
        kanji: '痘',
        meaning: 'pox',
      },
      {
        kanji: '豆',
        meaning: 'beans',
      },
      {
        kanji: '倹',
        meaning: 'frugal',
      },
      {
        kanji: '険',
        meaning: 'precipitous',
      },
      {
        kanji: '発',
        meaning: 'departure',
      },
      {
        kanji: '短',
        meaning: 'short',
      },
      {
        kanji: '豊',
        meaning: 'bountiful',
      },
      {
        kanji: '託',
        meaning: 'consign',
      },
      {
        kanji: '造',
        meaning: 'create',
      },
    ],
    usedIn: [
      {
        kanji: '上る',
        reading: 'のぼる',
        meanings: 'to ascend',
      },
      {
        kanji: '登校',
        reading: 'とうこう',
        meanings: 'attendance (at school)',
      },
      {
        kanji: '登記',
        reading: 'とうき',
        meanings: 'registry',
      },
      {
        kanji: '完登',
        reading: 'かんとう',
        meanings: 'completing a climb',
      },
      {
        kanji: '先登',
        reading: 'せんとう',
        meanings: 'going first',
      },
      {
        kanji: '登校',
        reading: 'とうこう',
        meanings: 'attendance (at school)',
      },
      {
        kanji: '登記',
        reading: 'とうき',
        meanings: 'registry',
      },
      {
        kanji: '能登',
        reading: 'のと',
        meanings:
          'Noto (former province located in the north of present-day Ishikawa Prefecture)',
      },
    ],
  },
  {
    kanjiName: '亡',
    strokes: 3,
    grade: 6,
    freq: 661,
    meanings: ['Deceased', 'The Late', 'Dying', 'Perish'],
    on: ['ぼう', 'もう'],
    kun: ['な.い', 'な.き-', 'ほろ.びる', 'ほろ.ぶ', 'ほろ.ぼす'],
    jlpt: 3,
    quizAnswers: ['Deceased', 'Renowned', 'Carrier', 'Chain'],
    similars: [
      {
        kanji: '方',
        meaning: 'direction',
      },
      {
        kanji: '六',
        meaning: 'six',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
      {
        kanji: '忘',
        meaning: 'forget',
      },
      {
        kanji: '市',
        meaning: 'market',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '巧',
        meaning: 'adroit',
      },
      {
        kanji: '去',
        meaning: 'gone',
      },
      {
        kanji: '生',
        meaning: 'life',
      },
    ],
    usedIn: [
      {
        kanji: '亡い',
        reading: 'ない',
        meanings: 'dead',
      },
      {
        kanji: '滅びる',
        reading: 'ほろびる',
        meanings: 'to go to ruin',
      },
      {
        kanji: '滅ぶ',
        reading: 'ほろぶ',
        meanings: 'to be ruined',
      },
      {
        kanji: '滅ぼす',
        reading: 'ほろぼす',
        meanings: 'to destroy',
      },
      {
        kanji: '亡',
        reading: 'ぼう',
        meanings: 'death',
      },
      {
        kanji: '亡命',
        reading: 'ぼうめい',
        meanings: "fleeing from one's country",
      },
      {
        kanji: '存亡',
        reading: 'そんぼう',
        meanings: 'life or death',
      },
      {
        kanji: '興亡',
        reading: 'こうぼう',
        meanings: 'rise and fall',
      },
      {
        kanji: '亡者',
        reading: 'もうじゃ',
        meanings: 'the dead',
      },
      {
        kanji: '亡者船',
        reading: 'もうじゃぶね',
        meanings:
          'ship of the dead which appears if you go fishing the night of the Bon festival',
      },
      {
        kanji: '焼亡',
        reading: 'しょうぼう',
        meanings: 'destruction by fire',
      },
      {
        kanji: '損亡',
        reading: 'そんもう',
        meanings: 'loss',
      },
    ],
  },
  {
    kanjiName: '合',
    strokes: 6,
    grade: 2,
    freq: 41,
    meanings: ['Fit', 'Suit', 'Join', '0.1'],
    on: ['ごう', 'がっ', 'かっ'],
    kun: [
      'あ.う',
      '-あ.う',
      'あ.い',
      'あい-',
      '-あ.い',
      '-あい',
      'あ.わす',
      'あ.わせる',
      '-あ.わせる',
    ],
    jlpt: 3,
    quizAnswers: ['Steadily', 'Inquire', 'Shilling', 'Fit'],
    similars: [
      {
        kanji: '含',
        meaning: 'contain',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '命',
        meaning: 'fate',
      },
      {
        kanji: '舎',
        meaning: 'cottage',
      },
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '何',
        meaning: 'what',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '向',
        meaning: 'yonder',
      },
      {
        kanji: '名',
        meaning: 'name',
      },
    ],
    usedIn: [
      {
        kanji: '合う',
        reading: 'あう',
        meanings: 'to come together',
      },
      {
        kanji: '合うも不思議、合わぬも不思議',
        reading: 'あうもふしぎあわぬもふしぎ',
        meanings: 'dreams and fortune-telling are hit-and-miss',
      },
      {
        kanji: '合い',
        reading: 'あい',
        meanings: 'between-season wear',
      },
      {
        kanji: '合言葉',
        reading: 'あいことば',
        meanings: 'password',
      },
      {
        kanji: '立会い',
        reading: 'たちあい',
        meanings: 'presence (e.g. of an observer)',
      },
      {
        kanji: '地合い',
        reading: 'じあい',
        meanings: 'texture (cloth',
      },
      {
        kanji: '合わす',
        reading: 'あわす',
        meanings: 'to match (rhythm',
      },
      {
        kanji: '合わせる',
        reading: 'あわせる',
        meanings: 'to match (rhythm',
      },
      {
        kanji: '合わせる顔がない',
        reading: 'あわせるかおがない',
        meanings: 'too ashamed to meet',
      },
      {
        kanji: '合',
        reading: 'ごう',
        meanings: 'gō',
      },
      {
        kanji: '合意',
        reading: 'ごうい',
        meanings: '(coming to an) agreement',
      },
      {
        kanji: '複合',
        reading: 'ふくごう',
        meanings: 'composite',
      },
      {
        kanji: '整合',
        reading: 'せいごう',
        meanings: 'adjustment',
      },
      {
        kanji: '合宿',
        reading: 'がっしゅく',
        meanings: 'lodging together',
      },
      {
        kanji: '合作',
        reading: 'がっさく',
        meanings: 'collaboration',
      },
      {
        kanji: '合戦',
        reading: 'かっせん',
        meanings: 'battle',
      },
      {
        kanji: '合羽',
        reading: 'かっぱ',
        meanings: 'raincoat',
      },
    ],
  },
  {
    kanjiName: '予',
    strokes: 4,
    grade: 3,
    freq: 180,
    meanings: ['Beforehand', 'Previous', 'Myself', 'I'],
    on: ['よ', 'しゃ'],
    kun: ['あらかじ.め'],
    jlpt: 3,
    quizAnswers: ['Street', 'Graceful', 'Lawn', 'Beforehand'],
    similars: [
      {
        kanji: '双',
        meaning: 'pair',
      },
      {
        kanji: '多',
        meaning: 'many',
      },
      {
        kanji: '列',
        meaning: 'file',
      },
      {
        kanji: '序',
        meaning: 'preface',
      },
      {
        kanji: '氷',
        meaning: 'icicle',
      },
      {
        kanji: '外',
        meaning: 'outside',
      },
      {
        kanji: '矛',
        meaning: 'halberd',
      },
      {
        kanji: '例',
        meaning: 'example',
      },
      {
        kanji: '死',
        meaning: 'death',
      },
      {
        kanji: '守',
        meaning: 'guard',
      },
    ],
    usedIn: [
      {
        kanji: '予め',
        reading: 'あらかじめ',
        meanings: 'beforehand',
      },
      {
        kanji: '予',
        reading: 'よ',
        meanings: 'I',
      },
      {
        kanji: '予感',
        reading: 'よかん',
        meanings: 'presentiment',
      },
      {
        kanji: '起訴猶予',
        reading: 'きそゆうよ',
        meanings: 'suspension of indictment',
      },
      {
        kanji: '執行猶予',
        reading: 'しっこうゆうよ',
        meanings: 'stay of execution',
      },
    ],
  },
  {
    kanjiName: '反',
    strokes: 4,
    grade: 3,
    freq: 191,
    meanings: ['Anti-'],
    on: ['はん', 'ほん', 'たん', 'ほ'],
    kun: ['そ.る', 'そ.らす', 'かえ.す', 'かえ.る', '-かえ.る'],
    jlpt: 3,
    quizAnswers: ['Anti-', 'Chase', 'Or', 'Outline'],
    similars: [
      {
        kanji: '友',
        meaning: 'friend',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '支',
        meaning: 'branch',
      },
      {
        kanji: '久',
        meaning: 'long time',
      },
      {
        kanji: '仮',
        meaning: 'sham',
      },
      {
        kanji: '奴',
        meaning: 'guy',
      },
      {
        kanji: '投',
        meaning: 'throw',
      },
      {
        kanji: '坂',
        meaning: 'slope',
      },
      {
        kanji: '返',
        meaning: 'return',
      },
    ],
    usedIn: [
      {
        kanji: '反る',
        reading: 'そる',
        meanings: 'to warp',
      },
      {
        kanji: '反らす',
        reading: 'そらす',
        meanings: 'to bend',
      },
      {
        kanji: '返す',
        reading: 'かえす',
        meanings: 'to return (something)',
      },
      {
        kanji: '返る',
        reading: 'かえる',
        meanings: 'to return',
      },
      {
        kanji: '反',
        reading: 'はん',
        meanings: 'anti-',
      },
      {
        kanji: '反映',
        reading: 'はんえい',
        meanings: 'reflection (of light)',
      },
      {
        kanji: '離反',
        reading: 'りはん',
        meanings: 'estrangement',
      },
      {
        kanji: '造反',
        reading: 'ぞうはん',
        meanings: 'rebellion',
      },
      {
        kanji: '反故',
        reading: 'ほご',
        meanings: 'wastepaper',
      },
      {
        kanji: '謀反',
        reading: 'むほん',
        meanings: 'rebellion',
      },
      {
        kanji: '反',
        reading: 'たん',
        meanings: 'variable measure of fabric (28.8 cm in width)',
      },
      {
        kanji: '反物',
        reading: 'たんもの',
        meanings: 'fabric',
      },
      {
        kanji: '減反',
        reading: 'げんたん',
        meanings: 'reduction (of crop size)',
      },
      {
        kanji: '一反',
        reading: 'いったん',
        meanings: 'one-tenth hectare',
      },
      {
        kanji: '反故',
        reading: 'ほご',
        meanings: 'wastepaper',
      },
      {
        kanji: '反古籠',
        reading: 'ほぐかご',
        meanings: 'wastebasket',
      },
    ],
  },
  {
    kanjiName: '返',
    strokes: 7,
    grade: 3,
    freq: 685,
    meanings: ['Return', 'Answer', 'Fade', 'Repay'],
    on: ['へん'],
    kun: ['かえ.す', '-かえ.す', 'かえ.る', '-かえ.る'],
    jlpt: 3,
    quizAnswers: ['Return', 'Translate', 'Be Clear', 'Counter For Occurrences'],
    similars: [
      {
        kanji: '込',
        meaning: 'crowded',
      },
      {
        kanji: '述',
        meaning: 'mention',
      },
      {
        kanji: '近',
        meaning: 'near',
      },
      {
        kanji: '反',
        meaning: 'anti-',
      },
      {
        kanji: '冬',
        meaning: 'winter',
      },
      {
        kanji: '列',
        meaning: 'file',
      },
      {
        kanji: '辺',
        meaning: 'environs',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '友',
        meaning: 'friend',
      },
    ],
    usedIn: [
      {
        kanji: '返す',
        reading: 'かえす',
        meanings: 'to return (something)',
      },
      {
        kanji: '返す刀',
        reading: 'かえすかたな',
        meanings: 'attacking one opponent then immediately attacking another',
      },
      {
        kanji: '返る',
        reading: 'かえる',
        meanings: 'to return',
      },
      {
        kanji: '返',
        reading: 'へん',
        meanings: 'reply',
      },
      {
        kanji: '遍',
        reading: 'へん',
        meanings: 'number of times',
      },
      {
        kanji: '代返',
        reading: 'だいへん',
        meanings: 'answer a roll call for another',
      },
      {
        kanji: '往返',
        reading: 'おうへん',
        meanings: 'round trip',
      },
    ],
  },
  {
    kanjiName: '宿',
    strokes: 11,
    grade: 3,
    freq: 701,
    meanings: [
      'Inn',
      'Lodging',
      'Relay Station',
      'Dwell',
      'Lodge',
      'Be Pregnant',
      'Home',
      'Dwelling',
    ],
    on: ['しゅく'],
    kun: ['やど', 'やど.る', 'やど.す'],
    jlpt: 3,
    quizAnswers: ['Root', 'Focus', 'Inn', 'Style'],
    similars: [
      {
        kanji: '富',
        meaning: 'wealth',
      },
      {
        kanji: '審',
        meaning: 'hearing',
      },
      {
        kanji: '縮',
        meaning: 'shrink',
      },
      {
        kanji: '宣',
        meaning: 'proclaim',
      },
      {
        kanji: '首',
        meaning: 'neck',
      },
      {
        kanji: '伯',
        meaning: 'chief',
      },
      {
        kanji: '音',
        meaning: 'sound',
      },
      {
        kanji: '額',
        meaning: 'forehead',
      },
      {
        kanji: '寮',
        meaning: 'dormitory',
      },
      {
        kanji: '緒',
        meaning: 'thong',
      },
    ],
    usedIn: [
      {
        kanji: '宿',
        reading: 'やど',
        meanings: 'lodging',
      },
      {
        kanji: '宿屋',
        reading: 'やどや',
        meanings: 'inn',
      },
      {
        kanji: '連れ込み宿',
        reading: 'つれこみやど',
        meanings: 'hotel catering for lovers',
      },
      {
        kanji: '相宿',
        reading: 'あいやど',
        meanings: 'staying in the same inn or hotel',
      },
      {
        kanji: '宿る',
        reading: 'やどる',
        meanings: 'to dwell',
      },
      {
        kanji: '宿す',
        reading: 'やどす',
        meanings: 'to house',
      },
      {
        kanji: '宿',
        reading: 'しゅく',
        meanings: 'lodging',
      },
      {
        kanji: '夙',
        reading: 'しゅく',
        meanings:
          'outcasts common around the Kyoto region from the Kamakura period to the Edo period',
      },
      {
        kanji: '寄宿',
        reading: 'きしゅく',
        meanings: 'lodging',
      },
      {
        kanji: '奎宿',
        reading: 'とかきぼし',
        meanings: 'Chinese Legs constellation (one of the 28 mansions)',
      },
    ],
  },
  {
    kanjiName: '想',
    strokes: 13,
    grade: 3,
    freq: 381,
    meanings: ['Concept', 'Think', 'Idea', 'Thought'],
    on: ['そう', 'そ'],
    kun: ['おも.う'],
    jlpt: 3,
    quizAnswers: ['Exert', 'Oil', 'Be Sharp', 'Concept'],
    similars: [
      {
        kanji: '息',
        meaning: 'breath',
      },
      {
        kanji: '穂',
        meaning: 'ear',
      },
      {
        kanji: '相',
        meaning: 'inter-',
      },
      {
        kanji: '恵',
        meaning: 'favor',
      },
      {
        kanji: '意',
        meaning: 'idea',
      },
      {
        kanji: '憩',
        meaning: 'recess',
      },
      {
        kanji: '貨',
        meaning: 'freight',
      },
      {
        kanji: '思',
        meaning: 'think',
      },
      {
        kanji: '博',
        meaning: 'Dr.',
      },
      {
        kanji: '億',
        meaning: 'hundred million',
      },
    ],
    usedIn: [
      {
        kanji: '思う',
        reading: 'おもう',
        meanings: 'to think',
      },
      {
        kanji: '想',
        reading: 'そう',
        meanings: 'conception',
      },
      {
        kanji: '想像',
        reading: 'そうぞう',
        meanings: 'imagination',
      },
      {
        kanji: '追想',
        reading: 'ついそう',
        meanings: 'recollection',
      },
      {
        kanji: 'お愛想',
        reading: 'おあいそ',
        meanings: 'compliments',
      },
      {
        kanji: '想',
        reading: 'そう',
        meanings: 'conception',
      },
      {
        kanji: '想像',
        reading: 'そうぞう',
        meanings: 'imagination',
      },
      {
        kanji: 'お愛想',
        reading: 'おあいそ',
        meanings: 'compliments',
      },
    ],
  },
  {
    kanjiName: '感',
    strokes: 13,
    grade: 3,
    freq: 233,
    meanings: ['Emotion', 'Feeling', 'Sensation'],
    on: ['かん'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Make Sport Of', 'Clear', 'Emotion', 'Sovereign'],
    similars: [
      {
        kanji: '憾',
        meaning: 'remorse',
      },
      {
        kanji: '認',
        meaning: 'acknowledge',
      },
      {
        kanji: '惑',
        meaning: 'beguile',
      },
      {
        kanji: '誌',
        meaning: 'document',
      },
      {
        kanji: '慰',
        meaning: 'consolation',
      },
      {
        kanji: '憩',
        meaning: 'recess',
      },
      {
        kanji: '愁',
        meaning: 'distress',
      },
      {
        kanji: '怠',
        meaning: 'neglect',
      },
      {
        kanji: '恋',
        meaning: 'romance',
      },
      {
        kanji: '忠',
        meaning: 'loyalty',
      },
    ],
    usedIn: [
      {
        kanji: '感',
        reading: 'かん',
        meanings: 'feeling',
      },
      {
        kanji: '感覚',
        reading: 'かんかく',
        meanings: 'sense',
      },
      {
        kanji: '期待感',
        reading: 'きたいかん',
        meanings: 'sense of anticipation',
      },
      {
        kanji: '体感',
        reading: 'たいかん',
        meanings: 'bodily sensation',
      },
    ],
  },
  {
    kanjiName: '暗',
    strokes: 13,
    grade: 3,
    freq: 1040,
    meanings: [
      'Darkness',
      'Disappear',
      'Shade',
      'Informal',
      'Grow Dark',
      'Be Blinded',
    ],
    on: ['あん'],
    kun: ['くら.い', 'くら.む', 'くれ.る'],
    jlpt: 3,
    quizAnswers: ['Darkness', 'Dismissal', 'Base', 'Nice And Cool'],
    similars: [
      {
        kanji: '暑',
        meaning: 'sultry',
      },
      {
        kanji: '賄',
        meaning: 'bribe',
      },
      {
        kanji: '音',
        meaning: 'sound',
      },
      {
        kanji: '顕',
        meaning: 'appear',
      },
      {
        kanji: '暫',
        meaning: 'temporarily',
      },
      {
        kanji: '普',
        meaning: 'universal',
      },
      {
        kanji: '晶',
        meaning: 'sparkle',
      },
      {
        kanji: '署',
        meaning: 'signature',
      },
      {
        kanji: '晴',
        meaning: 'clear up',
      },
      {
        kanji: '間',
        meaning: 'interval',
      },
    ],
    usedIn: [
      {
        kanji: '暗い',
        reading: 'くらい',
        meanings: 'dark',
      },
      {
        kanji: '暗い過去',
        reading: 'くらいかこ',
        meanings: 'shadowy past',
      },
      {
        kanji: '眩む',
        reading: 'くらむ',
        meanings: 'to be dazzled by',
      },
      {
        kanji: '暮れる',
        reading: 'くれる',
        meanings: 'to get dark',
      },
      {
        kanji: '暗',
        reading: 'あん',
        meanings: 'darkness',
      },
      {
        kanji: '暗雲',
        reading: 'あんうん',
        meanings: 'dark clouds',
      },
      {
        kanji: '明暗',
        reading: 'めいあん',
        meanings: 'light and darkness',
      },
      {
        kanji: '冥暗',
        reading: 'めいあん',
        meanings: 'gloom',
      },
    ],
  },
  {
    kanjiName: '様',
    strokes: 14,
    grade: 3,
    freq: 493,
    meanings: ['Esq.', 'Way', 'Manner', 'Situation', 'Polite Suffix'],
    on: ['よう', 'しょう'],
    kun: ['さま', 'さん'],
    jlpt: 3,
    quizAnswers: ['Whey', 'Fly', 'Esq.', 'Bear'],
    similars: [
      {
        kanji: '株',
        meaning: 'stocks',
      },
      {
        kanji: '検',
        meaning: 'examination',
      },
      {
        kanji: '殊',
        meaning: 'particularly',
      },
      {
        kanji: '桟',
        meaning: 'scaffold',
      },
      {
        kanji: '達',
        meaning: 'accomplished',
      },
      {
        kanji: '校',
        meaning: 'exam',
      },
      {
        kanji: '林',
        meaning: 'grove',
      },
      {
        kanji: '械',
        meaning: 'contraption',
      },
      {
        kanji: '遅',
        meaning: 'slow',
      },
      {
        kanji: '廉',
        meaning: 'bargain',
      },
    ],
    usedIn: [
      {
        kanji: '様',
        reading: 'さま',
        meanings: 'Mr',
      },
      {
        kanji: '様変わり',
        reading: 'さまがわり',
        meanings: 'changing completely',
      },
      {
        kanji: '殿様',
        reading: 'とのさま',
        meanings: 'nobleman',
      },
      {
        kanji: 'ご馳走様',
        reading: 'ごちそうさま',
        meanings: 'thank you (for the meal)',
      },
      {
        kanji: '唐行きさん',
        reading: 'からゆきさん',
        meanings: 'karayuki-san',
      },
      {
        kanji: '愛様',
        reading: 'いとさん',
        meanings: 'daughter (of a good family)',
      },
      {
        kanji: '様',
        reading: 'よう',
        meanings: 'appearing ...',
      },
      {
        kanji: '様式',
        reading: 'ようしき',
        meanings: 'style',
      },
      {
        kanji: '文様',
        reading: 'もんよう',
        meanings: 'pattern',
      },
      {
        kanji: '一様',
        reading: 'いちよう',
        meanings: 'uniform',
      },
    ],
  },
  {
    kanjiName: '福',
    strokes: 13,
    grade: 3,
    freq: 467,
    meanings: ['Blessing', 'Fortune', 'Luck', 'Wealth'],
    on: ['ふく'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Blessing', 'Insect', 'Cave In', 'Inherit'],
    similars: [
      {
        kanji: '幅',
        meaning: 'hanging scroll',
      },
      {
        kanji: '富',
        meaning: 'wealth',
      },
      {
        kanji: '審',
        meaning: 'hearing',
      },
      {
        kanji: '細',
        meaning: 'dainty',
      },
      {
        kanji: '神',
        meaning: 'gods',
      },
      {
        kanji: '油',
        meaning: 'oil',
      },
      {
        kanji: '副',
        meaning: 'vice-',
      },
      {
        kanji: '番',
        meaning: 'turn',
      },
      {
        kanji: '惜',
        meaning: 'pity',
      },
      {
        kanji: '祝',
        meaning: 'celebrate',
      },
    ],
    usedIn: [
      {
        kanji: '福',
        reading: 'ふく',
        meanings: 'good fortune',
      },
      {
        kanji: '福祉',
        reading: 'ふくし',
        meanings: 'welfare',
      },
      {
        kanji: '大福',
        reading: 'だいふく',
        meanings: 'great fortune',
      },
      {
        kanji: '慶福',
        reading: 'けいふく',
        meanings: 'happy event',
      },
    ],
  },
  {
    kanjiName: '殺',
    strokes: 10,
    grade: 4,
    freq: 581,
    meanings: [
      'Kill',
      'Murder',
      'Butcher',
      'Slice Off',
      'Split',
      'Diminish',
      'Reduce',
      'Spoil',
    ],
    on: ['さつ', 'さい', 'せつ'],
    kun: ['ころ.す', '-ごろ.し', 'そ.ぐ'],
    jlpt: 3,
    quizAnswers: ['Kill', 'Bear', 'Party', 'Supply'],
    similars: [
      {
        kanji: '枝',
        meaning: 'bough',
      },
      {
        kanji: '板',
        meaning: 'plank',
      },
      {
        kanji: '枚',
        meaning: 'sheet of...',
      },
      {
        kanji: '秋',
        meaning: 'autumn',
      },
      {
        kanji: '役',
        meaning: 'duty',
      },
      {
        kanji: '机',
        meaning: 'desk',
      },
      {
        kanji: '殴',
        meaning: 'assault',
      },
      {
        kanji: '叙',
        meaning: 'confer',
      },
      {
        kanji: '秩',
        meaning: 'regularity',
      },
      {
        kanji: '穀',
        meaning: 'cereals',
      },
    ],
    usedIn: [
      {
        kanji: '殺す',
        reading: 'ころす',
        meanings: 'to kill',
      },
      {
        kanji: '削ぐ',
        reading: 'そぐ',
        meanings: 'to chip (off)',
      },
      {
        kanji: '殺める',
        reading: 'あやめる',
        meanings: 'to wound',
      },
      {
        kanji: '殺意',
        reading: 'さつい',
        meanings: 'intent to kill',
      },
      {
        kanji: '殺害',
        reading: 'さつがい',
        meanings: 'killing',
      },
      {
        kanji: '他殺',
        reading: 'たさつ',
        meanings: 'murder',
      },
      {
        kanji: '併殺',
        reading: 'へいさつ',
        meanings: 'double play',
      },
      {
        kanji: '相殺',
        reading: 'そうさい',
        meanings: 'offset',
      },
      {
        kanji: '減殺',
        reading: 'げんさい',
        meanings: 'lessening',
      },
      {
        kanji: '殺害',
        reading: 'さつがい',
        meanings: 'killing',
      },
      {
        kanji: '刹那',
        reading: 'せつな',
        meanings: 'moment',
      },
      {
        kanji: '歳殺',
        reading: 'さいせつ',
        meanings: 'Saisetsu',
      },
    ],
  },
  {
    kanjiName: '然',
    strokes: 12,
    grade: 4,
    freq: 401,
    meanings: ['Sort Of Thing', 'So', 'If So', 'In That Case', 'Well'],
    on: ['ぜん', 'ねん'],
    kun: ['しか', 'しか.り', 'しか.し', 'さ'],
    jlpt: 3,
    quizAnswers: ['Sort Of Thing', 'Like', 'Spring (season)', 'Time'],
    similars: [
      {
        kanji: '黙',
        meaning: 'silence',
      },
      {
        kanji: '燃',
        meaning: 'burn',
      },
      {
        kanji: '騰',
        meaning: 'leaping up',
      },
      {
        kanji: '照',
        meaning: 'illuminate',
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed',
      },
      {
        kanji: '豚',
        meaning: 'pork',
      },
      {
        kanji: '黒',
        meaning: 'black',
      },
      {
        kanji: '恭',
        meaning: 'respect',
      },
      {
        kanji: '慕',
        meaning: 'pining',
      },
      {
        kanji: '悠',
        meaning: 'permanence',
      },
    ],
    usedIn: [
      {
        kanji: '然',
        reading: 'しか',
        meanings: 'like that',
      },
      {
        kanji: '然し',
        reading: 'しかし',
        meanings: 'however',
      },
      {
        kanji: '然り',
        reading: 'しかり',
        meanings: 'yes',
      },
      {
        kanji: '然し',
        reading: 'しかし',
        meanings: 'however',
      },
      {
        kanji: '而して',
        reading: 'そして',
        meanings: 'and',
      },
      {
        kanji: '然',
        reading: 'さ',
        meanings: 'so',
      },
      {
        kanji: '然らば',
        reading: 'さらば',
        meanings: 'farewell',
      },
      {
        kanji: '然然',
        reading: 'ささ',
        meanings: 'such and such',
      },
      {
        kanji: '然',
        reading: 'ぜん',
        meanings: '-like',
      },
      {
        kanji: '然諾',
        reading: 'ぜんだく',
        meanings: 'consent',
      },
      {
        kanji: '必然',
        reading: 'ひつぜん',
        meanings: 'inevitable',
      },
      {
        kanji: '漠然',
        reading: 'ばくぜん',
        meanings: 'vague',
      },
      {
        kanji: '寂然',
        reading: 'せきぜん',
        meanings: 'lonely',
      },
      {
        kanji: '自然',
        reading: 'じねん',
        meanings: 'occurring naturally (without human influence)',
      },
    ],
  },
  {
    kanjiName: '熱',
    strokes: 15,
    grade: 4,
    freq: 700,
    meanings: ['Heat', 'Temperature', 'Fever', 'Mania', 'Passion'],
    on: ['ねつ'],
    kun: ['あつ.い'],
    jlpt: 3,
    quizAnswers: ['Heat', 'Wrong Side', 'Also', 'Fast'],
    similars: [
      {
        kanji: '勢',
        meaning: 'forces',
      },
      {
        kanji: '熟',
        meaning: 'mellow',
      },
      {
        kanji: '庶',
        meaning: 'commoner',
      },
      {
        kanji: '煮',
        meaning: 'boil',
      },
      {
        kanji: '薦',
        meaning: 'recommend',
      },
      {
        kanji: '執',
        meaning: 'tenacious',
      },
      {
        kanji: '恐',
        meaning: 'fear',
      },
      {
        kanji: '封',
        meaning: 'seal',
      },
      {
        kanji: '恋',
        meaning: 'romance',
      },
      {
        kanji: '遮',
        meaning: 'intercept',
      },
    ],
    usedIn: [
      {
        kanji: '熱い',
        reading: 'あつい',
        meanings: 'hot (to the touch)',
      },
      {
        kanji: '熱い暗黒物質',
        reading: 'あついあんこくぶっしつ',
        meanings: 'hot dark matter',
      },
      {
        kanji: '熱',
        reading: 'ねつ',
        meanings: 'heat',
      },
      {
        kanji: '熱意',
        reading: 'ねつい',
        meanings: 'zeal',
      },
      {
        kanji: '発熱',
        reading: 'はつねつ',
        meanings: 'generation of heat',
      },
      {
        kanji: '解熱',
        reading: 'げねつ',
        meanings: 'lowering a fever',
      },
    ],
  },
  {
    kanjiName: '選',
    strokes: 15,
    grade: 4,
    freq: 57,
    meanings: ['Elect', 'Select', 'Choose', 'Prefer'],
    on: ['せん'],
    kun: ['えら.ぶ'],
    jlpt: 3,
    quizAnswers: ['Mimic', 'Cheap', 'Confuse', 'Elect'],
    similars: [
      {
        kanji: '違',
        meaning: 'difference',
      },
      {
        kanji: '途',
        meaning: 'route',
      },
      {
        kanji: '逮',
        meaning: 'apprehend',
      },
      {
        kanji: '無',
        meaning: 'nothingness',
      },
      {
        kanji: '洪',
        meaning: 'deluge',
      },
      {
        kanji: '遊',
        meaning: 'play',
      },
      {
        kanji: '達',
        meaning: 'accomplished',
      },
      {
        kanji: '送',
        meaning: 'escort',
      },
      {
        kanji: '遅',
        meaning: 'slow',
      },
      {
        kanji: '遠',
        meaning: 'distant',
      },
    ],
    usedIn: [
      {
        kanji: '選ぶ',
        reading: 'えらぶ',
        meanings: 'to choose',
      },
      {
        kanji: '選ぶところがない',
        reading: 'えらぶところがない',
        meanings: 'being the same thing (as)',
      },
      {
        kanji: '選る',
        reading: 'よる',
        meanings: 'to choose',
      },
      {
        kanji: '選る',
        reading: 'よる',
        meanings: 'to choose',
      },
      {
        kanji: '選',
        reading: 'せん',
        meanings: 'selection',
      },
      {
        kanji: '選挙',
        reading: 'せんきょ',
        meanings: 'election',
      },
      {
        kanji: '抽選',
        reading: 'ちゅうせん',
        meanings: 'lottery',
      },
      {
        kanji: '公選',
        reading: 'こうせん',
        meanings: 'public election',
      },
    ],
  },
  {
    kanjiName: '願',
    strokes: 19,
    grade: 4,
    freq: 894,
    meanings: ['Petition', 'Request', 'Vow', 'Wish', 'Hope'],
    on: ['がん'],
    kun: ['ねが.う', '-ねがい'],
    jlpt: 3,
    quizAnswers: ['Tribute', 'Rejoice', 'Admiral', 'Petition'],
    similars: [
      {
        kanji: '頼',
        meaning: 'trust',
      },
      {
        kanji: '頭',
        meaning: 'head',
      },
      {
        kanji: '題',
        meaning: 'topic',
      },
      {
        kanji: '傾',
        meaning: 'lean',
      },
      {
        kanji: '類',
        meaning: 'sort',
      },
      {
        kanji: '顕',
        meaning: 'appear',
      },
      {
        kanji: '顧',
        meaning: 'look back',
      },
      {
        kanji: '頻',
        meaning: 'repeatedly',
      },
      {
        kanji: '顔',
        meaning: 'face',
      },
      {
        kanji: '質',
        meaning: 'substance',
      },
    ],
    usedIn: [
      {
        kanji: '願う',
        reading: 'ねがう',
        meanings: 'to desire',
      },
      {
        kanji: '願',
        reading: 'がん',
        meanings: 'prayer',
      },
      {
        kanji: '願書',
        reading: 'がんしょ',
        meanings: '(written) application',
      },
      {
        kanji: '本願',
        reading: 'ほんがん',
        meanings: "Amida Buddha's original vow",
      },
      {
        kanji: '祈願',
        reading: 'きがん',
        meanings: 'prayer (for something)',
      },
    ],
  },
  {
    kanjiName: '情',
    strokes: 11,
    grade: 5,
    freq: 235,
    meanings: [
      'Feelings',
      'Emotion',
      'Passion',
      'Sympathy',
      'Circumstances',
      'Facts',
    ],
    on: ['じょう', 'せい'],
    kun: ['なさ.け'],
    jlpt: 3,
    quizAnswers: ['Feelings', 'Become Serious', 'Arts', 'Advancing'],
    similars: [
      {
        kanji: '清',
        meaning: 'pure',
      },
      {
        kanji: '惰',
        meaning: 'lazy',
      },
      {
        kanji: '惜',
        meaning: 'pity',
      },
      {
        kanji: '青',
        meaning: 'blue',
      },
      {
        kanji: '精',
        meaning: 'refined',
      },
      {
        kanji: '請',
        meaning: 'solicit',
      },
      {
        kanji: '晴',
        meaning: 'clear up',
      },
      {
        kanji: '消',
        meaning: 'extinguish',
      },
      {
        kanji: '溝',
        meaning: 'gutter',
      },
      {
        kanji: '湖',
        meaning: 'lake',
      },
    ],
    usedIn: [
      {
        kanji: '情け',
        reading: 'なさけ',
        meanings: 'pity',
      },
      {
        kanji: '情けない',
        reading: 'なさけない',
        meanings: 'miserable',
      },
      {
        kanji: '恋情',
        reading: 'れんじょう',
        meanings: 'love',
      },
      {
        kanji: '裏情',
        reading: 'うらなさけ',
        meanings: 'inner affection',
      },
      {
        kanji: '情',
        reading: 'じょう',
        meanings: 'feelings',
      },
      {
        kanji: '情感',
        reading: 'じょうかん',
        meanings: 'feeling',
      },
      {
        kanji: '風情',
        reading: 'ふぜい',
        meanings: 'taste',
      },
      {
        kanji: '内情',
        reading: 'ないじょう',
        meanings: 'internal conditions',
      },
      {
        kanji: '傾城',
        reading: 'けいせい',
        meanings: 'beauty',
      },
    ],
  },
  {
    kanjiName: '疑',
    strokes: 14,
    grade: 6,
    freq: 283,
    meanings: ['Doubt', 'Distrust', 'Be Suspicious', 'Question'],
    on: ['ぎ'],
    kun: ['うたが.う'],
    jlpt: 3,
    quizAnswers: ['Ground', 'Doubt', 'Bottom', 'Doctor'],
    similars: [
      {
        kanji: '凝',
        meaning: 'congeal',
      },
      {
        kanji: '擬',
        meaning: 'mimic',
      },
      {
        kanji: '釈',
        meaning: 'explanation',
      },
      {
        kanji: '礎',
        meaning: 'cornerstone',
      },
      {
        kanji: '秋',
        meaning: 'autumn',
      },
      {
        kanji: '従',
        meaning: 'accompany',
      },
      {
        kanji: '錠',
        meaning: 'lock',
      },
      {
        kanji: '徒',
        meaning: 'on foot',
      },
      {
        kanji: '迭',
        meaning: 'transfer',
      },
      {
        kanji: '旋',
        meaning: 'rotation',
      },
    ],
    usedIn: [
      {
        kanji: '疑う',
        reading: 'うたがう',
        meanings: 'to doubt',
      },
      {
        kanji: '疑',
        reading: 'ぎ',
        meanings: 'doubt',
      },
      {
        kanji: '疑義',
        reading: 'ぎぎ',
        meanings: 'doubt',
      },
      {
        kanji: '質疑',
        reading: 'しつぎ',
        meanings: 'question',
      },
      {
        kanji: '懐疑',
        reading: 'かいぎ',
        meanings: 'doubt',
      },
    ],
  },
  {
    kanjiName: '皆',
    strokes: 9,
    grade: 8,
    freq: 1267,
    meanings: ['All', 'Everything'],
    on: ['かい'],
    kun: ['みな', 'みんな'],
    jlpt: 3,
    quizAnswers: ['Non-', 'All', 'Chunk', 'Plan'],
    similars: [
      {
        kanji: '階',
        meaning: 'storey',
      },
      {
        kanji: '伯',
        meaning: 'chief',
      },
      {
        kanji: '旨',
        meaning: 'delicious',
      },
      {
        kanji: '留',
        meaning: 'detain',
      },
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
      {
        kanji: '者',
        meaning: 'someone',
      },
      {
        kanji: '省',
        meaning: 'government ministry',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '首',
        meaning: 'neck',
      },
      {
        kanji: '拍',
        meaning: 'clap',
      },
    ],
    usedIn: [
      {
        kanji: '皆',
        reading: 'みんな',
        meanings: 'everyone',
      },
      {
        kanji: '皆様',
        reading: 'みなさま',
        meanings: 'everyone',
      },
      {
        kanji: '皆が皆',
        reading: 'みんながみんな',
        meanings: 'each and all',
      },
      {
        kanji: '皆々',
        reading: 'みなみな',
        meanings: 'all',
      },
      {
        kanji: '皆',
        reading: 'みんな',
        meanings: 'everyone',
      },
      {
        kanji: '皆が皆',
        reading: 'みんながみんな',
        meanings: 'each and all',
      },
      {
        kanji: '皆が皆',
        reading: 'みんながみんな',
        meanings: 'each and all',
      },
      {
        kanji: '皆無',
        reading: 'かいむ',
        meanings: 'nonexistent',
      },
      {
        kanji: '皆目',
        reading: 'かいもく',
        meanings: 'entirely',
      },
      {
        kanji: '悉皆',
        reading: 'しっかい',
        meanings: 'all',
      },
    ],
  },
  {
    kanjiName: '例',
    strokes: 8,
    grade: 4,
    freq: 399,
    meanings: ['Example', 'Custom', 'Usage', 'Precedent'],
    on: ['れい'],
    kun: ['たと.える'],
    jlpt: 3,
    quizAnswers: ['Expectation', 'Volume', 'Example', 'Strictness'],
    similars: [
      {
        kanji: '列',
        meaning: 'file',
      },
      {
        kanji: '仮',
        meaning: 'sham',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '序',
        meaning: 'preface',
      },
      {
        kanji: '術',
        meaning: 'art',
      },
      {
        kanji: '利',
        meaning: 'profit',
      },
      {
        kanji: '伴',
        meaning: 'consort',
      },
      {
        kanji: '舟',
        meaning: 'boat',
      },
      {
        kanji: '卵',
        meaning: 'egg',
      },
      {
        kanji: '何',
        meaning: 'what',
      },
    ],
    usedIn: [
      {
        kanji: '例える',
        reading: 'たとえる',
        meanings: 'to compare (something) to',
      },
      {
        kanji: '例えるなら',
        reading: 'たとえるなら',
        meanings: 'for example',
      },
      {
        kanji: '例',
        reading: 'れい',
        meanings: 'example',
      },
      {
        kanji: '例会',
        reading: 'れいかい',
        meanings: 'regular meeting',
      },
      {
        kanji: '恒例',
        reading: 'こうれい',
        meanings: 'established practice',
      },
      {
        kanji: '定例',
        reading: 'ていれい',
        meanings: 'regular',
      },
    ],
  },
  {
    kanjiName: '参',
    strokes: 8,
    grade: 4,
    freq: 201,
    meanings: [
      'Nonplussed',
      'Three (in Documents)',
      'Going',
      'Coming',
      'Visiting',
      'Visit',
      'Be Defeated',
      'Die',
      'Be Madly In Love',
      'Participate',
      'Take Part In',
    ],
    on: ['さん', 'しん'],
    kun: ['まい.る', 'まい-', 'まじわる', 'みつ'],
    jlpt: 3,
    quizAnswers: ['Villa', 'Dynasty', 'Grease', 'Nonplussed'],
    similars: [
      {
        kanji: '惨',
        meaning: 'wretched',
      },
      {
        kanji: '珍',
        meaning: 'rare',
      },
      {
        kanji: '修',
        meaning: 'discipline',
      },
      {
        kanji: '家',
        meaning: 'house',
      },
      {
        kanji: '彩',
        meaning: 'coloring',
      },
      {
        kanji: '弁',
        meaning: 'valve',
      },
      {
        kanji: '塚',
        meaning: 'hillock',
      },
      {
        kanji: '致',
        meaning: 'doth',
      },
      {
        kanji: '形',
        meaning: 'shape',
      },
      {
        kanji: '隊',
        meaning: 'regiment',
      },
    ],
    usedIn: [
      {
        kanji: '参る',
        reading: 'まいる',
        meanings: 'to go',
      },
      {
        kanji: '三',
        reading: 'さん',
        meanings: 'three',
      },
      {
        kanji: '参院',
        reading: 'さんいん',
        meanings:
          'House of Councillors (upper house of the National Diet of Japan)',
      },
      {
        kanji: '日参',
        reading: 'にっさん',
        meanings: 'daily visit to a temple or shrine (to worship)',
      },
      {
        kanji: '推参',
        reading: 'すいさん',
        meanings: 'paying an unannounced visit',
      },
      {
        kanji: '参',
        reading: 'しん',
        meanings: 'Chinese Three Stars constellation (one of the 28 mansions)',
      },
      {
        kanji: '参差',
        reading: 'しんし',
        meanings: 'of uneven heights or lengths',
      },
    ],
  },
  {
    kanjiName: '完',
    strokes: 7,
    grade: 4,
    freq: 595,
    meanings: ['Perfect', 'Completion', 'End'],
    on: ['かん'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Penalty', 'Perfect', 'Perfume', 'Offer'],
    similars: [
      {
        kanji: '宗',
        meaning: 'religion',
      },
      {
        kanji: '実',
        meaning: 'reality',
      },
      {
        kanji: '宅',
        meaning: 'home',
      },
      {
        kanji: '光',
        meaning: 'ray',
      },
      {
        kanji: '宇',
        meaning: 'eaves',
      },
      {
        kanji: '院',
        meaning: 'Inst.',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '定',
        meaning: 'determine',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
    ],
    usedIn: [
      {
        kanji: '完',
        reading: 'かん',
        meanings: 'The End',
      },
      {
        kanji: '完結',
        reading: 'かんけつ',
        meanings: 'conclusion',
      },
      {
        kanji: '未完',
        reading: 'みかん',
        meanings: 'incomplete',
      },
      {
        kanji: '追完',
        reading: 'ついかん',
        meanings: 'subsequent completion',
      },
    ],
  },
  {
    kanjiName: '念',
    strokes: 8,
    grade: 4,
    freq: 390,
    meanings: [
      'Wish',
      'Sense',
      'Idea',
      'Thought',
      'Feeling',
      'Desire',
      'Attention',
    ],
    on: ['ねん'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Cipher', 'Selection', 'Wish', 'Command'],
    similars: [
      {
        kanji: '志',
        meaning: 'intention',
      },
      {
        kanji: '応',
        meaning: 'apply',
      },
      {
        kanji: '忌',
        meaning: 'mourning',
      },
      {
        kanji: '忘',
        meaning: 'forget',
      },
      {
        kanji: '怒',
        meaning: 'angry',
      },
      {
        kanji: '急',
        meaning: 'hurry',
      },
      {
        kanji: '悠',
        meaning: 'permanence',
      },
      {
        kanji: '会',
        meaning: 'meeting',
      },
      {
        kanji: '心',
        meaning: 'heart',
      },
      {
        kanji: '含',
        meaning: 'contain',
      },
    ],
    usedIn: [
      {
        kanji: '念',
        reading: 'ねん',
        meanings: 'sense',
      },
      {
        kanji: '念願',
        reading: 'ねんがん',
        meanings: "one's heart's desire",
      },
      {
        kanji: '執念',
        reading: 'しゅうねん',
        meanings: 'tenacity',
      },
      {
        kanji: '通念',
        reading: 'つうねん',
        meanings: 'common idea',
      },
    ],
  },
  {
    kanjiName: '折',
    strokes: 7,
    grade: 4,
    freq: 962,
    meanings: ['Fold', 'Break', 'Fracture', 'Bend', 'Yield', 'Submit'],
    on: ['せつ', 'しゃく'],
    kun: ['お.る', 'おり', 'お.り', '-お.り', 'お.れる'],
    jlpt: 3,
    quizAnswers: ['Die', 'Say', 'Fold', 'Village'],
    similars: [
      {
        kanji: '抑',
        meaning: 'repress',
      },
      {
        kanji: '逝',
        meaning: 'departed',
      },
      {
        kanji: '哲',
        meaning: 'philosophy',
      },
      {
        kanji: '拾',
        meaning: 'pick up',
      },
      {
        kanji: '採',
        meaning: 'pick',
      },
      {
        kanji: '析',
        meaning: 'chop',
      },
      {
        kanji: '抱',
        meaning: 'embrace',
      },
      {
        kanji: '所',
        meaning: 'place',
      },
      {
        kanji: '抵',
        meaning: 'resist',
      },
      {
        kanji: '拝',
        meaning: 'worship',
      },
    ],
    usedIn: [
      {
        kanji: '折る',
        reading: 'おる',
        meanings: 'to break',
      },
      {
        kanji: '折',
        reading: 'おり',
        meanings: 'opportunity',
      },
      {
        kanji: '折り合い',
        reading: 'おりあい',
        meanings: 'agreement (e.g. business',
      },
      {
        kanji: '折々',
        reading: 'おりおり',
        meanings: 'occasionally',
      },
      {
        kanji: '指折り',
        reading: 'ゆびおり',
        meanings: 'leading',
      },
      {
        kanji: '折',
        reading: 'おり',
        meanings: 'opportunity',
      },
      {
        kanji: '折り合い',
        reading: 'おりあい',
        meanings: 'agreement (e.g. business',
      },
      {
        kanji: '折々',
        reading: 'おりおり',
        meanings: 'occasionally',
      },
      {
        kanji: '指折り',
        reading: 'ゆびおり',
        meanings: 'leading',
      },
      {
        kanji: '折れる',
        reading: 'おれる',
        meanings: 'to break',
      },
      {
        kanji: '曲折',
        reading: 'きょくせつ',
        meanings: 'bending',
      },
      {
        kanji: '屈折',
        reading: 'くっせつ',
        meanings: 'bending',
      },
      {
        kanji: '折伏',
        reading: 'しゃくぶく',
        meanings: 'preaching down',
      },
    ],
  },
  {
    kanjiName: '望',
    strokes: 11,
    grade: 4,
    freq: 470,
    meanings: [
      'Ambition',
      'Full Moon',
      'Hope',
      'Desire',
      'Aspire To',
      'Expect',
    ],
    on: ['ぼう', 'もう'],
    kun: ['のぞ.む', 'もち'],
    jlpt: 3,
    quizAnswers: ['Ambition', 'Exert', 'Accuse', 'Illness'],
    similars: [
      {
        kanji: '産',
        meaning: 'products',
      },
      {
        kanji: '童',
        meaning: 'juvenile',
      },
      {
        kanji: '肢',
        meaning: 'limb',
      },
      {
        kanji: '皇',
        meaning: 'emperor',
      },
      {
        kanji: '肝',
        meaning: 'liver',
      },
      {
        kanji: '座',
        meaning: 'squat',
      },
      {
        kanji: '理',
        meaning: 'logic',
      },
      {
        kanji: '厘',
        meaning: 'rin',
      },
      {
        kanji: '柱',
        meaning: 'pillar',
      },
      {
        kanji: '栓',
        meaning: 'plug',
      },
    ],
    usedIn: [
      {
        kanji: '望む',
        reading: 'のぞむ',
        meanings: 'to desire',
      },
      {
        kanji: '望むところ',
        reading: 'のぞむところ',
        meanings: 'what one desires',
      },
      {
        kanji: '望',
        reading: 'もち',
        meanings: 'full moon',
      },
      {
        kanji: '望月',
        reading: 'もちづき',
        meanings: 'full moon',
      },
      {
        kanji: '望',
        reading: 'もち',
        meanings: 'full moon',
      },
      {
        kanji: '望遠鏡',
        reading: 'ぼうえんきょう',
        meanings: 'telescope',
      },
      {
        kanji: '眺望',
        reading: 'ちょうぼう',
        meanings: 'prospect',
      },
      {
        kanji: '太公望',
        reading: 'たいこうぼう',
        meanings: '(avid) angler',
      },
      {
        kanji: '本望',
        reading: 'ほんもう',
        meanings: 'long-cherished ambition',
      },
      {
        kanji: '宿望',
        reading: 'しゅくぼう',
        meanings: 'long-cherished desire',
      },
    ],
  },
  {
    kanjiName: '束',
    strokes: 7,
    grade: 4,
    freq: 918,
    meanings: [
      'Bundle',
      'Sheaf',
      'Ream',
      'Tie In Bundles',
      'Govern',
      'Manage',
      'Control',
    ],
    on: ['そく'],
    kun: ['たば', 'たば.ねる', 'つか', 'つか.ねる'],
    jlpt: 3,
    quizAnswers: ['Waterfall', 'Bundle', 'State', 'Edge'],
    similars: [
      {
        kanji: '吏',
        meaning: 'officer',
      },
      {
        kanji: '豆',
        meaning: 'beans',
      },
      {
        kanji: '史',
        meaning: 'history',
      },
      {
        kanji: '保',
        meaning: 'protect',
      },
      {
        kanji: '勅',
        meaning: 'imperial order',
      },
      {
        kanji: '故',
        meaning: 'happenstance',
      },
      {
        kanji: '架',
        meaning: 'erect',
      },
      {
        kanji: '衷',
        meaning: 'inmost',
      },
      {
        kanji: '哀',
        meaning: 'pathetic',
      },
      {
        kanji: '味',
        meaning: 'flavor',
      },
    ],
    usedIn: [
      {
        kanji: '束',
        reading: 'たば',
        meanings: 'bundle',
      },
      {
        kanji: '束ねる',
        reading: 'たばねる',
        meanings: 'to tie up in a bundle (e.g. straw',
      },
      {
        kanji: '鍵束',
        reading: 'かぎたば',
        meanings: 'bunch of keys',
      },
      {
        kanji: '麦束',
        reading: 'むぎたば',
        meanings: 'wheat sheaf',
      },
      {
        kanji: '束ねる',
        reading: 'たばねる',
        meanings: 'to tie up in a bundle (e.g. straw',
      },
      {
        kanji: '束',
        reading: 'つか',
        meanings: 'strut',
      },
      {
        kanji: '束ねる',
        reading: 'たばねる',
        meanings: 'to tie up in a bundle (e.g. straw',
      },
      {
        kanji: '不束',
        reading: 'ふつつか',
        meanings: 'inexperienced',
      },
      {
        kanji: '矢束',
        reading: 'やつか',
        meanings: 'arrow length',
      },
      {
        kanji: '束ねる',
        reading: 'たばねる',
        meanings: 'to tie up in a bundle (e.g. straw',
      },
      {
        kanji: '束',
        reading: 'そく',
        meanings: 'lattice',
      },
      {
        kanji: '束縛',
        reading: 'そくばく',
        meanings: 'restraint',
      },
      {
        kanji: '結束',
        reading: 'けっそく',
        meanings: 'union',
      },
      {
        kanji: '口約束',
        reading: 'くちやくそく',
        meanings: 'verbal promise',
      },
    ],
  },
  {
    kanjiName: '残',
    strokes: 10,
    grade: 4,
    freq: 380,
    meanings: ['Remainder', 'Leftover', 'Balance'],
    on: ['ざん', 'さん'],
    kun: ['のこ.る', 'のこ.す', 'そこな.う', 'のこ.り'],
    jlpt: 3,
    quizAnswers: ['Wretched', 'Plaque', 'Trouble', 'Remainder'],
    similars: [
      {
        kanji: '殊',
        meaning: 'particularly',
      },
      {
        kanji: '桟',
        meaning: 'scaffold',
      },
      {
        kanji: '浅',
        meaning: 'shallow',
      },
      {
        kanji: '銭',
        meaning: 'coin',
      },
      {
        kanji: '械',
        meaning: 'contraption',
      },
      {
        kanji: '執',
        meaning: 'tenacious',
      },
      {
        kanji: '傑',
        meaning: 'greatness',
      },
      {
        kanji: '義',
        meaning: 'righteousness',
      },
      {
        kanji: '戒',
        meaning: 'commandment',
      },
      {
        kanji: '承',
        meaning: 'acquiesce',
      },
    ],
    usedIn: [
      {
        kanji: '残る',
        reading: 'のこる',
        meanings: 'to remain',
      },
      {
        kanji: '残す',
        reading: 'のこす',
        meanings: 'to leave (behind)',
      },
      {
        kanji: '残り',
        reading: 'のこり',
        meanings: 'remnant',
      },
      {
        kanji: '残り惜しい',
        reading: 'のこりおしい',
        meanings: 'regrettable',
      },
      {
        kanji: '残',
        reading: 'ざん',
        meanings: 'remaining',
      },
      {
        kanji: '残虐',
        reading: 'ざんぎゃく',
        meanings: 'cruel',
      },
      {
        kanji: '敗残',
        reading: 'はいざん',
        meanings: 'survival after defeat',
      },
      {
        kanji: '遺残',
        reading: 'いざん',
        meanings: 'persistence',
      },
    ],
  },
  {
    kanjiName: '求',
    strokes: 7,
    grade: 4,
    freq: 220,
    meanings: ['Request', 'Want', 'Wish For', 'Require', 'Demand'],
    on: ['きゅう', 'ぐ'],
    kun: ['もと.める'],
    jlpt: 3,
    quizAnswers: [
      'Incur',
      'Due',
      'Ancient Peace-preservation Centers',
      'Request',
    ],
    similars: [
      {
        kanji: '球',
        meaning: 'ball',
      },
      {
        kanji: '灰',
        meaning: 'ashes',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '扱',
        meaning: 'handle',
      },
      {
        kanji: '払',
        meaning: 'pay',
      },
      {
        kanji: '状',
        meaning: 'status quo',
      },
      {
        kanji: '挑',
        meaning: 'challenge',
      },
      {
        kanji: '逮',
        meaning: 'apprehend',
      },
      {
        kanji: '救',
        meaning: 'salvation',
      },
    ],
    usedIn: [
      {
        kanji: '求める',
        reading: 'もとめる',
        meanings: 'to want',
      },
      {
        kanji: '求職',
        reading: 'きゅうしょく',
        meanings: 'job hunting',
      },
      {
        kanji: '求刑',
        reading: 'きゅうけい',
        meanings: 'recommended sentence',
      },
      {
        kanji: '身代金要求',
        reading: 'みのしろきんようきゅう',
        meanings: 'ransom demand',
      },
      {
        kanji: '希求',
        reading: 'ききゅう',
        meanings: 'longing',
      },
      {
        kanji: '求道',
        reading: 'きゅうどう',
        meanings: 'seeking after truth',
      },
      {
        kanji: '求道者',
        reading: 'きゅうどうしゃ',
        meanings: 'seeker after truth',
      },
      {
        kanji: '勤求',
        reading: 'ごんぐ',
        meanings: 'inquiring the Buddha way',
      },
      {
        kanji: '欣求',
        reading: 'ごんぐ',
        meanings: 'earnest aspiration (to go to paradise)',
      },
    ],
  },
  {
    kanjiName: '約',
    strokes: 9,
    grade: 4,
    freq: 94,
    meanings: ['Promise', 'Approximately', 'Shrink'],
    on: ['やく'],
    kun: ['つづ.まる', 'つづ.める', 'つづま.やか'],
    jlpt: 3,
    quizAnswers: ['Nine', 'Blame', 'Comfortable', 'Promise'],
    similars: [
      {
        kanji: '紛',
        meaning: 'distract',
      },
      {
        kanji: '級',
        meaning: 'class',
      },
      {
        kanji: '終',
        meaning: 'end',
      },
      {
        kanji: '純',
        meaning: 'genuine',
      },
      {
        kanji: '紙',
        meaning: 'paper',
      },
      {
        kanji: '紀',
        meaning: 'chronicle',
      },
      {
        kanji: '絵',
        meaning: 'picture',
      },
      {
        kanji: '紅',
        meaning: 'crimson',
      },
      {
        kanji: '糾',
        meaning: 'twist',
      },
      {
        kanji: '糸',
        meaning: 'thread',
      },
    ],
    usedIn: [
      {
        kanji: '約まる',
        reading: 'つづまる',
        meanings: 'to compress',
      },
      {
        kanji: '約める',
        reading: 'つづめる',
        meanings: 'to abridge',
      },
      {
        kanji: '約やか',
        reading: 'つづまやか',
        meanings: 'concise',
      },
      {
        kanji: '約',
        reading: 'やく',
        meanings: 'approximately',
      },
      {
        kanji: '約束',
        reading: 'やくそく',
        meanings: 'promise',
      },
      {
        kanji: '締約',
        reading: 'ていやく',
        meanings: 'conclusion of a treaty',
      },
      {
        kanji: '成約',
        reading: 'せいやく',
        meanings: 'conclusion of a contract',
      },
    ],
  },
  {
    kanjiName: '性',
    strokes: 8,
    grade: 5,
    freq: 104,
    meanings: ['Sex', 'Gender', 'Nature'],
    on: ['せい', 'しょう'],
    kun: ['さが'],
    jlpt: 3,
    quizAnswers: ['Sex', 'Sway', 'Rectify', 'Trees'],
    similars: [
      {
        kanji: '注',
        meaning: 'pour',
      },
      {
        kanji: '悔',
        meaning: 'repent',
      },
      {
        kanji: '洗',
        meaning: 'wash',
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice',
      },
      {
        kanji: '涯',
        meaning: 'horizon',
      },
      {
        kanji: '汽',
        meaning: 'vapor',
      },
      {
        kanji: '怖',
        meaning: 'dreadful',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
      {
        kanji: '任',
        meaning: 'responsibility',
      },
    ],
    usedIn: [
      {
        kanji: '性',
        reading: 'さが',
        meanings: "one's nature",
      },
      {
        kanji: '性',
        reading: 'せい',
        meanings: 'nature (of a person)',
      },
      {
        kanji: '性格',
        reading: 'せいかく',
        meanings: 'character (of a person)',
      },
      {
        kanji: '耐性',
        reading: 'たいせい',
        meanings: 'resistance (e.g. to antibiotics)',
      },
      {
        kanji: '社会性',
        reading: 'しゃかいせい',
        meanings: 'sociality',
      },
      {
        kanji: '性',
        reading: 'しょう',
        meanings: 'nature',
      },
      {
        kanji: '性根',
        reading: 'しょうね',
        meanings: 'nature',
      },
      {
        kanji: '冷え性',
        reading: 'ひえしょう',
        meanings: 'sensitivity to cold',
      },
      {
        kanji: '凝り性',
        reading: 'こりしょう',
        meanings: 'tendency to become totally absorbed in something',
      },
    ],
  },
  {
    kanjiName: '格',
    strokes: 10,
    grade: 5,
    freq: 281,
    meanings: [
      'Status',
      'Rank',
      'Capacity',
      'Character',
      'Case (law, Grammar)',
    ],
    on: ['かく', 'こう', 'きゃく', 'ごう'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Status', 'Drink', 'Ruling', 'Snake'],
    similars: [
      {
        kanji: '枯',
        meaning: 'wither',
      },
      {
        kanji: '俗',
        meaning: 'vulgar',
      },
      {
        kanji: '酪',
        meaning: 'dairy products',
      },
      {
        kanji: '絡',
        meaning: 'entwine',
      },
      {
        kanji: '検',
        meaning: 'examination',
      },
      {
        kanji: '析',
        meaning: 'chop',
      },
      {
        kanji: '客',
        meaning: 'guest',
      },
      {
        kanji: '各',
        meaning: 'each',
      },
      {
        kanji: '和',
        meaning: 'harmony',
      },
      {
        kanji: '松',
        meaning: 'pine tree',
      },
    ],
    usedIn: [
      {
        kanji: '格',
        reading: 'かく',
        meanings: 'status',
      },
      {
        kanji: '格上げ',
        reading: 'かくあげ',
        meanings: 'status elevation',
      },
      {
        kanji: '規格',
        reading: 'きかく',
        meanings: 'standard',
      },
      {
        kanji: '低価格',
        reading: 'ていかかく',
        meanings: 'low price',
      },
      {
        kanji: '格子',
        reading: 'こうし',
        meanings: 'lattice',
      },
      {
        kanji: '格子柄',
        reading: 'こうしがら',
        meanings: 'check pattern',
      },
      {
        kanji: '格',
        reading: 'きゃく',
        meanings: 'amendment (of the ritsuryō)',
      },
      {
        kanji: '格式',
        reading: 'かくしき',
        meanings: 'formality',
      },
      {
        kanji: '弘仁格',
        reading: 'こうにんきゃく',
        meanings: 'Ordinance of the Konin Era',
      },
      {
        kanji: '格組',
        reading: 'ごうぐみ',
        meanings: 'wooden framework',
      },
      {
        kanji: '格天井',
        reading: 'ごうてんじょう',
        meanings: 'coffered ceiling',
      },
    ],
  },
  {
    kanjiName: '能',
    strokes: 10,
    grade: 5,
    freq: 273,
    meanings: ['Ability', 'Talent', 'Skill', 'Capacity'],
    on: ['のう'],
    kun: ['よ.く'],
    jlpt: 3,
    quizAnswers: ['Ability', 'Freeze', 'Pay Respects', 'Villa'],
    similars: [
      {
        kanji: '態',
        meaning: 'attitude',
      },
      {
        kanji: '罷',
        meaning: 'quit',
      },
      {
        kanji: '渇',
        meaning: 'thirst',
      },
      {
        kanji: '撤',
        meaning: 'remove',
      },
      {
        kanji: '徹',
        meaning: 'penetrate',
      },
      {
        kanji: '散',
        meaning: 'scatter',
      },
      {
        kanji: '通',
        meaning: 'traffic',
      },
      {
        kanji: '褐',
        meaning: 'brown',
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)',
      },
      {
        kanji: '混',
        meaning: 'mix',
      },
    ],
    usedIn: [
      {
        kanji: '良く',
        reading: 'よく',
        meanings: 'nicely',
      },
      {
        kanji: '良く良く',
        reading: 'よくよく',
        meanings: 'carefully',
      },
      {
        kanji: '能う',
        reading: 'あたう',
        meanings: 'to be able (to do)',
      },
      {
        kanji: '能う限り',
        reading: 'あたうかぎり',
        meanings: 'as much as possible',
      },
      {
        kanji: '能',
        reading: 'のう',
        meanings: 'talent',
      },
      {
        kanji: '能楽',
        reading: 'のうがく',
        meanings: 'noh play',
      },
      {
        kanji: '有能',
        reading: 'ゆうのう',
        meanings: 'able',
      },
      {
        kanji: '芸能',
        reading: 'げいのう',
        meanings: 'public entertainment',
      },
    ],
  },
  {
    kanjiName: '術',
    strokes: 11,
    grade: 5,
    freq: 350,
    meanings: [
      'Art',
      'Technique',
      'Skill',
      'Means',
      'Trick',
      'Resources',
      'Magic',
    ],
    on: ['じゅつ'],
    kun: ['すべ'],
    jlpt: 3,
    quizAnswers: ['Strict', 'Locate', 'Chastity', 'Art'],
    similars: [
      {
        kanji: '料',
        meaning: 'fee',
      },
      {
        kanji: '街',
        meaning: 'boulevard',
      },
      {
        kanji: '秩',
        meaning: 'regularity',
      },
      {
        kanji: '耗',
        meaning: 'decrease',
      },
      {
        kanji: '秋',
        meaning: 'autumn',
      },
      {
        kanji: '柱',
        meaning: 'pillar',
      },
      {
        kanji: '粋',
        meaning: 'chic',
      },
      {
        kanji: '迷',
        meaning: 'astray',
      },
      {
        kanji: '行',
        meaning: 'going',
      },
      {
        kanji: '例',
        meaning: 'example',
      },
    ],
    usedIn: [
      {
        kanji: '術',
        reading: 'すべ',
        meanings: 'way',
      },
      {
        kanji: '術無し',
        reading: 'すべなし',
        meanings: 'having no choice',
      },
      {
        kanji: 'なす術',
        reading: 'なすすべ',
        meanings: 'means',
      },
      {
        kanji: '為ん術',
        reading: 'せんすべ',
        meanings: '(proper) methods',
      },
      {
        kanji: '術',
        reading: 'じゅつ',
        meanings: 'art',
      },
      {
        kanji: '術後',
        reading: 'じゅつご',
        meanings: 'postoperative',
      },
      {
        kanji: '奇術',
        reading: 'きじゅつ',
        meanings: 'magic',
      },
      {
        kanji: '占星術',
        reading: 'せんせいじゅつ',
        meanings: 'astrology',
      },
    ],
  },
  {
    kanjiName: '晴',
    strokes: 12,
    grade: 2,
    freq: 1022,
    meanings: ['Clear Up'],
    on: ['せい'],
    kun: ['は.れる', 'は.れ', 'は.れ-', '-ば.れ', 'は.らす'],
    jlpt: 3,
    quizAnswers: ['Old Man', 'Mulberry', 'Clear Up', 'All'],
    similars: [
      {
        kanji: '暑',
        meaning: 'sultry',
      },
      {
        kanji: '賄',
        meaning: 'bribe',
      },
      {
        kanji: '清',
        meaning: 'pure',
      },
      {
        kanji: '時',
        meaning: 'time',
      },
      {
        kanji: '情',
        meaning: 'feelings',
      },
      {
        kanji: '青',
        meaning: 'blue',
      },
      {
        kanji: '輸',
        meaning: 'transport',
      },
      {
        kanji: '暗',
        meaning: 'darkness',
      },
      {
        kanji: '署',
        meaning: 'signature',
      },
      {
        kanji: '購',
        meaning: 'subscription',
      },
    ],
    usedIn: [
      {
        kanji: '晴れる',
        reading: 'はれる',
        meanings: 'to clear up',
      },
      {
        kanji: '晴れ',
        reading: 'はれ',
        meanings: 'clear weather',
      },
      {
        kanji: '晴れる',
        reading: 'はれる',
        meanings: 'to clear up',
      },
      {
        kanji: '晴らす',
        reading: 'はらす',
        meanings: 'to dispel',
      },
      {
        kanji: '晴天',
        reading: 'せいてん',
        meanings: 'fine weather (i.e. little or no clouds)',
      },
      {
        kanji: '晴雨',
        reading: 'せいう',
        meanings: '(clear or rainy) weather',
      },
      {
        kanji: '好晴',
        reading: 'こうせい',
        meanings: 'clear weather',
      },
      {
        kanji: '陰晴',
        reading: 'いんせい',
        meanings: 'unsettled (fine and cloudy) weather',
      },
    ],
  },
  {
    kanjiName: '列',
    strokes: 6,
    grade: 3,
    freq: 927,
    meanings: ['File', 'Row', 'Rank', 'Tier', 'Column'],
    on: ['れつ', 'れ'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['End', 'Look Back', 'File', 'Long Ago'],
    similars: [
      {
        kanji: '例',
        meaning: 'example',
      },
      {
        kanji: '序',
        meaning: 'preface',
      },
      {
        kanji: '外',
        meaning: 'outside',
      },
      {
        kanji: '死',
        meaning: 'death',
      },
      {
        kanji: '烈',
        meaning: 'ardent',
      },
      {
        kanji: '否',
        meaning: 'negate',
      },
      {
        kanji: '返',
        meaning: 'return',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '匠',
        meaning: 'artisan',
      },
      {
        kanji: '刻',
        meaning: 'engrave',
      },
    ],
    usedIn: [
      {
        kanji: '列',
        reading: 'れつ',
        meanings: 'row',
      },
      {
        kanji: '列伝',
        reading: 'れつでん',
        meanings: 'series of biographies',
      },
      {
        kanji: '配列',
        reading: 'はいれつ',
        meanings: 'arrangement',
      },
      {
        kanji: '系列',
        reading: 'けいれつ',
        meanings: 'series',
      },
      {
        kanji: '列',
        reading: 'れつ',
        meanings: 'row',
      },
      {
        kanji: '列車',
        reading: 'れっしゃ',
        meanings: 'train',
      },
      {
        kanji: '加密列',
        reading: 'かみつれ',
        meanings: 'German chamomile (Matricaria recutita)',
      },
    ],
  },
  {
    kanjiName: '式',
    strokes: 6,
    grade: 3,
    freq: 251,
    meanings: [
      'Style',
      'Ceremony',
      'Rite',
      'Function',
      'Method',
      'System',
      'Form',
      'Expression',
    ],
    on: ['しき'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Soul', 'Style', 'Room', 'Second'],
    similars: [
      {
        kanji: '弐',
        meaning: 'II',
      },
      {
        kanji: '武',
        meaning: 'warrior',
      },
      {
        kanji: '戒',
        meaning: 'commandment',
      },
      {
        kanji: '封',
        meaning: 'seal',
      },
      {
        kanji: '威',
        meaning: 'intimidate',
      },
      {
        kanji: '茂',
        meaning: 'overgrown',
      },
      {
        kanji: '玉',
        meaning: 'jewel',
      },
      {
        kanji: '共',
        meaning: 'together',
      },
      {
        kanji: '巧',
        meaning: 'adroit',
      },
      {
        kanji: '示',
        meaning: 'show',
      },
    ],
    usedIn: [
      {
        kanji: '式',
        reading: 'しき',
        meanings: 'way',
      },
      {
        kanji: '式場',
        reading: 'しきじょう',
        meanings: 'ceremonial hall (e.g. wedding',
      },
      {
        kanji: '硬式',
        reading: 'こうしき',
        meanings: 'hard (esp. of hardball',
      },
      {
        kanji: '型式',
        reading: 'かたしき',
        meanings: 'model (e.g. of a vehicle)',
      },
    ],
  },
  {
    kanjiName: '信',
    strokes: 9,
    grade: 4,
    freq: 208,
    meanings: ['Faith', 'Truth', 'Fidelity', 'Trust'],
    on: ['しん'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Someone', 'Livestock', 'Faith', 'Verify'],
    similars: [
      {
        kanji: '言',
        meaning: 'say',
      },
      {
        kanji: '倍',
        meaning: 'double',
      },
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '舎',
        meaning: 'cottage',
      },
      {
        kanji: '伴',
        meaning: 'consort',
      },
      {
        kanji: '誓',
        meaning: 'vow',
      },
      {
        kanji: '誉',
        meaning: 'reputation',
      },
      {
        kanji: '個',
        meaning: 'individual',
      },
      {
        kanji: '害',
        meaning: 'harm',
      },
    ],
    usedIn: [
      {
        kanji: '信',
        reading: 'しん',
        meanings: 'honesty',
      },
      {
        kanji: '信金',
        reading: 'しんきん',
        meanings: 'credit union',
      },
      {
        kanji: '配信',
        reading: 'はいしん',
        meanings: 'distribution (of information',
      },
      {
        kanji: '外信',
        reading: 'がいしん',
        meanings: 'external communication',
      },
    ],
  },
  {
    kanjiName: '単',
    strokes: 9,
    grade: 4,
    freq: 586,
    meanings: ['Simple', 'One', 'Single', 'Merely'],
    on: ['たん'],
    kun: ['ひとえ'],
    jlpt: 3,
    quizAnswers: ['Carry In Hand', 'Marketing', 'Stipend', 'Simple'],
    similars: [
      {
        kanji: '巣',
        meaning: 'nest',
      },
      {
        kanji: '軍',
        meaning: 'army',
      },
      {
        kanji: '弾',
        meaning: 'bullet',
      },
      {
        kanji: '悼',
        meaning: 'lament',
      },
      {
        kanji: '章',
        meaning: 'badge',
      },
      {
        kanji: '庫',
        meaning: 'warehouse',
      },
      {
        kanji: '戦',
        meaning: 'war',
      },
      {
        kanji: '禅',
        meaning: 'Zen',
      },
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
      {
        kanji: '恒',
        meaning: 'constancy',
      },
    ],
    usedIn: [
      {
        kanji: '一重',
        reading: 'ひとえ',
        meanings: 'one layer',
      },
      {
        kanji: '単衣',
        reading: 'たんい',
        meanings: 'unlined kimono',
      },
      {
        kanji: '十二単',
        reading: 'じゅうにひとえ',
        meanings: 'twelve-layered ceremonial kimono (worn by a court lady)',
      },
      {
        kanji: '単',
        reading: 'たん',
        meanings: 'single',
      },
      {
        kanji: '単位',
        reading: 'たんい',
        meanings: 'unit',
      },
      {
        kanji: '菜単',
        reading: 'さいたん',
        meanings: 'menu (at a Chinese restaurant)',
      },
      {
        kanji: '指定単',
        reading: 'していたん',
        meanings: 'designated money trust',
      },
    ],
  },
  {
    kanjiName: '変',
    strokes: 9,
    grade: 4,
    freq: 238,
    meanings: ['Unusual', 'Change', 'Strange'],
    on: ['へん'],
    kun: ['か.わる', 'か.わり', 'か.える'],
    jlpt: 3,
    quizAnswers: ['Hostel', 'Nook', 'Vice', 'Unusual'],
    similars: [
      {
        kanji: '赦',
        meaning: 'pardon',
      },
      {
        kanji: '交',
        meaning: 'mingle',
      },
      {
        kanji: '叔',
        meaning: 'uncle',
      },
      {
        kanji: '恋',
        meaning: 'romance',
      },
      {
        kanji: '疲',
        meaning: 'exhausted',
      },
      {
        kanji: '衣',
        meaning: 'garment',
      },
      {
        kanji: '夜',
        meaning: 'night',
      },
      {
        kanji: '赤',
        meaning: 'red',
      },
      {
        kanji: '叙',
        meaning: 'confer',
      },
      {
        kanji: '放',
        meaning: 'set free',
      },
    ],
    usedIn: [
      {
        kanji: '変わる',
        reading: 'かわる',
        meanings: 'to change',
      },
      {
        kanji: '変わり',
        reading: 'かわり',
        meanings: 'change',
      },
      {
        kanji: '変わり種',
        reading: 'かわりだね',
        meanings: 'something out of the ordinary',
      },
      {
        kanji: '変える',
        reading: 'かえる',
        meanings: 'to change',
      },
      {
        kanji: '変',
        reading: 'へん',
        meanings: 'strange',
      },
      {
        kanji: '変化',
        reading: 'へんか',
        meanings: 'change',
      },
      {
        kanji: '政変',
        reading: 'せいへん',
        meanings: 'political disturbance',
      },
      {
        kanji: '異変',
        reading: 'いへん',
        meanings: 'unusual event',
      },
    ],
  },
  {
    kanjiName: '夫',
    strokes: 4,
    grade: 4,
    freq: 335,
    meanings: ['Husband', 'Man'],
    on: ['ふ', 'ふう', 'ぶ'],
    kun: ['おっと', 'それ'],
    jlpt: 3,
    quizAnswers: ['Rice Field', 'Label', 'Puckery Juice', 'Husband'],
    similars: [
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '丈',
        meaning: 'length',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '木',
        meaning: 'tree',
      },
      {
        kanji: '大',
        meaning: 'large',
      },
      {
        kanji: '文',
        meaning: 'sentence',
      },
    ],
    usedIn: [
      {
        kanji: '夫',
        reading: 'おっと',
        meanings: 'husband',
      },
      {
        kanji: '夫選び',
        reading: 'おっとえらび',
        meanings: 'choosing a husband',
      },
      {
        kanji: 'ＤＶ夫',
        reading: 'でぃーぶいおっと',
        meanings: '(physically) abusive husband',
      },
      {
        kanji: '元夫',
        reading: 'もとおっと',
        meanings: 'ex-husband',
      },
      {
        kanji: '其れ其れ',
        reading: 'それぞれ',
        meanings: 'each',
      },
      {
        kanji: '夫妻',
        reading: 'ふさい',
        meanings: 'husband and wife',
      },
      {
        kanji: '夫婦',
        reading: 'ふうふ',
        meanings: 'married couple',
      },
      {
        kanji: '継夫',
        reading: 'けいふ',
        meanings: 'second husband',
      },
      {
        kanji: '炊夫',
        reading: 'すいふ',
        meanings: 'male cook',
      },
      {
        kanji: '夫婦',
        reading: 'ふうふ',
        meanings: 'married couple',
      },
      {
        kanji: '夫子',
        reading: 'ふうし',
        meanings: 'teacher',
      },
      {
        kanji: '一工夫',
        reading: 'ひとくふう',
        meanings: 'a bit of contrivance',
      },
      {
        kanji: '創意工夫',
        reading: 'そういくふう',
        meanings: 'ingenuity',
      },
      {
        kanji: '夫人',
        reading: 'ふじん',
        meanings: 'wife',
      },
      {
        kanji: '賦役',
        reading: 'ふえき',
        meanings: 'slave labour',
      },
      {
        kanji: '大夫',
        reading: 'だいぶ',
        meanings: 'high steward',
      },
      {
        kanji: '右京大夫',
        reading: 'うきょうのだいぶ',
        meanings: 'Ukyō no Daibu (title under the ritsuryō system)',
      },
    ],
  },
  {
    kanjiName: '昨',
    strokes: 9,
    grade: 4,
    freq: 226,
    meanings: ['Yesterday', 'Previous'],
    on: ['さく'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Jasmine', 'Edge', 'Yesterday', 'Prefecture'],
    similars: [
      {
        kanji: '酢',
        meaning: 'vinegar',
      },
      {
        kanji: '早',
        meaning: 'early',
      },
      {
        kanji: '星',
        meaning: 'star',
      },
      {
        kanji: '昭',
        meaning: 'shining',
      },
      {
        kanji: '昇',
        meaning: 'rise up',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '略',
        meaning: 'abbreviation',
      },
      {
        kanji: '景',
        meaning: 'scenery',
      },
      {
        kanji: '酷',
        meaning: 'cruel',
      },
      {
        kanji: '是',
        meaning: 'just so',
      },
    ],
    usedIn: [
      {
        kanji: '昨',
        reading: 'さく',
        meanings: 'last (year)',
      },
      {
        kanji: '昨今',
        reading: 'さっこん',
        meanings: 'these days',
      },
      {
        kanji: '一昨',
        reading: 'いっさく',
        meanings: 'one previous',
      },
      {
        kanji: '一昨昨',
        reading: 'いっさくさく',
        meanings: 'three (days',
      },
    ],
  },
  {
    kanjiName: '法',
    strokes: 8,
    grade: 4,
    freq: 100,
    meanings: ['Method', 'Law', 'Rule', 'Principle', 'Model', 'System'],
    on: ['ほう', 'はっ', 'ほっ', 'ふらん'],
    kun: ['のり'],
    jlpt: 3,
    quizAnswers: ['Method', 'Laziness', 'Oversee', 'Pig'],
    similars: [
      {
        kanji: '洪',
        meaning: 'deluge',
      },
      {
        kanji: '江',
        meaning: 'creek',
      },
      {
        kanji: '洗',
        meaning: 'wash',
      },
      {
        kanji: '浅',
        meaning: 'shallow',
      },
      {
        kanji: '汚',
        meaning: 'dirty',
      },
      {
        kanji: '去',
        meaning: 'gone',
      },
      {
        kanji: '壮',
        meaning: 'robust',
      },
      {
        kanji: '注',
        meaning: 'pour',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '汗',
        meaning: 'sweat',
      },
    ],
    usedIn: [
      {
        kanji: '法',
        reading: 'のり',
        meanings: 'rule',
      },
      {
        kanji: '法の筵',
        reading: 'のりのむしろ',
        meanings: 'preaching place',
      },
      {
        kanji: '内法',
        reading: 'うちのり',
        meanings: 'inside measure',
      },
      {
        kanji: '外法',
        reading: 'そとのり',
        meanings: 'outside measurements',
      },
      {
        kanji: '法',
        reading: 'ほう',
        meanings: 'law',
      },
      {
        kanji: '法案',
        reading: 'ほうあん',
        meanings: 'bill (law)',
      },
      {
        kanji: '航法',
        reading: 'こうほう',
        meanings: 'sailing',
      },
      {
        kanji: '会社更生法',
        reading: 'かいしゃこうせいほう',
        meanings: 'Corporate Rehabilitation Law',
      },
      {
        kanji: '法被',
        reading: 'はっぴ',
        meanings: 'happi coat',
      },
      {
        kanji: '法度',
        reading: 'はっと',
        meanings: 'ban',
      },
      {
        kanji: '法師',
        reading: 'ほうし',
        meanings: 'Buddhist priest',
      },
      {
        kanji: '法華経',
        reading: 'ほけきょう',
        meanings: 'Lotus Sutra',
      },
    ],
  },
  {
    kanjiName: '晩',
    strokes: 12,
    grade: 6,
    freq: 1424,
    meanings: ['Nightfall', 'Night'],
    on: ['ばん'],
    kun: [],
    jlpt: 3,
    quizAnswers: [
      'Smash',
      'Beat',
      'Nightfall',
      'Counter For Chapters (of A Book)',
    ],
    similars: [
      {
        kanji: '免',
        meaning: 'excuse',
      },
      {
        kanji: '賜',
        meaning: 'grant',
      },
      {
        kanji: '醜',
        meaning: 'ugly',
      },
      {
        kanji: '暁',
        meaning: 'daybreak',
      },
      {
        kanji: '見',
        meaning: 'see',
      },
      {
        kanji: '冒',
        meaning: 'risk',
      },
      {
        kanji: '軸',
        meaning: 'axis',
      },
      {
        kanji: '鼻',
        meaning: 'nose',
      },
      {
        kanji: '腹',
        meaning: 'abdomen',
      },
      {
        kanji: '顕',
        meaning: 'appear',
      },
    ],
    usedIn: [
      {
        kanji: '晩',
        reading: 'ばん',
        meanings: 'evening',
      },
      {
        kanji: '晩婚',
        reading: 'ばんこん',
        meanings: 'late marriage',
      },
      {
        kanji: '歳晩',
        reading: 'さいばん',
        meanings: "year's end",
      },
      {
        kanji: 'お晩',
        reading: 'おばん',
        meanings: 'evening',
      },
    ],
  },
  {
    kanjiName: '猫',
    strokes: 11,
    grade: 8,
    freq: 1702,
    meanings: ['Cat'],
    on: ['びょう'],
    kun: ['ねこ'],
    jlpt: 3,
    quizAnswers: ['Cat', 'Tale', 'Prudence', 'Cleverness'],
    similars: [
      {
        kanji: '描',
        meaning: 'sketch',
      },
      {
        kanji: '苗',
        meaning: 'seedling',
      },
      {
        kanji: '盾',
        meaning: 'shield',
      },
      {
        kanji: '番',
        meaning: 'turn',
      },
      {
        kanji: '借',
        meaning: 'borrow',
      },
      {
        kanji: '賃',
        meaning: 'fare',
      },
      {
        kanji: '横',
        meaning: 'sideways',
      },
      {
        kanji: '循',
        meaning: 'sequential',
      },
      {
        kanji: '猶',
        meaning: 'furthermore',
      },
      {
        kanji: '首',
        meaning: 'neck',
      },
    ],
    usedIn: [
      {
        kanji: '猫',
        reading: 'ねこ',
        meanings: 'cat (esp. the domestic cat',
      },
      {
        kanji: '猫',
        reading: 'ねこま',
        meanings: 'cat',
      },
      {
        kanji: '野良猫',
        reading: 'のらねこ',
        meanings: 'stray cat',
      },
      {
        kanji: '山猫',
        reading: 'やまねこ',
        meanings: 'wildcat (European wildcat',
      },
      {
        kanji: '猫額',
        reading: 'びょうがく',
        meanings: "(as small as a) cat's forehead",
      },
      {
        kanji: '猫額大',
        reading: 'びょうがくだい',
        meanings: 'tiny',
      },
      {
        kanji: '怪猫',
        reading: 'かいびょう',
        meanings: 'monster cat',
      },
      {
        kanji: '成猫',
        reading: 'せいびょう',
        meanings: 'adult cat',
      },
    ],
  },
  {
    kanjiName: '園',
    strokes: 13,
    grade: 2,
    freq: 628,
    meanings: ['Park', 'Garden', 'Yard', 'Farm'],
    on: ['えん'],
    kun: ['その'],
    jlpt: 3,
    quizAnswers: ['Park', 'Business', 'Run Alongside', 'Be In Disorder'],
    similars: [
      {
        kanji: '還',
        meaning: 'send back',
      },
      {
        kanji: '固',
        meaning: 'harden',
      },
      {
        kanji: '彫',
        meaning: 'carve',
      },
      {
        kanji: '遠',
        meaning: 'distant',
      },
      {
        kanji: '影',
        meaning: 'shadow',
      },
      {
        kanji: '診',
        meaning: 'checkup',
      },
      {
        kanji: '故',
        meaning: 'happenstance',
      },
      {
        kanji: '猿',
        meaning: 'monkey',
      },
      {
        kanji: '哀',
        meaning: 'pathetic',
      },
      {
        kanji: '景',
        meaning: 'scenery',
      },
    ],
    usedIn: [
      {
        kanji: '園',
        reading: 'その',
        meanings: 'garden',
      },
      {
        kanji: '園生',
        reading: 'えんせい',
        meanings: 'garden (esp. with trees)',
      },
      {
        kanji: '竹の園',
        reading: 'たけのその',
        meanings: 'bamboo garden',
      },
      {
        kanji: '女の園',
        reading: 'おんなのその',
        meanings: "woman's world",
      },
      {
        kanji: '園',
        reading: 'えん',
        meanings: 'garden',
      },
      {
        kanji: '園芸',
        reading: 'えんげい',
        meanings: 'horticulture',
      },
      {
        kanji: '花園',
        reading: 'はなぞの',
        meanings: 'flower garden',
      },
      {
        kanji: '霊園',
        reading: 'れいえん',
        meanings: '(garden) cemetery',
      },
    ],
  },
  {
    kanjiName: '遠',
    strokes: 13,
    grade: 2,
    freq: 887,
    meanings: ['Distant', 'Far'],
    on: ['えん', 'おん'],
    kun: ['とお.い'],
    jlpt: 3,
    quizAnswers: ['Sort', '(kokuji)', 'Attend', 'Distant'],
    similars: [
      {
        kanji: '速',
        meaning: 'quick',
      },
      {
        kanji: '還',
        meaning: 'send back',
      },
      {
        kanji: '造',
        meaning: 'create',
      },
      {
        kanji: '園',
        meaning: 'park',
      },
      {
        kanji: '域',
        meaning: 'range',
      },
      {
        kanji: '逐',
        meaning: 'pursue',
      },
      {
        kanji: '迷',
        meaning: 'astray',
      },
      {
        kanji: '透',
        meaning: 'transparent',
      },
      {
        kanji: '喜',
        meaning: 'rejoice',
      },
      {
        kanji: '遂',
        meaning: 'consummate',
      },
    ],
    usedIn: [
      {
        kanji: '遠い',
        reading: 'とおい',
        meanings: 'far',
      },
      {
        kanji: '遠い昔',
        reading: 'とおいむかし',
        meanings: 'remote past',
      },
      {
        kanji: '遠山',
        reading: 'えんざん',
        meanings: 'distant mountain',
      },
      {
        kanji: '遠隔',
        reading: 'えんかく',
        meanings: 'distant',
      },
      {
        kanji: '望遠',
        reading: 'ぼうえん',
        meanings: 'seeing at a distance',
      },
      {
        kanji: '以遠',
        reading: 'いえん',
        meanings: 'beyond',
      },
      {
        kanji: '遠忌',
        reading: 'おんき',
        meanings: 'anniversary of a death twelve or more years earlier',
      },
      {
        kanji: '遠諱',
        reading: 'おんき',
        meanings: 'semicentennial memorial service',
      },
      {
        kanji: '久遠',
        reading: 'くおん',
        meanings: 'eternity',
      },
    ],
  },
  {
    kanjiName: '係',
    strokes: 9,
    grade: 3,
    freq: 232,
    meanings: ['Person In Charge', 'Connection', 'Duty', 'Concern Oneself'],
    on: ['けい'],
    kun: ['かか.る', 'かかり', '-がかり', 'かか.わる'],
    jlpt: 3,
    quizAnswers: ['Complete', 'Chapter', 'Person In Charge', 'Joy'],
    similars: [
      {
        kanji: '系',
        meaning: 'lineage',
      },
      {
        kanji: '孫',
        meaning: 'grandchild',
      },
      {
        kanji: '糸',
        meaning: 'thread',
      },
      {
        kanji: '索',
        meaning: 'cord',
      },
      {
        kanji: '素',
        meaning: 'elementary',
      },
      {
        kanji: '紫',
        meaning: 'purple',
      },
      {
        kanji: '累',
        meaning: 'accumulate',
      },
      {
        kanji: '繁',
        meaning: 'luxuriant',
      },
      {
        kanji: '称',
        meaning: 'appellation',
      },
      {
        kanji: '桃',
        meaning: 'peach',
      },
    ],
    usedIn: [
      {
        kanji: '係る',
        reading: 'かかる',
        meanings: 'to be the work of',
      },
      {
        kanji: '係',
        reading: 'かかり',
        meanings: 'charge',
      },
      {
        kanji: '係員',
        reading: 'かかりいん',
        meanings: 'person in charge',
      },
      {
        kanji: '口座係',
        reading: 'こうざかかり',
        meanings: 'teller (in bank)',
      },
      {
        kanji: '応接係',
        reading: 'おうせつかかり',
        meanings: 'receptionist',
      },
      {
        kanji: '関わる',
        reading: 'かかわる',
        meanings: 'to be affected',
      },
      {
        kanji: '係争',
        reading: 'けいそう',
        meanings: 'dispute',
      },
      {
        kanji: '係数',
        reading: 'けいすう',
        meanings: 'coefficient',
      },
      {
        kanji: '相関関係',
        reading: 'そうかんかんけい',
        meanings: 'correlation',
      },
      {
        kanji: '三角関係',
        reading: 'さんかくかんけい',
        meanings: 'love triangle',
      },
    ],
  },
  {
    kanjiName: '取',
    strokes: 8,
    grade: 3,
    freq: 122,
    meanings: ['Take', 'Fetch', 'Take Up'],
    on: ['しゅ'],
    kun: ['と.る', 'と.り', 'と.り-', 'とり', '-ど.り'],
    jlpt: 3,
    quizAnswers: ['Deliberate', 'Rejoice', 'Jasmine', 'Take'],
    similars: [
      {
        kanji: '耳',
        meaning: 'ear',
      },
      {
        kanji: '最',
        meaning: 'utmost',
      },
      {
        kanji: '服',
        meaning: 'clothing',
      },
      {
        kanji: '恥',
        meaning: 'shame',
      },
      {
        kanji: '敢',
        meaning: 'daring',
      },
      {
        kanji: '某',
        meaning: 'so-and-so',
      },
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '撮',
        meaning: 'snapshot',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '畝',
        meaning: 'furrow',
      },
    ],
    usedIn: [
      {
        kanji: '取る',
        reading: 'とる',
        meanings: 'to take',
      },
      {
        kanji: '取るに足らない',
        reading: 'とるにたらない',
        meanings: 'insignificant',
      },
      {
        kanji: '取り',
        reading: 'とり',
        meanings: 'taking',
      },
      {
        kanji: '取り扱い',
        reading: 'とりあつかい',
        meanings: 'treatment',
      },
      {
        kanji: '関取',
        reading: 'せきとり',
        meanings:
          'ranking wrestler in the makuuchi (senior-grade) or juryo (junior-grade) divisions',
      },
      {
        kanji: '買取',
        reading: 'かいとり',
        meanings: 'purchase',
      },
      {
        kanji: '取り',
        reading: 'とり',
        meanings: 'taking',
      },
      {
        kanji: '取り扱い',
        reading: 'とりあつかい',
        meanings: 'treatment',
      },
      {
        kanji: '関取',
        reading: 'せきとり',
        meanings:
          'ranking wrestler in the makuuchi (senior-grade) or juryo (junior-grade) divisions',
      },
      {
        kanji: '買取',
        reading: 'かいとり',
        meanings: 'purchase',
      },
      {
        kanji: '取',
        reading: 'しゅ',
        meanings: 'appropriation',
      },
      {
        kanji: '取材',
        reading: 'しゅざい',
        meanings: 'gathering material (for an article',
      },
      {
        kanji: '先取',
        reading: 'せんしゅ',
        meanings: 'earning the first (runs)',
      },
      {
        kanji: '聴取',
        reading: 'ちょうしゅ',
        meanings: 'hearing (of a statement',
      },
    ],
  },
  {
    kanjiName: '守',
    strokes: 6,
    grade: 3,
    freq: 457,
    meanings: ['Guard', 'Protect', 'Defend', 'Obey'],
    on: ['しゅ', 'す'],
    kun: ['まも.る', 'まも.り', 'もり', '-もり', 'かみ'],
    jlpt: 3,
    quizAnswers: ['Prosperity', 'Four', 'Right', 'Guard'],
    similars: [
      {
        kanji: '宇',
        meaning: 'eaves',
      },
      {
        kanji: '狩',
        meaning: 'hunt',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '宗',
        meaning: 'religion',
      },
      {
        kanji: '対',
        meaning: 'vis-a-vis',
      },
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '室',
        meaning: 'room',
      },
      {
        kanji: '寂',
        meaning: 'loneliness',
      },
      {
        kanji: '定',
        meaning: 'determine',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
    ],
    usedIn: [
      {
        kanji: '守る',
        reading: 'まもる',
        meanings: 'to protect',
      },
      {
        kanji: '守り',
        reading: 'まもり',
        meanings: 'protection',
      },
      {
        kanji: '守り神',
        reading: 'まもりがみ',
        meanings: 'guardian deity',
      },
      {
        kanji: '島主',
        reading: 'とうしゅ',
        meanings: 'island chief',
      },
      {
        kanji: '山守',
        reading: 'やまもり',
        meanings: 'ranger (forest)',
      },
      {
        kanji: '守り',
        reading: 'もり',
        meanings: 'babysitting',
      },
      {
        kanji: '守り立てる',
        reading: 'もりたてる',
        meanings: 'to support',
      },
      {
        kanji: '井守',
        reading: 'いもり',
        meanings: 'newt (esp. the Japanese fire belly newt',
      },
      {
        kanji: '足無井守',
        reading: 'あしなしいもり',
        meanings:
          'caecilian (any burrowing legless amphibian of the order Gymnophiona)',
      },
      {
        kanji: '守',
        reading: 'かみ',
        meanings:
          'director (of the provincial governors under the ritsuryō system)',
      },
      {
        kanji: '肥後守',
        reading: 'ひごのかみ',
        meanings: 'higonokami',
      },
      {
        kanji: '出羽守',
        reading: 'でわのかみ',
        meanings: 'director of Dewa province',
      },
      {
        kanji: '守備',
        reading: 'しゅび',
        meanings: 'defense',
      },
      {
        kanji: '守勢',
        reading: 'しゅせい',
        meanings: '(being on the) defensive',
      },
      {
        kanji: '好守',
        reading: 'こうしゅ',
        meanings: 'good fielding',
      },
      {
        kanji: '攻守',
        reading: 'こうしゅ',
        meanings: 'offense and defense',
      },
      {
        kanji: '守護',
        reading: 'しゅご',
        meanings: 'protection',
      },
      {
        kanji: '都寺',
        reading: 'つうす',
        meanings: 'one of the six administrators of a Zen temple',
      },
      {
        kanji: '居留守',
        reading: 'いるす',
        meanings: 'pretending to be out',
      },
    ],
  },
  {
    kanjiName: '幸',
    strokes: 8,
    grade: 3,
    freq: 786,
    meanings: ['Happiness', 'Blessing', 'Fortune'],
    on: ['こう'],
    kun: ['さいわ.い', 'さち', 'しあわ.せ'],
    jlpt: 3,
    quizAnswers: ['Convey', 'Happiness', 'Rebuke', 'Feat'],
    similars: [
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '南',
        meaning: 'south',
      },
      {
        kanji: '坪',
        meaning: 'two-mat area',
      },
      {
        kanji: '執',
        meaning: 'tenacious',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '宰',
        meaning: 'superintend',
      },
      {
        kanji: '達',
        meaning: 'accomplished',
      },
      {
        kanji: '報',
        meaning: 'report',
      },
      {
        kanji: '伴',
        meaning: 'consort',
      },
      {
        kanji: '邪',
        meaning: 'wicked',
      },
    ],
    usedIn: [
      {
        kanji: '幸い',
        reading: 'さいわい',
        meanings: 'happiness',
      },
      {
        kanji: '幸いあれ',
        reading: 'さいわいあれ',
        meanings: 'be happy!',
      },
      {
        kanji: '幸',
        reading: 'さち',
        meanings: 'good luck',
      },
      {
        kanji: '幸ある',
        reading: 'さちある',
        meanings: 'fortunate',
      },
      {
        kanji: '川の幸',
        reading: 'かわのさち',
        meanings: 'catch (fish) of the river',
      },
      {
        kanji: '山幸',
        reading: 'やまさち',
        meanings: 'food of the mountains (wild game',
      },
      {
        kanji: '幸せ',
        reading: 'しあわせ',
        meanings: 'happiness',
      },
      {
        kanji: '幸せにする',
        reading: 'しあわせにする',
        meanings: 'to bring someone happiness',
      },
      {
        kanji: '幸',
        reading: 'さち',
        meanings: 'good luck',
      },
      {
        kanji: '幸運',
        reading: 'こううん',
        meanings: 'good luck',
      },
      {
        kanji: '親不孝',
        reading: 'おやふこう',
        meanings: 'lack of filial piety',
      },
      {
        kanji: '御幸',
        reading: 'ぎょうき',
        meanings: 'imperial visit',
      },
    ],
  },
  {
    kanjiName: '箱',
    strokes: 15,
    grade: 3,
    freq: 1357,
    meanings: ['Box', 'Chest', 'Case', 'Bin', 'Railway Car'],
    on: ['そう'],
    kun: ['はこ'],
    jlpt: 3,
    quizAnswers: ['Red', 'Box', 'Membership', 'Highest Rank'],
    similars: [
      {
        kanji: '笛',
        meaning: 'flute',
      },
      {
        kanji: '番',
        meaning: 'turn',
      },
      {
        kanji: '策',
        meaning: 'scheme',
      },
      {
        kanji: '籍',
        meaning: 'enroll',
      },
      {
        kanji: '相',
        meaning: 'inter-',
      },
      {
        kanji: '簡',
        meaning: 'simplicity',
      },
      {
        kanji: '符',
        meaning: 'token',
      },
      {
        kanji: '盾',
        meaning: 'shield',
      },
      {
        kanji: '首',
        meaning: 'neck',
      },
      {
        kanji: '箇',
        meaning: 'counter for articles',
      },
    ],
    usedIn: [
      {
        kanji: '箱',
        reading: 'はこ',
        meanings: 'box',
      },
      {
        kanji: '箱入り',
        reading: 'はこいり',
        meanings: 'cased',
      },
      {
        kanji: 'リサイクル用の箱',
        reading: 'りさいくるようのはこ',
        meanings: 'recycling bin',
      },
      {
        kanji: '契約の箱',
        reading: 'けいやくのはこ',
        meanings: 'Ark of the Covenant',
      },
      {
        kanji: '百葉箱',
        reading: 'ひゃくようばこ',
        meanings:
          'Stevenson screen (louvre-sided box housing for meteorological gauges)',
      },
      {
        kanji: '書箱',
        reading: 'しょそう',
        meanings: 'bookcase',
      },
    ],
  },
  {
    kanjiName: '面',
    strokes: 9,
    grade: 3,
    freq: 186,
    meanings: ['Mask', 'Face', 'Features', 'Surface'],
    on: ['めん', 'べん'],
    kun: ['おも', 'おもて', 'つら'],
    jlpt: 3,
    quizAnswers: ['Leaping Up', 'Witty', 'Mask', 'Hot Water'],
    similars: [
      {
        kanji: '曲',
        meaning: 'bend',
      },
      {
        kanji: '自',
        meaning: 'oneself',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '曹',
        meaning: 'office',
      },
      {
        kanji: '槽',
        meaning: 'vat',
      },
      {
        kanji: '増',
        meaning: 'increase',
      },
      {
        kanji: '直',
        meaning: 'straightaway',
      },
      {
        kanji: '目',
        meaning: 'eye',
      },
      {
        kanji: '由',
        meaning: 'wherefore',
      },
      {
        kanji: '苗',
        meaning: 'seedling',
      },
    ],
    usedIn: [
      {
        kanji: '面',
        reading: 'おもて',
        meanings: 'face',
      },
      {
        kanji: '面影',
        reading: 'おもかげ',
        meanings: 'face',
      },
      {
        kanji: '水の面',
        reading: 'みのも',
        meanings: 'surface of the water',
      },
      {
        kanji: '面',
        reading: 'おもて',
        meanings: 'face',
      },
      {
        kanji: '面伏せ',
        reading: 'おもてぶせ',
        meanings: "being so embarrassed as to keep one's face down",
      },
      {
        kanji: '細面',
        reading: 'ほそおもて',
        meanings: 'slender face',
      },
      {
        kanji: '面',
        reading: 'つら',
        meanings: 'face',
      },
      {
        kanji: '面当て',
        reading: 'つらあて',
        meanings: 'spiteful remarks',
      },
      {
        kanji: '赤面',
        reading: 'あかつら',
        meanings: 'red face',
      },
      {
        kanji: '横面',
        reading: 'よこつら',
        meanings: 'side of the face',
      },
      {
        kanji: '面',
        reading: 'めん',
        meanings: 'face',
      },
      {
        kanji: '面会',
        reading: 'めんかい',
        meanings: 'meeting (face-to-face)',
      },
      {
        kanji: '平面',
        reading: 'へいめん',
        meanings: 'level surface',
      },
      {
        kanji: '対面',
        reading: 'たいめん',
        meanings: 'meeting face-to-face',
      },
    ],
  },
  {
    kanjiName: '喜',
    strokes: 12,
    grade: 4,
    freq: 769,
    meanings: ['Rejoice', 'Take Pleasure In'],
    on: ['き'],
    kun: ['よろこ.ぶ', 'よろこ.ばす'],
    jlpt: 3,
    quizAnswers: ['Rejoice', 'Brace', 'Pipe', 'Spirits'],
    similars: [
      {
        kanji: '鼓',
        meaning: 'drum',
      },
      {
        kanji: '話',
        meaning: 'tale',
      },
      {
        kanji: '詰',
        meaning: 'packed',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '詞',
        meaning: 'part of speech',
      },
      {
        kanji: '培',
        meaning: 'cultivate',
      },
      {
        kanji: '詔',
        meaning: 'imperial edict',
      },
      {
        kanji: '諾',
        meaning: 'consent',
      },
      {
        kanji: '高',
        meaning: 'tall',
      },
      {
        kanji: '語',
        meaning: 'word',
      },
    ],
    usedIn: [
      {
        kanji: '喜ぶ',
        reading: 'よろこぶ',
        meanings: 'to be delighted',
      },
      {
        kanji: '喜ばす',
        reading: 'よろこばす',
        meanings: 'to delight',
      },
      {
        kanji: '喜劇',
        reading: 'きげき',
        meanings: 'comedy',
      },
      {
        kanji: '喜寿',
        reading: 'きじゅ',
        meanings: '77th birthday',
      },
      {
        kanji: '歓喜',
        reading: 'かんき',
        meanings: 'delight',
      },
      {
        kanji: '悲喜',
        reading: 'ひき',
        meanings: 'joys and sorrows',
      },
    ],
  },
  {
    kanjiName: '治',
    strokes: 8,
    grade: 4,
    freq: 109,
    meanings: [
      'Reign',
      'Be At Peace',
      'Calm Down',
      'Subdue',
      'Quell',
      'Govt',
      'Cure',
      'Heal',
      'Rule',
      'Conserve',
    ],
    on: ['じ', 'ち'],
    kun: ['おさ.める', 'おさ.まる', 'なお.る', 'なお.す'],
    jlpt: 3,
    quizAnswers: ['10**32', 'Reign', 'Annals', 'Smiling'],
    similars: [
      {
        kanji: '沿',
        meaning: 'run alongside',
      },
      {
        kanji: '沼',
        meaning: 'marsh',
      },
      {
        kanji: '浴',
        meaning: 'bathe',
      },
      {
        kanji: '活',
        meaning: 'lively',
      },
      {
        kanji: '洞',
        meaning: 'den',
      },
      {
        kanji: '沖',
        meaning: 'open sea',
      },
      {
        kanji: '台',
        meaning: 'pedestal',
      },
      {
        kanji: '河',
        meaning: 'river',
      },
      {
        kanji: '始',
        meaning: 'commence',
      },
      {
        kanji: '胎',
        meaning: 'womb',
      },
    ],
    usedIn: [
      {
        kanji: '治める',
        reading: 'おさめる',
        meanings: 'to rule',
      },
      {
        kanji: '治まる',
        reading: 'おさまる',
        meanings: 'to die down (storm',
      },
      {
        kanji: '治る',
        reading: 'なおる',
        meanings: 'to get better',
      },
      {
        kanji: '治す',
        reading: 'なおす',
        meanings: 'to cure',
      },
      {
        kanji: '治療',
        reading: 'ちりょう',
        meanings: '(medical) treatment',
      },
      {
        kanji: '治安',
        reading: 'じあん',
        meanings: 'Jian era (1021.2.2-1024.7.13)',
      },
      {
        kanji: '完治',
        reading: 'かんち',
        meanings: 'complete recovery',
      },
      {
        kanji: '政党政治',
        reading: 'せいとうせいじ',
        meanings: 'party politics',
      },
      {
        kanji: '治',
        reading: 'ち',
        meanings: 'politics',
      },
      {
        kanji: '治安',
        reading: 'ちあん',
        meanings: 'public order',
      },
      {
        kanji: '完治',
        reading: 'かんち',
        meanings: 'complete recovery',
      },
      {
        kanji: '地方自治',
        reading: 'ちほうじち',
        meanings: 'local (governmental) autonomy',
      },
    ],
  },
  {
    kanjiName: '笑',
    strokes: 10,
    grade: 4,
    freq: 913,
    meanings: ['Laugh'],
    on: ['しょう'],
    kun: ['わら.う', 'え.む'],
    jlpt: 3,
    quizAnswers: ['Laugh', 'Finish', 'Stave Off', 'Scrutinize'],
    similars: [
      {
        kanji: '符',
        meaning: 'token',
      },
      {
        kanji: '答',
        meaning: 'solution',
      },
      {
        kanji: '策',
        meaning: 'scheme',
      },
      {
        kanji: '第',
        meaning: 'No.',
      },
      {
        kanji: '築',
        meaning: 'fabricate',
      },
      {
        kanji: '狭',
        meaning: 'cramped',
      },
      {
        kanji: '筋',
        meaning: 'muscle',
      },
      {
        kanji: '筒',
        meaning: 'cylinder',
      },
      {
        kanji: '等',
        meaning: 'etc.',
      },
      {
        kanji: '筆',
        meaning: 'writing brush',
      },
    ],
    usedIn: [
      {
        kanji: '笑う',
        reading: 'わらう',
        meanings: 'to laugh',
      },
      {
        kanji: '笑う門には福来る',
        reading: 'わらうかどにはふくきたる',
        meanings: 'laugh and grow fat',
      },
      {
        kanji: '笑む',
        reading: 'えむ',
        meanings: 'to smile',
      },
      {
        kanji: '笑気',
        reading: 'しょうき',
        meanings: 'laughing gas',
      },
      {
        kanji: '笑気麻酔',
        reading: 'しょうきますい',
        meanings: 'nitrous oxide anesthesia',
      },
      {
        kanji: '苦笑',
        reading: 'くしょう',
        meanings: 'bitter smile',
      },
      {
        kanji: '冷笑',
        reading: 'れいしょう',
        meanings: 'sneer',
      },
    ],
  },
  {
    kanjiName: '辞',
    strokes: 13,
    grade: 4,
    freq: 633,
    meanings: ['Resign', 'Word', 'Term', 'Expression'],
    on: ['じ'],
    kun: ['や.める', 'いな.む'],
    jlpt: 3,
    quizAnswers: ['Resign', 'Key (music)', 'Board', 'Horse'],
    similars: [
      {
        kanji: '避',
        meaning: 'evade',
      },
      {
        kanji: '壁',
        meaning: 'wall',
      },
      {
        kanji: '評',
        meaning: 'evaluate',
      },
      {
        kanji: '南',
        meaning: 'south',
      },
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '宰',
        meaning: 'superintend',
      },
      {
        kanji: '癖',
        meaning: 'mannerism',
      },
      {
        kanji: '謡',
        meaning: 'song',
      },
      {
        kanji: '幹',
        meaning: 'tree trunk',
      },
      {
        kanji: '群',
        meaning: 'flock',
      },
    ],
    usedIn: [
      {
        kanji: '辞める',
        reading: 'やめる',
        meanings: 'to resign',
      },
      {
        kanji: '否む',
        reading: 'いなむ',
        meanings: 'to refuse',
      },
      {
        kanji: '辞',
        reading: 'じ',
        meanings: 'address (e.g. opening or closing remarks)',
      },
      {
        kanji: '辞意',
        reading: 'じい',
        meanings: 'intention to resign',
      },
      {
        kanji: '弔辞',
        reading: 'ちょうじ',
        meanings: 'message of condolence',
      },
      {
        kanji: '修辞',
        reading: 'しゅうじ',
        meanings: 'figure of speech',
      },
    ],
  },
  {
    kanjiName: '関',
    strokes: 14,
    grade: 4,
    freq: 70,
    meanings: ['Connection', 'Barrier', 'Gateway', 'Involve', 'Concerning'],
    on: ['かん'],
    kun: ['せき', '-ぜき', 'かか.わる', 'からくり', 'かんぬき'],
    jlpt: 3,
    quizAnswers: ['Smoke', 'Poem', 'Solemn', 'Connection'],
    similars: [
      {
        kanji: '閑',
        meaning: 'leisure',
      },
      {
        kanji: '閲',
        meaning: 'review',
      },
      {
        kanji: '閉',
        meaning: 'closed',
      },
      {
        kanji: '敗',
        meaning: 'failure',
      },
      {
        kanji: '開',
        meaning: 'open',
      },
      {
        kanji: '閥',
        meaning: 'clique',
      },
      {
        kanji: '暖',
        meaning: 'warmth',
      },
      {
        kanji: '朕',
        meaning: 'majestic plural',
      },
      {
        kanji: '闘',
        meaning: 'fight',
      },
      {
        kanji: '門',
        meaning: 'gate',
      },
    ],
    usedIn: [
      {
        kanji: '関',
        reading: 'せき',
        meanings: 'barrier',
      },
      {
        kanji: '関取',
        reading: 'せきとり',
        meanings:
          'ranking wrestler in the makuuchi (senior-grade) or juryo (junior-grade) divisions',
      },
      {
        kanji: '霞ヶ関',
        reading: 'かすみがせき',
        meanings: 'Kasumigaseki',
      },
      {
        kanji: '関わる',
        reading: 'かかわる',
        meanings: 'to be affected',
      },
      {
        kanji: '覗き機関',
        reading: 'のぞきからくり',
        meanings: 'peep show',
      },
      {
        kanji: '水機関',
        reading: 'みずからくり',
        meanings: 'puppet powered by (falling) water',
      },
      {
        kanji: '関',
        reading: 'かん',
        meanings: 'barrier',
      },
      {
        kanji: '関係',
        reading: 'かんけい',
        meanings: 'relation',
      },
      {
        kanji: '連関',
        reading: 'れんかん',
        meanings: 'connection',
      },
      {
        kanji: '通関',
        reading: 'つうかん',
        meanings: 'customs clearance',
      },
    ],
  },
  {
    kanjiName: '政',
    strokes: 9,
    grade: 5,
    freq: 17,
    meanings: ['Politics', 'Government'],
    on: ['せい', 'しょう'],
    kun: ['まつりごと', 'まん'],
    jlpt: 3,
    quizAnswers: ['Gargle', 'Govt Office', 'Hundred', 'Politics'],
    similars: [
      {
        kanji: '攻',
        meaning: 'aggression',
      },
      {
        kanji: '致',
        meaning: 'doth',
      },
      {
        kanji: '英',
        meaning: 'England',
      },
      {
        kanji: '契',
        meaning: 'pledge',
      },
      {
        kanji: '故',
        meaning: 'happenstance',
      },
      {
        kanji: '戻',
        meaning: 're-',
      },
      {
        kanji: '教',
        meaning: 'teach',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '敏',
        meaning: 'cleverness',
      },
      {
        kanji: '敢',
        meaning: 'daring',
      },
    ],
    usedIn: [
      {
        kanji: '政',
        reading: 'まつりごと',
        meanings: 'rule',
      },
      {
        kanji: '政所',
        reading: 'まんどころ',
        meanings:
          'official in charge of the administration of domains and general affairs of powerful noble families (from the middle of the Heian period)',
      },
      {
        kanji: '太政',
        reading: 'おおまつりごと',
        meanings: '(Japanese) imperial government',
      },
      {
        kanji: '政所',
        reading: 'まんどころ',
        meanings:
          'official in charge of the administration of domains and general affairs of powerful noble families (from the middle of the Heian period)',
      },
      {
        kanji: '政',
        reading: 'まつりごと',
        meanings: 'rule',
      },
      {
        kanji: '政界',
        reading: 'せいかい',
        meanings: '(world of) politics',
      },
      {
        kanji: '農政',
        reading: 'のうせい',
        meanings: 'agricultural administration',
      },
      {
        kanji: '帝政',
        reading: 'ていせい',
        meanings: 'imperial government',
      },
      {
        kanji: '摂政',
        reading: 'せっしょう',
        meanings: 'regency',
      },
    ],
  },
  {
    kanjiName: '留',
    strokes: 10,
    grade: 5,
    freq: 731,
    meanings: ['Detain', 'Fasten', 'Halt', 'Stop'],
    on: ['りゅう', 'る'],
    kun: ['と.める', 'と.まる', 'とど.める', 'とど.まる', 'るうぶる'],
    jlpt: 3,
    quizAnswers: ['Detain', 'Plantation', 'Composing', 'Bay'],
    similars: [
      {
        kanji: '貿',
        meaning: 'trade',
      },
      {
        kanji: '細',
        meaning: 'dainty',
      },
      {
        kanji: '伯',
        meaning: 'chief',
      },
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
      {
        kanji: '宙',
        meaning: 'mid-air',
      },
      {
        kanji: '皆',
        meaning: 'all',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
      {
        kanji: '省',
        meaning: 'government ministry',
      },
      {
        kanji: '畑',
        meaning: 'farm',
      },
      {
        kanji: '旬',
        meaning: 'decameron',
      },
    ],
    usedIn: [
      {
        kanji: '止める',
        reading: 'とめる',
        meanings: 'to stop',
      },
      {
        kanji: '止まる',
        reading: 'とまる',
        meanings: 'to stop (moving)',
      },
      {
        kanji: '留める',
        reading: 'とどめる',
        meanings: 'to stop',
      },
      {
        kanji: '止まる',
        reading: 'とどまる',
        meanings: 'to remain',
      },
      {
        kanji: 'とどまるところを知らない',
        reading: 'とどまるところをしらない',
        meanings: 'knowing no bounds',
      },
      {
        kanji: '留',
        reading: 'りゅう',
        meanings: 'stationary point',
      },
      {
        kanji: '留学',
        reading: 'りゅうがく',
        meanings: 'studying abroad',
      },
      {
        kanji: '駐留',
        reading: 'ちゅうりゅう',
        meanings: 'stationing (e.g. of troops)',
      },
      {
        kanji: '在留',
        reading: 'ざいりゅう',
        meanings: 'residing (esp. abroad)',
      },
      {
        kanji: '留',
        reading: 'るーぶる',
        meanings: 'ruble (Russian currency)',
      },
      {
        kanji: '留守番',
        reading: 'るすばん',
        meanings: 'care-taking',
      },
      {
        kanji: '柳樽',
        reading: 'やなぎだる',
        meanings:
          'lacquered sake barrel (often used at weddings and other celebratory events)',
      },
      {
        kanji: '柳多留',
        reading: 'やなぎだる',
        meanings: 'The Willow Barrel (collection of Edo-period senryu) (abbr)',
      },
    ],
  },
  {
    kanjiName: '険',
    strokes: 11,
    grade: 5,
    freq: 707,
    meanings: [
      'Precipitous',
      'Inaccessible Place',
      'Impregnable Position',
      'Steep Place',
      'Sharp Eyes',
    ],
    on: ['けん'],
    kun: ['けわ.しい'],
    jlpt: 3,
    quizAnswers: ['Colt', 'Air', 'Venerable Old Man', 'Precipitous'],
    similars: [
      {
        kanji: '倹',
        meaning: 'frugal',
      },
      {
        kanji: '検',
        meaning: 'examination',
      },
      {
        kanji: '使',
        meaning: 'use',
      },
      {
        kanji: '除',
        meaning: 'exclude',
      },
      {
        kanji: '登',
        meaning: 'ascend',
      },
      {
        kanji: '陰',
        meaning: 'shade',
      },
      {
        kanji: '林',
        meaning: 'grove',
      },
      {
        kanji: '拾',
        meaning: 'pick up',
      },
      {
        kanji: '合',
        meaning: 'fit',
      },
      {
        kanji: '命',
        meaning: 'fate',
      },
    ],
    usedIn: [
      {
        kanji: '険しい',
        reading: 'けわしい',
        meanings: 'precipitous',
      },
      {
        kanji: '険しい顔',
        reading: 'けわしいかお',
        meanings: 'grim face',
      },
      {
        kanji: '険',
        reading: 'けん',
        meanings: 'steepness',
      },
      {
        kanji: '険悪',
        reading: 'けんあく',
        meanings: 'dangerous',
      },
      {
        kanji: '損害保険',
        reading: 'そんがいほけん',
        meanings: 'damage insurance',
      },
      {
        kanji: '社会保険',
        reading: 'しゃかいほけん',
        meanings: 'social insurance',
      },
    ],
  },
  {
    kanjiName: '危',
    strokes: 6,
    grade: 6,
    freq: 606,
    meanings: ['Dangerous', 'Fear', 'Uneasy'],
    on: ['き'],
    kun: ['あぶ.ない', 'あや.うい', 'あや.ぶむ'],
    jlpt: 3,
    quizAnswers: ['Sing', 'Tremendously', 'Grant', 'Dangerous'],
    similars: [
      {
        kanji: '厄',
        meaning: 'unlucky',
      },
      {
        kanji: '犯',
        meaning: 'crime',
      },
      {
        kanji: '券',
        meaning: 'ticket',
      },
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '仮',
        meaning: 'sham',
      },
      {
        kanji: '矢',
        meaning: 'dart',
      },
      {
        kanji: '失',
        meaning: 'lose',
      },
      {
        kanji: '佐',
        meaning: 'assistant',
      },
      {
        kanji: '医',
        meaning: 'doctor',
      },
      {
        kanji: '体',
        meaning: 'body',
      },
    ],
    usedIn: [
      {
        kanji: '危ない',
        reading: 'あぶない',
        meanings: 'dangerous',
      },
      {
        kanji: '危ない橋を渡る',
        reading: 'あぶないはしをわたる',
        meanings: 'to tread on thin ice',
      },
      {
        kanji: '危うい',
        reading: 'あやうい',
        meanings: 'dangerous',
      },
      {
        kanji: '危ぶむ',
        reading: 'あやぶむ',
        meanings: 'to fear',
      },
      {
        kanji: '危',
        reading: 'き',
        meanings: 'danger',
      },
      {
        kanji: '危害',
        reading: 'きがい',
        meanings: 'injury',
      },
      {
        kanji: '安危',
        reading: 'あんき',
        meanings: 'fate',
      },
    ],
  },
  {
    kanjiName: '存',
    strokes: 6,
    grade: 6,
    freq: 577,
    meanings: ['Exist', 'Suppose', 'Be Aware Of', 'Believe', 'Feel'],
    on: ['そん', 'ぞん'],
    kun: ['ながら.える', 'あ.る', 'たも.つ', 'と.う'],
    jlpt: 3,
    quizAnswers: ['Exist', 'Handrail', 'Althea', 'Brief Time'],
    similars: [
      {
        kanji: '厚',
        meaning: 'thick',
      },
      {
        kanji: '在',
        meaning: 'exist',
      },
      {
        kanji: '好',
        meaning: 'fond',
      },
      {
        kanji: '季',
        meaning: 'seasons',
      },
      {
        kanji: '孝',
        meaning: 'filial piety',
      },
      {
        kanji: '百',
        meaning: 'hundred',
      },
      {
        kanji: '左',
        meaning: 'left',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '字',
        meaning: 'character',
      },
      {
        kanji: '不',
        meaning: 'negative',
      },
    ],
    usedIn: [
      {
        kanji: '永らえる',
        reading: 'ながらえる',
        meanings: 'to have a long life',
      },
      {
        kanji: '存続',
        reading: 'そんぞく',
        meanings: 'continuance',
      },
      {
        kanji: '存在',
        reading: 'そんざい',
        meanings: 'existence',
      },
      {
        kanji: '残存',
        reading: 'ざんぞん',
        meanings: 'survival',
      },
      {
        kanji: '共存',
        reading: 'きょうぞん',
        meanings: 'coexistence',
      },
      {
        kanji: '存分',
        reading: 'ぞんぶん',
        meanings: "to one's heart's content",
      },
      {
        kanji: '存じる',
        reading: 'ぞんじる',
        meanings: 'to know',
      },
      {
        kanji: '温存',
        reading: 'おんぞん',
        meanings: 'preservation',
      },
      {
        kanji: '共存',
        reading: 'きょうぞん',
        meanings: 'coexistence',
      },
    ],
  },
  {
    kanjiName: '原',
    strokes: 10,
    grade: 2,
    freq: 172,
    meanings: [
      'Meadow',
      'Original',
      'Primitive',
      'Field',
      'Plain',
      'Prairie',
      'Tundra',
      'Wilderness',
    ],
    on: ['げん'],
    kun: ['はら'],
    jlpt: 3,
    quizAnswers: ['Gain', 'Meadow', 'Ditch', 'Case'],
    similars: [
      {
        kanji: '源',
        meaning: 'source',
      },
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
      {
        kanji: '僚',
        meaning: 'colleague',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '頑',
        meaning: 'stubborn',
      },
      {
        kanji: '費',
        meaning: 'expense',
      },
      {
        kanji: '寮',
        meaning: 'dormitory',
      },
      {
        kanji: '項',
        meaning: 'paragraph',
      },
      {
        kanji: '貧',
        meaning: 'poverty',
      },
    ],
    usedIn: [
      {
        kanji: '原',
        reading: 'はら',
        meanings: 'field',
      },
      {
        kanji: '原っぱ',
        reading: 'はらっぱ',
        meanings: 'open field',
      },
      {
        kanji: '笹原',
        reading: 'ささはら',
        meanings: 'field of bamboo grass',
      },
      {
        kanji: '関ヶ原',
        reading: 'せきがはら',
        meanings: 'Sekigahara (battle site',
      },
      {
        kanji: '原',
        reading: 'げん',
        meanings: 'original',
      },
      {
        kanji: '原案',
        reading: 'げんあん',
        meanings: 'original plan',
      },
      {
        kanji: '中原',
        reading: 'ちゅうげん',
        meanings: 'middle of a field',
      },
      {
        kanji: '抗原',
        reading: 'こうげん',
        meanings: 'antigen',
      },
    ],
  },
  {
    kanjiName: '薬',
    strokes: 16,
    grade: 3,
    freq: 702,
    meanings: ['Medicine', 'Chemical', 'Enamel', 'Gunpowder', 'Benefit'],
    on: ['やく'],
    kun: ['くすり'],
    jlpt: 3,
    quizAnswers: ['Medicine', 'Compensate', 'Thick', 'Shelf'],
    similars: [
      {
        kanji: '楽',
        meaning: 'music',
      },
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '菜',
        meaning: 'vegetable',
      },
      {
        kanji: '募',
        meaning: 'recruit',
      },
      {
        kanji: '墓',
        meaning: 'grave',
      },
      {
        kanji: '菊',
        meaning: 'chrysanthemum',
      },
      {
        kanji: '幕',
        meaning: 'curtain',
      },
      {
        kanji: '草',
        meaning: 'grass',
      },
      {
        kanji: '散',
        meaning: 'scatter',
      },
      {
        kanji: '煮',
        meaning: 'boil',
      },
    ],
    usedIn: [
      {
        kanji: '薬',
        reading: 'くすり',
        meanings: 'medicine',
      },
      {
        kanji: '薬指',
        reading: 'くすりゆび',
        meanings: 'ring finger',
      },
      {
        kanji: '薬',
        reading: 'やく',
        meanings: 'dope',
      },
      {
        kanji: '薬価',
        reading: 'やっか',
        meanings: 'drug price',
      },
      {
        kanji: '製薬',
        reading: 'せいやく',
        meanings: 'medicine manufacture',
      },
      {
        kanji: '医薬',
        reading: 'いやく',
        meanings: 'medicine',
      },
    ],
  },
  {
    kanjiName: '側',
    strokes: 11,
    grade: 4,
    freq: 216,
    meanings: ['Side', 'Lean', 'Oppose', 'Regret'],
    on: ['そく'],
    kun: ['かわ', 'がわ', 'そば'],
    jlpt: 3,
    quizAnswers: ['Nearby', 'Side', 'Gallop', 'Softly'],
    similars: [
      {
        kanji: '則',
        meaning: 'rule',
      },
      {
        kanji: '測',
        meaning: 'fathom',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '卑',
        meaning: 'lowly',
      },
      {
        kanji: '貨',
        meaning: 'freight',
      },
      {
        kanji: '貞',
        meaning: 'upright',
      },
      {
        kanji: '伸',
        meaning: 'expand',
      },
      {
        kanji: '偵',
        meaning: 'spy',
      },
      {
        kanji: '財',
        meaning: 'property',
      },
      {
        kanji: '貝',
        meaning: 'shellfish',
      },
    ],
    usedIn: [
      {
        kanji: '側',
        reading: 'がわ',
        meanings: 'side (of something',
      },
      {
        kanji: '側板',
        reading: 'がわいた',
        meanings: 'stringer',
      },
      {
        kanji: '裏っかわ',
        reading: 'うらっかわ',
        meanings: 'the reverse (side)',
      },
      {
        kanji: '上っ側',
        reading: 'うわっかわ',
        meanings: 'upper side',
      },
      {
        kanji: '側',
        reading: 'がわ',
        meanings: 'side (of something',
      },
      {
        kanji: '側板',
        reading: 'がわいた',
        meanings: 'stringer',
      },
      {
        kanji: '縁側',
        reading: 'えんがわ',
        meanings: 'engawa',
      },
      {
        kanji: '体制側',
        reading: 'たいせいがわ',
        meanings: 'the establishment',
      },
      {
        kanji: '側',
        reading: 'そば',
        meanings: 'near',
      },
      {
        kanji: '側泳',
        reading: 'そばえい',
        meanings: 'side stroke',
      },
      {
        kanji: 'お側',
        reading: 'おそば',
        meanings: 'near',
      },
      {
        kanji: '側',
        reading: 'そく',
        meanings: 'first principle of the Eight Principles of Yong',
      },
      {
        kanji: '側',
        reading: 'そば',
        meanings: 'near',
      },
      {
        kanji: '最外側',
        reading: 'さいがいそく',
        meanings: 'outermost (side)',
      },
      {
        kanji: '体側',
        reading: 'たいそく',
        meanings: 'side of a body',
      },
    ],
  },
  {
    kanjiName: '席',
    strokes: 10,
    grade: 4,
    freq: 370,
    meanings: ['Seat', 'Mat', 'Occasion', 'Place'],
    on: ['せき'],
    kun: ['むしろ'],
    jlpt: 3,
    quizAnswers: ['Venom', 'Seat', 'Target', 'Wealth'],
    similars: [
      {
        kanji: '度',
        meaning: 'degrees',
      },
      {
        kanji: '庶',
        meaning: 'commoner',
      },
      {
        kanji: '部',
        meaning: 'section',
      },
      {
        kanji: '常',
        meaning: 'usual',
      },
      {
        kanji: '剖',
        meaning: 'divide',
      },
      {
        kanji: '庫',
        meaning: 'warehouse',
      },
      {
        kanji: '店',
        meaning: 'store',
      },
      {
        kanji: '章',
        meaning: 'badge',
      },
      {
        kanji: '麻',
        meaning: 'hemp',
      },
      {
        kanji: '棄',
        meaning: 'abandon',
      },
    ],
    usedIn: [
      {
        kanji: '筵',
        reading: 'むしろ',
        meanings: 'woven mat (esp. one made of straw)',
      },
      {
        kanji: '竹席',
        reading: 'たかむしろ',
        meanings: 'bamboo mat',
      },
      {
        kanji: '席',
        reading: 'せき',
        meanings: 'seat',
      },
      {
        kanji: '席上',
        reading: 'せきじょう',
        meanings: 'at the meeting',
      },
      {
        kanji: '寄席',
        reading: 'よせ',
        meanings: 'entertainment hall (for rakugo',
      },
      {
        kanji: '次席',
        reading: 'じせき',
        meanings: 'associate',
      },
    ],
  },
  {
    kanjiName: '敗',
    strokes: 11,
    grade: 4,
    freq: 516,
    meanings: ['Failure', 'Defeat', 'Reversal'],
    on: ['はい'],
    kun: ['やぶ.れる'],
    jlpt: 3,
    quizAnswers: ['Enclosure', 'Failure', 'Be Fragrant', 'Pamper'],
    similars: [
      {
        kanji: '販',
        meaning: 'marketing',
      },
      {
        kanji: '眺',
        meaning: 'stare',
      },
      {
        kanji: '財',
        meaning: 'property',
      },
      {
        kanji: '関',
        meaning: 'connection',
      },
      {
        kanji: '賊',
        meaning: 'burglar',
      },
      {
        kanji: '賄',
        meaning: 'bribe',
      },
      {
        kanji: '暖',
        meaning: 'warmth',
      },
      {
        kanji: '映',
        meaning: 'reflect',
      },
      {
        kanji: '易',
        meaning: 'easy',
      },
      {
        kanji: '則',
        meaning: 'rule',
      },
    ],
    usedIn: [
      {
        kanji: '敗れる',
        reading: 'やぶれる',
        meanings: 'to be defeated',
      },
      {
        kanji: '敗',
        reading: 'はい',
        meanings: 'loss',
      },
      {
        kanji: '敗因',
        reading: 'はいいん',
        meanings: 'cause of defeat',
      },
      {
        kanji: '惜敗',
        reading: 'せきはい',
        meanings: 'regrettable defeat',
      },
      {
        kanji: '零敗',
        reading: 'れいはい',
        meanings: 'losing without scoring',
      },
    ],
  },
  {
    kanjiName: '果',
    strokes: 8,
    grade: 4,
    freq: 258,
    meanings: [
      'Fruit',
      'Reward',
      'Carry Out',
      'Achieve',
      'Complete',
      'End',
      'Finish',
      'Succeed',
    ],
    on: ['か'],
    kun: ['は.たす', 'はた.す', '-は.たす', 'は.てる', '-は.てる', 'は.て'],
    jlpt: 3,
    quizAnswers: ['Food', 'Arms', 'Inquire', 'Fruit'],
    similars: [
      {
        kanji: '軌',
        meaning: 'rut',
      },
      {
        kanji: '是',
        meaning: 'just so',
      },
      {
        kanji: '某',
        meaning: 'so-and-so',
      },
      {
        kanji: '東',
        meaning: 'east',
      },
      {
        kanji: '早',
        meaning: 'early',
      },
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '巣',
        meaning: 'nest',
      },
      {
        kanji: '軟',
        meaning: 'soft',
      },
      {
        kanji: '泉',
        meaning: 'spring',
      },
      {
        kanji: '映',
        meaning: 'reflect',
      },
    ],
    usedIn: [
      {
        kanji: '果たす',
        reading: 'はたす',
        meanings: 'to accomplish',
      },
      {
        kanji: '果たす',
        reading: 'はたす',
        meanings: 'to accomplish',
      },
      {
        kanji: '果てる',
        reading: 'はてる',
        meanings: 'to end',
      },
      {
        kanji: '果て',
        reading: 'はて',
        meanings: 'the end',
      },
      {
        kanji: '果てしない',
        reading: 'はてしない',
        meanings: 'endless',
      },
      {
        kanji: '果',
        reading: 'か',
        meanings: 'phala (attained state',
      },
      {
        kanji: '果敢',
        reading: 'かかん',
        meanings: 'resolute',
      },
      {
        kanji: '青果',
        reading: 'せいか',
        meanings: 'fruits and vegetables',
      },
      {
        kanji: '研究結果',
        reading: 'けんきゅうけっか',
        meanings: 'results of a scientific investigation',
      },
    ],
  },
  {
    kanjiName: '因',
    strokes: 6,
    grade: 5,
    freq: 636,
    meanings: [
      'Cause',
      'Factor',
      'Be Associated With',
      'Depend On',
      'Be Limited To',
    ],
    on: ['いん'],
    kun: ['よ.る', 'ちな.む'],
    jlpt: 3,
    quizAnswers: ['Coffin', 'Summit', 'Cause', 'Compare'],
    similars: [
      {
        kanji: '囲',
        meaning: 'surround',
      },
      {
        kanji: '困',
        meaning: 'quandary',
      },
      {
        kanji: '図',
        meaning: 'map',
      },
      {
        kanji: '囚',
        meaning: 'captured',
      },
      {
        kanji: '四',
        meaning: 'four',
      },
      {
        kanji: '姻',
        meaning: 'matrimony',
      },
      {
        kanji: '団',
        meaning: 'group',
      },
      {
        kanji: '恩',
        meaning: 'grace',
      },
      {
        kanji: '菌',
        meaning: 'germ',
      },
      {
        kanji: '回',
        meaning: '-times',
      },
    ],
    usedIn: [
      {
        kanji: '依る',
        reading: 'よる',
        meanings: 'to be due to',
      },
      {
        kanji: 'よるところが大きい',
        reading: 'よるところがおおきい',
        meanings: 'depending largely on',
      },
      {
        kanji: '因む',
        reading: 'ちなむ',
        meanings: 'to be associated (with)',
      },
      {
        kanji: '因',
        reading: 'いん',
        meanings: 'cause',
      },
      {
        kanji: '因縁',
        reading: 'いんねん',
        meanings: 'fate',
      },
      {
        kanji: '主因',
        reading: 'しゅいん',
        meanings: 'primary cause',
      },
      {
        kanji: '勝因',
        reading: 'しょういん',
        meanings: 'cause of victory',
      },
    ],
  },
  {
    kanjiName: '常',
    strokes: 11,
    grade: 5,
    freq: 293,
    meanings: [
      'Usual',
      'Ordinary',
      'Normal',
      'Common',
      'Regular',
      'Continually',
      'Always',
      'Long-lasting',
    ],
    on: ['じょう'],
    kun: ['つね', 'とこ-'],
    jlpt: 3,
    quizAnswers: ['Usual', 'Dip', 'Padding', 'Prize'],
    similars: [
      {
        kanji: '党',
        meaning: 'party',
      },
      {
        kanji: '堂',
        meaning: 'public chamber',
      },
      {
        kanji: '掌',
        meaning: 'manipulate',
      },
      {
        kanji: '営',
        meaning: 'camp',
      },
      {
        kanji: '席',
        meaning: 'seat',
      },
      {
        kanji: '帝',
        meaning: 'sovereign',
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug',
      },
      {
        kanji: '官',
        meaning: 'bureaucrat',
      },
      {
        kanji: '部',
        meaning: 'section',
      },
      {
        kanji: '帥',
        meaning: 'commander',
      },
    ],
    usedIn: [
      {
        kanji: '常',
        reading: 'つね',
        meanings: 'usual state of things',
      },
      {
        kanji: '常に',
        reading: 'つねに',
        meanings: 'always',
      },
      {
        kanji: '経常',
        reading: 'けいじょう',
        meanings: 'ordinary',
      },
      {
        kanji: '人の常',
        reading: 'ひとのつね',
        meanings: 'human nature',
      },
      {
        kanji: '常識',
        reading: 'じょうしき',
        meanings: 'common sense',
      },
      {
        kanji: '常勤',
        reading: 'じょうきん',
        meanings: 'full-time employment',
      },
      {
        kanji: '平常',
        reading: 'へいじょう',
        meanings: 'normal',
      },
      {
        kanji: '経常',
        reading: 'けいじょう',
        meanings: 'ordinary',
      },
    ],
  },
  {
    kanjiName: '識',
    strokes: 19,
    grade: 5,
    freq: 496,
    meanings: ['Discriminating', 'Know', 'Write'],
    on: ['しき'],
    kun: ['し.る', 'しる.す'],
    jlpt: 3,
    quizAnswers: ['Discriminating', 'Low Price', 'Meter', 'Cause'],
    similars: [
      {
        kanji: '諸',
        meaning: 'various',
      },
      {
        kanji: '職',
        meaning: 'post',
      },
      {
        kanji: '織',
        meaning: 'weave',
      },
      {
        kanji: '評',
        meaning: 'evaluate',
      },
      {
        kanji: '譜',
        meaning: 'musical score',
      },
      {
        kanji: '誠',
        meaning: 'sincerity',
      },
      {
        kanji: '議',
        meaning: 'deliberation',
      },
      {
        kanji: '課',
        meaning: 'chapter',
      },
      {
        kanji: '誘',
        meaning: 'entice',
      },
      {
        kanji: '貴',
        meaning: 'precious',
      },
    ],
    usedIn: [
      {
        kanji: '知る',
        reading: 'しる',
        meanings: 'to know',
      },
      {
        kanji: '記す',
        reading: 'しるす',
        meanings: 'to write down',
      },
      {
        kanji: '記す',
        reading: 'しるす',
        meanings: 'to write down',
      },
      {
        kanji: '識',
        reading: 'しき',
        meanings: 'acquaintanceship',
      },
      {
        kanji: '識者',
        reading: 'しきしゃ',
        meanings: 'well-informed person',
      },
      {
        kanji: '光学式文字認識',
        reading: 'こうがくしきもじにんしき',
        meanings: 'optical character recognition',
      },
      {
        kanji: '目的意識',
        reading: 'もくてきいしき',
        meanings: 'sense of purpose',
      },
    ],
  },
  {
    kanjiName: '非',
    strokes: 8,
    grade: 5,
    freq: 472,
    meanings: ['Un-', 'Mistake', 'Negative', 'Injustice', 'Non-'],
    on: ['ひ'],
    kun: ['あら.ず'],
    jlpt: 3,
    quizAnswers: ['Un-', 'Perfume', 'Attack', 'Escape From'],
    similars: [
      {
        kanji: '俳',
        meaning: 'haiku',
      },
      {
        kanji: '排',
        meaning: 'repudiate',
      },
      {
        kanji: '扉',
        meaning: 'front door',
      },
      {
        kanji: '悲',
        meaning: 'grieve',
      },
      {
        kanji: '罪',
        meaning: 'guilt',
      },
      {
        kanji: '輩',
        meaning: 'comrade',
      },
      {
        kanji: '作',
        meaning: 'make',
      },
      {
        kanji: '拒',
        meaning: 'repel',
      },
      {
        kanji: '雄',
        meaning: 'masculine',
      },
      {
        kanji: '隻',
        meaning: 'vessels',
      },
    ],
    usedIn: [
      {
        kanji: '非ず',
        reading: 'あらず',
        meanings: 'not',
      },
      {
        kanji: '非ずんば',
        reading: 'あらずんば',
        meanings: 'if not',
      },
      {
        kanji: '非',
        reading: 'ひ',
        meanings: 'fault',
      },
      {
        kanji: '非行',
        reading: 'ひこう',
        meanings: 'delinquency',
      },
      {
        kanji: '是非是非',
        reading: 'ぜひぜひ',
        meanings: 'certainly',
      },
      {
        kanji: '理非',
        reading: 'りひ',
        meanings: 'right and wrong',
      },
    ],
  },
  {
    kanjiName: '官',
    strokes: 8,
    grade: 4,
    freq: 230,
    meanings: ['Bureaucrat', 'The Government', 'Organ'],
    on: ['かん'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Bureaucrat', 'Performance', 'Rest', 'Honor'],
    similars: [
      {
        kanji: '宮',
        meaning: 'Shinto shrine',
      },
      {
        kanji: '棺',
        meaning: 'coffin',
      },
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '党',
        meaning: 'party',
      },
      {
        kanji: '営',
        meaning: 'camp',
      },
      {
        kanji: '管',
        meaning: 'pipe',
      },
      {
        kanji: '客',
        meaning: 'guest',
      },
      {
        kanji: '品',
        meaning: 'goods',
      },
      {
        kanji: '堂',
        meaning: 'public chamber',
      },
      {
        kanji: '常',
        meaning: 'usual',
      },
    ],
    usedIn: [
      {
        kanji: '官',
        reading: 'かん',
        meanings: 'government service',
      },
      {
        kanji: '官界',
        reading: 'かんかい',
        meanings: 'bureaucracy',
      },
      {
        kanji: '代官',
        reading: 'だいかん',
        meanings: 'local governor (Edo period)',
      },
      {
        kanji: '自衛官',
        reading: 'じえいかん',
        meanings: 'Japanese Self-Defense Force official',
      },
    ],
  },
  {
    kanjiName: '察',
    strokes: 14,
    grade: 4,
    freq: 477,
    meanings: ['Guess', 'Presume', 'Surmise', 'Judge', 'Understand'],
    on: ['さつ'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['All', 'Audience (with King)', 'Cornerstone', 'Guess'],
    similars: [
      {
        kanji: '擦',
        meaning: 'grate',
      },
      {
        kanji: '際',
        meaning: 'occasion',
      },
      {
        kanji: '祭',
        meaning: 'ritual',
      },
      {
        kanji: '宗',
        meaning: 'religion',
      },
      {
        kanji: '客',
        meaning: 'guest',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
      {
        kanji: '禁',
        meaning: 'prohibition',
      },
      {
        kanji: '窯',
        meaning: 'kiln',
      },
      {
        kanji: '額',
        meaning: 'forehead',
      },
      {
        kanji: '襟',
        meaning: 'collar',
      },
    ],
    usedIn: [
      {
        kanji: '察',
        reading: 'さつ',
        meanings: 'cops',
      },
      {
        kanji: '監察',
        reading: 'かんさつ',
        meanings: 'inspection',
      },
      {
        kanji: '偵察',
        reading: 'ていさつ',
        meanings: 'scouting',
      },
    ],
  },
  {
    kanjiName: '愛',
    strokes: 13,
    grade: 4,
    freq: 640,
    meanings: ['Love', 'Affection', 'Favourite'],
    on: ['あい'],
    kun: ['いと.しい', 'かな.しい', 'め.でる', 'お.しむ', 'まな'],
    jlpt: 3,
    quizAnswers: ['Hump', 'Tower', 'Fee', 'Love'],
    similars: [
      {
        kanji: '憂',
        meaning: 'melancholy',
      },
      {
        kanji: '優',
        meaning: 'tenderness',
      },
      {
        kanji: '受',
        meaning: 'accept',
      },
      {
        kanji: '栄',
        meaning: 'flourish',
      },
      {
        kanji: '慶',
        meaning: 'jubilation',
      },
      {
        kanji: '緩',
        meaning: 'slacken',
      },
      {
        kanji: '淡',
        meaning: 'thin',
      },
      {
        kanji: '授',
        meaning: 'impart',
      },
      {
        kanji: '労',
        meaning: 'labor',
      },
      {
        kanji: '後',
        meaning: 'behind',
      },
    ],
    usedIn: [
      {
        kanji: '愛しい',
        reading: 'いとしい',
        meanings: 'lovely',
      },
      {
        kanji: '悲しい',
        reading: 'かなしい',
        meanings: 'sad',
      },
      {
        kanji: '愛でる',
        reading: 'めでる',
        meanings: 'to love',
      },
      {
        kanji: '惜しむ',
        reading: 'おしむ',
        meanings: 'to be frugal',
      },
      {
        kanji: '愛',
        reading: 'まな',
        meanings: 'beloved',
      },
      {
        kanji: '愛弟子',
        reading: 'まなでし',
        meanings: 'favorite pupil',
      },
      {
        kanji: '愛',
        reading: 'あい',
        meanings: 'love',
      },
      {
        kanji: '愛犬',
        reading: 'あいけん',
        meanings: 'pet dog',
      },
      {
        kanji: '友愛',
        reading: 'ゆうあい',
        meanings: 'fraternity',
      },
      {
        kanji: '同性愛',
        reading: 'どうせいあい',
        meanings: 'homosexuality',
      },
    ],
  },
  {
    kanjiName: '警',
    strokes: 19,
    grade: 6,
    freq: 366,
    meanings: ['Admonish', 'Commandment'],
    on: ['けい'],
    kun: ['いまし.める'],
    jlpt: 3,
    quizAnswers: ['Admonish', 'Defy', 'Morning', 'Deliberately'],
    similars: [
      {
        kanji: '敬',
        meaning: 'awe',
      },
      {
        kanji: '謄',
        meaning: 'mimeograph',
      },
      {
        kanji: '誓',
        meaning: 'vow',
      },
      {
        kanji: '誉',
        meaning: 'reputation',
      },
      {
        kanji: '驚',
        meaning: 'wonder',
      },
      {
        kanji: '碁',
        meaning: 'Go',
      },
      {
        kanji: '喜',
        meaning: 'rejoice',
      },
      {
        kanji: '磨',
        meaning: 'grind',
      },
      {
        kanji: '信',
        meaning: 'faith',
      },
      {
        kanji: '辞',
        meaning: 'resign',
      },
    ],
    usedIn: [
      {
        kanji: '戒める',
        reading: 'いましめる',
        meanings: 'to warn against',
      },
      {
        kanji: '警官',
        reading: 'けいかん',
        meanings: 'police officer',
      },
      {
        kanji: '警戒',
        reading: 'けいかい',
        meanings: 'vigilance',
      },
      {
        kanji: '県警',
        reading: 'けんけい',
        meanings: 'prefectural police',
      },
      {
        kanji: '府警',
        reading: 'ふけい',
        meanings: 'prefectural police (Osaka or Kyoto)',
      },
    ],
  },
  {
    kanjiName: '覚',
    strokes: 12,
    grade: 4,
    freq: 710,
    meanings: ['Memorize', 'Learn', 'Remember', 'Awake', 'Sober Up'],
    on: ['かく'],
    kun: ['おぼ.える', 'さ.ます', 'さ.める', 'さと.る'],
    jlpt: 3,
    quizAnswers: ['Memorize', 'Ear (grain)', 'Judge', 'Arms & Legs'],
    similars: [
      {
        kanji: '視',
        meaning: 'inspection',
      },
      {
        kanji: '規',
        meaning: 'standard',
      },
      {
        kanji: '演',
        meaning: 'performance',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '褐',
        meaning: 'brown',
      },
      {
        kanji: '寛',
        meaning: 'tolerant',
      },
      {
        kanji: '慎',
        meaning: 'humility',
      },
      {
        kanji: '資',
        meaning: 'assets',
      },
      {
        kanji: '賓',
        meaning: 'V.I.P.',
      },
      {
        kanji: '賞',
        meaning: 'prize',
      },
    ],
    usedIn: [
      {
        kanji: '覚える',
        reading: 'おぼえる',
        meanings: 'to memorize',
      },
      {
        kanji: '覚ます',
        reading: 'さます',
        meanings: 'to awaken',
      },
      {
        kanji: '覚める',
        reading: 'さめる',
        meanings: 'to wake',
      },
      {
        kanji: '悟る',
        reading: 'さとる',
        meanings: 'to perceive',
      },
      {
        kanji: '覚醒剤',
        reading: 'かくせいざい',
        meanings: 'stimulant (e.g. psychoactive drugs like methamphetamine',
      },
      {
        kanji: '覚悟',
        reading: 'かくご',
        meanings: 'readiness',
      },
      {
        kanji: '視聴覚',
        reading: 'しちょうかく',
        meanings: 'senses of seeing and hearing',
      },
      {
        kanji: '才覚',
        reading: 'さいかく',
        meanings: 'ready wit',
      },
    ],
  },
  {
    kanjiName: '説',
    strokes: 14,
    grade: 4,
    freq: 326,
    meanings: ['Opinion', 'Theory', 'Explanation', 'Rumor'],
    on: ['せつ', 'ぜい'],
    kun: ['と.く'],
    jlpt: 3,
    quizAnswers: ['Supply', 'Grow Worse', 'Hit', 'Opinion'],
    similars: [
      {
        kanji: '詔',
        meaning: 'imperial edict',
      },
      {
        kanji: '詞',
        meaning: 'part of speech',
      },
      {
        kanji: '談',
        meaning: 'discuss',
      },
      {
        kanji: '誘',
        meaning: 'entice',
      },
      {
        kanji: '詳',
        meaning: 'detailed',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '税',
        meaning: 'tax',
      },
      {
        kanji: '誠',
        meaning: 'sincerity',
      },
      {
        kanji: '詠',
        meaning: 'recitation',
      },
      {
        kanji: '託',
        meaning: 'consign',
      },
    ],
    usedIn: [
      {
        kanji: '説く',
        reading: 'とく',
        meanings: 'to explain',
      },
      {
        kanji: '説',
        reading: 'せつ',
        meanings: 'theory',
      },
      {
        kanji: '説明',
        reading: 'せつめい',
        meanings: 'explanation',
      },
      {
        kanji: '論説',
        reading: 'ろんせつ',
        meanings: 'article',
      },
      {
        kanji: '定説',
        reading: 'ていせつ',
        meanings: 'established theory',
      },
      {
        kanji: '遊説',
        reading: 'ゆうぜい',
        meanings: 'election tour',
      },
      {
        kanji: '全国遊説',
        reading: 'ぜんこくゆうぜい',
        meanings: 'nationwide election campaign',
      },
    ],
  },
  {
    kanjiName: '告',
    strokes: 7,
    grade: 4,
    freq: 188,
    meanings: ['Revelation', 'Tell', 'Inform', 'Announce'],
    on: ['こく'],
    kun: ['つ.げる'],
    jlpt: 3,
    quizAnswers: ['Curiosity', 'Take', 'Revelation', 'Loop'],
    similars: [
      {
        kanji: '舎',
        meaning: 'cottage',
      },
      {
        kanji: '舌',
        meaning: 'tongue',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '周',
        meaning: 'circumference',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '言',
        meaning: 'say',
      },
      {
        kanji: '伺',
        meaning: 'pay respects',
      },
      {
        kanji: '乱',
        meaning: 'riot',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '古',
        meaning: 'old',
      },
    ],
    usedIn: [
      {
        kanji: '告げる',
        reading: 'つげる',
        meanings: 'to tell',
      },
      {
        kanji: '告訴',
        reading: 'こくそ',
        meanings: 'accusation',
      },
      {
        kanji: '告示',
        reading: 'こくじ',
        meanings: 'notice',
      },
      {
        kanji: '抗告',
        reading: 'こうこく',
        meanings: 'appeal',
      },
      {
        kanji: '戒告',
        reading: 'かいこく',
        meanings: 'admonition',
      },
    ],
  },
  {
    kanjiName: '種',
    strokes: 14,
    grade: 4,
    freq: 461,
    meanings: ['Species', 'Kind', 'Class', 'Variety', 'Seed'],
    on: ['しゅ'],
    kun: ['たね', '-ぐさ'],
    jlpt: 3,
    quizAnswers: ['Succeed', 'Species', 'Sword', 'Cardinal'],
    similars: [
      {
        kanji: '糧',
        meaning: 'provisions',
      },
      {
        kanji: '童',
        meaning: 'juvenile',
      },
      {
        kanji: '穂',
        meaning: 'ear',
      },
      {
        kanji: '程',
        meaning: 'extent',
      },
      {
        kanji: '厘',
        meaning: 'rin',
      },
      {
        kanji: '棟',
        meaning: 'ridgepole',
      },
      {
        kanji: '量',
        meaning: 'quantity',
      },
      {
        kanji: '重',
        meaning: 'heavy',
      },
      {
        kanji: '積',
        meaning: 'volume',
      },
      {
        kanji: '類',
        meaning: 'sort',
      },
    ],
    usedIn: [
      {
        kanji: '種',
        reading: 'たね',
        meanings: 'seed (e.g. of a plant)',
      },
      {
        kanji: '種馬',
        reading: 'たねうま',
        meanings: 'studhorse',
      },
      {
        kanji: '菜種',
        reading: 'なたね',
        meanings: 'rapeseed',
      },
      {
        kanji: '麻種',
        reading: 'あさたね',
        meanings: 'hemp seed',
      },
      {
        kanji: '種',
        reading: 'しゅ',
        meanings: 'kind',
      },
      {
        kanji: '種子',
        reading: 'しゅし',
        meanings: 'seed',
      },
      {
        kanji: '職種',
        reading: 'しょくしゅ',
        meanings: 'type of occupation',
      },
      {
        kanji: '業種',
        reading: 'ぎょうしゅ',
        meanings: 'type of industry',
      },
    ],
  },
  {
    kanjiName: '達',
    strokes: 12,
    grade: 4,
    freq: 500,
    meanings: ['Accomplished', 'Reach', 'Arrive', 'Attain'],
    on: ['たつ', 'だ'],
    kun: ['-たち'],
    jlpt: 3,
    quizAnswers: ['Wait', 'Bung', 'Plot', 'Accomplished'],
    similars: [
      {
        kanji: '遅',
        meaning: 'slow',
      },
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '執',
        meaning: 'tenacious',
      },
      {
        kanji: '逝',
        meaning: 'departed',
      },
      {
        kanji: '報',
        meaning: 'report',
      },
      {
        kanji: '送',
        meaning: 'escort',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '適',
        meaning: 'suitable',
      },
      {
        kanji: '様',
        meaning: 'Esq.',
      },
    ],
    usedIn: [
      {
        kanji: '達人',
        reading: 'たつじん',
        meanings: 'master',
      },
      {
        kanji: '達意',
        reading: 'たつい',
        meanings: 'lucidity',
      },
      {
        kanji: '通達',
        reading: 'つうたつ',
        meanings: 'notification',
      },
      {
        kanji: '御用達',
        reading: 'ごようたし',
        meanings: 'purveyor (to the Imperial Household',
      },
      {
        kanji: '達',
        reading: 'だち',
        meanings: 'friend',
      },
      {
        kanji: '達頼喇嘛',
        reading: 'だらいらま',
        meanings: 'Dalai Lama',
      },
      {
        kanji: '重炭酸曹達',
        reading: 'じゅうたんさんそうだ',
        meanings: 'sodium bicarbonate',
      },
    ],
  },
  {
    kanjiName: '類',
    strokes: 18,
    grade: 4,
    freq: 678,
    meanings: ['Sort', 'Kind', 'Variety', 'Class', 'Genus'],
    on: ['るい'],
    kun: ['たぐ.い'],
    jlpt: 3,
    quizAnswers: ['Discontinue', 'End', 'The Dead', 'Sort'],
    similars: [
      {
        kanji: '積',
        meaning: 'volume',
      },
      {
        kanji: '瀬',
        meaning: 'rapids',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '頼',
        meaning: 'trust',
      },
      {
        kanji: '質',
        meaning: 'substance',
      },
      {
        kanji: '傾',
        meaning: 'lean',
      },
      {
        kanji: '賃',
        meaning: 'fare',
      },
      {
        kanji: '頑',
        meaning: 'stubborn',
      },
      {
        kanji: '頒',
        meaning: 'distribute',
      },
      {
        kanji: '頭',
        meaning: 'head',
      },
    ],
    usedIn: [
      {
        kanji: '類い',
        reading: 'たぐい',
        meanings: 'kind',
      },
      {
        kanji: '類いする',
        reading: 'たぐいする',
        meanings: 'to be equal to',
      },
      {
        kanji: '類',
        reading: 'るい',
        meanings: 'kind',
      },
      {
        kanji: '類似',
        reading: 'るいじ',
        meanings: 'resemblance',
      },
      {
        kanji: '魚類',
        reading: 'ぎょるい',
        meanings: 'fish',
      },
      {
        kanji: '魚介類',
        reading: 'ぎょかいるい',
        meanings: 'marine products',
      },
    ],
  },
  {
    kanjiName: '報',
    strokes: 12,
    grade: 5,
    freq: 167,
    meanings: ['Report', 'News', 'Reward', 'Retribution'],
    on: ['ほう'],
    kun: ['むく.いる'],
    jlpt: 3,
    quizAnswers: ['Report', 'Narrow', 'Renew', 'Hide'],
    similars: [
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '執',
        meaning: 'tenacious',
      },
      {
        kanji: '珠',
        meaning: 'pearl',
      },
      {
        kanji: '達',
        meaning: 'accomplished',
      },
      {
        kanji: '度',
        meaning: 'degrees',
      },
      {
        kanji: '殊',
        meaning: 'particularly',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
      {
        kanji: '穀',
        meaning: 'cereals',
      },
      {
        kanji: '廉',
        meaning: 'bargain',
      },
      {
        kanji: '業',
        meaning: 'business',
      },
    ],
    usedIn: [
      {
        kanji: '報いる',
        reading: 'むくいる',
        meanings: 'to reward',
      },
      {
        kanji: '報',
        reading: 'ほう',
        meanings: 'information',
      },
      {
        kanji: '報告',
        reading: 'ほうこく',
        meanings: 'report',
      },
      {
        kanji: '会報',
        reading: 'かいほう',
        meanings: 'bulletin (issued by a society)',
      },
      {
        kanji: '注意報',
        reading: 'ちゅういほう',
        meanings: 'warning (e.g. for a storm)',
      },
    ],
  },
  {
    kanjiName: '等',
    strokes: 12,
    grade: 3,
    freq: 798,
    meanings: [
      'Etc.',
      'And So Forth',
      'Class (first)',
      'Quality',
      'Equal',
      'Similar',
    ],
    on: ['とう'],
    kun: ['ひと.しい', 'など', '-ら'],
    jlpt: 3,
    quizAnswers: ['Pearl', 'Rebuke', 'Bow', 'Etc.'],
    similars: [
      {
        kanji: '符',
        meaning: 'token',
      },
      {
        kanji: '待',
        meaning: 'wait',
      },
      {
        kanji: '筆',
        meaning: 'writing brush',
      },
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '笑',
        meaning: 'laugh',
      },
      {
        kanji: '第',
        meaning: 'No.',
      },
      {
        kanji: '答',
        meaning: 'solution',
      },
      {
        kanji: '特',
        meaning: 'special',
      },
      {
        kanji: '策',
        meaning: 'scheme',
      },
      {
        kanji: '筒',
        meaning: 'cylinder',
      },
    ],
    usedIn: [
      {
        kanji: '等しい',
        reading: 'ひとしい',
        meanings: 'equal',
      },
      {
        kanji: '等',
        reading: 'など',
        meanings: 'et cetera',
      },
      {
        kanji: '等',
        reading: 'とう',
        meanings: 'class',
      },
      {
        kanji: '等身',
        reading: 'とうしん',
        meanings: 'body proportions',
      },
      {
        kanji: '中等',
        reading: 'ちゅうとう',
        meanings: 'second grade',
      },
      {
        kanji: '等々',
        reading: 'とうとう',
        meanings: 'etc.',
      },
    ],
  },
  {
    kanjiName: '座',
    strokes: 10,
    grade: 6,
    freq: 588,
    meanings: ['Squat', 'Seat', 'Cushion', 'Gathering', 'Sit'],
    on: ['ざ'],
    kun: ['すわ.る'],
    jlpt: 3,
    quizAnswers: ['Corrupt', 'Laziness', 'Squat', 'Duplicate'],
    similars: [
      {
        kanji: '卒',
        meaning: 'graduate',
      },
      {
        kanji: '産',
        meaning: 'products',
      },
      {
        kanji: '底',
        meaning: 'bottom',
      },
      {
        kanji: '栓',
        meaning: 'plug',
      },
      {
        kanji: '族',
        meaning: 'tribe',
      },
      {
        kanji: '望',
        meaning: 'ambition',
      },
      {
        kanji: '放',
        meaning: 'set free',
      },
      {
        kanji: '梅',
        meaning: 'plum',
      },
      {
        kanji: '程',
        meaning: 'extent',
      },
      {
        kanji: '空',
        meaning: 'empty',
      },
    ],
    usedIn: [
      {
        kanji: '座る',
        reading: 'すわる',
        meanings: 'to sit',
      },
      {
        kanji: '座',
        reading: 'ざ',
        meanings: 'seat',
      },
      {
        kanji: '座敷',
        reading: 'ざしき',
        meanings: 'tatami room',
      },
      {
        kanji: '連座',
        reading: 'れんざ',
        meanings: 'implication (in a crime)',
      },
      {
        kanji: '同坐',
        reading: 'どうざ',
        meanings: 'sitting together',
      },
    ],
  },
  {
    kanjiName: '忘',
    strokes: 7,
    grade: 6,
    freq: 1129,
    meanings: ['Forget'],
    on: ['ぼう'],
    kun: ['わす.れる'],
    jlpt: 3,
    quizAnswers: ['Quarters', 'Teach', 'Forget', 'Bustle'],
    similars: [
      {
        kanji: '応',
        meaning: 'apply',
      },
      {
        kanji: '志',
        meaning: 'intention',
      },
      {
        kanji: '忌',
        meaning: 'mourning',
      },
      {
        kanji: '念',
        meaning: 'wish',
      },
      {
        kanji: '恋',
        meaning: 'romance',
      },
      {
        kanji: '忍',
        meaning: 'endure',
      },
      {
        kanji: '心',
        meaning: 'heart',
      },
      {
        kanji: '思',
        meaning: 'think',
      },
      {
        kanji: '忠',
        meaning: 'loyalty',
      },
      {
        kanji: '恥',
        meaning: 'shame',
      },
    ],
    usedIn: [
      {
        kanji: '忘れる',
        reading: 'わすれる',
        meanings: 'to forget',
      },
      {
        kanji: '忘年会',
        reading: 'ぼうねんかい',
        meanings: 'year-end party',
      },
      {
        kanji: '忘却',
        reading: 'ぼうきゃく',
        meanings: 'lapse of memory',
      },
      {
        kanji: '両忘',
        reading: 'りょうぼう',
        meanings: 'detachment from dichotomies',
      },
      {
        kanji: '備忘',
        reading: 'びぼう',
        meanings: 'reminder',
      },
    ],
  },
  {
    kanjiName: '洗',
    strokes: 9,
    grade: 6,
    freq: 1168,
    meanings: ['Wash', 'Inquire Into', 'Probe'],
    on: ['せん'],
    kun: ['あら.う'],
    jlpt: 3,
    quizAnswers: ['Speech', 'Wash', 'Crop', 'Corner'],
    similars: [
      {
        kanji: '浜',
        meaning: 'seacoast',
      },
      {
        kanji: '泡',
        meaning: 'bubbles',
      },
      {
        kanji: '汽',
        meaning: 'vapor',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '洪',
        meaning: 'deluge',
      },
      {
        kanji: '性',
        meaning: 'sex',
      },
      {
        kanji: '法',
        meaning: 'method',
      },
      {
        kanji: '注',
        meaning: 'pour',
      },
      {
        kanji: '江',
        meaning: 'creek',
      },
      {
        kanji: '活',
        meaning: 'lively',
      },
    ],
    usedIn: [
      {
        kanji: '洗う',
        reading: 'あらう',
        meanings: 'to wash',
      },
      {
        kanji: '洗',
        reading: 'せん',
        meanings: 'washing machine',
      },
      {
        kanji: '洗剤',
        reading: 'せんざい',
        meanings: 'detergent',
      },
      {
        kanji: '水洗',
        reading: 'すいせん',
        meanings: 'washing with water',
      },
      {
        kanji: '杯洗',
        reading: 'はいせん',
        meanings: 'small vessel or bowl in which sake cups are rinsed',
      },
    ],
  },
  {
    kanjiName: '許',
    strokes: 11,
    grade: 5,
    freq: 720,
    meanings: ['Permit', 'Approve'],
    on: ['きょ'],
    kun: ['ゆる.す', 'もと'],
    jlpt: 3,
    quizAnswers: ['Equestrian', 'Edge', 'Ward', 'Permit'],
    similars: [
      {
        kanji: '詳',
        meaning: 'detailed',
      },
      {
        kanji: '訴',
        meaning: 'accusation',
      },
      {
        kanji: '訓',
        meaning: 'instruction',
      },
      {
        kanji: '計',
        meaning: 'plot',
      },
      {
        kanji: '託',
        meaning: 'consign',
      },
      {
        kanji: '話',
        meaning: 'tale',
      },
      {
        kanji: '誇',
        meaning: 'boast',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '評',
        meaning: 'evaluate',
      },
      {
        kanji: '設',
        meaning: 'establishment',
      },
    ],
    usedIn: [
      {
        kanji: '許す',
        reading: 'ゆるす',
        meanings: 'to permit',
      },
      {
        kanji: '許すまじ',
        reading: 'ゆるすまじ',
        meanings: 'unforgivable',
      },
      {
        kanji: '下',
        reading: 'もと',
        meanings: 'under (guidance',
      },
      {
        kanji: '胸元',
        reading: 'むなもと',
        meanings: 'breast',
      },
      {
        kanji: '此処許',
        reading: 'ここもと',
        meanings: 'here',
      },
      {
        kanji: '許諾',
        reading: 'きょだく',
        meanings: 'consent',
      },
      {
        kanji: '許可',
        reading: 'きょか',
        meanings: 'permission',
      },
      {
        kanji: '特許',
        reading: 'とっきょ',
        meanings: 'patent',
      },
      {
        kanji: '専売特許',
        reading: 'せんばいとっきょ',
        meanings: 'patent',
      },
    ],
  },
  {
    kanjiName: '静',
    strokes: 14,
    grade: 4,
    freq: 764,
    meanings: ['Quiet'],
    on: ['せい', 'じょう'],
    kun: ['しず-', 'しず.か', 'しず.まる', 'しず.める'],
    jlpt: 3,
    quizAnswers: ['Quiet', 'Wildness', 'Dove', 'Serving Sake'],
    similars: [
      {
        kanji: '散',
        meaning: 'scatter',
      },
      {
        kanji: '青',
        meaning: 'blue',
      },
      {
        kanji: '望',
        meaning: 'ambition',
      },
      {
        kanji: '理',
        meaning: 'logic',
      },
      {
        kanji: '撤',
        meaning: 'remove',
      },
      {
        kanji: '隷',
        meaning: 'slave',
      },
      {
        kanji: '載',
        meaning: 'ride',
      },
      {
        kanji: '起',
        meaning: 'rouse',
      },
      {
        kanji: '幸',
        meaning: 'happiness',
      },
      {
        kanji: '削',
        meaning: 'plane',
      },
    ],
    usedIn: [
      {
        kanji: '静か',
        reading: 'しずか',
        meanings: 'quiet',
      },
      {
        kanji: '静かに',
        reading: 'しずかに',
        meanings: 'calmly',
      },
      {
        kanji: '二人静',
        reading: 'ふたりしずか',
        meanings: 'Chloranthus serratus (species of flowering plant)',
      },
      {
        kanji: '一人静',
        reading: 'ひとりしずか',
        meanings: 'Chloranthus japonicus',
      },
      {
        kanji: '静まる',
        reading: 'しずまる',
        meanings: 'to become quiet',
      },
      {
        kanji: '静める',
        reading: 'しずめる',
        meanings: 'to quiet (a child',
      },
      {
        kanji: '静',
        reading: 'せい',
        meanings: 'stillness',
      },
      {
        kanji: '静観',
        reading: 'せいかん',
        meanings: 'watchful waiting',
      },
      {
        kanji: '沈静',
        reading: 'ちんせい',
        meanings: 'settling down',
      },
      {
        kanji: '寧静',
        reading: 'ねいせい',
        meanings: 'calm',
      },
      {
        kanji: '静脈',
        reading: 'じょうみゃく',
        meanings: 'vein',
      },
      {
        kanji: '静注',
        reading: 'じょうちゅう',
        meanings: 'intravenous injection',
      },
      {
        kanji: '寂静',
        reading: 'じゃくじょう',
        meanings: 'quiet',
      },
      {
        kanji: '涅槃寂静',
        reading: 'ねはんじゃくじょう',
        meanings: 'enlightenment leads to serenity',
      },
    ],
  },
  {
    kanjiName: '煙',
    strokes: 13,
    grade: 8,
    freq: 1290,
    meanings: ['Smoke'],
    on: ['えん'],
    kun: ['けむ.る', 'けむり', 'けむ.い'],
    jlpt: 3,
    quizAnswers: ['Smoke', 'Village', 'A Good Horse', 'Obey'],
    similars: [
      {
        kanji: '焼',
        meaning: 'bake',
      },
      {
        kanji: '要',
        meaning: 'need',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '腰',
        meaning: 'loins',
      },
      {
        kanji: '畑',
        meaning: 'farm',
      },
      {
        kanji: '標',
        meaning: 'signpost',
      },
      {
        kanji: '重',
        meaning: 'heavy',
      },
      {
        kanji: '粧',
        meaning: 'cosmetics',
      },
      {
        kanji: '差',
        meaning: 'distinction',
      },
      {
        kanji: '塑',
        meaning: 'model',
      },
    ],
    usedIn: [
      {
        kanji: '煙る',
        reading: 'けむる',
        meanings: 'to smoke (e.g. fire)',
      },
      {
        kanji: '煙',
        reading: 'けむり',
        meanings: 'smoke',
      },
      {
        kanji: '煙感知器',
        reading: 'けむりかんちき',
        meanings: 'smoke detector',
      },
      {
        kanji: '黒煙',
        reading: 'こくえん',
        meanings: 'black smoke',
      },
      {
        kanji: '砂煙',
        reading: 'すなけむり',
        meanings: 'cloud of sand (dust',
      },
      {
        kanji: '煙い',
        reading: 'けむい',
        meanings: 'smoky',
      },
      {
        kanji: '煙突',
        reading: 'えんとつ',
        meanings: 'chimney',
      },
      {
        kanji: '煙草',
        reading: 'たばこ',
        meanings: 'tobacco',
      },
      {
        kanji: '噴煙',
        reading: 'ふんえん',
        meanings: '(eruption of) smoke',
      },
      {
        kanji: '黒煙',
        reading: 'こくえん',
        meanings: 'black smoke',
      },
    ],
  },
  {
    kanjiName: '加',
    strokes: 5,
    grade: 4,
    freq: 130,
    meanings: ['Add', 'Addition', 'Increase', 'Join', 'Include', 'Canada'],
    on: ['か'],
    kun: ['くわ.える', 'くわ.わる'],
    jlpt: 3,
    quizAnswers: ['Challenge', 'Stork', 'Military Officer', 'Add'],
    similars: [
      {
        kanji: '召',
        meaning: 'seduce',
      },
      {
        kanji: '石',
        meaning: 'stone',
      },
      {
        kanji: '司',
        meaning: 'director',
      },
      {
        kanji: '如',
        meaning: 'likeness',
      },
      {
        kanji: '后',
        meaning: 'empress',
      },
      {
        kanji: '招',
        meaning: 'beckon',
      },
      {
        kanji: '沼',
        meaning: 'marsh',
      },
      {
        kanji: '句',
        meaning: 'phrase',
      },
      {
        kanji: '右',
        meaning: 'right',
      },
      {
        kanji: '占',
        meaning: 'fortune-telling',
      },
    ],
    usedIn: [
      {
        kanji: '加える',
        reading: 'くわえる',
        meanings: 'to add',
      },
      {
        kanji: '加わる',
        reading: 'くわわる',
        meanings: 'to be added to',
      },
      {
        kanji: '加',
        reading: 'か',
        meanings: 'addition',
      },
      {
        kanji: '加圧',
        reading: 'かあつ',
        meanings: 'increasing pressure',
      },
      {
        kanji: '添加',
        reading: 'てんか',
        meanings: 'addition',
      },
      {
        kanji: '倍加',
        reading: 'ばいか',
        meanings: 'doubling',
      },
    ],
  },
  {
    kanjiName: '容',
    strokes: 10,
    grade: 5,
    freq: 264,
    meanings: ['Contain', 'Form', 'Looks'],
    on: ['よう'],
    kun: ['い.れる'],
    jlpt: 3,
    quizAnswers: ['End', 'Contain', 'Excessive', 'Great'],
    similars: [
      {
        kanji: '客',
        meaning: 'guest',
      },
      {
        kanji: '浴',
        meaning: 'bathe',
      },
      {
        kanji: '溶',
        meaning: 'melt',
      },
      {
        kanji: '俗',
        meaning: 'vulgar',
      },
      {
        kanji: '谷',
        meaning: 'valley',
      },
      {
        kanji: '絡',
        meaning: 'entwine',
      },
      {
        kanji: '給',
        meaning: 'salary',
      },
      {
        kanji: '宮',
        meaning: 'Shinto shrine',
      },
      {
        kanji: '沿',
        meaning: 'run alongside',
      },
      {
        kanji: '尚',
        meaning: 'esteem',
      },
    ],
    usedIn: [
      {
        kanji: '入れる',
        reading: 'いれる',
        meanings: 'to put in',
      },
      {
        kanji: '形',
        reading: 'かたち',
        meanings: 'form',
      },
      {
        kanji: '容易',
        reading: 'ようい',
        meanings: 'easy',
      },
      {
        kanji: '陣容',
        reading: 'じんよう',
        meanings: 'battle formation',
      },
      {
        kanji: '受容',
        reading: 'じゅよう',
        meanings: 'reception',
      },
    ],
  },
  {
    kanjiName: '易',
    strokes: 8,
    grade: 5,
    freq: 571,
    meanings: ['Easy', 'Ready To', 'Simple', 'Fortune-telling', 'Divination'],
    on: ['えき', 'い'],
    kun: ['やさ.しい', 'やす.い'],
    jlpt: 3,
    quizAnswers: ['Easy', 'Resign', 'Embrace', 'Servant'],
    similars: [
      {
        kanji: '陽',
        meaning: 'sunshine',
      },
      {
        kanji: '湯',
        meaning: 'hot water',
      },
      {
        kanji: '揚',
        meaning: 'raise',
      },
      {
        kanji: '界',
        meaning: 'world',
      },
      {
        kanji: '場',
        meaning: 'location',
      },
      {
        kanji: '敗',
        meaning: 'failure',
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)',
      },
      {
        kanji: '渇',
        meaning: 'thirst',
      },
      {
        kanji: '喝',
        meaning: 'hoarse',
      },
      {
        kanji: '明',
        meaning: 'bright',
      },
    ],
    usedIn: [
      {
        kanji: '易しい',
        reading: 'やさしい',
        meanings: 'easy',
      },
      {
        kanji: 'やさしい日本語',
        reading: 'やさしいにほんご',
        meanings:
          'easy Japanese (that is easily understood by non-native speakers',
      },
      {
        kanji: '易い',
        reading: 'やすい',
        meanings: 'easy',
      },
      {
        kanji: '易',
        reading: 'えき',
        meanings:
          'type of cleromancy divination (described in the Book of Changes) performed with long sticks',
      },
      {
        kanji: '易学',
        reading: 'えきがく',
        meanings: 'study of divination',
      },
      {
        kanji: '改易',
        reading: 'かいえき',
        meanings: 'change of rank',
      },
      {
        kanji: '加工交易',
        reading: 'かこうこうえき',
        meanings:
          'processing trade (importing all or part of raw and auxiliary materials',
      },
      {
        kanji: '易',
        reading: 'い',
        meanings: 'easiness',
      },
      {
        kanji: '易々',
        reading: 'いい',
        meanings: 'easy',
      },
      {
        kanji: '簡易',
        reading: 'かんい',
        meanings: 'simplicity',
      },
      {
        kanji: '難易',
        reading: 'なんい',
        meanings: '(relative) difficulty',
      },
    ],
  },
  {
    kanjiName: '財',
    strokes: 10,
    grade: 5,
    freq: 494,
    meanings: ['Property', 'Money', 'Wealth', 'Assets'],
    on: ['ざい', 'さい', 'ぞく'],
    kun: ['たから'],
    jlpt: 3,
    quizAnswers: ['3-5am', 'Strive', 'Property', 'One Of A Pair'],
    similars: [
      {
        kanji: '則',
        meaning: 'rule',
      },
      {
        kanji: '敗',
        meaning: 'failure',
      },
      {
        kanji: '眺',
        meaning: 'stare',
      },
      {
        kanji: '販',
        meaning: 'marketing',
      },
      {
        kanji: '貝',
        meaning: 'shellfish',
      },
      {
        kanji: '賊',
        meaning: 'burglar',
      },
      {
        kanji: '貯',
        meaning: 'savings',
      },
      {
        kanji: '側',
        meaning: 'side',
      },
      {
        kanji: '閉',
        meaning: 'closed',
      },
      {
        kanji: '楽',
        meaning: 'music',
      },
    ],
    usedIn: [
      {
        kanji: '宝',
        reading: 'たから',
        meanings: 'treasure',
      },
      {
        kanji: '財',
        reading: 'ざい',
        meanings: 'fortune',
      },
      {
        kanji: '財界',
        reading: 'ざいかい',
        meanings: 'financial world',
      },
      {
        kanji: '無形文化財',
        reading: 'むけいぶんかざい',
        meanings: 'intangible cultural asset',
      },
      {
        kanji: '文化財',
        reading: 'ぶんかざい',
        meanings: 'cultural assets',
      },
      {
        kanji: '財布',
        reading: 'さいふ',
        meanings: 'wallet',
      },
      {
        kanji: '財布の紐を締める',
        reading: 'さいふのひもをしめる',
        meanings: 'to tighten the purse strings',
      },
    ],
  },
  {
    kanjiName: '若',
    strokes: 8,
    grade: 6,
    freq: 458,
    meanings: ['Young', 'If', 'Perhaps', 'Possibly', 'Low Number', 'Immature'],
    on: ['じゃく', 'にゃく', 'にゃ'],
    kun: ['わか.い', 'わか-', 'も.しくわ', 'も.し', 'も.しくは', 'ごと.し'],
    jlpt: 3,
    quizAnswers: ['Sultry', 'Vine', 'Regret', 'Young'],
    similars: [
      {
        kanji: '匿',
        meaning: 'hide',
      },
      {
        kanji: '荷',
        meaning: 'baggage',
      },
      {
        kanji: '苦',
        meaning: 'suffering',
      },
      {
        kanji: '吉',
        meaning: 'good luck',
      },
      {
        kanji: '培',
        meaning: 'cultivate',
      },
      {
        kanji: '搭',
        meaning: 'board',
      },
      {
        kanji: '括',
        meaning: 'fasten',
      },
      {
        kanji: '茶',
        meaning: 'tea',
      },
      {
        kanji: '拾',
        meaning: 'pick up',
      },
      {
        kanji: '塔',
        meaning: 'pagoda',
      },
    ],
    usedIn: [
      {
        kanji: '若い',
        reading: 'わかい',
        meanings: 'young',
      },
      {
        kanji: '若い頃',
        reading: 'わかいころ',
        meanings: "one's youth",
      },
      {
        kanji: '若し',
        reading: 'もし',
        meanings: 'if',
      },
      {
        kanji: '若しかしたら',
        reading: 'もしかしたら',
        meanings: 'perhaps',
      },
      {
        kanji: '若しくは',
        reading: 'もしくは',
        meanings: 'or',
      },
      {
        kanji: '如し',
        reading: 'ごとし',
        meanings: 'like',
      },
      {
        kanji: '若年',
        reading: 'じゃくねん',
        meanings: 'youth',
      },
      {
        kanji: '若僧',
        reading: 'にゃくそう',
        meanings: 'young monk',
      },
      {
        kanji: '老若',
        reading: 'ろうにゃく',
        meanings: 'young and old',
      },
      {
        kanji: '瞠若',
        reading: 'どうじゃく',
        meanings: '(staring in) astonishment',
      },
      {
        kanji: '若僧',
        reading: 'にゃくそう',
        meanings: 'young monk',
      },
      {
        kanji: '若道',
        reading: 'にゃくどう',
        meanings: 'homosexuality',
      },
      {
        kanji: '老若',
        reading: 'ろうにゃく',
        meanings: 'young and old',
      },
      {
        kanji: '若僧',
        reading: 'にゃくそう',
        meanings: 'young monk',
      },
      {
        kanji: '若道',
        reading: 'にゃくどう',
        meanings: 'homosexuality',
      },
      {
        kanji: '般若',
        reading: 'はんにゃ',
        meanings: 'prajna (wisdom required to attain enlightenment)',
      },
      {
        kanji: '麦般若',
        reading: 'むぎはんにゃ',
        meanings: 'beer',
      },
    ],
  },
  {
    kanjiName: '忙',
    strokes: 6,
    grade: 8,
    freq: 1475,
    meanings: ['Busy', 'Occupied', 'Restless'],
    on: ['ぼう', 'もう'],
    kun: ['いそが.しい', 'せわ.しい', 'おそ.れる', 'うれえるさま'],
    jlpt: 3,
    quizAnswers: ['Busy', 'Fabricate', 'Thrash', 'Mind'],
    similars: [
      {
        kanji: '性',
        meaning: 'sex',
      },
      {
        kanji: '快',
        meaning: 'cheerful',
      },
      {
        kanji: '怪',
        meaning: 'suspicious',
      },
      {
        kanji: '油',
        meaning: 'oil',
      },
      {
        kanji: '主',
        meaning: 'lord',
      },
      {
        kanji: '汚',
        meaning: 'dirty',
      },
      {
        kanji: '江',
        meaning: 'creek',
      },
      {
        kanji: '注',
        meaning: 'pour',
      },
      {
        kanji: '斗',
        meaning: 'Big Dipper',
      },
      {
        kanji: '慌',
        meaning: 'disconcerted',
      },
    ],
    usedIn: [
      {
        kanji: '忙しい',
        reading: 'いそがしい',
        meanings: 'busy',
      },
      {
        kanji: '忙しい',
        reading: 'せわしい',
        meanings: 'busy',
      },
      {
        kanji: '忙殺',
        reading: 'ぼうさつ',
        meanings: 'being extremely busy',
      },
      {
        kanji: '忙殺される',
        reading: 'ぼうさつされる',
        meanings: 'to be very busily occupied',
      },
      {
        kanji: '繁忙',
        reading: 'はんぼう',
        meanings: 'busy',
      },
    ],
  },
  {
    kanjiName: '徒',
    strokes: 10,
    grade: 4,
    freq: 817,
    meanings: [
      'On Foot',
      'Junior',
      'Emptiness',
      'Vanity',
      'Futility',
      'Uselessness',
      'Ephemeral Thing',
      'Gang',
      'Set',
      'Party',
      'People',
    ],
    on: ['と'],
    kun: ['いたずら', 'あだ'],
    jlpt: 3,
    quizAnswers: ['Oppress', 'On Foot', 'Pale', 'Send'],
    similars: [
      {
        kanji: '従',
        meaning: 'accompany',
      },
      {
        kanji: '使',
        meaning: 'use',
      },
      {
        kanji: '走',
        meaning: 'run',
      },
      {
        kanji: '待',
        meaning: 'wait',
      },
      {
        kanji: '促',
        meaning: 'stimulate',
      },
      {
        kanji: '依',
        meaning: 'reliant',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
      {
        kanji: '俵',
        meaning: 'bag',
      },
      {
        kanji: '美',
        meaning: 'beauty',
      },
      {
        kanji: '征',
        meaning: 'subjugate',
      },
    ],
    usedIn: [
      {
        kanji: '徒',
        reading: 'いたずら',
        meanings: 'useless',
      },
      {
        kanji: 'いたずら書き',
        reading: 'いたずらがき',
        meanings: 'scribbling',
      },
      {
        kanji: '徒',
        reading: 'あだ',
        meanings: 'vain',
      },
      {
        kanji: '徒疎か',
        reading: 'あだおろそか',
        meanings: 'making light of',
      },
      {
        kanji: '徒',
        reading: 'と',
        meanings: 'party',
      },
      {
        kanji: '徒歩',
        reading: 'とほ',
        meanings: 'walking',
      },
      {
        kanji: '信徒',
        reading: 'しんと',
        meanings: 'layman',
      },
      {
        kanji: '学徒',
        reading: 'がくと',
        meanings: 'student',
      },
    ],
  },
  {
    kanjiName: '得',
    strokes: 11,
    grade: 4,
    freq: 175,
    meanings: [
      'Gain',
      'Get',
      'Find',
      'Earn',
      'Acquire',
      'Can',
      'May',
      'Able To',
      'Profit',
      'Advantage',
      'Benefit',
    ],
    on: ['とく'],
    kun: ['え.る', 'う.る'],
    jlpt: 3,
    quizAnswers: ['Gain', 'Hawk', 'Perfection', 'Correct'],
    similars: [
      {
        kanji: '専',
        meaning: 'specialty',
      },
      {
        kanji: '待',
        meaning: 'wait',
      },
      {
        kanji: '但',
        meaning: 'however',
      },
      {
        kanji: '衝',
        meaning: 'collide',
      },
      {
        kanji: '尊',
        meaning: 'revered',
      },
      {
        kanji: '博',
        meaning: 'Dr.',
      },
      {
        kanji: '衡',
        meaning: 'equilibrium',
      },
      {
        kanji: '時',
        meaning: 'time',
      },
      {
        kanji: '臭',
        meaning: 'stinking',
      },
      {
        kanji: '徐',
        meaning: 'gradually',
      },
    ],
    usedIn: [
      {
        kanji: '得る',
        reading: 'える',
        meanings: 'to get',
      },
      {
        kanji: '得る',
        reading: 'うる',
        meanings: 'to be able to ...',
      },
      {
        kanji: '得撫草',
        reading: 'うるっぷそう',
        meanings: 'weaselsnout (Lagotis glauca)',
      },
      {
        kanji: '得',
        reading: 'とく',
        meanings: 'profit',
      },
      {
        kanji: '得意',
        reading: 'とくい',
        meanings: 'satisfaction',
      },
      {
        kanji: '拾得',
        reading: 'しゅうとく',
        meanings: 'finding (lost property)',
      },
      {
        kanji: '体得',
        reading: 'たいとく',
        meanings: 'mastery',
      },
    ],
  },
  {
    kanjiName: '続',
    strokes: 13,
    grade: 4,
    freq: 141,
    meanings: ['Continue', 'Series', 'Sequel'],
    on: ['ぞく', 'しょく', 'こう', 'きょう'],
    kun: ['つづ.く', 'つづ.ける', 'つぐ.ない'],
    jlpt: 3,
    quizAnswers: ['Continue', 'Conduct', 'Oneself', 'Officer'],
    similars: [
      {
        kanji: '統',
        meaning: 'overall',
      },
      {
        kanji: '紅',
        meaning: 'crimson',
      },
      {
        kanji: '紡',
        meaning: 'spinning',
      },
      {
        kanji: '絞',
        meaning: 'strangle',
      },
      {
        kanji: '紋',
        meaning: 'family crest',
      },
      {
        kanji: '結',
        meaning: 'tie',
      },
      {
        kanji: '繊',
        meaning: 'slender',
      },
      {
        kanji: '緑',
        meaning: 'green',
      },
      {
        kanji: '緒',
        meaning: 'thong',
      },
      {
        kanji: '糾',
        meaning: 'twist',
      },
    ],
    usedIn: [
      {
        kanji: '続く',
        reading: 'つづく',
        meanings: 'to continue',
      },
      {
        kanji: '続ける',
        reading: 'つづける',
        meanings: 'to continue',
      },
      {
        kanji: '続',
        reading: 'ぞく',
        meanings: 'continuation',
      },
      {
        kanji: '続出',
        reading: 'ぞくしゅつ',
        meanings: 'appearing one after another',
      },
      {
        kanji: '断続',
        reading: 'だんぞく',
        meanings: 'intermittence',
      },
      {
        kanji: '持続',
        reading: 'じぞく',
        meanings: 'continuation',
      },
      {
        kanji: '続',
        reading: 'ぞく',
        meanings: 'continuation',
      },
      {
        kanji: '続日本紀',
        reading: 'しょくにほんぎ',
        meanings:
          'Shoku Nihongi (second of the six classical Japanese history texts)',
      },
    ],
  },
  {
    kanjiName: '連',
    strokes: 10,
    grade: 4,
    freq: 30,
    meanings: [
      'Take Along',
      'Lead',
      'Join',
      'Connect',
      'Party',
      'Gang',
      'Clique',
    ],
    on: ['れん'],
    kun: ['つら.なる', 'つら.ねる', 'つ.れる', '-づ.れ'],
    jlpt: 3,
    quizAnswers: ['Flutter', 'Take Along', '1.32 Lb', 'Ice'],
    similars: [
      {
        kanji: '運',
        meaning: 'carry',
      },
      {
        kanji: '軒',
        meaning: 'flats',
      },
      {
        kanji: '軌',
        meaning: 'rut',
      },
      {
        kanji: '迫',
        meaning: 'urge',
      },
      {
        kanji: '車',
        meaning: 'car',
      },
      {
        kanji: '転',
        meaning: 'revolve',
      },
      {
        kanji: '乾',
        meaning: 'drought',
      },
      {
        kanji: '軟',
        meaning: 'soft',
      },
      {
        kanji: '較',
        meaning: 'contrast',
      },
      {
        kanji: '早',
        meaning: 'early',
      },
    ],
    usedIn: [
      {
        kanji: '連なる',
        reading: 'つらなる',
        meanings: 'to extend',
      },
      {
        kanji: '連ねる',
        reading: 'つらねる',
        meanings: 'to line up',
      },
      {
        kanji: '連れる',
        reading: 'つれる',
        meanings: 'to take (someone) with one',
      },
      {
        kanji: '連',
        reading: 'れん',
        meanings: 'two reams (of paper)',
      },
      {
        kanji: '連関',
        reading: 'れんかん',
        meanings: 'connection',
      },
      {
        kanji: '労連',
        reading: 'ろうれん',
        meanings: 'labour union',
      },
      {
        kanji: '常連',
        reading: 'じょうれん',
        meanings: 'regular customer',
      },
    ],
  },
  {
    kanjiName: '困',
    strokes: 7,
    grade: 6,
    freq: 843,
    meanings: ['Quandary', 'Become Distressed', 'Annoyed'],
    on: ['こん'],
    kun: ['こま.る'],
    jlpt: 3,
    quizAnswers: [
      'Direct Descent (non-bastard)',
      'Quandary',
      'Shop',
      'Beginning',
    ],
    similars: [
      {
        kanji: '因',
        meaning: 'cause',
      },
      {
        kanji: '囚',
        meaning: 'captured',
      },
      {
        kanji: '囲',
        meaning: 'surround',
      },
      {
        kanji: '果',
        meaning: 'fruit',
      },
      {
        kanji: '固',
        meaning: 'harden',
      },
      {
        kanji: '回',
        meaning: '-times',
      },
      {
        kanji: '末',
        meaning: 'end',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '体',
        meaning: 'body',
      },
    ],
    usedIn: [
      {
        kanji: '困る',
        reading: 'こまる',
        meanings: 'to be troubled',
      },
      {
        kanji: '困惑',
        reading: 'こんわく',
        meanings: 'bewilderment',
      },
      {
        kanji: '困難',
        reading: 'こんなん',
        meanings: 'difficulty',
      },
      {
        kanji: '絶対貧困',
        reading: 'ぜったいひんこん',
        meanings: 'absolute poverty',
      },
      {
        kanji: '絶対的貧困',
        reading: 'ぜったいてきひんこん',
        meanings: 'absolute poverty',
      },
    ],
  },
  {
    kanjiName: '機',
    strokes: 16,
    grade: 4,
    freq: 127,
    meanings: [
      'Loom',
      'Mechanism',
      'Machine',
      'Airplane',
      'Opportunity',
      'Potency',
      'Efficacy',
      'Occasion',
    ],
    on: ['き'],
    kun: ['はた'],
    jlpt: 3,
    quizAnswers: ['Loom', 'Question Mark', 'Accusation', 'Prepare'],
    similars: [
      {
        kanji: '幾',
        meaning: 'how many',
      },
      {
        kanji: '械',
        meaning: 'contraption',
      },
      {
        kanji: '慈',
        meaning: 'mercy',
      },
      {
        kanji: '桟',
        meaning: 'scaffold',
      },
      {
        kanji: '桜',
        meaning: 'cherry',
      },
      {
        kanji: '様',
        meaning: 'Esq.',
      },
      {
        kanji: '校',
        meaning: 'exam',
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls',
      },
      {
        kanji: '標',
        meaning: 'signpost',
      },
      {
        kanji: '概',
        meaning: 'outline',
      },
    ],
    usedIn: [
      {
        kanji: '機',
        reading: 'はた',
        meanings: 'loom',
      },
      {
        kanji: '機織り',
        reading: 'はたおり',
        meanings: 'weaving',
      },
      {
        kanji: '高機',
        reading: 'たかばた',
        meanings: 'traditional Japanese treadle-operated tall loom',
      },
      {
        kanji: '機',
        reading: 'き',
        meanings: 'chance',
      },
      {
        kanji: '機運',
        reading: 'きうん',
        meanings: 'opportunity',
      },
      {
        kanji: '端末機',
        reading: 'たんまつき',
        meanings: 'terminal (unit)',
      },
      {
        kanji: '有機',
        reading: 'ゆうき',
        meanings: 'organic',
      },
    ],
  },
  {
    kanjiName: '飛',
    strokes: 9,
    grade: 4,
    freq: 580,
    meanings: ['Fly', 'Skip (pages)', 'Scatter'],
    on: ['ひ'],
    kun: ['と.ぶ', 'と.ばす', '-と.ばす'],
    jlpt: 3,
    quizAnswers: ['Wicked', 'Fly', 'Flip', 'Carry Through'],
    similars: [
      {
        kanji: '称',
        meaning: 'appellation',
      },
      {
        kanji: '移',
        meaning: 'shift',
      },
      {
        kanji: '終',
        meaning: 'end',
      },
      {
        kanji: '猟',
        meaning: 'game-hunting',
      },
      {
        kanji: '糸',
        meaning: 'thread',
      },
      {
        kanji: '灰',
        meaning: 'ashes',
      },
      {
        kanji: '約',
        meaning: 'promise',
      },
      {
        kanji: '牧',
        meaning: 'breed',
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)',
      },
      {
        kanji: '劣',
        meaning: 'inferiority',
      },
    ],
    usedIn: [
      {
        kanji: '飛ぶ',
        reading: 'とぶ',
        meanings: 'to fly',
      },
      {
        kanji: '飛ぶ鳥',
        reading: 'とぶとり',
        meanings: 'flying bird',
      },
      {
        kanji: '飛ばす',
        reading: 'とばす',
        meanings: 'to let fly',
      },
      {
        kanji: '飛',
        reading: 'ひ',
        meanings: 'rook',
      },
      {
        kanji: '飛球',
        reading: 'ひきゅう',
        meanings: 'fly (ball)',
      },
      {
        kanji: '犠飛',
        reading: 'ぎひ',
        meanings: 'sacrifice fly',
      },
      {
        kanji: '中飛',
        reading: 'ちゅうひ',
        meanings: 'center fly',
      },
    ],
  },
  {
    kanjiName: '害',
    strokes: 10,
    grade: 4,
    freq: 358,
    meanings: ['Harm', 'Injury'],
    on: ['がい'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Coarse', 'Harm', 'Tear', 'Cultivate'],
    similars: [
      {
        kanji: '割',
        meaning: 'proportion',
      },
      {
        kanji: '寄',
        meaning: 'draw near',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '言',
        meaning: 'say',
      },
      {
        kanji: '悟',
        meaning: 'enlightenment',
      },
      {
        kanji: '告',
        meaning: 'revelation',
      },
      {
        kanji: '宮',
        meaning: 'Shinto shrine',
      },
      {
        kanji: '信',
        meaning: 'faith',
      },
      {
        kanji: '案',
        meaning: 'plan',
      },
      {
        kanji: '実',
        meaning: 'reality',
      },
    ],
    usedIn: [
      {
        kanji: '害',
        reading: 'がい',
        meanings: 'injury',
      },
      {
        kanji: '害虫',
        reading: 'がいちゅう',
        meanings: 'harmful insect',
      },
      {
        kanji: '薬害',
        reading: 'やくがい',
        meanings: 'harmful side effects of a medicine or drug',
      },
      {
        kanji: '傷害',
        reading: 'しょうがい',
        meanings: 'injury',
      },
    ],
  },
  {
    kanjiName: '余',
    strokes: 7,
    grade: 5,
    freq: 680,
    meanings: ['Too Much', 'Myself', 'Surplus', 'Other', 'Remainder'],
    on: ['よ'],
    kun: ['あま.る', 'あま.り', 'あま.す', 'あんま.り'],
    jlpt: 3,
    quizAnswers: ['Ride At Anchor', 'Too Much', 'Worship', 'Glow'],
    similars: [
      {
        kanji: '会',
        meaning: 'meeting',
      },
      {
        kanji: '示',
        meaning: 'show',
      },
      {
        kanji: '徐',
        meaning: 'gradually',
      },
      {
        kanji: '除',
        meaning: 'exclude',
      },
      {
        kanji: '途',
        meaning: 'route',
      },
      {
        kanji: '叙',
        meaning: 'confer',
      },
      {
        kanji: '斎',
        meaning: 'purification',
      },
      {
        kanji: '金',
        meaning: 'gold',
      },
      {
        kanji: '伝',
        meaning: 'transmit',
      },
      {
        kanji: '伐',
        meaning: 'fell',
      },
    ],
    usedIn: [
      {
        kanji: '余る',
        reading: 'あまる',
        meanings: 'to remain',
      },
      {
        kanji: '余り',
        reading: 'あまり',
        meanings: 'remainder',
      },
      {
        kanji: '余りに',
        reading: 'あまりに',
        meanings: 'too (much)',
      },
      {
        kanji: '余す',
        reading: 'あます',
        meanings: 'to save',
      },
      {
        kanji: '余すところなく',
        reading: 'あますところなく',
        meanings: 'fully',
      },
      {
        kanji: '余り',
        reading: 'あまり',
        meanings: 'remainder',
      },
      {
        kanji: '余りに',
        reading: 'あまりに',
        meanings: 'too (much)',
      },
      {
        kanji: '余',
        reading: 'よ',
        meanings: 'other',
      },
      {
        kanji: '余韻',
        reading: 'よいん',
        meanings: 'reverberation',
      },
      {
        kanji: '残余',
        reading: 'ざんよ',
        meanings: 'remainder',
      },
      {
        kanji: '窮余',
        reading: 'きゅうよ',
        meanings: 'extremity',
      },
    ],
  },
  {
    kanjiName: '難',
    strokes: 18,
    grade: 6,
    freq: 330,
    meanings: ['Difficult', 'Impossible', 'Trouble', 'Accident', 'Defect'],
    on: ['なん'],
    kun: [
      'かた.い',
      '-がた.い',
      'むずか.しい',
      'むづか.しい',
      'むつか.しい',
      '-にく.い',
    ],
    jlpt: 3,
    quizAnswers: ['Leave', 'Nothing', 'Difficult', 'Peace'],
    similars: [
      {
        kanji: '確',
        meaning: 'assurance',
      },
      {
        kanji: '雅',
        meaning: 'gracious',
      },
      {
        kanji: '唯',
        meaning: 'solely',
      },
      {
        kanji: '稚',
        meaning: 'immature',
      },
      {
        kanji: '権',
        meaning: 'authority',
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous',
      },
      {
        kanji: '雇',
        meaning: 'employ',
      },
      {
        kanji: '雌',
        meaning: 'feminine',
      },
      {
        kanji: '護',
        meaning: 'safeguard',
      },
      {
        kanji: '羅',
        meaning: 'gauze',
      },
    ],
    usedIn: [
      {
        kanji: '難い',
        reading: 'かたい',
        meanings: 'difficult',
      },
      {
        kanji: '難しい',
        reading: 'むずかしい',
        meanings: 'difficult',
      },
      {
        kanji: '難しい顔をする',
        reading: 'むずかしいかおをする',
        meanings: 'to look displeased',
      },
      {
        kanji: '難しい',
        reading: 'むずかしい',
        meanings: 'difficult',
      },
      {
        kanji: '難',
        reading: 'なん',
        meanings: 'difficulty',
      },
      {
        kanji: '難解',
        reading: 'なんかい',
        meanings: 'difficult to understand',
      },
      {
        kanji: '至難',
        reading: 'しなん',
        meanings: 'most difficult',
      },
      {
        kanji: '海難',
        reading: 'かいなん',
        meanings: 'accident at sea',
      },
    ],
  },
  {
    kanjiName: '確',
    strokes: 15,
    grade: 5,
    freq: 252,
    meanings: [
      'Assurance',
      'Firm',
      'Tight',
      'Hard',
      'Solid',
      'Confirm',
      'Clear',
      'Evident',
    ],
    on: ['かく', 'こう'],
    kun: ['たし.か', 'たし.かめる'],
    jlpt: 3,
    quizAnswers: ['Stratum', 'Deceive', 'Question Mark', 'Assurance'],
    similars: [
      {
        kanji: '唯',
        meaning: 'solely',
      },
      {
        kanji: '雄',
        meaning: 'masculine',
      },
      {
        kanji: '雇',
        meaning: 'employ',
      },
      {
        kanji: '催',
        meaning: 'sponsor',
      },
      {
        kanji: '難',
        meaning: 'difficult',
      },
      {
        kanji: '礁',
        meaning: 'reef',
      },
      {
        kanji: '離',
        meaning: 'detach',
      },
      {
        kanji: '護',
        meaning: 'safeguard',
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous',
      },
      {
        kanji: '稚',
        meaning: 'immature',
      },
    ],
    usedIn: [
      {
        kanji: '確か',
        reading: 'たしか',
        meanings: 'sure',
      },
      {
        kanji: '確かめる',
        reading: 'たしかめる',
        meanings: 'to make sure',
      },
      {
        kanji: '確かめる',
        reading: 'たしかめる',
        meanings: 'to make sure',
      },
      {
        kanji: '確',
        reading: 'かく',
        meanings: 'certain',
      },
      {
        kanji: '確執',
        reading: 'かくしつ',
        meanings: 'discord',
      },
      {
        kanji: '当確',
        reading: 'とうかく',
        meanings: 'projected to win',
      },
      {
        kanji: '精確',
        reading: 'せいかく',
        meanings: 'detailed and accurate',
      },
    ],
  },
  {
    kanjiName: '在',
    strokes: 6,
    grade: 5,
    freq: 211,
    meanings: ['Exist', 'Outskirts', 'Suburbs', 'Located In'],
    on: ['ざい'],
    kun: ['あ.る'],
    jlpt: 3,
    quizAnswers: ['Read', 'Dawn', 'Sudden', 'Exist'],
    similars: [
      {
        kanji: '圧',
        meaning: 'pressure',
      },
      {
        kanji: '左',
        meaning: 'left',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
      {
        kanji: '存',
        meaning: 'exist',
      },
      {
        kanji: '至',
        meaning: 'climax',
      },
      {
        kanji: '任',
        meaning: 'responsibility',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '径',
        meaning: 'diameter',
      },
      {
        kanji: '征',
        meaning: 'subjugate',
      },
      {
        kanji: '往',
        meaning: 'journey',
      },
    ],
    usedIn: [
      {
        kanji: '有る',
        reading: 'ある',
        meanings: 'to be',
      },
      {
        kanji: '在るがまま',
        reading: 'あるがまま',
        meanings: 'as it is',
      },
      {
        kanji: '在',
        reading: 'ざい',
        meanings: 'the country',
      },
      {
        kanji: '在外',
        reading: 'ざいがい',
        meanings: 'overseas',
      },
      {
        kanji: '顕在',
        reading: 'けんざい',
        meanings: 'being actual (as opposed to hidden or latent)',
      },
      {
        kanji: '介在',
        reading: 'かいざい',
        meanings: 'existing (between)',
      },
    ],
  },
  {
    kanjiName: '夢',
    strokes: 13,
    grade: 5,
    freq: 943,
    meanings: ['Dream', 'Vision', 'Illusion'],
    on: ['む', 'ぼう'],
    kun: ['ゆめ', 'ゆめ.みる', 'くら.い'],
    jlpt: 3,
    quizAnswers: ['Bar-tending', 'Carry', 'Pea', 'Dream'],
    similars: [
      {
        kanji: '黄',
        meaning: 'yellow',
      },
      {
        kanji: '壊',
        meaning: 'demolition',
      },
      {
        kanji: '票',
        meaning: 'ballot',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '畝',
        meaning: 'furrow',
      },
      {
        kanji: '菓',
        meaning: 'candy',
      },
      {
        kanji: '苗',
        meaning: 'seedling',
      },
      {
        kanji: '聴',
        meaning: 'listen',
      },
      {
        kanji: '憲',
        meaning: 'constitution',
      },
      {
        kanji: '徳',
        meaning: 'benevolence',
      },
    ],
    usedIn: [
      {
        kanji: '夢',
        reading: 'ゆめ',
        meanings: 'dream',
      },
      {
        kanji: '夢にも',
        reading: 'ゆめにも',
        meanings: '(not) in the slightest',
      },
      {
        kanji: '初夢',
        reading: 'はつゆめ',
        meanings:
          "first dream of the New year (believed to foretell one's luck)",
      },
      {
        kanji: '逆夢',
        reading: 'さかゆめ',
        meanings: 'a dream which is contradicted by reality',
      },
      {
        kanji: '夢見る',
        reading: 'ゆめみる',
        meanings: 'to dream (of)',
      },
      {
        kanji: '夢中',
        reading: 'むちゅう',
        meanings: 'absorbed in',
      },
      {
        kanji: '夢想',
        reading: 'むそう',
        meanings: 'dream',
      },
      {
        kanji: '同床異夢',
        reading: 'どうしょういむ',
        meanings: 'cohabiting but living in different worlds',
      },
      {
        kanji: '怪夢',
        reading: 'かいむ',
        meanings: 'strange dream',
      },
    ],
  },
  {
    kanjiName: '産',
    strokes: 11,
    grade: 4,
    freq: 161,
    meanings: [
      'Products',
      'Bear',
      'Give Birth',
      'Yield',
      'Childbirth',
      'Native',
      'Property',
    ],
    on: ['さん'],
    kun: ['う.む', 'う.まれる', 'うぶ-', 'む.す'],
    jlpt: 3,
    quizAnswers: ['Repay', 'Products', 'Prince', 'Steep'],
    similars: [
      {
        kanji: '童',
        meaning: 'juvenile',
      },
      {
        kanji: '座',
        meaning: 'squat',
      },
      {
        kanji: '望',
        meaning: 'ambition',
      },
      {
        kanji: '栓',
        meaning: 'plug',
      },
      {
        kanji: '底',
        meaning: 'bottom',
      },
      {
        kanji: '章',
        meaning: 'badge',
      },
      {
        kanji: '姓',
        meaning: 'surname',
      },
      {
        kanji: '性',
        meaning: 'sex',
      },
      {
        kanji: '柱',
        meaning: 'pillar',
      },
      {
        kanji: '辛',
        meaning: 'spicy',
      },
    ],
    usedIn: [
      {
        kanji: '生む',
        reading: 'うむ',
        meanings: 'to give birth',
      },
      {
        kanji: '生まれる',
        reading: 'うまれる',
        meanings: 'to be born',
      },
      {
        kanji: '生す',
        reading: 'むす',
        meanings: 'to grow (of moss',
      },
      {
        kanji: '産霊',
        reading: 'むすひ',
        meanings: 'divine spirit of creation',
      },
      {
        kanji: '産',
        reading: 'さん',
        meanings: '(giving) birth',
      },
      {
        kanji: '産科',
        reading: 'さんか',
        meanings: 'obstetrics',
      },
      {
        kanji: '増産',
        reading: 'ぞうさん',
        meanings: 'production increase',
      },
      {
        kanji: '水産',
        reading: 'すいさん',
        meanings: 'aquatic products',
      },
    ],
  },
  {
    kanjiName: '倒',
    strokes: 10,
    grade: 8,
    freq: 791,
    meanings: ['Overthrow', 'Fall', 'Collapse', 'Drop', 'Break Down'],
    on: ['とう'],
    kun: ['たお.れる', '-だお.れ', 'たお.す', 'さかさま', 'さかさ', 'さかしま'],
    jlpt: 3,
    quizAnswers: ['Overwhelm', 'Affair', 'Gentle', 'Overthrow'],
    similars: [
      {
        kanji: '到',
        meaning: 'arrival',
      },
      {
        kanji: '街',
        meaning: 'boulevard',
      },
      {
        kanji: '佳',
        meaning: 'excellent',
      },
      {
        kanji: '岳',
        meaning: 'point',
      },
      {
        kanji: '例',
        meaning: 'example',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
      {
        kanji: '佐',
        meaning: 'assistant',
      },
      {
        kanji: '年',
        meaning: 'year',
      },
      {
        kanji: '至',
        meaning: 'climax',
      },
      {
        kanji: '缶',
        meaning: 'tin can',
      },
    ],
    usedIn: [
      {
        kanji: '倒れる',
        reading: 'たおれる',
        meanings: 'to fall (over',
      },
      {
        kanji: '倒す',
        reading: 'たおす',
        meanings: 'to throw down',
      },
      {
        kanji: '逆さま',
        reading: 'さかさま',
        meanings: 'inverted',
      },
      {
        kanji: '逆様事',
        reading: 'さかさまごと',
        meanings: 'child dying before parents',
      },
      {
        kanji: '逆さま',
        reading: 'さかさま',
        meanings: 'inverted',
      },
      {
        kanji: '逆さ',
        reading: 'さかさ',
        meanings: 'inverted',
      },
      {
        kanji: '逆しま',
        reading: 'さかしま',
        meanings: 'reverse',
      },
      {
        kanji: '倒産',
        reading: 'とうさん',
        meanings: '(corporate) bankruptcy',
      },
      {
        kanji: '倒閣',
        reading: 'とうかく',
        meanings: 'overthrow of government',
      },
      {
        kanji: '傾倒',
        reading: 'けいとう',
        meanings: 'devoting oneself to',
      },
      {
        kanji: '風倒',
        reading: 'ふうとう',
        meanings: 'falling due to a strong wind',
      },
    ],
  },
  {
    kanjiName: '妻',
    strokes: 8,
    grade: 5,
    freq: 691,
    meanings: ['Wife', 'Spouse'],
    on: ['さい'],
    kun: ['つま'],
    jlpt: 3,
    quizAnswers: ['Listen', 'Wife', 'Govt Office', 'Texture'],
    similars: [
      {
        kanji: '金',
        meaning: 'gold',
      },
      {
        kanji: '琴',
        meaning: 'harp',
      },
      {
        kanji: '妄',
        meaning: 'delusion',
      },
      {
        kanji: '毒',
        meaning: 'poison',
      },
      {
        kanji: '針',
        meaning: 'needle',
      },
      {
        kanji: '華',
        meaning: 'splendor',
      },
      {
        kanji: '並',
        meaning: 'row',
      },
      {
        kanji: '走',
        meaning: 'run',
      },
      {
        kanji: '唐',
        meaning: "T'ang",
      },
      {
        kanji: '圧',
        meaning: 'pressure',
      },
    ],
    usedIn: [
      {
        kanji: '妻',
        reading: 'つま',
        meanings: 'wife',
      },
      {
        kanji: '妻',
        reading: 'つま',
        meanings: 'my dear',
      },
      {
        kanji: '駐妻',
        reading: 'ちゅうつま',
        meanings: 'expat wife',
      },
      {
        kanji: '我が妻',
        reading: 'わがつま',
        meanings: "my spouse (esp. used to refer to one's wife)",
      },
      {
        kanji: '妻',
        reading: 'さい',
        meanings: "one's wife",
      },
      {
        kanji: '妻子',
        reading: 'さいし',
        meanings: 'wife and children',
      },
      {
        kanji: '先妻',
        reading: 'せんさい',
        meanings: 'former wife',
      },
      {
        kanji: '後妻',
        reading: 'ごさい',
        meanings: 'second wife',
      },
    ],
  },
  {
    kanjiName: '議',
    strokes: 20,
    grade: 4,
    freq: 25,
    meanings: ['Deliberation', 'Consultation', 'Debate', 'Consideration'],
    on: ['ぎ'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Bed', 'Unite', 'Humbly', 'Deliberation'],
    similars: [
      {
        kanji: '犠',
        meaning: 'sacrifice',
      },
      {
        kanji: '儀',
        meaning: 'ceremony',
      },
      {
        kanji: '謙',
        meaning: 'self-effacing',
      },
      {
        kanji: '詩',
        meaning: 'poem',
      },
      {
        kanji: '譜',
        meaning: 'musical score',
      },
      {
        kanji: '義',
        meaning: 'righteousness',
      },
      {
        kanji: '識',
        meaning: 'discriminating',
      },
      {
        kanji: '誠',
        meaning: 'sincerity',
      },
      {
        kanji: '詳',
        meaning: 'detailed',
      },
      {
        kanji: '請',
        meaning: 'solicit',
      },
    ],
    usedIn: [
      {
        kanji: '議',
        reading: 'ぎ',
        meanings: 'discussion',
      },
      {
        kanji: '議案',
        reading: 'ぎあん',
        meanings: 'legislative bill',
      },
      {
        kanji: '本会議',
        reading: 'ほんかいぎ',
        meanings: 'plenary session',
      },
      {
        kanji: '日本学術会議',
        reading: 'にほんがくじゅつかいぎ',
        meanings: 'Science Council of Japan',
      },
    ],
  },
  {
    kanjiName: '犯',
    strokes: 5,
    grade: 5,
    freq: 874,
    meanings: ['Crime', 'Sin', 'Offense'],
    on: ['はん', 'ぼん'],
    kun: ['おか.す'],
    jlpt: 3,
    quizAnswers: ['Crime', 'Particularly', 'In Front', 'Meter'],
    similars: [
      {
        kanji: '危',
        meaning: 'dangerous',
      },
      {
        kanji: '厄',
        meaning: 'unlucky',
      },
      {
        kanji: '仰',
        meaning: 'face-up',
      },
      {
        kanji: '劣',
        meaning: 'inferiority',
      },
      {
        kanji: '励',
        meaning: 'encourage',
      },
      {
        kanji: '卵',
        meaning: 'egg',
      },
      {
        kanji: '狂',
        meaning: 'lunatic',
      },
      {
        kanji: '分',
        meaning: 'part',
      },
      {
        kanji: '勺',
        meaning: 'ladle',
      },
      {
        kanji: '匁',
        meaning: 'monme',
      },
    ],
    usedIn: [
      {
        kanji: '犯す',
        reading: 'おかす',
        meanings: 'to commit (e.g. crime)',
      },
      {
        kanji: '犯',
        reading: 'はん',
        meanings: 'perpetrators of (some) crime',
      },
      {
        kanji: '犯行',
        reading: 'はんこう',
        meanings: 'crime',
      },
      {
        kanji: '共犯',
        reading: 'きょうはん',
        meanings: 'complicity',
      },
      {
        kanji: '防犯',
        reading: 'ぼうはん',
        meanings: 'prevention of crime',
      },
      {
        kanji: '違犯',
        reading: 'いはん',
        meanings: 'offense (against the law)',
      },
      {
        kanji: '重犯',
        reading: 'じゅうはん',
        meanings: 'felony',
      },
    ],
  },
  {
    kanjiName: '罪',
    strokes: 13,
    grade: 5,
    freq: 732,
    meanings: ['Guilt', 'Sin', 'Crime', 'Fault', 'Blame', 'Offense'],
    on: ['ざい'],
    kun: ['つみ'],
    jlpt: 3,
    quizAnswers: ['Mountain', 'Warmth', 'Squad', 'Guilt'],
    similars: [
      {
        kanji: '非',
        meaning: 'un-',
      },
      {
        kanji: '扉',
        meaning: 'front door',
      },
      {
        kanji: '排',
        meaning: 'repudiate',
      },
      {
        kanji: '俳',
        meaning: 'haiku',
      },
      {
        kanji: '略',
        meaning: 'abbreviation',
      },
      {
        kanji: '昨',
        meaning: 'yesterday',
      },
      {
        kanji: '罰',
        meaning: 'penalty',
      },
      {
        kanji: '羅',
        meaning: 'gauze',
      },
      {
        kanji: '界',
        meaning: 'world',
      },
      {
        kanji: '距',
        meaning: 'long-distance',
      },
    ],
    usedIn: [
      {
        kanji: '罪',
        reading: 'つみ',
        meanings: 'crime',
      },
      {
        kanji: '罪滅ぼし',
        reading: 'つみほろぼし',
        meanings: "atonement (for one's sins)",
      },
      {
        kanji: '無実の罪',
        reading: 'むじつのつみ',
        meanings: 'false charge',
      },
      {
        kanji: '重い罪',
        reading: 'おもいつみ',
        meanings: 'serious crime',
      },
      {
        kanji: '罪',
        reading: 'ざい',
        meanings: 'crime',
      },
      {
        kanji: '罪悪',
        reading: 'ざいあく',
        meanings: 'crime',
      },
      {
        kanji: '同罪',
        reading: 'どうざい',
        meanings: 'same crime',
      },
      {
        kanji: '功罪',
        reading: 'こうざい',
        meanings: 'merits and demerits',
      },
    ],
  },
  {
    kanjiName: '論',
    strokes: 15,
    grade: 6,
    freq: 227,
    meanings: ['Argument', 'Discourse'],
    on: ['ろん'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Multitude', 'Argument', 'Confront', 'Occur'],
    similars: [
      {
        kanji: '諭',
        meaning: 'rebuke',
      },
      {
        kanji: '訴',
        meaning: 'accusation',
      },
      {
        kanji: '訓',
        meaning: 'instruction',
      },
      {
        kanji: '誘',
        meaning: 'entice',
      },
      {
        kanji: '詐',
        meaning: 'lie',
      },
      {
        kanji: '許',
        meaning: 'permit',
      },
      {
        kanji: '諸',
        meaning: 'various',
      },
      {
        kanji: '託',
        meaning: 'consign',
      },
      {
        kanji: '誠',
        meaning: 'sincerity',
      },
      {
        kanji: '請',
        meaning: 'solicit',
      },
    ],
    usedIn: [
      {
        kanji: '論う',
        reading: 'あげつらう',
        meanings: 'to discuss',
      },
      {
        kanji: '論',
        reading: 'ろん',
        meanings: 'argument',
      },
      {
        kanji: '論客',
        reading: 'ろんきゃく',
        meanings: 'controversialist',
      },
      {
        kanji: '公論',
        reading: 'こうろん',
        meanings: 'public opinion',
      },
      {
        kanji: '対論',
        reading: 'たいろん',
        meanings: 'arguing face to face',
      },
    ],
  },
  {
    kanjiName: '経',
    strokes: 11,
    grade: 5,
    freq: 79,
    meanings: ['Sutra', 'Longitude', 'Pass Thru', 'Expire', 'Warp'],
    on: ['けい', 'きょう', 'きん'],
    kun: ['へ.る', 'た.つ', 'たていと', 'はか.る', 'のり'],
    jlpt: 3,
    quizAnswers: ['Fidelity', 'Sutra', 'Grip', 'False'],
    similars: [
      {
        kanji: '紅',
        meaning: 'crimson',
      },
      {
        kanji: '絵',
        meaning: 'picture',
      },
      {
        kanji: '絡',
        meaning: 'entwine',
      },
      {
        kanji: '給',
        meaning: 'salary',
      },
      {
        kanji: '網',
        meaning: 'netting',
      },
      {
        kanji: '紙',
        meaning: 'paper',
      },
      {
        kanji: '糾',
        meaning: 'twist',
      },
      {
        kanji: '終',
        meaning: 'end',
      },
      {
        kanji: '紡',
        meaning: 'spinning',
      },
      {
        kanji: '組',
        meaning: 'association',
      },
    ],
    usedIn: [
      {
        kanji: '経る',
        reading: 'へる',
        meanings: 'to pass',
      },
      {
        kanji: '経つ',
        reading: 'たつ',
        meanings: 'to pass (of time)',
      },
      {
        kanji: '縦糸',
        reading: 'たていと',
        meanings: '(weaving) warp',
      },
      {
        kanji: '経',
        reading: 'けい',
        meanings: 'warp (weaving)',
      },
      {
        kanji: '経団連',
        reading: 'けいだんれん',
        meanings: 'Federation of Economic Organizations (Organisation)',
      },
      {
        kanji: '月経',
        reading: 'げっけい',
        meanings: 'menstruation',
      },
      {
        kanji: '政経',
        reading: 'せいけい',
        meanings: 'politics and economics',
      },
      {
        kanji: '経',
        reading: 'きょう',
        meanings: 'sutra',
      },
      {
        kanji: '経典',
        reading: 'きょうてん',
        meanings: 'sacred books',
      },
      {
        kanji: '説経',
        reading: 'せっきょう',
        meanings: 'lecture on the sutras',
      },
      {
        kanji: '法華経',
        reading: 'ほけきょう',
        meanings: 'Lotus Sutra',
      },
      {
        kanji: '経行',
        reading: 'きんひん',
        meanings: 'meditation performed while walking',
      },
      {
        kanji: '看経',
        reading: 'かんきん',
        meanings: 'silent reading of the sutras',
      },
    ],
  },
  {
    kanjiName: '済',
    strokes: 11,
    grade: 6,
    freq: 168,
    meanings: [
      'Settle (debt, Etc.)',
      'Relieve (burden)',
      'Finish',
      'Come To An End',
      'Excusable',
      'Need Not',
    ],
    on: ['さい', 'せい'],
    kun: [
      'す.む',
      '-ず.み',
      '-ずみ',
      'す.まない',
      'す.ます',
      '-す.ます',
      'すく.う',
      'な.す',
      'わたし',
      'わた.る',
    ],
    jlpt: 3,
    quizAnswers: ['Amusement', 'Correct', 'Settle (debt, Etc.)', 'Bend Down'],
    similars: [
      {
        kanji: '斉',
        meaning: 'adjusted',
      },
      {
        kanji: '液',
        meaning: 'fluid',
      },
      {
        kanji: '消',
        meaning: 'extinguish',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '湾',
        meaning: 'gulf',
      },
      {
        kanji: '決',
        meaning: 'decide',
      },
      {
        kanji: '挙',
        meaning: 'raise',
      },
      {
        kanji: '流',
        meaning: 'current',
      },
      {
        kanji: '酒',
        meaning: 'sake',
      },
      {
        kanji: '泊',
        meaning: 'overnight stay',
      },
    ],
    usedIn: [
      {
        kanji: '済む',
        reading: 'すむ',
        meanings: 'to finish',
      },
      {
        kanji: '済まない',
        reading: 'すまない',
        meanings: 'inexcusable',
      },
      {
        kanji: '済ます',
        reading: 'すます',
        meanings: 'to finish',
      },
      {
        kanji: '済州',
        reading: 'ちぇじゅ',
        meanings:
          'Jeju (special self-governing province and island in South Korea)',
      },
      {
        kanji: '済州大学',
        reading: 'さいしゅうだいがく',
        meanings: 'Cheju National University',
      },
      {
        kanji: '決済',
        reading: 'けっさい',
        meanings: 'settlement (of an account)',
      },
      {
        kanji: '弁済',
        reading: 'べんさい',
        meanings: 'repayment',
      },
      {
        kanji: '済世',
        reading: 'さいせい',
        meanings: 'saving the world',
      },
      {
        kanji: '済美',
        reading: 'せいび',
        meanings: 'achieving virtue',
      },
    ],
  },
  {
    kanjiName: '判',
    strokes: 7,
    grade: 5,
    freq: 197,
    meanings: ['Judgement', 'Signature', 'Stamp', 'Seal'],
    on: ['はん', 'ばん'],
    kun: ['わか.る'],
    jlpt: 3,
    quizAnswers: ['Judgement', 'Interview', 'Permanence', 'Anger'],
    similars: [
      {
        kanji: '刊',
        meaning: 'publish',
      },
      {
        kanji: '羊',
        meaning: 'sheep',
      },
      {
        kanji: '半',
        meaning: 'half',
      },
      {
        kanji: '制',
        meaning: 'system',
      },
      {
        kanji: '剛',
        meaning: 'sturdy',
      },
      {
        kanji: '兼',
        meaning: 'concurrently',
      },
      {
        kanji: '朱',
        meaning: 'vermilion',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '言',
        meaning: 'say',
      },
      {
        kanji: '刑',
        meaning: 'punish',
      },
    ],
    usedIn: [
      {
        kanji: '分かる',
        reading: 'わかる',
        meanings: 'to understand',
      },
      {
        kanji: '判',
        reading: 'はん',
        meanings: 'seal',
      },
      {
        kanji: '判決',
        reading: 'はんけつ',
        meanings: 'judicial decision',
      },
      {
        kanji: '自己批判',
        reading: 'じこひはん',
        meanings: 'self-criticism',
      },
      {
        kanji: '誤判',
        reading: 'ごはん',
        meanings: 'misjudgement',
      },
      {
        kanji: '判',
        reading: 'はん',
        meanings: 'seal',
      },
      {
        kanji: '司法裁判',
        reading: 'しほうさいばん',
        meanings: 'judicial trial',
      },
      {
        kanji: '大判',
        reading: 'おおばん',
        meanings: 'large size (paper',
      },
    ],
  },
  {
    kanjiName: '制',
    strokes: 8,
    grade: 5,
    freq: 108,
    meanings: ['System', 'Law', 'Rule'],
    on: ['せい'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['System', 'Property', 'Rejoice', 'Set'],
    similars: [
      {
        kanji: '利',
        meaning: 'profit',
      },
      {
        kanji: '刊',
        meaning: 'publish',
      },
      {
        kanji: '判',
        meaning: 'judgement',
      },
      {
        kanji: '刷',
        meaning: 'printing',
      },
      {
        kanji: '布',
        meaning: 'linen',
      },
      {
        kanji: '刑',
        meaning: 'punish',
      },
      {
        kanji: '逓',
        meaning: 'relay',
      },
      {
        kanji: '製',
        meaning: 'made in...',
      },
      {
        kanji: '耐',
        meaning: '-proof',
      },
      {
        kanji: '剰',
        meaning: 'surplus',
      },
    ],
    usedIn: [
      {
        kanji: '制',
        reading: 'せい',
        meanings: 'system',
      },
      {
        kanji: '制圧',
        reading: 'せいあつ',
        meanings: 'gaining total control (of people or counties)',
      },
      {
        kanji: '天皇制',
        reading: 'てんのうせい',
        meanings: 'the Emperor System',
      },
      {
        kanji: '帝政',
        reading: 'ていせい',
        meanings: 'imperial government',
      },
    ],
  },
  {
    kanjiName: '務',
    strokes: 11,
    grade: 5,
    freq: 111,
    meanings: ['Task', 'Duties'],
    on: ['む'],
    kun: ['つと.める'],
    jlpt: 3,
    quizAnswers: ['Send', 'Assistant', 'Task', 'Prose'],
    similars: [
      {
        kanji: '券',
        meaning: 'ticket',
      },
      {
        kanji: '霧',
        meaning: 'fog',
      },
      {
        kanji: '柔',
        meaning: 'tender',
      },
      {
        kanji: '粉',
        meaning: 'flour',
      },
      {
        kanji: '勝',
        meaning: 'victory',
      },
      {
        kanji: '寡',
        meaning: 'widow',
      },
      {
        kanji: '弊',
        meaning: 'abuse',
      },
      {
        kanji: '放',
        meaning: 'set free',
      },
      {
        kanji: '矛',
        meaning: 'halberd',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
    ],
    usedIn: [
      {
        kanji: '勤める',
        reading: 'つとめる',
        meanings: 'to work (for)',
      },
      {
        kanji: '務歯',
        reading: 'むし',
        meanings: 'zipper teeth',
      },
      {
        kanji: '務所',
        reading: 'むしょ',
        meanings: 'prison',
      },
      {
        kanji: '政務',
        reading: 'せいむ',
        meanings: 'government affairs',
      },
      {
        kanji: '外務',
        reading: 'がいむ',
        meanings: 'foreign affairs',
      },
    ],
  },
  {
    kanjiName: '資',
    strokes: 13,
    grade: 5,
    freq: 179,
    meanings: [
      'Assets',
      'Resources',
      'Capital',
      'Funds',
      'Data',
      'Be Conducive To',
      'Contribute To',
    ],
    on: ['し'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Assets', 'Plane', 'In Advance', 'Thick'],
    similars: [
      {
        kanji: '貨',
        meaning: 'freight',
      },
      {
        kanji: '煩',
        meaning: 'anxiety',
      },
      {
        kanji: '賛',
        meaning: 'approve',
      },
      {
        kanji: '漬',
        meaning: 'pickling',
      },
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
      {
        kanji: '賃',
        meaning: 'fare',
      },
      {
        kanji: '頑',
        meaning: 'stubborn',
      },
      {
        kanji: '費',
        meaning: 'expense',
      },
      {
        kanji: '順',
        meaning: 'obey',
      },
      {
        kanji: '源',
        meaning: 'source',
      },
    ],
    usedIn: [
      {
        kanji: '資',
        reading: 'し',
        meanings: 'funds',
      },
      {
        kanji: '資格',
        reading: 'しかく',
        meanings: 'qualifications',
      },
      {
        kanji: '増資',
        reading: 'ぞうし',
        meanings: 'increase of capital',
      },
      {
        kanji: '外資',
        reading: 'がいし',
        meanings: 'foreign capital (e.g. in a company)',
      },
    ],
  },
  {
    kanjiName: '権',
    strokes: 15,
    grade: 6,
    freq: 156,
    meanings: ['Authority', 'Power', 'Rights'],
    on: ['けん', 'ごん'],
    kun: ['おもり', 'かり', 'はか.る'],
    jlpt: 3,
    quizAnswers: ['Pot', 'Authority', 'Snout', 'Manipulate'],
    similars: [
      {
        kanji: '稚',
        meaning: 'immature',
      },
      {
        kanji: '雅',
        meaning: 'gracious',
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous',
      },
      {
        kanji: '穫',
        meaning: 'harvest',
      },
      {
        kanji: '雇',
        meaning: 'employ',
      },
      {
        kanji: '雄',
        meaning: 'masculine',
      },
      {
        kanji: '難',
        meaning: 'difficult',
      },
      {
        kanji: '株',
        meaning: 'stocks',
      },
      {
        kanji: '催',
        meaning: 'sponsor',
      },
      {
        kanji: '維',
        meaning: 'fiber',
      },
    ],
    usedIn: [
      {
        kanji: '仮殿',
        reading: 'かりどの',
        meanings:
          'temporary shrine (houses the object in which the deity resides when main shrine is under repairs)',
      },
      {
        kanji: '権',
        reading: 'けん',
        meanings: 'right (to do something)',
      },
      {
        kanji: '権威',
        reading: 'けんい',
        meanings: 'authority',
      },
      {
        kanji: '抵当権',
        reading: 'ていとうけん',
        meanings: 'mortgage',
      },
      {
        kanji: '参政権',
        reading: 'さんせいけん',
        meanings: 'suffrage',
      },
      {
        kanji: '権化',
        reading: 'ごんげ',
        meanings: 'incarnation (of Buddha or bodhisattva)',
      },
      {
        kanji: '権宮司',
        reading: 'ごんぐうじ',
        meanings: 'associate chief priest',
      },
    ],
  },
  {
    kanjiName: '件',
    strokes: 6,
    grade: 5,
    freq: 212,
    meanings: ['Affair', 'Case', 'Matter', 'Item'],
    on: ['けん'],
    kun: ['くだん'],
    jlpt: 3,
    quizAnswers: ['Bank', 'Reap', 'State', 'Affair'],
    similars: [
      {
        kanji: '伴',
        meaning: 'consort',
      },
      {
        kanji: '併',
        meaning: 'join',
      },
      {
        kanji: '半',
        meaning: 'half',
      },
      {
        kanji: '仰',
        meaning: 'face-up',
      },
      {
        kanji: '斤',
        meaning: 'axe',
      },
      {
        kanji: '任',
        meaning: 'responsibility',
      },
      {
        kanji: '牛',
        meaning: 'cow',
      },
      {
        kanji: '仁',
        meaning: 'humanity',
      },
      {
        kanji: '午',
        meaning: 'noon',
      },
      {
        kanji: '升',
        meaning: 'measuring box',
      },
    ],
    usedIn: [
      {
        kanji: '件',
        reading: 'くだん',
        meanings: 'the aforementioned',
      },
      {
        kanji: '件',
        reading: 'けん',
        meanings: 'matter',
      },
      {
        kanji: '件数',
        reading: 'けんすう',
        meanings: 'number of events (e.g. accidents',
      },
      {
        kanji: '刑事事件',
        reading: 'けいじじけん',
        meanings: 'criminal case',
      },
      {
        kanji: '要件',
        reading: 'ようけん',
        meanings: 'important matter',
      },
    ],
  },
  {
    kanjiName: '断',
    strokes: 11,
    grade: 5,
    freq: 338,
    meanings: [
      'Severance',
      'Decline',
      'Refuse',
      'Apologize',
      'Warn',
      'Dismiss',
      'Prohibit',
      'Decision',
      'Judgement',
      'Cutting',
    ],
    on: ['だん'],
    kun: ['た.つ', 'ことわ.る', 'さだ.める'],
    jlpt: 3,
    quizAnswers: ['Delight', 'Rank With', 'Severance', 'Journey'],
    similars: [
      {
        kanji: '粋',
        meaning: 'chic',
      },
      {
        kanji: '料',
        meaning: 'fee',
      },
      {
        kanji: '析',
        meaning: 'chop',
      },
      {
        kanji: '数',
        meaning: 'number',
      },
      {
        kanji: '新',
        meaning: 'new',
      },
      {
        kanji: '粧',
        meaning: 'cosmetics',
      },
      {
        kanji: '粒',
        meaning: 'grains',
      },
      {
        kanji: '秋',
        meaning: 'autumn',
      },
      {
        kanji: '粉',
        meaning: 'flour',
      },
      {
        kanji: '枠',
        meaning: 'frame',
      },
    ],
    usedIn: [
      {
        kanji: '断つ',
        reading: 'たつ',
        meanings: 'to sever',
      },
      {
        kanji: '断る',
        reading: 'ことわる',
        meanings: 'to refuse',
      },
      {
        kanji: '断るまでもなく',
        reading: 'ことわるまでもなく',
        meanings: 'needless to say',
      },
      {
        kanji: '断',
        reading: 'だん',
        meanings: 'decision',
      },
      {
        kanji: '断言',
        reading: 'だんげん',
        meanings: 'assertion',
      },
      {
        kanji: '独断',
        reading: 'どくだん',
        meanings: "one's own judgement (judgment)",
      },
      {
        kanji: '縦断',
        reading: 'じゅうだん',
        meanings: 'running through (north-south)',
      },
    ],
  },
  {
    kanjiName: '任',
    strokes: 6,
    grade: 5,
    freq: 217,
    meanings: ['Responsibility', 'Duty', 'Term', 'Entrust To', 'Appoint'],
    on: ['にん'],
    kun: ['まか.せる', 'まか.す'],
    jlpt: 3,
    quizAnswers: ['Responsibility', 'Salt Water', 'Vessel', 'Command'],
    similars: [
      {
        kanji: '佐',
        meaning: 'assistant',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
      {
        kanji: '侮',
        meaning: 'scorn',
      },
      {
        kanji: '狂',
        meaning: 'lunatic',
      },
      {
        kanji: '妊',
        meaning: 'pregnancy',
      },
      {
        kanji: '低',
        meaning: 'lower',
      },
      {
        kanji: '住',
        meaning: 'dwell',
      },
      {
        kanji: '件',
        meaning: 'affair',
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice',
      },
      {
        kanji: '左',
        meaning: 'left',
      },
    ],
    usedIn: [
      {
        kanji: '任せる',
        reading: 'まかせる',
        meanings: 'to leave (a matter',
      },
      {
        kanji: '任す',
        reading: 'まかす',
        meanings: 'to entrust (to someone)',
      },
      {
        kanji: '任',
        reading: 'にん',
        meanings: 'obligation',
      },
      {
        kanji: '任意',
        reading: 'にんい',
        meanings: 'optional',
      },
      {
        kanji: '再任',
        reading: 'さいにん',
        meanings: 'reappointment',
      },
      {
        kanji: '在任',
        reading: 'ざいにん',
        meanings: 'being in office',
      },
    ],
  },
  {
    kanjiName: '責',
    strokes: 11,
    grade: 5,
    freq: 598,
    meanings: ['Blame', 'Condemn', 'Censure'],
    on: ['せき'],
    kun: ['せ.める'],
    jlpt: 3,
    quizAnswers: ['Crude', 'Blame', 'Uselessness', 'Matrimony'],
    similars: [
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '項',
        meaning: 'paragraph',
      },
      {
        kanji: '黄',
        meaning: 'yellow',
      },
      {
        kanji: '現',
        meaning: 'present',
      },
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
      {
        kanji: '漬',
        meaning: 'pickling',
      },
      {
        kanji: '載',
        meaning: 'ride',
      },
      {
        kanji: '墳',
        meaning: 'tomb',
      },
      {
        kanji: '貞',
        meaning: 'upright',
      },
    ],
    usedIn: [
      {
        kanji: '責める',
        reading: 'せめる',
        meanings: 'to condemn',
      },
      {
        kanji: '責',
        reading: 'せき',
        meanings: 'responsibility',
      },
      {
        kanji: '責任',
        reading: 'せきにん',
        meanings: 'duty',
      },
      {
        kanji: '問責',
        reading: 'もんせき',
        meanings: 'blame',
      },
      {
        kanji: '引責',
        reading: 'いんせき',
        meanings: 'taking responsibility',
      },
    ],
  },
  {
    kanjiName: '増',
    strokes: 14,
    grade: 5,
    freq: 231,
    meanings: ['Increase', 'Add', 'Augment', 'Gain', 'Promote'],
    on: ['ぞう'],
    kun: ['ま.す', 'ま.し', 'ふ.える', 'ふ.やす'],
    jlpt: 3,
    quizAnswers: ['Prosperity', 'Increase', 'Complexity', 'Coloring'],
    similars: [
      {
        kanji: '憎',
        meaning: 'hate',
      },
      {
        kanji: '僧',
        meaning: 'Buddhist priest',
      },
      {
        kanji: '層',
        meaning: 'stratum',
      },
      {
        kanji: '槽',
        meaning: 'vat',
      },
      {
        kanji: '塊',
        meaning: 'clod',
      },
      {
        kanji: '曹',
        meaning: 'office',
      },
      {
        kanji: '壇',
        meaning: 'podium',
      },
      {
        kanji: '贈',
        meaning: 'presents',
      },
      {
        kanji: '面',
        meaning: 'mask',
      },
      {
        kanji: '唱',
        meaning: 'chant',
      },
    ],
    usedIn: [
      {
        kanji: '増す',
        reading: 'ます',
        meanings: 'to increase',
      },
      {
        kanji: '益々',
        reading: 'ますます',
        meanings: 'increasingly',
      },
      {
        kanji: '増し',
        reading: 'まし',
        meanings: 'better',
      },
      {
        kanji: '況して',
        reading: 'まして',
        meanings: 'still more',
      },
      {
        kanji: '増える',
        reading: 'ふえる',
        meanings: 'to increase',
      },
      {
        kanji: '増やす',
        reading: 'ふやす',
        meanings: 'to increase',
      },
      {
        kanji: '増',
        reading: 'ぞう',
        meanings: 'increase',
      },
      {
        kanji: '増員',
        reading: 'ぞういん',
        meanings: 'increasing the number of staff',
      },
      {
        kanji: '激増',
        reading: 'げきぞう',
        meanings: 'sharp increase',
      },
      {
        kanji: '累増',
        reading: 'るいぞう',
        meanings: 'successive or progressive increases',
      },
    ],
  },
  {
    kanjiName: '解',
    strokes: 13,
    grade: 5,
    freq: 176,
    meanings: [
      'Unravel',
      'Notes',
      'Key',
      'Explanation',
      'Understanding',
      'Untie',
      'Undo',
      'Solve',
      'Answer',
      'Cancel',
      'Absolve',
      'Explain',
      'Minute',
    ],
    on: ['かい', 'げ'],
    kun: [
      'と.く',
      'と.かす',
      'と.ける',
      'ほど.く',
      'ほど.ける',
      'わか.る',
      'さと.る',
    ],
    jlpt: 3,
    quizAnswers: ['Unravel', 'Storehouse', 'Stunt', 'Advance'],
    similars: [
      {
        kanji: '卑',
        meaning: 'lowly',
      },
      {
        kanji: '角',
        meaning: 'angle',
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge',
      },
      {
        kanji: '触',
        meaning: 'contact',
      },
      {
        kanji: '肝',
        meaning: 'liver',
      },
      {
        kanji: '鮮',
        meaning: 'fresh',
      },
      {
        kanji: '衡',
        meaning: 'equilibrium',
      },
      {
        kanji: '胸',
        meaning: 'bosom',
      },
      {
        kanji: '脈',
        meaning: 'vein',
      },
      {
        kanji: '胞',
        meaning: 'placenta',
      },
    ],
    usedIn: [
      {
        kanji: '解く',
        reading: 'とく',
        meanings: 'to untie',
      },
      {
        kanji: '溶かす',
        reading: 'とかす',
        meanings: 'to dissolve',
      },
      {
        kanji: '梳かす',
        reading: 'とかす',
        meanings: 'to comb out',
      },
      {
        kanji: '解ける',
        reading: 'とける',
        meanings: 'to be solved',
      },
      {
        kanji: '溶ける',
        reading: 'とける',
        meanings: 'to melt',
      },
      {
        kanji: '解く',
        reading: 'ほどく',
        meanings: 'to undo',
      },
      {
        kanji: '解す',
        reading: 'ほぐす',
        meanings: 'to unravel',
      },
      {
        kanji: '分かる',
        reading: 'わかる',
        meanings: 'to understand',
      },
      {
        kanji: '解',
        reading: 'かい',
        meanings: 'solution (of an equation',
      },
      {
        kanji: '解禁',
        reading: 'かいきん',
        meanings: 'lifting a ban',
      },
      {
        kanji: '瓦解',
        reading: 'がかい',
        meanings: 'collapse',
      },
      {
        kanji: '明解',
        reading: 'めいかい',
        meanings: 'clear explanation',
      },
      {
        kanji: '解熱',
        reading: 'げねつ',
        meanings: 'lowering a fever',
      },
      {
        kanji: '解脱',
        reading: 'げだつ',
        meanings: 'liberation from earthly desires and the woes of man',
      },
      {
        kanji: '雪消',
        reading: 'ゆきげ',
        meanings: 'snow melting',
      },
      {
        kanji: '義解',
        reading: 'ぎげ',
        meanings: 'explanation (of the meaning)',
      },
    ],
  },
  {
    kanjiName: '際',
    strokes: 14,
    grade: 5,
    freq: 183,
    meanings: [
      'Occasion',
      'Side',
      'Edge',
      'Verge',
      'Dangerous',
      'Adventurous',
      'Indecent',
      'Time',
      'When',
    ],
    on: ['さい'],
    kun: ['きわ', '-ぎわ'],
    jlpt: 3,
    quizAnswers: ['Occasion', 'Discard', 'Thirst', 'Fell'],
    similars: [
      {
        kanji: '察',
        meaning: 'guess',
      },
      {
        kanji: '祭',
        meaning: 'ritual',
      },
      {
        kanji: '擦',
        meaning: 'grate',
      },
      {
        kanji: '除',
        meaning: 'exclude',
      },
      {
        kanji: '禁',
        meaning: 'prohibition',
      },
      {
        kanji: '降',
        meaning: 'descend',
      },
      {
        kanji: '隆',
        meaning: 'hump',
      },
      {
        kanji: '襟',
        meaning: 'collar',
      },
      {
        kanji: '陰',
        meaning: 'shade',
      },
      {
        kanji: '徐',
        meaning: 'gradually',
      },
    ],
    usedIn: [
      {
        kanji: '際',
        reading: 'きわ',
        meanings: 'edge',
      },
      {
        kanji: '際立つ',
        reading: 'きわだつ',
        meanings: 'to be prominent',
      },
      {
        kanji: '今際の際',
        reading: 'いまわのきわ',
        meanings: 'verge of death',
      },
      {
        kanji: '際',
        reading: 'さい',
        meanings: 'occasion',
      },
      {
        kanji: '際会',
        reading: 'さいかい',
        meanings: 'meeting',
      },
      {
        kanji: '学際',
        reading: 'がくさい',
        meanings: 'interdisciplinary',
      },
      {
        kanji: '援助交際',
        reading: 'えんじょこうさい',
        meanings:
          'paid dating (esp. with an underage girl; oft. involving selling of sex)',
      },
    ],
  },
  {
    kanjiName: '認',
    strokes: 14,
    grade: 6,
    freq: 198,
    meanings: [
      'Acknowledge',
      'Witness',
      'Discern',
      'Recognize',
      'Appreciate',
      'Believe',
    ],
    on: ['にん'],
    kun: ['みと.める', 'したた.める'],
    jlpt: 3,
    quizAnswers: ['Sticky', 'Minority', 'Acknowledge', 'Sinew'],
    similars: [
      {
        kanji: '誌',
        meaning: 'document',
      },
      {
        kanji: '感',
        meaning: 'emotion',
      },
      {
        kanji: '憾',
        meaning: 'remorse',
      },
      {
        kanji: '訴',
        meaning: 'accusation',
      },
      {
        kanji: '訟',
        meaning: 'sue',
      },
      {
        kanji: '惑',
        meaning: 'beguile',
      },
      {
        kanji: '誠',
        meaning: 'sincerity',
      },
      {
        kanji: '詔',
        meaning: 'imperial edict',
      },
      {
        kanji: '談',
        meaning: 'discuss',
      },
      {
        kanji: '読',
        meaning: 'read',
      },
    ],
    usedIn: [
      {
        kanji: '認める',
        reading: 'みとめる',
        meanings: 'to recognize',
      },
      {
        kanji: '認める',
        reading: 'したためる',
        meanings: 'to write (e.g. a letter)',
      },
      {
        kanji: '認識',
        reading: 'にんしき',
        meanings: 'recognition',
      },
      {
        kanji: '認可',
        reading: 'にんか',
        meanings: 'approval',
      },
      {
        kanji: '公認',
        reading: 'こうにん',
        meanings: 'official recognition',
      },
      {
        kanji: '追認',
        reading: 'ついにん',
        meanings: 'ratification',
      },
    ],
  },
  {
    kanjiName: '過',
    strokes: 12,
    grade: 5,
    freq: 285,
    meanings: ['Overdo', 'Exceed', 'Go Beyond', 'Error'],
    on: ['か'],
    kun: [
      'す.ぎる',
      '-す.ぎる',
      '-す.ぎ',
      'す.ごす',
      'あやま.つ',
      'あやま.ち',
      'よ.ぎる',
    ],
    jlpt: 3,
    quizAnswers: ['Extremely', 'Yell', 'Translate', 'Overdo'],
    similars: [
      {
        kanji: '適',
        meaning: 'suitable',
      },
      {
        kanji: '遣',
        meaning: 'dispatch',
      },
      {
        kanji: '造',
        meaning: 'create',
      },
      {
        kanji: '尚',
        meaning: 'esteem',
      },
      {
        kanji: '遇',
        meaning: 'meet',
      },
      {
        kanji: '渦',
        meaning: 'whirlpool',
      },
      {
        kanji: '週',
        meaning: 'week',
      },
      {
        kanji: '追',
        meaning: 'chase',
      },
      {
        kanji: '逓',
        meaning: 'relay',
      },
      {
        kanji: '豊',
        meaning: 'bountiful',
      },
    ],
    usedIn: [
      {
        kanji: '過ぎる',
        reading: 'すぎる',
        meanings: 'to pass through',
      },
      {
        kanji: '過ごす',
        reading: 'すごす',
        meanings: 'to spend (time)',
      },
      {
        kanji: '過ち',
        reading: 'あやまち',
        meanings: 'fault',
      },
      {
        kanji: '過ちて改めざるこれを過ちという',
        reading: 'あやまちてあらためざるこれをあやまちという',
        meanings:
          "a man who has committed a mistake and doesn't correct it is committing another mistake",
      },
      {
        kanji: '過つ',
        reading: 'あやまつ',
        meanings: 'to err',
      },
      {
        kanji: '過ぎる',
        reading: 'よぎる',
        meanings: 'to go by',
      },
      {
        kanji: '過ぎる',
        reading: 'よぎる',
        meanings: 'to go by',
      },
      {
        kanji: '過',
        reading: 'か',
        meanings: 'surplus-',
      },
      {
        kanji: '過激',
        reading: 'かげき',
        meanings: 'extreme (measure',
      },
      {
        kanji: '看過',
        reading: 'かんか',
        meanings: 'overlooking',
      },
      {
        kanji: '輸出超過',
        reading: 'ゆしゅつちょうか',
        meanings: 'excess of exports',
      },
    ],
  },
  {
    kanjiName: '寝',
    strokes: 13,
    grade: 8,
    freq: 1034,
    meanings: ['Lie Down', 'Sleep', 'Rest', 'Bed', 'Remain Unsold'],
    on: ['しん'],
    kun: ['ね.る', 'ね.かす', 'い.ぬ', 'みたまや', 'や.める'],
    jlpt: 3,
    quizAnswers: ['Raise', 'Good Belt', 'Bequeath', 'Lie Down'],
    similars: [
      {
        kanji: '浸',
        meaning: 'immersed',
      },
      {
        kanji: '侵',
        meaning: 'encroach',
      },
      {
        kanji: '受',
        meaning: 'accept',
      },
      {
        kanji: '寂',
        meaning: 'loneliness',
      },
      {
        kanji: '疫',
        meaning: 'epidemic',
      },
      {
        kanji: '掃',
        meaning: 'sweep',
      },
      {
        kanji: '没',
        meaning: 'drown',
      },
      {
        kanji: '愛',
        meaning: 'love',
      },
      {
        kanji: '密',
        meaning: 'secrecy',
      },
      {
        kanji: '当',
        meaning: 'hit',
      },
    ],
    usedIn: [
      {
        kanji: '寝る',
        reading: 'ねる',
        meanings: 'to sleep (lying down)',
      },
      {
        kanji: '寝る子は育つ',
        reading: 'ねるこはそだつ',
        meanings: 'sleep brings up a child well',
      },
      {
        kanji: '寝かす',
        reading: 'ねかす',
        meanings: 'to put to bed',
      },
      {
        kanji: '寝',
        reading: 'ね',
        meanings: 'sleep',
      },
      {
        kanji: '寝具',
        reading: 'しんぐ',
        meanings: 'bedding',
      },
    ],
  },
  {
    kanjiName: '置',
    strokes: 13,
    grade: 4,
    freq: 277,
    meanings: [
      'Placement',
      'Put',
      'Set',
      'Deposit',
      'Leave Behind',
      'Keep',
      'Employ',
      'Pawn',
    ],
    on: ['ち'],
    kun: ['お.く', '-お.き'],
    jlpt: 3,
    quizAnswers: ['Kiln', 'Dare', 'Placement', 'Become'],
    similars: [
      {
        kanji: '買',
        meaning: 'buy',
      },
      {
        kanji: '署',
        meaning: 'signature',
      },
      {
        kanji: '殖',
        meaning: 'augment',
      },
      {
        kanji: '値',
        meaning: 'price',
      },
      {
        kanji: '冒',
        meaning: 'risk',
      },
      {
        kanji: '植',
        meaning: 'plant',
      },
      {
        kanji: '曹',
        meaning: 'office',
      },
      {
        kanji: '直',
        meaning: 'straightaway',
      },
      {
        kanji: '遭',
        meaning: 'encounter',
      },
      {
        kanji: '顕',
        meaning: 'appear',
      },
    ],
    usedIn: [
      {
        kanji: '置く',
        reading: 'おく',
        meanings: 'to put',
      },
      {
        kanji: '置換',
        reading: 'ちかん',
        meanings: 'substitution',
      },
      {
        kanji: '置換可能引数データ',
        reading: 'ちかんかのうひきすうでーた',
        meanings: 'replaceable parameter data',
      },
      {
        kanji: '留置',
        reading: 'りゅうち',
        meanings: 'detention (usu. during investigation)',
      },
      {
        kanji: '倒置',
        reading: 'とうち',
        meanings: 'turning upside down',
      },
    ],
  },
  {
    kanjiName: '費',
    strokes: 12,
    grade: 4,
    freq: 321,
    meanings: ['Expense', 'Cost', 'Spend', 'Consume', 'Waste'],
    on: ['ひ'],
    kun: ['つい.やす', 'つい.える'],
    jlpt: 3,
    quizAnswers: ['Expense', 'Stretch', 'Mention', 'Entertain'],
    similars: [
      {
        kanji: '原',
        meaning: 'meadow',
      },
      {
        kanji: '規',
        meaning: 'standard',
      },
      {
        kanji: '貧',
        meaning: 'poverty',
      },
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
      {
        kanji: '負',
        meaning: 'defeat',
      },
      {
        kanji: '責',
        meaning: 'blame',
      },
      {
        kanji: '質',
        meaning: 'substance',
      },
      {
        kanji: '貨',
        meaning: 'freight',
      },
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '損',
        meaning: 'damage',
      },
    ],
    usedIn: [
      {
        kanji: '費やす',
        reading: 'ついやす',
        meanings: 'to spend',
      },
      {
        kanji: '費える',
        reading: 'ついえる',
        meanings: 'to be used up (of money',
      },
      {
        kanji: '費',
        reading: 'ひ',
        meanings: 'cost',
      },
      {
        kanji: '費用',
        reading: 'ひよう',
        meanings: 'cost',
      },
      {
        kanji: '固定費',
        reading: 'こていひ',
        meanings: 'fixed cost',
      },
      {
        kanji: '交際費',
        reading: 'こうさいひ',
        meanings: 'entertainment expenses',
      },
    ],
  },
  {
    kanjiName: '示',
    strokes: 5,
    grade: 5,
    freq: 237,
    meanings: ['Show', 'Indicate', 'Point Out', 'Express', 'Display'],
    on: ['じ', 'し'],
    kun: ['しめ.す'],
    jlpt: 3,
    quizAnswers: ['Show', 'Long Time', 'Parry', 'Scarce'],
    similars: [
      {
        kanji: '赤',
        meaning: 'red',
      },
      {
        kanji: '余',
        meaning: 'too much',
      },
      {
        kanji: '未',
        meaning: 'un-',
      },
      {
        kanji: '夫',
        meaning: 'husband',
      },
      {
        kanji: '天',
        meaning: 'heavens',
      },
      {
        kanji: '元',
        meaning: 'beginning',
      },
      {
        kanji: '小',
        meaning: 'little',
      },
      {
        kanji: '寸',
        meaning: 'measurement',
      },
      {
        kanji: '井',
        meaning: 'well',
      },
      {
        kanji: '才',
        meaning: 'genius',
      },
    ],
    usedIn: [
      {
        kanji: '示す',
        reading: 'しめす',
        meanings: 'to (take out and) show',
      },
      {
        kanji: '示偏',
        reading: 'しめすへん',
        meanings: 'kanji show radical at left (radical 113)',
      },
      {
        kanji: '示談',
        reading: 'じだん',
        meanings: 'settlement out of court',
      },
      {
        kanji: '示威',
        reading: 'じい',
        meanings: 'demonstration',
      },
      {
        kanji: '内示',
        reading: 'ないじ',
        meanings: 'unofficial announcement',
      },
      {
        kanji: '開示',
        reading: 'かいじ',
        meanings: 'release (e.g. information)',
      },
      {
        kanji: '示し',
        reading: 'しめし',
        meanings: 'lesson',
      },
      {
        kanji: '示唆',
        reading: 'しさ',
        meanings: 'suggestion',
      },
      {
        kanji: '公示',
        reading: 'こうじ',
        meanings: 'public announcement',
      },
      {
        kanji: '内示',
        reading: 'ないじ',
        meanings: 'unofficial announcement',
      },
    ],
  },
  {
    kanjiName: '観',
    strokes: 18,
    grade: 4,
    freq: 476,
    meanings: ['Outlook', 'Look', 'Appearance', 'Condition', 'View'],
    on: ['かん'],
    kun: ['み.る', 'しめ.す'],
    jlpt: 3,
    quizAnswers: ['Pick', 'Elect', 'Speak To A Ruler', 'Outlook'],
    similars: [
      {
        kanji: '勧',
        meaning: 'persuade',
      },
      {
        kanji: '奮',
        meaning: 'stirred up',
      },
      {
        kanji: '歓',
        meaning: 'delight',
      },
      {
        kanji: '顧',
        meaning: 'look back',
      },
      {
        kanji: '積',
        meaning: 'volume',
      },
      {
        kanji: '偵',
        meaning: 'spy',
      },
      {
        kanji: '循',
        meaning: 'sequential',
      },
      {
        kanji: '償',
        meaning: 'reparation',
      },
      {
        kanji: '賢',
        meaning: 'intelligent',
      },
      {
        kanji: '覧',
        meaning: 'perusal',
      },
    ],
    usedIn: [
      {
        kanji: '見る',
        reading: 'みる',
        meanings: 'to see',
      },
      {
        kanji: '観',
        reading: 'かん',
        meanings: 'look',
      },
      {
        kanji: '看過',
        reading: 'かんか',
        meanings: 'overlooking',
      },
      {
        kanji: '客観',
        reading: 'きゃっかん',
        meanings: 'objectivity',
      },
      {
        kanji: '静観',
        reading: 'せいかん',
        meanings: 'watchful waiting',
      },
    ],
  },
  {
    kanjiName: '値',
    strokes: 10,
    grade: 6,
    freq: 518,
    meanings: ['Price', 'Cost', 'Value'],
    on: ['ち'],
    kun: ['ね', 'あたい'],
    jlpt: 3,
    quizAnswers: ['Price', 'Stink', 'Counter For Small Animals', 'Speak'],
    similars: [
      {
        kanji: '盾',
        meaning: 'shield',
      },
      {
        kanji: '直',
        meaning: 'straightaway',
      },
      {
        kanji: '植',
        meaning: 'plant',
      },
      {
        kanji: '殖',
        meaning: 'augment',
      },
      {
        kanji: '看',
        meaning: 'watch over',
      },
      {
        kanji: '便',
        meaning: 'convenience',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '賃',
        meaning: 'fare',
      },
      {
        kanji: '貸',
        meaning: 'lend',
      },
      {
        kanji: '順',
        meaning: 'obey',
      },
    ],
    usedIn: [
      {
        kanji: '値',
        reading: 'ね',
        meanings: 'price',
      },
      {
        kanji: '値上がり',
        reading: 'ねあがり',
        meanings: 'price increase',
      },
      {
        kanji: '安値',
        reading: 'やすね',
        meanings: 'low price',
      },
      {
        kanji: '底値',
        reading: 'そこね',
        meanings: 'bottom price',
      },
      {
        kanji: '値',
        reading: 'あたい',
        meanings: 'price',
      },
      {
        kanji: '値する',
        reading: 'あたいする',
        meanings: 'to be worth',
      },
      {
        kanji: '最初の値',
        reading: 'さいしょのあたい',
        meanings: 'initial value',
      },
      {
        kanji: '値',
        reading: 'ち',
        meanings: 'level',
      },
      {
        kanji: '値域',
        reading: 'ちいき',
        meanings: 'range (of a function or relation)',
      },
      {
        kanji: '経験値',
        reading: 'けいけんち',
        meanings: 'amount of experience',
      },
      {
        kanji: '閾値',
        reading: 'いきち',
        meanings: 'threshold (amount',
      },
    ],
  },
  {
    kanjiName: '吸',
    strokes: 6,
    grade: 6,
    freq: 1054,
    meanings: ['Suck', 'Imbibe', 'Inhale', 'Sip'],
    on: ['きゅう'],
    kun: ['す.う'],
    jlpt: 3,
    quizAnswers: ['Suck', 'Plain', 'Chase', 'Splash'],
    similars: [
      {
        kanji: '史',
        meaning: 'history',
      },
      {
        kanji: '吹',
        meaning: 'blow',
      },
      {
        kanji: '吏',
        meaning: 'officer',
      },
      {
        kanji: '兄',
        meaning: 'elder brother',
      },
      {
        kanji: '束',
        meaning: 'bundle',
      },
      {
        kanji: '足',
        meaning: 'leg',
      },
      {
        kanji: '吟',
        meaning: 'versify',
      },
      {
        kanji: '別',
        meaning: 'separate',
      },
      {
        kanji: '哀',
        meaning: 'pathetic',
      },
      {
        kanji: '故',
        meaning: 'happenstance',
      },
    ],
    usedIn: [
      {
        kanji: '吸う',
        reading: 'すう',
        meanings: 'to smoke',
      },
      {
        kanji: '吸収',
        reading: 'きゅうしゅう',
        meanings: 'absorption',
      },
      {
        kanji: '吸血鬼',
        reading: 'きゅうけつき',
        meanings: 'vampire',
      },
      {
        kanji: '腹式呼吸',
        reading: 'ふくしきこきゅう',
        meanings: 'diaphragmatic breathing',
      },
      {
        kanji: '外呼吸',
        reading: 'がいこきゅう',
        meanings: 'external respiration',
      },
    ],
  },
  {
    kanjiName: '状',
    strokes: 7,
    grade: 5,
    freq: 298,
    meanings: [
      'Status Quo',
      'Conditions',
      'Circumstances',
      'Form',
      'Appearance',
    ],
    on: ['じょう'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Printing', 'Come Out', 'Status Quo', 'Emergency'],
    similars: [
      {
        kanji: '伏',
        meaning: 'prostrated',
      },
      {
        kanji: '犬',
        meaning: 'dog',
      },
      {
        kanji: '決',
        meaning: 'decide',
      },
      {
        kanji: '求',
        meaning: 'request',
      },
      {
        kanji: '壮',
        meaning: 'robust',
      },
      {
        kanji: '兆',
        meaning: 'portent',
      },
      {
        kanji: '太',
        meaning: 'plump',
      },
      {
        kanji: '氷',
        meaning: 'icicle',
      },
      {
        kanji: '添',
        meaning: 'annexed',
      },
      {
        kanji: '拡',
        meaning: 'broaden',
      },
    ],
    usedIn: [
      {
        kanji: '状',
        reading: 'じょう',
        meanings: 'form',
      },
      {
        kanji: '状況',
        reading: 'じょうきょう',
        meanings: 'state of affairs',
      },
      {
        kanji: '内情',
        reading: 'ないじょう',
        meanings: 'internal conditions',
      },
      {
        kanji: '形状',
        reading: 'けいじょう',
        meanings: 'shape',
      },
    ],
  },
  {
    kanjiName: '収',
    strokes: 4,
    grade: 6,
    freq: 337,
    meanings: ['Income', 'Obtain', 'Reap', 'Pay', 'Supply', 'Store'],
    on: ['しゅう'],
    kun: ['おさ.める', 'おさ.まる'],
    jlpt: 3,
    quizAnswers: ['Ward', 'Ecstasy', 'Income', 'Red-light District'],
    similars: [
      {
        kanji: '支',
        meaning: 'branch',
      },
      {
        kanji: '取',
        meaning: 'take',
      },
      {
        kanji: '仮',
        meaning: 'sham',
      },
      {
        kanji: '段',
        meaning: 'grade',
      },
      {
        kanji: '度',
        meaning: 'degrees',
      },
      {
        kanji: '廷',
        meaning: 'courts',
      },
      {
        kanji: '役',
        meaning: 'duty',
      },
      {
        kanji: '技',
        meaning: 'skill',
      },
      {
        kanji: '麦',
        meaning: 'barley',
      },
      {
        kanji: '坂',
        meaning: 'slope',
      },
    ],
    usedIn: [
      {
        kanji: '収める',
        reading: 'おさめる',
        meanings: 'to put (into)',
      },
      {
        kanji: '収まる',
        reading: 'おさまる',
        meanings: 'to fit into (a box',
      },
      {
        kanji: '収穫',
        reading: 'しゅうかく',
        meanings: 'harvest',
      },
      {
        kanji: '収益',
        reading: 'しゅうえき',
        meanings: 'earnings',
      },
      {
        kanji: '徴収',
        reading: 'ちょうしゅう',
        meanings: 'collection (of fees',
      },
      {
        kanji: '増収',
        reading: 'ぞうしゅう',
        meanings: 'increase in yield',
      },
    ],
  },
  {
    kanjiName: '職',
    strokes: 18,
    grade: 5,
    freq: 305,
    meanings: ['Post', 'Employment', 'Work'],
    on: ['しょく', 'そく'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Rock', 'Blink', 'Post', 'Counter For Tatami Mats'],
    similars: [
      {
        kanji: '識',
        meaning: 'discriminating',
      },
      {
        kanji: '境',
        meaning: 'boundary',
      },
      {
        kanji: '織',
        meaning: 'weave',
      },
      {
        kanji: '暗',
        meaning: 'darkness',
      },
      {
        kanji: '憶',
        meaning: 'recollection',
      },
      {
        kanji: '顕',
        meaning: 'appear',
      },
      {
        kanji: '墳',
        meaning: 'tomb',
      },
      {
        kanji: '責',
        meaning: 'blame',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '障',
        meaning: 'hinder',
      },
    ],
    usedIn: [
      {
        kanji: '職',
        reading: 'しょく',
        meanings: 'job',
      },
      {
        kanji: '職員',
        reading: 'しょくいん',
        meanings: 'staff member',
      },
      {
        kanji: '住職',
        reading: 'じゅうしょく',
        meanings: 'chief priest (of a Buddhist temple)',
      },
      {
        kanji: '休職',
        reading: 'きゅうしょく',
        meanings: 'temporary retirement',
      },
      {
        kanji: '職',
        reading: 'しょく',
        meanings: 'job',
      },
      {
        kanji: '有職',
        reading: 'ゆうしょく',
        meanings: 'holding a job',
      },
    ],
  },
  {
    kanjiName: '規',
    strokes: 11,
    grade: 5,
    freq: 349,
    meanings: ['Standard', 'Measure'],
    on: ['き'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Music', 'All', 'Fall Into', 'Standard'],
    similars: [
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
      {
        kanji: '現',
        meaning: 'present',
      },
      {
        kanji: '頑',
        meaning: 'stubborn',
      },
      {
        kanji: '親',
        meaning: 'parent',
      },
      {
        kanji: '覚',
        meaning: 'memorize',
      },
      {
        kanji: '棟',
        meaning: 'ridgepole',
      },
      {
        kanji: '賛',
        meaning: 'approve',
      },
      {
        kanji: '費',
        meaning: 'expense',
      },
      {
        kanji: '項',
        meaning: 'paragraph',
      },
      {
        kanji: '視',
        meaning: 'inspection',
      },
    ],
    usedIn: [
      {
        kanji: '基準',
        reading: 'きじゅん',
        meanings: 'standard',
      },
      {
        kanji: '規格',
        reading: 'きかく',
        meanings: 'standard',
      },
      {
        kanji: '内規',
        reading: 'ないき',
        meanings: 'private regulations',
      },
      {
        kanji: '正規',
        reading: 'せいき',
        meanings: 'regular',
      },
    ],
  },
  {
    kanjiName: '割',
    strokes: 12,
    grade: 6,
    freq: 318,
    meanings: [
      'Proportion',
      'Comparatively',
      'Divide',
      'Cut',
      'Separate',
      'Split',
    ],
    on: ['かつ'],
    kun: ['わ.る', 'わり', 'わ.り', 'わ.れる', 'さ.く'],
    jlpt: 3,
    quizAnswers: ['Proportion', 'Conduct', 'Tactics', 'Occupation'],
    similars: [
      {
        kanji: '害',
        meaning: 'harm',
      },
      {
        kanji: '寄',
        meaning: 'draw near',
      },
      {
        kanji: '訂',
        meaning: 'revise',
      },
      {
        kanji: '剖',
        meaning: 'divide',
      },
      {
        kanji: '訓',
        meaning: 'instruction',
      },
      {
        kanji: '言',
        meaning: 'say',
      },
      {
        kanji: '討',
        meaning: 'chastise',
      },
      {
        kanji: '宝',
        meaning: 'treasure',
      },
      {
        kanji: '悟',
        meaning: 'enlightenment',
      },
      {
        kanji: '崎',
        meaning: 'promontory',
      },
    ],
    usedIn: [
      {
        kanji: '割る',
        reading: 'わる',
        meanings: 'to divide',
      },
      {
        kanji: '割り',
        reading: 'わり',
        meanings: 'rate',
      },
      {
        kanji: '割合',
        reading: 'わりあい',
        meanings: 'rate',
      },
      {
        kanji: '学割',
        reading: 'がくわり',
        meanings: 'student discount',
      },
      {
        kanji: '手合割',
        reading: 'てあいわり',
        meanings: 'handicap (go',
      },
      {
        kanji: '割り',
        reading: 'わり',
        meanings: 'rate',
      },
      {
        kanji: '割合',
        reading: 'わりあい',
        meanings: 'rate',
      },
      {
        kanji: '学割',
        reading: 'がくわり',
        meanings: 'student discount',
      },
      {
        kanji: '手合割',
        reading: 'てあいわり',
        meanings: 'handicap (go',
      },
      {
        kanji: '割れる',
        reading: 'われる',
        meanings: 'to break',
      },
      {
        kanji: '裂く',
        reading: 'さく',
        meanings: 'to tear',
      },
      {
        kanji: '割愛',
        reading: 'かつあい',
        meanings: 'omitting (reluctantly)',
      },
      {
        kanji: '割譲',
        reading: 'かつじょう',
        meanings: 'cession (of territory)',
      },
      {
        kanji: '正割',
        reading: 'せいかつ',
        meanings: 'secant (trigonometric function)',
      },
      {
        kanji: '等割',
        reading: 'とうかつ',
        meanings: 'equal cleavage (embryology)',
      },
    ],
  },
  {
    kanjiName: '演',
    strokes: 14,
    grade: 5,
    freq: 267,
    meanings: ['Performance', 'Act', 'Play', 'Render', 'Stage'],
    on: ['えん'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Open', 'Refer To', 'Performance', 'Silhouette'],
    similars: [
      {
        kanji: '漬',
        meaning: 'pickling',
      },
      {
        kanji: '慣',
        meaning: 'accustomed',
      },
      {
        kanji: '黄',
        meaning: 'yellow',
      },
      {
        kanji: '覚',
        meaning: 'memorize',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '横',
        meaning: 'sideways',
      },
      {
        kanji: '責',
        meaning: 'blame',
      },
      {
        kanji: '浦',
        meaning: 'bay',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '資',
        meaning: 'assets',
      },
    ],
    usedIn: [
      {
        kanji: '演技',
        reading: 'えんぎ',
        meanings: 'acting',
      },
      {
        kanji: '演歌',
        reading: 'えんか',
        meanings: 'enka',
      },
      {
        kanji: '共演',
        reading: 'きょうえん',
        meanings: 'appearing together (in a film',
      },
      {
        kanji: '再演',
        reading: 'さいえん',
        meanings: 'another showing (of a play)',
      },
    ],
  },
  {
    kanjiName: '師',
    strokes: 10,
    grade: 5,
    freq: 563,
    meanings: [
      'Expert',
      'Teacher',
      'Master',
      'Model',
      'Exemplar',
      'Army (incl. Counter)',
      'War',
    ],
    on: ['し'],
    kun: ['いくさ'],
    jlpt: 3,
    quizAnswers: ['Deliberate', '11pm-1am', 'Retreat', 'Expert'],
    similars: [
      {
        kanji: '帥',
        meaning: 'commander',
      },
      {
        kanji: '追',
        meaning: 'chase',
      },
      {
        kanji: '保',
        meaning: 'protect',
      },
      {
        kanji: '靴',
        meaning: 'shoes',
      },
      {
        kanji: '叫',
        meaning: 'shout',
      },
      {
        kanji: '味',
        meaning: 'flavor',
      },
      {
        kanji: '仲',
        meaning: 'go-between',
      },
      {
        kanji: '希',
        meaning: 'hope',
      },
      {
        kanji: '布',
        meaning: 'linen',
      },
      {
        kanji: '肺',
        meaning: 'lungs',
      },
    ],
    usedIn: [
      {
        kanji: '師',
        reading: 'し',
        meanings: 'teacher',
      },
      {
        kanji: '獅子',
        reading: 'しし',
        meanings: 'lion',
      },
      {
        kanji: '大師',
        reading: 'だいし',
        meanings: 'great teacher (i.e. a buddha',
      },
      {
        kanji: '歯科医師',
        reading: 'しかいし',
        meanings: 'dentist',
      },
    ],
  },
  {
    kanjiName: '備',
    strokes: 12,
    grade: 5,
    freq: 356,
    meanings: ['Equip', 'Provision', 'Preparation'],
    on: ['び'],
    kun: ['そな.える', 'そな.わる', 'つぶさ.に'],
    jlpt: 3,
    quizAnswers: [
      'Poem',
      'Counter For Texts (or Book Scrolls)',
      'Vacant',
      'Equip',
    ],
    similars: [
      {
        kanji: '借',
        meaning: 'borrow',
      },
      {
        kanji: '庸',
        meaning: 'commonplace',
      },
      {
        kanji: '供',
        meaning: 'submit',
      },
      {
        kanji: '情',
        meaning: 'feelings',
      },
      {
        kanji: '青',
        meaning: 'blue',
      },
      {
        kanji: '硝',
        meaning: 'nitrate',
      },
      {
        kanji: '偏',
        meaning: 'partial',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '済',
        meaning: 'settle (debt',
      },
      {
        kanji: '肖',
        meaning: 'resemblance',
      },
    ],
    usedIn: [
      {
        kanji: '備える',
        reading: 'そなえる',
        meanings: 'to furnish with',
      },
      {
        kanji: '備わる',
        reading: 'そなわる',
        meanings: 'to be furnished with',
      },
      {
        kanji: '具に',
        reading: 'つぶさに',
        meanings: 'in detail',
      },
      {
        kanji: '備蓄',
        reading: 'びちく',
        meanings: 'stockpile',
      },
      {
        kanji: '備考',
        reading: 'びこう',
        meanings: 'note (for reference)',
      },
      {
        kanji: '配備',
        reading: 'はいび',
        meanings: 'deployment',
      },
      {
        kanji: '無防備',
        reading: 'むぼうび',
        meanings: 'defenseless',
      },
    ],
  },
  {
    kanjiName: '優',
    strokes: 17,
    grade: 6,
    freq: 334,
    meanings: [
      'Tenderness',
      'Excel',
      'Surpass',
      'Actor',
      'Superiority',
      'Gentleness',
    ],
    on: ['ゆう', 'う'],
    kun: ['やさ.しい', 'すぐ.れる', 'まさ.る'],
    jlpt: 3,
    quizAnswers: ['Curious', 'Arrest', 'Removing', 'Tenderness'],
    similars: [
      {
        kanji: '憂',
        meaning: 'melancholy',
      },
      {
        kanji: '愛',
        meaning: 'love',
      },
      {
        kanji: '慶',
        meaning: 'jubilation',
      },
      {
        kanji: '恥',
        meaning: 'shame',
      },
      {
        kanji: '思',
        meaning: 'think',
      },
      {
        kanji: '息',
        meaning: 'breath',
      },
      {
        kanji: '酸',
        meaning: 'acid',
      },
      {
        kanji: '暖',
        meaning: 'warmth',
      },
      {
        kanji: '想',
        meaning: 'concept',
      },
      {
        kanji: '恩',
        meaning: 'grace',
      },
    ],
    usedIn: [
      {
        kanji: '優しい',
        reading: 'やさしい',
        meanings: 'tender',
      },
      {
        kanji: '優しい声',
        reading: 'やさしいこえ',
        meanings: 'soft voice',
      },
      {
        kanji: '優れる',
        reading: 'すぐれる',
        meanings: 'to surpass',
      },
      {
        kanji: '勝る',
        reading: 'まさる',
        meanings: 'to excel',
      },
      {
        kanji: '優るとも劣らない',
        reading: 'まさるともおとらない',
        meanings: 'not at all inferior to',
      },
      {
        kanji: '優',
        reading: 'ゆう',
        meanings: 'Excellent (grade)',
      },
      {
        kanji: '優位',
        reading: 'ゆうい',
        meanings: 'predominance',
      },
      {
        kanji: '声優',
        reading: 'せいゆう',
        meanings: 'voice actor or actress (radio',
      },
      {
        kanji: '怪優',
        reading: 'かいゆう',
        meanings: 'actor or performer with fascinating acting and appearance',
      },
      {
        kanji: '優曇華',
        reading: 'うどんげ',
        meanings:
          'udumbara (mythical Indian plant often identified with the cluster fig',
      },
      {
        kanji: '優婆夷',
        reading: 'うばい',
        meanings: 'upasika (devout female lay follower of Buddhism)',
      },
      {
        kanji: '声優',
        reading: 'せいゆう',
        meanings: 'voice actor or actress (radio',
      },
      {
        kanji: '怪優',
        reading: 'かいゆう',
        meanings: 'actor or performer with fascinating acting and appearance',
      },
    ],
  },
  {
    kanjiName: '宅',
    strokes: 6,
    grade: 6,
    freq: 357,
    meanings: ['Home', 'House', 'Residence', 'Our House', 'My Husband'],
    on: ['たく'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Reason', 'Serpent', 'Home', 'Full'],
    similars: [
      {
        kanji: '完',
        meaning: 'perfect',
      },
      {
        kanji: '宇',
        meaning: 'eaves',
      },
      {
        kanji: '穴',
        meaning: 'hole',
      },
      {
        kanji: '光',
        meaning: 'ray',
      },
      {
        kanji: '安',
        meaning: 'relax',
      },
      {
        kanji: '空',
        meaning: 'empty',
      },
      {
        kanji: '突',
        meaning: 'stab',
      },
      {
        kanji: '売',
        meaning: 'sell',
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)',
      },
      {
        kanji: '究',
        meaning: 'research',
      },
    ],
    usedIn: [
      {
        kanji: '宅',
        reading: 'たく',
        meanings: 'house',
      },
      {
        kanji: '宅地',
        reading: 'たくち',
        meanings: 'building lot',
      },
      {
        kanji: '社宅',
        reading: 'しゃたく',
        meanings: 'company housing',
      },
      {
        kanji: '家宅',
        reading: 'かたく',
        meanings: 'domicile',
      },
    ],
  },
  {
    kanjiName: '現',
    strokes: 11,
    grade: 5,
    freq: 85,
    meanings: ['Present', 'Existing', 'Actual'],
    on: ['げん'],
    kun: ['あらわ.れる', 'あらわ.す', 'うつつ', 'うつ.つ'],
    jlpt: 3,
    quizAnswers: ['Present', 'Withdraw', 'Various', 'Queer'],
    similars: [
      {
        kanji: '貢',
        meaning: 'tribute',
      },
      {
        kanji: '責',
        meaning: 'blame',
      },
      {
        kanji: '項',
        meaning: 'paragraph',
      },
      {
        kanji: '理',
        meaning: 'logic',
      },
      {
        kanji: '頂',
        meaning: 'place on the head',
      },
      {
        kanji: '規',
        meaning: 'standard',
      },
      {
        kanji: '債',
        meaning: 'bond',
      },
      {
        kanji: '漬',
        meaning: 'pickling',
      },
      {
        kanji: '盲',
        meaning: 'blind',
      },
      {
        kanji: '黄',
        meaning: 'yellow',
      },
    ],
    usedIn: [
      {
        kanji: '現れる',
        reading: 'あらわれる',
        meanings: 'to appear',
      },
      {
        kanji: '表す',
        reading: 'あらわす',
        meanings: 'to represent',
      },
      {
        kanji: '現つ',
        reading: 'うつつ',
        meanings: 'reality',
      },
      {
        kanji: '現責',
        reading: 'うつつぜめ',
        meanings: 'sleep deprivation (Edo-period torture method)',
      },
      {
        kanji: '現つ',
        reading: 'うつつ',
        meanings: 'reality',
      },
      {
        kanji: '現責',
        reading: 'うつつぜめ',
        meanings: 'sleep deprivation (Edo-period torture method)',
      },
      {
        kanji: '現',
        reading: 'げん',
        meanings: 'present (e.g. government',
      },
      {
        kanji: '現役',
        reading: 'げんえき',
        meanings: 'active duty',
      },
      {
        kanji: '具現',
        reading: 'ぐげん',
        meanings: 'incarnation',
      },
      {
        kanji: '体現',
        reading: 'たいげん',
        meanings: 'personification',
      },
    ],
  },
  {
    kanjiName: '呼',
    strokes: 8,
    grade: 6,
    freq: 498,
    meanings: ['Call', 'Call Out To', 'Invite'],
    on: ['こ'],
    kun: ['よ.ぶ'],
    jlpt: 3,
    quizAnswers: ['Dip', 'Secrete', 'Call', 'Consign'],
    similars: [
      {
        kanji: '吟',
        meaning: 'versify',
      },
      {
        kanji: '豆',
        meaning: 'beans',
      },
      {
        kanji: '吹',
        meaning: 'blow',
      },
      {
        kanji: '咲',
        meaning: 'blossom',
      },
      {
        kanji: '唆',
        meaning: 'tempt',
      },
      {
        kanji: '呈',
        meaning: 'display',
      },
      {
        kanji: '所',
        meaning: 'place',
      },
      {
        kanji: '忠',
        meaning: 'loyalty',
      },
      {
        kanji: '肉',
        meaning: 'meat',
      },
      {
        kanji: '評',
        meaning: 'evaluate',
      },
    ],
    usedIn: [
      {
        kanji: '呼ぶ',
        reading: 'よぶ',
        meanings: 'to call out (to)',
      },
      {
        kanji: '呼子鳥',
        reading: 'よぶこどり',
        meanings: 'calling bird (esp. a cuckoo)',
      },
      {
        kanji: '呼吸',
        reading: 'こきゅう',
        meanings: 'breathing',
      },
      {
        kanji: '呼応',
        reading: 'こおう',
        meanings: 'hailing each other',
      },
      {
        kanji: '連呼',
        reading: 'れんこ',
        meanings: "calling repeatedly (e.g. someone's name)",
      },
      {
        kanji: '点呼',
        reading: 'てんこ',
        meanings: 'roll-call',
      },
    ],
  },
  {
    kanjiName: '違',
    strokes: 13,
    grade: 8,
    freq: 344,
    meanings: ['Difference', 'Differ'],
    on: ['い'],
    kun: [
      'ちが.う',
      'ちが.い',
      'ちが.える',
      '-ちが.える',
      'たが.う',
      'たが.える',
    ],
    jlpt: 3,
    quizAnswers: ['Tiger', 'House', 'Difference', 'Seaweed'],
    similars: [
      {
        kanji: '衛',
        meaning: 'defense',
      },
      {
        kanji: '偉',
        meaning: 'admirable',
      },
      {
        kanji: '避',
        meaning: 'evade',
      },
      {
        kanji: '峠',
        meaning: 'mountain peak',
      },
      {
        kanji: '連',
        meaning: 'take along',
      },
      {
        kanji: '遅',
        meaning: 'slow',
      },
      {
        kanji: '速',
        meaning: 'quick',
      },
      {
        kanji: '運',
        meaning: 'carry',
      },
      {
        kanji: '詰',
        meaning: 'packed',
      },
      {
        kanji: '遠',
        meaning: 'distant',
      },
    ],
    usedIn: [
      {
        kanji: '違う',
        reading: 'ちがう',
        meanings: 'to differ (from)',
      },
      {
        kanji: '違くて',
        reading: 'ちがくて',
        meanings: 'different (from)',
      },
      {
        kanji: '違い',
        reading: 'ちがい',
        meanings: 'difference',
      },
      {
        kanji: '違いない',
        reading: 'ちがいない',
        meanings: 'sure',
      },
      {
        kanji: '違える',
        reading: 'ちがえる',
        meanings: 'to change',
      },
      {
        kanji: '違う',
        reading: 'たがう',
        meanings: 'to differ',
      },
      {
        kanji: '違える',
        reading: 'たがえる',
        meanings: 'to change',
      },
      {
        kanji: '違反',
        reading: 'いはん',
        meanings: 'violation',
      },
      {
        kanji: '違憲',
        reading: 'いけん',
        meanings: 'unconstitutionality',
      },
      {
        kanji: '格段の相違',
        reading: 'かくだんのそうい',
        meanings: 'marked difference',
      },
      {
        kanji: '非違',
        reading: 'ひい',
        meanings: 'illegality',
      },
    ],
  },
  {
    kanjiName: '差',
    strokes: 10,
    grade: 4,
    freq: 449,
    meanings: [
      'Distinction',
      'Difference',
      'Variation',
      'Discrepancy',
      'Margin',
      'Balance',
    ],
    on: ['さ'],
    kun: ['さ.す', 'さ.し'],
    jlpt: 3,
    quizAnswers: ['Lazy', 'Noise', 'Distinction', 'Verse'],
    similars: [
      {
        kanji: '美',
        meaning: 'beauty',
      },
      {
        kanji: '粧',
        meaning: 'cosmetics',
      },
      {
        kanji: '義',
        meaning: 'righteousness',
      },
      {
        kanji: '佳',
        meaning: 'excellent',
      },
      {
        kanji: '佐',
        meaning: 'assistant',
      },
      {
        kanji: '毒',
        meaning: 'poison',
      },
      {
        kanji: '並',
        meaning: 'row',
      },
      {
        kanji: '垂',
        meaning: 'droop',
      },
      {
        kanji: '着',
        meaning: 'don',
      },
      {
        kanji: '陸',
        meaning: 'land',
      },
    ],
    usedIn: [
      {
        kanji: '差す',
        reading: 'さす',
        meanings: 'to shine',
      },
      {
        kanji: '差し',
        reading: 'さし',
        meanings: 'between (e.g. two people)',
      },
      {
        kanji: '尺',
        reading: 'さし',
        meanings: 'ruler',
      },
      {
        kanji: '旗指',
        reading: 'はたさし',
        meanings:
          "samurai who carries his general's banner while riding into battle",
      },
      {
        kanji: '一差し',
        reading: 'ひとさし',
        meanings: 'one dance',
      },
      {
        kanji: '差',
        reading: 'さ',
        meanings: 'difference',
      },
      {
        kanji: '差し',
        reading: 'さし',
        meanings: 'between (e.g. two people)',
      },
      {
        kanji: '落差',
        reading: 'らくさ',
        meanings:
          'difference in elevation (between two points in a body of water)',
      },
      {
        kanji: '賃金格差',
        reading: 'ちんぎんかくさ',
        meanings: 'pay gap',
      },
    ],
  },
  {
    kanjiName: '供',
    strokes: 8,
    grade: 6,
    freq: 313,
    meanings: ['Submit', 'Offer', 'Present', 'Serve (meal)', 'Accompany'],
    on: ['きょう', 'く', 'くう', 'ぐ'],
    kun: ['そな.える', 'とも', '-ども'],
    jlpt: 3,
    quizAnswers: ['Treasury', 'Excellent', 'Comfort', 'Submit'],
    similars: [
      {
        kanji: '侍',
        meaning: 'waiter',
      },
      {
        kanji: '共',
        meaning: 'together',
      },
      {
        kanji: '洪',
        meaning: 'deluge',
      },
      {
        kanji: '乗',
        meaning: 'ride',
      },
      {
        kanji: '待',
        meaning: 'wait',
      },
      {
        kanji: '先',
        meaning: 'before',
      },
      {
        kanji: '垂',
        meaning: 'droop',
      },
      {
        kanji: '佳',
        meaning: 'excellent',
      },
      {
        kanji: '伐',
        meaning: 'fell',
      },
      {
        kanji: '仕',
        meaning: 'attend',
      },
    ],
    usedIn: [
      {
        kanji: '供える',
        reading: 'そなえる',
        meanings: 'to offer',
      },
      {
        kanji: '供',
        reading: 'とも',
        meanings: 'companion',
      },
      {
        kanji: '共に',
        reading: 'ともに',
        meanings: 'together',
      },
      {
        kanji: '酒のお供',
        reading: 'さけのおとも',
        meanings: 'appetizer or snack served with drinks',
      },
      {
        kanji: '供述',
        reading: 'きょうじゅつ',
        meanings: 'affidavit',
      },
      {
        kanji: '供給',
        reading: 'きょうきゅう',
        meanings: 'supply',
      },
      {
        kanji: '情報提供',
        reading: 'じょうほうていきょう',
        meanings: 'provision of information',
      },
      {
        kanji: '臓器提供',
        reading: 'ぞうきていきょう',
        meanings: 'organ donation',
      },
      {
        kanji: '供養',
        reading: 'くよう',
        meanings: 'memorial service for the dead',
      },
      {
        kanji: '供物',
        reading: 'くもつ',
        meanings: 'offering (e.g. to the gods)',
      },
      {
        kanji: '節句',
        reading: 'せっく',
        meanings: 'seasonal festival',
      },
      {
        kanji: '初節供',
        reading: 'はつぜっく',
        meanings: "baby's first annual festival",
      },
      {
        kanji: '供花',
        reading: 'きょうか',
        meanings: 'offering of flowers (at shrine',
      },
      {
        kanji: '人身御供',
        reading: 'ひとみごくう',
        meanings: 'human sacrifice',
      },
      {
        kanji: '供御',
        reading: 'くご',
        meanings: "emperor's meal",
      },
      {
        kanji: '供祭',
        reading: 'ぐさい',
        meanings: 'offerings',
      },
      {
        kanji: '内供',
        reading: 'ないぐ',
        meanings:
          'inner offerer (any of the 10 high-ranking monks serving at the inner offering hall)',
      },
      {
        kanji: '応供',
        reading: 'おうぐ',
        meanings: 'arhat (meritorious person',
      },
    ],
  },
  {
    kanjiName: '限',
    strokes: 9,
    grade: 5,
    freq: 405,
    meanings: ['Limit', 'Restrict', 'To Best Of Ability'],
    on: ['げん'],
    kun: ['かぎ.る', 'かぎ.り', '-かぎ.り'],
    jlpt: 3,
    quizAnswers: ['Limit', 'Squad', 'Pregnancy', 'Casting'],
    similars: [
      {
        kanji: '恨',
        meaning: 'regret',
      },
      {
        kanji: '食',
        meaning: 'eat',
      },
      {
        kanji: '良',
        meaning: 'good',
      },
      {
        kanji: '陳',
        meaning: 'exhibit',
      },
      {
        kanji: '根',
        meaning: 'root',
      },
      {
        kanji: '浪',
        meaning: 'wandering',
      },
      {
        kanji: '娘',
        meaning: 'daughter',
      },
      {
        kanji: '東',
        meaning: 'east',
      },
      {
        kanji: '更',
        meaning: 'grow late',
      },
      {
        kanji: '眼',
        meaning: 'eyeball',
      },
    ],
    usedIn: [
      {
        kanji: '限る',
        reading: 'かぎる',
        meanings: 'to restrict',
      },
      {
        kanji: '限り',
        reading: 'かぎり',
        meanings: 'limit',
      },
      {
        kanji: '限りない',
        reading: 'かぎりない',
        meanings: 'unlimited',
      },
      {
        kanji: '中限',
        reading: 'なかぎり',
        meanings: 'next-month delivery',
      },
      {
        kanji: '限定',
        reading: 'げんてい',
        meanings: 'limit',
      },
      {
        kanji: '限界',
        reading: 'げんかい',
        meanings: 'limit',
      },
      {
        kanji: '上限',
        reading: 'じょうげん',
        meanings: 'upper limit',
      },
      {
        kanji: '有限',
        reading: 'ゆうげん',
        meanings: 'finite',
      },
    ],
  },
  {
    kanjiName: '与',
    strokes: 3,
    grade: 8,
    freq: 308,
    meanings: [
      'Bestow',
      'Participate In',
      'Give',
      'Award',
      'Impart',
      'Provide',
      'Cause',
      'Gift',
      'Godsend',
    ],
    on: ['よ'],
    kun: ['あた.える', 'あずか.る', 'くみ.する', 'ともに'],
    jlpt: 3,
    quizAnswers: ['Moisten', 'Shallow', 'Bestow', 'Regret'],
    similars: [
      {
        kanji: '士',
        meaning: 'gentleman',
      },
      {
        kanji: '二',
        meaning: 'two',
      },
      {
        kanji: '土',
        meaning: 'soil',
      },
      {
        kanji: '三',
        meaning: 'three',
      },
      {
        kanji: '工',
        meaning: 'craft',
      },
      {
        kanji: '引',
        meaning: 'pull',
      },
      {
        kanji: '弔',
        meaning: 'condolences',
      },
      {
        kanji: '五',
        meaning: 'five',
      },
      {
        kanji: '互',
        meaning: 'mutually',
      },
      {
        kanji: '王',
        meaning: 'king',
      },
    ],
    usedIn: [
      {
        kanji: '与える',
        reading: 'あたえる',
        meanings: 'to give (esp. to someone of lower status)',
      },
      {
        kanji: '与る',
        reading: 'あずかる',
        meanings: 'to participate in',
      },
      {
        kanji: '与する',
        reading: 'くみする',
        meanings: 'to take part in',
      },
      {
        kanji: '与野党',
        reading: 'よやとう',
        meanings: 'ruling and opposition parties',
      },
      {
        kanji: '与党',
        reading: 'よとう',
        meanings: 'ruling party',
      },
      {
        kanji: '賞与',
        reading: 'しょうよ',
        meanings: 'bonus',
      },
      {
        kanji: '贈与',
        reading: 'ぞうよ',
        meanings: 'donation',
      },
    ],
  },
  {
    kanjiName: '渡',
    strokes: 12,
    grade: 8,
    freq: 446,
    meanings: [
      'Transit',
      'Ford',
      'Ferry',
      'Cross',
      'Import',
      'Deliver',
      'Diameter',
      'Migrate',
    ],
    on: ['と'],
    kun: ['わた.る', '-わた.る', 'わた.す'],
    jlpt: 3,
    quizAnswers: ['Transit', 'Concern', 'Bosom', 'Accompany'],
    similars: [
      {
        kanji: '度',
        meaning: 'degrees',
      },
      {
        kanji: '液',
        meaning: 'fluid',
      },
      {
        kanji: '滝',
        meaning: 'waterfall',
      },
      {
        kanji: '波',
        meaning: 'waves',
      },
      {
        kanji: '淑',
        meaning: 'graceful',
      },
      {
        kanji: '涼',
        meaning: 'refreshing',
      },
      {
        kanji: '泣',
        meaning: 'cry',
      },
      {
        kanji: '深',
        meaning: 'deep',
      },
      {
        kanji: '減',
        meaning: 'dwindle',
      },
      {
        kanji: '派',
        meaning: 'faction',
      },
    ],
    usedIn: [
      {
        kanji: '渡る',
        reading: 'わたる',
        meanings: 'to cross over',
      },
      {
        kanji: '渡る世間に鬼はない',
        reading: 'わたるせけんにおにはない',
        meanings: "all people aren't evil",
      },
      {
        kanji: '渡す',
        reading: 'わたす',
        meanings: 'to ferry across (e.g. a river)',
      },
      {
        kanji: '渡航',
        reading: 'とこう',
        meanings: 'voyage',
      },
      {
        kanji: '渡欧',
        reading: 'とおう',
        meanings: 'going to Europe',
      },
      {
        kanji: '過渡',
        reading: 'かと',
        meanings: 'crossing',
      },
      {
        kanji: '譲渡',
        reading: 'じょうと',
        meanings: 'transfer',
      },
    ],
  },
  {
    kanjiName: '景',
    strokes: 12,
    grade: 4,
    freq: 419,
    meanings: ['Scenery', 'View'],
    on: ['けい'],
    kun: [],
    jlpt: 3,
    quizAnswers: ['Clod', 'Dealer (cards)', 'Scenery', 'Darning'],
    similars: [
      {
        kanji: '影',
        meaning: 'shadow',
      },
      {
        kanji: '京',
        meaning: 'capital',
      },
      {
        kanji: '涼',
        meaning: 'refreshing',
      },
      {
        kanji: '鯨',
        meaning: 'whale',
      },
      {
        kanji: '照',
        meaning: 'illuminate',
      },
      {
        kanji: '豊',
        meaning: 'bountiful',
      },
      {
        kanji: '是',
        meaning: 'just so',
      },
      {
        kanji: '昭',
        meaning: 'shining',
      },
      {
        kanji: '黒',
        meaning: 'black',
      },
      {
        kanji: '昨',
        meaning: 'yesterday',
      },
    ],
    usedIn: [
      {
        kanji: '景',
        reading: 'けい',
        meanings: 'vista',
      },
      {
        kanji: '景観',
        reading: 'けいかん',
        meanings: 'scenery',
      },
      {
        kanji: '八景',
        reading: 'はっけい',
        meanings: 'eight picturesque sights',
      },
      {
        kanji: '殺風景',
        reading: 'さっぷうけい',
        meanings: 'dreary',
      },
    ],
  },
  {
    kanjiName: '抜',
    strokes: 7,
    grade: 8,
    freq: 726,
    meanings: [
      'Slip Out',
      'Extract',
      'Pull Out',
      'Pilfer',
      'Quote',
      'Remove',
      'Omit',
    ],
    on: ['ばつ', 'はつ', 'はい'],
    kun: ['ぬ.く', '-ぬ.く', 'ぬ.き', 'ぬ.ける', 'ぬ.かす', 'ぬ.かる'],
    jlpt: 3,
    quizAnswers: ['Rampart', 'Rival', 'Disappear', 'Slip Out'],
    similars: [
      {
        kanji: '技',
        meaning: 'skill',
      },
      {
        kanji: '投',
        meaning: 'throw',
      },
      {
        kanji: '扱',
        meaning: 'handle',
      },
      {
        kanji: '扶',
        meaning: 'aid',
      },
      {
        kanji: '麦',
        meaning: 'barley',
      },
      {
        kanji: '坂',
        meaning: 'slope',
      },
      {
        kanji: '挟',
        meaning: 'pinch',
      },
      {
        kanji: '板',
        meaning: 'plank',
      },
      {
        kanji: '抹',
        meaning: 'rub',
      },
      {
        kanji: '披',
        meaning: 'expose',
      },
    ],
    usedIn: [
      {
        kanji: '抜く',
        reading: 'ぬく',
        meanings: 'to pull out',
      },
      {
        kanji: '抜くべからざる',
        reading: 'ぬくべからざる',
        meanings: 'deep-rooted (suspicion',
      },
      {
        kanji: '抜き',
        reading: 'ぬき',
        meanings: 'leaving out',
      },
      {
        kanji: '抜き打ち',
        reading: 'ぬきうち',
        meanings: 'drawing a katana and attacking in the same stroke',
      },
      {
        kanji: '手抜き',
        reading: 'てぬき',
        meanings: 'omitting crucial steps',
      },
      {
        kanji: '栓抜き',
        reading: 'せんぬき',
        meanings: 'bottle opener',
      },
      {
        kanji: '抜ける',
        reading: 'ぬける',
        meanings: 'to come out',
      },
      {
        kanji: '抜けるような青空',
        reading: 'ぬけるようなあおぞら',
        meanings: 'deep blue sky',
      },
      {
        kanji: '抜かす',
        reading: 'ぬかす',
        meanings: 'to omit',
      },
      {
        kanji: '抜かる',
        reading: 'ぬかる',
        meanings: 'to make a mistake',
      },
      {
        kanji: '抜群',
        reading: 'ばつぐん',
        meanings: 'outstanding',
      },
      {
        kanji: '抜山蓋世',
        reading: 'ばつざんがいせい',
        meanings: 'great strength and energy (of a mighty hero)',
      },
      {
        kanji: '卓抜',
        reading: 'たくばつ',
        meanings: 'excellence',
      },
      {
        kanji: '警抜',
        reading: 'けいばつ',
        meanings: 'scintillating',
      },
    ],
  },
  {
    kanjiName: '候',
    strokes: 10,
    grade: 4,
    freq: 510,
    meanings: ['Climate', 'Season', 'Weather', 'Wait For', 'Expect'],
    on: ['こう'],
    kun: ['そうろう'],
    jlpt: 3,
    quizAnswers: ['Shrivel', 'Climate', 'Highly', 'Childhood'],
    similars: [
      {
        kanji: '侯',
        meaning: 'marquis',
      },
      {
        kanji: '秩',
        meaning: 'regularity',
      },
      {
        kanji: '咲',
        meaning: 'blossom',
      },
      {
        kanji: '保',
        meaning: 'protect',
      },
      {
        kanji: '修',
        meaning: 'discipline',
      },
      {
        kanji: '依',
        meaning: 'reliant',
      },
      {
        kanji: '牧',
        meaning: 'breed',
      },
      {
        kanji: '朕',
        meaning: 'majestic plural',
      },
      {
        kanji: '併',
        meaning: 'join',
      },
      {
        kanji: '律',
        meaning: 'rhythm',
      },
    ],
    usedIn: [
      {
        kanji: '候ふ',
        reading: 'そうろう',
        meanings: "to serve (by a superior's side)",
      },
      {
        kanji: '候間',
        reading: 'そうろうあいだ',
        meanings: 'as ...',
      },
      {
        kanji: '書き候',
        reading: 'かきそうろう',
        meanings: '(have the honor',
      },
      {
        kanji: '御入り候ふ',
        reading: 'おんいりそうろう',
        meanings: 'to go',
      },
      {
        kanji: '候',
        reading: 'こう',
        meanings: 'season',
      },
      {
        kanji: '候補',
        reading: 'こうほ',
        meanings: 'candidate',
      },
      {
        kanji: '時候',
        reading: 'じこう',
        meanings: 'season',
      },
      {
        kanji: '症候',
      },
