// Функция для генерации случайных чисел
function generateRandomNumbers(length) {
    const numbers = [];
    for (let i = 0; i < length; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return numbers;
}

// Функция для вычисления среднего значения массива
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}


const numbersArray = generateRandomNumbers(10000000);


const average = calculateAverage(numbersArray);


postMessage(average);