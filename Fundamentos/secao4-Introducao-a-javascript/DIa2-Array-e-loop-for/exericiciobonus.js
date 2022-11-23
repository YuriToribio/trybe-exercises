let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordenação Buble sort crescente//
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ordenação Buble sort decrescente
  for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let numbers2=[];

for(i=0; i<numbers.length; i++){

    if((i+1<numbers.length)){
        numbers2.push(numbers[i]*numbers[i+1]);
    }
    else {
        numbers2.push(numbers[i]*2)
    }
    
}

console.log(numbers2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////