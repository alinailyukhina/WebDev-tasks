// Функция для генерации случайных чисел от 1 до 100
function generateRandomNumbers(length) {
    const numbers = [];
    for (let i = 0; i < length; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1); // Генерируем числа от 1 до 100
    }
    return numbers;
}

// Функция для вычисления среднего значения массива
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}


const numbersArray = generateRandomNumbers(10000000); // Генерируем 10 миллионов случайных чисел


const average = calculateAverage(numbersArray);


postMessage(average);