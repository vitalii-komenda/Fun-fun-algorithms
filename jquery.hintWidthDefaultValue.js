(function($) {
    
    var defaults = {
                    metering:'шт'
                   };
   
    $.fn.hintWidthDefaultValue = function(params){        
        var options = $.extend({}, defaults, params);                

        $(this).each(function(){
          var defMetering = '',
              currVal;

          if( !! $(this).attr('default') ) {
            defMetering = $(this).attr('default');
          }else{
            defMetering = options.metering;
          };              


           $(this)
            .val( $(this).val() + ' ' + defMetering )
            .focus(function(){
                var val = $(this).val();
                $(this).val(  val.substr(0, val.length-defMetering.length -1) );
            })
            .blur(function(){
                var val = $(this).val();
                $(this).val(val + ' ' +defMetering);
            });   


        });  
        return this;
    };
})(jQuery);

// example
$('.active_hint').hintWidthDefaultValue({metering: 'хлам'});
// спершу береться з input атрибута default 
// потім з конструтора {metering: 'хлам'} 
// і нарешті ставиться 'шт' якщо в попередніх нічого нема

/*
<input type="text" autocomplete="off"  class="active_hint" default="шт" value="2000"> -> default is "шт"
<input type="text" autocomplete="off"  class="active_hint"  value="50"> -> default is "хлам"
*/
 
