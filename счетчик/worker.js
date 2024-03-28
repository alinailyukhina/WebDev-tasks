function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function generateRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(getRandomNumber());
    }
    return numbers;
}

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

const numbers = generateRandomNumbers(10000000);

const average = calculateAverage(numbers);

document.getElementById("average").textContent = 'Вот среднее значение: ' + average;
