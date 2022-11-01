function longestWord (string){
    let array = string.split(' ');
    let idx=0;
    for(let i=0; i< array.length; i+=1){
        for(let i2=0; i2< array.length; i2+=1){
            if(array[i].length>array[i2].length){
                idx=i;
            }
        }
    }
    return array[idx];
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));