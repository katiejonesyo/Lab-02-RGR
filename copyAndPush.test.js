const { copyAndPush } = require('./copyAndPush.js');

describe('copyAndPush', () => {
    it('add item to array and return array', () => {
        const numbers = [1, 2, 3];
        const result = copyAndPush(numbers, 4);

        expect(result).toEqual([1, 2, 3, 4])

    })
});