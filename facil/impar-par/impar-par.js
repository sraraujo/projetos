var resposta = document.getElementById('resposta')
var vitoria = 0
var derrota = 0

function jogar(){
    var numero = document.getElementById('numero')
    var escolha = document.getElementsByName('impar-par')
    
    if( numero.value.length == 0){
        alert('[ ERRO ] - Você deve escolher um número entre (1 e 10)')
    
    }else if (numero.value > 10 || numero.value < 0){
        alert('[ ERRO ] - Digite um número que esteja entre (1 e 10)')
    
    }else{
        numero_meu = Number(numero.value)
        var numero_skynet = sortear_numero()
        var media = (numero_meu + numero_skynet) % 2

        // escolha sendo PAR - a mádia dando "zero" significa que a soma dos números é um número par, logo, eu ganho
        if (escolha[0].checked && media == 0){
            vitoria += 1
            resposta.innerHTML = `Eu venci: ${numero_meu} + ${numero_skynet} = ${numero_meu + numero_skynet} PAR`
        
        // escolha sendo PAR - a média dando "um", significa que a soma dos números deu um números ímpar, logo, perdi
        }else if (escolha[0].checked && media == 1){
            derrota += 1
            resposta.innerHTML = `Eu perdi: ${numero_meu} + ${numero_skynet} = ${numero_meu + numero_skynet} ÍMPAR`
        
        // escolha sendo ÍMPAR - a mádia dando "um" significa que a soma dos números é um número ímpar, logo, eu ganho
        }else if (escolha[1].checked && media  == 1){
            vitoria += 1
            resposta.innerHTML = `Eu venci: ${numero_meu} + ${numero_skynet} = ${numero_meu + numero_skynet} ÍMPAR`
        
        // escolha sendo ÍMPAR - a média dando "zero", significa que a soma dos números deu um números par, logo, perdi
        } else if (escolha[1].checked && media == 0){
            derrota += 1
            resposta.innerHTML = `Eu perdi: ${numero_meu} + ${numero_skynet} = ${numero_meu + numero_skynet} PAR`
        }
        
        resposta.innerHTML += `<hr><span id="azul">Vitória ${vitoria}</span> x <span id="vermelho">${derrota} Derrota</span>`
    }

}

function limpar(){
    vitoria = 0
    derrota = 0
    numero = ''
    resposta.innerHTML = ""
}

function sortear_numero(){
    var num = Math.random()
    num = parseInt( num * 10 + 1)
    return num
}
