/*
    Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
    "middle" is defined as: any node but the first and last node, not necessarily the exact middle.

    EXAMPLE
    Input: the node c from the linked list a -> b -> c -> d -> e -> f
    Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
 */

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