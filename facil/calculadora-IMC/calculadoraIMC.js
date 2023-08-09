var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var resposta = document.getElementById('resposta')

function calcularIMC(){

    if (peso.value.length == 0 || peso.value <= 0 || altura.value.length == 0 || altura.value <= 0){
        alert('[ ERRO ] - Campo "Peso/Altura" inválido, tente novamente!')
    
    } else{
        var p = Number(peso.value)
        var h = Number(altura.value)

        var imc = (p / h ** 2).toFixed(2)

        if ( imc <= 18.5){
            resposta.innerHTML = ` <strong>IMC:</strong> ${imc}  - Abaixo do peso`
            resposta.innerHTML += `<p id="extra"><strong>Dica: </strong>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>`
        
        } else if ( imc >= 18.6 && imc <= 24.9){
            resposta.innerHTML = ` <strong>IMC:</strong> ${imc}  - Peso ideal, Parabéns!`
            resposta.innerHTML += `<p id="extra"> <strong>Dica: </strong> Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>`
        
        } else if (imc >= 25 && imc < 30){
            resposta.innerHTML = ` <strong>IMC:</strong> ${imc}  - Levemente acima do peso. <br>`
            resposta.innerHTML += `<p id="extra"><strong>Dica: </strong>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>`
        
        } else if (imc >= 30 && imc < 35){
            resposta.innerHTML = ` <strong>IMC:</strong> ${imc}  - Obesidade, Grau I`
            resposta.innerHTML += `<p id="extra"><strong>Dica: </strong>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>`

        } else if (imc >= 35 & imc < 40){
            resposta.innerHTML = ` <strong>IMC:</strong> ${imc}  - Obesidade, Grau II (SEVERA)`
            resposta.innerHTML += `<p id="extra"><strong>Dica: </strong>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>`
        
        } else if(imc >= 40){
            resposta.innerHTML = ` <strong>IMC:</strong> ${imc}  - Obesidade, Grau III (MÓRBIDA)`
            resposta.innerHTML += `<p id="extra"><strong>Dica: </strong>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>`
        }
    }
}

function limpar(){
    peso.value = ''
    altura.value = ''
    resposta.innerHTML = 'Preencha os dados acima <br> para ver o resultado aqui!'
}
