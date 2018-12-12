/*
    Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
    lf x is contained within the list, the values of x only need to be after the elements less than x (see below).
    The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

    EXAMPLE
    Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
    Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */

// We could create two new lists and then merge them together, or we could just swap components around.
// The former takes O(N) space; the latter takes an additional O(N) time.

export const partition = (list, partition) => {
    let partitionNode = list.head;
    while (partitionNode && partitionNode.next) {
        partitionNode = partitionNode.next;
    }
    let tail = partitionNode;

    let head = list.head;
    let prev;
    while (head && head.next && head !== partitionNode) {
        if (head.value >= partition) {
            tail.next = head;
            prev.next = head.next;
            tail = tail.next;
        }
        prev = head;
        head = head.next;
    }

    return list.head;
};