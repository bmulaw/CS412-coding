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
        default: console.error(left, oper, right);
    }
}

const testEvaluate = () => {   
    const testAdd = evaluate('8+2');
    const testSub = evaluate('8-2');
    const testMul = evaluate('8*2');
    const testDiv = evaluate('8/2');
    const testExp = evaluate('8^2');
    // test outputs
    return testAdd() === 10 && testSub() === 6 &&
           testMul() === 16 && testDiv() === 4 && 
           testExp() === 64;
}

console.log(testEvaluate())
