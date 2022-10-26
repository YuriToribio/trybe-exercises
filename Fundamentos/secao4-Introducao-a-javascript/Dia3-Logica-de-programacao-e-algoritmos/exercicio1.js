function fatorial(n){
    let valorDoFatorial=1;
    for(let i=n; i>0; i--){
        valorDoFatorial=valorDoFatorial*i;
    }
    return (valorDoFatorial);
}
console.log(fatorial(5));




