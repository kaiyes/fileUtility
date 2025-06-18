const fs = require('fs');
const jmdictData = JSON.parse(fs.readFileSync('jmdict-eng-3.6.1.json', 'utf-8'));

const n5Words = extractN5Words(jmdictData);
console.log(n5Words.slice(0, 100)); // Log first 10 entries


function extractN5Words(jmdictData) {
    const n5Words = [];

    jmdictData.words.forEach(word => {
        // Skip if no senses or no common kanji/kana
        if (!word.sense || word.sense.length === 0) return;

        const hasCommonKanji = word.kanji?.some(k => k.common);
        const hasCommonKana = word.kana?.some(k => k.common);
        if (!hasCommonKanji && !hasCommonKana) return;

        word.sense.forEach(sense => {
            // Skip if no partOfSpeech or gloss
            if (!sense.partOfSpeech || !sense.gloss) return;

            // Skip rare/archaic/obsolete words
            const isRare = sense.misc?.includes("rare") ||
                sense.tags?.includes("rare") ||
                sense.misc?.includes("arch") ||
                sense.misc?.includes("obs");
            if (isRare) return;

            // Check for N5 parts of speech
            const isNoun = sense.partOfSpeech.includes("n");
            const isAdjI = sense.partOfSpeech.includes("adj-i"); // い-adjective
            const isAdjNa = sense.partOfSpeech.includes("adj-na"); // な-adjective

            if (isNoun || isAdjI || isAdjNa) {
                const entry = {
                    id: word.id,
                    kanji: word.kanji?.filter(k => k.common).map(k => k.text) || [],
                    kana: word.kana?.filter(k => k.common).map(k => k.text) || [],
                    partOfSpeech: isNoun ? "noun" : isAdjI ? "い-adjective" : "な-adjective",
                    meanings: sense.gloss.map(g => g.text),
                    // Optional: Include other metadata (e.g., tags, misc)
                    tags: [...new Set([...(word.kanji?.flatMap(k => k.tags) || []), ...(sense.tags || [])])],
                    misc: sense.misc || []
                };
                n5Words.push(entry);
            }
        });
    });

    return n5Words;
}
