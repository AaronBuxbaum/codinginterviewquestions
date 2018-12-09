import { palindromePermutation } from "../1.4 - Palindrome Permutation";

test('Palindrome Permutation', () => {
    expect(palindromePermutation('tact coa')).toEqual(true);
    expect(palindromePermutation('tact ccoa')).toEqual(true);
    expect(palindromePermutation('tactccoaa')).toEqual(false);
});