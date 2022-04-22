class TNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var nnode = new TNode(value);
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
  display() {
    this.inorder(this.root);
  }
  inorder(root) {
    var tempRoot = root;
    if (tempRoot != null) {
      this.inorder(tempRoot.left);
      console.log(tempRoot.data + ' ->');
      this.inorder(tempRoot.right);
    }
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
}

var tr = new BST();
tr.insert(22);
tr.insert(12);
tr.insert(9);
tr.insert(10);
tr.insert(30);
tr.insert(25);
tr.insert(35);

tr.display();

tr.search(22, 10);
