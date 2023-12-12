var resposta = document.querySelector("#resposta")
var valor = document.querySelector("#valor")


function converter(){
    if(valor.value.length === 0){
        alert("[ ERRO ] - Digite um valor  e tente novamente!")
    
    } else if (valor.value < 0){
        alert("[ ERRO ] - Digite um valor válido  e tente novamente!")
    
    } else{
        reais = valor.value

        // U$ 1.00 === R$ 4,93 => hoje 05 / 12 / 2023
        var dolar = (reais / 4.93).toFixed(2)
        
        resposta.innerHTML = `
        <hr>
        <p>Resultado: R$${reais} em dolár é igual a <mark>U$${dolar}</mark></p>
        <hr>
        <p>OBS: U$ 1.00 dolar equivale a R$ 4,93`

        console.log(reais)

        document.getElementById("valor").value = ''
        document.getElementById("valor").focus()
    }

}

