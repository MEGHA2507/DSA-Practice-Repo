// Google Questions

// we have to find and return the first recurring character of the array.
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined

function firstRecurrCharacter(array) {
  let mapObj = {};
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (mapObj[array[i]]  && mapObj[array[i]]!== undefined) {
      return array[i];
    } else {
      mapObj[array[i]] = count + 1;
    }
  }

  return undefined;
}

console.log(firstRecurrCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurrCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurrCharacter([2, 3, 4, 5]));
console.log(firstRecurrCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
