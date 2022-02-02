// PS1.P3

// Got help from example here https://blog.logrocket.com/understanding-javascript-decorators/

// const splitStringByC = (str, callback) => {
//     let split = [];
//     let tempStr = "";
//     for (const char of str) {
//         tempStr += char;
//         if (char === 'c') {
//             split.push(tempStr);
//             tempStr = char
//         } 
//     }
//     tempStr? split.push(tempStr) : ""
//     return split;
// }

let word = 'supercalifragilisticexpialidocious'

const splitter = (str) => {
    // I know this is not a very declarative way, will fix soon.
    let split = [];
    let tempStr = "";
    for (const char of str) {
        tempStr += char;
        if (char === 'c') {
            tempStr = tempStr.slice(0, -1); 
            split.push(tempStr);
            tempStr = char
        } 
    }
    tempStr? split.push(tempStr) : ""
    return split;
}

const splitStringByC = (str, splitter) => {
    return (str) => {
        return splitter.call(this, str);
    }
}

const res = splitStringByC(word, splitter)
console.log(res(word))

