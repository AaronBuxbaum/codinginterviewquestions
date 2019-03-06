export const bubbleSort = array => {
  const result = [...array];

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        const tmp = result[i];
        result[i] = result[j];
        result[j] = tmp;
      }
    }
  }

  return result;
};

export const selectionSort = array => {
  const result = [...array];

  for (let i = 0; i < result.length; i++) {
    let min = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[min]) {
        min = j;
      }
    }

    const tmp = result[i];
    result[i] = result[min];
    result[min] = tmp;
  }

  return result;
};

export const mergeSort = array => {};

const partition = (array, left, right) => {
  const pivot = Math.floor((left + right) / 2);

  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      const tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;

      left++;
      right--;
    }
  }

  return left;
};

export const quickSort = (array, left = 0, right = array.length - 1) => {
  const index = partition(array, left, right);
  if (left < index - 1) {
    quickSort(array, left, index - 1);
  }
  if (index < right) {
    quickSort(array, index, right);
  }
  return array;
};

export const radixSort = (array, numBins = 3) => {
  const getPosition = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  let result = [...array];

  for (let i = 0; i < numBins; i++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < array.length; j++) {
      const bucketIndex = getPosition(result[j], i);
      buckets[bucketIndex].push(result[j]);
    }

    result = [].concat(...buckets);
  }

  return result;
};
