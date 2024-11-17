// Given an array of integers and a target value, determine if there are any two integers in the array that sum to the target value

// Elements and sum both are whole numbers not decimal or fractional.
// Elements can repeat but not of same index can be summed to the target value.


// Naive
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum)
                return true;
        }
    }

    return false;
}

// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

console.log(hasPairWithSum([6, 4, 5, 2, 1, 7], 9))
console.log(hasPairWithSum2([6, 4, 5, 2, 1, 7], 9))