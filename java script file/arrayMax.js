
// array max number find 

var studentNumber = [1,4,45,32,34,45,23,35,67,75];
var max = studentNumber[0];

for(var i =0; i< studentNumber.length; i++){
  var element = studentNumber[i];

  if(element > max ){
   max = element;
  }
}
  console.log(max);


  // array max function create 

  function arrayMaxValue(array){
   var max = array[0];
   
   for(var i = 0 ; i < array.length ; i++){
    var element = array[i];

    if(element > max ){
     max = element;
    }

   }
   return max;
  }

  var array = [12,21,54,55,547,44,45,450];
  var result = arrayMaxValue(array);
  console.log('This is our Array Max vaule : ',result);
