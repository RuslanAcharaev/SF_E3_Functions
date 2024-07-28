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
