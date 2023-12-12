var catalogoFilmes = document.getElementById("listaFilmes")

function adicionarFilme(){
    
    // Variável recebe  o link do poster
    var nomeFilme = document.querySelector("#nomeFilme").value

    // variável que recebe o nome do filme
    var linkPoster = document.querySelector("#linkPoster").value
    // ação para limpar o campo de inserir o link do poster

    if(linkPoster.indexOf('.jpg') != -1 || linkPoster.indexOf('.png') != 1 || linkPoster.indexOf('.svg') != 1 || linkPoster.indexOf('.bmp') != 1 || linkPoster.indexOf('.gif') != 1 || linkPoster.indexOf('.eps') != 1 || linkPoster.indexOf('.asp') != 1){
        
        if(nomeFilme.length == 0){
            alert('Insira um nome do filme e tente novamente!')
        
        } else if (linkPoster.length == 0){
            alert("Insira o link da imagem e tente novamente!")
        } else{
            catalogoFilmes.innerHTML += `<div class="card"><img src="${linkPoster}"><p contenteditable="true" id="txt-center">${nomeFilme}</p></div>`

            document.querySelector("#nomeFilme").value = ""  
            document.querySelector("#linkPoster").value = ""  
        }
    
    } else if (linkPoster.length == 0){
        alert("Insira o link da imagem e tente novamente!")
    }
    
    else(
        alert("Link da imagem é inválido, tente novamente!")
    )
}
