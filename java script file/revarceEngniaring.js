// revars enginiaring .. word revars

function revares(words){
 var revares = '';
 
  for(var i =0 ; i<words.length; i++){
   var char = words[i];
   revares = char + revares;
  }
  return revares;
}

var words = 'hello, I am Plane text'
var result = revares(words);
console.log('Plane text Revares Convart:',result);

