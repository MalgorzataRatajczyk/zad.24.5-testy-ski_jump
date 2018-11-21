const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normalHillScore', () => {
        it('should return normalHillScore', () => {
            const actual = calculateDistancePoints(90, 'normal', 98);
    
            const expected = 82;
    
            assert.equal(actual, expected);
        });

        it('should return normalHillScore', () => {
            const actual = calculateDistancePoints(110, 'normal', 98);
    
            const expected = 122;
    
            assert.equal(actual, expected);
        });
    });

    describe('bigHillScore', () => {
        it('should return bigHillScore', () => {
            const actual = calculateDistancePoints(120, 'big', 120);

            const expected = 120;

            assert.equal(actual, expected);
        });

        it('should return bigHillScore', () => {
            const actual = calculateDistancePoints(130, 'big', 120);

            const expected = 138;

            assert.equal(actual, expected);
        });

   });

    describe('mamutHillScore', () => {
        it('should return mamutHillScore', () => {
            const actual = calculateDistancePoints(190, 'mamut', 200);

            const expected = 188;

            assert.equal(actual, expected);
        });

        it('should return mamutHillScore', () => {
            const actual = calculateDistancePoints(210, 'mamut', 200);

            const expected = 212;

            assert.equal(actual, expected);
        });

    });
});