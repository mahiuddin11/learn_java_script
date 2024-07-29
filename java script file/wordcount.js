
// word count function 
var word = ' i am word counter exmple text. Now text test'; 
var result = word.length;
console.log('This is our total word :',result);

// word count function make 
function wordCount(peragrap){
  var count = peragrap.length;
  return count;
}

var peragrap ='This is our simple peragraph . Now just test word count this line word velue. Make this function';
var result = wordCount(peragrap);
console.log('This is our function peragraph value :',result);


// word space count 
 
var words = 'hello , i am word'
var count = 0;
for(var i=0; i<words.length; i++){
 var char = words[i];

 if(char == ' '){
  count++
 }
}
console.log(' Our spech count Value',count);


// word count && spech count function create 

function wordCount(words){
 var count = words.length;
 return count;
}

function wordSpechCount(words){
 var count = 0;

  for(var i=0; i<words.length; i++){
   var char = words[i];

    if(char == ' '){
     count++
    }
  }
  return count;
}

var words = 'hello , i am word counter && spech counter . and total word cont result substtion on wordspech count value '
var result = wordCount(words) - wordSpechCount(words);
console.log('This is our final result:',result);