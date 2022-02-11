class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  printQueue() {
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i] + ' ->');
    }
  }
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }
}
class Stack {
  constructor(sz) {
    this.data = [];
    this.top = -1;
    this.size = sz;
  }
  isEmpty() {
    return this.data.length == 0;
  }
  reverseQueue(queue) {
    //Push all the items of the queue to the stack
    while (!queue.isEmpty()) {
      this.data.push(queue.dequeue());
    }
    //Again push all the items from the stack into the queue
    while (!stack.isEmpty()) {
      queue.enqueue(this.data.pop());
    }
    return queue;
  }
}

var queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log('Queue Before Reversing Using Stack');
console.log(queue.printQueue());

let stack = new Stack();
var reversedQueue = stack.reverseQueue(queue);

var finalQueue = reversedQueue.items;

console.log('Queue After Reversing Using Stack');
for (let i = 0; i <= finalQueue.length - 1; i++) {
  console.log(finalQueue[i] + ' ->');
}
