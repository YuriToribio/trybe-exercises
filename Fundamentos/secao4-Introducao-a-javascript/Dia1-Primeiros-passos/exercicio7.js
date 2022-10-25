// Criação das Funções //
function adicao (a, b){
    return(a+b);
}

function subtracao(a, b){
    return(a-b);
}

function multiplicacao(a, b){
    return (a*b);
}

function divisao(a, b){
    return (a/b);
}

function resto(a, b){
    return (a%b);
}

// Aplicação das Funções //

let num1=10;
let num2=5;

console.log(adicao(num1, num2));
console.log(subtracao(num1, num2));
console.log(multiplicacao(num1, num2));
console.log(divisao(num1, num2));
console.log(resto(num1, num2));

/////////////////////////////////////////////////////

function maiorEntreDois (a, b){
    let maiorValor2;
    if(a>b) {
        maiorValor2=a;
    }
    else{
        maiorValor2=b;
    }
    return (maiorValor2);
}

console.log(maiorEntreDois(10, 12));

/////////////////////////////////////////////////////
function maiorEntreTres(a, b, c){
    let maiorValor3;
    if(a>b && a>c){
        maiorValor3=a;
    }
    else if(b>a && b>c){
        maiorValor3= b;
    }
    else{
        maiorValor3=c;
    }
    return maiorValor3;
}

console.log(maiorEntreTres(5,15, 8));

/////////////////////////////////////////////////////
function sinalDaVariavel(a){
    let valor;
    if(a>0){
        valor="Positivo";
    }
    else if(a<0){
        valor="Negativo";
    }
    else{
        valor="Zero";
    }
    return(valor);
}

console.log(sinalDaVariavel(-7));

/////////////////////////////////////////////////////
function verificaTriangulo(a,b,c){
    let variavelVerificacao;
    if((a+b+c === 180) &&(a>0 &&b>o &&c>0)){
        variavelVerificacao= true;
    }
    else if ((a+b+c !== 180)&&(a>0 &&b>o &&c>0)){
        variavelVerificacao= false;
    }
    else {
        variavelVerificacao= 'Erro';
    }
    return variavelVerificacao;
}

console.log(verificaTriangulo(-10, 45, 90));

/////////////////////////////////////////////////////
const peca = 'Rainha';
switch(peca.toLowerCase()){
    case 'peao':
        console.log("Anda pra frente uma casa");
        break;
    case 'rei':
        console.log("Anda pra todas as direções uma casa");
        break;
    case 'rainha':
        console.log("Anda pra todas as direções quantas casas quiser");
        break;
    case 'bispo':
        console.log("Anda na diagonal quantas casas quiser");
        break;
    case 'torre':
        console.log("Anda na vertical e na horizontal quantas casas quiser");
        break;
    case 'cavalo':
        console.log("Anda em L e pode passar por cima de outras peças");
        break;
    default:
        console.log("Peça inexistente");
        break;
}

/////////////////////////////////////////////////////
function conceitoAluno(notaAluno){

    let aux;

    if(notaAluno>=90){
        aux='A';
    }
    else if(notaAluno>=80 && notaAluno<90){
        aux='B';
    }
    else if(notaAluno>=70 && notaAluno<80){
        aux='C';
    }
    else if(notaAluno>=60 && notaAluno<70){
        aux='D';
    }
    else if(notaAluno>=50 && notaAluno<60){
        aux='E';
    }
    else if(notaAluno<0 || notaAluno>100){
        aux='Nota Inválida';
    }
    else {
        aux='F';
    }
    return(aux);
}

console.log(conceitoAluno(56));

/////////////////////////////////////////////////////
function verificarPar(a,b,c){
    let aux=false;
    if((a%2===0)||(b%2===0)||(c%2===0)){
        aux= true;
    }
    return aux;
}

console.log(verificarPar(2,5,7));
/////////////////////////////////////////////////////
function verificarImpar(a,b,c){
    let aux=false;
    if((a%2===1)||(b%2===1)||(c%2===1)){
        aux= true;
    }
    return aux;
}

console.log(verificarImpar(2,5,6));
/////////////////////////////////////////////////////
function lucroMilProdutos(custo, precoVenda){
    let custoTotal=1.2*custo;
    let lucro;
    if(custo<0 || precoVenda<0){
        lucro="Erro";
    }
    else{
        lucro=1000*(precoVenda-custoTotal);
    }
    return lucro;
}

console.log(lucroMilProdutos(10, 15));

/////////////////////////////////////////////////////

