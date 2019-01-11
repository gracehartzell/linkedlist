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

  // insertAt()
  // removeAt()
}

module.exports = LinkedList;
