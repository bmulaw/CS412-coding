// PS1.P1
const reverseAlphabeticalOrder = (str: String): String => {
    return str.split("").sort().reverse().join("")
}

const testReverseAlphabeticalOrder = ():boolean => {
    return 'xuutsssrrppoollliiiiiiigfeedcccaaa' === reverseAlphabeticalOrder("supercalifragilisticexpialidocious")
}

testReverseAlphabeticalOrder()