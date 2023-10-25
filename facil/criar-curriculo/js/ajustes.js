var novoDado = document.getElementById('novo-dado')
var cursoSuperior = document.getElementById('curso-superior')

var trabalho = document.querySelector(".trabalho")
var novoCurso = document.querySelector("#cursoExtra")


function adicionar(){
    var numero = sortearNumero()

    cursoSuperior.innerHTML += `<div class="div-espaco" contenteditable="true"><p><label for="iuniversidade-${numero}">Universidade:</label><input type="text" name="universidade-${numero}" id="iuniversidade-${numero}" placeholder="Nome da universidade" class="inputLargo"></p><p><label for="icurso-${numero}">Curso:</label><input type="text" name="curso-${numero}" id="icurso-${numero}" placeholder="Nome do curso" class="inputLargo"></p><p><label for="iduracao-${numero}">Período:</label><input type="text" name="periodo-${numero}" id="iduracao-${numero}" placeholder="digite o período"></p></div>`
}


function adicionarTrabalho(){
    var numero = sortearNumero()

    trabalho.innerHTML += `<div class="div-espaco" contenteditable="true"><p><label for="iempresa-${numero}">Empresa:</label> <input type="text" name="empresa-${numero}" id="iempresa-${numero}" placeholder="Nome da empresa"></p><p><label for="icargo-${numero}">Cargo:</label><input type="text" name="cargo-${
        numero}" id="icargo-${numero}" placeholder="Digite o cargo"></p><p><label for="ilocal-${numero}">Local:</label><input type="text" name="Local-${numero}" id="ilocal-${numero}" placeholder="Digite o bairro / cidade"></p><p><label for="iperiodo-${numero}">Período</label><input type="text" name="periodo-${numero}" id="iperiodo-${numero}" placeholder="Tempo de serviço"></p></div>`
}


function AdicionarCurso(){
    var numero = sortearNumero()
    novoCurso.innerHTML +=`<div class="div-espaco" contenteditable="true"><p><label>Curso:</label><input type="text" placeholder="Nome do curso" class="inputLargo"></p><p><label>Instituição:</label><input type="text" placeholder="Nome da instituição" class="inputLargo"></p><p><label>Carga Horária:</label><input type="text" placeholder="Digite a carga horária"></p></div>`
}


function dicas(){
    window.alert("OBS1: Todos os campos são editáveis. \nOBS2: Insira novos blocos de informações antes de preencher. \nOBS3: Para desfazer alterações pressione Ctrl+Z ou atualize a página")
}


function sortearNumero(){
    var sorteado = new Date()
    return sorteado.getMilliseconds() 
}
