let word ='tryber';
let palavraInvertida ='';

for(i=0; i<word.length; i++){
    palavraInvertida += word[(word.length)-(1+i)];
}

console.log(word);
console.log(palavraInvertida);