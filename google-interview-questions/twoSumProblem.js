alert("Two sum problem!!!");

// given am array of integers, return the indices of the two numbers that add up to a given target.
// 1st argument = [1,3,7,9,2]
// target = 11

//step 1: verify constraints
// are all the numbers positive? yes
// are there duplicates numbers? no
// will there always be a pair avaiable? no
// if no pair exists what we should return ? null or -1
// can there be multiple pairs that add up to target ? no only 1 pair

// step 2: write out some test cases
//  [1,3,7,9,2] target = 11  --> [3,4]
// [1,3,7,9,2] target = 25  --> null
// [] target=1 --> null
// [5] target=5 --> null
// [1,2] target=3 --> [0,1]

//step 3: Figure out a solution without code
// 2 pointer technic like the brute force for nested loop
//first loop p1 pointer
//second loop p2 pointer

//step4: write out our code solution

// brute force
function twoSum(arr, sum) {
  if (arr.length === 0 || arr.length === 1) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let numberToFind = sum - arr[i];
      if (arr[j] === numberToFind) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSum([1, 3, 7, 9, 2], 11));
console.log(twoSum([1, 3, 7, 9, 2], 25));
console.log(twoSum([], 11));
console.log(twoSum([11], 11));
console.log(twoSum([1, 10], 11));

// step 5: check for errors in the code for it to run and give output.
// step 6: test the code with the test cases 
// step 7: analysising the space and time complexity of our solution.

// T : O(n^2)
// S: O(1)

// step 8: optimizing the code solution 
// find out what is causing the time complexity 
// find out ways to either eleminate or merge the loops to reduce time complexity


function optimizedTwoSum(array, sum){
  if (array.length === 0 || array.length === 1) {
    return null;
  }
  let mapObj ={};

  for(let i=0; i<array.length; i++){
    let currentMapValue = mapObj[array[i]];
    
    if(currentMapValue >=0){
      
      return [currentMapValue, i];
    }else{
      const ntf= sum - array[i];
      mapObj[ntf] = i;
    }
  }
  return null;
}

console.log('optimised code result')
console.log(optimizedTwoSum([1, 3, 7, 9, 2], 11));
console.log(optimizedTwoSum([1, 3, 7, 9, 2], 25));
console.log(optimizedTwoSum([], 11));
console.log(optimizedTwoSum([11], 11));
console.log(optimizedTwoSum([1, 10], 11));


// step 9: testing our optimal solution with other test cases & space complexity and time complexity

//Time complexity : O(n)
//Space complexity: O(n)


