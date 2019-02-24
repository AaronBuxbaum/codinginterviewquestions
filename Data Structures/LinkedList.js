export class Node {
  constructor(value) {
    this.value = value;
  }
}

export class LinkedList {
  append(value) {
    let head = this.head;

    if (!head) {
      this.head = new Node(value);
    } else {
      while (head.next) {
        head = head.next;
      }
      head.next = new Node(value);
    }
  }

  toString() {
    let arr = [];
    let head = this.head;
    while (head && head.next) {
      arr.push(head.value);
      head = head.next;
    }
    return arr;
  }
}

// this is just for the sake of easier testing
export const buildList = arr => {
  const list = new LinkedList();
  arr.forEach(item => {
    list.append(item);
  });
  return list;
};
