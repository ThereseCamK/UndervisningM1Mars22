function checkNumber(inputValue){
    if(inputValue == randomNumber){
        answerText = 'Du gjettet riktig';

    }
    if(inputValue < randomNumber){
        answerText = 'Du gjettet for lavt';
    }
    if(inputValue > randomNumber){
        answerText = 'Du gjettet for høyt'
    }

    view();


}