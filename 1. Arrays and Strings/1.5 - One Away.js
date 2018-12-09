const oneAway = (str1, str2) => {
    if (str1 === str2) {
        return true;
    }

    const maxLen = Math.max(str1.length, str2.length);
    const action = getAction(str1, str2);

    for (let i = 0; i < maxLen; i++) {

    }
};

const getAction = (str1, str2) => {
    if (str1.length === str2.length) {
        return 'replace'
    }
    if (str1.length < str2.length) {
        return 'add'
    }
    return 'delete'
}
