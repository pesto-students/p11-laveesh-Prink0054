// Calculator class
class Calculator {
    // add method
    add(num1, num2) {
        return num1 + num2;
    }

    // subtract method
    subtract(num1, num2) {
        return num1 - num2;
    }

    // multiply method
    multiply(num1, num2) {
        return num1 * num2;
    }

    // divide method
    divide(num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        }
        return "Cannot divide by zero";
    }
}

// ScientificCalculator class extending Calculator
class ScientificCalculator extends Calculator {
    // square method
    square(num) {
        return num * num;
    }

    // cube method
    cube(num) {
        return num * num * num;
    }

    // power method
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}

// Create an instance of ScientificCalculator
const calc = new ScientificCalculator();

// Using the "call" method to invoke the "add" method of Calculator class
const result1 = Calculator.prototype.add.call(calc, 10, 5);
console.log("Result of 'add' method using 'call':", result1);

// Using the "apply" method to invoke the "subtract" method of Calculator class
const result2 = Calculator.prototype.subtract.apply(calc, [10, 5]);
console.log("Result of 'subtract' method using 'apply':", result2);

// Using the "bind" method to create a new method named "multiplyByTwo"
const multiplyByTwo = calc.multiply.bind(calc, 2);
console.log("Result of 'multiplyByTwo' method:", multiplyByTwo(5));

// Using the "bind" method to create a new method named "powerOfThree"
const powerOfThree = calc.power.bind(calc, 3);
console.log("Result of 'powerOfThree' method:", powerOfThree(2));
