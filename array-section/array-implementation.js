alert('array implementation');

class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  getItemAtIndex(index){
    return this.data[index];
  }

  push(item){
    const newItem = item;
    this.data[this.length] = newItem;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  deleteItemAt(index){
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index){
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  
}

const newArray = new MyArray();
console.log(newArray);

console.log(newArray.push(1));
console.log(newArray.push(3));
console.log(newArray.push(5));
console.log(newArray.push(7));
console.log(newArray.push(9));

console.log(newArray);

console.log(newArray.pop());

// console.log(newArray);

console.log(newArray.getItemAtIndex(2));
// console.log(newArray);

console.log(newArray.deleteItemAt(1));
// console.log(newArray);
