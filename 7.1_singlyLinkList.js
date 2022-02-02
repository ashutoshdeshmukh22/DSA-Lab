var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function insertAtBegin(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

function insertAtLast(new_data) {
  var new_node = new Node(new_data);
  if (head == null) {
    head = new Node(new_data);
    return;
  }
  new_node.next = null;

  var last = head;
  while (last.next != null) last = last.next;

  last.next = new_node;
  return;
}

function insertAtPos(value, pos) {
  let cur = this.head;
  let index = 0;
  if (pos <= 0 || pos > this.count + 1) {
    console.log('Out of Range');
  } else {
    if (pos == 1) this.insertAtBegin(value);
    else if (pos == this.count + 1) this.insertAtLast(value);
    else {
      while (index < pos - 2) {
        cur = cur.next;
        index++;
      }
      let temp = new Node(value);
      temp.next = cur.next;
      cur.next = temp;
    }
  }
}

function removeAtFirst() {
  if (this.head == null) {
    console.log('List is Empty');
  } else {
    let temp = this.head;
    this.head = this.head.next;
    temp = null;
  }
}

function removeAtLast() {
  if (this.head == null) {
    console.log('List is Empty');
  } else if (this.head.next == null) {
    this.head.next = null;
  } else {
    let temp = this.head;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
    this.count--;
  }
}

function removeFromPos(value) {
  if (value < 1) {
    console.log('position should be >= 1');
  } else if (value == 1 && head != null) {
    let nodeToDelete = head;
    head = head.next;
    nodeToDelete = null;
  } else {
    let temp = new Node();
    temp = head;
    for (let i = 1; i < value - 1; i++) {
      if (temp != null) {
        temp = temp.next;
      }
    }
    if (temp != null && temp.next != null) {
      let nodeToDelete = temp.next;
      temp.next = temp.next.next;
      nodeToDelete = null;
    } else {
      console.log('The Node is Already Null');
    }
  }
}

function printList() {
  var tnode = head;
  while (tnode != null) {
    // document.write(tnode.data + ' ');
    console.log(tnode.data + ' -> ');
    tnode = tnode.next;
  }
}

insertAtBegin(10);
insertAtBegin(20);
insertAtBegin(30);
insertAtBegin(40);

insertAtLast(50);

insertAtPos(100, 3);

// removeAtFirst();
// removeAtLast();
// removeFromPos(3);

printList();
