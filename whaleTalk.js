let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i=0; i < input.length; i++){
  console.log(i);
  if(input[i]==='e' || input[i]==='u'){
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++){
    console.log(j);
    if (input[i]===vowels[j]){
      console.log('matches found')
      resultArray.push(input[i])
    }
  }
}


let resultString = resultArray.join('').toUpperCase();
console.log(resultString);