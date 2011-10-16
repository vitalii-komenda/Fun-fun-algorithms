<?php

$code = '[code]hi i code![/code] [/code][/code]sad[code] asd [/code] [code]dss';  
  
function c($text){  
  $pos1 = -1;  
  $pos2 = -1;  
  
  // потрібно щоб запустити while  
  $text = ' '.$text;   
  
  while( $pos1 = strpos($text, '[code]', $pos1+1) ){  
    $pos2 = strpos($text, '[/code]', $pos1);  
    if($pos2>$pos1) {  
      $text = substr_replace($text, '<code>', $pos1, 6);  
      $text = substr_replace($text, '</code>', $pos2, 7);  
    }  
  }  
  return ltrim($text);  
}  
echo c($code);  
// <code>hi i code!</code> [/code][/code]sad<code> asd </code> [code]dss  
