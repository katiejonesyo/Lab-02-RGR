const { copyAndPush } = require('./copyAndPush.js');

describe('copyAndPush', () => {
    const numbers = [1, 2, 3];
    
    it('add item to array and return array', () => {
        const result = copyAndPush(numbers, 4);
        expect(result).toEqual([1, 2, 3, 4])
    })

    it('makes sure that the original array is unchanged', () => {
        expect(numbers).toEqual([1, 2, 3])
    })
});