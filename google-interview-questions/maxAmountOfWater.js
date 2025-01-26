//You are given an array of positive integers where each
// integer represents the height of a vertical line on a chart.
// Find two lines which togather with the x-axis forms a container that
// would hold the greatest amount of water.
// Return the area of the water it would hold.

// Understanding:
// Basically each array element is y axis value and x-axis is the position
// of the elements of array. We need to find the 2 heightest values in the array with max area
// To contain water , the water can only exists till the lower value of the two
// highest array. To calculate the area, we need to find the distance/ difference between
// the index of the lower and  higher value amongst the heighest values and take
//  the second highest value to calculate
//  area of water = length(2nd heightest height) * width(difference between 2 hightest)

// Step 1: verify the constarins

//1. Does the thickness of the lines affect the area? --> No, assume they take up no space.
//2. Do the left and right sides of the graph count as walls? --> no, the sides cannot be used to form a container.
// 3. Does a higher line inside our conatiner affect our area? --> No , line inside a conatiner don't affect the area.

// Step 2: Write out some test cases.

//best test case :[7,1,2,3,9] length = 7 width = indexOf 9 - indexOf 7 = 4-0=4 area=7*4=28
// [] =0
// [7] =0
// [6,9,3,4,5,8] length = 6 width = 5-0 =6 area=6*5=30
//               length =8 width =5-1 =4 area =8*4=32 sp correct is [9,8]

// Step 3: Figure out a solution without code

// we are looking for greatest amount of water --> so we have to check all configurations of the conatiners possibles

// length will be the lesser value of the 2 values we compare
// width will be the difference of index of left most value and right most value

//so area= min(a, b)*(indexof b - index of a)

// maxArea =0;
// we loop through to calculate the maxArea for each corresponding items in array
// and then check if the new maxArea calculated is more than the initial maxArea
// and if it is greater than the initial max area then update the maxArea value
// and conitnue the same through the loops and return the maxArea

function maxAreaofWater(arr) {
  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //let minOfHeight = arr[i] < arr[j] ? arr[i] : arr[j]; this is also correct just updated a work around for it
      //console.log('min between'+ arr[i] +'and '+ arr[j]+ "is : "+ minOfHeight)
      let minOfHeight = Math.min(arr[i], arr[j]);
      let width = j - i;
      let newArea = minOfHeight * width;
      //console.log('new Area is: '+ newArea);
      //   if (newArea > maxArea) {
      //     //console.log('newArea is greater');
      //     maxArea = newArea;
      //   }
      // the above if loop is working correctly , just updating another way to do it
      maxArea = Math.max(maxArea, newArea);
    }
  }
  return maxArea;
}

console.log(maxAreaofWater([7, 1, 2, 3, 9]));
console.log(maxAreaofWater([]));
console.log(maxAreaofWater([7]));
console.log(maxAreaofWater([6, 9, 3, 4, 5, 8]));

//step 8: we need to optimize our solution

// Optimized code for above code solution
// we will use shifting 2 pointer approach in this to bring down the time complexity

function OptimizedMaxAreaofWater(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    let minOfHeight = Math.min(arr[p1], arr[p2]);
    let width = p2 - p1;
    let newArea = minOfHeight * width;

    maxArea = Math.max(maxArea, newArea);

    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
}

console.log("Optimized code");

console.log(OptimizedMaxAreaofWater([7, 1, 2, 3, 9]));
console.log(OptimizedMaxAreaofWater([]));
console.log(OptimizedMaxAreaofWater([7]));
console.log(OptimizedMaxAreaofWater([6, 9, 3, 4, 5, 8]));
console.log(OptimizedMaxAreaofWater([4,8,1,2,3,9]))
