function criarnovacelula(){
    document.getElementById("materia") .style.display = "block"; //função definida a partir do
    // identificador ID que foi definido como "materia" que visa exibir um campo de texto onde
    // a matéria sera digitada.//
}

function salvarCelula(event){
    event.preventDefault();

    let materia = document.getElementById("nomeMateria").value;
    let data = document.getElementById("dataEstudo").value;
    let lista = document.getElementById("listadeCelulas");

    lista.innerHTML += `
     <div> 
        <p>Matéria: ${materia}</p>
      <p>Data: ${data}</p>
      </div>  
        `;
    document.getElementById("nomeMateria").value = "";
    document.getElementById("dataEstudo").value = "";
}

function data(){
    document.getElementById("data") .style.display = "block";
}
function deletarCelula(){
    document.getElementById("deletarCelula").hidden = "true";
}