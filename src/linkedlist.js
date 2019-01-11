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

  // get()
  indexOf()
  
  // insertAt()
  // removeAt()
}

module.exports = LinkedList;
