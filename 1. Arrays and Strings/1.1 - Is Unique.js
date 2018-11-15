/*
    Implement an algorithm to determine if a string has all unique characters.
*/

const isUnique = (string) => {
    const charactersSeen = {};

    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        if (charactersSeen[char]) {
            return false;
        }
        charactersSeen[char] = true;
    }

    return true;
}

console.log(isUnique('abca') === false);
console.log(isUnique('abc') === true);
console.log(isUnique('') === true);

// Analysis: O(N) time and O(N) space where N is the number of characters in the string




/* What if you cannot use additional data structures? */
const isUniqueWithoutStructures = (string) => {
    for (let i = 0; i < string.length; i++) {
        for (let j = 1; j < string.length; j++) {
            if (i === j) continue;
            if (string.charAt(i) === string.charAt(j)) return false;
        }
    }
    return true;
}

console.log(isUniqueWithoutStructures('abca') === false);
console.log(isUniqueWithoutStructures('abc') === true);
console.log(isUniqueWithoutStructures('') === true);

// Analysis: O(N^2) time and O(1) space where N is the number of characters in the string
