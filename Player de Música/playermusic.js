let musicas = [
    {titulo: 'Blue Dream', artista:'Cheel' , src:'músicas/Blue Dream - Cheel.mp3', img:'img/laura-vinck-Hyu76loQLdk-unsplash.jpg'},
    {titulo: 'I Feel It All So Deeply', artista:'Bail Bonds' , src:'músicas/I Feel It All So Deeply - Bail Bonds.mp3', img:'img/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg'},
    {titulo: 'Caballero', artista:'Ofshane' , src:'músicas/Caballero - Ofshane.mp3', img:'img/silivan-munguarakarama-NrR9gn3lFKU-unsplash.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }

    renderizarMusica(indexMusica);
});


document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    
});

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

//funções
function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();

    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

  function segundosParaMinutos(segundos){
     let campoMinutos = Math.floor(segundos / 60);
     let campoSegundos = segundos % 60;

     if (campoSegundos < 10){
         campoSegundos = '0' + campoSegundos;
     }
  return campoMinutos+":"+campoSegundos;
   
    }
