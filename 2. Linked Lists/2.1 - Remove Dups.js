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

// TODO: analysis


export const removeDupsNoBuffer = (list) => {

};

// TODO: analysis
