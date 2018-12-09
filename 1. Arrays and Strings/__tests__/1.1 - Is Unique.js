import { isUnique, isUniqueWithoutStructures } from "../1.1 - Is Unique";

test('isUnique', () => {
    expect(isUnique('abca')).toEqual(false);
    expect(isUnique('abc')).toEqual(true);
    expect(isUnique('')).toEqual(true);
});

test('isUniqueWithoutStructures', () => {
    expect(isUniqueWithoutStructures('abca')).toEqual(false);
    expect(isUniqueWithoutStructures('abc')).toEqual(true);
    expect(isUniqueWithoutStructures('')).toEqual(true);
});