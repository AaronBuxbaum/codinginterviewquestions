const buildCharMap = (string) => {
    const words = {};
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        if (!words[char]) words[char] = 0;
        words[char]++;
    }
    return words;
};

export const palindromePermutation = (string) => {
    const words = buildCharMap(string);
    const counts = Object.values(words);
    const oddCounts = counts.filter((count) => count % 2 === 0);
    return oddCounts.length > 1;
};

// Analysis: O(N) time and O(N) space, where N is the number of characters in the larger string
