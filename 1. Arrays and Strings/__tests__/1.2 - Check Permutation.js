import { checkPermutation } from '../1.2 - Check Permutation';

test('Check Permutation', () => {
    expect(checkPermutation('aaaa', 'aaaa')).toEqual(true);
    expect(checkPermutation('abba', 'baba')).toEqual(true);
    expect(checkPermutation('aaaa', 'aba')).toEqual(false);
    expect(checkPermutation('aaaa', 'aab')).toEqual(false);
    expect(checkPermutation('aaaa', '')).toEqual(false);
});
