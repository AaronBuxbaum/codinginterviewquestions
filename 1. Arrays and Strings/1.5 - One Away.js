/*
    There are three types of edits that can be performed on strings:
        1. insert a character
        2. remove a character
        3. replace a character
    Given two strings, write a function to check if they are one edit (or zero edits) away.
 */

export const oneAway = (str1, str2) => {
    if (str1 === str2) {
        return true;
    }

    if(Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    const maxLen = Math.max(str1.length, str2.length);
    const action = getAction(str1, str2);

    for (let i = 0; i < maxLen; i++) {
        if(str1.charAt(i) !== str2.charAt(i)) {
            str1 = action(str1, str2, i);
            break;
        }
    }

    return str1 === str2;
};

const replaceAction = (str1, str2, i) => {
    const arr = Array.from(str1);
    arr.splice(i, 1, str2.charAt(i));
    return arr.join('');
};

const addAction = (str1, str2, i) => {
    const arr = Array.from(str1);
    arr.splice(i, 0, str2.charAt(i));
    return arr.join('');
};

const deleteAction = (str1, str2, i) => {
    const arr = Array.from(str1);
    arr.splice(i, 1);
    return arr.join('');
};

const getAction = (str1, str2) => {
    if (str1.length === str2.length) {
        return replaceAction;
    }
    if (str1.length < str2.length) {
        return addAction;
    }
    return deleteAction;
};


/*
    Analysis:

    We know which function to use based on the length of the strings when we start out.
    It's arguable if we should combine the "action" functions, but I found that ugly to read.

    This algorithm uses O(N) space to hold the temporary value in memory.
    Since we iterate over each element, we use O(N) time.

    For both metrics, N represents the length of the _shorter_ string + 1.
    This is because if the strings are more than 1 element away, we complete in O(1) time, therefore we have O(N).

    TODO: we can also solve this with O(1) space by having the action functions only change pointers around.
 */