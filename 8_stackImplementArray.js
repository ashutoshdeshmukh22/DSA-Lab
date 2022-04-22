class Stack {
  constructor(sz) {
    this.data = new Array();
    this.top = -1;
    this.size = sz;
  }
  push(value) {
    if (this.top == this.size - 1) {
      console.log('Stack is Full');
    } else {
      this.top++;
      this.data[this.top] = value;
    }
  }
  pop() {
    if (this.top == 1) {
      console.log('Stack Is Empty');
    } else {
      let temp = this.data[this.top];
      this.top--;
      return temp;
    }
  }
  display() {
    for (let i = this.top; i >= 0; i--) {
      console.log(this.data[i] + ' ->');
    }
    // var t = this.top; // as top variable points to the element position
    // while (t >= 0) {
    //   console.log(this.data[t]);
    //   t--;
    // }
  }
}
var stk = new Stack();
stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);
stk.pop();
stk.display();

// Another Implementation
// class Stack {
//   constructor(s) {
//     this.data = new Array();
//     this.top = -1;
//     this.size = s;
//   }
//   push(value) {
//     if (this.top == this.size - 1) {
//       document.write('Stack is full');
//     } else {
//       this.top++;
//       this.data.unshift(value);
//     }
//   }
//   pop() {
//     if (this.top == -1) {
//       document.write('Stack is empty');
//     } else {
//       let value = this.data.shift();
//       this.top--;
//     }
//   }
//   display() {
//     for (let i = 0; i <= this.top; i++) {
//       document.write(this.data[i] + '->');
//     }
//     document.write('null');
//   }
// }
// var s = new Stack(4);
// s.push(1);
// s.push(2);
// s.push(3);
// document.write('\n');
// s.display();
// document.write('<br>AFTER POP <br>');
// s.pop();
// s.display();
