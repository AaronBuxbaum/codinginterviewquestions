/*
    Assume you have a method isSubstring which checks if one word is a substring of another.
    Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
    (e.g., "waterbottle" is a rotation of "erbottlewat").
 */

const isSubstring = (string1, string2) =>
    string1.indexOf(string2) >= 0;

export const isRotation = (string1, string2) => {
    if(string1.length !== string2.length) {
        return false;
    }

    if(string1.length === 0 || string1 === string2) {
        return true;
    }

    const checkString = string1 + string1;
    return isSubstring(checkString, string2);
};

/*
    Analysis:

    note that you can always find a rotated string within a duplicated string
    for example, 'erbottlewat' becomes 'erbottlewaterbottlewat', which must
    have the original string inside it

    Because of this, the complexity is effectively the same as isSubstring
    isSubstring can be calculated with Ukkonen's algorithm in O(A + B),
    where A and B are the length of each string
    Therefore, we have time complexity O(2N) = O(N) and space O(1)
    where N is length of max(A, B)

    Reference:
    Ukkonen's algorithm: https://en.wikipedia.org/wiki/Ukkonen%27s_algorithm
*/