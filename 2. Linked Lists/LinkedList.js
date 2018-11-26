class Node {
    constructor(value) {
        this.value = value;
    }
}

class LinkedList {
    head;

    append(value) {
        let head = this.head;
        while (head.next) {
            head = head.next;
        }
        head.next = new Node(value);
    }
}