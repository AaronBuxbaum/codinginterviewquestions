/*
    How would you design a stack which, in addition to `push` and `pop`, has a function `min` which returns the minimum element?
    Push, pop and min should all operate in 0(1) time.
 */

import { Stack } from "./Stack";

export class StackMin {
    constructor() {
        this.stack = new Stack();
        this.minValues = new Stack();
    }

    push(value) {
        this.stack.push(value);
        if(this.minValues.isEmpty() || (value <= this.min())) {
            this.minValues.push(value);
        }
        console.log(this.minValues);
    }

    min() {
        return this.minValues.peek();
    }

    pop() {
        console.log(this.minValues);
        const returnValue = this.stack.pop();
        if(returnValue === this.min()) {
            this.minValues.pop();
        }
        return returnValue;
    }
}

// This solution creates a data structure which is made from two stacks which update in parallel.
// We don't need to store O(N) items; we only need O(K), where K is the number of unique numbers in the stack
// We can do this because we know if we have multile