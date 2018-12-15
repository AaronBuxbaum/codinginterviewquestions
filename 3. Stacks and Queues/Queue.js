import { last } from 'lodash';

export class Queue {
    constructor() {
        this.array = [];
    }

    enqueue(value) {
        this.array.unshift(value);
    }

    dequeue() {
        return this.array.pop();
    }

    peek() {
        return last(this.array);
    }

    isEmpty() {
        return this.array.length === 0;
    }
}