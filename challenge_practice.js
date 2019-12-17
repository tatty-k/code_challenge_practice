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

  //need to determine small vs big array and remove matching elements from larger array
  var intersect = function(nums1, nums2) {
    const intersections = []
    const small = nums1.length < nums2.length ? nums1 : nums2
    const big = nums1 === small ? nums2 : nums1
    for(let i = 0; i < small.length; i++){
        let idx = big.indexOf(small[i]);
            if(small[i] === big[idx]){
                intersections.push(big.splice(idx,1))
        }
    }  
    return intersections
};

//calculate index of numbers using modulus 
//loop through list and place numbers at new indexes
var rotate = function(nums, k) {
  let moves = nums.length - k % nums.length;
  let rotated = [...nums]
  
  for(let i=0; i < nums.length; i++){
      rotated.splice((i - moves),1,nums[i])
  }
  
  for(let i=0; i< nums.length; i++){
  nums[i] = rotated[i] 
} 
  return nums
};

//Can also solve with math - need to review
var singleNumber = function(nums) {
  numCount = {};
  solo = 0;
  
  nums.forEach(num => {
      numCount[num] = numCount[num] || 0;
      numCount[num]++;
  })
  
  Object.keys(numCount).forEach(num => {
      numCount[num] == 1 ? solo = num : null
  })
  
  return solo
};

//https://leetcode.com/problems/rotate-image/discuss/159431/javascript-solution-with-example
//need to figure out how this solution works
const rotate = function(matrix){
  matrix = matrix.reverse()
  for(let i in matrix)
    for(let j =0; j<i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  return matrix
}

// joins array into a string, converts string into bigInt to account for large numbers
// adds one (cannot do +1 here, must do variableName++, most likely because of arithmatic with bigInts)
// finally convert new number to a string and splits string into an array
var plusOne = function(digits) {
  let number = BigInt(digits.join(''))
  number++
  let numArr = number.toString().split('')
  return numArr
}