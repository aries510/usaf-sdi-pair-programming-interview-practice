class Calculator {
  constructor() {
    this.state = 0
  };

  getCurrentState() {
    return this.state
  };

  addInputs(...nums) {
    const sum = nums.reduce((result, currentValue) => result + currentValue);
    this.state = sum;
    return sum
  };

  multiplyInputs(...nums) {
    const initialValue = 1
    const product = nums.reduce((result, currentValue) => result * currentValue, initialValue)
    this.state = product;
    return product
  };

  divideInputs(...nums) {
    const quotient = nums.reduce((result, currentValue) => result / currentValue);
    this.state = quotient;
    return quotient
  };

  subtractInputs(...nums) {
    const difference = nums.reduce((result, currentValue) => result - currentValue);
    this.state = difference;
    return difference
  };

  toPower(...nums) {
    const power = nums.reduce((result, currentValue) => result ** currentValue);
    this.state = power;
    return power
  };

  squareRoot(num) {
    let result = Math.sqrt(num);
    if(!Number.isInteger(result)) {
      this.state = Number(result.toFixed(2))
      return Number(result.toFixed(2))
    };
    this.state = result;
    return result
  };

  clearCurrentStatus() {
    this.state = 0;
    return true
  };

  negPosReversal(num) {
    return num * -1
  };
}

module.exports = Calculator