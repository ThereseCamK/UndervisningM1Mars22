

function show(){
    // let html = /*HTML*/ `
    //     <h1> Overskrift </h1>

    //     <div id="showText"> ${showText}</div>
    //     <button onclick="showtext()"> vis Text </button>

    // `;

    let html = `
        <div onclick="selectNumber(this.innerHTML)">1</div>
        <div onclick="selectNumber(this.innerHTML)">2</div>
        <div onclick="selectNumber(this.innerHTML)">3</div>
        <div> ${opendText} </div>

    `;
    appDiv.innerHTML = html;
}

function sicretView(){
    let html = `
        <h1> DU FANT DEN HEMMLIGE SIDEN</h1>
    `
    appDiv.innerHTML = html;
}