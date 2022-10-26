let array = ['java', 'javascript', 'python', 'html', 'css'];


function maiorString(arrayEntrada){

    let maiorPalavra=arrayEntrada[0];

    for(let i=0; i<arrayEntrada.length; i++)
    if( arrayEntrada[i].length > maiorPalavra.length  ){
        maiorPalavra=arrayEntrada[i];
    }
    return (maiorPalavra);
}

function menorString(arrayEntrada){

    let menorPalavra=arrayEntrada[0];

    for(let i=0; i<arrayEntrada.length; i++)
    if( arrayEntrada[i].length < menorPalavra.length  ){
        menorPalavra=arrayEntrada[i];
    }
    return (menorPalavra);
}

console.log(maiorString(array));
console.log(menorString(array));

