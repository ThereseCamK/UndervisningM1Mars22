function leggTilFotballLag(){

    if(fotball != ''){
        fotballLag.push(fotball);
        fotball = '';
    }
  

    view();
}

function slettFotballLag(index){
    // alert(index)
    fotballLag.splice(index, 1)
    view();

}
function endreFotballLag(index){
    
    fotballLag[index] = fotball;
    view();
}