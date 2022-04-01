 //Controller

 function selectNumber(number){

    if(NumberPushed.length < 4){
       
    NumberPushed += number;
  
       
    }
    else {
        errorMessage = 'Du har tastet inn for mange tall'
    }


    //opendText = NumberPushed == lockCombination ?  'Åpen' : 'Låst';


    if(NumberPushed == lockCombination){
        opendText = 'Åpen';
      
    }

    else {
        opendText = 'Låst';
    }
     show();

    //Turnarary operator 
 
 
}

function showtext(){
    //document.getElementById('showText').innerHTML = 'Hei'

    showText = 'Hei';
    show();
    
    
}
