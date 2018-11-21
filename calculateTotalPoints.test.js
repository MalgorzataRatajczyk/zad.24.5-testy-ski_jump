const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    
    it('normalHill distance > kPoint', () => {
        const actual = calculateTotalPoints( 100, 'normal', 98, [1, 2, 1, 1, 1], 0, 1 ).toFixed(2);
    
        const expected = 106.00;
    
        assert.equal(actual, expected);
    });

    it('normalHill distance < kPoint', () => {
        const actual = calculateTotalPoints( 95, 'normal', 98, [2, 2, 2, 1, 1], -1, 0 );

        const expected = 96.00;

        assert.equal(actual, expected);
    });


    it('bigHill distance > kPoint', () => {
        const actual = calculateTotalPoints( 125, 'big', 120, [1, 2, 3, 2, 1], -4, 0 );

        const expected = 130.00;
    
        assert.equal(actual, expected);
    });

    it('bigHill distance < kPoint', () => {
        const actual = calculateTotalPoints( 110, 'big', 120, [2, 3, 3, 1, 1], 2, 1 );

        const expected = 120.00;

        assert.equal(actual, expected);
    });

    it('mamutHill distance > kPoint', () => {
        const actual = calculateTotalPoints( 210, 'mamut', 200, [2, 4, 5, 2, 1], -4, 8 );

        const expected = 224.00;
    
        assert.equal(actual, expected);
    });

    it('bigHill distance < kPoint', () => {
        const actual = calculateTotalPoints( 190, 'mamut', 200, [1, 4, 6, 4, 2], -2, 0 );

        const expected = 196.00;

        assert.equal(actual, expected);
    });

});
