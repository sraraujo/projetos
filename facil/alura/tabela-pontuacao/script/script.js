var paulo = {
    nome: "Paulo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var rafa = {
    nome: "Raulo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}


function adicionarVitoria(jogador){
    jogador.vitoria++
    jogador.pontos += 3
    console.log(jogador)

    atualizarTabela()
}


function adicionarEmpate(jogador){
    jogador.empate++
    jogador.pontos += 1

    atualizarTabela()
}


function adicionarDerrota(jogador){
    jogador.derrota++

    atualizarTabela()
}
  

var elementoTabela = document.getElementById("tabelaJogadores")

atualizarTabela()

function atualizarTabela(){
    elementoTabela.innerHTML = `
        <tr>
            <td>${paulo.nome}</td>
            <td>${paulo.vitoria}</td>
            <td>${paulo.empate}</td>
            <td>${paulo.derrota}</td>
            <td>${paulo.pontos}</td>
            <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
            <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
        </tr>
    `
}