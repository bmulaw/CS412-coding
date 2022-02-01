let right: number;
let left: number;
let oper: string;

const parseExpression = (expression: string):void => {
    left = Number(expression[0]);
    oper = expression[1];
    right = Number(expression[2]);
}

const evaluate = (expression: string): Number => {
    parseExpression(expression);
    switch(oper) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return left / right;
        case '^': return left ** right;
    }
    console.error(left, oper, right);
    return;
}

const testEvaluate = (): boolean => {
    const testAdd: boolean = evaluate('8+2') === 10;
    const testSub: boolean = evaluate('8-2') === 6;
    const testMul: boolean = evaluate('8*2') === 16;
    const testDiv: boolean = evaluate('8/2') === 4;
    const testExp: boolean = evaluate('8^2') === 64;

    return testAdd && testSub && testMul && testDiv && testExp
}

testEvaluate()