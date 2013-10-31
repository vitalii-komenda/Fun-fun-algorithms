var assert = require("assert"),
countWords = require("../src/count_all_words.js").countWords;


describe('Function', function(){
    describe('countWords', function(){
        var search = 'the,sadasada', 
            text = 'the THE, thehostthehost sadasada';

        it('should return two items', function(){
            res = countWords(search, text); 
            assert.equal(2, Object.keys(res).length);
        });
        it('should return count with values', function(){
            res = countWords(search, text);
            assert.equal(2, res['the']);
            assert.equal(1, res['sadasada']);
        });
    })
})