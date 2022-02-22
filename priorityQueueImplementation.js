class Pnode {
  constructor(value, pr) {
    this.data = value;
    this.prt = pr;
    this.next = null;
  }
}
class PQ {
  constructor(sz) {
    this.front = null;
    this.rear = null;
    this.size = sz;
    this.cnt = 0;
  }
  enqueue(value, pr) {
    if (this.size == this.cnt) {
      console.log('Queu is full');
      return;
    } else {
      var temp = new Pnode(value, pr);
      if (this.front == null) {
        this.front = temp;
        this.rear = temp;
        this.cnt++;
        return;
      } else {
        if (this.front.prt < temp.prt) {
          temp.next = this.front;
          this.front = temp;
          this.cnt++;
          return;
        } else {
          if (this.front.next == null) {
            this.front.next = temp;
            this.rear = temp;
            this.cnt++;
            return;
          } else {
            var cur = this.front;
            while (cur.next.prt < temp.prt) {
              cur = cur.next;
              if (cur.next == null) {
                cur.next = temp;
                this.rear = temp;
                this.cnt++;
                return;
              }
            }
            temp.next = cur.next;
            cur.next = temp;
            this.cnt++;
            return;
          }
        }
      }
    }
  }

  dequeue() {}

  display() {
    var cur = this.front;
    while (cur != null) {
      console.log(cur.data + '->');
      cur = cur.next;
    }
  }
}
var pq = new PQ(5);
pq.enqueue(10);
pq.enqueue(20);
pq.enqueue(30);
pq.enqueue(40);
pq.enqueue(50);

pq.display();
