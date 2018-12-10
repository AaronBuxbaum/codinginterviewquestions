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

    for(let i=0; i<input.length; i++) {
        const curr = input.charAt(i);
        if (prev === curr) {
            count++;
        } else {
            dumpValue();
        }
        prev = curr;
    }

    dumpValue();
    result = getShortest(result, input);

    return result;
};

const getShortest = (compressed, uncompressed) => {
    return compressed.length < uncompressed.length ? compressed : uncompressed;
};

// TODO: analysis