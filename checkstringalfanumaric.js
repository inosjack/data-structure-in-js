// function isAlphaNumeric(str) {

//       return /^[a-zA-Z0-9]+$/.test(str)
//       var code;
//       for(var i = 0; i = str.length; i++) {
//             code = str.charCodeAt(i);
//             if(!(code > 47 && code < 58) && // numeric 0-9
//             !(code > 64 && code < 91) && //uper alpha A-Z
//             !(code > 96 && code < 123)) { //lower alpha a-z
//                   return false;
//             }
//       }
//       return true;
// }
// console.log(isAlphaNumeric("xyz"));

function same(arr1,arr2) {
      if(arr1.length !== arr2.length) {
            return false;
      }
      for(let i=0; i<arr1.length; i++) {
            let index = arr2.indexOf(arr1[i] ** 2)
            if(index == -1) {
                  return false
            }
            arr2.splice(index,1)
      }
      return true
}

console.log(same([1,2,3],[1,4,9]));