function showInfo(){
    var tallA = parseInt(tallAInput);
    var tallB = parseInt(tallBInput);
    omrekts = (tallA + tallA) + (tallB +tallB);
   
  resultatDiv = `<div style="background-color: lightblue; 
                        height: ${tallAInput}px; 
                        width: ${tallBInput}px;
  ">
    høyde er : ${tallAInput}, bredde er: ${tallBInput} 
    
    omkrets : ${omrekts} areal: ${showAreal()}</div>`;
  render();


}

function showAreal(){
    var tallA = parseInt(tallAInput);
    var tallB = parseInt(tallBInput);
   return areal = tallA * tallB;
}