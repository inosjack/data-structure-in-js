
var isIsomorphic = function(s, t) {
      const first = s.split("");
      const second = t.split("");

      const out = {};
      if(Object.keys(first).length !== Object.keys(second).length) return false;

      for(i=0; i<Object.keys(first).length;i++) {

            if ((first[i] in out && out[first[i]] !== second[i]) ) {
                  return false
            } else {
                  out[first[i]] = second[i]
            }
      }
      return true
};

console.log(isIsomorphic("ab","ba"))

