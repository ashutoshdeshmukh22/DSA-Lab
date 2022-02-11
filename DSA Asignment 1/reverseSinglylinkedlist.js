class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  display() {
    var tnode = this.head;
    while (tnode != null) {
      // document.write(tnode.data + ' ');
      console.log(tnode.val + ' -> ');
      tnode = tnode.next;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

var l1 = new singlyLinkedList();

l1.push(10);
l1.push(20);
l1.push(30);
l1.push(40);

console.log('Given linked list : ');
l1.display();

this.head = l1.reverse(this.head);

console.log('Reversed Linked list');
l1.display();
