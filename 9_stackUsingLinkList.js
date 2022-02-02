class Node {
  constructor() {
    this.data = 0;
    this.link = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(x) {
    let temp = new Node();
    if (temp == null) {
      console.log('Stack is full');
      return;
    }
    temp.data = x;
    temp.link = this.top;
    this.top = temp;
  }

  pop() {
    if (this.top == null) {
      console.log('Stack is empty');
      return;
    }
    this.top = this.top.link;
  }

  display() {
    if (this.top == null) {
      console.log('Stack is empty');
    } else {
      let temp = this.top;
      while (temp != null) {
        console.log(temp.data + '->');
        temp = temp.link;
      }
    }
  }
}

let obj = new Stack();
obj.push(11);
obj.push(22);
obj.push(33);
obj.push(44);
//obj.display();
obj.pop();
obj.display();
