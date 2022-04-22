class Node {
  constructor(value) {
    this.prev = null;
    this.data = value;
    this.next = null;
  }
}
class doubly {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  //INSERT AT FIRST
  insertatfirst(val) {
    var newnode = new Node(val);
    if (this.head == null) {
      this.head = newnode;
    } else {
      newnode.next = this.head;
      newnode.prev = null;
      this.head = newnode;
      newnode.next.prev = newnode;
    }
    this.count++;
  }
  //INSERT LAST
  insertatlast(val) {
    var newnode = new Node(val);
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    newnode.next = null;
    newnode.prev = cur;
    cur.next = newnode;
    this.count++;
  }
  //INSERT BETWEEN
  insertatpos(val, pos) {
    let i = 1;
    var newnode = new Node(val);
    let cur = this.head;
    if (pos < 0 || pos > this.count) {
      alert('invalid position');
    } else if (pos == 1) {
      this.insertatfirst(val);
    } else if (pos == this.count) {
      this.insertatlast(val);
    } else {
      while (i < pos - 1) {
        cur = cur.next;
        i++;
      }
      newnode.next = cur.next;
      newnode.prev = cur;
      cur.next = newnode;
      newnode.next.prev = newnode;
      this.count++;
    }
  }
  //DELETEFIRST
  deleteatfirst() {
    var cur = this.head;
    if (this.head == null) {
      alert('emputy');
    } else {
      this.head = cur.next;
      cur.next.prev = null;
      cur.next = null;
      this.count--;
    }
  }
  //DELETELAST
  deleteatlast() {
    var cur = this.head;
    while (cur.next.next) {
      cur = cur.next;
    }
    var temp = cur.next;
    cur.next = null;
    temp.prev = null;
    this.count--;
  }
  deleteatpos(pos) {
    let cur = this.head;
    let i = 1;
    if (pos < 0 || pos > this.count) {
      alert('invalid position');
    } else if (pos == 1) {
      this.deleteatfirst();
    } else if (pos == this.count) {
      this.deleteatlast();
    } else {
      while (i < pos - 1) {
        cur = cur.next;
        i++;
      }
      var temp = cur.next;
      cur.next = temp.next;
      temp.next.prev = temp.prev;
      temp = null;
      this.count--;
    }
  }
  display() {
    let cur = this.head;
    if (this.head == null) {
      console.log('Empty List');
    } else {
      while (cur.next) {
        console.log(cur.data) + '->';
        cur = cur.next;
      }
      console.log(cur.data) + ' -> null';
    }
  }
}
var list1 = new doubly();
list1.insertatfirst(10);
list1.insertatfirst(20);
list1.insertatfirst(30);
list1.insertatfirst(40);
list1.insertatlast(50);
list1.insertatlast(60);
// list1.insertatpos(90, 6);
// list1.insertatfirst(56);
//list1.insertatpos(7,7);
//list1.deleteatfirst();
//list1.deleteatlast();
// list1.deleteatlast();
// list1.deleteatpos(3);
// list1.deleteatpos(4);
list1.display();
// console.log(list1.count);
