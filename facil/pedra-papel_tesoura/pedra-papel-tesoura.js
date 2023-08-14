var resposta = document.getElementById('resposta')
var escolha = document.getElementsByName('ppt')

var vitoria = 0
var derrota = 0

function jogar(){

    var escolha_maquina = validador() 

    // Trocando termos por números:
    // Pedra = 0, Papel = 1.  Tesosura = 2

    resposta.innerHTML = `<hr>`

    // MINHA ESCOLHA - PEDRA
    if (escolha[0].checked){

        // PEDRA x PEDRA
        if (escolha_maquina == 0){
            resposta.innerHTML += `Pedra (✊🏼) x (✊🏼) Pedra`
            resposta.innerHTML += `<p id="laranja">EMPATE</p>`
        
        // PEDRA x PAPEL
        } else if (escolha_maquina == 1){
            resposta.innerHTML += `Pedra (✊🏼) x (👋🏼) Papel`
            resposta.innerHTML += `<p id="vermelho">PERDI</p>`
            derrota += 1
        
        // PEDRA x TESOURA
        }else if (escolha_maquina == 2){  
            resposta.innerHTML += `Pedra (✊🏼) x (✂️) Tesoura`
            resposta.innerHTML += `<p id="verde">VENCI</p>`
            vitoria += 1
        }
    
    // MINHA ESCOLHA - PAPEL
    } else if (escolha[1].checked){

        // PAPEL x PEDRA
        if (escolha_maquina == 0){
            resposta.innerHTML += `<p> Papel (👋🏼) x (✊🏼) Pedra</p>`
            resposta.innerHTML += `<p id="verde">VENCI</p>`
            vitoria += 1
        
        // PAPEL X PAPEL
        }else if (escolha_maquina == 1){
            resposta.innerHTML += `<p> Papel (👋🏼) x (👋🏼) Papel</p>`
            resposta.innerHTML += `<p id="laranja">EMPATE</p>`
        
        // PAPEL x TESOURA
        }else if (escolha_maquina == 2){
            resposta.innerHTML += `<p> Papel (👋🏼) x (✂️) Tesoura</p>`
            resposta.innerHTML += `<p id="vermelho">PERDI</p>`
            derrota += 1
        }

    // MINHA ESCOLHA + TESOURA
    }else if (escolha[2].checked){
        
        // TESOURA x PEDRA
        if (escolha_maquina == 0){
            resposta.innerHTML += `Tesoura (✂️) x (✊🏼) Pedra`
            resposta.innerHTML += `<p id="vermelho">PERDI</p>`
            derrota += 1
        
        // TESOURA x PAPEL
        } else if (escolha_maquina == 1){
            resposta.innerHTML += `Tesoura (✂️) x (👋🏼) Papel`
            resposta.innerHTML += `<p id="verde">VENCI</p>`
            vitoria += 1
        
        // TESOURA x TESOURA
        }else if (escolha_maquina == 2){
            resposta.innerHTML += `Tesoura (✂️) x (✂️) Tesoura`
            resposta.innerHTML += `<p id="laranja">EMPATE</p>`
        }
    }

    resposta.innerHTML += `<hr>`
    resposta.innerHTML += `<span id="verde">Vitória ${vitoria}</span> x <span id="vermelho">${derrota} Derrota</span>`
}

function validador(){
    var numero = Math.random();
    numero = parseInt(numero * 10)

    while (numero > 2 ){
        numero = Math.random() * 10
        numero = parseInt(numero)
    }

    return numero
}

function limpar(){
    resposta.innerHTML = ''
    vitoria = 0
    derrota = 0
}
