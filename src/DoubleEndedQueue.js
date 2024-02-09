class Node {
  constructor(val = -1) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * @return {boolean}
   * @description Determines if queue is empty or not
   */
  isEmpty() {
    return (this.size === 0);
  }

  /**
   * 
   * @param {number} val
   * @return {void} 
   * @description Append value to the end of the queue
   */
  append(val) {
    let newNode = new Node(val);
    
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  /**
   * 
   * @param {number} val 
   * @description Append value to beginning of queue
   */
  appendleft(val) {
    let newNode = new Node(val);

    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  /**
   * @return {number}
   * @description Removes and returns the value at the end of the queue or -1 if queue is empty
   */
  pop() {
    
    if (this.isEmpty()) {
      return -1;
    }

    const val = this.tail.val;

    if (this.tail.prev) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      this.tail = this.head = null;
    }

    this.size--;
    return val;
  }

  /**
   * @return {number}
   * @description Removes and returns the value at the beginning of the queue or -1 if the queue is empty
   */
  popleft() {
    
    if (this.isEmpty()) {
      return -1;
    }

    const val = this.head.val;
    this.head = this.head.next;

    this.size--;

    return val;
  }
}

const testDeque = (operations) => {

  const deq = new Deque();
  let output = [];
  let i = 0;
  
  console.log(`operations array: ${JSON.stringify(operations)}`);

  for (op of operations) {
    switch (op) {
      case "isEmpty":
        console.log(`calling isEmpty`);
        output.push(deq.isEmpty());
        break;
      case "append":
        console.log(`calling append with ${operations[i+1]}`);
        output.push(deq.append(operations[i+1]));
        break;
      case "appendLeft":
        console.log(`calling appendLeft with ${operations[i+1]}`);
        output.push(deq.appendLeft(operations[i+1]));
        break;
      case "pop":
        console.log(`calling pop`);
        output.push(deq.pop());
        break;
      case "popLeft":
        console.log(`calling popLeft`);
        output.push(deq.popLeft());
        break;
      default:
        console.log(`calling IGNORE value ${op}`);
        break;
    }
    i++;
  }

  return output;
};


// Input:
// ["isEmpty", "append", 10, "isEmpty", "appendLeft", 20, "popLeft", "pop", "pop", "append", 30, "pop", "isEmpty"]

// Output:
// [true, null, false, null, 20, 10, -1, null, 30, true]

console.log(testDeque(["isEmpty", "append", 1, "isEmpty", "appendLeft", 2, "isEmpty", "pop", "popLeft", "isEmpty"]));