/*
    Given two strings, write a method to decide if one is a permutation of the other.
*/

const buildCharMap = (string) => {
    const words = {};
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        if (!words[char]) words[char] = 0;
        words[char]++;
    }
    return words;
};

export const checkPermutation = (str1, str2) => {
    if (!str1.length && !str2.length) {
        return true;
    }

    if (str1.length !== str2.length) {
        return false;
    }

    const subsetCharMap = buildCharMap(str1);
    for (let i = 0; i < str2.length; i++) {
        const char = str2.charAt(i);
        subsetCharMap[char]--;
    }

    return !Object.values(subsetCharMap).some((value) => value > 0);
};

/*
    Analysis:
      - Time: O(N) to build the character map + O(N) to tick down the character map + O(N) to find values = O(3N) = O(N)
      - Space: O(N) for the character map
    Where N is the number of characters in the larger string
*/





// NOTE: in this exercise, I previously misinterpreted "permutation". I saved my old approach here for good measure.

const checkPermutationWoops = (str1, str2) => {
    if (!str1.length || !str2.length) {
        return true;
    }

    if (str1.length === str2.length) {
        return str1 === str2;
    }

    const subset = (str1.length < str2.length) ? str1 : str2;
    const superset = (str1.length > str2.length) ? str1 : str2;
    const firstChar = subset.charAt(0);

    const possibleFirstIndices = [];
    for (let i = 0; i < superset.length; i++) {
        if (superset.charAt(i) === firstChar) {
            possibleFirstIndices.push(i);
        }
    }

    for (let i = 0; i < possibleFirstIndices.length; i++) {
        const firstIndex = possibleFirstIndices[i];
        const testValue = superset.slice(firstIndex, firstIndex + subset.length);
        if (testValue === subset) return true;
    }

    return false;
};

// Analysis: O(N) + O(N) = O(N) time, O(N) space, where N is the number of characters in the larger string of the two
