// PS1.P2
let oper; 
let left;
let right;

const parseExpression = (expression) => {
    left = Number(expression[0]);
    oper = expression[1];
    right = Number(expression[2]);
}

const evaluate = (expression) => {
    parseExpression(expression);

    switch(oper) {
        case '+': {return add = () =>  {return left + right}};
        case '-': {return sub = () =>  {return left - right}};
        case '*': {return mul = () =>  {return left * right}};
        case '/': {return div = () =>  {return left / right}};
        case '^': {return exp = () =>  {return left ** right}};
        default: throw new Error('Please only use +,-,/,*, or ^ and limit numbers from 0-9');
    }
}

const testEvaluate = () => {   
    const testAdd = evaluate('8+2');
    const testSub = evaluate('8-2');
    const testMul = evaluate('8*2');
    const testDiv = evaluate('8/2');
    const testExp = evaluate('8^2');
    // const testFailure = evaluate('8%2');
    // test outputs
    console.log(`
                 8+2 = ${testAdd()}, 
                 8-2 = ${testSub()}, 
                 8*2 = ${testMul()}, 
                 8/2 = ${testDiv()}, 
                 8^2 = ${testExp()},
                 `)
    return testAdd() === 10 && testSub() === 6 &&
           testMul() === 16 && testDiv() === 4 && 
           testExp() === 64;
}

console.log(testEvaluate())
