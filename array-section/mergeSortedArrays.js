alert('mergeSortedArrays');

//given 2 sorted arrays. write a function to merge these sorted arrays into one sorted array.


// brute force solution
function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let mergedArr = arr1.concat(arr2);

  for (let i = 0; i < mergedArr.length; i++) {
    for (let j = i + 1; j < mergedArr.length; j++) {
      if (mergedArr[i] > mergedArr[j]) {
        let temp = mergedArr[i];
        mergedArr[i] = mergedArr[j];
        mergedArr[j] = temp;
      }
    }
  }
  return mergedArr;
}

// solutions with better time complexity
function mergeSortedArrays2(arr1, arr2) {
  const mergedArr = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {

    if (!array2Item || array1Item < array2Item) {
      mergedArr.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(array2Item);
      array2Item = arr2[j];
      j++;
    }


  }

  return mergedArr;

}


console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
