const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    
    it('normalHill distance > kPoint', () => {
        const actual = calculateTotalPoints( 111, 'normal', 98, [19, 19.5, 19, 19, 19], -14.4, 3.2 );
    
        const expected = 131.8;
    
        assert.equal(actual, expected);
    });

    it('normalHill distance < kPoint', () => {
        const actual = calculateTotalPoints( 95, 'normal', 98, [17, 17, 17.5, 17.5, 17.5], -14, 0 );

        const expected = 92;

        assert.equal(actual, expected);
    });


    it('bigHill distance > kPoint', () => {
        const actual = calculateTotalPoints( 34, 'big', 120, [19, 20, 19.5, 19, 18.5], -4.4, 0 );

        const expected = 137.3;
    
        assert.equal(actual, expected);
    });

    it('bigHill distance < kPoint', () => {
        const actual = calculateTotalPoints( 119, 'big', 120, [17.5, 17.5, 18, 17.5, 17.5], -2.1, 0 );

        const expected = 108.6;

        assert.equal(actual, expected);
    });

    it('mamutHill distance > kPoint', () => {
        const actual = calculateTotalPoints( 227.5, 'mamut', 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7 );

        const expected = 208.3;
    
        assert.equal(actual, expected);
    });

    it('bigHill distance < kPoint', () => {
        const actual = calculateTotalPoints( 206, 'mamut', 200, [15.5, 16.5, 15.5, 15.5, 16], -2.7, 0 );

        const expected = 171.5;

        assert.equal(actual, expected);
    });

});
