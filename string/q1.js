// How to find the maximum occurring character in given String?
// test out t


const maxChar = str => {
      let charMap = {};
      let max = 0;
      let maxChar = '';

      for(let char of str.toLowerCase()) {
            if(!charMap[char]) {
                  charMap[char] = 1
            } else{
                  charMap[char]++;
            }
            if(charMap[char] > max){
                  max = charMap[char]
                  maxChar = char;
            }    
      }
      return maxChar;
}
console.log(maxChar("tetAAASS"));


