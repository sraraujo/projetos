var resultado = document.getElementById('resultado')

var relogio = setInterval(function time(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundps = agora.getSeconds()

    if (hora < 10) hora = `0${hora}`
    if (minutos < 10) minutos = `0${minutos}`
    if (segundps < 10) segundps = `0${segundps}`
    
    resultado.innerHTML = `<p id="p-relogio">${hora}:${minutos}:${segundps}</p>`
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
