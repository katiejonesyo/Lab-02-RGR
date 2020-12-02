const request = require('superagent');
const { fetchQuotes } =require('./fetchQuotes.js');

describe('to return a single quote', () => {
    it('to return a single quote', async () => {
        const objectFormat = {
            character: expect.anything(),
            quote: expect.anything(),
            image: expect.anything()
        }

        expect(await fetchQuotes()).toEqual(objectFormat);

    });
});