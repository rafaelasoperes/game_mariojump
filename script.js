const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout (() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120  && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
    
        mario.src = 'imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }
    
},10);

document.addEventListener('keydown' , jump)

    var jogar = false;
    var pontuacao = -1;
    var maximopontuacao = 0;

    function fim() {
    jogar = false;
    document.getElementById(".pipe").style.display = 'none';
    document.getElementById("obstaculo2").style.display = 'none';
    
    if(pontuacao < 0){
        pontuacao = 0; document.getElementById("pontos").innerHTML = '<center><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="javascript:;;"  class="botao"  onclick="javascript:jogue();">Play</a></center>';}
    else{ 
        document.getElementById("pontos").innerHTML = '<div align=center style=font-size:25px><br><br>Pontos: '+pontuacao+' &nbsp;&nbsp;&nbsp;&nbsp; Máximo: '+maximopontuacao+'<h1>Game Over</h1></div><center><br><br><br><br><br><br><br><a href="javascript:;;"  class="botao"  onclick="javascript:jogue();">Play</a></center>';}
    }