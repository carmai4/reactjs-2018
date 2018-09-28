import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne || "0");
    const two = Big(numberTwo || "0");
    if (operation === "+") {
        // console.log('plus');
        return one.plus(two).toString();
    }
    if (operation === "-") {
        // console.log('minus');
        return one.minus(two).toString();
    }
    if (operation === "x") {
        // console.log('times');
        return one.times(two).toString();
    }
    if (operation === "÷") {
        // console.log('divided by');
        if (+two.toString() === 0) {
            console.log('cannot divide by zero');
            return NaN;

        } else {
            return one.div(two).toString();

        }
    }
    throw Error(`Unknown operation '${operation}'`);
}