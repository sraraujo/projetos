var resultado = document.getElementById('resultado')

var relogio = setInterval(function time(){
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundps = agora.getSeconds()

var diaSemana = ''
var mesNome = ''
var dd = agora.getDate()
var mm = agora.getMonth()
var aaaa = agora.getFullYear()

if (dd < 10) dd = `0${dd}`

// o getMonth() traz o MÊS, que vai de 0 a 11
if (mm < 10) mm = `0${mm + 1}`

switch (agora.getDay()) {
    case 0:
        diaSemana = "Domingo"
        break;

    case 1:
        diaSemana = "Segunda-Feira"
        break

    case 2:
        diaSemana = "Terça-Feira"
        break

    case  3:
        diaSemana = "Quarta-Feira"
        break
        
    case 4:
        diaSemana = "Quinta-Feira"
        break

    case 5:
        diaSemana ="Sexta-Feira"
        break
        
    case 6:
        diaSemana = "Sábado"
        break
        
    default:
        break;
}

switch (agora.getMonth() + 1) {
    case 1:
        mesNome = 'Janeiro'
        break;

    case 2:
        mesNome = 'Fevereiro'
        break;

    case 3:
        mesNome = 'Março'
        break;

    case 4:
        mesNome = 'Abril'
        break;

    case 5:
        mesNome = 'Maio'
        break;

    case 6:
        mesNome = 'Junho'
        break;

    case 7:
        mesNome = 'Julho'
        break;

    case 8:
        mesNome = 'Agosto'
        break;

    case 9:
        mesNome = 'Setembro'
        break;

    case 10:
        mesNome = 'Outubro'
        break;

    case 11:
        mesNome = 'Novembro'
        break;

    case 12:
        mesNome = 'Dezembro'
        break;

    default:
        break;
}

if (hora < 10) hora = `0${hora}`
if (minutos < 10) minutos = `0${minutos}`
if (segundps < 10) segundps = `0${segundps}`

resultado.innerHTML = `<p id="p-relogio">${hora}:${minutos}:${segundps}</p>`
resultado.innerHTML += `<p id="data-completa">${diaSemana}, ${dd} de ${mesNome} de ${aaaa}</p>`
//resultado.innerHTML += `<p id="data-completa">${diaSemana}, ${dd} de ${mesNome} de ${aaaa} - ${dd}/${mm}/${aaaa}</p>`
})


/*
 var resultado = document.getElementById('resultado')

function hoje(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundps = agora.getSeconds()

    if (segundps <= 59)
    if (minutos < 10){
        minutos = `0${minutos}`
    }

    if (segundps < 10){
        segundps = `0${segundps}`
    }
    resultado.innerHTML = `<p id="p-relogio">${hora}:${minutos}:${segundps}</p>`
    
    setInterval(() => hoje(), 10000)
}
 */
