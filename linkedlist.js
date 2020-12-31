class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Append code here
    if (!value) return new Error("Null value is not allowed");
    const newNode = { value: value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    //  Prepend code here
    if (!value) return new Error("Null value is not allowed");
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const list = [];
    let currentItem = this.head;
    while (currentItem !== null) {
      list.push(currentItem.value);
      currentItem = currentItem.next;
    }

    return list;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index <= 0) this.prepend(value);
    const leader = this.traverseToIndex(index - 1);
    const newNode = { value: value, next: null };
    const targetNode = leader.next;
    leader.next = newNode;
    newNode.next = targetNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    if (!index) return "Index not found";
    if (index >= this.length) return "Bad index";
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    //   * > * > *
    if (!index) return "Index not found";
    if (index >= this.length) return "Bad index";
    if (index < 0) return "Bad index";
    if (this.length <= 0) return "There is no item";
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(22);
myLinkedList.insert(2, 77);
myLinkedList.remove(1);
console.log(myLinkedList.printList());
