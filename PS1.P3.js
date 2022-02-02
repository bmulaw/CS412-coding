// PS1.P3

// Got help from example here:
// https://blog.logrocket.com/understanding-javascript-decorators/

let word = 'supercalifragilisticexpialidocious'

const splitter = (str) => {
    // I know this is not a very declarative way, will fix soon.
    let split = [];
    let tempStr = "";
    const endIndex = str.length - 1;

    for (let i = 0; i < endIndex; i++) {
        tempStr += str[i]
        if (str[i+1] === 'c') {
            split.push(tempStr)
            tempStr = ""
            if (i+1 === endIndex) tempStr += str[i+1]
        }
    }
    tempStr ? split.push(tempStr) : "";
    return split;
}

const splitStringByC = (str, splitter) => {
    return (str) => {
        return splitter.call(this, str);
    }
}

const res = splitStringByC(word, splitter)
console.log(res(word))
