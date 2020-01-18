var twoSum1 = function(nums, target) {  
    for (let i = 0; i < nums.length; i++){
      for (let j = i+1; j < nums.length; j++){
          if (nums[j] == target - nums[i]){
              return [i,j]
              }
      }
  }
};

let twoSum2 = function(array, target){
  
  const numStorage = {}
  
     // creates object that stores elements and their indexes
  array.forEach( (num, idx) => {
    numStorage[num] = idx || 0
  })
  
  //makes list of keys in numStorage
  let nums = Object.keys(numStorage)
  
  //loops through list of nums (keys) in numStorage and compares 
  //to elemetns of original array to see if original array contains 
  //a complementary number of any of the numbers in the original array 
  for(let i = 0; i < nums.length; i++){
      let complementNum = target - array[i];
      if(nums.includes(complementNum.toString()) && i != numStorage[complementNum]){
        return [i, numStorage[complementNum]]
      }
    }  
}

//nested loops but runtime is O(n) because nested loop advances the outer loop
var removeDuplicates1 = function (nums) {
    for (let i=0; i < nums.length-1; i++){
      while(nums[i]===nums[i+1]){
        nums.splice(i,1)
      }
    }
  return nums
  };
  
let removeDuplicates2 = function(nums){

  //rearanged array with one copy of unique elements listed first
  let idxTracker = 1;
  
  for(let i=0; i < nums.length; i++){
    if(nums[i] !== nums[i+1]){
      nums[idxTracker] = nums[i+1]
      idxTracker++
    }
  }
  
  //deletes all numbers following the unique numbers that have been moved to the front of the list
  for(let i = idxTracker -1; i < nums.length; i++){
      nums.splice(i)
  }
  return idxTracker - 1
}

//cannot use the difference of the sum of array and the
// sum of array with dups removed because array could 
//contain neg numbers and 0's. could go through and filter 
//these out... but that would make it harder to read code
function containsDups(array){
  let counter = {}

  for(let i = 0; i < array.length; i++){
    counter[array[i]] = counter[array[i]] || 0
    counter[array[i]]++
  }
  
  let count = Object.values(counter)
  
  for(let i = 0; i < count.length; i++){
    if(count[i] > 1){
      return true
    }
  }
  return false
}

  //need to determine short vs long array and remove matching elements from larger array
  var intersect = function(nums1, nums2) {
    let short = 0;
    let long = 0;
    let pairs = [];
  
    if(nums1.length > nums2.length) {
        short = nums2;
        long = nums1;
    } else {
        short = nums1;
        long = nums2;
    } 
  
    for(let i = 0; i < short.length; i++){
        let idx = long.indexOf(short[i])      
        if(long[idx]===short[i]){
          pairs.push(short[i])
          long.splice(idx,1)
      }
  }
    return pairs
};

//time and space completity O(n)
var rotate1 = function(nums, k) {
  //calculate number of moves needed using modulus (in case k > array length)
  let moves = nums.length - k % nums.length;
  //make a copy of array
  let rotated = [...nums]
  
  //loop through copy of array and place elements from original array in copy of array in rotated locations.
  //using orignial array copy prevents overwriting elements when re-arranging into rotated positions
  for(let i=0; i < nums.length; i++){
      rotated.splice((i - moves),1,nums[i])
  }
  
  for(let i=0; i< nums.length; i++){
  nums[i] = rotated[i] 
} 
  return nums
};

function rotate2(array,k){
  
  //calculate marking point where loop will stop moving elements
  //use modulus in case number of rotations needed > array length
  const marker = k%array.length
  let lastElement = array.length - 1 
  
  //stop moving elements when you reach marker
  for(let i=0; i < marker; i++){
      //place the last element in the array at the front of the array
      array.unshift(array[lastElement])
      //remove the last element in the array
      array.pop();
  }
  return array
}


var singleNumber1 = function(nums) {
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

let singleNumber2 = function(array){
  //find the sum of the original array
  //[a,b,b,c] -> aabbc
  const sumDupArray = array.reduce( ( total, current ) => total + current, 0)
  
  //find the sum of array without duplicates 
  //[a,b,b,c] -> [a,b,c]
  const noDupArray = Array.from(new Set(array))
  // [a,b,c] -> abc
  const sumNoDupArray = noDupArray.reduce( ( total, current ) => total + current, 0)
  
  //find sum of numbers in array that are repeated
  //aabbc - abc = ab
  const sumIndivualDups = sumDupArray - sumNoDupArray
  
  //subtrace sum of numbers that are repeated from the single number array to get non-dup number
  //abc - ab = c 
  const singleNum = sumNoDupArray - sumIndivualDups
  
  return singleNum 
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

//loops through list and moves all truthy values to beginning
//while tracking the last index that was filled with a truthy value
//loops through list again and fills in zeros from final placement point
//to the end of the list 

// ex.) 
// first loop: [0,1,0,3,12] -> [1,1,0,3,12] -> [1,3,0,3,12] -> [1,3,12,3,12]
// second loop: [1,3,12,3,12] -> [1,3,12,0,0]
var moveZeroes1 = function(nums) {
  let counter = 0;
  nums.forEach( ( num, idx) => {
      if (num) {
          nums[counter] = num;
         counter++;
      }
   });

   for(let i=counter; i<nums.length; i++){
     nums[i] = 0;
   };
  return nums
};

//better runtime, took out second loop, keeping only first loop.
//loop searches for none-zero values and swaps found non-zero values with 
//the value at the marker, then increments the marker 
function moveZeros(nums){
  
  let marker = 0;
  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
      let stored = nums[marker]
      nums[marker] = nums[i]
      nums[i] = stored
      marker++
    }
  }
  return nums
}

var fizzBuzz = function(n) {
  result = []

  for(let i=1; i <= n; i++){
      
      if(i%3 === 0 && i%5 === 0){
         result.push("FizzBuzz")
      }
      
      else if(i%3 === 0){
          result.push("Fizz")
      }
      
      else if(i%5 === 0){
          result.push("Buzz")
      }
      
      else 
          result.push(i.toString())
  }
  return result
};

function reverseString1(array){
  
  //store first and last index 
  let firstIdx = 0;
  let lastIdx = array.length -1;
  
  //exchange first element with last element 
  //then exchange second element with second to last element
  //continue until you hit the midpoint of the string 
  for(let i = 0; i < parseInt(array.length/2); i++){
      console.log(parseInt(array.length/2))
      let stored = array[firstIdx];
      array[firstIdx] = array[lastIdx];
      array[lastIdx] = stored;
      
      firstIdx++
      lastIdx--
  }
  return array  
}

//better runtime than reverseString2
function reverseString2(s){
  return s.reverse();
}

function reverseInteger(n){
  
  const reversed = parseInt(Math.abs(n)
                    .toString()
                    .split('')
                    .reverse()
                    .join(''))
  
  if ( n === 0 || Math.abs(reversed) <= -2147483648 || Math.abs(reversed) > 2147483648 ) { return 0 }
  else if ( n > 0 ){ return reversed}
  else return -reversed  
}

//could clean this up quite a bit. Need to research new Map() and lastIndexOf.
let firstUniqChar = function(s){
  
  let sArray = s.split('')
  const letterCounts = {}
 
  for(let i = 0; i < sArray.length; i++){
    let letter = sArray[i]
    letterCounts[letter] = letterCounts[letter] || 0
    letterCounts[letter]++
  }

  let counts = Object.values(letterCounts)
  let letters = Object.keys(letterCounts)
  
  for(let i = 0; i < counts.length; i++){
    if(counts[i] == 1){
      return sArray.indexOf(letters[i]) 
    }
  }
  return -1
}

function anagram(s,t) {
  
  //concert strings to arrays and sort
  const sArray = s.split('').sort();
  const tArray = t.split('').sort();
 
 //if one string is longer than another they are not anagrams
 if(sArray.length !== tArray.length) {
   return false
 }
  
 //if the letters in the sorted string/arrays don't match, they are not anagrams
  for(let i = 0; i < sArray.length; i++){
    if(sArray[i] !== tArray[i]){
      return false
    }
  }
  return true
}

var isPalindrome = function(s) {
  //convert to lowercase, then use regex to remove non-alphanumeric characters and spaces
  let modified = s.toLowerCase().replace(/[^a-z0-9]/gi,'');

  //initialize first and last index
  let idx1 = 0
  let idx2 = modified.length-1

  //compare first and last index of string, then second to first and second to last 
  //if elements don't match, return false. If midpoint is hit without finding a match, return true
  for(let i = 0; idx1 < idx2; i++){
      if(modified[idx1] !== modified[idx2]){
      return false
  }
  idx1++
  idx2--
  }
return true
};

function numMagicSquaresInside(){
  //make sure grid is min of 3X3
  for (let i = 0; i < grid.length; i++) {
    if(grid[i].length < 3) { 
      return count}
  }
  
  if(grid.length < 3){
    return count
  }
  
  //build square array
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length - 2; j++) {
      const square = [
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2]
      ];
        
        //make sure numbers in square are between 1-9 and unique
        if(square.some(x => x > 9 || x < 1) ||
          Array.from(new Set(square)).length < 9
           ) {continue}
        
      //make sure col, row and diag sums are equal      
      const sumCount = [];
      sumCount[0] = square[0]+square[1]+square[2];
      sumCount[1] = square[3]+square[4]+square[5];
      sumCount[2] = square[6]+square[7]+square[8];
      sumCount[3] = square[0]+square[3]+square[6];
      sumCount[4] = square[1]+square[4]+square[7];
      sumCount[5] = square[2]+square[5]+square[8];
      sumCount[6] = square[0]+square[4]+square[8];
      sumCount[7] = square[2]+square[4]+square[6];
      
      if(Array.from(new Set(sumCount)).length === 1 ){ count++}
    } 
  }
   return count
};

//Simplified the validation logic to better runtime than above. 
//seperated into function "chunks" to make more readable/adjustable
function magicSqr(grid){
  let count = 0;
  if (grid.length < 3 || grid[0].length <3){return count}
  
  for(let i = 0; i < grid.length - 2; i++){
    for(let j = 0; j < grid[i].length -2; j++){
      
      let sqr = getSquare(grid,i,j)
      
      if(isMagic(sqr) === true){
        count++
      }
    }
  }
  return count
}

function getSquare(grid, i, j){
  return [
        grid[i][j],
        grid[i][j+1],
        grid[i][j+2],
        grid[i+1][j],
        grid[i+1][j+1],
        grid[i+1][j+2],
        grid[i+2][j],
        grid[i+2][j+1],
        grid[i+2][j+2],
      ]
}

function isMagic(square){
  
  if(Array.from(new Set(square)).length !== 9 ||
    square.some(x => x < 1 || x > 9)) {return false}
  if(square[0]+square[1]+square[2] === 15 &&
    square[3]+square[4]+square[5] === 15 &&
    square[6]+square[7]+square[8] === 15 &&
    square[0]+square[3]+square[6] === 15 &&
    square[1]+square[4]+square[7] === 15 &&
    square[2]+square[5]+square[8] === 15 &&
    square[0]+square[4]+square[8] === 15 &&
    square[2]+square[4]+square[6] ===15 
  ){
    return true
  } else {
    return false
  }
}

function rotateImage(matrix){
  
  let mLen = matrix.length 
  let newColIdx = mLen -1
  
  //reverse all arrays in matrix
//   [[1,2,3,4],          [[4,3,2,1],
//    [5,6,7,8],    ->     [8,7,6,5],
//    [9,10,11,12],        [12,11,10,9],
//    [13,14,15,16]]       [16,15,14,13]]
  matrix.forEach( r => r.reverse())
  
 //loop through matrix from bottom row to the top, and stack the elements found at the end of the arrays
  for(let i = mLen - 1; i >= 0; i--){
    newColIdx++
    for(let j = 0; j < mLen; j++){
      matrix[ mLen-(j+1)][newColIdx ] = matrix[i][j]
      console.log( matrix)
    }
    console.log(newColIdx)
  }

  //remove original elements from inner arrays
 while(mLen > 0){
   matrix.forEach( r => r.shift() )
   mLen--
 } 
  
  return matrix
}

//SUPER low run time. Need to clean this up.
var isValidSudoku = function(grid) {
  if(rowCheck(grid) === true &&
  colCheck(grid) === true &&
  boxCheck(grid) === true){
  return true
}
return false
};

function rowCheck(grid){
for(let i = 0; i < grid.length; i++){
  let row = grid[i].join('').replace(/[.]/g, '').split('')
  if(containsDups(row) === true) {return false}
}
return true
}

function colCheck(grid){
for(let i = 0; i < grid.length; i++){
  let col = []
  for(let j = 0; j < grid[i].length; j++){
    col.push(grid[j][i])
  }
  let col1 = col.join('').replace(/[.]/g, '').split('')
  if(containsDups(col1) === true) {return false}
}
return true
}

function boxCheck(grid){
for(let i = 0; i < grid.length; i+=3){
  for(let j = 0; j < grid[i].length; j+=3){
    let box = [
      grid[i][j],
      grid[i][j+1],
      grid[i][j+2],
      grid[i+1][j],
      grid[i+1][j+1],
      grid[i+1][j+2],
      grid[i+2][j],
      grid[i+2][j+1],
      grid[i+2][j+2],
    ]
  let box1 = box.join('').replace(/[.]/g, '').split('')
  if(containsDups(box1) === true) {return false}
  }
}
return true
}


function containsDups(array){
const count = {};

array.forEach( (num,i) => {
  count[num] = count[num] || 0
  count[num]++
})

let countArr = Object.values(count)

for(let i = 0; i < countArr.length; i++){
  if(countArr[i] !== 1){
    return true
  }
}
  return false
}

const linearSearch = function(array, value){
  for( let i=0; i < array.length; i++){
    if(array[i]===value){
      return i
    }    
  }
  return -1
}

const binarySearch = function(array,target){
  let left = 0
  let right = array.length -1
  
  while(left <= right){
      let mid = left + Math.floor((right-left) / 2);
      if( target === array[mid] ){
        return mid
      }
      if(target < array[mid]){
        right = mid - 1
      }
      else {
        left = mid + 1
      }
   } 
  return -1
}

function bubble(array){
  
  let j = 0
  
  while(j < array.length){
        for(let i = 0; i < array.length; i++){
    
          if(array[i] > array[i+1]){
             let stored = array[i];
             array[i] = array[i+1];
             array[i+1] = stored;
               }

          }
          j++
        }
  return array
}

let selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
              min = j;
          }
      }
      if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
      }
  }
  return arr;
}