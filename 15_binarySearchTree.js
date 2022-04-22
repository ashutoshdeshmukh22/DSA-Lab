class Node {
  constructor(value) {
    this.data = value;
    // this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var nnode = new Node(value);
    if (this.root == null) {
      this.root = nnode;
      return;
    } else {
      var tempRoot = this.root;
      while (true) {
        if (tempRoot.data > nnode.data) {
          if (tempRoot.left == null) {
            tempRoot.left = nnode;
            return;
          }
          tempRoot = tempRoot.left;
        } else {
          if (tempRoot.right == null) {
            tempRoot.right = nnode;
            return;
          } else {
            tempRoot = tempRoot.right;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return undefined;
    return found;
  }

  // this function calls removeNode
  remove(value) {
    this.root = this.deleteNode(this.root, value);
  }
  // a recursive function to insert a new value in binary search tree

  deleteNode(current, value) {
    // base case, if the tree is empty

    if (current === null) return current;

    // when value is the same as current's value, this is the node to be deleted

    if (value === current.value) {
      // for case 1 and 2, node without child or with one child

      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        /// node with two children, get the inorder successor,
        //smallest in the right subtree

        let tempNode = this.kthSmallestNode(current.right);
        current.value = tempNode.value;

        /// delete the inorder successor

        current.right = this.deleteNode(current.right, tempNode.value);
        return current;
      }

      // recur down the tree
    } else if (value < current.value) {
      current.left = this.deleteNode(current.left, value);
      return current;
    } else {
      current.right = this.deleteNode(current.right, value);
      return current;
    }
  }

  /// helper function to find the smallest node
  kthSmallestNode(node) {
    while (!node.left === null) node = node.left;
    return node;
  }

  search(data, key) {
    // if trees is empty return null
    if (this.data === null) {
      console.log('Tree is Empty');
    }
    // if data is less than root's data move left
    else if (key < this.data.key) {
      return this.search(this.data.left, this.data);
    }
    // if data is less than root's data move left
    else if (key > this.data.key) {
      return this.search(this.data.right, key);
    }
    // if data is equal to the root data return root
    else {
      console.log('Value is equal to root ');
      return data;
    }
  }

  display() {
    this.inorder(this.root);
  }
  inorder(root) {
    let current = root;
    if (current != null) {
      this.inorder(current.left);
      console.log(current.data + ' ->');
      this.inorder(current.right);
    }
  }
}

var bst = new BinarySeachTree();
bst.insert(22);
bst.insert(11);
bst.insert(12);
bst.insert(28);
bst.insert(21);
bst.insert(23);

bst.display();
console.log('After Deleting ');
bst.remove(21);
bst.display();
