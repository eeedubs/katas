const vowels = ['a', 'e', 'i', 'o', 'u'];
 
let count = 0;

function vowelRecognition(input){
  let formatInput = input.toLowerCase();
  for (let letter in formatInput){
    if (formatInput.length == 1){
      count += vowels.includes(formatInput) ? 1 : 0;
      let returnCount = count;
      count = 0;
      return returnCount;
    }
    if (vowels.includes(formatInput[letter])){
      count += (formatInput.length - letter);
    }
  }
  return vowelRecognition(formatInput.slice(1));
}

console.log(vowelRecognition('hello'));
console.log(vowelRecognition('fklshjfdhjskdljfhsalkdfsadjkfsajdfhashjdfa'));
console.log(vowelRecognition('sdhfjkashdfklashdlkfjashkjfdhfuakreiryiuywpyerwruwoertyweiurtyweirtyiewyrewuir'));
console.log(vowelRecognition('jdhksjfdadsafbjasdfahfdgadfgajshdfkas'));
