const engWords = require('./langs/en');
const rusWords = require('./langs/ru');

function getRandomWord(lang = 'en') {
    let wordsList;

    if (lang === 'ru') {
        wordsList = rusWords.split(' ');
    } else {
        wordsList = engWords.split(' ');
    }

    return wordsList[Math.floor(Math.random() * wordsList.length)];
}

function getRandomWords(count = 5, lang = 'en') {
    const list = [];

    for (let i = 0; i < count; i++) {
        list.push(getRandomWord(lang));
    }

    return list.join(' ');
}

module.exports = { getRandomWords, getRandomWord };