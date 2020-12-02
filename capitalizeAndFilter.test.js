const { capitalizeAndFilter } = require('./capitalzineAndFilter.js');

describe('capitalizeAndFilter', () => {
    it('takes an array of strings capitalize all strings and filter out any string that starts with the letter f.', () => {
        const arr = ['spot', 'rover', 'bingo', 'fred']
        const result = capitalizeAndFilter(arr);

        expect(result).toEqual(['SPOT', 'ROVER', 'BINGO'])
    })
});