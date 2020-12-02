const request = require('superagent');

const fetchQuotes = async () => {
    const quotes = await request.get('http://futuramaapi.herokuapp.com/api/characters/leela')
    const randNum = quotes.body.length * Math.random();
    return quotes.body[Math.floor(randNum)];

}

module.exports = { fetchQuotes }