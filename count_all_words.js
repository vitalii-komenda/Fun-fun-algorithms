var word = 'the',
    text = 'the THE, thehostthehost sadasada',
    res = [],
    words = word.split(',')
    currwords = '',
    counts = 0;


for( o in words ) {
   counts = 0;
   currWords = words[ o ];

   mas = text.toLowerCase().split(' ');

   for(i in mas){
     if( currWords.toLowerCase() == mas[i].replace(/[\.,!=\\\/]/g, '') ){
       ++counts;
     }
   }
   res[res.length] = '[' + words[ o ] + ']' + ' - ' + counts;
}

console.log( res.join(', ') );
