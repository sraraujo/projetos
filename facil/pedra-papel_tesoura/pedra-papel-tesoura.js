var resposta = document.getElementById('resposta')
var escolha = document.getElementsByName('ppt')

var vitoria;
var derrota;

function jogar(){

    var escolha_maquina = validador() 

    // Trocando termos por números:
    // Pedra = 0, Papel = 1.  Tesosura = 2

    if (escolha_maquina == 0){
        resposta.innerHTML = `Pedra. ${escolha_maquina}`
        
    }else if ( escolha_maquina == 1){
        resposta.innerHTML = `Papel. ${escolha_maquina}`
    
    }else if (escolha_maquina == 2){
        resposta.innerHTML = `Tesoura. ${escolha_maquina}`
    }else{
        resposta.innerHTML = `erro: ${escolha_maquina}`
    }
}

function validador(){
    var num = Math.random() * 10
    num = parseInt(num)

    if ( num <= 2){
        return num
    
    } else{
        num = Math.abs(num - 7)}
        
        if (num <= 2){
            return num
        } else{
            validador()
        }
}
