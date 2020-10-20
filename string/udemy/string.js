// Count char in string 
function charCount(str) {
      var obj = {};
      for(var char of str) {
            char = char.toLowerCase();
            if(/[a-z0-9]/.test(char)) {
                  obj[char] = ++obj[char] || 1;
            }
      }
      return obj;
}


// console.log(charCount("9272sdds"))
// console.log("43".charCodeAt(3)) retrun the asci code 
// 47 to 58 numeric
// 64 to 91 upper alpha 
// 96 to 123 lower alpha 
console.log();






