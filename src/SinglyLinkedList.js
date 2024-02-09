class ListNode {
  constructor(val, next = null) {
      this.val = val;
      this.next = next;
  }
}

class LinkedList {
  /**
   * initialize an empty linked list
   */
  constructor() {
      // tail is the same as head to begin with
      this.head = null;
      this.tail =null;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
      console.log(`get( ${index} )`);
      
      let currentNode = this.head;
      let i = 0;

      while (currentNode) {
        if (i === index) {
          return currentNode.val;
        }
        currentNode = currentNode.next;
        i++;
      }

      return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
      const newNode = new ListNode(val);

      if (this.head) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        this.head = newNode;
        this.tail = newNode;
      }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
      const newNode = new ListNode(val);
      
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = this.tail.next;
      } else {
        this.head = newNode;
        this.tail = newNode;
      }
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
      let currentNode = this.head;
      let previousNode = null;
      let i = 0;

      // locate the node at the given index
      while (i < index && currentNode) {            
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }

      // head: {"val":1,"next":{"val":2,"next":null}}
      // tail: {"val":2,"next":null}
      // remove index 1 (tail)
      if (currentNode) { // node to remove
        // point the previous node to the next node
        if (previousNode && !currentNode.next) { // removing tail node
          console.log("removing tail node");
          this.tail = previousNode;
          previousNode.next = null;
          return true;
        } else if (previousNode && currentNode.next) { // removing a middle node
          console.log("removing a middle node");
          previousNode.next = currentNode.next;
          return true;
        } else if (index === 0 && currentNode.next) { // removing head node
          console.log("removing head node");
          this.head = currentNode.next;
          return true;
        } else { // emptying the list
          console.log("emptying the list");
          this.head = null;
          this.tail = null;
          return true;
        }
      }

      return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
      let listArr = [];  
      let i = 0;
      let currentNode = this.head;
      while (currentNode !== null) {
        listArr[i] = currentNode.val;
        i++;
        currentNode = currentNode.next;
      }
      return listArr;
  }
}

// Input:
//["insertTail", 1, "insertTail", 2, "get", 1, "remove", 1, "insertTail", 2, "get", 1, "get", 0]

// Output:
// [null,null,2,true,null,2,1]

let sll = new LinkedList();
console.log(sll.insertHead(1));
//console.log(sll.getValues());
//console.log(sll.remove(0));
//console.log(sll.getValues());
//console.log(sll.insertHead(2));
console.log(`head: ${JSON.stringify(sll.head)}`);
console.log(`tail: ${JSON.stringify(sll.tail)}`);
console.log(sll.remove(2));
console.log(sll.remove(1));
// console.log(sll.insertTail(1));
// console.log(`head: ${JSON.stringify(sll.head)}`);
// console.log(`tail: ${JSON.stringify(sll.tail)}`);
// console.log(sll.insertTail(2));
// console.log(`head: ${JSON.stringify(sll.head)}`);
// console.log(`tail: ${JSON.stringify(sll.tail)}`);
//console.log(sll.getValues());
// console.log(sll.get(1));
// console.log(`head: ${JSON.stringify(sll.head)}`);
// console.log(`tail: ${JSON.stringify(sll.tail)}`);
//console.log(sll.getValues());
// console.log(sll.remove(1));
// console.log(`head: ${JSON.stringify(sll.head)}`);
// console.log(`tail: ${JSON.stringify(sll.tail)}`);

// console.log(sll.insertTail(2));
// console.log(`head: ${JSON.stringify(sll.head)}`);
// console.log(`tail: ${JSON.stringify(sll.tail)}`);
// console.log(sll.get(1));
// console.log(`head: ${JSON.stringify(sll.head)}`);
// console.log(`tail: ${JSON.stringify(sll.tail)}`);
// console.log(sll.get(0));
// console.log(`head: ${JSON.stringify(sll.head)}`);
// console.log(`tail: ${JSON.stringify(sll.tail)}`);
// console.log(sll.insertTail(5));
// console.log(sll.getValues());
//console.log(sll.get(0));
//console.log(sll.getValues());
//console.log(sll.remove(0));
//console.log(sll.getValues());