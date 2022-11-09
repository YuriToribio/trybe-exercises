//função que cria uma lista com os dias da semana e já coloca dinâmicamente no site.
const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'] //cria a lista com os dias da semana
    const weekDaysList = document.querySelector('.week-days'); //associa a lista com o elemento do site com classe 'week-days' que no caso é uma lista nao ordenada
  
    //esse 'for' pega o elemnto da lista com os diasda semana, cria um li, escreve nesse li o dia da semana e coloca esse li como filho da lista nao ordenada 'week-days'
    for (let index = 0; index < weekDays.length; index += 1) /*percorre toda a lista com os dias da semana*/ {
      const days = weekDays[index]; //pega o elemnto da lista e associa a uma variável days
      const dayListItem = document.createElement('li'); //cria um elemento li
      dayListItem.innerHTML = days; //escreve o dia da semana nesse novo elemento
  
      weekDaysList.appendChild(dayListItem); // faz esse novo elemento ser filho da ul 'week-days
    };
  }
  
  createDaysOfTheWeek(); //faz a chamada da função para adicionar a lista com os dias da semana
  
  // Escreva seu código abaixo.

  
  // Função que coloca dinamicamente no site os dias do mês
const criaDiasDoMes = () => {

  let listaDosDias=[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let diasDoMes = document.querySelector('#days'); // captura do elemento que será o pai da lista com os dias da semana 
    
    //'for' para percorrer os elementos da lista, criar um elemento <li>, adicionar o conteúdo a partir da lista dos dias
    // adicionar as classes e depois fazer eles filhos da id='#days'

  for(i=0; i<listaDosDias.length; i+=1){

    let criaLiParaOdia = document.createElement('li');
    criaLiParaOdia.innerText=listaDosDias[i];

    //condicionais para adicionar as tags corretas de acordo com o dia e depois tornar o elemento filho da id='#days
    if(listaDosDias[i]===24 || listaDosDias[i]===31){
      criaLiParaOdia.className='day holiday';
      diasDoMes.appendChild(criaLiParaOdia);
    }
    else if(listaDosDias[i]===4 || listaDosDias[i]===11 || listaDosDias[i]===18){
      criaLiParaOdia.className='day friday';
      diasDoMes.appendChild(criaLiParaOdia);
    }
    else if(listaDosDias[i]===25){
      criaLiParaOdia.className='day holiday friday';
      diasDoMes.appendChild(criaLiParaOdia);
    }
    else{
      criaLiParaOdia.className='day';
      diasDoMes.appendChild(criaLiParaOdia);
    }
  }
}
criaDiasDoMes();

//Cria dinamicamente um botão escrito 'Feriado' //
const criaBotaoFeriado = () => {

  let containerDosBotoes= document.querySelector('.buttons-container');
  let botaoFeriado=document.createElement('button');
  botaoFeriado.id='btn-holiday';
  botaoFeriado.innerHTML= "Feriados";
  containerDosBotoes.appendChild(botaoFeriado);
}
criaBotaoFeriado();

// Cria um evento de click que altera a cor do background dos elementos com classe '.holiday' //
const trocaCorFeriado = () => {
  let selecionaBotaoFeriado = document.querySelector('#btn-holiday');
  let selecionaDiasFeriado = document.querySelectorAll('.holiday');


  selecionaBotaoFeriado.addEventListener('click', () => {

    for(let j=0; j<selecionaDiasFeriado.length; j+=1){

      if(selecionaDiasFeriado[j].style.backgroundColor === 'white'){
      selecionaDiasFeriado[j].style.backgroundColor= 'rgb(238,238,238)';
     }
      else{
       selecionaDiasFeriado[j].style.backgroundColor='white';
     }
   } 
  })
}
trocaCorFeriado();

// Cria dinamicamente um botão escrito 'Sexta-feira' //
const criaBotaoSextaFeira = () => {

  let containerDosBotoes= document.querySelector('.buttons-container');
  let botaoSextaFeira=document.createElement('button');
  botaoSextaFeira.id='btn-friday';
  botaoSextaFeira.innerHTML= "Sexta-Feira";
  containerDosBotoes.appendChild(botaoSextaFeira);
}
criaBotaoSextaFeira();

// Cria um evento click que altera o texto dos elementos com classe '.friday' //

const alteraTextoSexta = (arraySextas) => {

  let selecionaBotaoSexta= document.querySelector('#btn-friday');
  let selecionaDiasSexta= document.querySelectorAll('.friday');

  selecionaBotaoSexta.addEventListener('click', () => {
    for(k=0; k<selecionaDiasSexta.length; k+=1){

      if(selecionaDiasSexta[k].innerText!=='SEXTOU o/'){
        selecionaDiasSexta[k].innerText='SEXTOU o/';
      }
      else{selecionaDiasSexta[k].innerText=arraySextas[k];}

    }
  })
}

let diasDeSexta = [4, 11, 18, 25];
alteraTextoSexta(diasDeSexta);


// Cria um evento de zoom In e zoom out ao passar ou tirar o mouse do dia
const zoomIn = () => {

  let idDias = document.querySelector('#days');
  idDias.addEventListener ('mouseover', (evento) => {
    evento.target.style.fontSize='40px';
  })
}
zoomIn();

const zoomOut = () => {
  let idDias = document.querySelector('#days');
  idDias.addEventListener ('mouseout', (evento) => {
    evento.target.style.fontSize='20px';
  })
}
zoomOut();

// Cria uma função que adiciona texto ao elemento minhas tarefas

const novaTarefa = (tarefa) => {

  let containerDasTarefas = document.querySelector('.my-tasks');
  let novaTarefa = document.createElement('span');
  novaTarefa.innerHTML = tarefa;
  containerDasTarefas.appendChild(novaTarefa); // Anexando a task como filha de taskContainer
}
novaTarefa('Colocar os Exercícios em dia');

// Parte 8 - Não entendi muito bem

const novaDivDeTarefa= (cor) => {
  let containerDasTarefas = document.querySelector('.my-tasks');
  let novaTarefa = document.createElement('div');
  novaTarefa.className='task';
  novaTarefa.style.backgroundColor=cor;
  containerDasTarefas.appendChild(novaTarefa);
}
novaDivDeTarefa('red');

// Cria uma função que seleciona uma tarefa

const selecionaTarefa = () => {

  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let tarefas = document.querySelector('.task');


  tarefas.addEventListener('click', (evento)=> {

    if(tarefaSelecionada.length=== 0){
      evento.target.className='task selected';
    }
    else{
      evento.target.className='task';
    }
  })
}
selecionaTarefa();

// Função que colore o dia do calendário com a cor da tarefa

const marcaCalendário = () => {

  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let diasDoMes = document.querySelector('#days');
  let tarefas = document.querySelector('.task')
  let corDaTarefa = tarefas.style.backgroundColor;

  diasDoMes.addEventListener('click', (evento) => {

    if(tarefaSelecionada.length>0 && evento.target.style.color!== corDaTarefa){
      evento.target.style.color=tarefaSelecionada[0].style.backgroundColor;
    }
    else if(evento.target.style.color===corDaTarefa){
      evento.target.style.color='rgb(119,119,119)';
    }
  })
}
marcaCalendário();