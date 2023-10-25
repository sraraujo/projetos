//const previewImg = document.querySelector('.preview-img');
const fileChooser = document.querySelector('.file-chooser');
const fileButton = document.querySelector('.file-button');

fileButton.onclick = () => fileChooser.click();

fileChooser.onchange = e => {
    const areaFoto = document.querySelector("#area-foto")
    areaFoto.innerHTML = `<img class='preview-img'/>`

    // variavel creferente a foto
    const previewImg = document.querySelector('.preview-img')
    // arquivo que faremos o upload
    const fileToUpload = e.target.files.item(0);

    const reader = new FileReader();

    // evento disparado quando o reader terminar de ler 
    reader.onload = e => previewImg.src = e.target.result;

    // solicita ao reader que leia o arquivo 
    // transformando-o para DataURL. 
    // Isso disparará o evento reader.onload.
    
    reader.readAsDataURL(fileToUpload);
};
