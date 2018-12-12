/*
    Write code to remove duplicates from an unsorted linked list.

    Follow Up: How would you solve this problem if a temporary buffer is not allowed?
 */

export const removeDups = (list) => {
    const seenValues = {};

    if (!list || !list.head) {
        return list;
    }

    let prev;
    let head = list.head;
    while(head) {
        const value = head.value;
        if (seenValues[value]) {
            prev.next = head.next;
        } else { // note: this needing an else tripped me up
            prev = head;
        }
        seenValues[value] = true;
        head = head.next;
    }
};

// we have to iterate over each element, and we store 2 references (the head and the previous).
// Therefore, we have O(N) time, where N is the number of elements in the list, and O(1) space.



export const removeDupsNoBuffer = (list) => {
    if (!list || !list.head) {
        return list;
    }

    let curr = list.head;
    while(curr) {
        let prev = curr;
        let head = curr.next;

        while(head) {
            if (head.value === curr.value) {
                prev.next = head.next;
            } else {
                prev = head;
            }
            head = head.next;
        }

        curr = curr.next;
    }
};

// for each element, we have to iterate over each element. Therefore, we have O(N^2) time and O(1) space.
