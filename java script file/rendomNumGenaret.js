// rendom number genaret function create 

var num = 2.545;
var result = Math.floor(num); // when down (.) before value remove
console.log(result);  

//
var num = 23.404;
var result = Math.ceil(num); // when up math value befor . value
var result2 = Math.round(num); // when use close value then hi is round
var dis = Math.random(num);
console.log(result);
console.log(result2);
console.log(dis);


/// rendom Number Make 

var num = 5.26;
var numG = Math.random(num) * 1000000;  // Genaret Number Range 1000000
var genaretNumber = Math.round(numG);
console.log( 'Our New Code :',genaretNumber);


// Genaret function Create    
function numGenaret(num){
 var num1 = Math.random(num) * 100000;
 var num2 = Math.round(num1);
 return num2;
}

var result = numGenaret(2.25);
console.log('This Our New Code :',result);