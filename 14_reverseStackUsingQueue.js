class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (this.isEmpty()) return 'Underflow situation';
    else return this.elements.pop();
  }

  isEmpty() {
    return this.elements.length == 0;
  }

  print() {
    return this.elements;
  }
}

class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.elements.shift();
    } else {
      return 'Underflow situation';
    }
  }

  isEmpty() {
    return this.elements.length == 0;
  }
}

function reverse(stack) {
  const queue = new Queue(); //Creating a new queue
  while (!stack.isEmpty()) {
    // Looping until the stack is empty.
    queue.enqueue(stack.pop()); //Enqueue the popped stack element.
  }

  while (!queue.isEmpty()) {
    //Looping until the queue is empty.
    stack.push(queue.dequeue()); //Pushed the dequeued queue element.
  }
}

//Creates a new stack.
const stack = new Stack();

//Pushes 3 strings onto the stack
stack.push('Welcome');
stack.push('There');
stack.push('Hi');

//Prints the stack before the reversal.
console.log('Printing stack before reversal: ', stack.print());

//Reverses the stack.
reverse(stack);

//Prints the stack after the reversal.
console.log('Printing stack after reversal: ', stack.print());
