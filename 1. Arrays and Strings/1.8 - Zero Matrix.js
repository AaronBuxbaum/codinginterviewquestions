/*
    Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.
*/

export const zeroMatrix = (matrix) => {
    const buildIndices = () => {
        for(let i=0; i<matrix.length; i++) {
            for(let j=0; j<matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    rowsToZero.push(i);
                    columnsToZero.push(j);
                }
            }
        }
    };

    const zeroOutRows = () => {
        const columnLen = matrix[0].length;
        rowsToZero.forEach((row) => {
            for(let j=0; j<columnLen; j++) {
                matrix[row][j] = 0;
            }
        });
    };

    const zeroOutColumns = () => {
        const rowLen = matrix.length;
        columnsToZero.forEach((column) => {
            for(let i=0; i<rowLen; i++) {
                matrix[i][column] = 0;
            }
        });
    };

    if(!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [[]];
    }

    const rowsToZero = [];
    const columnsToZero = [];

    buildIndices();
    zeroOutRows();
    zeroOutColumns();

    return matrix;
};

/*
    Analysis:

    My first thought is to iterate through cells and set column and row to 0,
    but this won't work because you'll end up nullifying the entire matrix.
    Instead, you need a mask which will be applied later.

    We can optimize the space of this solution (O(N * M)) -- we don't actually
    store any information except column and row numbers, so we can just store
    those indices themselves in an array, for space O(N + M).
 */