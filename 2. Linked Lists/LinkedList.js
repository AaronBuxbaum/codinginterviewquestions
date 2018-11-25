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

    delete(value) {
        let head = this.head;
        while (head.next) {
            if (head.next.value === value) {
                head.next = head.next.next;
                return;
            }
            head = head.next;
        }
    }
}