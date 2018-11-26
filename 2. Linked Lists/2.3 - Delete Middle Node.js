const list = new LinkedList();

const deleteNode = (value) => {
    let head = list.head;
    while (head.next) {
        if (head.next.value === value) {
            head.next = head.next.next;
            return;
        }
        head = head.next;
    }
}