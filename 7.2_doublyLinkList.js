class DDnode {
  constructor(value) {
    this.prev = null;
    this.data = value;
    this.next = null;
  }
}
class Dlinklist {
  constructor() {
    this.head = null;
    this.cnt = 0;
  }
  insertAtBegin(value) {
    var newnode = new DDnode(value);
    newnode.next = this.head;
    this.head = newnode;
    this.cnt++;
  }
  Display() {
    if (head == null) {
      console.log('List is Empty');
    } else {
      var cur = head;
      while (cur != null) {
        console.log(cur.data + ' ->');
        cur = cur.next();
      }
    }
  }
}

var dll = new Dlinklist();
dll.insertAtBegin(10);
dll.insertAtBegin(20);
dll.insertAtBegin(30);
dll.insertAtBegin(40);

dll.Display();
