var digitos = 0
var senha = []


function gerandoSenha(){
    var total_digitos = document.getElementById('digitos')
    var resposta = document.getElementById('resposta')
    var formato_senha = document.getElementsByName('nlm')

   if (total_digitos.value.length == 0 || total_digitos.value < 8 || total_digitos.value > 99) {
        alert('[ ERRO ] - Digite um número entre [ 8 e 99 ]')
   
    } else{
        total_digitos = Number(total_digitos.value)
              
        resposta.innerHTML = ''

        // senha númerica
        if (formato_senha[0].checked){

            senha_mostrar = criandoSenha(total_digitos, opcao = 1)

        // senha alfabética
        }else if (formato_senha[1].checked){
            senha_mostrar = criandoSenha(total_digitos, opcao = 2)

        // senha com números e letras
        }else if (formato_senha[2].checked){
            senha_mostrar = criandoSenha(total_digitos, opcao = 3)
       }

       // retorna a senha final
       resposta.innerHTML = `${senha_mostrar}`

       digitos = 0
       senha = []
    }
}


function criandoSenha(total_digitos=0, opcao){
    
    // aqui gera apenas a senha de números
    if (opcao == 1){
        while (digitos < total_digitos){

            var numero_sorteado = sortearNumero()
            senha.push(numero_sorteado)
            digitos += 1
        }
    
        var senha_gerada = senha.join('')
        return senha_gerada

    // aqui gera apenas a senha de letras
    } else if (opcao == 2){
        while (digitos < total_digitos){

            var numero_sorteado = sortearLetra()           
            senha.push(numero_sorteado)
            digitos += 1
        }
    
        var senha_gerada = senha.join('')
        return senha_gerada

    // aqui gera a senha de números e letras
    } else if (opcao == 3){
        while (digitos < total_digitos){

            var numero_sorteado = sortearNumerosLetras()
            senha.push(numero_sorteado)
            digitos += 1
        }
    
        var senha_gerada = senha.join('')
        return senha_gerada

    }
}


function sortearNumero(){
    return Math.floor(Math.random() * 10)
}


function sortearLetra(){
    var letra_sorteada = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    var condicao = Math.floor(Math.random() * 10)

    if ( condicao % 2 == 0){
        letra_sorteada = letra_sorteada.toLocaleLowerCase()  
    } 

    return letra_sorteada 
}


function sortearNumerosLetras(){

    var numero_letra_verificar = Math.random()
    var numero_letra = numero_letra_verificar    

    // variável para receber dígito albabético
    numero_letra_verificar = Math.floor(numero_letra_verificar * 10)
    
    // variável para receber dígito numérico
    var numero = Math.floor(Math.random() * 10)

    //compara para sortear o digito número ou letra
    if( numero_letra_verificar > numero){
        
        var valor = String.fromCharCode(65+Math.floor(numero_letra* 26))

        // caso o núemro sorteado seja par, vai gerar uma letra maiúscula
        if (numero_letra_verificar % 2 == 0){
            valor = valor.toLocaleUpperCase()
        
        // caso o núemro sorteado seja ímpar, vai gerar uma letra minúscula            
        } else if (numero_letra_verificar % 2 == 1) {
            valor = valor.toLocaleLowerCase()

        }

        return valor

    } else if (numero >= numero_letra_verificar){
        return numero
    }
}
