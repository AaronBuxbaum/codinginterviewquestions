/*
    Implement a method to perform basic string compression using the counts of repeated characters.
    For example, the string aabcccccaaa would become a2b1c5a3.
    If the "compressed" string would not become smaller than the original string, your method should return the original string.
    You can assume the string has only uppercase and lowercase letters (a - z).
 */

export const stringCompression = (input) => {
    const dumpValue = () => {
        if (count) {
            result += `${prev}${count}`;
        }
        count = 1;
    };

    let prev = '';
    let count = 0;
    let result = '';

    for(let i=0; i<input.length + 1; i++) {
        const curr = input.charAt(i);
        if (prev === curr) {
            count++;
        } else {
            dumpValue();
        }
        prev = curr;
    }

    result = getShortest(result, input);
    return result;
};

const getShortest = (compressed, uncompressed) => {
    return compressed.length < uncompressed.length ? compressed : uncompressed;
};

/*
    Analysis:

    Iterate over each "section" and append to the string. If we had a StringBuilder, that would help a lot here.
    String concatenation runs in O(N^2), and may require additional space. Ignoring that, we have O(N) time and O(N) space.

    If the extra space is a problem, we can make an initial run through the string and find the exact space length that
    we're going to need (ie. add 2 for each new character, add 1 for each subsequent same character; once complete,
    we can either directly return the original string (if it's too long) or set the StringBuffer to that size.
 */