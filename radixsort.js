// write a function for get digit 
function getDigit(num,i) {
      return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

// log10 basic 10 what power give us number 
//
function digitCount(num) {
      if(num === 0) return 1;
      return Math.floor(Math.log10(Math.abs(num))) + 1
}


function mostDigit(nums) {
      let maxDigits = 0;
      for (let i = 0; i < nums.length; i++) {
            maxDigits = Math.max(maxDigits,digitCount(nums[i]))
      }
      return maxDigits;
}

function radixSort(nums) {
      let largest = mostDigit(nums);
      let out;
      for (let k = 0; k < largest; k++) {
            let buckets = Array.from({length: 10}, () => []);
            for (let i = 0; i< nums.length; i++) {
                let digit = getDigit(nums[i],k)
                buckets[digit].push(nums[i])
            }

            nums = [].concat(...buckets)
      }
      return nums;
}

console.log(radixSort([412,12,54,3,6789,223,311,33,1,863]))