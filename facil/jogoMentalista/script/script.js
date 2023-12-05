var dica = document.getElementById("dica")
var resultado = document.getElementById("")
var chute = document.querySelector("#ichute")
var tentativas = document.getElementById("tentativas")
var numeroSecereto;

var num = 0


function jogoAdivinhar(){
    if(chute.value.length == 0){
        alert("[ ERRO ] - Digite um número! ")
        limparChute()
    
    } else if(chute.value < 1 || chute.value > 1000){
        alert("[ ERRO ] - Digite um número entre 1 e 1000.")
        limparChute()
    
    } else{

        if(chute.value > numeroSecereto){
            frase = `Número secreto é menor que ${chute.value}`
            limparChute()
        
        } else if(chute.value < numeroSecereto){
            frase = `Número secreto é maior que ${chute.value}`
            limparChute()

        } else{
            frase = `Parabéns você acertou!`
        }

        num += 1
        dica.innerText = `${frase}`
        tentativas.innerText = `${num}`
    }
}


function sortearNumero(){
    let numero = Math.floor((Math.random() * 1000) + 1)
    
    if(numero >= 1 && numero <= 1000){
        numeroSecereto = numero
        alert("Pensei eu um número, tente adivinhar!")
    }else{
        return sortearNumero()
    }
}


function limparChute(){
    chute.value = ""
    document.querySelector("#ichute").focus()
}


function resetarjogo(){
    num = 0
    dica.innerText = `tá entre 1 e 1000`
    tentativas.innerText = `0`

    sortearNumero()
    limparChute()
}
