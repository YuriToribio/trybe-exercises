function palindromo (string){
    let aux=false;
    let stringInvertida = string.split('').reverse().join('');
    if(stringInvertida===string){
        aux= true;
    }
    return aux;
}

function indexOfHighestNumber (array){
    let maior=array[0];
    let idx=0;

    for(let i=0; i < array.length; i++){
        if(array[i]> maior){
            maior=array[i];
            idx=i;
        }
    }
    
    return idx;
}

let teste =[2, 3, 6, 7, 10, 1];
console.log(indexOfHighestNumber(teste));

function indexOfLowesttNumber (array){
    let menor=array[0];
    let idx=0;

    for(let i=0; i < array.length; i++){
        if(array[i]< menor){
            menor=array[i];
            idx=i;
        }
    }
    
    return idx;
}

let teste2= [2, 4, 6, 7, 10, 0, -3];
console.log(indexOfLowesttNumber(teste2));

function maiorNome (array){
    let maior=0;
    let idx=0;

    for(i=0; i<array.length; i+=1){
        if(array[i].length > maior){
            maior=array[i].length;
            idx=i;
        }
    }
    return array[idx];
}

let teste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(teste3));

function valorRepeteMais (array){

    let index;
    let repMaior=0;


    for(i=0; i<array.length; i+=1){
        let countRep=1;
        for(let i2=i+1; i2< array.length; i2+=1){
            if(array[i]==array[i2]){
                countRep=countRep+1;
            }
            else if(countRep>repMaior){
                repMaior=countRep;
                index=i;
            }
        }
    }
    console.log('O maior numero de repetições foi:'+repMaior);
    return array[index];
}
let teste4=[2, 3, 2, 5, 8, 2, 3];
console.log(valorRepeteMais(teste4));


function somatorio(n){
    let aux=0;
    for (i=0; i<=n ; i+=1){
        aux=aux+i;
    }
    return aux;
}
console.log(somatorio(5));

function verificaFimPalavra(string1, string2){
    let array1;
    let array2;
    let aux=false;

    array1= string1.split('');
    array2= string2.split('');

    for(i=0; i<string2.length; i+=1){
        if(string2[(string2.length)-i]===string1[(string1.length-i)]){
            aux=true;
        }
    }
    return aux;
}

console.log(verificaFimPalavra('trybe','be'));
