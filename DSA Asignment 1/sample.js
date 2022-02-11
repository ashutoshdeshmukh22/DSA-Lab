class Stack {
  constructor(sz) {
    this.data = new Array();
    this.top = -1;
    this.size = sz;
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

  isPalindrome(s) {
    // var st = [];
    // Finding the mid
    var i,
      mid = parseInt(this.size / 2);
    for (i = 0; i < mid; i++) {
      this.data.push(s[i]);
    }
    // Checking if the length of the string is odd, if odd then neglect the middle character
    if (this.size % 2 != 0) {
      i++;
    }
    var ele;
    // While not the end of the string
    while (i != s.length) {
      ele = this.data[this.size - 1];
      this.data.pop();
      if (ele != s[i]) return false; // If the characters differ then the given string is not a palindrome
      i++;
    }

    return true;
  }

  display() {
    var t = this.top - 1; // as top variable points to the element position
    while (t >= 0) {
      console.log(this.data[t]);
      t--;
    }
  }
}
var stk = new Stack();
stk.push(5);
stk.push(5);
stk.push(5);
stk.display();
var n = prompt('Enter The No To Check Palindrome');
if (stk.isPalindrome(n)) {
  document.write(n + ' is a Palindrome Number');
  console.log(n + ' is a Palindrome Number');
} else {
  document.write(n + ' is Not a Palindrome Number');
  console.log(n + ' is a Not Palindrome Number');
}
