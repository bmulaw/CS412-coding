const splitStringByC = (str: String, cb: CallableFunction) => {
    cb(str.split("c"));
}

const adder = (left:number, right:number, cb:CallableFunction) => cb(left + right)
let result: number = adder(15, 6, (sum: number) => sum*2)
console.log(result)