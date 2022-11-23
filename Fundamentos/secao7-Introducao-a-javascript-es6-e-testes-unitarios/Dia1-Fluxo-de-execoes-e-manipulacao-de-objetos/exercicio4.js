const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Inicio da implemntação da atividade
 
// Função para adicionar novas chaves
const addNewKey = (obj, key, value) => {
    obj [key] = value;
}
addNewKey(lesson2, 'turno', 'noite' );

// Função para listar as chaves de um objeto
const listKeys = (obj) => {
    Object.keys (obj);
}

// Função para mostrar o tamanho de um objeto

const objLenght = (obj) => {
    Object.length(obj);
}
// Função para listar os valores de um objeto

const listValues = (obj) => {
    Object.values(obj);
}

// Crie um objeto que concatene as informações dos objetos que estão separados

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); //sintaxe: o primeiro elemento é o destino e o restante sao os elementos que eu pretendo concatenar.

// funçaõ que retorna o número total de estudantes

const totalNumberOfStudents = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);
    for ( let index in keys ){
        total = total + obj[keys[index]].numeroEstudantes;
    }
    return total;
}

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto

const getValueByNumber = (obj, number) => {
    Object.value(obj)[number];
}

// Crie uma função que verifica se o par (chave/ valor) existe no objeto

const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));
