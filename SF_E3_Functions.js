// E3.2.

function numCounter(array){
    let zeroCounter = 0;
    let evenCounter = 0;
    let oddCounter = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            if (array[i] === 0) {
                zeroCounter++;
            } else if (array[i] % 2 === 0) {
                evenCounter++;
            } else {
                oddCounter++;
            }
        }
    }

    console.log('Четных чисел в массиве: ', evenCounter);
    console.log('Нечетных чисел в массиве: ', oddCounter);
    if (zeroCounter > 0) {
        console.log('Количество нулевых элементов в массиве: ', zeroCounter);
    }

}

const sampleArray = [1, 2, 3, 4, 5, null, '0', NaN, 7, 8];

numCounter(sampleArray);

// -------------------------------------------------------------------------------

// E3.4.

function isSimpleNumber(num) {
    if ((num === 0) || (num === 1)) {
        return 'Введенное число не является простым';
    } else if (num >= 1000) {
        return 'Введенные данные не верны';
    }

    let counter = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            counter++;
        }
    }

    if (counter === 2) {
        return 'Введенное число является простым';
    } else {
        return 'Введенное число не является простым';
    }
}

let inputNumber = Number(prompt());

console.log(isSimpleNumber(inputNumber));

// -------------------------------------------------------------------------------

// E3.5.

function outerFunction(inputNumber1){
    return function innerFunction(inputNumber2){
        return inputNumber1 + inputNumber2;
    }
}

const getSum = outerFunction(1)(2);
console.log(getSum);

// -------------------------------------------------------------------------------

// E3.7.

function logNumbers(first, second){
    let number = first;
    const intervalId = setInterval(function () {
        console.log(number);
        if (number === second){
        clearInterval(intervalId);
        }
        number++;
    }, 1000);
}

logNumbers(1, 10);

// -------------------------------------------------------------------------------

//E3.8.

const exponent = (x, n) => {
    return x ** n;
}

console.log(exponent(5, 2));
