class Stack {
  constructor(sz) {
    this.data = new Array();
    this.top = -1;
    this.size = sz;
  }
  push(value) {
    if (this.top == size - 1) {
      console.log('Stack is Full');
    } else {
      this.top++;
      data[top] = value;
    }
  }
  pop() {
    if (this.top == 1) {
      console.log('Stack Is Empty');
    } else {
      let temp = data[top];
      top--;
      return temp;
    }
  }
  print() {
    var t = this.top - 1; // as top variable points to the element position
    while (t >= 0) {
      console.log(this.data[t]);
      t--;
    }
  }
}
var stk = new Stack();
stk.push(5);
stk.print();
