class Stack {
  constructor(s) {
    this.data = new Array();
    this.top = -1;
    this.size = s;
  }
  push(val) {
    if (this.top == this.size - 1) {
      document.write('Stack is full');
    } else {
      this.top++;
      this.data.unshift(val);
    }
  }
  pop() {
    if (this.top == -1) {
      document.write('Stack is empty');
    } else {
      let val = this.data.shift();
      this.top--;
      //document.write(val);
    }
  }
  peek() {
    return this.data[this.top];
  }
}
function isBalanced(str) {
  let s = new Stack(6);
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if (letter === '(' || letter === '[' || letter === '{') {
      s.push(letter);
      //console.log(s);
    } else if (letter === ')' || letter == ']' || letter === '}') {
      if (s.peek() === '(') {
        s.pop();
      } else if (s.peek() === '[') {
        s.pop();
      } else if (s.peek() === '{') {
        s.pop();
      } else return 'Not Balanced expression ';
    }
  }
  if (s.top === -1) {
    return 'Balanced expression ';
  } else {
    return 'Not Balanced expression ';
  }
}
var exp1 = '{[a+b](b-a)}';
document.write(exp1);
document.write(isBalanced(exp1));
var exp2 = '{(a+b)[}';
document.write(exp2);
document.write(isBalanced(exp2));
