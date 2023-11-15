var filmeMatheus = 'https://papofuradopodcast.files.wordpress.com/2022/02/the_batman_poster_10.jpg';

var filmePaizante = 'https://br.web.img3.acsta.net/medias/nmedia/18/87/29/99/19874070.jpg';

var filmeAraujo = 'https://br.web.img2.acsta.net/pictures/14/08/01/19/10/403236.jpg';

var filmeMeu = 'https://musicart.xboxlive.com/7/11601100-0000-0000-0000-000000000002/504/image.jpg';


var listaFilmes = [filmeMatheus, filmePaizante, filmeAraujo, filmeMeu];


for(i = 0; i < 4 ; i++){
    document.write('<img src=' + listaFilmes[i] + '>');
}





