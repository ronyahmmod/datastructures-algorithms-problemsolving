// STACK-LIFO

// LINKED LIST IMPLEMENTATION

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.botom = null;
    this.length = 0;
  }

  push(value) {
    // *--*--*--*--
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.botom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.botom === this.top) {
      this.botom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer.value;
  }

  peek() {
    if (!this.top) return null;
    else return this.top;
  }
}

// Array Implementation

// class Stack {
//   constructor() {
//     this.data = [];
//   }

//   push(value) {
//     this.data.push(value);
//     return this.data;
//   }

//   pop() {
//     this.data.pop();
//     return this;
//   }

//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }

const process = new Stack();
process.push(5);
process.push(10);
process.push(15);
process.pop();
process.pop();
process.pop();

console.log(process);
console.log(process);

console.log(process.peek());
