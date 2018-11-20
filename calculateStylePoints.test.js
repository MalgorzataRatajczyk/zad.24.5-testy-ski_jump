const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    
    it('five different styleNotes', () => {
        const actual = calculateStylePoints([2, 4, 6, 8, 10]);
    
        const expected = '18';
    
        assert.equal(actual, expected);
    });

    it('three different styleNotes and two the same styleNotes', () => {
        const actual = calculateStylePoints([2, 4, 6, 8, 2]);
    
        const expected = '12';
    
        assert.equal(actual, expected);
    });
    
    it('five the same styleNotes', () => {
        const actual = calculateStylePoints([2, 2, 2, 2, 2]);

        const expected = '6';

        assert.equal(actual, expected);
    });

    it('two different styleNotes and three the same styleNotes', () => {
        const actual = calculateStylePoints([17, 16.5, 17.5, 17.5, 17.5]);

        const expected = '52';

        assert.equal(actual, expected);
    });
    
    it('one different styleNotes and four the same styleNotes', () => {
        const actual = calculateStylePoints([19, 19, 19, 19, 19.5]);

        const expected = '57';

        assert.equal(actual, expected);
    });
   
});