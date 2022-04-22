class CQ {
  constructor(sz) {
    this.data = new Array();
    this.front = -1;
    this.rear = -1;
    this.size = sz;
  }
  enqueue(value) {
    if (
      (this.front == 0 && this.rear == this.size - 1) ||
      this.rear == this.front - 1
    ) {
      console.log('Queue is Full');
    } else {
      if (this.rear == -1) {
        this.rear++;
        this.front++;
        this.data[this.rear] = value;
      } else if (this.rear == this.size - 1) {
        this.rear = 0;
        this.data[this.rear] = value;
      } else {
        this.rear++;
        this.data[this.rear] = value;
      }
    }
  }
  dequeue() {
    if (this.rear == -1) {
      console.log('Queue is Empty');
    } else {
      if (this.front == this.size - 1) {
        value = this.data[this.front];
        this.front = 0;
        return value;
      } else if (this.front == this.rear) {
        value = this.data[this.front];
        this.front = -1;
        this.rear = -1;
        return value;
      } else {
        var value = this.data[this.front];
        this.front++;
        return value;
      }
    }
  }

  display() {
    if (this.rear == -1) {
      console.log('Queue is Empty');
    } else {
      if (this.rear >= this.front) {
        console.log('Elements In The Circular Queue: ');
        for (var i = this.front; i <= this.rear; i++) {
          console.log(this.data[i] + '->');
        }
      }
      // If rear crossed the max index and indexing has started in loop
      else {
        console.log('Elements In The Circular  Queue:');
        // Loop for printing elements from front to max size or last index
        for (var i = this.front; i <= this.size; i++) {
          console.log(this.data[i] + ' -->');
        }
        // Loop for printing elements from 0th index till rear position
        for (var i = 0; i <= this.rear; i++) {
          console.log(this.data[i] + ' --->');
        }
      }
    }
  }
}

var cqueue = new CQ(5);

cqueue.enqueue(10);
cqueue.enqueue(20);
cqueue.enqueue(30);
cqueue.enqueue(40);
cqueue.enqueue(50);

cqueue.display();

cqueue.dequeue();
cqueue.dequeue();
console.log('After Dequeue:');
cqueue.display();
