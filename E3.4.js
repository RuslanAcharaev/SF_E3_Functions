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
