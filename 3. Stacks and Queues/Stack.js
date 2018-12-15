import { last } from 'lodash';

export class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.isEmpty() ? 99999999999999 : last(this.stack);
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    length() {
        return this.stack.length;
    }
}