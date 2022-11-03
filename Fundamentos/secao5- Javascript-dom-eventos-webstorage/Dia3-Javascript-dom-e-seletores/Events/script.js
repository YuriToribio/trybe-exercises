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

    let listaDosDias=[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let diasDoMes = document.querySelector('#days'); // captura do elemento que será o pai da lista com os dias da semana 
    
    //'for' para percorrer os elementos da lista, criar um elemento <li>, adicionar o conteúdo a partir da lista dos dias
    // adicionar as classes e depois fazer eles filhos da id='#days'

    for(i=0; i<listaDosDias.length; i+=1){

      let criaLiParaOdia = document.createElement('li');
      criaLiParaOdia.innerText=listaDosDias[i];

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