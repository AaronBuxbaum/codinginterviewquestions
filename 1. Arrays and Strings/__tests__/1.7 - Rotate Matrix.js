import { rotateMatrix, rotateMatrixInPlace } from "../1.7 - Rotate Matrix";

test('Rotate Matrix', () => {
    const original = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const rotated = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    expect(rotateMatrix(original)).toEqual(rotated);
});

test('Rotate Matrix - In Place', () => {
    const original = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const rotated = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    expect(rotateMatrixInPlace(original)).toEqual(rotated);
});