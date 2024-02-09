class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
      this.capacity = capacity;
      this.length = 0;
      this.array = new Array();
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
      return this.array[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
      this.array[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
      if (this.length === this.capacity) {
          this.resize();
      }

      this.array[this.length] = n;
      this.length++;
  }

  /**
   * @returns {number}
   */
  popback() {
      if (this.length > 0) {
          this.length--;
      }
      
      return this.array[this.length]; 
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity *= 2; // double the capacity
    const newArr = new Array(this.capacity); // create a new array
    for (let i = 0; i < this.length; i++) {
        newArr[i] = this.array[i];
    }
    this.array = newArr;
  }

  /**
   * @returns {number}
   */
  getSize() {
      return this.length;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
      return this.capacity;
  }
}

// ["Array", 1, "getSize", "getCapacity", "pushback", 1, "pushback", 2, "pushback", 3, "pushback", 4, "pushback", 5, "pushback", 6, "pushback", 7, "pushback", 8, "pushback", 9, "getSize", "getCapacity", 
// "popback", "popback", "popback", "popback", "popback", "popback", "popback", "popback", "popback", "getSize", "getCapacity"]

// expected: [null,0,1,null,null,null,null,null,null,null,null,null,9,16,9,8,7,6,5,4,3,2,1,0,16]

let da = new DynamicArray(1);
console.log(da.getSize());
console.log(da.getCapacity());
console.log(da.pushback(1));
console.log(da.pushback(2));
console.log(da.pushback(3));
console.log(da.pushback(4));
console.log(da.pushback(5));
console.log(da.pushback(6));
console.log(da.pushback(7));
console.log(da.pushback(8));
console.log(da.pushback(9));
console.log(da.array);
console.log(da.getSize());
console.log(da.getCapacity());
console.log(da.popback());
console.log(da.popback());
console.log(da.popback());
console.log(da.popback());
console.log(da.popback());
console.log(da.popback());
console.log(da.popback());
console.log(da.popback());
console.log(da.popback());
console.log(da.getSize());
console.log(da.getCapacity());
// console.log(da.pushback(2));
// console.log(da.array);
// console.log(da.getSize());
// console.log(da.getCapacity());
// console.log(da.get(1));
// console.log(da.set(1, 3));
// console.log(da.array);
// console.log(da.get(1));
// console.log(da.popback());
// console.log(da.getSize());
// console.log(da.getCapacity());
// console.log(da.array);