/*
    Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
    Can you do this in place?
*/


// assumption: 90 degrees is counterclockwise
export const rotateMatrix = (matrix) => {
    const newMatrix = [new Array(matrix.length), new Array(matrix.length), new Array(matrix.length)];

    for (let i = 0; i < matrix.length; i++) {
        const columnIndex = matrix.length - i - 1;

        for (let j = 0; j < matrix.length; j++) {
            newMatrix[j][columnIndex] = matrix[i][j];
        }
    }

    return newMatrix;
};
