class Node {
  constructor() {
    this.data = 0;
    this.next = null;
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
    temp.next = this.top;
    this.top = temp;
  }

  pop() {
    if (this.top == null) {
      console.log('Stack is empty');
      return;
    }
    this.top = this.top.next;
  }

  display() {
    if (this.top == null) {
      console.log('Stack is empty');
    } else {
      let temp = this.top;
      while (temp != null) {
        console.log(temp.data + '->');
        temp = temp.next;
      }
    }
  }
}

let obj = new Stack();
obj.push(11);
obj.push(22);
obj.push(33);
obj.push(44);
obj.display();
obj.pop();
console.log('after pop');
obj.display();

// Another Implementation
// class Node {
//   constructor(value) {
//     this.data = value;
//     this.next = null;
//   }
// }
// class Stacknext {
//   constructor(value) {
//     this.head = null;
//     this.top = -1;
//     this.size = value;
//   }
//   push(value) {
//     var temp = new Node(value);
//     if (this.top == this.size - 1) {
//       console.log('Stack is full');
//     } else {
//       if (this.head == null) {
//         this.head = temp;
//       } else {
//         temp.next = this.head;
//         this.head = temp;
//         this.top++;
//       }
//     }
//   }
//   pop() {
//     var temp = this.head;
//     if (this.top == -1) {
//       console.log('Stack is empty');
//     } else {
//       this.head = temp.next;
//       this.top--;
//     }
//   }
//   display() {
//     var current = this.head;
//     if (this.head == null) {
//       console.log('Stack is empty');
//     } else {
//       while (current.next) {
//         console.log(current.data + ' ->');
//         current = current.next;
//       }
//       console.log(current.data + ' ');
//     }
//   }
// }
// var s = new Stacknext(4);
// s.push(1);
// s.push(2);
// s.push(3);
// s.display();
// console.log('AFTER POP');
// s.pop();
// s.display();
