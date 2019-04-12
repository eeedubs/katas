const vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelCheck(inputArray){
  return inputArray.filter((val) => {
    return vowels.indexOf(val) > -1;
  }).length;
 }
 
function vowelRecognition(input){
  let count = 0;
  if (!input){
    return 0;
  }
  if (input.length == 1){
    return vowelCheck([input]);
  }
  let newWord = '';
  iterate = (word) => {
    if (word.length == 1){
      count += vowelCheck([word.toLowerCase()]);
      return count;
    }
    for (let x = 0; x < word.length; x++){
      if (x === 0){
        newWord = word[x].toLowerCase();
        count += vowelCheck([newWord]);
      } else {
        newWord += word[x].toLowerCase();
        count += vowelCheck(newWord.split(''));
        if (x === word.length - 1){
          return iterate(newWord.slice(1));
        }
      }
    }
  }
  return iterate(input);
}

console.log(vowelRecognition('hello'));
console.log(vowelRecognition('fklshjfdhjskdljfhsalkdfsadjkfsajdfhashjdfa'));
console.log(vowelRecognition('sdhfjkashdfklashdlkfjashkjfdhfuakreiryiuywpyerwruwoertyweiurtyweirtyiewyrewuir'));
console.log(vowelRecognition('jdhksjfdadsafbjasdfahfdgadfgajshdfkas'));
