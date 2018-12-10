import { zeroMatrix } from "../1.8 - Zero Matrix";

test('Zero Matrix', () => {
    expect(zeroMatrix([[1, 2, 3], [4, 0, 6], [7, 8, 9]])).toEqual([[1, 0, 3], [0, 0, 0], [7, 0, 9]]);
    expect(zeroMatrix([[1, 2, 0], [4, 5, 6], [7, 8, 9]])).toEqual([[0, 0, 0], [4, 5, 0], [7, 8, 0]]);
    expect(zeroMatrix(null)).toEqual([[]]);
    expect(zeroMatrix([])).toEqual([[]]);
    expect(zeroMatrix([[]])).toEqual([[]]);
});