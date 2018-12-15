/*
    Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
    Can you do this in place?
*/

// assumption: 90 degrees is clockwise
// We're effectively just going to swap each side with each other, from the outside in
// This just gets a little more complicated because we have to make sure that we don't double-swap
// ie. if we iterate through the entire matrix, we'll flip the matrix 180 degrees instead of 90

export const rotateMatrix = matrix => {
  for (let x = 0; x < matrix.length / 2; x++) {
    for (let y = x; y < matrix.length - x - 1; y++) {
      const temp = matrix[x][y];

      // right -> top
      matrix[x][y] = matrix[y][matrix.length - 1 - x];

      // bottom -> right
      matrix[y][matrix.length - 1 - x] =
        matrix[matrix.length - 1 - x][matrix.length - 1 - y];

      // left -> bottom
      matrix[matrix.length - 1 - x][matrix.length - 1 - y] =
        matrix[matrix.length - 1 - y][x];

      // temp -> left
      matrix[matrix.length - 1 - y][x] = temp;
    }
  }
};

/*
    Since we don't store anything, we have space O(1).
    Since we also need to iterate over each element, time is O(N^2), where N is the number of rows or columns (since #rows === #columns)
 */
