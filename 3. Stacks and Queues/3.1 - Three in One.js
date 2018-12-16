/*
    Describe how you could use a single array to implement three stacks.
 */

/*
    A lot of this depends on the discussion with the interviewer -- if we know how big the array will be,
    or if we can make such assumptions, we can just split up the array accordingly and then manage the
    split points in functions.

    If we need to have dynamic sizes, the problem gets a lot harder -- we now have to manage split points,
    but we also have to shift all elements over every time one of the arrays changes in size.
 */

export class TripleStack {
  constructor() {
    this.array = [];
    this.lengths = [0, 0, 0];
  }

  getLength(stackNumber) {
    return this.lengths[stackNumber - 1];
  }

  push(stackNumber, value) {
    let index = this.getLength(stackNumber) * 3 + stackNumber - 1;
    this.array[index] = value;
    this.lengths[stackNumber - 1]++;
  }

  pop(stackNumber) {
    let length = this.getLength(stackNumber);
    let value;
    if (length > 0) {
      const index = (length - 1) * 3 + stackNumber - 1;
      value = this.array[index];
      this.array[index] = undefined;
      this.lengths[stackNumber - 1]--;
    }
    return value;
  }

  peek(stackNumber) {
    let length = this.getLength(stackNumber);
    let value;
    if (length > 0) {
      const index = (length - 1) * 3 + stackNumber - 1;
      value = this.array[index];
    }
    return value;
  }
}
