//need to re-visit to determine a better runtime
var twoSum = function(nums, target) {  
    for (let i = 0; i < nums.length; i++){
      for (let j = i+1; j < nums.length; j++){
          if (nums[j] == target - nums[i]){
              return [i,j]
              }
      }
  }
};

//nested loops but runtime is O(n) because nested loop advances the outer loop
var removeDuplicates = function (nums) {
    for (let i=0; i < nums.length-1; i++){
      while(nums[i]===nums[i+1]){
        nums.splice(i,1)
      }
    }
  return nums
  };