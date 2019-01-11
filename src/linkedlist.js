const Node = require("./node");

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);
    if (this.length === 0) this.head = node;
    else {
      let newNode = this.head;
      let notNew;
      while (newNode.next) {
        notNew = newNode;
        newNode = newNode.next;
      }
      node.prev = newNode;
      newNode.next = node;
    }
    this.tail = node;
    this.length++;
  }

  indexOf(data) {
    let indexAcc = 0;
    // assign starting place:
    let pointer = this.head;
    // while pointer and subsequent aren't what you're looking for:
    while (pointer.next && pointer.data !== data) {
      // start traversing list:
      pointer = pointer.next;
      // increase indexing count respectively
      indexAcc++;
    }
    // return the index # if found correct one; otherwise keep going:
    return pointer.data === data ? indexAcc : false;
  }

    insertAt(index, data) {
      let currentNode = this.head;
      let nextNode = currentNode.next;
      let addedNode = new Node(data);
      let position = 0;
      // protection clause:
      if (index > this.length || index < 0) return false;
      // insert to front if index = 0
      if (index === 0) return this.insertFirst(data);
      while (position < index) {
        currentNode = nextNode;
        position += 1;
      }
      currentNode.prev.next = addedNode;
      addedNode.prev = currentNode.prev;
      currentNode.prev = nextNode;
      nextNode.next = currentNode;
      this.length++;
    }

    insertFirst(data) {
      let newNode = new Node(data);
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }

  // removeAt()
}


module.exports = LinkedList;
