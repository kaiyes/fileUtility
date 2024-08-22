const fs = require('fs');
const oldData = require('./jlptArrayOld.js');
const newData = require('./jlptArray.js');

newData.forEach((newObj) => {
  const oldObj = oldData.find(
    (oldObj) => oldObj.kanjiName === newObj.kanjiName
  );
  if (oldObj) {
    newObj.quizAnswersOn = oldObj.quizAnswersOn;
    newObj.quizAnswersKun = oldObj.quizAnswersKun;
  }
});

fs.writeFileSync(
  'mergedFileJlpt.js',
  `module.exports = ${JSON.stringify(newData, null, 2)};`
);

console.log('Data has been merged and written to mergedFile.js');
