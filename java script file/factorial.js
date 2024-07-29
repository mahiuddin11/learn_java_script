// factorial function 

// 3! = 1*2*3
// 5! = 1*2*3*4*5
//10! = 1*2*3*4*5*6*7*8*9*10
// var factorial = 1;
// for(var i = 1; i <= 10; i++ ){
//   var factorial = factorial * 1;
//  console.log(i, factorial)
// }

// iterial methord when useing factorial forloop and whil loop
/*

function factorial(n){
 var factorial = 1;
 for(var i=1; i<=n; i++){
  factorial = factorial * i;
 }
 return factorial;
}

var result = factorial(5);
console.log(result );
**/
/*
var factorial =1;
for(var i=1; i<=10; i++){
 factorial = factorial * i;
 console.log(i, factorial);
}
 **/

/*
function factorial(num){
    var factorial = 1;
    for(var i=1; i<=num; i++){
     factorial=factorial * i;
    }
    return factorial;
}

var result = factorial(3);
console.log(result);
**/

// using whileloop make factorial function

// var i = 1;
// var factorial =1;
// while(i<=10){
//  factorial = factorial*i;
//  console.log(i, factorial);
//  i++;
// }

// Recarchive way factorial function create 
function factorial(n){
 var i =1;
 var factor =1;
 while(i<=n){
  factor = factor * i;
  i++;
 }
 return factor;
}

var result = factorial(15);
console.log(result);
