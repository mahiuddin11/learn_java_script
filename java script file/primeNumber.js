// prime number ba moulik sogkha 

var n = 11;

for(i=2; i<=n-1; i++){
  // prime number find
  if(n % i == 0){
   console.log('No, its not a prime number');
   break;  
  }else{
   console.log('Yes,its ',i,' a prime number');
   break;
  }

}

// prime number checker  function 
function primeNumber_Checker(number){

    for(i=2; i<=number-1; i++){

     if(number % i == 0){
       console.log('NO, ',number ,' Its Not a Prime Number ');
       break;
     }else{
      console.log('Yes, ',number ,' Its is a prime Number');
      break;
     }
    
    }
}

var result = primeNumber_Checker(13);
console.log(result);