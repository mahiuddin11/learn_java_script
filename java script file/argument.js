
// argument apply 

function argument(num1 , num2){
 var  num = 0;

 for(var i=0; i<arguments.length; i++){
  var element = arguments[i];
  sum = sum + element;
 }
return sum;
}

var result = argument(5,1,2,4,1);
console.log(result);