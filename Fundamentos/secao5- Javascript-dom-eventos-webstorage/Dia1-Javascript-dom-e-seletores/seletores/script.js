const cabecalho = document.getElementById('header-container');
cabecalho.style.background='#3CB371';

const urgentes= document.querySelector('.emergency-tasks');
urgentes.style.background='#FFA07A';

const naoUrgentes= document.querySelector('.no-emergency-tasks');
naoUrgentes.style.background='#F0E68C';

const urgentesTitulos= document.querySelectorAll('.emergency-tasks h3');
urgentesTitulos[0].style.background='#A020F0';
urgentesTitulos[1].style.background='#A020F0';

const naoUrgentesTitulos= document.querySelectorAll('.no-emergency-tasks h3');
naoUrgentesTitulos[0].style.background='#000000';
naoUrgentesTitulos[1].style.background='#000000';


const rodape = document.getElementById('footer-container');
rodape.style.background='#2F4F4F ';