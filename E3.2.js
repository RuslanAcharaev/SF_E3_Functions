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
