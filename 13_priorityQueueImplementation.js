class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    // creating object from queue element
    var qElement = new QElement(element, priority);
    var contain = false;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // Once the correct location is found it is
        // enqueued
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(qElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }

  front() {
    // returns the highest priority element in the Priority queue without removing it.
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[0];
  }

  rear() {
    // returns the lowest priority lement of the queue
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printPQueue() {
    var str = '';
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i].element + ' ';
    return str;
  }
}

var priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());
console.log(priorityQueue.front());

priorityQueue.enqueue('Ashutosh', 2);
priorityQueue.enqueue('Swanand', 1);
priorityQueue.enqueue('Saurabh', 1);
priorityQueue.enqueue('Shreyash', 2);
priorityQueue.enqueue('Gaurav', 3);

console.log(priorityQueue.printPQueue());
console.log(priorityQueue.front().element);
console.log(priorityQueue.rear().element);
console.log(priorityQueue.dequeue().element);
priorityQueue.enqueue('Sunil', 2);
console.log(priorityQueue.printPQueue());
