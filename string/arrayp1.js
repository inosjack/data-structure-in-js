var removeDuplicates = function(nums) {

      var last = '';
      return nums.filter(e => {
            if(last === e) {
                  return false;
            }else {
                  last = e;
                  return true;
            }
      });
};



var findMaxConsecutiveOnes = function(nums) {
      var last = '';
      var count = 0;
      var max = 0;
      return nums.forEach(e => {
            if(last !== e) {
                if(count > max) {
                    max = count
                }
                  count;
            } 
          last = e;
          count++;
      });
    
    
return max
};
console.log(findMaxConsecutiveOnes([1,1,2]));