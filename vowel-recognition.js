
function vowelRecognition(input){
  let count = 0, vowels = ['a', 'e', 'i', 'o', 'u'];
  let formatInput = input.toLowerCase();
  for (let letterPosition in formatInput){
    if (vowels.includes(formatInput[letterPosition])){
      count += ((formatInput.length - letterPosition) + (letterPosition * (formatInput.length - letterPosition)))
    }
  }
  return count;
}

console.log(vowelRecognition('hello'));
console.log(vowelRecognition('fklshjfdhjskdljfhsalkdfsadjkfsajdfhashjdfa'));
console.log(vowelRecognition('sdhfjkashdfklashdlkfjashkjfdhfuakreiryiuywpyerwruwoertyweiurtyweirtyiewyrewuir'));
console.log(vowelRecognition('jdhksjfdadsafbjasdfahfdgadfgajshdfkas'));
