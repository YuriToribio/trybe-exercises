// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// let sum=0;
// for(let i=0; i<numbers.length; i++){
//     sum=sum+numbers[i]
// }
// console.log(sum);

// let mediaAritmetica= sum/numbers.length;
// console.log(mediaAritmetica);

// if(mediaAritmetica>20){
//     console.log("Valor da média Aritmética maior que 20")
// }
// else{
//     console.log("Valor da média Aritimética menor ou igual a 20");
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // let maior=numbers[0];

    // for(let i=0; i<numbers.length; i++ ){
    //     if(numbers[i]>maior){
    //         maior=numbers[i];
    //     }
    // }
    
    // console.log(maior);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // let impar=0;

    // for(i=0; i<numbers.length; i++){
    //     if(numbers[i]%2===1){
    //         impar=impar+1;
    //     }
    // }
    // if(impar>0){
    //     console.log(impar);
    // }
    // else{
    //     console.log("Nenhum valor impar encontrado");
    // }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // let menor= numbers[0];
    // for(i=0; i<numbers.length; i++){
    //     if(numbers[i]<menor){
    //         menor=numbers[i];
    //     }
    // }
    // console.log(menor);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
let listaNumeros=[];
for (i=1; i<=25; i++){
    listaNumeros.push(i);
}
console.log(listaNumeros);

for(let divisao of listaNumeros){
    console.log(divisao/2)
}