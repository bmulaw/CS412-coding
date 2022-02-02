// PS1.P1
const reverseAlphabeticalOrder = (str) => {
    return str.split("").sort().reverse().join("");
}

const testReverseAlphabeticalOrder = () => {
    return 'xuutsssrrppoollliiiiiiigfeedcccaaa' === reverseAlphabeticalOrder("supercalifragilisticexpialidocious");
}

console.log(testReverseAlphabeticalOrder());