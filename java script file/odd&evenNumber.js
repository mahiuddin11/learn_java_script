
// odd number = 1 and event number = 2 //
// make function odd or even number finder 

function odd_eventFunder(number){
 
 for (let i = 0; i < number.length; i++) {
  var element = number[i];

  var eventOrnot = element % 2 ;

  if(eventOrnot == 0){
   console.log('This is event number:',element);
  }else{
    console.log('This is odd number:',element);
  }
  
 }

}

var number = [1,3,4,55,6,4,3,4,5,434,44,34,45,23,444,35205];
var result = odd_eventFunder(number);
console.log(result);