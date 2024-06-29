alert('reverseString');

// create a function that reverses a string - "My name is Megha Banerjee" then it should return
//"eejrenaB ahgeM si eman yM"

function reverseString(str) {
  if(!str || str.length<2){
    return str;
  }
  const strArr = str.split('');  // o(n)
  const reverseStrArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseStrArr.push(strArr[i]);   // o(n)
  }

  return reverseStrArr.join('');  // o(n)
}
function reverse2(str){
  return str.split('').reverse().join('');
}

const reverse3 = (str) => {
  return str.split('').reverse().join('');
}

const reverse4 = (str) => {
  return [...str].reverse().join('');
}

const str = "My name is Megha Banerjee";
console.log(reverseString(str));
console.log(reverse2(str));
console.log(reverse3(str));
console.log(reverse4(str))