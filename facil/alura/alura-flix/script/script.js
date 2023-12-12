function telaFilmes(){
    var areaFilmes = document.querySelector("#catalogo")

    var catalogoPoster = [
        'https://play-lh.googleusercontent.com/iga25cRhInRc30xRMmHwl5rzsdMmXH50swWZ_UJfS2WYOvDSgIsulfUG1lDGdTCzXy48',
        'https://upload.wikimedia.org/wikipedia/pt/thumb/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg/250px-The_Lord_of_the_Rings_The_Two_Towers.jpg',
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
        'https://de.web.img3.acsta.net/medias/nmedia/18/63/49/05/19393963.jpg',
        'https://f.i.uol.com.br/fotografia/2012/11/21/211950-400x600-1.jpeg',
        'https://a-static.mlcdn.com.br/470x352/poster-cartaz-besouro-azul-b-pop-arte-poster/poparteskins2/pos-03414-40x60cm/19ed2e89d11b81389da40f1531eb6c0e.jpeg',
        'https://media.fstatic.com/XbsUVpTB3OQbvYJGVTqEZYG-IRM=/322x478/smart/filters:format(webp)/media/movies/covers/2012/01/99f80e2f7b71710e5c103cf29b6786bb.jpg',
        'https://www.themoviedb.org/t/p/original/l0cFtkJXVFgOWhypHPKpWfltyyN.jpg',
        'https://m.media-amazon.com/images/I/51G1W-daYHL._SL500_.jpg', 'https://i0.wp.com/disneymovieslist.com/wp-content/uploads/2017/12/69Cz9VNQZy39fUE2g0Ggth6SBTM.jpg?fit=800%2C1200&ssl=1'
    ]

    var nomesFilmes = [
        'Assalto ao Banco Central', 'Senhor dos Anéis: As Duas Torres', 'Game of Thrones', 'Matrix', 'O Hobbit', 'Besouro Azul', 'Alienigenas do Passado', 'A Múmia', 'The Walking Dead', 'Tomorrowland']

    var linksTrailer = ['https://youtu.be/x0bLgnTINpY?feature=shared', 'https://youtu.be/VzXHFIla-O0?feature=shared', 'https://youtu.be/KPLWWIOCOOQ?feature=shared', 'https://youtu.be/2KnZac176Hs?feature=shared', 'https://youtu.be/4AKkpnCKa2I?feature=shared', 'https://youtu.be/IZw2slPIoGs?feature=shared', 'https://youtu.be/yNZMIuMjjFA?feature=shared', 'https://youtu.be/fZE8jD6fiZg?feature=shared', 'https://youtu.be/sfAc2U20uyg?feature=shared', 'https://www.youtube.com/watch?v=cXN0DHU1BOc']


    for(var i in  catalogoPoster){
        areaFilmes.innerHTML += `<a href="${linksTrailer[i]}" target="_blank">
            <div class="card"><img src="${catalogoPoster[i]}"> <p>${nomesFilmes[i]}</p></div>
        </a>`
    }
}
 