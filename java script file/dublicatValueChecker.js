// duplicate value checker 

var num = [ 3,4,5,6,6,7,8,84,44,54,56,24];
var uniqNumber =[];

for(var i =0; i<num.length; i++){
 var element = num[i];
 var index = uniqNumber.indexOf(element);

 if(index == -1){
  uniqNumber.push(element);
   
 }
console.log('This is index value:',uniqNumber);
}


// Duplicate Number remove .. unic number difine function create 

function duplicateRemove(Numbers){

 var uniqNumber=[];
 
     for(var i=0; i<Numbers.length; i++){
      var nextNumber = Numbers[i];
      var numIndex = uniqNumber.indexOf(nextNumber);

      if(numIndex == -1){
        uniqNumber.push(nextNumber);
      }
    
     }
    return uniqNumber;
}

var Numbers = [1,3,4,55,6,7,7,8,42,56,75,34,23,4,45,56,2,3,];
var result = duplicateRemove(Numbers);
console.log('This is our Unic Value :',result);