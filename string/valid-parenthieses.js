/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const obj = {
            "{" : "}",
            "[" : "]",
            "(" : ")",
      }

      const stack = [];
      for(const char of s) {
            if(obj.hasOwnProperty(char)) {
                  stack.push(char)
            } else {
                  let closePareth = stack.pop();
                  if(char !== obj[closePareth])
                        return false 
            }
      }
      return stack.length === 0;
  };

  console.log(isValid("()"))  