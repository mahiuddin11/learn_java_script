
//leep year count function make

// function leepyear(year){
//  var leepyear = year/4
//  return leepyear;
// }


// let years = 2028;
// const bagshes = year % 4;  // bagshes or modulas check 
// console.log(bagshes);

// if(bagshes == 0){
//  console.log('Yes, this Year is Leepyear');
// }else{
//  console.log('No, This year not Leepyear');
// }



// leepyear function create

function leepyear(year){  // year name peramitar pass 
 const modulas = year % 4;  // year er mudulas or bagshes find 0 or not 
 const dibag400 = year /400;  
 const dibag100 = year/100;

 if(modulas == 0 ){  // check modulas value 0 or not 
  return true;   // when modulas value 0 then return true
 }else{
  return false;  // when modulas value not  0 then return fales
 }

}
const year = 2032;   //year value pass
const checkYear = leepyear(year);  // call leepyear function 
console.log(checkYear);

if(checkYear == true){
 console.log('yes, This Year Is leepyear');
}else{
  console.log('No, This Year Not  leepyear');
}