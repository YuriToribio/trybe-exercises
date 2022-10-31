let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log(`Bem-vinda, ${info.personagem}`);

  info['recorrente']='Sim';

//   for (let idx in info){
//     console.log(info[idx]);
//   }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain',
    nota: `Dells Four Color COmics #178`,
    recorrente: 'Sim',
  };

  for (let index in info){

    if(index==='recorrente' && info.recorrente==='Sim' && info2.recorrente==='Sim'){
        console.log('Ambos recorrentes');
    }
    else{
        console.log(`${info[index]} e ${info2[index]}`);
    }
  }