
function callbackTask(name, id , task){  // mother function 
    
  if( task == manager && id == 1){
    console.log('Manager Name :',name);
    console.log('Manager Id :',id);
     task();           // task function call user type function
  }else if(task == employ && id ==2){
    console.log('Employ Name :',name);
    console.log('Employ Id :',id);
    task();
  }else if(task == coustomer && id == 3){
    console.log('coustomer Name :',name);
    console.log('Coustomer Id :',id);
    task();
  }
  
}

function manager(){ // managar function roll ways
  console.log('conterol all employ and coustomer reletionship ');
}

function employ(){ // employ function roll ways 
  console.log('all store Motitoring and serve product on coustomer');
}

function coustomer(){  // coustomer function roll ways 
  console.log('coustomer hoilo dokaner lukkhi');
  
}


callbackTask('samad', 2 , employ);

