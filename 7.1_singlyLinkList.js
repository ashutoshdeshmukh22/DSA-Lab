//creating a node class
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
//implementing linked list using class
class SLL {
  constructor() {
    this.head = null; //head is null by default which means list is empty
    this.size = 0; //keep track of size of the list . 0 by default
  }
  //insert first node
  insertFirst(value) {
    //create new node
    var newnode = new Node(value);
    //if list is empty add the value and make it as first
    if (this.head == null) {
      //document.write("Empty List");
      this.head = newnode;
      this.size++;
    } else {
      newnode.next = this.head;
      this.head = newnode;
      this.size++;
    }
  }
  //insert last node
  insertLast(value) {
    //creates new node
    var newnode = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newnode;
    this.size++;
  }
  //insert at pos
  insertPos(value, pos) {
    var newnode = new Node(value);
    let current = this.head;
    let i = 1;
    if (pos < 0 || pos > this.size) {
      document.write('Invalid Position');
    } else if (pos == 1) {
      this.insertFirst(value);
    } else if (pos == this.count) {
      this.insertLast(value);
    } else {
      while (i < pos - 1) {
        current = current.next;
        i++;
      }
      newnode.next = current.next;
      current.next = newnode;
      this.size++;
    }
  }
  //delete first
  deletefirst() {
    let current = this.head;
    if (this.head == null) {
      document.write('Empty');
    } else {
      this.head = current.next;
      current.next = null;
      this.size--;
    }
  }
  //deletelast
  deletelast() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.count--;
  }
  //delete at position
  deletepos(pos) {
    let i = 1;
    let current = this.head;
    if (pos < 0 || pos > this.count) {
      document.write('Invalid position');
    } else if (pos == 1) {
      this.deletefirst();
    } else {
      while (i < pos - 1) {
        current = current.next;
        i++;
      }
      let temp = current.next;
      current.next = temp.next;
      temp.next = null;
      this.count--;
    }
  }
  //display
  display() {
    let current = this.head;
    if (current == null) {
      console.log('Empty List');
    } else {
      while (current.next) {
        console.log(current.data + '->');
        current = current.next;
      }
      console.log(current.data + '-> null');
    }
  }
}
var SLL1 = new SLL();
SLL1.insertFirst(10);
SLL1.insertFirst(20);
SLL1.insertFirst(30);
SLL1.insertFirst(40);
SLL1.insertLast(50);
SLL1.insertLast(60);
SLL1.insertPos(11, 5);
SLL1.deletefirst();
SLL1.deletelast();
SLL1.deletepos(2);
SLL1.display();
