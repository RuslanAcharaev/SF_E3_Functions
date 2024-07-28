function outerFunction(inputNumber1){
    return function innerFunction(inputNumber2){
        return inputNumber1 + inputNumber2;
    }
}

const getSum = outerFunction(1)(2);
console.log(getSum);
