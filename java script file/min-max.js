
var product_price = [233,453,232,34,345,565,345,245,87];
var hight_price = product_price[0];

for(var i=0; i<product_price.length; i++){
  var item = product_price[i];

  if(item > hight_price){
   hight_price = item;
  }
  
}
console.log('Product Hight Price :', hight_price);


// hight value finder function create 
function biggerNumber(numbers){
 var bignum = numbers[0];

 for(var i = 0; i<numbers.length; i++){
  var element = numbers[i];

  if(element > bignum){
   bignum = element;
  }
 }
 return bignum;
}

var numbers = [122,334,43,546,32,34,5453,45,323];
var result = biggerNumber(numbers);
console.log('This is Bigg nember ',result);



///Small number function create 

function smallNumber(numbers){
 var small = numbers[0];

 for(var i=0; i<numbers.length; i++){
  element = numbers[i];

  if(small > element){
   small = element;
  }
 }
 return small;
}
var numbers = [122,334,43,546,32,34,5453,45,323,30];
var result = smallNumber(numbers);
console.log('This is small nember ',result);