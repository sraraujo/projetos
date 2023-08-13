var lista = []
var cont = 0

for (var x = 0; x < 10; x++){

    var num = Math.random() * 10
    num = Number(parseInt(num))

    if ( num <= 2){
        lista.push(num)
        if (num > 2){
            console.log('aqui')
        }
    
    } else{
        num = Math.abs(num - 7)}
        
        if (num <= 2){
            lista.push(num)
            if (num <= 2){
                lista.push(num)
            }else{
                console.log(`aqui: ${num}`)
            }
        } 
    }

console.log(lista)
console.log(lista.length)
