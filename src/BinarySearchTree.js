class TreeNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class TreeMap {
  constructor() {
    this.root = null;
  }

  /**
   * @param {number} key
   * @param {number} val
   * @returns {void}
   */
  insert(key, val) {
    let newTreeNode = new TreeNode(key, val);

    if (this.root === null) {
      this.root = newTreeNode;
      return;
    }
    
    let currentNode = this.root;

    while (true) {

      if (newTreeNode.key < currentNode.key) {
        
        if (currentNode.left === null) {
          currentNode.left = newTreeNode;
          break;
        }
        
        currentNode = currentNode.left;

      } else if (newTreeNode.key > currentNode.key) {
        
        if (currentNode.right === null) {
          currentNode.right = newTreeNode;
          break;
        }

        currentNode = currentNode.right;

      } else {
        newTreeNode.left = currentNode.left;
        newTreeNode.right = currentNode.right;
        currentNode = newTreeNode; // overwrite existing node with updated node

        if (this.root.key === currentNode.key) {
          this.root = currentNode;
        }

        break;
      }
    }
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    if (this.root === null) {
      return -1;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.val;
      } else if (key < currentNode.key) {
        currentNode = currentNode.left;
      } else if (key > currentNode.key) {
        currentNode = currentNode.right;
      }
    }

    return -1;
  }

  /**
   * @returns {number}
   */
  getMin() {
    if (this.root === null) {
      return -1;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.left === null) {
        return currentNode.val;
      } else {
        currentNode = currentNode.left;
      }
    }
  }

  /**
   * @returns {number}
   */
  getMax() {
    if (this.root === null) {
      return -1;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.right === null) {
        return currentNode.val;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /**
   * @param {number} key
   * @returns {void}
   */
  remove(key) {
    // removing a key is essentially re-creating the tree or a subtree of the tree
    this.root = this.removalTraversal(this.root, key);
  }

  removalTraversal(node, key) {
    if (node === null) {
      return;
    }

    if (key < node.key) {
      node = this.removalTraversal(node.left, key);
      return node;
    } else if (key > node.key) {
      node = this.removalTraversal(node.right, key);
      return node;
    } else {
      // found
      console.log(`else node = ${JSON.stringify(node)}`);

      if (!node.left) { // there is no left subtree
        return node.right; // the right subtree becomes the new tree
      } 
      
      if (!node.right) { // there is no right subtree
        return node.left; // the left subtree becomes the new tree
      } 

      //               6
      //            4     9
      //          3   5  8  10
      //        2              

      let minLargerNode = node.right;

      while (minLargerNode.left) {
        minLargerNode = minLargerNode.left;
      }
      node.key = minLargerNode.key;
      node.val = minLargerNode.val;
      node.right = this.removalTraversal(node.right, minLargerNode.key);
      return node;
    }
  }

  /**
   * @returns {number[]}
   */
  getInorderKeys() {
    if (this.root === null) {
      return [];
    }

    let keys = [];
    this.inorderTraversal(this.root, keys);
    return keys;
  }

  inorderTraversal(node, nodeArr) {
    if (node) {
      // console.log(`node = ${JSON.stringify(node)}`);
      this.inorderTraversal(node.left, nodeArr);
      nodeArr.push(node.key);
      this.inorderTraversal(node.right, nodeArr);
    }
  }
}


const testBST = (operations) => {

  const bst = new TreeMap();
  let output = [];
  let i = 0;
  
  console.log(`input: ${JSON.stringify(operations)}`);

  for (op of operations) {
    switch (op) {
      case "insert":
        console.log(`calling insert with key, value: ${operations[i+1]}, ${operations[i+2]}`);
        output.push(bst.insert(operations[i+1], operations[i+2]));
        break;
      case "get":
        console.log(`calling get with key: ${operations[i+1]}`);
        output.push(bst.get(operations[i+1]));
        break;
      case "getMin":
        console.log(`calling getMin`);
        output.push(bst.getMin());
        break;
      case "getMax":
        console.log(`calling getMax`);
        output.push(bst.getMax());
        break;
      case "remove":
        console.log(`calling remove with key: ${operations[i+1]}`);
        output.push(bst.remove(operations[i+1]));
        break;
      case "getInorderKeys":
        console.log(`calling getInorderKeys`);
        output.push(bst.getInorderKeys());
        break;
      default:
        console.log(`IGNORING value ${op}`);
        break;
    }
    i++;
  }

  return output;
};


// Input:
// ["insert", 1, 2, "insert", 4, 2, "insert", 3, 7, "insert", 2, 1, "getInorderKeys", "remove", 1, "getInorderKeys"]

// Output:
// [null,null,null,null,[1, 2, 3, 4],null,[2, 3, 4]]

console.log(testBST(["insert", 1, 10, "insert", 1, 20, "getInorderKeys", "get", 1]));