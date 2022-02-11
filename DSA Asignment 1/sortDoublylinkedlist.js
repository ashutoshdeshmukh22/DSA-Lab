class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class sortDoublylinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = this.tail = newNode;
      this.head.previous = null;
      this.tail.next = null;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      this.tail.next = null;
    }
  }

  sortList() {
    if (this.head == null) {
      console.log('List Is Empty');
    } else {
      var current = this.head;
      while (current.next != null) {
        var index = current.next;
        while (index != null) {
          if (current.data > index.data) {
            let temp = current.data;
            current.data = index.data;
            index.data = temp;
          }
          index = index.next;
        }
        current = current.next;
      }
    }
  }

  display() {
    current = this.head;
    if (this.head == null) {
      console.log('List Is Empty');
    } else {
      var current = this.head;
      while (current != null) {
        console.log(current.data + ' ->');
        current = current.next;
      }
    }
  }
}

var dll = new sortDoublylinkedlist();

dll.push(7);
dll.push(1);
dll.push(4);
dll.push(5);
dll.push(2);

console.log('Doubly Linked List Before Sorting');
dll.display();

console.log('Doubly Linked List After Sorting');
dll.sortList();
dll.display();
