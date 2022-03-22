 //Controller

 function selectNumber(number){
    NumberPushed += number;

    opendText = NumberPushed == lockCombination ?  'Åpen' : 'Låst';
    // if(NumberPushed == lockCombination){
    //     opendText = 'Åpen';
      
    // }
    // else {
    //     opendText = 'Låst'
    // }
     show();

    //Turnarary operator 
 
 
}

function showtext(){
    //document.getElementById('showText').innerHTML = 'Hei'

    showText = '&#9734';
    show();
    
    
}
