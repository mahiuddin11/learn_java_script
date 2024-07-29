// fibonacci ba dara 

// var fibo = [0,1];  // array pass
// for(var i =2; i<=12; i++){
//  fibo[i] = fibo[i-1]+fibo[i-2];
//  console.log(fibo[i] , fibo[i-1],fibo[i-2]);
// }


// fibonacci function create 

// function fibonacci(n){
//  var fibonac = [0,1];
//    for(var i =2 ; i<=n; i++){
//     fibonac[i]= fibonac[i-1]+[i-2]; // 1ft pod -1 plus 2n pod -2 
//    }
//    return fibonac;
// }

// var result = fibonacci(10);
// console.log(result);

/*
// iteritive way fibonacci value find
 function fibonacci(num){
  var fibo =[0,1];
  
     for(i=2; i<= num ; i++){
       fibo[i] = fibo[i-1]+[i-2];
     }

     return fibo;

 }

 var result = fibonacci(12);
 console.log(result);

 **/

 

 function fibonacci(n){
   var fibo = [0,1];  // array pass
    for(var i =2; i<=n; i++){
     fibo[i] = fibo[i-1]+fibo[i-2];
     // console.log(fibo[i] , fibo[i-1],fibo[i-2]);
    }
    return fibo;
 }

var result = fibonacci(13);
console.log(result);


/// fibonacci recurcive ways

 function refubonacci(n){
   
    if(n == 0)
    {
     return [0];
    }
    else if( n == 1 )
    {
     return [0, 1];
    }else
    {
     var fibo = refubonacci(n-1);
     var nextElement = fibo[n-1] + fibo[n-2];
     fibo.push(nextElement);
     return fibo;
    }
 }

 var result = refubonacci(10);
 console.log(result);