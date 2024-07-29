
/// 3rd lavel animal count  1st 10km animal total 100 pic par km 10 animal . 
// 2nd lavel 10km to 20km total animal 200 . par km animal 20 pic
// 3rd lavel 20km to 40km total animal 500 . par km animal 25 pic




function animelCount(destans){

    if(destans <=10 )
     {
      animal = destans * 10 ;
      return animal;
    }else if(destans <= 20 )
     {
     animal = destans * 20 ;
      return animal;
    }else if(destans <= 40 )
     {
     animal = destans * 25 ;
      return animal;
    }
}


var destans = 10;
var result = animelCount(destans);
console.log(result);