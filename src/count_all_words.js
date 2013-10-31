countWords = (function(){
  var process = function(word, text){
      var res = [],
      words = word.split(','),
      currwords = '',
      counts = 0,
      mas = text.toLowerCase().split(' ');

      for( o in words ) {
       counts = 0;
       currWords = words[ o ];       

       for(var i in mas){
         if( currWords.toLowerCase() == mas[i].replace(/[\.,!=\\\/]/g, '') ){
           ++counts;
         }
       }
       res[words[ o ]] = counts;
      }
      return res;
    }
  return process;
})();

exports.countWords = countWords;

console.log( countWords('the,sadasada', 'the THE, thehostthehost sadasada') ); // [the] - 2, [sadasada] - 1
