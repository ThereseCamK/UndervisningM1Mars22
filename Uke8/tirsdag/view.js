function show(){
   let html = `${navBar()} <br>`;
   html += `${model.view}`

   appDiv.innerHTML = html;
}

function navBar(){
    return `<button onclick="changePage('logIn')">Log In </button> 
    <button onclick="changePage('songs')">Sanger</button>`
}

function changePage(side){
    model.currentPage = side;
    updateView()
}
updateView();
function updateView(){
    if(model.currentPage == 'logIn') logInview();
    if(model.currentPage == 'songs') songsView();
}


function logInview(){
    model.view = `Log inn side`;
    show();
}

function songsView(){

    let html =  `<h1> Sanger i Therese sin SpilleListe</h1>`
    for(let i = 0; i < model.spotify.length; i++){
        html += `<div class="gridDiv">
                    Tittel: ${model.spotify[i].title}
                    Artist: ${model.spotify[i].artist}<br>
                    dager siden lagt til: ${model.spotify[i].dayesAdded} 
                    varighet: ${model.spotify[i].duration}
                    <img src="${model.spotify[i].img}">
        </div><hr>`
    }
    model.view = html;


    show();
}
