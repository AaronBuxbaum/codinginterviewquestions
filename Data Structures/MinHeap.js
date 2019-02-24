export class MinHeap {
  values = [];

  // Note the following properties
  //   - left child: 2*index + 1
  //   - right child: 2*index + 2
  add(value) {
    this.values.push(value);

    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (this.values[currentIndex] < this.values[parentIndex]) {
      const temp = this.values[currentIndex];
      this.values[currentIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  getSorted() {
    const results = [];

    while (this.values.length) {
      results.push(this.pop());
    }

    return results;
  }

  pop() {
    const getComparator = (left, right) => {
      if (!this.values[left]) {
        return right;
      }
      if (!this.values[right]) {
        return left;
      }

      return this.values[left] < this.values[right] ? left : right;
    };

    const returnValue = this.values[0];

    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    // bubble down
    let currentIndex = 0;
    let left = 2 * currentIndex + 1;
    let right = 2 * currentIndex + 2;
    let comparator = getComparator(left, right);

    while (this.values[comparator] < this.values[currentIndex]) {
      const temp = this.values[currentIndex];
      this.values[currentIndex] = this.values[comparator];
      this.values[comparator] = temp;

      currentIndex = comparator;
      left = 2 * currentIndex + 1;
      right = 2 * currentIndex + 2;
      comparator = getComparator(left, right);
    }

    return returnValue;
  }

  peek() {
    return this.values[0];
  }
}
