var reverseVowels = function(s) {
      const vowels = ["a","e","i","o","u","A","E","I","O","U"];
      var out = s.split("");
      var start = 0;
      var end = Object.keys(out).length - 1;
     

      for(i = 0; i<end; i++) {
            if(vowels.includes(out[i])) {
                  for(j = end; j>=i; j--) {
                        if(vowels.includes(out[j])) {
                              let value = out[j];
                              out[j] = out[i];
                              out[i] = value;
                              end = j-1;
                              break;
                        }
                  }
            }
            
      }
      return out.join("");
  };

  console.log(reverseVowels("racecar"));