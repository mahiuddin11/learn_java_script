// array sum or total value 

var numbers = [10,12,15,14,18,50];
var sum = 0 ;

for ( var i = 0 ; i <numbers.length; i++){
 var element = numbers[i];
 sum = sum + element;
}
console.log('This is our sum Value',sum);


/// get array total or sum function 
//
function arraySum(number){
  var sum = 0 ;

  for ( var i = 0 ; i <number.length; i++){
   var element = number[i];
   sum = sum + element;
  }
  return sum;
}

var number =[10,20,54,15,47,50];
var result = arraySum(number);
console.log('This is our Total :',result);