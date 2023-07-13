const index = require('./data/index.json');
const meta = require('./data/meta.json');
const comp = require('./data/comp.json');


var stemmer=function(){function h(){}function i(){console.log(Array.prototype.slice.call(arguments).join(" "))}var j={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},k={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""};return function(a,l){var d,b,g,c,f,e;e=l?i:h;if(3>a.length)return a;
    g=a.substr(0,1);"y"==g&&(a=g.toUpperCase()+a.substr(1));c=/^(.+?)(ss|i)es$/;b=/^(.+?)([^s])s$/;c.test(a)?(a=a.replace(c,"$1$2"),e("1a",c,a)):b.test(a)&&(a=a.replace(b,"$1$2"),e("1a",b,a));c=/^(.+?)eed$/;b=/^(.+?)(ed|ing)$/;c.test(a)?(b=c.exec(a),c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(b[1])&&(c=/.$/,a=a.replace(c,""),e("1b",c,a))):b.test(a)&&(b=b.exec(a),d=b[1],b=/^([^aeiou][^aeiouy]*)?[aeiouy]/,b.test(d)&&(a=d,e("1b",b,a),b=/(at|bl|iz)$/,f=/([^aeiouylsz])\1$/,d=/^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,
    b.test(a)?(a+="e",e("1b",b,a)):f.test(a)?(c=/.$/,a=a.replace(c,""),e("1b",f,a)):d.test(a)&&(a+="e",e("1b",d,a))));c=/^(.*[aeiouy].*)y$/;c.test(a)&&(b=c.exec(a),d=b[1],a=d+"i",e("1c",c,a));c=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;c.test(a)&&(b=c.exec(a),d=b[1],b=b[2],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(d)&&(a=d+j[b],e("2",c,a)));c=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
    c.test(a)&&(b=c.exec(a),d=b[1],b=b[2],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(d)&&(a=d+k[b],e("3",c,a)));c=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;b=/^(.+?)(s|t)(ion)$/;c.test(a)?(b=c.exec(a),d=b[1],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(d)&&(a=d,e("4",c,a))):b.test(a)&&(b=b.exec(a),d=b[1]+b[2],b=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,
    b.test(d)&&(a=d,e("4",b,a)));c=/^(.+?)e$/;if(c.test(a)&&(b=c.exec(a),d=b[1],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,b=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$/,f=/^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,c.test(d)||b.test(d)&&!f.test(d)))a=d,e("5",c,b,f,a);c=/ll$/;b=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/;c.test(a)&&b.test(a)&&(c=/.$/,a=a.replace(c,""),e("5",
    c,b,a));"y"==g&&(a=g.toLowerCase()+a.substr(1));return a}}();

const stopwords = ['i','me','my','myself','we','our','ours','ourselves','you',"you're","you've","you'll","you'd",'your',
'yours','yourself','yourselves','he','him','his','himself','she',"she's",'her','hers','herself','it',"it's",'its','itself',
'they','them','their','theirs','themselves','what','which','who','whom','this','that',"that'll",'these','those','am','is',
'are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if',
'or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before',
'after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there',
'when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same',
'so','than','too','very','s','t','can','will','just','don',"don't",'should',"should've",'now','d','ll','m','o','re','ve','y','ain',
'aren',"aren't",'couldn',"couldn't",'didn',"didn't",'doesn',"doesn't",'hadn',"hadn't",'hasn',"hasn't",'haven',"haven't",'isn',"isn't",
'ma','mightn',"mightn't",'mustn',"mustn't",'needn',"needn't",'shan',"shan't",'shouldn',"shouldn't",'wasn',"wasn't",'weren',"weren't",
'won',"won't",'wouldn',"wouldn't", '!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',
']','^','_','`','{','|','}','~']

function cleaner(text) {
    text = text.replace(/http\S+|www\S+|https\S+/g, '').toLowerCase();
    let words = text.split(/\W+/);
    words = words.filter(word => !stopwords.includes(word) && !word.startsWith('#') && word.length > 0);
    words = words.map(word => stemmer(word));
    return words;
}

function whisper(searchQuery, n_results = 3) {
    let queryResult = {};
    let query = cleaner(searchQuery);
    for (let i = 0; i < query.length; i++) {
        let queryTerm = query[i];
        let postings = index[queryTerm];
        if (!postings) continue;
        for (let [emo, score] of Object.entries(postings.emojis)) {
            if (!queryResult[emo]) queryResult[emo] = {query: queryTerm, raw: emo, score: 0};
            queryResult[emo].score += score;
        }
    }

    let allEmojis = Object.entries(queryResult);
    allEmojis.sort((a, b) => b[1].score - a[1].score);
    let topEmojis = allEmojis.slice(0, n_results);
    return topEmojis.map(emo => {
        let em = meta[emo[0]].split(',');
        return em.map(e => comp[e]).join('');
    });
}


function calculateWordScores(phrases) {
    let frequency = {};
    let degree = {};
    let wordScore = {};
    
    phrases.forEach(phrase => {
        let numWords = phrase.length;
        let words = phrase.split(' ');

        words.forEach(word => {
            frequency[word] = (frequency[word] || 0) + 1;
            degree[word] = (degree[word] || 0) + numWords - 1;
        });
    });

    for (let word in frequency) {
        wordScore[word] = degree[word] / frequency[word];
    }
    return wordScore;
}

function calculatePhraseScores(phrases, wordScores) {
    let phraseScores = {};
    phrases.forEach(phrase => {
        let phraseScore = 0;
        let words = phrase.split(' ');

        words.forEach(word => {
            phraseScore += wordScores[word];
        });
        phraseScores[phrase] = phraseScore;
    });
    return phraseScores;
}

function rake(text) {
    let words = text.split(' ');
    let phrases = [];
    let phrase = '';

    words.forEach(word => {
        if (stopwords.includes(word)) {
            if (phrase) {
                phrases.push(phrase.trim());
                phrase = '';
            }
        } else {
            phrase += `${word} `;
        }
    });
    if (phrase) {
        phrases.push(phrase.trim());
    }

    let wordScores = calculateWordScores(phrases);
    let phraseScores = calculatePhraseScores(phrases, wordScores);
    let sortedPhrases = Object.entries(phraseScores);
    sortedPhrases.sort((a, b) => b[1] - a[1]);
    return sortedPhrases;
}

function decorate(searchQuery, emoji_density = 1, randomness = 1) {
    if (randomness < 0 || randomness > 1) {
        throw new Error("Randomness must be a value between 0 and 1.");
    }

    if (emoji_density < 0 || emoji_density > 1) {
        throw new Error("Emoji density must be a value between 0 and 1.");
    }

    let phrases = rake(searchQuery);
    let numPhrases = Math.max(1, Math.ceil(emoji_density * phrases.length));
    let topPhrases = phrases.slice(0, numPhrases);
    let emojis = topPhrases.map(phrase => {
        let numEmojis = Math.max(1, Math.ceil(randomness * 10));
        let emojis = whisper(phrase[0], numEmojis);
        let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        return { phrase: phrase[0], emoji: randomEmoji };
    });
    let result = searchQuery;
    emojis.forEach(({ phrase, emoji }) => {
        if(emoji){
            result = result.replace(phrase, `${phrase} ${emoji}`);
        }
    });
    return result;
}

module.exports.whisperer = {whisper, decorate};
