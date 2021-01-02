// QUEUE -- FIFO -- FIRST IN FIRST OUT

// Linked list implementation

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   enqueue(val) {
//     // Enqueueing value
//     // *-->*-->*
//     const newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       const holdingPointer = this.last;
//       this.last.next = newNode;
//       this.last = this.last.next;
//     }
//     this.length++;
//     return this;
//   }

//   dequeue() {
//     // Dequeueing
//     if (this.length === 0) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.first = null;
//       this.last = null;
//     } else {
//       const holdingPointer = this.first;
//       this.first = holdingPointer.next;
//     }
//     this.length--;
//     return this;
//   }

//   peek() {
//     // peek the first item
//     if (!this.first) return null;
//     else return this.first.val;
//   }
// }

// Array implementation

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
    return this;
  }

  dequeue() {
    if (this.data.length > 0) {
      this.data.splice(0);
      return this;
    } else {
      return this;
    }
  }

  peek() {
    if (this.data.length === 0) return null;
    return this.data[0];
  }
}

const info = new Queue();
info.enqueue(25).enqueue(35).enqueue(45);
info.dequeue().dequeue().dequeue();
console.log(info);
