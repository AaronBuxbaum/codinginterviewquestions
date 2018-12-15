/*
    Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life,
    we would likely start a new stack when the previous stack exceeds some threshold.
    Implement a data structure SetOfStacks that mimics this.

    SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
    SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack.
    That is, pop() should return the same values as it would if there were just a single stack.

    FOLLOW UP
    Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.
 */

/*
    There's a lot of trade-offs we can make here.
    For example, if we can take O(K) time on push, where K is the number of stacks, we can iterate over each
    stack until we see a free one.
 */

import { last } from 'lodash';
import { Stack } from './Stack';

export class SetOfStacks {
    constructor(limit = 3) {
        this.limit = limit;
        this.stacks = [new Stack()];
        this.currStack = this.stacks[0];
    }

    push(value) {
        if (this.currStack.length() >= this.limit) {
            this.stacks.push(new Stack());
            this.currStack = last(this.stacks);
        }
        this.currStack.push(value);
    }

    pop() {
        this.currStack.pop();
        if (this.currStack.isEmpty()) {
            this.stacks.pop();
            this.currStack = last(this.stacks);
        }
    }
}