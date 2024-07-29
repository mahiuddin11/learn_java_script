
// max number find basic part
var num1 = 250;
var num2 = 2000;

if(num1 > num2){
 console.log(num1,'number is beger then',num2);
}else{
 console.log(num1,' this number is not beger then',num2);
}

// Three number checker biger
var a = 25000;
var b = 1000;
var c = 5000;


if ( a > b){

     if(a > c){
      console.log('a number is big');
     }else{
      console.log('c number is big');
     }

}else{
    if(b > c){
     console.log('b number is big');
    }else{
     console.log('c number is big');
    }
}

// function create 

function bigNumber(a,b,c){
     if ( a > b){
         if(a > c){
          console.log('a number is big');
         }else{
          console.log('c number is big');
         }

    }else{
        if(b > c){
         console.log('b number is big');
        }else{
         console.log('c number is big');
        }
    }
}


var checkNumner = bigNumber(120 ,200 , 25);
console.log(checkNumner);


/// max function 

var a =100;
var b = 200;
var c = 150;
var d =450;

var maxNumber = Math.max(a,b,c,d);
console.log(maxNumber);