// var num =[1,3,4,5,6,7,8];
// console.log(num);

// // arry theke data finding
// console.log(num[3]);
// console.log(num[7]);


// //secend variable
var num2 =[
 12,34,45,56,33,32
];

var find = num2.indexOf(45);
console.log(find);

// //array data update

console.log(num2);
 var update = num2[1]=20;
 console.log(update);
 console.log(num2);

//  // array data added or push
console.log(num2);
var num_push = num2.push(50,55);
console.log(num2);

// //array data remove 
var num_remove = num2.pop();
console.log(num2);

// // array fast directon data add 
//  num2.unshift(10)
// console.log(num2);


// //arry fast directon data remove use shift
// num2.shift();
// num2.shift();
// console.log(num2);



// // Pluse function working done
var num =[1,2,3,4,5,6,7,8,9];

var num1 = 10
var num2 = 2

var sum = (num1+num2);
console.log(sum);

// // subtititoan founction working 
var num1 = 256545
var num2 = 1255

var sub = (num1/num2);
console.log(sub);


// // whole apply

var num = 0;
while(num<10){
 console.log(num);
 num = num +1
}

var num =0;
while(num<15){
 console.log(num)
num = num +1;
}

// for loop function

for(var i=0; i<10; i++){
 console.log(i);
}

var nums =[20,44,55,67,32,45,23,45,23,56];

for( var i=0; i<nums.length; i++){
 var element = nums[i];
 console.log(element);
}

var id = [1,23,4,5,234,544,2,1,24,45];
for(var i=0; i<id.length; i++){
 console.log(id[i]);

}




// function emplement
function hi(){
 var text = 'hello i am function'
 console.log(text);
}

hi();

// dabul functon 
var value = 10
function doublicate(num){
 var result =num*2;
 console.log(result);
}

doublicate(value);

/// functon er addition  peramitar pass
function doubol(num){
var result =num*2
return result;
}

var num1 = doubol(33);
var num2 = doubol(10);
console.log(num1,num2);
var sum = num1*num2;
console.log(sum);



// doubol peramitar use pass 
function add(num1 ,num2){
 var result =num1 +num2;
return result;
}

var sum = add(10,15);
console.log(sum);

// inch to fit caulculeter



function feet(inch){
 var feetvalue = inch/12;
 return feetvalue;
}

var value = feet(6220);
console.log(value);

var nanaHisab = feet(123456);
console.log(nanaHisab);